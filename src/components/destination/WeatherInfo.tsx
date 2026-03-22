'use client'

import { useState } from 'react'
import { MONTH_LABELS } from '@/lib/constants'

export function WeatherInfo({
  bestMonths,
  avgTemps,
}: {
  bestMonths: number[]
  avgTemps: number[]
}) {
  const [unit, setUnit] = useState<'C' | 'F'>('F')
  const [expanded, setExpanded] = useState(false)

  const displayTemps = unit === 'F' ? avgTemps.map((t) => Math.round(t * 9 / 5 + 32)) : avgTemps
  const max = Math.max(...displayTemps)
  const min = Math.min(...displayTemps)
  const range = max - min || 1
  const hotThreshold = unit === 'F' ? 82 : 28
  const coldThreshold = unit === 'F' ? 50 : 10

  return (
    <div>
      {/* Header row: title + toggle + expand */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 cursor-pointer bg-transparent"
        >
          <h3 className="font-sans text-sm font-semibold text-stone-900">
            Weather &amp; Best Time to Visit
          </h3>
          <svg
            className={`w-3.5 h-3.5 text-stone-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="flex items-center bg-stone-100 rounded-md p-0.5">
          <button
            onClick={() => setUnit('F')}
            className={`text-xs font-sans font-medium px-2.5 py-1 rounded transition-all cursor-pointer ${
              unit === 'F' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            °F
          </button>
          <button
            onClick={() => setUnit('C')}
            className={`text-xs font-sans font-medium px-2.5 py-1 rounded transition-all cursor-pointer ${
              unit === 'C' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            °C
          </button>
        </div>
      </div>

      {/* Best months pills — always visible */}
      <div className="bg-white border border-stone-200/80 rounded-lg p-3">
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-1">
          {MONTH_LABELS.map((label, i) => {
            const isBest = bestMonths.includes(i + 1)
            return (
              <div
                key={label}
                className={`text-center py-1.5 rounded text-xs font-sans ${
                  isBest
                    ? 'bg-amber-500 text-stone-900 font-semibold'
                    : 'bg-stone-50 text-stone-400'
                }`}
              >
                {label}
              </div>
            )
          })}
        </div>

        {/* Line chart — collapsible */}
        {expanded && (
          <div className="mt-4 pt-3 border-t border-stone-100">
            {/* Extra top padding (viewBox y starts at 0, data starts at 30) to prevent clipping */}
            <svg viewBox="0 0 480 140" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
              {/* Grid lines */}
              {[0, 0.5, 1].map((pct) => (
                <line key={pct} x1={30} y1={30 + (1 - pct) * 80} x2={460} y2={30 + (1 - pct) * 80} stroke="#f5f5f4" strokeWidth={1} />
              ))}

              {/* Gradient fill */}
              <defs>
                <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.12} />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.01} />
                </linearGradient>
              </defs>

              <path d={buildArea(displayTemps, max, range)} fill="url(#tg)" />
              <path d={buildLine(displayTemps, max, range)} fill="none" stroke="#F59E0B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

              {displayTemps.map((temp, i) => {
                const x = 30 + (i / 11) * 430
                const y = 30 + ((max - temp) / range) * 80
                const isHot = temp >= hotThreshold
                const isCold = temp <= coldThreshold
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r={3} fill={isHot ? '#fb923c' : isCold ? '#93c5fd' : '#F59E0B'} stroke="white" strokeWidth={1.5} />
                    <text x={x} y={y - 9} textAnchor="middle" fontSize={8} fontWeight={600} fontFamily="system-ui" className="fill-stone-500">
                      {temp}°
                    </text>
                    <text x={x} y={128} textAnchor="middle" fontSize={8} fontFamily="system-ui" className="fill-stone-400">
                      {MONTH_LABELS[i]}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        )}

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-2 text-xs font-sans text-amber-600 hover:text-amber-700 cursor-pointer bg-transparent"
          >
            Show temperature chart
          </button>
        )}
      </div>
    </div>
  )
}

function buildLine(temps: number[], max: number, range: number): string {
  return 'M ' + temps.map((t, i) => `${30 + (i / 11) * 430},${30 + ((max - t) / range) * 80}`).join(' L ')
}

function buildArea(temps: number[], max: number, range: number): string {
  const pts = temps.map((t, i) => `${30 + (i / 11) * 430},${30 + ((max - t) / range) * 80}`).join(' L ')
  return `M 30,110 L ${pts} L ${30 + (11 / 11) * 430},110 Z`
}
