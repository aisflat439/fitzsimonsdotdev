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
