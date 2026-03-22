import type { Destination, FilterState } from '@/data/types'

export function filterDestinations(
  destinations: Destination[],
  filters: FilterState
): Destination[] {
  let results = destinations

  // Text search — OR across name, country, vibeTags, topThingsToDo
  if (filters.searchQuery.trim()) {
    const q = filters.searchQuery.toLowerCase().trim()
    results = results.filter((d) => {
      return (
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.vibeTags.some((v) => v.toLowerCase().includes(q)) ||
        d.topThingsToDo.some((t) => t.toLowerCase().includes(q)) ||
        d.description.toLowerCase().includes(q)
      )
    })
  }

  // Continent — OR within (show if destination matches ANY selected continent)
  if (filters.continents.length > 0) {
    results = results.filter((d) => filters.continents.includes(d.continent))
  }

  // Budget — OR within
  if (filters.budgetTiers.length > 0) {
    results = results.filter((d) => filters.budgetTiers.includes(d.budgetTier))
  }

  // Vibe — OR within (show if destination has ANY of the selected vibes)
  if (filters.vibes.length > 0) {
    results = results.filter((d) =>
      d.vibeTags.some((v) => filters.vibes.includes(v))
    )
  }

  // Travel months — OR within (show if any selected month is in bestMonths)
  if (filters.travelMonths.length > 0) {
    results = results.filter((d) =>
      filters.travelMonths.some((m) => d.bestMonths.includes(m))
    )
  }

  // English friendly — AND
  if (filters.englishFriendlyOnly) {
    results = results.filter((d) => d.englishFriendly)
  }

  // Sort
  switch (filters.sortBy) {
    case 'budget-low':
      results = [...results].sort((a, b) => a.budgetTier - b.budgetTier)
      break
    case 'budget-high':
      results = [...results].sort((a, b) => b.budgetTier - a.budgetTier)
      break
    case 'a-z':
      results = [...results].sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'featured':
    default:
      // Keep original order (curated)
      break
  }

  return results
}

export function getActiveFilterCount(filters: FilterState): number {
  let count = 0
  if (filters.continents.length > 0) count++
  if (filters.budgetTiers.length > 0) count++
  if (filters.vibes.length > 0) count++
  if (filters.travelMonths.length > 0) count++
  if (filters.englishFriendlyOnly) count++
  return count
}
