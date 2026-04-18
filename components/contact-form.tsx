"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Clock, Zap, Palette } from "lucide-react"
import Image from "next/image"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<{
    type: "idle" | "success" | "error"
    text: string
  }>({
    type: "idle",
    text: "",
  })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "volskagroup@gmail.com",
      href: "mailto:volskagroup@gmail.com"
    },
    {
      icon: MessageSquare,
      label: "Telegram",
      value: "@volskagroup",
      href: "https://t.me/volskagroup"
    }
  ]

  const benefits = [
    { icon: Clock, text: "Same-day page design · full landing delivered in 48h" },
    { icon: Palette, text: "Conversion-focused landing layout" },
    { icon: Zap, text: "Instant Telegram & email lead alerts" },
  ]

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!agreed || isSubmitting) return

    setIsSubmitting(true)
    setSubmitState({ type: "idle", text: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          service,
          message,
        }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error ?? "Could not send your request")
      }

      setSubmitState({
        type: "success",
        text: "Request sent successfully. We will contact you shortly.",
      })
      setName("")
      setPhone("")
      setEmail("")
      setService("")
      setMessage("")
      setAgreed(false)
    } catch (error) {
      setSubmitState({
        type: "error",
        text: error instanceof Error ? error.message : "Could not send your request",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden">
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
              Let&apos;s Talk
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your project and we&apos;ll get back to you with a proposal within 24 hours.
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
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="font-medium text-foreground">Within 24 hours</p>
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
                <h3 className="font-semibold text-primary-foreground mb-4">What you get</h3>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit.text} className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-primary-foreground/20">
                        <benefit.icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-primary-foreground/90">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-border/50">
            <CardHeader>
              <CardTitle>Get a free quote</CardTitle>
              <CardDescription>
                Tell us about your project and we&apos;ll get back to you with a proposal.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Needed
                  </label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landing-page">Landing page (€200–500)</SelectItem>
                      <SelectItem value="support">Landing page + ongoing support</SelectItem>
                      <SelectItem value="other">Other / not sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your project
                  </label>
                  <Textarea 
                    id="message" 
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Describe your business and what you need..."
                    rows={4}
                    required
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
                  disabled={!agreed || isSubmitting || !service}
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We typically respond within 2-4 hours during business hours.
                </p>
                {submitState.type !== "idle" && (
                  <p
                    className={`text-sm text-center ${
                      submitState.type === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {submitState.text}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
