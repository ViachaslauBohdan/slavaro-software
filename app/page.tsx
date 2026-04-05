// Volska Automation — main-automation: AI workflow automation only
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Expertise } from "@/components/expertise"
import { Stats } from "@/components/stats"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Volska Automation",
    url: "https://volska.com",
    image: "https://volska.com/og-image.jpg",
    email: "volskagroup@gmail.com",
    areaServed: ["Poland", "European Union", "United States"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Warsaw",
      addressCountry: "PL",
    },
    sameAs: ["https://www.linkedin.com/in/viachaslau-bohdan-969436156/"],
    serviceType: ["AI Workflow Automation", "Business Process Automation"],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI automation for reporting and workflows",
    provider: {
      "@type": "Organization",
      name: "Volska Automation",
      url: "https://volska.com",
    },
    areaServed: ["Poland", "European Union", "United States"],
    offers: [
      {
        "@type": "Offer",
        name: "AI Reporting Autopilot",
        priceCurrency: "EUR",
        lowPrice: "500",
        highPrice: "900",
      },
      {
        "@type": "Offer",
        name: "AI Workflow Sprint",
        priceCurrency: "EUR",
        lowPrice: "900",
        highPrice: "1800",
      },
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Stats />
      <Pricing />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  )
}
