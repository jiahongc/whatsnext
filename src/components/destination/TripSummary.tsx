import type { Destination } from '@/data/types'
import { formatBestMonths } from '@/lib/constants'

export function TripSummary({ destination }: { destination: Destination }) {
  const d = destination

  return (
    <div className="bg-white border border-stone-200/80 rounded-lg p-4">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <SummaryItem
          label="Best For"
          value={d.bestFor.slice(0, 2).join(', ')}
        />
        <SummaryItem
          label="Ideal Trip"
          value={d.cityGuide.quickFacts.idealTripLength}
        />
        <SummaryItem
          label="Best Months"
          value={formatBestMonths(d.bestMonths)}
        />
        <SummaryItem
          label="Budget"
          value={`${'$'.repeat(d.budgetTier)} · Est. flight ${d.flightCost} RT`}
        />
        <SummaryItem
          label="Language"
          value={`${d.language}${d.englishFriendly ? ' · English OK' : ''}`}
        />
      </div>
    </div>
  )
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] text-stone-400 uppercase tracking-wider font-sans">{label}</p>
      <p className="text-sm text-stone-800 font-medium font-sans mt-0.5 leading-tight">{value}</p>
    </div>
  )
}
