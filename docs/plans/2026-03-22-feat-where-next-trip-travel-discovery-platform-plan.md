---
title: "feat: Where Next Trip — Travel Discovery Platform"
type: feat
date: 2026-03-22
deepened: 2026-03-22
---

# Where Next Trip — Travel Discovery Platform

## Enhancement Summary

**Deepened on:** 2026-03-22
**Research agents used:** Next.js 15 patterns, Filter/Card UX, Mapbox + R3F, Frontend Design, SEO, Framer Motion

### Key Improvements from Research
1. **Tailwind v4 uses CSS-based config** — `tailwind.config.ts` is dead, use `@theme {}` in CSS
2. **Use `nuqs` for URL state** — type-safe URL state management, replaces manual `useSearchParams` wrangling
3. **View Transitions API as zero-bundle alternative** to Framer Motion for grid reflow (baseline browser support in 2026)
4. **"Travel journal / polaroid" design direction** — DM Serif Display + Instrument Sans fonts, polaroid-padded cards with 2px border-radius, underline vibe tags instead of pill badges
5. **Golden atmosphere globe shader** — concrete GLSL code ready, 2K NASA texture sufficient
6. **Mapbox custom warm style** via Studio LUT — golden-hour tinted map
7. **`opengraph-image.tsx` convention** for auto-generated per-destination OG images
8. **`TouristDestination` JSON-LD** schema for structured data

### New Considerations Discovered
- `params` is a `Promise` in Next.js 15 — must `await` it in `generateMetadata` and page components
- `borderRadius` and `boxShadow` must be inline styles on motion components (CSS class values get distorted during layout animation)
- Mapbox GL JS is ~398KB gzipped — lazy-loading is non-negotiable
- `@starting-style` CSS can handle initial card entry stagger with zero JS
- `nuqs` still needs a `<Suspense>` boundary in App Router

---

## Overview

A travel discovery website where users explore 30-50 destinations through a filterable, sortable card grid — the primary experience. Users filter by continent, budget, vibe, weather/travel month, and language, browse destination cards with photos and key metrics, then drill into full destination pages with sample itineraries, points tips, and a Mapbox map. A 3D animated globe serves as a stunning landing page hero. Light warm "golden hour" aesthetic with a "travel journal" design feel. Static curated data for v1.

## Problem Statement / Motivation

Choosing where to travel next is overwhelming. Existing tools focus on price, not discovery. There's no tool that lets you filter by what matters (budget? English-friendly? beach vibes?), get inspired with sample itineraries and points tips, and see it all in a beautiful interface. Nomads.com does this for digital nomads — Where Next Trip does it for anyone wondering where to fly next.

## Proposed Solution

A Next.js web app with a data-driven destination grid as the core experience:

1. **Landing hero** — animated 3D globe background, CTA to explore
2. **Explore page** — filter bar + sortable card grid of 30-50 destinations
3. **Destination page** — full detail with itinerary, points, weather, map

## Technical Approach

### Architecture

```
where-next-trip/
├── app/
│   ├── layout.tsx                # Root layout, fonts, metadata
│   ├── page.tsx                  # Landing page with globe hero
│   ├── explore/
│   │   └── page.tsx              # Card grid + filters (core product)
│   ├── destination/
│   │   └── [slug]/
│   │       ├── page.tsx          # Destination detail (SSR)
│   │       └── opengraph-image.tsx  # Auto-generated OG image
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── robots.ts                 # Robots config
│   └── not-found.tsx             # 404 page
├── components/
│   ├── globe/                    # 3D Globe (landing page only)
│   │   ├── GlobeScene.tsx        # R3F Canvas wrapper ('use client')
│   │   ├── Earth.tsx             # Sphere + golden atmosphere shader
│   │   └── WebGLErrorBoundary.tsx # Error boundary for 3D
│   ├── DestinationCard.tsx       # Individual card in the grid
│   ├── DestinationGrid.tsx       # Responsive card grid + load more
│   ├── FilterPanel.tsx           # All filters in one component
│   ├── SearchInput.tsx           # Text search
│   ├── SortDropdown.tsx          # Sort selector
│   ├── DestinationJsonLd.tsx     # Structured data component
│   └── destination/              # Detail page sections
│       ├── DestinationHero.tsx   # Hero image + key stats
│       ├── ItinerarySection.tsx  # Day-by-day plan
│       ├── PointsSection.tsx     # Miles/points tips
│       ├── WeatherInfo.tsx       # Best months + weather
│       └── MapSection.tsx        # Lazy-loaded Mapbox map
├── data/
│   ├── destinations.json         # 30-50 curated destinations
│   └── types.ts                  # TypeScript types
├── lib/
│   ├── filters.ts                # Filter + search + sort logic
│   ├── constants.ts              # Labels, month names, config
│   └── webgl-detect.ts           # WebGL + device capability check
├── public/
│   ├── images/destinations/      # Destination hero photos
│   ├── textures/                 # Earth textures for globe
│   └── og-image.png
├── styles/
│   └── globals.css               # Tailwind v4 @import + @theme
├── next.config.ts
├── package.json
└── tsconfig.json
```

### Key Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 15 (App Router) | SSR for SEO, Vercel deployment, TypeScript |
| Core UI | Filterable card grid | Practical, mobile-friendly, inspired by Nomads.com |
| Globe | Visual accent (landing only) | "Whoa" moment without being the core interaction |
| 3D Engine | React Three Fiber v9 | Required for React 19/Next.js 15 compat |
| Grid animation | **View Transitions API** (primary) + Framer Motion fallback | Zero bundle cost, baseline browser support in 2026 |
| Entry animation | **CSS `@starting-style`** | Zero JS for initial card stagger |
| Hover/transitions | **CSS transitions** | No library needed for hover lift, fade |
| Styling | **Tailwind CSS v4** (CSS-based config via `@theme {}`) | No `tailwind.config.ts` — v4 uses CSS directives |
| URL state | **`nuqs`** library | Type-safe URL ↔ state sync, replaces manual `useSearchParams` |
| Maps (detail page) | Mapbox GL JS via react-map-gl | Free 50k loads/month, lazy-loaded (~398KB gzipped) |
| Fonts | **DM Serif Display** (headings) + **Instrument Sans** (body) | Editorial "travel journal" feel, both free on Google Fonts |
| Data (v1) | Curated static JSON (30-50 destinations) | Ship fast, no API dependencies |
| Flight costs | Simple string range | "~$400-800" — no fake precision |
| Visa info | Simple `visaNote` string per destination | No matrix, no engine, no stale data |
| Pagination | "Load more" button (24 cards per batch) | Avoids rendering 50+ cards at once |
| OG images | Colocated `opengraph-image.tsx` per route | Auto-discovered by Next.js, generated at build time |
| Structured data | `TouristDestination` JSON-LD | Improves AI search visibility, travel-specific schema |

### URL Structure

```
/                                    → Landing with globe hero
/explore                             → All destinations
/explore?continent=asia&budget=1,2   → Filtered view
/explore?q=beach&vibe=romantic       → Search + filter
/destination/tokyo                   → Destination detail (SSR)
```

### Data Model

```typescript
// data/types.ts

interface Destination {
  slug: string                  // "tokyo" — primary key + URL
  name: string                  // "Tokyo"
  country: string               // "Japan"
  flag: string                  // "🇯🇵"
  continent: Continent          // "asia"
  coordinates: { lat: number; lng: number }
  heroImage: string             // "/images/destinations/tokyo.jpg"
  budgetTier: 1 | 2 | 3        // $ / $$ / $$$
  bestMonths: number[]          // [3,4,5,10,11] — no hemisphere ambiguity
  flightCost: string            // "$400-800"
  pointsTip?: string            // "ANA via Virgin Atlantic, 35-50k miles RT"
  itinerary: ItineraryDay[]     // 3-5 day sample plan
  topThingsToDo: string[]       // ["Shibuya Crossing", "Tsukiji Market"]
  vibeTags: VibeTag[]           // ["foodie", "cultural"]
  language: string              // "Japanese"
  englishFriendly: boolean      // true/false
  description: string           // 2-3 sentence summary
  visaNote?: string             // "Visa-free for most Western passports, 90 days"
}

interface ItineraryDay {
  day: number
  title: string                 // "Explore Shibuya & Harajuku"
  activities: string[]          // ["Morning: Meiji Shrine", ...]
}

type Continent = "africa" | "asia" | "europe" | "north-america" | "south-america" | "oceania"
type VibeTag = "adventure" | "romantic" | "foodie" | "cultural" | "beach" | "nature" | "nightlife" | "budget" | "luxury" | "family"

// Filter state managed by nuqs — URL is single source of truth
interface FilterState {
  continents: Continent[]
  budgetTiers: (1 | 2 | 3)[]
  vibes: VibeTag[]
  travelMonths: number[]        // multi-select months
  englishFriendlyOnly: boolean
  searchQuery: string
  sortBy: "featured" | "budget-low" | "budget-high" | "a-z"
}
```

### Design Direction: "Travel Journal, Not Travel Agency"

**Fonts:** DM Serif Display (destination names, headings) + Instrument Sans (body, UI). Serif for editorial warmth, sans for clean readability.

**Typography Scale:**

| Element | Font | Size | Color | Notes |
|---------|------|------|-------|-------|
| Page title | serif | text-4xl | stone-900 | tracking-tight |
| Card destination name | serif | text-xl | stone-900 | |
| Card country | sans | text-xs | stone-400 | uppercase, tracking-widest |
| Card info line | sans | text-sm | stone-600 | |
| Vibe tags | sans | text-xs | stone-600 | lowercase, amber underline (not pill badges) |
| Filter pills | sans | text-sm | stone-600/900 | 4px border-radius (not fully rounded) |
| Results count | sans | text-sm | stone-400 | uppercase, tracking-wide |

### Color Palette — "Golden Hour" (Tailwind v4 CSS Config)

```css
/* styles/globals.css */
@import "tailwindcss";

@theme {
  --color-warm-50: #FFFBF5;
  --color-warm-100: #FFF7ED;
  --color-warm-200: #FEF0DB;
  --color-amber-300: #FDE68A;
  --color-amber-400: #FCD34D;
  --color-amber-500: #F59E0B;
  --color-amber-600: #D97706;
  --color-orange-600: #EA580C;
  --color-stone-100: #F5F5F4;
  --color-stone-200: #E7E5E4;
  --color-stone-400: #A8A29E;
  --color-stone-600: #57534E;
  --color-stone-900: #1C1917;
  --font-family-serif: 'DM Serif Display', Georgia, serif;
  --font-family-sans: 'Instrument Sans', system-ui, sans-serif;
}
```

### Destination Card Design — "Polaroid" Feel

```
┌──────────────────────────────────┐  ← 2px border-radius, NOT rounded-xl
│  padding: 10px                   │
│  ┌────────────────────────────┐  │
│  │  [Photo - 4:3 ratio]      │  │  ← slight warm filter: sepia(0.05)
│  │  object-fit: cover         │  │
│  └────────────────────────────┘  │
│  padding-bottom: 20px (polaroid) │
│  Tokyo                      🇯🇵  │  ← DM Serif Display
│  JAPAN                           │  ← Instrument Sans, uppercase, stone-400
│                                  │
│  ●●○  ·  Mar–May  ·  ✈ ~$500    │  ← amber dots for budget (not emoji)
│                                  │
│  foodie  cultural                │  ← underlined tags, NOT pill badges
│                                  │
└──────────────────────────────────┘

Hover: translateY(-6px) + amber-tinted box-shadow
       cubic-bezier(0.16, 1, 0.3, 1) — overshoot spring ease
       Photo: scale(1.04) + desaturation lift
```

### Core State Management: `nuqs`

```typescript
// In explore page — type-safe URL state with nuqs
import { useQueryStates, parseAsArrayOf, parseAsString, parseAsBoolean } from 'nuqs'

const [filters, setFilters] = useQueryStates({
  continent: parseAsArrayOf(parseAsString, ',').withDefault([]),
  budget: parseAsArrayOf(parseAsString, ',').withDefault([]),
  vibe: parseAsArrayOf(parseAsString, ',').withDefault([]),
  month: parseAsArrayOf(parseAsString, ',').withDefault([]),
  english: parseAsBoolean.withDefault(false),
  q: parseAsString.withDefault(''),
  sort: parseAsString.withDefault('featured'),
})

// Single URL update for multiple params:
setFilters({ continent: ['asia'], sort: 'budget-low' })
// URL: /explore?continent=asia&sort=budget-low
```

**Important:** Wrap the component using `nuqs` in a `<Suspense>` boundary in the page.

### Filter Bar — Sticky with Backdrop Blur

```css
.filter-bar {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255, 251, 245, 0.85);  /* warm-50 translucent */
  backdrop-filter: blur(12px) saturate(1.2);
  border-bottom: 1px solid rgba(231, 229, 228, 0.6);
}
```

Desktop: horizontal pill bar with category dividers (thin vertical lines).
Mobile: "Filters (3)" button → slide-down panel with horizontal-scroll pill groups.

### Grid Animation Strategy (Zero-Bundle Primary)

**Primary: View Transitions API** (0KB, baseline browser support 2026)
```tsx
function handleFilterChange(newFilter: string) {
  if ('startViewTransition' in document) {
    document.startViewTransition(() => setFilter(newFilter))
  } else {
    setFilter(newFilter)
  }
}
// Each card needs: style={{ viewTransitionName: `card-${slug}` }}
```

**Initial load stagger: CSS `@starting-style`** (0KB)
```css
.destination-card {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;

  @starting-style {
    opacity: 0;
    transform: translateY(20px);
  }
}
```

**Fallback (if View Transitions feels insufficient):** Framer Motion with `LazyMotion features={domMax}` (~25KB, async-loaded). Use `layout="position"` to avoid content distortion. Memoize card components with `React.memo`.

### Image Optimization

```tsx
<Image
  src={destination.heroImage}
  alt={`${destination.name}, ${destination.country}`}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  priority={index < 6}  // First 6 cards above fold
  placeholder="blur"
  blurDataURL={destination.blurDataURL}  // Generate with plaiceholder at build time
  className="object-cover"
/>
```

**Key rules:**
- `sizes` prop is critical — without it, full-width image is served
- `priority` only on first 6 cards (above fold)
- Use `aspect-ratio: 4/3` container to prevent CLS
- Configure `remotePatterns` in `next.config.ts` for Unsplash domains

### Globe: Golden Atmosphere Shader

```glsl
// Fragment shader for golden-hour atmosphere glow
varying vec3 vNormal;
void main() {
  float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
  gl_FragColor = vec4(1.0, 0.7, 0.3, 1.0) * intensity;  // warm amber
}
```

- Atmosphere mesh scaled to 1.15x globe size
- `AdditiveBlending` + `BackSide` rendering for outer glow
- 2K NASA Blue Marble texture (~300-500KB JPEG, convert to WebP for 30-40% savings)
- Mouse parallax: `camera.position.lerp(vec.set(pointer.x * 0.5, pointer.y * 0.3, z), 0.02)`

### Mapbox: Custom Warm Style

Option A: Apply a golden-hour LUT via Mapbox Studio → `config: { theme: 'custom', lut: '...' }`
Option B: Full custom style in Studio — land `#f5e6c8`, water `#1a3a5c`, roads `#d4a574`

Lazy-load with `dynamic(() => import('./MapView'), { ssr: false })` — Mapbox GL is ~398KB gzipped.

---

## Implementation Phases

### Phase 1: Setup + Data + Types
**Scope: Everything needed before building UI**

- [ ] Initialize Next.js 15 with TypeScript (`create-next-app`)
- [ ] Install dependencies: `nuqs mapbox-gl react-map-gl`
- [ ] Set up Tailwind v4 — **CSS-based config, NOT `tailwind.config.ts`**:
  - `@import "tailwindcss"` in `globals.css`
  - `@theme {}` block with golden hour colors and font families
  - `postcss.config.mjs` with `@tailwindcss/postcss` plugin
- [ ] Set up fonts in `app/layout.tsx`:
  - `DM_Serif_Display` from `next/font/google` (serif, headings)
  - `Instrument_Sans` from `next/font/google` (sans, body/UI)
  - Apply as CSS variables via `variable` prop
- [ ] Set up root `metadata` in `app/layout.tsx`:
  - `metadataBase: new URL('https://wherenexttrip.com')`
  - `title.template: '%s | Where Next Trip'`
  - `openGraph` defaults, `twitter.card: 'summary_large_image'`
- [ ] Create page skeletons: `app/page.tsx`, `app/explore/page.tsx`, `app/destination/[slug]/page.tsx`
- [ ] Create `data/types.ts` with all TypeScript interfaces
- [ ] Create `data/destinations.json` — **30-50 destinations** with full data:
  - Distribution: ~12 Asia, ~10 Europe, ~6 North America, ~5 South America, ~4 Africa, ~3 Oceania
  - Each with: all fields from `Destination` interface
  - Sample 3-5 day itinerary per destination
  - Points/miles tip per destination
  - Top 3-5 things to do
- [ ] Create `lib/constants.ts` — continent labels, vibe labels, budget labels, month names
- [ ] Create `lib/filters.ts` — filter, search, sort logic (pure functions, testable)
- [ ] Init git repo, `.gitignore`
- [ ] Verify: `npm run dev` works, types compile, JSON imports work, fonts render, warm background shows

**Research insights applied:**
- Tailwind v4 CSS config instead of JS config file
- `metadataBase` set early for correct OG image URL resolution
- `title.template` for consistent page titles
- Fonts loaded via `next/font/google` with `variable` for CSS custom properties

**Files:** `package.json`, `postcss.config.mjs`, `next.config.ts`, `tsconfig.json`, `app/layout.tsx`, `app/page.tsx`, `app/explore/page.tsx`, `app/destination/[slug]/page.tsx`, `data/types.ts`, `data/destinations.json`, `lib/constants.ts`, `lib/filters.ts`, `styles/globals.css`, `.gitignore`

---

### Phase 2: Explore Page (Card Grid + Filters + Search + Sort)
**Scope: The entire core product in one phase**

- [ ] Install `nuqs` for URL state management
- [ ] Set up filter state with `nuqs` in explore page:
  - `useQueryStates` with parsers for each filter dimension
  - Wrap in `<Suspense>` boundary to avoid SSR bailout
  - URL is single source of truth — no localStorage, no context
- [ ] Create `components/DestinationCard.tsx`:
  - "Polaroid" card design: 10px padding, 20px bottom padding, 2px border-radius
  - Hero photo (Next.js `<Image>`, 4:3 aspect ratio, `fill` + `sizes` prop)
  - `priority={true}` on first 6 cards (above fold)
  - Destination name in DM Serif Display, country in uppercase Instrument Sans
  - Budget as amber dots (not emoji), best months, flight cost — single info line
  - Vibe tags as underlined text (amber underline), NOT pill badges
  - Subtle warm photo filter: `filter: saturate(0.9) sepia(0.05) brightness(1.02)`
  - Hover: CSS transition with `cubic-bezier(0.16, 1, 0.3, 1)` — `translateY(-6px)` + amber box-shadow + photo `scale(1.04)`
  - Click: `<Link>` to `/destination/[slug]`
  - `viewTransitionName: card-${slug}` for View Transitions API
- [ ] Create `components/DestinationGrid.tsx`:
  - CSS grid: `repeat(auto-fill, minmax(280px, 1fr))` with 28px gap
  - Explicit breakpoints: 1 col mobile, 2 tablet, 3 desktop, 4 wide (>1440px)
  - "Load more" button: show 24 cards initially, 24 more per click
  - Result count: "Showing X of Y destinations" (uppercase, stone-400, tracking-wide)
  - Grid reflow animation: View Transitions API (`startViewTransition`)
  - Initial card entry: CSS `@starting-style` for zero-JS stagger
  - Empty state inline: "No destinations match your filters — try casting a wider net." (serif italic, stone-400)
  - With active filters shown as removable chips + "Clear all" link
- [ ] Create `components/FilterPanel.tsx` (all filters in ONE component):
  - Sticky with backdrop blur (`rgba(255, 251, 245, 0.85)` + `backdrop-filter: blur(12px)`)
  - Thin vertical line dividers between filter categories
  - Desktop: horizontal bar with filter pill groups
  - Mobile: "Filters (3)" button → slide-down panel with horizontal-scroll pill groups per category
  - Filter pills: 4px border-radius, 1px stone-200 border, amber fill when active
  - Sections (all inline):
    - Continent: multi-select pills
    - Budget: toggleable dots ($, $$, $$$) with count
    - Travel month: multi-select month pills
    - Vibe: multi-select tag pills
    - English friendly: toggle switch
  - Active filter count badge (amber background)
  - "Clear all" link when any filter active
- [ ] Create `components/SearchInput.tsx`:
  - Debounced text input (300ms) — syncs to `q` param via nuqs
  - Placeholder: "Search cities, countries, or vibes..."
  - Clear button appears on input
  - Focus on "/" keypress
- [ ] Create `components/SortDropdown.tsx`:
  - Options: Featured, Budget (Low→High), Budget (High→Low), A-Z
  - Positioned top-right, same row as results count
  - Styled `<select>` matching warm aesthetic
- [ ] Wire up `app/explore/page.tsx`:
  - Import destinations from JSON
  - `<Suspense>` boundary around filter/search components (required for nuqs)
  - Layout: SearchInput + SortDropdown top row, FilterPanel below (sticky), DestinationGrid main
  - Subtle paper-texture background (SVG noise grain at 1.5% opacity)
- [ ] Unit tests for `lib/filters.ts` — test each filter type, combinations, empty results, search, sort
- [ ] Verify: Grid renders, all filters work individually and combined, search works, sort works, URL reflects state, "load more" works, responsive, empty state, View Transitions animate smoothly

**Research insights applied:**
- `nuqs` for type-safe URL state instead of manual `useSearchParams`
- View Transitions API for grid reflow (0KB)
- CSS `@starting-style` for initial stagger (0KB)
- `cubic-bezier(0.16, 1, 0.3, 1)` overshoot ease for premium hover feel
- Backdrop blur on sticky filter bar
- 300ms debounce on search (research consensus)
- "Load more" over infinite scroll (better for goal-oriented browsing)
- Polaroid card design with editorial typography

**Files:** `components/DestinationCard.tsx`, `components/DestinationGrid.tsx`, `components/FilterPanel.tsx`, `components/SearchInput.tsx`, `components/SortDropdown.tsx`, `app/explore/page.tsx`, `lib/__tests__/filters.test.ts`

---

### Phase 3: Destination Detail Pages
**Scope: Where users decide to book**

- [ ] Create `app/destination/[slug]/page.tsx`:
  - `generateStaticParams` for all destinations (SSG)
  - `generateMetadata` — **`await params`** (Next.js 15 Promise params):
    ```tsx
    export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
      const { slug } = await params
      // ...
    }
    ```
  - Title pattern: `"{Name}: Travel Guide & Things to Do"`
  - `alternates.canonical` for SEO
  - Back link to explore (preserves filter query params from referrer)
- [ ] Create `app/destination/[slug]/opengraph-image.tsx`:
  - Auto-generated per-destination OG image (1200x630)
  - Destination photo background + gradient overlay + name/country text
  - Generated at build time via `generateStaticParams`
  - Note: `ImageResponse` uses Satori (flexbox only, no grid, inline styles)
- [ ] Create `components/DestinationJsonLd.tsx`:
  - `TouristDestination` schema with `geo`, `includesAttraction`, `touristType`
  - `BreadcrumbList` schema (Home → Explore → Destination)
- [ ] Create `components/destination/DestinationHero.tsx`:
  - Full-width hero image with gradient overlay
  - City, country, flag overlaid in DM Serif Display
  - Key stats row: budget dots, best months, flight cost, language
  - Visa note if available
- [ ] Create `components/destination/ItinerarySection.tsx`:
  - Day-by-day expandable cards
  - Each day: title + activities list
  - Amber day-number badges, warm card styling
- [ ] Create `components/destination/PointsSection.tsx`:
  - Points/miles tip display
  - If no tip: section hidden
- [ ] Create `components/destination/WeatherInfo.tsx`:
  - Calendar-style month pills, best months colored amber, others stone-200
- [ ] Create `components/destination/MapSection.tsx`:
  - Lazy-loaded Mapbox map: `dynamic(() => import('./MapView'), { ssr: false })`
  - `react-map-gl/mapbox` import (v8+ separated imports for smaller bundles)
  - Custom warm map style via Mapbox Studio LUT or custom style
  - Destination pin + itinerary POI markers (amber dots)
  - Loading skeleton matching map dimensions (prevents CLS)
  - `import 'mapbox-gl/dist/mapbox-gl.css'` — required or map renders incorrectly
- [ ] Verify: Pages render with SSR, all sections display, Mapbox loads, back navigation works, OG images generate, JSON-LD validates

**Research insights applied:**
- `await params` pattern for Next.js 15
- Colocated `opengraph-image.tsx` (auto-discovered by Next.js)
- `TouristDestination` + `BreadcrumbList` JSON-LD schemas
- `react-map-gl/mapbox` separated import for smaller bundle
- Mapbox custom warm style via LUT
- Canonical URLs for SEO

**Files:** `app/destination/[slug]/page.tsx`, `app/destination/[slug]/opengraph-image.tsx`, `components/DestinationJsonLd.tsx`, `components/destination/DestinationHero.tsx`, `components/destination/ItinerarySection.tsx`, `components/destination/PointsSection.tsx`, `components/destination/WeatherInfo.tsx`, `components/destination/MapSection.tsx`

---

### Phase 4: Landing Page with Globe Hero
**Scope: The "whoa" moment**

- [ ] Install 3D deps: `three @react-three/fiber @react-three/drei`
  - Bundle cost: ~220-250KB gzipped total (three ~170KB + fiber ~49KB + drei tree-shaken ~5KB)
  - All code-split via dynamic import — zero impact on explore/detail page bundles
- [ ] Create `lib/webgl-detect.ts`:
  - `isWebGLAvailable()` — checks for WebGL2/WebGL context
  - `isLowEndDevice()` — checks `hardwareConcurrency <= 2` or `deviceMemory <= 2`
  - Used to decide globe vs. static fallback
- [ ] Create `components/globe/WebGLErrorBoundary.tsx`:
  - Class component error boundary wrapping the Canvas
  - Falls back to warm gradient on any 3D error
- [ ] Create `components/globe/GlobeScene.tsx`:
  - R3F Canvas with `'use client'`
  - Dynamic import with `ssr: false` from a client wrapper component (two-layer pattern required by App Router)
  - `frameloop="demand"`, `dpr={[1, 2]}`, `gl={{ antialias: true, alpha: true }}`
  - Canvas `fallback` prop for inline WebGL failure handling
- [ ] Create `components/globe/Earth.tsx`:
  - Textured sphere (2K NASA Blue Marble, converted to WebP ~250KB)
  - Golden atmosphere glow via custom `shaderMaterial`:
    - Vertex: pass normalized normal to fragment
    - Fragment: Fresnel-based intensity with `vec4(1.0, 0.7, 0.3, 1.0)` amber color
    - `AdditiveBlending`, `BackSide`, scaled to 1.15x
  - Slow auto-rotate in `useFrame`: `rotation.y += delta * 0.05`
  - Mouse parallax `Rig` component: camera lerps toward pointer position
  - Warm directional lighting to match golden hour palette
- [ ] Build landing page (`app/page.tsx`):
  - Globe fills viewport background (behind content, absolute positioned)
  - `useEffect` check: `isWebGLAvailable() && !isLowEndDevice()` → globe or gradient fallback
  - Overlaid content: app name in DM Serif Display, tagline ("Where are you flying next?")
  - CTA button: "Explore Destinations →" → navigates to `/explore`
  - Below fold: 3-4 featured destination cards as preview (reuse DestinationCard)
  - Mobile: gradient fallback with subtle animated pattern (no 3D)
- [ ] Verify: Globe renders, parallax works, doesn't block interaction, CTA works, mobile fallback works, page loads fast (globe is deferred)

**Research insights applied:**
- Two-layer dynamic import pattern (client wrapper → dynamic ssr:false → 3D component)
- Concrete GLSL shader code for golden atmosphere
- 2K texture sufficient (not 4K) for hero-size globe
- `isLowEndDevice()` check for mobile fallback
- Class component error boundary (React error boundaries must be class components)
- Loading skeleton matching globe dimensions to prevent CLS

**Files:** `components/globe/GlobeScene.tsx`, `components/globe/Earth.tsx`, `components/globe/WebGLErrorBoundary.tsx`, `lib/webgl-detect.ts`, `app/page.tsx`, `public/textures/earth-2k.webp`

---

### Phase 5: Photos, Polish, SEO & Accessibility
**Scope: Production readiness**

- [ ] Destination photos:
  - Source from Unsplash for all destinations
  - Optimize: Next.js Image serves WebP/AVIF automatically via `next/image`
  - Generate blur placeholders with `plaiceholder` at build time (10x7px base64)
  - Add to `next.config.ts`: `images.remotePatterns` for Unsplash domain
  - Gradient fallback if image unavailable
- [ ] SEO:
  - `app/sitemap.ts` — auto-generated from destinations data (priority 0.8 for destinations, 1.0 for home)
  - `app/robots.ts` — allow all, reference sitemap
  - JSON-LD verified with Google Rich Results Test
  - OG images verified with Facebook Sharing Debugger
- [ ] Accessibility:
  - Keyboard navigation: tab through cards, enter to select
  - Focus visible: amber ring (`0 0 0 2px #FFFBF5, 0 0 0 4px #F59E0B`)
  - `prefers-reduced-motion`: disable globe rotation, instant transitions, no `@starting-style` stagger
  - WCAG AA color contrast — verify all text on warm-50 background
  - `aria-label` on filters, search, cards
  - Alt text pattern: `"{Destination}, {Country} — {what the image shows}"`
- [ ] Error handling:
  - `app/not-found.tsx` — warm-styled 404 page
  - Globe WebGL fail → warm gradient (via error boundary + device detection)
  - Image load fail → gradient with destination name
  - No filter results → inline empty state with removable filter chips
- [ ] Performance:
  - Lighthouse audit (target > 90 on explore page)
  - `aspect-ratio: 4/3` containers on all card images (prevents CLS)
  - Globe only imported on landing page
  - Mapbox only imported on detail pages
  - Avoid barrel file re-exports (import directly from component files)
  - Run `ANALYZE=true npm run build` with `@next/bundle-analyzer` to verify code splitting
- [ ] Background texture:
  - Subtle SVG noise grain at 1.5% opacity over warm-50 for paper feel
  - Applied via `::before` pseudo-element on body/page wrapper
- [ ] Verify: Lighthouse scores, keyboard nav, screen reader basics, 404 works, all images load, CLS < 0.1

**Research insights applied:**
- `plaiceholder` for remote image blur placeholders
- Bundle analyzer to verify code splitting
- `aspect-ratio` containers to prevent CLS
- Avoid barrel files that defeat tree-shaking
- Concrete focus ring styles matching golden hour palette
- `prefers-reduced-motion` disabling specific animations
- SVG noise grain for paper texture

**Files:** `public/images/destinations/*.jpg`, `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`

---

## Acceptance Criteria

### Functional

- [ ] 30-50 destination cards display in responsive grid with "load more"
- [ ] Text search filters by name, country, activities
- [ ] 5 filter categories work (continent, budget, travel month, vibe, English-friendly)
- [ ] Filters combine correctly (OR within, AND across)
- [ ] Sort works (featured, budget asc/desc, A-Z)
- [ ] Destination detail page shows itinerary, points, weather, map, visa note
- [ ] Filter state persists in URL (shareable links)
- [ ] Landing page has animated globe background with golden atmosphere
- [ ] All destination pages server-rendered for SEO with JSON-LD and OG images
- [ ] Cards animate smoothly on filter change (View Transitions)

### Non-Functional

- [ ] Lighthouse > 90 on explore page
- [ ] CLS < 0.1 on all pages
- [ ] Initial load under 3 seconds on fast 3G
- [ ] Mobile-responsive at 375px+
- [ ] WCAG AA color contrast
- [ ] TypeScript strict mode — no `any`
- [ ] Zero 3D/Mapbox JS on explore page initial bundle

## Dependencies

- Node.js 20+
- `nuqs` — URL state management
- Free Mapbox API key (for destination detail maps)
- Free Unsplash API key (for sourcing photos)
- NASA Blue Marble texture (public domain, 2K resolution)
- Vercel account for deployment

## Risk Analysis

| Risk | Mitigation |
|------|------------|
| Curating 30-50 destinations takes time | Use AI to draft itineraries/descriptions, curate in batches |
| View Transitions API edge cases | Framer Motion as async-loaded fallback (~25KB) |
| Globe performance on mobile | Landing page only, gradient fallback via `isLowEndDevice()` |
| Mapbox free tier (50k loads/month) | Only loads on detail pages, not explore. Consider MapLibre (~238KB, free) as fallback |
| R3F v9 stability | Pin versions, globe is isolated — easy to swap |
| Satori OG image limitations | Flexbox only, inline styles — test early |

## Future (v2+)

- Scale to 100+ destinations
- Visa compatibility engine (passport-based filtering)
- Departure city picker with per-origin flight costs
- 3D animal/landmark icons on globe
- Flight arcs animation
- Live weather via Open-Meteo
- Travel advisories from government feeds
- User accounts (favorites, bucket list)
- Compare destinations side-by-side
- Dark mode
- Community itineraries
- Framer Motion `LazyMotion` for richer animations if View Transitions insufficient

## References

- [Nomads.com](https://nomads.com/) — UX inspiration
- [nuqs — Type-safe URL state](https://nuqs.dev)
- [React Three Fiber v9](https://r3f.docs.pmnd.rs/)
- [Motion Layout Animations](https://motion.dev/docs/react-layout-animations)
- [View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions)
- [CSS @starting-style](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style)
- [Mapbox GL JS](https://www.mapbox.com/pricing) (free 50k loads/month)
- [react-map-gl](https://visgl.github.io/react-map-gl/)
- [Unsplash API](https://unsplash.com/developers)
- [NASA Blue Marble](https://visibleearth.nasa.gov/collection/1484/blue-marble)
- [Schema.org TouristDestination](https://schema.org/TouristDestination)
- [Next.js Metadata & OG Images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Tailwind CSS v4 Setup](https://tailwindcss.com/docs/guides/nextjs)
- [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display)
- [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans)
- [plaiceholder](https://plaiceholder.co/) — blur placeholder generation

### Technical Notes
- **R3F v9 required** for Next.js 15 / React 19 compat
- **Tailwind v4**: `@import "tailwindcss"` + `@theme {}` in CSS — no JS config file
- **`params` is a Promise** in Next.js 15 — must `await` in `generateMetadata` and page components
- **`nuqs` needs `<Suspense>`** boundary in App Router
- **Globe is landing page only** — zero 3D overhead on explore/detail pages
- **Mapbox is detail page only** — ~398KB gzipped, lazy-loaded
- **`borderRadius` must be inline** on motion/view-transition elements to avoid distortion
- **`react-map-gl/mapbox`** (v8+ separated import) for smaller bundles
- **View Transitions `viewTransitionName`** must be unique per card
