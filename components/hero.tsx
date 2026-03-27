"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, MessageSquare, TrendingUp, Bot } from "lucide-react"
import Image from "next/image"

const highlights = [
  { icon: Clock, text: "Landing pages delivered in 48 hours" },
  { icon: Zap, text: "AI automation to eliminate manual work" },
  { icon: MessageSquare, text: "Instant lead notifications via Telegram & email" },
  { icon: TrendingUp, text: "Convert visitors into real clients" },
  { icon: Bot, text: "Scalable processes instead of manual tasks" },
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
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
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-background/80 backdrop-blur-sm">
              Landing Pages & AI Automation
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              <span className="text-primary">Landing pages</span> in 48 hours & <span className="text-primary">AI automation</span> that works
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl text-pretty">
              High-conversion websites built to bring you real clients. AI automation to eliminate 
              repetitive work. Start receiving inquiries immediately.
            </p>

            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base shadow-lg">
                Book a free discovery call
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-base bg-background/50 backdrop-blur-sm">
                View our work
              </Button>
            </div>

            {/* Highlights */}
            <div className="mt-12 space-y-3">
              {highlights.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
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
                  alt="Professional landing page on computer screen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Smaller tiles */}
              <div className="relative h-48 rounded-xl overflow-hidden shadow-xl ring-1 ring-border">
                <Image
                  src="/images/team-working.jpg"
                  alt="Professional team collaborating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
              
              <div className="relative h-48 rounded-xl overflow-hidden shadow-xl ring-1 ring-border">
                <Image
                  src="/images/automation-dashboard.jpg"
                  alt="Automation dashboard on laptop"
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
        <div className="mt-20 pt-12 border-t border-border/50">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Trusted by businesses ready to grow
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Startups", "SMBs", "Agencies", "Consultants", "E-commerce", "Service Businesses"].map((client) => (
              <div
                key={client}
                className="text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors"
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
