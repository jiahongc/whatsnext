---
date: 2026-03-22
topic: where-next-trip
---

# Where Next Trip — Travel Discovery Platform

## What We're Building

A visually stunning travel discovery website where users enter their departure city and explore destinations on an interactive 3D globe. The globe features animated flight arcs, glowing particle trails, and **3D animal/landmark icons** floating above each destination — the signature visual hook. Users filter by continent, budget, weather, visa compatibility, and more, then drill into destination detail cards with sample itineraries, costs, and points redemption tips.

## Core Experience

**Data-driven card grid first (like Nomads.com), globe as visual accent.** The explore page with filterable destination cards is the core product. The 3D globe is a stunning landing page background — the "whoa" moment — but NOT the primary interaction surface.

## Tech Stack

- **Framework:** Next.js + React (deployed on Vercel)
- **3D Globe:** React Three Fiber + Three.js (full creative control for shock factor)
- **Maps (detail view):** Mapbox GL JS (free tier — 50k loads/month)
- **Animations:** Framer Motion for UI, R3F for 3D animations
- **Styling:** TBD in planning (Tailwind likely)

## Data Strategy: Hybrid (Free-First)

- **v1:** Curated dataset of 100+ destinations with pre-filled info
- **v2:** Layer in free APIs for live data (flight prices, weather, travel advisories)
- **Principle:** No paid APIs. Free tiers and open data only.

### Free Data Sources to Explore

- **Weather:** Open-Meteo (free, no API key), OpenWeather free tier
- **Flight estimates:** Curated average ranges (live pricing APIs are expensive)
- **Travel advisories (v2):** Travel advisory APIs, RSS feeds from government sites
- **Visa info:** Curated matrix based on passport country
- **Currency/language:** REST Countries API (free)

## Destination Data Model

Each destination includes:

| Field | Example |
|-------|---------|
| Name | Tokyo |
| Country | Japan |
| Continent | Asia |
| Coordinates | 35.6762, 139.6503 |
| 3D Icon | Cherry blossom tree / fox |
| Budget tier | 💰💰 (1-3 scale) |
| Best season | March-May, Oct-Nov |
| Weather tags | mild, cherry blossom season |
| Sample itinerary | 3-5 day plan |
| Est. flight cost range | $400-800 from NYC |
| Points/miles sweet spots | ANA 35-50k pts round trip |
| Top 3-5 things to do | Shibuya, Tsukiji, temples... |
| Vibe tags | foodie, cultural, adventure |
| Primary language | Japanese |
| English friendliness | Medium |
| Visa requirements | Per user's passport country |
| Safety/advisory status | Safe / caution / avoid |

## User Profile (Lightweight)

- Departure city
- Country of citizenship (passport)
- Visa(s) held (e.g., US B1/B2, Schengen)
- Used for: visa compatibility filtering, flight cost estimates

## Key Features — v1

1. **Landing page** — Animated 3D globe as hero, search input
2. **3D Globe** — Photorealistic earth, atmosphere glow, smooth camera orbit
3. **3D Animals/Landmarks** — Floating above destinations (penguin for Antarctica, kangaroo for Sydney, etc.) — **must-have, signature feature**
4. **Animated flight arcs** — Glowing particle trails from departure to destinations
5. **Filter panel** — Continent, budget, weather/season, vibe, visa compatibility, language
6. **Destination cards** — Click a marker to see detail view with itinerary, costs, tips
7. **Points redemption info** — Sweet spot guides per destination
8. **Visa compatibility** — Based on user's passport/visas, show which destinations are visa-free, VOA, or require a visa
9. **Language info** — Primary language, English friendliness rating

## Key Features — v2

- **Live travel advisories** — Fetch from government RSS/APIs, flag or hide destinations with active warnings (war, natural disaster, political instability)
- **Live weather** — Current conditions via Open-Meteo
- **Flight price trends** — If a free source exists
- **User accounts** — Save favorites, bucket list
- **Share itineraries** — Social sharing with OG image of the globe view
- **More destinations** — Scale to 200+

## Design Principles

- **Aesthetic:** Light theme, warm yellow/orange tint — "golden hour" vibe. Warm whites (#FFFBF5-ish), soft amber/orange accents, warm globe glow
- **Shock factor over minimalism** — This should make people say "whoa"
- **Smooth everything** — Every interaction should animate
- **Mobile responsive** — Globe should work on mobile (simplified if needed)
- **Fast despite being 3D** — Lazy load models, progressive enhancement

## Open Questions

- What 3D animal/landmark models to use? (free GLTF models from Sketchfab, Poly Pizza, or low-poly custom)
- 100+ destinations for v1 — need strategy for sourcing 3D models at scale
- Color palette: Light theme with warm yellow/orange tint — "golden hour" aesthetic. Warm whites, soft amber accents, globe with warm glow.
- Domain name?

## Next Steps

→ `/workflows:plan` for implementation details and task breakdown
