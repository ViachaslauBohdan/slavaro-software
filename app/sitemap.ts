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
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return Object.values(PAGE_SEO).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: PRIORITIES[page.path] ?? 0.5,
  }))
}
