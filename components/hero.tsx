"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { deliveryPipeline, site } from "@/lib/site-content"
import { ROUTES } from "@/lib/seo/routes"
import { FadeIn } from "@/components/fade-in"

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="relative surface-elevated overflow-hidden">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-secondary">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <div className="mx-auto h-5 w-40 rounded bg-card" />
        </div>

        <div className="grid grid-cols-12 gap-3 p-4">
          <div className="col-span-3 space-y-2">
            <div className="h-3 w-full rounded bg-secondary" />
            <div className="h-3 w-4/5 rounded bg-border" />
            <div className="h-3 w-full rounded bg-border" />
            <div className="h-3 w-3/5 rounded bg-border" />
          </div>
          <div className="col-span-9 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded-md border border-border bg-secondary" />
              <div className="h-16 rounded-md border border-border bg-secondary" />
              <div className="h-16 rounded-md border border-border bg-secondary" />
            </div>
            <div className="h-28 rounded-md border border-border bg-secondary p-3">
              <div className="h-2 w-1/3 rounded bg-border mb-2" />
              <div className="h-2 w-full rounded bg-border/80 mb-1.5" />
              <div className="h-2 w-5/6 rounded bg-border/80 mb-1.5" />
              <div className="h-2 w-2/3 rounded bg-border/80" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {deliveryPipeline.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="text-xs font-medium text-subtle-foreground">{step}</span>
            {i < deliveryPipeline.length - 1 && (
              <span className="pipeline-arrow text-xs" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden hero-bg">
      <div className="absolute inset-0 grid-line opacity-40" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <FadeIn>
            <p className="eyebrow mb-6">{site.tagline}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] text-balance text-foreground">
              MVP &amp; Web Application Development
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-[#3B82F6]">
              From idea to working product — fast.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              We help founders and businesses design, build, and launch web platforms, MVPs, and
              automation — without hiring an entire development team.
            </p>
            <p className="mt-4 text-sm text-subtle-foreground">
              You bring the idea or business problem. We handle the technical delivery.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-md px-7" asChild>
                <Link href={ROUTES.contact}>Discuss Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-md px-7" asChild>
                <Link href={ROUTES.about}>See What We Build</Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-subtle-foreground">
              Senior engineering team · 8+ years experience · End-to-end delivery
            </p>
          </FadeIn>

          <FadeIn delay={120} className="lg:pt-4">
            <ProductPreview />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
