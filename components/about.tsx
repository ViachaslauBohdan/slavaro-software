import Link from "next/link"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import {
  credibilityDomains,
  experienceHighlights,
  site,
  techStack,
} from "@/lib/site-content"
import { ROUTES } from "@/lib/seo/routes"

export function About() {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <FadeIn>
          <p className="eyebrow mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Senior team. One accountable delivery partner.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Senior technical delivery partner with 8+ years building
            production software for startups and established companies. We take projects from idea
            through launch: scope, architecture, development, and deployment.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            You work directly with us. No account managers, no junior developers passed off as
            seniors, no black-box agency process.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {site.market}.{" "}
            <Link href={ROUTES.about} className="text-link hover:underline underline-offset-4">
              Read more about the delivery partner
            </Link>
            .
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="space-y-6">
            <div className="surface-elevated p-6">
              <p className="text-sm font-medium mb-4">Experience across</p>
              <div className="flex flex-wrap gap-2">
                {credibilityDomains.map((domain) => (
                  <span
                    key={domain}
                    className="text-xs px-3 py-1.5 rounded-md border border-border text-muted-foreground bg-secondary"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-elevated p-6">
              <p className="text-sm font-medium mb-4">Selected delivery experience</p>
              <ul className="space-y-3">
                {experienceHighlights.map((item) => (
                  <li key={item.company} className="border-b border-border/80 pb-3 last:border-0 last:pb-0">
                    <p className="text-sm font-medium text-foreground">{item.company}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface p-6">
              <p className="text-xs text-muted-foreground mb-3">Technical background</p>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {techStack.map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
