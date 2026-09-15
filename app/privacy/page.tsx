import type { Metadata } from "next"
import Link from "next/link"
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo/metadata"
import { JsonLd } from "@/components/seo/json-ld"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/structured-data"
import { ROUTES } from "@/lib/seo/routes"
import { site } from "@/lib/site-content"

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.privacy)

export default function PrivacyPage() {
  const seo = PAGE_SEO.privacy
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: ROUTES.privacy },
  ]

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: ROUTES.privacy, title: seo.title, description: seo.description }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <Header />
      <main id="main-content">
        <Section className="pt-28 lg:pt-32">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl font-bold max-w-3xl text-balance">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: September 15, 2026</p>

          <div className="mt-10 max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">Controller</h2>
              <p>
                The controller of personal data is <strong className="text-foreground">{site.legal.fullName}</strong>{" "}
                ({site.legal.legalForm}), NIP {site.legal.nip}, REGON {site.legal.regon}, address:{" "}
                {site.legal.street}, {site.legal.postalCode} {site.legal.city}, {site.legal.country}.
              </p>
              <p className="mt-3">
                Contact:{" "}
                <a href={`mailto:${site.email}`} className="text-link hover:underline underline-offset-4">
                  {site.email}
                </a>
                , phone {site.phone}.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">What we collect</h2>
              <p>When you use the contact form or email us, we may process:</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>name and company name,</li>
                <li>email address and optional phone number,</li>
                <li>project details you submit,</li>
                <li>technical logs needed to operate and secure the website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">Why we process data</h2>
              <p>
                We process inquiry data to respond to your request, prepare a proposal, and — if we
                start cooperation — to perform a contract. Legal bases include steps prior to entering
                a contract and our legitimate interest in running a business website and answering
                leads (GDPR Art. 6(1)(b) and 6(1)(f)).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">Analytics & cookies</h2>
              <p>
                The site may use Vercel Analytics to understand aggregated traffic. Essential cookies
                or similar technologies may be used for security and basic site function. We do not
                sell personal data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">Retention</h2>
              <p>
                Contact inquiries are kept as long as needed to handle the conversation and related
                commercial follow-up, then deleted or anonymized unless a longer period is required by
                law or an active contract.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">Your rights</h2>
              <p>
                You may request access, rectification, deletion, restriction, or objection to
                processing, and data portability where applicable. You can also lodge a complaint with
                the Polish supervisory authority (UODO). To exercise rights, email{" "}
                <a href={`mailto:${site.email}`} className="text-link hover:underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
            </section>

            <p>
              Questions?{" "}
              <Link href={ROUTES.contact} className="text-link hover:underline underline-offset-4">
                Contact us
              </Link>
              .
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
