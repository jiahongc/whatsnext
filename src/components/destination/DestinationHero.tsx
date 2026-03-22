import type { Destination } from '@/data/types'
import { formatBestMonths } from '@/lib/constants'

export function DestinationHero({ destination }: { destination: Destination }) {
  return (
    <div className="relative w-full h-[50vh] min-h-[360px] max-h-[500px] overflow-hidden">
      {/* Placeholder gradient (replace with real photo later) */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, hsl(${hashToHue(destination.slug)}, 60%, 45%) 0%, hsl(${hashToHue(destination.slug) + 40}, 50%, 35%) 100%)`,
        }}
      />

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-6 pb-8">
        <span className="text-3xl mb-2 block">{destination.flag}</span>
        <h1 className="font-serif text-5xl md:text-6xl text-white tracking-tight">
          {destination.name}
        </h1>
        <p className="font-sans text-lg text-stone-300 mt-1 uppercase tracking-[0.06em]">
          {destination.country}
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm text-stone-300 font-sans">
          <span className="flex items-center gap-1.5">
            <BudgetDots tier={destination.budgetTier} />
            <span>{'$'.repeat(destination.budgetTier)}</span>
          </span>
          <span className="text-stone-500">&middot;</span>
          <span>Best: {formatBestMonths(destination.bestMonths)}</span>
          <span className="text-stone-500">&middot;</span>
          <span>✈ {destination.flightCost}</span>
          <span className="text-stone-500">&middot;</span>
          <span>🗣 {destination.language}</span>
          {destination.englishFriendly && (
            <>
              <span className="text-stone-500">&middot;</span>
              <span className="text-amber-400">English Friendly</span>
            </>
          )}
        </div>

        {destination.visaNote && (
          <p className="mt-3 text-xs text-stone-400 font-sans">
            🛂 {destination.visaNote}
          </p>
        )}
      </div>
    </div>
  )
}

function BudgetDots({ tier }: { tier: 1 | 2 | 3 }) {
  return (
    <span className="flex gap-[3px]">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i <= tier ? 'bg-amber-400' : 'bg-stone-600'
          }`}
        />
      ))}
    </span>
  )
}

function hashToHue(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash % 360)
}
