export interface MichelinRestaurant {
  name: string
  distinction: '3-star' | '2-star' | '1-star' | 'bib-gourmand' | 'recommended'
  cuisine: string
  priceRange: string
  description: string
  url: string
}

export interface LocalFoodRec {
  name: string
  type: string // "Street Food", "Casual", "Market", "Bakery", "Café"
  dish: string // The specific thing to order
  area: string // Neighborhood/area
  cost: string // "$2-5" etc
}

export const MICHELIN_RESTAURANTS: Record<string, MichelinRestaurant[]> = {
  // ─────────────────────────────────────────────
  // TOKYO — 10 restaurants (most Michelin stars in the world)
  // ─────────────────────────────────────────────
  tokyo: [
    {
      name: 'Sukiyabashi Jiro',
      distinction: '3-star',
      cuisine: 'Sushi',
      priceRange: '$$$$',
      description:
        'Legendary sushi counter where 90-year-old master Jiro Ono serves an exquisite omakase of perfectly seasoned nigiri.',
      url: 'https://guide.michelin.com/en/jp/tokyo/restaurant/sukiyabashi-jiro',
    },
    {
      name: 'Ryugin',
      distinction: '3-star',
      cuisine: 'Japanese Innovative',
      priceRange: '$$$$',
      description:
        'Seiji Yamamoto reinterprets traditional Japanese cuisine through cutting-edge techniques and dramatic multi-course presentations.',
      url: 'https://guide.michelin.com/en/jp/tokyo/restaurant/ryugin',
    },
    {
      name: 'Quintessence',
      distinction: '3-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Shuzo Kishida crafts refined French cuisine using the finest Japanese seasonal ingredients in an intimate setting.',
      url: 'https://guide.michelin.com/en/jp/tokyo/restaurant/quintessence',
    },
    {
      name: 'Sazenka',
      distinction: '3-star',
      cuisine: 'Chinese Innovative',
      priceRange: '$$$$',
      description:
        'A groundbreaking restaurant that reimagines Chinese cuisine with Japanese sensibility and impeccable seasonal produce.',
      url: 'https://guide.michelin.com/en/jp/tokyo/restaurant/sazenka',
    },
    {
      name: 'PRISMA',
      distinction: '2-star',
      cuisine: 'Italian Contemporary',
      priceRange: '$$$$',
      description:
        'Modern Italian dining that harmonizes Italian technique with the purity of Japanese ingredients in a stylish space.',
      url: 'https://guide.michelin.com/en/jp/tokyo/restaurant/prisma',
    },
    {
      name: 'Florilège',
      distinction: '2-star',
      cuisine: 'French Innovative',
      priceRange: '$$$$',
      description:
        'Chef Hiroyasu Kawate presents sustainability-driven French cuisine with a Japanese twist at an open counter.',
      url: 'https://guide.michelin.com/en/jp/tokyo/restaurant/florilege',
    },
    {
      name: 'Narisawa',
      distinction: '2-star',
      cuisine: 'Japanese Innovative',
      priceRange: '$$$$',
      description:
        'Chef Yoshihiro Narisawa\'s "innovative satoyama cuisine" celebrates Japan\'s forests and seasons in every dish.',
      url: 'https://guide.michelin.com/en/jp/tokyo/restaurant/narisawa',
    },
    {
      name: 'Sézanne',
      distinction: '2-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Daniel Calvert delivers exquisite French cuisine at the Four Seasons, named among the World\'s 50 Best Restaurants.',
      url: 'https://guide.michelin.com/en/jp/tokyo/restaurant/sezanne',
    },
    {
      name: 'Afuri',
      distinction: 'bib-gourmand',
      cuisine: 'Ramen',
      priceRange: '$',
      description:
        'Famous for its signature yuzu shio ramen made with spring water from Mount Afuri and a delicate citrus-infused broth.',
      url: 'https://guide.michelin.com/en/jp/tokyo/restaurant/afuri-ebisu',
    },
    {
      name: 'Tsuta',
      distinction: 'bib-gourmand',
      cuisine: 'Ramen',
      priceRange: '$',
      description:
        'The first ramen shop to receive a Michelin star, known for its truffle-accented shoyu soba with handmade noodles.',
      url: 'https://guide.michelin.com/en/jp/tokyo/restaurant/tsuta',
    },
  ],

  // ─────────────────────────────────────────────
  // BANGKOK — 8 restaurants
  // ─────────────────────────────────────────────
  bangkok: [
    {
      name: 'Gaggan Anand',
      distinction: '2-star',
      cuisine: 'Indian Progressive',
      priceRange: '$$$$',
      description:
        'Chef Gaggan Anand serves an audacious 25-course emoji menu of molecular Indian cuisine that defies every expectation.',
      url: 'https://guide.michelin.com/en/th/bangkok/restaurant/gaggan-anand',
    },
    {
      name: 'Sorn',
      distinction: '2-star',
      cuisine: 'Thai Southern',
      priceRange: '$$$$',
      description:
        'Deeply researched southern Thai recipes made with rare heirloom ingredients sourced from small village producers.',
      url: 'https://guide.michelin.com/en/th/bangkok/restaurant/sorn',
    },
    {
      name: 'Le Du',
      distinction: '2-star',
      cuisine: 'Thai Contemporary',
      priceRange: '$$$',
      description:
        'Chef Ton presents modern interpretations of Thai cuisine using seasonal local ingredients in tasting menus.',
      url: 'https://guide.michelin.com/en/th/bangkok/restaurant/le-du',
    },
    {
      name: 'Nusara',
      distinction: '1-star',
      cuisine: 'Thai Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Thitid "Ton" Tassanakajohn\'s upscale Thai restaurant celebrating regional flavors through refined technique.',
      url: 'https://guide.michelin.com/en/th/bangkok/restaurant/nusara',
    },
    {
      name: 'Sühring',
      distinction: '1-star',
      cuisine: 'German Contemporary',
      priceRange: '$$$$',
      description:
        'Twin chefs Thomas and Mathias Sühring reinterpret German culinary heritage with Thai-sourced produce in a garden villa.',
      url: 'https://guide.michelin.com/en/th/bangkok/restaurant/suhring',
    },
    {
      name: 'Potong',
      distinction: '1-star',
      cuisine: 'Thai-Chinese Fusion',
      priceRange: '$$$',
      description:
        'Set in a century-old Chinatown shophouse, blending Thai and Chinese culinary traditions in inventive tasting menus.',
      url: 'https://guide.michelin.com/en/th/bangkok/restaurant/potong',
    },
    {
      name: 'Jay Fai',
      distinction: '1-star',
      cuisine: 'Thai Street Food',
      priceRange: '$$',
      description:
        'Legendary goggle-wearing street cook famous for her perfectly crispy crab omelet and drunken noodles cooked over charcoal.',
      url: 'https://guide.michelin.com/en/th/bangkok/restaurant/jay-fai',
    },
    {
      name: 'Baan Phadthai',
      distinction: 'bib-gourmand',
      cuisine: 'Thai',
      priceRange: '$',
      description:
        'Elevated pad thai served in a charming traditional house, using premium river prawns and a secret family recipe.',
      url: 'https://guide.michelin.com/en/th/bangkok/restaurant/baan-phadthai',
    },
  ],

  // ─────────────────────────────────────────────
  // BALI — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  bali: [
    {
      name: 'Locavore',
      distinction: 'recommended',
      cuisine: 'Indonesian Contemporary',
      priceRange: '$$$$',
      description:
        'Pioneering farm-to-table restaurant in Ubud using 95% locally sourced Indonesian ingredients in creative tasting menus.',
      url: 'https://www.google.com/maps/search/Locavore+Bali',
    },
    {
      name: 'Mozaic',
      distinction: 'recommended',
      cuisine: 'French-Indonesian Fusion',
      priceRange: '$$$$',
      description:
        'Chef Chris Salans blends French haute cuisine technique with Balinese spices and tropical ingredients in a garden setting.',
      url: 'https://www.google.com/maps/search/Mozaic+Bali',
    },
    {
      name: 'Apéritif',
      distinction: 'recommended',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'Grand colonial-style restaurant at the Viceroy offering refined European cuisine with Southeast Asian inflections.',
      url: 'https://www.google.com/maps/search/Aperitif+Bali',
    },
    {
      name: 'Hujan Locale',
      distinction: 'recommended',
      cuisine: 'Indonesian Regional',
      priceRange: '$$',
      description:
        'Will Meyrick celebrates lesser-known Indonesian regional dishes with bold flavors in a relaxed Ubud setting.',
      url: 'https://www.google.com/maps/search/Hujan+Locale+Bali',
    },
  ],

  // ─────────────────────────────────────────────
  // SEOUL — 7 restaurants
  // ─────────────────────────────────────────────
  seoul: [
    {
      name: 'Mosu Seoul',
      distinction: '2-star',
      cuisine: 'Korean Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Sung Anh\'s inventive Korean-inflected cuisine earned rapid acclaim with its precise, artistic multi-course menus.',
      url: 'https://guide.michelin.com/en/kr/seoul/restaurant/mosu',
    },
    {
      name: 'Onjium',
      distinction: '1-star',
      cuisine: 'Korean Traditional',
      priceRange: '$$$$',
      description:
        'A research-driven restaurant reviving ancient Korean royal court recipes with meticulous historical authenticity.',
      url: 'https://guide.michelin.com/en/kr/seoul/restaurant/onjium',
    },
    {
      name: 'Mingles',
      distinction: '1-star',
      cuisine: 'Korean Innovative',
      priceRange: '$$$$',
      description:
        'Chef Mingoo Kang artfully blends Korean fermentation traditions with global culinary techniques in seasonal menus.',
      url: 'https://guide.michelin.com/en/kr/seoul/restaurant/mingles',
    },
    {
      name: 'Jungsik',
      distinction: '1-star',
      cuisine: 'Korean Contemporary',
      priceRange: '$$$$',
      description:
        'Modern Korean fine dining that reimagines traditional dishes like bibimbap with contemporary plating and technique.',
      url: 'https://guide.michelin.com/en/kr/seoul/restaurant/jungsik',
    },
    {
      name: 'La Yeon',
      distinction: '1-star',
      cuisine: 'Korean Traditional',
      priceRange: '$$$$',
      description:
        'Elegant hansang-style Korean dining at The Shilla Seoul with panoramic city views and impeccable service.',
      url: 'https://guide.michelin.com/en/kr/seoul/restaurant/la-yeon',
    },
    {
      name: 'Kwonsooksoo',
      distinction: '1-star',
      cuisine: 'Korean Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Kwon Woo-joong serves seasonal Korean tasting menus that honor tradition while embracing modern expression.',
      url: 'https://guide.michelin.com/en/kr/seoul/restaurant/kwonsooksoo',
    },
    {
      name: 'Mapo Ok',
      distinction: 'bib-gourmand',
      cuisine: 'Korean Comfort',
      priceRange: '$',
      description:
        'Beloved local institution serving exceptional seolleongtang — milky ox bone soup simmered for over 20 hours.',
      url: 'https://guide.michelin.com/en/kr/seoul/restaurant/mapo-ok',
    },
  ],

  // ─────────────────────────────────────────────
  // HANOI — 4 restaurants (Michelin Guide launched 2024)
  // ─────────────────────────────────────────────
  hanoi: [
    {
      name: 'Ănăn Saigon',
      distinction: '1-star',
      cuisine: 'Vietnamese Contemporary',
      priceRange: '$$$',
      description:
        'Chef Peter Cuong Franklin elevates Vietnamese street food traditions into refined contemporary dishes.',
      url: 'https://guide.michelin.com/en/vn/ho-chi-minh-city/restaurant/anan-saigon',
    },
    {
      name: 'Tầm Vị',
      distinction: 'bib-gourmand',
      cuisine: 'Vietnamese',
      priceRange: '$$',
      description:
        'Soulful Vietnamese home cooking elevated with market-fresh ingredients and deep family recipes in a cozy space.',
      url: 'https://guide.michelin.com/en/vn/hanoi/restaurant/tam-vi',
    },
    {
      name: 'Bún Chả Hương Liên',
      distinction: 'recommended',
      cuisine: 'Vietnamese Street Food',
      priceRange: '$',
      description:
        'Famous as the "Obama bún chả" spot, serving smoky grilled pork patties with fresh herbs and dipping broth.',
      url: 'https://www.google.com/maps/search/Bun+Cha+Huong+Lien+Hanoi',
    },
    {
      name: 'Phở Thìn',
      distinction: 'recommended',
      cuisine: 'Vietnamese',
      priceRange: '$',
      description:
        'Iconic Hanoi pho shop where the beef is seared in a wok before joining the deeply aromatic bone broth.',
      url: 'https://www.google.com/maps/search/Pho+Thin+Hanoi',
    },
  ],

  // ─────────────────────────────────────────────
  // SINGAPORE — 7 restaurants
  // ─────────────────────────────────────────────
  singapore: [
    {
      name: 'Les Amis',
      distinction: '3-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Singapore\'s pinnacle of French fine dining with an extraordinary wine cellar and precise seasonal haute cuisine.',
      url: 'https://guide.michelin.com/en/sg/singapore/restaurant/les-amis',
    },
    {
      name: 'Odette',
      distinction: '3-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Julien Royer\'s poetic cuisine at the National Gallery draws on Provençal roots with Asian-sourced ingredients.',
      url: 'https://guide.michelin.com/en/sg/singapore/restaurant/odette',
    },
    {
      name: 'Zén',
      distinction: '3-star',
      cuisine: 'Scandinavian Innovative',
      priceRange: '$$$$',
      description:
        'Björn Frantzén\'s Singapore outpost delivers a multi-floor dining experience rooted in Nordic culinary philosophy.',
      url: 'https://guide.michelin.com/en/sg/singapore/restaurant/zen',
    },
    {
      name: 'Cloudstreet',
      distinction: '2-star',
      cuisine: 'Innovative Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Rishi Naleendra fuses Sri Lankan heritage with modern technique in an exuberant, counter-seating format.',
      url: 'https://guide.michelin.com/en/sg/singapore/restaurant/cloudstreet',
    },
    {
      name: 'Burnt Ends',
      distinction: '1-star',
      cuisine: 'Modern Australian BBQ',
      priceRange: '$$$',
      description:
        'Chef Dave Pynt fires custom-built dual-cavity ovens to produce extraordinary smoked and grilled small plates.',
      url: 'https://guide.michelin.com/en/sg/singapore/restaurant/burnt-ends',
    },
    {
      name: 'Liao Fan Hong Kong Soya Sauce Chicken Rice',
      distinction: '1-star',
      cuisine: 'Cantonese Hawker',
      priceRange: '$',
      description:
        'The world\'s cheapest Michelin-starred meal — perfectly lacquered soy sauce chicken from a humble hawker stall.',
      url: 'https://guide.michelin.com/en/sg/singapore/restaurant/liao-fan-hong-kong-soya-sauce-chicken-rice-noodle',
    },
    {
      name: 'Hill Street Tai Hwa Pork Noodle',
      distinction: '1-star',
      cuisine: 'Singaporean Hawker',
      priceRange: '$',
      description:
        'Legendary hawker stall with a perpetual queue, famed for its springy minced pork noodles in chili vinegar.',
      url: 'https://guide.michelin.com/en/sg/singapore/restaurant/hill-street-tai-hwa-pork-noodle',
    },
  ],

  // ─────────────────────────────────────────────
  // KYOTO — 7 restaurants
  // ─────────────────────────────────────────────
  kyoto: [
    {
      name: 'Kikunoi Honten',
      distinction: '3-star',
      cuisine: 'Japanese Kaiseki',
      priceRange: '$$$$',
      description:
        'Third-generation chef Yoshihiro Murata serves the pinnacle of Kyoto kaiseki in a serene traditional garden setting.',
      url: 'https://guide.michelin.com/en/jp/kyoto/restaurant/kikunoi-honten',
    },
    {
      name: 'Hyotei',
      distinction: '3-star',
      cuisine: 'Japanese Kaiseki',
      priceRange: '$$$$',
      description:
        'A 400-year-old tea house near Nanzenji temple offering seasonal kaiseki that embodies the soul of Kyoto cuisine.',
      url: 'https://guide.michelin.com/en/jp/kyoto/restaurant/hyotei',
    },
    {
      name: 'Nakamura',
      distinction: '3-star',
      cuisine: 'Japanese Kaiseki',
      priceRange: '$$$$',
      description:
        'Historic kaiseki restaurant preserving centuries of culinary tradition with exquisite seasonal multi-course meals.',
      url: 'https://guide.michelin.com/en/jp/kyoto/restaurant/nakamura',
    },
    {
      name: 'Gion Sasaki',
      distinction: '2-star',
      cuisine: 'Japanese Kaiseki',
      priceRange: '$$$$',
      description:
        'Inventive kaiseki master Hiroshi Sasaki brings playfulness and surprise to traditional Kyoto multi-course dining.',
      url: 'https://guide.michelin.com/en/jp/kyoto/restaurant/gion-sasaki',
    },
    {
      name: 'Monk',
      distinction: '1-star',
      cuisine: 'Belgian-Japanese Fusion',
      priceRange: '$$$',
      description:
        'A unique pairing of Belgian beer brewing and Japanese seasonal cooking in a charming converted townhouse.',
      url: 'https://guide.michelin.com/en/jp/kyoto/restaurant/monk',
    },
    {
      name: 'Gion Maruyama',
      distinction: '1-star',
      cuisine: 'Japanese Kaiseki',
      priceRange: '$$$$',
      description:
        'Refined kaiseki dining in the heart of Gion, known for its delicate handling of seasonal Kyoto vegetables.',
      url: 'https://guide.michelin.com/en/jp/kyoto/restaurant/gion-maruyama',
    },
    {
      name: 'Menbakaichidai',
      distinction: 'recommended',
      cuisine: 'Ramen',
      priceRange: '$',
      description:
        'Theatrical fire ramen where green onion oil is ignited tableside, creating a pillar of flame above your bowl.',
      url: 'https://www.google.com/maps/search/Menbakaichidai+Kyoto',
    },
  ],

  // ─────────────────────────────────────────────
  // TAIPEI — 7 restaurants
  // ─────────────────────────────────────────────
  taipei: [
    {
      name: 'Le Palais',
      distinction: '2-star',
      cuisine: 'Cantonese',
      priceRange: '$$$$',
      description:
        'Opulent Cantonese fine dining at the Palais de Chine Hotel known for refined dim sum and classic roast dishes.',
      url: 'https://guide.michelin.com/en/tw/taipei/restaurant/le-palais',
    },
    {
      name: 'Logy',
      distinction: '2-star',
      cuisine: 'Japanese-Taiwanese Fusion',
      priceRange: '$$$$',
      description:
        'Chef Ryogo Tahara melds Japanese precision with Taiwanese ingredients in a counter-seating omakase experience.',
      url: 'https://guide.michelin.com/en/tw/taipei/restaurant/logy',
    },
    {
      name: 'Ya Ge',
      distinction: '1-star',
      cuisine: 'Cantonese',
      priceRange: '$$$$',
      description:
        'Elegant Cantonese restaurant at the Mandarin Oriental celebrated for its refined dim sum and Peking duck.',
      url: 'https://guide.michelin.com/en/tw/taipei/restaurant/ya-ge',
    },
    {
      name: 'Taïrroir',
      distinction: '1-star',
      cuisine: 'Taiwanese Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Kai Ho reinterprets Taiwanese culinary heritage through the lens of French technique in seasonal tasting menus.',
      url: 'https://guide.michelin.com/en/tw/taipei/restaurant/tairroir',
    },
    {
      name: 'Raw',
      distinction: '1-star',
      cuisine: 'Taiwanese Innovative',
      priceRange: '$$$',
      description:
        'André Chiang\'s Taipei restaurant celebrates the island\'s diverse produce through inventive, research-driven dishes.',
      url: 'https://guide.michelin.com/en/tw/taipei/restaurant/raw',
    },
    {
      name: 'Din Tai Fung (Xinyi)',
      distinction: 'bib-gourmand',
      cuisine: 'Taiwanese Dumpling',
      priceRange: '$',
      description:
        'The original Taipei branch of the world-famous soup dumpling chain, renowned for its 18-fold xiao long bao.',
      url: 'https://guide.michelin.com/en/tw/taipei/restaurant/din-tai-fung-xinyi',
    },
    {
      name: 'Ay-Chung Flour-Rice Noodle',
      distinction: 'bib-gourmand',
      cuisine: 'Taiwanese Street Food',
      priceRange: '$',
      description:
        'Iconic Ximending street stall serving thick rice noodles in a rich, savory intestine-based broth since 1975.',
      url: 'https://guide.michelin.com/en/tw/taipei/restaurant/ay-chung-flour-rice-noodle',
    },
  ],

  // ─────────────────────────────────────────────
  // CHIANG MAI — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  'chiang-mai': [
    {
      name: 'Blackitch Artisan Kitchen',
      distinction: 'recommended',
      cuisine: 'Thai Contemporary',
      priceRange: '$$$',
      description:
        'Chef Black\'s intimate counter offers a boundary-pushing tasting menu built on Northern Thai traditions and local foraging.',
      url: 'https://www.google.com/maps/search/Blackitch+Artisan+Kitchen+Chiang+Mai',
    },
    {
      name: 'David\'s Kitchen',
      distinction: 'recommended',
      cuisine: 'French Contemporary',
      priceRange: '$$$',
      description:
        'Australian-born chef David serves refined French fine dining in a converted traditional Thai house.',
      url: 'https://www.google.com/maps/search/Davids+Kitchen+Chiang+Mai',
    },
    {
      name: 'Huen Phen',
      distinction: 'recommended',
      cuisine: 'Northern Thai',
      priceRange: '$',
      description:
        'Beloved Chiang Mai institution serving authentic Northern Thai classics like khao soi and laab in a rustic antique-filled house.',
      url: 'https://www.google.com/maps/search/Huen+Phen+Chiang+Mai',
    },
    {
      name: 'SP Chicken',
      distinction: 'recommended',
      cuisine: 'Thai Street Food',
      priceRange: '$',
      description:
        'Locals queue daily for the best rotisserie chicken in Chiang Mai, slow-roasted over coals with lemongrass and herbs.',
      url: 'https://www.google.com/maps/search/SP+Chicken+Chiang+Mai',
    },
  ],

  // ─────────────────────────────────────────────
  // JAIPUR — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  jaipur: [
    {
      name: 'Suvarna Mahal',
      distinction: 'recommended',
      cuisine: 'Indian Royal',
      priceRange: '$$$$',
      description:
        'Rambagh Palace\'s grand dining room serves Rajasthani royal cuisine under hand-painted ceilings and crystal chandeliers.',
      url: 'https://www.google.com/maps/search/Suvarna+Mahal+Rambagh+Palace+Jaipur',
    },
    {
      name: '1135 AD',
      distinction: 'recommended',
      cuisine: 'Rajasthani',
      priceRange: '$$$',
      description:
        'Inside the Amber Fort, this restaurant recreates centuries-old Rajput royal recipes in a magnificent heritage setting.',
      url: 'https://www.google.com/maps/search/1135+AD+Amber+Fort+Jaipur',
    },
    {
      name: 'SamosaWala',
      distinction: 'recommended',
      cuisine: 'Indian Street Food',
      priceRange: '$',
      description:
        'Multi-generational street stall famous across Rajasthan for its perfectly flaky, spiced potato samosas.',
      url: 'https://www.google.com/maps/search/SamosaWala+Jaipur',
    },
    {
      name: 'Laxmi Mishthan Bhandar',
      distinction: 'recommended',
      cuisine: 'Indian Sweets & Vegetarian',
      priceRange: '$',
      description:
        'Jaipur\'s most beloved sweet shop and vegetarian restaurant, running for over 50 years on Johari Bazaar.',
      url: 'https://www.google.com/maps/search/Laxmi+Mishthan+Bhandar+Jaipur',
    },
  ],

  // ─────────────────────────────────────────────
  // MALDIVES — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  maldives: [
    {
      name: 'Ithaa Undersea Restaurant',
      distinction: 'recommended',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'Dine five meters below the Indian Ocean in the world\'s first all-glass undersea restaurant at Conrad Maldives.',
      url: 'https://www.google.com/maps/search/Ithaa+Undersea+Restaurant+Maldives',
    },
    {
      name: 'Subsix',
      distinction: 'recommended',
      cuisine: 'International Fine Dining',
      priceRange: '$$$$',
      description:
        'Niyama\'s underwater nightclub and restaurant serves inventive seafood six meters below the surface.',
      url: 'https://www.google.com/maps/search/Subsix+Niyama+Maldives',
    },
    {
      name: 'Only Blu',
      distinction: 'recommended',
      cuisine: 'Mediterranean Seafood',
      priceRange: '$$$$',
      description:
        'OBLU\'s stunning overwater restaurant specializes in Mediterranean-inspired seafood with lagoon views.',
      url: 'https://www.google.com/maps/search/Only+Blu+OBLU+Maldives',
    },
  ],

  // ─────────────────────────────────────────────
  // COLOMBO — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  colombo: [
    {
      name: 'Ministry of Crab',
      distinction: 'recommended',
      cuisine: 'Sri Lankan Seafood',
      priceRange: '$$$',
      description:
        'Celebrity chef Dharshan Munidasa\'s famous crab restaurant inside the historic Dutch Hospital, on Asia\'s 50 Best list.',
      url: 'https://www.google.com/maps/search/Ministry+of+Crab+Colombo',
    },
    {
      name: 'Nihonbashi',
      distinction: 'recommended',
      cuisine: 'Japanese',
      priceRange: '$$$',
      description:
        'Colombo\'s top Japanese restaurant by Dharshan Munidasa featuring pristine sashimi from Sri Lankan waters.',
      url: 'https://www.google.com/maps/search/Nihonbashi+Colombo',
    },
    {
      name: 'Upali\'s',
      distinction: 'recommended',
      cuisine: 'Sri Lankan Traditional',
      priceRange: '$',
      description:
        'Authentic Sri Lankan rice and curry in a cheerful setting, beloved for its hoppers and fiery sambols.',
      url: 'https://www.google.com/maps/search/Upalis+Colombo',
    },
    {
      name: 'Kaema Sutra',
      distinction: 'recommended',
      cuisine: 'Sri Lankan Contemporary',
      priceRange: '$$',
      description:
        'Chef Dharshan Munidasa\'s modern Sri Lankan kitchen at Shangri-La featuring elevated takes on local classics.',
      url: 'https://www.google.com/maps/search/Kaema+Sutra+Shangri-La+Colombo',
    },
  ],

  // ─────────────────────────────────────────────
  // PARIS — 10 restaurants
  // ─────────────────────────────────────────────
  paris: [
    {
      name: 'Arpège',
      distinction: '3-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Alain Passard\'s vegetable-forward haute cuisine draws from his own biodynamic gardens in a legendary Art Deco room.',
      url: 'https://guide.michelin.com/en/fr/paris/restaurant/arpege',
    },
    {
      name: 'Plénitude',
      distinction: '3-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Arnaud Donckele\'s Cheval Blanc restaurant creates deeply layered flavors through his signature "cuisine of essences."',
      url: 'https://guide.michelin.com/en/fr/paris/restaurant/plenitude',
    },
    {
      name: 'Le Cinq',
      distinction: '3-star',
      cuisine: 'French Classic',
      priceRange: '$$$$',
      description:
        'Christian Le Squer\'s majestic dining room at the Four Seasons George V delivers timeless French haute cuisine.',
      url: 'https://guide.michelin.com/en/fr/paris/restaurant/le-cinq',
    },
    {
      name: 'Epicure',
      distinction: '3-star',
      cuisine: 'French Classic',
      priceRange: '$$$$',
      description:
        'Eric Frechon\'s grand restaurant at Le Bristol, celebrated for its macaroni with black truffle and artichoke.',
      url: 'https://guide.michelin.com/en/fr/paris/restaurant/epicure',
    },
    {
      name: 'Table by Bruno Verjus',
      distinction: '2-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Self-taught chef Bruno Verjus crafts ingredient-driven cuisine with poetic simplicity, ranked among the World\'s Best.',
      url: 'https://guide.michelin.com/en/fr/paris/restaurant/table-bruno-verjus',
    },
    {
      name: 'Septime',
      distinction: '1-star',
      cuisine: 'French Modern',
      priceRange: '$$$',
      description:
        'Bertrand Grébaut\'s minimalist bistro in the 11th serves one of Paris\'s most coveted tasting menus with natural wines.',
      url: 'https://guide.michelin.com/en/fr/paris/restaurant/septime',
    },
    {
      name: 'Le Comptoir du Panthéon',
      distinction: '1-star',
      cuisine: 'French Bistro',
      priceRange: '$$',
      description:
        'A quintessential Parisian bistro near the Panthéon where chef delivers elevated seasonal French comfort food.',
      url: 'https://guide.michelin.com/en/fr/paris/restaurant/le-comptoir-du-pantheon',
    },
    {
      name: 'Frenchie',
      distinction: '1-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$',
      description:
        'Gregory Marchand\'s hugely popular restaurant in the Sentier serves inventive French cuisine with global accents.',
      url: 'https://guide.michelin.com/en/fr/paris/restaurant/frenchie',
    },
    {
      name: 'Le Bouillon Chartier',
      distinction: 'bib-gourmand',
      cuisine: 'French Traditional',
      priceRange: '$',
      description:
        'A stunning Belle Époque dining hall serving classic French fare at remarkably affordable prices since 1896.',
      url: 'https://guide.michelin.com/en/fr/paris/restaurant/le-bouillon-chartier',
    },
    {
      name: 'Chez Janou',
      distinction: 'bib-gourmand',
      cuisine: 'French Provençal',
      priceRange: '$$',
      description:
        'Charming Marais bistro famous for its extraordinary chocolate mousse served from a giant bowl and sunny terrace.',
      url: 'https://guide.michelin.com/en/fr/paris/restaurant/chez-janou',
    },
  ],

  // ─────────────────────────────────────────────
  // BARCELONA — 7 restaurants
  // ─────────────────────────────────────────────
  barcelona: [
    {
      name: 'ABaC',
      distinction: '3-star',
      cuisine: 'Catalan Avant-Garde',
      priceRange: '$$$$',
      description:
        'Chef Jordi Cruz delivers breathtaking avant-garde Catalan cuisine through wildly creative multi-course experiences.',
      url: 'https://guide.michelin.com/en/es/barcelona/restaurant/abac',
    },
    {
      name: 'Lasarte',
      distinction: '3-star',
      cuisine: 'Basque-Catalan Contemporary',
      priceRange: '$$$$',
      description:
        'Martín Berasategui\'s Barcelona outpost at the Monument Hotel fuses Basque precision with Mediterranean ingredients.',
      url: 'https://guide.michelin.com/en/es/barcelona/restaurant/lasarte',
    },
    {
      name: 'Cocina Hermanos Torres',
      distinction: '2-star',
      cuisine: 'Spanish Contemporary',
      priceRange: '$$$$',
      description:
        'Twin brothers Javier and Sergio Torres cook in an open kitchen inside a dramatically converted warehouse.',
      url: 'https://guide.michelin.com/en/es/barcelona/restaurant/cocina-hermanos-torres',
    },
    {
      name: 'Enigma',
      distinction: '1-star',
      cuisine: 'Spanish Avant-Garde',
      priceRange: '$$$$',
      description:
        'Albert Adrià\'s immersive multi-room dining experience unfolds through 40+ courses in elBulli\'s creative legacy.',
      url: 'https://guide.michelin.com/en/es/barcelona/restaurant/enigma',
    },
    {
      name: 'Disfrutar',
      distinction: '2-star',
      cuisine: 'Mediterranean Avant-Garde',
      priceRange: '$$$$',
      description:
        'Three former elBulli chefs create playful, boundary-pushing Mediterranean cuisine that earned World\'s Best in 2024.',
      url: 'https://guide.michelin.com/en/es/barcelona/restaurant/disfrutar',
    },
    {
      name: 'Alkimia',
      distinction: '1-star',
      cuisine: 'Catalan Contemporary',
      priceRange: '$$$',
      description:
        'Chef Jordi Vilà modernizes Catalan classics with innovative technique in a sleek Eixample dining room.',
      url: 'https://guide.michelin.com/en/es/barcelona/restaurant/alkimia',
    },
    {
      name: 'Bar Cañete',
      distinction: 'bib-gourmand',
      cuisine: 'Catalan Tapas',
      priceRange: '$$',
      description:
        'Buzzing counter-service tapas bar on La Rambla serving outstanding Catalan seafood and traditional small plates.',
      url: 'https://guide.michelin.com/en/es/barcelona/restaurant/bar-canete',
    },
  ],

  // ─────────────────────────────────────────────
  // LISBON — 6 restaurants
  // ─────────────────────────────────────────────
  lisbon: [
    {
      name: 'Belcanto',
      distinction: '2-star',
      cuisine: 'Portuguese Contemporary',
      priceRange: '$$$$',
      description:
        'José Avillez\'s flagship reimagines Portuguese culinary heritage with modern artistry in a Chiado theater building.',
      url: 'https://guide.michelin.com/en/pt/lisbon/restaurant/belcanto',
    },
    {
      name: 'ALMA',
      distinction: '1-star',
      cuisine: 'Portuguese Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Henrique Sá Pessoa celebrates Portuguese flavors with spice-route influences in a stunning cloistered space.',
      url: 'https://guide.michelin.com/en/pt/lisbon/restaurant/alma',
    },
    {
      name: 'Eleven',
      distinction: '1-star',
      cuisine: 'Mediterranean Contemporary',
      priceRange: '$$$$',
      description:
        'Panoramic views over Lisbon accompany Joachim Koerper\'s refined Mediterranean cuisine at Eduardo VII Park.',
      url: 'https://guide.michelin.com/en/pt/lisbon/restaurant/eleven',
    },
    {
      name: 'Feitoria',
      distinction: '1-star',
      cuisine: 'Portuguese Modern',
      priceRange: '$$$$',
      description:
        'At the Altis Belém, chef João Rodrigues creates a "voyage through Portugal" tasting menu with Atlantic seafood.',
      url: 'https://guide.michelin.com/en/pt/lisbon/restaurant/feitoria',
    },
    {
      name: 'Cervejaria Ramiro',
      distinction: 'bib-gourmand',
      cuisine: 'Portuguese Seafood',
      priceRange: '$$',
      description:
        'Lisbon\'s most celebrated seafood house where locals and visitors feast on garlic prawns, percebes, and crab.',
      url: 'https://guide.michelin.com/en/pt/lisbon/restaurant/cervejaria-ramiro',
    },
    {
      name: 'Pastéis de Belém',
      distinction: 'recommended',
      cuisine: 'Portuguese Pastry',
      priceRange: '$',
      description:
        'The original custard tart bakery since 1837, guarding the secret recipe for Lisbon\'s most iconic pastry.',
      url: 'https://www.google.com/maps/search/Pasteis+de+Belem+Lisbon',
    },
  ],

  // ─────────────────────────────────────────────
  // PRAGUE — 5 restaurants
  // ─────────────────────────────────────────────
  prague: [
    {
      name: 'Field',
      distinction: '1-star',
      cuisine: 'Czech Contemporary',
      priceRange: '$$$',
      description:
        'Radek Kašpárek champions Bohemian ingredients in inventive tasting menus that put Czech cuisine on the fine-dining map.',
      url: 'https://guide.michelin.com/en/cz/prague/restaurant/field',
    },
    {
      name: 'La Degustation Bohême Bourgeoise',
      distinction: '1-star',
      cuisine: 'Czech Modern',
      priceRange: '$$$',
      description:
        'Oldřich Sahajdák reinterprets historical Bohemian recipes from old Czech cookbooks with contemporary flair.',
      url: 'https://guide.michelin.com/en/cz/prague/restaurant/la-degustation-boheme-bourgeoise',
    },
    {
      name: 'Alcron',
      distinction: '1-star',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'Intimate Art Deco restaurant at the Alcron Hotel known for its exceptional seafood and refined tasting menus.',
      url: 'https://guide.michelin.com/en/cz/prague/restaurant/alcron',
    },
    {
      name: 'Eska',
      distinction: 'bib-gourmand',
      cuisine: 'Czech Modern',
      priceRange: '$$',
      description:
        'Industrial-chic bakery-restaurant in Karlín focused on fermentation, house-milled grains, and slow-food philosophy.',
      url: 'https://guide.michelin.com/en/cz/prague/restaurant/eska',
    },
    {
      name: 'Lokál Dlouhááá',
      distinction: 'recommended',
      cuisine: 'Czech Traditional',
      priceRange: '$',
      description:
        'Lively beer hall serving the freshest Pilsner Urquell in Prague alongside perfectly executed Czech pub classics.',
      url: 'https://www.google.com/maps/search/Lokal+Dlouha+Prague',
    },
  ],

  // ─────────────────────────────────────────────
  // DUBROVNIK — 4 restaurants
  // ─────────────────────────────────────────────
  dubrovnik: [
    {
      name: '360°',
      distinction: '1-star',
      cuisine: 'Mediterranean Contemporary',
      priceRange: '$$$$',
      description:
        'Perched on Dubrovnik\'s medieval walls with breathtaking harbor views, serving refined Croatian-Mediterranean cuisine.',
      url: 'https://guide.michelin.com/en/hr/dubrovnik/restaurant/360',
    },
    {
      name: 'Restaurant Dubrovnik',
      distinction: 'recommended',
      cuisine: 'Croatian Contemporary',
      priceRange: '$$$',
      description:
        'Sophisticated Adriatic seafood and Croatian wines in an elegant Old Town setting near the Rector\'s Palace.',
      url: 'https://www.google.com/maps/search/Restaurant+Dubrovnik+Old+Town',
    },
    {
      name: 'Nautika',
      distinction: 'recommended',
      cuisine: 'Mediterranean Seafood',
      priceRange: '$$$$',
      description:
        'White-tablecloth dining at the Pile Gate with Adriatic seafood, sunset views, and one of Croatia\'s finest wine lists.',
      url: 'https://www.google.com/maps/search/Nautika+Restaurant+Dubrovnik',
    },
    {
      name: 'Pantarul',
      distinction: 'recommended',
      cuisine: 'Croatian Bistro',
      priceRange: '$$',
      description:
        'Beloved local bistro outside the old walls serving creative Dalmatian home cooking with seasonal market ingredients.',
      url: 'https://www.google.com/maps/search/Pantarul+Dubrovnik',
    },
  ],

  // ─────────────────────────────────────────────
  // SANTORINI — 4 restaurants (Greece Michelin Guide)
  // ─────────────────────────────────────────────
  santorini: [
    {
      name: 'Selene',
      distinction: 'recommended',
      cuisine: 'Greek Contemporary',
      priceRange: '$$$',
      description:
        'Santorini\'s most acclaimed restaurant celebrates Cycladic ingredients like fava, white eggplant, and local capers.',
      url: 'https://www.google.com/maps/search/Selene+Restaurant+Santorini',
    },
    {
      name: 'Lycabettus',
      distinction: 'recommended',
      cuisine: 'Mediterranean Contemporary',
      priceRange: '$$$$',
      description:
        'Dramatic caldera-view fine dining showcasing Aegean seafood with a creative Mediterranean approach.',
      url: 'https://www.google.com/maps/search/Lycabettus+Restaurant+Santorini',
    },
    {
      name: 'Metaxi Mas',
      distinction: 'recommended',
      cuisine: 'Greek Traditional',
      priceRange: '$$',
      description:
        'Hidden gem in Exo Gonia village serving exceptional Cretan-influenced home cooking with local wines.',
      url: 'https://www.google.com/maps/search/Metaxi+Mas+Santorini',
    },
    {
      name: 'To Psaraki',
      distinction: 'recommended',
      cuisine: 'Greek Seafood',
      priceRange: '$$',
      description:
        'Unassuming waterfront taverna in Vlychada serving the freshest catch grilled simply with lemon and olive oil.',
      url: 'https://www.google.com/maps/search/To+Psaraki+Vlychada+Santorini',
    },
  ],

  // ─────────────────────────────────────────────
  // AMSTERDAM — 6 restaurants
  // ─────────────────────────────────────────────
  amsterdam: [
    {
      name: 'Librije\'s Zusje',
      distinction: '2-star',
      cuisine: 'French-Dutch Contemporary',
      priceRange: '$$$$',
      description:
        'The Amsterdam sister of De Librije serves beautifully composed dishes fusing French technique with Dutch produce.',
      url: 'https://guide.michelin.com/en/nl/amsterdam/restaurant/librije-s-zusje',
    },
    {
      name: '&moshik',
      distinction: '2-star',
      cuisine: 'Innovative',
      priceRange: '$$$$',
      description:
        'Israeli-born chef Moshik Roth creates visually stunning, music-inspired cuisine that pushes creative boundaries.',
      url: 'https://guide.michelin.com/en/nl/amsterdam/restaurant/moshik',
    },
    {
      name: 'Spectrum',
      distinction: '1-star',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'The Waldorf Astoria\'s fine dining room serves refined contemporary cuisine in a grand canal-house setting.',
      url: 'https://guide.michelin.com/en/nl/amsterdam/restaurant/spectrum',
    },
    {
      name: 'Rijks',
      distinction: '1-star',
      cuisine: 'Dutch Contemporary',
      priceRange: '$$$',
      description:
        'Joris Bijdendijk champions forgotten Dutch ingredients at the Rijksmuseum, pairing them with historical recipes.',
      url: 'https://guide.michelin.com/en/nl/amsterdam/restaurant/rijks',
    },
    {
      name: 'Bak',
      distinction: '1-star',
      cuisine: 'European Contemporary',
      priceRange: '$$$',
      description:
        'A waterfront gem in Amsterdam-Noord with an ever-changing menu driven by what\'s best at the market each morning.',
      url: 'https://guide.michelin.com/en/nl/amsterdam/restaurant/bak',
    },
    {
      name: 'Bar Centraal',
      distinction: 'bib-gourmand',
      cuisine: 'Dutch Bistro',
      priceRange: '$$',
      description:
        'Convivial neighborhood bistro championing seasonal Dutch and European dishes with excellent natural wines.',
      url: 'https://guide.michelin.com/en/nl/amsterdam/restaurant/bar-centraal',
    },
  ],

  // ─────────────────────────────────────────────
  // ROME — 7 restaurants
  // ─────────────────────────────────────────────
  rome: [
    {
      name: 'La Pergola',
      distinction: '3-star',
      cuisine: 'Italian Mediterranean',
      priceRange: '$$$$',
      description:
        'Heinz Beck\'s rooftop masterpiece at the Rome Cavalieri — the only three-star restaurant in Rome — with panoramic views.',
      url: 'https://guide.michelin.com/en/it/rome/restaurant/la-pergola',
    },
    {
      name: 'Il Pagliaccio',
      distinction: '2-star',
      cuisine: 'Italian Creative',
      priceRange: '$$$$',
      description:
        'Chef Anthony Genovese blends Mediterranean and Asian influences into deeply personal, elegantly plated courses.',
      url: 'https://guide.michelin.com/en/it/rome/restaurant/il-pagliaccio',
    },
    {
      name: 'Idylio by Apreda',
      distinction: '1-star',
      cuisine: 'Italian Contemporary',
      priceRange: '$$$$',
      description:
        'Francesco Apreda\'s restaurant at the Pantheon Iconic Hotel fuses Italian and Japanese elements with finesse.',
      url: 'https://guide.michelin.com/en/it/rome/restaurant/idylio-by-apreda',
    },
    {
      name: 'Acquolina',
      distinction: '1-star',
      cuisine: 'Italian Seafood',
      priceRange: '$$$$',
      description:
        'Sophisticated seafood-focused cuisine at the First Roma Arte hotel emphasizing pristine Mediterranean fish.',
      url: 'https://guide.michelin.com/en/it/rome/restaurant/acquolina',
    },
    {
      name: 'Pipero Roma',
      distinction: '1-star',
      cuisine: 'Italian Contemporary',
      priceRange: '$$$$',
      description:
        'Alessandro Pipero\'s elegant restaurant near Piazza Barberini serves polished modern Italian cuisine with character.',
      url: 'https://guide.michelin.com/en/it/rome/restaurant/pipero-roma',
    },
    {
      name: 'Roscioli',
      distinction: 'bib-gourmand',
      cuisine: 'Italian Roman',
      priceRange: '$$',
      description:
        'Part salumeria, part restaurant — a cult Roman spot for cacio e pepe, charcuterie, and exceptional Italian wines.',
      url: 'https://guide.michelin.com/en/it/rome/restaurant/roscioli',
    },
    {
      name: 'Da Enzo al 29',
      distinction: 'recommended',
      cuisine: 'Roman Traditional',
      priceRange: '$',
      description:
        'Quintessential Trastevere trattoria beloved for its textbook carbonara, cacio e pepe, and fried artichokes.',
      url: 'https://www.google.com/maps/search/Da+Enzo+al+29+Trastevere+Rome',
    },
  ],

  // ─────────────────────────────────────────────
  // EDINBURGH — 5 restaurants
  // ─────────────────────────────────────────────
  edinburgh: [
    {
      name: 'Restaurant Martin Wishart',
      distinction: '1-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Edinburgh\'s longest-standing Michelin star, serving classically rooted French cuisine with Scottish ingredients in Leith.',
      url: 'https://guide.michelin.com/en/gb/edinburgh/restaurant/martin-wishart',
    },
    {
      name: 'The Kitchin',
      distinction: '1-star',
      cuisine: 'Scottish-French',
      priceRange: '$$$$',
      description:
        'Tom Kitchin\'s "from nature to plate" philosophy showcases Scotland\'s finest game, seafood, and seasonal produce.',
      url: 'https://guide.michelin.com/en/gb/edinburgh/restaurant/the-kitchin',
    },
    {
      name: 'Number One',
      distinction: '1-star',
      cuisine: 'Scottish Contemporary',
      priceRange: '$$$$',
      description:
        'The Balmoral Hotel\'s flagship restaurant delivers refined Scottish cuisine in an intimate, deep-red dining room.',
      url: 'https://guide.michelin.com/en/gb/edinburgh/restaurant/number-one',
    },
    {
      name: 'Condita',
      distinction: '1-star',
      cuisine: 'Scottish Modern',
      priceRange: '$$$',
      description:
        'Chef Conor Toomey\'s tiny 20-seat restaurant delivers inventive tasting menus showcasing Scottish producers.',
      url: 'https://guide.michelin.com/en/gb/edinburgh/restaurant/condita',
    },
    {
      name: 'Dishoom',
      distinction: 'recommended',
      cuisine: 'Indian Bombay Café',
      priceRange: '$$',
      description:
        'Bustling Bombay-inspired café in a stunning former bank building, famous for its black daal and bacon naan roll.',
      url: 'https://www.google.com/maps/search/Dishoom+Edinburgh',
    },
  ],

  // ─────────────────────────────────────────────
  // BUDAPEST — 5 restaurants
  // ─────────────────────────────────────────────
  budapest: [
    {
      name: 'Costes',
      distinction: '1-star',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'Hungary\'s first Michelin-starred restaurant, setting the standard for Budapest fine dining since 2010.',
      url: 'https://guide.michelin.com/en/hu/budapest/restaurant/costes',
    },
    {
      name: 'Costes Downtown',
      distinction: '1-star',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'Miguel Rocha Vieira leads a refined downtown sibling offering Portuguese-accented contemporary European cuisine.',
      url: 'https://guide.michelin.com/en/hu/budapest/restaurant/costes-downtown',
    },
    {
      name: 'Essência',
      distinction: '1-star',
      cuisine: 'Portuguese-Hungarian',
      priceRange: '$$$',
      description:
        'Chef Miguel Vieira combines Portuguese roots with Hungarian ingredients in an intimate, warmly modern space.',
      url: 'https://guide.michelin.com/en/hu/budapest/restaurant/essencia',
    },
    {
      name: 'Stand25 Bisztró',
      distinction: 'bib-gourmand',
      cuisine: 'Hungarian Modern',
      priceRange: '$$',
      description:
        'Named after a market stall, this bistro elevates Hungarian comfort food with outstanding local wine pairings.',
      url: 'https://guide.michelin.com/en/hu/budapest/restaurant/stand25-bisztro',
    },
    {
      name: 'Café Gerbeaud',
      distinction: 'recommended',
      cuisine: 'Hungarian Café & Pastry',
      priceRange: '$$',
      description:
        'Grand 19th-century coffeehouse on Vörösmarty Square serving exquisite Hungarian pastries and elegant café fare.',
      url: 'https://www.google.com/maps/search/Cafe+Gerbeaud+Budapest',
    },
  ],

  // ─────────────────────────────────────────────
  // MEXICO CITY — 6 restaurants
  // ─────────────────────────────────────────────
  'mexico-city': [
    {
      name: 'Pujol',
      distinction: '2-star',
      cuisine: 'Mexican Contemporary',
      priceRange: '$$$$',
      description:
        'Enrique Olvera\'s iconic restaurant exploring Mexico\'s culinary identity through dishes like his legendary mole madre.',
      url: 'https://guide.michelin.com/en/mx/mexico-city/restaurant/pujol',
    },
    {
      name: 'Quintonil',
      distinction: '2-star',
      cuisine: 'Mexican Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Jorge Vallejo weaves Mexican ancestral ingredients like huitlacoche and escamoles into refined modern cuisine.',
      url: 'https://guide.michelin.com/en/mx/mexico-city/restaurant/quintonil',
    },
    {
      name: 'Rosetta',
      distinction: '1-star',
      cuisine: 'Italian-Mexican',
      priceRange: '$$$',
      description:
        'Elena Reygadas\' Roma Norte gem blends Italian culinary sensibility with Mexican ingredients in a colonial mansion.',
      url: 'https://guide.michelin.com/en/mx/mexico-city/restaurant/rosetta',
    },
    {
      name: 'Máximo Bistrot',
      distinction: '1-star',
      cuisine: 'Mexican Market-Driven',
      priceRange: '$$$',
      description:
        'Chef Eduardo García\'s farm-to-table bistro in Roma serves a daily-changing menu based on morning market finds.',
      url: 'https://guide.michelin.com/en/mx/mexico-city/restaurant/maximo-bistrot',
    },
    {
      name: 'Contramar',
      distinction: 'recommended',
      cuisine: 'Mexican Seafood',
      priceRange: '$$',
      description:
        'Gabriela Cámara\'s beloved open-air seafood restaurant is famous for its tuna tostadas and red-and-green grilled fish.',
      url: 'https://www.google.com/maps/search/Contramar+Mexico+City',
    },
    {
      name: 'El Califa de León',
      distinction: 'bib-gourmand',
      cuisine: 'Mexican Street Food',
      priceRange: '$',
      description:
        'Legendary taco stand serving perfectly charred bistec and costilla tacos, famously awarded a Michelin star.',
      url: 'https://guide.michelin.com/en/mx/mexico-city/restaurant/el-califa-de-leon',
    },
  ],

  // ─────────────────────────────────────────────
  // TULUM — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  tulum: [
    {
      name: 'Hartwood',
      distinction: 'recommended',
      cuisine: 'Mexican Wood-Fire',
      priceRange: '$$$',
      description:
        'Open-air jungle restaurant cooking everything over a wood fire with no electricity, using local Yucatecan ingredients.',
      url: 'https://www.google.com/maps/search/Hartwood+Tulum',
    },
    {
      name: 'Noma Tulum (Pop-Up Legacy)',
      distinction: 'recommended',
      cuisine: 'New Mexican',
      priceRange: '$$$$',
      description:
        'The site of the famous Noma pop-up continues to influence Tulum\'s culinary scene with Yucatecan-forward fine dining.',
      url: 'https://www.google.com/maps/search/Noma+Tulum',
    },
    {
      name: 'Arca',
      distinction: 'recommended',
      cuisine: 'Mexican Contemporary',
      priceRange: '$$$',
      description:
        'José Luis Hinostroza uses ancestral Mayan cooking techniques and local jungle ingredients in a striking open-air space.',
      url: 'https://www.google.com/maps/search/Arca+Tulum',
    },
  ],

  // ─────────────────────────────────────────────
  // VANCOUVER — 5 restaurants
  // ─────────────────────────────────────────────
  vancouver: [
    {
      name: 'Published on Main',
      distinction: '1-star',
      cuisine: 'Canadian Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Gus Stieffenhofer-Brandson creates Pacific Northwest tasting menus with foraging and fermentation at their core.',
      url: 'https://guide.michelin.com/en/ca/vancouver/restaurant/published-on-main',
    },
    {
      name: 'St. Lawrence',
      distinction: '1-star',
      cuisine: 'French-Québécois',
      priceRange: '$$$',
      description:
        'J-C Poirier brings Québécois soul to Vancouver with dishes rooted in French-Canadian tradition and local BC ingredients.',
      url: 'https://guide.michelin.com/en/ca/vancouver/restaurant/st-lawrence',
    },
    {
      name: 'iDen & QuanJuDe Beijing Duck House',
      distinction: '1-star',
      cuisine: 'Chinese Cantonese',
      priceRange: '$$$',
      description:
        'A unique collaboration between Japanese and Chinese culinary traditions featuring exceptional Peking duck in Richmond.',
      url: 'https://guide.michelin.com/en/ca/vancouver/restaurant/iden-quanjude-beijing-duck-house',
    },
    {
      name: 'Vij\'s',
      distinction: 'recommended',
      cuisine: 'Indian Contemporary',
      priceRange: '$$',
      description:
        'Vikram Vij\'s groundbreaking Indian restaurant combines bold Indian spices with Canadian ingredients — no reservations, always a queue.',
      url: 'https://www.google.com/maps/search/Vijs+Restaurant+Vancouver',
    },
    {
      name: 'Miku',
      distinction: 'recommended',
      cuisine: 'Japanese Aburi Sushi',
      priceRange: '$$$',
      description:
        'Pioneer of Aburi (flame-seared) sushi in Vancouver\'s waterfront with stunning views of the harbor.',
      url: 'https://www.google.com/maps/search/Miku+Restaurant+Vancouver',
    },
  ],

  // ─────────────────────────────────────────────
  // BANFF — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  banff: [
    {
      name: 'Eden at Rimrock Resort',
      distinction: 'recommended',
      cuisine: 'Canadian Fine Dining',
      priceRange: '$$$$',
      description:
        'Rocky Mountain fine dining with panoramic valley views, featuring Alberta beef and wild game.',
      url: 'https://www.google.com/maps/search/Eden+Rimrock+Resort+Banff',
    },
    {
      name: 'The Bison',
      distinction: 'recommended',
      cuisine: 'Canadian Regional',
      priceRange: '$$$',
      description:
        'Rustic-chic Bear Street restaurant serving Rocky Mountain cuisine including bison, elk, and Alberta-sourced dishes.',
      url: 'https://www.google.com/maps/search/The+Bison+Restaurant+Banff',
    },
    {
      name: 'Park Distillery',
      distinction: 'recommended',
      cuisine: 'Canadian Contemporary',
      priceRange: '$$',
      description:
        'Craft distillery and restaurant in downtown Banff making spirits from Rocky Mountain glacier water with campfire-style dishes.',
      url: 'https://www.google.com/maps/search/Park+Distillery+Banff',
    },
  ],

  // ─────────────────────────────────────────────
  // HAVANA — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  havana: [
    {
      name: 'La Guarida',
      distinction: 'recommended',
      cuisine: 'Cuban Contemporary',
      priceRange: '$$$',
      description:
        'Havana\'s most famous paladar occupies a crumbling colonial mansion, serving inventive Cuban cuisine on the rooftop.',
      url: 'https://www.google.com/maps/search/La+Guarida+Havana',
    },
    {
      name: 'El Cocinero',
      distinction: 'recommended',
      cuisine: 'Cuban Modern',
      priceRange: '$$',
      description:
        'Trendy rooftop restaurant in a converted cooking-oil factory in Vedado, blending Cuban and international flavors.',
      url: 'https://www.google.com/maps/search/El+Cocinero+Havana',
    },
    {
      name: 'Doña Eutimia',
      distinction: 'recommended',
      cuisine: 'Cuban Traditional',
      priceRange: '$',
      description:
        'Charming Old Havana paladar beloved for its classic ropa vieja and deeply flavorful Cuban home cooking.',
      url: 'https://www.google.com/maps/search/Dona+Eutimia+Havana',
    },
    {
      name: 'Ivan Chef Justo',
      distinction: 'recommended',
      cuisine: 'Cuban Innovative',
      priceRange: '$$',
      description:
        'Chef Ivan Justo pushes Cuban cuisine forward with creative dishes in a cozy Old Havana courtyard setting.',
      url: 'https://www.google.com/maps/search/Ivan+Chef+Justo+Havana',
    },
  ],

  // ─────────────────────────────────────────────
  // SAN JUAN — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  'san-juan': [
    {
      name: '1919 at Condado Vanderbilt',
      distinction: 'recommended',
      cuisine: 'Puerto Rican Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Juan José Cuevas serves refined Puerto Rican-inflected cuisine in the elegant Condado Vanderbilt hotel.',
      url: 'https://www.google.com/maps/search/1919+Condado+Vanderbilt+San+Juan',
    },
    {
      name: 'Marmalade',
      distinction: 'recommended',
      cuisine: 'Caribbean Contemporary',
      priceRange: '$$$',
      description:
        'Peter Schintler\'s acclaimed Old San Juan restaurant pairs creative Caribbean cuisine with an impressive wine cellar.',
      url: 'https://www.google.com/maps/search/Marmalade+Restaurant+San+Juan',
    },
    {
      name: 'Cocina Abierta',
      distinction: 'recommended',
      cuisine: 'Latin Fusion',
      priceRange: '$$',
      description:
        'Bustling Condado restaurant with an open kitchen serving shareable Latin-inspired dishes and creative cocktails.',
      url: 'https://www.google.com/maps/search/Cocina+Abierta+San+Juan',
    },
    {
      name: 'La Alcapurria Quemá',
      distinction: 'recommended',
      cuisine: 'Puerto Rican Street Food',
      priceRange: '$',
      description:
        'Iconic street food counter in Piñones serving the crispiest alcapurrias and bacalaítos on the island.',
      url: 'https://www.google.com/maps/search/La+Alcapurria+Quema+Pinones',
    },
  ],

  // ─────────────────────────────────────────────
  // BUENOS AIRES — 5 restaurants
  // ─────────────────────────────────────────────
  'buenos-aires': [
    {
      name: 'Don Julio',
      distinction: 'recommended',
      cuisine: 'Argentine Steakhouse',
      priceRange: '$$$',
      description:
        'Named the best steakhouse in the world, aging grass-fed beef from its own Pampas ranch in a Palermo corner spot.',
      url: 'https://www.google.com/maps/search/Don+Julio+Parrilla+Buenos+Aires',
    },
    {
      name: 'Aramburu',
      distinction: 'recommended',
      cuisine: 'Argentine Contemporary',
      priceRange: '$$$$',
      description:
        'Gonzalo Aramburu\'s intimate 16-seat restaurant delivers a dazzling 18-course tasting menu of modern Argentine cuisine.',
      url: 'https://www.google.com/maps/search/Aramburu+Restaurant+Buenos+Aires',
    },
    {
      name: 'El Preferido de Palermo',
      distinction: 'recommended',
      cuisine: 'Argentine Traditional',
      priceRange: '$$',
      description:
        'A century-old Palermo bodegón serving generous portions of classic Argentine comfort food and house wine.',
      url: 'https://www.google.com/maps/search/El+Preferido+de+Palermo+Buenos+Aires',
    },
    {
      name: 'Mishiguene',
      distinction: 'recommended',
      cuisine: 'Jewish-Argentine',
      priceRange: '$$$',
      description:
        'Chef Tomás Kalika celebrates Buenos Aires\' Jewish culinary heritage with creative, vibrant dishes and great cocktails.',
      url: 'https://www.google.com/maps/search/Mishiguene+Buenos+Aires',
    },
    {
      name: 'La Cabrera',
      distinction: 'recommended',
      cuisine: 'Argentine Parrilla',
      priceRange: '$$',
      description:
        'Famous Palermo parrilla known for generous cuts of premium Argentine beef and a parade of complimentary side dishes.',
      url: 'https://www.google.com/maps/search/La+Cabrera+Buenos+Aires',
    },
  ],

  // ─────────────────────────────────────────────
  // CARTAGENA — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  cartagena: [
    {
      name: 'Celele',
      distinction: 'recommended',
      cuisine: 'Colombian Caribbean',
      priceRange: '$$$',
      description:
        'Jaime Rodríguez explores the biodiversity of Colombia\'s Caribbean coast through a vivid, research-driven tasting menu.',
      url: 'https://www.google.com/maps/search/Celele+Restaurant+Cartagena',
    },
    {
      name: 'Carmen',
      distinction: 'recommended',
      cuisine: 'Colombian Contemporary',
      priceRange: '$$$',
      description:
        'Housed in a colonial mansion, fusing Colombian Caribbean flavors with international technique in elegant courses.',
      url: 'https://www.google.com/maps/search/Carmen+Restaurant+Cartagena',
    },
    {
      name: 'La Cevichería',
      distinction: 'recommended',
      cuisine: 'Seafood',
      priceRange: '$$',
      description:
        'Anthony Bourdain\'s famous Cartagena pick, known for its outstanding coconut ceviche and Caribbean seafood.',
      url: 'https://www.google.com/maps/search/La+Cevicheria+Cartagena',
    },
    {
      name: 'La Mulata',
      distinction: 'recommended',
      cuisine: 'Colombian Traditional',
      priceRange: '$',
      description:
        'Colorful local favorite serving hearty Caribbean-Colombian dishes like coconut rice, fried fish, and plantains.',
      url: 'https://www.google.com/maps/search/La+Mulata+Cartagena',
    },
  ],

  // ─────────────────────────────────────────────
  // CUSCO — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  cusco: [
    {
      name: 'MIL Centro',
      distinction: 'recommended',
      cuisine: 'Peruvian Andean',
      priceRange: '$$$$',
      description:
        'Virgilio Martínez\'s high-altitude research kitchen at Moray explores ancient Andean ingredients at 11,500 feet.',
      url: 'https://www.google.com/maps/search/MIL+Centro+Moray+Cusco',
    },
    {
      name: 'Chicha',
      distinction: 'recommended',
      cuisine: 'Peruvian Regional',
      priceRange: '$$',
      description:
        'Gastón Acurio\'s Cusco restaurant celebrates Andean Peruvian cuisine with dishes like rocoto relleno and alpaca.',
      url: 'https://www.google.com/maps/search/Chicha+Cusco+Gaston+Acurio',
    },
    {
      name: 'MAP Café',
      distinction: 'recommended',
      cuisine: 'Peruvian Contemporary',
      priceRange: '$$$',
      description:
        'Glass-walled restaurant inside the Pre-Columbian Art Museum serving refined Andean cuisine in a courtyard setting.',
      url: 'https://www.google.com/maps/search/MAP+Cafe+Cusco',
    },
    {
      name: 'Mercado San Pedro',
      distinction: 'recommended',
      cuisine: 'Peruvian Market Food',
      priceRange: '$',
      description:
        'Cusco\'s central market where stalls serve fresh ceviche, roasted cuy, and enormous fruit juices at communal counters.',
      url: 'https://www.google.com/maps/search/Mercado+San+Pedro+Cusco',
    },
  ],

  // ─────────────────────────────────────────────
  // RIO DE JANEIRO — 5 restaurants
  // ─────────────────────────────────────────────
  'rio-de-janeiro': [
    {
      name: 'Lasai',
      distinction: 'recommended',
      cuisine: 'Brazilian Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Rafa Costa e Silva\'s intimate Botafogo restaurant uses farm-fresh produce in a seasonal tasting menu on the World\'s 50 Best list.',
      url: 'https://www.google.com/maps/search/Lasai+Botafogo+Rio+de+Janeiro',
    },
    {
      name: 'Oteque',
      distinction: 'recommended',
      cuisine: 'Brazilian Contemporary',
      priceRange: '$$$$',
      description:
        'Alberto Landgraf\'s counter-dining restaurant in Botafogo serves seafood-driven Brazilian cuisine with Nordic precision.',
      url: 'https://www.google.com/maps/search/Oteque+Rio+de+Janeiro',
    },
    {
      name: 'Oro',
      distinction: 'recommended',
      cuisine: 'Brazilian Modern',
      priceRange: '$$$$',
      description:
        'Felipe Bronze\'s Leblon restaurant earned Latin America\'s 50 Best status for its bold, ingredient-focused Brazilian cuisine.',
      url: 'https://www.google.com/maps/search/Oro+Restaurant+Leblon+Rio',
    },
    {
      name: 'Aprazível',
      distinction: 'recommended',
      cuisine: 'Brazilian Regional',
      priceRange: '$$',
      description:
        'Treehouse-style hillside restaurant in Santa Teresa with sweeping views, serving Brazilian dishes from every region.',
      url: 'https://www.google.com/maps/search/Aprazivel+Santa+Teresa+Rio',
    },
    {
      name: 'Bar do Mineiro',
      distinction: 'recommended',
      cuisine: 'Brazilian Traditional',
      priceRange: '$',
      description:
        'Beloved Santa Teresa bar serving rustic Minas Gerais comfort food, feijoada, and ice-cold draft beer.',
      url: 'https://www.google.com/maps/search/Bar+do+Mineiro+Santa+Teresa+Rio',
    },
  ],

  // ─────────────────────────────────────────────
  // MEDELLÍN — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  medellin: [
    {
      name: 'El Cielo',
      distinction: 'recommended',
      cuisine: 'Colombian Innovative',
      priceRange: '$$$$',
      description:
        'Chef Juan Manuel Barrientos creates a multi-sensory tasting experience exploring Colombian ingredients and memory.',
      url: 'https://www.google.com/maps/search/El+Cielo+Restaurant+Medellin',
    },
    {
      name: 'Oci.Mde',
      distinction: 'recommended',
      cuisine: 'Colombian Contemporary',
      priceRange: '$$$',
      description:
        'Intimate Provenza restaurant pushing Medellín\'s culinary boundaries with creative Colombian-inspired tasting menus.',
      url: 'https://www.google.com/maps/search/Oci.Mde+Medellin',
    },
    {
      name: 'Alambique',
      distinction: 'recommended',
      cuisine: 'Colombian-French Fusion',
      priceRange: '$$$',
      description:
        'A refined El Poblado restaurant blending Colombian ingredients with French technique in elegant, seasonal courses.',
      url: 'https://www.google.com/maps/search/Alambique+Medellin',
    },
    {
      name: 'Mondongos',
      distinction: 'recommended',
      cuisine: 'Colombian Traditional',
      priceRange: '$',
      description:
        'Iconic Medellín institution since the 1970s, famous for its bandeja paisa and namesake mondongo tripe soup.',
      url: 'https://www.google.com/maps/search/Mondongos+Medellin',
    },
  ],

  // ─────────────────────────────────────────────
  // MARRAKECH — 5 restaurants
  // ─────────────────────────────────────────────
  marrakech: [
    {
      name: 'La Mamounia - Le Marocain',
      distinction: 'recommended',
      cuisine: 'Moroccan Traditional',
      priceRange: '$$$$',
      description:
        'The legendary palace hotel\'s Moroccan restaurant serves exquisite tagines and couscous amid jaw-dropping interiors.',
      url: 'https://www.google.com/maps/search/La+Mamounia+Le+Marocain+Marrakech',
    },
    {
      name: 'Al Fassia',
      distinction: 'recommended',
      cuisine: 'Moroccan Traditional',
      priceRange: '$$',
      description:
        'Run entirely by women, this Guéliz institution has served definitive Moroccan cuisine since 1987.',
      url: 'https://www.google.com/maps/search/Al+Fassia+Marrakech',
    },
    {
      name: 'Le Jardin',
      distinction: 'recommended',
      cuisine: 'Moroccan-Mediterranean',
      priceRange: '$$',
      description:
        'Hidden garden oasis in the medina serving fresh Moroccan-Mediterranean dishes beneath banana palms and bougainvillea.',
      url: 'https://www.google.com/maps/search/Le+Jardin+Marrakech+Medina',
    },
    {
      name: 'Nomad',
      distinction: 'recommended',
      cuisine: 'Modern Moroccan',
      priceRange: '$$',
      description:
        'Stylish rooftop restaurant overlooking the spice souk, serving contemporary takes on Moroccan classics.',
      url: 'https://www.google.com/maps/search/Nomad+Restaurant+Marrakech',
    },
    {
      name: 'Café des Épices',
      distinction: 'recommended',
      cuisine: 'Moroccan Café',
      priceRange: '$',
      description:
        'Atmospheric terrace café above the spice market perfect for mint tea and simple, flavorful Moroccan bites.',
      url: 'https://www.google.com/maps/search/Cafe+des+Epices+Marrakech',
    },
  ],

  // ─────────────────────────────────────────────
  // CAPE TOWN — 5 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  'cape-town': [
    {
      name: 'The Test Kitchen',
      distinction: 'recommended',
      cuisine: 'South African Contemporary',
      priceRange: '$$$$',
      description:
        'Luke Dale-Roberts\' groundbreaking restaurant in Woodstock that put Cape Town on the global fine-dining map.',
      url: 'https://www.google.com/maps/search/The+Test+Kitchen+Cape+Town',
    },
    {
      name: 'FYN',
      distinction: 'recommended',
      cuisine: 'South African-Japanese Fusion',
      priceRange: '$$$$',
      description:
        'Peter Tempelhoff merges Japanese precision with South African terroir in a sleek CBD dining room with mountain views.',
      url: 'https://www.google.com/maps/search/FYN+Restaurant+Cape+Town',
    },
    {
      name: 'La Colombe',
      distinction: 'recommended',
      cuisine: 'French-Asian',
      priceRange: '$$$$',
      description:
        'Set in the Constantia winelands, blending French and Asian flavors with playful invention and vineyard views.',
      url: 'https://www.google.com/maps/search/La+Colombe+Constantia+Cape+Town',
    },
    {
      name: 'Wolfgat',
      distinction: 'recommended',
      cuisine: 'West Coast Strandveld',
      priceRange: '$$$',
      description:
        'Kobus van der Merwe\'s tiny beach cottage serves foraged West Coast cuisine — winner of the inaugural World Restaurant Awards.',
      url: 'https://www.google.com/maps/search/Wolfgat+Paternoster',
    },
    {
      name: 'The Pot Luck Club',
      distinction: 'recommended',
      cuisine: 'Global Tapas',
      priceRange: '$$',
      description:
        'Luke Dale-Roberts\' casual rooftop sibling in the Silo District serving bold global small plates with city views.',
      url: 'https://www.google.com/maps/search/Pot+Luck+Club+Cape+Town',
    },
  ],

  // ─────────────────────────────────────────────
  // ZANZIBAR — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  zanzibar: [
    {
      name: 'The Rock Restaurant',
      distinction: 'recommended',
      cuisine: 'Zanzibari Seafood',
      priceRange: '$$$',
      description:
        'Perched on a rock in the Indian Ocean, this iconic Pingwe restaurant serves fresh seafood with spice island flavors.',
      url: 'https://www.google.com/maps/search/The+Rock+Restaurant+Zanzibar',
    },
    {
      name: 'Emerson Spice Tea House',
      distinction: 'recommended',
      cuisine: 'Zanzibari Fusion',
      priceRange: '$$',
      description:
        'Rooftop dining in Stone Town with ocean sunset views, serving a set menu of Swahili-spiced dishes nightly.',
      url: 'https://www.google.com/maps/search/Emerson+Spice+Tea+House+Zanzibar',
    },
    {
      name: 'Forodhani Gardens Night Market',
      distinction: 'recommended',
      cuisine: 'Zanzibari Street Food',
      priceRange: '$',
      description:
        'Lively waterfront night market where vendors grill fresh seafood, Zanzibar pizza, and sugarcane juice at dusk.',
      url: 'https://www.google.com/maps/search/Forodhani+Gardens+Night+Market+Zanzibar',
    },
  ],

  // ─────────────────────────────────────────────
  // NAIROBI — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  nairobi: [
    {
      name: 'Talisman',
      distinction: 'recommended',
      cuisine: 'Pan-African Fusion',
      priceRange: '$$$',
      description:
        'Karen\'s beloved garden restaurant blending East African, Asian, and European influences in lush tropical surrounds.',
      url: 'https://www.google.com/maps/search/Talisman+Karen+Nairobi',
    },
    {
      name: 'Nyama Mama',
      distinction: 'recommended',
      cuisine: 'Kenyan Contemporary',
      priceRange: '$$',
      description:
        'Modern Kenyan restaurant reinventing East African classics like nyama choma and ugali with creative flair.',
      url: 'https://www.google.com/maps/search/Nyama+Mama+Nairobi',
    },
    {
      name: 'Carnivore',
      distinction: 'recommended',
      cuisine: 'Kenyan BBQ',
      priceRange: '$$',
      description:
        'Legendary "Beast of a Feast" restaurant serving all-you-can-eat game meats roasted on Maasai swords.',
      url: 'https://www.google.com/maps/search/Carnivore+Restaurant+Nairobi',
    },
    {
      name: 'Mama Oliech',
      distinction: 'recommended',
      cuisine: 'Kenyan Traditional',
      priceRange: '$',
      description:
        'No-frills Nairobi institution where locals crowd for the best fried tilapia and traditional Luo cooking.',
      url: 'https://www.google.com/maps/search/Mama+Oliech+Nairobi',
    },
  ],

  // ─────────────────────────────────────────────
  // SYDNEY — 7 restaurants
  // ─────────────────────────────────────────────
  sydney: [
    {
      name: 'Quay',
      distinction: '2-star',
      cuisine: 'Australian Contemporary',
      priceRange: '$$$$',
      description:
        'Peter Gilmore\'s nature-inspired tasting menus at Circular Quay with iconic Opera House views redefine Australian fine dining.',
      url: 'https://guide.michelin.com/en/au/sydney/restaurant/quay',
    },
    {
      name: 'Oncore by Clare Smyth',
      distinction: '2-star',
      cuisine: 'British-Australian Contemporary',
      priceRange: '$$$$',
      description:
        'Clare Smyth brings her three-Michelin-star pedigree to Crown Sydney with exquisite, produce-driven modern cuisine.',
      url: 'https://guide.michelin.com/en/au/sydney/restaurant/oncore-by-clare-smyth',
    },
    {
      name: 'Tetsuya\'s',
      distinction: '1-star',
      cuisine: 'Japanese-French Fusion',
      priceRange: '$$$$',
      description:
        'Tetsuya Wakuda\'s legendary restaurant harmonizes Japanese and French traditions in an elegant Darling Harbour setting.',
      url: 'https://guide.michelin.com/en/au/sydney/restaurant/tetsuyas',
    },
    {
      name: 'Sixpenny',
      distinction: '1-star',
      cuisine: 'Australian Modern',
      priceRange: '$$$$',
      description:
        'Daniel Puskas\' intimate Stanmore restaurant showcases Australian terroir through delicate, seasonal multi-course menus.',
      url: 'https://guide.michelin.com/en/au/sydney/restaurant/sixpenny',
    },
    {
      name: 'Saint Peter',
      distinction: '1-star',
      cuisine: 'Australian Seafood',
      priceRange: '$$$',
      description:
        'Josh Niland\'s revolutionary nose-to-tail fish restaurant that changed how the world thinks about cooking seafood.',
      url: 'https://guide.michelin.com/en/au/sydney/restaurant/saint-peter',
    },
    {
      name: 'Mr. Wong',
      distinction: 'bib-gourmand',
      cuisine: 'Cantonese',
      priceRange: '$$',
      description:
        'Mega-popular CBD Cantonese restaurant in a cavernous heritage space, renowned for its crispy-skin duck.',
      url: 'https://guide.michelin.com/en/au/sydney/restaurant/mr-wong',
    },
    {
      name: 'Porteno',
      distinction: 'recommended',
      cuisine: 'Argentine BBQ',
      priceRange: '$$',
      description:
        'Surry Hills Argentine grill where whole animals slow-cook over wood fire, served in a vibrant late-night atmosphere.',
      url: 'https://www.google.com/maps/search/Porteno+Surry+Hills+Sydney',
    },
  ],

  // ─────────────────────────────────────────────
  // QUEENSTOWN — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  queenstown: [
    {
      name: 'Botswana Butchery',
      distinction: 'recommended',
      cuisine: 'New Zealand Contemporary',
      priceRange: '$$$$',
      description:
        'Lakeside fine dining in a heritage cottage serving premium NZ lamb, venison, and seafood with local wines.',
      url: 'https://www.google.com/maps/search/Botswana+Butchery+Queenstown',
    },
    {
      name: 'Rātā',
      distinction: 'recommended',
      cuisine: 'New Zealand Modern',
      priceRange: '$$$',
      description:
        'Josh Emett\'s acclaimed restaurant in a heritage building serving refined NZ cuisine with Otago wines.',
      url: 'https://www.google.com/maps/search/Rata+Restaurant+Queenstown',
    },
    {
      name: 'Fergburger',
      distinction: 'recommended',
      cuisine: 'Gourmet Burgers',
      priceRange: '$',
      description:
        'Queenstown\'s most iconic eatery where tourists and locals queue day and night for massive, legendary burgers.',
      url: 'https://www.google.com/maps/search/Fergburger+Queenstown',
    },
  ],

  // ─────────────────────────────────────────────
  // FIJI — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  fiji: [
    {
      name: 'Waitui Bar & Grill',
      distinction: 'recommended',
      cuisine: 'Pacific Rim',
      priceRange: '$$$',
      description:
        'Six Senses Fiji\'s signature restaurant celebrating Pacific ingredients with a focus on sustainably sourced seafood.',
      url: 'https://www.google.com/maps/search/Waitui+Bar+Grill+Six+Senses+Fiji',
    },
    {
      name: 'Lako Mai',
      distinction: 'recommended',
      cuisine: 'Fijian-Pacific Fusion',
      priceRange: '$$',
      description:
        'Contemporary Fijian dining featuring traditional kokoda ceviche, lovo-cooked meats, and tropical Melanesian flavors.',
      url: 'https://www.google.com/maps/search/Lako+Mai+Fiji',
    },
    {
      name: 'Navo at InterContinental Fiji',
      distinction: 'recommended',
      cuisine: 'Pacific Seafood',
      priceRange: '$$$$',
      description:
        'Overwater restaurant with sunset views serving fresh Fijian seafood and Indo-Fijian influenced dishes.',
      url: 'https://www.google.com/maps/search/Navo+InterContinental+Fiji',
    },
  ],

  // ─────────────────────────────────────────────
  // BEIJING — 7 restaurants
  // ─────────────────────────────────────────────
  beijing: [
    {
      name: 'Xin Rong Ji (Finance Street)',
      distinction: '3-star',
      cuisine: 'Taizhou Chinese',
      priceRange: '$$$$',
      description:
        'Exquisite Taizhou cuisine showcasing rare Chinese ingredients and traditional techniques refined to the highest level.',
      url: 'https://guide.michelin.com/en/cn/beijing/restaurant/xin-rong-ji-finance-street',
    },
    {
      name: 'King\'s Joy',
      distinction: '2-star',
      cuisine: 'Chinese Vegetarian',
      priceRange: '$$$$',
      description:
        'Near the Lama Temple, this elegant restaurant elevates Buddhist vegetarian cuisine into a refined art form.',
      url: 'https://guide.michelin.com/en/cn/beijing/restaurant/kings-joy',
    },
    {
      name: 'Jing Yaa Tang',
      distinction: '1-star',
      cuisine: 'Chinese Beijing Duck',
      priceRange: '$$$',
      description:
        'The Opposite House\'s sleek restaurant serves meticulously prepared Peking duck carved tableside with artisan condiments.',
      url: 'https://guide.michelin.com/en/cn/beijing/restaurant/jing-yaa-tang',
    },
    {
      name: 'Fu Chun Ju',
      distinction: '1-star',
      cuisine: 'Chinese Jiangsu',
      priceRange: '$$$',
      description:
        'Refined Jiangsu cuisine focusing on freshwater ingredients prepared with delicate, time-honored techniques.',
      url: 'https://guide.michelin.com/en/cn/beijing/restaurant/fu-chun-ju',
    },
    {
      name: 'Da Dong Roast Duck',
      distinction: '1-star',
      cuisine: 'Chinese Beijing Duck',
      priceRange: '$$',
      description:
        'Chef Dong Zhenxiang\'s revolutionary "Super Lean" roast duck technique made this a global Peking duck destination.',
      url: 'https://guide.michelin.com/en/cn/beijing/restaurant/da-dong',
    },
    {
      name: 'Bao Yuan Jiaozi Wu',
      distinction: 'bib-gourmand',
      cuisine: 'Chinese Dumplings',
      priceRange: '$',
      description:
        'Beloved dumpling house with a rainbow of colorful dumplings in over 200 varieties with creative fillings.',
      url: 'https://guide.michelin.com/en/cn/beijing/restaurant/bao-yuan-jiaozi-wu',
    },
    {
      name: 'Zhang Mama',
      distinction: 'bib-gourmand',
      cuisine: 'Sichuan',
      priceRange: '$',
      description:
        'Fiery Sichuan restaurant known for its numbing mapo tofu and hand-pulled noodles in a no-frills setting.',
      url: 'https://guide.michelin.com/en/cn/beijing/restaurant/zhang-mama',
    },
  ],

  // ─────────────────────────────────────────────
  // SHANGHAI — 7 restaurants
  // ─────────────────────────────────────────────
  shanghai: [
    {
      name: 'Ultraviolet by Paul Pairet',
      distinction: '3-star',
      cuisine: 'French Avant-Garde',
      priceRange: '$$$$',
      description:
        'A 10-seat sensory dining experience with 20+ courses synchronized to music, scent, video, and light projections.',
      url: 'https://guide.michelin.com/en/cn/shanghai/restaurant/ultraviolet-by-paul-pairet',
    },
    {
      name: 'T\'ang Court',
      distinction: '2-star',
      cuisine: 'Cantonese',
      priceRange: '$$$$',
      description:
        'The Langham\'s elegant Cantonese restaurant serving refined dim sum and classic Cantonese dishes with precision.',
      url: 'https://guide.michelin.com/en/cn/shanghai/restaurant/tang-court',
    },
    {
      name: 'Fu He Hui',
      distinction: '1-star',
      cuisine: 'Chinese Vegetarian',
      priceRange: '$$$',
      description:
        'Tony Lu\'s inventive Buddhist vegetarian cuisine presented as sophisticated multi-course meals in a serene garden.',
      url: 'https://guide.michelin.com/en/cn/shanghai/restaurant/fu-he-hui',
    },
    {
      name: 'Da Vittorio Shanghai',
      distinction: '1-star',
      cuisine: 'Italian',
      priceRange: '$$$$',
      description:
        'The Cerea brothers bring their Bergamo three-star legacy to Shanghai with refined Northern Italian cuisine on the Bund.',
      url: 'https://guide.michelin.com/en/cn/shanghai/restaurant/da-vittorio',
    },
    {
      name: 'Canton Table',
      distinction: '1-star',
      cuisine: 'Cantonese',
      priceRange: '$$$',
      description:
        'Sophisticated Cantonese dining in Jing\'an featuring impeccable dim sum and seasonal Guangdong specialties.',
      url: 'https://guide.michelin.com/en/cn/shanghai/restaurant/canton-table',
    },
    {
      name: 'Yang\'s Fried Dumplings',
      distinction: 'bib-gourmand',
      cuisine: 'Shanghainese Street Food',
      priceRange: '$',
      description:
        'Shanghai\'s most addictive sheng jian bao — pan-fried soup dumplings with crispy golden bottoms and juicy pork filling.',
      url: 'https://guide.michelin.com/en/cn/shanghai/restaurant/yangs-fried-dumplings',
    },
    {
      name: 'Jia Jia Tang Bao',
      distinction: 'bib-gourmand',
      cuisine: 'Shanghainese',
      priceRange: '$',
      description:
        'Tiny, perpetually packed shop on Huanghe Road serving some of Shanghai\'s most delicate xiao long bao.',
      url: 'https://guide.michelin.com/en/cn/shanghai/restaurant/jia-jia-tang-bao',
    },
  ],

  // ─────────────────────────────────────────────
  // HONG KONG — 8 restaurants
  // ─────────────────────────────────────────────
  'hong-kong': [
    {
      name: 'Lung King Heen',
      distinction: '3-star',
      cuisine: 'Cantonese',
      priceRange: '$$$$',
      description:
        'The world\'s first Chinese restaurant to earn three Michelin stars, at the Four Seasons with harbor views.',
      url: 'https://guide.michelin.com/en/hk/hong-kong/restaurant/lung-king-heen',
    },
    {
      name: 'Bo Innovation',
      distinction: '2-star',
      cuisine: 'Chinese Innovative',
      priceRange: '$$$$',
      description:
        'Alvin Leung\'s "X-treme Chinese" cuisine deconstructs Cantonese traditions into daring, molecular-driven creations.',
      url: 'https://guide.michelin.com/en/hk/hong-kong/restaurant/bo-innovation',
    },
    {
      name: 'Tin Lung Heen',
      distinction: '2-star',
      cuisine: 'Cantonese',
      priceRange: '$$$$',
      description:
        'The Ritz-Carlton\'s sky-high Cantonese restaurant on the 102nd floor delivers classic dim sum above the clouds.',
      url: 'https://guide.michelin.com/en/hk/hong-kong/restaurant/tin-lung-heen',
    },
    {
      name: 'The Chairman',
      distinction: '1-star',
      cuisine: 'Cantonese',
      priceRange: '$$$',
      description:
        'Danny Yip\'s farm-to-table Cantonese restaurant sources from small producers to create deeply flavored traditional dishes.',
      url: 'https://guide.michelin.com/en/hk/hong-kong/restaurant/the-chairman',
    },
    {
      name: 'Wing',
      distinction: '1-star',
      cuisine: 'Cantonese Contemporary',
      priceRange: '$$$$',
      description:
        'Vicky Cheng\'s celebration of Hong Kong\'s culinary identity, reinterpreting Cantonese classics through modern vision.',
      url: 'https://guide.michelin.com/en/hk/hong-kong/restaurant/wing',
    },
    {
      name: 'Tate Dining Room',
      distinction: '1-star',
      cuisine: 'French-Chinese',
      priceRange: '$$$$',
      description:
        'Vicky Lau\'s "ode to Chinese tea and French cuisine" tells stories through exquisitely plated, tea-paired courses.',
      url: 'https://guide.michelin.com/en/hk/hong-kong/restaurant/tate-dining-room',
    },
    {
      name: 'Tim Ho Wan (Sham Shui Po)',
      distinction: 'bib-gourmand',
      cuisine: 'Cantonese Dim Sum',
      priceRange: '$',
      description:
        'The world\'s cheapest Michelin-starred restaurant, famous for its BBQ pork buns with a sugar-crusted top.',
      url: 'https://guide.michelin.com/en/hk/hong-kong/restaurant/tim-ho-wan-sham-shui-po',
    },
    {
      name: 'Tsim Chai Kee',
      distinction: 'bib-gourmand',
      cuisine: 'Cantonese Noodles',
      priceRange: '$',
      description:
        'Legendary Central noodle shop serving springy wonton noodles and fish ball soup since the 1950s.',
      url: 'https://guide.michelin.com/en/hk/hong-kong/restaurant/tsim-chai-kee',
    },
  ],

  // ─────────────────────────────────────────────
  // PHUKET — 5 restaurants
  // ─────────────────────────────────────────────
  phuket: [
    {
      name: 'PRU',
      distinction: '2-star',
      cuisine: 'Thai Contemporary',
      priceRange: '$$$$',
      description:
        'Trisara resort\'s farm-to-table restaurant grows 60% of its produce on-site, creating refined Thai-inspired tasting menus.',
      url: 'https://guide.michelin.com/en/th/phuket/restaurant/pru',
    },
    {
      name: 'ICE Restaurant',
      distinction: '1-star',
      cuisine: 'European-Thai',
      priceRange: '$$$$',
      description:
        'Intimate fine dining experience blending European technique with southern Thai ingredients at KATA Rocks.',
      url: 'https://guide.michelin.com/en/th/phuket/restaurant/ice',
    },
    {
      name: 'Black Ginger',
      distinction: '1-star',
      cuisine: 'Thai Traditional',
      priceRange: '$$$',
      description:
        'Accessed by raft across a lagoon at The Slate resort, serving royal Thai recipes with theatrical presentation.',
      url: 'https://guide.michelin.com/en/th/phuket/restaurant/black-ginger',
    },
    {
      name: 'Go Benz',
      distinction: 'bib-gourmand',
      cuisine: 'Thai Southern',
      priceRange: '$',
      description:
        'Beloved local spot in Phuket Town famous for its rich, turmeric-yellow crab curry and fiery southern Thai dishes.',
      url: 'https://guide.michelin.com/en/th/phuket/restaurant/go-benz',
    },
    {
      name: 'Raya',
      distinction: 'bib-gourmand',
      cuisine: 'Thai-Chinese Phuketian',
      priceRange: '$',
      description:
        'Multi-generational Phuket Town restaurant serving Phuketian specialties like moo hong and crab yellow curry.',
      url: 'https://guide.michelin.com/en/th/phuket/restaurant/raya',
    },
  ],

  // ─────────────────────────────────────────────
  // SIEM REAP — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  'siem-reap': [
    {
      name: 'Cuisine Wat Damnak',
      distinction: 'recommended',
      cuisine: 'Cambodian Contemporary',
      priceRange: '$$',
      description:
        'Joannès Rivière\'s pioneering Cambodian tasting menu revives forgotten Khmer ingredients in a traditional wooden house.',
      url: 'https://www.google.com/maps/search/Cuisine+Wat+Damnak+Siem+Reap',
    },
    {
      name: 'Embassy',
      distinction: 'recommended',
      cuisine: 'Cambodian Modern',
      priceRange: '$$$',
      description:
        'Kimsan Sok\'s sophisticated restaurant presents modern Cambodian cuisine in a beautiful French-colonial setting.',
      url: 'https://www.google.com/maps/search/Embassy+Restaurant+Siem+Reap',
    },
    {
      name: 'Mahob Khmer',
      distinction: 'recommended',
      cuisine: 'Cambodian Traditional',
      priceRange: '$',
      description:
        'Authentic Khmer home cooking with dishes like fish amok and green banana curry in a charming garden.',
      url: 'https://www.google.com/maps/search/Mahob+Khmer+Siem+Reap',
    },
    {
      name: 'Bugs Café',
      distinction: 'recommended',
      cuisine: 'Cambodian Insect',
      priceRange: '$$',
      description:
        'Adventurous restaurant dedicated to edible insects, serving tarantula donuts and ant-egg pad thai with Khmer twists.',
      url: 'https://www.google.com/maps/search/Bugs+Cafe+Siem+Reap',
    },
  ],

  // ─────────────────────────────────────────────
  // LUANG PRABANG — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  'luang-prabang': [
    {
      name: 'Paste Laos',
      distinction: 'recommended',
      cuisine: 'Laotian Contemporary',
      priceRange: '$$$',
      description:
        'Award-winning Bangkok chefs bring their expertise to revive ancient Laotian recipes with modern refinement.',
      url: 'https://www.google.com/maps/search/Paste+Laos+Luang+Prabang',
    },
    {
      name: 'Tamarind',
      distinction: 'recommended',
      cuisine: 'Laotian Traditional',
      priceRange: '$$',
      description:
        'The go-to restaurant for authentic Lao cuisine, offering cooking classes alongside dishes like jaew dipping sauces.',
      url: 'https://www.google.com/maps/search/Tamarind+Restaurant+Luang+Prabang',
    },
    {
      name: 'Joma Bakery Café',
      distinction: 'recommended',
      cuisine: 'Bakery Café',
      priceRange: '$',
      description:
        'Popular Mekong-side café beloved by locals and travelers for fresh pastries, coffee, and sandwiches.',
      url: 'https://www.google.com/maps/search/Joma+Bakery+Cafe+Luang+Prabang',
    },
  ],

  // ─────────────────────────────────────────────
  // KUALA LUMPUR — 6 restaurants
  // ─────────────────────────────────────────────
  'kuala-lumpur': [
    {
      name: 'DC by Darren Chin',
      distinction: '1-star',
      cuisine: 'French-Malaysian Contemporary',
      priceRange: '$$$$',
      description:
        'Darren Chin\'s intimate TTDI restaurant serves refined French cuisine inflected with Malaysian produce and memory.',
      url: 'https://guide.michelin.com/en/my/kuala-lumpur/restaurant/dc-by-darren-chin',
    },
    {
      name: 'Dewakan',
      distinction: '1-star',
      cuisine: 'Malaysian Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Darren Teoh explores Malaysia\'s extraordinary biodiversity through a tasting menu of indigenous ingredients.',
      url: 'https://guide.michelin.com/en/my/kuala-lumpur/restaurant/dewakan',
    },
    {
      name: 'Auntie Nat\'s',
      distinction: 'bib-gourmand',
      cuisine: 'Malaysian Nyonya',
      priceRange: '$',
      description:
        'Home-style Peranakan cooking featuring rich laksa, assam fish head, and traditional kuih in a warm setting.',
      url: 'https://guide.michelin.com/en/my/kuala-lumpur/restaurant/auntie-nats',
    },
    {
      name: 'Sao Nam',
      distinction: 'bib-gourmand',
      cuisine: 'Vietnamese',
      priceRange: '$',
      description:
        'KL\'s beloved Vietnamese restaurant serving fragrant pho and exceptional fresh spring rolls for over two decades.',
      url: 'https://guide.michelin.com/en/my/kuala-lumpur/restaurant/sao-nam',
    },
    {
      name: 'Nasi Kandar Pelita',
      distinction: 'recommended',
      cuisine: 'Malaysian Mamak',
      priceRange: '$',
      description:
        'Iconic 24-hour mamak restaurant with legendary nasi kandar — rice smothered in multiple curries and condiments.',
      url: 'https://www.google.com/maps/search/Nasi+Kandar+Pelita+Kuala+Lumpur',
    },
    {
      name: 'Jalan Alor Hawker Street',
      distinction: 'recommended',
      cuisine: 'Malaysian Street Food',
      priceRange: '$',
      description:
        'KL\'s most famous street food strip where dozens of stalls serve char kway teow, satay, and grilled wings.',
      url: 'https://www.google.com/maps/search/Jalan+Alor+Kuala+Lumpur',
    },
  ],

  // ─────────────────────────────────────────────
  // KATHMANDU — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  kathmandu: [
    {
      name: 'Krishnarpan',
      distinction: 'recommended',
      cuisine: 'Nepali Traditional',
      priceRange: '$$$',
      description:
        'Dwarika\'s Hotel serves an extraordinary multi-course Nepali feast in a setting of carved medieval woodwork.',
      url: 'https://www.google.com/maps/search/Krishnarpan+Dwarikas+Kathmandu',
    },
    {
      name: 'Bhojan Griha',
      distinction: 'recommended',
      cuisine: 'Nepali Traditional',
      priceRange: '$$',
      description:
        'A restored 150-year-old Newari house offering traditional Nepali daal bhat and cultural performances.',
      url: 'https://www.google.com/maps/search/Bhojan+Griha+Kathmandu',
    },
    {
      name: 'OR2K',
      distinction: 'recommended',
      cuisine: 'Middle Eastern Vegetarian',
      priceRange: '$',
      description:
        'Colorful Thamel restaurant serving creative vegetarian Middle Eastern and Nepali dishes in a bohemian atmosphere.',
      url: 'https://www.google.com/maps/search/OR2K+Thamel+Kathmandu',
    },
  ],

  // ─────────────────────────────────────────────
  // ISTANBUL — 7 restaurants
  // ─────────────────────────────────────────────
  istanbul: [
    {
      name: 'Turk Fatih Tutak',
      distinction: '2-star',
      cuisine: 'Turkish Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Fatih Tutak reimagines Anatolian cuisine with avant-garde technique, earning Turkey\'s first two Michelin stars.',
      url: 'https://guide.michelin.com/en/tr/istanbul/restaurant/turk-fatih-tutak',
    },
    {
      name: 'Neolokal',
      distinction: '1-star',
      cuisine: 'Turkish Modern',
      priceRange: '$$$',
      description:
        'Maksut Aşkar reinterprets Anatolian food heritage using heirloom grains and forgotten Turkish ingredients at SALT Galata.',
      url: 'https://guide.michelin.com/en/tr/istanbul/restaurant/neolokal',
    },
    {
      name: 'Mikla',
      distinction: '1-star',
      cuisine: 'Turkish-Scandinavian',
      priceRange: '$$$$',
      description:
        'Mehmet Gürs\' rooftop restaurant fuses Turkish and Nordic influences with sweeping Bosphorus and Golden Horn views.',
      url: 'https://guide.michelin.com/en/tr/istanbul/restaurant/mikla',
    },
    {
      name: 'Nicole',
      distinction: '1-star',
      cuisine: 'Turkish Contemporary',
      priceRange: '$$$$',
      description:
        'Elegant Galataport restaurant offering a refined culinary journey through Turkey\'s diverse regional cuisines.',
      url: 'https://guide.michelin.com/en/tr/istanbul/restaurant/nicole',
    },
    {
      name: 'Çiya Sofrası',
      distinction: 'bib-gourmand',
      cuisine: 'Anatolian Regional',
      priceRange: '$',
      description:
        'Musa Dağdeviren\'s legendary Kadıköy restaurant preserving vanishing Anatolian recipes from Turkey\'s diverse regions.',
      url: 'https://guide.michelin.com/en/tr/istanbul/restaurant/ciya-sofrasi',
    },
    {
      name: 'Karaköy Lokantası',
      distinction: 'bib-gourmand',
      cuisine: 'Turkish Traditional',
      priceRange: '$$',
      description:
        'Stylish neighborhood lokanta serving elevated Turkish home cooking in a beautiful tiled Karaköy dining room.',
      url: 'https://guide.michelin.com/en/tr/istanbul/restaurant/karakoy-lokantasi',
    },
    {
      name: 'Hafız Mustafa 1864',
      distinction: 'recommended',
      cuisine: 'Turkish Patisserie',
      priceRange: '$',
      description:
        'Historic Ottoman pastry shop famous for its baklava, Turkish delight, and künefe since the imperial era.',
      url: 'https://www.google.com/maps/search/Hafiz+Mustafa+1864+Istanbul',
    },
  ],

  // ─────────────────────────────────────────────
  // VIENNA — 6 restaurants
  // ─────────────────────────────────────────────
  vienna: [
    {
      name: 'Steirereck',
      distinction: '2-star',
      cuisine: 'Austrian Contemporary',
      priceRange: '$$$$',
      description:
        'Heinz Reitbauer\'s masterwork in Stadtpark redefines Austrian cuisine with foraged ingredients and fermentation artistry.',
      url: 'https://guide.michelin.com/en/at/vienna/restaurant/steirereck',
    },
    {
      name: 'Amador',
      distinction: '2-star',
      cuisine: 'Spanish-Austrian Fusion',
      priceRange: '$$$$',
      description:
        'Juan Amador brings Iberian passion to Vienna with molecular-influenced fine dining of extraordinary complexity.',
      url: 'https://guide.michelin.com/en/at/vienna/restaurant/amador',
    },
    {
      name: 'Konstantin Filippou',
      distinction: '1-star',
      cuisine: 'Austrian-Greek Contemporary',
      priceRange: '$$$$',
      description:
        'Greco-Austrian chef creates intensely personal dishes drawing on both culinary heritages in a minimalist space.',
      url: 'https://guide.michelin.com/en/at/vienna/restaurant/konstantin-filippou',
    },
    {
      name: 'Silvio Nickol',
      distinction: '1-star',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'The Palais Coburg\'s restaurant offers a refined tasting menu complemented by one of Europe\'s greatest wine cellars.',
      url: 'https://guide.michelin.com/en/at/vienna/restaurant/silvio-nickol',
    },
    {
      name: 'Café Central',
      distinction: 'recommended',
      cuisine: 'Viennese Coffeehouse',
      priceRange: '$$',
      description:
        'Grand 1876 coffeehouse beneath Gothic vaulted ceilings, once frequented by Freud and Trotsky, serving classic Viennese tortes.',
      url: 'https://www.google.com/maps/search/Cafe+Central+Vienna',
    },
    {
      name: 'Figlmüller',
      distinction: 'recommended',
      cuisine: 'Austrian Traditional',
      priceRange: '$$',
      description:
        'Vienna\'s most famous schnitzel since 1905 — enormous, plate-overlapping cutlets pounded thin and fried golden.',
      url: 'https://www.google.com/maps/search/Figlmuller+Vienna',
    },
  ],

  // ─────────────────────────────────────────────
  // COPENHAGEN — 7 restaurants
  // ─────────────────────────────────────────────
  copenhagen: [
    {
      name: 'Geranium',
      distinction: '3-star',
      cuisine: 'Danish Contemporary',
      priceRange: '$$$$',
      description:
        'Rasmus Kofoed\'s plant-forward fine dining in Parken Stadium has been named World\'s Best Restaurant.',
      url: 'https://guide.michelin.com/en/dk/copenhagen/restaurant/geranium',
    },
    {
      name: 'Alchemist',
      distinction: '3-star',
      cuisine: 'Holistic Avant-Garde',
      priceRange: '$$$$',
      description:
        'Rasmus Munk\'s 50-course immersive experience blends food with theater, art, and social commentary in a dome.',
      url: 'https://guide.michelin.com/en/dk/copenhagen/restaurant/alchemist',
    },
    {
      name: 'Kadeau',
      distinction: '2-star',
      cuisine: 'Danish New Nordic',
      priceRange: '$$$$',
      description:
        'Bornholm island-inspired cuisine celebrates the remote Danish island\'s wild herbs, berries, and seafood traditions.',
      url: 'https://guide.michelin.com/en/dk/copenhagen/restaurant/kadeau',
    },
    {
      name: 'a|o|c',
      distinction: '2-star',
      cuisine: 'Nordic Creative',
      priceRange: '$$$$',
      description:
        'Christian Aarø and Søren Selin\'s intimate Tivoli Gardens restaurant crafts creative Nordic dishes with French roots.',
      url: 'https://guide.michelin.com/en/dk/copenhagen/restaurant/aoc',
    },
    {
      name: 'Koan',
      distinction: '2-star',
      cuisine: 'Nordic-Asian Fusion',
      priceRange: '$$$$',
      description:
        'An exploration of umami through the lens of Korean and Nordic ingredients in an intimate Copenhagen setting.',
      url: 'https://guide.michelin.com/en/dk/copenhagen/restaurant/koan',
    },
    {
      name: 'Relæ',
      distinction: '1-star',
      cuisine: 'Danish New Nordic',
      priceRange: '$$$',
      description:
        'Christian Puglisi\'s pioneering organic restaurant on Jægersborggade serving the purest expression of New Nordic cuisine.',
      url: 'https://guide.michelin.com/en/dk/copenhagen/restaurant/relae',
    },
    {
      name: 'Gasoline Grill',
      distinction: 'bib-gourmand',
      cuisine: 'Burgers',
      priceRange: '$',
      description:
        'Cult Copenhagen burger joint in a converted gas station serving exceptional smash burgers with quality ingredients.',
      url: 'https://guide.michelin.com/en/dk/copenhagen/restaurant/gasoline-grill',
    },
  ],

  // ─────────────────────────────────────────────
  // REYKJAVIK — 4 restaurants
  // ─────────────────────────────────────────────
  reykjavik: [
    {
      name: 'Dill',
      distinction: '1-star',
      cuisine: 'New Nordic Icelandic',
      priceRange: '$$$$',
      description:
        'Iceland\'s first and only Michelin-starred restaurant showcasing Icelandic terroir through a seasonal New Nordic lens.',
      url: 'https://guide.michelin.com/en/is/reykjavik/restaurant/dill',
    },
    {
      name: 'Grillið',
      distinction: 'recommended',
      cuisine: 'Icelandic Contemporary',
      priceRange: '$$$$',
      description:
        'Perched atop the Saga Hotel with panoramic views, serving refined Icelandic cuisine featuring Arctic char and lamb.',
      url: 'https://www.google.com/maps/search/Grillid+Saga+Hotel+Reykjavik',
    },
    {
      name: 'Bæjarins Beztu Pylsur',
      distinction: 'recommended',
      cuisine: 'Icelandic Street Food',
      priceRange: '$',
      description:
        'Reykjavik\'s legendary hot dog stand since 1937, serving lamb-based pylsur with crispy onions and remoulade.',
      url: 'https://www.google.com/maps/search/Baejarins+Beztu+Pylsur+Reykjavik',
    },
    {
      name: 'Grillmarket',
      distinction: 'recommended',
      cuisine: 'Icelandic Grill',
      priceRange: '$$$',
      description:
        'Farm-to-table restaurant with an open grill showcasing Icelandic lamb, langoustine, and wild game.',
      url: 'https://www.google.com/maps/search/Grillmarket+Reykjavik',
    },
  ],

  // ─────────────────────────────────────────────
  // ATHENS — 6 restaurants
  // ─────────────────────────────────────────────
  athens: [
    {
      name: 'Spondi',
      distinction: '2-star',
      cuisine: 'French-Mediterranean',
      priceRange: '$$$$',
      description:
        'Athens\' most decorated restaurant serves refined French-Mediterranean cuisine in a neoclassical courtyard with two Michelin stars.',
      url: 'https://guide.michelin.com/en/gr/athens/restaurant/spondi',
    },
    {
      name: 'Botrini\'s',
      distinction: '1-star',
      cuisine: 'Italian-Greek',
      priceRange: '$$$$',
      description:
        'Chef Ettore Botrini merges Italian roots with Greek ingredients in an elegant, art-filled Athens dining room.',
      url: 'https://guide.michelin.com/en/gr/athens/restaurant/botrinis',
    },
    {
      name: 'CTC',
      distinction: '1-star',
      cuisine: 'Greek Contemporary',
      priceRange: '$$$$',
      description:
        'Alexandros Tsiotinis explores modern Greek cuisine through inventive tasting menus at this intimate Athens restaurant.',
      url: 'https://guide.michelin.com/en/gr/athens/restaurant/ctc',
    },
    {
      name: 'Varoulko Seaside',
      distinction: '1-star',
      cuisine: 'Greek Seafood',
      priceRange: '$$$',
      description:
        'Lefteris Lazarou\'s marina-side restaurant celebrates Greek seafood with Mediterranean flair at Mikrolimano.',
      url: 'https://guide.michelin.com/en/gr/athens/restaurant/varoulko-seaside',
    },
    {
      name: 'Karamanlidika tou Fani',
      distinction: 'bib-gourmand',
      cuisine: 'Greek Deli',
      priceRange: '$$',
      description:
        'Charming deli-restaurant in the Athens market area serving Constantinople-Greek charcuterie and small plates.',
      url: 'https://guide.michelin.com/en/gr/athens/restaurant/karamanlidika-tou-fani',
    },
    {
      name: 'Kostas Souvlaki',
      distinction: 'recommended',
      cuisine: 'Greek Street Food',
      priceRange: '$',
      description:
        'Tiny Syntagma Square souvlaki stand serving what many consider the best pork souvlaki wrap in Athens.',
      url: 'https://www.google.com/maps/search/Kostas+Souvlaki+Syntagma+Athens',
    },
  ],

  // ─────────────────────────────────────────────
  // NEW ORLEANS — 5 restaurants
  // ─────────────────────────────────────────────
  'new-orleans': [
    {
      name: 'Commander\'s Palace',
      distinction: 'recommended',
      cuisine: 'Creole Fine Dining',
      priceRange: '$$$',
      description:
        'The crown jewel of New Orleans dining since 1880, launching the careers of Emeril and Paul Prudhomme in the Garden District.',
      url: 'https://www.google.com/maps/search/Commanders+Palace+New+Orleans',
    },
    {
      name: 'Compère Lapin',
      distinction: 'recommended',
      cuisine: 'Creole-Caribbean',
      priceRange: '$$$',
      description:
        'Nina Compton blends her St. Lucian heritage with Louisiana Creole traditions in a vibrant Warehouse District setting.',
      url: 'https://www.google.com/maps/search/Compere+Lapin+New+Orleans',
    },
    {
      name: 'Dooky Chase\'s Restaurant',
      distinction: 'recommended',
      cuisine: 'Creole Soul Food',
      priceRange: '$$',
      description:
        'The legendary Leah Chase\'s Treme institution, serving iconic Creole gumbo and fried chicken since 1941.',
      url: 'https://www.google.com/maps/search/Dooky+Chases+Restaurant+New+Orleans',
    },
    {
      name: 'Cochon',
      distinction: 'recommended',
      cuisine: 'Cajun',
      priceRange: '$$',
      description:
        'Donald Link\'s celebration of Cajun country cooking featuring house-smoked meats, boudin, and whole-hog cookery.',
      url: 'https://www.google.com/maps/search/Cochon+Restaurant+New+Orleans',
    },
    {
      name: 'Café du Monde',
      distinction: 'recommended',
      cuisine: 'French-Creole Café',
      priceRange: '$',
      description:
        'Open 24/7 since 1862, this French Quarter icon serves pillowy beignets dusted in powdered sugar with chicory café au lait.',
      url: 'https://www.google.com/maps/search/Cafe+du+Monde+New+Orleans',
    },
  ],

  // ─────────────────────────────────────────────
  // COSTA RICA — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  'costa-rica': [
    {
      name: 'Silvestre',
      distinction: 'recommended',
      cuisine: 'Costa Rican Contemporary',
      priceRange: '$$$',
      description:
        'Santiago Fernández forages from Costa Rica\'s jungles and coastlines to create a wild, sustainable tasting menu.',
      url: 'https://www.google.com/maps/search/Silvestre+Restaurant+San+Jose+Costa+Rica',
    },
    {
      name: 'Al Mercat',
      distinction: 'recommended',
      cuisine: 'Mediterranean-Costa Rican',
      priceRange: '$$$',
      description:
        'José González\'s San José bistro bringing Mediterranean flavors to Costa Rican ingredients with market-driven creativity.',
      url: 'https://www.google.com/maps/search/Al+Mercat+San+Jose+Costa+Rica',
    },
    {
      name: 'Soda Tapia',
      distinction: 'recommended',
      cuisine: 'Costa Rican Traditional',
      priceRange: '$',
      description:
        'Beloved San José institution open around the clock, serving hearty casados, gallo pinto, and fresh fruit refrescos.',
      url: 'https://www.google.com/maps/search/Soda+Tapia+San+Jose+Costa+Rica',
    },
  ],

  // ─────────────────────────────────────────────
  // CANCÚN — 4 restaurants
  // ─────────────────────────────────────────────
  cancun: [
    {
      name: 'Benazuza',
      distinction: 'recommended',
      cuisine: 'Mexican Molecular',
      priceRange: '$$$$',
      description:
        'Avant-garde dining at the Oasis resort where molecular gastronomy meets Mexican culinary tradition in 30+ courses.',
      url: 'https://www.google.com/maps/search/Benazuza+Cancun',
    },
    {
      name: 'Puerto Madero',
      distinction: 'recommended',
      cuisine: 'Seafood & Steak',
      priceRange: '$$$',
      description:
        'Upscale lagoon-front restaurant in the Hotel Zone known for premium cuts and fresh Caribbean seafood.',
      url: 'https://www.google.com/maps/search/Puerto+Madero+Cancun',
    },
    {
      name: 'Tacos Rigo',
      distinction: 'recommended',
      cuisine: 'Mexican Street Food',
      priceRange: '$',
      description:
        'Legendary Hotel Zone taco stand where locals and visitors queue for perfectly grilled al pastor until late at night.',
      url: 'https://www.google.com/maps/search/Tacos+Rigo+Cancun',
    },
    {
      name: 'Lorenzillo\'s',
      distinction: 'recommended',
      cuisine: 'Mexican Lobster Seafood',
      priceRange: '$$$',
      description:
        'Over-the-lagoon landmark restaurant famous for its live lobster selection and Caribbean seafood since 1983.',
      url: 'https://www.google.com/maps/search/Lorenzillos+Cancun',
    },
  ],

  // ─────────────────────────────────────────────
  // SANTIAGO — 5 restaurants
  // ─────────────────────────────────────────────
  santiago: [
    {
      name: 'Boragó',
      distinction: 'recommended',
      cuisine: 'Chilean Endemic',
      priceRange: '$$$$',
      description:
        'Rodolfo Guzmán\'s trailblazing restaurant explores Chile\'s unique terroir with ingredients found nowhere else on Earth.',
      url: 'https://www.google.com/maps/search/Borago+Santiago+Chile',
    },
    {
      name: 'Ambrosia',
      distinction: 'recommended',
      cuisine: 'French-Chilean',
      priceRange: '$$$$',
      description:
        'Carolina Bazán\'s elegant Providencia restaurant pairs refined French technique with Chilean wines and produce.',
      url: 'https://www.google.com/maps/search/Ambrosia+Bistro+Santiago',
    },
    {
      name: 'De Patio',
      distinction: 'recommended',
      cuisine: 'Chilean Contemporary',
      priceRange: '$$$',
      description:
        'Market-driven restaurant in Barrio Italia celebrating Chilean terroir with an ever-changing seasonal menu.',
      url: 'https://www.google.com/maps/search/De+Patio+Barrio+Italia+Santiago',
    },
    {
      name: 'Liguria',
      distinction: 'recommended',
      cuisine: 'Chilean Traditional',
      priceRange: '$$',
      description:
        'Beloved Santiago institution with multiple locations serving generous Chilean home cooking and cold beers since 1962.',
      url: 'https://www.google.com/maps/search/Liguria+Restaurant+Santiago',
    },
    {
      name: 'La Fuente Alemana',
      distinction: 'recommended',
      cuisine: 'Chilean Sandwiches',
      priceRange: '$',
      description:
        'Iconic counter-service spot where locals devour massive lomito and chacarero sandwiches piled high with toppings.',
      url: 'https://www.google.com/maps/search/La+Fuente+Alemana+Santiago',
    },
  ],

  // ─────────────────────────────────────────────
  // LIMA — 7 restaurants
  // ─────────────────────────────────────────────
  lima: [
    {
      name: 'Central',
      distinction: 'recommended',
      cuisine: 'Peruvian Altitude',
      priceRange: '$$$$',
      description:
        'Virgilio Martínez\'s revolutionary restaurant maps Peru\'s ecosystems from sea level to the Andes in a vertical tasting menu.',
      url: 'https://www.google.com/maps/search/Central+Restaurante+Lima',
    },
    {
      name: 'Maido',
      distinction: 'recommended',
      cuisine: 'Nikkei (Japanese-Peruvian)',
      priceRange: '$$$$',
      description:
        'Mitsuharu Tsumura\'s Nikkei cuisine masterfully blends Japanese technique with Peruvian ingredients, ranked World #1.',
      url: 'https://www.google.com/maps/search/Maido+Restaurant+Lima',
    },
    {
      name: 'Kjolle',
      distinction: 'recommended',
      cuisine: 'Peruvian Contemporary',
      priceRange: '$$$$',
      description:
        'Pía León\'s vibrant restaurant spotlighting Peruvian biodiversity with bold flavors and stunning natural presentations.',
      url: 'https://www.google.com/maps/search/Kjolle+Restaurant+Lima',
    },
    {
      name: 'Mérito',
      distinction: 'recommended',
      cuisine: 'Peruvian-Amazonian',
      priceRange: '$$$',
      description:
        'Juan Luis Martínez brings the flavors of the Amazon and Peruvian jungle to Barranco in creative, shareable plates.',
      url: 'https://www.google.com/maps/search/Merito+Barranco+Lima',
    },
    {
      name: 'Astrid y Gastón',
      distinction: 'recommended',
      cuisine: 'Peruvian Contemporary',
      priceRange: '$$$$',
      description:
        'Gastón Acurio\'s flagship that launched Peru\'s food revolution, set in a stunning 17th-century hacienda in San Isidro.',
      url: 'https://www.google.com/maps/search/Astrid+y+Gaston+Lima',
    },
    {
      name: 'Isolina',
      distinction: 'recommended',
      cuisine: 'Peruvian Creole',
      priceRange: '$$',
      description:
        'José del Castillo\'s Barranco taberna serves hearty Limeño comfort food — seco de res, cau cau, and tacu tacu.',
      url: 'https://www.google.com/maps/search/Isolina+Barranco+Lima',
    },
    {
      name: 'El Mercado',
      distinction: 'recommended',
      cuisine: 'Peruvian Ceviche',
      priceRange: '$$',
      description:
        'Rafael Osterling\'s bustling Miraflores cevichería showcases the freshest Peruvian seafood in a market-like atmosphere.',
      url: 'https://www.google.com/maps/search/El+Mercado+Miraflores+Lima',
    },
  ],

  // ─────────────────────────────────────────────
  // BOGOTÁ — 5 restaurants
  // ─────────────────────────────────────────────
  bogota: [
    {
      name: 'El Chato',
      distinction: 'recommended',
      cuisine: 'Colombian Contemporary',
      priceRange: '$$$',
      description:
        'Álvaro Clavijo\'s Chapinero restaurant celebrates Colombian biodiversity through a seasonal, ingredient-led tasting menu.',
      url: 'https://www.google.com/maps/search/El+Chato+Bogota',
    },
    {
      name: 'Leo',
      distinction: 'recommended',
      cuisine: 'Colombian Ciclo-Biome',
      priceRange: '$$$$',
      description:
        'Leonor Espinosa explores Colombia\'s immense biodiversity through her "ciclo-biome" concept, on Latin America\'s 50 Best.',
      url: 'https://www.google.com/maps/search/Leo+Cocina+y+Cava+Bogota',
    },
    {
      name: 'Harry Sasson',
      distinction: 'recommended',
      cuisine: 'Colombian-International',
      priceRange: '$$$',
      description:
        'One of Bogotá\'s most established fine-dining destinations blending Colombian ingredients with global techniques.',
      url: 'https://www.google.com/maps/search/Harry+Sasson+Bogota',
    },
    {
      name: 'Salvo Patria',
      distinction: 'recommended',
      cuisine: 'Colombian Bistro',
      priceRange: '$$',
      description:
        'Charming Chapinero restaurant with a lovely courtyard, serving creative Colombian dishes and natural wines.',
      url: 'https://www.google.com/maps/search/Salvo+Patria+Bogota',
    },
    {
      name: 'La Puerta Falsa',
      distinction: 'recommended',
      cuisine: 'Colombian Traditional',
      priceRange: '$',
      description:
        'Bogotá\'s oldest restaurant (since 1816) near the cathedral, famous for its tamales, chocolate santafereño, and ajiaco.',
      url: 'https://www.google.com/maps/search/La+Puerta+Falsa+Bogota',
    },
  ],

  // ─────────────────────────────────────────────
  // CAIRO — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  cairo: [
    {
      name: 'Zitouni',
      distinction: 'recommended',
      cuisine: 'Egyptian Contemporary',
      priceRange: '$$$$',
      description:
        'Four Seasons Cairo\'s flagship restaurant serves refined Egyptian and Middle Eastern cuisine with Nile views.',
      url: 'https://www.google.com/maps/search/Zitouni+Four+Seasons+Cairo',
    },
    {
      name: 'Abou El Sid',
      distinction: 'recommended',
      cuisine: 'Egyptian Traditional',
      priceRange: '$$',
      description:
        'Elegant Zamalek restaurant decorated like a vintage Egyptian salon, serving classic dishes like koshari and molokhia.',
      url: 'https://www.google.com/maps/search/Abou+El+Sid+Cairo',
    },
    {
      name: 'Felfela',
      distinction: 'recommended',
      cuisine: 'Egyptian Traditional',
      priceRange: '$',
      description:
        'Cairo institution since 1963 serving beloved Egyptian staples — foul medames, ta\'ameya, and fresh juices downtown.',
      url: 'https://www.google.com/maps/search/Felfela+Cairo',
    },
    {
      name: 'Koshary Abou Tarek',
      distinction: 'recommended',
      cuisine: 'Egyptian Street Food',
      priceRange: '$',
      description:
        'Four-story restaurant dedicated entirely to Egypt\'s national dish of pasta, rice, lentils, and spicy tomato sauce.',
      url: 'https://www.google.com/maps/search/Koshary+Abou+Tarek+Cairo',
    },
  ],

  // ─────────────────────────────────────────────
  // ACCRA — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  accra: [
    {
      name: 'Midunu',
      distinction: 'recommended',
      cuisine: 'Ghanaian Contemporary',
      priceRange: '$$$',
      description:
        'Selassie Atadika\'s New African Cuisine celebrates West African ingredients and culinary heritage with modern presentation.',
      url: 'https://www.google.com/maps/search/Midunu+Accra',
    },
    {
      name: 'Buka',
      distinction: 'recommended',
      cuisine: 'West African',
      priceRange: '$$',
      description:
        'Vibrant Osu restaurant serving elevated Ghanaian and West African dishes in a colorful, art-filled setting.',
      url: 'https://www.google.com/maps/search/Buka+Restaurant+Osu+Accra',
    },
    {
      name: 'Azmera',
      distinction: 'recommended',
      cuisine: 'Pan-African',
      priceRange: '$$',
      description:
        'Stylish Accra restaurant exploring flavors from across the African continent with creative cocktails.',
      url: 'https://www.google.com/maps/search/Azmera+Accra',
    },
  ],

  // ─────────────────────────────────────────────
  // MAURITIUS — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  mauritius: [
    {
      name: 'Le Château de Bel Ombre',
      distinction: 'recommended',
      cuisine: 'French-Mauritian',
      priceRange: '$$$$',
      description:
        'Fine dining in a beautifully restored 19th-century colonial château surrounded by sugar cane fields.',
      url: 'https://www.google.com/maps/search/Chateau+de+Bel+Ombre+Mauritius',
    },
    {
      name: 'La Table du Château',
      distinction: 'recommended',
      cuisine: 'Mauritian Contemporary',
      priceRange: '$$$',
      description:
        'Farm-to-fork dining at Labourdonnais Orchards featuring seasonal Mauritian produce and tropical flavors.',
      url: 'https://www.google.com/maps/search/La+Table+du+Chateau+Labourdonnais+Mauritius',
    },
    {
      name: 'Dholl Puri stalls at Port Louis Central Market',
      distinction: 'recommended',
      cuisine: 'Mauritian Street Food',
      priceRange: '$',
      description:
        'The iconic flatbread filled with split pea curry, rougaille, and chutneys — Mauritius\'s beloved street food staple.',
      url: 'https://www.google.com/maps/search/Port+Louis+Central+Market+Mauritius',
    },
  ],

  // ─────────────────────────────────────────────
  // MELBOURNE — 7 restaurants
  // ─────────────────────────────────────────────
  melbourne: [
    {
      name: 'Attica',
      distinction: '2-star',
      cuisine: 'Australian Contemporary',
      priceRange: '$$$$',
      description:
        'Ben Shewry\'s deeply personal cuisine celebrates the Australian landscape with native ingredients in Ripponlea.',
      url: 'https://guide.michelin.com/en/au/melbourne/restaurant/attica',
    },
    {
      name: 'Vue de Monde',
      distinction: '1-star',
      cuisine: 'Australian Fine Dining',
      priceRange: '$$$$',
      description:
        'Shannon Bennett\'s 55th-floor restaurant at the Rialto delivers dramatic Australian tasting menus with city views.',
      url: 'https://guide.michelin.com/en/au/melbourne/restaurant/vue-de-monde',
    },
    {
      name: 'Flower Drum',
      distinction: '1-star',
      cuisine: 'Cantonese',
      priceRange: '$$$$',
      description:
        'Melbourne\'s most revered Chinese restaurant has served exquisite Cantonese cuisine in Chinatown since 1975.',
      url: 'https://guide.michelin.com/en/au/melbourne/restaurant/flower-drum',
    },
    {
      name: 'Cutler & Co.',
      distinction: '1-star',
      cuisine: 'Australian Modern',
      priceRange: '$$$',
      description:
        'Andrew McConnell\'s flagship Fitzroy restaurant epitomizes Melbourne\'s ingredient-driven dining scene.',
      url: 'https://guide.michelin.com/en/au/melbourne/restaurant/cutler-co',
    },
    {
      name: 'Lûmé',
      distinction: '1-star',
      cuisine: 'Australian Innovative',
      priceRange: '$$$$',
      description:
        'Shaun Quade\'s avant-garde South Melbourne restaurant pushes the boundaries of Australian cuisine with bold creativity.',
      url: 'https://guide.michelin.com/en/au/melbourne/restaurant/lume',
    },
    {
      name: 'Tipo 00',
      distinction: 'bib-gourmand',
      cuisine: 'Italian Pasta',
      priceRange: '$$',
      description:
        'Andreas Papadakis\' CBD pasta bar serving exceptional handmade pasta dishes in a buzzing, no-reservations setting.',
      url: 'https://guide.michelin.com/en/au/melbourne/restaurant/tipo-00',
    },
    {
      name: 'Lune Croissanterie',
      distinction: 'recommended',
      cuisine: 'French Bakery',
      priceRange: '$',
      description:
        'Kate Reid\'s Fitzroy bakery crafts what many consider the world\'s finest croissants using aerospace-inspired precision.',
      url: 'https://www.google.com/maps/search/Lune+Croissanterie+Fitzroy+Melbourne',
    },
  ],

  // ─────────────────────────────────────────────
  // BORA BORA — 3 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  'bora-bora': [
    {
      name: 'Lagoon by Jean-Georges',
      distinction: 'recommended',
      cuisine: 'French-Polynesian',
      priceRange: '$$$$',
      description:
        'Jean-Georges Vongerichten\'s overwater restaurant at the St. Regis with views of Mount Otemanu and the lagoon.',
      url: 'https://www.google.com/maps/search/Lagoon+Jean-Georges+St+Regis+Bora+Bora',
    },
    {
      name: 'Villa Mahana',
      distinction: 'recommended',
      cuisine: 'French Mediterranean',
      priceRange: '$$$$',
      description:
        'Intimate 28-seat restaurant considered the finest on Bora Bora, requiring reservations weeks in advance.',
      url: 'https://www.google.com/maps/search/Villa+Mahana+Bora+Bora',
    },
    {
      name: 'Bloody Mary\'s',
      distinction: 'recommended',
      cuisine: 'Polynesian Seafood',
      priceRange: '$$$',
      description:
        'Legendary sand-floor restaurant where you pick your fresh fish from an ice display and it\'s grilled to order.',
      url: 'https://www.google.com/maps/search/Bloody+Marys+Bora+Bora',
    },
  ],

  // ─────────────────────────────────────────────
  // AUCKLAND — 4 restaurants (no Michelin coverage)
  // ─────────────────────────────────────────────
  auckland: [
    {
      name: 'Pasture',
      distinction: 'recommended',
      cuisine: 'New Zealand Fire Cooking',
      priceRange: '$$$$',
      description:
        'Ed Verner\'s intimate 12-seat counter serves a fire-driven tasting menu using only New Zealand-sourced ingredients.',
      url: 'https://www.google.com/maps/search/Pasture+Restaurant+Auckland',
    },
    {
      name: 'Sidart',
      distinction: 'recommended',
      cuisine: 'Indian-New Zealand Fusion',
      priceRange: '$$$$',
      description:
        'Sid Sahrawat blends Indian culinary heritage with NZ produce in creative tasting menus at this Ponsonby Road gem.',
      url: 'https://www.google.com/maps/search/Sidart+Ponsonby+Auckland',
    },
    {
      name: 'Depot',
      distinction: 'recommended',
      cuisine: 'New Zealand Seafood',
      priceRange: '$$',
      description:
        'Al Brown\'s bustling Federal Street eatery showcasing the best of New Zealand\'s oceans and farms in shared plates.',
      url: 'https://www.google.com/maps/search/Depot+Eatery+Auckland',
    },
    {
      name: 'Ima Cuisine',
      distinction: 'recommended',
      cuisine: 'Middle Eastern',
      priceRange: '$$',
      description:
        'Yael Shochat\'s long-running Fort Street restaurant serves soulful Israeli and Middle Eastern dishes with warmth.',
      url: 'https://www.google.com/maps/search/Ima+Cuisine+Auckland',
    },
  ],
}

// ─────────────────────────────────────────────────────────
// LOCAL FOOD RECS — Street food, casual eats, and local favorites
// ─────────────────────────────────────────────────────────

export const LOCAL_FOOD_RECS: Record<string, LocalFoodRec[]> = {
  tokyo: [
    { name: 'Fuunji', type: 'Casual', dish: 'Tsukemen (dipping ramen)', area: 'Shinjuku', cost: '$8-12' },
    { name: 'Tsukiji Outer Market', type: 'Market', dish: 'Fresh sushi breakfast, tamagoyaki', area: 'Tsukiji', cost: '$5-15' },
    { name: 'Ichiran Ramen', type: 'Casual', dish: 'Tonkotsu ramen in solo booths', area: 'Shibuya', cost: '$10-14' },
    { name: 'Nantsuttei', type: 'Casual', dish: 'Black sesame tantanmen ramen', area: 'Shinjuku', cost: '$8-11' },
  ],

  bangkok: [
    { name: 'Pad Thai Thip Samai', type: 'Street Food', dish: 'Pad thai wrapped in egg crepe', area: 'Phra Nakhon', cost: '$2-4' },
    { name: 'Kuang Heng Pratunam', type: 'Street Food', dish: 'Hainanese chicken rice', area: 'Pratunam', cost: '$1-3' },
    { name: 'Raan Jay Fai (Original)', type: 'Street Food', dish: 'Drunken noodles and crab omelet', area: 'Samran Rat', cost: '$15-40' },
    { name: 'Or Tor Kor Market', type: 'Market', dish: 'Isaan papaya salad, grilled meats, tropical fruit', area: 'Chatuchak', cost: '$3-8' },
  ],

  bali: [
    { name: 'Warung Babi Guling Ibu Oka', type: 'Casual', dish: 'Babi guling (suckling pig) with rice and sambal', area: 'Ubud', cost: '$3-5' },
    { name: 'Nasi Ayam Kedewatan Ibu Mangku', type: 'Street Food', dish: 'Nasi campur with shredded chicken and peanut', area: 'Ubud', cost: '$2-3' },
    { name: 'Warung Mak Beng', type: 'Casual', dish: 'Fried fish with sambal matah and rice', area: 'Sanur', cost: '$3-4' },
    { name: 'Pasar Badung', type: 'Market', dish: 'Jaje laklak rice cakes, fresh tropical fruit', area: 'Denpasar', cost: '$1-3' },
  ],

  seoul: [
    { name: 'Gwangjang Market', type: 'Market', dish: 'Bindaetteok (mung bean pancakes), mayak gimbap', area: 'Jongno', cost: '$3-7' },
    { name: 'Myeongdong Kyoja', type: 'Casual', dish: 'Handmade kalguksu (knife-cut noodle soup)', area: 'Myeongdong', cost: '$7-10' },
    { name: 'Tongin Market', type: 'Market', dish: 'Dosirak (custom lunch box) with brass coins', area: 'Seochon', cost: '$5-8' },
    { name: 'Yeontabal', type: 'Casual', dish: 'Charcoal-grilled samgyeopsal (pork belly)', area: 'Gangnam', cost: '$12-18' },
  ],

  hanoi: [
    { name: 'Pho Gia Truyen Bat Dan', type: 'Street Food', dish: 'Pho bo (beef pho) with rare beef slices', area: 'Old Quarter', cost: '$1-2' },
    { name: 'Bun Cha Dac Kim', type: 'Street Food', dish: 'Bun cha with smoky grilled pork and herbs', area: 'Old Quarter', cost: '$2-3' },
    { name: 'Banh Mi 25', type: 'Street Food', dish: 'Banh mi with pate, pork, and pickled vegetables', area: 'Old Quarter', cost: '$1-2' },
    { name: 'Dong Xuan Market', type: 'Market', dish: 'Xoi (sticky rice) and che (sweet soup)', area: 'Hoan Kiem', cost: '$1-3' },
  ],

  singapore: [
    { name: 'Maxwell Food Centre', type: 'Market', dish: 'Tian Tian chicken rice', area: 'Chinatown', cost: '$3-5' },
    { name: 'Lau Pa Sat', type: 'Market', dish: 'Satay from the Boon Tat Street stalls', area: 'CBD', cost: '$8-15' },
    { name: 'Ah Hock Fried Hokkien Noodles', type: 'Street Food', dish: 'Wok-fried prawn hokkien mee', area: 'Chomp Chomp', cost: '$5-8' },
    { name: '328 Katong Laksa', type: 'Casual', dish: 'Coconut curry laksa with cockles and prawns', area: 'Katong', cost: '$4-6' },
  ],

  kyoto: [
    { name: 'Nishiki Market', type: 'Market', dish: 'Dashimaki tamago, pickles, matcha desserts', area: 'Nakagyo', cost: '$3-10' },
    { name: 'Musubi Cafe', type: 'Casual', dish: 'Creative onigiri with seasonal fillings', area: 'Gion', cost: '$3-5' },
    { name: 'Ippudo Kyoto', type: 'Casual', dish: 'Shiromaru tonkotsu ramen', area: 'Kawaramachi', cost: '$9-12' },
    { name: 'Gion Tokuya', type: 'Café', dish: 'Warabi mochi and matcha parfait', area: 'Gion', cost: '$5-8' },
  ],

  taipei: [
    { name: 'Shilin Night Market', type: 'Market', dish: 'XXL fried chicken cutlet, stinky tofu', area: 'Shilin', cost: '$2-5' },
    { name: 'Yongkang Beef Noodle', type: 'Casual', dish: 'Braised beef noodle soup', area: 'Da\'an', cost: '$6-9' },
    { name: 'Raohe Street Night Market', type: 'Market', dish: 'Black pepper bun, medicinal pork rib soup', area: 'Songshan', cost: '$2-5' },
    { name: 'Fu Hang Dou Jiang', type: 'Casual', dish: 'Shaobing youtiao and warm soy milk breakfast', area: 'Zhongzheng', cost: '$2-4' },
  ],

  'chiang-mai': [
    { name: 'Khao Soi Khun Yai', type: 'Street Food', dish: 'Khao soi with chicken leg in coconut curry', area: 'Old City', cost: '$2-3' },
    { name: 'Warorot Market (Kad Luang)', type: 'Market', dish: 'Sai oua (herb sausage), nam prik ong', area: 'Night Bazaar', cost: '$1-3' },
    { name: 'Cherng Doi Roast Chicken', type: 'Street Food', dish: 'Rotisserie chicken with green chili dipping sauce', area: 'Santitham', cost: '$3-5' },
  ],

  jaipur: [
    { name: 'Rawat Mishthan Bhandar', type: 'Street Food', dish: 'Pyaaz ki kachori with tamarind chutney', area: 'Station Road', cost: '$1-2' },
    { name: 'Tapri Central', type: 'Café', dish: 'Masala chai with bun maska', area: 'C-Scheme', cost: '$1-2' },
    { name: 'Sethi Di Hatti', type: 'Street Food', dish: 'Paneer ghewar and malpua (festive sweets)', area: 'Chandpole Bazaar', cost: '$1-3' },
  ],

  maldives: [
    { name: 'Maafushi Local Café', type: 'Casual', dish: 'Mas huni (tuna, coconut, roshi flatbread) breakfast', area: 'Maafushi Island', cost: '$3-5' },
    { name: 'Male Fish Market', type: 'Market', dish: 'Fresh tuna with rice and rihaakuru (fish paste)', area: 'Male', cost: '$3-6' },
    { name: 'Hot Bite', type: 'Casual', dish: 'Gulha (fried fish dumplings) and short eats', area: 'Male', cost: '$2-4' },
  ],

  colombo: [
    { name: 'Galle Face Green Vendors', type: 'Street Food', dish: 'Isso vade (prawn fritters) by the seafront', area: 'Galle Face', cost: '$1-2' },
    { name: 'Sponge Pudding Shop', type: 'Casual', dish: 'Watalappam (jaggery coconut pudding)', area: 'Pettah', cost: '$1-2' },
    { name: 'Hotel de Pilawoos', type: 'Casual', dish: 'Kottu roti chopped with egg and cheese', area: 'Bambalapitiya', cost: '$2-4' },
  ],

  paris: [
    { name: 'Du Pain et des Idées', type: 'Bakery', dish: 'Pain des amis and escargot pastries', area: 'Canal Saint-Martin', cost: '$3-6' },
    { name: 'L\'As du Fallafel', type: 'Street Food', dish: 'Falafel pita with eggplant and tahini', area: 'Le Marais', cost: '$7-10' },
    { name: 'Marché des Enfants Rouges', type: 'Market', dish: 'Moroccan couscous or Japanese bento', area: 'Le Marais', cost: '$8-14' },
    { name: 'Breizh Café', type: 'Casual', dish: 'Buckwheat galette with egg, ham, and gruyère', area: 'Le Marais', cost: '$10-16' },
  ],

  barcelona: [
    { name: 'La Boqueria Market', type: 'Market', dish: 'Fresh juices, jamón ibérico, grilled seafood stalls', area: 'La Rambla', cost: '$5-15' },
    { name: 'Bar del Pla', type: 'Casual', dish: 'Bikini truffat (truffle ham and cheese toastie)', area: 'Born', cost: '$8-14' },
    { name: 'La Pepita', type: 'Casual', dish: 'Creative open-face sandwiches and vermouth', area: 'Gràcia', cost: '$6-10' },
    { name: 'Xurreria Trebol', type: 'Street Food', dish: 'Churros dipped in thick hot chocolate', area: 'Raval', cost: '$3-5' },
  ],

  lisbon: [
    { name: 'Manteigaria', type: 'Bakery', dish: 'Freshly baked pastéis de nata (custard tarts)', area: 'Chiado', cost: '$1-2' },
    { name: 'Cervejaria Ramiro', type: 'Casual', dish: 'Garlic prawns and prego steak sandwich', area: 'Intendente', cost: '$15-30' },
    { name: 'Mercado da Ribeira (Time Out Market)', type: 'Market', dish: 'Croquettes, bifana sandwiches, pastel de bacalhau', area: 'Cais do Sodré', cost: '$5-12' },
    { name: 'Casa das Bifanas', type: 'Street Food', dish: 'Bifana (garlic pork sandwich) with mustard', area: 'Praça da Figueira', cost: '$3-4' },
  ],

  prague: [
    { name: 'Naše Maso', type: 'Casual', dish: 'Steak tartare on toast and craft beef burgers', area: 'Old Town', cost: '$6-10' },
    { name: 'Havelské Tržiště (Havelske Market)', type: 'Market', dish: 'Trdelník and sausages', area: 'Old Town', cost: '$3-6' },
    { name: 'Kantýna', type: 'Casual', dish: 'Dry-aged beef burger and pork knuckle', area: 'Nové Město', cost: '$8-15' },
    { name: 'Café Savoy', type: 'Café', dish: 'Medovník (honey cake) and Viennese-style coffee', area: 'Malá Strana', cost: '$5-8' },
  ],

  dubrovnik: [
    { name: 'Konoba Dalmatino', type: 'Casual', dish: 'Peka (slow-baked meat or octopus under a bell)', area: 'Old Town', cost: '$15-25' },
    { name: 'Dolce Vita', type: 'Street Food', dish: 'Fresh gelato with local fig and lavender flavors', area: 'Old Town', cost: '$3-5' },
    { name: 'Gundulićeva Poljana Market', type: 'Market', dish: 'Local cheese, olives, and dried figs', area: 'Old Town', cost: '$3-8' },
  ],

  santorini: [
    { name: 'Lucky\'s Souvlaki', type: 'Street Food', dish: 'Gyros pita with hand-cut fries and tzatziki', area: 'Fira', cost: '$4-6' },
    { name: 'Aktaion', type: 'Casual', dish: 'Tomatokeftedes (Santorini tomato fritters)', area: 'Fira', cost: '$8-15' },
    { name: 'Selene Meze', type: 'Casual', dish: 'Fava with capers and local white eggplant', area: 'Pyrgos', cost: '$10-18' },
  ],

  amsterdam: [
    { name: 'Albert Cuyp Market', type: 'Market', dish: 'Fresh stroopwafels and kibbeling (fried fish)', area: 'De Pijp', cost: '$3-7' },
    { name: 'Febo', type: 'Street Food', dish: 'Kroket from the wall (automat)', area: 'Citywide', cost: '$2-4' },
    { name: 'The Pancake Bakery', type: 'Casual', dish: 'Dutch pannenkoeken with bacon and cheese', area: 'Jordaan', cost: '$10-14' },
    { name: 'Winkel 43', type: 'Café', dish: 'Dutch appeltaart with whipped cream', area: 'Jordaan', cost: '$4-6' },
  ],

  rome: [
    { name: 'Supplizio', type: 'Street Food', dish: 'Supplì al telefono (fried rice balls with melted mozzarella)', area: 'Centro Storico', cost: '$3-5' },
    { name: 'Trapizzino', type: 'Street Food', dish: 'Trapizzino stuffed with chicken cacciatore or oxtail', area: 'Testaccio', cost: '$4-6' },
    { name: 'Mercato Testaccio', type: 'Market', dish: 'Porchetta panini and Roman-style pizza al taglio', area: 'Testaccio', cost: '$4-8' },
    { name: 'Antico Forno Roscioli', type: 'Bakery', dish: 'Pizza bianca (airy Roman flatbread) with mortadella', area: 'Campo de\' Fiori', cost: '$3-5' },
  ],

  edinburgh: [
    { name: 'The Piemaker', type: 'Casual', dish: 'Haggis, neeps and tatties pie', area: 'Old Town', cost: '$5-8' },
    { name: 'Oink', type: 'Street Food', dish: 'Pulled hog roast roll with apple sauce and stuffing', area: 'Grassmarket', cost: '$5-7' },
    { name: 'Mums Great Comfort Food', type: 'Casual', dish: 'Sausage and mash with onion gravy', area: 'Old Town', cost: '$8-12' },
  ],

  budapest: [
    { name: 'Great Market Hall (Nagyvásárcsarnok)', type: 'Market', dish: 'Lángos with sour cream and cheese', area: 'District IX', cost: '$3-5' },
    { name: 'Bors GasztroBar', type: 'Casual', dish: 'Artisan soup in bread bowls', area: 'Jewish Quarter', cost: '$4-7' },
    { name: 'Rétesház', type: 'Bakery', dish: 'Hungarian strudel (rétes) with sour cherry or poppy seed', area: 'District I', cost: '$3-5' },
    { name: 'Karaván Street Food', type: 'Street Food', dish: 'Chimney cake (kürtőskalács) and langos', area: 'Jewish Quarter', cost: '$3-6' },
  ],

  'mexico-city': [
    { name: 'Tacos El Vilsito', type: 'Street Food', dish: 'Al pastor tacos from a converted mechanic shop at night', area: 'Narvarte', cost: '$1-3' },
    { name: 'Mercado de Coyoacán', type: 'Market', dish: 'Tostadas de tinga and fresh agua de jamaica', area: 'Coyoacán', cost: '$2-5' },
    { name: 'Los Cochinitos', type: 'Casual', dish: 'Cochinita pibil tacos and panuchos', area: 'Condesa', cost: '$3-6' },
    { name: 'Churrería El Moro', type: 'Café', dish: 'Churros with hot chocolate since 1935', area: 'Centro Histórico', cost: '$3-5' },
  ],

  tulum: [
    { name: 'Taquería Honorio', type: 'Street Food', dish: 'Cochinita pibil and chaya tacos', area: 'Tulum Pueblo', cost: '$1-3' },
    { name: 'Antojitos La Chiapaneca', type: 'Street Food', dish: 'Empanadas and salbutes', area: 'Tulum Pueblo', cost: '$1-3' },
    { name: 'Burrito Amor', type: 'Casual', dish: 'Breakfast burritos with local ingredients', area: 'Tulum Pueblo', cost: '$4-7' },
  ],

  vancouver: [
    { name: 'Japadog', type: 'Street Food', dish: 'Terimayo hot dog with seaweed and bonito flakes', area: 'Downtown', cost: '$6-9' },
    { name: 'Granville Island Public Market', type: 'Market', dish: 'Oysters, smoked salmon, and Lee\'s donuts', area: 'Granville Island', cost: '$5-15' },
    { name: 'Phnom Penh', type: 'Casual', dish: 'Butter beef and garlic-fried chicken wings', area: 'Chinatown', cost: '$10-15' },
    { name: 'Danbo Ramen', type: 'Casual', dish: 'Fukuoka-style tonkotsu ramen', area: 'Kitsilano', cost: '$12-15' },
  ],

  banff: [
    { name: 'Wild Flour Bakery', type: 'Bakery', dish: 'Bear claw pastry and breakfast sandwiches', area: 'Downtown Banff', cost: '$5-9' },
    { name: 'Eddie Burger + Bar', type: 'Casual', dish: 'Bison burger with truffle fries', area: 'Downtown Banff', cost: '$12-18' },
    { name: 'Block Kitchen + Bar', type: 'Casual', dish: 'Elk poutine and craft cocktails', area: 'Downtown Banff', cost: '$10-16' },
  ],

  havana: [
    { name: 'El Aljibe', type: 'Casual', dish: 'Pollo asado (roast chicken) with black beans and plantains', area: 'Miramar', cost: '$8-12' },
    { name: 'Coppelia Ice Cream', type: 'Casual', dish: 'Helado (Cuban ice cream) — join the local line', area: 'Vedado', cost: '$1-2' },
    { name: 'Street Pizza Vendors', type: 'Street Food', dish: 'Peso pizza (cheese pizza from sidewalk windows)', area: 'Habana Vieja', cost: '$0.50-1' },
  ],

  'san-juan': [
    { name: 'Guavate Lechoneras', type: 'Street Food', dish: 'Lechón asado (spit-roasted whole pig) with mofongo', area: 'Guavate (Cayey)', cost: '$8-15' },
    { name: 'Piñones Food Stalls', type: 'Street Food', dish: 'Alcapurrias and bacalaítos fritos', area: 'Piñones', cost: '$2-5' },
    { name: 'La Casita Blanca', type: 'Casual', dish: 'Pernil, arroz con gandules, and tostones', area: 'Santurce', cost: '$8-12' },
  ],

  'buenos-aires': [
    { name: 'El Sanjuanino', type: 'Casual', dish: 'Empanadas (beef, humita) and locro stew', area: 'Recoleta', cost: '$3-6' },
    { name: 'Café Tortoni', type: 'Café', dish: 'Churros with dulce de leche and café con leche', area: 'Avenida de Mayo', cost: '$4-7' },
    { name: 'Pizzería Güerrín', type: 'Casual', dish: 'Pizza de muzzarella a la piedra (standing at the bar)', area: 'Corrientes', cost: '$4-7' },
    { name: 'La Mezzetta', type: 'Casual', dish: 'Fugazza with cheese (thick onion pizza)', area: 'Chacarita', cost: '$4-6' },
  ],

  cartagena: [
    { name: 'Plaza de la Trinidad Vendors', type: 'Street Food', dish: 'Arepas de huevo (egg-stuffed fried arepas)', area: 'Getsemaní', cost: '$1-2' },
    { name: 'Bazurto Market', type: 'Market', dish: 'Fried fish with coconut rice and patacones', area: 'Bazurto', cost: '$2-5' },
    { name: 'La Palettería', type: 'Street Food', dish: 'Colombian-style fruit paletas (popsicles)', area: 'Old Town', cost: '$2-3' },
  ],

  cusco: [
    { name: 'Mercado San Pedro', type: 'Market', dish: 'Fresh fruit juices and ceviche at Juanita stalls', area: 'Centro', cost: '$1-3' },
    { name: 'Jack\'s Café', type: 'Casual', dish: 'Aji de gallina and hearty breakfast plates', area: 'Centro', cost: '$5-8' },
    { name: 'La Chomba', type: 'Casual', dish: 'Menú del día — multi-course local lunch for locals', area: 'San Blas', cost: '$2-4' },
  ],

  'rio-de-janeiro': [
    { name: 'Bar do Mineiro', type: 'Casual', dish: 'Feijoada and pastel de queijo with cold chopp', area: 'Santa Teresa', cost: '$5-10' },
    { name: 'Confeitaria Colombo', type: 'Café', dish: 'Quindim (coconut egg tart) and café com leite', area: 'Centro', cost: '$5-8' },
    { name: 'Cervantes', type: 'Casual', dish: 'Steak and pineapple sandwich at 3am', area: 'Copacabana', cost: '$6-10' },
    { name: 'Feira de São Cristóvão', type: 'Market', dish: 'Carne de sol with queijo coalho and tapioca', area: 'São Cristóvão', cost: '$4-8' },
  ],

  medellin: [
    { name: 'Mercado del Río', type: 'Market', dish: 'Bandeja paisa and empanadas from various stalls', area: 'El Poblado', cost: '$4-8' },
    { name: 'Mondongos', type: 'Casual', dish: 'Bandeja paisa with mondongo (tripe soup)', area: 'Centro', cost: '$5-8' },
    { name: 'Hatoviejo', type: 'Casual', dish: 'Cazuela de frijoles (bean casserole) with chicharrón', area: 'El Poblado', cost: '$6-10' },
  ],

  marrakech: [
    { name: 'Jemaa el-Fna Night Stalls', type: 'Street Food', dish: 'Lamb merguez, snail broth, and fresh orange juice', area: 'Medina', cost: '$2-5' },
    { name: 'Haj Mustapha', type: 'Street Food', dish: 'Tangia (slow-cooked lamb in clay pot)', area: 'Medina', cost: '$3-6' },
    { name: 'Café Clock', type: 'Café', dish: 'Camel burger and Moroccan mint tea', area: 'Kasbah', cost: '$5-8' },
    { name: 'Bakeries of the Medina', type: 'Bakery', dish: 'Msemen (layered flatbread) and baghrir (honeycomb pancakes)', area: 'Medina', cost: '$0.50-2' },
  ],

  'cape-town': [
    { name: 'Old Biscuit Mill Neighbourgoods Market', type: 'Market', dish: 'Boerewors rolls, Cape Malay curry, craft beer', area: 'Woodstock', cost: '$5-10' },
    { name: 'Mzansi', type: 'Casual', dish: 'Bunny chow (curry in a bread loaf)', area: 'City Centre', cost: '$4-7' },
    { name: 'Fish on the Rocks', type: 'Casual', dish: 'Fish and chips with a view of Hout Bay', area: 'Hout Bay', cost: '$5-8' },
  ],

  zanzibar: [
    { name: 'Forodhani Gardens Night Market', type: 'Street Food', dish: 'Zanzibar pizza, urojo soup, grilled octopus', area: 'Stone Town', cost: '$2-5' },
    { name: 'Lukmaan Restaurant', type: 'Casual', dish: 'Pilau rice with coconut fish curry', area: 'Stone Town', cost: '$3-5' },
    { name: 'Darajani Market', type: 'Market', dish: 'Fresh tropical fruit, sugar cane juice, spices', area: 'Stone Town', cost: '$1-3' },
  ],

  nairobi: [
    { name: 'K\'osewe Ranalo Foods', type: 'Casual', dish: 'Tilapia with ugali and sukuma wiki', area: 'CBD', cost: '$4-7' },
    { name: 'Kenyatta Market', type: 'Market', dish: 'Nyama choma (grilled goat) with kachumbari', area: 'Kenyatta Market', cost: '$4-8' },
    { name: 'Mama Oliech', type: 'Casual', dish: 'Deep-fried tilapia with sautéed greens', area: 'Kilimani', cost: '$4-6' },
  ],

  sydney: [
    { name: 'Bourke Street Bakery', type: 'Bakery', dish: 'Pork and fennel sausage roll', area: 'Surry Hills', cost: '$5-8' },
    { name: 'Messina', type: 'Casual', dish: 'Salted caramel and white chocolate gelato', area: 'Surry Hills', cost: '$5-8' },
    { name: 'Golden Century (or successor)', type: 'Casual', dish: 'XO pippies and live lobster with ginger and shallots', area: 'Chinatown', cost: '$15-30' },
    { name: 'Harry\'s Café de Wheels', type: 'Street Food', dish: 'Tiger pie (meat pie with mushy peas and gravy)', area: 'Woolloomooloo', cost: '$6-9' },
  ],

  queenstown: [
    { name: 'Fergburger', type: 'Casual', dish: 'Big Al (beef, cheese, bacon) burger', area: 'Town Centre', cost: '$10-15' },
    { name: 'Mrs Ferg Gelateria', type: 'Casual', dish: 'Hokey pokey and feijoa gelato', area: 'Town Centre', cost: '$5-8' },
    { name: 'Patagonia Chocolates', type: 'Café', dish: 'Hot chocolate and handmade truffles', area: 'Lakefront', cost: '$5-10' },
  ],

  fiji: [
    { name: 'Suva Municipal Market', type: 'Market', dish: 'Kokoda (raw fish in coconut cream) and cassava', area: 'Suva', cost: '$3-5' },
    { name: 'Local Roadside Stalls', type: 'Street Food', dish: 'Roti parcels with curry filling', area: 'Nadi', cost: '$2-4' },
    { name: 'Tiko\'s Floating Restaurant', type: 'Casual', dish: 'Lovo-style fish with dalo leaves', area: 'Suva', cost: '$8-12' },
  ],

  beijing: [
    { name: 'Wangfujing Snack Street', type: 'Street Food', dish: 'Jianbing (savory crepe) and lamb skewers', area: 'Wangfujing', cost: '$2-5' },
    { name: 'Siji Minfu', type: 'Casual', dish: 'Peking duck at half the price of the famous spots', area: 'Qianmen', cost: '$15-25' },
    { name: 'Gui Street (Ghost Street)', type: 'Street Food', dish: 'Mala xiao longxia (spicy crayfish) and lamb spine', area: 'Dongzhimen', cost: '$10-20' },
    { name: 'Jing-A Taproom', type: 'Casual', dish: 'Craft beer and Beijing street food pairings', area: 'Sanlitun', cost: '$8-15' },
  ],

  shanghai: [
    { name: 'Nanxiang Steamed Bun Restaurant', type: 'Casual', dish: 'Xiao long bao at the original Yu Garden location', area: 'Old City', cost: '$5-8' },
    { name: 'Jian Guo 328', type: 'Casual', dish: 'Hong shao rou (red-braised pork belly) and hairy crab in season', area: 'Former French Concession', cost: '$8-15' },
    { name: 'Wu Fang Zhai', type: 'Street Food', dish: 'Zongzi (sticky rice dumplings wrapped in bamboo leaf)', area: 'Citywide', cost: '$1-3' },
    { name: 'Chun', type: 'Casual', dish: 'Scallion oil noodles and smoked fish', area: 'Jing\'an', cost: '$3-6' },
  ],

  'hong-kong': [
    { name: 'Mak\'s Noodle', type: 'Casual', dish: 'Sui kow (shrimp dumpling) noodle soup', area: 'Central', cost: '$5-8' },
    { name: 'Kau Kee', type: 'Casual', dish: 'Beef brisket curry noodles', area: 'Central', cost: '$5-8' },
    { name: 'Australia Dairy Company', type: 'Casual', dish: 'Scrambled egg toast and steamed milk pudding', area: 'Jordan', cost: '$3-6' },
    { name: 'Mammy Pancake', type: 'Street Food', dish: 'Egg waffles (gai daan jai) crispy and hot', area: 'Tsim Sha Tsui', cost: '$2-3' },
  ],

  phuket: [
    { name: 'Lock Tien', type: 'Street Food', dish: 'Hokkien mee and oh aew (shaved ice dessert)', area: 'Phuket Old Town', cost: '$2-4' },
    { name: 'Raya Restaurant', type: 'Casual', dish: 'Crab yellow curry and moo hong (braised pork)', area: 'Phuket Old Town', cost: '$5-10' },
    { name: 'One Chun Café', type: 'Casual', dish: 'Mee hokkien and local Phuketian pastries', area: 'Phuket Old Town', cost: '$3-6' },
  ],

  'siem-reap': [
    { name: 'Psar Chaa (Old Market)', type: 'Market', dish: 'Lok lak (stir-fried beef) and fresh fruit shakes', area: 'Old Market', cost: '$2-4' },
    { name: 'Khmer BBQ Restaurants', type: 'Casual', dish: 'Phnom Penh-style BBQ grill with broth hotpot', area: 'Pub Street', cost: '$5-8' },
    { name: 'Sister Srey Café', type: 'Café', dish: 'Khmer iced coffee and banana bread', area: 'River Road', cost: '$2-4' },
  ],

  'luang-prabang': [
    { name: 'Morning Market (Talat Sao)', type: 'Market', dish: 'Khao piak sen (Lao rice noodle soup)', area: 'Old Town', cost: '$1-2' },
    { name: 'Night Food Stalls', type: 'Street Food', dish: 'Grilled Mekong fish and sticky rice', area: 'Night Market', cost: '$2-4' },
    { name: 'Joma Bakery Café', type: 'Café', dish: 'Lao coffee and fresh croissants', area: 'Riverside', cost: '$3-5' },
  ],

  'kuala-lumpur': [
    { name: 'Nasi Lemak Tanglin', type: 'Street Food', dish: 'Nasi lemak with sambal, egg, anchovies, and peanuts', area: 'Tanglin', cost: '$1-3' },
    { name: 'Jalan Alor Hawker Street', type: 'Street Food', dish: 'Char kway teow, satay, and grilled chicken wings', area: 'Bukit Bintang', cost: '$3-8' },
    { name: 'Village Park Restaurant', type: 'Casual', dish: 'Nasi lemak ayam goreng (fried chicken)', area: 'Damansara Uptown', cost: '$2-5' },
    { name: 'Yut Kee', type: 'Casual', dish: 'Hainanese chicken chop and roti babi', area: 'Chinatown', cost: '$3-6' },
  ],

  kathmandu: [
    { name: 'Thakali Kitchen', type: 'Casual', dish: 'Thakali thali set (daal bhat with 8+ sides)', area: 'Thamel', cost: '$3-5' },
    { name: 'Newari Bhoj restaurants', type: 'Casual', dish: 'Newari khaja set with choila (spiced grilled meat)', area: 'Bhaktapur', cost: '$3-6' },
    { name: 'Asan Bazaar vendors', type: 'Street Food', dish: 'Chatamari (Newari rice crepe) and sel roti', area: 'Asan', cost: '$1-2' },
  ],

  istanbul: [
    { name: 'Dürümzade', type: 'Street Food', dish: 'Lavash-wrapped adana kebab dürüm', area: 'Beyoğlu', cost: '$4-6' },
    { name: 'Karaköy Güllüoğlu', type: 'Bakery', dish: 'Pistachio baklava — crispy layers drenched in butter', area: 'Karaköy', cost: '$3-6' },
    { name: 'Kadıköy Fish Market', type: 'Market', dish: 'Balık ekmek (grilled fish sandwich) and midye dolma', area: 'Kadıköy', cost: '$3-7' },
    { name: 'Tarihi Kuru Fasülyeci', type: 'Casual', dish: 'Kuru fasulye (white bean stew) with pilav', area: 'Sultanahmet', cost: '$3-5' },
  ],

  vienna: [
    { name: 'Bitzinger Würstelstand', type: 'Street Food', dish: 'Käsekrainer (cheese-filled sausage) at the Albertina', area: 'Albertinaplatz', cost: '$4-6' },
    { name: 'Naschmarkt', type: 'Market', dish: 'Falafel, hummus, and Austrian wine by the glass', area: 'Wienzeile', cost: '$5-12' },
    { name: 'Demel', type: 'Café', dish: 'Sachertorte and melange coffee', area: 'Innere Stadt', cost: '$6-10' },
    { name: 'Schweizerhaus', type: 'Casual', dish: 'Stelze (crispy pork knuckle) with Budvar beer', area: 'Prater', cost: '$10-15' },
  ],

  copenhagen: [
    { name: 'Torvehallerne', type: 'Market', dish: 'Smørrebrød, fresh oysters, and Danish pastries', area: 'Israels Plads', cost: '$8-18' },
    { name: 'Papirøen (Reffen)', type: 'Street Food', dish: 'Flæskestegssandwich (crispy pork belly sandwich)', area: 'Refshalevej', cost: '$8-14' },
    { name: 'Grød', type: 'Casual', dish: 'Gourmet porridge bowls with seasonal toppings', area: 'Jægersborggade', cost: '$7-10' },
    { name: 'Lagkagehuset', type: 'Bakery', dish: 'Kanelsnurrer (cinnamon swirl) and rugbrød', area: 'Citywide', cost: '$3-6' },
  ],

  reykjavik: [
    { name: 'Bæjarins Beztu Pylsur', type: 'Street Food', dish: 'Icelandic lamb hot dog with everything', area: 'Harbor', cost: '$4-5' },
    { name: 'Hlöllabátar', type: 'Casual', dish: 'Icelandic sub sandwich loaded with toppings', area: 'Laugavegur', cost: '$8-12' },
    { name: 'Sandholt Bakery', type: 'Bakery', dish: 'Rye bread and kleinur (fried dough twists)', area: 'Laugavegur', cost: '$4-8' },
  ],

  athens: [
    { name: 'Kostas Souvlaki', type: 'Street Food', dish: 'Pork souvlaki pita with tomato, onion, and tzatziki', area: 'Syntagma', cost: '$3-4' },
    { name: 'Thanasis', type: 'Casual', dish: 'Kebab platter with grilled pita bread', area: 'Monastiraki', cost: '$6-10' },
    { name: 'Varvakios Market (Athens Central Market)', type: 'Market', dish: 'Fish soup and grilled octopus at market tavernas', area: 'Athinas Street', cost: '$5-10' },
    { name: 'Lukumades', type: 'Street Food', dish: 'Loukoumades (fried dough balls) with honey and cinnamon', area: 'Aiolou', cost: '$4-6' },
  ],

  'new-orleans': [
    { name: 'Café du Monde', type: 'Café', dish: 'Beignets with powdered sugar and chicory café au lait', area: 'French Quarter', cost: '$5-8' },
    { name: 'Dat Dog', type: 'Casual', dish: 'Crawfish sausage dog with remoulade', area: 'Frenchmen Street', cost: '$7-10' },
    { name: 'Willie Mae\'s Scotch House', type: 'Casual', dish: 'Fried chicken — America\'s best, per many critics', area: 'Treme', cost: '$12-18' },
    { name: 'Parkway Bakery & Tavern', type: 'Casual', dish: 'Roast beef po-boy dressed with debris gravy', area: 'Mid-City', cost: '$10-14' },
  ],

  'costa-rica': [
    { name: 'Mercado Central', type: 'Market', dish: 'Casado (rice, beans, plantain, salad, and protein)', area: 'San José', cost: '$4-6' },
    { name: 'Soda Típica', type: 'Casual', dish: 'Gallo pinto with Lizano salsa and fried egg', area: 'Citywide', cost: '$3-5' },
    { name: 'Marcos Pollo', type: 'Casual', dish: 'Pollo a la leña (wood-fire roasted chicken) with chimichurri', area: 'San José', cost: '$5-8' },
  ],

  cancun: [
    { name: 'Parque de las Palapas', type: 'Street Food', dish: 'Marquesitas (crispy Yucatecan crepes) with Nutella and cheese', area: 'Downtown', cost: '$1-3' },
    { name: 'El Fogón', type: 'Casual', dish: 'Al pastor tacos and poc chuc', area: 'Downtown', cost: '$2-5' },
    { name: 'Mercado 28', type: 'Market', dish: 'Cochinita pibil tacos and fresh ceviche', area: 'Downtown', cost: '$3-6' },
  ],

  santiago: [
    { name: 'Mercado Central', type: 'Market', dish: 'Caldillo de congrio (conger eel soup) and paila marina', area: 'Centro', cost: '$8-15' },
    { name: 'Fuente Alemana', type: 'Casual', dish: 'Lomito italiano (steak sandwich with avocado, tomato, mayo)', area: 'Providencia', cost: '$5-8' },
    { name: 'Empanadas Zunino', type: 'Street Food', dish: 'Empanada de pino (beef, onion, olive, egg)', area: 'Mercado Central', cost: '$2-3' },
    { name: 'Dominó', type: 'Casual', dish: 'Completo (Chilean hot dog with avocado and sauerkraut)', area: 'Centro', cost: '$2-4' },
  ],

  lima: [
    { name: 'Mercado de Surquillo', type: 'Market', dish: 'Fresh ceviche and chicharrón de calamar', area: 'Surquillo', cost: '$3-7' },
    { name: 'La Lucha Sanguchería', type: 'Casual', dish: 'Chicharrón sandwich with salsa criolla', area: 'Miraflores', cost: '$4-6' },
    { name: 'Tanta', type: 'Casual', dish: 'Aji de gallina and lomo saltado', area: 'Miraflores', cost: '$8-14' },
    { name: 'Anticuchos de la Tía Grimanesa', type: 'Street Food', dish: 'Anticuchos (grilled beef heart skewers) with corn', area: 'Miraflores', cost: '$3-5' },
  ],

  bogota: [
    { name: 'La Puerta Falsa', type: 'Casual', dish: 'Tamales and chocolate santafereño with cheese', area: 'La Candelaria', cost: '$2-4' },
    { name: 'Andrés Carne de Res', type: 'Casual', dish: 'Carne oreada and arepas in a wild party atmosphere', area: 'Chía (outskirts)', cost: '$10-20' },
    { name: 'Paloquemao Market', type: 'Market', dish: 'Exotic fruits (lulo, guanabana) and fresh juices', area: 'Paloquemao', cost: '$2-5' },
    { name: 'Mi Tolima', type: 'Casual', dish: 'Lechona tolimense (stuffed roast pig with rice)', area: 'Various', cost: '$4-7' },
  ],

  cairo: [
    { name: 'Koshary Abou Tarek', type: 'Casual', dish: 'Koshary (pasta, rice, lentils, spicy tomato sauce)', area: 'Downtown', cost: '$1-3' },
    { name: 'Felfela', type: 'Casual', dish: 'Foul medames and ta\'ameya (falafel) platter', area: 'Downtown', cost: '$2-4' },
    { name: 'Zooba', type: 'Casual', dish: 'Modern Egyptian street food — hawawshi and fiteer', area: 'Zamalek', cost: '$3-6' },
    { name: 'Kazaz', type: 'Street Food', dish: 'Liver and sausage sandwiches (kebda)', area: 'Downtown', cost: '$1-2' },
  ],

  accra: [
    { name: 'Osu Night Market', type: 'Street Food', dish: 'Grilled tilapia with banku and pepper sauce', area: 'Osu', cost: '$3-5' },
    { name: 'Auntie Muni\'s Waakye', type: 'Street Food', dish: 'Waakye (rice and beans) with shito pepper and fried fish', area: 'Labone', cost: '$2-4' },
    { name: 'Papaye', type: 'Casual', dish: 'Fried rice with grilled chicken — Ghana\'s fast food icon', area: 'Citywide', cost: '$3-5' },
  ],

  mauritius: [
    { name: 'Dholl Puri Vendors (Port Louis)', type: 'Street Food', dish: 'Dholl puri flatbread with split pea filling and rougaille', area: 'Port Louis', cost: '$0.50-1' },
    { name: 'Chez Ram', type: 'Street Food', dish: 'Gateaux piments (chili fritters) and samosas', area: 'Port Louis', cost: '$0.50-2' },
    { name: 'La Bonne Chute', type: 'Casual', dish: 'Fried noodles (mine frit) and bouillon poisson', area: 'Northern Mauritius', cost: '$5-8' },
  ],

  melbourne: [
    { name: 'Queen Victoria Market', type: 'Market', dish: 'Bratwurst sandwich, doughnuts, and fresh oysters', area: 'CBD', cost: '$5-12' },
    { name: 'Lune Croissanterie', type: 'Bakery', dish: 'Twice-baked almond croissant', area: 'Fitzroy', cost: '$6-9' },
    { name: 'Laksa King', type: 'Casual', dish: 'Malaysian laksa with tofu puffs and cockles', area: 'Flemington', cost: '$10-14' },
    { name: 'N. Lee Bakery', type: 'Bakery', dish: 'Vietnamese pork roll (banh mi)', area: 'Richmond', cost: '$5-7' },
  ],

  'bora-bora': [
    { name: 'Roulotte (Food Trucks) Vaitape', type: 'Street Food', dish: 'Poisson cru (Polynesian raw fish in coconut milk)', area: 'Vaitape', cost: '$8-12' },
    { name: 'Snack Matira', type: 'Casual', dish: 'Mahimahi burger with tropical salad', area: 'Matira Beach', cost: '$10-15' },
    { name: 'Aloe Café', type: 'Café', dish: 'French crêpes and fresh tropical juice', area: 'Vaitape', cost: '$6-10' },
  ],

  auckland: [
    { name: 'Ponsonby Road Eateries', type: 'Street Food', dish: 'Meat pie from a classic bakery', area: 'Ponsonby', cost: '$5-7' },
    { name: 'Auckland Fish Market', type: 'Market', dish: 'Fresh oysters and fish and chips', area: 'Wynyard Quarter', cost: '$8-15' },
    { name: 'Satya South Indian', type: 'Casual', dish: 'Dosa and thali plates', area: 'Sandringham', cost: '$8-14' },
    { name: 'Lord of the Fries', type: 'Street Food', dish: 'Loaded fries with various international sauces', area: 'CBD', cost: '$5-8' },
  ],
}
