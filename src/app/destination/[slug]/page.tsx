import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import rawDestinations from '@/data/destinations.json'
import type { Destination } from '@/data/types'
import { DestinationHero } from '@/components/destination/DestinationHero'
import { ItinerarySection } from '@/components/destination/ItinerarySection'
import { PointsSection } from '@/components/destination/PointsSection'
import { WeatherInfo } from '@/components/destination/WeatherInfo'
import { ThingsToDoSection } from '@/components/destination/ThingsToDoSection'
import { DestinationJsonLd } from '@/components/DestinationJsonLd'

const destinations = rawDestinations as Destination[]

function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const destination = getDestination(slug)
  if (!destination) return { title: 'Not Found' }

  return {
    title: `${destination.name}: Travel Guide & Things to Do`,
    description: `Discover ${destination.name} in ${destination.country}. ${destination.description}`,
    alternates: {
      canonical: `/destination/${destination.slug}`,
    },
    openGraph: {
      title: `${destination.name} — Travel Guide`,
      description: destination.description,
      type: 'article',
    },
  }
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = getDestination(slug)
  if (!destination) notFound()

  return (
    <>
      <DestinationJsonLd destination={destination} />

      <main className="min-h-screen bg-warm-50 relative z-10">
        {/* Back link */}
        <div className="absolute top-4 left-4 z-30">
          <Link
            href="/explore"
            className="flex items-center gap-1.5 text-sm font-sans text-white/80 hover:text-white bg-stone-900/30 backdrop-blur-sm px-3 py-1.5 rounded transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Explore
          </Link>
        </div>

        <DestinationHero destination={destination} />

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
          {/* Description */}
          <section>
            <p className="font-sans text-lg text-stone-600 leading-relaxed">
              {destination.description}
            </p>
            {/* Vibe tags */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-4">
              {destination.vibeTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-stone-600 tracking-[0.04em] lowercase border-b-[1.5px] border-amber-400 pb-px"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <ItinerarySection itinerary={destination.itinerary} />

          <ThingsToDoSection items={destination.topThingsToDo} />

          <WeatherInfo bestMonths={destination.bestMonths} />

          <PointsSection pointsTip={destination.pointsTip} />

          {/* Map placeholder — Mapbox will be lazy-loaded here */}
          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">
              Location
            </h2>
            <div className="aspect-video bg-stone-100 rounded-[2px] flex items-center justify-center border border-stone-200">
              <p className="font-sans text-sm text-stone-400">
                📍 {destination.coordinates.lat.toFixed(4)}, {destination.coordinates.lng.toFixed(4)}
                <br />
                <span className="text-xs">Map loading...</span>
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
