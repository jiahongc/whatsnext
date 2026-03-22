'use client'

import { useQueryStates, parseAsArrayOf, parseAsString, parseAsBoolean } from 'nuqs'
import type { Destination, Continent, VibeTag } from '@/data/types'
import { filterDestinations, getActiveFilterCount } from '@/lib/filters'
import { FilterPanel } from '@/components/FilterPanel'
import { SearchInput } from '@/components/SearchInput'
import { SortDropdown } from '@/components/SortDropdown'
import { DestinationGrid } from '@/components/DestinationGrid'

export function ExploreContent({
  destinations,
}: {
  destinations: Destination[]
}) {
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
    return arr.includes(item)
      ? arr.filter((x) => x !== item)
      : [...arr, item]
  }

  function handleViewTransition(cb: () => void) {
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      ;(document as unknown as { startViewTransition: (fn: () => void) => void }).startViewTransition(cb)
    } else {
      cb()
    }
  }

  return (
    <>
      <FilterPanel
        continents={filterState.continents}
        budgetTiers={filterState.budgetTiers}
        vibes={filterState.vibes}
        travelMonths={filterState.travelMonths}
        englishFriendlyOnly={filterState.englishFriendlyOnly}
        activeCount={activeCount}
        onContinentToggle={(c) =>
          handleViewTransition(() =>
            setFilters({ continent: toggleInArray(filters.continent, c) })
          )
        }
        onBudgetToggle={(b) =>
          handleViewTransition(() =>
            setFilters({ budget: toggleInArray(filters.budget, String(b)) })
          )
        }
        onVibeToggle={(v) =>
          handleViewTransition(() =>
            setFilters({ vibe: toggleInArray(filters.vibe, v) })
          )
        }
        onMonthToggle={(m) =>
          handleViewTransition(() =>
            setFilters({ month: toggleInArray(filters.month, String(m)) })
          )
        }
        onEnglishToggle={() =>
          handleViewTransition(() =>
            setFilters({ english: !filters.english })
          )
        }
        onClearAll={() =>
          handleViewTransition(() =>
            setFilters({
              continent: [],
              budget: [],
              vibe: [],
              month: [],
              english: false,
            })
          )
        }
      />

      {/* Search + Sort row */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <SearchInput
          value={filters.q}
          onChange={(q) => setFilters({ q: q || null })}
        />
        <SortDropdown
          value={filters.sort}
          onChange={(sort) => setFilters({ sort })}
        />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <DestinationGrid
          destinations={filtered}
          totalCount={destinations.length}
        />
      </div>
    </>
  )
}
