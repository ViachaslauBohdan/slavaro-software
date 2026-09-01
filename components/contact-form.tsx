"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { contactNeeds, site } from "@/lib/site-content"

export function ContactForm({ variant = "home" }: { variant?: "home" | "page" }) {
  const [agreed, setAgreed] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [need, setNeed] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<{
    type: "idle" | "success" | "error"
    text: string
  }>({ type: "idle", text: "" })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!agreed || isSubmitting || !need) return

    setIsSubmitting(true)
    setSubmitState({ type: "idle", text: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, service: need, message }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error ?? "Could not send your request")
      }

      setSubmitState({
        type: "success",
        text: "Message sent. I'll review your project and respond within 24 hours.",
      })
      setName("")
      setEmail("")
      setCompany("")
      setNeed("")
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
    <Section id="contact" className={variant === "page" ? "pt-8 lg:pt-10" : "border-t border-border"}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <FadeIn>
          {variant === "page" ? (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Discuss Your Software Project
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
              What&apos;s stopping your product from launching?
            </h2>
          )}
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            Send me a short description of what you&apos;re trying to build, fix, or automate.
            I&apos;ll tell you how I&apos;d approach it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-md px-7" asChild>
              <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                Book a discovery call
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-subtle-foreground">
            {site.email} · {site.phone}
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="surface-form p-6 lg:p-8">
            <h3 className="text-lg font-semibold mb-1">Discuss Your Project</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Tell me briefly what you&apos;re trying to achieve.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Business email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company name"
                />
              </div>

              <div>
                <label htmlFor="need" className="block text-sm font-medium mb-2">
                  What do you need help with?
                </label>
                <Select value={need} onValueChange={setNeed}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactNeeds.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell me briefly what you&apos;re trying to achieve
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's the business problem? What's blocking launch? What does success look like?"
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                  I agree to be contacted about my inquiry.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full rounded-md"
                disabled={!agreed || isSubmitting || !need}
              >
                {isSubmitting ? "Sending..." : "Discuss Your Project"}
              </Button>

              {submitState.type !== "idle" && (
                <p
                  className={`text-sm text-center ${
                    submitState.type === "success" ? "text-success" : "text-destructive"
                  }`}
                >
                  {submitState.text}
                </p>
              )}
            </form>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
