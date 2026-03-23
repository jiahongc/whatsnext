'use client'

import type { Continent, VibeTag } from '@/data/types'
import { CONTINENT_LABELS, VIBE_LABELS, MONTH_LABELS } from '@/lib/constants'

interface ActiveFilterChipsProps {
  departureCity: string
  continents: Continent[]
  budgetTiers: (1 | 2 | 3)[]
  vibes: VibeTag[]
  travelMonths: number[]
  englishFriendlyOnly: boolean
  searchQuery: string
  collectionName: string | null
  resultCount: number
  totalCount: number
  onRemoveContinent: (c: Continent) => void
  onRemoveBudget: (b: 1 | 2 | 3) => void
  onRemoveVibe: (v: VibeTag) => void
  onRemoveMonth: (m: number) => void
  onRemoveEnglish: () => void
  onClearSearch: () => void
  onClearCollection: () => void
  onClearAll: () => void
}

export function ActiveFilterChips({
  departureCity,
  continents,
  budgetTiers,
  vibes,
  travelMonths,
  englishFriendlyOnly,
  searchQuery,
  collectionName,
  resultCount,
  totalCount,
  onRemoveContinent,
  onRemoveBudget,
  onRemoveVibe,
  onRemoveMonth,
  onRemoveEnglish,
  onClearSearch,
  onClearCollection,
  onClearAll,
}: ActiveFilterChipsProps) {
  const hasAnyFilter =
    continents.length > 0 ||
    budgetTiers.length > 0 ||
    vibes.length > 0 ||
    travelMonths.length > 0 ||
    englishFriendlyOnly ||
    searchQuery.trim() !== '' ||
    collectionName !== null

  return (
    <div className="max-w-7xl mx-auto px-6 py-3">
      {/* Result count */}
      <div className="flex items-center justify-between mb-2">
        <p className="font-sans text-sm text-stone-500">
          <span className="font-semibold text-stone-800">{resultCount}</span>
          {' '}of {totalCount} destinations
          {departureCity && (
            <span className="text-stone-400"> from {departureCity}</span>
          )}
        </p>
        {hasAnyFilter && (
          <button
            onClick={onClearAll}
            className="text-xs text-amber-600 hover:text-amber-700 font-sans cursor-pointer bg-transparent"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Chips */}
      {hasAnyFilter && (
        <div className="flex flex-wrap gap-1.5">
          {collectionName && (
            <Chip label={collectionName} onRemove={onClearCollection} />
          )}
          {searchQuery.trim() && (
            <Chip label={`"${searchQuery}"`} onRemove={onClearSearch} />
          )}
          {continents.map((c) => (
            <Chip key={c} label={CONTINENT_LABELS[c]} onRemove={() => onRemoveContinent(c)} />
          ))}
          {budgetTiers.map((b) => (
            <Chip key={b} label={'$'.repeat(b)} onRemove={() => onRemoveBudget(b)} />
          ))}
          {vibes.map((v) => (
            <Chip key={v} label={VIBE_LABELS[v]} onRemove={() => onRemoveVibe(v)} />
          ))}
          {travelMonths.map((m) => (
            <Chip key={m} label={MONTH_LABELS[m - 1]} onRemove={() => onRemoveMonth(m)} />
          ))}
          {englishFriendlyOnly && (
            <Chip label="English Friendly" onRemove={onRemoveEnglish} />
          )}
        </div>
      )}
    </div>
  )
}

function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-sans text-stone-700 bg-stone-100 pl-2.5 pr-1.5 py-1 rounded-md">
      {label}
      <button
        onClick={onRemove}
        className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-stone-300 transition-colors cursor-pointer text-stone-500 hover:text-stone-700"
        aria-label={`Remove ${label} filter`}
      >
        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </span>
  )
}
