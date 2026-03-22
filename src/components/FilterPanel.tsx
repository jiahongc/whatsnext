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
  const [open, setOpen] = useState(false)

  return (
    <div
      className="sticky top-0 z-40 bg-warm-50/85 backdrop-blur-xl border-b border-stone-200/60 transition-shadow duration-300"
      style={{ WebkitBackdropFilter: 'blur(12px) saturate(1.2)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        {/* Mobile: toggle button */}
        <div className="flex items-center justify-between lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 text-sm font-sans text-stone-600 py-1.5 px-3 border border-stone-200 rounded bg-transparent"
          >
            Filters
            {activeCount > 0 && (
              <span className="bg-amber-500 text-stone-900 text-[11px] font-semibold px-1.5 py-px rounded-full">
                {activeCount}
              </span>
            )}
            <svg
              className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {activeCount > 0 && (
            <button
              onClick={onClearAll}
              className="text-xs text-amber-600 hover:text-amber-700 font-sans"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Desktop: always visible / Mobile: collapsible */}
        <div className={`${open ? 'block' : 'hidden'} lg:block mt-3 lg:mt-0`}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0">
            {/* Continent */}
            <FilterGroup label="Region">
              {(Object.entries(CONTINENT_LABELS) as [Continent, string][]).map(
                ([key, label]) => (
                  <Pill
                    key={key}
                    active={continents.includes(key)}
                    onClick={() => onContinentToggle(key)}
                  >
                    {label}
                  </Pill>
                )
              )}
            </FilterGroup>

            <Divider />

            {/* Budget */}
            <FilterGroup label="Budget">
              {([1, 2, 3] as const).map((tier) => (
                <Pill
                  key={tier}
                  active={budgetTiers.includes(tier)}
                  onClick={() => onBudgetToggle(tier)}
                >
                  {'$'.repeat(tier)}
                </Pill>
              ))}
            </FilterGroup>

            <Divider />

            {/* Vibe */}
            <FilterGroup label="Vibe" scrollable>
              {(Object.entries(VIBE_LABELS) as [VibeTag, string][]).map(
                ([key, label]) => (
                  <Pill
                    key={key}
                    active={vibes.includes(key)}
                    onClick={() => onVibeToggle(key)}
                  >
                    {label}
                  </Pill>
                )
              )}
            </FilterGroup>

            <Divider />

            {/* Travel Month */}
            <FilterGroup label="Month" scrollable>
              {MONTH_LABELS.map((label, i) => (
                <Pill
                  key={i}
                  active={travelMonths.includes(i + 1)}
                  onClick={() => onMonthToggle(i + 1)}
                >
                  {label}
                </Pill>
              ))}
            </FilterGroup>

            <Divider />

            {/* English Friendly */}
            <FilterGroup label="Language">
              <Pill
                active={englishFriendlyOnly}
                onClick={onEnglishToggle}
              >
                English Friendly
              </Pill>
            </FilterGroup>

            {/* Clear all (desktop) */}
            {activeCount > 0 && (
              <div className="hidden lg:flex items-center ml-auto">
                <button
                  onClick={onClearAll}
                  className="text-xs text-amber-600 hover:text-amber-700 font-sans whitespace-nowrap"
                >
                  Clear all ({activeCount})
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterGroup({
  label,
  children,
  scrollable,
}: {
  label: string
  children: React.ReactNode
  scrollable?: boolean
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] text-stone-400 uppercase tracking-wide font-sans whitespace-nowrap min-w-[44px]">
        {label}
      </span>
      <div
        className={`flex gap-1.5 ${
          scrollable
            ? 'overflow-x-auto scrollbar-none pb-0.5 -mb-0.5'
            : 'flex-wrap'
        }`}
      >
        {children}
      </div>
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
      className={`text-[13px] font-sans tracking-[0.02em] px-3 py-1.5 rounded border transition-all duration-200 whitespace-nowrap cursor-pointer ${
        active
          ? 'bg-amber-500 border-amber-500 text-stone-900 font-medium'
          : 'bg-transparent border-stone-200 text-stone-600 hover:border-stone-400 hover:bg-amber-500/5'
      }`}
    >
      {children}
    </button>
  )
}

function Divider() {
  return (
    <div className="hidden lg:block w-px h-5 bg-stone-200 mx-3 shrink-0" />
  )
}
