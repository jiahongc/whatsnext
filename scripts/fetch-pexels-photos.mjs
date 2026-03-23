import https from 'https'
import fs from 'fs'
import path from 'path'

const API_KEY = process.env.PEXELS_API_KEY || '5eJqGjTpaVJVsgUrXb5WsH3xHQZRSbLLXee6ceujs27I6sC6L1pPRv41'

// All 65 destinations with search queries optimized for good city photos
const DESTINATIONS = [
  { slug: 'tokyo', query: 'Tokyo Japan city' },
  { slug: 'bangkok', query: 'Bangkok Thailand temples' },
  { slug: 'bali', query: 'Bali Indonesia rice terraces' },
  { slug: 'seoul', query: 'Seoul South Korea cityscape' },
  { slug: 'hanoi', query: 'Hanoi Vietnam old quarter' },
  { slug: 'singapore', query: 'Singapore Marina Bay skyline' },
  { slug: 'kyoto', query: 'Kyoto Japan temples gardens' },
  { slug: 'taipei', query: 'Taipei Taiwan city night' },
  { slug: 'chiang-mai', query: 'Chiang Mai Thailand temple' },
  { slug: 'jaipur', query: 'Jaipur India pink city palace' },
  { slug: 'maldives', query: 'Maldives beach resort ocean' },
  { slug: 'colombo', query: 'Sri Lanka beach tropical' },
  { slug: 'paris', query: 'Paris France Eiffel Tower' },
  { slug: 'barcelona', query: 'Barcelona Spain Sagrada Familia' },
  { slug: 'lisbon', query: 'Lisbon Portugal tram streets' },
  { slug: 'prague', query: 'Prague Czech Republic old town' },
  { slug: 'dubrovnik', query: 'Dubrovnik Croatia old town walls' },
  { slug: 'santorini', query: 'Santorini Greece white buildings sunset' },
  { slug: 'amsterdam', query: 'Amsterdam Netherlands canals' },
  { slug: 'rome', query: 'Rome Italy Colosseum' },
  { slug: 'edinburgh', query: 'Edinburgh Scotland castle' },
  { slug: 'budapest', query: 'Budapest Hungary parliament Danube' },
  { slug: 'mexico-city', query: 'Mexico City architecture' },
  { slug: 'tulum', query: 'Tulum Mexico ruins beach' },
  { slug: 'vancouver', query: 'Vancouver Canada mountains skyline' },
  { slug: 'banff', query: 'Banff Canada mountains lake' },
  { slug: 'havana', query: 'Havana Cuba colorful streets cars' },
  { slug: 'san-juan', query: 'San Juan Puerto Rico colorful buildings' },
  { slug: 'buenos-aires', query: 'Buenos Aires Argentina La Boca' },
  { slug: 'cartagena', query: 'Cartagena Colombia colorful old town' },
  { slug: 'cusco', query: 'Cusco Peru Machu Picchu' },
  { slug: 'rio-de-janeiro', query: 'Rio de Janeiro Brazil Sugarloaf' },
  { slug: 'medellin', query: 'Medellin Colombia city mountains' },
  { slug: 'marrakech', query: 'Marrakech Morocco medina market' },
  { slug: 'cape-town', query: 'Cape Town South Africa Table Mountain' },
  { slug: 'zanzibar', query: 'Zanzibar Tanzania beach' },
  { slug: 'nairobi', query: 'Kenya safari wildlife' },
  { slug: 'sydney', query: 'Sydney Australia Opera House harbour' },
  { slug: 'queenstown', query: 'Queenstown New Zealand mountains lake' },
  { slug: 'fiji', query: 'Fiji islands tropical beach' },
  { slug: 'beijing', query: 'Beijing China Great Wall Forbidden City' },
  { slug: 'shanghai', query: 'Shanghai China Bund skyline night' },
  { slug: 'hong-kong', query: 'Hong Kong skyline Victoria Peak' },
  { slug: 'phuket', query: 'Phuket Thailand beach tropical' },
  { slug: 'siem-reap', query: 'Angkor Wat Cambodia temple' },
  { slug: 'luang-prabang', query: 'Luang Prabang Laos monks temple' },
  { slug: 'kuala-lumpur', query: 'Kuala Lumpur Malaysia Petronas towers' },
  { slug: 'kathmandu', query: 'Kathmandu Nepal temples mountains' },
  { slug: 'istanbul', query: 'Istanbul Turkey Blue Mosque Hagia Sophia' },
  { slug: 'vienna', query: 'Vienna Austria palace architecture' },
  { slug: 'copenhagen', query: 'Copenhagen Denmark Nyhavn colorful' },
  { slug: 'reykjavik', query: 'Iceland Northern Lights landscape' },
  { slug: 'athens', query: 'Athens Greece Acropolis Parthenon' },
  { slug: 'new-orleans', query: 'New Orleans French Quarter' },
  { slug: 'costa-rica', query: 'Costa Rica rainforest tropical' },
  { slug: 'cancun', query: 'Cancun Mexico beach Caribbean' },
  { slug: 'santiago', query: 'Santiago Chile Andes city' },
  { slug: 'lima', query: 'Lima Peru Miraflores coast' },
  { slug: 'bogota', query: 'Bogota Colombia city mountains' },
  { slug: 'cairo', query: 'Cairo Egypt pyramids Giza' },
  { slug: 'accra', query: 'Ghana Accra Africa city' },
  { slug: 'mauritius', query: 'Mauritius beach tropical island' },
  { slug: 'melbourne', query: 'Melbourne Australia city laneways' },
  { slug: 'bora-bora', query: 'Bora Bora French Polynesia overwater' },
  { slug: 'auckland', query: 'Auckland New Zealand Sky Tower harbour' },
]

function fetchPexels(query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`
    const req = https.get(url, { headers: { Authorization: API_KEY } }, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try { resolve(JSON.parse(data)) }
        catch (e) { reject(e) }
      })
    })
    req.on('error', reject)
  })
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main() {
  const results = {}
  let count = 0

  for (const dest of DESTINATIONS) {
    try {
      const data = await fetchPexels(dest.query)
      if (data.photos && data.photos.length > 0) {
        results[dest.slug] = data.photos.map(p => ({
          url: p.src.large2x,
          alt: p.alt || `${dest.query} photo`,
          photographer: p.photographer,
          photographerUrl: p.photographer_url,
          pexelsUrl: p.url,
          width: p.width,
          height: p.height,
        }))
        count++
        console.log(`✓ ${dest.slug}: ${data.photos.length} photos`)
      } else {
        console.log(`✗ ${dest.slug}: no results for "${dest.query}"`)
        results[dest.slug] = []
      }
    } catch (err) {
      console.log(`✗ ${dest.slug}: error - ${err.message}`)
      results[dest.slug] = []
    }

    // Rate limit: ~1 request per 200ms to stay well under limits
    await sleep(200)
  }

  // Write TypeScript file
  const tsContent = `// Auto-generated by scripts/fetch-pexels-photos.mjs
// Last updated: ${new Date().toISOString()}
// Source: Pexels API (https://www.pexels.com)

export interface PexelsPhoto {
  url: string
  alt: string
  photographer: string
  photographerUrl: string
  pexelsUrl: string
  width: number
  height: number
}

export const PEXELS_PHOTOS: Record<string, PexelsPhoto[]> = ${JSON.stringify(results, null, 2)}
`

  const outPath = path.join(process.cwd(), 'src/data/pexels-photos.ts')
  fs.writeFileSync(outPath, tsContent)
  console.log(`\nDone! ${count}/${DESTINATIONS.length} cities with photos`)
  console.log(`Written to ${outPath}`)
}

main().catch(console.error)
