import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { processSteps } from "@/lib/site-content"

export function HowItWorks() {
  return (
    <Section
      id="process"
      className="border-y border-border"
    >
      <FadeIn>
        <p className="eyebrow mb-3">How it works</p>
        <h2 className="max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
          A simple path from problem to production
        </h2>
      </FadeIn>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <FadeIn key={step.step} delay={i * 80}>
            <div className="surface-glass flex h-full flex-col p-6 transition-colors duration-300 hover:border-primary/40">
              <span className="mb-4 font-mono text-xs text-subtle-foreground">{step.step}</span>
              <h3 className="mb-3 text-base font-semibold leading-snug">{step.title}</h3>
              <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
