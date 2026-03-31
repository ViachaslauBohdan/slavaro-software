"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much does a landing page cost?",
    answer: "Our landing pages start at €300-500 for a professional, mobile-friendly website. For more advanced features like CRM integration and lead tracking, prices range from €500-800. We provide exact quotes after understanding your needs."
  },
  {
    question: "Can you really deliver in 48 hours?",
    answer: "Yes! For standard landing pages, we deliver within 48 hours of receiving your content and requirements. More complex projects with custom integrations may take 3-5 days. We always provide a clear timeline before starting."
  },
  {
    question: "What kind of automation can you build?",
    answer: "We automate repetitive business tasks: data entry from emails to spreadsheets, automatic document generation, lead notifications, CRM updates, report generation, and multi-system integrations. If you do it manually more than once, we can probably automate it."
  },
  {
    question: "Do I need technical knowledge to use the automation?",
    answer: "Not at all. We build systems that run automatically in the background. You'll receive notifications when needed, and we provide simple documentation. We also offer ongoing support to handle any adjustments."
  },
  {
    question: "What if I need changes after delivery?",
    answer: "Minor adjustments within the first week are included. For ongoing changes, we offer a monthly support plan (€50-100/month) that covers maintenance, updates, and small improvements. You can also request one-time changes at hourly rates."
  },
  {
    question: "How do I get started?",
    answer: "Simply fill out the contact form or message us on Telegram. We'll schedule a quick call to understand your needs, provide a quote, and can usually start the same week. No lengthy contracts or complicated processes."
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-14 lg:py-20 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
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
