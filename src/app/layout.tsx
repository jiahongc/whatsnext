import type { Metadata } from 'next'
import { DM_Serif_Display, Instrument_Sans } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import '@/styles/globals.css'

const serif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://whatsnext.travel'),
  title: {
    default: "What's Next — Discover Your Next Travel Destination",
    template: "%s | What's Next",
  },
  description:
    'Explore curated travel destinations worldwide. Filter by budget, vibe, weather, and more. Find your next adventure with insider guides and travel tips.',
  openGraph: {
    type: 'website',
    siteName: "What's Next",
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen antialiased">
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  )
}
