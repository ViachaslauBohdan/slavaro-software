"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { DemoLanding } from "@/lib/demo-landings"
import { getDemoGallery } from "@/lib/demo-gallery"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type DemoGallerySliderProps = {
  demo: DemoLanding
  variant?: "full" | "peek"
  className?: string
  autoplayMs?: number
}

function GallerySlideImage({
  src,
  alt,
  fallback,
  eager,
  themeBg,
  themeSurface,
}: {
  src: string
  alt: string
  fallback: string
  eager?: boolean
  themeBg: string
  themeSurface: string
}) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setCurrentSrc(src)
    setLoaded(false)
  }, [src])

  return (
    <div className="relative h-full w-full" style={{ backgroundColor: themeBg }}>
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background: `linear-gradient(135deg, ${themeSurface}, ${themeBg})`,
          opacity: loaded ? 0 : 1,
          transition: "opacity 300ms ease",
        }}
        aria-hidden
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={currentSrc}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "h-full w-full object-cover transition-all duration-700",
          loaded ? "opacity-100 scale-100" : "opacity-0",
          "group-hover:scale-105"
        )}
        onLoad={(e) => {
          if (e.currentTarget.naturalWidth > 0) setLoaded(true)
        }}
        onError={() => {
          if (currentSrc !== fallback) {
            setCurrentSrc(fallback)
          } else {
            setLoaded(true)
          }
        }}
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) setLoaded(true)
        }}
      />
    </div>
  )
}

export function DemoGallerySlider({
  demo,
  variant = "full",
  className,
  autoplayMs = 4500,
}: DemoGallerySliderProps) {
  const slides = getDemoGallery(demo.slug)
  const t = demo.theme
  const fallback = `/examples/${demo.slug}.jpg`
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  useEffect(() => {
    if (!api || !autoplayMs) return
    const id = window.setInterval(() => {
      if (api.canScrollNext()) api.scrollNext()
      else api.scrollTo(0)
    }, autoplayMs)
    return () => window.clearInterval(id)
  }, [api, autoplayMs])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  return (
    <div className={cn("relative", className)}>
      <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
        <CarouselContent className={variant === "peek" ? "-ml-3 sm:-ml-4" : "-ml-0"}>
          {slides.map((slide, index) => (
            <CarouselItem
              key={`${slide.src}-${index}`}
              className={
                variant === "peek"
                  ? "basis-[85%] pl-3 sm:basis-[55%] sm:pl-4 lg:basis-[42%]"
                  : "basis-full pl-0"
              }
            >
              <div
                className="group relative overflow-hidden rounded-2xl"
                style={{ border: `1px solid ${t.border}` }}
              >
                <div
                  className={
                    variant === "peek" ? "aspect-[4/3]" : "aspect-[16/9] sm:aspect-[21/9]"
                  }
                >
                  <GallerySlideImage
                    src={slide.src}
                    alt={slide.alt}
                    fallback={fallback}
                    eager={index < 2}
                    themeBg={t.bg}
                    themeSurface={t.surface}
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 px-4 py-3 sm:px-5 sm:py-4"
                  style={{
                    background: `linear-gradient(to top, ${t.bg}f0, transparent)`,
                  }}
                >
                  <p
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: t.accent }}
                  >
                    {slide.caption}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">{demo.brand}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: current === i ? 24 : 8,
                backgroundColor: current === i ? t.accent : t.border,
              }}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
            style={{
              backgroundColor: t.surface,
              border: `1px solid ${t.border}`,
              color: t.text,
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
            style={{
              backgroundColor: t.primary,
              color: t.primaryText,
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
