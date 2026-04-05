// Volska Landing — main-landing: landing pages in 48 hours
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Expertise } from "@/components/expertise"
import { Stats } from "@/components/stats"
import { Portfolio } from "@/components/portfolio"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Volska Landing",
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
    serviceType: ["Landing Page Development"],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Landing pages in 48 hours",
    description:
      "Conversion-focused landing pages: kickoff call, same-day design, fully working page next day.",
    provider: {
      "@type": "Organization",
      name: "Volska Landing",
      url: "https://volska.com",
    },
    areaServed: ["Poland", "European Union", "United States"],
    offers: {
      "@type": "Offer",
      name: "Landing Page Sprint",
      priceCurrency: "EUR",
      lowPrice: "200",
      highPrice: "500",
    },
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
      <Portfolio />
      <Pricing />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  )
}
