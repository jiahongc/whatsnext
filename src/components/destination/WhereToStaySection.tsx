import type { NeighborhoodRec } from '@/data/types'

export function WhereToStaySection({ neighborhoods }: { neighborhoods: NeighborhoodRec[] }) {
  if (neighborhoods.length === 0) return null

  return (
    <section>
      <h2 className="font-serif text-2xl text-stone-900 mb-1">Where to Stay</h2>
      <p className="font-sans text-sm text-stone-400 mb-4">Neighborhood guide by travel style</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {neighborhoods.map((n) => (
          <div key={n.neighborhood} className="bg-white border border-stone-200/80 rounded-lg p-4">
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="font-sans text-sm font-semibold text-stone-900">{n.neighborhood}</h3>
              <span className="font-sans text-xs text-amber-600 font-medium">{n.priceRange}</span>
            </div>
            <p className="font-sans text-xs text-stone-500 mb-2">{n.vibe}</p>
            <span className="inline-block text-[10px] font-sans text-stone-600 bg-amber-50 px-2 py-0.5 rounded-full">
              Best for: {n.bestFor}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
