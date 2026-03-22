'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { isWebGLAvailable, isLowEndDevice } from '@/lib/webgl-detect'
import { WebGLErrorBoundary } from '@/components/globe/WebGLErrorBoundary'

const GlobeScene = dynamic(() => import('@/components/globe/GlobeScene'), {
  ssr: false,
  loading: () => null,
})

function GradientFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800 to-amber-900/30">
      {/* Animated subtle glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(252, 211, 77, 0.15) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

export default function HomePage() {
  const [canRender3D, setCanRender3D] = useState(false)

  useEffect(() => {
    setCanRender3D(isWebGLAvailable() && !isLowEndDevice())
  }, [])

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background: globe or gradient */}
      {canRender3D ? (
        <WebGLErrorBoundary fallback={<GradientFallback />}>
          <div className="absolute inset-0">
            <GlobeScene />
          </div>
          {/* Overlay to ensure text legibility */}
          <div className="absolute inset-0 bg-stone-900/40" />
        </WebGLErrorBoundary>
      ) : (
        <GradientFallback />
      )}

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-3 tracking-tight leading-none">
          What&apos;s Next?
        </h1>
        <p className="font-sans text-lg md:text-xl text-stone-300/90 mb-10 max-w-md mx-auto">
          Discover your next travel destination.
          <br />
          Filter by budget, vibe, weather &amp; more.
        </p>
        <Link
          href="/explore"
          className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-stone-900 font-sans font-medium text-lg px-10 py-4 rounded-[2px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)]"
          style={{
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Explore Destinations
          <span aria-hidden="true" className="text-xl">&rarr;</span>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </main>
  )
}
