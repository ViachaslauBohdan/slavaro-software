"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Dumbbell, Building2, Brain, BarChart } from "lucide-react"

const caseStudies = [
  {
    icon: Dumbbell,
    company: "ClassPass",
    title: "End-to-end mobile and platform development for ClassPass",
    description: "ClassPass set out to bring the world's best workouts into one app and needed to scale fast. Within two months, we added 35+ Vention engineers across iOS, Android, web, DevOps, and QA to build feature-rich apps, a venue portal, and CI/CD pipelines that fueled rapid growth.",
    highlight: "From the MVP stage, we've been their partner every step of the way to unicorn status.",
    stats: [
      { value: "8.5", label: "years of engagement" },
      { value: "40K", label: "studios in 30 countries supported" },
      { value: "$1B", label: "valuation achieved with our solutions" }
    ],
    tags: ["Mobile Development", "DevOps", "Scaling"]
  },
  {
    icon: Brain,
    company: "EliseAI",
    title: "AI leasing assistant and web platform optimization for EliseAI",
    description: "EliseAI's goal was to reinvent leasing with an AI assistant that automates workflows and provides 24/7 customer support. With Vention, they integrated property management systems, built enterprise-grade resilience, and automated 90% of the workload, lifting conversions by 125%.",
    highlight: "That momentum fueled $75M in Series D funding and propelled them to unicorn status with a valuation above $1B.",
    stats: [
      { value: "4", label: "years of engagement" },
      { value: "90%", label: "of the workload automated" },
      { value: "125%", label: "boost in conversions" }
    ],
    tags: ["AI/ML", "PropTech", "Automation"]
  },
  {
    icon: Building2,
    company: "Thomas International",
    title: "Legacy product modernization for Thomas International",
    description: "Thomas International, a leader in psychometric assessments, partnered with Vention to modernize its core platform and strengthen its HR tech edge. What began with two engineers grew into a 14-person team focused on migrating legacy systems, improving delivery processes, and embedding agile ways of working.",
    highlight: "In nine months, we rolled out six major updates (compared to one per year before), which created a faster, more scalable platform for millions of users in 140+ countries.",
    stats: [
      { value: "7x", label: "team growth" },
      { value: "6", label: "major updates in 9 months" },
      { value: "140+", label: "countries with millions of users" }
    ],
    tags: ["Modernization", "HR Tech", "Agile"]
  },
  {
    icon: BarChart,
    company: "Merkle",
    title: "Enterprise platform engineering for Merkle",
    description: "Merkle, a global leader in performance marketing, partnered with Vention to modernize their enterprise platforms and support more than 16,000 employees worldwide. Our 25-person team worked across .NET-based systems, mobile applications, API management, agile delivery, and a custom QA triage framework.",
    highlight: "Together, we supported more than 30 global brands and enabled over 150,000 marketing campaigns, contributing to more than $1B in annual revenue.",
    stats: [
      { value: "10+", label: "years of collaboration" },
      { value: "16K+", label: "employees supported worldwide" },
      { value: "$1B+", label: "annual revenue powered" }
    ],
    tags: ["Enterprise", "Marketing Tech", "Platform Engineering"]
  }
]

export function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0)

  return (
    <section id="case-studies" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Each case study tells a different story, but the outcome is always a best-case scenario. 
            Our &quot;Peace of Mind Promise&quot; means we deliver what we commit to, and more.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <Button
              key={study.company}
              variant={activeCase === index ? "default" : "outline"}
              onClick={() => setActiveCase(index)}
              className={activeCase === index ? "bg-primary text-primary-foreground" : ""}
            >
              {study.company}
            </Button>
          ))}
        </div>

        {/* Active Case Study */}
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  {(() => {
                    const IconComponent = caseStudies[activeCase].icon
                    return <IconComponent className="h-6 w-6 text-primary" />
                  })()}
                </div>
                <span className="text-lg font-semibold text-foreground">
                  {caseStudies[activeCase].company}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {caseStudies[activeCase].title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {caseStudies[activeCase].description}
              </p>
              
              <p className="text-foreground font-medium mb-6">
                {caseStudies[activeCase].highlight}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {caseStudies[activeCase].tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore the {caseStudies[activeCase].company} case study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-secondary/50 p-8 lg:p-12 flex items-center">
              <div className="grid grid-cols-1 gap-8 w-full">
                {caseStudies[activeCase].stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-4xl lg:text-5xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
