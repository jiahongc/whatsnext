'use client'

import { useState, useEffect } from 'react'

export function GoogleFlightsLink({
  destinationName,
  destinationCountry,
}: {
  destinationName: string
  destinationCountry: string
}) {
  const [departureCity, setDepartureCity] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('departureCity')
    if (saved) setDepartureCity(saved)
  }, [])

  const query = departureCity
    ? `flights from ${departureCity} to ${destinationName} ${destinationCountry}`
    : `flights to ${destinationName} ${destinationCountry}`

  const url = `https://www.google.com/travel/flights?q=${encodeURIComponent(query)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white border border-stone-200/80 rounded-lg px-4 py-3 hover:border-blue-300 hover:bg-blue-50/20 transition-colors group"
    >
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="font-sans text-sm font-medium text-stone-900 group-hover:text-blue-600 transition-colors">
          {departureCity
            ? `Search flights from ${departureCity} to ${destinationName}`
            : `Search flights to ${destinationName}`}
        </p>
        <p className="font-sans text-xs text-stone-400">Google Flights</p>
      </div>
      <svg className="w-4 h-4 text-stone-300 group-hover:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}
