'use client'

import dynamic from 'next/dynamic'

const MapSection = dynamic(() => import('./MapSection'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        <p className="font-sans text-xs text-stone-400">Loading map</p>
      </div>
    </div>
  ),
})

export function MapLoader({ name, lat, lng }: { name: string; lat: number; lng: number }) {
  return <MapSection name={name} lat={lat} lng={lng} />
}
