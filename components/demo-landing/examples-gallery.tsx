"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import type { DemoLanding } from "@/lib/demo-landings"
import { DemoCardPreview } from "@/components/demo-landing/demo-card-preview"
import { FadeIn } from "@/components/fade-in"
import { ROUTES } from "@/lib/seo/routes"

type ExamplesGalleryProps = {
  demos: DemoLanding[]
  title: string
  description: string
  featured?: boolean
  badge?: string
}

export function ExamplesGallery({
  demos,
  title,
  description,
  featured = true,
  badge = "Featured",
}: ExamplesGalleryProps) {
  if (demos.length === 0) return null

  const [headline, ...rest] = featured ? demos : [null, ...demos]
  const gridDemos = featured ? rest : demos.filter(Boolean)

  return (
    <div className="space-y-8">
      <FadeIn>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </FadeIn>

      {featured && headline && (
        <FadeIn delay={80}>
          <Link
            href={`${ROUTES.examples}/${headline.slug}`}
            className="examples-featured group relative block overflow-hidden rounded-2xl border border-border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[280px] sm:min-h-[320px]">
                <DemoCardPreview demo={headline} className="min-h-[280px] sm:min-h-[320px]" priority />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${headline.theme.primary}22, transparent 60%)`,
                  }}
                />
              </div>
              <div className="flex flex-col justify-center bg-card p-8 sm:p-10 lg:p-12">
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider"
                  style={{
                    backgroundColor: `${headline.theme.primary}22`,
                    color: headline.theme.accent,
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  {badge} · {headline.clientLabel}
                </span>
                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  {headline.brand}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {headline.headline}
                </p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-link transition-all group-hover:gap-3">
                  Open live sample
                  <ArrowRight className="h-4 w-4" />
                </p>
              </div>
            </div>
          </Link>
        </FadeIn>
      )}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {gridDemos.map((demo, i) => (
          <FadeIn key={demo.slug} delay={i * 70}>
            <Link
              href={`${ROUTES.examples}/${demo.slug}`}
              className="examples-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <DemoCardPreview demo={demo} priority={i < 6} />
              </div>

              <div className="flex flex-1 flex-col p-6 pt-4">
                <span
                  className="text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: demo.theme.accent }}
                >
                  {demo.clientLabel}
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight">{demo.brand}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {demo.headline}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-subtle-foreground">Interactive demo</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-link transition-all group-hover:gap-2.5">
                    View
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              <div
                className="h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: demo.theme.primary }}
              />
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
