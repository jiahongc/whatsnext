'use client'

import { useState } from 'react'
import type { MichelinRestaurant, LocalFoodRec } from '@/data/michelin-restaurants'

const DISTINCTION_DISPLAY: Record<string, { label: string; style: string }> = {
  '3-star': { label: '★★★', style: 'text-amber-600 font-bold' },
  '2-star': { label: '★★', style: 'text-amber-600 font-bold' },
  '1-star': { label: '★', style: 'text-amber-600' },
  'bib-gourmand': { label: 'BG', style: 'text-stone-500 font-medium' },
  'recommended': { label: '◆', style: 'text-stone-400' },
}

function formatCostRange(cost: string): string {
  return cost.replace(/\$(\d[\d,.]*)\s*-\s*(\d)/g, '$$$1–$$$2')
}

export function MichelinSection({
  restaurants,
  localFood,
  cityName,
}: {
  restaurants: MichelinRestaurant[]
  localFood: LocalFoodRec[]
  cityName: string
}) {
  const [showMichelin, setShowMichelin] = useState(false)
  const [showLocalFood, setShowLocalFood] = useState(true)

  const hasStarred = restaurants.some((r) => ['3-star', '2-star', '1-star'].includes(r.distinction))
  const starredCount = restaurants.filter((r) => ['3-star', '2-star', '1-star'].includes(r.distinction)).length

  return (
    <section>
      <h2 className="font-serif text-2xl text-stone-900 mb-1">Where to Eat</h2>
      <p className="font-sans text-sm text-stone-400 mb-5">
        {hasStarred ? `${starredCount} Michelin-starred restaurants and local favorites` : 'Notable restaurants and local favorites'} in {cityName}
      </p>

      {/* Michelin — collapsible */}
      {restaurants.length > 0 && (
        <div className="bg-white border border-stone-200/80 rounded-lg overflow-hidden mb-4">
          <button
            onClick={() => setShowMichelin(!showMichelin)}
            className="w-full flex items-center justify-between px-4 py-3 bg-stone-50 border-b border-stone-200/60 cursor-pointer hover:bg-stone-100/80 transition-colors"
          >
            <div className="flex items-center gap-2">
              <p className="text-[11px] font-sans text-stone-500 uppercase tracking-wider font-medium">
                {hasStarred ? 'Michelin Guide' : 'Notable Restaurants'}
              </p>
              <span className="text-[10px] font-sans text-stone-400 bg-stone-200/60 px-1.5 py-0.5 rounded">
                {restaurants.length}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-stone-400 transition-transform ${showMichelin ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showMichelin && (
            <div className="divide-y divide-stone-50">
              {restaurants.map((r) => {
                const display = DISTINCTION_DISPLAY[r.distinction]
                return (
                  <a
                    key={r.name}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-warm-50 transition-colors group"
                  >
                    <span className={`w-7 text-center text-xs ${display.style}`}>{display.label}</span>
                    <div className="flex-1 min-w-0">
                      <span className="font-sans text-sm text-stone-900 group-hover:text-amber-700 transition-colors">{r.name}</span>
                      <span className="font-sans text-xs text-stone-400 ml-2">{r.cuisine}</span>
                    </div>
                    <span className="font-sans text-xs text-stone-400 flex-shrink-0">{r.priceRange}</span>
                    <svg className="w-3 h-3 text-stone-300 group-hover:text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* Local Favorites — collapsible, open by default */}
      {localFood.length > 0 && (
        <div className="bg-white border border-stone-200/80 rounded-lg overflow-hidden">
          <button
            onClick={() => setShowLocalFood(!showLocalFood)}
            className="w-full flex items-center justify-between px-4 py-3 bg-stone-50 border-b border-stone-200/60 cursor-pointer hover:bg-stone-100/80 transition-colors"
          >
            <div className="flex items-center gap-2">
              <p className="text-[11px] font-sans text-stone-500 uppercase tracking-wider font-medium">Local Favorites</p>
              <span className="text-[10px] font-sans text-stone-400 bg-stone-200/60 px-1.5 py-0.5 rounded">{localFood.length}</span>
            </div>
            <svg
              className={`w-4 h-4 text-stone-400 transition-transform ${showLocalFood ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showLocalFood && (
            <div className="divide-y divide-stone-50">
              {localFood.map((f) => (
                <div key={f.name} className="flex items-center gap-3 px-4 py-2.5">
                  <div className="flex-1 min-w-0">
                    <span className="font-sans text-sm font-medium text-stone-900">{f.name}</span>
                    <span className="font-sans text-xs text-stone-400 ml-2">{f.area}</span>
                  </div>
                  <span className="font-sans text-xs text-stone-500 flex-shrink-0">{f.dish}</span>
                  <span className="font-sans text-xs text-amber-600 font-medium flex-shrink-0">{formatCostRange(f.cost)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
