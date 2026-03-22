import type { MichelinRestaurant } from '@/data/michelin-restaurants'

const STAR_COLORS: Record<string, string> = {
  '3-star': 'bg-red-600 text-white',
  '2-star': 'bg-red-500 text-white',
  '1-star': 'bg-red-400 text-white',
  'bib-gourmand': 'bg-amber-500 text-stone-900',
  'recommended': 'bg-stone-200 text-stone-700',
}

const STAR_LABELS: Record<string, string> = {
  '3-star': '⭐⭐⭐',
  '2-star': '⭐⭐',
  '1-star': '⭐',
  'bib-gourmand': 'Bib Gourmand',
  'recommended': 'Recommended',
}

export function MichelinSection({
  restaurants,
  cityName,
}: {
  restaurants: MichelinRestaurant[]
  cityName: string
}) {
  if (!restaurants || restaurants.length === 0) return null

  const starred = restaurants.filter((r) =>
    ['3-star', '2-star', '1-star'].includes(r.distinction)
  )
  const others = restaurants.filter(
    (r) => !['3-star', '2-star', '1-star'].includes(r.distinction)
  )

  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <h2 className="font-serif text-2xl text-stone-900">Michelin Guide</h2>
        <span className="bg-red-600 text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded">
          MICHELIN
        </span>
      </div>
      <p className="font-sans text-sm text-stone-400 mb-6">
        Notable restaurants in {cityName}
      </p>

      {/* Starred restaurants */}
      {starred.length > 0 && (
        <div className="space-y-3 mb-4">
          {starred.map((r) => (
            <RestaurantCard key={r.name} restaurant={r} />
          ))}
        </div>
      )}

      {/* Bib Gourmand + Recommended */}
      {others.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {others.map((r) => (
            <RestaurantCardCompact key={r.name} restaurant={r} />
          ))}
        </div>
      )}

      <p className="font-sans text-[11px] text-stone-400 mt-4">
        Distinctions are based on the MICHELIN Guide. Availability and status may change.
      </p>
    </section>
  )
}

function RestaurantCard({ restaurant }: { restaurant: MichelinRestaurant }) {
  return (
    <div className="bg-white border border-stone-200/80 rounded-lg p-5 hover:border-red-200 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <h3 className="font-sans text-base font-semibold text-stone-900">
            {restaurant.name}
          </h3>
          <p className="font-sans text-xs text-stone-500 mt-0.5">
            {restaurant.cuisine}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs font-sans text-stone-400">
            {restaurant.priceRange}
          </span>
          <span
            className={`text-[11px] font-sans font-medium px-2 py-0.5 rounded-full ${
              STAR_COLORS[restaurant.distinction]
            }`}
          >
            {STAR_LABELS[restaurant.distinction]}
          </span>
        </div>
      </div>
      <p className="font-sans text-sm text-stone-500 leading-relaxed">
        {restaurant.description}
      </p>
    </div>
  )
}

function RestaurantCardCompact({
  restaurant,
}: {
  restaurant: MichelinRestaurant
}) {
  return (
    <div className="bg-white border border-stone-200/80 rounded-lg px-4 py-3 hover:border-amber-200 transition-colors">
      <div className="flex items-center justify-between gap-2 mb-1">
        <h3 className="font-sans text-sm font-medium text-stone-900 truncate">
          {restaurant.name}
        </h3>
        <span
          className={`text-[10px] font-sans font-medium px-1.5 py-0.5 rounded-full flex-shrink-0 ${
            STAR_COLORS[restaurant.distinction]
          }`}
        >
          {restaurant.distinction === 'bib-gourmand' ? 'Bib' : 'Rec.'}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-sans text-xs text-stone-500">{restaurant.cuisine}</span>
        <span className="text-stone-300">·</span>
        <span className="font-sans text-xs text-stone-400">{restaurant.priceRange}</span>
      </div>
    </div>
  )
}
