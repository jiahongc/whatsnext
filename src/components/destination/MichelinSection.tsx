import type { MichelinRestaurant, LocalFoodRec } from '@/data/michelin-restaurants'

const DISTINCTION_DISPLAY: Record<string, { label: string; style: string }> = {
  '3-star': { label: '★★★', style: 'text-amber-500 font-bold' },
  '2-star': { label: '★★', style: 'text-amber-500 font-bold' },
  '1-star': { label: '★', style: 'text-amber-500 font-bold' },
  'bib-gourmand': { label: 'BG', style: 'text-stone-500 font-medium' },
  'recommended': { label: '◆', style: 'text-stone-400' },
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
  const hasStarred = restaurants.some((r) =>
    ['3-star', '2-star', '1-star'].includes(r.distinction)
  )

  return (
    <section>
      <h2 className="font-serif text-2xl text-stone-900 mb-1">
        Where to Eat
      </h2>
      <p className="font-sans text-sm text-stone-400 mb-5">
        {hasStarred ? 'Michelin-starred restaurants and local favorites' : 'Notable restaurants and local favorites'} in {cityName}
      </p>

      {/* Michelin table */}
      {restaurants.length > 0 && (
        <div className="bg-white border border-stone-200/80 rounded-lg overflow-hidden mb-5">
          <div className="px-4 py-2.5 bg-stone-50 border-b border-stone-200/60">
            <p className="text-[11px] font-sans text-stone-500 uppercase tracking-wider font-medium">
              {hasStarred ? 'Michelin Guide' : 'Notable Restaurants'}
            </p>
          </div>
          <div className="divide-y divide-stone-100">
            {restaurants.map((r) => {
              const d = DISTINCTION_DISPLAY[r.distinction]
              return (
                <a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-warm-50 transition-colors group"
                >
                  {/* Star indicator */}
                  <span className={`w-8 text-center text-sm ${d.style}`}>
                    {d.label}
                  </span>

                  {/* Name + cuisine */}
                  <div className="flex-1 min-w-0">
                    <span className="font-sans text-sm text-stone-900 group-hover:text-amber-700 transition-colors">
                      {r.name}
                    </span>
                    <span className="font-sans text-xs text-stone-400 ml-2">
                      {r.cuisine}
                    </span>
                  </div>

                  {/* Price */}
                  <span className="font-sans text-xs text-stone-400 flex-shrink-0">
                    {r.priceRange}
                  </span>

                  {/* External link */}
                  <svg className="w-3.5 h-3.5 text-stone-300 group-hover:text-amber-500 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )
            })}
          </div>
        </div>
      )}

      {/* Local food recommendations */}
      {localFood.length > 0 && (
        <div>
          <p className="text-[11px] font-sans text-stone-500 uppercase tracking-wider font-medium mb-2.5">
            Local Favorites
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {localFood.map((f) => (
              <div
                key={f.name}
                className="bg-white border border-stone-200/80 rounded-lg px-3.5 py-2.5"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-sans text-sm font-medium text-stone-900">
                    {f.name}
                  </span>
                  <span className="font-sans text-xs text-amber-600 font-medium">
                    {f.cost}
                  </span>
                </div>
                <p className="font-sans text-xs text-stone-500">
                  {f.dish}
                  <span className="text-stone-300 mx-1">·</span>
                  <span className="text-stone-400">{f.area}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
