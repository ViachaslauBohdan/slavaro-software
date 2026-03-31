"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, MessageSquare, TrendingUp, Bot } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const highlights = [
    { icon: Clock, text: "Landing pages delivered in 48 hours" },
    { icon: Zap, text: "AI automation to eliminate manual work" },
    { icon: MessageSquare, text: "Instant lead notifications via Telegram & email" },
    { icon: TrendingUp, text: "Convert visitors into real clients" },
    { icon: Bot, text: "Scalable processes instead of manual tasks" },
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
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="relative pt-28 pb-14 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern office workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-background/80 backdrop-blur-sm"
            >
              Landing Pages & AI Automation
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Professional websites that <span className="text-primary">convert in 48 hours</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl text-pretty">
              High-conversion landing pages and AI automation that saves you 10+ hours weekly. Start receiving client inquiries immediately.
            </p>

            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base shadow-lg hover:scale-105 transition-transform"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-base bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform"
                onClick={(e) => scrollToSection(e, "#pricing")}
              >
                View Pricing
              </Button>
            </div>

            {/* Highlights */}
            <div className="mt-12 space-y-3">
              {highlights.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1.5 rounded-full bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image tiles */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
                <Image
                  src="/images/landing-mockup.jpg"
                  alt="Landing page mockup"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Smaller tiles */}
              <div className="relative h-48 rounded-xl overflow-hidden shadow-xl ring-1 ring-border">
                <Image
                  src="/images/team-working.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
              
              <div className="relative h-48 rounded-xl overflow-hidden shadow-xl ring-1 ring-border">
                <Image
                  src="/images/automation-dashboard.jpg"
                  alt="Automation dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">48h</p>
                  <p className="text-xs text-muted-foreground">Delivery time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 pt-8 border-t border-border/50">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Trusted by businesses ready to grow
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Startups", "SMBs", "Agencies", "Consultants", "E-commerce", "Service Businesses"].map((client) => (
              <div
                key={client}
                className="text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
