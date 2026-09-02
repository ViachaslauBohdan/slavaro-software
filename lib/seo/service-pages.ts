import { ROUTES } from "@/lib/seo/routes"
import type { FaqItem } from "@/lib/seo/structured-data"

export type ServiceSection = {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export type ServicePageData = {
  slug: keyof typeof ROUTES
  path: string
  eyebrow: string
  h1: string
  lead: string
  intro: string[]
  whoFor: ServiceSection
  includes: ServiceSection
  process: ServiceSection
  technologies?: ServiceSection
  faqs: FaqItem[]
  related: { href: string; label: string }[]
  cta: string
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  mvpDevelopment: {
    slug: "mvpDevelopment",
    path: ROUTES.mvpDevelopment,
    eyebrow: "MVP development",
    h1: "MVP Development for Startups",
    lead: "Turn your product idea into a working MVP — scoped tightly, built quickly, and ready for real users.",
    intro: [
      "Most founders don't need a full product on day one. They need a credible first version that validates demand, supports sales conversations, or gets in front of early customers.",
      "We help US startup and SaaS founders go from idea to production MVP — handling scope, architecture, frontend, backend, authentication, payments, database design, and deployment without requiring you to hire and manage a full development team.",
    ],
    whoFor: {
      heading: "Who this is for",
      paragraphs: [
        "This service is built for non-technical founders, early-stage SaaS teams, and small businesses that need to move from concept to a shippable product quickly.",
      ],
      list: [
        "Startup founders preparing to launch or raise",
        "SaaS teams validating a new product line",
        "Businesses replacing manual workflows with a first software version",
        "Teams that need a proof of concept before committing to a larger build",
      ],
    },
    includes: {
      heading: "What an MVP engagement can include",
      paragraphs: [
        "Every MVP is scoped around the smallest version that proves the business hypothesis. Typical deliverables include:",
      ],
      list: [
        "Core user journey and product scope definition",
        "Frontend and backend application architecture",
        "User authentication and role-based access",
        "Database design and API development",
        "Payment or subscription integration when required",
        "Admin tools, onboarding flows, or internal dashboards as needed",
        "Production deployment, documentation, and launch support",
      ],
    },
    process: {
      heading: "MVP development process",
      paragraphs: [
        "The process is designed to reduce waste and keep momentum. You always know what is being built, why it matters, and what comes next.",
      ],
      list: [
        "Discovery call to understand the business goal and constraints",
        "Scope definition focused on the minimum viable product",
        "Architecture and delivery plan with clear milestones",
        "Iterative development with regular demos",
        "Production launch and handover",
      ],
    },
    technologies: {
      heading: "Technologies commonly used",
      paragraphs: [
        "Technology choices depend on your product, timeline, and existing stack. Common tools include React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, AWS, and Docker.",
      ],
    },
    faqs: [
      {
        question: "How long does it take to build an MVP?",
        answer:
          "Timeline depends on scope. A focused MVP with a single core workflow can often be delivered in a few weeks. More complex products with multiple user roles, integrations, or compliance needs take longer. We provide a realistic timeline after the discovery call.",
      },
      {
        question: "What should be included in a SaaS MVP?",
        answer:
          "A SaaS MVP should include the one workflow that proves value to your target user, plus the minimum infrastructure to support it: authentication, core data model, the primary interface, and deployment. Nice-to-have features can wait until after validation.",
      },
      {
        question: "Do you work with US startups remotely?",
        answer:
          "Yes. We work with US founders and businesses remotely. Communication is async-friendly with regular demos and clear written scope.",
      },
      {
        question: "Can you help after the MVP launches?",
        answer:
          "Yes. Many engagements continue after launch for new features, performance improvements, integrations, or ongoing product development.",
      },
    ],
    related: [
      { href: ROUTES.saasDevelopment, label: "SaaS development services" },
      { href: ROUTES.startupSoftwareDevelopment, label: "software development for startups" },
      { href: ROUTES.productRescue, label: "finish an existing MVP" },
    ],
    cta: "Tell Us Your Idea",
  },

  webApplicationDevelopment: {
    slug: "webApplicationDevelopment",
    path: ROUTES.webApplicationDevelopment,
    eyebrow: "Web applications",
    h1: "Custom Web Application Development",
    lead: "Build web platforms that match how your business actually operates — not generic software you have to work around.",
    intro: [
      "Custom web application development is the right fit when off-the-shelf tools create friction, spreadsheets stop scaling, or your team needs a dedicated customer portal, internal tool, or operational platform.",
      "We design and build production-ready web applications for US businesses — from customer-facing portals to admin panels, booking systems, marketplaces, and analytics dashboards.",
    ],
    whoFor: {
      heading: "Common use cases",
      paragraphs: ["Businesses typically come to this service when they need software tailored to a specific workflow or customer experience."],
      list: [
        "Customer portals and self-service platforms",
        "Internal operations and workflow tools",
        "Booking, scheduling, and service management systems",
        "Marketplaces and multi-sided platforms",
        "Admin panels and analytics dashboards",
      ],
    },
    includes: {
      heading: "What development can cover",
      paragraphs: ["Engagements are scoped around business outcomes, not arbitrary feature lists."],
      list: [
        "Requirements discovery and technical planning",
        "UX-oriented application structure and interface development",
        "Backend APIs, databases, and business logic",
        "Third-party integrations and authentication",
        "Performance, security, and deployment setup",
        "Documentation and maintainable codebase handover",
      ],
    },
    process: {
      heading: "How projects are delivered",
      paragraphs: ["You work directly with our senior team, who owns delivery end to end."],
      list: [
        "Define the business problem and success criteria",
        "Agree on scope, architecture, and milestones",
        "Build in iterations with visible progress",
        "Launch to production and support transition",
      ],
    },
    faqs: [
      {
        question: "How much does custom web application development cost?",
        answer:
          "Cost depends on complexity, integrations, user roles, and timeline. Smaller focused applications start in the low five figures. Larger platforms require a scoped estimate after discovery. We provide fixed-scope pricing where possible.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes. Most business applications need to connect to CRMs, payment providers, internal databases, or third-party APIs. Integration planning is part of the architecture phase.",
      },
      {
        question: "Do you build for mobile as well as desktop?",
        answer:
          "Web applications are built responsive by default so they work across desktop, tablet, and mobile browsers. Native mobile apps are a separate scope if needed.",
      },
    ],
    related: [
      { href: ROUTES.saasDevelopment, label: "SaaS development" },
      { href: ROUTES.reactDevelopment, label: "React development services" },
      { href: ROUTES.businessAutomation, label: "business automation development" },
    ],
    cta: "Discuss Your Platform",
  },

  saasDevelopment: {
    slug: "saasDevelopment",
    path: ROUTES.saasDevelopment,
    eyebrow: "SaaS development",
    h1: "SaaS Development Services",
    lead: "Build subscription software with the architecture, onboarding, and scalability your product needs from the start.",
    intro: [
      "SaaS products have specific technical demands: multi-tenant data models, billing, onboarding, permissions, and the ability to grow without rebuilding the foundation.",
      "We help US SaaS founders and product teams build and launch SaaS applications — from early MVP through production features that support paying customers.",
    ],
    whoFor: {
      heading: "Who this service fits",
      paragraphs: ["Best suited for founders and teams building software sold as a recurring service."],
      list: [
        "First-time SaaS founders launching an MVP",
        "Teams adding a new SaaS product line",
        "Businesses turning an internal tool into a customer-facing SaaS",
        "Companies that need a senior partner for ongoing SaaS development",
      ],
    },
    includes: {
      heading: "Typical SaaS development scope",
      paragraphs: ["Scope is always tied to your current stage — MVP, growth, or modernization."],
      list: [
        "Product architecture and technical roadmap",
        "User accounts, teams, and permissions",
        "Subscription billing and payment flows",
        "Core product features and admin tooling",
        "API design and third-party integrations",
        "Deployment, monitoring, and production readiness",
      ],
    },
    process: {
      heading: "Delivery approach",
      paragraphs: ["SaaS projects move fastest when scope is ruthlessly prioritized around revenue-critical workflows."],
      list: [
        "Identify the workflow that makes the product worth paying for",
        "Design architecture that supports iteration",
        "Build and validate with real users",
        "Expand features based on customer feedback",
      ],
    },
    faqs: [
      {
        question: "Can you build a SaaS MVP quickly?",
        answer:
          "Yes. A SaaS MVP should focus on one valuable workflow plus the minimum account and billing infrastructure required to charge customers. We help founders avoid overbuilding before validation.",
      },
      {
        question: "Do you handle subscriptions and payments?",
        answer:
          "Yes. Common integrations include Stripe and similar providers for subscriptions, one-time payments, and customer billing portals.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Post-launch work often includes feature expansion, performance optimization, onboarding improvements, and integrations requested by early customers.",
      },
    ],
    related: [
      { href: ROUTES.mvpDevelopment, label: "MVP development services" },
      { href: ROUTES.startupSoftwareDevelopment, label: "startup software development" },
      { href: ROUTES.reactDevelopment, label: "Next.js development services" },
    ],
    cta: "Discuss Your SaaS Product",
  },

  startupSoftwareDevelopment: {
    slug: "startupSoftwareDevelopment",
    path: ROUTES.startupSoftwareDevelopment,
    eyebrow: "Startup software",
    h1: "Software Development for Startups",
    lead: "Ship your startup product with one senior technical partner — not a rotating cast of freelancers.",
    intro: [
      "Early-stage startups rarely need a large in-house engineering team on day one. They need someone who can translate a business idea into working software, make sound technical decisions, and deliver fast without creating future debt.",
      "We work with US startup founders as a technical delivery partner — owning architecture, development, and launch while you stay focused on customers, sales, and fundraising.",
    ],
    whoFor: {
      heading: "Built for startup founders who need",
      paragraphs: ["This is for founders who want speed, clarity, and accountability — not endless discovery phases."],
      list: [
        "An MVP or first product version",
        "A technical partner during pre-seed or seed stage",
        "Help turning a prototype into production software",
        "Senior engineering without full-time hiring overhead",
      ],
    },
    includes: {
      heading: "What we take off your plate",
      paragraphs: ["You get end-to-end delivery from a team that has shipped products in production environments."],
      list: [
        "Technical scoping and architecture decisions",
        "Frontend and backend implementation",
        "Infrastructure, deployment, and launch",
        "Integration with payments, auth, and third-party tools",
        "Clear communication with investors or stakeholders when needed",
      ],
    },
    process: {
      heading: "How startup projects start",
      paragraphs: ["Projects begin with a short discovery conversation focused on business goals."],
      list: [
        "Understand the idea, users, and timeline",
        "Define the first shippable version",
        "Agree on milestones and pricing",
        "Build, demo, and launch",
      ],
    },
    faqs: [
      {
        question: "Are you a freelancer or an agency?",
        answer:
          "Neither label fits well. We are a senior technical delivery partner — you work directly with us, not through account managers or junior developers.",
      },
      {
        question: "Can you act as a technical co-founder substitute?",
        answer:
          "For many early-stage founders, we provide the technical leadership needed before a full-time CTO or engineering hire makes sense.",
      },
      {
        question: "Do you work with US companies only?",
        answer:
          "Our primary market is the United States, and we work remotely with US founders and businesses. We also serve international clients when the fit is right.",
      },
    ],
    related: [
      { href: ROUTES.mvpDevelopment, label: "startup MVP development" },
      { href: ROUTES.productRescue, label: "unfinished software project rescue" },
      { href: ROUTES.about, label: "about the delivery partner" },
    ],
    cta: "Discuss Your Startup Project",
  },

  productRescue: {
    slug: "productRescue",
    path: ROUTES.productRescue,
    eyebrow: "Product rescue",
    h1: "MVP & Software Project Rescue",
    lead: "Finish what you started — assess what you have, fix what blocks launch, and ship without an unnecessary rebuild.",
    intro: [
      "Many US businesses are stuck with half-finished MVPs, abandoned codebases, or AI-generated prototypes that look promising but are not production-ready.",
      "We help teams rescue unfinished software projects: take over existing code, fix critical bugs, add missing backend functionality, and get the product over the line.",
    ],
    whoFor: {
      heading: "When product rescue makes sense",
      paragraphs: ["Rescue work is common when a project loses momentum or outgrows its original builder."],
      list: [
        "Your developer left mid-project",
        "A prototype from Lovable, Bolt, Cursor, or Replit needs production engineering",
        "Bugs or missing features are blocking launch",
        "Authentication, payments, or integrations were never finished",
        "Performance problems appear under real usage",
      ],
    },
    includes: {
      heading: "What rescue engagements include",
      paragraphs: ["The first step is always assessment — not assumptions about throwing everything away."],
      list: [
        "Codebase and architecture review",
        "Identification of what can be kept vs. rebuilt",
        "Bug fixes and stability improvements",
        "Missing backend, auth, payments, or integrations",
        "Production deployment and hardening",
        "Documentation so your team understands the system",
      ],
    },
    process: {
      heading: "Rescue process",
      paragraphs: ["Speed matters when you have already invested time and budget."],
      list: [
        "Review the current product and blockers",
        "Recommend the fastest path to production",
        "Prioritize fixes that unblock launch",
        "Deliver, deploy, and hand over cleanly",
      ],
    },
    faqs: [
      {
        question: "Should I rebuild or rescue my existing MVP?",
        answer:
          "Not always. Some prototypes should be rebuilt; many can be salvaged with targeted fixes. We assess the codebase first and recommend the fastest responsible path — not the most billable one.",
      },
      {
        question: "Can you take over a project from another developer?",
        answer:
          "Yes. We regularly take over existing codebases, document what exists, and continue development without restarting from scratch unless that is genuinely the better option.",
      },
      {
        question: "What if the product was built with AI coding tools?",
        answer:
          "AI-generated prototypes often need proper backend architecture, security, error handling, and deployment work. We productionize these projects so they can support real users.",
      },
    ],
    related: [
      { href: ROUTES.mvpDevelopment, label: "MVP development" },
      { href: ROUTES.reactDevelopment, label: "modernize frontend with React" },
      { href: ROUTES.webApplicationDevelopment, label: "custom web application development" },
    ],
    cta: "Get Help Finishing Your Product",
  },

  reactDevelopment: {
    slug: "reactDevelopment",
    path: ROUTES.reactDevelopment,
    eyebrow: "React & Next.js",
    h1: "React & Next.js Development Services",
    lead: "Modern, maintainable frontends and full-stack applications built with React and Next.js for US product teams.",
    intro: [
      "React and Next.js are strong choices for SaaS products, customer portals, and data-heavy web applications — when implemented with clear architecture and performance in mind.",
      "We provide React development and Next.js development for US businesses that need production-grade interfaces, server-side rendering, design system consistency, and long-term maintainability.",
    ],
    whoFor: {
      heading: "When teams hire for React or Next.js",
      paragraphs: ["This service supports both greenfield builds and improvements to existing applications."],
      list: [
        "SaaS products needing a modern frontend",
        "Teams migrating from legacy frontends",
        "Founders building on Next.js from the start",
        "Products requiring SEO-friendly server rendering",
        "Applications that need better performance or structure",
      ],
    },
    includes: {
      heading: "What React / Next.js work can include",
      paragraphs: ["Engagements focus on product outcomes, not just component delivery."],
      list: [
        "Application architecture and folder structure",
        "Component libraries and design system implementation",
        "Server and client rendering strategy",
        "API integration and state management",
        "Performance optimization and Core Web Vitals improvements",
        "Testing, deployment, and CI/CD setup",
      ],
    },
    process: {
      heading: "How frontend projects run",
      paragraphs: ["Frontend work is integrated with backend and product goals — not isolated UI tasks."],
      list: [
        "Audit existing code or define new architecture",
        "Implement iteratively with reviewable milestones",
        "Validate performance and usability",
        "Document patterns for your team",
      ],
    },
    faqs: [
      {
        question: "React vs Next.js — which should I use?",
        answer:
          "Next.js is often the right choice for SaaS marketing sites, SEO-sensitive products, and full-stack applications. Plain React fits some internal tools and embedded apps. We recommend based on your product goals, not preference.",
      },
      {
        question: "Can you modernize an older React codebase?",
        answer:
          "Yes. Modernization work includes dependency upgrades, architecture cleanup, performance fixes, and incremental refactors that reduce risk.",
      },
      {
        question: "Do you only do frontend?",
        answer:
          "No. Most engagements include backend work with Node.js or NestJS when the product requires it.",
      },
    ],
    related: [
      { href: ROUTES.webApplicationDevelopment, label: "custom web application development" },
      { href: ROUTES.saasDevelopment, label: "SaaS development services" },
      { href: ROUTES.productRescue, label: "fix unfinished web app" },
    ],
    cta: "Discuss Your React Project",
  },

  aiIntegration: {
    slug: "aiIntegration",
    path: ROUTES.aiIntegration,
    eyebrow: "AI integration",
    h1: "AI Integration Services",
    lead: "Practical AI features that save time — custom assistants, document search, and workflow automation built into your product or operations.",
    intro: [
      "Most businesses do not need generic AI demos. They need AI integrated into real workflows: answering questions across internal documents, generating reports, or automating repetitive operational tasks.",
      "We build AI integration for US companies — including custom AI assistants, RAG-based document search, LLM API integrations, and production-ready AI features inside web applications.",
    ],
    whoFor: {
      heading: "Practical AI use cases",
      paragraphs: ["AI work should tie directly to a business process or product feature."],
      list: [
        "Internal knowledge assistants for employees",
        "Customer support assistants trained on your documentation",
        "Document search across large file repositories",
        "Automated report generation",
        "AI features inside an existing SaaS product",
      ],
    },
    includes: {
      heading: "What AI integration can include",
      paragraphs: ["Solutions are designed for reliability, not novelty."],
      list: [
        "Use-case discovery and feasibility assessment",
        "RAG pipelines and vector database setup",
        "OpenAI, Claude, or other LLM API integration",
        "Prompt design and workflow orchestration",
        "Security, access control, and data handling",
        "Monitoring and iteration after launch",
      ],
    },
    process: {
      heading: "How AI projects are scoped",
      paragraphs: ["We start with the workflow you want to improve, then choose the simplest architecture that works."],
      list: [
        "Define the job the AI needs to do",
        "Identify data sources and access requirements",
        "Build a focused prototype or feature",
        "Harden for production use",
      ],
    },
    faqs: [
      {
        question: "What is RAG and do I need it?",
        answer:
          "RAG (Retrieval-Augmented Generation) lets an AI answer questions using your company's documents and data. It is the right approach when answers must be grounded in internal knowledge rather than general model training.",
      },
      {
        question: "Can you add AI to an existing web application?",
        answer:
          "Yes. AI features can be added to existing SaaS products, internal tools, and customer portals as part of a broader development engagement.",
      },
      {
        question: "How do you handle data privacy?",
        answer:
          "Data handling depends on your requirements. Architecture decisions cover access control, data retention, and which models or services process your content.",
      },
    ],
    related: [
      { href: ROUTES.businessAutomation, label: "workflow automation development" },
      { href: ROUTES.webApplicationDevelopment, label: "web application development" },
      { href: ROUTES.saasDevelopment, label: "AI-enabled SaaS development" },
    ],
    cta: "Discuss AI Integration",
  },

  businessAutomation: {
    slug: "businessAutomation",
    path: ROUTES.businessAutomation,
    eyebrow: "Business automation",
    h1: "Business Automation Development",
    lead: "Replace manual processes with reliable software — API integrations, workflow automation, and connected systems.",
    intro: [
      "Many US small and mid-sized businesses lose hours every week copying data between spreadsheets, CRMs, and internal tools. Custom automation turns those manual steps into software that runs consistently.",
      "We build business automation for teams that need API integrations, CRM connections, automated reporting, data synchronization, and workflow automation tailored to how they actually operate.",
    ],
    whoFor: {
      heading: "Who benefits from automation",
      paragraphs: ["Automation is a strong fit when manual work scales poorly or creates errors."],
      list: [
        "Operations teams managing data across multiple tools",
        "Businesses outgrowing spreadsheet-based processes",
        "Companies needing CRM or ERP integrations",
        "Teams generating the same reports manually every week",
        "Agencies connecting client systems and internal workflows",
      ],
    },
    includes: {
      heading: "Automation projects can include",
      paragraphs: ["Scope ranges from a single integration to a full internal operations platform."],
      list: [
        "API integration between business systems",
        "CRM and marketing tool connections",
        "Scheduled reporting and data exports",
        "Webhook-based workflow automation",
        "Internal admin tools to manage automated processes",
        "Monitoring and error alerting",
      ],
    },
    process: {
      heading: "How automation work starts",
      paragraphs: ["The goal is to automate the highest-friction process first."],
      list: [
        "Map the current manual workflow",
        "Identify systems, data, and failure points",
        "Build and test the automated flow",
        "Deploy with documentation and handover",
      ],
    },
    faqs: [
      {
        question: "Can you integrate with tools we already use?",
        answer:
          "In most cases, yes. Common integrations include CRMs, payment platforms, email tools, databases, and custom APIs. Feasibility is confirmed during discovery.",
      },
      {
        question: "Is this the same as hiring a developer for a full product?",
        answer:
          "Not always. Some automation projects are focused integrations or internal tools. Others grow into full web platforms as needs expand.",
      },
      {
        question: "Do you work with US businesses remotely?",
        answer:
          "Yes. Automation projects are well suited to remote delivery with clear documentation and async updates.",
      },
    ],
    related: [
      { href: ROUTES.aiIntegration, label: "AI integration services" },
      { href: ROUTES.webApplicationDevelopment, label: "internal tools development" },
      { href: ROUTES.contact, label: "discuss automation project" },
    ],
    cta: "Automate a Manual Process",
  },
}

export function getServicePage(key: string): ServicePageData {
  const page = SERVICE_PAGES[key]
  if (!page) throw new Error(`Unknown service page: ${key}`)
  return page
}
