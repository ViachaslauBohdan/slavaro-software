import { afterEach, describe, expect, it } from "vitest"
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo/metadata"
import { site } from "@/lib/site-content"

const originalEnv = { ...process.env }

afterEach(() => {
  process.env = { ...originalEnv }
})

describe("PAGE_SEO", () => {
  it("defines metadata for every indexable page", () => {
    expect(Object.keys(PAGE_SEO)).toHaveLength(13)
    for (const page of Object.values(PAGE_SEO)) {
      expect(page.title.length).toBeGreaterThan(10)
      expect(page.description.length).toBeGreaterThan(40)
      expect(page.title).toContain(site.name)
    }
  })
})

describe("buildPageMetadata", () => {
  it("sets canonical URLs and publisher branding", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://slavaro.com"
    process.env.VERCEL_ENV = "production"

    const metadata = buildPageMetadata(PAGE_SEO.home)

    expect(metadata.title).toBe(PAGE_SEO.home.title)
    expect(metadata.publisher).toBe(site.name)
    expect(metadata.alternates?.canonical).toBe("https://slavaro.com")
    expect(metadata.robots).toMatchObject({ index: true, follow: true })
  })

  it("noindexes non-production deployments", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://preview.slavaro.com"
    process.env.VERCEL_ENV = "preview"

    const metadata = buildPageMetadata(PAGE_SEO.contact)

    expect(metadata.robots).toEqual({ index: false, follow: false })
  })
})
