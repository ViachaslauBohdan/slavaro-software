import type { Metadata } from "next"
import { site } from "@/lib/site-content"
import { absoluteUrl } from "@/lib/seo/routes"
import { isProductionDeployment } from "@/lib/site-url"

export type PageSeo = {
  path: string
  title: string
  description: string
  keywords?: string[]
  ogTitle?: string
}

function socialImages(title: string) {
  const url = absoluteUrl("/opengraph-image")
  return [
    {
      url,
      width: 1200,
      height: 630,
      alt: title,
    },
  ]
}

export function buildPageMetadata(page: PageSeo): Metadata {
  const indexable = isProductionDeployment()
  const url = absoluteUrl(page.path)
  const ogTitle = page.ogTitle ?? page.title
  const images = socialImages(ogTitle)

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    authors: [{ name: site.person }],
    creator: site.person,
    publisher: site.name,
    category: "technology",
    alternates: {
      canonical: url,
    },
    robots: indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: site.name,
      title: ogTitle,
      description: page.description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: page.description,
      images: [absoluteUrl("/opengraph-image")],
    },
  }
}

export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    path: "/",
    title: "MVP & Web App Development | SLAVARO SOFTWARE",
    description:
      "Senior technical partner for founders and SMBs. MVP development, SaaS, web apps, product rescue, and AI — from scope to production launch.",
    keywords: [
      "MVP development",
      "custom web application development",
      "SaaS development",
      "startup software development",
      "software development partner",
      "technical delivery partner",
      "product rescue",
      "AI integration services",
    ],
  },
  mvpDevelopment: {
    path: "/mvp-development",
    title: "MVP Development Services | SLAVARO SOFTWARE",
    description:
      "Build and launch a production-ready MVP fast. Scope, architecture, auth, payments, and deployment — without hiring a full engineering team.",
    keywords: [
      "MVP development services",
      "startup MVP development",
      "SaaS MVP development",
      "rapid MVP development",
      "build an MVP",
      "hire MVP developers",
    ],
  },
  webApplicationDevelopment: {
    path: "/web-application-development",
    title: "Custom Web Application Development | SLAVARO SOFTWARE",
    description:
      "Custom web apps for business: portals, internal tools, marketplaces, booking systems, and admin panels — built for production from day one.",
    keywords: [
      "custom web application development",
      "web application development services",
      "web platform development",
      "custom web app development",
      "business web application",
    ],
  },
  saasDevelopment: {
    path: "/saas-development",
    title: "SaaS Development Services | SLAVARO SOFTWARE",
    description:
      "SaaS development for founders: multi-tenant architecture, subscriptions, onboarding, and scalable backends from MVP through launch.",
    keywords: [
      "SaaS development services",
      "SaaS application development",
      "SaaS development partner",
      "SaaS MVP development",
      "build a SaaS product",
    ],
  },
  startupSoftwareDevelopment: {
    path: "/startup-software-development",
    title: "Software Development for Startups | SLAVARO SOFTWARE",
    description:
      "Startup software development partner. Architecture, frontend, backend, and launch — ship your product without hiring a full team first.",
    keywords: [
      "software development for startups",
      "startup software development",
      "startup development partner",
      "technical partner for startup",
      "startup engineering partner",
    ],
  },
  productRescue: {
    path: "/product-rescue",
    title: "MVP & Software Project Rescue | SLAVARO SOFTWARE",
    description:
      "Finish unfinished MVPs and web apps. Take over codebases, fix launch blockers, productionize AI prototypes — without an unnecessary rebuild.",
    keywords: [
      "MVP rescue",
      "finish my MVP",
      "software project rescue",
      "unfinished software project",
      "productionize prototype",
      "take over existing codebase",
    ],
  },
  reactDevelopment: {
    path: "/react-development",
    title: "React, Vue & Angular Development | SLAVARO SOFTWARE",
    description:
      "React, Vue, and Angular development for SaaS and product teams. Modern frontends, design systems, and performance built to scale.",
    keywords: [
      "React development services",
      "Vue development services",
      "Angular development services",
      "React developer",
      "Vue developer",
      "Angular developer",
      "frontend development services",
    ],
  },
  aiIntegration: {
    path: "/ai-integration",
    title: "AI Integration Services | SLAVARO SOFTWARE",
    description:
      "Practical AI for business: custom assistants, RAG document search, LLM workflows, and knowledge tools that reduce manual work.",
    keywords: [
      "AI integration services",
      "custom AI assistant development",
      "RAG development services",
      "LLM integration services",
      "business AI automation",
    ],
  },
  businessAutomation: {
    path: "/business-automation",
    title: "Business Automation Services | SLAVARO SOFTWARE",
    description:
      "Business automation and API integrations: CRM connections, workflows, and reporting that replace spreadsheet processes with reliable software.",
    keywords: [
      "business automation development",
      "workflow automation development",
      "API integration services",
      "custom business automation",
      "CRM integration development",
    ],
  },
  about: {
    path: "/about",
    title: "About | Senior Delivery Partner | SLAVARO SOFTWARE",
    description:
      "10+ years shipping production software for SaaS, fintech, IoT, and enterprise. Direct, accountable technical delivery worldwide.",
    keywords: [
      "technical delivery partner",
      "senior software engineer for hire",
      "software development company Poland",
    ],
  },
  contact: {
    path: "/contact",
    title: "Contact | Discuss Your Project | SLAVARO SOFTWARE",
    description:
      "Tell us what you're building, fixing, or automating. MVP, web platforms, rescue, and AI for startups and businesses. Reply within 24 hours.",
    keywords: [
      "contact software development partner",
      "hire MVP developer",
      "book software discovery call",
    ],
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | SLAVARO SOFTWARE",
    description:
      "How SLAVARO SOFTWARE collects and uses contact form data, cookies, and analytics when you use our website.",
    keywords: ["privacy policy", "GDPR contact form"],
  },
  examples: {
    path: "/examples",
    title: "Landing Page Examples by Industry | SLAVARO SOFTWARE",
    description:
      "Sixteen sample landing pages by industry — logistics, pharma, beauty, legal, travel, finance, healthcare, and more.",
    keywords: [
      "landing page examples",
      "logistics company landing page",
      "beauty salon website sample",
      "law firm landing page",
      "restaurant website sample",
      "real estate landing page",
    ],
  },
}
