import { afterEach, describe, expect, it } from "vitest"
import { getSiteUrl, isProductionDeployment } from "@/lib/site-url"

const originalEnv = { ...process.env }

afterEach(() => {
  process.env = { ...originalEnv }
})

describe("getSiteUrl", () => {
  it("prefers NEXT_PUBLIC_SITE_URL", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://slavaro.com/"
    process.env.VERCEL_URL = "preview.vercel.app"
    expect(getSiteUrl()).toBe("https://slavaro.com")
  })

  it("falls back to VERCEL_URL", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL
    process.env.VERCEL_URL = "volska-landing.vercel.app"
    expect(getSiteUrl()).toBe("https://volska-landing.vercel.app")
  })

  it("defaults to localhost in development", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL
    delete process.env.VERCEL_URL
    expect(getSiteUrl()).toBe("http://localhost:3000")
  })
})

describe("isProductionDeployment", () => {
  it("returns true only on Vercel production", () => {
    process.env.VERCEL_ENV = "production"
    expect(isProductionDeployment()).toBe(true)

    process.env.VERCEL_ENV = "preview"
    expect(isProductionDeployment()).toBe(false)
  })
})
