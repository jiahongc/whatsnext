'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Destination } from '@/data/types'
import { DESTINATION_IMAGES } from '@/data/destination-images'
import { DESTINATION_GALLERY } from '@/data/destination-gallery'

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
      {/* Main hero image — no text overlays except name */}
      <div className="relative w-full h-[40vh] min-h-[300px] max-h-[420px] overflow-hidden bg-stone-200">
        {activeImage?.url && (
          <Image
            src={activeImage.url}
            alt={activeImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition-opacity duration-500"
            key={activeIndex}
          />
        )}
        {/* Gentle bottom gradient only */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />

        {/* Only name + country + flag — everything else moved to Before You Go */}
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-6 pb-5">
          <span className="text-2xl mb-1 block">{destination.flag}</span>
          <h1 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-none">
            {destination.name}
          </h1>
          <p className="font-sans text-sm text-white/70 uppercase tracking-[0.08em] mt-1">
            {destination.country}
          </p>
        </div>
      </div>

      {/* Photo gallery thumbnails */}
      {allImages.length > 1 && (
        <div className="max-w-4xl mx-auto px-6 -mt-5 relative z-10">
          <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative flex-shrink-0 w-14 h-10 rounded overflow-hidden cursor-pointer transition-all ${
                  i === activeIndex
                    ? 'ring-2 ring-amber-500 ring-offset-1 opacity-100'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                {img.url && (
                  <Image
                    src={img.url}
                    alt={img.alt || ''}
                    fill
                    sizes="56px"
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
