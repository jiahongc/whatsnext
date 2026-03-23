export interface Collection {
  slug: string
  title: string
  subtitle: string
  emoji: string
  filter: {
    vibes?: string[]
    budgetTiers?: number[]
    continents?: string[]
    englishFriendly?: boolean
  }
}

export const COLLECTIONS: Collection[] = [
  {
    slug: 'foodie-cities',
    title: 'Best Foodie Cities',
    subtitle: 'Where eating IS the activity',
    emoji: '🍜',
    filter: { vibes: ['foodie'] },
  },
  {
    slug: 'budget-friendly',
    title: 'Budget-Friendly Gems',
    subtitle: 'Amazing trips under $1000',
    emoji: '💰',
    filter: { budgetTiers: [1] },
  },
  {
    slug: 'beach-escapes',
    title: 'Beach Escapes',
    subtitle: 'Sun, sand, and salt water',
    emoji: '🏖️',
    filter: { vibes: ['beach'] },
  },
  {
    slug: 'first-time-asia',
    title: 'First Time in Asia',
    subtitle: 'Easy entry points for new explorers',
    emoji: '🌏',
    filter: { continents: ['asia'], englishFriendly: true },
  },
  {
    slug: 'romantic-getaways',
    title: 'Romantic Getaways',
    subtitle: 'For couples and honeymooners',
    emoji: '❤️',
    filter: { vibes: ['romantic'] },
  },
  {
    slug: 'adventure-trips',
    title: 'Adventure Trips',
    subtitle: 'For thrill seekers and explorers',
    emoji: '🏔️',
    filter: { vibes: ['adventure'] },
  },
  {
    slug: 'luxury-escapes',
    title: 'Luxury Escapes',
    subtitle: 'When you want to treat yourself',
    emoji: '✨',
    filter: { vibes: ['luxury'] },
  },
  {
    slug: 'europe-classics',
    title: 'European Classics',
    subtitle: 'The cities everyone should see',
    emoji: '🏰',
    filter: { continents: ['europe'] },
  },
  {
    slug: 'cultural-immersion',
    title: 'Cultural Immersion',
    subtitle: 'Deep history and living traditions',
    emoji: '🏛️',
    filter: { vibes: ['cultural'] },
  },
  {
    slug: 'nightlife-capitals',
    title: 'Nightlife Capitals',
    subtitle: 'Cities that come alive after dark',
    emoji: '🌃',
    filter: { vibes: ['nightlife'] },
  },
]
