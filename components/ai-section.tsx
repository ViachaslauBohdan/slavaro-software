import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Users, Lightbulb, BookOpen, ArrowRight, Sparkles } from "lucide-react"

const aiCapabilities = [
  {
    icon: Brain,
    title: "Dedicated AI Center of Excellence",
    description: "Our CTO-led AI Center of Excellence drives research, experimentation, and proprietary solutions. This in-house hub explores emerging technologies and ensures engineers are trained on the latest vetted tools.",
    cta: "Learn more"
  },
  {
    icon: Users,
    title: "AI-enabled teams",
    description: "As part of our AI-enabled teams offering, our engineers deliver faster, with the same high standards of quality and care. Productivity increases by +15%, with no change to your rate card.",
    cta: "Get 15% more efficiency now"
  },
  {
    icon: Lightbulb,
    title: "AI discovery workshops",
    description: "Our AI discovery workshops are built for teams who've moved fast and now need to figure out what's actually worth scaling. Led by senior engineers and our CTO, each session helps you pressure-test your AI use case.",
    cta: "Book your workshop"
  },
  {
    icon: BookOpen,
    title: "AI thought leadership",
    description: "Every year, we publish original AI research and trend reports that arm our clients and industry leaders with the insights and strategies they need to make sharper decisions.",
    cta: "Read the State of AI report"
  }
]

export function AISection() {
  return (
    <section id="ai" className="py-20 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">AI-First Approach</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              We&apos;re AI-first, so you never come second
            </h2>
            <p className="mt-4 text-background/70 text-lg">
              At Vention, AI isn&apos;t an add-on. It&apos;s a core capability that turns ambition into 
              a competitive edge while others are still playing catch-up.
            </p>
            <p className="mt-4 text-background/70">
              Backed by decades of hands-on engineering and a culture of relentless reinvention, 
              we embed AI into every layer of software development, helping you increase ROI, 
              reduce delivery risks, and achieve faster, more efficient outcomes.
            </p>
            <p className="mt-4 text-background/70">
              Our approach is human-first, designed to build transparent, trustworthy systems that 
              keep everything running smoothly so nothing slips, nothing breaks, and nothing drifts 
              out of your control.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
            <div className="relative bg-background/10 backdrop-blur rounded-2xl p-8 border border-background/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">15%</p>
                  <p className="text-sm text-background/70 mt-1">Productivity increase</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">100+</p>
                  <p className="text-sm text-background/70 mt-1">AI projects delivered</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">50+</p>
                  <p className="text-sm text-background/70 mt-1">AI specialists</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-background/70 mt-1">AI-powered support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiCapabilities.map((capability) => (
            <Card key={capability.title} className="bg-background/10 border-background/20 text-background group hover:bg-background/15 transition-colors">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/20 w-fit mb-4">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-background">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-background/70 mb-4">
                  {capability.description}
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                  {capability.cta}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Explore the full suite of our AI solutions
          </Button>
        </div>
      </div>
    </section>
  )
}
