'use client'

import {
  estimateFlightTime,
  formatFlightTime,
  formatDistance,
  getRouteInfo,
  DEPARTURE_COORDINATES,
} from '@/lib/travel-utils'

export function TravelFromSection({
  departureCity,
  destinationName,
  destLat,
  destLng,
  flightCost,
}: {
  departureCity: string
  destinationName: string
  destLat: number
  destLng: number
  flightCost: string
}) {
  const departure = DEPARTURE_COORDINATES[departureCity]
  if (!departure) return null

  const { hours, minutes, distance } = estimateFlightTime(
    departure.lat,
    departure.lng,
    destLat,
    destLng
  )
  const route = getRouteInfo(departureCity, destinationName, distance)

  return (
    <div className="bg-gradient-to-r from-amber-50 to-warm-100 border border-amber-200/60 rounded-lg p-5">
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <h3 className="font-sans text-sm font-semibold text-stone-900">
          Flying from {departureCity}
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Flight time */}
        <div>
          <p className="font-sans text-[11px] text-stone-400 uppercase tracking-wider mb-1">
            Est. Flight Time
          </p>
          <p className="font-sans text-lg font-bold text-stone-900">
            {formatFlightTime(hours, minutes)}
          </p>
        </div>

        {/* Distance */}
        <div>
          <p className="font-sans text-[11px] text-stone-400 uppercase tracking-wider mb-1">
            Distance
          </p>
          <p className="font-sans text-sm font-semibold text-stone-900">
            {formatDistance(distance)}
          </p>
        </div>

        {/* Route type */}
        <div>
          <p className="font-sans text-[11px] text-stone-400 uppercase tracking-wider mb-1">
            Route
          </p>
          <p className="font-sans text-sm font-semibold text-stone-900">
            <span className={`inline-flex items-center gap-1 ${
              route.type === 'direct' ? 'text-green-600' :
              route.type === 'likely-connection' ? 'text-amber-600' : 'text-stone-600'
            }`}>
              {route.type === 'direct' ? '✈️ Direct' :
               route.type === 'likely-connection' ? '🔄 1 Stop' : '🔄 1-2 Stops'}
            </span>
          </p>
        </div>

        {/* Cost */}
        <div>
          <p className="font-sans text-[11px] text-stone-400 uppercase tracking-wider mb-1">
            Est. Cost
          </p>
          <p className="font-sans text-lg font-bold text-amber-600">
            {flightCost}
          </p>
        </div>
      </div>

      <p className="font-sans text-xs text-stone-400 mt-3">
        {route.note}
      </p>
    </div>
  )
}
