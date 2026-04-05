"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Pricing() {
  const tier = {
    name: "Landing Page",
    subtitle: "48-hour delivery",
    price: "€200 – €500",
    priceNote: "one-time",
    description:
      "Fast, conversion-focused landing page: call → same-day design → fully working page next day.",
    popularText: "Most popular",
    features: [
      "1-page responsive landing page",
      "Kickoff call, then design same day & live page next day (within 48h window)",
      "Offer messaging and conversion-focused structure",
      "Contact form with Telegram + email notifications",
      "Mobile and performance optimization",
      "Basic SEO and analytics setup",
    ],
    result: "Launch fast and start receiving qualified inquiries",
  }

  const supportFeatures = [
    "Content and copy tweaks after launch",
    "Hosting guidance and performance checks",
    "Small updates bundled in monthly care",
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="pricing" className="py-14 lg:py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One core offer: landing pages in 48 hours. No hidden fees.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative flex flex-col rounded-2xl bg-card p-8 shadow-sm ring-2 ring-primary hover:shadow-lg transition-all">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4">
              {tier.popularText}
            </Badge>

            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                <span className="text-muted-foreground">— {tier.subtitle}</span>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
                <span className="text-sm text-muted-foreground">({tier.priceNote})</span>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-medium text-foreground mb-4">Includes</p>
              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-2">Result</p>
              <p className="text-sm text-primary font-medium">{tier.result}</p>
            </div>

            <Button
              className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-transform"
              asChild
            >
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                Get started
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <div className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <h3 className="text-lg font-semibold text-foreground">Ongoing support</h3>
                  <Badge variant="secondary">Optional</Badge>
                </div>
                <p className="text-2xl font-bold text-foreground mb-3">
                  €50 – €150 <span className="text-sm font-normal text-muted-foreground">/month</span>
                </p>
                <ul className="space-y-2">
                  {supportFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-primary font-medium mb-4">
                  Keep your landing page updated without doing it yourself
                </p>
                <Button variant="outline" className="hover:scale-105 transition-transform" asChild>
                  <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                    Add to your project
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready for your landing page this week?
          </h3>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
            asChild
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
              Request a free quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
