import type { MetadataRoute } from "next"
import { PAGE_SEO } from "@/lib/seo/metadata"
import { absoluteUrl } from "@/lib/seo/routes"

const PRIORITIES: Record<string, number> = {
  "/": 1,
  "/mvp-development": 0.9,
  "/web-application-development": 0.9,
  "/saas-development": 0.9,
  "/startup-software-development": 0.85,
  "/product-rescue": 0.85,
  "/react-development": 0.8,
  "/ai-integration": 0.8,
  "/business-automation": 0.8,
  "/about": 0.6,
  "/contact": 0.7,
  "/privacy": 0.3,
  "/examples": 0.75,
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Stable-ish stamp per deploy day (avoids fake "always now" freshness)
  const lastModified = new Date()
  lastModified.setUTCHours(0, 0, 0, 0)

  return Object.values(PAGE_SEO).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.path === "/" ? "weekly" : page.path === "/privacy" ? "yearly" : "monthly",
    priority: PRIORITIES[page.path] ?? 0.5,
  }))
}
