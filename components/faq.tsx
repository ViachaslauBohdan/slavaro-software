import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much does it cost to work with Vention?",
    answer: "Every project is scoped individually, with transparent pricing that reflects your goals, timeline, and tech stack. You'll always know where every dollar goes, with no hidden fees or surprises. If you'd like a quick estimate, try our project price calculator. For the most accurate assessment, submit the contact form, and our project discovery specialists will get back to you within a few hours."
  },
  {
    question: "How long does it take to build my product?",
    answer: "Timelines vary depending on complexity, but most projects move from kickoff to MVP within three to six months. Enterprise-scale solutions that involve multiple integrations, advanced security requirements, or compliance processes may take longer. Even so, our agile approach ensures steady progress starting from the very first sprint."
  },
  {
    question: "How quickly can you start my project?",
    answer: "Typically, we can begin within two weeks of contract signing. With 3,000+ engineers across 20+ offices, we assemble teams fast, without compromising on fit or expertise."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "From Java and Node.js to React, Python, and Go, we work with every major technology that shapes today's market. Our engineers are equally fluent in modern AI toolkits, data platforms, and cloud ecosystems, and they also maintain deep expertise in legacy systems to support modernization and migration when needed."
  },
  {
    question: "Can you handle AI-driven projects as well as traditional software builds?",
    answer: "Absolutely. Our teams include specialists across AI, automation, and advanced analytics, supported by senior engineers who help ensure every build is scalable, secure, and production-ready."
  },
  {
    question: "How do you integrate with existing workflows?",
    answer: "We adapt to your preferred tools, standups, and sprints, and become a natural part of your project. With engineers distributed across multiple time zones, collaboration continues around the clock, while strong cultural alignment keeps communication clear and consistent."
  },
  {
    question: "What if I need to scale my team up or down?",
    answer: "Our flexible engagement model lets you scale in either direction within days. Whether you're expanding for a new release or optimizing after delivery, we adjust quickly to meet your needs."
  },
  {
    question: "How do you ensure code quality and security are upheld? Will I retain full ownership of my IP?",
    answer: "Every line of code undergoes peer review, automated testing, and regular auditing to help you maintain the highest quality and security standards. We sign NDAs and IP ownership agreements upfront, so all deliverables and source code are 100% yours."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            FAQs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No surprises, except how easy it is to start and work with us
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
