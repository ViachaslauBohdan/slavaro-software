import { expect, test } from "@playwright/test"
import { contrastRatio, parseCssColor } from "./helpers"

test.describe("homepage light theme", () => {
  test("renders soft white + teal UI without ambient photos", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" })

    await expect(page.locator("img[data-hero-bg]")).toHaveCount(0)
    await expect(page.locator("img[data-ambient-bg]")).toHaveCount(0)

    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
    const parsedBg = parseCssColor(bg)
    expect(parsedBg).not.toBeNull()
    if (parsedBg) {
      // Light surface (white / near-white)
      expect(parsedBg.r).toBeGreaterThan(240)
      expect(parsedBg.g).toBeGreaterThan(240)
      expect(parsedBg.b).toBeGreaterThan(240)
    }

    const headings = page.locator("main h1, main h2")
    const count = await headings.count()
    expect(count).toBeGreaterThan(4)

    const failures: string[] = []
    for (let i = 0; i < Math.min(count, 10); i++) {
      const h = headings.nth(i)
      if (!(await h.isVisible())) continue
      const color = await h.evaluate((el) => getComputedStyle(el).color)
      const fg = parseCssColor(color)
      if (!fg) {
        failures.push(`heading[${i}] bad color ${color}`)
        continue
      }
      const light = { r: 250, g: 251, b: 252 }
      const ratio = contrastRatio(fg, light)
      if (ratio < 3) {
        const text = (await h.innerText()).slice(0, 48)
        failures.push(`heading[${i}] contrast ${ratio.toFixed(2)}: ${text}`)
      }
    }
    expect(failures, failures.join("\n")).toEqual([])

    // Primary CTA should be teal (not black, not navy-blue)
    const primaryBtn = page
      .locator("#main-content")
      .getByRole("link", { name: /Discuss Your Project/i })
    await expect(primaryBtn).toBeVisible()
    const btnBg = await primaryBtn.evaluate((el) => getComputedStyle(el).backgroundColor)
    const parsed = parseCssColor(btnBg)
    expect(parsed).not.toBeNull()
    if (parsed) {
      expect(parsed.g).toBeGreaterThan(parsed.r)
      expect(parsed.g).toBeGreaterThan(90)
      expect(parsed.r).toBeLessThan(80)
    }
  })

  test("key CTAs remain usable", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" })
    await expect(
      page.locator("#main-content").getByRole("link", { name: /Discuss Your Project/i })
    ).toBeVisible()
    await expect(
      page.locator("#main-content").getByRole("link", { name: /Tell Us Your Idea/i })
    ).toBeVisible()
    await expect(page.locator("#process")).toBeVisible()
    await expect(page.locator("#mvp")).toBeVisible()
  })
})
