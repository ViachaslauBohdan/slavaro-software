"use client"

import Link from "next/link"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { mvpTypes } from "@/lib/site-content"
import { ROUTES } from "@/lib/seo/routes"

export function MvpSection() {
  return (
    <Section
      id="mvp"
    >
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <p className="eyebrow mb-3">Fast MVP development</p>
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">
            Have an idea? Get to MVP faster.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            We work directly with founders to cut unnecessary scope, identify the core user journey,
            and build the first version that gets in front of real customers — fast.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Speed to market matters. You don&apos;t need a perfect product on day one. You need
            something real enough to validate, sell, or raise on.
          </p>
          <Link
            href={ROUTES.mvpDevelopment}
            className="btn-primary mt-8 inline-flex items-center justify-center rounded-md px-7 py-3 text-sm font-medium"
          >
            Tell Us Your Idea
          </Link>
          <p className="mt-4 text-sm text-subtle-foreground">
            <Link href={ROUTES.mvpDevelopment} className="text-link underline-offset-4 hover:underline">
              Learn more about MVP development services
            </Link>
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="surface-glass rounded-2xl p-6 lg:p-8">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">What we build</p>
              <span className="rounded-full border border-border/80 bg-secondary/60 px-2.5 py-1 text-[11px] text-subtle-foreground">
                MVP scope
              </span>
            </div>
            <ul>
              {mvpTypes.map((type, i) => (
                <li
                  key={type}
                  className="flex items-center justify-between border-b border-border/60 py-3.5 first:pt-0 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 font-mono text-[11px] text-subtle-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-muted-foreground">{type}</span>
                  </div>
                  <span className="text-xs text-accent" aria-hidden>
                    →
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
