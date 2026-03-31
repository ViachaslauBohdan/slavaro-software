"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { 
  Globe, 
  Bot, 
  Zap,
  Clock,
  TrendingUp,
  Shield,
  MessageSquare,
  FileText,
  TableProperties,
  Smartphone,
  Palette
} from "lucide-react"

const landingPageProcess = [
  { icon: MessageSquare, step: "01", title: "Brief", description: "Tell us about your business and goals" },
  { icon: Palette, step: "02", title: "Design", description: "We create a custom design for your brand" },
  { icon: Smartphone, step: "03", title: "Build", description: "Development with all features included" },
  { icon: Zap, step: "04", title: "Launch", description: "Go live and start receiving leads" },
]

const automationProcess = [
  { icon: TableProperties, step: "01", title: "Analysis", description: "We analyze your current workflows" },
  { icon: Bot, step: "02", title: "Design", description: "Create automation architecture" },
  { icon: FileText, step: "03", title: "Build", description: "Implement and test the system" },
  { icon: TrendingUp, step: "04", title: "Optimize", description: "Monitor and improve performance" },
]

const whyChooseUs = [
  { icon: Clock, title: "Fast Delivery", description: "Landing pages in 48 hours, automation in days not weeks" },
  { icon: TrendingUp, title: "Affordable Pricing", description: "Professional quality at fair prices, no hidden fees" },
  { icon: MessageSquare, title: "Direct Communication", description: "Work directly with the team, quick responses" },
  { icon: Shield, title: "Ongoing Support", description: "We don't disappear after delivery" },
  { icon: Bot, title: "Smart Automation", description: "AI-powered solutions that actually save you time" },
  { icon: Zap, title: "Fast & Reliable", description: "Quick turnaround with quality you can count on" },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent process. You know exactly what to expect.
          </p>
        </div>

        {/* Landing Page Process */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Landing Page Process</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landingPageProcess.map((item) => (
              <Card key={item.step} className="relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1 border-border/50">
                <CardContent className="p-6">
                  <span className="text-5xl font-bold text-primary/10 absolute top-4 right-4">{item.step}</span>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Automation Process */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Automation Process</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationProcess.map((item) => (
              <Card key={item.step} className="relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1 border-border/50">
                <CardContent className="p-6">
                  <span className="text-5xl font-bold text-accent/10 absolute top-4 right-4">{item.step}</span>
                  <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us with background image */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/team-working.jpg"
              alt="Professional team at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
          </div>

          <div className="relative p-8 lg:p-12">
            <h3 className="text-2xl font-bold tracking-tight text-primary-foreground text-center mb-10">
              Why Choose Volska Group?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-foreground/20 shrink-0">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-primary-foreground/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
