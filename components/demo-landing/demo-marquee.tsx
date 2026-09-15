"use client"

import type { DemoTheme } from "@/lib/demo-landings"

export function DemoMarquee({ items, theme }: { items: string[]; theme: DemoTheme }) {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden py-6"
      style={{ borderTop: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}` }}
    >
      <div className="demo-marquee flex w-max gap-10">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap text-sm font-medium tracking-wide"
            style={{ color: theme.muted }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
