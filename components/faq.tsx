"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the timeline work — call, same day, next day?",
    answer:
      "We start with a kickoff call to align on your offer and goals. You receive your landing page design the same day, and a fully working, live page for your business the next day (within our 48-hour delivery window). Exact timing depends on when we start and your content readiness.",
  },
  {
    question: "How much does a landing page cost?",
    answer:
      "Our landing pages are typically €200–500 one-time, depending on scope. We give a fixed quote after the call. No hidden fees.",
  },
  {
    question: "Can you really deliver in 48 hours?",
    answer:
      "Yes — for standard landing pages, when content and requirements are clear. More complex requests may need a bit longer; we always confirm the timeline before we start.",
  },
  {
    question: "What if I need changes after delivery?",
    answer:
      "Minor adjustments shortly after launch are usually included. For ongoing changes, we offer optional monthly support (€50–150/month) or one-off updates at agreed rates.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out the contact form or message us. We’ll schedule a short call, confirm scope and price, then follow the same-day design → next-day live flow.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-14 lg:py-20 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Landing pages in 48 hours</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
