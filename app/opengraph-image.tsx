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
          background: "linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%)",
          color: "#1C2434",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600, marginBottom: 24, color: "#0F766E" }}>
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
        <div style={{ display: "flex", fontSize: 26, marginTop: 32, color: "#5B6578" }}>
          {site.tagline} · Serving clients worldwide
        </div>
      </div>
    ),
    { ...size }
  )
}
