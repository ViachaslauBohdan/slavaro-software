"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code, 
  Globe, 
  Smartphone, 
  TestTube, 
  Cloud, 
  Brain, 
  Blocks, 
  Server, 
  Database,
  Glasses,
  Landmark,
  Utensils,
  HeartPulse,
  Megaphone,
  GraduationCap,
  ShoppingCart,
  Building,
  Car
} from "lucide-react"

const developmentServices = [
  { icon: Code, name: "Software Development", description: "Custom software solutions tailored to your needs" },
  { icon: Globe, name: "SaaS Development", description: "Scalable software-as-a-service platforms" },
  { icon: Globe, name: "Web Development", description: "Modern, responsive web applications" },
  { icon: TestTube, name: "QA and Testing", description: "Comprehensive quality assurance services" },
  { icon: Smartphone, name: "Mobile Development", description: "iOS and Android app development" },
]

const technologyExpertise = [
  { icon: Brain, name: "Artificial Intelligence", description: "AI/ML solutions and integrations" },
  { icon: Cloud, name: "Cloud Consulting", description: "AWS, Azure, and GCP expertise" },
  { icon: Blocks, name: "Blockchain", description: "Decentralized applications and smart contracts" },
  { icon: Server, name: "DevOps Services", description: "CI/CD pipelines and infrastructure automation" },
  { icon: Database, name: "Big Data", description: "Data engineering and analytics solutions" },
  { icon: Glasses, name: "AR/VR", description: "Immersive experiences and applications" },
]

const industries = [
  { icon: Landmark, name: "Fintech", description: "Financial technology solutions" },
  { icon: Utensils, name: "Foodtech", description: "Food industry digitalization" },
  { icon: HeartPulse, name: "Healthtech", description: "Healthcare technology platforms" },
  { icon: Megaphone, name: "Adtech", description: "Advertising technology solutions" },
  { icon: GraduationCap, name: "Edtech", description: "Educational technology platforms" },
  { icon: ShoppingCart, name: "Ecommerce", description: "Online retail solutions" },
  { icon: Building, name: "Proptech", description: "Real estate technology" },
  { icon: Car, name: "Automotive", description: "Automotive software solutions" },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            With experience across 30+ industries and 25+ technologies, our team delivers solutions 
            built for bold ideas, big goals, and everything in between.
          </p>
        </div>

        <Tabs defaultValue="development" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="industries">Industries</TabsTrigger>
          </TabsList>
          
          <TabsContent value="development">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentServices.map((service) => (
                <Card key={service.name} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{service.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="technology">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyExpertise.map((tech) => (
                <Card key={tech.name} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <tech.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{tech.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{tech.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="industries">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry) => (
                <Card key={industry.name} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <industry.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{industry.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{industry.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
