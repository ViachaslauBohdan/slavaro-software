import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { clientSituations } from "@/lib/site-content"

export function Problem() {
  return (
    <Section id="problem" className="border-t border-border">
      <FadeIn>
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight text-balance">
            You don&apos;t need more developers.
            <br />
            <span className="text-muted-foreground">You need your product shipped.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="mt-14 grid md:grid-cols-2 gap-3">
        {clientSituations.map((situation, i) => (
          <FadeIn key={situation} delay={i * 60}>
            <div className="surface-elevated px-5 py-4 h-full">
              <p className="text-[0.95rem] text-secondary-foreground leading-relaxed">
                &ldquo;{situation}&rdquo;
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={200}>
        <p className="mt-12 text-xl sm:text-2xl font-semibold text-foreground">
          That&apos;s where we come in.
        </p>
        <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
          We take business ideas and software problems from scope through architecture, development,
          and launch — so you don&apos;t have to hire and coordinate an entire team.
        </p>
      </FadeIn>
    </Section>
  )
}
