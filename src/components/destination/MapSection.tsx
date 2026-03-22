'use client'

import { useState, useCallback } from 'react'
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

interface MapSectionProps {
  name: string
  lat: number
  lng: number
}

export default function MapSection({ name, lat, lng }: MapSectionProps) {
  const [viewState, setViewState] = useState({
    longitude: lng,
    latitude: lat,
    zoom: 12,
  })

  const handleMove = useCallback(
    (evt: { viewState: { longitude: number; latitude: number; zoom: number } }) => {
      setViewState(evt.viewState)
    },
    []
  )

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden border border-stone-200">
      <Map
        {...viewState}
        onMove={handleMove}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{ width: '100%', height: '100%' }}
        attributionControl={false}
      >
        <NavigationControl position="top-right" showCompass={false} />
        <Marker longitude={lng} latitude={lat} anchor="bottom">
          <div className="flex flex-col items-center">
            <div className="bg-amber-500 text-stone-900 text-xs font-sans font-semibold px-2.5 py-1 rounded-md shadow-md whitespace-nowrap mb-1">
              {name}
            </div>
            <div className="w-3 h-3 bg-amber-500 rounded-full border-2 border-white shadow-md" />
          </div>
        </Marker>
      </Map>
    </div>
  )
}
