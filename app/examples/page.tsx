import type { Metadata } from "next"
import Link from "next/link"
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo/metadata"
import { JsonLd } from "@/components/seo/json-ld"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { ExamplesGallery } from "@/components/demo-landing/examples-gallery"
import {
  getIndustryDemoLandings,
  getServiceDemoLandings,
} from "@/lib/demo-landings"
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/structured-data"
import { ROUTES } from "@/lib/seo/routes"

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.examples)

export default function ExamplesPage() {
  const seo = PAGE_SEO.examples
  const industryDemos = getIndustryDemoLandings()
  const serviceDemos = getServiceDemoLandings()
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Examples", path: ROUTES.examples },
  ]

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: ROUTES.examples, title: seo.title, description: seo.description }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <Header />
      <main id="main-content">
        <div className="relative overflow-hidden hero-bg">
          <div className="pointer-events-none absolute inset-0 grid-line opacity-40" />
          <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <Section className="relative pt-28 lg:pt-32 pb-8 lg:pb-12">
            <Breadcrumbs items={breadcrumbs} />
            <FadeIn>
              <p className="eyebrow mb-4">Showcase</p>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Sample landings by industry
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Sixteen industry-specific landings — logistics, pharma, beauty, legal, travel,
                finance, and more. Send the one that matches your prospect&apos;s world.
              </p>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  { value: "16", label: "Industries" },
                  { value: "6", label: "Service types" },
                  { value: "48h", label: "Typical delivery" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-card/60 px-5 py-3 backdrop-blur-sm"
                  >
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </Section>
        </div>

        <Section className="pt-8 lg:pt-12">
          <ExamplesGallery
            demos={industryDemos}
            title="By industry"
            description="Show prospects a landing that looks like it belongs in their world — not a generic SaaS template."
            badge="Industry"
          />

          <div className="mt-24 border-t border-border pt-20">
            <ExamplesGallery
              demos={serviceDemos}
              title="By project type"
              description="These map to common software projects — MVP, platform, rescue, automation, AI. Kept for reference."
              featured={false}
            />
          </div>

          <FadeIn delay={400}>
            <div className="relative mt-20 overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative max-w-2xl">
                <h2 className="text-2xl font-bold sm:text-3xl">Use these in outreach</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Send the industry demo that matches your prospect — a logistics firm gets
                  NordFreight, a salon gets Lumière. Each page shows it&apos;s a sample built by
                  SLAVARO SOFTWARE, with a direct path to contact.
                </p>
                <Link
                  href={ROUTES.contact}
                  className="mt-8 inline-flex items-center justify-center rounded-md px-7 py-3.5 text-sm font-medium btn-primary"
                >
                  Build a landing like this
                </Link>
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
