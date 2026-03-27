import Link from "next/link"
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Software Development", href: "#" },
    { name: "SaaS Development", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Mobile Development", href: "#" },
    { name: "QA and Testing", href: "#" },
    { name: "DevOps Services", href: "#" },
  ],
  expertise: [
    { name: "Artificial Intelligence", href: "#" },
    { name: "Cloud Consulting", href: "#" },
    { name: "Blockchain", href: "#" },
    { name: "Big Data", href: "#" },
    { name: "Data Engineering", href: "#" },
    { name: "AR/VR Development", href: "#" },
  ],
  industries: [
    { name: "Fintech", href: "#" },
    { name: "Healthtech", href: "#" },
    { name: "Edtech", href: "#" },
    { name: "Ecommerce", href: "#" },
    { name: "Proptech", href: "#" },
    { name: "Automotive", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">V</span>
              </div>
              <span className="text-2xl font-bold">Volska</span>
            </Link>
            <p className="mt-4 text-sm text-background/70 max-w-xs">
              AI-enabled software development company delivering end-to-end solutions 
              for businesses across the USA and Europe.
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
            <h3 className="text-sm font-semibold mb-4">Services</h3>
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

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Expertise</h3>
            <ul className="space-y-3">
              {footerLinks.expertise.map((link) => (
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

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
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
            <h3 className="text-sm font-semibold mb-4">Company</h3>
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
              &copy; {new Date().getFullYear()} Volska. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
