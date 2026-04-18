import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { getSiteUrl, isProductionDeployment } from "@/lib/site-url"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl()
  const ogImage = `${siteUrl}/og-image.jpg`
  const indexable = isProductionDeployment()

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Same-Day Design · 48h Landing Delivery | Volska Landing",
      template: "%s | Volska Landing",
    },
    description:
      "Fast landing pages from €200–500: page design the same day after your call, full landing page delivered within 48 hours. Mobile-ready, SEO, instant lead alerts. Warsaw, Poland — EU & US clients.",
    keywords:
      "landing page development, landing pages in 48 hours, lead generation website, conversion landing page, service business landing page, warsaw web developer, poland software engineer",
    authors: [{ name: "Volska Landing" }],
    creator: "Volska Landing",
    publisher: "Volska Landing",
    category: "technology",
    robots: indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: siteUrl,
      siteName: "Volska Landing",
      title: "Same-Day Design · 48h Landing Delivery | Volska Landing",
      description:
        "Page design same day · full landing page in 48 hours. From €200. Instant Telegram & email lead notifications.",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Volska Landing — same-day design, landing in 48 hours",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Same-Day Design · 48h Landing Delivery | Volska Landing",
      description:
        "Landing pages from €200–500. Same-day page design, full landing delivered in 48 hours.",
      images: [ogImage],
    },
    alternates: {
      canonical: siteUrl,
    },
    icons: {
      icon: [
        {
          url: "/icon-light-32x32.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/icon.svg",
          type: "image/svg+xml",
        },
      ],
      apple: "/apple-icon.png",
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
