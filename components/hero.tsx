"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, MessageSquare, TrendingUp, Bot } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const highlights = [
  { icon: Clock, text: "Landing pages delivered in 48 hours" },
  { icon: Zap, text: "AI automation to eliminate manual work" },
  { icon: MessageSquare, text: "Instant lead notifications via Telegram & email" },
  { icon: TrendingUp, text: "Convert visitors into real clients" },
  { icon: Bot, text: "Scalable processes instead of manual tasks" },
]

export function Hero() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollAnimation()
  const { ref: trustRef, isVisible: trustVisible } = useScrollAnimation()

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern office workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            ref={contentRef}
            className={`transition-all duration-700 ease-out ${
              contentVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <Badge 
              variant="secondary" 
              className={`mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-500 ${
                contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Landing Pages & AI Automation
            </Badge>
            
            <h1 
              className={`text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance transition-all duration-700 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <span className="text-primary">Landing pages</span> in 48 hours & <span className="text-primary">AI automation</span> that works
            </h1>
            
            <p 
              className={`mt-6 text-lg leading-8 text-muted-foreground max-w-xl text-pretty transition-all duration-700 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              High-conversion websites built to bring you real clients. AI automation to eliminate 
              repetitive work. Start receiving inquiries immediately.
            </p>

            <div 
              className={`mt-10 flex items-center gap-4 flex-wrap transition-all duration-700 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base shadow-lg hover:scale-105 transition-transform"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Book a free discovery call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-base bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform"
                onClick={(e) => scrollToSection(e, "#services")}
              >
                View our work
              </Button>
            </div>

            {/* Highlights */}
            <div className="mt-12 space-y-3">
              {highlights.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="p-1.5 rounded-full bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image tiles */}
          <div 
            ref={imagesRef}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div 
                className={`col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border transition-all duration-700 ${
                  imagesVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <Image
                  src="/images/landing-mockup.jpg"
                  alt="Professional landing page on computer screen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Smaller tiles */}
              <div 
                className={`relative h-48 rounded-xl overflow-hidden shadow-xl ring-1 ring-border transition-all duration-700 ${
                  imagesVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <Image
                  src="/images/team-working.jpg"
                  alt="Professional team collaborating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
              
              <div 
                className={`relative h-48 rounded-xl overflow-hidden shadow-xl ring-1 ring-border transition-all duration-700 ${
                  imagesVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <Image
                  src="/images/automation-dashboard.jpg"
                  alt="Automation dashboard on laptop"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <div 
              className={`absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg transition-all duration-700 ${
                imagesVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 -rotate-3"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">48h</p>
                  <p className="text-xs text-muted-foreground">Delivery time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div 
          ref={trustRef}
          className={`mt-20 pt-12 border-t border-border/50 transition-all duration-700 ${
            trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Trusted by businesses ready to grow
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Startups", "SMBs", "Agencies", "Consultants", "E-commerce", "Service Businesses"].map((client, index) => (
              <div
                key={client}
                className={`text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-all duration-500 cursor-default ${
                  trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
