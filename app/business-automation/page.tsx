import type { Metadata } from "next"
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo/metadata"
import { ServicePageTemplate } from "@/components/seo/service-page-template"

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.businessAutomation)

export default function BusinessAutomationPage() {
  return <ServicePageTemplate pageKey="businessAutomation" />
}
