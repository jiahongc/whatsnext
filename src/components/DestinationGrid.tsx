'use client'

import { useState } from 'react'
import type { Destination } from '@/data/types'
import { DestinationCard } from './DestinationCard'
import { CARDS_PER_PAGE } from '@/lib/constants'

export function DestinationGrid({
  destinations,
  totalCount,
  searchQuery,
  hasActiveFilters,
}: {
  destinations: Destination[]
  totalCount: number
  searchQuery?: string
  hasActiveFilters?: boolean
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
    const isSearchMiss = searchQuery && searchQuery.trim().length > 0
    return (
      <div className="text-center py-16 px-6">
        {isSearchMiss ? (
          <>
            <p className="font-serif text-xl text-stone-500">
              No destinations match &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="font-sans text-sm text-stone-400 mt-2">
              Try a city, country, or vibe — like &ldquo;beach&rdquo;, &ldquo;Tokyo&rdquo;, or &ldquo;budget&rdquo;
            </p>
          </>
        ) : hasActiveFilters ? (
          <>
            <p className="font-serif text-xl text-stone-500">
              No destinations match your filters
            </p>
            <p className="font-sans text-sm text-stone-400 mt-2">
              Try removing a filter or browse all {totalCount} destinations
            </p>
          </>
        ) : (
          <p className="font-serif text-xl text-stone-500">
            No destinations available
          </p>
        )}
      </div>
    )
  }

  return (
    <div>
      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} />
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
