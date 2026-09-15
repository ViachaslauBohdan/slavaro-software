"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import type { DemoLanding } from "@/lib/demo-landings"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function DemoTestimonialsSlider({
  demo,
  items,
}: {
  demo: DemoLanding
  items: { quote: string; author: string; role: string }[]
}) {
  const t = demo.theme
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
    if (!api) return
    const id = window.setInterval(() => {
      if (api.canScrollNext()) api.scrollNext()
      else api.scrollTo(0)
    }, 6000)
    return () => window.clearInterval(id)
  }, [api])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true, align: "start" }}>
        <CarouselContent className="-ml-4">
          {items.map((item) => (
            <CarouselItem key={item.author} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <figure
                className="flex h-full flex-col rounded-2xl p-6"
                style={{ backgroundColor: t.bg, border: `1px solid ${t.border}` }}
              >
                <Quote className="mb-4 h-8 w-8 opacity-40" style={{ color: t.accent }} />
                <blockquote className="flex-1 text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${t.primary}, ${t.accent})`,
                      color: t.primaryText,
                    }}
                  >
                    {initials(item.author)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.author}</p>
                    <p className="text-xs" style={{ color: t.muted }}>
                      {item.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: current === i ? 22 : 8,
                backgroundColor: current === i ? t.accent : t.border,
              }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: t.bg, border: `1px solid ${t.border}` }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: t.primary, color: t.primaryText }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
