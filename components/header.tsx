"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { site } from "@/lib/site-content"
import { primaryNavLinks, serviceNavLinks } from "@/lib/seo/navigation"
import { scrollToId } from "@/lib/scroll"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleHashLink = (href: string) => {
    const id = href.replace("#", "")
    if (pathname === "/") {
      scrollToId(id)
    } else {
      window.location.href = `/${href}`
    }
    setMobileOpen(false)
    setServicesOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="group">
          <span className="text-lg font-semibold tracking-tight text-foreground">{site.name}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="surface-elevated p-2">
                  {serviceNavLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {primaryNavLinks
            .filter((item) => item.name !== "Services")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
        </div>

        <div className="hidden lg:block">
          <Button size="sm" className="rounded-md px-5" asChild>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-5 py-4 space-y-1">
          <p className="py-2 text-xs font-semibold uppercase tracking-wide text-subtle-foreground">
            Services
          </p>
          {serviceNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-t border-border my-2 pt-2">
            <Link
              href="/about"
              className="block py-3 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <button
              type="button"
              className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => handleHashLink("#process")}
            >
              How it works
            </button>
          </div>
          <Button className="w-full mt-3 rounded-md" asChild>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Discuss Your Project
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}
