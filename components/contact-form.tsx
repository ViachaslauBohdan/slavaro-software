"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageSquare, Clock, Zap, Bot } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@volska.com",
    href: "mailto:hello@volska.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MessageSquare,
    label: "Telegram",
    value: "@volska",
    href: "https://t.me/volska"
  }
]

const benefits = [
  { icon: Clock, text: "48-hour landing page delivery" },
  { icon: Zap, text: "Instant lead notifications" },
  { icon: Bot, text: "AI automation that saves hours" },
]

export function ContactForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s talk about your project
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to get more clients or save hours with automation? 
              Fill out the form and we&apos;ll get back to you within a few hours.
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
            </div>

            <div className="mt-12 p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">What you get with Volska</h3>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-3">
                    <benefit.icon className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Get a free quote</CardTitle>
              <CardDescription>
                Tell us about your project and we&apos;ll get back to you with a proposal.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
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
                    What are you interested in?
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landing-page">Landing Page (48h delivery)</SelectItem>
                      <SelectItem value="ai-automation">AI Automation</SelectItem>
                      <SelectItem value="both">Both services</SelectItem>
                      <SelectItem value="other">Something else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your project
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="What do you need help with? Any specific requirements?"
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
                    I agree to the Privacy Policy and consent to being contacted about my inquiry.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={!agreed}
                >
                  Send message
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We typically respond within 2-4 hours during business hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
