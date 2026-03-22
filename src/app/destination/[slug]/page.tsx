import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import rawDestinations from '@/data/destinations.json'
import type { Destination } from '@/data/types'
import { MICHELIN_RESTAURANTS, LOCAL_FOOD_RECS } from '@/data/michelin-restaurants'
import { DestinationHero } from '@/components/destination/DestinationHero'
import { CityDescription } from '@/components/destination/CityDescription'
import { ItinerarySection } from '@/components/destination/ItinerarySection'
import { PointsSection } from '@/components/destination/PointsSection'
import { RedditSection } from '@/components/destination/RedditSection'
import { WeatherInfo } from '@/components/destination/WeatherInfo'
import { ThingsToDoSection } from '@/components/destination/ThingsToDoSection'
import { MichelinSection } from '@/components/destination/MichelinSection'
import { DestinationJsonLd } from '@/components/DestinationJsonLd'
import { MapLoader } from '@/components/destination/MapLoader'
import { TravelFromBanner } from './travel-from-banner'

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
  const d = getDestination(slug)
  if (!d) return { title: 'Not Found' }

  return {
    title: `${d.name}: Travel Guide & Things to Do`,
    description: `Discover ${d.name} in ${d.country}. ${d.description}`,
    alternates: { canonical: `/destination/${d.slug}` },
    openGraph: { title: `${d.name} — Travel Guide`, description: d.description, type: 'article' },
  }
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const d = getDestination(slug)
  if (!d) notFound()

  const michelinRestaurants = MICHELIN_RESTAURANTS[d.slug] || []
  const localFood = LOCAL_FOOD_RECS[d.slug] || []

  // Google Flights link
  const googleFlightsBaseUrl = `https://www.google.com/travel/flights?q=flights+to+${encodeURIComponent(d.name)}+${encodeURIComponent(d.country)}`

  return (
    <>
      <DestinationJsonLd destination={d} />

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

        {/* HERO with gallery + key info badges */}
        <DestinationHero destination={d} />

        <div className="max-w-4xl mx-auto px-6 py-8 space-y-10">

          {/* ── ABOUT ── */}
          <CityDescription
            description={d.description}
            extendedDescription={d.extendedDescription}
            vibeTags={d.vibeTags}
          />

          {/* ── YOUR TRIP (departure-aware) ── */}
          <TravelFromBanner
            destinationName={d.name}
            destLat={d.coordinates.lat}
            destLng={d.coordinates.lng}
            flightCost={d.flightCost}
            visaNote={d.visaNote}
            cityInfo={d.cityInfo}
            bestMonths={d.bestMonths}
          />

          {/* ── BEFORE YOU GO (consolidated, dense) ── */}
          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">Before You Go</h2>

            {/* Dense fact strip */}
            <div className="bg-white border border-stone-200/80 rounded-lg p-4 mb-4">
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-sans">
                <FactItem label="Currency" value={`${d.cityInfo.currency.symbol} ${d.cityInfo.currency.code}`} sub={d.cityInfo.currency.exchangeRate} />
                <Divider />
                <FactItem label="Water" value={d.cityInfo.waterSafety === 'safe' ? '✅ Safe to drink' : d.cityInfo.waterSafety === 'boil' ? '⚠️ Boil first' : '🚰 Buy bottled'} />
                <Divider />
                <FactItem label="Plug" value={d.cityInfo.plugType} />
                <Divider />
                <FactItem label="Timezone" value={d.cityInfo.timeZone} />
                <Divider />
                <FactItem label="Tipping" value={
                  d.cityInfo.tipping.culture === 'not-expected' ? 'Not expected' :
                  d.cityInfo.tipping.culture === 'expected' ? 'Expected (15-20%)' :
                  d.cityInfo.tipping.culture === 'included' ? 'Usually included' : 'Appreciated'
                } sub={d.cityInfo.tipping.details} />
                <Divider />
                <FactItem label="Emergency" value={d.cityInfo.emergencyNumber} />
              </div>
            </div>

            {/* Transportation — compact row */}
            <div className="bg-white border border-stone-200/80 rounded-lg p-4 mb-4">
              <p className="text-[11px] font-sans text-stone-400 uppercase tracking-wider font-medium mb-2">Getting Around</p>
              <div className="flex flex-wrap gap-3">
                {d.cityInfo.transportation.map((t, i) => (
                  <span key={i} className="font-sans text-sm text-stone-700">
                    <span className="font-medium">{t.mode}</span>
                    <span className="text-amber-600 ml-1">{formatCostRange(t.cost)}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Weather + best months */}
            <WeatherInfo bestMonths={d.bestMonths} avgTemps={d.cityInfo.avgTempByMonth} />
          </section>

          {/* ── THINGS TO DO ── */}
          <ThingsToDoSection items={d.topThingsToDo} />
          <ItinerarySection itinerary={d.itinerary} />

          {/* ── WHERE TO EAT (collapsible Michelin + local food) ── */}
          <MichelinSection
            restaurants={michelinRestaurants}
            localFood={localFood}
            cityName={d.name}
          />

          {/* ── PLAN YOUR TRIP ── */}
          <section className="space-y-6">
            <h2 className="font-serif text-2xl text-stone-900">Plan Your Trip</h2>

            {/* Google Flights link */}
            <GoogleFlightsLink
              destinationName={d.name}
              slug={d.slug}
              baseUrl={googleFlightsBaseUrl}
            />

            <PointsSection points={d.pointsAndMiles} />
            <RedditSection communities={d.redditCommunities} />

            {/* Map with attractions */}
            <div>
              <h3 className="font-sans text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
                <span>📍</span> Explore the Area
              </h3>
              <MapLoader
                name={d.name}
                lat={d.coordinates.lat}
                lng={d.coordinates.lng}
                pois={d.topThingsToDo}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

function FactItem({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div>
      <span className="text-[11px] text-stone-400 uppercase tracking-wider block">{label}</span>
      <span className="text-stone-800 font-medium">{value}</span>
      {sub && <span className="text-stone-400 text-xs ml-1">({sub})</span>}
    </div>
  )
}

function Divider() {
  return <span className="hidden sm:block w-px h-8 bg-stone-100 self-center" />
}

function GoogleFlightsLink({ destinationName, slug, baseUrl }: { destinationName: string; slug: string; baseUrl: string }) {
  return (
    <a
      href={baseUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white border border-stone-200/80 rounded-lg px-5 py-4 hover:border-blue-300 hover:bg-blue-50/30 transition-colors group"
    >
      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="font-sans text-sm font-semibold text-stone-900 group-hover:text-blue-600 transition-colors">
          Search Flights to {destinationName}
        </p>
        <p className="font-sans text-xs text-stone-400">
          Google Flights — compare prices and find deals
        </p>
      </div>
      <svg className="w-4 h-4 text-stone-300 group-hover:text-blue-400 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}

function formatCostRange(cost: string): string {
  return cost.replace(/\$(\d[\d,.]*)\s*-\s*(\d)/g, '$$$1–$$$2')
}
