export interface DirectRoute {
  airlines: string[]       // Airlines operating direct flights
  frequency: string        // "Daily", "3-4x/week", "Seasonal"
  flightTime: string       // "14h 30m"
  typicalCost: string      // "$800-1200"
}

// Maps departure city → destination slug → direct route info
// If a destination is absent for a departure city, there is no direct/nonstop flight.
export const DIRECT_ROUTES: Record<string, Record<string, DirectRoute>> = {

  // ─────────────────────────────────────────────
  // NEW YORK (JFK/EWR/LGA)
  // ─────────────────────────────────────────────
  'New York': {
    // Asia
    'tokyo': { airlines: ['JAL', 'ANA', 'United'], frequency: 'Daily', flightTime: '14h 0m', typicalCost: '$800-1200' },
    'seoul': { airlines: ['Korean Air', 'Asiana', 'Delta'], frequency: 'Daily', flightTime: '14h 30m', typicalCost: '$800-1200' },
    'beijing': { airlines: ['Air China'], frequency: 'Daily', flightTime: '14h 0m', typicalCost: '$700-1100' },
    'shanghai': { airlines: ['China Eastern', 'Delta'], frequency: 'Daily', flightTime: '15h 0m', typicalCost: '$700-1100' },
    'hong-kong': { airlines: ['Cathay Pacific'], frequency: 'Daily', flightTime: '16h 0m', typicalCost: '$750-1200' },
    'taipei': { airlines: ['EVA Air'], frequency: 'Daily', flightTime: '15h 30m', typicalCost: '$750-1100' },
    'singapore': { airlines: ['Singapore Airlines'], frequency: 'Daily', flightTime: '18h 30m', typicalCost: '$800-1400' },
    'bangkok': { airlines: ['Thai Airways'], frequency: '3-4x/week', flightTime: '17h 0m', typicalCost: '$700-1100' },
    'maldives': { airlines: ['Emirates (via codeshare)'], frequency: '3-4x/week', flightTime: '16h 0m', typicalCost: '$900-1500' },
    'colombo': { airlines: ['SriLankan Airlines'], frequency: '3-4x/week', flightTime: '17h 0m', typicalCost: '$800-1300' },
    'jaipur': { airlines: ['Air India'], frequency: '4-5x/week', flightTime: '15h 30m', typicalCost: '$700-1100' },

    // Europe
    'paris': { airlines: ['Air France', 'Delta', 'United', 'Norse Atlantic'], frequency: 'Multiple daily', flightTime: '7h 30m', typicalCost: '$400-800' },
    'barcelona': { airlines: ['Delta', 'United', 'LEVEL'], frequency: 'Daily', flightTime: '8h 0m', typicalCost: '$400-800' },
    'lisbon': { airlines: ['TAP Portugal', 'United', 'Delta'], frequency: 'Daily', flightTime: '7h 15m', typicalCost: '$400-750' },
    'prague': { airlines: ['Delta'], frequency: '4-5x/week', flightTime: '9h 0m', typicalCost: '$450-850' },
    'dubrovnik': { airlines: ['Delta', 'United'], frequency: 'Seasonal', flightTime: '9h 30m', typicalCost: '$500-900' },
    'santorini': { airlines: ['United'], frequency: 'Seasonal', flightTime: '10h 30m', typicalCost: '$600-1000' },
    'amsterdam': { airlines: ['Delta', 'KLM', 'United'], frequency: 'Multiple daily', flightTime: '7h 45m', typicalCost: '$400-800' },
    'rome': { airlines: ['Delta', 'United', 'ITA Airways', 'Norse Atlantic'], frequency: 'Daily', flightTime: '8h 45m', typicalCost: '$450-850' },
    'edinburgh': { airlines: ['United', 'JetBlue'], frequency: 'Daily', flightTime: '7h 0m', typicalCost: '$400-750' },
    'budapest': { airlines: ['United'], frequency: '4-5x/week', flightTime: '9h 15m', typicalCost: '$450-850' },
    'istanbul': { airlines: ['Turkish Airlines'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$500-900' },
    'vienna': { airlines: ['Austrian Airlines'], frequency: 'Daily', flightTime: '9h 0m', typicalCost: '$450-850' },
    'copenhagen': { airlines: ['SAS', 'Norse Atlantic'], frequency: 'Daily', flightTime: '8h 0m', typicalCost: '$400-800' },
    'reykjavik': { airlines: ['Icelandair', 'Delta', 'JetBlue'], frequency: 'Daily', flightTime: '5h 30m', typicalCost: '$300-600' },
    'athens': { airlines: ['Delta', 'United', 'Emirates'], frequency: 'Daily', flightTime: '10h 0m', typicalCost: '$500-900' },

    // North & Central America
    'mexico-city': { airlines: ['Aeromexico', 'Delta', 'JetBlue', 'Vivaaerobus'], frequency: 'Multiple daily', flightTime: '5h 15m', typicalCost: '$250-500' },
    'tulum': { airlines: ['JetBlue', 'Delta'], frequency: 'Daily', flightTime: '4h 0m', typicalCost: '$250-500' },
    'vancouver': { airlines: ['Delta', 'Air Canada', 'JetBlue'], frequency: 'Daily', flightTime: '5h 45m', typicalCost: '$250-500' },
    'havana': { airlines: ['JetBlue'], frequency: '3-4x/week', flightTime: '3h 30m', typicalCost: '$250-450' },
    'san-juan': { airlines: ['JetBlue', 'Delta', 'United', 'Spirit'], frequency: 'Multiple daily', flightTime: '3h 45m', typicalCost: '$150-350' },
    'new-orleans': { airlines: ['Delta', 'JetBlue', 'United', 'Spirit'], frequency: 'Multiple daily', flightTime: '3h 15m', typicalCost: '$150-350' },
    'costa-rica': { airlines: ['JetBlue', 'Delta', 'United'], frequency: 'Daily', flightTime: '5h 30m', typicalCost: '$300-550' },
    'cancun': { airlines: ['JetBlue', 'Delta', 'United', 'Spirit'], frequency: 'Multiple daily', flightTime: '4h 0m', typicalCost: '$200-450' },
    'toronto': { airlines: ['Air Canada', 'Delta', 'United', 'Porter'], frequency: 'Multiple daily', flightTime: '1h 30m', typicalCost: '$150-350' },

    // South America
    'buenos-aires': { airlines: ['Aerolinas Argentinas', 'United', 'LATAM'], frequency: 'Daily', flightTime: '11h 0m', typicalCost: '$600-1000' },
    'cartagena': { airlines: ['JetBlue', 'Spirit'], frequency: 'Daily', flightTime: '5h 30m', typicalCost: '$300-550' },
    'rio-de-janeiro': { airlines: ['LATAM', 'United'], frequency: 'Daily', flightTime: '10h 0m', typicalCost: '$600-1000' },
    'bogota': { airlines: ['Avianca', 'JetBlue', 'Spirit'], frequency: 'Daily', flightTime: '5h 30m', typicalCost: '$300-550' },
    'lima': { airlines: ['LATAM', 'JetBlue'], frequency: 'Daily', flightTime: '7h 30m', typicalCost: '$400-700' },
    'santiago': { airlines: ['LATAM'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$550-950' },
    'medellin': { airlines: ['Spirit', 'JetBlue'], frequency: 'Daily', flightTime: '5h 15m', typicalCost: '$300-550' },

    // Africa & Middle East
    'marrakech': { airlines: ['Royal Air Maroc'], frequency: '4-5x/week', flightTime: '7h 30m', typicalCost: '$500-900' },
    'cairo': { airlines: ['EgyptAir'], frequency: 'Daily', flightTime: '11h 0m', typicalCost: '$600-1000' },
    'accra': { airlines: ['United'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$600-1000' },
    'nairobi': { airlines: ['Kenya Airways'], frequency: '3-4x/week', flightTime: '15h 0m', typicalCost: '$700-1200' },
    'dubai': { airlines: ['Emirates'], frequency: 'Multiple daily', flightTime: '12h 30m', typicalCost: '$600-1000' },

    // Oceania
    'sydney': { airlines: ['Qantas'], frequency: 'Daily', flightTime: '20h 0m', typicalCost: '$1000-1800' },
    'auckland': { airlines: ['Air New Zealand'], frequency: 'Daily', flightTime: '17h 30m', typicalCost: '$900-1600' },
    'fiji': { airlines: ['Fiji Airways'], frequency: '3-4x/week', flightTime: '17h 0m', typicalCost: '$800-1400' },
  },

  // ─────────────────────────────────────────────
  // LOS ANGELES (LAX)
  // ─────────────────────────────────────────────
  'Los Angeles': {
    // Asia
    'tokyo': { airlines: ['JAL', 'ANA', 'United', 'American', 'Singapore Airlines', 'Zipair'], frequency: 'Multiple daily', flightTime: '11h 30m', typicalCost: '$600-1000' },
    'seoul': { airlines: ['Korean Air', 'Asiana', 'Delta'], frequency: 'Daily', flightTime: '12h 30m', typicalCost: '$600-1000' },
    'beijing': { airlines: ['Air China', 'Hainan Airlines'], frequency: 'Daily', flightTime: '12h 30m', typicalCost: '$600-1000' },
    'shanghai': { airlines: ['China Eastern', 'American', 'Delta'], frequency: 'Daily', flightTime: '13h 0m', typicalCost: '$600-1000' },
    'hong-kong': { airlines: ['Cathay Pacific'], frequency: 'Daily', flightTime: '14h 30m', typicalCost: '$650-1100' },
    'taipei': { airlines: ['EVA Air', 'China Airlines'], frequency: 'Daily', flightTime: '13h 0m', typicalCost: '$600-1000' },
    'singapore': { airlines: ['Singapore Airlines', 'United'], frequency: 'Daily', flightTime: '17h 30m', typicalCost: '$700-1200' },
    'bangkok': { airlines: ['Thai Airways', 'Zipair'], frequency: 'Daily', flightTime: '17h 0m', typicalCost: '$650-1100' },
    'hanoi': { airlines: ['Vietnam Airlines'], frequency: '3-4x/week', flightTime: '16h 0m', typicalCost: '$650-1100' },
    'bali': { airlines: ['Singapore Airlines (via SIN)'], frequency: '4-5x/week', flightTime: '17h 0m', typicalCost: '$700-1200' },
    'kuala-lumpur': { airlines: ['AirAsia X'], frequency: '3-4x/week', flightTime: '17h 0m', typicalCost: '$600-1100' },
    'phuket': { airlines: ['Zipair'], frequency: '3-4x/week', flightTime: '18h 0m', typicalCost: '$650-1100' },
    'maldives': { airlines: ['Singapore Airlines (via SIN)'], frequency: '3-4x/week', flightTime: '19h 0m', typicalCost: '$900-1500' },

    // Europe
    'paris': { airlines: ['Air France', 'Delta', 'United', 'Norse Atlantic', 'French Bee'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$500-900' },
    'barcelona': { airlines: ['Norwegian', 'Delta', 'LEVEL'], frequency: '4-5x/week', flightTime: '11h 0m', typicalCost: '$500-900' },
    'lisbon': { airlines: ['TAP Portugal'], frequency: '4-5x/week', flightTime: '10h 45m', typicalCost: '$500-850' },
    'amsterdam': { airlines: ['Delta', 'KLM'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$500-900' },
    'rome': { airlines: ['ITA Airways', 'Norse Atlantic'], frequency: '4-5x/week', flightTime: '11h 30m', typicalCost: '$550-950' },
    'istanbul': { airlines: ['Turkish Airlines'], frequency: 'Daily', flightTime: '13h 0m', typicalCost: '$600-1000' },
    'reykjavik': { airlines: ['Icelandair', 'Play'], frequency: '4-5x/week', flightTime: '8h 0m', typicalCost: '$350-650' },
    'copenhagen': { airlines: ['SAS'], frequency: '3-4x/week', flightTime: '10h 30m', typicalCost: '$500-900' },
    'athens': { airlines: ['Delta'], frequency: 'Seasonal', flightTime: '12h 30m', typicalCost: '$600-1000' },

    // North & Central America
    'mexico-city': { airlines: ['Aeromexico', 'Delta', 'American', 'Volaris', 'Vivaaerobus'], frequency: 'Multiple daily', flightTime: '3h 45m', typicalCost: '$200-400' },
    'tulum': { airlines: ['Alaska', 'American', 'Southwest'], frequency: 'Daily', flightTime: '4h 45m', typicalCost: '$300-550' },
    'vancouver': { airlines: ['Alaska', 'Delta', 'Air Canada', 'WestJet'], frequency: 'Multiple daily', flightTime: '2h 45m', typicalCost: '$150-350' },
    'banff': { airlines: ['Alaska', 'United', 'WestJet'], frequency: 'Daily', flightTime: '3h 30m', typicalCost: '$200-400' },
    'havana': { airlines: ['American'], frequency: '3-4x/week', flightTime: '5h 0m', typicalCost: '$350-600' },
    'san-juan': { airlines: ['JetBlue'], frequency: 'Daily', flightTime: '5h 45m', typicalCost: '$250-500' },
    'new-orleans': { airlines: ['Delta', 'United', 'Southwest', 'Spirit'], frequency: 'Multiple daily', flightTime: '3h 30m', typicalCost: '$150-350' },
    'costa-rica': { airlines: ['Delta', 'Alaska', 'Spirit'], frequency: 'Daily', flightTime: '5h 45m', typicalCost: '$300-550' },
    'cancun': { airlines: ['American', 'Delta', 'United', 'Southwest', 'Volaris'], frequency: 'Multiple daily', flightTime: '4h 15m', typicalCost: '$250-450' },
    'toronto': { airlines: ['Air Canada', 'American', 'Delta'], frequency: 'Multiple daily', flightTime: '4h 45m', typicalCost: '$250-500' },

    // South America
    'buenos-aires': { airlines: ['LATAM', 'Aerolinas Argentinas'], frequency: '3-4x/week', flightTime: '12h 30m', typicalCost: '$700-1100' },
    'bogota': { airlines: ['Avianca', 'Spirit'], frequency: 'Daily', flightTime: '6h 30m', typicalCost: '$350-600' },
    'lima': { airlines: ['LATAM', 'Spirit'], frequency: 'Daily', flightTime: '8h 30m', typicalCost: '$400-700' },
    'santiago': { airlines: ['LATAM'], frequency: 'Daily', flightTime: '11h 0m', typicalCost: '$550-950' },

    // Africa & Middle East
    'dubai': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '16h 0m', typicalCost: '$700-1200' },
    'cairo': { airlines: ['EgyptAir'], frequency: '3-4x/week', flightTime: '14h 30m', typicalCost: '$700-1100' },

    // Oceania
    'sydney': { airlines: ['Qantas', 'United', 'Delta'], frequency: 'Daily', flightTime: '15h 0m', typicalCost: '$800-1400' },
    'melbourne': { airlines: ['Qantas', 'United'], frequency: 'Daily', flightTime: '16h 0m', typicalCost: '$800-1400' },
    'auckland': { airlines: ['Air New Zealand', 'American'], frequency: 'Daily', flightTime: '13h 0m', typicalCost: '$700-1300' },
    'fiji': { airlines: ['Fiji Airways'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$600-1000' },
    'bora-bora': { airlines: ['Air Tahiti Nui', 'French Bee', 'United'], frequency: 'Daily', flightTime: '8h 30m', typicalCost: '$700-1200' },
    'queenstown': { airlines: ['Air New Zealand'], frequency: '3-4x/week', flightTime: '14h 0m', typicalCost: '$800-1400' },
  },

  // ─────────────────────────────────────────────
  // CHICAGO (ORD)
  // ─────────────────────────────────────────────
  'Chicago': {
    // Asia
    'tokyo': { airlines: ['ANA', 'United', 'JAL'], frequency: 'Daily', flightTime: '13h 0m', typicalCost: '$700-1100' },
    'seoul': { airlines: ['Korean Air'], frequency: '3-4x/week', flightTime: '13h 30m', typicalCost: '$750-1100' },
    'beijing': { airlines: ['Air China', 'United'], frequency: '4-5x/week', flightTime: '13h 30m', typicalCost: '$700-1100' },
    'shanghai': { airlines: ['United'], frequency: 'Daily', flightTime: '14h 0m', typicalCost: '$700-1100' },
    'hong-kong': { airlines: ['Cathay Pacific'], frequency: 'Daily', flightTime: '15h 30m', typicalCost: '$700-1100' },
    'taipei': { airlines: ['EVA Air'], frequency: '4-5x/week', flightTime: '14h 30m', typicalCost: '$700-1100' },

    // Europe
    'paris': { airlines: ['United', 'Air France', 'American'], frequency: 'Daily', flightTime: '8h 30m', typicalCost: '$450-850' },
    'barcelona': { airlines: ['United'], frequency: '4-5x/week', flightTime: '9h 15m', typicalCost: '$500-900' },
    'lisbon': { airlines: ['United', 'TAP Portugal'], frequency: '4-5x/week', flightTime: '8h 30m', typicalCost: '$450-800' },
    'amsterdam': { airlines: ['United', 'KLM'], frequency: 'Daily', flightTime: '8h 15m', typicalCost: '$450-850' },
    'rome': { airlines: ['United', 'ITA Airways'], frequency: 'Daily', flightTime: '9h 30m', typicalCost: '$500-900' },
    'edinburgh': { airlines: ['United'], frequency: 'Seasonal', flightTime: '7h 45m', typicalCost: '$450-800' },
    'istanbul': { airlines: ['Turkish Airlines'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$550-950' },
    'reykjavik': { airlines: ['Icelandair'], frequency: '4-5x/week', flightTime: '6h 30m', typicalCost: '$300-600' },
    'copenhagen': { airlines: ['SAS'], frequency: '4-5x/week', flightTime: '8h 30m', typicalCost: '$450-850' },
    'athens': { airlines: ['United'], frequency: 'Seasonal', flightTime: '10h 30m', typicalCost: '$550-950' },
    'budapest': { airlines: ['LOT (via codeshare)'], frequency: '3-4x/week', flightTime: '9h 30m', typicalCost: '$500-900' },
    'vienna': { airlines: ['Austrian Airlines'], frequency: '4-5x/week', flightTime: '9h 15m', typicalCost: '$500-900' },
    'prague': { airlines: ['United'], frequency: 'Seasonal', flightTime: '9h 0m', typicalCost: '$500-900' },

    // North & Central America
    'mexico-city': { airlines: ['United', 'Aeromexico', 'Volaris', 'Vivaaerobus'], frequency: 'Multiple daily', flightTime: '4h 15m', typicalCost: '$200-450' },
    'tulum': { airlines: ['United', 'Southwest'], frequency: 'Daily', flightTime: '3h 45m', typicalCost: '$250-500' },
    'vancouver': { airlines: ['United', 'Air Canada'], frequency: 'Daily', flightTime: '4h 15m', typicalCost: '$200-450' },
    'san-juan': { airlines: ['United', 'Spirit'], frequency: 'Daily', flightTime: '4h 30m', typicalCost: '$200-400' },
    'new-orleans': { airlines: ['United', 'American', 'Spirit', 'Southwest'], frequency: 'Multiple daily', flightTime: '2h 15m', typicalCost: '$100-300' },
    'costa-rica': { airlines: ['United', 'Spirit'], frequency: 'Daily', flightTime: '5h 0m', typicalCost: '$300-550' },
    'cancun': { airlines: ['United', 'American', 'Southwest', 'Spirit', 'Frontier'], frequency: 'Multiple daily', flightTime: '3h 45m', typicalCost: '$200-450' },
    'toronto': { airlines: ['United', 'Air Canada', 'American'], frequency: 'Multiple daily', flightTime: '1h 30m', typicalCost: '$150-350' },
    'havana': { airlines: ['American'], frequency: '3-4x/week', flightTime: '3h 45m', typicalCost: '$300-500' },
    'banff': { airlines: ['United', 'WestJet'], frequency: '3-4x/week', flightTime: '4h 0m', typicalCost: '$200-400' },

    // South America
    'bogota': { airlines: ['Avianca', 'Spirit'], frequency: 'Daily', flightTime: '5h 30m', typicalCost: '$300-550' },
    'lima': { airlines: ['United', 'LATAM'], frequency: 'Daily', flightTime: '7h 30m', typicalCost: '$400-700' },
    'santiago': { airlines: ['LATAM'], frequency: '3-4x/week', flightTime: '11h 0m', typicalCost: '$600-1000' },

    // Africa & Middle East
    'dubai': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '13h 30m', typicalCost: '$650-1100' },
    'cairo': { airlines: ['EgyptAir'], frequency: '3-4x/week', flightTime: '12h 0m', typicalCost: '$650-1000' },

    // Oceania
    'sydney': { airlines: ['United'], frequency: '3-4x/week', flightTime: '18h 0m', typicalCost: '$900-1600' },
  },

  // ─────────────────────────────────────────────
  // SAN FRANCISCO (SFO)
  // ─────────────────────────────────────────────
  'San Francisco': {
    // Asia
    'tokyo': { airlines: ['JAL', 'ANA', 'United', 'Zipair'], frequency: 'Multiple daily', flightTime: '11h 0m', typicalCost: '$600-1000' },
    'seoul': { airlines: ['Korean Air', 'Asiana', 'United'], frequency: 'Daily', flightTime: '12h 0m', typicalCost: '$600-1000' },
    'beijing': { airlines: ['Air China', 'United'], frequency: 'Daily', flightTime: '12h 0m', typicalCost: '$600-1000' },
    'shanghai': { airlines: ['United', 'China Eastern'], frequency: 'Daily', flightTime: '12h 30m', typicalCost: '$600-1000' },
    'hong-kong': { airlines: ['Cathay Pacific', 'United'], frequency: 'Daily', flightTime: '14h 0m', typicalCost: '$650-1100' },
    'taipei': { airlines: ['EVA Air', 'China Airlines', 'United'], frequency: 'Daily', flightTime: '12h 30m', typicalCost: '$600-1000' },
    'singapore': { airlines: ['Singapore Airlines', 'United'], frequency: 'Daily', flightTime: '17h 0m', typicalCost: '$700-1200' },
    'bangkok': { airlines: ['United', 'EVA Air (via TPE)'], frequency: '4-5x/week', flightTime: '16h 0m', typicalCost: '$650-1100' },
    'hanoi': { airlines: ['Vietnam Airlines'], frequency: '3-4x/week', flightTime: '14h 30m', typicalCost: '$650-1100' },
    'kuala-lumpur': { airlines: ['AirAsia X'], frequency: '3-4x/week', flightTime: '16h 30m', typicalCost: '$600-1100' },

    // Europe
    'paris': { airlines: ['Air France', 'United', 'French Bee'], frequency: 'Daily', flightTime: '10h 45m', typicalCost: '$500-900' },
    'barcelona': { airlines: ['United', 'LEVEL'], frequency: '4-5x/week', flightTime: '11h 15m', typicalCost: '$500-900' },
    'amsterdam': { airlines: ['KLM', 'United'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$500-900' },
    'rome': { airlines: ['United'], frequency: '4-5x/week', flightTime: '12h 0m', typicalCost: '$550-950' },
    'istanbul': { airlines: ['Turkish Airlines', 'United'], frequency: 'Daily', flightTime: '13h 30m', typicalCost: '$600-1000' },
    'reykjavik': { airlines: ['Icelandair'], frequency: '4-5x/week', flightTime: '8h 30m', typicalCost: '$350-650' },
    'copenhagen': { airlines: ['SAS'], frequency: '3-4x/week', flightTime: '10h 30m', typicalCost: '$500-900' },
    'athens': { airlines: ['United'], frequency: 'Seasonal', flightTime: '12h 30m', typicalCost: '$600-1000' },
    'lisbon': { airlines: ['TAP Portugal'], frequency: '3-4x/week', flightTime: '10h 30m', typicalCost: '$500-850' },

    // North & Central America
    'mexico-city': { airlines: ['United', 'Aeromexico', 'Volaris'], frequency: 'Multiple daily', flightTime: '4h 15m', typicalCost: '$200-450' },
    'tulum': { airlines: ['Alaska', 'United'], frequency: 'Seasonal', flightTime: '5h 0m', typicalCost: '$300-550' },
    'vancouver': { airlines: ['United', 'Air Canada', 'Alaska', 'WestJet'], frequency: 'Multiple daily', flightTime: '2h 30m', typicalCost: '$150-300' },
    'banff': { airlines: ['United', 'WestJet'], frequency: '3-4x/week', flightTime: '3h 0m', typicalCost: '$200-400' },
    'san-juan': { airlines: ['United'], frequency: '3-4x/week', flightTime: '6h 0m', typicalCost: '$300-550' },
    'new-orleans': { airlines: ['United', 'Southwest'], frequency: 'Daily', flightTime: '3h 45m', typicalCost: '$150-350' },
    'costa-rica': { airlines: ['United', 'Alaska'], frequency: 'Daily', flightTime: '6h 0m', typicalCost: '$350-600' },
    'cancun': { airlines: ['United', 'Alaska', 'Southwest'], frequency: 'Daily', flightTime: '4h 45m', typicalCost: '$250-500' },
    'toronto': { airlines: ['Air Canada', 'United'], frequency: 'Multiple daily', flightTime: '4h 45m', typicalCost: '$250-500' },
    'havana': { airlines: ['Alaska'], frequency: '3-4x/week', flightTime: '5h 30m', typicalCost: '$350-600' },

    // South America
    'bogota': { airlines: ['Avianca'], frequency: '3-4x/week', flightTime: '7h 0m', typicalCost: '$350-600' },
    'lima': { airlines: ['LATAM', 'United'], frequency: 'Daily', flightTime: '9h 0m', typicalCost: '$450-750' },

    // Africa & Middle East
    'dubai': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '16h 0m', typicalCost: '$700-1200' },

    // Oceania
    'sydney': { airlines: ['Qantas', 'United'], frequency: 'Daily', flightTime: '15h 30m', typicalCost: '$800-1400' },
    'melbourne': { airlines: ['United'], frequency: '3-4x/week', flightTime: '16h 30m', typicalCost: '$800-1400' },
    'auckland': { airlines: ['Air New Zealand'], frequency: '3-4x/week', flightTime: '13h 0m', typicalCost: '$700-1300' },
    'fiji': { airlines: ['Fiji Airways'], frequency: '3-4x/week', flightTime: '10h 30m', typicalCost: '$600-1000' },
    'bora-bora': { airlines: ['Air Tahiti Nui', 'United', 'French Bee'], frequency: 'Daily', flightTime: '8h 0m', typicalCost: '$700-1200' },
  },

  // ─────────────────────────────────────────────
  // MIAMI (MIA)
  // ─────────────────────────────────────────────
  'Miami': {
    // Asia
    'tokyo': { airlines: ['American'], frequency: '3-4x/week', flightTime: '17h 0m', typicalCost: '$900-1400' },

    // Europe
    'paris': { airlines: ['Air France', 'American'], frequency: 'Daily', flightTime: '9h 30m', typicalCost: '$450-850' },
    'barcelona': { airlines: ['American', 'Iberia'], frequency: 'Daily', flightTime: '9h 15m', typicalCost: '$450-850' },
    'lisbon': { airlines: ['TAP Portugal'], frequency: 'Daily', flightTime: '8h 30m', typicalCost: '$400-750' },
    'amsterdam': { airlines: ['KLM'], frequency: '4-5x/week', flightTime: '9h 45m', typicalCost: '$450-850' },
    'rome': { airlines: ['American'], frequency: 'Seasonal', flightTime: '10h 30m', typicalCost: '$500-900' },
    'istanbul': { airlines: ['Turkish Airlines'], frequency: 'Daily', flightTime: '12h 0m', typicalCost: '$550-950' },
    'reykjavik': { airlines: ['Icelandair'], frequency: 'Seasonal', flightTime: '7h 30m', typicalCost: '$350-650' },
    'athens': { airlines: ['American'], frequency: 'Seasonal', flightTime: '11h 30m', typicalCost: '$550-950' },

    // North & Central America
    'mexico-city': { airlines: ['Aeromexico', 'American', 'Vivaaerobus'], frequency: 'Multiple daily', flightTime: '3h 30m', typicalCost: '$200-400' },
    'tulum': { airlines: ['American', 'Frontier'], frequency: 'Daily', flightTime: '2h 30m', typicalCost: '$200-400' },
    'havana': { airlines: ['American', 'Southwest'], frequency: 'Multiple daily', flightTime: '1h 15m', typicalCost: '$200-400' },
    'san-juan': { airlines: ['American', 'JetBlue', 'Spirit', 'Frontier'], frequency: 'Multiple daily', flightTime: '2h 30m', typicalCost: '$100-300' },
    'new-orleans': { airlines: ['American', 'Spirit', 'Southwest'], frequency: 'Multiple daily', flightTime: '2h 30m', typicalCost: '$100-300' },
    'costa-rica': { airlines: ['American', 'Spirit', 'Avianca'], frequency: 'Multiple daily', flightTime: '3h 30m', typicalCost: '$200-400' },
    'cancun': { airlines: ['American', 'Spirit', 'Frontier', 'Southwest'], frequency: 'Multiple daily', flightTime: '2h 0m', typicalCost: '$150-350' },
    'toronto': { airlines: ['Air Canada', 'American'], frequency: 'Multiple daily', flightTime: '3h 15m', typicalCost: '$200-400' },
    'vancouver': { airlines: ['Air Canada'], frequency: '3-4x/week', flightTime: '6h 0m', typicalCost: '$300-550' },

    // South America
    'buenos-aires': { airlines: ['American', 'Aerolinas Argentinas', 'LATAM'], frequency: 'Daily', flightTime: '9h 30m', typicalCost: '$500-900' },
    'cartagena': { airlines: ['American', 'Spirit', 'JetBlue'], frequency: 'Multiple daily', flightTime: '3h 0m', typicalCost: '$200-400' },
    'rio-de-janeiro': { airlines: ['American', 'LATAM'], frequency: 'Daily', flightTime: '8h 30m', typicalCost: '$500-900' },
    'bogota': { airlines: ['Avianca', 'American', 'Spirit', 'LATAM'], frequency: 'Multiple daily', flightTime: '3h 30m', typicalCost: '$200-400' },
    'lima': { airlines: ['LATAM', 'American', 'Spirit'], frequency: 'Multiple daily', flightTime: '5h 45m', typicalCost: '$300-600' },
    'santiago': { airlines: ['LATAM', 'American'], frequency: 'Daily', flightTime: '9h 0m', typicalCost: '$500-900' },
    'medellin': { airlines: ['Spirit', 'American', 'Avianca'], frequency: 'Multiple daily', flightTime: '3h 15m', typicalCost: '$200-400' },
    'cusco': { airlines: ['LATAM (via LIM)'], frequency: 'Daily', flightTime: '7h 30m', typicalCost: '$400-700' },

    // Africa & Middle East
    'dubai': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '15h 30m', typicalCost: '$700-1200' },
    'cairo': { airlines: ['EgyptAir'], frequency: '3-4x/week', flightTime: '13h 0m', typicalCost: '$650-1100' },
    'accra': { airlines: ['United'], frequency: '3-4x/week', flightTime: '10h 0m', typicalCost: '$600-1000' },
    'nairobi': { airlines: ['Kenya Airways'], frequency: '3-4x/week', flightTime: '16h 30m', typicalCost: '$750-1200' },
  },

  // ─────────────────────────────────────────────
  // LONDON (LHR/LGW/STN)
  // ─────────────────────────────────────────────
  'London': {
    // Asia
    'tokyo': { airlines: ['British Airways', 'JAL', 'ANA'], frequency: 'Daily', flightTime: '11h 45m', typicalCost: '$700-1200' },
    'bangkok': { airlines: ['British Airways', 'Thai Airways', 'EVA Air'], frequency: 'Daily', flightTime: '11h 30m', typicalCost: '$550-950' },
    'bali': { airlines: ['Garuda Indonesia', 'Singapore Airlines (via SIN)'], frequency: '3-4x/week', flightTime: '15h 30m', typicalCost: '$650-1100' },
    'seoul': { airlines: ['Korean Air', 'Asiana'], frequency: 'Daily', flightTime: '11h 0m', typicalCost: '$600-1000' },
    'hanoi': { airlines: ['Vietnam Airlines'], frequency: 'Daily', flightTime: '11h 0m', typicalCost: '$550-950' },
    'singapore': { airlines: ['Singapore Airlines', 'British Airways'], frequency: 'Multiple daily', flightTime: '13h 0m', typicalCost: '$550-1000' },
    'kyoto': { airlines: ['British Airways', 'JAL'], frequency: 'Daily', flightTime: '11h 45m', typicalCost: '$700-1200' },
    'taipei': { airlines: ['EVA Air', 'China Airlines'], frequency: 'Daily', flightTime: '12h 30m', typicalCost: '$600-1000' },
    'beijing': { airlines: ['Air China', 'British Airways'], frequency: 'Daily', flightTime: '10h 0m', typicalCost: '$550-950' },
    'shanghai': { airlines: ['British Airways', 'China Eastern', 'Virgin Atlantic'], frequency: 'Daily', flightTime: '11h 0m', typicalCost: '$550-950' },
    'hong-kong': { airlines: ['British Airways', 'Cathay Pacific', 'Virgin Atlantic'], frequency: 'Multiple daily', flightTime: '12h 0m', typicalCost: '$550-1000' },
    'kuala-lumpur': { airlines: ['Malaysia Airlines', 'British Airways'], frequency: 'Daily', flightTime: '12h 30m', typicalCost: '$500-900' },
    'phuket': { airlines: ['TUI', 'British Airways'], frequency: 'Seasonal', flightTime: '11h 30m', typicalCost: '$550-950' },
    'colombo': { airlines: ['SriLankan Airlines', 'British Airways'], frequency: 'Daily', flightTime: '11h 0m', typicalCost: '$500-900' },
    'maldives': { airlines: ['British Airways'], frequency: '3-4x/week', flightTime: '10h 30m', typicalCost: '$700-1300' },
    'jaipur': { airlines: ['British Airways', 'Air India'], frequency: 'Daily', flightTime: '8h 30m', typicalCost: '$500-850' },
    'kathmandu': { airlines: ['Nepal Airlines'], frequency: '3-4x/week', flightTime: '10h 30m', typicalCost: '$600-1000' },
    'chiang-mai': { airlines: ['Thai Airways (via BKK)'], frequency: '3-4x/week', flightTime: '12h 30m', typicalCost: '$550-950' },

    // Europe
    'paris': { airlines: ['British Airways', 'Air France', 'easyJet', 'Eurostar'], frequency: 'Multiple daily', flightTime: '1h 15m', typicalCost: '$80-250' },
    'barcelona': { airlines: ['British Airways', 'easyJet', 'Vueling', 'Ryanair'], frequency: 'Multiple daily', flightTime: '2h 15m', typicalCost: '$80-250' },
    'lisbon': { airlines: ['British Airways', 'TAP Portugal', 'easyJet', 'Ryanair'], frequency: 'Multiple daily', flightTime: '2h 45m', typicalCost: '$80-250' },
    'prague': { airlines: ['British Airways', 'easyJet', 'Ryanair', 'Wizz Air'], frequency: 'Multiple daily', flightTime: '2h 0m', typicalCost: '$60-200' },
    'dubrovnik': { airlines: ['British Airways', 'easyJet', 'Jet2'], frequency: 'Seasonal', flightTime: '2h 45m', typicalCost: '$100-300' },
    'santorini': { airlines: ['easyJet', 'British Airways', 'Jet2', 'TUI'], frequency: 'Seasonal', flightTime: '3h 45m', typicalCost: '$120-350' },
    'amsterdam': { airlines: ['British Airways', 'KLM', 'easyJet'], frequency: 'Multiple daily', flightTime: '1h 15m', typicalCost: '$60-200' },
    'rome': { airlines: ['British Airways', 'ITA Airways', 'Ryanair', 'easyJet'], frequency: 'Multiple daily', flightTime: '2h 30m', typicalCost: '$80-250' },
    'edinburgh': { airlines: ['British Airways', 'easyJet', 'Ryanair'], frequency: 'Multiple daily', flightTime: '1h 20m', typicalCost: '$50-180' },
    'budapest': { airlines: ['British Airways', 'easyJet', 'Ryanair', 'Wizz Air'], frequency: 'Multiple daily', flightTime: '2h 30m', typicalCost: '$60-200' },
    'istanbul': { airlines: ['Turkish Airlines', 'British Airways', 'easyJet'], frequency: 'Multiple daily', flightTime: '3h 45m', typicalCost: '$120-350' },
    'vienna': { airlines: ['British Airways', 'easyJet', 'Austrian Airlines'], frequency: 'Multiple daily', flightTime: '2h 15m', typicalCost: '$60-200' },
    'copenhagen': { airlines: ['British Airways', 'SAS', 'easyJet', 'Ryanair'], frequency: 'Multiple daily', flightTime: '1h 55m', typicalCost: '$60-200' },
    'reykjavik': { airlines: ['Icelandair', 'easyJet', 'Play', 'Wizz Air'], frequency: 'Daily', flightTime: '3h 15m', typicalCost: '$100-300' },
    'athens': { airlines: ['British Airways', 'easyJet', 'Aegean'], frequency: 'Multiple daily', flightTime: '3h 45m', typicalCost: '$100-300' },

    // North & Central America
    'mexico-city': { airlines: ['British Airways', 'Aeromexico'], frequency: 'Daily', flightTime: '11h 30m', typicalCost: '$500-900' },
    'vancouver': { airlines: ['British Airways', 'Air Canada', 'WestJet'], frequency: 'Daily', flightTime: '9h 30m', typicalCost: '$450-850' },
    'san-juan': { airlines: ['British Airways'], frequency: '3-4x/week', flightTime: '8h 45m', typicalCost: '$400-750' },
    'new-orleans': { airlines: ['British Airways'], frequency: '3-4x/week', flightTime: '10h 0m', typicalCost: '$450-800' },
    'costa-rica': { airlines: ['British Airways'], frequency: '3-4x/week', flightTime: '10h 45m', typicalCost: '$500-900' },
    'cancun': { airlines: ['British Airways', 'TUI', 'Virgin Atlantic'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$450-850' },
    'toronto': { airlines: ['British Airways', 'Air Canada', 'WestJet'], frequency: 'Multiple daily', flightTime: '7h 30m', typicalCost: '$400-750' },

    // South America
    'buenos-aires': { airlines: ['British Airways'], frequency: '4-5x/week', flightTime: '14h 0m', typicalCost: '$700-1200' },
    'rio-de-janeiro': { airlines: ['British Airways', 'LATAM'], frequency: '4-5x/week', flightTime: '11h 30m', typicalCost: '$600-1100' },
    'bogota': { airlines: ['Avianca'], frequency: '4-5x/week', flightTime: '10h 30m', typicalCost: '$500-900' },
    'lima': { airlines: ['LATAM', 'British Airways'], frequency: '4-5x/week', flightTime: '12h 30m', typicalCost: '$550-1000' },
    'santiago': { airlines: ['LATAM', 'British Airways'], frequency: '4-5x/week', flightTime: '14h 30m', typicalCost: '$700-1200' },

    // Africa & Middle East
    'marrakech': { airlines: ['British Airways', 'easyJet', 'Ryanair'], frequency: 'Daily', flightTime: '3h 30m', typicalCost: '$100-300' },
    'cape-town': { airlines: ['British Airways', 'Virgin Atlantic'], frequency: 'Daily', flightTime: '11h 30m', typicalCost: '$600-1100' },
    'zanzibar': { airlines: ['TUI', 'Condor'], frequency: 'Seasonal', flightTime: '10h 0m', typicalCost: '$550-1000' },
    'nairobi': { airlines: ['British Airways', 'Kenya Airways'], frequency: 'Daily', flightTime: '8h 30m', typicalCost: '$450-850' },
    'cairo': { airlines: ['British Airways', 'EgyptAir'], frequency: 'Daily', flightTime: '5h 0m', typicalCost: '$250-500' },
    'accra': { airlines: ['British Airways', 'Virgin Atlantic'], frequency: 'Daily', flightTime: '6h 30m', typicalCost: '$350-650' },
    'mauritius': { airlines: ['British Airways', 'Air Mauritius'], frequency: '4-5x/week', flightTime: '12h 0m', typicalCost: '$650-1200' },
    'dubai': { airlines: ['Emirates', 'British Airways', 'Virgin Atlantic', 'flydubai'], frequency: 'Multiple daily', flightTime: '7h 0m', typicalCost: '$350-700' },

    // Oceania
    'sydney': { airlines: ['Qantas', 'British Airways (via SIN)'], frequency: 'Daily', flightTime: '22h 30m', typicalCost: '$1000-1800' },
    'melbourne': { airlines: ['Qantas'], frequency: '3-4x/week', flightTime: '23h 0m', typicalCost: '$1000-1800' },
    'auckland': { airlines: ['Air New Zealand (via LAX)'], frequency: '3-4x/week', flightTime: '24h 0m', typicalCost: '$1000-1800' },
    'fiji': { airlines: ['Fiji Airways (via LAX/SIN)'], frequency: 'Seasonal', flightTime: '22h 0m', typicalCost: '$900-1600' },
    'bora-bora': { airlines: ['Air Tahiti Nui (via LAX)'], frequency: 'Seasonal', flightTime: '20h 0m', typicalCost: '$1000-1800' },
  },

  // ─────────────────────────────────────────────
  // TORONTO (YYZ)
  // ─────────────────────────────────────────────
  'Toronto': {
    // Asia
    'tokyo': { airlines: ['Air Canada', 'ANA'], frequency: 'Daily', flightTime: '13h 30m', typicalCost: '$800-1200' },
    'seoul': { airlines: ['Korean Air', 'Air Canada'], frequency: '3-4x/week', flightTime: '13h 30m', typicalCost: '$800-1200' },
    'beijing': { airlines: ['Air China', 'Air Canada'], frequency: '4-5x/week', flightTime: '13h 0m', typicalCost: '$700-1100' },
    'shanghai': { airlines: ['Air Canada', 'China Eastern'], frequency: 'Daily', flightTime: '14h 0m', typicalCost: '$700-1100' },
    'hong-kong': { airlines: ['Cathay Pacific', 'Air Canada'], frequency: 'Daily', flightTime: '15h 30m', typicalCost: '$750-1200' },
    'singapore': { airlines: ['Singapore Airlines (via FRA)'], frequency: '3-4x/week', flightTime: '18h 0m', typicalCost: '$800-1300' },

    // Europe
    'paris': { airlines: ['Air Canada', 'Air France', 'Air Transat'], frequency: 'Multiple daily', flightTime: '7h 30m', typicalCost: '$400-800' },
    'barcelona': { airlines: ['Air Canada', 'Air Transat'], frequency: 'Seasonal', flightTime: '8h 30m', typicalCost: '$450-850' },
    'lisbon': { airlines: ['Air Canada', 'TAP Portugal', 'Air Transat'], frequency: 'Daily', flightTime: '7h 15m', typicalCost: '$400-750' },
    'prague': { airlines: ['Air Transat'], frequency: 'Seasonal', flightTime: '8h 30m', typicalCost: '$450-850' },
    'dubrovnik': { airlines: ['Air Canada'], frequency: 'Seasonal', flightTime: '9h 30m', typicalCost: '$500-900' },
    'amsterdam': { airlines: ['Air Canada', 'KLM'], frequency: 'Daily', flightTime: '7h 30m', typicalCost: '$400-800' },
    'rome': { airlines: ['Air Canada', 'Air Transat', 'ITA Airways'], frequency: 'Daily', flightTime: '9h 0m', typicalCost: '$450-850' },
    'edinburgh': { airlines: ['Air Canada', 'WestJet'], frequency: 'Seasonal', flightTime: '6h 30m', typicalCost: '$400-750' },
    'budapest': { airlines: ['Air Canada'], frequency: 'Seasonal', flightTime: '9h 0m', typicalCost: '$450-850' },
    'istanbul': { airlines: ['Turkish Airlines'], frequency: 'Daily', flightTime: '10h 0m', typicalCost: '$500-900' },
    'vienna': { airlines: ['Austrian Airlines'], frequency: '4-5x/week', flightTime: '8h 45m', typicalCost: '$450-850' },
    'copenhagen': { airlines: ['Air Canada'], frequency: 'Seasonal', flightTime: '8h 0m', typicalCost: '$450-800' },
    'reykjavik': { airlines: ['Icelandair', 'WestJet'], frequency: '4-5x/week', flightTime: '5h 30m', typicalCost: '$300-600' },
    'athens': { airlines: ['Air Canada', 'Air Transat'], frequency: 'Seasonal', flightTime: '10h 0m', typicalCost: '$500-900' },

    // North & Central America
    'mexico-city': { airlines: ['Air Canada', 'Aeromexico', 'WestJet'], frequency: 'Multiple daily', flightTime: '5h 0m', typicalCost: '$300-550' },
    'tulum': { airlines: ['Air Canada', 'WestJet', 'Sunwing'], frequency: 'Daily', flightTime: '4h 30m', typicalCost: '$300-550' },
    'vancouver': { airlines: ['Air Canada', 'WestJet', 'Flair'], frequency: 'Multiple daily', flightTime: '4h 45m', typicalCost: '$250-500' },
    'banff': { airlines: ['Air Canada', 'WestJet'], frequency: 'Daily', flightTime: '4h 15m', typicalCost: '$250-450' },
    'havana': { airlines: ['Air Canada', 'Sunwing', 'WestJet'], frequency: 'Daily', flightTime: '3h 45m', typicalCost: '$250-450' },
    'san-juan': { airlines: ['Air Canada', 'WestJet'], frequency: '3-4x/week', flightTime: '4h 15m', typicalCost: '$250-500' },
    'new-orleans': { airlines: ['Air Canada', 'WestJet', 'Porter'], frequency: 'Daily', flightTime: '3h 0m', typicalCost: '$200-400' },
    'costa-rica': { airlines: ['Air Canada', 'WestJet', 'Sunwing'], frequency: 'Daily', flightTime: '5h 30m', typicalCost: '$350-600' },
    'cancun': { airlines: ['Air Canada', 'WestJet', 'Sunwing', 'Flair'], frequency: 'Multiple daily', flightTime: '4h 15m', typicalCost: '$250-500' },

    // South America
    'bogota': { airlines: ['Avianca', 'Air Canada'], frequency: 'Daily', flightTime: '6h 0m', typicalCost: '$350-600' },
    'lima': { airlines: ['Air Canada', 'LATAM'], frequency: '4-5x/week', flightTime: '8h 0m', typicalCost: '$450-750' },
    'santiago': { airlines: ['Air Canada', 'LATAM'], frequency: '3-4x/week', flightTime: '12h 0m', typicalCost: '$600-1000' },

    // Africa & Middle East
    'cairo': { airlines: ['EgyptAir'], frequency: '3-4x/week', flightTime: '11h 0m', typicalCost: '$600-1000' },
    'dubai': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '13h 0m', typicalCost: '$650-1100' },
    'marrakech': { airlines: ['Air Canada Rouge'], frequency: 'Seasonal', flightTime: '7h 30m', typicalCost: '$500-900' },
    'accra': { airlines: ['Air Canada (seasonal)'], frequency: 'Seasonal', flightTime: '10h 30m', typicalCost: '$600-1000' },

    // Oceania
    'sydney': { airlines: ['Air Canada'], frequency: '3-4x/week', flightTime: '20h 0m', typicalCost: '$1000-1800' },
  },

  // ─────────────────────────────────────────────
  // SYDNEY (SYD)
  // ─────────────────────────────────────────────
  'Sydney': {
    // Asia
    'tokyo': { airlines: ['Qantas', 'JAL', 'ANA', 'Jetstar'], frequency: 'Multiple daily', flightTime: '9h 30m', typicalCost: '$500-900' },
    'bangkok': { airlines: ['Qantas', 'Thai Airways', 'Jetstar'], frequency: 'Daily', flightTime: '9h 15m', typicalCost: '$450-800' },
    'bali': { airlines: ['Qantas', 'Jetstar', 'Virgin Australia'], frequency: 'Multiple daily', flightTime: '6h 15m', typicalCost: '$300-600' },
    'seoul': { airlines: ['Korean Air', 'Asiana', 'Qantas'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$500-900' },
    'hanoi': { airlines: ['Vietnam Airlines', 'Jetstar'], frequency: 'Daily', flightTime: '9h 0m', typicalCost: '$400-750' },
    'singapore': { airlines: ['Qantas', 'Singapore Airlines', 'Jetstar', 'Scoot'], frequency: 'Multiple daily', flightTime: '8h 0m', typicalCost: '$350-700' },
    'kyoto': { airlines: ['Qantas', 'JAL'], frequency: 'Daily', flightTime: '9h 30m', typicalCost: '$500-900' },
    'taipei': { airlines: ['China Airlines', 'Qantas'], frequency: 'Daily', flightTime: '9h 15m', typicalCost: '$450-800' },
    'beijing': { airlines: ['Air China'], frequency: '4-5x/week', flightTime: '11h 30m', typicalCost: '$500-900' },
    'shanghai': { airlines: ['China Eastern', 'Qantas'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$500-900' },
    'hong-kong': { airlines: ['Cathay Pacific', 'Qantas'], frequency: 'Multiple daily', flightTime: '9h 0m', typicalCost: '$400-800' },
    'kuala-lumpur': { airlines: ['Malaysia Airlines', 'AirAsia X'], frequency: 'Daily', flightTime: '8h 15m', typicalCost: '$350-700' },
    'phuket': { airlines: ['Jetstar'], frequency: 'Seasonal', flightTime: '9h 0m', typicalCost: '$400-750' },
    'chiang-mai': { airlines: ['Thai Airways (via BKK)'], frequency: '3-4x/week', flightTime: '10h 30m', typicalCost: '$450-800' },
    'colombo': { airlines: ['SriLankan Airlines'], frequency: '4-5x/week', flightTime: '10h 30m', typicalCost: '$500-900' },
    'maldives': { airlines: ['SriLankan Airlines (via CMB)'], frequency: '3-4x/week', flightTime: '12h 0m', typicalCost: '$700-1300' },
    'jaipur': { airlines: ['Air India (via DEL)'], frequency: '3-4x/week', flightTime: '14h 0m', typicalCost: '$600-1000' },

    // Europe
    'paris': { airlines: ['Qantas (via SIN/PER)'], frequency: 'Daily', flightTime: '22h 30m', typicalCost: '$1000-1700' },
    'rome': { airlines: ['Qantas (via PER)'], frequency: '4-5x/week', flightTime: '21h 0m', typicalCost: '$1000-1700' },
    'istanbul': { airlines: ['Turkish Airlines'], frequency: 'Daily', flightTime: '18h 0m', typicalCost: '$800-1400' },

    // North & Central America (all long-haul)
    // No truly nonstop flights from SYD to Central/North America besides LAX/SFO/DFW/JFK

    // South America
    'santiago': { airlines: ['LATAM', 'Qantas'], frequency: '4-5x/week', flightTime: '13h 0m', typicalCost: '$800-1400' },
    'buenos-aires': { airlines: ['Aerolinas Argentinas (via AKL)'], frequency: '3-4x/week', flightTime: '16h 0m', typicalCost: '$900-1500' },

    // Africa & Middle East
    'cape-town': { airlines: ['Qantas (via PER)'], frequency: '3-4x/week', flightTime: '18h 0m', typicalCost: '$800-1400' },
    'nairobi': { airlines: ['Kenya Airways (via BKK)'], frequency: '3-4x/week', flightTime: '18h 0m', typicalCost: '$800-1400' },
    'dubai': { airlines: ['Emirates', 'Qantas'], frequency: 'Multiple daily', flightTime: '14h 15m', typicalCost: '$650-1200' },
    'mauritius': { airlines: ['Air Mauritius'], frequency: '3-4x/week', flightTime: '12h 0m', typicalCost: '$700-1200' },

    // Oceania
    'melbourne': { airlines: ['Qantas', 'Virgin Australia', 'Jetstar', 'Rex'], frequency: 'Multiple daily', flightTime: '1h 25m', typicalCost: '$60-180' },
    'queenstown': { airlines: ['Qantas', 'Jetstar', 'Virgin Australia'], frequency: 'Daily', flightTime: '3h 15m', typicalCost: '$200-450' },
    'fiji': { airlines: ['Fiji Airways', 'Jetstar'], frequency: 'Daily', flightTime: '4h 0m', typicalCost: '$300-600' },
    'auckland': { airlines: ['Qantas', 'Air New Zealand', 'Jetstar'], frequency: 'Multiple daily', flightTime: '3h 15m', typicalCost: '$200-450' },
    'bora-bora': { airlines: ['Air Tahiti Nui (via AKL)'], frequency: '3-4x/week', flightTime: '9h 0m', typicalCost: '$700-1300' },
  },

  // ─────────────────────────────────────────────
  // SINGAPORE (SIN)
  // ─────────────────────────────────────────────
  'Singapore': {
    // Asia
    'tokyo': { airlines: ['Singapore Airlines', 'ANA', 'JAL', 'Scoot', 'Zipair'], frequency: 'Multiple daily', flightTime: '7h 0m', typicalCost: '$300-600' },
    'bangkok': { airlines: ['Singapore Airlines', 'Thai Airways', 'Scoot', 'AirAsia'], frequency: 'Multiple daily', flightTime: '2h 30m', typicalCost: '$80-250' },
    'bali': { airlines: ['Singapore Airlines', 'Scoot', 'Jetstar Asia'], frequency: 'Multiple daily', flightTime: '2h 45m', typicalCost: '$80-250' },
    'seoul': { airlines: ['Singapore Airlines', 'Korean Air', 'Scoot'], frequency: 'Daily', flightTime: '6h 30m', typicalCost: '$300-600' },
    'hanoi': { airlines: ['Singapore Airlines', 'Vietjet', 'Scoot'], frequency: 'Multiple daily', flightTime: '3h 30m', typicalCost: '$100-300' },
    'kyoto': { airlines: ['Singapore Airlines', 'Scoot'], frequency: 'Daily', flightTime: '7h 0m', typicalCost: '$300-600' },
    'taipei': { airlines: ['Singapore Airlines', 'Scoot', 'EVA Air', 'China Airlines'], frequency: 'Multiple daily', flightTime: '4h 30m', typicalCost: '$150-400' },
    'beijing': { airlines: ['Singapore Airlines', 'Air China'], frequency: 'Daily', flightTime: '6h 30m', typicalCost: '$300-600' },
    'shanghai': { airlines: ['Singapore Airlines', 'China Eastern', 'Scoot'], frequency: 'Multiple daily', flightTime: '5h 15m', typicalCost: '$200-500' },
    'hong-kong': { airlines: ['Singapore Airlines', 'Cathay Pacific', 'Scoot'], frequency: 'Multiple daily', flightTime: '4h 0m', typicalCost: '$150-400' },
    'kuala-lumpur': { airlines: ['Singapore Airlines', 'Malaysia Airlines', 'AirAsia', 'Scoot', 'Jetstar'], frequency: 'Multiple daily', flightTime: '1h 0m', typicalCost: '$40-150' },
    'phuket': { airlines: ['Singapore Airlines', 'Scoot', 'AirAsia'], frequency: 'Multiple daily', flightTime: '1h 45m', typicalCost: '$60-200' },
    'chiang-mai': { airlines: ['Scoot', 'AirAsia'], frequency: 'Daily', flightTime: '3h 30m', typicalCost: '$100-300' },
    'siem-reap': { airlines: ['Singapore Airlines', 'Scoot'], frequency: 'Daily', flightTime: '2h 15m', typicalCost: '$80-250' },
    'luang-prabang': { airlines: ['Scoot (via BKK)'], frequency: '3-4x/week', flightTime: '4h 0m', typicalCost: '$150-350' },
    'colombo': { airlines: ['Singapore Airlines', 'SriLankan Airlines', 'Scoot'], frequency: 'Daily', flightTime: '4h 0m', typicalCost: '$150-400' },
    'maldives': { airlines: ['Singapore Airlines', 'Scoot'], frequency: 'Daily', flightTime: '4h 30m', typicalCost: '$200-500' },
    'jaipur': { airlines: ['Air India', 'IndiGo'], frequency: '3-4x/week', flightTime: '6h 0m', typicalCost: '$250-500' },
    'kathmandu': { airlines: ['Singapore Airlines', 'Scoot'], frequency: '3-4x/week', flightTime: '5h 0m', typicalCost: '$200-450' },

    // Europe
    'paris': { airlines: ['Singapore Airlines', 'Air France'], frequency: 'Daily', flightTime: '13h 0m', typicalCost: '$600-1100' },
    'barcelona': { airlines: ['Singapore Airlines (via BCN)'], frequency: '3-4x/week', flightTime: '13h 30m', typicalCost: '$600-1100' },
    'amsterdam': { airlines: ['KLM', 'Singapore Airlines'], frequency: 'Daily', flightTime: '12h 30m', typicalCost: '$600-1100' },
    'rome': { airlines: ['Singapore Airlines'], frequency: '4-5x/week', flightTime: '12h 30m', typicalCost: '$600-1100' },
    'istanbul': { airlines: ['Turkish Airlines', 'Singapore Airlines'], frequency: 'Daily', flightTime: '11h 0m', typicalCost: '$500-950' },
    'copenhagen': { airlines: ['Singapore Airlines'], frequency: '4-5x/week', flightTime: '12h 30m', typicalCost: '$600-1100' },
    'athens': { airlines: ['Scoot'], frequency: '3-4x/week', flightTime: '11h 30m', typicalCost: '$500-900' },

    // Africa & Middle East
    'cape-town': { airlines: ['Singapore Airlines (via JNB)'], frequency: '3-4x/week', flightTime: '14h 0m', typicalCost: '$600-1100' },
    'nairobi': { airlines: ['Kenya Airways (via BKK)'], frequency: '3-4x/week', flightTime: '12h 0m', typicalCost: '$500-900' },
    'cairo': { airlines: ['EgyptAir'], frequency: '3-4x/week', flightTime: '10h 0m', typicalCost: '$500-900' },
    'dubai': { airlines: ['Emirates', 'Singapore Airlines', 'Scoot', 'flydubai'], frequency: 'Multiple daily', flightTime: '7h 15m', typicalCost: '$250-550' },
    'mauritius': { airlines: ['Air Mauritius'], frequency: '3-4x/week', flightTime: '7h 30m', typicalCost: '$400-800' },

    // Oceania
    'sydney': { airlines: ['Singapore Airlines', 'Qantas', 'Scoot', 'Jetstar'], frequency: 'Multiple daily', flightTime: '8h 0m', typicalCost: '$350-700' },
    'melbourne': { airlines: ['Singapore Airlines', 'Qantas', 'Scoot', 'Jetstar'], frequency: 'Multiple daily', flightTime: '8h 0m', typicalCost: '$350-700' },
    'auckland': { airlines: ['Singapore Airlines', 'Air New Zealand'], frequency: 'Daily', flightTime: '10h 30m', typicalCost: '$450-850' },
    'queenstown': { airlines: ['Singapore Airlines (via AKL)'], frequency: '3-4x/week', flightTime: '12h 0m', typicalCost: '$500-900' },
    'fiji': { airlines: ['Fiji Airways'], frequency: '3-4x/week', flightTime: '10h 0m', typicalCost: '$450-850' },
    'bora-bora': { airlines: ['Air Tahiti Nui (via AKL)'], frequency: 'Seasonal', flightTime: '15h 0m', typicalCost: '$800-1500' },
  },

  // ─────────────────────────────────────────────
  // DUBAI (DXB)
  // ─────────────────────────────────────────────
  'Dubai': {
    // Asia
    'tokyo': { airlines: ['Emirates', 'JAL'], frequency: 'Daily', flightTime: '9h 30m', typicalCost: '$500-900' },
    'bangkok': { airlines: ['Emirates', 'Thai Airways', 'flydubai'], frequency: 'Multiple daily', flightTime: '6h 15m', typicalCost: '$300-600' },
    'bali': { airlines: ['Emirates', 'Garuda Indonesia'], frequency: 'Daily', flightTime: '8h 30m', typicalCost: '$400-750' },
    'seoul': { airlines: ['Emirates', 'Korean Air'], frequency: 'Daily', flightTime: '8h 30m', typicalCost: '$500-900' },
    'hanoi': { airlines: ['Emirates', 'Vietnam Airlines'], frequency: 'Daily', flightTime: '7h 0m', typicalCost: '$350-650' },
    'singapore': { airlines: ['Emirates', 'Singapore Airlines', 'flydubai', 'Scoot'], frequency: 'Multiple daily', flightTime: '7h 15m', typicalCost: '$250-550' },
    'taipei': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '8h 30m', typicalCost: '$450-800' },
    'beijing': { airlines: ['Emirates', 'Air China'], frequency: 'Daily', flightTime: '8h 0m', typicalCost: '$450-800' },
    'shanghai': { airlines: ['Emirates', 'China Eastern'], frequency: 'Daily', flightTime: '8h 30m', typicalCost: '$450-800' },
    'hong-kong': { airlines: ['Emirates', 'Cathay Pacific'], frequency: 'Multiple daily', flightTime: '7h 30m', typicalCost: '$350-700' },
    'kuala-lumpur': { airlines: ['Emirates', 'Malaysia Airlines', 'AirAsia X'], frequency: 'Multiple daily', flightTime: '7h 0m', typicalCost: '$300-600' },
    'phuket': { airlines: ['Emirates', 'flydubai'], frequency: 'Daily', flightTime: '6h 30m', typicalCost: '$300-600' },
    'colombo': { airlines: ['Emirates', 'SriLankan Airlines', 'flydubai'], frequency: 'Multiple daily', flightTime: '4h 30m', typicalCost: '$200-450' },
    'maldives': { airlines: ['Emirates', 'flydubai'], frequency: 'Multiple daily', flightTime: '4h 15m', typicalCost: '$250-550' },
    'jaipur': { airlines: ['Air India Express', 'IndiGo', 'SpiceJet'], frequency: 'Multiple daily', flightTime: '3h 30m', typicalCost: '$150-350' },
    'kathmandu': { airlines: ['flydubai', 'Nepal Airlines'], frequency: '4-5x/week', flightTime: '5h 0m', typicalCost: '$250-500' },
    'chiang-mai': { airlines: ['flydubai', 'Thai Airways (via BKK)'], frequency: '3-4x/week', flightTime: '7h 0m', typicalCost: '$350-650' },

    // Europe
    'paris': { airlines: ['Emirates', 'Air France', 'flydubai'], frequency: 'Multiple daily', flightTime: '7h 15m', typicalCost: '$350-700' },
    'barcelona': { airlines: ['Emirates', 'flydubai'], frequency: 'Daily', flightTime: '7h 30m', typicalCost: '$350-700' },
    'lisbon': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '8h 15m', typicalCost: '$400-750' },
    'prague': { airlines: ['Emirates', 'flydubai'], frequency: 'Daily', flightTime: '6h 15m', typicalCost: '$300-600' },
    'amsterdam': { airlines: ['Emirates', 'KLM'], frequency: 'Multiple daily', flightTime: '7h 0m', typicalCost: '$350-700' },
    'rome': { airlines: ['Emirates', 'flydubai'], frequency: 'Daily', flightTime: '6h 15m', typicalCost: '$300-600' },
    'edinburgh': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '8h 0m', typicalCost: '$400-750' },
    'budapest': { airlines: ['Emirates', 'flydubai', 'Wizz Air Abu Dhabi'], frequency: 'Daily', flightTime: '6h 0m', typicalCost: '$300-600' },
    'istanbul': { airlines: ['Emirates', 'Turkish Airlines', 'flydubai'], frequency: 'Multiple daily', flightTime: '4h 30m', typicalCost: '$200-450' },
    'vienna': { airlines: ['Emirates', 'flydubai'], frequency: 'Daily', flightTime: '6h 0m', typicalCost: '$300-600' },
    'copenhagen': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '7h 0m', typicalCost: '$350-700' },
    'athens': { airlines: ['Emirates', 'flydubai'], frequency: 'Daily', flightTime: '5h 15m', typicalCost: '$250-550' },
    'santorini': { airlines: ['flydubai'], frequency: 'Seasonal', flightTime: '5h 30m', typicalCost: '$300-600' },
    'reykjavik': { airlines: ['Icelandair (via connecting)'], frequency: 'Seasonal', flightTime: '10h 0m', typicalCost: '$500-900' },

    // North & Central America
    'toronto': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '13h 30m', typicalCost: '$650-1100' },
    'mexico-city': { airlines: ['Emirates (via BCN)'], frequency: '3-4x/week', flightTime: '17h 0m', typicalCost: '$800-1400' },

    // South America
    'buenos-aires': { airlines: ['Emirates (via GRU)'], frequency: '4-5x/week', flightTime: '20h 0m', typicalCost: '$900-1500' },
    'rio-de-janeiro': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '14h 30m', typicalCost: '$700-1200' },

    // Africa
    'marrakech': { airlines: ['Emirates', 'Royal Air Maroc'], frequency: 'Daily', flightTime: '8h 0m', typicalCost: '$400-750' },
    'cape-town': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '9h 15m', typicalCost: '$450-850' },
    'zanzibar': { airlines: ['flydubai'], frequency: '4-5x/week', flightTime: '6h 0m', typicalCost: '$300-600' },
    'nairobi': { airlines: ['Emirates', 'flydubai', 'Kenya Airways'], frequency: 'Multiple daily', flightTime: '5h 15m', typicalCost: '$250-550' },
    'cairo': { airlines: ['Emirates', 'flydubai', 'EgyptAir'], frequency: 'Multiple daily', flightTime: '4h 15m', typicalCost: '$200-450' },
    'accra': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '8h 0m', typicalCost: '$400-750' },
    'mauritius': { airlines: ['Emirates', 'Air Mauritius'], frequency: 'Daily', flightTime: '6h 30m', typicalCost: '$350-700' },

    // Oceania
    'sydney': { airlines: ['Emirates', 'Qantas'], frequency: 'Multiple daily', flightTime: '14h 15m', typicalCost: '$650-1200' },
    'melbourne': { airlines: ['Emirates', 'Qantas'], frequency: 'Daily', flightTime: '13h 45m', typicalCost: '$650-1200' },
    'auckland': { airlines: ['Emirates'], frequency: 'Daily', flightTime: '17h 15m', typicalCost: '$750-1400' },
    'bora-bora': { airlines: ['Air Tahiti Nui (via AKL)'], frequency: 'Seasonal', flightTime: '20h 0m', typicalCost: '$1000-1800' },
    'fiji': { airlines: ['Fiji Airways (via SIN)'], frequency: '3-4x/week', flightTime: '16h 0m', typicalCost: '$700-1300' },
  },
}

// Helper: get all departure cities
export const DEPARTURE_CITIES = Object.keys(DIRECT_ROUTES)

// Helper: check if a direct route exists
export function hasDirectRoute(departureCity: string, destinationSlug: string): boolean {
  return !!DIRECT_ROUTES[departureCity]?.[destinationSlug]
}

// Helper: get direct route info
export function getDirectRoute(departureCity: string, destinationSlug: string): DirectRoute | null {
  return DIRECT_ROUTES[departureCity]?.[destinationSlug] ?? null
}

// Helper: get all direct destinations from a departure city
export function getDirectDestinations(departureCity: string): string[] {
  return Object.keys(DIRECT_ROUTES[departureCity] ?? {})
}
