'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Destination } from '@/data/types'
import { DESTINATION_IMAGES } from '@/data/destination-images'
import { DESTINATION_GALLERY, type GalleryImage } from '@/data/destination-gallery'
import { formatBestMonths } from '@/lib/constants'

export function DestinationHero({ destination }: { destination: Destination }) {
  const mainImage = DESTINATION_IMAGES[destination.slug]
  const gallery = DESTINATION_GALLERY[destination.slug] || []
  const allImages = [
    { url: mainImage, alt: `${destination.name}, ${destination.country}` },
    ...gallery,
  ].filter(img => img.url)

  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = allImages[activeIndex]

  return (
    <div className="relative">
      {/* Main hero image */}
      <div className="relative w-full h-[45vh] min-h-[340px] max-h-[460px] overflow-hidden bg-stone-200">
        {activeImage?.url && (
          <Image
            src={activeImage.url}
            alt={activeImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-opacity duration-500"
            key={activeIndex}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-stone-900/10" />

        {/* City info overlay */}
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-6 pb-5">
          <span className="text-3xl mb-1.5 block">{destination.flag}</span>
          <h1 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-none">
            {destination.name}
          </h1>
          <p className="font-sans text-sm text-white/70 uppercase tracking-[0.08em] mt-1">
            {destination.country}
          </p>

          {/* Key info badges — moved to banner */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-3">
            <InfoBadge>{'$'.repeat(destination.budgetTier)}</InfoBadge>
            <InfoBadge>{formatBestMonths(destination.bestMonths)}</InfoBadge>
            <InfoBadge>✈ {destination.flightCost}</InfoBadge>
            <InfoBadge>🗣 {destination.language}</InfoBadge>
            {destination.englishFriendly && <InfoBadge>English OK</InfoBadge>}
            {destination.visaNote && (
              <InfoBadge>🛂 {destination.visaNote.length > 50 ? destination.visaNote.slice(0, 47) + '...' : destination.visaNote}</InfoBadge>
            )}
          </div>
        </div>
      </div>

      {/* Photo gallery thumbnails */}
      {allImages.length > 1 && (
        <div className="max-w-4xl mx-auto px-6 -mt-6 relative z-10">
          <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative flex-shrink-0 w-16 h-12 rounded overflow-hidden cursor-pointer transition-all ${
                  i === activeIndex
                    ? 'ring-2 ring-amber-500 ring-offset-1 opacity-100'
                    : 'opacity-60 hover:opacity-90'
                }`}
              >
                {img.url && (
                  <Image
                    src={img.url}
                    alt={img.alt || ''}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function InfoBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-sans text-white/90 bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded">
      {children}
    </span>
  )
}
