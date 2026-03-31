"use client"

import Image from "next/image"

const stats = [
  { value: "48h", label: "Delivery time" },
  { value: "50+", label: "Projects delivered" },
  { value: "10+ hrs", label: "Saved weekly" },
  { value: "95%", label: "Client satisfaction" },
  { value: "24/7", label: "Lead notifications" },
  { value: "0", label: "Hidden fees" },
]

export function Stats() {
  return (
    <section className="py-14 lg:py-20 relative overflow-hidden">
      {/* Background image with a softer branded overlay for readability */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern workspace"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/88 via-primary/82 to-foreground/78" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
            Results that speak for themselves
          </h2>
          <p className="mt-4 text-lg text-background/85">
            Fast delivery, real results, happy clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-block min-w-[140px] p-4 rounded-xl border border-background/25 bg-background/12 backdrop-blur-sm group-hover:bg-background/18 group-hover:border-background/35 transition-colors">
                <p className="text-3xl lg:text-4xl font-extrabold tracking-tight text-background drop-shadow-sm">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-background/85">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
