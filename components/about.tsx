import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Fast landing page delivery focused on lead generation",
  "Practical AI automations for reporting and repetitive workflows",
  "End-to-end ownership from discovery to production deployment",
  "Clear communication, transparent pricing, and fast turnaround",
]

export function About() {
  return (
    <section id="about" className="py-14 lg:py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <Badge variant="secondary" className="mb-4">
              About
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Volska Group builds websites and automations that drive growth
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We help service businesses launch high-converting landing pages
              quickly and automate repetitive operations with AI, so teams save
              time and capture more qualified leads.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our focus is simple: deliver business outcomes fast with practical
              solutions that are easy to run, scale, and maintain.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">
              What we focus on
            </h3>
            <div className="mt-5 space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contact">Discuss your project</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#portfolio">See portfolio</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
