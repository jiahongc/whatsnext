import Link from 'next/link'
import type { Destination } from '@/data/types'
import { formatBestMonths } from '@/lib/constants'

export function DestinationCard({
  destination,
  index,
}: {
  destination: Destination
  index: number
}) {
  return (
    <Link
      href={`/destination/${destination.slug}`}
      className="destination-card group block bg-warm-50 border border-stone-200/20 shadow-[0_1px_2px_rgba(28,25,23,0.04),0_4px_12px_rgba(28,25,23,0.03)] rounded-[2px] p-[10px] pb-5 transition-all duration-[400ms] hover:-translate-y-1.5 hover:shadow-[0_8px_25px_rgba(245,158,11,0.08),0_2px_8px_rgba(28,25,23,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-50 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
      style={{
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        viewTransitionName: `card-${destination.slug}`,
      }}
    >
      {/* Photo */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1px] bg-stone-200">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-900/8 z-10 pointer-events-none" />
        {/* Placeholder gradient until real photos */}
        <div
          className="absolute inset-0 transition-transform duration-[600ms] group-hover:scale-[1.04]"
          style={{
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            background: getPlaceholderGradient(index),
            filter: 'saturate(0.9) sepia(0.05) brightness(1.02)',
          }}
        />
        {/* Flag badge */}
        <span className="absolute top-2 right-2 z-20 text-xl drop-shadow-md">
          {destination.flag}
        </span>
      </div>

      {/* Content */}
      <div className="mt-3 px-0.5">
        {/* Name + Country */}
        <h3 className="font-serif text-xl text-stone-900 leading-tight">
          {destination.name}
        </h3>
        <p className="font-sans text-xs text-stone-400 uppercase tracking-[0.08em] mt-0.5">
          {destination.country}
        </p>

        {/* Info line */}
        <div className="flex items-center gap-2 mt-2.5 text-sm text-stone-600 font-sans">
          <BudgetDots tier={destination.budgetTier} />
          <span className="text-stone-300">&middot;</span>
          <span>{formatBestMonths(destination.bestMonths)}</span>
          <span className="text-stone-300">&middot;</span>
          <span>✈ {destination.flightCost}</span>
        </div>

        {/* Vibe tags */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2.5">
          {destination.vibeTags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-stone-600 tracking-[0.04em] lowercase border-b-[1.5px] border-amber-400 pb-px"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

function BudgetDots({ tier }: { tier: 1 | 2 | 3 }) {
  return (
    <span className="flex gap-[3px] items-center" aria-label={`Budget: ${'$'.repeat(tier)}`}>
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i <= tier ? 'bg-amber-500' : 'bg-stone-200'
          }`}
        />
      ))}
    </span>
  )
}

function getPlaceholderGradient(index: number): string {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
    'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
    'linear-gradient(135deg, #667eea 0%, #f5576c 100%)',
  ]
  return gradients[index % gradients.length]
}
