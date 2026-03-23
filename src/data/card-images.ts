// Pick the best card image for each city from its photo gallery
// Prioritizes photos with landmark/iconic keywords in alt text

import { PEXELS_PHOTOS, type PexelsPhoto } from './pexels-photos'

const ICONIC_KEYWORDS = [
  'landmark', 'skyline', 'tower', 'palace', 'temple', 'cathedral', 'mosque',
  'castle', 'bridge', 'monument', 'aerial', 'panoramic', 'iconic', 'famous',
  'opera house', 'eiffel', 'colosseum', 'acropolis', 'pyramid', 'great wall',
  'statue', 'cityscape', 'harbour', 'harbor', 'sunset', 'sunrise',
  'mountain', 'view', 'overlooking', 'stunning', 'breathtaking',
  'bay', 'river', 'coast', 'beach', 'ruins', 'ancient',
  'petronas', 'forbidden city', 'bund', 'victoria peak',
  'christ', 'sugarloaf', 'table mountain', 'angkor',
  'machu picchu', 'church', 'dome', 'basilica',
]

function scorePhoto(photo: PexelsPhoto): number {
  const alt = (photo.alt || '').toLowerCase()
  let score = 0
  for (const keyword of ICONIC_KEYWORDS) {
    if (alt.includes(keyword)) score += 2
  }
  // Prefer landscape-oriented photos
  if (photo.width > photo.height) score += 1
  // Prefer photos with longer alt text (usually more descriptive = better curated)
  if (alt.length > 50) score += 1
  return score
}

export function getCardImage(slug: string): { url: string; alt: string } | null {
  const photos = PEXELS_PHOTOS[slug]
  if (!photos || photos.length === 0) return null

  // Score each photo and pick the best
  let best = photos[0]
  let bestScore = scorePhoto(photos[0])

  for (let i = 1; i < photos.length; i++) {
    const score = scorePhoto(photos[i])
    if (score > bestScore) {
      best = photos[i]
      bestScore = score
    }
  }

  return { url: best.url, alt: best.alt }
}
