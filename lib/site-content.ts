export const site = {
  name: "SLAVARO SOFTWARE",
  tagline: "Technical Delivery Partner",
  person: "Viachaslau Bohdan",
  role: "Senior Technical Delivery Partner",
  location: "Warsaw, Poland",
  market: "Serving founders and businesses across the United States",
  email: "contact@slavaro.com",
  phone: "+48 537 437 454",
  calendly: "https://calendly.com/slawandr1/30min",
} as const

export const navItems = [
  { name: "How it works", href: "#process" },
  { name: "MVP", href: "#mvp" },
  { name: "Rescue", href: "#rescue" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
] as const

export const clientSituations = [
  "We have an idea but nobody to build it.",
  "Our MVP needs to launch quickly.",
  "Our current developer disappeared.",
  "Our application is almost finished but needs someone senior to get it over the line.",
  "We're doing too much manually.",
  "We need a customer portal or internal platform instead of spreadsheets.",
  "We built a prototype with AI tools, but now it needs to become a real product.",
] as const

export const processSteps = [
  {
    step: "01",
    title: "Tell us what you're trying to build or fix",
    description: "A short call or message. No technical jargon required — just the business goal.",
  },
  {
    step: "02",
    title: "We define the technical approach and scope",
    description: "You get a clear plan: what gets built, in what order, and what it costs.",
  },
  {
    step: "03",
    title: "We build and iterate quickly",
    description: "Regular demos and updates. You see progress every week, not after months of silence.",
  },
  {
    step: "04",
    title: "We launch a production-ready solution",
    description: "Deployed, documented, and ready for real users — not a prototype that falls apart.",
  },
] as const

export const mvpTypes = [
  "SaaS MVPs",
  "Startup MVPs",
  "Proofs of concept",
  "Marketplace MVPs",
  "AI-enabled MVPs",
] as const

export const webPlatforms = [
  "Custom web applications",
  "SaaS platforms",
  "Customer portals",
  "Internal tools",
  "Marketplaces",
  "Booking systems",
  "Admin panels",
  "Analytics dashboards",
] as const

export const rescueSignals = [
  "Existing codebase",
  "Vibe-coded or AI-generated prototype",
  "Lovable, Bolt, Cursor, or Replit prototype",
  "Half-finished MVP",
  "Bugs blocking launch",
  "Missing backend",
  "Authentication or payments",
  "Integrations",
  "Performance problems",
] as const

export const aiExamples = [
  "Let employees ask questions across thousands of internal documents.",
  "Automatically generate repetitive reports.",
  "Connect systems that employees currently update manually.",
  "Build an AI assistant around your company's knowledge.",
  "Automate repetitive operational workflows.",
] as const

export const automationExamples = [
  "API integrations",
  "CRM integrations",
  "Automated reporting",
  "Data synchronization",
  "Workflow automation",
  "Replace spreadsheet-based processes",
  "Connect existing business systems",
] as const

export const businessOutcomes = [
  {
    title: "Launch faster",
    description: "Get to market without hiring a full team or waiting months for scope to settle.",
  },
  {
    title: "Reduce development overhead",
    description: "One accountable partner instead of coordinating freelancers, agencies, and contractors.",
  },
  {
    title: "Automate manual work",
    description: "Stop paying people to copy data between systems or rebuild the same reports every week.",
  },
  {
    title: "One accountable partner",
    description: "From idea to launch — you work directly with our senior team, who owns the delivery.",
  },
] as const

export const credibilityDomains = [
  "SaaS",
  "Fintech",
  "IoT",
  "Travel",
  "Enterprise software",
  "AI-enabled systems",
] as const

export const experienceHighlights = [
  { company: "Klarna", detail: "Compliance platform & AI reporting automation" },
  { company: "SEKAI", detail: "Digital twin platforms & 3D web applications" },
  { company: "Haptiq", detail: "Enterprise AI & micro-frontend architecture" },
  { company: "Tenerifly", detail: "MVP built end-to-end from zero" },
] as const

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Angular",
  "Vue",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "AWS",
  "Docker",
  "OpenAI / LLM APIs",
  "RAG",
  "Vector databases",
] as const

export const contactNeeds = [
  { value: "build-mvp", label: "Build an MVP" },
  { value: "build-platform", label: "Build a web platform" },
  { value: "improve-product", label: "Improve an existing product" },
  { value: "fix-finish", label: "Fix / finish an application" },
  { value: "automate", label: "Automate a business process" },
  { value: "add-ai", label: "Add AI functionality" },
  { value: "other", label: "Something else" },
] as const

export const deliveryPipeline = [
  "Idea",
  "Scope",
  "Architecture",
  "Development",
  "Launch",
] as const
