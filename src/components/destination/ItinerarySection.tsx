'use client'

import { useState } from 'react'
import type { ItineraryDay } from '@/data/types'

export function ItinerarySection({ itinerary }: { itinerary: ItineraryDay[] }) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1)

  return (
    <section>
      <h2 className="font-serif text-2xl text-stone-900 mb-1">Sample Itinerary</h2>
      <p className="font-sans text-sm text-stone-400 mb-4">{itinerary.length}-day trip plan</p>

      <div className="space-y-2">
        {itinerary.map((day) => {
          const isExpanded = expandedDay === day.day
          return (
            <div
              key={day.day}
              className="bg-white border border-stone-200/80 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left cursor-pointer bg-transparent hover:bg-stone-50/50 transition-colors"
              >
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-amber-500 text-stone-900 text-xs font-bold font-sans rounded-full">
                  {day.day}
                </span>
                <span className="font-sans text-sm text-stone-900 font-medium flex-1">
                  {day.title}
                </span>
                <svg
                  className={`w-4 h-4 text-stone-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 ml-10">
                  <div className="space-y-2 border-l border-amber-200 pl-3">
                    {day.activities.map((activity, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                        <p className="font-sans text-sm text-stone-600 leading-relaxed">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
