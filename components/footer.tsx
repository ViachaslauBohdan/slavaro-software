"use client"

import Link from "next/link"
import { Linkedin, Twitter, MessageSquare } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Telegram", icon: MessageSquare, href: "https://t.me/volskagroup" },
]

export function Footer() {
  const { t, language } = useLanguage()

  const footerLinks = {
    services: [
      { name: t.footer.services.landing, href: "#services" },
      { name: t.footer.services.leadSystem, href: "#services" },
      { name: t.footer.services.automation, href: "#services" },
      { name: t.footer.services.support, href: "#pricing" },
    ],
    company: [
      { name: t.footer.company.pricing, href: "#pricing" },
      { name: t.footer.company.faq, href: "#faq" },
      { name: t.footer.company.contact, href: "#contact" },
    ],
    legal: [
      { name: t.footer.legal.privacy, href: "#" },
      { name: t.footer.legal.terms, href: "#" },
    ],
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/">
              <span className="text-2xl font-bold">Volska Group</span>
            </Link>
            <p className="mt-4 text-sm text-background/70 max-w-xs">
              {t.footer.description}
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-background/70 hover:text-background transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t.footer.services.title}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t.footer.company.title}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              &copy; {new Date().getFullYear()} Volska Group. {t.footer.copyright}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
