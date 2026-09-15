import { getSiteUrl } from "@/lib/site-url"

export const ROUTES = {
  home: "/",
  mvpDevelopment: "/mvp-development",
  webApplicationDevelopment: "/web-application-development",
  saasDevelopment: "/saas-development",
  startupSoftwareDevelopment: "/startup-software-development",
  productRescue: "/product-rescue",
  reactDevelopment: "/react-development",
  aiIntegration: "/ai-integration",
  businessAutomation: "/business-automation",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
  examples: "/examples",
} as const

export type RouteKey = keyof typeof ROUTES

export const INDEXABLE_ROUTES: RouteKey[] = [
  "home",
  "mvpDevelopment",
  "webApplicationDevelopment",
  "saasDevelopment",
  "startupSoftwareDevelopment",
  "productRescue",
  "reactDevelopment",
  "aiIntegration",
  "businessAutomation",
  "about",
  "contact",
  "privacy",
  "examples",
]

export function absoluteUrl(path: string): string {
  const base = getSiteUrl()
  return path === "/" ? base : `${base}${path}`
}
