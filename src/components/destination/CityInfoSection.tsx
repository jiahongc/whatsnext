'use client'

import { useState } from 'react'
import type { CityInfo } from '@/data/types'
import { MONTH_LABELS } from '@/lib/constants'

export function CityInfoSection({
  cityInfo,
  cityName,
}: {
  cityInfo: CityInfo
  cityName: string
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-stone-900 mb-2">
        Know Before You Go
      </h2>
      <p className="font-sans text-sm text-stone-400 mb-6">
        Essential info for visiting {cityName}
      </p>

      {/* Quick facts grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <QuickFact
          icon="💱"
          label="Currency"
          value={`${cityInfo.currency.symbol} ${cityInfo.currency.code}`}
          detail={cityInfo.currency.exchangeRate}
        />
        <QuickFact
          icon="💧"
          label="Tap Water"
          value={
            cityInfo.waterSafety === 'safe'
              ? 'Safe to Drink'
              : cityInfo.waterSafety === 'boil'
              ? 'Boil First'
              : 'Buy Bottled'
          }
          detail={
            cityInfo.waterSafety === 'safe'
              ? 'Tap water is drinkable'
              : "Don't drink tap water"
          }
        />
        <QuickFact
          icon="🔌"
          label="Plug Type"
          value={cityInfo.plugType}
          detail="Bring an adapter"
        />
        <QuickFact
          icon="🕐"
          label="Time Zone"
          value={cityInfo.timeZone}
          detail={`Emergency: ${cityInfo.emergencyNumber}`}
        />
      </div>

      {/* Temperature chart with F/C toggle */}
      <TemperatureChart temps={cityInfo.avgTempByMonth} />

      {/* Tipping */}
      <div className="mt-6 bg-white border border-stone-200/80 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-xl">💰</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-sans text-sm font-semibold text-stone-900">
                Tipping
              </h3>
              <span
                className={`text-[10px] font-sans font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  cityInfo.tipping.culture === 'expected'
                    ? 'bg-amber-100 text-amber-700'
                    : cityInfo.tipping.culture === 'appreciated'
                    ? 'bg-blue-50 text-blue-600'
                    : cityInfo.tipping.culture === 'included'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-stone-100 text-stone-500'
                }`}
              >
                {cityInfo.tipping.culture === 'not-expected'
                  ? 'Not Expected'
                  : cityInfo.tipping.culture}
              </span>
            </div>
            <p className="font-sans text-sm text-stone-500 leading-relaxed">
              {cityInfo.tipping.details}
            </p>
          </div>
        </div>
      </div>

      {/* Transportation */}
      <div className="mt-6">
        <h3 className="font-sans text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
          <span>🚌</span> Getting Around
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {cityInfo.transportation.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-stone-200/80 rounded-lg px-4 py-3"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-sans text-sm font-medium text-stone-900">
                  {t.mode}
                </span>
                <span className="font-sans text-xs text-amber-600 font-medium">
                  {formatCostRange(t.cost)}
                </span>
              </div>
              <p className="font-sans text-xs text-stone-500 leading-relaxed">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Ensure both numbers in a range have dollar signs: "$3-10" → "$3-$10"
function formatCostRange(cost: string): string {
  return cost.replace(/\$(\d[\d,.]*)\s*-\s*(\d)/g, '$$$1–$$$2')
}

function QuickFact({
  icon,
  label,
  value,
  detail,
}: {
  icon: string
  label: string
  value: string
  detail: string
}) {
  return (
    <div className="bg-white border border-stone-200/80 rounded-lg p-3.5 text-center">
      <span className="text-xl block mb-1.5">{icon}</span>
      <p className="font-sans text-[11px] text-stone-400 uppercase tracking-wider mb-0.5">
        {label}
      </p>
      <p className="font-sans text-sm font-semibold text-stone-900 leading-tight">
        {value}
      </p>
      <p className="font-sans text-[11px] text-stone-400 mt-1">{detail}</p>
    </div>
  )
}

function TemperatureChart({ temps }: { temps: number[] }) {
  const [unit, setUnit] = useState<'C' | 'F'>('C')

  const displayTemps = unit === 'F' ? temps.map((t) => Math.round(t * 9 / 5 + 32)) : temps
  const max = Math.max(...displayTemps)
  const min = Math.min(...displayTemps)
  const range = max - min || 1
  const hotThreshold = unit === 'F' ? 82 : 28
  const coldThreshold = unit === 'F' ? 50 : 10

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-sans text-sm font-semibold text-stone-900 flex items-center gap-2">
          <span>🌡️</span> Average Temperature by Month
        </h3>
        {/* F/C Toggle */}
        <div className="flex items-center bg-stone-100 rounded-md p-0.5">
          <button
            onClick={() => setUnit('C')}
            className={`text-xs font-sans font-medium px-2.5 py-1 rounded transition-all cursor-pointer ${
              unit === 'C'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            °C
          </button>
          <button
            onClick={() => setUnit('F')}
            className={`text-xs font-sans font-medium px-2.5 py-1 rounded transition-all cursor-pointer ${
              unit === 'F'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            °F
          </button>
        </div>
      </div>

      <div className="bg-white border border-stone-200/80 rounded-lg p-5">
        {/* SVG Line Chart */}
        <div className="relative">
          <svg viewBox="0 0 480 180" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
              <line
                key={pct}
                x1={40}
                y1={20 + (1 - pct) * 120}
                x2={460}
                y2={20 + (1 - pct) * 120}
                stroke="#f5f5f4"
                strokeWidth={1}
              />
            ))}

            {/* Y-axis labels */}
            <text x={35} y={24} textAnchor="end" className="fill-stone-400" fontSize={9} fontFamily="system-ui">
              {max}°
            </text>
            <text x={35} y={84} textAnchor="end" className="fill-stone-400" fontSize={9} fontFamily="system-ui">
              {Math.round((max + min) / 2)}°
            </text>
            <text x={35} y={144} textAnchor="end" className="fill-stone-400" fontSize={9} fontFamily="system-ui">
              {min}°
            </text>

            {/* Gradient fill under the line */}
            <defs>
              <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            {/* Area fill */}
            <path
              d={buildAreaPath(displayTemps, min, range)}
              fill="url(#tempGradient)"
            />

            {/* Line */}
            <path
              d={buildLinePath(displayTemps, min, range)}
              fill="none"
              stroke="#F59E0B"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data points + labels */}
            {displayTemps.map((temp, i) => {
              const x = 40 + (i / 11) * 420
              const y = 20 + ((max - temp) / range) * 120
              const isHot = temp >= hotThreshold
              const isCold = temp <= coldThreshold

              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={y}
                    r={4}
                    fill={isHot ? '#fb923c' : isCold ? '#93c5fd' : '#F59E0B'}
                    stroke="white"
                    strokeWidth={2}
                  />
                  <text
                    x={x}
                    y={y - 10}
                    textAnchor="middle"
                    className="fill-stone-600"
                    fontSize={9}
                    fontWeight={600}
                    fontFamily="system-ui"
                  >
                    {temp}°
                  </text>
                  <text
                    x={x}
                    y={165}
                    textAnchor="middle"
                    className="fill-stone-400"
                    fontSize={9}
                    fontFamily="system-ui"
                  >
                    {MONTH_LABELS[i]}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-2 pt-3 border-t border-stone-100">
          <span className="flex items-center gap-1.5 text-[10px] font-sans text-stone-400">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-300" /> Cold
          </span>
          <span className="flex items-center gap-1.5 text-[10px] font-sans text-stone-400">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Mild
          </span>
          <span className="flex items-center gap-1.5 text-[10px] font-sans text-stone-400">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400" /> Hot
          </span>
        </div>
      </div>
    </div>
  )
}

function buildLinePath(temps: number[], min: number, range: number): string {
  const points = temps.map((temp, i) => {
    const x = 40 + (i / 11) * 420
    const y = 20 + ((Math.max(...temps) - temp) / range) * 120
    return `${x},${y}`
  })
  return `M ${points.join(' L ')}`
}

function buildAreaPath(temps: number[], min: number, range: number): string {
  const max = Math.max(...temps)
  const points = temps.map((temp, i) => {
    const x = 40 + (i / 11) * 420
    const y = 20 + ((max - temp) / range) * 120
    return `${x},${y}`
  })
  const firstX = 40
  const lastX = 40 + (11 / 11) * 420
  return `M ${firstX},140 L ${points.join(' L ')} L ${lastX},140 Z`
}
