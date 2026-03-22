'use client'

import { useState, useEffect } from 'react'
import type { CityInfo } from '@/data/types'
import { getDirectRoute } from '@/data/airline-routes'
import {
  estimateFlightTime,
  formatFlightTime,
  formatDistance,
  DEPARTURE_COORDINATES,
} from '@/lib/travel-utils'
import { MONTH_LABELS } from '@/lib/constants'

interface TravelFromBannerProps {
  destinationName: string
  destLat: number
  destLng: number
  flightCost: string
  visaNote?: string
  cityInfo: CityInfo
  bestMonths: number[]
}

export function TravelFromBanner({
  destinationName,
  destLat,
  destLng,
  flightCost,
  visaNote,
  cityInfo,
  bestMonths,
}: TravelFromBannerProps) {
  const [departureCity, setDepartureCity] = useState<string>('')

  useEffect(() => {
    const saved = localStorage.getItem('departureCity')
    if (saved) setDepartureCity(saved)
  }, [])

  if (!departureCity) return null

  const departure = DEPARTURE_COORDINATES[departureCity]
  if (!departure) return null

  const { hours, minutes, distance } = estimateFlightTime(
    departure.lat, departure.lng, destLat, destLng
  )
  const directRoute = getDirectRoute(departureCity, destinationName.toLowerCase().replace(/\s+/g, '-'))

  // Calculate timezone difference
  const destTzOffset = parseTimezoneOffset(cityInfo.timeZone)
  const departureTzOffset = getDepartureTzOffset(departureCity)
  const tzDiff = destTzOffset !== null && departureTzOffset !== null
    ? destTzOffset - departureTzOffset
    : null

  // Current month context
  const currentMonth = new Date().getMonth() + 1
  const currentTemp = cityInfo.avgTempByMonth[currentMonth - 1]
  const isBestMonth = bestMonths.includes(currentMonth)

  return (
    <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-lg p-5 text-white">
      {/* Route header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-stone-400 font-sans">{departureCity}</span>
        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        <span className="text-sm text-white font-sans font-semibold">{destinationName}</span>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
        <Stat label="Flight Time" value={formatFlightTime(hours, minutes)} />
        <Stat label="Distance" value={formatDistance(distance)} small />
        <Stat
          label="Time Difference"
          value={tzDiff !== null ? `${tzDiff >= 0 ? '+' : ''}${tzDiff}h` : cityInfo.timeZone}
        />
        <Stat label="Est. Cost" value={directRoute?.typicalCost || flightCost} highlight />
      </div>

      {/* Direct flights */}
      {directRoute && (
        <div className="mb-4 py-3 border-t border-white/10">
          <p className="text-xs text-stone-400 font-sans uppercase tracking-wider mb-1">
            Direct flights from {departureCity}
          </p>
          <p className="text-sm text-white font-sans">
            {directRoute.airlines.join(', ')}
            <span className="text-stone-400 ml-2">· {directRoute.frequency}</span>
          </p>
        </div>
      )}

      {!directRoute && (
        <div className="mb-4 py-3 border-t border-white/10">
          <p className="text-xs text-stone-400 font-sans">
            No direct flights from {departureCity} — usually 1-2 stops through a regional hub
          </p>
        </div>
      )}

      {/* Bottom row: visa + current weather */}
      <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-white/10">
        {visaNote && (
          <div className="flex items-start gap-2 flex-1">
            <span className="text-sm">🛂</span>
            <p className="text-xs text-stone-300 font-sans leading-relaxed">{visaNote}</p>
          </div>
        )}
        <div className="flex items-start gap-2 flex-1">
          <span className="text-sm">📅</span>
          <p className="text-xs text-stone-300 font-sans leading-relaxed">
            <span className="text-white font-medium">{MONTH_LABELS[currentMonth - 1]}</span>: {currentTemp}°C / {Math.round(currentTemp * 9/5 + 32)}°F
            {isBestMonth
              ? <span className="text-amber-400 ml-1">— Great time to visit!</span>
              : <span className="text-stone-400 ml-1">— Best months: {bestMonths.slice(0, 3).map(m => MONTH_LABELS[m-1]).join(', ')}</span>
            }
          </p>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, highlight, small }: { label: string; value: string; highlight?: boolean; small?: boolean }) {
  return (
    <div>
      <p className="text-[10px] text-stone-400 font-sans uppercase tracking-wider mb-0.5">{label}</p>
      <p className={`font-sans font-bold ${highlight ? 'text-amber-400' : 'text-white'} ${small ? 'text-sm' : 'text-lg'}`}>
        {value}
      </p>
    </div>
  )
}

function parseTimezoneOffset(tz: string): number | null {
  const match = tz.match(/UTC([+-]\d+(?:\.\d+)?)/)
  if (match) return parseFloat(match[1])
  return null
}

function getDepartureTzOffset(city: string): number | null {
  const offsets: Record<string, number> = {
    'New York': -5, 'Los Angeles': -8, 'Chicago': -6, 'San Francisco': -8,
    'Miami': -5, 'Seattle': -8, 'Boston': -5, 'Dallas': -6, 'Denver': -7,
    'Atlanta': -5, 'London': 0, 'Toronto': -5, 'Sydney': 11, 'Singapore': 8,
    'Dubai': 4, 'Hong Kong': 8, 'Tokyo': 9, 'Mumbai': 5.5, 'Sao Paulo': -3, 'Berlin': 1,
  }
  return offsets[city] ?? null
}
