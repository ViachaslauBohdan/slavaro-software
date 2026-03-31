"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Medical & Aesthetic Clinics",
    description: "Elegant landing pages for medical spas, dental clinics, and aesthetic centers. Designed to build trust and drive appointment bookings.",
    image: "/images/portfolio-medical.jpg",
    features: ["Online Booking", "Treatment Catalog", "Before/After Gallery", "Patient Reviews"],
    industry: "Healthcare",
    metric: "+34% booking requests in 30 days",
    challenge: "High ad spend but low appointment conversion from mobile traffic.",
    delivered: "A trust-first landing page with proof sections, treatment clarity, and instant booking flow.",
    result: "More qualified appointment requests and better campaign ROI.",
  },
  {
    id: 2,
    title: "Home Services",
    description: "Professional websites for plumbers, electricians, cleaners, and handymen. Built to generate leads and showcase services.",
    image: "/images/portfolio-home-services.jpg",
    features: ["Service Request Form", "Price Calculator", "Service Areas Map", "Emergency Contact"],
    industry: "Services",
    metric: "-41% response time to new leads",
    challenge: "Leads arrived from multiple channels and follow-up was too slow.",
    delivered: "Lead capture pages with instant Telegram and email notifications plus structured service request forms.",
    result: "Faster first reply and fewer missed opportunities.",
  },
  {
    id: 3,
    title: "Logistics & Transport",
    description: "Corporate landing pages for freight, shipping, and transport companies. Focused on credibility and quote requests.",
    image: "/images/portfolio-logistics.jpg",
    features: ["Quote Calculator", "Fleet Showcase", "Tracking Integration", "Route Coverage"],
    industry: "Logistics",
    metric: "+27% quote requests",
    challenge: "Visitors had unclear service scope and low trust before submitting quote requests.",
    delivered: "Industry-specific pages with route coverage, proof points, and fast quote intake forms.",
    result: "Higher quote intent and improved sales pipeline quality.",
  },
  {
    id: 4,
    title: "Real Estate",
    description: "Luxury property websites for agents and agencies. Designed to showcase listings and capture buyer inquiries.",
    image: "/images/portfolio-real-estate.jpg",
    features: ["Property Listings", "Virtual Tours", "Mortgage Calculator", "Agent Profiles"],
    industry: "Real Estate",
    metric: "+22% qualified inquiries",
    challenge: "Too many low-intent inquiries and not enough context in forms.",
    delivered: "Listing-focused pages with virtual tours and qualification fields tailored to buyer intent.",
    result: "More actionable leads for the sales team.",
  },
  {
    id: 5,
    title: "Automotive Services",
    description: "Dynamic landing pages for car dealerships, repair shops, and detailing services. Built to drive service bookings.",
    image: "/images/portfolio-automotive.jpg",
    features: ["Service Booking", "Vehicle Inventory", "Price Lists", "Customer Reviews"],
    industry: "Automotive",
    metric: "+31% service bookings",
    challenge: "Users dropped before booking because services and pricing were hard to compare.",
    delivered: "Clear offer structure, pricing visibility, and mobile-first booking flow.",
    result: "Higher booking completion and better local lead conversion.",
  },
]

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)
  const introCallUrl = "https://calendly.com/slawandr1/15min"

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const openIntroCall = () => {
    window.open(introCallUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Landing Pages That Convert
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in creating high-conversion landing pages for service businesses. 
            Here are some examples of industries we serve.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 cursor-pointer ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className={`relative ${index === 0 ? "h-80" : "h-64"} overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Industry Badge */}
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {item.industry}
                </Badge>

                <Badge className="absolute top-4 right-4 bg-background/90 text-foreground">
                  {item.metric}
                </Badge>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-primary-foreground p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {item.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="secondary" size="sm">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Don&apos;t see your industry? We create landing pages for any service business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" onClick={scrollToContact}>
              Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={openIntroCall}>
              Book 15-min Intro Call
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                {selectedItem.industry}
              </Badge>
              <Badge className="absolute bottom-4 left-4 bg-background/90 text-foreground">
                {selectedItem.metric}
              </Badge>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">{selectedItem.title}</h3>
              <p className="text-muted-foreground mb-6">{selectedItem.description}</p>

              <div className="grid gap-4 md:grid-cols-3 mb-6">
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Challenge</p>
                  <p className="text-sm text-foreground">{selectedItem.challenge}</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Delivered</p>
                  <p className="text-sm text-foreground">{selectedItem.delivered}</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Result</p>
                  <p className="text-sm text-primary font-medium">{selectedItem.result}</p>
                </div>
              </div>

              <h4 className="font-semibold text-foreground mb-3">Key Features Included:</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {selectedItem.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  className="flex-1"
                  onClick={() => {
                    setSelectedItem(null)
                    scrollToContact()
                  }}
                >
                  Get Similar Landing Page
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedItem(null)
                    openIntroCall()
                  }}
                >
                  Book 15-min Intro Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
