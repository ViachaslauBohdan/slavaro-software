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

// main trigger

export const metadata: Metadata = {
  metadataBase: new URL('https://volska.com'),
  title: {
    default: 'Landing Pages in 48 Hours + AI Automation | Volska Group',
    template: '%s | Volska Group',
  },
  description: 'Landing pages from €200-500 delivered in 48 hours, plus practical AI automation for reports and workflows. Based in Warsaw, Poland, serving EU and US clients.',
  keywords: 'landing page development, landing pages in 48 hours, AI automation services, business process automation, google sheets automation, google docs automation, workflow automation, react developer, nodejs developer, warsaw web developer, poland software engineer, lead generation website, service business landing page',
  authors: [{ name: 'Volska' }],
  creator: 'Volska',
  publisher: 'Volska',
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
    siteName: 'Volska Group',
    title: 'Landing Pages in 48 Hours + AI Automation | Volska Group',
    description: 'Get a conversion-focused landing page fast, or automate reporting and repetitive workflows with AI.',
    images: [
      {
        url: 'https://volska.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Volska Group - Landing Pages and AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Pages in 48 Hours + AI Automation',
    description: 'Landing pages from €200-500 and practical AI automation for service businesses.',
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
