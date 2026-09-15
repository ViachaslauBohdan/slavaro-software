import Link from "next/link"
import { Section } from "@/components/section"
import { homeInternalLinks } from "@/lib/seo/navigation"

export function HomeServicesNav() {
  return (
    <Section id="services" className="section-alt border-t border-border">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-balance">
          Software development services for startups and businesses
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Explore dedicated pages for each type of engagement — MVP development, custom web
          applications, SaaS builds, product rescue, AI integration, and business automation.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {homeInternalLinks.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
              {group.title}
            </h3>
            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-link hover:underline underline-offset-4 leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
