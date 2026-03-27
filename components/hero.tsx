import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, MessageSquare, TrendingUp, Bot } from "lucide-react"

const highlights = [
  { icon: Clock, text: "Landing pages delivered in 48 hours" },
  { icon: Zap, text: "AI automation to eliminate manual work" },
  { icon: MessageSquare, text: "Instant lead notifications via Telegram & email" },
  { icon: TrendingUp, text: "Convert visitors into real clients" },
  { icon: Bot, text: "Scalable processes instead of manual tasks" },
]

const clients = [
  "Startups", "SMBs", "Agencies", "Consultants", "E-commerce", "Service Businesses"
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium border-primary/20">
            Landing Pages & AI Automation
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            <span className="text-primary">Landing pages</span> in 48 hours & <span className="text-primary">AI automation</span> that works
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto text-pretty">
            High-conversion websites built to bring you real clients. AI automation to eliminate 
            repetitive work. Start receiving inquiries immediately and save hours every week.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
              Book a free discovery call
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-base">
              View our work
            </Button>
          </div>

          {/* Highlights */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border text-left"
              >
                <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client types */}
        <div className="mt-20">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Trusted by businesses ready to grow
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clients.map((client) => (
              <div
                key={client}
                className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
