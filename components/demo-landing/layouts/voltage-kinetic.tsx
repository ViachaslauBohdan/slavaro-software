"use client"

import { useState } from "react"
import Link from "next/link"
import { Space_Grotesk, Syne } from "next/font/google"
import { ArrowUpRight } from "lucide-react"
import type { DemoLanding } from "@/lib/demo-landings"
import { getDemoExtras } from "@/lib/demo-landing-extras"
import { getDemoGallery } from "@/lib/demo-gallery"
import { DemoBanner } from "@/components/demo-landing/demo-banner"
import { DemoIndustryPhoto } from "@/components/demo-landing/demo-industry-photo"
import { demoThemeVars } from "@/components/demo-landing/demo-theme-vars"
import { ROUTES } from "@/lib/seo/routes"
import "@/components/demo-landing/demo-layouts.css"

const display = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-voltage-display",
  display: "swap",
})

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-voltage-sans",
  display: "swap",
})

export function VoltageKinetic({ demo }: { demo: DemoLanding }) {
  const t = demo.theme
  const extras = getDemoExtras(demo)
  const gallery = getDemoGallery(demo.slug)
  const [slide, setSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div
      className={`demo-layout-root ${display.variable} ${sans.variable} min-h-screen overflow-x-hidden`}
      style={{
        ...demoThemeVars(t),
        color: t.text,
        fontFamily: "var(--font-voltage-sans), system-ui, sans-serif",
      }}
    >
      <DemoBanner clientLabel={demo.clientLabel} category={demo.category} />

      {/* Oversized stacked hero */}
      <section className="relative px-4 pb-16 pt-10 sm:px-6 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="flex items-start justify-between gap-4">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.35em]"
            style={{ color: t.primary }}
          >
            {demo.brand}
          </p>
          <Link
            href={ROUTES.contact}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider"
            style={{ color: t.accent }}
          >
            Build yours <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <h1
          className="demo-fade-up mt-10 max-w-[18ch] text-[clamp(3rem,12vw,8.5rem)] font-extrabold leading-[0.85] tracking-[-0.04em] uppercase"
          style={{ fontFamily: "var(--font-voltage-display), sans-serif" }}
        >
          {demo.headline.split(/[.!?]/)[0] || demo.headline}
        </h1>
        <div
          className="demo-kinetic-underline mt-6 h-1.5 w-40 sm:w-64"
          style={{ backgroundColor: t.primary }}
        />
        <p
          className="demo-fade-up demo-fade-up-delay-1 mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ color: t.muted }}
        >
          {demo.subheadline}
        </p>
        <div className="demo-fade-up demo-fade-up-delay-2 mt-10 flex flex-wrap gap-3">
          <a
            href="#go"
            className="inline-flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: t.primary, color: t.primaryText }}
          >
            {demo.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#bands"
            className="inline-flex items-center px-6 py-4 text-sm font-bold uppercase tracking-wider"
            style={{ border: `2px solid ${t.primary}`, color: t.primary }}
          >
            {demo.ctaSecondary}
          </a>
        </div>

        {/* Split visual */}
        <div className="mt-16 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
          <DemoIndustryPhoto
            demo={demo}
            className="min-h-[280px] sm:min-h-[380px] lg:min-h-[460px]"
            overlay="none"
            priority
          />
          <div className="grid gap-3">
            {demo.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col justify-center border-2 p-6"
                style={{ borderColor: t.border, backgroundColor: t.surface }}
              >
                <p
                  className="text-4xl font-extrabold tracking-tight sm:text-5xl"
                  style={{ fontFamily: "var(--font-voltage-display), sans-serif", color: t.primary }}
                >
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: t.muted }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite marquee proof */}
      <section
        className="overflow-hidden border-y-2 py-5"
        style={{ borderColor: t.primary, backgroundColor: t.primary, color: t.primaryText }}
      >
        <div className="demo-marquee-track flex w-max gap-10">
          {[...demo.trustLogos, ...demo.trustLogos, ...demo.trustLogos].map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="text-sm font-extrabold uppercase tracking-[0.25em] whitespace-nowrap"
              style={{ fontFamily: "var(--font-voltage-display), sans-serif" }}
            >
              {logo} ✦
            </span>
          ))}
        </div>
      </section>

      {/* Alternating full-bleed bands */}
      <section id="bands">
        {demo.features.map((f, i) => {
          const invert = i % 2 === 1
          return (
            <div
              key={f.title}
              className="grid lg:grid-cols-2"
              style={{
                backgroundColor: invert ? t.primary : t.bg,
                color: invert ? t.primaryText : t.text,
              }}
            >
              <div
                className={`flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14 lg:py-24 ${
                  invert ? "lg:order-2" : ""
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-70">
                  0{i + 1} / Feature
                </p>
                <h2
                  className="mt-4 text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-voltage-display), sans-serif" }}
                >
                  {f.title}
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed opacity-80">{f.description}</p>
              </div>
              <div className={`relative min-h-[260px] sm:min-h-[340px] ${invert ? "lg:order-1" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={gallery[i % gallery.length]?.src}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-40"
                  style={{ backgroundColor: invert ? t.bg : t.primary }}
                />
              </div>
            </div>
          )
        })}
      </section>

      {/* Problem band */}
      <section className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h2
          className="max-w-4xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-voltage-display), sans-serif" }}
        >
          {extras.problemHeadline}
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {extras.problemItems.map((item, i) => (
            <div
              key={item.title}
              className="border-2 p-6"
              style={{
                borderColor: i === 1 ? t.primary : t.border,
                backgroundColor: i === 1 ? `${t.primary}18` : t.surface,
              }}
            >
              <p className="text-xs font-bold" style={{ color: t.primary }}>
                //{String(i + 1).padStart(2, "0")}
              </p>
              <h3
                className="mt-3 text-xl font-extrabold uppercase tracking-tight"
                style={{ fontFamily: "var(--font-voltage-display), sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: t.muted }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Snap carousel */}
      <section className="border-y-2 py-16" style={{ borderColor: t.border }}>
        <div className="mb-8 flex items-end justify-between px-4 sm:px-6 lg:px-10">
          <h2
            className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-voltage-display), sans-serif" }}
          >
            Snap reel
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous"
              className="h-10 w-10 border-2 text-lg font-bold"
              style={{ borderColor: t.border }}
              onClick={() => setSlide((s) => (s - 1 + gallery.length) % gallery.length)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next"
              className="h-10 w-10 border-2 text-lg font-bold"
              style={{ borderColor: t.primary, backgroundColor: t.primary, color: t.primaryText }}
              onClick={() => setSlide((s) => (s + 1) % gallery.length)}
            >
              →
            </button>
          </div>
        </div>
        <div className="relative mx-4 overflow-hidden sm:mx-6 lg:mx-10">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {gallery.map((g) => (
              <figure key={g.src} className="w-full shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={g.alt}
                  className="aspect-[21/9] w-full object-cover"
                  loading="lazy"
                />
                <figcaption
                  className="mt-3 text-xs font-bold uppercase tracking-[0.25em]"
                  style={{ color: t.muted }}
                >
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Steps as big numbers */}
      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: t.primary }}>
          Process
        </p>
        <div className="mt-8 space-y-0">
          {demo.steps.map((step, i) => (
            <div
              key={step.title}
              className="grid items-baseline gap-4 border-t-2 py-10 sm:grid-cols-[8rem_1fr] lg:grid-cols-[12rem_1fr_1fr]"
              style={{ borderColor: t.border }}
            >
              <span
                className="text-6xl font-extrabold leading-none tracking-tighter sm:text-7xl"
                style={{ fontFamily: "var(--font-voltage-display), sans-serif", color: t.primary }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl"
                style={{ fontFamily: "var(--font-voltage-display), sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed sm:text-base" style={{ color: t.muted }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial slab */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-10"
        style={{ backgroundColor: t.surface }}
      >
        <blockquote
          className="max-w-5xl text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-voltage-display), sans-serif" }}
        >
          “{demo.testimonial.quote}”
        </blockquote>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: t.primary }}>
          {demo.testimonial.author} — {demo.testimonial.role}
        </p>
      </section>

      {/* FAQ dense */}
      <section className="border-t-2 px-4 py-16 sm:px-6 lg:px-10" style={{ borderColor: t.border }}>
        <h2
          className="text-3xl font-extrabold uppercase tracking-tight"
          style={{ fontFamily: "var(--font-voltage-display), sans-serif" }}
        >
          FAQ
        </h2>
        <div className="mt-8 max-w-3xl">
          {extras.faqs.map((faq, i) => (
            <button
              key={faq.question}
              type="button"
              className="block w-full border-b-2 py-5 text-left"
              style={{ borderColor: t.border }}
              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
            >
              <span
                className="flex items-start justify-between gap-4 text-base font-bold uppercase tracking-tight sm:text-lg"
                style={{ fontFamily: "var(--font-voltage-display), sans-serif" }}
              >
                {faq.question}
                <span style={{ color: t.primary }}>{openFaq === i ? "−" : "+"}</span>
              </span>
              {openFaq === i && (
                <p className="mt-3 text-sm leading-relaxed normal-case" style={{ color: t.muted }}>
                  {faq.answer}
                </p>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* High-contrast CTA slab */}
      <section
        id="go"
        className="px-4 py-24 sm:px-6 lg:px-10"
        style={{ backgroundColor: t.primary, color: t.primaryText }}
      >
        <h2
          className="max-w-4xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-voltage-display), sans-serif" }}
        >
          {extras.closingHeadline}
        </h2>
        <p className="mt-6 max-w-xl text-base opacity-80">{extras.closingSubheadline}</p>
        <Link
          href={ROUTES.contact}
          className="mt-10 inline-flex items-center gap-2 border-2 border-current px-8 py-4 text-sm font-extrabold uppercase tracking-wider transition-transform hover:scale-[1.02]"
        >
          {demo.cta} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>

      <footer
        className="border-t-2 py-8 text-center text-xs font-bold uppercase tracking-[0.2em]"
        style={{ borderColor: t.border, color: t.muted }}
      >
        Sample · {demo.brand} · Voltage ·{" "}
        <Link href={ROUTES.examples} className="underline-offset-4 hover:underline">
          All examples
        </Link>
      </footer>
    </div>
  )
}
