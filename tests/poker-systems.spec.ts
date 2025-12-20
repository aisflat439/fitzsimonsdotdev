import { test, expect } from "@playwright/test";

test("Systems poker simulation tester", async ({ page }) => {
  await page.goto("/poker-systems");
  await expect(
    page.getByRole("heading", { name: "Poker Monte Carlo Simulation" }),
  ).toBeVisible();
});

test("suit selectors are icon buttons with SVGs", async ({ page }) => {
  await page.goto("/poker-systems");

  // Check that suit SVG icons are visible in the first hero card
  await expect(
    page.locator('[data-testid="suit-icon-spades"]').first(),
  ).toBeVisible();
  await expect(
    page.locator('[data-testid="suit-icon-hearts"]').first(),
  ).toBeVisible();
  await expect(
    page.locator('[data-testid="suit-icon-diamonds"]').first(),
  ).toBeVisible();
  await expect(
    page.locator('[data-testid="suit-icon-clubs"]').first(),
  ).toBeVisible();
});

test("selected cards are removed from other selectors", async ({ page }) => {
  await page.goto("/poker-systems");

  // Select Ah for hero card 1
  await page.locator('[data-testid="heroCard1-rank"]').selectOption("A");
  await page.waitForTimeout(100); // Wait for state to update
  await page.locator('[data-testid="heroCard1-suit-hearts"]').click();

  // Check that A♥ is no longer available in hero card 2 rank dropdown
  const heroCard2Rank = page.locator('[data-testid="heroCard2-rank"]');
  const options = await heroCard2Rank.locator("option").allTextContents();

  // A should still be in the dropdown, but when we select A and try to select hearts, it should be disabled
  await heroCard2Rank.selectOption("A");

  // The hearts button for hero card 2 should be disabled
  await expect(
    page.locator('[data-testid="heroCard2-suit-hearts"]'),
  ).toBeDisabled();
});

test("there should be seven suit selector sections", async ({ page }) => {
  await page.goto("/poker-systems");

  // Wait for page to load
  await page.waitForSelector('[data-testid="suit-icon-spades"]');

  // Count all suit icon groups (each card should have 4 suit icons)
  const spadeIcons = await page
    .locator('svg[data-testid="suit-icon-spades"]')
    .count();
  const heartIcons = await page
    .locator('svg[data-testid="suit-icon-hearts"]')
    .count();
  const diamondIcons = await page
    .locator('svg[data-testid="suit-icon-diamonds"]')
    .count();
  const clubIcons = await page
    .locator('svg[data-testid="suit-icon-clubs"]')
    .count();

  // Each should appear 7 times (2 hero cards + 3 flop cards + 1 turn + 1 river)
  expect(spadeIcons).toBe(7);
  expect(heartIcons).toBe(7);
  expect(diamondIcons).toBe(7);
  expect(clubIcons).toBe(7);
});

test("no suit is preselected when you select a rank", async ({ page }) => {
  await page.goto("/poker-systems");

  // Select a rank for hero card 1
  await page.locator('[data-testid="heroCard1-rank"]').selectOption("A");

  // Check that no suit button has the selected styling
  const spadeButton = page.locator('[data-testid="heroCard1-suit-spades"]');
  const heartButton = page.locator('[data-testid="heroCard1-suit-hearts"]');
  const diamondButton = page.locator('[data-testid="heroCard1-suit-diamonds"]');
  const clubButton = page.locator('[data-testid="heroCard1-suit-clubs"]');

  // None should have the selected class
  await expect(spadeButton).not.toHaveClass(/scale-110/);
  await expect(heartButton).not.toHaveClass(/scale-110/);
  await expect(diamondButton).not.toHaveClass(/scale-110/);
  await expect(clubButton).not.toHaveClass(/scale-110/);
});

test("position selector defaults and villain exclusions", async ({ page }) => {
  await page.goto("/poker-systems");

  const playersSelect = page.locator('[data-testid="player-count"]');
  const positionSelect = page.locator('[data-testid="hero-position"]');
  const villainSelect = page.locator('[data-testid="villain-position"]');

  // Verify 9-handed defaults
  await expect(playersSelect).toHaveValue("9");
  await expect(positionSelect).toHaveValue("UTG");
  await expect(villainSelect).toHaveValue("BB");

  // Verify UTG is not available as villain option
  const villainOptions = await villainSelect
    .locator("option")
    .allTextContents();
  expect(villainOptions).not.toContain("UTG");
  expect(villainOptions).toContain("BB");

  // Test all 9-max positions
  const positions9Max = [
    "UTG",
    "UTG+1",
    "MP",
    "MP+1",
    "LJ",
    "HJ",
    "CO",
    "BTN",
    "SB",
    "BB",
  ];

  for (const position of positions9Max) {
    await positionSelect.selectOption(position);
    await page.waitForTimeout(50); // Wait for state update

    const currentVillainOptions = await villainSelect
      .locator("option")
      .allTextContents();

    // Verify hero position is not in villain options
    expect(currentVillainOptions).not.toContain(position);

    // Verify all other positions are available
    const otherPositions = positions9Max.filter((p) => p !== position);
    for (const otherPos of otherPositions) {
      expect(currentVillainOptions).toContain(otherPos);
    }
  }

  // Switch to 6-max and verify
  await playersSelect.selectOption("6");
  await page.waitForTimeout(50);

  // Verify only 6-max positions available
  const position6MaxOptions = await positionSelect
    .locator("option")
    .allTextContents();
  expect(position6MaxOptions).toEqual(["UTG", "MP", "CO", "BTN", "SB", "BB"]);

  // Select UTG for 6-max
  await positionSelect.selectOption("UTG");
  await page.waitForTimeout(50);

  // Verify villain cannot be UTG
  const villain6MaxOptions = await villainSelect
    .locator("option")
    .allTextContents();
  expect(villain6MaxOptions).not.toContain("UTG");
  expect(villain6MaxOptions.length).toBe(5);
});

test("player count should support 2-10 handed", async ({ page }) => {
  await page.goto("/poker-systems");

  const playersSelect = page.locator('[data-testid="player-count"]');

  // Get all available player count options
  const playerCountOptions = await playersSelect
    .locator("option")
    .allTextContents();

  // Should have options for 2 through 10 players
  expect(playerCountOptions).toEqual([
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);
});

test("positions should match player count", async ({ page }) => {
  await page.goto("/poker-systems");

  const playersSelect = page.locator('[data-testid="player-count"]');
  const positionSelect = page.locator('[data-testid="hero-position"]');

  // Define expected positions for each player count
  const expectedPositions = {
    2: ["BTN", "BB"],
    3: ["BTN", "SB", "BB"],
    4: ["BTN", "SB", "BB", "CO"],
    5: ["BTN", "SB", "BB", "CO", "MP"],
    6: ["UTG", "MP", "CO", "BTN", "SB", "BB"],
    7: ["UTG", "MP", "CO", "HJ", "BTN", "SB", "BB"],
    8: ["UTG", "MP", "CO", "HJ", "LJ", "BTN", "SB", "BB"],
    9: ["UTG", "UTG+1", "MP", "MP+1", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
    10: [
      "UTG",
      "UTG+1",
      "UTG+2",
      "MP",
      "MP+1",
      "LJ",
      "HJ",
      "CO",
      "BTN",
      "SB",
      "BB",
    ],
  };

  // Test each player count
  for (const [count, positions] of Object.entries(expectedPositions)) {
    await playersSelect.selectOption(count);
    await page.waitForTimeout(50);

    const availablePositions = await positionSelect
      .locator("option")
      .allTextContents();

    expect(availablePositions).toEqual(positions);
  }
});

test("default player count should be 9 with correct positions", async ({
  page,
}) => {
  await page.goto("/poker-systems");

  const playersSelect = page.locator('[data-testid="player-count"]');
  const positionSelect = page.locator('[data-testid="hero-position"]');

  // Check default player count is 9
  const defaultPlayerCount = await playersSelect.inputValue();
  expect(defaultPlayerCount).toBe("9");

  // Check positions match 9-handed (should be exactly 9 positions)
  const expectedPositions = [
    "UTG",
    "UTG+1",
    "MP",
    "LJ",
    "HJ",
    "CO",
    "BTN",
    "SB",
    "BB",
  ];

  const availablePositions = await positionSelect
    .locator("option")
    .allTextContents();

  expect(availablePositions).toEqual(expectedPositions);
});
