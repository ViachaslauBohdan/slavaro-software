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
    <Section
      id="about"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <p className="eyebrow mb-3">About</p>
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">
            Senior team. One accountable delivery partner.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Senior technical delivery partner with 10+ years building production software for
            startups and established companies. We take projects from idea through launch: scope,
            architecture, development, and deployment.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            You work directly with us. No account managers, no junior developers passed off as
            seniors, no black-box agency process.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {site.market}.{" "}
            <Link href={ROUTES.about} className="text-link underline-offset-4 hover:underline">
              Read more about the delivery partner
            </Link>
            .
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="space-y-6">
            <div className="surface-glass p-6">
              <p className="mb-4 text-sm font-medium">Experience across</p>
              <div className="flex flex-wrap gap-2">
                {credibilityDomains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-md border border-border bg-secondary/70 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-glass p-6">
              <p className="mb-4 text-sm font-medium">Selected delivery experience</p>
              <ul className="space-y-3">
                {experienceHighlights.map((item) => (
                  <li
                    key={item.company}
                    className="border-b border-border/70 pb-3 last:border-0 last:pb-0"
                  >
                    <p className="text-sm font-medium text-foreground">{item.company}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-glass p-6">
              <p className="mb-3 text-xs text-muted-foreground">Technical background</p>
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
