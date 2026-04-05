"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What kind of automation can you build?",
    answer:
      "We automate repetitive business work: recurring reports into Google Docs/Sheets, lead capture and routing to CRM or Telegram, syncing data between tools, summarizing notes into proposals, and multi-step workflows across Workspace, Slack, Notion, and APIs. If your team does it manually more than once, we can usually structure it as a workflow.",
  },
  {
    question: "How much does AI automation cost?",
    answer:
      "Reporting autopilot projects typically fall in €500–900; full workflow sprints often €900–1800+ depending on integrations and complexity. We give a fixed quote after a short discovery call.",
  },
  {
    question: "Do I need technical knowledge to use the automation?",
    answer:
      "No. We build systems that run in the background with clear notifications when something needs your attention. You get simple documentation and optional ongoing care to adjust as your process changes.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Reporting-focused projects are often delivered in days to a couple of weeks. Full workflow sprints depend on scope; we agree on milestones and checkpoints before we start.",
  },
  {
    question: "What if I need changes after delivery?",
    answer:
      "Minor fixes shortly after launch are usually included in scope. For ongoing tuning, we offer optional monthly care (€50–150/month) or agreed one-off changes.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the contact form or Telegram. We’ll schedule a short call to understand your process, then propose scope, price, and timeline.",
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
          <p className="mt-4 text-lg text-muted-foreground">AI workflow automation</p>
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
