"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function CTA() {
  const { t, language } = useLanguage()

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/happy-client.jpg"
              alt="Successful business professional"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70" />
          </div>

          <div className="relative p-8 lg:p-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              {t.cta.title}
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Button 
                size="lg" 
                variant="secondary" 
                className="px-8 py-6 text-base shadow-lg hover:scale-105 transition-transform"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                {t.cta.button}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-base bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground hover:scale-105 transition-transform"
                onClick={(e) => scrollToSection(e, "#pricing")}
              >
                {language === "en" ? "View Pricing" : "Zobacz Cennik"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
