export interface MichelinRestaurant {
  name: string
  distinction: '3-star' | '2-star' | '1-star' | 'bib-gourmand' | 'recommended'
  cuisine: string
  priceRange: string
  description: string
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
    },
    {
      name: 'Ryugin',
      distinction: '3-star',
      cuisine: 'Japanese Innovative',
      priceRange: '$$$$',
      description:
        'Seiji Yamamoto reinterprets traditional Japanese cuisine through cutting-edge techniques and dramatic multi-course presentations.',
    },
    {
      name: 'Quintessence',
      distinction: '3-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Shuzo Kishida crafts refined French cuisine using the finest Japanese seasonal ingredients in an intimate setting.',
    },
    {
      name: 'Sazenka',
      distinction: '3-star',
      cuisine: 'Chinese Innovative',
      priceRange: '$$$$',
      description:
        'A groundbreaking restaurant that reimagines Chinese cuisine with Japanese sensibility and impeccable seasonal produce.',
    },
    {
      name: 'PRISMA',
      distinction: '2-star',
      cuisine: 'Italian Contemporary',
      priceRange: '$$$$',
      description:
        'Modern Italian dining that harmonizes Italian technique with the purity of Japanese ingredients in a stylish space.',
    },
    {
      name: 'Florilège',
      distinction: '2-star',
      cuisine: 'French Innovative',
      priceRange: '$$$$',
      description:
        'Chef Hiroyasu Kawate presents sustainability-driven French cuisine with a Japanese twist at an open counter.',
    },
    {
      name: 'Narisawa',
      distinction: '2-star',
      cuisine: 'Japanese Innovative',
      priceRange: '$$$$',
      description:
        'Chef Yoshihiro Narisawa\'s "innovative satoyama cuisine" celebrates Japan\'s forests and seasons in every dish.',
    },
    {
      name: 'Sézanne',
      distinction: '2-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Daniel Calvert delivers exquisite French cuisine at the Four Seasons, named among the World\'s 50 Best Restaurants.',
    },
    {
      name: 'Afuri',
      distinction: 'bib-gourmand',
      cuisine: 'Ramen',
      priceRange: '$',
      description:
        'Famous for its signature yuzu shio ramen made with spring water from Mount Afuri and a delicate citrus-infused broth.',
    },
    {
      name: 'Tsuta',
      distinction: 'bib-gourmand',
      cuisine: 'Ramen',
      priceRange: '$',
      description:
        'The first ramen shop to receive a Michelin star, known for its truffle-accented shoyu soba with handmade noodles.',
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
    },
    {
      name: 'Sorn',
      distinction: '2-star',
      cuisine: 'Thai Southern',
      priceRange: '$$$$',
      description:
        'Deeply researched southern Thai recipes made with rare heirloom ingredients sourced from small village producers.',
    },
    {
      name: 'Le Du',
      distinction: '2-star',
      cuisine: 'Thai Contemporary',
      priceRange: '$$$',
      description:
        'Chef Ton presents modern interpretations of Thai cuisine using seasonal local ingredients in tasting menus.',
    },
    {
      name: 'Nusara',
      distinction: '1-star',
      cuisine: 'Thai Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Thitid "Ton" Tassanakajohn\'s upscale Thai restaurant celebrating regional flavors through refined technique.',
    },
    {
      name: 'Sühring',
      distinction: '1-star',
      cuisine: 'German Contemporary',
      priceRange: '$$$$',
      description:
        'Twin chefs Thomas and Mathias Sühring reinterpret German culinary heritage with Thai-sourced produce in a garden villa.',
    },
    {
      name: 'Potong',
      distinction: '1-star',
      cuisine: 'Thai-Chinese Fusion',
      priceRange: '$$$',
      description:
        'Set in a century-old Chinatown shophouse, blending Thai and Chinese culinary traditions in inventive tasting menus.',
    },
    {
      name: 'Jay Fai',
      distinction: '1-star',
      cuisine: 'Thai Street Food',
      priceRange: '$$',
      description:
        'Legendary goggle-wearing street cook famous for her perfectly crispy crab omelet and drunken noodles cooked over charcoal.',
    },
    {
      name: 'Baan Phadthai',
      distinction: 'bib-gourmand',
      cuisine: 'Thai',
      priceRange: '$',
      description:
        'Elevated pad thai served in a charming traditional house, using premium river prawns and a secret family recipe.',
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
    },
    {
      name: 'Mozaic',
      distinction: 'recommended',
      cuisine: 'French-Indonesian Fusion',
      priceRange: '$$$$',
      description:
        'Chef Chris Salans blends French haute cuisine technique with Balinese spices and tropical ingredients in a garden setting.',
    },
    {
      name: 'Apéritif',
      distinction: 'recommended',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'Grand colonial-style restaurant at the Viceroy offering refined European cuisine with Southeast Asian inflections.',
    },
    {
      name: 'Hujan Locale',
      distinction: 'recommended',
      cuisine: 'Indonesian Regional',
      priceRange: '$$',
      description:
        'Will Meyrick celebrates lesser-known Indonesian regional dishes with bold flavors in a relaxed Ubud setting.',
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
    },
    {
      name: 'Onjium',
      distinction: '1-star',
      cuisine: 'Korean Traditional',
      priceRange: '$$$$',
      description:
        'A research-driven restaurant reviving ancient Korean royal court recipes with meticulous historical authenticity.',
    },
    {
      name: 'Mingles',
      distinction: '1-star',
      cuisine: 'Korean Innovative',
      priceRange: '$$$$',
      description:
        'Chef Mingoo Kang artfully blends Korean fermentation traditions with global culinary techniques in seasonal menus.',
    },
    {
      name: 'Jungsik',
      distinction: '1-star',
      cuisine: 'Korean Contemporary',
      priceRange: '$$$$',
      description:
        'Modern Korean fine dining that reimagines traditional dishes like bibimbap with contemporary plating and technique.',
    },
    {
      name: 'La Yeon',
      distinction: '1-star',
      cuisine: 'Korean Traditional',
      priceRange: '$$$$',
      description:
        'Elegant hansang-style Korean dining at The Shilla Seoul with panoramic city views and impeccable service.',
    },
    {
      name: 'Kwonsooksoo',
      distinction: '1-star',
      cuisine: 'Korean Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Kwon Woo-joong serves seasonal Korean tasting menus that honor tradition while embracing modern expression.',
    },
    {
      name: 'Mapo Ok',
      distinction: 'bib-gourmand',
      cuisine: 'Korean Comfort',
      priceRange: '$',
      description:
        'Beloved local institution serving exceptional seolleongtang — milky ox bone soup simmered for over 20 hours.',
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
    },
    {
      name: 'Tầm Vị',
      distinction: 'bib-gourmand',
      cuisine: 'Vietnamese',
      priceRange: '$$',
      description:
        'Soulful Vietnamese home cooking elevated with market-fresh ingredients and deep family recipes in a cozy space.',
    },
    {
      name: 'Bún Chả Hương Liên',
      distinction: 'recommended',
      cuisine: 'Vietnamese Street Food',
      priceRange: '$',
      description:
        'Famous as the "Obama bún chả" spot, serving smoky grilled pork patties with fresh herbs and dipping broth.',
    },
    {
      name: 'Phở Thìn',
      distinction: 'recommended',
      cuisine: 'Vietnamese',
      priceRange: '$',
      description:
        'Iconic Hanoi pho shop where the beef is seared in a wok before joining the deeply aromatic bone broth.',
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
    },
    {
      name: 'Odette',
      distinction: '3-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Julien Royer\'s poetic cuisine at the National Gallery draws on Provençal roots with Asian-sourced ingredients.',
    },
    {
      name: 'Zén',
      distinction: '3-star',
      cuisine: 'Scandinavian Innovative',
      priceRange: '$$$$',
      description:
        'Björn Frantzén\'s Singapore outpost delivers a multi-floor dining experience rooted in Nordic culinary philosophy.',
    },
    {
      name: 'Cloudstreet',
      distinction: '2-star',
      cuisine: 'Innovative Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Rishi Naleendra fuses Sri Lankan heritage with modern technique in an exuberant, counter-seating format.',
    },
    {
      name: 'Burnt Ends',
      distinction: '1-star',
      cuisine: 'Modern Australian BBQ',
      priceRange: '$$$',
      description:
        'Chef Dave Pynt fires custom-built dual-cavity ovens to produce extraordinary smoked and grilled small plates.',
    },
    {
      name: 'Liao Fan Hong Kong Soya Sauce Chicken Rice',
      distinction: '1-star',
      cuisine: 'Cantonese Hawker',
      priceRange: '$',
      description:
        'The world\'s cheapest Michelin-starred meal — perfectly lacquered soy sauce chicken from a humble hawker stall.',
    },
    {
      name: 'Hill Street Tai Hwa Pork Noodle',
      distinction: '1-star',
      cuisine: 'Singaporean Hawker',
      priceRange: '$',
      description:
        'Legendary hawker stall with a perpetual queue, famed for its springy minced pork noodles in chili vinegar.',
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
    },
    {
      name: 'Hyotei',
      distinction: '3-star',
      cuisine: 'Japanese Kaiseki',
      priceRange: '$$$$',
      description:
        'A 400-year-old tea house near Nanzenji temple offering seasonal kaiseki that embodies the soul of Kyoto cuisine.',
    },
    {
      name: 'Nakamura',
      distinction: '3-star',
      cuisine: 'Japanese Kaiseki',
      priceRange: '$$$$',
      description:
        'Historic kaiseki restaurant preserving centuries of culinary tradition with exquisite seasonal multi-course meals.',
    },
    {
      name: 'Gion Sasaki',
      distinction: '2-star',
      cuisine: 'Japanese Kaiseki',
      priceRange: '$$$$',
      description:
        'Inventive kaiseki master Hiroshi Sasaki brings playfulness and surprise to traditional Kyoto multi-course dining.',
    },
    {
      name: 'Monk',
      distinction: '1-star',
      cuisine: 'Belgian-Japanese Fusion',
      priceRange: '$$$',
      description:
        'A unique pairing of Belgian beer brewing and Japanese seasonal cooking in a charming converted townhouse.',
    },
    {
      name: 'Gion Maruyama',
      distinction: '1-star',
      cuisine: 'Japanese Kaiseki',
      priceRange: '$$$$',
      description:
        'Refined kaiseki dining in the heart of Gion, known for its delicate handling of seasonal Kyoto vegetables.',
    },
    {
      name: 'Menbakaichidai',
      distinction: 'recommended',
      cuisine: 'Ramen',
      priceRange: '$',
      description:
        'Theatrical fire ramen where green onion oil is ignited tableside, creating a pillar of flame above your bowl.',
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
    },
    {
      name: 'Logy',
      distinction: '2-star',
      cuisine: 'Japanese-Taiwanese Fusion',
      priceRange: '$$$$',
      description:
        'Chef Ryogo Tahara melds Japanese precision with Taiwanese ingredients in a counter-seating omakase experience.',
    },
    {
      name: 'Ya Ge',
      distinction: '1-star',
      cuisine: 'Cantonese',
      priceRange: '$$$$',
      description:
        'Elegant Cantonese restaurant at the Mandarin Oriental celebrated for its refined dim sum and Peking duck.',
    },
    {
      name: 'Taïrroir',
      distinction: '1-star',
      cuisine: 'Taiwanese Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Kai Ho reinterprets Taiwanese culinary heritage through the lens of French technique in seasonal tasting menus.',
    },
    {
      name: 'Raw',
      distinction: '1-star',
      cuisine: 'Taiwanese Innovative',
      priceRange: '$$$',
      description:
        'André Chiang\'s Taipei restaurant celebrates the island\'s diverse produce through inventive, research-driven dishes.',
    },
    {
      name: 'Din Tai Fung (Xinyi)',
      distinction: 'bib-gourmand',
      cuisine: 'Taiwanese Dumpling',
      priceRange: '$',
      description:
        'The original Taipei branch of the world-famous soup dumpling chain, renowned for its 18-fold xiao long bao.',
    },
    {
      name: 'Ay-Chung Flour-Rice Noodle',
      distinction: 'bib-gourmand',
      cuisine: 'Taiwanese Street Food',
      priceRange: '$',
      description:
        'Iconic Ximending street stall serving thick rice noodles in a rich, savory intestine-based broth since 1975.',
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
    },
    {
      name: 'David\'s Kitchen',
      distinction: 'recommended',
      cuisine: 'French Contemporary',
      priceRange: '$$$',
      description:
        'Australian-born chef David serves refined French fine dining in a converted traditional Thai house.',
    },
    {
      name: 'Huen Phen',
      distinction: 'recommended',
      cuisine: 'Northern Thai',
      priceRange: '$',
      description:
        'Beloved Chiang Mai institution serving authentic Northern Thai classics like khao soi and laab in a rustic antique-filled house.',
    },
    {
      name: 'SP Chicken',
      distinction: 'recommended',
      cuisine: 'Thai Street Food',
      priceRange: '$',
      description:
        'Locals queue daily for the best rotisserie chicken in Chiang Mai, slow-roasted over coals with lemongrass and herbs.',
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
    },
    {
      name: '1135 AD',
      distinction: 'recommended',
      cuisine: 'Rajasthani',
      priceRange: '$$$',
      description:
        'Inside the Amber Fort, this restaurant recreates centuries-old Rajput royal recipes in a magnificent heritage setting.',
    },
    {
      name: 'SamosaWala',
      distinction: 'recommended',
      cuisine: 'Indian Street Food',
      priceRange: '$',
      description:
        'Multi-generational street stall famous across Rajasthan for its perfectly flaky, spiced potato samosas.',
    },
    {
      name: 'Laxmi Mishthan Bhandar',
      distinction: 'recommended',
      cuisine: 'Indian Sweets & Vegetarian',
      priceRange: '$',
      description:
        'Jaipur\'s most beloved sweet shop and vegetarian restaurant, running for over 50 years on Johari Bazaar.',
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
    },
    {
      name: 'Subsix',
      distinction: 'recommended',
      cuisine: 'International Fine Dining',
      priceRange: '$$$$',
      description:
        'Niyama\'s underwater nightclub and restaurant serves inventive seafood six meters below the surface.',
    },
    {
      name: 'Only Blu',
      distinction: 'recommended',
      cuisine: 'Mediterranean Seafood',
      priceRange: '$$$$',
      description:
        'OBLU\'s stunning overwater restaurant specializes in Mediterranean-inspired seafood with lagoon views.',
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
    },
    {
      name: 'Nihonbashi',
      distinction: 'recommended',
      cuisine: 'Japanese',
      priceRange: '$$$',
      description:
        'Colombo\'s top Japanese restaurant by Dharshan Munidasa featuring pristine sashimi from Sri Lankan waters.',
    },
    {
      name: 'Upali\'s',
      distinction: 'recommended',
      cuisine: 'Sri Lankan Traditional',
      priceRange: '$',
      description:
        'Authentic Sri Lankan rice and curry in a cheerful setting, beloved for its hoppers and fiery sambols.',
    },
    {
      name: 'Kaema Sutra',
      distinction: 'recommended',
      cuisine: 'Sri Lankan Contemporary',
      priceRange: '$$',
      description:
        'Chef Dharshan Munidasa\'s modern Sri Lankan kitchen at Shangri-La featuring elevated takes on local classics.',
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
    },
    {
      name: 'Plénitude',
      distinction: '3-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Arnaud Donckele\'s Cheval Blanc restaurant creates deeply layered flavors through his signature "cuisine of essences."',
    },
    {
      name: 'Le Cinq',
      distinction: '3-star',
      cuisine: 'French Classic',
      priceRange: '$$$$',
      description:
        'Christian Le Squer\'s majestic dining room at the Four Seasons George V delivers timeless French haute cuisine.',
    },
    {
      name: 'Epicure',
      distinction: '3-star',
      cuisine: 'French Classic',
      priceRange: '$$$$',
      description:
        'Eric Frechon\'s grand restaurant at Le Bristol, celebrated for its macaroni with black truffle and artichoke.',
    },
    {
      name: 'Table by Bruno Verjus',
      distinction: '2-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$$',
      description:
        'Self-taught chef Bruno Verjus crafts ingredient-driven cuisine with poetic simplicity, ranked among the World\'s Best.',
    },
    {
      name: 'Septime',
      distinction: '1-star',
      cuisine: 'French Modern',
      priceRange: '$$$',
      description:
        'Bertrand Grébaut\'s minimalist bistro in the 11th serves one of Paris\'s most coveted tasting menus with natural wines.',
    },
    {
      name: 'Le Comptoir du Panthéon',
      distinction: '1-star',
      cuisine: 'French Bistro',
      priceRange: '$$',
      description:
        'A quintessential Parisian bistro near the Panthéon where chef delivers elevated seasonal French comfort food.',
    },
    {
      name: 'Frenchie',
      distinction: '1-star',
      cuisine: 'French Contemporary',
      priceRange: '$$$',
      description:
        'Gregory Marchand\'s hugely popular restaurant in the Sentier serves inventive French cuisine with global accents.',
    },
    {
      name: 'Le Bouillon Chartier',
      distinction: 'bib-gourmand',
      cuisine: 'French Traditional',
      priceRange: '$',
      description:
        'A stunning Belle Époque dining hall serving classic French fare at remarkably affordable prices since 1896.',
    },
    {
      name: 'Chez Janou',
      distinction: 'bib-gourmand',
      cuisine: 'French Provençal',
      priceRange: '$$',
      description:
        'Charming Marais bistro famous for its extraordinary chocolate mousse served from a giant bowl and sunny terrace.',
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
    },
    {
      name: 'Lasarte',
      distinction: '3-star',
      cuisine: 'Basque-Catalan Contemporary',
      priceRange: '$$$$',
      description:
        'Martín Berasategui\'s Barcelona outpost at the Monument Hotel fuses Basque precision with Mediterranean ingredients.',
    },
    {
      name: 'Cocina Hermanos Torres',
      distinction: '2-star',
      cuisine: 'Spanish Contemporary',
      priceRange: '$$$$',
      description:
        'Twin brothers Javier and Sergio Torres cook in an open kitchen inside a dramatically converted warehouse.',
    },
    {
      name: 'Enigma',
      distinction: '1-star',
      cuisine: 'Spanish Avant-Garde',
      priceRange: '$$$$',
      description:
        'Albert Adrià\'s immersive multi-room dining experience unfolds through 40+ courses in elBulli\'s creative legacy.',
    },
    {
      name: 'Disfrutar',
      distinction: '2-star',
      cuisine: 'Mediterranean Avant-Garde',
      priceRange: '$$$$',
      description:
        'Three former elBulli chefs create playful, boundary-pushing Mediterranean cuisine that earned World\'s Best in 2024.',
    },
    {
      name: 'Alkimia',
      distinction: '1-star',
      cuisine: 'Catalan Contemporary',
      priceRange: '$$$',
      description:
        'Chef Jordi Vilà modernizes Catalan classics with innovative technique in a sleek Eixample dining room.',
    },
    {
      name: 'Bar Cañete',
      distinction: 'bib-gourmand',
      cuisine: 'Catalan Tapas',
      priceRange: '$$',
      description:
        'Buzzing counter-service tapas bar on La Rambla serving outstanding Catalan seafood and traditional small plates.',
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
    },
    {
      name: 'ALMA',
      distinction: '1-star',
      cuisine: 'Portuguese Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Henrique Sá Pessoa celebrates Portuguese flavors with spice-route influences in a stunning cloistered space.',
    },
    {
      name: 'Eleven',
      distinction: '1-star',
      cuisine: 'Mediterranean Contemporary',
      priceRange: '$$$$',
      description:
        'Panoramic views over Lisbon accompany Joachim Koerper\'s refined Mediterranean cuisine at Eduardo VII Park.',
    },
    {
      name: 'Feitoria',
      distinction: '1-star',
      cuisine: 'Portuguese Modern',
      priceRange: '$$$$',
      description:
        'At the Altis Belém, chef João Rodrigues creates a "voyage through Portugal" tasting menu with Atlantic seafood.',
    },
    {
      name: 'Cervejaria Ramiro',
      distinction: 'bib-gourmand',
      cuisine: 'Portuguese Seafood',
      priceRange: '$$',
      description:
        'Lisbon\'s most celebrated seafood house where locals and visitors feast on garlic prawns, percebes, and crab.',
    },
    {
      name: 'Pastéis de Belém',
      distinction: 'recommended',
      cuisine: 'Portuguese Pastry',
      priceRange: '$',
      description:
        'The original custard tart bakery since 1837, guarding the secret recipe for Lisbon\'s most iconic pastry.',
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
    },
    {
      name: 'La Degustation Bohême Bourgeoise',
      distinction: '1-star',
      cuisine: 'Czech Modern',
      priceRange: '$$$',
      description:
        'Oldřich Sahajdák reinterprets historical Bohemian recipes from old Czech cookbooks with contemporary flair.',
    },
    {
      name: 'Alcron',
      distinction: '1-star',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'Intimate Art Deco restaurant at the Alcron Hotel known for its exceptional seafood and refined tasting menus.',
    },
    {
      name: 'Eska',
      distinction: 'bib-gourmand',
      cuisine: 'Czech Modern',
      priceRange: '$$',
      description:
        'Industrial-chic bakery-restaurant in Karlín focused on fermentation, house-milled grains, and slow-food philosophy.',
    },
    {
      name: 'Lokál Dlouhááá',
      distinction: 'recommended',
      cuisine: 'Czech Traditional',
      priceRange: '$',
      description:
        'Lively beer hall serving the freshest Pilsner Urquell in Prague alongside perfectly executed Czech pub classics.',
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
    },
    {
      name: 'Restaurant Dubrovnik',
      distinction: 'recommended',
      cuisine: 'Croatian Contemporary',
      priceRange: '$$$',
      description:
        'Sophisticated Adriatic seafood and Croatian wines in an elegant Old Town setting near the Rector\'s Palace.',
    },
    {
      name: 'Nautika',
      distinction: 'recommended',
      cuisine: 'Mediterranean Seafood',
      priceRange: '$$$$',
      description:
        'White-tablecloth dining at the Pile Gate with Adriatic seafood, sunset views, and one of Croatia\'s finest wine lists.',
    },
    {
      name: 'Pantarul',
      distinction: 'recommended',
      cuisine: 'Croatian Bistro',
      priceRange: '$$',
      description:
        'Beloved local bistro outside the old walls serving creative Dalmatian home cooking with seasonal market ingredients.',
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
    },
    {
      name: 'Lycabettus',
      distinction: 'recommended',
      cuisine: 'Mediterranean Contemporary',
      priceRange: '$$$$',
      description:
        'Dramatic caldera-view fine dining showcasing Aegean seafood with a creative Mediterranean approach.',
    },
    {
      name: 'Metaxi Mas',
      distinction: 'recommended',
      cuisine: 'Greek Traditional',
      priceRange: '$$',
      description:
        'Hidden gem in Exo Gonia village serving exceptional Cretan-influenced home cooking with local wines.',
    },
    {
      name: 'To Psaraki',
      distinction: 'recommended',
      cuisine: 'Greek Seafood',
      priceRange: '$$',
      description:
        'Unassuming waterfront taverna in Vlychada serving the freshest catch grilled simply with lemon and olive oil.',
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
    },
    {
      name: '&moshik',
      distinction: '2-star',
      cuisine: 'Innovative',
      priceRange: '$$$$',
      description:
        'Israeli-born chef Moshik Roth creates visually stunning, music-inspired cuisine that pushes creative boundaries.',
    },
    {
      name: 'Spectrum',
      distinction: '1-star',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'The Waldorf Astoria\'s fine dining room serves refined contemporary cuisine in a grand canal-house setting.',
    },
    {
      name: 'Rijks',
      distinction: '1-star',
      cuisine: 'Dutch Contemporary',
      priceRange: '$$$',
      description:
        'Joris Bijdendijk champions forgotten Dutch ingredients at the Rijksmuseum, pairing them with historical recipes.',
    },
    {
      name: 'Bak',
      distinction: '1-star',
      cuisine: 'European Contemporary',
      priceRange: '$$$',
      description:
        'A waterfront gem in Amsterdam-Noord with an ever-changing menu driven by what\'s best at the market each morning.',
    },
    {
      name: 'Bar Centraal',
      distinction: 'bib-gourmand',
      cuisine: 'Dutch Bistro',
      priceRange: '$$',
      description:
        'Convivial neighborhood bistro championing seasonal Dutch and European dishes with excellent natural wines.',
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
    },
    {
      name: 'Il Pagliaccio',
      distinction: '2-star',
      cuisine: 'Italian Creative',
      priceRange: '$$$$',
      description:
        'Chef Anthony Genovese blends Mediterranean and Asian influences into deeply personal, elegantly plated courses.',
    },
    {
      name: 'Idylio by Apreda',
      distinction: '1-star',
      cuisine: 'Italian Contemporary',
      priceRange: '$$$$',
      description:
        'Francesco Apreda\'s restaurant at the Pantheon Iconic Hotel fuses Italian and Japanese elements with finesse.',
    },
    {
      name: 'Acquolina',
      distinction: '1-star',
      cuisine: 'Italian Seafood',
      priceRange: '$$$$',
      description:
        'Sophisticated seafood-focused cuisine at the First Roma Arte hotel emphasizing pristine Mediterranean fish.',
    },
    {
      name: 'Pipero Roma',
      distinction: '1-star',
      cuisine: 'Italian Contemporary',
      priceRange: '$$$$',
      description:
        'Alessandro Pipero\'s elegant restaurant near Piazza Barberini serves polished modern Italian cuisine with character.',
    },
    {
      name: 'Roscioli',
      distinction: 'bib-gourmand',
      cuisine: 'Italian Roman',
      priceRange: '$$',
      description:
        'Part salumeria, part restaurant — a cult Roman spot for cacio e pepe, charcuterie, and exceptional Italian wines.',
    },
    {
      name: 'Da Enzo al 29',
      distinction: 'recommended',
      cuisine: 'Roman Traditional',
      priceRange: '$',
      description:
        'Quintessential Trastevere trattoria beloved for its textbook carbonara, cacio e pepe, and fried artichokes.',
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
    },
    {
      name: 'The Kitchin',
      distinction: '1-star',
      cuisine: 'Scottish-French',
      priceRange: '$$$$',
      description:
        'Tom Kitchin\'s "from nature to plate" philosophy showcases Scotland\'s finest game, seafood, and seasonal produce.',
    },
    {
      name: 'Number One',
      distinction: '1-star',
      cuisine: 'Scottish Contemporary',
      priceRange: '$$$$',
      description:
        'The Balmoral Hotel\'s flagship restaurant delivers refined Scottish cuisine in an intimate, deep-red dining room.',
    },
    {
      name: 'Condita',
      distinction: '1-star',
      cuisine: 'Scottish Modern',
      priceRange: '$$$',
      description:
        'Chef Conor Toomey\'s tiny 20-seat restaurant delivers inventive tasting menus showcasing Scottish producers.',
    },
    {
      name: 'Dishoom',
      distinction: 'recommended',
      cuisine: 'Indian Bombay Café',
      priceRange: '$$',
      description:
        'Bustling Bombay-inspired café in a stunning former bank building, famous for its black daal and bacon naan roll.',
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
    },
    {
      name: 'Costes Downtown',
      distinction: '1-star',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'Miguel Rocha Vieira leads a refined downtown sibling offering Portuguese-accented contemporary European cuisine.',
    },
    {
      name: 'Essência',
      distinction: '1-star',
      cuisine: 'Portuguese-Hungarian',
      priceRange: '$$$',
      description:
        'Chef Miguel Vieira combines Portuguese roots with Hungarian ingredients in an intimate, warmly modern space.',
    },
    {
      name: 'Stand25 Bisztró',
      distinction: 'bib-gourmand',
      cuisine: 'Hungarian Modern',
      priceRange: '$$',
      description:
        'Named after a market stall, this bistro elevates Hungarian comfort food with outstanding local wine pairings.',
    },
    {
      name: 'Café Gerbeaud',
      distinction: 'recommended',
      cuisine: 'Hungarian Café & Pastry',
      priceRange: '$$',
      description:
        'Grand 19th-century coffeehouse on Vörösmarty Square serving exquisite Hungarian pastries and elegant café fare.',
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
    },
    {
      name: 'Quintonil',
      distinction: '2-star',
      cuisine: 'Mexican Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Jorge Vallejo weaves Mexican ancestral ingredients like huitlacoche and escamoles into refined modern cuisine.',
    },
    {
      name: 'Rosetta',
      distinction: '1-star',
      cuisine: 'Italian-Mexican',
      priceRange: '$$$',
      description:
        'Elena Reygadas\' Roma Norte gem blends Italian culinary sensibility with Mexican ingredients in a colonial mansion.',
    },
    {
      name: 'Máximo Bistrot',
      distinction: '1-star',
      cuisine: 'Mexican Market-Driven',
      priceRange: '$$$',
      description:
        'Chef Eduardo García\'s farm-to-table bistro in Roma serves a daily-changing menu based on morning market finds.',
    },
    {
      name: 'Contramar',
      distinction: 'recommended',
      cuisine: 'Mexican Seafood',
      priceRange: '$$',
      description:
        'Gabriela Cámara\'s beloved open-air seafood restaurant is famous for its tuna tostadas and red-and-green grilled fish.',
    },
    {
      name: 'El Califa de León',
      distinction: 'bib-gourmand',
      cuisine: 'Mexican Street Food',
      priceRange: '$',
      description:
        'Legendary taco stand serving perfectly charred bistec and costilla tacos, famously awarded a Michelin star.',
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
    },
    {
      name: 'Noma Tulum (Pop-Up Legacy)',
      distinction: 'recommended',
      cuisine: 'New Mexican',
      priceRange: '$$$$',
      description:
        'The site of the famous Noma pop-up continues to influence Tulum\'s culinary scene with Yucatecan-forward fine dining.',
    },
    {
      name: 'Arca',
      distinction: 'recommended',
      cuisine: 'Mexican Contemporary',
      priceRange: '$$$',
      description:
        'José Luis Hinostroza uses ancestral Mayan cooking techniques and local jungle ingredients in a striking open-air space.',
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
    },
    {
      name: 'St. Lawrence',
      distinction: '1-star',
      cuisine: 'French-Québécois',
      priceRange: '$$$',
      description:
        'J-C Poirier brings Québécois soul to Vancouver with dishes rooted in French-Canadian tradition and local BC ingredients.',
    },
    {
      name: 'iDen & QuanJuDe Beijing Duck House',
      distinction: '1-star',
      cuisine: 'Chinese Cantonese',
      priceRange: '$$$',
      description:
        'A unique collaboration between Japanese and Chinese culinary traditions featuring exceptional Peking duck in Richmond.',
    },
    {
      name: 'Vij\'s',
      distinction: 'recommended',
      cuisine: 'Indian Contemporary',
      priceRange: '$$',
      description:
        'Vikram Vij\'s groundbreaking Indian restaurant combines bold Indian spices with Canadian ingredients — no reservations, always a queue.',
    },
    {
      name: 'Miku',
      distinction: 'recommended',
      cuisine: 'Japanese Aburi Sushi',
      priceRange: '$$$',
      description:
        'Pioneer of Aburi (flame-seared) sushi in Vancouver\'s waterfront with stunning views of the harbor.',
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
    },
    {
      name: 'The Bison',
      distinction: 'recommended',
      cuisine: 'Canadian Regional',
      priceRange: '$$$',
      description:
        'Rustic-chic Bear Street restaurant serving Rocky Mountain cuisine including bison, elk, and Alberta-sourced dishes.',
    },
    {
      name: 'Park Distillery',
      distinction: 'recommended',
      cuisine: 'Canadian Contemporary',
      priceRange: '$$',
      description:
        'Craft distillery and restaurant in downtown Banff making spirits from Rocky Mountain glacier water with campfire-style dishes.',
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
    },
    {
      name: 'El Cocinero',
      distinction: 'recommended',
      cuisine: 'Cuban Modern',
      priceRange: '$$',
      description:
        'Trendy rooftop restaurant in a converted cooking-oil factory in Vedado, blending Cuban and international flavors.',
    },
    {
      name: 'Doña Eutimia',
      distinction: 'recommended',
      cuisine: 'Cuban Traditional',
      priceRange: '$',
      description:
        'Charming Old Havana paladar beloved for its classic ropa vieja and deeply flavorful Cuban home cooking.',
    },
    {
      name: 'Ivan Chef Justo',
      distinction: 'recommended',
      cuisine: 'Cuban Innovative',
      priceRange: '$$',
      description:
        'Chef Ivan Justo pushes Cuban cuisine forward with creative dishes in a cozy Old Havana courtyard setting.',
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
    },
    {
      name: 'Marmalade',
      distinction: 'recommended',
      cuisine: 'Caribbean Contemporary',
      priceRange: '$$$',
      description:
        'Peter Schintler\'s acclaimed Old San Juan restaurant pairs creative Caribbean cuisine with an impressive wine cellar.',
    },
    {
      name: 'Cocina Abierta',
      distinction: 'recommended',
      cuisine: 'Latin Fusion',
      priceRange: '$$',
      description:
        'Bustling Condado restaurant with an open kitchen serving shareable Latin-inspired dishes and creative cocktails.',
    },
    {
      name: 'La Alcapurria Quemá',
      distinction: 'recommended',
      cuisine: 'Puerto Rican Street Food',
      priceRange: '$',
      description:
        'Iconic street food counter in Piñones serving the crispiest alcapurrias and bacalaítos on the island.',
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
    },
    {
      name: 'Aramburu',
      distinction: 'recommended',
      cuisine: 'Argentine Contemporary',
      priceRange: '$$$$',
      description:
        'Gonzalo Aramburu\'s intimate 16-seat restaurant delivers a dazzling 18-course tasting menu of modern Argentine cuisine.',
    },
    {
      name: 'El Preferido de Palermo',
      distinction: 'recommended',
      cuisine: 'Argentine Traditional',
      priceRange: '$$',
      description:
        'A century-old Palermo bodegón serving generous portions of classic Argentine comfort food and house wine.',
    },
    {
      name: 'Mishiguene',
      distinction: 'recommended',
      cuisine: 'Jewish-Argentine',
      priceRange: '$$$',
      description:
        'Chef Tomás Kalika celebrates Buenos Aires\' Jewish culinary heritage with creative, vibrant dishes and great cocktails.',
    },
    {
      name: 'La Cabrera',
      distinction: 'recommended',
      cuisine: 'Argentine Parrilla',
      priceRange: '$$',
      description:
        'Famous Palermo parrilla known for generous cuts of premium Argentine beef and a parade of complimentary side dishes.',
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
    },
    {
      name: 'Carmen',
      distinction: 'recommended',
      cuisine: 'Colombian Contemporary',
      priceRange: '$$$',
      description:
        'Housed in a colonial mansion, fusing Colombian Caribbean flavors with international technique in elegant courses.',
    },
    {
      name: 'La Cevichería',
      distinction: 'recommended',
      cuisine: 'Seafood',
      priceRange: '$$',
      description:
        'Anthony Bourdain\'s famous Cartagena pick, known for its outstanding coconut ceviche and Caribbean seafood.',
    },
    {
      name: 'La Mulata',
      distinction: 'recommended',
      cuisine: 'Colombian Traditional',
      priceRange: '$',
      description:
        'Colorful local favorite serving hearty Caribbean-Colombian dishes like coconut rice, fried fish, and plantains.',
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
    },
    {
      name: 'Chicha',
      distinction: 'recommended',
      cuisine: 'Peruvian Regional',
      priceRange: '$$',
      description:
        'Gastón Acurio\'s Cusco restaurant celebrates Andean Peruvian cuisine with dishes like rocoto relleno and alpaca.',
    },
    {
      name: 'MAP Café',
      distinction: 'recommended',
      cuisine: 'Peruvian Contemporary',
      priceRange: '$$$',
      description:
        'Glass-walled restaurant inside the Pre-Columbian Art Museum serving refined Andean cuisine in a courtyard setting.',
    },
    {
      name: 'Mercado San Pedro',
      distinction: 'recommended',
      cuisine: 'Peruvian Market Food',
      priceRange: '$',
      description:
        'Cusco\'s central market where stalls serve fresh ceviche, roasted cuy, and enormous fruit juices at communal counters.',
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
    },
    {
      name: 'Oteque',
      distinction: 'recommended',
      cuisine: 'Brazilian Contemporary',
      priceRange: '$$$$',
      description:
        'Alberto Landgraf\'s counter-dining restaurant in Botafogo serves seafood-driven Brazilian cuisine with Nordic precision.',
    },
    {
      name: 'Oro',
      distinction: 'recommended',
      cuisine: 'Brazilian Modern',
      priceRange: '$$$$',
      description:
        'Felipe Bronze\'s Leblon restaurant earned Latin America\'s 50 Best status for its bold, ingredient-focused Brazilian cuisine.',
    },
    {
      name: 'Aprazível',
      distinction: 'recommended',
      cuisine: 'Brazilian Regional',
      priceRange: '$$',
      description:
        'Treehouse-style hillside restaurant in Santa Teresa with sweeping views, serving Brazilian dishes from every region.',
    },
    {
      name: 'Bar do Mineiro',
      distinction: 'recommended',
      cuisine: 'Brazilian Traditional',
      priceRange: '$',
      description:
        'Beloved Santa Teresa bar serving rustic Minas Gerais comfort food, feijoada, and ice-cold draft beer.',
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
    },
    {
      name: 'Oci.Mde',
      distinction: 'recommended',
      cuisine: 'Colombian Contemporary',
      priceRange: '$$$',
      description:
        'Intimate Provenza restaurant pushing Medellín\'s culinary boundaries with creative Colombian-inspired tasting menus.',
    },
    {
      name: 'Alambique',
      distinction: 'recommended',
      cuisine: 'Colombian-French Fusion',
      priceRange: '$$$',
      description:
        'A refined El Poblado restaurant blending Colombian ingredients with French technique in elegant, seasonal courses.',
    },
    {
      name: 'Mondongos',
      distinction: 'recommended',
      cuisine: 'Colombian Traditional',
      priceRange: '$',
      description:
        'Iconic Medellín institution since the 1970s, famous for its bandeja paisa and namesake mondongo tripe soup.',
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
    },
    {
      name: 'Al Fassia',
      distinction: 'recommended',
      cuisine: 'Moroccan Traditional',
      priceRange: '$$',
      description:
        'Run entirely by women, this Guéliz institution has served definitive Moroccan cuisine since 1987.',
    },
    {
      name: 'Le Jardin',
      distinction: 'recommended',
      cuisine: 'Moroccan-Mediterranean',
      priceRange: '$$',
      description:
        'Hidden garden oasis in the medina serving fresh Moroccan-Mediterranean dishes beneath banana palms and bougainvillea.',
    },
    {
      name: 'Nomad',
      distinction: 'recommended',
      cuisine: 'Modern Moroccan',
      priceRange: '$$',
      description:
        'Stylish rooftop restaurant overlooking the spice souk, serving contemporary takes on Moroccan classics.',
    },
    {
      name: 'Café des Épices',
      distinction: 'recommended',
      cuisine: 'Moroccan Café',
      priceRange: '$',
      description:
        'Atmospheric terrace café above the spice market perfect for mint tea and simple, flavorful Moroccan bites.',
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
    },
    {
      name: 'FYN',
      distinction: 'recommended',
      cuisine: 'South African-Japanese Fusion',
      priceRange: '$$$$',
      description:
        'Peter Tempelhoff merges Japanese precision with South African terroir in a sleek CBD dining room with mountain views.',
    },
    {
      name: 'La Colombe',
      distinction: 'recommended',
      cuisine: 'French-Asian',
      priceRange: '$$$$',
      description:
        'Set in the Constantia winelands, blending French and Asian flavors with playful invention and vineyard views.',
    },
    {
      name: 'Wolfgat',
      distinction: 'recommended',
      cuisine: 'West Coast Strandveld',
      priceRange: '$$$',
      description:
        'Kobus van der Merwe\'s tiny beach cottage serves foraged West Coast cuisine — winner of the inaugural World Restaurant Awards.',
    },
    {
      name: 'The Pot Luck Club',
      distinction: 'recommended',
      cuisine: 'Global Tapas',
      priceRange: '$$',
      description:
        'Luke Dale-Roberts\' casual rooftop sibling in the Silo District serving bold global small plates with city views.',
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
    },
    {
      name: 'Emerson Spice Tea House',
      distinction: 'recommended',
      cuisine: 'Zanzibari Fusion',
      priceRange: '$$',
      description:
        'Rooftop dining in Stone Town with ocean sunset views, serving a set menu of Swahili-spiced dishes nightly.',
    },
    {
      name: 'Forodhani Gardens Night Market',
      distinction: 'recommended',
      cuisine: 'Zanzibari Street Food',
      priceRange: '$',
      description:
        'Lively waterfront night market where vendors grill fresh seafood, Zanzibar pizza, and sugarcane juice at dusk.',
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
    },
    {
      name: 'Nyama Mama',
      distinction: 'recommended',
      cuisine: 'Kenyan Contemporary',
      priceRange: '$$',
      description:
        'Modern Kenyan restaurant reinventing East African classics like nyama choma and ugali with creative flair.',
    },
    {
      name: 'Carnivore',
      distinction: 'recommended',
      cuisine: 'Kenyan BBQ',
      priceRange: '$$',
      description:
        'Legendary "Beast of a Feast" restaurant serving all-you-can-eat game meats roasted on Maasai swords.',
    },
    {
      name: 'Mama Oliech',
      distinction: 'recommended',
      cuisine: 'Kenyan Traditional',
      priceRange: '$',
      description:
        'No-frills Nairobi institution where locals crowd for the best fried tilapia and traditional Luo cooking.',
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
    },
    {
      name: 'Oncore by Clare Smyth',
      distinction: '2-star',
      cuisine: 'British-Australian Contemporary',
      priceRange: '$$$$',
      description:
        'Clare Smyth brings her three-Michelin-star pedigree to Crown Sydney with exquisite, produce-driven modern cuisine.',
    },
    {
      name: 'Tetsuya\'s',
      distinction: '1-star',
      cuisine: 'Japanese-French Fusion',
      priceRange: '$$$$',
      description:
        'Tetsuya Wakuda\'s legendary restaurant harmonizes Japanese and French traditions in an elegant Darling Harbour setting.',
    },
    {
      name: 'Sixpenny',
      distinction: '1-star',
      cuisine: 'Australian Modern',
      priceRange: '$$$$',
      description:
        'Daniel Puskas\' intimate Stanmore restaurant showcases Australian terroir through delicate, seasonal multi-course menus.',
    },
    {
      name: 'Saint Peter',
      distinction: '1-star',
      cuisine: 'Australian Seafood',
      priceRange: '$$$',
      description:
        'Josh Niland\'s revolutionary nose-to-tail fish restaurant that changed how the world thinks about cooking seafood.',
    },
    {
      name: 'Mr. Wong',
      distinction: 'bib-gourmand',
      cuisine: 'Cantonese',
      priceRange: '$$',
      description:
        'Mega-popular CBD Cantonese restaurant in a cavernous heritage space, renowned for its crispy-skin duck.',
    },
    {
      name: 'Porteno',
      distinction: 'recommended',
      cuisine: 'Argentine BBQ',
      priceRange: '$$',
      description:
        'Surry Hills Argentine grill where whole animals slow-cook over wood fire, served in a vibrant late-night atmosphere.',
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
    },
    {
      name: 'Rātā',
      distinction: 'recommended',
      cuisine: 'New Zealand Modern',
      priceRange: '$$$',
      description:
        'Josh Emett\'s acclaimed restaurant in a heritage building serving refined NZ cuisine with Otago wines.',
    },
    {
      name: 'Fergburger',
      distinction: 'recommended',
      cuisine: 'Gourmet Burgers',
      priceRange: '$',
      description:
        'Queenstown\'s most iconic eatery where tourists and locals queue day and night for massive, legendary burgers.',
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
    },
    {
      name: 'Lako Mai',
      distinction: 'recommended',
      cuisine: 'Fijian-Pacific Fusion',
      priceRange: '$$',
      description:
        'Contemporary Fijian dining featuring traditional kokoda ceviche, lovo-cooked meats, and tropical Melanesian flavors.',
    },
    {
      name: 'Navo at InterContinental Fiji',
      distinction: 'recommended',
      cuisine: 'Pacific Seafood',
      priceRange: '$$$$',
      description:
        'Overwater restaurant with sunset views serving fresh Fijian seafood and Indo-Fijian influenced dishes.',
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
    },
    {
      name: 'King\'s Joy',
      distinction: '2-star',
      cuisine: 'Chinese Vegetarian',
      priceRange: '$$$$',
      description:
        'Near the Lama Temple, this elegant restaurant elevates Buddhist vegetarian cuisine into a refined art form.',
    },
    {
      name: 'Jing Yaa Tang',
      distinction: '1-star',
      cuisine: 'Chinese Beijing Duck',
      priceRange: '$$$',
      description:
        'The Opposite House\'s sleek restaurant serves meticulously prepared Peking duck carved tableside with artisan condiments.',
    },
    {
      name: 'Fu Chun Ju',
      distinction: '1-star',
      cuisine: 'Chinese Jiangsu',
      priceRange: '$$$',
      description:
        'Refined Jiangsu cuisine focusing on freshwater ingredients prepared with delicate, time-honored techniques.',
    },
    {
      name: 'Da Dong Roast Duck',
      distinction: '1-star',
      cuisine: 'Chinese Beijing Duck',
      priceRange: '$$',
      description:
        'Chef Dong Zhenxiang\'s revolutionary "Super Lean" roast duck technique made this a global Peking duck destination.',
    },
    {
      name: 'Bao Yuan Jiaozi Wu',
      distinction: 'bib-gourmand',
      cuisine: 'Chinese Dumplings',
      priceRange: '$',
      description:
        'Beloved dumpling house with a rainbow of colorful dumplings in over 200 varieties with creative fillings.',
    },
    {
      name: 'Zhang Mama',
      distinction: 'bib-gourmand',
      cuisine: 'Sichuan',
      priceRange: '$',
      description:
        'Fiery Sichuan restaurant known for its numbing mapo tofu and hand-pulled noodles in a no-frills setting.',
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
    },
    {
      name: 'T\'ang Court',
      distinction: '2-star',
      cuisine: 'Cantonese',
      priceRange: '$$$$',
      description:
        'The Langham\'s elegant Cantonese restaurant serving refined dim sum and classic Cantonese dishes with precision.',
    },
    {
      name: 'Fu He Hui',
      distinction: '1-star',
      cuisine: 'Chinese Vegetarian',
      priceRange: '$$$',
      description:
        'Tony Lu\'s inventive Buddhist vegetarian cuisine presented as sophisticated multi-course meals in a serene garden.',
    },
    {
      name: 'Da Vittorio Shanghai',
      distinction: '1-star',
      cuisine: 'Italian',
      priceRange: '$$$$',
      description:
        'The Cerea brothers bring their Bergamo three-star legacy to Shanghai with refined Northern Italian cuisine on the Bund.',
    },
    {
      name: 'Canton Table',
      distinction: '1-star',
      cuisine: 'Cantonese',
      priceRange: '$$$',
      description:
        'Sophisticated Cantonese dining in Jing\'an featuring impeccable dim sum and seasonal Guangdong specialties.',
    },
    {
      name: 'Yang\'s Fried Dumplings',
      distinction: 'bib-gourmand',
      cuisine: 'Shanghainese Street Food',
      priceRange: '$',
      description:
        'Shanghai\'s most addictive sheng jian bao — pan-fried soup dumplings with crispy golden bottoms and juicy pork filling.',
    },
    {
      name: 'Jia Jia Tang Bao',
      distinction: 'bib-gourmand',
      cuisine: 'Shanghainese',
      priceRange: '$',
      description:
        'Tiny, perpetually packed shop on Huanghe Road serving some of Shanghai\'s most delicate xiao long bao.',
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
    },
    {
      name: 'Bo Innovation',
      distinction: '2-star',
      cuisine: 'Chinese Innovative',
      priceRange: '$$$$',
      description:
        'Alvin Leung\'s "X-treme Chinese" cuisine deconstructs Cantonese traditions into daring, molecular-driven creations.',
    },
    {
      name: 'Tin Lung Heen',
      distinction: '2-star',
      cuisine: 'Cantonese',
      priceRange: '$$$$',
      description:
        'The Ritz-Carlton\'s sky-high Cantonese restaurant on the 102nd floor delivers classic dim sum above the clouds.',
    },
    {
      name: 'The Chairman',
      distinction: '1-star',
      cuisine: 'Cantonese',
      priceRange: '$$$',
      description:
        'Danny Yip\'s farm-to-table Cantonese restaurant sources from small producers to create deeply flavored traditional dishes.',
    },
    {
      name: 'Wing',
      distinction: '1-star',
      cuisine: 'Cantonese Contemporary',
      priceRange: '$$$$',
      description:
        'Vicky Cheng\'s celebration of Hong Kong\'s culinary identity, reinterpreting Cantonese classics through modern vision.',
    },
    {
      name: 'Tate Dining Room',
      distinction: '1-star',
      cuisine: 'French-Chinese',
      priceRange: '$$$$',
      description:
        'Vicky Lau\'s "ode to Chinese tea and French cuisine" tells stories through exquisitely plated, tea-paired courses.',
    },
    {
      name: 'Tim Ho Wan (Sham Shui Po)',
      distinction: 'bib-gourmand',
      cuisine: 'Cantonese Dim Sum',
      priceRange: '$',
      description:
        'The world\'s cheapest Michelin-starred restaurant, famous for its BBQ pork buns with a sugar-crusted top.',
    },
    {
      name: 'Tsim Chai Kee',
      distinction: 'bib-gourmand',
      cuisine: 'Cantonese Noodles',
      priceRange: '$',
      description:
        'Legendary Central noodle shop serving springy wonton noodles and fish ball soup since the 1950s.',
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
    },
    {
      name: 'ICE Restaurant',
      distinction: '1-star',
      cuisine: 'European-Thai',
      priceRange: '$$$$',
      description:
        'Intimate fine dining experience blending European technique with southern Thai ingredients at KATA Rocks.',
    },
    {
      name: 'Black Ginger',
      distinction: '1-star',
      cuisine: 'Thai Traditional',
      priceRange: '$$$',
      description:
        'Accessed by raft across a lagoon at The Slate resort, serving royal Thai recipes with theatrical presentation.',
    },
    {
      name: 'Go Benz',
      distinction: 'bib-gourmand',
      cuisine: 'Thai Southern',
      priceRange: '$',
      description:
        'Beloved local spot in Phuket Town famous for its rich, turmeric-yellow crab curry and fiery southern Thai dishes.',
    },
    {
      name: 'Raya',
      distinction: 'bib-gourmand',
      cuisine: 'Thai-Chinese Phuketian',
      priceRange: '$',
      description:
        'Multi-generational Phuket Town restaurant serving Phuketian specialties like moo hong and crab yellow curry.',
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
    },
    {
      name: 'Embassy',
      distinction: 'recommended',
      cuisine: 'Cambodian Modern',
      priceRange: '$$$',
      description:
        'Kimsan Sok\'s sophisticated restaurant presents modern Cambodian cuisine in a beautiful French-colonial setting.',
    },
    {
      name: 'Mahob Khmer',
      distinction: 'recommended',
      cuisine: 'Cambodian Traditional',
      priceRange: '$',
      description:
        'Authentic Khmer home cooking with dishes like fish amok and green banana curry in a charming garden.',
    },
    {
      name: 'Bugs Café',
      distinction: 'recommended',
      cuisine: 'Cambodian Insect',
      priceRange: '$$',
      description:
        'Adventurous restaurant dedicated to edible insects, serving tarantula donuts and ant-egg pad thai with Khmer twists.',
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
    },
    {
      name: 'Tamarind',
      distinction: 'recommended',
      cuisine: 'Laotian Traditional',
      priceRange: '$$',
      description:
        'The go-to restaurant for authentic Lao cuisine, offering cooking classes alongside dishes like jaew dipping sauces.',
    },
    {
      name: 'Joma Bakery Café',
      distinction: 'recommended',
      cuisine: 'Bakery Café',
      priceRange: '$',
      description:
        'Popular Mekong-side café beloved by locals and travelers for fresh pastries, coffee, and sandwiches.',
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
    },
    {
      name: 'Dewakan',
      distinction: '1-star',
      cuisine: 'Malaysian Contemporary',
      priceRange: '$$$$',
      description:
        'Chef Darren Teoh explores Malaysia\'s extraordinary biodiversity through a tasting menu of indigenous ingredients.',
    },
    {
      name: 'Auntie Nat\'s',
      distinction: 'bib-gourmand',
      cuisine: 'Malaysian Nyonya',
      priceRange: '$',
      description:
        'Home-style Peranakan cooking featuring rich laksa, assam fish head, and traditional kuih in a warm setting.',
    },
    {
      name: 'Sao Nam',
      distinction: 'bib-gourmand',
      cuisine: 'Vietnamese',
      priceRange: '$',
      description:
        'KL\'s beloved Vietnamese restaurant serving fragrant pho and exceptional fresh spring rolls for over two decades.',
    },
    {
      name: 'Nasi Kandar Pelita',
      distinction: 'recommended',
      cuisine: 'Malaysian Mamak',
      priceRange: '$',
      description:
        'Iconic 24-hour mamak restaurant with legendary nasi kandar — rice smothered in multiple curries and condiments.',
    },
    {
      name: 'Jalan Alor Hawker Street',
      distinction: 'recommended',
      cuisine: 'Malaysian Street Food',
      priceRange: '$',
      description:
        'KL\'s most famous street food strip where dozens of stalls serve char kway teow, satay, and grilled wings.',
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
    },
    {
      name: 'Bhojan Griha',
      distinction: 'recommended',
      cuisine: 'Nepali Traditional',
      priceRange: '$$',
      description:
        'A restored 150-year-old Newari house offering traditional Nepali daal bhat and cultural performances.',
    },
    {
      name: 'OR2K',
      distinction: 'recommended',
      cuisine: 'Middle Eastern Vegetarian',
      priceRange: '$',
      description:
        'Colorful Thamel restaurant serving creative vegetarian Middle Eastern and Nepali dishes in a bohemian atmosphere.',
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
    },
    {
      name: 'Neolokal',
      distinction: '1-star',
      cuisine: 'Turkish Modern',
      priceRange: '$$$',
      description:
        'Maksut Aşkar reinterprets Anatolian food heritage using heirloom grains and forgotten Turkish ingredients at SALT Galata.',
    },
    {
      name: 'Mikla',
      distinction: '1-star',
      cuisine: 'Turkish-Scandinavian',
      priceRange: '$$$$',
      description:
        'Mehmet Gürs\' rooftop restaurant fuses Turkish and Nordic influences with sweeping Bosphorus and Golden Horn views.',
    },
    {
      name: 'Nicole',
      distinction: '1-star',
      cuisine: 'Turkish Contemporary',
      priceRange: '$$$$',
      description:
        'Elegant Galataport restaurant offering a refined culinary journey through Turkey\'s diverse regional cuisines.',
    },
    {
      name: 'Çiya Sofrası',
      distinction: 'bib-gourmand',
      cuisine: 'Anatolian Regional',
      priceRange: '$',
      description:
        'Musa Dağdeviren\'s legendary Kadıköy restaurant preserving vanishing Anatolian recipes from Turkey\'s diverse regions.',
    },
    {
      name: 'Karaköy Lokantası',
      distinction: 'bib-gourmand',
      cuisine: 'Turkish Traditional',
      priceRange: '$$',
      description:
        'Stylish neighborhood lokanta serving elevated Turkish home cooking in a beautiful tiled Karaköy dining room.',
    },
    {
      name: 'Hafız Mustafa 1864',
      distinction: 'recommended',
      cuisine: 'Turkish Patisserie',
      priceRange: '$',
      description:
        'Historic Ottoman pastry shop famous for its baklava, Turkish delight, and künefe since the imperial era.',
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
    },
    {
      name: 'Amador',
      distinction: '2-star',
      cuisine: 'Spanish-Austrian Fusion',
      priceRange: '$$$$',
      description:
        'Juan Amador brings Iberian passion to Vienna with molecular-influenced fine dining of extraordinary complexity.',
    },
    {
      name: 'Konstantin Filippou',
      distinction: '1-star',
      cuisine: 'Austrian-Greek Contemporary',
      priceRange: '$$$$',
      description:
        'Greco-Austrian chef creates intensely personal dishes drawing on both culinary heritages in a minimalist space.',
    },
    {
      name: 'Silvio Nickol',
      distinction: '1-star',
      cuisine: 'European Contemporary',
      priceRange: '$$$$',
      description:
        'The Palais Coburg\'s restaurant offers a refined tasting menu complemented by one of Europe\'s greatest wine cellars.',
    },
    {
      name: 'Café Central',
      distinction: 'recommended',
      cuisine: 'Viennese Coffeehouse',
      priceRange: '$$',
      description:
        'Grand 1876 coffeehouse beneath Gothic vaulted ceilings, once frequented by Freud and Trotsky, serving classic Viennese tortes.',
    },
    {
      name: 'Figlmüller',
      distinction: 'recommended',
      cuisine: 'Austrian Traditional',
      priceRange: '$$',
      description:
        'Vienna\'s most famous schnitzel since 1905 — enormous, plate-overlapping cutlets pounded thin and fried golden.',
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
    },
    {
      name: 'Alchemist',
      distinction: '3-star',
      cuisine: 'Holistic Avant-Garde',
      priceRange: '$$$$',
      description:
        'Rasmus Munk\'s 50-course immersive experience blends food with theater, art, and social commentary in a dome.',
    },
    {
      name: 'Kadeau',
      distinction: '2-star',
      cuisine: 'Danish New Nordic',
      priceRange: '$$$$',
      description:
        'Bornholm island-inspired cuisine celebrates the remote Danish island\'s wild herbs, berries, and seafood traditions.',
    },
    {
      name: 'a|o|c',
      distinction: '2-star',
      cuisine: 'Nordic Creative',
      priceRange: '$$$$',
      description:
        'Christian Aarø and Søren Selin\'s intimate Tivoli Gardens restaurant crafts creative Nordic dishes with French roots.',
    },
    {
      name: 'Koan',
      distinction: '2-star',
      cuisine: 'Nordic-Asian Fusion',
      priceRange: '$$$$',
      description:
        'An exploration of umami through the lens of Korean and Nordic ingredients in an intimate Copenhagen setting.',
    },
    {
      name: 'Relæ',
      distinction: '1-star',
      cuisine: 'Danish New Nordic',
      priceRange: '$$$',
      description:
        'Christian Puglisi\'s pioneering organic restaurant on Jægersborggade serving the purest expression of New Nordic cuisine.',
    },
    {
      name: 'Gasoline Grill',
      distinction: 'bib-gourmand',
      cuisine: 'Burgers',
      priceRange: '$',
      description:
        'Cult Copenhagen burger joint in a converted gas station serving exceptional smash burgers with quality ingredients.',
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
    },
    {
      name: 'Grillið',
      distinction: 'recommended',
      cuisine: 'Icelandic Contemporary',
      priceRange: '$$$$',
      description:
        'Perched atop the Saga Hotel with panoramic views, serving refined Icelandic cuisine featuring Arctic char and lamb.',
    },
    {
      name: 'Bæjarins Beztu Pylsur',
      distinction: 'recommended',
      cuisine: 'Icelandic Street Food',
      priceRange: '$',
      description:
        'Reykjavik\'s legendary hot dog stand since 1937, serving lamb-based pylsur with crispy onions and remoulade.',
    },
    {
      name: 'Grillmarket',
      distinction: 'recommended',
      cuisine: 'Icelandic Grill',
      priceRange: '$$$',
      description:
        'Farm-to-table restaurant with an open grill showcasing Icelandic lamb, langoustine, and wild game.',
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
    },
    {
      name: 'Botrini\'s',
      distinction: '1-star',
      cuisine: 'Italian-Greek',
      priceRange: '$$$$',
      description:
        'Chef Ettore Botrini merges Italian roots with Greek ingredients in an elegant, art-filled Athens dining room.',
    },
    {
      name: 'CTC',
      distinction: '1-star',
      cuisine: 'Greek Contemporary',
      priceRange: '$$$$',
      description:
        'Alexandros Tsiotinis explores modern Greek cuisine through inventive tasting menus at this intimate Athens restaurant.',
    },
    {
      name: 'Varoulko Seaside',
      distinction: '1-star',
      cuisine: 'Greek Seafood',
      priceRange: '$$$',
      description:
        'Lefteris Lazarou\'s marina-side restaurant celebrates Greek seafood with Mediterranean flair at Mikrolimano.',
    },
    {
      name: 'Karamanlidika tou Fani',
      distinction: 'bib-gourmand',
      cuisine: 'Greek Deli',
      priceRange: '$$',
      description:
        'Charming deli-restaurant in the Athens market area serving Constantinople-Greek charcuterie and small plates.',
    },
    {
      name: 'Kostas Souvlaki',
      distinction: 'recommended',
      cuisine: 'Greek Street Food',
      priceRange: '$',
      description:
        'Tiny Syntagma Square souvlaki stand serving what many consider the best pork souvlaki wrap in Athens.',
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
    },
    {
      name: 'Compère Lapin',
      distinction: 'recommended',
      cuisine: 'Creole-Caribbean',
      priceRange: '$$$',
      description:
        'Nina Compton blends her St. Lucian heritage with Louisiana Creole traditions in a vibrant Warehouse District setting.',
    },
    {
      name: 'Dooky Chase\'s Restaurant',
      distinction: 'recommended',
      cuisine: 'Creole Soul Food',
      priceRange: '$$',
      description:
        'The legendary Leah Chase\'s Treme institution, serving iconic Creole gumbo and fried chicken since 1941.',
    },
    {
      name: 'Cochon',
      distinction: 'recommended',
      cuisine: 'Cajun',
      priceRange: '$$',
      description:
        'Donald Link\'s celebration of Cajun country cooking featuring house-smoked meats, boudin, and whole-hog cookery.',
    },
    {
      name: 'Café du Monde',
      distinction: 'recommended',
      cuisine: 'French-Creole Café',
      priceRange: '$',
      description:
        'Open 24/7 since 1862, this French Quarter icon serves pillowy beignets dusted in powdered sugar with chicory café au lait.',
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
    },
    {
      name: 'Al Mercat',
      distinction: 'recommended',
      cuisine: 'Mediterranean-Costa Rican',
      priceRange: '$$$',
      description:
        'José González\'s San José bistro bringing Mediterranean flavors to Costa Rican ingredients with market-driven creativity.',
    },
    {
      name: 'Soda Tapia',
      distinction: 'recommended',
      cuisine: 'Costa Rican Traditional',
      priceRange: '$',
      description:
        'Beloved San José institution open around the clock, serving hearty casados, gallo pinto, and fresh fruit refrescos.',
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
    },
    {
      name: 'Puerto Madero',
      distinction: 'recommended',
      cuisine: 'Seafood & Steak',
      priceRange: '$$$',
      description:
        'Upscale lagoon-front restaurant in the Hotel Zone known for premium cuts and fresh Caribbean seafood.',
    },
    {
      name: 'Tacos Rigo',
      distinction: 'recommended',
      cuisine: 'Mexican Street Food',
      priceRange: '$',
      description:
        'Legendary Hotel Zone taco stand where locals and visitors queue for perfectly grilled al pastor until late at night.',
    },
    {
      name: 'Lorenzillo\'s',
      distinction: 'recommended',
      cuisine: 'Mexican Lobster Seafood',
      priceRange: '$$$',
      description:
        'Over-the-lagoon landmark restaurant famous for its live lobster selection and Caribbean seafood since 1983.',
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
    },
    {
      name: 'Ambrosia',
      distinction: 'recommended',
      cuisine: 'French-Chilean',
      priceRange: '$$$$',
      description:
        'Carolina Bazán\'s elegant Providencia restaurant pairs refined French technique with Chilean wines and produce.',
    },
    {
      name: 'De Patio',
      distinction: 'recommended',
      cuisine: 'Chilean Contemporary',
      priceRange: '$$$',
      description:
        'Market-driven restaurant in Barrio Italia celebrating Chilean terroir with an ever-changing seasonal menu.',
    },
    {
      name: 'Liguria',
      distinction: 'recommended',
      cuisine: 'Chilean Traditional',
      priceRange: '$$',
      description:
        'Beloved Santiago institution with multiple locations serving generous Chilean home cooking and cold beers since 1962.',
    },
    {
      name: 'La Fuente Alemana',
      distinction: 'recommended',
      cuisine: 'Chilean Sandwiches',
      priceRange: '$',
      description:
        'Iconic counter-service spot where locals devour massive lomito and chacarero sandwiches piled high with toppings.',
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
    },
    {
      name: 'Maido',
      distinction: 'recommended',
      cuisine: 'Nikkei (Japanese-Peruvian)',
      priceRange: '$$$$',
      description:
        'Mitsuharu Tsumura\'s Nikkei cuisine masterfully blends Japanese technique with Peruvian ingredients, ranked World #1.',
    },
    {
      name: 'Kjolle',
      distinction: 'recommended',
      cuisine: 'Peruvian Contemporary',
      priceRange: '$$$$',
      description:
        'Pía León\'s vibrant restaurant spotlighting Peruvian biodiversity with bold flavors and stunning natural presentations.',
    },
    {
      name: 'Mérito',
      distinction: 'recommended',
      cuisine: 'Peruvian-Amazonian',
      priceRange: '$$$',
      description:
        'Juan Luis Martínez brings the flavors of the Amazon and Peruvian jungle to Barranco in creative, shareable plates.',
    },
    {
      name: 'Astrid y Gastón',
      distinction: 'recommended',
      cuisine: 'Peruvian Contemporary',
      priceRange: '$$$$',
      description:
        'Gastón Acurio\'s flagship that launched Peru\'s food revolution, set in a stunning 17th-century hacienda in San Isidro.',
    },
    {
      name: 'Isolina',
      distinction: 'recommended',
      cuisine: 'Peruvian Creole',
      priceRange: '$$',
      description:
        'José del Castillo\'s Barranco taberna serves hearty Limeño comfort food — seco de res, cau cau, and tacu tacu.',
    },
    {
      name: 'El Mercado',
      distinction: 'recommended',
      cuisine: 'Peruvian Ceviche',
      priceRange: '$$',
      description:
        'Rafael Osterling\'s bustling Miraflores cevichería showcases the freshest Peruvian seafood in a market-like atmosphere.',
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
    },
    {
      name: 'Leo',
      distinction: 'recommended',
      cuisine: 'Colombian Ciclo-Biome',
      priceRange: '$$$$',
      description:
        'Leonor Espinosa explores Colombia\'s immense biodiversity through her "ciclo-biome" concept, on Latin America\'s 50 Best.',
    },
    {
      name: 'Harry Sasson',
      distinction: 'recommended',
      cuisine: 'Colombian-International',
      priceRange: '$$$',
      description:
        'One of Bogotá\'s most established fine-dining destinations blending Colombian ingredients with global techniques.',
    },
    {
      name: 'Salvo Patria',
      distinction: 'recommended',
      cuisine: 'Colombian Bistro',
      priceRange: '$$',
      description:
        'Charming Chapinero restaurant with a lovely courtyard, serving creative Colombian dishes and natural wines.',
    },
    {
      name: 'La Puerta Falsa',
      distinction: 'recommended',
      cuisine: 'Colombian Traditional',
      priceRange: '$',
      description:
        'Bogotá\'s oldest restaurant (since 1816) near the cathedral, famous for its tamales, chocolate santafereño, and ajiaco.',
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
    },
    {
      name: 'Abou El Sid',
      distinction: 'recommended',
      cuisine: 'Egyptian Traditional',
      priceRange: '$$',
      description:
        'Elegant Zamalek restaurant decorated like a vintage Egyptian salon, serving classic dishes like koshari and molokhia.',
    },
    {
      name: 'Felfela',
      distinction: 'recommended',
      cuisine: 'Egyptian Traditional',
      priceRange: '$',
      description:
        'Cairo institution since 1963 serving beloved Egyptian staples — foul medames, ta\'ameya, and fresh juices downtown.',
    },
    {
      name: 'Koshary Abou Tarek',
      distinction: 'recommended',
      cuisine: 'Egyptian Street Food',
      priceRange: '$',
      description:
        'Four-story restaurant dedicated entirely to Egypt\'s national dish of pasta, rice, lentils, and spicy tomato sauce.',
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
    },
    {
      name: 'Buka',
      distinction: 'recommended',
      cuisine: 'West African',
      priceRange: '$$',
      description:
        'Vibrant Osu restaurant serving elevated Ghanaian and West African dishes in a colorful, art-filled setting.',
    },
    {
      name: 'Azmera',
      distinction: 'recommended',
      cuisine: 'Pan-African',
      priceRange: '$$',
      description:
        'Stylish Accra restaurant exploring flavors from across the African continent with creative cocktails.',
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
    },
    {
      name: 'La Table du Château',
      distinction: 'recommended',
      cuisine: 'Mauritian Contemporary',
      priceRange: '$$$',
      description:
        'Farm-to-fork dining at Labourdonnais Orchards featuring seasonal Mauritian produce and tropical flavors.',
    },
    {
      name: 'Dholl Puri stalls at Port Louis Central Market',
      distinction: 'recommended',
      cuisine: 'Mauritian Street Food',
      priceRange: '$',
      description:
        'The iconic flatbread filled with split pea curry, rougaille, and chutneys — Mauritius\'s beloved street food staple.',
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
    },
    {
      name: 'Vue de Monde',
      distinction: '1-star',
      cuisine: 'Australian Fine Dining',
      priceRange: '$$$$',
      description:
        'Shannon Bennett\'s 55th-floor restaurant at the Rialto delivers dramatic Australian tasting menus with city views.',
    },
    {
      name: 'Flower Drum',
      distinction: '1-star',
      cuisine: 'Cantonese',
      priceRange: '$$$$',
      description:
        'Melbourne\'s most revered Chinese restaurant has served exquisite Cantonese cuisine in Chinatown since 1975.',
    },
    {
      name: 'Cutler & Co.',
      distinction: '1-star',
      cuisine: 'Australian Modern',
      priceRange: '$$$',
      description:
        'Andrew McConnell\'s flagship Fitzroy restaurant epitomizes Melbourne\'s ingredient-driven dining scene.',
    },
    {
      name: 'Lûmé',
      distinction: '1-star',
      cuisine: 'Australian Innovative',
      priceRange: '$$$$',
      description:
        'Shaun Quade\'s avant-garde South Melbourne restaurant pushes the boundaries of Australian cuisine with bold creativity.',
    },
    {
      name: 'Tipo 00',
      distinction: 'bib-gourmand',
      cuisine: 'Italian Pasta',
      priceRange: '$$',
      description:
        'Andreas Papadakis\' CBD pasta bar serving exceptional handmade pasta dishes in a buzzing, no-reservations setting.',
    },
    {
      name: 'Lune Croissanterie',
      distinction: 'recommended',
      cuisine: 'French Bakery',
      priceRange: '$',
      description:
        'Kate Reid\'s Fitzroy bakery crafts what many consider the world\'s finest croissants using aerospace-inspired precision.',
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
    },
    {
      name: 'Villa Mahana',
      distinction: 'recommended',
      cuisine: 'French Mediterranean',
      priceRange: '$$$$',
      description:
        'Intimate 28-seat restaurant considered the finest on Bora Bora, requiring reservations weeks in advance.',
    },
    {
      name: 'Bloody Mary\'s',
      distinction: 'recommended',
      cuisine: 'Polynesian Seafood',
      priceRange: '$$$',
      description:
        'Legendary sand-floor restaurant where you pick your fresh fish from an ice display and it\'s grilled to order.',
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
    },
    {
      name: 'Sidart',
      distinction: 'recommended',
      cuisine: 'Indian-New Zealand Fusion',
      priceRange: '$$$$',
      description:
        'Sid Sahrawat blends Indian culinary heritage with NZ produce in creative tasting menus at this Ponsonby Road gem.',
    },
    {
      name: 'Depot',
      distinction: 'recommended',
      cuisine: 'New Zealand Seafood',
      priceRange: '$$',
      description:
        'Al Brown\'s bustling Federal Street eatery showcasing the best of New Zealand\'s oceans and farms in shared plates.',
    },
    {
      name: 'Ima Cuisine',
      distinction: 'recommended',
      cuisine: 'Middle Eastern',
      priceRange: '$$',
      description:
        'Yael Shochat\'s long-running Fort Street restaurant serves soulful Israeli and Middle Eastern dishes with warmth.',
    },
  ],
}
