"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Globe,
  Clock,
  TrendingUp,
  Shield,
  MessageSquare,
  Phone,
  Palette,
  Rocket,
} from "lucide-react"

const landingFlow = [
  {
    icon: Phone,
    step: "01",
    title: "Call",
    description:
      "We align on your business, offer, and goals — so the page matches what you actually sell.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Your landing page design — same day",
    description:
      "You get a clear visual direction for your brand: layout, sections, and messaging structure.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Fully working page — next day",
    description:
      "A live, mobile-ready landing page for your business: forms, lead alerts, and performance basics.",
  },
]

const whyChooseUs = [
  {
    icon: Clock,
    title: "Fast timeline",
    description: "Call → same-day design → next-day live page — no endless back-and-forth.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-focused",
    description: "One page built to turn visitors into leads, not just look pretty.",
  },
  {
    icon: MessageSquare,
    title: "Direct communication",
    description: "You work directly with us — quick answers, no layers.",
  },
  {
    icon: Shield,
    title: "Support after launch",
    description: "We don’t disappear once the page is live.",
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-14 lg:py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From call to live page
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            <span className="text-foreground font-medium">Call</span>
            {" → "}
            <span className="text-foreground font-medium">your landing page design same day</span>
            {" → "}
            <span className="text-foreground font-medium">
              fully working page for your business next day
            </span>
            .
          </p>
        </div>

        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="p-2 rounded-lg bg-primary/10">
            <Globe className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">How it works</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {landingFlow.map((item) => (
            <Card
              key={item.step}
              className="relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                <span className="text-5xl font-bold text-primary/10 absolute top-4 right-4">
                  {item.step}
                </span>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
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
              Why Volska Automation for your landing page?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
