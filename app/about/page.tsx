import type { Metadata } from "next"
import Link from "next/link"
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo/metadata"
import { JsonLd } from "@/components/seo/json-ld"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import {
  credibilityDomains,
  experienceHighlights,
  processSteps,
  site,
  techStack,
} from "@/lib/site-content"
import { ROUTES } from "@/lib/seo/routes"
import {
  breadcrumbSchema,
  personSchema,
  webPageSchema,
} from "@/lib/seo/structured-data"

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.about)

export default function AboutPage() {
  const seo = PAGE_SEO.about
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: ROUTES.about },
  ]

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: ROUTES.about, title: seo.title, description: seo.description }),
          breadcrumbSchema(breadcrumbs),
          personSchema(),
        ]}
      />
      <Header />
      <main>
        <Section className="pt-28 lg:pt-32">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl text-balance">
            About {site.name}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Senior technical delivery partner with 8+ years of commercial software engineering
            experience — serving US founders and businesses that need a product shipped, not another
            layer of agency overhead.
          </p>

          <div className="mt-12 max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We help US startups and small businesses turn ideas and operational problems into
              production software. That includes MVP development, custom web applications, SaaS
              products, software project rescue, AI integration, and business automation.
            </p>
            <p>
              You work directly with us from scope through launch: architecture, frontend, backend,
              deployment, and handover. Our team has delivered production systems across SaaS, fintech,
              IoT, travel, enterprise software, and AI-enabled platforms — including compliance
              tooling and AI reporting automation at Klarna, digital twin web applications at SEKAI,
              and an MVP built end-to-end for Tenerifly.
            </p>
            <p>
              We are based in Warsaw, Poland, and work remotely with US companies on B2B engagements.
              {site.market}
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-4xl">
            <div className="surface-elevated p-6">
              <h2 className="text-lg font-semibold mb-4">Industries & product types</h2>
              <ul className="flex flex-wrap gap-2">
                {credibilityDomains.map((domain) => (
                  <li key={domain}>
                    <span className="text-xs px-3 py-1.5 rounded-full border border-border text-secondary-foreground">
                      {domain}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-elevated p-6">
              <h2 className="text-lg font-semibold mb-4">Selected experience</h2>
              <ul className="space-y-3">
                {experienceHighlights.map((item) => (
                  <li key={item.company} className="text-sm">
                    <span className="font-medium text-foreground">{item.company}</span>
                    <span className="text-muted-foreground"> — {item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">How we work with clients</h2>
            <ol className="space-y-4">
              {processSteps.map((step) => (
                <li key={step.step} className="flex gap-4">
                  <span className="text-xs font-mono text-muted-foreground mt-1">{step.step}</span>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 max-w-3xl">
            <h2 className="text-lg font-semibold mb-3">Technical background</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {techStack.join(" · ")}
            </p>
          </div>

          <div className="mt-12 text-sm">
            <a href={`mailto:${site.email}`} className="text-foreground hover:underline underline-offset-4">
              {site.email}
            </a>
          </div>

          <div className="mt-16 surface-elevated p-8 max-w-3xl">
            <h2 className="text-xl font-bold">Discuss a project</h2>
            <p className="mt-2 text-muted-foreground">
              Tell us what you are building, fixing, or automating.
            </p>
            <Link
              href={ROUTES.contact}
              className="inline-flex mt-5 items-center justify-center rounded-md px-7 py-3 text-sm font-medium btn-primary"
            >
              Contact
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
