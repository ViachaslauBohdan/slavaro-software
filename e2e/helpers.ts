import { ALL_DEMO_LANDINGS, type DemoLanding, type DemoLayout } from "../lib/demo-landings"

export type { DemoLanding, DemoLayout }

/** One demo per layout system — for fast pre-commit smoke. */
export const SMOKE_DEMOS: DemoLanding[] = (() => {
  const byLayout = new Map<DemoLayout, DemoLanding>()
  for (const demo of ALL_DEMO_LANDINGS) {
    if (!byLayout.has(demo.layout)) byLayout.set(demo.layout, demo)
  }
  return [...byLayout.values()]
})()

export const ALL_DEMOS = ALL_DEMO_LANDINGS

export function relativeLuminance(rgb: { r: number; g: number; b: number }): number {
  const channel = (c: number) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b)
}

export function contrastRatio(
  a: { r: number; g: number; b: number },
  b: { r: number; g: number; b: number }
): number {
  const l1 = relativeLuminance(a)
  const l2 = relativeLuminance(b)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

export function parseCssColor(input: string): { r: number; g: number; b: number; a: number } | null {
  const s = input.trim().toLowerCase()
  if (s === "transparent") return { r: 0, g: 0, b: 0, a: 0 }

  if (s.startsWith("#")) {
    const hex = s.slice(1)
    if (hex.length === 3) {
      return {
        r: Number.parseInt(hex[0] + hex[0], 16),
        g: Number.parseInt(hex[1] + hex[1], 16),
        b: Number.parseInt(hex[2] + hex[2], 16),
        a: 1,
      }
    }
    if (hex.length === 6 || hex.length === 8) {
      return {
        r: Number.parseInt(hex.slice(0, 2), 16),
        g: Number.parseInt(hex.slice(2, 4), 16),
        b: Number.parseInt(hex.slice(4, 6), 16),
        a: hex.length === 8 ? Number.parseInt(hex.slice(6, 8), 16) / 255 : 1,
      }
    }
    return null
  }

  const rgba = s.match(
    /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/
  )
  if (rgba) {
    return {
      r: Number(rgba[1]),
      g: Number(rgba[2]),
      b: Number(rgba[3]),
      a: rgba[4] === undefined ? 1 : Number(rgba[4]),
    }
  }

  // modern: rgb(255 255 255 / 0.5)
  const modern = s.match(
    /^rgba?\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)$/
  )
  if (modern) {
    const aRaw = modern[4]
    let a = 1
    if (aRaw?.endsWith("%")) a = Number(aRaw.slice(0, -1)) / 100
    else if (aRaw) a = Number(aRaw)
    return { r: Number(modern[1]), g: Number(modern[2]), b: Number(modern[3]), a }
  }

  return null
}
