import { Suspense } from 'react'
import type { Metadata } from 'next'
import rawDestinations from '@/data/destinations.json'
import type { Destination } from '@/data/types'
import { ExploreContent } from './explore-content'

const destinations = rawDestinations as Destination[]

export const metadata: Metadata = {
  title: 'Explore Destinations',
  description:
    'Browse and filter 40+ travel destinations by continent, budget, vibe, weather, and more. Find your perfect next trip.',
}

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-warm-50 relative z-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <h1 className="font-serif text-4xl text-stone-900 tracking-tight">
          Explore Destinations
        </h1>
        <p className="font-sans text-stone-400 mt-1 pl-0.5">
          Find your next adventure
        </p>
      </div>

      {/* Suspense boundary for nuqs useSearchParams */}
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-warm-100 rounded-[2px] animate-pulse h-[340px]"
                />
              ))}
            </div>
          </div>
        }
      >
        <ExploreContent destinations={destinations} />
      </Suspense>
    </main>
  )
}
