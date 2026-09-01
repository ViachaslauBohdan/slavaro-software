"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"
import { experience, site } from "@/lib/site-content"

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<(typeof experience)[number] | null>(null)

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="experience" className="py-14 lg:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Production systems shipped
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            8+ years across fintech, IoT, SaaS, and enterprise AI — from MVP to platform scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 cursor-pointer ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <div className={`p-6 ${index === 0 ? "lg:p-8" : ""}`}>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                    {item.industry}
                  </Badge>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{item.period}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">{item.company}</h3>
                <p className="text-sm font-medium text-primary mb-3">{item.role}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.highlight}</p>

                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View details <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need similar delivery for your product?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" onClick={scrollToContact}>
              Discuss your project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                Book 30-min call
              </a>
            </Button>
          </div>
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/10">
                    {selectedItem.industry}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground">{selectedItem.company}</h3>
                  <p className="text-primary font-medium">{selectedItem.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">{selectedItem.period}</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-muted-foreground mb-6">{selectedItem.description}</p>

              <div className="rounded-lg border border-border bg-primary/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                  Outcome
                </p>
                <p className="text-sm text-primary font-medium">{selectedItem.result}</p>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  className="flex-1"
                  onClick={() => {
                    setSelectedItem(null)
                    scrollToContact()
                  }}
                >
                  Start a similar project
                </Button>
                <Button variant="outline" asChild>
                  <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                    Book a call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
