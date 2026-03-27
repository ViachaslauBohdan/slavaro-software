"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { 
  CheckCircle, 
  Globe,
  Bot,
  Clock,
  Smartphone,
  Zap,
  MessageSquare,
  TrendingUp,
  FileText,
  Mail,
  TableProperties,
  Settings,
  ArrowRight
} from "lucide-react"

const landingPageFeatures = [
  {
    icon: Globe,
    title: "Modern, professional website",
    description: "A website that builds trust and credibility with your visitors from the first second."
  },
  {
    icon: TrendingUp,
    title: "Clear conversion-focused structure",
    description: "Designed specifically to turn visitors into inquiries and leads."
  },
  {
    icon: Smartphone,
    title: "Fully responsive design",
    description: "Looks perfect on mobile, tablet, and desktop devices."
  },
  {
    icon: Zap,
    title: "Fast loading & clean UX",
    description: "Optimized for speed and a seamless user experience."
  },
  {
    icon: MessageSquare,
    title: "Lead generation included",
    description: "Simple contact form with name, phone, and request fields."
  },
  {
    icon: Clock,
    title: "Instant notifications",
    description: "Get notified via Telegram and email the moment someone reaches out."
  }
]

const automationFeatures = [
  {
    icon: TableProperties,
    title: "Excel & Google Sheets",
    description: "Automate workflows, reporting, and data processing."
  },
  {
    icon: MessageSquare,
    title: "Lead handling",
    description: "Forms to notifications to simple CRM logic, all automated."
  },
  {
    icon: Mail,
    title: "Email processing",
    description: "Auto-responses, sorting, and smart email workflows."
  },
  {
    icon: FileText,
    title: "Document generation",
    description: "PDFs, summaries, offers - generated automatically."
  },
  {
    icon: Settings,
    title: "System integrations",
    description: "Connect your tools and systems seamlessly."
  },
  {
    icon: Bot,
    title: "Custom automation",
    description: "Any repetitive task can be automated to save time."
  }
]

const landingPageBenefits = [
  "Start receiving client inquiries immediately",
  "Improve your online presence",
  "Convert visitors into real business opportunities"
]

const automationBenefits = [
  "Save hours every week",
  "Reduce operational costs",
  "Build scalable processes instead of manual tasks"
]

export function Services() {
  const { ref: landingRef, isVisible: landingVisible } = useScrollAnimation()
  const { ref: landingImageRef, isVisible: landingImageVisible } = useScrollAnimation()
  const { ref: landingFeaturesRef, isVisible: landingFeaturesVisible } = useScrollAnimation()
  const { ref: autoRef, isVisible: autoVisible } = useScrollAnimation()
  const { ref: autoImageRef, isVisible: autoImageVisible } = useScrollAnimation()
  const { ref: autoFeaturesRef, isVisible: autoFeaturesVisible } = useScrollAnimation()

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
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Landing Pages Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={landingRef}
              className={`transition-all duration-700 ${
                landingVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div 
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 transition-all duration-500 ${
                  landingVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <Globe className="h-4 w-4" />
                Landing Pages
              </div>
              <h2 
                className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 transition-all duration-700 ${
                  landingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                High-conversion websites built in 48 hours
              </h2>
              <p 
                className={`text-lg text-muted-foreground mb-8 transition-all duration-700 ${
                  landingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Designed to bring you real clients. A modern, professional website that builds trust 
                and turns visitors into leads.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 
                  className={`font-semibold text-foreground transition-all duration-500 ${
                    landingVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: "250ms" }}
                >
                  Business impact:
                </h3>
                {landingPageBenefits.map((benefit, idx) => (
                  <div 
                    key={benefit} 
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      landingVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${300 + idx * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-500 ${
                  landingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "600ms" }}
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Get your landing page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Landing page image with feature cards overlay */}
            <div ref={landingImageRef} className="relative">
              <div 
                className={`relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
                  landingImageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <Image
                  src="/images/landing-mockup.jpg"
                  alt="Professional landing page on computer screen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating feature cards */}
              <div 
                className={`absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl max-w-[200px] transition-all duration-700 ${
                  landingImageVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-4 translate-y-4"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Smartphone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Responsive</span>
                </div>
                <p className="text-xs text-muted-foreground">Perfect on all devices</p>
              </div>

              <div 
                className={`absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-xl transition-all duration-700 ${
                  landingImageVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-4 -translate-y-4"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-xl font-bold text-foreground">48h</span>
                </div>
                <p className="text-xs text-muted-foreground">Delivery</p>
              </div>
            </div>
          </div>

          {/* Feature grid */}
          <div ref={landingFeaturesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {landingPageFeatures.map((feature, idx) => (
              <Card 
                key={feature.title} 
                className={`h-full hover:shadow-lg transition-all duration-500 border-border/50 hover:-translate-y-1 ${
                  landingFeaturesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-5">
                  <div 
                    className={`p-2 rounded-lg bg-primary/10 w-fit mb-3 transition-all duration-500 ${
                      landingFeaturesVisible ? "scale-100" : "scale-0"
                    }`}
                    style={{ transitionDelay: `${idx * 100 + 200}ms` }}
                  >
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Automation Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Automation image */}
            <div ref={autoImageRef} className="relative order-2 lg:order-1">
              <div 
                className={`relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
                  autoImageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <Image
                  src="/images/automation-dashboard.jpg"
                  alt="AI automation dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating stats */}
              <div 
                className={`absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-xl transition-all duration-700 ${
                  autoImageVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-4 translate-y-4"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span className="text-xl font-bold text-foreground">10+ hrs</span>
                </div>
                <p className="text-xs text-muted-foreground">Saved weekly</p>
              </div>

              <div 
                className={`absolute -top-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-xl max-w-[200px] transition-all duration-700 ${
                  autoImageVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-4 -translate-y-4"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Bot className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">AI-Powered</span>
                </div>
                <p className="text-xs text-muted-foreground">Smart automation</p>
              </div>
            </div>

            <div 
              ref={autoRef}
              className={`order-1 lg:order-2 transition-all duration-700 ${
                autoVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div 
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 transition-all duration-500 ${
                  autoVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <Bot className="h-4 w-4" />
                AI Automation
              </div>
              <h2 
                className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 transition-all duration-700 ${
                  autoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                Automate repetitive work and run faster
              </h2>
              <p 
                className={`text-lg text-muted-foreground mb-8 transition-all duration-700 ${
                  autoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Make your business run more efficiently. Less manual work, fewer errors, 
                and more time to focus on what matters - growing your business.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 
                  className={`font-semibold text-foreground transition-all duration-500 ${
                    autoVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: "250ms" }}
                >
                  What changes for you:
                </h3>
                {automationBenefits.map((benefit, idx) => (
                  <div 
                    key={benefit} 
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      autoVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${300 + idx * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-500 ${
                  autoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "600ms" }}
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Explore automation options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Automation feature grid */}
          <div ref={autoFeaturesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {automationFeatures.map((feature, idx) => (
              <Card 
                key={feature.title} 
                className={`h-full hover:shadow-lg transition-all duration-500 border-border/50 hover:-translate-y-1 ${
                  autoFeaturesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-5">
                  <div 
                    className={`p-2 rounded-lg bg-accent/10 w-fit mb-3 transition-all duration-500 ${
                      autoFeaturesVisible ? "scale-100" : "scale-0"
                    }`}
                    style={{ transitionDelay: `${idx * 100 + 200}ms` }}
                  >
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
