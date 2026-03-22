'use client'

import { useState, useRef, useEffect } from 'react'

const POPULAR_CITIES = [
  'New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Miami',
  'Seattle', 'Boston', 'Dallas', 'Denver', 'Atlanta',
  'London', 'Toronto', 'Sydney', 'Singapore', 'Dubai',
  'Hong Kong', 'Tokyo', 'Mumbai', 'Sao Paulo', 'Berlin',
]

export function DeparturePicker({
  value,
  onChange,
}: {
  value: string
  onChange: (city: string) => void
}) {
  // Persist to localStorage so destination pages can read it
  useEffect(() => {
    if (value) {
      localStorage.setItem('departureCity', value)
    } else {
      localStorage.removeItem('departureCity')
    }
  }, [value])

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('departureCity')
    if (saved && !value) {
      onChange(saved)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const filtered = search
    ? POPULAR_CITIES.filter((c) =>
        c.toLowerCase().includes(search.toLowerCase())
      )
    : POPULAR_CITIES

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <div
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => {
          setOpen(!open)
          setTimeout(() => inputRef.current?.focus(), 50)
        }}
      >
        <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-sm font-sans">
          <span className="text-stone-400">Flying from </span>
          {value ? (
            <span className="text-stone-900 font-medium">{value}</span>
          ) : (
            <span className="text-amber-600 group-hover:text-amber-700 underline underline-offset-2 decoration-amber-300">
              choose city
            </span>
          )}
        </span>
        {value && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onChange('')
            }}
            className="text-stone-400 hover:text-stone-600 cursor-pointer bg-transparent"
            aria-label="Clear departure city"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-stone-200 z-50 py-2">
          {/* Search */}
          <div className="px-3 pb-2">
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search cities..."
              className="w-full text-sm font-sans px-3 py-2 rounded-md border border-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20"
            />
          </div>

          {/* City list */}
          <div className="max-h-48 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-sm text-stone-400 font-sans">
                No cities found
              </p>
            ) : (
              filtered.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    onChange(city)
                    setOpen(false)
                    setSearch('')
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-sans cursor-pointer transition-colors ${
                    city === value
                      ? 'bg-amber-50 text-amber-700 font-medium'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {city}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
