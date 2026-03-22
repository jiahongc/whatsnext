'use client'

import { useState } from 'react'
import type { VibeTag } from '@/data/types'

export function CityDescription({
  description,
  tagline,
  extendedDescription,
  vibeTags,
}: {
  description: string
  tagline: string
  extendedDescription: string
  vibeTags: VibeTag[]
}) {
  const [expanded, setExpanded] = useState(false)

  const paragraphs = extendedDescription
    .split('\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0)

  return (
    <section>
      {/* Tagline */}
      <p className="font-serif text-xl text-amber-600 mb-2 italic">
        {tagline}
      </p>

      {/* Short description */}
      <p className="font-sans text-base text-stone-600 leading-relaxed">
        {description}
      </p>

      {/* Vibe tags */}
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-3">
        {vibeTags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-stone-500 tracking-[0.04em] lowercase border-b-[1.5px] border-amber-400 pb-px"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Expandable extended description */}
      {extendedDescription && (
        <div className="mt-3">
          {expanded && (
            <div className="space-y-2.5 mt-3 border-l-2 border-amber-400/30 pl-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="font-sans text-sm text-stone-500 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 font-sans text-sm text-amber-600 hover:text-amber-700 cursor-pointer bg-transparent flex items-center gap-1 transition-colors"
          >
            {expanded ? 'Show less' : 'Read more about this city'}
            <svg
              className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
