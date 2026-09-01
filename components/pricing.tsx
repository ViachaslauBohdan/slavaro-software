"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { engagementTiers, site } from "@/lib/site-content"

export function Pricing() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <section id="pricing" className="py-14 lg:py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transparent engagement
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Clear pricing models — fixed scope for MVPs, flexible retainer for ongoing work. No
            hidden fees, no surprise invoices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {engagementTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl bg-card p-8 shadow-sm hover:shadow-lg transition-all ${
                tier.popular ? "ring-2 ring-primary" : "ring-1 ring-border"
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4">
                  Most popular
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{tier.subtitle}</p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">({tier.priceNote})</span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-primary font-medium">{tier.result}</p>
              </div>

              <Button
                className={`mt-6 w-full ${
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : ""
                }`}
                variant={tier.popular ? "default" : "outline"}
                asChild
              >
                <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                  Get a quote
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <div className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border text-center">
            <p className="text-lg font-semibold text-foreground mb-2">
              Not sure which model fits?
            </p>
            <p className="text-muted-foreground mb-6">
              Book a free 30-minute discovery call. I&apos;ll recommend the right approach based on
              your goals and timeline — no obligation.
            </p>
            <Button size="lg" asChild>
              <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                Book discovery call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
