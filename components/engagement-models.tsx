import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, PackageCheck, UserPlus, Users } from "lucide-react"

const engagementModels = [
  {
    icon: Lightbulb,
    title: "Product discovery workshops",
    description: "Build momentum without the wait. Our workshops cut through complexity and define a clear, actionable direction for your software project, keeping things fast, focused, and free of long-term commitments.",
    tag: "Quick Start"
  },
  {
    icon: PackageCheck,
    title: "Project outsourcing",
    description: "Get a full project team ready to deliver right away. Perfect for well-defined scopes, this model covers every development lifecycle stage, from architecture through deployment.",
    tag: "Full Delivery"
  },
  {
    icon: UserPlus,
    title: "Staff augmentation",
    description: "Add top talent without reworking your org chart. We bring in specialized skills that are too rare, too costly, or too slow to hire, and integrate them seamlessly into your delivery.",
    tag: "Flexible Scaling"
  },
  {
    icon: Users,
    title: "Dedicated teams",
    description: "Scale with a team fully aligned to your goals, pace, and product vision. Ideal for complex, evolving software initiatives, this model brings engineers who embed as a long-term, high-impact extension of your organization.",
    tag: "Long-term Partnership"
  }
]

export function EngagementModels() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start your project, your way
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you&apos;re testing the waters or scaling fast, we offer flexible engagement models tailored 
            to where you are and where you&apos;re headed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engagementModels.map((model) => (
            <Card key={model.title} className="group hover:shadow-lg transition-all hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <model.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {model.tag}
                  </span>
                </div>
                <CardTitle className="text-xl mt-4">{model.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{model.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Compare all engagement models in detail
          </Button>
        </div>
      </div>
    </section>
  )
}
