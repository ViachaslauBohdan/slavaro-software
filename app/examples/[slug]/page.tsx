import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { DemoLandingPage } from "@/components/demo-landing/demo-landing-page"
import { getAllDemoSlugs, getDemoLanding } from "@/lib/demo-landings"
import { ROUTES, absoluteUrl } from "@/lib/seo/routes"

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllDemoSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const demo = getDemoLanding(slug)
  if (!demo) return {}

  const title =
    demo.category === "industry"
      ? `${demo.brand} — Sample ${demo.clientLabel} Landing | SLAVARO SOFTWARE`
      : `${demo.brand} — Sample ${demo.clientLabel} Landing | SLAVARO SOFTWARE`

  return {
    title,
    description: demo.subheadline,
    robots: { index: false, follow: true },
    alternates: {
      canonical: absoluteUrl(`${ROUTES.examples}/${slug}`),
    },
    openGraph: {
      title,
      description: demo.subheadline,
    },
  }
}

export default async function ExampleDemoPage({ params }: PageProps) {
  const { slug } = await params
  const demo = getDemoLanding(slug)

  if (!demo) notFound()

  return <DemoLandingPage demo={demo} />
}
