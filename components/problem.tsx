import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { clientSituations } from "@/lib/site-content"

export function Problem() {
  return (
    <Section
      id="problem"
      className="border-t border-border"
    >
      <FadeIn>
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            You don&apos;t need more developers.
            <br />
            <span className="text-muted-foreground">You need your product shipped.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="mt-14 grid gap-3 md:grid-cols-2">
        {clientSituations.map((situation, i) => (
          <FadeIn key={situation} delay={i * 60}>
            <div className="surface-glass h-full px-5 py-4">
              <p className="text-[0.95rem] leading-relaxed text-secondary-foreground">
                &ldquo;{situation}&rdquo;
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={200}>
        <p className="mt-12 text-xl font-semibold text-foreground sm:text-2xl">
          That&apos;s where we come in.
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          We take business ideas and software problems from scope through architecture, development,
          and launch — so you don&apos;t have to hire and coordinate an entire team.
        </p>
      </FadeIn>
    </Section>
  )
}
