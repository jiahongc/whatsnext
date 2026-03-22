import type { Continent, VibeTag } from '@/data/types'

export const CONTINENT_LABELS: Record<Continent, string> = {
  'africa': 'Africa',
  'asia': 'Asia',
  'europe': 'Europe',
  'north-america': 'N. America',
  'south-america': 'S. America',
  'oceania': 'Oceania',
}

export const VIBE_LABELS: Record<VibeTag, string> = {
  adventure: 'Adventure',
  romantic: 'Romantic',
  foodie: 'Foodie',
  cultural: 'Cultural',
  beach: 'Beach',
  nature: 'Nature',
  nightlife: 'Nightlife',
  budget: 'Budget',
  luxury: 'Luxury',
  family: 'Family',
}

export const BUDGET_LABELS: Record<1 | 2 | 3, string> = {
  1: '$',
  2: '$$',
  3: '$$$',
}

export const MONTH_LABELS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const

export const MONTH_FULL_LABELS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const

export const CARDS_PER_PAGE = 24

export function formatBestMonths(months: number[]): string {
  if (months.length === 0) return 'Year-round'
  if (months.length >= 10) return 'Year-round'

  const sorted = [...months].sort((a, b) => a - b)
  const ranges: string[] = []
  let start = sorted[0]
  let end = sorted[0]

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === end + 1) {
      end = sorted[i]
    } else {
      ranges.push(
        start === end
          ? MONTH_LABELS[start - 1]
          : `${MONTH_LABELS[start - 1]}–${MONTH_LABELS[end - 1]}`
      )
      start = sorted[i]
      end = sorted[i]
    }
  }
  ranges.push(
    start === end
      ? MONTH_LABELS[start - 1]
      : `${MONTH_LABELS[start - 1]}–${MONTH_LABELS[end - 1]}`
  )

  return ranges.join(', ')
}
