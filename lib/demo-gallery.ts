import type { DemoImage } from "@/lib/demo-images"
import { getDemoImage } from "@/lib/demo-images"

const GALLERY_CAPTIONS = [
  "Showcase",
  "Inside the experience",
  "Details that convert",
  "Real-world context",
] as const

/** Returns 3–4 gallery slides for a demo slug (local files when available). */
export function getDemoGallery(slug: string): (DemoImage & { caption: string })[] {
  const main = getDemoImage(slug)
  const slides: (DemoImage & { caption: string })[] = []

  for (let i = 1; i <= 3; i++) {
    slides.push({
      src: `/examples/gallery/${slug}-${i}.jpg`,
      alt: `${main.alt} — gallery ${i}`,
      caption: GALLERY_CAPTIONS[i - 1] ?? `Gallery ${i}`,
    })
  }

  // Always include hero image as first/extra slide for denser galleries
  return [
    { ...main, caption: "Hero visual" },
    ...slides,
  ]
}
