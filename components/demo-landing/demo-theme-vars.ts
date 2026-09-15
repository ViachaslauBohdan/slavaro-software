import type { CSSProperties } from "react"
import type { DemoTheme } from "@/lib/demo-landings"

export function demoThemeVars(theme: DemoTheme): CSSProperties {
  return {
    ["--demo-bg" as string]: theme.bg,
    ["--demo-surface" as string]: theme.surface,
    ["--demo-border" as string]: theme.border,
    ["--demo-text" as string]: theme.text,
    ["--demo-muted" as string]: theme.muted,
    ["--demo-primary" as string]: theme.primary,
    ["--demo-primary-hover" as string]: theme.primaryHover,
    ["--demo-primary-text" as string]: theme.primaryText,
    ["--demo-accent" as string]: theme.accent,
    backgroundColor: theme.bg,
    color: theme.text,
  }
}
