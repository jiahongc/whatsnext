'use client'

import { useState } from 'react'
import { useQueryStates, parseAsArrayOf, parseAsString, parseAsBoolean } from 'nuqs'
import type { Destination, Continent, VibeTag } from '@/data/types'
import { filterDestinations, getActiveFilterCount } from '@/lib/filters'
import { FilterPanel } from '@/components/FilterPanel'
import { SearchInput } from '@/components/SearchInput'
import { SortDropdown } from '@/components/SortDropdown'
import { DestinationGrid } from '@/components/DestinationGrid'
import { DeparturePicker } from '@/components/DeparturePicker'

export function ExploreContent({
  destinations,
}: {
  destinations: Destination[]
}) {
  const [departureCity, setDepartureCity] = useState('')

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

  // Build filter summary text
  const summaryParts: string[] = []
  if (departureCity) summaryParts.push(`from ${departureCity}`)
  if (filterState.continents.length > 0) summaryParts.push(filterState.continents.join(', '))
  if (filterState.budgetTiers.length > 0) summaryParts.push(filterState.budgetTiers.map(t => '$'.repeat(t)).join('/'))
  if (filterState.vibes.length > 0) summaryParts.push(filterState.vibes.join(', '))

  return (
    <>
      {/* Header */}
      <div className="border-b border-stone-200/40 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">
                {departureCity
                  ? `Destinations from ${departureCity}`
                  : "What's Next?"
                }
              </h1>
              <p className="font-sans text-sm text-stone-400 mt-1">
                {filtered.length} of {destinations.length} destinations
                {summaryParts.length > 0 && ` · ${summaryParts.join(' · ')}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls: departure + search + sort */}
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

      {/* Filters */}
      <FilterPanel
        continents={filterState.continents}
        budgetTiers={filterState.budgetTiers}
        vibes={filterState.vibes}
        travelMonths={filterState.travelMonths}
        englishFriendlyOnly={filterState.englishFriendlyOnly}
        activeCount={activeCount}
        onContinentToggle={(c) =>
          withViewTransition(() => setFilters({ continent: toggleInArray(filters.continent, c) }))
        }
        onBudgetToggle={(b) =>
          withViewTransition(() => setFilters({ budget: toggleInArray(filters.budget, String(b)) }))
        }
        onVibeToggle={(v) =>
          withViewTransition(() => setFilters({ vibe: toggleInArray(filters.vibe, v) }))
        }
        onMonthToggle={(m) =>
          withViewTransition(() => setFilters({ month: toggleInArray(filters.month, String(m)) }))
        }
        onEnglishToggle={() =>
          withViewTransition(() => setFilters({ english: !filters.english }))
        }
        onClearAll={() =>
          withViewTransition(() =>
            setFilters({ continent: [], budget: [], vibe: [], month: [], english: false })
          )
        }
      />

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <DestinationGrid destinations={filtered} totalCount={destinations.length} />
      </div>
    </>
  )
}
