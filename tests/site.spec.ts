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

test("about page CTAs navigate to contact", async ({ page }) => {
  await page.goto("/about/");

  const getInTouch = page.getByRole("link", { name: /get in touch/i });
  await expect(getInTouch).toHaveAttribute("href", "/#contact");

  const requestSession = page.getByRole("link", { name: /request a session/i });
  await expect(requestSession).toHaveAttribute("href", "/#contact");
});

test("homepage hero stays readable and uncluttered", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator("section").first();

  await expect(hero.getByRole("heading", { name: /portraits with presence/i })).toBeVisible();
  await expect(hero.getByRole("link", { name: /view work/i })).toBeVisible();
  await expect(hero.getByRole("link", { name: /inquire/i })).toBeVisible();
  await expect(hero.getByRole("link", { name: /instagram/i })).toHaveCount(0);
});

test("portfolio images open in the lightbox", async ({ page }) => {
  await page.goto("/portfolio/");

  await page.locator(".img-overlay").first().click();

  const close = page.getByRole("button", { name: /close/i });
  await expect(close).toBeVisible();
  await close.click();
  await expect(close).toBeHidden();
});
