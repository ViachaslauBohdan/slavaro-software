import type { Metadata } from "next"
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo/metadata"
import { JsonLd } from "@/components/seo/json-ld"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/structured-data"
import { ROUTES } from "@/lib/seo/routes"

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.contact)

export default function ContactPage() {
  const seo = PAGE_SEO.contact
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: ROUTES.contact },
  ]

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: ROUTES.contact, title: seo.title, description: seo.description }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <Header />
      <main id="main-content">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-28 lg:pt-32">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <ContactForm variant="page" />
      </main>
      <Footer />
    </>
  )
}
