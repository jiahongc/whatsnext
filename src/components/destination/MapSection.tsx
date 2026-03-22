'use client'

import { useState, useCallback } from 'react'
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

interface MapSectionProps {
  name: string
  lat: number
  lng: number
  pois?: string[]
}

export default function MapSection({ name, lat, lng, pois }: MapSectionProps) {
  const [viewState, setViewState] = useState({
    longitude: lng,
    latitude: lat,
    zoom: 13,
  })

  const handleMove = useCallback(
    (evt: { viewState: { longitude: number; latitude: number; zoom: number } }) => {
      setViewState(evt.viewState)
    },
    []
  )

  return (
    <div className="w-full aspect-[16/10] rounded-lg overflow-hidden border border-stone-200 relative">
      <Map
        {...viewState}
        onMove={handleMove}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{ width: '100%', height: '100%' }}
        attributionControl={false}
      >
        <NavigationControl position="top-right" showCompass={false} />

        {/* Main destination marker */}
        <Marker longitude={lng} latitude={lat} anchor="bottom">
          <div className="flex flex-col items-center">
            <div className="bg-amber-500 text-stone-900 text-xs font-sans font-semibold px-2.5 py-1 rounded-md shadow-md whitespace-nowrap mb-1">
              {name}
            </div>
            <div className="w-3.5 h-3.5 bg-amber-500 rounded-full border-2 border-white shadow-lg" />
          </div>
        </Marker>
      </Map>

      {/* POI list overlay */}
      {pois && pois.length > 0 && (
        <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm">
          <p className="text-[10px] font-sans text-stone-400 uppercase tracking-wider mb-1.5">Top Attractions</p>
          <div className="flex flex-wrap gap-1.5">
            {pois.slice(0, 5).map((poi, i) => (
              <span key={i} className="text-[11px] font-sans text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                {poi}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
