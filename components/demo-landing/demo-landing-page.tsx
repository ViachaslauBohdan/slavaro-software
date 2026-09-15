"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Building2,
  Calendar,
  Camera,
  Car,
  Check,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Dumbbell,
  FlaskConical,
  GraduationCap,
  HardHat,
  Heart,
  Home,
  Landmark,
  LayoutDashboard,
  MapPin,
  Plane,
  Plug,
  Rocket,
  Scale,
  Search,
  Shield,
  Sparkles,
  Stethoscope,
  Truck,
  UtensilsCrossed,
  Users,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react"
import type { DemoLanding } from "@/lib/demo-landings"
import { getDemoExtras } from "@/lib/demo-landing-extras"
import { DemoBanner } from "@/components/demo-landing/demo-banner"
import { DemoAmbientBg } from "@/components/demo-landing/demo-ambient-bg"
import { DemoIndustryPhoto } from "@/components/demo-landing/demo-industry-photo"
import { DemoHeroVisual } from "@/components/demo-landing/demo-visuals"
import { DemoMarquee } from "@/components/demo-landing/demo-marquee"
import { DemoGallerySlider } from "@/components/demo-landing/demo-gallery-slider"
import { DemoTestimonialsSlider } from "@/components/demo-landing/demo-testimonials-slider"
import { FadeIn } from "@/components/fade-in"
import { ROUTES } from "@/lib/seo/routes"

const FEATURE_ICONS: Record<string, LucideIcon[]> = {
  logistics: [Truck, MapPin, Shield],
  pharma: [FlaskConical, Shield, CheckCircle2],
  events: [Calendar, Sparkles, LayoutDashboard],
  beauty: [Sparkles, Calendar, CheckCircle2],
  legal: [Scale, Shield, CheckCircle2],
  restaurant: [UtensilsCrossed, Calendar, Sparkles],
  fitness: [Dumbbell, Calendar, Zap],
  "real-estate": [Building2, MapPin, Search],
  healthcare: [Stethoscope, Heart, Shield],
  education: [GraduationCap, BookOpen, Users],
  construction: [HardHat, Building2, CheckCircle2],
  automotive: [Car, MapPin, Shield],
  travel: [Plane, MapPin, Calendar],
  finance: [Landmark, BarChart3, Shield],
  cleaning: [Sparkles, Home, CheckCircle2],
  photography: [Camera, Sparkles, Calendar],
  "saas-mvp": [BarChart3, CreditCard, Rocket],
  "web-platform": [Calendar, LayoutDashboard, Plug],
  "product-refresh": [Sparkles, Zap, CheckCircle2],
  "product-rescue": [Search, Wrench, Shield],
  "business-automation": [Plug, Workflow, BarChart3],
  "ai-assistant": [Bot, Shield, Sparkles],
}

function FaqItem({
  question,
  answer,
  theme,
}: {
  question: string
  answer: string
  theme: DemoLanding["theme"]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: `1px solid ${theme.border}` }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          style={{ color: theme.accent }}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed" style={{ color: theme.muted }}>
          {answer}
        </p>
      )}
    </div>
  )
}

export function DemoLandingPage({ demo }: { demo: DemoLanding }) {
  const { theme: t } = demo
  const icons = FEATURE_ICONS[demo.slug] ?? [Sparkles, Zap, CheckCircle2]
  const extras = getDemoExtras(demo)
  const moreTestimonials = [
    demo.testimonial,
    {
      quote: `Working with ${demo.brand} felt organized from the first conversation — clear process, clear owners, clear outcomes.`,
      author: "Alex Rivera",
      role: `Client · ${demo.clientLabel}`,
    },
    {
      quote: "The landing made the offer obvious. We knew exactly what to do next — and conversion followed.",
      author: "Nina Kowalski",
      role: "Marketing lead · Pilot customer",
    },
  ]

  return (
    <div
      className="relative min-h-screen overflow-x-hidden font-sans"
      style={{ backgroundColor: t.bg, color: t.text }}
    >
      <DemoBanner clientLabel={demo.clientLabel} category={demo.category} />

      <header
        className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6"
        style={{ borderBottom: `1px solid ${t.border}` }}
      >
        <span className="text-lg font-semibold tracking-tight">{demo.brand}</span>
        <nav className="hidden gap-7 text-sm sm:flex" style={{ color: t.muted }}>
          <a href="#benefits" className="transition-opacity hover:opacity-80">
            Benefits
          </a>
          <a href="#how" className="transition-opacity hover:opacity-80">
            How it works
          </a>
          <a href="#gallery" className="transition-opacity hover:opacity-80">
            Gallery
          </a>
          <a href="#pricing" className="transition-opacity hover:opacity-80">
            Pricing
          </a>
          <a href="#faq" className="transition-opacity hover:opacity-80">
            FAQ
          </a>
        </nav>
        <button
          type="button"
          className="demo-btn-glow rounded-md px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.02]"
          style={{ backgroundColor: t.primary, color: t.primaryText }}
        >
          {demo.cta}
        </button>
      </header>

      <main>
        {/* 1. Hero */}
        <section className="relative">
          <DemoAmbientBg theme={t} />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeIn>
                <p
                  className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest"
                  style={{ color: t.accent }}
                >
                  <span
                    className="demo-pulse-dot h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: t.accent }}
                  />
                  {demo.eyebrow}
                </p>
                <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
                  {demo.headline}
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ color: t.muted }}>
                  {demo.subheadline}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="demo-btn-glow inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: t.primary, color: t.primaryText }}
                  >
                    {demo.cta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md border px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
                    style={{ borderColor: t.border, color: t.text }}
                  >
                    {demo.ctaSecondary}
                  </button>
                </div>
                <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: t.muted }}>
                  {["No commitment to start", "Clear next step", "Reply within 24h"].map((item) => (
                    <li key={item} className="inline-flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5" style={{ color: t.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {demo.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="demo-stat-card rounded-xl p-4 transition-transform hover:-translate-y-1"
                      style={{
                        backgroundColor: `${t.surface}cc`,
                        border: `1px solid ${t.border}`,
                      }}
                    >
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="mt-1 text-xs" style={{ color: t.muted }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={120} className="relative lg:pl-4">
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
                <DemoIndustryPhoto
                  demo={demo}
                  className="aspect-[4/3] min-h-[280px] transition-transform duration-700 group-hover:scale-105 sm:min-h-[360px] lg:min-h-[420px]"
                  overlay="bottom"
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4 sm:px-6 sm:py-5"
                  style={{ background: `linear-gradient(to top, ${t.bg}f2, transparent)` }}
                >
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: t.accent }}>
                    {demo.clientLabel}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{demo.brand}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. Social proof logos */}
        <DemoMarquee items={demo.trustLogos} theme={t} />

        {/* 3. Problem / why us */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: t.accent }}>
              The problem
            </p>
            <h2 className="mt-3 max-w-3xl text-2xl font-bold sm:text-3xl">{extras.problemHeadline}</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {extras.problemItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div
                  className="h-full rounded-2xl p-6"
                  style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}
                >
                  <span className="text-xs font-mono" style={{ color: t.accent }}>
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: t.muted }}>
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 4. Benefits */}
        <section
          id="benefits"
          className="scroll-mt-24 py-16 sm:py-20"
          style={{ backgroundColor: t.surface, borderTop: `1px solid ${t.border}` }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: t.accent }}>
                Benefits
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">What you get with {demo.brand}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: t.muted }}>
                Clear value blocks visitors expect before they trust a CTA — benefits first, features second.
              </p>
            </FadeIn>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {demo.features.map((feature, i) => {
                const Icon = icons[i] ?? Sparkles
                return (
                  <FadeIn key={feature.title} delay={i * 100}>
                    <div
                      className="demo-feature-card group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                      style={{ backgroundColor: t.bg, border: `1px solid ${t.border}` }}
                    >
                      <div
                        className="mb-4 inline-flex rounded-xl p-3 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${t.primary}22`, color: t.accent }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: t.muted }}>
                        {feature.description}
                      </p>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* 5. How it works */}
        <section id="how" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: t.accent }}>
                Process
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">How it works</h2>
              <ol className="mt-10 space-y-5">
                {demo.steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-xl p-4"
                    style={{ border: `1px solid ${t.border}` }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                      style={{ backgroundColor: `${t.primary}33`, color: t.accent }}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: t.muted }}>
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeIn delay={150}>
              <div
                className="overflow-hidden rounded-2xl p-1"
                style={{ background: `linear-gradient(135deg, ${t.primary}55, ${t.accent}33)` }}
              >
                <div className="rounded-[14px] p-4 sm:p-6" style={{ backgroundColor: t.surface }}>
                  <p className="mb-4 text-xs font-medium uppercase tracking-wider" style={{ color: t.muted }}>
                    Product / service preview
                  </p>
                  <DemoHeroVisual slug={demo.slug} theme={t} />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 6. Full-bleed gallery slider */}
        <section
          id="gallery"
          className="scroll-mt-24 py-16 sm:py-20"
          style={{ backgroundColor: t.surface, borderTop: `1px solid ${t.border}` }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: t.accent }}>
                Gallery
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">See {demo.brand} in action</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: t.muted }}>
                Visual proof builds trust fast — swipe through the atmosphere, spaces, and details of
                this {demo.clientLabel.toLowerCase()}.
              </p>
            </FadeIn>
            <div className="mt-10">
              <DemoGallerySlider demo={demo} variant="full" autoplayMs={5000} />
            </div>
          </div>
        </section>

        {/* 7. Audience */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <DemoIndustryPhoto
                demo={demo}
                className="aspect-[16/10] min-h-[240px]"
                overlay="full"
              />
            </div>
            <FadeIn delay={100}>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: t.accent }}>
                Audience
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{extras.audienceHeadline}</h2>
              <ul className="mt-8 space-y-4">
                {extras.audienceItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: t.accent }} />
                    <span style={{ color: t.muted }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* 8. Peek gallery slider */}
        <section
          className="py-16 sm:py-20"
          style={{ backgroundColor: t.surface, borderTop: `1px solid ${t.border}` }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: t.accent }}>
                    More visuals
                  </p>
                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Moments & highlights</h2>
                </div>
                <p className="max-w-sm text-sm" style={{ color: t.muted }}>
                  Card-style gallery — drag or use arrows. Ideal for portfolios, venues, and products.
                </p>
              </div>
            </FadeIn>
            <div className="mt-10">
              <DemoGallerySlider demo={demo} variant="peek" autoplayMs={4000} />
            </div>
          </div>
        </section>

        {/* 9. Pricing / packages */}
        <section id="pricing" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: t.accent }}>
              Pricing
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Simple packages</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: t.muted }}>
              Sample pricing structure — adjust names and numbers to your real offer when we build yours.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {extras.packages.map((pkg, i) => (
              <FadeIn key={pkg.name} delay={i * 90}>
                <div
                  className="flex h-full flex-col rounded-2xl p-6 sm:p-7"
                  style={{
                    backgroundColor: pkg.featured ? t.primary : t.surface,
                    color: pkg.featured ? t.primaryText : t.text,
                    border: `1px solid ${pkg.featured ? t.primary : t.border}`,
                    boxShadow: pkg.featured ? `0 24px 48px -20px ${t.primary}66` : undefined,
                  }}
                >
                  {pkg.featured && (
                    <span
                      className="mb-3 inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{ backgroundColor: `${t.accent}33`, color: t.accent }}
                    >
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{pkg.name}</h3>
                  <p className="mt-3 text-3xl font-bold tracking-tight">{pkg.price}</p>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: pkg.featured ? `${t.primaryText}cc` : t.muted }}
                  >
                    {pkg.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: t.accent }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="mt-8 w-full rounded-md px-4 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]"
                    style={{
                      backgroundColor: pkg.featured ? t.bg : t.primary,
                      color: pkg.featured ? t.text : t.primaryText,
                    }}
                  >
                    {demo.cta}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 10. Testimonials slider */}
        <section
          className="py-16 sm:py-20"
          style={{ backgroundColor: t.surface, borderTop: `1px solid ${t.border}` }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: t.accent }}>
                Social proof
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">What clients say</h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="mt-10">
                <DemoTestimonialsSlider demo={demo} items={moreTestimonials} />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 11. FAQ */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: t.accent }}>
              FAQ
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Questions people ask</h2>
          </FadeIn>
          <div className="mt-8">
            {extras.faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} theme={t} />
            ))}
          </div>
        </section>

        {/* 12. Final CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
          <FadeIn>
            <div
              className="demo-cta-glow relative overflow-hidden rounded-2xl p-8 sm:p-12 lg:p-14"
              style={{
                background: `linear-gradient(135deg, ${t.primary}, ${t.primaryHover})`,
                color: t.primaryText,
              }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl"
                style={{ backgroundColor: `${t.accent}44` }}
              />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_auto]">
                <div>
                  <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{extras.closingHeadline}</h2>
                  <p className="mt-4 max-w-xl text-sm opacity-90 sm:text-base">
                    {extras.closingSubheadline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: t.bg, color: t.text }}
                  >
                    {demo.cta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    href={ROUTES.contact}
                    className="inline-flex items-center rounded-md border px-6 py-3.5 text-sm font-semibold"
                    style={{ borderColor: `${t.primaryText}55`, color: t.primaryText }}
                  >
                    Build this for your brand
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer
        className="border-t py-10"
        style={{ color: t.muted, borderColor: t.border }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            Sample landing · {demo.brand} · {demo.clientLabel}
          </p>
          <p>Built by SLAVARO SOFTWARE as a demo — not a real business</p>
        </div>
      </footer>
    </div>
  )
}
