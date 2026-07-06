import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/about/", "/portfolio/", "/pricing/"];

for (const route of routes) {
  test(`${route} renders with no critical accessibility violations`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("body")).toBeVisible();
    await expect(page.locator("h1").first()).toBeVisible();

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    const serious = results.violations.filter((violation) =>
      ["critical", "serious"].includes(violation.impact ?? "")
    );

    expect(serious).toEqual([]);
  });
}

test("about page CTAs navigate or open correctly", async ({ page }) => {
  await page.goto("/about/");

  const portfolioLink = page.getByRole("link", { name: /view my work/i });
  await expect(portfolioLink).toHaveAttribute("href", "/portfolio");
  await portfolioLink.click();
  await expect(page).toHaveURL(/\/portfolio\/?$/);

  await page.goto("/about/");
  const bookingLink = page.getByRole("link", { name: /plan your session/i }).first();
  await expect(bookingLink).toHaveAttribute("target", "_blank");
  await expect(bookingLink).toHaveAttribute("href", /https?:\/\//);
});

test("homepage hero stays readable and uncluttered", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator("section").first();

  await expect(hero.getByRole("heading", { name: /portraits with presence/i })).toBeVisible();
  await expect(hero.getByRole("link", { name: /plan a session/i })).toBeVisible();
  await expect(hero.getByRole("link", { name: /view work/i })).toBeVisible();
  await expect(hero.getByRole("link", { name: /instagram/i })).toHaveCount(0);
});
