import type { RedditCommunity } from '@/data/types'

export function RedditSection({ communities }: { communities: RedditCommunity[] }) {
  if (communities.length === 0) return null

  return (
    <section>
      <h2 className="font-serif text-2xl text-stone-900 mb-2">
        Reddit Communities
      </h2>
      <p className="font-sans text-sm text-stone-400 mb-5">
        Get tips from locals and fellow travelers
      </p>

      <div className="space-y-2.5">
        {communities.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 bg-white border border-stone-200/80 rounded-lg px-4 py-3.5 hover:border-orange-300 hover:bg-orange-50/30 transition-colors group"
          >
            {/* Reddit icon */}
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 13.28c.04.245.06.497.06.754 0 3.838-4.468 6.949-9.984 6.949S-1.842 17.872-1.842 14.034c0-.257.02-.509.06-.754a1.643 1.643 0 01-.73-1.363c0-.907.735-1.642 1.642-1.642.445 0 .848.178 1.143.468 1.578-1.075 3.61-1.735 5.8-1.81l1.107-5.192.015-.042a.32.32 0 01.383-.224l3.672.78a1.17 1.17 0 012.187.598 1.17 1.17 0 01-2.313.304l-3.24-.688-.976 4.578c2.138.09 4.116.752 5.66 1.804a1.635 1.635 0 011.135-.46c.907 0 1.642.736 1.642 1.643 0 .573-.293 1.077-.737 1.37zM8.5 13.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm7 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-3.5 4.715c1.614 0 2.93-.51 3.508-1.088a.32.32 0 00-.452-.452c-.432.432-1.598.86-3.056.86s-2.624-.428-3.056-.86a.32.32 0 00-.452.452c.578.578 1.894 1.088 3.508 1.088z" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-sans text-sm font-medium text-stone-900 group-hover:text-orange-600 transition-colors">
                  {c.name}
                </span>
                {c.members && (
                  <span className="font-sans text-[11px] text-stone-400">
                    {c.members}
                  </span>
                )}
              </div>
              <p className="font-sans text-xs text-stone-500 mt-0.5 truncate">
                {c.description}
              </p>
            </div>

            {/* External link icon */}
            <svg className="w-4 h-4 text-stone-300 group-hover:text-orange-400 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}
