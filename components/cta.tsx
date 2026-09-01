"use client"

import { Button } from "@/components/ui/button"
import { site } from "@/lib/site-content"

export function CTA() {
  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-primary px-8 py-16 lg:px-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Ready to ship?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Book a free discovery call. We&apos;ll align on scope, timeline, and pricing — then
            start building with full transparency.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-base shadow-lg hover:scale-105 transition-transform"
              asChild
            >
              <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                Book discovery call
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground hover:scale-105 transition-transform"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Send a message
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
