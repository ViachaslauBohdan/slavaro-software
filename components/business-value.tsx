import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { businessOutcomes } from "@/lib/site-content"

export function BusinessValue() {
  return (
    <Section
      className="border-y border-border"
    >
      <FadeIn>
        <p className="eyebrow mb-3">Why work with us</p>
        <h2 className="max-w-xl text-balance text-3xl font-bold sm:text-4xl">
          Outcomes that matter to your business
        </h2>
      </FadeIn>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {businessOutcomes.map((outcome, i) => (
          <FadeIn key={outcome.title} delay={i * 80}>
            <div className="surface-glass h-full p-6 lg:p-7 transition-colors duration-300 hover:border-primary/35">
              <h3 className="mb-2 text-lg font-semibold">{outcome.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{outcome.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
