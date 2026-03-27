"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Globe, 
  Bot, 
  Zap,
  Clock,
  TrendingUp,
  Shield,
  MessageSquare,
  FileText,
  Mail,
  TableProperties,
  Smartphone,
  Palette
} from "lucide-react"

const landingPageProcess = [
  { icon: MessageSquare, step: "01", title: "Discovery Call", description: "We discuss your business, goals, and what you need from your website" },
  { icon: Palette, step: "02", title: "Design & Build", description: "We create a modern, conversion-focused design tailored to your brand" },
  { icon: Smartphone, step: "03", title: "Review & Refine", description: "You review the site and we make adjustments until it&apos;s perfect" },
  { icon: Zap, step: "04", title: "Launch & Notify", description: "Your site goes live with lead capture and instant notifications set up" },
]

const automationProcess = [
  { icon: TableProperties, step: "01", title: "Workflow Audit", description: "We identify repetitive tasks and manual processes in your business" },
  { icon: Bot, step: "02", title: "Automation Design", description: "We design custom automation flows that fit your exact needs" },
  { icon: FileText, step: "03", title: "Build & Test", description: "We build and thoroughly test every automation before deployment" },
  { icon: TrendingUp, step: "04", title: "Deploy & Monitor", description: "Your automations go live with ongoing support and optimization" },
]

const whyChooseUs = [
  { icon: Clock, title: "48-Hour Delivery", description: "Landing pages delivered in just 2 days, not weeks" },
  { icon: TrendingUp, title: "Conversion Focused", description: "Every element designed to turn visitors into leads" },
  { icon: MessageSquare, title: "Instant Notifications", description: "Know the moment someone reaches out via Telegram & email" },
  { icon: Shield, title: "No Hidden Fees", description: "Clear pricing with everything included upfront" },
  { icon: Bot, title: "Smart Automation", description: "AI-powered solutions that actually save you time" },
  { icon: Zap, title: "Fast & Reliable", description: "Quick turnaround with quality you can count on" },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How we work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A simple, transparent process designed to get you results fast without the complexity.
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
              <Card key={item.step} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
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
            <h3 className="text-xl font-semibold text-foreground">AI Automation Process</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationProcess.map((item) => (
              <Card key={item.step} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
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

        {/* Why Choose Us */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <h3 className="text-2xl font-bold tracking-tight text-foreground text-center mb-10">
            Why businesses choose Volska
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
