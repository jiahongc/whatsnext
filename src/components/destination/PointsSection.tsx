export function PointsSection({ pointsTip }: { pointsTip?: string }) {
  if (!pointsTip) return null

  return (
    <section>
      <h2 className="font-serif text-2xl text-stone-900 mb-4">
        Points &amp; Miles
      </h2>
      <div className="bg-amber-500/5 border border-amber-500/20 rounded-[2px] px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="text-xl flex-shrink-0 mt-0.5">✈️</span>
          <p className="font-sans text-sm text-stone-700 leading-relaxed">
            {pointsTip}
          </p>
        </div>
      </div>
    </section>
  )
}
