import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import rawDestinations from '@/data/destinations.json'
import type { Destination } from '@/data/types'
import { MICHELIN_RESTAURANTS, LOCAL_FOOD_RECS } from '@/data/michelin-restaurants'
import { formatBestMonths } from '@/lib/constants'
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
  const googleFlightsUrl = `https://www.google.com/travel/flights?q=flights+to+${encodeURIComponent(d.name)}+${encodeURIComponent(d.country)}`

  return (
    <>
      <DestinationJsonLd destination={d} />
      <main className="min-h-screen bg-warm-50 relative z-10">
        {/* Back link */}
        <div className="absolute top-4 left-4 z-30">
          <Link href="/explore" className="flex items-center gap-1.5 text-sm font-sans text-white/80 hover:text-white bg-stone-900/30 backdrop-blur-sm px-3 py-1.5 rounded transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>

        {/* Hero — only name/country/flag, no other overlays */}
        <DestinationHero destination={d} />

        <div className="max-w-4xl mx-auto px-6 py-8 space-y-10">

          {/* ── ABOUT ── */}
          <CityDescription
            description={d.description}
            tagline={d.tagline}
            extendedDescription={d.extendedDescription}
            vibeTags={d.vibeTags}
          />

          {/* ── YOUR TRIP (departure-aware) — positioned high ── */}
          <TravelFromBanner
            destinationName={d.name}
            destLat={d.coordinates.lat}
            destLng={d.coordinates.lng}
            flightCost={d.flightCost}
            visaNote={d.visaNote}
            cityInfo={d.cityInfo}
            bestMonths={d.bestMonths}
          />

          {/* ── PLAN YOUR TRIP (Google Flights + Points) ── */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-stone-900">Plan Your Trip</h2>
            <GoogleFlightsLink destinationName={d.name} url={googleFlightsUrl} />
            <PointsSection points={d.pointsAndMiles} />
          </section>

          {/* ── BEFORE YOU GO ── */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-stone-900">Before You Go</h2>

            {/* Dense fact strip — all the practical info */}
            <div className="bg-white border border-stone-200/80 rounded-lg p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm font-sans">
                <FactItem label="Budget" value={'$'.repeat(d.budgetTier)} sub={`Est. flight: ${d.flightCost}`} />
                <FactItem label="Language" value={d.language} sub={d.englishFriendly ? 'English widely spoken' : 'Limited English'} />
                <FactItem label="Currency" value={`${d.cityInfo.currency.symbol} ${d.cityInfo.currency.code}`} sub={d.cityInfo.currency.exchangeRate} />
                <FactItem label="Tap Water" value={d.cityInfo.waterSafety === 'safe' ? 'Safe to drink' : d.cityInfo.waterSafety === 'boil' ? 'Boil first' : 'Buy bottled'} />
                <FactItem label="Plug Type" value={d.cityInfo.plugType} />
                <FactItem label="Timezone" value={d.cityInfo.timeZone} />
                <FactItem label="Tipping" value={
                  d.cityInfo.tipping.culture === 'not-expected' ? 'Not expected' :
                  d.cityInfo.tipping.culture === 'expected' ? 'Expected (15-20%)' :
                  d.cityInfo.tipping.culture === 'included' ? 'Usually included' : 'Appreciated'
                } />
                <FactItem label="Emergency" value={d.cityInfo.emergencyNumber} />
                {d.visaNote && <FactItem label="Visa" value={d.visaNote} />}
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white border border-stone-200/80 rounded-lg p-4">
              <p className="text-[11px] font-sans text-stone-400 uppercase tracking-wider font-medium mb-2">Getting Around</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {d.cityInfo.transportation.map((t, i) => (
                  <div key={i} className="text-center">
                    <p className="font-sans text-sm font-medium text-stone-900">{t.mode}</p>
                    <p className="font-sans text-xs text-amber-600 font-medium">{formatCostRange(t.cost)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather — collapsible */}
            <WeatherInfo bestMonths={d.bestMonths} avgTemps={d.cityInfo.avgTempByMonth} />
          </section>

          {/* ── THINGS TO DO ── */}
          <ThingsToDoSection items={d.topThingsToDo} />
          <ItinerarySection itinerary={d.itinerary} />

          {/* ── WHERE TO EAT ── */}
          <MichelinSection restaurants={michelinRestaurants} localFood={localFood} cityName={d.name} />

          {/* ── COMMUNITY ── */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-stone-900">Community &amp; Resources</h2>
            <RedditSection communities={d.redditCommunities} />
          </section>

          {/* ── MAP — clean, no overlay ── */}
          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">Location</h2>
            <MapLoader name={d.name} lat={d.coordinates.lat} lng={d.coordinates.lng} />
          </section>
        </div>
      </main>
    </>
  )
}

function FactItem({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div>
      <p className="text-[10px] text-stone-400 uppercase tracking-wider">{label}</p>
      <p className="text-stone-800 font-medium text-sm leading-tight">{value}</p>
      {sub && <p className="text-stone-400 text-[11px] mt-0.5">{sub}</p>}
    </div>
  )
}

function GoogleFlightsLink({ destinationName, url }: { destinationName: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white border border-stone-200/80 rounded-lg px-4 py-3 hover:border-blue-300 hover:bg-blue-50/20 transition-colors group"
    >
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="font-sans text-sm font-medium text-stone-900 group-hover:text-blue-600 transition-colors">
          Search flights to {destinationName}
        </p>
        <p className="font-sans text-xs text-stone-400">Google Flights</p>
      </div>
      <svg className="w-4 h-4 text-stone-300 group-hover:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}

function formatCostRange(cost: string): string {
  return cost.replace(/\$(\d[\d,.]*)\s*-\s*(\d)/g, '$$$1–$$$2')
}
