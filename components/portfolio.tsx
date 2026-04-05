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
    description:
      "Automated weekly operations reporting: KPIs from spreadsheets into board-ready Google Docs, with Slack alerts for exceptions.",
    image: "/images/portfolio-medical.jpg",
    features: ["Google Docs reports", "Slack alerts", "Scheduled runs", "Template lock-in"],
    industry: "Healthcare",
    metric: "-8h/week manual reporting",
    challenge: "Managers rebuilt the same weekly pack by hand from scattered data.",
    delivered:
      "A reporting pipeline that pulls structured data, drafts the narrative with AI review gates, and publishes on schedule.",
    result: "Consistent board packs and more time for patient-facing work.",
  },
  {
    id: 2,
    title: "Home Services",
    description:
      "Lead routing from web forms, ads, and missed calls into one Telegram + email flow with CRM-ready payloads.",
    image: "/images/portfolio-home-services.jpg",
    features: ["Multi-source intake", "Telegram routing", "CRM fields", "Duplicate detection"],
    industry: "Services",
    metric: "-41% time-to-first-reply",
    challenge: "Leads arrived in different inboxes and follow-up was inconsistent.",
    delivered:
      "Normalized lead payloads, instant notifications, and a simple queue for dispatchers.",
    result: "Faster first touch and fewer dropped leads.",
  },
  {
    id: 3,
    title: "Logistics & Transport",
    description:
      "Shipment and ETA data consolidated into recurring client summaries in Sheets + PDF handoff for account teams.",
    image: "/images/portfolio-logistics.jpg",
    features: ["API / CSV ingest", "Sheets rollups", "Client PDF", "Exception flags"],
    industry: "Logistics",
    metric: "+27% on-time client visibility",
    challenge: "Account managers manually copied status from multiple systems.",
    delivered:
      "One automated report that merges data sources and highlights delays.",
    result: "Clearer client communication and less copy-paste.",
  },
  {
    id: 4,
    title: "Real Estate",
    description:
      "Inquiry triage: form and portal leads enriched, scored, and synced to CRM with draft first responses.",
    image: "/images/portfolio-real-estate.jpg",
    features: ["CRM sync", "Lead scoring", "Draft replies", "Broker routing"],
    industry: "Real Estate",
    metric: "+22% qualified follow-ups",
    challenge: "High volume of low-context inquiries with slow broker assignment.",
    delivered:
      "Routing rules plus AI-assisted drafts so brokers start faster with context.",
    result: "More conversations that convert to viewings.",
  },
  {
    id: 5,
    title: "Automotive Services",
    description:
      "After-sales pipeline: service reminders from DMS exports into Sheets, SMS/email handoff, and shop calendar hooks.",
    image: "/images/portfolio-automotive.jpg",
    features: ["DMS export ingest", "Reminder cadence", "SMS bridge", "Shop calendar"],
    industry: "Automotive",
    metric: "+31% booked follow-up services",
    challenge: "Reminder lists lived in spreadsheets and weren’t acted on consistently.",
    delivered:
      "A repeatable workflow from export to outreach with clear ownership.",
    result: "Higher service bay utilization and fewer missed follow-ups.",
  },
]

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)
  const introCallUrl = "https://calendly.com/slawandr1/15min"

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const openIntroCall = () => {
    window.open(introCallUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="portfolio" className="py-14 lg:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Examples
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Automation outcomes by industry
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Reporting, lead routing, and tool integrations — representative work across industries we
            serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 cursor-pointer ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <div className={`relative ${index === 0 ? "h-80" : "h-64"} overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {item.industry}
                </Badge>

                <Badge className="absolute top-4 right-4 bg-background/90 text-foreground">
                  {item.metric}
                </Badge>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>

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
                    View details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Don&apos;t see your industry? We design automations for any team that repeats the same work
            weekly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" onClick={scrollToContact}>
              Discuss your workflow <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={openIntroCall}>
              Book 15-min intro call
            </Button>
          </div>
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
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

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">{selectedItem.title}</h3>
              <p className="text-muted-foreground mb-6">{selectedItem.description}</p>

              <div className="grid gap-4 md:grid-cols-3 mb-6">
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    Challenge
                  </p>
                  <p className="text-sm text-foreground">{selectedItem.challenge}</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    Delivered
                  </p>
                  <p className="text-sm text-foreground">{selectedItem.delivered}</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    Result
                  </p>
                  <p className="text-sm text-primary font-medium">{selectedItem.result}</p>
                </div>
              </div>

              <h4 className="font-semibold text-foreground mb-3">Key parts:</h4>
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
                  Get a similar workflow
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedItem(null)
                    openIntroCall()
                  }}
                >
                  Book 15-min intro call
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
