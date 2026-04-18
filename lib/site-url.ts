/**
 * Public site URL for metadata, sitemap, and JSON-LD.
 * - On Vercel, `VERCEL_URL` is set per deployment (preview and production).
 * - Override with `NEXT_PUBLIC_SITE_URL` when you need a fixed canonical (optional).
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "")
  if (explicit) return explicit
  const vercel = process.env.VERCEL_URL?.trim()
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "")
    return `https://${host}`
  }
  return "http://localhost:3000"
}

export function isProductionDeployment(): boolean {
  return process.env.VERCEL_ENV === "production"
}
