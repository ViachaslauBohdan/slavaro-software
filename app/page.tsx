import type { Metadata } from "next"
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo/metadata"
import { JsonLd } from "@/components/seo/json-ld"
import { HomeFaq } from "@/components/seo/home-faq"
import { HomeServicesNav } from "@/components/seo/home-services-nav"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { HowItWorks } from "@/components/how-it-works"
import { MvpSection } from "@/components/mvp-section"
import { RescueSection } from "@/components/rescue-section"
import { AiAutomation } from "@/components/ai-automation"
import { BusinessValue } from "@/components/business-value"
import { About } from "@/components/about"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import {
  faqPageSchema,
  organizationSchema,
  webPageSchema,
  webSiteSchema,
} from "@/lib/seo/structured-data"
import { HOME_FAQS } from "@/lib/seo/home-faqs"

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.home)

export default function Home() {
  const seo = PAGE_SEO.home

  const schema = [
    webSiteSchema(),
    organizationSchema(),
    webPageSchema({ path: "/", title: seo.title, description: seo.description }),
    faqPageSchema(HOME_FAQS),
  ]

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main id="main-content">
        <Hero />
        <Problem />
        <HowItWorks />
        <MvpSection />
        <RescueSection />
        <HomeServicesNav />
        <AiAutomation />
        <BusinessValue />
        <About />
        <HomeFaq />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
