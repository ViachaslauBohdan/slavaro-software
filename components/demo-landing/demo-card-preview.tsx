import type { DemoLanding } from "@/lib/demo-landings"
import { DemoIndustryPhoto } from "@/components/demo-landing/demo-industry-photo"
import { cn } from "@/lib/utils"

export function DemoCardPreview({
  demo,
  className,
  priority = false,
}: {
  demo: DemoLanding
  className?: string
  priority?: boolean
}) {
  const t = demo.theme

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <DemoIndustryPhoto
        demo={demo}
        className="absolute inset-0"
        overlay="bottom"
        priority={priority}
      />

      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      <div className="absolute left-4 top-4 z-10">
        <span
          className="inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md"
          style={{
            backgroundColor: `${t.bg}cc`,
            color: t.accent,
            border: `1px solid ${t.border}`,
          }}
        >
          {demo.clientLabel}
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10">
        <p
          className="text-lg font-bold drop-shadow-md"
          style={{ color: "#ffffff" }}
        >
          {demo.brand}
        </p>
      </div>
    </div>
  )
}
