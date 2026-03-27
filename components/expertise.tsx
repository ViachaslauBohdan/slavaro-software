"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
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

export function Expertise() {
  const { t, language } = useLanguage()

  const landingPageProcess = [
    { icon: MessageSquare, step: "01", title: t.expertise.landingProcess.steps.step1.title, description: t.expertise.landingProcess.steps.step1.description },
    { icon: Palette, step: "02", title: t.expertise.landingProcess.steps.step2.title, description: t.expertise.landingProcess.steps.step2.description },
    { icon: Smartphone, step: "03", title: t.expertise.landingProcess.steps.step3.title, description: t.expertise.landingProcess.steps.step3.description },
    { icon: Zap, step: "04", title: t.expertise.landingProcess.steps.step4.title, description: t.expertise.landingProcess.steps.step4.description },
  ]

  const automationProcess = [
    { icon: TableProperties, step: "01", title: t.expertise.automationProcess.steps.step1.title, description: t.expertise.automationProcess.steps.step1.description },
    { icon: Bot, step: "02", title: t.expertise.automationProcess.steps.step2.title, description: t.expertise.automationProcess.steps.step2.description },
    { icon: FileText, step: "03", title: t.expertise.automationProcess.steps.step3.title, description: t.expertise.automationProcess.steps.step3.description },
    { icon: TrendingUp, step: "04", title: t.expertise.automationProcess.steps.step4.title, description: t.expertise.automationProcess.steps.step4.description },
  ]

  const whyChooseUs = [
    { icon: Clock, title: t.expertise.whyUs.reasons.fast.title, description: t.expertise.whyUs.reasons.fast.description },
    { icon: TrendingUp, title: t.expertise.whyUs.reasons.affordable.title, description: t.expertise.whyUs.reasons.affordable.description },
    { icon: MessageSquare, title: t.expertise.whyUs.reasons.quality.title, description: t.expertise.whyUs.reasons.quality.description },
    { icon: Shield, title: t.expertise.whyUs.reasons.support.title, description: t.expertise.whyUs.reasons.support.description },
    { icon: Bot, title: language === "en" ? "Smart Automation" : "Inteligentna Automatyzacja", description: language === "en" ? "AI-powered solutions that actually save you time" : "Rozwiązania AI, które naprawdę oszczędzają Twój czas" },
    { icon: Zap, title: language === "en" ? "Fast & Reliable" : "Szybko i Niezawodnie", description: language === "en" ? "Quick turnaround with quality you can count on" : "Szybka realizacja z jakością, na którą możesz liczyć" },
  ]

  return (
    <section id="expertise" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
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
            {t.expertise.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.expertise.subtitle}
          </p>
        </div>

        {/* Landing Page Process */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{t.expertise.landingProcess.title}</h3>
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
            <h3 className="text-xl font-semibold text-foreground">{t.expertise.automationProcess.title}</h3>
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
              {t.expertise.whyUs.title}
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
