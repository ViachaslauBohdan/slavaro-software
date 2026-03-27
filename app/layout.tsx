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
  title: 'Landing Pages in 48 Hours & AI Automation | Volska',
  description: 'High-conversion landing pages built in 48 hours. AI automation to eliminate repetitive work. Start receiving client inquiries immediately. Save 10+ hours weekly with smart automation.',
  keywords: 'landing page design, landing page development, 48 hour website, fast website development, AI automation, business automation, lead generation website, conversion optimization, Telegram notifications, email automation, Google Sheets automation, small business website, startup landing page, lead capture, business process automation USA',
  authors: [{ name: 'Volska' }],
  creator: 'Volska',
  publisher: 'Volska',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://volska.com',
    siteName: 'Volska - Landing Pages & AI Automation',
    title: 'Landing Pages in 48 Hours & AI Automation | Volska',
    description: 'High-conversion landing pages delivered in 48 hours. AI automation that saves you 10+ hours weekly. Turn visitors into clients.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Volska - Landing Pages & AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Pages in 48 Hours & AI Automation | Volska',
    description: 'High-conversion landing pages in 48h. AI automation to save hours weekly.',
    images: ['/og-image.jpg'],
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
