// Calculate approximate flight time between two coordinates
export function estimateFlightTime(
  fromLat: number,
  fromLng: number,
  toLat: number,
  toLng: number
): { hours: number; minutes: number; distance: number } {
  const R = 6371 // Earth's radius in km
  const dLat = toRad(toLat - fromLat)
  const dLng = toRad(toLng - fromLng)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(fromLat)) *
      Math.cos(toRad(toLat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = Math.round(R * c)

  // Average cruising speed ~850 km/h + 30 min for takeoff/landing
  const flightMinutes = Math.round((distance / 850) * 60) + 30
  const hours = Math.floor(flightMinutes / 60)
  const minutes = flightMinutes % 60

  return { hours, minutes, distance }
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180
}

export function formatFlightTime(hours: number, minutes: number): string {
  if (hours === 0) return `${minutes}min`
  if (minutes === 0) return `${hours}h`
  return `${hours}h ${minutes}m`
}

export function formatDistance(km: number): string {
  const miles = Math.round(km * 0.621371)
  return `${miles.toLocaleString()} mi (${km.toLocaleString()} km)`
}

// Suggest whether a destination is direct or needs connection from a departure city
export function getRouteInfo(
  fromCity: string,
  toCity: string,
  distanceKm: number
): { type: 'direct' | 'likely-connection' | 'connection'; note: string } {
  // Major hub cities that likely have directs to many places
  const majorHubs = [
    'New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Miami',
    'London', 'Dubai', 'Singapore', 'Tokyo', 'Hong Kong',
    'Sydney', 'Toronto', 'Frankfurt',
  ]
  const isFromHub = majorHubs.some((h) =>
    fromCity.toLowerCase().includes(h.toLowerCase())
  )

  if (distanceKm < 1500) {
    return { type: 'direct', note: 'Short-haul, likely direct flights available' }
  }
  if (distanceKm < 5000 && isFromHub) {
    return { type: 'direct', note: 'Direct flights likely available from major hub' }
  }
  if (distanceKm < 8000) {
    return {
      type: 'likely-connection',
      note: 'Direct flights may be available, or 1 stop through a regional hub',
    }
  }
  return {
    type: 'connection',
    note: 'Usually requires 1-2 connections through a regional hub',
  }
}

// Departure city coordinates for calculating distances
export const DEPARTURE_COORDINATES: Record<string, { lat: number; lng: number }> = {
  'New York': { lat: 40.6413, lng: -73.7781 },
  'Los Angeles': { lat: 33.9425, lng: -118.4081 },
  'Chicago': { lat: 41.9742, lng: -87.9073 },
  'San Francisco': { lat: 37.6213, lng: -122.3790 },
  'Miami': { lat: 25.7959, lng: -80.2870 },
  'Seattle': { lat: 47.4502, lng: -122.3088 },
  'Boston': { lat: 42.3656, lng: -71.0096 },
  'Dallas': { lat: 32.8998, lng: -97.0403 },
  'Denver': { lat: 39.8561, lng: -104.6737 },
  'Atlanta': { lat: 33.6407, lng: -84.4277 },
  'London': { lat: 51.4700, lng: -0.4543 },
  'Toronto': { lat: 43.6777, lng: -79.6248 },
  'Sydney': { lat: -33.9461, lng: 151.1772 },
  'Singapore': { lat: 1.3644, lng: 103.9915 },
  'Dubai': { lat: 25.2532, lng: 55.3657 },
  'Hong Kong': { lat: 22.3080, lng: 113.9185 },
  'Tokyo': { lat: 35.5494, lng: 139.7798 },
  'Mumbai': { lat: 19.0896, lng: 72.8656 },
  'Sao Paulo': { lat: -23.4356, lng: -46.4731 },
  'Berlin': { lat: 52.3667, lng: 13.5033 },
}
