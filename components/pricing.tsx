"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Pricing() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: supportRef, isVisible: supportVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  const tiers = [
    {
      name: "Starter",
      subtitle: "Landing Page",
      price: "€300 – €500",
      priceNote: "one-time",
      description: "Professional landing page for small businesses and freelancers",
      popular: true,
      popularText: "Most popular for local businesses",
      color: "primary",
      features: [
        "1-page responsive website",
        "Contact form with notifications",
        "Mobile-optimized design",
        "Basic SEO setup",
        "48-hour delivery"
      ],
      result: "Start receiving client inquiries immediately",
    },
    {
      name: "Growth",
      subtitle: "Lead System",
      price: "€500 – €800",
      priceNote: "one-time",
      description: "Landing page with advanced lead capture and CRM integration",
      popular: false,
      color: "accent",
      features: [
        "Everything in Starter",
        "Multi-step contact forms",
        "CRM integration (Notion, Sheets)",
        "Telegram + Email notifications",
        "Lead tracking analytics",
        "Follow-up automation"
      ],
      result: "Never miss a lead, track every opportunity",
    },
    {
      name: "Pro",
      subtitle: "Automation System",
      price: "€800 – €2000+",
      priceNote: "one-time",
      description: "Custom automation workflows to eliminate manual work",
      popular: false,
      color: "foreground",
      features: [
        "Process analysis & consulting",
        "Custom automation workflows",
        "Excel/Sheets automation",
        "Email processing automation",
        "Document generation",
        "Multi-system integration"
      ],
      result: "Save 10+ hours every week on repetitive tasks",
    },
  ]

  const supportFeatures = [
    "Hosting and maintenance",
    "Monitoring and updates",
    "Small improvements when needed"
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
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the package that fits your needs. No hidden fees.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                tier.popular ? "ring-2 ring-primary" : ""
              } ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {tier.popular && (
                <Badge 
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 transition-all duration-500 ${
                    cardsVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  {tier.popularText}
                </Badge>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      tier.color === "primary" ? "bg-primary" : 
                      tier.color === "accent" ? "bg-accent" : "bg-foreground"
                    } ${cardsVisible ? "scale-100" : "scale-0"}`}
                    style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  />
                  <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                  <span className="text-muted-foreground">— {tier.subtitle}</span>
                </div>
                
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">({tier.priceNote})</span>
                </div>
                
                <p className="mt-4 text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-4">
                  Includes
                </p>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className={`flex items-start gap-3 transition-all duration-500 ${
                        cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${index * 150 + 400 + idx * 50}ms` }}
                    >
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-4">Result</p>
                <p className="text-sm text-primary font-medium">
                  {tier.result}
                </p>
              </div>

              <Button 
                className={`mt-6 w-full transition-all hover:scale-[1.02] ${
                  tier.popular 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                asChild
              >
                <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Get Started</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Ongoing Support */}
        <div 
          ref={supportRef}
          className={`mt-16 mx-auto max-w-3xl transition-all duration-700 ${
            supportVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Ongoing Support
                  </h3>
                  <Badge variant="secondary">Optional</Badge>
                </div>
                <p className="text-2xl font-bold text-foreground mb-3">
                  €50 – €100 <span className="text-sm font-normal text-muted-foreground">/month</span>
                </p>
                <ul className="space-y-2">
                  {supportFeatures.map((item, idx) => (
                    <li 
                      key={item}
                      className={`flex items-center gap-2 text-sm text-muted-foreground transition-all duration-500 ${
                        supportVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${200 + idx * 100}ms` }}
                    >
                      <Check className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-primary font-medium mb-4">
                  Your system stays online, updated, and working without your involvement
                </p>
                <Button variant="outline" className="hover:scale-105 transition-transform" asChild>
                  <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                    Add to any plan
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef}
          className={`mt-16 text-center transition-all duration-700 ${
            ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Get your website or automation system this week
          </h3>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform" 
            asChild
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
              Request a Free Quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
