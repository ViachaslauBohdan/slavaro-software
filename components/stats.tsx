const stats = [
  { value: "500+", label: "Award-winning clients" },
  { value: "$15B+", label: "In client acquisitions" },
  { value: "36", label: "Month average engagement" },
  { value: "20+", label: "Client IPOs supported" },
  { value: "20+", label: "Years of experience" },
  { value: "3K+", label: "World-class engineers" },
]

export function Stats() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Numbers we&apos;re proud of
          </h2>
          <p className="mt-4 text-lg text-background/70">
            ...and the story behind them
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
