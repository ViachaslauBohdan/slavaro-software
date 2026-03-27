const stats = [
  { value: "48h", label: "Landing page delivery" },
  { value: "100+", label: "Websites delivered" },
  { value: "10+", label: "Hours saved weekly per client" },
  { value: "95%", label: "Client satisfaction rate" },
  { value: "24/7", label: "Lead notifications" },
  { value: "0", label: "Hidden fees" },
]

export function Stats() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Results that speak for themselves
          </h2>
          <p className="mt-4 text-lg text-background/70">
            Fast delivery, real results, happy clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-background/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
