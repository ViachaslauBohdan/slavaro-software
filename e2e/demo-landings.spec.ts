import { expect, test, type Page } from "@playwright/test"
import {
  ALL_DEMOS,
  SMOKE_DEMOS,
  contrastRatio,
  parseCssColor,
  type DemoLanding,
} from "./helpers"

const isSmoke = process.env.E2E_SMOKE === "1"
const demos = isSmoke ? SMOKE_DEMOS : ALL_DEMOS

async function assertHeadingContrast(page: Page, minRatio = 3.0) {
  const handles = page.locator(".demo-layout-root h1, .demo-layout-root h2")
  const count = await handles.count()
  expect(count, "expected at least one demo heading").toBeGreaterThan(0)

  const failures: string[] = []
  const limit = Math.min(count, 8)

  for (let i = 0; i < limit; i++) {
    const heading = handles.nth(i)
    if (!(await heading.isVisible())) continue

    const box = await heading.boundingBox()
    if (!box || box.width < 20 || box.height < 12) continue

    const colorCss = await heading.evaluate((el) => getComputedStyle(el).color)
    const fg = parseCssColor(colorCss)
    if (!fg || fg.a < 0.5) {
      failures.push(`heading[${i}] unreadable color: ${colorCss}`)
      continue
    }

    const handle = await heading.elementHandle()
    if (!handle) continue

    const bg = await page.evaluate((node) => {
      const parse = (input: string) => {
        const s = input.trim().toLowerCase()
        if (s === "transparent") return { r: 0, g: 0, b: 0, a: 0 }
        const m = s.match(
          /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+%?))?\s*\)/
        )
        if (!m) return null
        let a = 1
        if (m[4]?.endsWith("%")) a = Number(m[4].slice(0, -1)) / 100
        else if (m[4]) a = Number(m[4])
        return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]), a }
      }
      let current: Element | null = node as Element
      while (current) {
        const next = parse(getComputedStyle(current).backgroundColor)
        if (next && next.a > 0.15) return next
        current = current.parentElement
      }
      return { r: 255, g: 255, b: 255, a: 1 }
    }, handle)

    const ratio = contrastRatio(fg, bg)
    if (ratio < minRatio) {
      const text = (await heading.innerText()).slice(0, 60)
      failures.push(
        `heading[${i}] contrast ${ratio.toFixed(2)} < ${minRatio}: "${text}" fg=${colorCss}`
      )
    }
  }

  expect(failures, failures.join("\n")).toEqual([])
}

async function assertImagesLoaded(page: Page) {
  // Force lazy images into view so they request
  await page.evaluate(async () => {
    const imgs = [...document.querySelectorAll(".demo-layout-root img")] as HTMLImageElement[]
    for (const img of imgs) {
      img.loading = "eager"
      img.scrollIntoView({ block: "center" })
    }
    await Promise.all(
      imgs.map(
        (img) =>
          img.complete
            ? Promise.resolve()
            : new Promise<void>((resolve) => {
                img.addEventListener("load", () => resolve(), { once: true })
                img.addEventListener("error", () => resolve(), { once: true })
              })
      )
    )
  })

  const result = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll(".demo-layout-root img")] as HTMLImageElement[]
    const broken = imgs
      .filter((img) => !(img.getAttribute("src") && img.complete && img.naturalWidth > 0))
      .map((img) => img.currentSrc || img.src || "(no src)")
    return { total: imgs.length, broken }
  })

  expect(result.total, "demo should render images").toBeGreaterThan(0)
  expect(result.broken, `broken images: ${result.broken.join(", ")}`).toEqual([])
}

async function assertNoStuckOverlays(page: Page) {
  const offenders = await page.evaluate(() => {
    const root = document.querySelector(".demo-layout-root")
    if (!root) return ["missing .demo-layout-root"]

    const bad: string[] = []
    for (const el of root.querySelectorAll("*")) {
      const style = getComputedStyle(el)
      const rect = el.getBoundingClientRect()
      if (rect.width < 40 || rect.height < 40) continue

      const coversViewport =
        rect.width >= window.innerWidth * 0.9 &&
        rect.height >= window.innerHeight * 0.5 &&
        style.position === "fixed"

      if (coversViewport && style.pointerEvents !== "none" && Number(style.opacity) > 0.05) {
        const cls = el.className?.toString?.() || el.tagName
        if (el.tagName !== "HEADER") {
          bad.push(`blocking overlay: ${el.tagName}.${cls}`.slice(0, 120))
        }
      }
    }
    return bad.slice(0, 10)
  })

  expect(offenders).toEqual([])
}

async function assertThemeBackground(page: Page, demo: DemoLanding) {
  const bg = await page.locator(".demo-layout-root").evaluate((el) => getComputedStyle(el).backgroundColor)
  const parsed = parseCssColor(bg)
  expect(parsed, `root bg parse failed: ${bg}`).not.toBeNull()

  const expected = parseCssColor(demo.theme.bg)
  expect(expected, `theme.bg parse failed: ${demo.theme.bg}`).not.toBeNull()

  if (parsed && expected) {
    expect(Math.abs(parsed.r - expected.r)).toBeLessThan(8)
    expect(Math.abs(parsed.g - expected.g)).toBeLessThan(8)
    expect(Math.abs(parsed.b - expected.b)).toBeLessThan(8)
  }
}

async function assertFontsApplied(page: Page, demo: DemoLanding) {
  const font = await page.locator(".demo-layout-root h1").first().evaluate((el) => {
    return getComputedStyle(el).fontFamily
  })

  if (demo.layout === "editorial") {
    expect(font.toLowerCase()).toMatch(/cormorant|garamond|serif/)
  } else if (demo.layout === "product") {
    expect(font.toLowerCase()).toMatch(/dm sans|ibm plex|sans-serif/)
  } else {
    expect(font.toLowerCase()).toMatch(/syne|space grotesk|sans-serif/)
  }
}

async function assertLayoutMarkers(page: Page, demo: DemoLanding) {
  await expect(page.locator(".demo-layout-root")).toBeVisible()
  await expect(page.getByText(demo.brand).first()).toBeVisible()

  if (demo.layout === "editorial") {
    await expect(page.getByText(/Lumina system/i)).toBeVisible()
  } else if (demo.layout === "product") {
    await expect(page.getByText(/Atlas system/i)).toBeVisible()
  } else {
    await expect(page.getByText(/Voltage/i).first()).toBeVisible()
  }
}

async function assertMotionStyles(page: Page, demo: DemoLanding) {
  if (demo.layout === "kinetic" || demo.layout === "editorial") {
    expect(await page.locator(".demo-marquee-track").count()).toBeGreaterThan(0)
  }
  if (demo.layout === "product" || demo.layout === "editorial") {
    expect(await page.locator(".demo-fade-up").count()).toBeGreaterThan(0)
  }

  const hasMotion = await page.evaluate(() => {
    const sheets = [...document.styleSheets]
    for (const sheet of sheets) {
      let rules: CSSRuleList
      try {
        rules = sheet.cssRules
      } catch {
        continue
      }
      for (const rule of rules) {
        if (rule instanceof CSSKeyframesRule && /demo-marquee|demo-fade-up/.test(rule.name)) {
          return true
        }
      }
    }
    const el = document.querySelector(".demo-fade-up, .demo-marquee-track")
    if (!el) return false
    const name = getComputedStyle(el).animationName
    return Boolean(name && name !== "none")
  })
  expect(hasMotion).toBe(true)
}

async function auditDemoPage(page: Page, demo: DemoLanding) {
  await page.goto(`/examples/${demo.slug}`, { waitUntil: "domcontentloaded" })
  await page.waitForSelector(".demo-layout-root")

  await assertLayoutMarkers(page, demo)
  await assertThemeBackground(page, demo)
  await assertFontsApplied(page, demo)
  await assertHeadingContrast(page)
  await assertImagesLoaded(page)
  await assertNoStuckOverlays(page)
  await assertMotionStyles(page, demo)
}

test.describe(`demo landings ${isSmoke ? "(smoke)" : "(full)"}`, () => {
  for (const demo of demos) {
    test(`${demo.layout} · ${demo.slug}`, async ({ page }) => {
      await auditDemoPage(page, demo)
    })
  }
})

test.describe("examples hub", () => {
  test("lists layout systems and links", async ({ page }) => {
    await page.goto("/examples", { waitUntil: "domcontentloaded" })
    await expect(page.getByRole("heading", { name: /Sample landings/i })).toBeVisible()
    await expect(page.getByText("Design systems", { exact: true })).toBeVisible()
    await expect(page.getByText("Lumina").first()).toBeVisible()
    await expect(page.getByText("Atlas").first()).toBeVisible()
    await expect(page.getByText("Voltage").first()).toBeVisible()

    await page.waitForFunction(() => {
      const imgs = [...document.querySelectorAll("main img")] as HTMLImageElement[]
      if (imgs.length === 0) return false
      // Only require above-the-fold / already requested images
      const visible = imgs.filter((img) => {
        const r = img.getBoundingClientRect()
        return r.bottom > 0 && r.top < window.innerHeight * 1.5
      })
      const target = visible.length > 0 ? visible : imgs.slice(0, 3)
      return target.every((img) => img.complete && img.naturalWidth > 0)
    })

    const broken = await page.evaluate(() => {
      const imgs = [...document.querySelectorAll("main img")] as HTMLImageElement[]
      return imgs
        .filter((img) => {
          const r = img.getBoundingClientRect()
          const inView = r.bottom > 0 && r.top < window.innerHeight * 1.5
          return inView && (!img.complete || img.naturalWidth === 0)
        })
        .map((img) => img.src)
    })
    expect(broken).toEqual([])
  })
})
