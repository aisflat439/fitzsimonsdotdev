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
    page.locator('[data-testid="suit-icon-♠"]').first(),
  ).toBeVisible();
  await expect(
    page.locator('[data-testid="suit-icon-♥"]').first(),
  ).toBeVisible();
  await expect(
    page.locator('[data-testid="suit-icon-♦"]').first(),
  ).toBeVisible();
  await expect(
    page.locator('[data-testid="suit-icon-♣"]').first(),
  ).toBeVisible();
});

test("selected cards are removed from other selectors", async ({ page }) => {
  await page.goto("/poker-systems");

  // Select Ah for hero card 1
  await page.locator('[data-testid="hero-card-1-rank"]').selectOption("A");
  await page.locator('[data-testid="hero-card-1-suit-♥"]').click();

  // Check that A♥ is no longer available in hero card 2 rank dropdown
  const heroCard2Rank = page.locator('[data-testid="hero-card-2-rank"]');
  const options = await heroCard2Rank.locator("option").allTextContents();

  // A should still be in the dropdown, but when we select A and try to select ♥, it should be disabled
  await heroCard2Rank.selectOption("A");

  // The ♥ button for hero card 2 should be disabled
  await expect(
    page.locator('[data-testid="hero-card-2-suit-♥"]'),
  ).toBeDisabled();
});

test("there should be seven suit selector sections", async ({ page }) => {
  await page.goto("/poker-systems");

  // Count all suit icon groups (each card should have 4 suit icons)
  const spadeIcons = await page.locator('[data-testid="suit-icon-♠"]').count();
  const heartIcons = await page.locator('[data-testid="suit-icon-♥"]').count();
  const diamondIcons = await page
    .locator('[data-testid="suit-icon-♦"]')
    .count();
  const clubIcons = await page.locator('[data-testid="suit-icon-♣"]').count();

  // Each should appear 7 times (2 hero cards + 3 flop cards + 1 turn + 1 river)
  expect(spadeIcons).toBe(7);
  expect(heartIcons).toBe(7);
  expect(diamondIcons).toBe(7);
  expect(clubIcons).toBe(7);
});
