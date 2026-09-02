import { afterEach, describe, expect, it } from "vitest"
import { INDEXABLE_ROUTES, ROUTES, absoluteUrl } from "@/lib/seo/routes"

const originalEnv = { ...process.env }

afterEach(() => {
  process.env = { ...originalEnv }
})

describe("ROUTES", () => {
  it("includes all public marketing pages", () => {
    expect(ROUTES.home).toBe("/")
    expect(ROUTES.contact).toBe("/contact")
    expect(INDEXABLE_ROUTES).toHaveLength(11)
    expect(new Set(INDEXABLE_ROUTES).size).toBe(INDEXABLE_ROUTES.length)
  })
})

describe("absoluteUrl", () => {
  it("builds canonical URLs from the site base", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://slavaro.com"
    expect(absoluteUrl("/contact")).toBe("https://slavaro.com/contact")
    expect(absoluteUrl("/")).toBe("https://slavaro.com")
  })
})
