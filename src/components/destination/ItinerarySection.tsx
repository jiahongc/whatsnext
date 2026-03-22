'use client'

import { useState } from 'react'
import type { ItineraryDay } from '@/data/types'

export function ItinerarySection({ itinerary }: { itinerary: ItineraryDay[] }) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1)

  return (
    <section>
      <h2 className="font-serif text-2xl text-stone-900 mb-5">
        Sample Itinerary
      </h2>
      <div className="space-y-3">
        {itinerary.map((day) => (
          <div
            key={day.day}
            className="border border-stone-200/60 rounded-[2px] overflow-hidden transition-colors hover:border-stone-300"
          >
            <button
              onClick={() =>
                setExpandedDay(expandedDay === day.day ? null : day.day)
              }
              className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer bg-transparent"
            >
              {/* Day badge */}
              <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-amber-500 text-stone-900 text-sm font-semibold font-sans rounded-full">
                {day.day}
              </span>
              <span className="font-sans text-stone-900 font-medium flex-1">
                {day.title}
              </span>
              <svg
                className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                  expandedDay === day.day ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {expandedDay === day.day && (
              <div className="px-5 pb-5 pt-0 ml-[52px]">
                <ul className="space-y-2">
                  {day.activities.map((activity, i) => (
                    <li
                      key={i}
                      className="font-sans text-sm text-stone-600 flex items-start gap-2"
                    >
                      <span className="text-amber-400 mt-1.5 flex-shrink-0">
                        &bull;
                      </span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
