import type { PointsRedemption } from '@/data/types'

export function PointsSection({ points }: { points: PointsRedemption[] }) {
  if (points.length === 0) return null

  return (
    <section>
      <h2 className="font-serif text-2xl text-stone-900 mb-2">
        Points &amp; Miles
      </h2>
      <p className="font-sans text-sm text-stone-400 mb-5">
        Best ways to use points for this destination
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {points.map((p, i) => (
          <div
            key={i}
            className="bg-white border border-stone-200/80 rounded-lg p-4 hover:border-amber-300 transition-colors"
          >
            {/* Header: program + cabin */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-sans text-sm font-semibold text-stone-900 leading-tight">
                {p.program}
              </h3>
              <span className={`text-[10px] font-sans font-medium uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                p.cabin === 'Business' || p.cabin === 'First' || p.cabin === 'Suite'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-stone-100 text-stone-500'
              }`}>
                {p.cabin}
              </span>
            </div>

            {/* Points value */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-sans text-lg font-bold text-amber-600">
                {p.points}
              </span>
              {p.route && (
                <span className="font-sans text-xs text-stone-400">
                  {p.route}
                </span>
              )}
            </div>

            {/* Tip */}
            <p className="font-sans text-xs text-stone-500 leading-relaxed">
              💡 {p.tip}
            </p>
          </div>
        ))}
      </div>

      <p className="font-sans text-[11px] text-stone-400 mt-4">
        Point values are approximate and subject to availability. Check r/awardtravel for the latest sweet spots.
      </p>
    </section>
  )
}
