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
  const [unit, setUnit] = useState<'C' | 'F'>('C')

  const displayTemps = unit === 'F' ? avgTemps.map((t) => Math.round(t * 9 / 5 + 32)) : avgTemps
  const max = Math.max(...displayTemps)
  const min = Math.min(...displayTemps)
  const range = max - min || 1
  const hotThreshold = unit === 'F' ? 82 : 28
  const coldThreshold = unit === 'F' ? 50 : 10

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-2xl text-stone-900">
          Weather &amp; Best Time to Visit
        </h2>
        {/* F/C Toggle */}
        <div className="flex items-center bg-stone-100 rounded-md p-0.5">
          <button
            onClick={() => setUnit('C')}
            className={`text-xs font-sans font-medium px-2.5 py-1 rounded transition-all cursor-pointer ${
              unit === 'C' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            °C
          </button>
          <button
            onClick={() => setUnit('F')}
            className={`text-xs font-sans font-medium px-2.5 py-1 rounded transition-all cursor-pointer ${
              unit === 'F' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            °F
          </button>
        </div>
      </div>

      {/* Combined: month pills showing best months + temperature */}
      <div className="bg-white border border-stone-200/80 rounded-lg p-4">
        {/* Month row with best-month highlighting */}
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-1 mb-4">
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
        <p className="text-[11px] text-stone-400 font-sans mb-4">
          ■ Best months to visit highlighted
        </p>

        {/* Compact SVG Line Chart */}
        <svg viewBox="0 0 480 120" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          {/* Grid lines */}
          {[0, 0.5, 1].map((pct) => (
            <line key={pct} x1={30} y1={10 + (1 - pct) * 80} x2={460} y2={10 + (1 - pct) * 80} stroke="#f5f5f4" strokeWidth={1} />
          ))}

          {/* Gradient fill */}
          <defs>
            <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.12} />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.01} />
            </linearGradient>
          </defs>

          {/* Area */}
          <path d={buildArea(displayTemps, max, min, range)} fill="url(#tg)" />
          {/* Line */}
          <path d={buildLine(displayTemps, max, range)} fill="none" stroke="#F59E0B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

          {/* Points + labels */}
          {displayTemps.map((temp, i) => {
            const x = 30 + (i / 11) * 430
            const y = 10 + ((max - temp) / range) * 80
            const isHot = temp >= hotThreshold
            const isCold = temp <= coldThreshold
            return (
              <g key={i}>
                <circle cx={x} cy={y} r={3} fill={isHot ? '#fb923c' : isCold ? '#93c5fd' : '#F59E0B'} stroke="white" strokeWidth={1.5} />
                <text x={x} y={y - 8} textAnchor="middle" fontSize={8} fontWeight={600} fontFamily="system-ui" className="fill-stone-500">
                  {temp}°
                </text>
                <text x={x} y={108} textAnchor="middle" fontSize={8} fontFamily="system-ui" className="fill-stone-400">
                  {MONTH_LABELS[i]}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </section>
  )
}

function buildLine(temps: number[], max: number, range: number): string {
  return 'M ' + temps.map((t, i) => `${30 + (i / 11) * 430},${10 + ((max - t) / range) * 80}`).join(' L ')
}

function buildArea(temps: number[], max: number, min: number, range: number): string {
  const pts = temps.map((t, i) => `${30 + (i / 11) * 430},${10 + ((max - t) / range) * 80}`).join(' L ')
  return `M 30,90 L ${pts} L ${30 + (11 / 11) * 430},90 Z`
}
