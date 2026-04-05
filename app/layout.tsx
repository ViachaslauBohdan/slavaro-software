import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://volska.com'),
  title: {
    default: 'Landing Pages in 48 Hours | Volska Automation',
    template: '%s | Volska Automation',
  },
  description:
    'Landing pages from €200–500 delivered in 48 hours: call, same-day design, fully working page next day. Mobile-ready, SEO, instant lead alerts. Warsaw, Poland — EU & US clients.',
  keywords:
    'landing page development, landing pages in 48 hours, lead generation website, conversion landing page, service business landing page, warsaw web developer, poland software engineer',
  authors: [{ name: 'Volska Automation' }],
  creator: 'Volska Automation',
  publisher: 'Volska Automation',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://volska.com',
    siteName: 'Volska Automation',
    title: 'Landing Pages in 48 Hours | Volska Automation',
    description:
      'Call → same-day landing page design → fully working page next day. From €200. Instant Telegram & email lead notifications.',
    images: [
      {
        url: 'https://volska.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Volska Automation — Landing pages in 48 hours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Pages in 48 Hours | Volska Automation',
    description: 'Landing pages from €200–500. Same-day design, next-day live page.',
    images: ['https://volska.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://volska.com',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
