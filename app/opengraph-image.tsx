import { ImageResponse } from "next/og"
import { site } from "@/lib/site-content"

export const alt = `${site.name} — technical delivery partner for MVPs and web applications`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(180deg, #07111F 0%, #0B1D35 100%)",
          color: "#F8FAFC",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600, marginBottom: 24, color: "#A8B3C5" }}>
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          MVP and Web Application Development
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 32, color: "#3B82F6" }}>
          {site.tagline} · Serving the United States
        </div>
      </div>
    ),
    { ...size }
  )
}
