"use client"

import Link from "next/link"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { mvpTypes } from "@/lib/site-content"
import { ROUTES } from "@/lib/seo/routes"

export function MvpSection() {
  return (
    <Section id="mvp">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <FadeIn>
          <p className="eyebrow mb-3">Fast MVP development</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Have an idea? Get to MVP faster.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            I work directly with founders to cut unnecessary scope, identify the core user journey,
            and build the first version that gets in front of real customers — fast.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Speed to market matters. You don&apos;t need a perfect product on day one. You need
            something real enough to validate, sell, or raise on.
          </p>
          <Link
            href={ROUTES.mvpDevelopment}
            className="inline-flex mt-8 items-center justify-center rounded-md px-7 py-3 text-sm font-medium btn-primary"
          >
            Tell Me Your Idea
          </Link>
          <p className="mt-4 text-sm text-subtle-foreground">
            <Link href={ROUTES.mvpDevelopment} className="text-link hover:underline underline-offset-4">
              Learn more about MVP development services
            </Link>
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="surface-elevated p-6 lg:p-8">
            <p className="text-sm font-medium text-foreground mb-5">What I build</p>
            <ul className="space-y-3">
              {mvpTypes.map((type) => (
                <li
                  key={type}
                  className="flex items-center justify-between border-b border-border/80 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-muted-foreground">{type}</span>
                  <span className="text-xs text-accent" aria-hidden="true">→</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
