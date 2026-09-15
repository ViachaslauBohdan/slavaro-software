"use client"

import type { ReactNode } from "react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
} from "recharts"
import type { DemoTheme } from "@/lib/demo-landings"
import { cn } from "@/lib/utils"

const chartData = [
  { name: "Mon", value: 42 },
  { name: "Tue", value: 58 },
  { name: "Wed", value: 45 },
  { name: "Thu", value: 72 },
  { name: "Fri", value: 68 },
  { name: "Sat", value: 54 },
  { name: "Sun", value: 81 },
]

function BrowserFrame({
  theme,
  title,
  children,
  className,
}: {
  theme: DemoTheme
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn("demo-float overflow-hidden rounded-2xl shadow-2xl", className)}
      style={{
        backgroundColor: theme.surface,
        border: `1px solid ${theme.border}`,
        boxShadow: `0 32px 80px -24px ${theme.primary}55`,
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: `1px solid ${theme.border}`, backgroundColor: theme.bg }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs font-medium opacity-60">{title}</span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}

function FloatingBadge({
  theme,
  label,
  value,
  className,
}: {
  theme: DemoTheme
  label: string
  value: string
  className?: string
}) {
  return (
    <div
      className={cn("demo-badge absolute rounded-xl px-3 py-2 text-xs shadow-lg backdrop-blur-md", className)}
      style={{
        backgroundColor: `${theme.surface}ee`,
        border: `1px solid ${theme.border}`,
        color: theme.text,
      }}
    >
      <p style={{ color: theme.muted }}>{label}</p>
      <p className="mt-0.5 text-sm font-semibold" style={{ color: theme.accent }}>
        {value}
      </p>
    </div>
  )
}

export function DemoHeroVisual({ slug, theme }: { slug: string; theme: DemoTheme }) {
  switch (slug) {
    case "saas-mvp":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Activation" value="+24%" className="-left-4 top-8" />
          <FloatingBadge theme={theme} label="MRR" value="€12.4k" className="-right-2 top-24" />
          <BrowserFrame theme={theme} title="app.pulsemetrics.io/dashboard">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs" style={{ color: theme.muted }}>
                  Weekly active users
                </p>
                <p className="text-2xl font-bold">2,847</p>
              </div>
              <span
                className="rounded-full px-2.5 py-1 text-xs font-medium"
                style={{ backgroundColor: `${theme.primary}33`, color: theme.accent }}
              >
                Live
              </span>
            </div>
            <div className="h-36 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="demoFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={theme.primary} stopOpacity={0.45} />
                      <stop offset="100%" stopColor={theme.primary} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" hide />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={theme.accent}
                    fill="url(#demoFill)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Retention", "Revenue", "Churn"].map((label, i) => (
                <div
                  key={label}
                  className="rounded-lg p-2 text-center"
                  style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
                >
                  <p className="text-[10px]" style={{ color: theme.muted }}>
                    {label}
                  </p>
                  <p className="text-sm font-semibold">{["68%", "€4.2k", "2.1%"][i]}</p>
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "web-platform":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Today" value="18 bookings" className="-left-3 top-6" />
          <BrowserFrame theme={theme} title="bookwell.app/calendar">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-semibold">March 2026</p>
              <span className="text-xs" style={{ color: theme.muted }}>
                3 locations
              </span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px]" style={{ color: theme.muted }}>
              {["M", "T", "W", "T", "F", "S", "S"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-1">
              {Array.from({ length: 28 }, (_, i) => {
                const day = i + 1
                const active = [3, 7, 12, 15, 18, 22, 25].includes(day)
                return (
                  <div
                    key={day}
                    className={cn(
                      "flex h-8 items-center justify-center rounded-md text-xs",
                      active && "font-semibold"
                    )}
                    style={{
                      backgroundColor: active ? `${theme.primary}44` : "transparent",
                      color: active ? theme.text : theme.muted,
                      border: active ? `1px solid ${theme.primary}` : "1px solid transparent",
                    }}
                  >
                    {day}
                  </div>
                )
              })}
            </div>
            <div
              className="mt-4 space-y-2 rounded-xl p-3"
              style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
            >
              {[
                { time: "09:00", client: "Anna K. · Haircut" },
                { time: "11:30", client: "Mark T. · Consultation" },
                { time: "14:00", client: "Studio B · Group class" },
              ].map((slot) => (
                <div key={slot.time} className="flex items-center gap-3 text-xs">
                  <span className="w-10 font-mono" style={{ color: theme.accent }}>
                    {slot.time}
                  </span>
                  <span>{slot.client}</span>
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "product-refresh":
      return (
        <div className="relative mx-auto grid w-full max-w-lg gap-3 sm:grid-cols-2">
          <BrowserFrame theme={theme} title="Before · legacy UI" className="demo-float-delay opacity-80 scale-[0.97]">
            <div className="space-y-2">
              <div className="h-3 w-3/4 rounded bg-white/10" />
              <div className="h-2 w-full rounded bg-white/5" />
              <div className="h-2 w-5/6 rounded bg-white/5" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-16 rounded bg-white/5" />
                <div className="h-16 rounded bg-white/5" />
              </div>
              <p className="text-[10px]" style={{ color: theme.muted }}>
                Slow · cluttered · 2019 design
              </p>
            </div>
          </BrowserFrame>
          <BrowserFrame theme={theme} title="After · Northwind CRM" className="demo-float -mt-2 sm:-mt-6">
            <div className="mb-3 flex gap-2">
              {["Pipeline", "Contacts", "Reports"].map((tab, i) => (
                <span
                  key={tab}
                  className="rounded-md px-2 py-1 text-[10px] font-medium"
                  style={{
                    backgroundColor: i === 0 ? `${theme.primary}44` : "transparent",
                    color: i === 0 ? theme.text : theme.muted,
                  }}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="h-24 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData.slice(0, 5)}>
                  <Bar dataKey="value" fill={theme.primary} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-[10px]" style={{ color: theme.accent }}>
              2× faster · modern UI
            </p>
          </BrowserFrame>
        </div>
      )

    case "product-rescue":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Launch readiness" value="82%" className="-right-2 top-4" />
          <BrowserFrame theme={theme} title="shiplane.dev/status">
            <div className="mb-4">
              <div className="mb-2 flex justify-between text-xs">
                <span style={{ color: theme.muted }}>Production checklist</span>
                <span style={{ color: theme.accent }}>6 / 8 done</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full" style={{ backgroundColor: theme.bg }}>
                <div
                  className="demo-progress h-full rounded-full"
                  style={{ backgroundColor: theme.primary, width: "82%" }}
                />
              </div>
            </div>
            <ul className="space-y-2">
              {[
                { label: "Auth & roles", done: true },
                { label: "Payment webhooks", done: true },
                { label: "Deploy pipeline", done: true },
                { label: "Error monitoring", done: false },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs"
                  style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
                >
                  <span
                    className="flex h-4 w-4 items-center justify-center rounded-full text-[10px]"
                    style={{
                      backgroundColor: item.done ? `${theme.primary}44` : `${theme.border}`,
                      color: item.done ? theme.accent : theme.muted,
                    }}
                  >
                    {item.done ? "✓" : "·"}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </BrowserFrame>
        </div>
      )

    case "business-automation":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <BrowserFrame theme={theme} title="flowbridge.io/workflows/daily-sync">
            <div className="flex flex-col items-center gap-3 py-2">
              {[
                { label: "CRM", sub: "New lead" },
                { label: "FlowBridge", sub: "Validate & enrich" },
                { label: "Sheets", sub: "Update report" },
                { label: "Slack", sub: "Notify team" },
              ].map((node, i, arr) => (
                <div key={node.label} className="flex flex-col items-center">
                  <div
                    className="demo-node w-40 rounded-xl px-4 py-3 text-center text-xs"
                    style={{
                      backgroundColor: theme.bg,
                      border: `1px solid ${i === 1 ? theme.primary : theme.border}`,
                      boxShadow: i === 1 ? `0 0 24px ${theme.primary}33` : undefined,
                    }}
                  >
                    <p className="font-semibold">{node.label}</p>
                    <p style={{ color: theme.muted }}>{node.sub}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="my-1 h-6 w-px" style={{ backgroundColor: theme.accent }} />
                  )}
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "ai-assistant":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Sources cited" value="3 docs" className="-left-3 top-10" />
          <BrowserFrame theme={theme} title="askdocs.internal/chat">
            <div className="space-y-3">
              <div
                className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm px-3 py-2 text-xs"
                style={{ backgroundColor: `${theme.primary}44` }}
              >
                What&apos;s our refund policy for annual plans?
              </div>
              <div
                className="max-w-[90%] rounded-2xl rounded-tl-sm px-3 py-2 text-xs leading-relaxed"
                style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
              >
                Annual plans can be refunded within 14 days of purchase. After that, credits apply
                toward the next term.
                <div className="mt-2 flex flex-wrap gap-1">
                  {["billing-policy.pdf", "terms-v3.pdf"].map((doc) => (
                    <span
                      key={doc}
                      className="rounded-md px-2 py-0.5 text-[10px]"
                      style={{ backgroundColor: `${theme.accent}22`, color: theme.accent }}
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                {["Search docs", "Summarize", "Draft reply"].map((action) => (
                  <span
                    key={action}
                    className="rounded-full px-2.5 py-1 text-[10px]"
                    style={{ border: `1px solid ${theme.border}`, color: theme.muted }}
                  >
                    {action}
                  </span>
                ))}
              </div>
            </div>
          </BrowserFrame>
        </div>
      )

    case "logistics":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="In transit" value="DE → PL" className="-left-3 top-8" />
          <FloatingBadge theme={theme} label="ETA" value="14:30" className="-right-2 top-20" />
          <BrowserFrame theme={theme} title="track.nordfreight.eu">
            <div className="relative mb-4 h-24 overflow-hidden rounded-xl" style={{ backgroundColor: theme.bg }}>
              <svg viewBox="0 0 240 80" className="h-full w-full">
                <path
                  d="M20 50 Q80 20 140 45 T220 35"
                  fill="none"
                  stroke={theme.accent}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="20" cy="50" r="5" fill={theme.primary} />
                <circle cx="140" cy="45" r="5" fill={theme.accent} />
                <circle cx="220" cy="35" r="5" fill={theme.muted} opacity="0.5" />
              </svg>
            </div>
            <div className="space-y-2">
              {[
                { id: "NF-4821", status: "Delivered", route: "Hamburg → Warsaw" },
                { id: "NF-4822", status: "In transit", route: "Rotterdam → Kraków" },
              ].map((shipment) => (
                <div
                  key={shipment.id}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs"
                  style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
                >
                  <span className="font-mono">{shipment.id}</span>
                  <span style={{ color: theme.muted }}>{shipment.route}</span>
                  <span style={{ color: theme.accent }}>{shipment.status}</span>
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "pharma":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="GMP certified" value="EU" className="-right-2 top-6" />
          <BrowserFrame theme={theme} title="purevita-labs.com/pipeline">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: "Products", value: "12" },
                { label: "Markets", value: "18" },
                { label: "Trials", value: "4 active" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg p-2 text-center"
                  style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
                >
                  <p className="text-lg font-bold">{stat.value}</p>
                  <p className="text-[10px]" style={{ color: theme.muted }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {["CardioVita · Phase III", "ImmunoRelief · Approved", "NeuroCalm · Pre-clinical"].map(
                (item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs"
                    style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: i === 1 ? theme.primary : i === 0 ? theme.accent : theme.muted,
                      }}
                    />
                    {item}
                  </div>
                )
              )}
            </div>
          </BrowserFrame>
        </div>
      )

    case "events":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Next event" value="Mar 28" className="-left-3 top-10" />
          <BrowserFrame theme={theme} title="meridian-events.com/upcoming">
            <div
              className="mb-4 overflow-hidden rounded-xl p-4"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}44, ${theme.accent}22)`,
                border: `1px solid ${theme.border}`,
              }}
            >
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: theme.accent }}>
                Product launch
              </p>
              <p className="mt-1 text-lg font-bold">Aurora Summit 2026</p>
              <p className="mt-1 text-xs" style={{ color: theme.muted }}>
                420 guests · Warsaw · Full production
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["Venue & AV", "Catering", "Run-of-show", "Guest RSVP"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg px-3 py-2 text-xs"
                  style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "legal":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Response time" value="< 24h" className="-right-2 top-6" />
          <BrowserFrame theme={theme} title="blackwood-partners.com/consult">
            <div className="mb-4 grid grid-cols-2 gap-2">
              {["M&A", "Contracts", "Employment", "Disputes"].map((area) => (
                <div
                  key={area}
                  className="rounded-lg px-3 py-2 text-xs font-medium"
                  style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
                >
                  {area}
                </div>
              ))}
            </div>
            <div
              className="rounded-xl p-4 text-xs"
              style={{ backgroundColor: theme.bg, border: `1px solid ${theme.accent}44` }}
            >
              <p className="font-semibold">Partner consultation</p>
              <p className="mt-1" style={{ color: theme.muted }}>
                30 min · Confidential · Fixed intro fee
              </p>
              <button
                type="button"
                className="mt-3 w-full rounded-md py-2 text-[10px] font-semibold"
                style={{ backgroundColor: theme.primary, color: theme.primaryText }}
              >
                Request a slot
              </button>
            </div>
          </BrowserFrame>
        </div>
      )

    case "restaurant":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Tonight" value="3 tables left" className="-left-3 top-8" />
          <BrowserFrame theme={theme} title="emberandoak.com/reserve">
            <div
              className="mb-4 overflow-hidden rounded-xl p-4"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}55, ${theme.bg})`,
                border: `1px solid ${theme.border}`,
              }}
            >
              <p className="text-xs uppercase tracking-wider" style={{ color: theme.accent }}>
                Tonight&apos;s special
              </p>
              <p className="mt-1 font-bold">Wood-fired ribeye · truffle butter</p>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {["18:00", "19:30", "21:00"].map((time, i) => (
                <div
                  key={time}
                  className="rounded-lg py-2 text-center text-xs font-medium"
                  style={{
                    backgroundColor: i === 1 ? theme.primary : theme.bg,
                    color: i === 1 ? theme.primaryText : theme.muted,
                    border: `1px solid ${theme.border}`,
                  }}
                >
                  {time}
                </div>
              ))}
            </div>
            <p className="text-[10px]" style={{ color: theme.muted }}>
              Old Town · 2 guests · Main dining room
            </p>
          </BrowserFrame>
        </div>
      )

    case "fitness":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="This week" value="PR: 140kg" className="-right-2 top-8" />
          <BrowserFrame theme={theme} title="forgeathletics.com/schedule">
            <div className="mb-3 flex gap-2">
              {["Strength", "Conditioning", "Open gym"].map((tab, i) => (
                <span
                  key={tab}
                  className="rounded-full px-2.5 py-1 text-[10px] font-medium"
                  style={{
                    backgroundColor: i === 0 ? `${theme.primary}44` : "transparent",
                    border: `1px solid ${i === 0 ? theme.primary : theme.border}`,
                  }}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="space-y-2">
              {[
                { class: "Strength 101", time: "07:00", spots: "4 spots left" },
                { class: "Engine Builder", time: "18:30", spots: "Full" },
                { class: "Open Gym", time: "All day", spots: "Walk-in" },
              ].map((row) => (
                <div
                  key={row.class}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs"
                  style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
                >
                  <div>
                    <p className="font-semibold">{row.class}</p>
                    <p style={{ color: theme.muted }}>{row.time}</p>
                  </div>
                  <span style={{ color: theme.accent }}>{row.spots}</span>
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "real-estate":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="New listing" value="Today" className="-left-3 top-10" />
          <BrowserFrame theme={theme} title="harborandco.com/listings">
            <div
              className="mb-3 h-24 overflow-hidden rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}44, ${theme.surface})`,
                border: `1px solid ${theme.border}`,
              }}
            >
              <div className="flex h-full flex-col justify-end p-3">
                <p className="text-xs font-medium" style={{ color: theme.accent }}>
                  Mokotów · 3 bed
                </p>
                <p className="text-lg font-bold">€485,000</p>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { addr: "River View Apt · 82 m²", price: "€420k" },
                { addr: "Garden Terrace · 110 m²", price: "€620k" },
              ].map((listing) => (
                <div
                  key={listing.addr}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs"
                  style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
                >
                  <span>{listing.addr}</span>
                  <span className="font-semibold" style={{ color: theme.accent }}>
                    {listing.price}
                  </span>
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "beauty":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Next slot" value="Today 15:00" className="-right-2 top-8" />
          <BrowserFrame theme={theme} title="book.lumiere-studio.com">
            <div className="mb-3 flex gap-2">
              {["Facial", "Colour", "Nails"].map((tab, i) => (
                <span
                  key={tab}
                  className="rounded-full px-3 py-1 text-[10px] font-medium"
                  style={{
                    backgroundColor: i === 0 ? `${theme.primary}44` : "transparent",
                    border: `1px solid ${i === 0 ? theme.primary : theme.border}`,
                  }}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="space-y-2">
              {[
                { name: "Signature Glow Facial", duration: "75 min", price: "€120" },
                { name: "Balayage & Cut", duration: "120 min", price: "€180" },
              ].map((treatment) => (
                <div
                  key={treatment.name}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-xs"
                  style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
                >
                  <div>
                    <p className="font-semibold">{treatment.name}</p>
                    <p style={{ color: theme.muted }}>{treatment.duration}</p>
                  </div>
                  <span style={{ color: theme.accent }}>{treatment.price}</span>
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "healthcare":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Next slot" value="Thu 10:30" className="-right-2 top-8" />
          <BrowserFrame theme={theme} title="book.clearpath-clinic.com">
            <div className="mb-3 grid grid-cols-2 gap-2">
              {["General GP", "Dental", "Pediatrics", "Preventive"].map((svc) => (
                <div key={svc} className="rounded-lg px-2 py-2 text-[10px] font-medium" style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}>
                  {svc}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[
                { doc: "Dr. Nowak", time: "Thu 10:30", type: "Check-up" },
                { doc: "Dr. Silva", time: "Fri 14:00", type: "Dental" },
              ].map((slot) => (
                <div key={slot.doc} className="flex justify-between rounded-lg px-3 py-2 text-xs" style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}>
                  <span className="font-medium">{slot.doc}</span>
                  <span style={{ color: theme.muted }}>{slot.type}</span>
                  <span style={{ color: theme.accent }}>{slot.time}</span>
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "education":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Enrolled" value="8,240" className="-left-3 top-10" />
          <BrowserFrame theme={theme} title="learn.brightmind.academy">
            <div className="mb-3 space-y-2">
              {[
                { course: "Data Analytics Bootcamp", progress: "68%", live: true },
                { course: "Business English B2", progress: "41%", live: false },
              ].map((c) => (
                <div key={c.course} className="rounded-xl p-3 text-xs" style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}>
                  <div className="flex justify-between">
                    <span className="font-semibold">{c.course}</span>
                    {c.live && <span style={{ color: theme.accent }}>Live cohort</span>}
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full" style={{ backgroundColor: theme.surface }}>
                    <div className="h-full rounded-full" style={{ width: c.progress, backgroundColor: theme.primary }} />
                  </div>
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "construction":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Site progress" value="Week 6/10" className="-right-2 top-6" />
          <BrowserFrame theme={theme} title="stonebridge-builders.com/projects">
            <div className="mb-3 h-20 rounded-xl" style={{ background: `linear-gradient(135deg, ${theme.primary}33, ${theme.bg})`, border: `1px solid ${theme.border}` }}>
              <div className="flex h-full items-end p-3 text-xs">
                <span className="font-bold">Office fit-out · Warsaw</span>
              </div>
            </div>
            <div className="space-y-2">
              {["Foundation ✓", "Framing ✓", "Electrical · in progress"].map((m, i) => (
                <div key={m} className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs" style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}>
                  <span style={{ color: i < 2 ? theme.accent : theme.muted }}>{i < 2 ? "✓" : "◐"}</span>
                  {m}
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "automotive":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="In stock" value="214 cars" className="-left-3 top-8" />
          <BrowserFrame theme={theme} title="axismotors.com/inventory">
            <div className="mb-3 h-20 rounded-xl" style={{ background: `linear-gradient(180deg, ${theme.surface}, ${theme.bg})`, border: `1px solid ${theme.border}` }}>
              <div className="flex h-full flex-col justify-end p-3">
                <p className="text-xs font-bold">BMW X3 xDrive · 2023</p>
                <p className="text-[10px]" style={{ color: theme.accent }}>€42,900 · Certified</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["Book test drive", "Finance calc"].map((action) => (
                <div key={action} className="rounded-lg py-2 text-center text-[10px] font-medium" style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}>
                  {action}
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "travel":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Trip dates" value="Apr 12–26" className="-right-2 top-10" />
          <BrowserFrame theme={theme} title="horizonvoyages.com/itinerary">
            <div className="mb-3 rounded-xl p-3" style={{ background: `linear-gradient(135deg, ${theme.primary}44, ${theme.bg})`, border: `1px solid ${theme.border}` }}>
              <p className="text-xs font-bold">Japan · 14 nights</p>
              <p className="text-[10px]" style={{ color: theme.muted }}>Tokyo → Kyoto → Osaka</p>
            </div>
            <div className="space-y-2">
              {[
                { day: "Day 1", item: "Arrive Tokyo · Shinjuku hotel" },
                { day: "Day 4", item: "Shinkansen to Kyoto" },
                { day: "Day 9", item: "Ryokan stay · Hakone" },
              ].map((row) => (
                <div key={row.day} className="flex gap-3 rounded-lg px-3 py-2 text-xs" style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}>
                  <span className="font-mono" style={{ color: theme.accent }}>{row.day}</span>
                  <span>{row.item}</span>
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "finance":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Cash runway" value="14 mo" className="-left-3 top-8" />
          <BrowserFrame theme={theme} title="portal.summit-advisory.com">
            <div className="mb-3 grid grid-cols-3 gap-2">
              {[
                { label: "Revenue", value: "€842k" },
                { label: "Margin", value: "24%" },
                { label: "Tax due", value: "€18k" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg p-2 text-center" style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}>
                  <p className="text-sm font-bold">{stat.value}</p>
                  <p className="text-[9px]" style={{ color: theme.muted }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex h-16 items-end gap-1">
              {[45, 62, 58, 74, 68, 82, 78].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: i === 6 ? theme.accent : `${theme.primary}88` }} />
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    case "cleaning":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Next clean" value="Fri 09:00" className="-right-2 top-8" />
          <BrowserFrame theme={theme} title="book.purehome.services">
            <div className="mb-3 flex gap-2">
              {["Standard", "Deep clean", "Office"].map((type, i) => (
                <span key={type} className="rounded-full px-2.5 py-1 text-[10px] font-medium" style={{ backgroundColor: i === 0 ? `${theme.primary}22` : theme.bg, border: `1px solid ${i === 0 ? theme.primary : theme.border}` }}>
                  {type}
                </span>
              ))}
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between rounded-lg px-3 py-2" style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}>
                <span>2-bed apartment</span>
                <span style={{ color: theme.accent }}>€89</span>
              </div>
              <div className="flex justify-between rounded-lg px-3 py-2" style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}>
                <span>Team: Anna + Kasia</span>
                <span style={{ color: theme.muted }}>★ 4.9</span>
              </div>
            </div>
          </BrowserFrame>
        </div>
      )

    case "photography":
      return (
        <div className="relative mx-auto w-full max-w-lg">
          <FloatingBadge theme={theme} label="Available" value="Sep 2026" className="-left-3 top-10" />
          <BrowserFrame theme={theme} title="lensandlight.co/portfolio">
            <div className="mb-3 grid grid-cols-3 gap-1.5">
              {[theme.accent, theme.primary, theme.muted].map((color, i) => (
                <div key={i} className="aspect-square rounded-lg" style={{ background: `linear-gradient(135deg, ${color}66, ${theme.bg})`, border: `1px solid ${theme.border}` }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              {["Wedding · from €2,400", "Brand · from €890"].map((pkg) => (
                <div key={pkg} className="rounded-lg px-2 py-2 font-medium" style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}>
                  {pkg}
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      )

    default:
      return null
  }
}

export function DemoGalleryVisual({ slug, theme }: { slug: string; theme: DemoTheme }) {
  return (
    <div className="scale-[0.85] origin-top opacity-90">
      <DemoHeroVisual slug={slug} theme={theme} />
    </div>
  )
}
