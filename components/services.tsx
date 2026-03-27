"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/lib/language-context"
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

export function Services() {
  const { t, language } = useLanguage()
  const { ref: landingRef, isVisible: landingVisible } = useScrollAnimation()
  const { ref: landingImageRef, isVisible: landingImageVisible } = useScrollAnimation()
  const { ref: landingFeaturesRef, isVisible: landingFeaturesVisible } = useScrollAnimation()
  const { ref: autoRef, isVisible: autoVisible } = useScrollAnimation()
  const { ref: autoImageRef, isVisible: autoImageVisible } = useScrollAnimation()
  const { ref: autoFeaturesRef, isVisible: autoFeaturesVisible } = useScrollAnimation()

  const landingPageFeatures = [
    {
      icon: Globe,
      title: t.services.landingPages.features.responsive.title,
      description: t.services.landingPages.features.responsive.description
    },
    {
      icon: TrendingUp,
      title: t.services.landingPages.features.leadGen.title,
      description: t.services.landingPages.features.leadGen.description
    },
    {
      icon: Smartphone,
      title: t.services.landingPages.features.seo.title,
      description: t.services.landingPages.features.seo.description
    },
    {
      icon: Zap,
      title: t.services.landingPages.features.fast.title,
      description: t.services.landingPages.features.fast.description
    },
  ]

  const automationFeatures = [
    {
      icon: TableProperties,
      title: t.services.automation.features.excel.title,
      description: t.services.automation.features.excel.description
    },
    {
      icon: Mail,
      title: t.services.automation.features.email.title,
      description: t.services.automation.features.email.description
    },
    {
      icon: FileText,
      title: t.services.automation.features.documents.title,
      description: t.services.automation.features.documents.description
    },
    {
      icon: Settings,
      title: t.services.automation.features.integration.title,
      description: t.services.automation.features.integration.description
    },
  ]

  const landingPageBenefits = language === "en" 
    ? [
        "Start receiving client inquiries immediately",
        "Improve your online presence",
        "Convert visitors into real business opportunities"
      ]
    : [
        "Zacznij otrzymywać zapytania natychmiast",
        "Popraw swoją obecność online",
        "Zamień odwiedzających w prawdziwe możliwości biznesowe"
      ]

  const automationBenefits = language === "en"
    ? [
        "Save hours every week",
        "Reduce operational costs",
        "Build scalable processes instead of manual tasks"
      ]
    : [
        "Oszczędź godziny każdego tygodnia",
        "Obniż koszty operacyjne",
        "Buduj skalowalne procesy zamiast manualnych zadań"
      ]

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
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

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
                {t.services.landingPages.title}
              </div>
              <h2 
                className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 transition-all duration-700 ${
                  landingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                {t.services.landingPages.title}
              </h2>
              <p 
                className={`text-lg text-muted-foreground mb-8 transition-all duration-700 ${
                  landingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                {t.services.landingPages.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 
                  className={`font-semibold text-foreground transition-all duration-500 ${
                    landingVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: "250ms" }}
                >
                  {language === "en" ? "Business impact:" : "Korzyści dla biznesu:"}
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
                {t.services.landingPages.cta}
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
                  <span className="text-sm font-medium text-foreground">
                    {language === "en" ? "Responsive" : "Responsywny"}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {language === "en" ? "Perfect on all devices" : "Idealny na wszystkich urządzeniach"}
                </p>
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
                <p className="text-xs text-muted-foreground">
                  {language === "en" ? "Delivery" : "Dostawa"}
                </p>
              </div>
            </div>
          </div>

          {/* Feature grid */}
          <div ref={landingFeaturesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
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
                <p className="text-xs text-muted-foreground">
                  {language === "en" ? "Saved weekly" : "Oszczędności tygodniowo"}
                </p>
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
                <p className="text-xs text-muted-foreground">
                  {language === "en" ? "Smart automation" : "Inteligentna automatyzacja"}
                </p>
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
                {t.services.automation.title}
              </div>
              <h2 
                className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 transition-all duration-700 ${
                  autoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                {t.services.automation.title}
              </h2>
              <p 
                className={`text-lg text-muted-foreground mb-8 transition-all duration-700 ${
                  autoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                {t.services.automation.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 
                  className={`font-semibold text-foreground transition-all duration-500 ${
                    autoVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: "250ms" }}
                >
                  {language === "en" ? "What changes for you:" : "Co się zmieni dla Ciebie:"}
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
                {t.services.automation.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Automation feature grid */}
          <div ref={autoFeaturesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
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
