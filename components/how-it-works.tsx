import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { processSteps } from "@/lib/site-content"

export function HowItWorks() {
  return (
    <Section id="process" className="section-alt border-y border-border">
      <FadeIn>
        <p className="eyebrow mb-3">How it works</p>
        <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl text-balance">
          A simple path from problem to production
        </h2>
      </FadeIn>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {processSteps.map((step, i) => (
          <FadeIn key={step.step} delay={i * 80}>
            <div className="surface-elevated p-6 h-full flex flex-col">
              <span className="text-xs font-mono text-subtle-foreground mb-4">{step.step}</span>
              <h3 className="text-base font-semibold leading-snug mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
