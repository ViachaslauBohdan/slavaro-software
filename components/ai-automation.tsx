import Link from "next/link"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { aiExamples } from "@/lib/site-content"
import { ROUTES } from "@/lib/seo/routes"

export function AiAutomation() {
  return (
    <Section id="ai" className="border-t border-border/60">
      <FadeIn>
        <p className="eyebrow mb-3">Practical AI & automation</p>
        <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl text-balance">
          AI that solves real operational problems
        </h2>
        <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
          Not demos. Not hype. Practical integrations that save your team time and make existing
          systems smarter.
        </p>
      </FadeIn>

      <div className="mt-12 space-y-3 max-w-3xl">
        {aiExamples.map((example, i) => (
          <FadeIn key={example} delay={i * 60}>
            <div className="surface-elevated px-5 py-4">
              <p className="text-[0.95rem] text-secondary-foreground leading-relaxed">{example}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        <Link href={ROUTES.aiIntegration} className="text-link hover:underline underline-offset-4">
          AI integration services
        </Link>
        {" · "}
        <Link href={ROUTES.businessAutomation} className="text-link hover:underline underline-offset-4">
          business automation development
        </Link>
      </p>
    </Section>
  )
}
