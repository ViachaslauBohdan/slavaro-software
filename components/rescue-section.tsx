import Link from "next/link"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { rescueSignals } from "@/lib/site-content"
import { ROUTES } from "@/lib/seo/routes"

export function RescueSection() {
  return (
    <Section
      id="rescue"
      className="border-t border-border"
    >
      <FadeIn>
        <p className="eyebrow mb-3">Existing product & rescue</p>
        <h2 className="max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
          Already started? We can help you finish it.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          Don&apos;t automatically rebuild it. We&apos;ll first determine what can be kept, what
          needs fixing, and the fastest path to production.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rescueSignals.map((signal, i) => (
          <FadeIn key={signal} delay={i * 40}>
            <div className="surface-glass px-4 py-3.5">
              <p className="text-sm text-secondary-foreground">{signal}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={150}>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Whether it&apos;s a half-finished MVP, a prototype from Lovable or Bolt, or an app that
          lost its developer — we assess what you have, fix what&apos;s blocking launch, and ship a
          production-ready product.{" "}
          <Link href={ROUTES.productRescue} className="text-link underline-offset-4 hover:underline">
            Learn about software project rescue
          </Link>
          .
        </p>
      </FadeIn>
    </Section>
  )
}
