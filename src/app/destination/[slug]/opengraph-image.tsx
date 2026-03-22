import { ImageResponse } from 'next/og'
import rawDestinations from '@/data/destinations.json'
import type { Destination } from '@/data/types'

const destinations = rawDestinations as Destination[]

export const alt = 'Destination preview'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = destinations.find((d) => d.slug === slug)

  if (!destination) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1C1917',
            color: 'white',
            fontSize: 48,
          }}
        >
          Where Next Trip
        </div>
      ),
      { ...size }
    )
  }

  const hue = hashToHue(destination.slug)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 48,
          background: `linear-gradient(135deg, hsl(${hue}, 60%, 30%) 0%, hsl(${hue + 40}, 50%, 20%) 100%)`,
        }}
      >
        <div style={{ display: 'flex', fontSize: 40, marginBottom: 8 }}>
          {destination.flag}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.1,
          }}
        >
          {destination.name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: 'rgba(255,255,255,0.8)',
            marginTop: 8,
          }}
        >
          {destination.country} — {destination.vibeTags.join(' · ')}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            color: '#FCD34D',
            marginTop: 16,
          }}
        >
          whatsnext.travel
        </div>
      </div>
    ),
    { ...size }
  )
}

function hashToHue(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash % 360)
}
