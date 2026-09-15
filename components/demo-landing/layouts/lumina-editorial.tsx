"use client"

import { useState } from "react"
import Link from "next/link"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import type { DemoLanding } from "@/lib/demo-landings"
import { getDemoExtras } from "@/lib/demo-landing-extras"
import { getDemoGallery } from "@/lib/demo-gallery"
import { DemoBanner } from "@/components/demo-landing/demo-banner"
import { DemoIndustryPhoto } from "@/components/demo-landing/demo-industry-photo"
import { demoThemeVars } from "@/components/demo-landing/demo-theme-vars"
import { ROUTES } from "@/lib/seo/routes"
import "@/components/demo-landing/demo-layouts.css"

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lumina-display",
  display: "swap",
})

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lumina-sans",
  display: "swap",
})

function FaqRow({
  question,
  answer,
  open,
  onToggle,
  muted,
  border,
}: {
  question: string
  answer: string
  open: boolean
  onToggle: () => void
  muted: string
  border: string
}) {
  return (
    <div style={{ borderBottom: `1px solid ${border}` }}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-baseline justify-between gap-6 py-5 text-left"
      >
        <span className="text-[15px] font-medium tracking-wide">{question}</span>
        <span className="shrink-0 text-lg" style={{ color: muted }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed" style={{ color: muted }}>
          {answer}
        </p>
      )}
    </div>
  )
}

export function LuminaEditorial({ demo }: { demo: DemoLanding }) {
  const t = demo.theme
  const extras = getDemoExtras(demo)
  const gallery = getDemoGallery(demo.slug)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div
      className={`demo-layout-root ${display.variable} ${sans.variable} min-h-screen`}
      style={{
        ...demoThemeVars(t),
        color: t.text,
        fontFamily: "var(--font-lumina-sans), system-ui, sans-serif",
      }}
    >
      <DemoBanner clientLabel={demo.clientLabel} category={demo.category} />

      {/* Full-bleed hero — brand first */}
      <section className="relative min-h-[92vh]">
        <DemoIndustryPhoto
          demo={demo}
          className="absolute inset-0"
          overlay="full"
          priority
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${t.bg} 0%, ${t.bg}99 28%, transparent 55%)`,
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:px-8 lg:pb-24">
          <p
            className="demo-fade-up text-[11px] font-medium uppercase tracking-[0.35em]"
            style={{ color: t.accent }}
          >
            {demo.brand}
          </p>
          <h1
            className="demo-fade-up demo-fade-up-delay-1 mt-5 max-w-4xl text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-lumina-display), serif" }}
          >
            {demo.headline}
          </h1>
          <p
            className="demo-fade-up demo-fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: t.muted }}
          >
            {demo.subheadline}
          </p>
          <div className="demo-fade-up demo-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#enquire"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90"
              style={{ backgroundColor: t.primary, color: t.primaryText }}
            >
              {demo.cta}
            </a>
            <a
              href="#chapters"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium tracking-wide"
              style={{ border: `1px solid ${t.border}`, color: t.text }}
            >
              {demo.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Logo filmstrip */}
      <section className="overflow-hidden border-y py-8" style={{ borderColor: t.border }}>
        <div className="demo-marquee-track flex w-max gap-16 px-8">
          {[...demo.trustLogos, ...demo.trustLogos].map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="text-xs font-medium uppercase tracking-[0.28em] whitespace-nowrap"
              style={{ color: t.muted }}
            >
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* Sticky chapters */}
      <section id="chapters" className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <p
              className="text-[11px] uppercase tracking-[0.3em]"
              style={{ color: t.accent }}
            >
              The approach
            </p>
            <h2
              className="mt-4 text-4xl font-medium leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-lumina-display), serif" }}
            >
              {extras.problemHeadline}
            </h2>
          </div>
          <div className="space-y-16 lg:col-span-7 lg:col-start-6">
            {extras.problemItems.map((item, i) => (
              <article key={item.title} className="grid gap-3 sm:grid-cols-[4rem_1fr]">
                <span
                  className="text-sm tabular-nums"
                  style={{ color: t.muted, fontFamily: "var(--font-lumina-display), serif" }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3
                    className="text-2xl font-medium"
                    style={{ fontFamily: "var(--font-lumina-display), serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed" style={{ color: t.muted }}>
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered benefits — editorial list */}
      <section className="border-t" style={{ borderColor: t.border }}>
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-28">
          <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: t.accent }}>
            What you get
          </p>
          <ul className="mt-12 divide-y" style={{ borderColor: t.border }}>
            {demo.features.map((f, i) => (
              <li
                key={f.title}
                className="grid gap-4 py-10 sm:grid-cols-[5rem_1fr_1.2fr] sm:items-baseline"
                style={{ borderColor: t.border }}
              >
                <span
                  className="text-3xl font-medium"
                  style={{ fontFamily: "var(--font-lumina-display), serif", color: t.muted }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-2xl font-medium"
                  style={{ fontFamily: "var(--font-lumina-display), serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-[15px] leading-relaxed" style={{ color: t.muted }}>
                  {f.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Horizontal gallery */}
      <section className="py-8">
        <div className="mb-6 flex items-end justify-between px-6 sm:px-8">
          <h2
            className="text-3xl font-medium sm:text-4xl"
            style={{ fontFamily: "var(--font-lumina-display), serif" }}
          >
            In frame
          </h2>
          <p className="text-xs uppercase tracking-[0.25em]" style={{ color: t.muted }}>
            Scroll →
          </p>
        </div>
        <div className="demo-h-scroll flex gap-4 overflow-x-auto px-6 pb-6 sm:px-8">
          {gallery.map((slide) => (
            <figure key={slide.src} className="w-[78vw] shrink-0 sm:w-[42vw] lg:w-[28vw]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
                style={{ backgroundColor: t.surface }}
              />
              <figcaption
                className="mt-3 text-xs uppercase tracking-[0.2em]"
                style={{ color: t.muted }}
              >
                {slide.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Quiet testimonial */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-8 lg:py-32">
        <blockquote
          className="text-3xl font-medium leading-snug sm:text-4xl"
          style={{ fontFamily: "var(--font-lumina-display), serif" }}
        >
          “{demo.testimonial.quote}”
        </blockquote>
        <p className="mt-8 text-sm" style={{ color: t.muted }}>
          {demo.testimonial.author}
          <span className="mx-2 opacity-40">·</span>
          {demo.testimonial.role}
        </p>
      </section>

      {/* Narrow FAQ */}
      <section className="border-t" style={{ borderColor: t.border }}>
        <div className="mx-auto max-w-xl px-6 py-20 sm:px-8">
          <h2
            className="text-3xl font-medium"
            style={{ fontFamily: "var(--font-lumina-display), serif" }}
          >
            Questions
          </h2>
          <div className="mt-10">
            {extras.faqs.map((faq, i) => (
              <FaqRow
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                muted={t.muted}
                border={t.border}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quiet CTA */}
      <section id="enquire" className="border-t" style={{ borderColor: t.border }}>
        <div className="mx-auto max-w-2xl px-6 py-28 text-center sm:px-8">
          <h2
            className="text-4xl font-medium leading-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-lumina-display), serif" }}
          >
            {extras.closingHeadline}
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: t.muted }}>
            {extras.closingSubheadline}
          </p>
          <Link
            href={ROUTES.contact}
            className="mt-10 inline-flex px-8 py-4 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90"
            style={{ backgroundColor: t.primary, color: t.primaryText }}
          >
            {demo.cta}
          </Link>
        </div>
      </section>

      <footer
        className="border-t py-8 text-center text-xs"
        style={{ borderColor: t.border, color: t.muted }}
      >
        Sample landing · {demo.brand} · Lumina system ·{" "}
        <Link href={ROUTES.examples} className="underline-offset-4 hover:underline">
          All examples
        </Link>
      </footer>
    </div>
  )
}
