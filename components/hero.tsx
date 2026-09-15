"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site-content"
import { ROUTES } from "@/lib/seo/routes"
import { FadeIn } from "@/components/fade-in"
import { HomeProductPreview } from "@/components/home-product-preview"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="absolute inset-0 grid-line opacity-40" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="eyebrow mb-6">{site.tagline}</p>
            <h1 className="text-balance text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.25rem]">
              MVP &amp; Web Application Development
            </h1>
            <p className="mt-4 text-xl font-semibold text-primary sm:text-2xl">
              From idea to working product — fast.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
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
              Senior engineering team · 10+ years experience · End-to-end delivery
            </p>
          </FadeIn>

          <FadeIn delay={120} className="lg:pt-4">
            <HomeProductPreview />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
