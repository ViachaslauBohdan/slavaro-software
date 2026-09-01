"use client"

import { stats } from "@/lib/site-content"

export function Stats() {
  return (
    <section className="py-14 lg:py-20 relative overflow-hidden bg-primary">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Delivery you can count on
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/85">
            Senior engineering with transparent scope and measurable outcomes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-block min-w-[120px] p-4 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 backdrop-blur-sm">
                <p className="text-3xl lg:text-4xl font-extrabold tracking-tight text-primary-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-primary-foreground/85">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
