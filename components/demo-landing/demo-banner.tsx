import Link from "next/link"
import { site } from "@/lib/site-content"
import { ROUTES } from "@/lib/seo/routes"

export function DemoBanner({
  clientLabel,
  category = "service",
}: {
  clientLabel: string
  category?: "industry" | "service"
}) {
  const sampleType = category === "industry" ? "Industry sample" : "Service sample"

  return (
    <div className="border-b border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2.5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-white/80">
          <span className="font-medium text-white">{sampleType}</span>
          <span className="mx-2 text-white/40">·</span>
          {category === "industry" ? "Industry" : "Project type"}: {clientLabel}
          <span className="mx-2 text-white/40">·</span>
          Built by {site.name}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={ROUTES.examples}
            className="text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            All examples
          </Link>
          <Link
            href={ROUTES.contact}
            className="rounded-md bg-white/10 px-3 py-1 font-medium text-white hover:bg-white/20"
          >
            Build yours →
          </Link>
        </div>
      </div>
    </div>
  )
}
