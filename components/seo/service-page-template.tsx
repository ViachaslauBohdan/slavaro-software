import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { JsonLd } from "@/components/seo/json-ld"
import { Section } from "@/components/section"
import { getServicePage, type ServicePageData, type ServiceSection } from "@/lib/seo/service-pages"
import { PAGE_SEO } from "@/lib/seo/metadata"
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo/structured-data"

function ServiceSectionBlock({ section }: { section: ServiceSection }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
      {section.paragraphs.map((p) => (
        <p key={p} className="text-muted-foreground leading-relaxed mb-3">
          {p}
        </p>
      ))}
      {section.list && (
        <ul className="mt-4 space-y-2">
          {section.list.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-accent mt-1">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function ServicePageTemplate({ pageKey }: { pageKey: string }) {
  const page = getServicePage(pageKey)
  const seo = PAGE_SEO[pageKey]
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: page.eyebrow, path: page.path },
  ]

  const schema = [
    webPageSchema({ path: page.path, title: seo.title, description: seo.description }),
    breadcrumbSchema(breadcrumbs),
    serviceSchema({ name: page.h1, description: page.lead, path: page.path }),
    faqPageSchema(page.faqs),
  ]

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <Section className="pt-28 lg:pt-32">
          <article>
            <Breadcrumbs items={breadcrumbs} />
            <header className="max-w-3xl">
              <p className="eyebrow mb-3">{page.eyebrow}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">{page.h1}</h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{page.lead}</p>
            </header>

            <div className="mt-12 max-w-3xl space-y-4">
              {page.intro.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-16 grid gap-14 max-w-3xl">
              <ServiceSectionBlock section={page.whoFor} />
              <ServiceSectionBlock section={page.includes} />
              <ServiceSectionBlock section={page.process} />
              {page.technologies && <ServiceSectionBlock section={page.technologies} />}
            </div>

            <div className="mt-20 max-w-3xl">
              <h2 className="text-2xl font-bold mb-8">Frequently asked questions</h2>
              <div className="space-y-8">
                {page.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 max-w-3xl">
              <h2 className="text-sm font-medium text-muted-foreground mb-4">Related services</h2>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {page.related.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-link hover:underline underline-offset-4">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16 surface-elevated p-8 lg:p-10 max-w-3xl">
              <h2 className="text-2xl font-bold">Ready to start?</h2>
              <p className="mt-3 text-muted-foreground">
                Send a short description of your project and we&apos;ll explain how we&apos;d approach it.
              </p>
              <Link href="/contact" className="inline-flex mt-6 items-center justify-center rounded-md px-7 py-3 text-sm font-medium btn-primary">
                {page.cta}
              </Link>
            </div>
          </article>
        </Section>
      </main>
      <Footer />
    </>
  )
}
