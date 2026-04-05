"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Bot,
  Zap,
  TrendingUp,
  Shield,
  MessageSquare,
  FileText,
  TableProperties,
} from "lucide-react"

const automationProcess = [
  {
    icon: TableProperties,
    step: "01",
    title: "Analysis",
    description: "We map your current workflows and where time is lost",
  },
  {
    icon: Bot,
    step: "02",
    title: "Design",
    description: "We design the automation architecture and data flow",
  },
  {
    icon: FileText,
    step: "03",
    title: "Build",
    description: "We implement, test, and harden the system",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Optimize",
    description: "We monitor outcomes and refine with you",
  },
]

const whyChooseUs = [
  {
    icon: Zap,
    title: "Production-first",
    description: "Automations built to run in the background every day, not one-off scripts.",
  },
  {
    icon: TrendingUp,
    title: "Fair pricing",
    description: "Clear scopes for reporting sprints and full workflow projects.",
  },
  {
    icon: MessageSquare,
    title: "Direct communication",
    description: "You work with us directly — fast answers, no handover maze.",
  },
  {
    icon: Shield,
    title: "Support after go-live",
    description: "We stay available for fixes, tweaks, and scaling the workflow.",
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
            How we ship automation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Analysis → design → build → optimize. You always know what happens next.
          </p>
        </div>

        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="p-2 rounded-lg bg-accent/10">
            <Bot className="h-5 w-5 text-accent" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Automation process</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {automationProcess.map((item) => (
            <Card
              key={item.step}
              className="relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                <span className="text-5xl font-bold text-accent/10 absolute top-4 right-4">
                  {item.step}
                </span>
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="h-6 w-6 text-accent" />
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
              Why Volska Landing?
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
