export function CityFitSection({
  bestFor,
  commonMistakes,
  cityName,
}: {
  bestFor: string[]
  commonMistakes: string[]
  cityName: string
}) {
  return (
    <section className="space-y-5">
      {/* Who this city is for */}
      <div>
        <h2 className="font-serif text-2xl text-stone-900 mb-3">Who {cityName} Is For</h2>
        <div className="flex flex-wrap gap-2">
          {bestFor.map((b) => (
            <span
              key={b}
              className="font-sans text-sm text-stone-700 bg-amber-50 border border-amber-200/60 px-3.5 py-1.5 rounded-lg"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Common mistakes */}
      {commonMistakes.length > 0 && (
        <div>
          <h3 className="font-sans text-sm font-semibold text-stone-900 mb-2 flex items-center gap-2">
            <span>⚠️</span> Common Mistakes to Avoid
          </h3>
          <div className="bg-white border border-stone-200/80 rounded-lg divide-y divide-stone-50">
            {commonMistakes.map((m, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-3">
                <span className="font-sans text-xs text-red-400 font-bold mt-0.5 flex-shrink-0">
                  {i + 1}
                </span>
                <p className="font-sans text-sm text-stone-600 leading-relaxed">{m}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
