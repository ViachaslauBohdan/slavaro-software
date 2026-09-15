import { INDUSTRY_DEMO_LANDINGS } from "@/lib/industry-demo-landings"

export type DemoTheme = {
  bg: string
  surface: string
  border: string
  text: string
  muted: string
  primary: string
  primaryHover: string
  primaryText: string
  accent: string
}

export type DemoLandingCategory = "industry" | "service"

/** Three distinct demo UI systems — not color themes alone. */
export type DemoLayout = "editorial" | "product" | "kinetic"

export const DEMO_LAYOUT_LABELS: Record<DemoLayout, string> = {
  editorial: "Lumina",
  product: "Atlas",
  kinetic: "Voltage",
}

export type DemoLanding = {
  slug: string
  category: DemoLandingCategory
  layout: DemoLayout
  clientType: string
  clientLabel: string
  brand: string
  eyebrow: string
  headline: string
  subheadline: string
  cta: string
  ctaSecondary: string
  features: { title: string; description: string }[]
  stats: { value: string; label: string }[]
  steps: { title: string; description: string }[]
  testimonial: { quote: string; author: string; role: string }
  trustLogos: string[]
  theme: DemoTheme
}

export const DEMO_LANDINGS: DemoLanding[] = [
  {
    slug: "saas-mvp",
    category: "service",
    layout: "product",
    clientType: "build-mvp",
    clientLabel: "Build an MVP",
    brand: "PulseMetrics",
    eyebrow: "SaaS MVP · sample",
    headline: "Launch your product dashboard in weeks, not quarters.",
    subheadline:
      "Track activation, retention, and revenue in one place — built for early-stage SaaS teams who need a credible v1 fast.",
    cta: "Book a demo",
    ctaSecondary: "See sample metrics",
    features: [
      {
        title: "One core workflow",
        description: "Focus on the metric that proves value to your first users — not a bloated feature list.",
      },
      {
        title: "Auth & billing ready",
        description: "Sign-up, roles, and subscription hooks included so you can charge when validation lands.",
      },
      {
        title: "Production deployment",
        description: "Shipped on a real stack with monitoring — not a prototype that breaks on day one.",
      },
    ],
    stats: [
      { value: "3 wks", label: "Typical MVP scope" },
      { value: "1", label: "Core user workflow" },
      { value: "24/7", label: "Cloud hosting" },
    ],
    steps: [
      { title: "Discovery", description: "Define the one workflow that validates your idea." },
      { title: "Build", description: "Iterate weekly with demos until the MVP is shippable." },
      { title: "Launch", description: "Deploy, hand over docs, and support your first users." },
    ],
    testimonial: {
      quote: "We needed something investors and early customers could actually use — not slides.",
      author: "Founder, B2B SaaS",
      role: "Pre-seed · analytics product",
    },
    trustLogos: ["Stripe", "Vercel", "PostHog", "Linear", "Notion", "Intercom"],
    theme: {
      bg: "#f8fafc",
      surface: "#ffffff",
      border: "#e2e8f0",
      text: "#0f172a",
      muted: "#64748b",
      primary: "#0f172a",
      primaryHover: "#1e293b",
      primaryText: "#ffffff",
      accent: "#0d9488",
    },
  },
  {
    slug: "web-platform",
    category: "service",
    layout: "product",
    clientType: "build-platform",
    clientLabel: "Build a web platform",
    brand: "BookWell",
    eyebrow: "Web platform · sample",
    headline: "Online booking that fits how your business actually runs.",
    subheadline:
      "Customer self-service, staff scheduling, and payments in one platform — replace phone tag and spreadsheet chaos.",
    cta: "Start free trial",
    ctaSecondary: "View platform tour",
    features: [
      {
        title: "Customer portal",
        description: "Clients book, reschedule, and pay without calling your front desk.",
      },
      {
        title: "Admin dashboard",
        description: "Staff see calendars, availability, and daily operations in one view.",
      },
      {
        title: "Integrations",
        description: "Connect email, payments, and CRM so data flows without manual copy-paste.",
      },
    ],
    stats: [
      { value: "40%", label: "Fewer no-shows" },
      { value: "12h", label: "Saved per week" },
      { value: "100%", label: "Mobile responsive" },
    ],
    steps: [
      { title: "Map workflows", description: "How customers book and how staff fulfill." },
      { title: "Build & test", description: "Real users on staging before go-live." },
      { title: "Go live", description: "Training, deployment, and handover included." },
    ],
    testimonial: {
      quote: "Our team stopped living in WhatsApp and Google Sheets for appointments.",
      author: "Operations lead",
      role: "Multi-location service business",
    },
    trustLogos: ["Calendly", "Square", "Twilio", "HubSpot", "Zapier", "Fresha"],
    theme: {
      bg: "#fafafa",
      surface: "#ffffff",
      border: "#e5e7eb",
      text: "#111827",
      muted: "#6b7280",
      primary: "#0f766e",
      primaryHover: "#0d9488",
      primaryText: "#ffffff",
      accent: "#b45309",
    },
  },
  {
    slug: "product-refresh",
    category: "service",
    layout: "product",
    clientType: "improve-product",
    clientLabel: "Improve an existing product",
    brand: "Northwind CRM",
    eyebrow: "Product refresh · sample",
    headline: "Modern interface. Same data. Happier sales team.",
    subheadline:
      "Upgrade legacy UI, improve performance, and add the features your team asks for — without rebuilding from scratch.",
    cta: "Request audit",
    ctaSecondary: "See before / after",
    features: [
      {
        title: "UX modernization",
        description: "Clear navigation, faster screens, and design consistency across modules.",
      },
      {
        title: "Performance wins",
        description: "Fix slow queries, heavy pages, and friction that blocks daily work.",
      },
      {
        title: "Incremental delivery",
        description: "Ship improvements in phases so the business keeps running.",
      },
    ],
    stats: [
      { value: "2×", label: "Faster key screens" },
      { value: "−30%", label: "Support tickets" },
      { value: "0", label: "Big-bang rewrite" },
    ],
    steps: [
      { title: "Audit", description: "Find what slows users and what blocks new features." },
      { title: "Prioritize", description: "Roadmap by impact — quick wins first." },
      { title: "Deliver", description: "Refactor and release without stopping operations." },
    ],
    testimonial: {
      quote: "Sales finally stopped complaining about the CRM — that alone paid for the project.",
      author: "VP Sales",
      role: "Mid-market B2B",
    },
    trustLogos: ["Salesforce", "Pipedrive", "Segment", "Mixpanel", "Slack", "Zendesk"],
    theme: {
      bg: "#f8fafc",
      surface: "#ffffff",
      border: "#e2e8f0",
      text: "#0f172a",
      muted: "#64748b",
      primary: "#115e59",
      primaryHover: "#0f766e",
      primaryText: "#ffffff",
      accent: "#0369a1",
    },
  },
  {
    slug: "product-rescue",
    category: "service",
    layout: "kinetic",
    clientType: "fix-finish",
    clientLabel: "Fix / finish an application",
    brand: "ShipLane",
    eyebrow: "Product rescue · sample",
    headline: "Stuck at 80%? Let's get your app over the line.",
    subheadline:
      "Half-finished MVP, abandoned codebase, or AI prototype that needs production engineering — we assess, fix blockers, and ship.",
    cta: "Get a rescue plan",
    ctaSecondary: "What's blocking launch?",
    features: [
      {
        title: "Codebase assessment",
        description: "Honest read on what you have and the fastest path to production.",
      },
      {
        title: "Launch blockers first",
        description: "Auth, payments, bugs, deployment — whatever stops real users today.",
      },
      {
        title: "No unnecessary rebuild",
        description: "Rescue when possible. Rebuild only when the math says so.",
      },
    ],
    stats: [
      { value: "48h", label: "Initial assessment" },
      { value: "1", label: "Accountable partner" },
      { value: "→", label: "Production path" },
    ],
    steps: [
      { title: "Review", description: "Repo, infra, and gaps vs. launch requirements." },
      { title: "Stabilize", description: "Fix critical bugs and missing backend pieces." },
      { title: "Ship", description: "Deploy, document, and hand over cleanly." },
    ],
    testimonial: {
      quote: "Our dev left mid-project. Three weeks later we were live with paying users.",
      author: "Co-founder",
      role: "Marketplace MVP",
    },
    trustLogos: ["GitHub", "AWS", "Docker", "Sentry", "PostgreSQL", "Redis"],
    theme: {
      bg: "#080808",
      surface: "#141414",
      border: "#2a2a2a",
      text: "#fafafa",
      muted: "#a3a3a3",
      primary: "#ff4d2e",
      primaryHover: "#ff6b4d",
      primaryText: "#080808",
      accent: "#c8ff00",
    },
  },
  {
    slug: "business-automation",
    category: "service",
    layout: "kinetic",
    clientType: "automate",
    clientLabel: "Automate a business process",
    brand: "FlowBridge",
    eyebrow: "Automation · sample",
    headline: "Stop copying data between tools every morning.",
    subheadline:
      "Custom integrations and internal tools that connect CRM, spreadsheets, and ops systems — reliable software instead of manual routines.",
    cta: "Map my process",
    ctaSecondary: "Example automations",
    features: [
      {
        title: "API integrations",
        description: "Sync data between the systems you already pay for.",
      },
      {
        title: "Workflow automation",
        description: "Triggers, approvals, and notifications on a schedule.",
      },
      {
        title: "Reporting",
        description: "Dashboards and exports that update themselves.",
      },
    ],
    stats: [
      { value: "15h", label: "Saved weekly" },
      { value: "0", label: "Copy-paste errors" },
      { value: "3+", label: "Systems connected" },
    ],
    steps: [
      { title: "Document", description: "Where people spend time on manual steps." },
      { title: "Automate", description: "Build the smallest reliable flow that replaces them." },
      { title: "Monitor", description: "Alerts when something fails — not silent breakage." },
    ],
    testimonial: {
      quote: "We eliminated the weekly export ritual. Finance got their numbers on Monday automatically.",
      author: "Ops manager",
      role: "Services company · 40 staff",
    },
    trustLogos: ["Airtable", "Google Sheets", "Make", "Xero", "Monday.com", "Asana"],
    theme: {
      bg: "#070707",
      surface: "#121212",
      border: "#262626",
      text: "#fafafa",
      muted: "#a3a3a3",
      primary: "#00e5a8",
      primaryHover: "#33ebb9",
      primaryText: "#070707",
      accent: "#ff6b2c",
    },
  },
  {
    slug: "ai-assistant",
    category: "service",
    layout: "kinetic",
    clientType: "add-ai",
    clientLabel: "Add AI functionality",
    brand: "AskDocs",
    eyebrow: "AI product · sample",
    headline: "Your team's documents. One assistant that actually answers.",
    subheadline:
      "Search internal PDFs, policies, and wikis in plain language — practical AI built into your workflow, not a generic chatbot demo.",
    cta: "Try a live demo",
    ctaSecondary: "How it works",
    features: [
      {
        title: "Document search (RAG)",
        description: "Answers grounded in your files with source citations.",
      },
      {
        title: "Secure deployment",
        description: "Your data stays in your environment — production-grade, not a toy.",
      },
      {
        title: "Embedded in your app",
        description: "AI inside your portal or ops tool, not a separate tab nobody opens.",
      },
    ],
    stats: [
      { value: "90%", label: "Faster doc lookup" },
      { value: "1000+", label: "Pages indexed" },
      { value: "EN/PL", label: "Multilingual" },
    ],
    steps: [
      { title: "Ingest", description: "Connect document sources and define access rules." },
      { title: "Tune", description: "Test prompts and retrieval on real user questions." },
      { title: "Deploy", description: "Ship inside your product or internal tools." },
    ],
    testimonial: {
      quote: "Support stopped forwarding the same policy PDFs — people self-serve now.",
      author: "Head of Customer Success",
      role: "B2B SaaS · 200 employees",
    },
    trustLogos: ["OpenAI", "Anthropic", "Pinecone", "Confluence", "Google Drive", "SharePoint"],
    theme: {
      bg: "#050505",
      surface: "#111111",
      border: "#262626",
      text: "#fafafa",
      muted: "#a3a3a3",
      primary: "#c8ff00",
      primaryHover: "#d4ff33",
      primaryText: "#050505",
      accent: "#00e5a8",
    },
  },
]

export const SERVICE_DEMO_LANDINGS = DEMO_LANDINGS
export const ALL_DEMO_LANDINGS: DemoLanding[] = [...INDUSTRY_DEMO_LANDINGS, ...DEMO_LANDINGS]

export function getDemoLanding(slug: string): DemoLanding | undefined {
  return ALL_DEMO_LANDINGS.find((demo) => demo.slug === slug)
}

export function getAllDemoSlugs(): string[] {
  return ALL_DEMO_LANDINGS.map((demo) => demo.slug)
}

export function getIndustryDemoLandings(): DemoLanding[] {
  return INDUSTRY_DEMO_LANDINGS
}

export function getServiceDemoLandings(): DemoLanding[] {
  return DEMO_LANDINGS
}
