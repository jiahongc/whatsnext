export interface Destination {
  slug: string
  name: string
  country: string
  flag: string
  continent: Continent
  coordinates: { lat: number; lng: number }
  heroImage: string
  budgetTier: 1 | 2 | 3
  bestMonths: number[]
  flightCost: string
  pointsAndMiles: PointsRedemption[]
  redditCommunities: RedditCommunity[]
  itinerary: ItineraryDay[]
  topThingsToDo: string[]
  vibeTags: VibeTag[]
  language: string
  englishFriendly: boolean
  description: string
  extendedDescription: string
  visaNote?: string
  cityInfo: CityInfo
}

export interface CityInfo {
  currency: {
    name: string
    code: string
    symbol: string
    exchangeRate: string
  }
  transportation: TransportOption[]
  tipping: {
    culture: 'expected' | 'appreciated' | 'not-expected' | 'included'
    details: string
  }
  avgTempByMonth: number[]
  emergencyNumber: string
  waterSafety: 'safe' | 'boil' | 'bottled'
  plugType: string
  timeZone: string
}

export interface TransportOption {
  mode: string
  description: string
  cost: string
}

export interface ItineraryDay {
  day: number
  title: string
  activities: string[]
}

export type Continent =
  | 'africa'
  | 'asia'
  | 'europe'
  | 'north-america'
  | 'south-america'
  | 'oceania'

export type VibeTag =
  | 'adventure'
  | 'romantic'
  | 'foodie'
  | 'cultural'
  | 'beach'
  | 'nature'
  | 'nightlife'
  | 'budget'
  | 'luxury'
  | 'family'

export interface PointsRedemption {
  program: string
  points: string
  route?: string
  cabin: string
  tip: string
}

export interface RedditCommunity {
  name: string
  url: string
  description: string
  members?: string
}

export interface FilterState {
  continents: Continent[]
  budgetTiers: (1 | 2 | 3)[]
  vibes: VibeTag[]
  travelMonths: number[]
  englishFriendlyOnly: boolean
  searchQuery: string
  sortBy: 'featured' | 'budget-low' | 'budget-high' | 'a-z'
}
