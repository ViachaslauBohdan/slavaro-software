"use client"

import { useState } from "react"
import Link from "next/link"
import { DM_Sans, IBM_Plex_Sans } from "next/font/google"
import { ArrowRight, Check } from "lucide-react"
import type { DemoLanding } from "@/lib/demo-landings"
import { getDemoExtras } from "@/lib/demo-landing-extras"
import { getDemoGallery } from "@/lib/demo-gallery"
import { DemoBanner } from "@/components/demo-landing/demo-banner"
import { DemoIndustryPhoto } from "@/components/demo-landing/demo-industry-photo"
import { demoThemeVars } from "@/components/demo-landing/demo-theme-vars"
import { ROUTES } from "@/lib/seo/routes"
import "@/components/demo-landing/demo-layouts.css"

const heading = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-atlas-heading",
  display: "swap",
})

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-atlas-body",
  display: "swap",
})

export function AtlasProduct({ demo }: { demo: DemoLanding }) {
  const t = demo.theme
  const extras = getDemoExtras(demo)
  const gallery = getDemoGallery(demo.slug)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div
      className={`demo-layout-root ${heading.variable} ${body.variable} min-h-screen`}
      style={{
        ...demoThemeVars(t),
        color: t.text,
        fontFamily: "var(--font-atlas-body), system-ui, sans-serif",
      }}
    >
      <DemoBanner clientLabel={demo.clientLabel} category={demo.category} />

      {/* Nav strip */}
      <header
        className="sticky top-0 z-30 border-b backdrop-blur-md"
        style={{ borderColor: t.border, backgroundColor: `${t.bg}ee` }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <span
            className="text-sm font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-atlas-heading), sans-serif", color: t.text }}
          >
            {demo.brand}
          </span>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold"
            style={{ backgroundColor: t.primary, color: t.primaryText }}
          >
            {demo.cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Split hero + product panel */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-12 sm:px-8 lg:pb-16 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="demo-fade-up">
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: t.accent }}
            >
              {demo.eyebrow}
            </p>
            <h1
              className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
              style={{ fontFamily: "var(--font-atlas-heading), sans-serif", color: t.text }}
            >
              {demo.headline}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: t.muted }}>
              {demo.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition-colors"
                style={{ backgroundColor: t.primary, color: t.primaryText }}
              >
                {demo.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#product"
                className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
                style={{ border: `1px solid ${t.border}`, color: t.text, backgroundColor: t.surface }}
              >
                {demo.ctaSecondary}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              {demo.stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-2xl font-bold tracking-tight"
                    style={{ fontFamily: "var(--font-atlas-heading), sans-serif", color: t.text }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs" style={{ color: t.muted }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating product / device panel */}
          <div id="product" className="demo-fade-up demo-fade-up-delay-1 relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
              style={{
                background: `radial-gradient(circle at 30% 20%, ${t.primary}22, transparent 55%)`,
              }}
            />
            <div
              className="relative overflow-hidden rounded-2xl border shadow-xl"
              style={{ borderColor: t.border, backgroundColor: t.surface }}
            >
              <div
                className="flex items-center gap-1.5 border-b px-4 py-3"
                style={{ borderColor: t.border }}
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#f87171" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#fbbf24" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#34d399" }} />
                <span className="ml-3 text-[11px]" style={{ color: t.muted }}>
                  {demo.brand.toLowerCase()}.app
                </span>
              </div>
              <DemoIndustryPhoto demo={demo} className="aspect-[16/11]" overlay="none" priority />
              <div className="grid grid-cols-3 gap-px border-t" style={{ borderColor: t.border, backgroundColor: t.border }}>
                {demo.features.slice(0, 3).map((f) => (
                  <div key={f.title} className="p-4" style={{ backgroundColor: t.surface }}>
                    <p
                      className="text-xs font-semibold"
                      style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
                    >
                      {f.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-snug" style={{ color: t.muted }}>
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo row */}
      <section className="border-y py-7" style={{ borderColor: t.border, backgroundColor: t.surface }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 sm:px-8">
          <span className="text-xs font-medium" style={{ color: t.muted }}>
            Trusted alongside
          </span>
          {demo.trustLogos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-semibold tracking-tight"
              style={{ color: t.text, opacity: 0.7, fontFamily: "var(--font-atlas-heading), sans-serif" }}
            >
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* Bento features */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: t.accent }}>
            Platform
          </p>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-atlas-heading), sans-serif", color: t.text }}
          >
            {extras.problemHeadline}
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {demo.features.map((f, i) => (
            <div
              key={f.title}
              className={`rounded-2xl border p-6 ${i === 0 ? "sm:col-span-2 lg:col-span-3 lg:row-span-2" : "lg:col-span-3"}`}
              style={{ borderColor: t.border, backgroundColor: t.surface }}
            >
              <div
                className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold"
                style={{ backgroundColor: `${t.primary}14`, color: t.primary }}
              >
                {i + 1}
              </div>
              <h3
                className={`font-bold tracking-tight ${i === 0 ? "text-2xl" : "text-lg"}`}
                style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
              >
                {f.title}
              </h3>
              <p className={`mt-2 leading-relaxed ${i === 0 ? "text-base" : "text-sm"}`} style={{ color: t.muted }}>
                {f.description}
              </p>
              {i === 0 && (
                <div className="mt-8 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={gallery[1]?.src ?? gallery[0].src}
                    alt=""
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
          {extras.problemItems.slice(0, 2).map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border p-6 lg:col-span-3"
              style={{ borderColor: t.border, backgroundColor: `${t.primary}08` }}
            >
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: t.muted }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works timeline */}
      <section className="border-t" style={{ borderColor: t.border, backgroundColor: t.surface }}>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
          >
            How it works
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {demo.steps.map((step, i) => (
              <li key={step.title} className="relative">
                {i < demo.steps.length - 1 && (
                  <div
                    className="absolute left-[1.15rem] top-10 hidden h-px w-[calc(100%-1rem)] md:block"
                    style={{ backgroundColor: t.border }}
                  />
                )}
                <div
                  className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold"
                  style={{ backgroundColor: t.primary, color: t.primaryText }}
                >
                  {i + 1}
                </div>
                <h3
                  className="mt-4 text-lg font-bold"
                  style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: t.muted }}>
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing cards */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: t.accent }}>
            Pricing
          </p>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
          >
            Clear packages
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {extras.packages.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col rounded-2xl border p-6 sm:p-7"
              style={{
                borderColor: pkg.featured ? t.primary : t.border,
                backgroundColor: t.surface,
                boxShadow: pkg.featured ? `0 0 0 1px ${t.primary}` : undefined,
              }}
            >
              {pkg.featured && (
                <span
                  className="mb-3 w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ backgroundColor: `${t.primary}18`, color: t.primary }}
                >
                  Popular
                </span>
              )}
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
              >
                {pkg.name}
              </h3>
              <p className="mt-1 text-sm" style={{ color: t.muted }}>
                {pkg.description}
              </p>
              <p
                className="mt-5 text-3xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
              >
                {pkg.price}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm" style={{ color: t.muted }}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: t.primary }} />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                href={ROUTES.contact}
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg py-3 text-sm font-semibold"
                style={
                  pkg.featured
                    ? { backgroundColor: t.primary, color: t.primaryText }
                    : { border: `1px solid ${t.border}`, color: t.text }
                }
              >
                {demo.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial + gallery strip */}
      <section className="border-t" style={{ borderColor: t.border, backgroundColor: t.surface }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
          <blockquote>
            <p
              className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl"
              style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
            >
              “{demo.testimonial.quote}”
            </p>
            <footer className="mt-6 text-sm" style={{ color: t.muted }}>
              <span className="font-semibold" style={{ color: t.text }}>
                {demo.testimonial.author}
              </span>
              {" · "}
              {demo.testimonial.role}
            </footer>
          </blockquote>
          <div className="grid grid-cols-2 gap-3">
            {gallery.slice(0, 4).map((slide) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                className="aspect-[4/3] rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Two-column FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2
              className="text-3xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
            >
              FAQ
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: t.muted }}>
              Straight answers before you book a call.
            </p>
          </div>
          <div className="lg:col-span-8">
            {extras.faqs.map((faq, i) => (
              <div key={faq.question} className="border-b" style={{ borderColor: t.border }}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
                >
                  {faq.question}
                  <span style={{ color: t.muted }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm leading-relaxed" style={{ color: t.muted }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t" style={{ borderColor: t.border }}>
        <div
          className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24"
        >
          <div
            className="rounded-3xl px-8 py-14 text-center sm:px-12"
            style={{ backgroundColor: t.primary, color: t.primaryText }}
          >
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-atlas-heading), sans-serif" }}
            >
              {extras.closingHeadline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed opacity-90 sm:text-base">
              {extras.closingSubheadline}
            </p>
            <Link
              href={ROUTES.contact}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900"
            >
              {demo.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-xs" style={{ borderColor: t.border, color: t.muted }}>
        Sample landing · {demo.brand} · Atlas system ·{" "}
        <Link href={ROUTES.examples} className="underline-offset-4 hover:underline">
          All examples
        </Link>
      </footer>
    </div>
  )
}
