import { Section } from "@/components/section"
import { HOME_FAQS } from "@/lib/seo/home-faqs"

export function HomeFaq() {
  return (
    <Section id="faq" className="border-t border-border">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold">Frequently asked questions</h2>
        <p className="mt-4 text-muted-foreground">
          Answers for founders and business owners evaluating software development.
        </p>
      </div>

      <div className="mt-12 max-w-3xl space-y-10">
        {HOME_FAQS.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
