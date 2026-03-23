import Link from 'next/link'
import Image from 'next/image'
import type { Destination } from '@/data/types'
import { PEXELS_PHOTOS } from '@/data/pexels-photos'
import { formatBestMonths } from '@/lib/constants'

export function DestinationCard({
  destination,
}: {
  destination: Destination
}) {
  const photos = PEXELS_PHOTOS[destination.slug]
  const imageUrl = photos?.[0]?.url

  return (
    <Link
      href={`/destination/${destination.slug}`}
      className="destination-card group block bg-white rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.12),0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
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
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300" />
        )}

        {/* Consistent dark gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Name + country on image */}
        <div className="absolute bottom-0 inset-x-0 p-3.5">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-serif text-xl text-white leading-tight drop-shadow-md">
                {destination.name}
              </h3>
              <p className="font-sans text-[11px] text-white/70 uppercase tracking-[0.08em]">
                {destination.country}
              </p>
            </div>
            <span className="text-xl drop-shadow-md">{destination.flag}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5 space-y-2">
        {/* Tagline — the "why go" hook */}
        <p className="font-sans text-sm text-stone-600 leading-snug line-clamp-1">
          {destination.tagline}
        </p>

        {/* Stats row with clear labels */}
        <div className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <BudgetDots tier={destination.budgetTier} />
          <span className="text-stone-200">|</span>
          <span>{formatBestMonths(destination.bestMonths)}</span>
          <span className="text-stone-200">|</span>
          <span className="text-stone-600">
            ~{destination.flightCost}
            <span className="text-stone-400 ml-0.5 text-[10px]">RT</span>
          </span>
        </div>

        {/* Vibe tags */}
        <div className="flex flex-wrap gap-1">
          {destination.vibeTags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-sans text-stone-500 bg-stone-50 px-1.5 py-0.5 rounded"
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
          className={`w-[5px] h-[5px] rounded-full ${
            i <= tier ? 'bg-amber-500' : 'bg-stone-200'
          }`}
        />
      ))}
    </span>
  )
}
