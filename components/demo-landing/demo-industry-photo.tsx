"use client"

import { useEffect, useRef, useState } from "react"
import type { DemoLanding } from "@/lib/demo-landings"
import { getDemoImage } from "@/lib/demo-images"
import { cn } from "@/lib/utils"

type DemoIndustryPhotoProps = {
  demo: DemoLanding
  className?: string
  imageClassName?: string
  overlay?: "bottom" | "full" | "none"
  priority?: boolean
}

export function DemoIndustryPhoto({
  demo,
  className,
  imageClassName,
  overlay = "bottom",
  priority = false,
}: DemoIndustryPhotoProps) {
  const image = getDemoImage(demo.slug)
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [src, setSrc] = useState(image.src)

  useEffect(() => {
    setSrc(image.src)
    setLoaded(false)
  }, [image.src])

  useEffect(() => {
    const el = imgRef.current
    if (el?.complete && el.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [src])

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ backgroundColor: demo.theme.bg }}
    >
      {/* Soft placeholder so the slot never looks “stuck empty” */}
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background: `linear-gradient(135deg, ${demo.theme.surface}, ${demo.theme.bg})`,
          opacity: loaded ? 0 : 1,
          transition: "opacity 300ms ease",
        }}
        aria-hidden
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => {
          // Last-resort fallback: another known-good local asset
          if (src !== "/examples/logistics.jpg") {
            setSrc("/examples/logistics.jpg")
          } else {
            setLoaded(true)
          }
        }}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          imageClassName
        )}
      />
      {overlay === "bottom" && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${demo.theme.bg}ee 0%, ${demo.theme.bg}88 35%, transparent 70%)`,
          }}
        />
      )}
      {overlay === "full" && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${demo.theme.bg}cc 0%, ${demo.theme.bg}66 50%, ${demo.theme.bg}33 100%)`,
          }}
        />
      )}
    </div>
  )
}
