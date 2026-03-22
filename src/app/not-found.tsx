import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-warm-50 flex flex-col items-center justify-center px-6">
      <h1 className="font-serif text-6xl text-stone-900 mb-3">404</h1>
      <p className="font-sans text-lg text-stone-500 mb-8 text-center max-w-md">
        This destination doesn&apos;t exist yet — but there are plenty of others to explore.
      </p>
      <Link
        href="/explore"
        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-sans font-medium px-8 py-3 rounded-[2px] transition-colors"
      >
        Explore Destinations
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </main>
  )
}
