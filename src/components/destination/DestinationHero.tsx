'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Destination } from '@/data/types'
import { PEXELS_PHOTOS } from '@/data/pexels-photos'

export function DestinationHero({ destination }: { destination: Destination }) {
  const photos = PEXELS_PHOTOS[destination.slug] || []
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (photos.length === 0) {
    // Fallback: warm gradient
    return (
      <div className="w-full h-[300px] bg-gradient-to-br from-amber-100 to-orange-200 flex items-end">
        <div className="max-w-4xl mx-auto px-6 pb-8 w-full">
          <span className="text-3xl mb-1 block">{destination.flag}</span>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900">{destination.name}</h1>
          <p className="font-sans text-sm text-stone-600 uppercase tracking-widest mt-1">{destination.country}</p>
        </div>
      </div>
    )
  }

  const main = photos[0]
  const side = photos.slice(1, 3)
  const rest = photos.slice(3)

  return (
    <>
      {/* Photo grid — Airbnb style */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        {/* City name above photos */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{destination.flag}</span>
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">
                {destination.name}
              </h1>
              <p className="font-sans text-sm text-stone-400 uppercase tracking-widest">
                {destination.country}
              </p>
            </div>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-3 gap-1.5 rounded-xl overflow-hidden">
          {/* Main photo — spans 2 rows */}
          <button
            onClick={() => setLightboxIndex(0)}
            className="col-span-2 row-span-2 relative aspect-[4/3] cursor-pointer overflow-hidden group"
          >
            <Image
              src={main.url}
              alt={main.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </button>

          {/* Side photos */}
          {side.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i + 1)}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden group"
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* "Show all photos" on last visible photo */}
              {i === side.length - 1 && rest.length > 0 && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="font-sans text-sm text-white font-medium">
                    +{rest.length} more
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Photographer credit */}
        <p className="font-sans text-[10px] text-stone-400 mt-2 text-right">
          Photos by{' '}
          <a href={main.photographerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stone-600">
            {main.photographer}
          </a>
          {' '}via{' '}
          <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-600">
            Pexels
          </a>
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-50 cursor-pointer bg-transparent"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1) }}
              className="absolute left-4 text-white/80 hover:text-white z-50 cursor-pointer bg-black/30 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next */}
          {lightboxIndex < photos.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1) }}
              className="absolute right-4 text-white/80 hover:text-white z-50 cursor-pointer bg-black/30 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Photo */}
          <div className="relative max-w-5xl max-h-[85vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[lightboxIndex].url}
              alt={photos[lightboxIndex].alt}
              width={photos[lightboxIndex].width}
              height={photos[lightboxIndex].height}
              className="object-contain w-full h-auto max-h-[85vh] rounded-lg"
              priority
            />
            <p className="text-center mt-3 font-sans text-sm text-white/70">
              {photos[lightboxIndex].alt}
              <span className="text-white/40 ml-2">
                — {photos[lightboxIndex].photographer}
              </span>
            </p>
            <p className="text-center mt-1 font-sans text-xs text-white/40">
              {lightboxIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
