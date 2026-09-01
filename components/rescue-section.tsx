import Link from "next/link"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { rescueSignals } from "@/lib/site-content"
import { ROUTES } from "@/lib/seo/routes"

export function RescueSection() {
  return (
    <Section id="rescue" className="section-alt border-t border-border">
      <FadeIn>
        <p className="eyebrow mb-3">Existing product & rescue</p>
        <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl text-balance">
          Already started? I can help you finish it.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
          Don&apos;t automatically rebuild it. I&apos;ll first determine what can be kept, what
          needs fixing, and the fastest path to production.
        </p>
      </FadeIn>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {rescueSignals.map((signal, i) => (
          <FadeIn key={signal} delay={i * 40}>
            <div className="surface px-4 py-3.5">
              <p className="text-sm text-secondary-foreground">{signal}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={150}>
        <p className="mt-10 text-sm text-muted-foreground max-w-3xl leading-relaxed">
          Whether it&apos;s a half-finished MVP, a prototype from Lovable or Bolt, or an app that
          lost its developer — I assess what you have, fix what&apos;s blocking launch, and ship a
          production-ready product.{" "}
          <Link href={ROUTES.productRescue} className="text-link hover:underline underline-offset-4">
            Learn about software project rescue
          </Link>
          .
        </p>
      </FadeIn>
    </Section>
  )
}
