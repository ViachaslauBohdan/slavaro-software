import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  Globe,
  Bot,
  Clock,
  Smartphone,
  Zap,
  MessageSquare,
  TrendingUp,
  FileText,
  Mail,
  TableProperties,
  Settings,
  ArrowRight
} from "lucide-react"

const landingPageFeatures = [
  {
    icon: Globe,
    title: "Modern, professional website",
    description: "A website that builds trust and credibility with your visitors from the first second."
  },
  {
    icon: TrendingUp,
    title: "Clear conversion-focused structure",
    description: "Designed specifically to turn visitors into inquiries and leads."
  },
  {
    icon: Smartphone,
    title: "Fully responsive design",
    description: "Looks perfect on mobile, tablet, and desktop devices."
  },
  {
    icon: Zap,
    title: "Fast loading & clean UX",
    description: "Optimized for speed and a seamless user experience."
  },
  {
    icon: MessageSquare,
    title: "Lead generation included",
    description: "Simple contact form with name, phone, and request fields."
  },
  {
    icon: Clock,
    title: "Instant notifications",
    description: "Get notified via Telegram and email the moment someone reaches out."
  }
]

const automationFeatures = [
  {
    icon: TableProperties,
    title: "Excel & Google Sheets",
    description: "Automate workflows, reporting, and data processing."
  },
  {
    icon: MessageSquare,
    title: "Lead handling",
    description: "Forms to notifications to simple CRM logic, all automated."
  },
  {
    icon: Mail,
    title: "Email processing",
    description: "Auto-responses, sorting, and smart email workflows."
  },
  {
    icon: FileText,
    title: "Document generation",
    description: "PDFs, summaries, offers - generated automatically."
  },
  {
    icon: Settings,
    title: "System integrations",
    description: "Connect your tools and systems seamlessly."
  },
  {
    icon: Bot,
    title: "Custom automation",
    description: "Any repetitive task can be automated to save time."
  }
]

const landingPageBenefits = [
  "Start receiving client inquiries immediately",
  "Improve your online presence",
  "Convert visitors into real business opportunities"
]

const automationBenefits = [
  "Save hours every week",
  "Reduce operational costs",
  "Build scalable processes instead of manual tasks"
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Landing Pages Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Globe className="h-4 w-4" />
                Landing Pages
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                High-conversion websites built in 48 hours
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Designed to bring you real clients. A modern, professional website that builds trust 
                and turns visitors into leads.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-foreground">Business impact:</h3>
                {landingPageBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get your landing page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {landingPageFeatures.map((feature) => (
                <Card key={feature.title} className="h-full">
                  <CardContent className="p-5">
                    <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* AI Automation Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-4">
              {automationFeatures.map((feature) => (
                <Card key={feature.title} className="h-full">
                  <CardContent className="p-5">
                    <div className="p-2 rounded-lg bg-accent/10 w-fit mb-3">
                      <feature.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Bot className="h-4 w-4" />
                AI Automation
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                Automate repetitive work and run faster
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Make your business run more efficiently. Less manual work, fewer errors, 
                and more time to focus on what matters - growing your business.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-foreground">What changes for you:</h3>
                {automationBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Explore automation options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
