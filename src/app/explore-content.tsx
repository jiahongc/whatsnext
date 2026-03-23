'use client'

import { useState } from 'react'
import { useQueryStates, parseAsArrayOf, parseAsString, parseAsBoolean } from 'nuqs'
import type { Destination, Continent, VibeTag } from '@/data/types'
import { filterDestinations, getActiveFilterCount } from '@/lib/filters'
import { FilterPanel } from '@/components/FilterPanel'
import { ActiveFilterChips } from '@/components/ActiveFilterChips'
import { SearchInput } from '@/components/SearchInput'
import { SortDropdown } from '@/components/SortDropdown'
import { DestinationGrid } from '@/components/DestinationGrid'
import { CollectionRow } from '@/components/CollectionRow'
import type { Collection } from '@/data/collections'
import { DeparturePicker } from '@/components/DeparturePicker'

export function ExploreContent({
  destinations,
}: {
  destinations: Destination[]
}) {
  const [departureCity, setDepartureCity] = useState('')
  const [activeCollection, setActiveCollection] = useState<Collection | null>(null)

  const [filters, setFilters] = useQueryStates(
    {
      continent: parseAsArrayOf(parseAsString, ',').withDefault([]),
      budget: parseAsArrayOf(parseAsString, ',').withDefault([]),
      vibe: parseAsArrayOf(parseAsString, ',').withDefault([]),
      month: parseAsArrayOf(parseAsString, ',').withDefault([]),
      english: parseAsBoolean.withDefault(false),
      q: parseAsString.withDefault(''),
      sort: parseAsString.withDefault('featured'),
    },
    { shallow: false }
  )

  const filterState = {
    continents: filters.continent as Continent[],
    budgetTiers: filters.budget.map(Number) as (1 | 2 | 3)[],
    vibes: filters.vibe as VibeTag[],
    travelMonths: filters.month.map(Number),
    englishFriendlyOnly: filters.english,
    searchQuery: filters.q,
    sortBy: (filters.sort || 'featured') as 'featured' | 'budget-low' | 'budget-high' | 'a-z',
  }

  const filtered = filterDestinations(destinations, filterState)
  const activeCount = getActiveFilterCount(filterState)

  function toggleInArray<T extends string>(arr: T[], item: T): T[] {
    return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]
  }

  function withViewTransition(cb: () => void) {
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      ;(document as unknown as { startViewTransition: (fn: () => void) => void }).startViewTransition(cb)
    } else {
      cb()
    }
  }

  function handleCollectionSelect(collection: Collection | null) {
    setActiveCollection(collection)
    if (collection) {
      withViewTransition(() => {
        setFilters({
          continent: collection.filter.continents || [],
          budget: collection.filter.budgetTiers?.map(String) || [],
          vibe: collection.filter.vibes || [],
          english: collection.filter.englishFriendly || false,
          month: [],
        })
      })
    } else {
      withViewTransition(() => {
        setFilters({ continent: [], budget: [], vibe: [], month: [], english: false })
      })
    }
  }

  function clearAll() {
    setActiveCollection(null)
    withViewTransition(() => {
      setFilters({ continent: [], budget: [], vibe: [], month: [], english: false, q: null })
    })
  }

  return (
    <>
      {/* Header */}
      <div className="border-b border-stone-200/40 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
          <h1 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">
            {departureCity
              ? `Destinations from ${departureCity}`
              : "What's Next?"}
          </h1>
          <p className="font-sans text-sm text-stone-500 mt-1">
            Discover your next travel destination
          </p>
        </div>
      </div>

      {/* Row 1: Origin + Search + Sort */}
      <div className="border-b border-stone-100 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <DeparturePicker value={departureCity} onChange={setDepartureCity} />
          <div className="flex-1" />
          <SearchInput
            value={filters.q}
            onChange={(q) => setFilters({ q: q || null })}
          />
          <SortDropdown
            value={filters.sort}
            onChange={(sort) => setFilters({ sort })}
          />
        </div>
      </div>

      {/* Row 2: Collection pills */}
      <div className="border-b border-stone-100 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 py-2.5">
          <CollectionRow
            onSelect={handleCollectionSelect}
            activeSlug={activeCollection?.slug || null}
          />
        </div>
      </div>

      {/* Row 3: More filters (expandable) */}
      <FilterPanel
        continents={filterState.continents}
        budgetTiers={filterState.budgetTiers}
        vibes={filterState.vibes}
        travelMonths={filterState.travelMonths}
        englishFriendlyOnly={filterState.englishFriendlyOnly}
        activeCount={activeCount}
        onContinentToggle={(c) => withViewTransition(() => setFilters({ continent: toggleInArray(filters.continent, c) }))}
        onBudgetToggle={(b) => withViewTransition(() => setFilters({ budget: toggleInArray(filters.budget, String(b)) }))}
        onVibeToggle={(v) => withViewTransition(() => setFilters({ vibe: toggleInArray(filters.vibe, v) }))}
        onMonthToggle={(m) => withViewTransition(() => setFilters({ month: toggleInArray(filters.month, String(m)) }))}
        onEnglishToggle={() => withViewTransition(() => setFilters({ english: !filters.english }))}
        onClearAll={clearAll}
      />

      {/* Row 4: Active filter chips + result count */}
      <ActiveFilterChips
        departureCity={departureCity}
        continents={filterState.continents}
        budgetTiers={filterState.budgetTiers}
        vibes={filterState.vibes}
        travelMonths={filterState.travelMonths}
        englishFriendlyOnly={filterState.englishFriendlyOnly}
        searchQuery={filterState.searchQuery}
        collectionName={activeCollection?.title || null}
        resultCount={filtered.length}
        totalCount={destinations.length}
        onRemoveContinent={(c) => withViewTransition(() => setFilters({ continent: toggleInArray(filters.continent, c) }))}
        onRemoveBudget={(b) => withViewTransition(() => setFilters({ budget: toggleInArray(filters.budget, String(b)) }))}
        onRemoveVibe={(v) => withViewTransition(() => setFilters({ vibe: toggleInArray(filters.vibe, v) }))}
        onRemoveMonth={(m) => withViewTransition(() => setFilters({ month: toggleInArray(filters.month, String(m)) }))}
        onRemoveEnglish={() => withViewTransition(() => setFilters({ english: false }))}
        onClearSearch={() => setFilters({ q: null })}
        onClearCollection={() => handleCollectionSelect(null)}
        onClearAll={clearAll}
      />

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <DestinationGrid
          destinations={filtered}
          totalCount={destinations.length}
          searchQuery={filterState.searchQuery}
          hasActiveFilters={activeCount > 0}
        />
      </div>
    </>
  )
}
