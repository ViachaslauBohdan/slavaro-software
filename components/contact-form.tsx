"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Upload } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@vention.com",
    href: "mailto:contact@vention.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 123-4567",
    href: "tel:+18001234567"
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "New York, USA",
    href: "#"
  }
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
              Contact us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to start your project? Get in touch with our team and let&apos;s discuss 
              how we can help you achieve your goals.
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

            <div className="mt-12">
              <h3 className="font-semibold text-foreground mb-4">Our offices</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>New York, USA</div>
                <div>San Francisco, USA</div>
                <div>London, UK</div>
                <div>Berlin, Germany</div>
                <div>Warsaw, Poland</div>
                <div>Tel Aviv, Israel</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you within a few hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Work email
                  </label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company name
                  </label>
                  <Input id="company" placeholder="Your company" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    How can we help?
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..."
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground mt-1">0 / 2048</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Attach a file (optional)
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Max file size: 30MB
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="privacy" 
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to the Privacy Policy and give my permission to process my personal data 
                    for the purposes specified in the Privacy Policy.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={!agreed}
                >
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
