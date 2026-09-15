import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { businessOutcomes } from "@/lib/site-content"

export function BusinessValue() {
  return (
    <Section className="section-alt border-y border-border">
      <FadeIn>
        <p className="eyebrow mb-3">Why work with us</p>
        <h2 className="text-3xl sm:text-4xl font-bold max-w-xl text-balance">
          Outcomes that matter to your business
        </h2>
      </FadeIn>

      <div className="mt-14 grid sm:grid-cols-2 gap-4">
        {businessOutcomes.map((outcome, i) => (
          <FadeIn key={outcome.title} delay={i * 80}>
            <div className="surface-elevated p-6 lg:p-7 h-full">
              <h3 className="text-lg font-semibold mb-2">{outcome.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
