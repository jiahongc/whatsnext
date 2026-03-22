export function ThingsToDoSection({ items }: { items: string[] }) {
  if (items.length === 0) return null

  return (
    <section>
      <h2 className="font-serif text-2xl text-stone-900 mb-4">
        Top Things to Do
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-warm-100 rounded-[2px] px-4 py-3"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-amber-500 text-stone-900 text-[11px] font-bold font-sans rounded-full flex-shrink-0">
              {i + 1}
            </span>
            <span className="font-sans text-sm text-stone-700">{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
