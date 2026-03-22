import { Suspense } from 'react'
import type { Metadata } from 'next'
import rawDestinations from '@/data/destinations.json'
import type { Destination } from '@/data/types'
import { ExploreContent } from './explore-content'

const destinations = rawDestinations as Destination[]

export const metadata: Metadata = {
  title: 'Explore Destinations',
  description:
    'Browse and filter 65+ travel destinations by continent, budget, vibe, weather, and more. Find your perfect next trip.',
}

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-warm-50 relative z-10">
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="h-8 w-64 bg-stone-100 rounded animate-pulse mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-stone-100 rounded-lg animate-pulse h-[320px]" />
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
