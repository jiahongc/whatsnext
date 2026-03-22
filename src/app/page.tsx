import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Globe will go here in Phase 4 */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800 to-amber-900/40" />

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="font-serif text-6xl md:text-7xl text-white mb-4 tracking-tight">
          Where Next?
        </h1>
        <p className="text-xl md:text-2xl text-stone-300 mb-10 font-sans">
          Discover your next travel destination
        </p>
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-900 font-sans font-medium text-lg px-8 py-4 rounded transition-colors duration-200"
        >
          Explore Destinations
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </main>
  )
}
