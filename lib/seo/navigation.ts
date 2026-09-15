import { ROUTES } from "@/lib/seo/routes"

export const serviceNavLinks = [
  { name: "MVP Development", href: ROUTES.mvpDevelopment },
  { name: "Web Applications", href: ROUTES.webApplicationDevelopment },
  { name: "SaaS Development", href: ROUTES.saasDevelopment },
  { name: "Startup Software", href: ROUTES.startupSoftwareDevelopment },
  { name: "Product Rescue", href: ROUTES.productRescue },
  { name: "React, Vue & Angular", href: ROUTES.reactDevelopment },
  { name: "AI Integration", href: ROUTES.aiIntegration },
  { name: "Automation", href: ROUTES.businessAutomation },
] as const

export const primaryNavLinks = [
  { name: "Services", href: ROUTES.mvpDevelopment, children: serviceNavLinks },
  { name: "About", href: ROUTES.about },
  { name: "Contact", href: ROUTES.contact },
] as const

export const footerServiceLinks = serviceNavLinks

export const footerCompanyLinks = [
  { name: "About", href: ROUTES.about },
  { name: "Contact", href: ROUTES.contact },
  { name: "Privacy Policy", href: ROUTES.privacy },
  { name: "How it works", href: "/#process" },
] as const

export const homeInternalLinks = [
  {
    title: "Build",
    links: [
      { href: ROUTES.mvpDevelopment, label: "MVP development services" },
      { href: ROUTES.saasDevelopment, label: "SaaS development" },
      { href: ROUTES.startupSoftwareDevelopment, label: "software development for startups" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { href: ROUTES.webApplicationDevelopment, label: "custom web application development" },
      { href: ROUTES.reactDevelopment, label: "React, Vue & Angular development" },
    ],
  },
  {
    title: "Fix & automate",
    links: [
      { href: ROUTES.productRescue, label: "MVP & software project rescue" },
      { href: ROUTES.aiIntegration, label: "AI integration services" },
      { href: ROUTES.businessAutomation, label: "business automation development" },
    ],
  },
] as const
