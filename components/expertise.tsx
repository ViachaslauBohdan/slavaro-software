"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Phone, FileText, Rocket } from "lucide-react"
import { deliverySteps, whyVolska, site } from "@/lib/site-content"

const stepIcons = [Phone, FileText, Rocket]

export function Expertise() {
  return (
    <section id="process" className="py-14 lg:py-20 bg-secondary/30 relative overflow-hidden">
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
            Easy, transparent delivery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            No vague estimates or months of silence. Three clear steps from first call to shipped
            product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {deliverySteps.map((item, index) => {
            const Icon = stepIcons[index]
            return (
              <Card
                key={item.step}
                className="relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6">
                  <span className="text-5xl font-bold text-primary/10 absolute top-4 right-4">
                    {item.step}
                  </span>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/team-working.jpg"
              alt="Engineering at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
          </div>

          <div className="relative p-8 lg:p-12">
            <h3 className="text-2xl font-bold tracking-tight text-primary-foreground text-center mb-10">
              Why work with {site.name}?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyVolska.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground mt-2 shrink-0" />
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
