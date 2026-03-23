import https from 'https'
import fs from 'fs'
import path from 'path'

const API_KEY = process.env.PEXELS_API_KEY || '5eJqGjTpaVJVsgUrXb5WsH3xHQZRSbLLXee6ceujs27I6sC6L1pPRv41'

// Each city gets multiple DIFFERENT queries to ensure variety of photos + photographers
const DESTINATIONS = [
  { slug: 'tokyo', queries: ['Tokyo skyline night', 'Tokyo temple shrine', 'Tokyo street food ramen', 'Tokyo cherry blossom spring', 'Shibuya crossing Tokyo'] },
  { slug: 'bangkok', queries: ['Bangkok Grand Palace', 'Bangkok street food market', 'Bangkok temple wat', 'Bangkok skyline night', 'Bangkok tuk tuk'] },
  { slug: 'bali', queries: ['Bali rice terrace Ubud', 'Bali Hindu temple', 'Bali beach sunset', 'Bali waterfall jungle', 'Bali Uluwatu cliff'] },
  { slug: 'seoul', queries: ['Seoul Gyeongbokgung palace', 'Seoul Bukchon hanok village', 'Seoul Gangnam neon', 'Seoul street food market', 'Seoul N tower night'] },
  { slug: 'hanoi', queries: ['Hanoi old quarter street', 'Hanoi Hoan Kiem lake', 'Ha Long Bay Vietnam', 'Hanoi street food pho', 'Hanoi train street'] },
  { slug: 'singapore', queries: ['Singapore Marina Bay Sands', 'Singapore Gardens by the Bay', 'Singapore hawker food', 'Singapore Chinatown', 'Singapore skyline sunset'] },
  { slug: 'kyoto', queries: ['Kyoto bamboo forest', 'Kyoto Fushimi Inari torii', 'Kyoto geisha district', 'Kyoto zen garden temple', 'Kyoto autumn leaves'] },
  { slug: 'taipei', queries: ['Taipei 101 tower', 'Taipei night market food', 'Jiufen old street Taiwan', 'Taipei temple traditional', 'Taipei city aerial'] },
  { slug: 'chiang-mai', queries: ['Chiang Mai Doi Suthep temple', 'Chiang Mai night bazaar', 'Chiang Mai lantern festival', 'Thailand elephant sanctuary', 'Chiang Mai old city'] },
  { slug: 'jaipur', queries: ['Jaipur Hawa Mahal pink palace', 'Jaipur Amber Fort', 'Jaipur colorful market bazaar', 'Rajasthan India camel desert', 'Jaipur city palace'] },
  { slug: 'maldives', queries: ['Maldives overwater villa', 'Maldives coral reef snorkeling', 'Maldives white sand beach', 'Maldives sunset ocean', 'Maldives drone aerial island'] },
  { slug: 'colombo', queries: ['Sri Lanka Sigiriya rock', 'Sri Lanka tea plantation', 'Sri Lanka beach tropical', 'Colombo city skyline', 'Sri Lanka elephant safari'] },
  { slug: 'paris', queries: ['Paris Eiffel Tower sunset', 'Paris Louvre museum', 'Paris cafe Montmartre', 'Paris Seine river bridge', 'Paris Champs Elysees Arc'] },
  { slug: 'barcelona', queries: ['Barcelona Sagrada Familia', 'Barcelona Park Guell Gaudi', 'Barcelona Gothic Quarter', 'Barcelona beach Barceloneta', 'Barcelona Las Ramblas'] },
  { slug: 'lisbon', queries: ['Lisbon tram 28 Alfama', 'Lisbon Belem tower', 'Lisbon viewpoint miradouro', 'Lisbon colorful buildings', 'Lisbon Sintra palace'] },
  { slug: 'prague', queries: ['Prague Charles Bridge sunrise', 'Prague old town square clock', 'Prague castle aerial', 'Prague riverside Vltava', 'Prague bohemian street'] },
  { slug: 'dubrovnik', queries: ['Dubrovnik old town walls', 'Dubrovnik red rooftops aerial', 'Dubrovnik Adriatic sea coast', 'Croatia island beach', 'Dubrovnik harbor boats'] },
  { slug: 'santorini', queries: ['Santorini Oia white buildings sunset', 'Santorini blue dome church', 'Santorini caldera view', 'Greece island aerial', 'Santorini sunset ocean'] },
  { slug: 'amsterdam', queries: ['Amsterdam canal houses', 'Amsterdam bicycle bridge', 'Amsterdam Rijksmuseum', 'Amsterdam tulips flowers', 'Amsterdam night canals'] },
  { slug: 'rome', queries: ['Rome Colosseum', 'Rome Trevi Fountain', 'Rome Vatican St Peters', 'Rome Pantheon', 'Rome Trastevere street'] },
  { slug: 'edinburgh', queries: ['Edinburgh castle Scotland', 'Edinburgh Royal Mile old town', 'Edinburgh Arthur Seat', 'Scotland Highlands landscape', 'Edinburgh architecture'] },
  { slug: 'budapest', queries: ['Budapest Parliament Danube', 'Budapest thermal bath Szechenyi', 'Budapest Chain Bridge night', 'Budapest Fishermans Bastion', 'Budapest ruin bar'] },
  { slug: 'mexico-city', queries: ['Mexico City Zocalo cathedral', 'Mexico City Frida Kahlo', 'Mexico City Palacio Bellas Artes', 'Mexican street food tacos', 'Mexico City Chapultepec'] },
  { slug: 'tulum', queries: ['Tulum ruins beach cliff', 'Tulum cenote swimming', 'Tulum Caribbean sea turquoise', 'Tulum jungle hotel', 'Riviera Maya Mexico'] },
  { slug: 'vancouver', queries: ['Vancouver skyline mountains', 'Vancouver Stanley Park', 'Vancouver Granville Island', 'British Columbia mountains ocean', 'Vancouver Gastown steam clock'] },
  { slug: 'banff', queries: ['Banff Lake Louise turquoise', 'Banff Moraine Lake', 'Rocky Mountains Canada', 'Banff gondola mountains', 'Canadian Rockies winter snow'] },
  { slug: 'havana', queries: ['Havana Cuba vintage cars', 'Havana colorful buildings street', 'Havana Malecon waterfront', 'Cuba cigar rum culture', 'Havana old town architecture'] },
  { slug: 'san-juan', queries: ['San Juan Puerto Rico colorful', 'Old San Juan fortress Morro', 'Puerto Rico beach Caribbean', 'San Juan colonial architecture', 'Puerto Rico rainforest'] },
  { slug: 'buenos-aires', queries: ['Buenos Aires La Boca colorful', 'Buenos Aires Recoleta cemetery', 'Argentine tango dancing', 'Buenos Aires Obelisco night', 'Buenos Aires Palermo parks'] },
  { slug: 'cartagena', queries: ['Cartagena Colombia old town walls', 'Cartagena colorful colonial streets', 'Cartagena beach Caribbean', 'Colombia Cartagena balconies flowers', 'Cartagena sunset cityscape'] },
  { slug: 'cusco', queries: ['Machu Picchu Peru mountains', 'Cusco Plaza de Armas', 'Sacred Valley Peru Andes', 'Peru llama alpaca mountains', 'Rainbow Mountain Peru'] },
  { slug: 'rio-de-janeiro', queries: ['Rio de Janeiro Christ Redeemer', 'Rio Sugarloaf Mountain', 'Copacabana beach Rio', 'Rio carnival celebration', 'Rio de Janeiro aerial cityscape'] },
  { slug: 'medellin', queries: ['Medellin Colombia city valley', 'Medellin comuna 13 street art', 'Colombia coffee farm plantation', 'Medellin aerial cable car', 'Medellin flowers botanical'] },
  { slug: 'marrakech', queries: ['Marrakech Jemaa el Fna square', 'Marrakech medina souk market', 'Morocco Majorelle garden blue', 'Marrakech riad courtyard', 'Atlas Mountains Morocco'] },
  { slug: 'cape-town', queries: ['Cape Town Table Mountain', 'Cape Town Boulders Beach penguins', 'Cape Town Bo-Kaap colorful', 'Cape Winelands vineyards', 'Cape Point lighthouse'] },
  { slug: 'zanzibar', queries: ['Zanzibar beach turquoise', 'Zanzibar Stone Town doors', 'Zanzibar spice market', 'Tanzania safari wildlife', 'Zanzibar dhow boat sunset'] },
  { slug: 'nairobi', queries: ['Kenya safari lion wildlife', 'Nairobi giraffe center', 'Masai Mara savanna', 'Kenya elephant herd', 'African sunset safari'] },
  { slug: 'sydney', queries: ['Sydney Opera House harbour', 'Sydney Harbour Bridge', 'Bondi Beach Sydney', 'Sydney skyline sunset', 'Blue Mountains Australia'] },
  { slug: 'queenstown', queries: ['Queenstown New Zealand lake', 'Milford Sound fiord', 'New Zealand mountains adventure', 'Queenstown bungee jump', 'New Zealand landscape scenic'] },
  { slug: 'fiji', queries: ['Fiji tropical beach island', 'Fiji coral reef underwater', 'Fiji overwater bure hut', 'Fiji palm tree sunset', 'Fiji aerial island ocean'] },
  { slug: 'beijing', queries: ['Great Wall of China', 'Beijing Forbidden City', 'Beijing Temple of Heaven', 'Beijing hutong alley', 'Tiananmen Square Beijing'] },
  { slug: 'shanghai', queries: ['Shanghai Bund skyline night', 'Shanghai Pudong skyscrapers', 'Shanghai Yu Garden traditional', 'Shanghai Nanjing Road', 'Shanghai French Concession'] },
  { slug: 'hong-kong', queries: ['Hong Kong Victoria Peak skyline', 'Hong Kong neon signs street', 'Hong Kong harbour night', 'Hong Kong dim sum food', 'Hong Kong tram traditional'] },
  { slug: 'phuket', queries: ['Phuket Thailand beach sunset', 'Phi Phi Islands Thailand', 'Phuket Big Buddha', 'Thailand longtail boat', 'Phuket Patong nightlife'] },
  { slug: 'siem-reap', queries: ['Angkor Wat sunrise Cambodia', 'Angkor Thom Bayon faces', 'Ta Prohm temple tree roots', 'Cambodia monks orange robe', 'Siem Reap market'] },
  { slug: 'luang-prabang', queries: ['Luang Prabang monks alms', 'Kuang Si waterfall Laos', 'Luang Prabang temple Laos', 'Mekong River Laos', 'Laos traditional village'] },
  { slug: 'kuala-lumpur', queries: ['Kuala Lumpur Petronas Towers', 'Batu Caves Malaysia', 'KL street food Jalan Alor', 'Kuala Lumpur skyline sunset', 'Malaysia mosque Islamic'] },
  { slug: 'kathmandu', queries: ['Kathmandu Boudhanath stupa', 'Nepal Himalayas mountains', 'Kathmandu Durbar Square', 'Everest base camp trek', 'Nepal prayer flags temple'] },
  { slug: 'istanbul', queries: ['Istanbul Blue Mosque sunset', 'Istanbul Hagia Sophia', 'Istanbul Grand Bazaar market', 'Istanbul Bosphorus bridge', 'Istanbul Turkish tea culture'] },
  { slug: 'vienna', queries: ['Vienna Schonbrunn Palace', 'Vienna Opera House', 'Vienna Belvedere palace garden', 'Vienna coffee house cafe', 'Vienna St Stephens cathedral'] },
  { slug: 'copenhagen', queries: ['Copenhagen Nyhavn colorful', 'Copenhagen Little Mermaid', 'Copenhagen bicycle canal', 'Tivoli Gardens Denmark', 'Copenhagen modern architecture'] },
  { slug: 'reykjavik', queries: ['Iceland Northern Lights aurora', 'Blue Lagoon Iceland', 'Iceland waterfall Gullfoss', 'Reykjavik Hallgrimskirkja church', 'Iceland glacier landscape'] },
  { slug: 'athens', queries: ['Athens Acropolis Parthenon', 'Athens Plaka neighborhood', 'Greek sunset Aegean sea', 'Athens ancient ruins agora', 'Greece food taverna'] },
  { slug: 'new-orleans', queries: ['New Orleans French Quarter bourbon', 'New Orleans jazz music street', 'New Orleans Garden District', 'Louisiana bayou swamp', 'New Orleans Mardi Gras'] },
  { slug: 'costa-rica', queries: ['Costa Rica rainforest waterfall', 'Costa Rica volcano Arenal', 'Costa Rica sloth wildlife', 'Costa Rica beach Pacific', 'Costa Rica cloud forest'] },
  { slug: 'cancun', queries: ['Cancun Caribbean beach turquoise', 'Chichen Itza pyramid Mexico', 'Cancun hotel zone aerial', 'Cenote Mexico swimming', 'Mexican Caribbean sunset'] },
  { slug: 'santiago', queries: ['Santiago Chile Andes mountains', 'Santiago Gran Torre skyline', 'Chile wine valley vineyard', 'Valparaiso colorful houses', 'Atacama desert Chile'] },
  { slug: 'lima', queries: ['Lima Peru Miraflores coast', 'Lima Plaza de Armas', 'Peru ceviche food', 'Lima Barranco district colorful', 'Peru Andes landscape'] },
  { slug: 'bogota', queries: ['Bogota Colombia Monserrate', 'Bogota La Candelaria street art', 'Colombia coffee region', 'Bogota Gold Museum', 'Bogota aerial mountains'] },
  { slug: 'cairo', queries: ['Cairo Pyramids of Giza', 'Cairo Sphinx Egypt', 'Cairo Egyptian Museum', 'Nile River Cairo sunset', 'Cairo Khan el Khalili market'] },
  { slug: 'accra', queries: ['Accra Ghana beach coastline', 'Ghana Jamestown lighthouse', 'Accra market colorful fabric', 'Ghana Cape Coast castle', 'West Africa culture'] },
  { slug: 'mauritius', queries: ['Mauritius beach tropical island', 'Mauritius Le Morne mountain', 'Mauritius underwater waterfall', 'Mauritius Hindu temple', 'Mauritius chamarel colors'] },
  { slug: 'melbourne', queries: ['Melbourne laneways street art', 'Melbourne Flinders Station', 'Melbourne Great Ocean Road', 'Melbourne coffee culture cafe', 'Melbourne skyline Yarra river'] },
  { slug: 'bora-bora', queries: ['Bora Bora overwater bungalow', 'Bora Bora aerial lagoon', 'Bora Bora Mount Otemanu', 'French Polynesia coral reef', 'Bora Bora sunset palm tree'] },
  { slug: 'auckland', queries: ['Auckland Sky Tower New Zealand', 'Auckland harbour bridge', 'New Zealand hobbiton village', 'Auckland volcanic island', 'New Zealand Waiheke Island'] },
]

function fetchPexels(query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=2&orientation=landscape`
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
  let totalPhotos = 0

  for (const dest of DESTINATIONS) {
    const photos = []
    const seenPhotographers = new Set()

    for (const query of dest.queries) {
      try {
        const data = await fetchPexels(query)
        if (data.photos) {
          for (const p of data.photos) {
            // Skip if we already have a photo from this photographer
            if (seenPhotographers.has(p.photographer)) continue
            seenPhotographers.add(p.photographer)

            photos.push({
              url: p.src.large2x,
              alt: p.alt || query,
              photographer: p.photographer,
              photographerUrl: p.photographer_url,
              pexelsUrl: p.url,
              width: p.width,
              height: p.height,
            })
          }
        }
      } catch (err) {
        // Skip failed queries silently
      }
      await sleep(150) // Rate limit
    }

    // Take up to 10 unique-photographer photos
    results[dest.slug] = photos.slice(0, 10)
    totalPhotos += results[dest.slug].length
    const uniquePhotographers = new Set(results[dest.slug].map(p => p.photographer)).size
    console.log(`✓ ${dest.slug}: ${results[dest.slug].length} photos from ${uniquePhotographers} photographers`)
  }

  // Write TypeScript file
  const tsContent = `// Auto-generated by scripts/fetch-pexels-photos.mjs
// Last updated: ${new Date().toISOString()}
// Source: Pexels API (https://www.pexels.com)
// ${totalPhotos} photos from diverse photographers across ${DESTINATIONS.length} cities

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
  console.log(`\nDone! ${totalPhotos} photos across ${DESTINATIONS.length} cities`)
  console.log(`Written to ${outPath}`)
}

main().catch(console.error)
