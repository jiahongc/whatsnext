'use client'

import { useState } from 'react'
import type { Destination } from '@/data/types'
import { DestinationCard } from './DestinationCard'
import { CARDS_PER_PAGE } from '@/lib/constants'

export function DestinationGrid({
  destinations,
  totalCount,
}: {
  destinations: Destination[]
  totalCount: number
}) {
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_PAGE)
  const visible = destinations.slice(0, visibleCount)
  const hasMore = visibleCount < destinations.length

  function handleLoadMore() {
    if ('startViewTransition' in document) {
      ;(document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        setVisibleCount((c) => c + CARDS_PER_PAGE)
      })
    } else {
      setVisibleCount((c) => c + CARDS_PER_PAGE)
    }
  }

  if (destinations.length === 0) {
    return (
      <div className="text-center py-20 px-6">
        <p className="font-serif text-xl text-stone-400 italic">
          No destinations match your filters — try casting a wider net.
        </p>
        <p className="font-sans text-sm text-stone-400 mt-3">
          Remove some filters to see more results.
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Results count */}
      <p className="font-sans text-sm text-stone-400 uppercase tracking-[0.03em] mb-5">
        Showing {Math.min(visibleCount, destinations.length)} of{' '}
        {destinations.length}
        {destinations.length < totalCount && ` (filtered from ${totalCount})`}
      </p>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {visible.map((destination, index) => (
          <DestinationCard
            key={destination.slug}
            destination={destination}
            index={index}
          />
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            className="group relative font-sans text-sm uppercase tracking-[0.06em] text-stone-600 bg-transparent border-none py-4 px-8 cursor-pointer hover:text-stone-900 transition-colors"
          >
            Load more
            <span className="absolute bottom-3 left-8 right-8 h-px bg-amber-500 transition-transform duration-300 origin-left group-hover:scale-x-110" />
          </button>
        </div>
      )}
    </div>
  )
}
