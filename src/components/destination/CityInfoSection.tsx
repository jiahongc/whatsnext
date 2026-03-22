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
              : 'Don\'t drink tap water'
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

      {/* Temperature chart */}
      <TemperatureChart temps={cityInfo.avgTempByMonth} />

      {/* Tipping */}
      <div className="mt-6 bg-white border border-stone-200/80 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-xl">💰</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-sans text-sm font-semibold text-stone-900">Tipping</h3>
              <span className={`text-[10px] font-sans font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${
                cityInfo.tipping.culture === 'expected'
                  ? 'bg-amber-100 text-amber-700'
                  : cityInfo.tipping.culture === 'appreciated'
                  ? 'bg-blue-50 text-blue-600'
                  : cityInfo.tipping.culture === 'included'
                  ? 'bg-green-50 text-green-600'
                  : 'bg-stone-100 text-stone-500'
              }`}>
                {cityInfo.tipping.culture === 'not-expected' ? 'Not Expected' : cityInfo.tipping.culture}
              </span>
            </div>
            <p className="font-sans text-sm text-stone-500 leading-relaxed">
              {cityInfo.tipping.details}
            </p>
          </div>
        </div>
      </div>

      {/* Transportation */}
      <div className="mt-4">
        <h3 className="font-sans text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
          <span>🚌</span> Getting Around
        </h3>
        <div className="space-y-2">
          {cityInfo.transportation.map((t, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white border border-stone-200/80 rounded-lg px-4 py-3"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-sm font-medium text-stone-900">
                    {t.mode}
                  </span>
                  <span className="font-sans text-xs text-amber-600 font-medium">
                    {t.cost}
                  </span>
                </div>
                <p className="font-sans text-xs text-stone-500 mt-0.5">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
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
  const max = Math.max(...temps)
  const min = Math.min(...temps)
  const range = max - min || 1

  return (
    <div>
      <h3 className="font-sans text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
        <span>🌡️</span> Average Temperature by Month
      </h3>
      <div className="bg-white border border-stone-200/80 rounded-lg p-4">
        <div className="flex items-end justify-between gap-1 h-32">
          {temps.map((temp, i) => {
            const height = ((temp - min) / range) * 100
            const isHot = temp >= 28
            const isCold = temp <= 10

            return (
              <div key={i} className="flex flex-col items-center flex-1 gap-1">
                <span className="font-sans text-[10px] text-stone-500 font-medium">
                  {temp}°
                </span>
                <div
                  className={`w-full min-w-[16px] rounded-t transition-all ${
                    isHot
                      ? 'bg-orange-400'
                      : isCold
                      ? 'bg-blue-300'
                      : 'bg-amber-400'
                  }`}
                  style={{ height: `${Math.max(height, 8)}%` }}
                />
                <span className="font-sans text-[10px] text-stone-400">
                  {MONTH_LABELS[i]}
                </span>
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-stone-100">
          <span className="flex items-center gap-1.5 text-[10px] font-sans text-stone-400">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-300" /> Cold (&le;10°C)
          </span>
          <span className="flex items-center gap-1.5 text-[10px] font-sans text-stone-400">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-400" /> Mild
          </span>
          <span className="flex items-center gap-1.5 text-[10px] font-sans text-stone-400">
            <span className="w-2.5 h-2.5 rounded-sm bg-orange-400" /> Hot (&ge;28°C)
          </span>
        </div>
      </div>
    </div>
  )
}
