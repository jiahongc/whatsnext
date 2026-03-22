'use client'

import { useState } from 'react'
import type { VibeTag } from '@/data/types'

export function CityDescription({
  description,
  extendedDescription,
  vibeTags,
}: {
  description: string
  extendedDescription: string
  vibeTags: VibeTag[]
}) {
  const [expanded, setExpanded] = useState(false)

  // Split extended description into paragraphs
  const paragraphs = extendedDescription
    .split('\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0)

  return (
    <section>
      <p className="font-sans text-lg text-stone-600 leading-relaxed">
        {description}
      </p>

      {/* Vibe tags */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
        {vibeTags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-stone-600 tracking-[0.04em] lowercase border-b-[1.5px] border-amber-400 pb-px"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Expandable extended description */}
      {extendedDescription && (
        <div className="mt-4">
          {expanded ? (
            <div className="space-y-3 mt-3 border-l-2 border-amber-400/40 pl-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="font-sans text-sm text-stone-500 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ) : null}

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 font-sans text-sm text-amber-600 hover:text-amber-700 cursor-pointer bg-transparent flex items-center gap-1 transition-colors"
          >
            {expanded ? 'Show less' : 'Read the full city guide'}
            <svg
              className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
