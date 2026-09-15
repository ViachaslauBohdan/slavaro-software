import Link from "next/link"
import { site } from "@/lib/site-content"
import { footerCompanyLinks, footerServiceLinks } from "@/lib/seo/navigation"

export function Footer() {
  const { legal } = site

  return (
    <footer className="border-t border-border py-12 section-alt">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-lg font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{site.tagline}</p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Senior technical delivery partner for founders and businesses worldwide.
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

        <div className="mt-10 pt-6 border-t border-border space-y-4 text-sm text-subtle-foreground">
          <div className="grid sm:grid-cols-2 gap-4 leading-relaxed">
            <div>
              <p className="font-medium text-foreground">{site.name}</p>
              <p className="mt-1">{legal.fullName}</p>
              <p className="mt-1">{legal.legalForm}</p>
              <p className="mt-1">
                {legal.street}, {legal.postalCode} {legal.city}, {legal.country}
              </p>
            </div>
            <div>
              <p>NIP: {legal.nip}</p>
              <p className="mt-1">REGON: {legal.regon}</p>
              <p className="mt-1">
                <a href={`mailto:${site.email}`} className="block hover:text-foreground transition-colors">
                  {site.email}
                </a>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block hover:text-foreground transition-colors">
                  {site.phone}
                </a>
              </p>
            </div>
          </div>

          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
