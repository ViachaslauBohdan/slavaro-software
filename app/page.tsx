import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Expertise } from "@/components/expertise"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { EngagementModels } from "@/components/engagement-models"
import { CaseStudies } from "@/components/case-studies"
import { AISection } from "@/components/ai-section"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Expertise />
      <Stats />
      <Services />
      <EngagementModels />
      <CaseStudies />
      <AISection />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  )
}
