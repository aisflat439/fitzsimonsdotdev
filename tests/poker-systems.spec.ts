import { test, expect } from "@playwright/test";

test("Poker Monte Carlo Simulation appears on the page", async ({ page }) => {
  await page.goto("/poker-systems");
  await expect(
    page.getByRole("heading", { name: "Poker Monte Carlo Simulation" }),
  ).toBeVisible();
});
