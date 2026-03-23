'use client'

import { COLLECTIONS, type Collection } from '@/data/collections'

export function CollectionRow({
  onSelect,
  activeSlug,
}: {
  onSelect: (collection: Collection | null) => void
  activeSlug: string | null
}) {
  return (
    <div className="overflow-x-auto scrollbar-none -mx-6 px-6">
      <div className="flex gap-2 pb-1">
        {COLLECTIONS.map((c) => {
          const isActive = activeSlug === c.slug
          return (
            <button
              key={c.slug}
              onClick={() => onSelect(isActive ? null : c)}
              className={`flex items-center gap-1.5 whitespace-nowrap text-sm font-sans px-3.5 py-2 rounded-lg border transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-amber-500 border-amber-500 text-stone-900 font-medium shadow-sm'
                  : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300 hover:bg-stone-50'
              }`}
            >
              <span>{c.emoji}</span>
              <span>{c.title}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
