"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageSquare, Clock, Zap, Bot } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const { t, language } = useLanguage()
  const [agreed, setAgreed] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.info.email,
      value: "hello@volska.com",
      href: "mailto:hello@volska.com"
    },
    {
      icon: MessageSquare,
      label: "Telegram",
      value: "@volskagroup",
      href: "https://t.me/volskagroup"
    }
  ]

  const benefits = [
    { icon: Clock, text: language === "en" ? "48-hour landing page delivery" : "Strona gotowa w 48 godzin" },
    { icon: Zap, text: language === "en" ? "Instant lead notifications" : "Natychmiastowe powiadomienia" },
    { icon: Bot, text: language === "en" ? "AI automation that saves hours" : "Automatyzacja oszczędzająca godziny" },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <Image
          src="/images/mobile-responsive.jpg"
          alt="Responsive design showcase"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-secondary/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.contact.subtitle}
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
              
              {/* Response time */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.info.response}</p>
                  <p className="font-medium text-foreground">{t.contact.info.responseValue}</p>
                </div>
              </div>
            </div>

            {/* Benefits card with image */}
            <div className="mt-12 relative rounded-xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/images/team-working.jpg"
                  alt="Professional team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/80" />
              </div>
              <div className="relative p-6">
                <h3 className="font-semibold text-primary-foreground mb-4">{t.contact.benefits.title}</h3>
                <div className="space-y-4">
                  {t.contact.benefits.items.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-primary-foreground/20">
                        <Zap className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-primary-foreground/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-border/50">
            <CardHeader>
              <CardTitle>{language === "en" ? "Get a free quote" : "Otrzymaj bezpłatną wycenę"}</CardTitle>
              <CardDescription>
                {language === "en" 
                  ? "Tell us about your project and we'll get back to you with a proposal." 
                  : "Opowiedz nam o swoim projekcie, a my skontaktujemy się z propozycją."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.name}
                    </label>
                    <Input id="name" placeholder={t.contact.form.namePlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.phone}
                    </label>
                    <Input id="phone" type="tel" placeholder={t.contact.form.phonePlaceholder} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.service}
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t.contact.form.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landing-page">{t.contact.form.serviceOptions.landing}</SelectItem>
                      <SelectItem value="lead-system">{t.contact.form.serviceOptions.leadSystem}</SelectItem>
                      <SelectItem value="ai-automation">{t.contact.form.serviceOptions.automation}</SelectItem>
                      <SelectItem value="support">{t.contact.form.serviceOptions.support}</SelectItem>
                      <SelectItem value="other">{t.contact.form.serviceOptions.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.message}
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={4}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="privacy" 
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en" 
                      ? "I agree to the Privacy Policy and consent to being contacted about my inquiry." 
                      : "Zgadzam się z Polityką Prywatności i wyrażam zgodę na kontakt w sprawie mojego zapytania."}
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={!agreed}
                >
                  {t.contact.form.submit}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  {language === "en" 
                    ? "We typically respond within 2-4 hours during business hours." 
                    : "Zazwyczaj odpowiadamy w ciągu 2-4 godzin w godzinach pracy."}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
