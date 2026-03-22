'use client'

import { useState } from 'react'
import type { Continent, VibeTag } from '@/data/types'
import {
  CONTINENT_LABELS,
  VIBE_LABELS,
  MONTH_LABELS,
} from '@/lib/constants'

interface FilterPanelProps {
  continents: Continent[]
  budgetTiers: (1 | 2 | 3)[]
  vibes: VibeTag[]
  travelMonths: number[]
  englishFriendlyOnly: boolean
  activeCount: number
  onContinentToggle: (c: Continent) => void
  onBudgetToggle: (b: 1 | 2 | 3) => void
  onVibeToggle: (v: VibeTag) => void
  onMonthToggle: (m: number) => void
  onEnglishToggle: () => void
  onClearAll: () => void
}

export function FilterPanel({
  continents,
  budgetTiers,
  vibes,
  travelMonths,
  englishFriendlyOnly,
  activeCount,
  onContinentToggle,
  onBudgetToggle,
  onVibeToggle,
  onMonthToggle,
  onEnglishToggle,
  onClearAll,
}: FilterPanelProps) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="border-b border-stone-200/60 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Toggle bar */}
        <div className="flex items-center justify-between py-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm font-sans text-stone-600 hover:text-stone-900 transition-colors cursor-pointer bg-transparent"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
            {activeCount > 0 && (
              <span className="bg-amber-500 text-stone-900 text-[11px] font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                {activeCount}
              </span>
            )}
            <svg
              className={`w-3 h-3 text-stone-400 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Quick filter pills — always visible */}
          <div className="hidden md:flex items-center gap-1.5 overflow-x-auto">
            {(['asia', 'europe', 'north-america', 'south-america', 'africa', 'oceania'] as Continent[]).map((c) => (
              <QuickPill
                key={c}
                active={continents.includes(c)}
                onClick={() => onContinentToggle(c)}
              >
                {CONTINENT_LABELS[c]}
              </QuickPill>
            ))}
            <span className="w-px h-4 bg-stone-200 mx-1" />
            {([1, 2, 3] as const).map((b) => (
              <QuickPill
                key={b}
                active={budgetTiers.includes(b)}
                onClick={() => onBudgetToggle(b)}
              >
                {'$'.repeat(b)}
              </QuickPill>
            ))}
          </div>

          {activeCount > 0 && (
            <button
              onClick={onClearAll}
              className="text-xs text-amber-600 hover:text-amber-700 font-sans cursor-pointer bg-transparent"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Expanded filter panel */}
        {showFilters && (
          <div className="pb-5 space-y-4 border-t border-stone-100 pt-4">
            {/* Row 1: Region + Budget */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <FilterSection label="Region">
                <div className="flex flex-wrap gap-1.5">
                  {(Object.entries(CONTINENT_LABELS) as [Continent, string][]).map(([key, label]) => (
                    <Pill key={key} active={continents.includes(key)} onClick={() => onContinentToggle(key)}>
                      {label}
                    </Pill>
                  ))}
                </div>
              </FilterSection>

              <FilterSection label="Budget">
                <div className="flex gap-1.5">
                  {([1, 2, 3] as const).map((tier) => (
                    <Pill key={tier} active={budgetTiers.includes(tier)} onClick={() => onBudgetToggle(tier)}>
                      {'$'.repeat(tier)}
                    </Pill>
                  ))}
                </div>
              </FilterSection>

              <FilterSection label="Language">
                <Pill active={englishFriendlyOnly} onClick={onEnglishToggle}>
                  English Friendly
                </Pill>
              </FilterSection>
            </div>

            {/* Row 2: Vibe */}
            <FilterSection label="Vibe">
              <div className="flex flex-wrap gap-1.5">
                {(Object.entries(VIBE_LABELS) as [VibeTag, string][]).map(([key, label]) => (
                  <Pill key={key} active={vibes.includes(key)} onClick={() => onVibeToggle(key)}>
                    {label}
                  </Pill>
                ))}
              </div>
            </FilterSection>

            {/* Row 3: Month */}
            <FilterSection label="Best travel month">
              <div className="flex flex-wrap gap-1">
                {MONTH_LABELS.map((label, i) => (
                  <button
                    key={i}
                    onClick={() => onMonthToggle(i + 1)}
                    className={`text-xs font-sans w-10 py-1.5 rounded text-center transition-all duration-150 cursor-pointer ${
                      travelMonths.includes(i + 1)
                        ? 'bg-amber-500 text-stone-900 font-medium'
                        : 'bg-stone-50 text-stone-500 hover:bg-stone-100'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </FilterSection>
          </div>
        )}
      </div>
    </div>
  )
}

function FilterSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] text-stone-400 uppercase tracking-wider font-sans mb-2">
        {label}
      </p>
      {children}
    </div>
  )
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`text-[13px] font-sans px-3 py-1.5 rounded-md border transition-all duration-150 whitespace-nowrap cursor-pointer ${
        active
          ? 'bg-amber-500 border-amber-500 text-stone-900 font-medium shadow-sm'
          : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300 hover:bg-stone-50'
      }`}
    >
      {children}
    </button>
  )
}

function QuickPill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-sans px-2.5 py-1 rounded-md transition-all duration-150 whitespace-nowrap cursor-pointer ${
        active
          ? 'bg-amber-500 text-stone-900 font-medium'
          : 'text-stone-500 hover:text-stone-700 hover:bg-stone-100'
      }`}
    >
      {children}
    </button>
  )
}
