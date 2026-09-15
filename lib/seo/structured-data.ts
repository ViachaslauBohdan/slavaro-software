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
  const orgId = `${getSiteUrl()}/#organization`
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    name: site.name,
    url: getSiteUrl(),
    description:
      "Senior technical delivery partner for startups and businesses. MVP development, custom web applications, SaaS, product rescue, and AI integration.",
    inLanguage: "en",
    publisher: { "@id": orgId },
  }
}

export function organizationSchema() {
  const base = getSiteUrl()
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${base}/#organization`,
    name: site.name,
    legalName: site.legal.fullName,
    alternateName: ["Slavaro", "SLAVARO"],
    url: base,
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/opengraph-image"),
    email: site.email,
    telephone: site.phone,
    taxID: site.legal.nip,
    vatID: site.legal.nip,
    description:
      "Senior technical delivery partner providing MVP development, custom web application development, SaaS development, software project rescue, AI integration, and business automation for companies worldwide.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.legal.street,
      addressLocality: site.legal.city,
      postalCode: site.legal.postalCode,
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "PL",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    availableLanguage: ["en", "pl", "ru"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phone,
        availableLanguage: ["en", "pl", "ru"],
        areaServed: "Worldwide",
      },
    ],
    founder: personSchema(),
    knowsAbout: [
      "MVP Development",
      "Custom Web Application Development",
      "SaaS Development",
      "Software Project Rescue",
      "React Development",
      "Vue Development",
      "Angular Development",
      "AI Integration",
      "Business Process Automation",
      "TypeScript",
      "Node.js",
      "NestJS",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software development services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MVP Development",
            url: absoluteUrl("/mvp-development"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Application Development",
            url: absoluteUrl("/web-application-development"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Development",
            url: absoluteUrl("/saas-development"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Product Rescue",
            url: absoluteUrl("/product-rescue"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Integration",
            url: absoluteUrl("/ai-integration"),
          },
        },
      ],
    },
  }
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${getSiteUrl()}/#person`,
    name: site.person,
    jobTitle: site.role,
    email: site.email,
    telephone: site.phone,
    url: absoluteUrl("/about"),
    worksFor: { "@id": `${getSiteUrl()}/#organization` },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.legal.city,
      addressCountry: "PL",
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
    inLanguage: "en",
    primaryImageOfPage: absoluteUrl("/opengraph-image"),
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
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${getSiteUrl()}/#organization` },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: name,
    category: "Software Development",
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
