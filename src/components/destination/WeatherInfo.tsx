import { MONTH_LABELS } from '@/lib/constants'

export function WeatherInfo({ bestMonths }: { bestMonths: number[] }) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-stone-900 mb-4">
        Best Time to Visit
      </h2>
      <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5">
        {MONTH_LABELS.map((label, i) => {
          const isBest = bestMonths.includes(i + 1)
          return (
            <div
              key={label}
              className={`text-center py-2 px-1 rounded-[2px] text-xs font-sans transition-colors ${
                isBest
                  ? 'bg-amber-500 text-stone-900 font-medium'
                  : 'bg-stone-100 text-stone-400'
              }`}
            >
              {label}
            </div>
          )
        })}
      </div>
      <p className="text-xs text-stone-400 font-sans mt-2">
        Highlighted months indicate the best travel season.
      </p>
    </section>
  )
}
