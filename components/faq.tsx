"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

export function FAQ() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.faq.subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {t.faq.items.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
