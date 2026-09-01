import { site } from "@/lib/site-content"
import { absoluteUrl } from "@/lib/seo/routes"
import { getSiteUrl } from "@/lib/site-url"

export type BreadcrumbItem = { name: string; path: string }

export type FaqItem = { question: string; answer: string }

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    name: site.name,
    url: getSiteUrl(),
    description:
      "Senior technical delivery partner for US startups and businesses. MVP development, custom web applications, SaaS, product rescue, and AI integration.",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: getSiteUrl(),
    },
  }
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${getSiteUrl()}/#organization`,
    name: site.name,
    url: getSiteUrl(),
    email: site.email,
    telephone: site.phone,
    description:
      "Senior technical delivery partner providing MVP development, custom web application development, SaaS development, software project rescue, AI integration, and business automation for US companies.",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    availableLanguage: "en",
    founder: personSchema(),
    sameAs: [site.linkedin],
    knowsAbout: [
      "MVP Development",
      "Custom Web Application Development",
      "SaaS Development",
      "Software Project Rescue",
      "React Development",
      "Next.js Development",
      "AI Integration",
      "Business Process Automation",
    ],
  }
}

export function personSchema() {
  return {
    "@type": "Person",
    name: site.person,
    jobTitle: site.role,
    email: site.email,
    url: absoluteUrl("/about"),
    sameAs: [site.linkedin],
    worksFor: {
      "@type": "Organization",
      name: site.name,
    },
  }
}

export function webPageSchema({
  path,
  title,
  description,
}: {
  path: string
  title: string
  description: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { "@id": `${getSiteUrl()}/#website` },
    about: { "@id": `${getSiteUrl()}/#organization` },
    inLanguage: "en-US",
  }
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${getSiteUrl()}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: name,
  }
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
