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

export function buildPageMetadata(page: PageSeo): Metadata {
  const indexable = isProductionDeployment()
  const url = absoluteUrl(page.path)

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    authors: [{ name: site.person }],
    creator: site.person,
    publisher: site.name,
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
          },
        }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: site.name,
      title: page.ogTitle ?? page.title,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle ?? page.title,
      description: page.description,
    },
  }
}

export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    path: "/",
    title: "MVP & Custom Web Application Development | SLAVARO SOFTWARE",
    description:
      "Senior technical delivery partner for founders and SMBs. MVP development, custom web applications, SaaS builds, product rescue, AI integration, and business automation — from scope to production launch.",
    keywords: [
      "MVP development",
      "custom web application development",
      "SaaS development",
      "startup software development",
      "software development partner",
      "technical delivery partner",
    ],
  },
  mvpDevelopment: {
    path: "/mvp-development",
    title: "MVP Development Services for Startups | SLAVARO SOFTWARE",
    description:
      "Rapid MVP development for startups and SaaS founders. Scope, build, and launch a production-ready MVP — proof of concept, authentication, payments, and deployment included.",
    keywords: [
      "MVP development services",
      "startup MVP development",
      "SaaS MVP development",
      "rapid MVP development",
      "build an MVP",
    ],
  },
  webApplicationDevelopment: {
    path: "/web-application-development",
    title: "Custom Web Application Development Services | SLAVARO SOFTWARE",
    description:
      "Custom web application development for businesses. Customer portals, internal tools, marketplaces, booking systems, and admin panels — built for production from day one.",
    keywords: [
      "custom web application development",
      "web application development services",
      "web platform development",
      "custom web app development",
    ],
  },
  saasDevelopment: {
    path: "/saas-development",
    title: "SaaS Development Services for Startups | SLAVARO SOFTWARE",
    description:
      "SaaS application development for founders. Multi-tenant architecture, subscriptions, onboarding, and scalable backends — one senior delivery team from MVP through launch.",
    keywords: [
      "SaaS development services",
      "SaaS application development",
      "SaaS development partner",
      "SaaS MVP development",
    ],
  },
  startupSoftwareDevelopment: {
    path: "/startup-software-development",
    title: "Software Development for Startups | SLAVARO SOFTWARE",
    description:
      "Software development partner for startups. Ship your product without hiring a full team — architecture, frontend, backend, and launch handled by our senior team.",
    keywords: [
      "software development for startups",
      "startup software development",
      "startup development partner",
      "technical partner for startup",
    ],
  },
  productRescue: {
    path: "/product-rescue",
    title: "MVP & Software Project Rescue Services | SLAVARO SOFTWARE",
    description:
      "Finish an unfinished MVP or web application. Take over existing codebases, fix bugs blocking launch, productionize AI prototypes, and ship — without an unnecessary rebuild.",
    keywords: [
      "MVP rescue",
      "finish my MVP",
      "software project rescue",
      "unfinished software project",
      "productionize prototype",
    ],
  },
  reactDevelopment: {
    path: "/react-development",
    title: "React, Vue & Angular Development | SLAVARO SOFTWARE",
    description:
      "React, Vue, and Angular development for SaaS and product teams. Modern frontends, server-side rendering, design systems, and performance — built for maintainability and scale.",
    keywords: [
      "React development services",
      "Vue development services",
      "Angular development services",
      "React developer",
      "Vue developer",
      "Angular developer",
    ],
  },
  aiIntegration: {
    path: "/ai-integration",
    title: "AI Integration & Custom AI Assistant Development | SLAVARO SOFTWARE",
    description:
      "Practical AI integration for businesses. Custom AI assistants, RAG document search, LLM workflows, and knowledge-base tools that reduce manual work — not demo projects.",
    keywords: [
      "AI integration services",
      "custom AI assistant development",
      "RAG development services",
      "LLM integration services",
    ],
  },
  businessAutomation: {
    path: "/business-automation",
    title: "Business Automation & API Integration Services | SLAVARO SOFTWARE",
    description:
      "Business automation development for companies. API integrations, CRM connections, workflow automation, and reporting — replace spreadsheet processes with reliable software.",
    keywords: [
      "business automation development",
      "workflow automation development",
      "API integration services",
      "custom business automation",
    ],
  },
  about: {
    path: "/about",
    title: "About SLAVARO SOFTWARE — Senior Technical Delivery Partner | SLAVARO SOFTWARE",
    description:
      "10+ years building production software for SaaS, fintech, IoT, and enterprise teams. Senior technical delivery partner serving founders and businesses worldwide — direct, accountable, end-to-end.",
  },
  contact: {
    path: "/contact",
    title: "Discuss Your Software Project | SLAVARO SOFTWARE",
    description:
      "Tell us what you're building, fixing, or automating. MVP development, web platforms, product rescue, and AI integration for startups and businesses. Response within 24 hours.",
  },
}
