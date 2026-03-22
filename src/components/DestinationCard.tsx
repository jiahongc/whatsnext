import Link from 'next/link'
import Image from 'next/image'
import type { Destination } from '@/data/types'
import { DESTINATION_IMAGES } from '@/data/destination-images'
import { formatBestMonths } from '@/lib/constants'

export function DestinationCard({
  destination,
}: {
  destination: Destination
}) {
  const imageUrl = DESTINATION_IMAGES[destination.slug]

  return (
    <Link
      href={`/destination/${destination.slug}`}
      className="destination-card group block bg-white rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.12),0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
      style={{
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        viewTransitionName: `card-${destination.slug}`,
      }}
    >
      {/* Photo */}
      <div className="relative aspect-[3/2] overflow-hidden bg-stone-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${destination.name}, ${destination.country}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ filter: 'saturate(0.95) brightness(1.02)' }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300" />
        )}

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Name + flag overlay on image */}
        <div className="absolute bottom-0 inset-x-0 p-4">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-serif text-2xl text-white leading-tight drop-shadow-md">
                {destination.name}
              </h3>
              <p className="font-sans text-xs text-white/80 uppercase tracking-[0.1em] mt-0.5">
                {destination.country}
              </p>
            </div>
            <span className="text-2xl drop-shadow-md">{destination.flag}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Stats row */}
        <div className="flex items-center gap-2.5 text-sm text-stone-500 font-sans">
          <BudgetDots tier={destination.budgetTier} />
          <span className="text-stone-200">|</span>
          <span className="text-stone-600">{formatBestMonths(destination.bestMonths)}</span>
          <span className="text-stone-200">|</span>
          <span className="text-stone-600">✈ {destination.flightCost}</span>
        </div>

        {/* Vibe tags */}
        <div className="flex flex-wrap gap-1.5">
          {destination.vibeTags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-sans text-stone-500 bg-warm-100 px-2 py-0.5 rounded-full"
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
          className={`w-[6px] h-[6px] rounded-full ${
            i <= tier ? 'bg-amber-500' : 'bg-stone-200'
          }`}
        />
      ))}
    </span>
  )
}
