'use client'

import dynamic from 'next/dynamic'

const MapSection = dynamic(() => import('./MapSection'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[16/10] rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center animate-pulse">
      <p className="font-sans text-sm text-stone-400">Loading map...</p>
    </div>
  ),
})

export function MapLoader({
  name,
  lat,
  lng,
  pois,
}: {
  name: string
  lat: number
  lng: number
  pois?: string[]
}) {
  return <MapSection name={name} lat={lat} lng={lng} pois={pois} />
}
