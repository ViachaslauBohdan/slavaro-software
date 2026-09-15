import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { automationExamples, webPlatforms } from "@/lib/site-content"

const serviceBlocks = [
  {
    title: "Web platforms",
    description:
      "Custom applications built for how your business actually works — not off-the-shelf software you have to bend around.",
    items: webPlatforms,
  },
  {
    title: "Business automation",
    description:
      "Replace manual processes with systems that run reliably. Connect the tools you already use.",
    items: automationExamples,
  },
]

export function ServicesOverview() {
  return (
    <Section id="services">
      <FadeIn>
        <p className="eyebrow mb-3">Core services</p>
        <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl text-balance">
          Built for businesses that need software, not another dev team
        </h2>
      </FadeIn>

      <div className="mt-14 grid lg:grid-cols-2 gap-6">
        {serviceBlocks.map((block, i) => (
          <FadeIn key={block.title} delay={i * 100}>
            <div className="surface-elevated p-7 lg:p-8 h-full">
              <h3 className="text-xl font-semibold mb-3">{block.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {block.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {block.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-md border border-border text-muted-foreground bg-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
