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
  title: 'Software Development Company | Volska - Custom Software Solutions USA',
  description: 'Leading AI-enabled software development company in the USA. End-to-end custom software development services, web development, mobile apps, cloud solutions, and dedicated development teams. Trusted by Fortune 500 companies.',
  keywords: 'software development company, custom software development, software development services, web development company, mobile app development, AI software development, cloud consulting, dedicated development teams, software outsourcing, enterprise software development, startup software development, fintech development, healthtech development, SaaS development, software engineering services USA',
  authors: [{ name: 'Volska' }],
  creator: 'Volska',
  publisher: 'Volska',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://volska.com',
    siteName: 'Volska - Software Development Company',
    title: 'Software Development Company | Volska - AI-Enabled Custom Solutions',
    description: 'End-to-end software development services with AI-enabled teams. Flexible, expert teams ready to start in under two weeks. On-budget delivery guaranteed.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Volska Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company | Volska',
    description: 'AI-enabled software development company. End-to-end services with flexible, expert teams.',
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
