import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
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
  title: 'Landing Pages from €300 in 48 Hours | AI Automation | Volska',
  description: 'Professional landing pages starting at €300, delivered in 48 hours. Lead generation systems with Telegram/email notifications. AI automation for Excel, documents, and workflows. Save 10+ hours weekly. Based in Poland, serving USA & Europe.',
  keywords: 'landing page design, landing page €300, 48 hour website, fast landing page development, AI automation, business automation, lead generation website, Telegram notifications, email automation, Google Sheets automation, Excel automation, document automation, small business website, startup landing page, lead capture system, CRM integration, workflow automation, affordable web design, professional landing page, conversion optimization, local business website, service business website USA',
  authors: [{ name: 'Volska' }],
  creator: 'Volska',
  publisher: 'Volska',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://volska.com',
    siteName: 'Volska - Landing Pages & AI Automation',
    title: 'Landing Pages from €300 in 48h | AI Automation | Volska',
    description: 'Professional landing pages from €300, delivered in 48 hours. Lead systems with instant notifications. AI automation that saves 10+ hours weekly.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Volska - Landing Pages from €300 & AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Pages from €300 in 48h | Volska',
    description: 'Professional landing pages from €300 in 48 hours. AI automation to save 10+ hours weekly.',
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
