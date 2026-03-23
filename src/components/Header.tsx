import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-warm-50/85 backdrop-blur-xl border-b border-stone-200/40 relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-stone-900 hover:text-amber-600 transition-colors"
        >
          What&apos;s Next
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="font-sans text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            Explore
          </Link>
        </nav>
      </div>
    </header>
  )
}
