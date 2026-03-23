# What's Next — Project Status & Lessons Learned

**Last updated:** 2026-03-22
**Repo:** https://github.com/jiahongc/whatsnext
**Vercel:** whatsnext project (deploy with `vercel --yes --prod`)

---

## What Was Built (Session 1: 2026-03-22)

### Core Product
- **Explore page at `/`** — filterable card grid of 65 destinations
- **Destination detail pages at `/destination/[slug]`** — rich city guides
- **65 destinations** across 6 continents (20 Asia, 15 Europe, 9 N. America, 8 S. America, 7 Africa, 6 Oceania)

### Explore Page Features
- Departure city picker ("Flying from") — persists to localStorage
- 5 filter categories: continent, budget, vibe, travel month, English-friendly
- Text search across name, country, activities, vibes
- Sort: featured, budget asc/desc, A-Z
- URL-driven state via `nuqs` (shareable links)
- Curated collections row (10 collections: Foodie, Budget, Beach, Asia, etc.)
- "Load more" pagination (24 cards per batch)
- View Transitions API for grid reflow
- Smart card image selection (picks most iconic photo per city)

### Destination Page Features
- **Photo grid hero** — 3-photo grid (main + 2 side), lightbox with prev/next
- **Tabbed city guide** — Overview, History, Culture, Neighborhoods tabs
- **Quick facts** — population, founded, known for, "feels like", ideal trip length
- **Your Trip** (departure-aware) — flight time, distance, timezone diff, direct airlines, visa, seasonal weather context
- **Before You Go** — currency, water safety, plug type, timezone, tipping, emergency, transportation
- **Weather** — collapsible, best months pills + line chart, F/C toggle (defaults to °F)
- **Who It's For** — 2-3 audience fit descriptions
- **Common Mistakes** — 3-4 specific warnings
- **Things to Do** — top 5 activities
- **Itinerary** — collapsible day cards with activities
- **Where to Stay** — 3-4 neighborhoods with vibe, best-for, price range
- **Where to Eat** — collapsible Michelin table (336 restaurants) + local favorites with links
- **Plan Your Trip** — Google Flights link + Points & Miles (3-4 per city) + Reddit communities
- **Map** — Mapbox with city pin
- **SEO** — SSG, generateMetadata, OG images, JSON-LD, sitemap

### Tech Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-based config with `@theme {}`)
- React Three Fiber v9 (globe — currently unused after homepage redirect)
- Mapbox GL JS via react-map-gl (lazy-loaded on detail pages)
- `nuqs` for URL state management
- Framer Motion (available but mostly using CSS + View Transitions)
- Pexels API for photos (cached at build time)
- Fonts: DM Serif Display + Instrument Sans

---

## Key Decisions & Why

### Globe is dead (for now)
We built a 3D globe landing page but killed it. The explore page IS the product — users want to filter and browse, not stare at a globe. Globe code still exists in `components/globe/` if we want it later.

### Pexels over Unsplash
Unsplash requires app review for production. Pexels gives instant API access. We hit the 200 req/month limit, so 32 cities are using Unsplash fallback URLs. Re-run `node scripts/fetch-pexels-photos.mjs` next month.

### Static data over APIs
All destination data is in `destinations.json`. No database, no backend. This is intentional — ship fast, iterate on content. Live APIs (weather, flights) are v2.

### URL state over localStorage
Filter state lives in URL params via `nuqs`. Departure city uses localStorage because it's a global preference, not a per-search thing.

---

## Lessons Learned / Don't Repeat

### 1. Don't use banner-style hero images
Full-width banners crop photos awkwardly. Use a photo grid (Airbnb-style) instead. The current 3-photo grid works well.

### 2. Don't overlay text on busy images
Text on photos is unreadable 50% of the time. City name/country goes ABOVE the photos, not on them. Practical info (visa, cost, language) goes in "Before You Go" section, not on the hero.

### 3. Pexels rate limit is 200/month
The free tier allows 200 API requests per month total. We used them all in one batch. Solution: cache photos in code (`pexels-photos.ts`), only re-fetch when needed.

### 4. Unsplash hardcoded URLs break
Hardcoded Unsplash photo IDs go stale. 8 out of 40 broke. Use an API (Pexels) with build-time caching instead.

### 5. Don't put everything in the hero banner
The hero should be simple: name + photos. Everything else (visa, budget, language, flight cost) goes in structured sections below.

### 6. One FilterPanel component, not 6 files
We started with 6 separate filter component files. Collapsed into one `FilterPanel.tsx`. Simpler, easier to iterate.

### 7. Default temperature to Fahrenheit
Most users are American. Default to °F with toggle.

### 8. Collapsible > always-visible for dense sections
Weather chart, Michelin restaurants, itinerary days — all collapsible. Reduces scroll fatigue while keeping info accessible.

### 9. Dollar signs on BOTH numbers
"$3-10" → "$3–$10". Always format cost ranges with dollar signs on both numbers.

### 10. City descriptions need structure, not paragraphs
A wall of text doesn't help travelers. Tabbed content (Overview/History/Culture/Neighborhoods) with quick facts is much more useful.

### 11. Card images need curation
Random search results produce random photos. Use a scoring system that prefers iconic landmarks/skylines over random street shots.

### 12. `.playwright-mcp/` leaks secrets
Playwright console logs can capture environment variables. Always gitignore this directory.

---

## What Still Needs To Be Done

### Critical
- [ ] **Pexels photos for remaining 32 cities** — re-run fetch script when rate limit resets (next month, or new API key)
- [ ] **Unsplash production approval** — submitted, waiting for review. Need to add photographer attribution when approved. See `docs/plans/photo-api-notes.md`
- [ ] **Mobile responsiveness pass** — filters, cards, and city guide pages need testing on mobile
- [ ] **Fix any broken Unsplash fallback URLs** — some of the 32 cities using old Unsplash URLs may have broken images

### High Priority
- [ ] **Explore page filter redesign** — from the audit: make it one cohesive filter system, not fragmented rows. Add active filter chips/summary.
- [ ] **Price labels need explicit meaning** — "~$600-1100" should say "Est. RT flight" more prominently
- [ ] **Card text readability** — standardize dark gradient overlay strength on all card images
- [ ] **Origin-aware card recommendations** — show "Great from NYC" or "12h direct" on cards when departure is set
- [ ] **"Where to stay" needs more detail** — hotel price ranges, specific hotel recommendations, booking links
- [ ] **Restaurant actionability** — add "what to order", reservation notes, cash/card, neighborhood for each restaurant

### Medium Priority
- [ ] **Unit tests for `lib/filters.ts`** — the core filter logic has zero tests
- [ ] **Better loading states** — skeleton cards on explore, spinner on map
- [ ] **Keyboard navigation** — tab through cards, filters
- [ ] **Accessibility** — aria labels, focus styles, screen reader support
- [ ] **US-centric language cleanup** — "US citizens get..." should be dynamic or neutral
- [ ] **Fresh data indicators** — "Last updated: March 2026" on points/miles/visa content
- [ ] **Itinerary morning/afternoon/evening structure** — currently just a flat list of activities
- [ ] **Save/favorite destinations** — localStorage-based for now
- [ ] **Share destination links** — copy link button, social sharing

### Nice to Have (v2+)
- [ ] **Live weather** via Open-Meteo API
- [ ] **Travel advisories** from government RSS feeds
- [ ] **More cities** — target 100+
- [ ] **User accounts** with saved trips
- [ ] **Compare destinations** side-by-side
- [ ] **Dark mode**
- [ ] **Globe as optional visual** on homepage
- [ ] **Community itineraries** (user-submitted)
- [ ] **Curated editorial collections** with longer write-ups
- [ ] **Flight price tracking** integration
- [ ] **Hotel booking links** (affiliate)

---

## File Structure Reference

```
src/
├── app/
│   ├── page.tsx                    # Main explore page (was /, killed homepage)
│   ├── explore-content.tsx         # Client component with filters/grid
│   ├── explore/page.tsx            # Redirects to /
│   ├── destination/[slug]/
│   │   ├── page.tsx                # City guide page (SSG)
│   │   ├── opengraph-image.tsx     # Auto-generated OG images
│   │   └── travel-from-banner.tsx  # Departure-aware travel info (client)
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
├── components/
│   ├── DestinationCard.tsx         # Card for explore grid
│   ├── DestinationGrid.tsx         # Grid + load more
│   ├── FilterPanel.tsx             # All filters in one component
│   ├── SearchInput.tsx
│   ├── SortDropdown.tsx
│   ├── DeparturePicker.tsx         # Departure city selector
│   ├── CollectionRow.tsx           # Curated collection pills
│   ├── Header.tsx
│   ├── DestinationJsonLd.tsx       # Structured data
│   ├── globe/                      # 3D globe (unused, kept for future)
│   └── destination/                # City guide components
│       ├── DestinationHero.tsx     # Photo grid + lightbox
│       ├── CityGuideSection.tsx    # Tabbed Overview/History/Culture/Neighborhoods
│       ├── CityFitSection.tsx      # Who it's for + common mistakes
│       ├── WhereToStaySection.tsx   # Neighborhood recommendations
│       ├── ItinerarySection.tsx    # Day-by-day collapsible
│       ├── ThingsToDoSection.tsx
│       ├── WeatherInfo.tsx         # Collapsible, F/C toggle
│       ├── MichelinSection.tsx     # Collapsible restaurants + local food
│       ├── PointsSection.tsx       # Miles/points cards
│       ├── RedditSection.tsx
│       ├── MapSection.tsx          # Mapbox (lazy-loaded)
│       └── MapLoader.tsx           # Dynamic import wrapper
├── data/
│   ├── destinations.json           # THE source of truth (65 cities, ~300KB)
│   ├── types.ts                    # All TypeScript interfaces
│   ├── pexels-photos.ts            # Cached Pexels API results
│   ├── destination-images.ts       # Legacy Unsplash URLs (fallback)
│   ├── destination-gallery.ts      # Legacy Unsplash gallery (fallback)
│   ├── michelin-restaurants.ts     # 336 restaurants + local food recs
│   ├── airline-routes.ts           # 348 direct routes from 10 hubs
│   ├── card-images.ts              # Smart card image picker
│   └── collections.ts             # 10 curated collections
├── lib/
│   ├── filters.ts                  # Filter/search/sort logic
│   ├── constants.ts                # Labels, month names, formatters
│   ├── travel-utils.ts             # Flight time calc, timezone, routes
│   └── webgl-detect.ts             # WebGL capability check
└── styles/
    └── globals.css                 # Tailwind v4 @theme + base styles

scripts/
└── fetch-pexels-photos.mjs        # Pexels API fetch + cache script

docs/
├── brainstorms/                    # Original brainstorm
├── plans/
│   ├── project-status.md           # THIS FILE
│   └── photo-api-notes.md          # Unsplash/Pexels API requirements
```

---

## Environment Variables

| Variable | Where | Purpose |
|----------|-------|---------|
| `NEXT_PUBLIC_MAPBOX_TOKEN` | `.env.local` + Vercel | Mapbox GL JS maps |
| `PEXELS_API_KEY` | `.env.local` only | Pexels photo fetching (build-time only, not exposed to client) |

Both are in `.env.local` (gitignored). Mapbox token is also set on Vercel via `vercel env`.

---

## Deployment

```bash
# Local dev
npm run dev

# Build
npm run build

# Deploy to Vercel
vercel --yes --prod

# Re-fetch Pexels photos (when rate limit resets)
node scripts/fetch-pexels-photos.mjs
```

## Git History (key commits)
1. `feat: add explore page with filterable destination card grid`
2. `feat: add destination detail pages with SSG`
3. `feat: add 3D globe landing page hero`
4. `feat: add SEO, OG images, sitemap, 404, and header nav`
5. `fix: major visual overhaul — real images, clean filters, departure picker`
6. `feat: add Mapbox maps + fix all destination images`
7. `feat: add Reddit communities, detailed points/miles, and 25 new cities`
8. `feat: add city info, temperature charts, and departure-aware travel data`
9. `feat: major destination page redesign — user-centric layout`
10. `feat: extensive city guides, photo gallery, collapsible Michelin, Google Flights`
11. `feat: Phase 1+2 — critical fixes + explore page redesign`
12. `feat: Phase 3+4 — premium city guides + differentiation`
13. `fix: make / the main explore page instead of redirect`
14. `feat: replace Unsplash with Pexels API photos + photo grid hero`
15. `feat: curated collections + smart card images`
16. `feat: rich tabbed city guides with history, culture, neighborhoods`
