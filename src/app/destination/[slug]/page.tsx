import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import rawDestinations from '@/data/destinations.json'
import type { Destination } from '@/data/types'
import { MICHELIN_RESTAURANTS, LOCAL_FOOD_RECS } from '@/data/michelin-restaurants'
import { DestinationHero } from '@/components/destination/DestinationHero'
import { ItinerarySection } from '@/components/destination/ItinerarySection'
import { PointsSection } from '@/components/destination/PointsSection'
import { RedditSection } from '@/components/destination/RedditSection'
import { WeatherInfo } from '@/components/destination/WeatherInfo'
import { ThingsToDoSection } from '@/components/destination/ThingsToDoSection'
import { CityInfoSection } from '@/components/destination/CityInfoSection'
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

        <DestinationHero destination={d} />

        <div className="max-w-4xl mx-auto px-6 py-8 space-y-10">
          {/* ── OVERVIEW ── */}
          <section>
            <p className="font-sans text-lg text-stone-600 leading-relaxed">
              {d.description}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
              {d.vibeTags.map((tag) => (
                <span key={tag} className="text-xs text-stone-600 tracking-[0.04em] lowercase border-b-[1.5px] border-amber-400 pb-px">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* ── YOUR TRIP (dynamic, shows when departure set) ── */}
          <TravelFromBanner
            destinationName={d.name}
            destLat={d.coordinates.lat}
            destLng={d.coordinates.lng}
            flightCost={d.flightCost}
            visaNote={d.visaNote}
            cityInfo={d.cityInfo}
            bestMonths={d.bestMonths}
          />

          {/* ── BEFORE YOU GO ── */}
          <div className="space-y-8">
            {/* Quick facts as dense inline row */}
            <section>
              <h2 className="font-serif text-2xl text-stone-900 mb-4">Before You Go</h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                <MiniFactCard icon="💱" label="Currency" value={`${d.cityInfo.currency.symbol} ${d.cityInfo.currency.code}`} sub={d.cityInfo.currency.exchangeRate} />
                <MiniFactCard icon="🗣" label="Language" value={d.language} sub={d.englishFriendly ? 'English friendly' : 'Limited English'} />
                <MiniFactCard icon="💧" label="Water" value={d.cityInfo.waterSafety === 'safe' ? 'Safe' : d.cityInfo.waterSafety === 'boil' ? 'Boil' : 'Bottled'} />
                <MiniFactCard icon="🔌" label="Plug" value={d.cityInfo.plugType.split(' ')[0] + ' ' + (d.cityInfo.plugType.split(' ')[1] || '')} />
                <MiniFactCard icon="🕐" label="Timezone" value={d.cityInfo.timeZone.split(' ')[0]} />
                <MiniFactCard
                  icon="💰"
                  label="Tipping"
                  value={d.cityInfo.tipping.culture === 'not-expected' ? 'No tip' : d.cityInfo.tipping.culture === 'expected' ? '15-20%' : d.cityInfo.tipping.culture === 'included' ? 'Included' : 'Appreciated'}
                />
              </div>
            </section>

            {/* Weather + best months combined */}
            <WeatherInfo bestMonths={d.bestMonths} avgTemps={d.cityInfo.avgTempByMonth} />

            {/* Transportation — compact grid */}
            <section>
              <h3 className="font-sans text-sm font-semibold text-stone-900 mb-2 flex items-center gap-2">
                <span>🚌</span> Getting Around
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {d.cityInfo.transportation.map((t, i) => (
                  <div key={i} className="bg-white border border-stone-200/80 rounded-lg px-3 py-2.5 text-center">
                    <p className="font-sans text-sm font-medium text-stone-900">{t.mode}</p>
                    <p className="font-sans text-xs text-amber-600 font-medium mt-0.5">{formatCostRange(t.cost)}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ── THINGS TO DO ── */}
          <ThingsToDoSection items={d.topThingsToDo} />

          <ItinerarySection itinerary={d.itinerary} />

          {/* ── WHERE TO EAT ── */}
          <MichelinSection
            restaurants={michelinRestaurants}
            localFood={localFood}
            cityName={d.name}
          />

          {/* ── PLAN YOUR TRIP ── */}
          <section className="space-y-8">
            <h2 className="font-serif text-2xl text-stone-900">Plan Your Trip</h2>

            <PointsSection points={d.pointsAndMiles} />

            <RedditSection communities={d.redditCommunities} />

            {/* Map */}
            <div>
              <h3 className="font-sans text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
                <span>📍</span> Location
              </h3>
              <MapLoader name={d.name} lat={d.coordinates.lat} lng={d.coordinates.lng} />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

function MiniFactCard({ icon, label, value, sub }: { icon: string; label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white border border-stone-200/80 rounded-lg p-2.5 text-center">
      <span className="text-base">{icon}</span>
      <p className="font-sans text-[10px] text-stone-400 uppercase tracking-wider mt-1">{label}</p>
      <p className="font-sans text-xs font-semibold text-stone-900 mt-0.5 leading-tight">{value}</p>
      {sub && <p className="font-sans text-[10px] text-stone-400 mt-0.5 truncate">{sub}</p>}
    </div>
  )
}

function formatCostRange(cost: string): string {
  return cost.replace(/\$(\d[\d,.]*)\s*-\s*(\d)/g, '$$$1–$$$2')
}
