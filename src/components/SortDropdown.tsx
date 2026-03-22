'use client'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'budget-low', label: 'Budget: Low → High' },
  { value: 'budget-high', label: 'Budget: High → Low' },
  { value: 'a-z', label: 'A → Z' },
] as const

export function SortDropdown({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="sort-select"
        className="text-xs text-stone-400 uppercase tracking-wide font-sans whitespace-nowrap"
      >
        Sort
      </label>
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border border-stone-200 rounded text-sm font-sans text-stone-600 py-2 pl-3 pr-8 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-colors cursor-pointer appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23A8A29E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 8px center',
          backgroundSize: '16px',
        }}
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
