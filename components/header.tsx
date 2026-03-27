"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const services = [
  { name: "Software Development", href: "#services" },
  { name: "SaaS Development", href: "#services" },
  { name: "Web Development", href: "#services" },
  { name: "Mobile Development", href: "#services" },
  { name: "QA and Testing", href: "#services" },
]

const expertise = [
  { name: "Artificial Intelligence", href: "#ai" },
  { name: "Cloud Consulting", href: "#expertise" },
  { name: "Blockchain", href: "#expertise" },
  { name: "DevOps Services", href: "#expertise" },
  { name: "Big Data", href: "#expertise" },
]

const industries = [
  { name: "Fintech", href: "#industries" },
  { name: "Healthtech", href: "#industries" },
  { name: "Edtech", href: "#industries" },
  { name: "Ecommerce", href: "#industries" },
  { name: "Proptech", href: "#industries" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Volska</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {services.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Expertise <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {expertise.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Industries <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {industries.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="#case-studies" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Case Studies
          </Link>
          <Link href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="outline" size="sm">
            Contact Us
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book a Call
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="space-y-1 px-4 py-4">
            <div className="py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Services</p>
              {services.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Expertise</p>
              {expertise.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Industries</p>
              {industries.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline" className="w-full">Contact Us</Button>
              <Button className="w-full bg-primary text-primary-foreground">Book a Call</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
