import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Expertise } from "@/components/expertise"
import { Stats } from "@/components/stats"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Expertise />
      <Stats />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  )
}
