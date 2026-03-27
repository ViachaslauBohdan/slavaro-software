"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Stats() {
  const { t, language } = useLanguage()

  const stats = [
    { value: t.stats.delivery.value, label: t.stats.delivery.label },
    { value: t.stats.projects.value, label: t.stats.projects.label },
    { value: t.stats.saved.value, label: t.stats.saved.label },
    { value: t.stats.satisfaction.value, label: t.stats.satisfaction.label },
    { value: "24/7", label: language === "en" ? "Lead notifications" : "Powiadomienia o leadach" },
    { value: "0", label: language === "en" ? "Hidden fees" : "Ukrytych opłat" },
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern workspace"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/95" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
            {language === "en" ? "Results that speak for themselves" : "Wyniki, które mówią same za siebie"}
          </h2>
          <p className="mt-4 text-lg text-background/70">
            {language === "en" ? "Fast delivery, real results, happy clients" : "Szybka dostawa, realne wyniki, zadowoleni klienci"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-block p-4 rounded-xl bg-background/5 group-hover:bg-background/10 transition-colors">
                <p className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-background/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
