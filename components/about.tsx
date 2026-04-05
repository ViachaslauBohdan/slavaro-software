import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "AI-powered reporting into Google Docs and Sheets",
  "Lead intake, qualification, and routing between CRM, email, and Telegram",
  "Integrations across Workspace, Slack, Notion, and APIs",
  "Clear scopes, transparent pricing, and support after go-live",
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
              Volska Automation builds AI automations that save time every week
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We help teams replace repetitive manual work with reliable workflows — from recurring
              reports to lead handoffs and multi-system sync.
            </p>
            <p className="mt-4 text-muted-foreground">
              No hype: production-ready automations you can run, measure, and extend.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">What we focus on</h3>
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
                <a href="#contact">Discuss your workflow</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#pricing">See pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
