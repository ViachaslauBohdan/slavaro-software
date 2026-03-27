import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much does a landing page cost?",
    answer: "Our landing pages start at a fixed price with no hidden fees. Everything is included upfront - design, development, mobile optimization, contact form, and notification setup. Contact us for a custom quote based on your specific needs."
  },
  {
    question: "Can you really deliver a landing page in 48 hours?",
    answer: "Yes! Once we have all the information we need (your branding, content, and requirements), we deliver a fully functional, high-converting landing page within 48 hours. Complex projects with custom features may take slightly longer."
  },
  {
    question: "What&apos;s included in the landing page?",
    answer: "Every landing page includes: modern responsive design, clear conversion-focused structure, fast loading optimization, simple contact form with name/phone/request fields, instant notifications via Telegram and email, and mobile-friendly layout."
  },
  {
    question: "How do the instant notifications work?",
    answer: "When someone fills out the contact form on your website, you receive an instant notification via Telegram and/or email with all their details. This means you can respond to leads within minutes, dramatically improving your conversion rates."
  },
  {
    question: "What kind of tasks can you automate?",
    answer: "We automate Excel/Google Sheets workflows, lead handling, email processing, document generation (PDFs, summaries, offers), and integrations between your tools and systems. If you do it manually and repeatedly, we can probably automate it."
  },
  {
    question: "How much time will AI automation save me?",
    answer: "Most clients save 10+ hours per week after implementing our automation solutions. The exact savings depend on your current processes, but we focus on high-impact automations that give you the biggest return on investment."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We offer maintenance and support packages to keep your landing page updated and your automations running smoothly. We&apos;re here to help you grow."
  },
  {
    question: "What if I need changes after delivery?",
    answer: "We include a revision round with every landing page project. After that, changes can be made through our support packages or on an as-needed basis. We&apos;re flexible and want you to be 100% satisfied."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
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
