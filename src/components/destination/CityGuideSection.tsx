'use client'

import { useState } from 'react'

interface CityGuide {
  quickFacts: {
    population: string
    founded: string
    knownFor: string
    bestComparedTo: string
    idealTripLength: string
  }
  overview: string
  history: string
  culture: string
  neighborhoods: {
    name: string
    description: string
    mustDo: string
  }[]
}

export function CityGuideSection({
  cityName,
  tagline,
  description,
  guide,
  vibeTags,
}: {
  cityName: string
  tagline: string
  description: string
  guide: CityGuide
  vibeTags: string[]
}) {
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'culture' | 'neighborhoods'>('overview')

  const tabs = [
    { key: 'overview' as const, label: 'Overview' },
    { key: 'history' as const, label: 'History' },
    { key: 'culture' as const, label: 'Culture' },
    { key: 'neighborhoods' as const, label: 'Neighborhoods' },
  ]

  return (
    <section>
      {/* Tagline */}
      <p className="font-serif text-xl text-amber-600 italic mb-2">{tagline}</p>

      {/* Short description */}
      <p className="font-sans text-base text-stone-600 leading-relaxed mb-3">{description}</p>

      {/* Vibe tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {vibeTags.map((tag) => (
          <span key={tag} className="text-xs text-stone-500 lowercase border-b-[1.5px] border-amber-400 pb-px">
            {tag}
          </span>
        ))}
      </div>

      {/* Quick facts bar */}
      <div className="bg-white border border-stone-200/80 rounded-lg p-4 mb-5">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
          <QuickFact label="Population" value={guide.quickFacts.population} />
          <QuickFact label="Founded" value={guide.quickFacts.founded} />
          <QuickFact label="Known For" value={guide.quickFacts.knownFor} />
          <QuickFact label="Feels Like" value={guide.quickFacts.bestComparedTo} />
          <QuickFact label="Ideal Trip" value={guide.quickFacts.idealTripLength} />
        </div>
      </div>

      {/* Tabbed content */}
      <div className="bg-white border border-stone-200/80 rounded-lg overflow-hidden">
        {/* Tab bar */}
        <div className="flex border-b border-stone-200/60">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 text-sm font-sans font-medium text-center cursor-pointer transition-colors ${
                activeTab === tab.key
                  ? 'text-amber-600 border-b-2 border-amber-500 bg-amber-50/30'
                  : 'text-stone-500 hover:text-stone-700 hover:bg-stone-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-5">
          {activeTab === 'overview' && (
            <div className="space-y-3">
              {guide.overview.split('\n').filter(Boolean).map((p, i) => (
                <p key={i} className="font-sans text-sm text-stone-600 leading-relaxed">{p}</p>
              ))}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-3">
              {guide.history.split('\n').filter(Boolean).map((p, i) => (
                <p key={i} className="font-sans text-sm text-stone-600 leading-relaxed">{p}</p>
              ))}
            </div>
          )}

          {activeTab === 'culture' && (
            <div className="space-y-3">
              {guide.culture.split('\n').filter(Boolean).map((p, i) => (
                <p key={i} className="font-sans text-sm text-stone-600 leading-relaxed">{p}</p>
              ))}
            </div>
          )}

          {activeTab === 'neighborhoods' && (
            <div className="space-y-3">
              {guide.neighborhoods.map((n) => (
                <div key={n.name} className="border border-stone-100 rounded-lg p-4">
                  <h4 className="font-sans text-sm font-semibold text-stone-900 mb-1">{n.name}</h4>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed mb-2">{n.description}</p>
                  <p className="font-sans text-xs text-amber-600">
                    <span className="font-medium">Must do:</span> {n.mustDo}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function QuickFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] text-stone-400 uppercase tracking-wider">{label}</p>
      <p className="font-sans text-xs font-medium text-stone-800 mt-0.5 leading-tight">{value}</p>
    </div>
  )
}
