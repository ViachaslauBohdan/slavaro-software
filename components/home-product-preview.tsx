"use client"

import { deliveryPipeline } from "@/lib/site-content"

const KPIS = [
  { label: "Activation", value: "68%", delta: "+12%" },
  { label: "Retention D30", value: "41%", delta: "+6%" },
  { label: "MRR", value: "$24.1k", delta: "+18%" },
]

const BARS = [36, 48, 44, 62, 58, 74, 69, 88, 81, 94]
const ACTIVITY = [
  { t: "2m", text: "Deployed api-gateway · production" },
  { t: "18m", text: "Checkout flow passed e2e" },
  { t: "1h", text: "Scope locked · sprint 04" },
]

export function HomeProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(15,118,110,0.12),transparent_65%)]"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_28px_60px_-32px_rgba(28,36,52,0.28)] home-panel-float">
        <div className="flex items-center gap-3 border-b border-border bg-secondary/70 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f2a6a0]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ebd18a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#9dcfb3]" />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="rounded-full border border-border bg-background px-3 py-1 text-[11px] text-subtle-foreground">
              console.slavaro · metrics
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-primary">
            <span className="demo-pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
            live
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-2.5">
            {KPIS.map((k) => (
              <div key={k.label} className="rounded-xl border border-border bg-secondary/50 px-3 py-3">
                <p className="text-[10px] uppercase tracking-[0.14em] text-subtle-foreground">
                  {k.label}
                </p>
                <p className="mt-1.5 text-xl font-semibold tracking-tight text-foreground">{k.value}</p>
                <p className="mt-1 text-[11px] font-medium text-primary">{k.delta}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-5">
            <div className="rounded-xl border border-border bg-secondary/50 p-3.5 sm:col-span-3">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[11px] font-medium text-subtle-foreground">Weekly velocity</p>
                <p className="text-[11px] text-primary">shipped · on track</p>
              </div>
              <div className="flex h-[108px] items-end gap-1.5">
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className="home-bar relative flex-1 overflow-hidden rounded-[3px]"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${0.05 * i}s`,
                      background:
                        i === BARS.length - 1
                          ? "linear-gradient(180deg,#14b8a6,#0f766e)"
                          : "linear-gradient(180deg,rgba(15,118,110,0.55),rgba(15,118,110,0.2))",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary/50 p-3.5 sm:col-span-2">
              <p className="mb-3 text-[11px] font-medium text-subtle-foreground">Pipeline</p>
              <ul className="space-y-2.5">
                {ACTIVITY.map((row, i) => (
                  <li key={row.text} className="flex gap-2.5">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary demo-pulse-dot"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    />
                    <div>
                      <p className="text-[11px] leading-snug text-foreground/85">{row.text}</p>
                      <p className="mt-0.5 text-[10px] text-subtle-foreground">{row.t} ago</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-border pt-3">
            {["Next.js", "TypeScript", "Postgres", "Vercel", "CI/CD"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium text-subtle-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {deliveryPipeline.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="text-xs font-medium text-subtle-foreground">{step}</span>
            {i < deliveryPipeline.length - 1 && (
              <span className="pipeline-arrow text-xs" aria-hidden>
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
