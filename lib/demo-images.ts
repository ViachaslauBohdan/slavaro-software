export type DemoImage = {
  src: string
  alt: string
}

/** Local preview images — bundled in /public/examples for fast, reliable loading */
export const DEMO_IMAGES: Record<string, DemoImage> = {
  logistics: {
    src: "/examples/logistics.jpg",
    alt: "Trucks and freight logistics yard",
  },
  pharma: {
    src: "/examples/pharma.jpg",
    alt: "Pharmaceutical laboratory research",
  },
  events: {
    src: "/examples/events.jpg",
    alt: "Corporate event with stage lighting",
  },
  beauty: {
    src: "/examples/beauty.jpg",
    alt: "Beauty salon interior",
  },
  legal: {
    src: "/examples/legal.jpg",
    alt: "Law office with legal books",
  },
  restaurant: {
    src: "/examples/restaurant.jpg",
    alt: "Fine dining restaurant table setting",
  },
  fitness: {
    src: "/examples/fitness.jpg",
    alt: "Fitness gym with weights",
  },
  "real-estate": {
    src: "/examples/real-estate.jpg",
    alt: "Modern residential property exterior",
  },
  healthcare: {
    src: "/examples/healthcare.jpg",
    alt: "Healthcare clinic consultation",
  },
  education: {
    src: "/examples/education.jpg",
    alt: "Students learning in a classroom",
  },
  construction: {
    src: "/examples/construction.jpg",
    alt: "Construction site with workers",
  },
  automotive: {
    src: "/examples/automotive.jpg",
    alt: "Premium car in showroom",
  },
  travel: {
    src: "/examples/travel.jpg",
    alt: "Travel planning with map and camera",
  },
  finance: {
    src: "/examples/finance.jpg",
    alt: "Finance and accounting workspace",
  },
  cleaning: {
    src: "/examples/cleaning.jpg",
    alt: "Clean modern home interior",
  },
  photography: {
    src: "/examples/photography.jpg",
    alt: "Professional camera and photography",
  },
  "saas-mvp": {
    src: "/examples/saas-mvp.jpg",
    alt: "SaaS analytics dashboard on screen",
  },
  "web-platform": {
    src: "/examples/web-platform.jpg",
    alt: "Web platform on laptop",
  },
  "product-refresh": {
    src: "/examples/product-refresh.jpg",
    alt: "Product design and UI refresh",
  },
  "product-rescue": {
    src: "/examples/product-rescue.jpg",
    alt: "Software development rescue",
  },
  "business-automation": {
    src: "/examples/business-automation.jpg",
    alt: "Business automation and workflows",
  },
  "ai-assistant": {
    src: "/examples/ai-assistant.jpg",
    alt: "AI assistant technology",
  },
}

export function getDemoImage(slug: string): DemoImage {
  return (
    DEMO_IMAGES[slug] ?? {
      src: "/examples/logistics.jpg",
      alt: "Landing page preview",
    }
  )
}
