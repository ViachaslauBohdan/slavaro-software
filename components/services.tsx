"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  CheckCircle,
  Globe,
  Clock,
  Smartphone,
  Zap,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

export function Services() {
  const landingPageFeatures = [
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Perfect display on all devices - desktop, tablet, and mobile",
    },
    {
      icon: TrendingUp,
      title: "Lead Generation",
      description: "Contact forms with instant notifications to Telegram and email",
    },
    {
      icon: Smartphone,
      title: "SEO Optimized",
      description: "Built for search engines to help clients find you",
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Optimized for speed and performance",
    },
  ]

  const landingPageBenefits = [
    "Start receiving client inquiries immediately",
    "Improve your online presence",
    "Convert visitors into real business opportunities",
  ]

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
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="services" className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Fast delivery: same-day design, landing in 48 hours
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            One focused page built to convert. After your kickoff call you get your{" "}
            <span className="text-foreground font-medium">page design the same day</span> and your{" "}
            <span className="text-foreground font-medium">full landing page within 48 hours</span>
            — mobile-ready, with instant lead notifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              Landing pages only
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Built for leads, not fluff
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We prioritize speed: same-day page design, then a complete landing page shipped inside 48 hours.
              Mobile-friendly, SEO-aware, with instant lead notifications so you never miss an inquiry.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-foreground">Business impact:</h3>
              {landingPageBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Order a landing page
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/landing-mockup.jpg"
                alt="Professional landing page on computer screen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Smartphone className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Responsive</span>
              </div>
              <p className="text-xs text-muted-foreground">Perfect on all devices</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-xl font-bold text-foreground">48h</span>
              </div>
              <p className="text-xs text-muted-foreground">Full page in 48h</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {landingPageFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="h-full hover:shadow-lg transition-shadow border-border/50 hover:-translate-y-1 transition-transform"
            >
              <CardContent className="p-5">
                <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
