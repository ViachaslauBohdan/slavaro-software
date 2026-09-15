"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { DemoLanding } from "@/lib/demo-landings"
import { DEMO_LAYOUT_LABELS } from "@/lib/demo-landings"
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

function LayoutBadge({ demo }: { demo: DemoLanding }) {
  const label = DEMO_LAYOUT_LABELS[demo.layout]
  const styles =
    demo.layout === "editorial"
      ? "bg-stone-900 text-stone-100"
      : demo.layout === "kinetic"
        ? "bg-neutral-950 text-[#c8ff00] border border-[#c8ff00]/40"
        : "bg-white text-slate-800 border border-slate-200 shadow-sm"

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${styles}`}
    >
      {label}
    </span>
  )
}

function PreviewShell({ demo, priority }: { demo: DemoLanding; priority?: boolean }) {
  if (demo.layout === "editorial") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-stone-950">
        <DemoCardPreview demo={demo} className="absolute inset-0" priority={priority} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p
            className="text-2xl font-medium leading-none text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {demo.brand}
          </p>
        </div>
      </div>
    )
  }

  if (demo.layout === "kinetic") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-black">
        <DemoCardPreview demo={demo} className="absolute inset-0 opacity-70" priority={priority} />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-[#c8ff00]/20" />
        <div className="absolute left-3 top-3">
          <LayoutBadge demo={demo} />
        </div>
        <p className="absolute bottom-3 left-3 right-3 text-xl font-extrabold uppercase leading-none tracking-tight text-white">
          {demo.brand}
        </p>
        <div className="absolute bottom-0 left-0 h-1.5 w-1/3 bg-[#c8ff00]" />
      </div>
    )
  }

  // Atlas / product
  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-100">
      <div className="absolute inset-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
        <div className="flex h-6 items-center gap-1 border-b border-slate-100 px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
        <DemoCardPreview demo={demo} className="absolute inset-x-0 bottom-0 top-6" priority={priority} />
      </div>
      <div className="absolute left-5 top-10 z-10">
        <LayoutBadge demo={demo} />
      </div>
    </div>
  )
}

export function ExamplesGallery({
  demos,
  title,
  description,
  featured = true,
  badge = "Featured",
}: ExamplesGalleryProps) {
  if (demos.length === 0) return null

  const headline = featured ? demos[0] : null
  const gridDemos = featured ? demos.slice(1) : demos

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
                <PreviewShell demo={headline} priority />
              </div>
              <div className="flex flex-col justify-center bg-card p-8 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-2">
                  <LayoutBadge demo={headline} />
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {badge} · {headline.clientLabel}
                  </span>
                </div>
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
                <PreviewShell demo={demo} priority={i < 6} />
              </div>

              <div className="flex flex-1 flex-col p-6 pt-4">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-widest"
                    style={{ color: demo.theme.accent }}
                  >
                    {demo.clientLabel}
                  </span>
                  <LayoutBadge demo={demo} />
                </div>
                <h3 className="mt-2 text-xl font-bold tracking-tight">{demo.brand}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {demo.headline}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-subtle-foreground">
                    {DEMO_LAYOUT_LABELS[demo.layout]} system
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-link transition-all group-hover:gap-2.5">
                    View
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
