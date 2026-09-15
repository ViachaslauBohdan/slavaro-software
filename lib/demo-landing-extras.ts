import type { DemoLanding } from "@/lib/demo-landings"

export type DemoPackage = {
  name: string
  price: string
  period?: string
  description: string
  highlights: string[]
  featured?: boolean
}

export type DemoFaq = {
  question: string
  answer: string
}

export type DemoExtras = {
  problemHeadline: string
  problemItems: { title: string; description: string }[]
  audienceHeadline: string
  audienceItems: string[]
  packages: DemoPackage[]
  faqs: DemoFaq[]
  galleryCaptions: string[]
  closingHeadline: string
  closingSubheadline: string
}

const DEFAULT_PACKAGES: DemoPackage[] = [
  {
    name: "Starter",
    price: "From €490",
    description: "Best for getting started quickly.",
    highlights: ["Core offering", "Email support", "Clear onboarding"],
  },
  {
    name: "Growth",
    price: "From €1,290",
    description: "For teams that need more capacity.",
    highlights: ["Everything in Starter", "Priority support", "Custom workflow"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated partnership at scale.",
    highlights: ["Dedicated manager", "SLA & reporting", "Multi-location support"],
  },
]

function defaultExtras(demo: DemoLanding): DemoExtras {
  return {
    problemHeadline: `Built for ${demo.clientLabel.toLowerCase()} that need results — not more noise`,
    problemItems: [
      {
        title: "Too many tools, not enough clarity",
        description: "Clients get lost between calls, spreadsheets, and half-finished websites.",
      },
      {
        title: "Hard to convert interest into action",
        description: "Visitors leave without booking, quoting, or contacting your team.",
      },
      {
        title: "No clear next step",
        description: "Without a strong landing structure, trust never builds past the first scroll.",
      },
    ],
    audienceHeadline: "Who this is for",
    audienceItems: [
      `${demo.clientLabel} looking for a clearer online presence`,
      "Teams that want more enquiries without more ad spend",
      "Founders who need a landing that looks premium and converts",
    ],
    packages: DEFAULT_PACKAGES,
    faqs: [
      {
        question: `How fast can ${demo.brand} get started?`,
        answer: "Most clients start within a few days after the first call — scope, timeline, and next steps are confirmed upfront.",
      },
      {
        question: "Do you work with businesses of different sizes?",
        answer: "Yes — from local operators to multi-location teams. Packages scale with your volume and complexity.",
      },
      {
        question: "What happens after I click the main CTA?",
        answer: "You reach a clear next step: quote, booking, consultation, or discovery call — depending on the offer.",
      },
      {
        question: "Is this a real company?",
        answer: "No — this is a sample industry landing built by SLAVARO SOFTWARE to show structure, visuals, and conversion flow.",
      },
    ],
    galleryCaptions: ["Hero experience", "Service detail", "Trust & proof"],
    closingHeadline: demo.cta.includes("Book") || demo.cta.includes("Reserve")
      ? "Ready when you are"
      : `Let's get your next step sorted`,
    closingSubheadline: demo.subheadline,
  }
}

const INDUSTRY_EXTRAS: Partial<Record<string, Partial<DemoExtras>>> = {
  logistics: {
    problemHeadline: "Freight that doesn’t leave your ops team guessing",
    problemItems: [
      { title: "Blind spots in transit", description: "Clients call for updates because tracking is unclear or outdated." },
      { title: "Customs delays", description: "Paperwork and border issues stall lanes without a single owner." },
      { title: "Quote chaos", description: "Quotes live in email threads — hard to compare, hard to close." },
    ],
    audienceItems: ["Importers & exporters", "Manufacturers with recurring lanes", "Ops teams that need reliable ETAs"],
    packages: [
      { name: "Lane quote", price: "Custom", description: "One-off or recurring freight lanes.", highlights: ["Route assessment", "ETA window", "Clear pricing"] },
      { name: "Managed lanes", price: "Retainer", description: "Ongoing freight with tracking portal.", highlights: ["Live tracking", "Customs support", "Dedicated ops contact"], featured: true },
      { name: "Network partner", price: "Enterprise", description: "Multi-country volume contracts.", highlights: ["SLA coverage", "Priority capacity", "Monthly reporting"] },
    ],
    faqs: [
      { question: "Which countries do you cover?", answer: "Road and rail across 24 European markets, with last-mile partners where needed." },
      { question: "Can I track shipments in real time?", answer: "Yes — clients and your ops team share the same status portal with ETA and POD." },
      { question: "How quickly do I get a quote?", answer: "Standard lanes often within hours; complex cargo may need a same-day review." },
      { question: "Is NordFreight a real carrier?", answer: "This is a sample logistics landing by SLAVARO SOFTWARE for outreach demos." },
    ],
    closingHeadline: "Need a freight quote this week?",
    closingSubheadline: "Tell us route, cargo, and timeline — we’ll come back with a clear option.",
  },
  restaurant: {
    problemHeadline: "Full tables start with a landing that makes people book",
    problemItems: [
      { title: "Phone-only reservations", description: "Guests bounce when they can’t book after hours." },
      { title: "Unclear menu & vibe", description: "Photos and dishes don’t sell the experience fast enough." },
      { title: "No private dining path", description: "Corporate and celebration bookings get lost in DMs." },
    ],
    packages: [
      { name: "Weeknight", price: "À la carte", description: "Open dining, flexible seating.", highlights: ["Online reserve", "Bar seats", "Seasonal menu"] },
      { name: "Weekend set", price: "From €65", description: "Curated tasting for couples & groups.", highlights: ["Set menu", "Wine pairing", "Preferred slots"], featured: true },
      { name: "Private room", price: "From €1,200", description: "Events and business dinners.", highlights: ["Dedicated host", "Custom menu", "AV available"] },
    ],
    closingHeadline: "Reserve your table tonight",
    closingSubheadline: "Live availability for both city locations — confirmation in seconds.",
  },
  beauty: {
    problemHeadline: "A salon booking page that feels as calm as the visit",
    packages: [
      { name: "Essential", price: "From €45", description: "Cuts, polish, and express treatments.", highlights: ["Online booking", "Reminder SMS", "Junior / senior choice"] },
      { name: "Signature", price: "From €120", description: "Facials and colour packages.", highlights: ["Senior stylist", "Consultation", "Aftercare"], featured: true },
      { name: "Membership", price: "Monthly", description: "Priority slots and member rates.", highlights: ["Priority booking", "10% off retail", "Guest pass"] },
    ],
    closingHeadline: "Book your next appointment",
    closingSubheadline: "Pick treatment, stylist, and time — arrive calm, leave glowing.",
  },
  healthcare: {
    problemHeadline: "Healthcare bookings without the waiting-list maze",
    packages: [
      { name: "Consultation", price: "From €60", description: "GP or dental check.", highlights: ["Same-week slots", "Online booking", "Digital results"] },
      { name: "Family plan", price: "From €180", description: "Care for the whole household.", highlights: ["Multiple patients", "Reminders", "Shared records"], featured: true },
      { name: "Corporate", price: "Custom", description: "Occupational health packages.", highlights: ["On-site options", "Reporting", "Dedicated liaison"] },
    ],
  },
  realestate: {
    closingHeadline: "Ready to buy, sell, or get a valuation?",
  },
  "real-estate": {
    problemHeadline: "Property decisions need clarity — not endless listings",
    packages: [
      { name: "Buyer search", price: "No upfront fee", description: "Matched viewings in your budget.", highlights: ["Curated shortlist", "Accompanied views", "Offer support"] },
      { name: "Seller package", price: "Commission", description: "Price, market, and close.", highlights: ["Pro photography", "Portal listings", "Negotiation"], featured: true },
      { name: "Investor desk", price: "Custom", description: "Yield-focused acquisitions.", highlights: ["Comps & data", "Portfolio review", "Off-market access"] },
    ],
    closingHeadline: "View listings or get a valuation",
    closingSubheadline: "Local expertise, clear process, and a team that responds fast.",
  },
  fitness: {
    packages: [
      { name: "Drop-in", price: "€25", description: "Single class or open gym day.", highlights: ["All classes", "Gear included", "Coach on floor"] },
      { name: "Unlimited", price: "€129/mo", description: "Full access membership.", highlights: ["Unlimited classes", "Progress tracking", "Guest pass"], featured: true },
      { name: "1:1 coaching", price: "From €79", description: "Personal programming.", highlights: ["Custom plan", "Weekly check-ins", "Nutrition basics"] },
    ],
  },
  travel: {
    packages: [
      { name: "City break", price: "From €890", description: "3–5 nights, curated.", highlights: ["Flights + hotel", "Transfers", "Local tips"] },
      { name: "Custom trip", price: "From €2,400", description: "Fully tailored itinerary.", highlights: ["Private planning", "24/7 support", "Experiences"], featured: true },
      { name: "Group / corporate", price: "Custom", description: "Retreats and incentives.", highlights: ["Group rates", "On-ground lead", "Full logistics"] },
    ],
  },
  legal: {
    packages: [
      { name: "Consultation", price: "€250", description: "30–45 min partner call.", highlights: ["Clear next steps", "Conflict check", "Written summary"] },
      { name: "Matter scope", price: "Fixed / capped", description: "Defined legal workstream.", highlights: ["Engagement letter", "Partner-led", "Timeline"], featured: true },
      { name: "Retainer", price: "Monthly", description: "Ongoing counsel for growing companies.", highlights: ["Priority access", "Contract review", "Board support"] },
    ],
  },
  finance: {
    packages: [
      { name: "Bookkeeping", price: "From €390/mo", description: "Clean monthly closes.", highlights: ["Reconciliations", "Dashboard", "Support"] },
      { name: "Advisory", price: "From €990/mo", description: "Tax + growth guidance.", highlights: ["Quarterly reviews", "Cash planning", "Priority"], featured: true },
      { name: "CFO support", price: "Custom", description: "Fractional finance leadership.", highlights: ["Board packs", "Fundraising prep", "KPI design"] },
    ],
  },
  construction: {
    packages: [
      { name: "Site visit", price: "Free", description: "Measure and scope discussion.", highlights: ["On-site walkthrough", "Rough estimate", "Constraints flagged"] },
      { name: "Fixed quote", price: "Project-based", description: "Line-item build proposal.", highlights: ["Timeline", "Materials", "Site manager"], featured: true },
      { name: "Fit-out program", price: "Enterprise", description: "Multi-site commercial work.", highlights: ["Rollout plan", "Reporting", "Dedicated crew"] },
    ],
  },
  automotive: {
    packages: [
      { name: "Browse & drive", price: "Free", description: "Inventory + test drive.", highlights: ["Live stock", "Online booking", "No pressure"] },
      { name: "Finance deal", price: "From 0% deposit*", description: "Approved finance options.", highlights: ["Monthly calc", "Trade-in estimate", "Fast approval"], featured: true },
      { name: "Certified+", price: "Warranty included", description: "Inspected pre-owned cars.", highlights: ["Multi-point check", "Warranty", "Service history"] },
    ],
  },
  education: {
    packages: [
      { name: "Single course", price: "From €149", description: "On-demand lessons.", highlights: ["Lifetime access", "Certificate", "Community"] },
      { name: "Live cohort", price: "From €790", description: "Instructor-led program.", highlights: ["Weekly live", "Projects", "Feedback"], featured: true },
      { name: "1:1 mentoring", price: "From €99/hr", description: "Personal tutoring path.", highlights: ["Custom plan", "Career goals", "Flexible schedule"] },
    ],
  },
  cleaning: {
    packages: [
      { name: "One-off", price: "From €89", description: "Standard or deep clean.", highlights: ["Vetted team", "Eco products", "Satisfaction guarantee"] },
      { name: "Weekly plan", price: "From €69/visit", description: "Recurring home cleaning.", highlights: ["Same team", "Easy reschedule", "Member rate"], featured: true },
      { name: "Office", price: "Custom", description: "Small business & coworking.", highlights: ["After-hours", "Supplies included", "Monthly invoice"] },
    ],
  },
  photography: {
    packages: [
      { name: "Portrait", price: "From €290", description: "Personal or brand portraits.", highlights: ["1–2 hrs", "Edited gallery", "Print rights"] },
      { name: "Wedding", price: "From €2,400", description: "Full day coverage.", highlights: ["Second shooter opt.", "72h preview", "Online gallery"], featured: true },
      { name: "Brand day", price: "From €890", description: "Product & team shoots.", highlights: ["Shot list", "Usage license", "Fast turnaround"] },
    ],
  },
  events: {
    packages: [
      { name: "Concept", price: "From €1,500", description: "Creative direction & plan.", highlights: ["Moodboards", "Venue shortlist", "Budget map"] },
      { name: "Full production", price: "Custom", description: "End-to-end event delivery.", highlights: ["AV & staging", "Run-of-show", "On-site crew"], featured: true },
      { name: "Retainer", price: "Annual", description: "Multi-event partnership.", highlights: ["Priority dates", "Brand continuity", "Reporting"] },
    ],
  },
  pharma: {
    packages: [
      { name: "Partnership intro", price: "On request", description: "Discovery for distributors & clinics.", highlights: ["Pipeline overview", "Compliance pack", "NDA available"] },
      { name: "Supply agreement", price: "Contract", description: "Product supply & quality terms.", highlights: ["GMP docs", "Batch release", "Pharmacovigilance"], featured: true },
      { name: "Clinical collab", price: "Custom", description: "Research hospital partnerships.", highlights: ["Protocol support", "Regulatory path", "Joint milestones"] },
    ],
  },
}

export function getDemoExtras(demo: DemoLanding): DemoExtras {
  const base = defaultExtras(demo)
  const override = INDUSTRY_EXTRAS[demo.slug]
  if (!override) return base
  return {
    ...base,
    ...override,
    problemItems: override.problemItems ?? base.problemItems,
    audienceItems: override.audienceItems ?? base.audienceItems,
    packages: override.packages ?? base.packages,
    faqs: override.faqs ?? base.faqs,
    galleryCaptions: override.galleryCaptions ?? base.galleryCaptions,
  }
}
