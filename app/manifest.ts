import type { MetadataRoute } from "next"
import { site } from "@/lib/site-content"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "SLAVARO",
    description:
      "Senior technical delivery partner for MVP development, SaaS, web applications, product rescue, and AI integration.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111F",
    theme_color: "#07111F",
    lang: "en",
    icons: [
      {
        src: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
