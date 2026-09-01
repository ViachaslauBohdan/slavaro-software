import Link from "next/link"
import { site } from "@/lib/site-content"
import { footerCompanyLinks, footerServiceLinks } from "@/lib/seo/navigation"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 section-alt">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-lg font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{site.tagline}</p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              {site.person} — senior technical delivery partner for US founders and businesses.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-subtle-foreground">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-foreground transition-colors">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
