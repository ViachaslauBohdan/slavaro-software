import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  Eye, 
  RefreshCw, 
  TrendingUp,
  Shield,
  Clock,
  FileCheck,
  Target,
  Scale,
  Users,
  Zap,
  Settings
} from "lucide-react"

const deliveryFeatures = [
  {
    icon: CheckCircle,
    title: "Rest easy knowing it works the first time",
    description: "From idea to launch, our development and QA process enables high reliability, and every build is engineered for resilience.",
    features: [
      "Full-cycle software development",
      "Strategic discovery and planning workshops",
      "Automated testing and QA workflows",
      "Targeted technical audit and optimization",
      "Scalable software architecture consulting",
      "ISO 27001-certified delivery with enterprise-grade security"
    ]
  },
  {
    icon: Eye,
    title: "Stay informed, stay in control",
    description: "Agile processes with regular progress reports and technical audits mean no blind spots, ever.",
    features: [
      "Transparent agile development practices",
      "Dedicated project and delivery manager for every client",
      "Advanced data engineering support"
    ]
  },
  {
    icon: RefreshCw,
    title: "Forget the chaos",
    description: "Robust DevOps practices, secure cloud infrastructure, and future-ready architecture keep everything running smoothly.",
    features: [
      "Streamlined DevOps implementation",
      "Proven cybersecurity and data protection",
      "Flexible cloud infrastructure and seamless migration",
      "Disruption-free legacy app modernization"
    ]
  },
  {
    icon: TrendingUp,
    title: "Make growth effortless",
    description: "We pick engagement models that match your pace and goals, ensuring smooth onboarding and seamless integrations.",
    features: [
      "Tailored onboarding and team enablement",
      "Seamless third-party system integration",
      "Smooth delivery and handover of all project work"
    ]
  }
]

const peaceOfMindPromises = [
  {
    icon: Clock,
    title: "Kickoff in 14 days",
    description: "Forget the endless hiring cycle. We promise to begin your project within 14 days of contract signature, lining up CVs from top engineers quickly so you can validate ideas early and build efficiently."
  },
  {
    icon: Users,
    title: "Dedicated advocates",
    description: "Every project comes with a Delivery Manager and a Strategic Partner. One drives execution, the other manages day-to-day coordination. Together, they clear roadblocks and keep momentum high."
  },
  {
    icon: Shield,
    title: "Quality-first approach",
    description: "Before a single line of code is written, we run a Delivery Quality Assessment to surface risks early and build in quality from the ground up."
  },
  {
    icon: Scale,
    title: "Frictionless scaling",
    description: "Adjust pace and scale on your terms. Our scaling guidance comes from experience, helping startups grow into category leaders and Fortune 500 enterprises expand global teams."
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Software Delivery Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Software delivery without doubt
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Because at Vention, peace of mind isn&apos;t just a promise. It&apos;s how we work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {deliveryFeatures.map((feature) => (
            <Card key={feature.title} className="h-full">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Peace of Mind Promise */}
        <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              The &quot;Peace of Mind Promise,&quot; fulfilled every time
            </h3>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Everyone talks about peace of mind. We deliver it. No vague promises, just a framework built 
              for speed, predictability, and complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {peaceOfMindPromises.map((promise) => (
              <div key={promise.title} className="text-center">
                <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <promise.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{promise.title}</h4>
                <p className="text-sm text-muted-foreground">{promise.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Learn more about our &quot;Peace of Mind Promise&quot;
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
