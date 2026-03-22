'use client'

import { useState, useEffect } from 'react'
import { TravelFromSection } from '@/components/destination/TravelFromSection'

export function TravelFromBanner({
  destinationName,
  destLat,
  destLng,
  flightCost,
}: {
  destinationName: string
  destLat: number
  destLng: number
  flightCost: string
}) {
  const [departureCity, setDepartureCity] = useState<string>('')

  useEffect(() => {
    const saved = localStorage.getItem('departureCity')
    if (saved) setDepartureCity(saved)
  }, [])

  if (!departureCity) return null

  return (
    <TravelFromSection
      departureCity={departureCity}
      destinationName={destinationName}
      destLat={destLat}
      destLng={destLng}
      flightCost={flightCost}
    />
  )
}
