import { afterEach, beforeEach, describe, expect, it } from "vitest"
import {
  breadcrumbSchema,
  faqPageSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/seo/structured-data"
import { HOME_FAQS } from "@/lib/seo/home-faqs"
import { site } from "@/lib/site-content"

const originalEnv = { ...process.env }

afterEach(() => {
  process.env = { ...originalEnv }
})

describe("structured data", () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://slavaro.com"
  })

  it("describes the website and organization with current branding", () => {
    const website = webSiteSchema()
    const organization = organizationSchema()

    expect(website.name).toBe(site.name)
    expect(organization.name).toBe(site.name)
    expect(organization.email).toBe(site.email)
    expect(organization.telephone).toBe(site.phone)
  })

  it("builds breadcrumb and FAQ schemas", () => {
    const breadcrumbs = breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ])
    const faqs = faqPageSchema(HOME_FAQS)

    expect(breadcrumbs.itemListElement).toHaveLength(2)
    expect(faqs.mainEntity).toHaveLength(HOME_FAQS.length)
  })
})
