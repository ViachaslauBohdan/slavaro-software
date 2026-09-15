import type { DemoTheme } from "@/lib/demo-landings"

export function DemoAmbientBg({ theme }: { theme: DemoTheme }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="demo-orb demo-orb-a absolute -left-32 top-0 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ backgroundColor: `${theme.primary}33` }}
      />
      <div
        className="demo-orb demo-orb-b absolute -right-24 top-40 h-[360px] w-[360px] rounded-full blur-3xl"
        style={{ backgroundColor: `${theme.accent}22` }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${theme.border} 1px, transparent 1px), linear-gradient(90deg, ${theme.border} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  )
}
