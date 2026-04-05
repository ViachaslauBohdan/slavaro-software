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
    default: 'AI Workflow Automation | Volska Automation',
    template: '%s | Volska Automation',
  },
  description:
    'AI automation for reporting, lead routing, and operations: Google Docs/Sheets reports, CRM and Slack integrations, workflows from €500. Warsaw, Poland — EU & US.',
  keywords:
    'AI automation, workflow automation, business process automation, google sheets automation, google docs automation, CRM automation, lead routing, warsaw developer, poland software engineer',
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
    title: 'AI Workflow Automation | Volska Automation',
    description:
      'Automate reporting, lead intake, and handoffs between your tools. Practical AI workflows for growing teams.',
    images: [
      {
        url: 'https://volska.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Volska Automation — AI workflow automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation | Volska Automation',
    description: 'Reporting autopilot and AI workflow sprints from €500.',
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
