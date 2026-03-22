export interface GalleryImage {
  url: string
  alt: string
  credit?: string
}

export const DESTINATION_GALLERY: Record<string, GalleryImage[]> = {
  // ============== ASIA ==============

  'tokyo': [
    { url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85', alt: 'Tokyo skyline with Tokyo Tower glowing at dusk', credit: 'Andre Benz' },
    { url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200&q=85', alt: 'Shibuya crossing at night with neon lights and crowds', credit: 'Jezael Melgoza' },
    { url: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=85', alt: 'Cherry blossoms framing Mount Fuji in the distance', credit: 'David Edelstein' },
    { url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=85', alt: 'Senso-ji temple gate with red lantern in Asakusa', credit: 'Jezael Melgoza' },
    { url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=85', alt: 'Bowl of ramen with soft-boiled egg and chashu pork', credit: 'Alva Pratt' },
  ],

  'bangkok': [
    { url: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=85', alt: 'Wat Arun temple towers along the Chao Phraya River', credit: 'Florian Wehde' },
    { url: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=1200&q=85', alt: 'Grand Palace golden spires gleaming in sunlight', credit: 'Evan Krause' },
    { url: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=85', alt: 'Bangkok floating market with boats selling fresh fruit', credit: 'Miltiadis Fragkidis' },
    { url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=85', alt: 'Street food stalls with pad thai and grilled skewers in Chinatown', credit: 'Lisheng Chang' },
    { url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=85', alt: 'Bangkok skyline glowing at night over the river', credit: 'Braden Jarvis' },
  ],

  'bali': [
    { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=85', alt: 'Tegallalang rice terraces with lush green paddies', credit: 'Alfiano Sutianto' },
    { url: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=85', alt: 'Pura Ulun Danu Bratan temple on misty lake', credit: 'Sander Wehkamp' },
    { url: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=1200&q=85', alt: 'Surfers on Bali beach at golden sunset', credit: 'Zoe' },
    { url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=85', alt: 'Balinese Hindu temple gate with intricate stone carvings', credit: 'Krisna Iv' },
    { url: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1200&q=85', alt: 'Sacred Monkey Forest Sanctuary in Ubud', credit: 'Ruben Hutabarat' },
  ],

  'seoul': [
    { url: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1200&q=85', alt: 'Gyeongbokgung Palace with mountains in background', credit: 'Ciaran O\'Brien' },
    { url: 'https://images.unsplash.com/photo-1546874177-9e664107314e?w=1200&q=85', alt: 'Bukchon Hanok Village traditional Korean houses', credit: 'Sava Bobov' },
    { url: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200&q=85', alt: 'Neon-lit streets of Myeongdong shopping district at night', credit: 'Sava Bobov' },
    { url: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&q=85', alt: 'Korean BBQ sizzling on a tabletop grill', credit: 'Jakub Dziubak' },
    { url: 'https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?w=1200&q=85', alt: 'N Seoul Tower illuminated above the city at night', credit: 'Mathew Schwartz' },
  ],

  'hanoi': [
    { url: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=85', alt: 'Hoan Kiem Lake with Turtle Tower at sunrise', credit: 'Silver Ringvee' },
    { url: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=1200&q=85', alt: 'Motorbikes and vendors in the bustling Old Quarter', credit: 'Huy Phan' },
    { url: 'https://images.unsplash.com/photo-1576185850258-5ba07b5e5b3f?w=1200&q=85', alt: 'Vietnamese pho soup with fresh herbs and lime', credit: 'Markus Winkler' },
    { url: 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=1200&q=85', alt: 'Train Street with narrow houses lining the tracks', credit: 'Sam McNamara' },
    { url: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=1200&q=85', alt: 'Ha Long Bay karst islands rising from emerald waters', credit: 'Ammie Ngo' },
  ],

  'singapore': [
    { url: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85', alt: 'Marina Bay Sands hotel and skyline at twilight', credit: 'Peter Nguyen' },
    { url: 'https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=1200&q=85', alt: 'Gardens by the Bay Supertree Grove lit up at night', credit: 'Annie Spratt' },
    { url: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=85', alt: 'Colorful shophouses in Chinatown Singapore', credit: 'David Kubovsky' },
    { url: 'https://images.unsplash.com/photo-1567591370504-82d250060803?w=1200&q=85', alt: 'Hawker center with plates of chicken rice and laksa', credit: 'Yeo Khee' },
    { url: 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1200&q=85', alt: 'Clarke Quay riverside restaurants and bars at night', credit: 'Mike Enerio' },
  ],

  'kyoto': [
    { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=85', alt: 'Fushimi Inari Shrine with thousands of orange torii gates', credit: 'Lin Mei' },
    { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=85', alt: 'Bamboo grove path in Arashiyama forest', credit: 'Su San Lee' },
    { url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=85', alt: 'Kinkaku-ji Golden Pavilion reflected in mirror pond', credit: 'Sorasak' },
    { url: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1200&q=85', alt: 'Geisha walking through historic Gion district', credit: 'Sorasak' },
    { url: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=1200&q=85', alt: 'Traditional matcha tea ceremony with sweets', credit: 'Jason Leung' },
  ],

  'taipei': [
    { url: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=1200&q=85', alt: 'Taipei 101 tower rising above the city skyline', credit: 'Thomas Tucker' },
    { url: 'https://images.unsplash.com/photo-1553649033-3fbc8d0fa3cb?w=1200&q=85', alt: 'Jiufen Old Street with red lanterns at dusk', credit: 'Vernon Raineil Cenzon' },
    { url: 'https://images.unsplash.com/photo-1529528070131-eda9f3e90985?w=1200&q=85', alt: 'Night market stall with bubble tea and street food', credit: 'Rich Lee' },
    { url: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&q=85', alt: 'Longshan Temple ornate roof and incense smoke', credit: 'Lisanto' },
    { url: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=1200&q=85', alt: 'Elephant Mountain viewpoint overlooking Taipei at sunset', credit: 'Vernon Raineil Cenzon' },
  ],

  'chiang-mai': [
    { url: 'https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=1200&q=85', alt: 'Doi Suthep golden temple high in the misty mountains', credit: 'Mathew Schwartz' },
    { url: 'https://images.unsplash.com/photo-1512553715501-2af860993099?w=1200&q=85', alt: 'Yi Peng sky lantern festival with floating lights', credit: 'Darren Lawrence' },
    { url: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=1200&q=85', alt: 'Night Bazaar market stalls with handmade crafts', credit: 'Dan Freeman' },
    { url: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1200&q=85', alt: 'Thai green curry and sticky rice at a local restaurant', credit: 'Alana Harris' },
    { url: 'https://images.unsplash.com/photo-1600592505790-87ca9ea1fb71?w=1200&q=85', alt: 'Lush jungle waterfalls outside Chiang Mai', credit: 'Sippakorn Yamkasikorn' },
  ],

  'jaipur': [
    { url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=85', alt: 'Hawa Mahal Palace of Winds pink sandstone facade', credit: 'Annie Spratt' },
    { url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=85', alt: 'Amber Fort perched on the hillside at golden hour', credit: 'Liam Baldock' },
    { url: 'https://images.unsplash.com/photo-1524309191917-61c32998c7cc?w=1200&q=85', alt: 'Colorful bazaar with textiles and spices', credit: 'Annie Spratt' },
    { url: 'https://images.unsplash.com/photo-1590050572678-b47c23cb2e87?w=1200&q=85', alt: 'Jal Mahal water palace floating on Man Sagar Lake', credit: 'Shalender Kumar' },
    { url: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e13?w=1200&q=85', alt: 'Jaipur city gate illuminated at night', credit: 'Naveen Kumar' },
  ],

  'maldives': [
    { url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=85', alt: 'Overwater bungalows stretching into turquoise lagoon', credit: 'Ishan' },
    { url: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=85', alt: 'Crystal clear water with white sand beach and palm trees', credit: 'Shifaaz Shamoon' },
    { url: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=85', alt: 'Aerial view of a Maldivian atoll ring in deep blue ocean', credit: 'Ishan' },
    { url: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=1200&q=85', alt: 'Sunset over the Indian Ocean with silhouetted palm trees', credit: 'Rayyu Maldives' },
    { url: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1200&q=85', alt: 'Snorkeling in coral reef with tropical fish', credit: 'Ishan' },
  ],

  'colombo': [
    { url: 'https://images.unsplash.com/photo-1742276996766-392f323c2eed?w=1200&q=85', alt: 'Colombo skyline with modern towers along the coast', credit: 'Nazry Hashim' },
    { url: 'https://images.unsplash.com/photo-1586613835680-66e17e1e0848?w=1200&q=85', alt: 'Gangaramaya Temple ornate Buddhist shrine', credit: 'Dhanushka Senadeera' },
    { url: 'https://images.unsplash.com/photo-1580810734915-1b3a9cff7f35?w=1200&q=85', alt: 'Colorful tuk-tuks on Colombo city streets', credit: 'Dhanushka Senadeera' },
    { url: 'https://images.unsplash.com/photo-1588860939765-1f0e3d7aaff3?w=1200&q=85', alt: 'Fresh Sri Lankan curry spread with rice and sambols', credit: 'Eaters Collective' },
    { url: 'https://images.unsplash.com/photo-1578159510498-a7b5386e6e42?w=1200&q=85', alt: 'Galle Face Green promenade at sunset', credit: 'Nazry Hashim' },
  ],

  // ============== EUROPE ==============

  'paris': [
    { url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85', alt: 'Eiffel Tower rising above Paris at golden hour', credit: 'Chris Karidis' },
    { url: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=1200&q=85', alt: 'Cozy Montmartre cafe with flower-covered awning', credit: 'Karan Mandre' },
    { url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=85', alt: 'Seine River with bridges and Notre-Dame in the distance', credit: 'Chris Karidis' },
    { url: 'https://images.unsplash.com/photo-1530707169997-076a7cb67068?w=1200&q=85', alt: 'Fresh croissants and pastries at a Parisian boulangerie', credit: 'Alex Thoyer' },
    { url: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&q=85', alt: 'Louvre Museum glass pyramid illuminated at night', credit: 'Yeo Khee' },
  ],

  'barcelona': [
    { url: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=85', alt: 'Sagrada Familia basilica towering spires against blue sky', credit: 'Ruggiero Calabrese' },
    { url: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65ef8e?w=1200&q=85', alt: 'Park Guell mosaic terrace overlooking the city', credit: 'Erwan Hesry' },
    { url: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=1200&q=85', alt: 'La Boqueria market with fresh fruit and seafood stalls', credit: 'Marco Tjokro' },
    { url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=85', alt: 'Gothic Quarter narrow streets with hanging laundry', credit: 'Toa Heftiba' },
    { url: 'https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=1200&q=85', alt: 'Barceloneta Beach with W Hotel sail building at sunset', credit: 'Logan Armstrong' },
  ],

  'lisbon': [
    { url: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200&q=85', alt: 'Yellow Tram 28 climbing through Alfama neighborhood', credit: 'Lisa Feh' },
    { url: 'https://images.unsplash.com/photo-1548707309-dcebeab426c8?w=1200&q=85', alt: 'Colorful tiled buildings on Lisbon hillside', credit: 'Liam McKay' },
    { url: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=85', alt: 'Pasteis de nata custard tarts fresh from the oven', credit: 'Diogo Nunes' },
    { url: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=1200&q=85', alt: 'Belem Tower on the Tagus River at golden hour', credit: 'Anabel EP' },
    { url: 'https://images.unsplash.com/photo-1573145609686-f2a80e0b87f2?w=1200&q=85', alt: 'Miradouro viewpoint overlooking red rooftops at sunset', credit: 'Julian Dik' },
  ],

  'prague': [
    { url: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=85', alt: 'Prague Old Town Square with Astronomical Clock tower', credit: 'Anthony DELANOIX' },
    { url: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&q=85', alt: 'Charles Bridge with statues and Prague Castle at dawn', credit: 'Anthony DELANOIX' },
    { url: 'https://images.unsplash.com/photo-1562850019-2bdd22402584?w=1200&q=85', alt: 'Red rooftops of Prague seen from Petrin Hill', credit: 'Anna Kaminova' },
    { url: 'https://images.unsplash.com/photo-1571412835791-bf3a5f0e1456?w=1200&q=85', alt: 'Traditional Czech trdelnik pastry at a street market', credit: 'Olena Bohovyk' },
    { url: 'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?w=1200&q=85', alt: 'Prague Castle and St. Vitus Cathedral illuminated at night', credit: 'Anthony DELANOIX' },
  ],

  'dubrovnik': [
    { url: 'https://images.unsplash.com/photo-1655560585033-67e928edd1f7?w=1200&q=85', alt: 'Dubrovnik Old Town walled city from above', credit: 'Sorin Cicos' },
    { url: 'https://images.unsplash.com/photo-1590059828632-85cc898bc3f7?w=1200&q=85', alt: 'Walking the ancient city walls overlooking terracotta roofs', credit: 'Cat Bassano' },
    { url: 'https://images.unsplash.com/photo-1555990538-1e0c4b62c0e4?w=1200&q=85', alt: 'Crystal clear Adriatic Sea along rocky coastline', credit: 'Sasa Tacker' },
    { url: 'https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=1200&q=85', alt: 'Stradun limestone-paved main street with baroque buildings', credit: 'Bogdan Dada' },
    { url: 'https://images.unsplash.com/photo-1564594326930-14e22477e0af?w=1200&q=85', alt: 'Dubrovnik harbor with boats and Fort Lovrijenac at sunset', credit: 'Damiano Baschiera' },
  ],

  'santorini': [
    { url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=85', alt: 'Blue-domed churches in Oia with caldera views', credit: 'Tom Grimbert' },
    { url: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=85', alt: 'White-washed buildings cascading down the cliffside', credit: 'Jonathan Gallegos' },
    { url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=1200&q=85', alt: 'Stunning sunset over the Aegean Sea from Oia', credit: 'Heidi Kaden' },
    { url: 'https://images.unsplash.com/photo-1551801841-ecad834ace30?w=1200&q=85', alt: 'Narrow cobblestone path between whitewashed walls', credit: 'David Billings' },
    { url: 'https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=1200&q=85', alt: 'Fresh Greek salad and wine overlooking the caldera', credit: 'Luisa Brimble' },
  ],

  'amsterdam': [
    { url: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=85', alt: 'Amsterdam canal with historic gabled houses and boats', credit: 'Gaurav Jain' },
    { url: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=1200&q=85', alt: 'Bicycles parked along a canal bridge with flowers', credit: 'Jace & Afsoon' },
    { url: 'https://images.unsplash.com/photo-1576924542622-772281b13aa8?w=1200&q=85', alt: 'Rijksmuseum facade with I Amsterdam letters', credit: 'Robin Ooode' },
    { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=85', alt: 'Albert Cuyp Market with Dutch cheese and stroopwafel stalls', credit: 'Fred Rivett' },
    { url: 'https://images.unsplash.com/photo-1512470876337-d88bb5b6b929?w=1200&q=85', alt: 'Canal houses reflecting in the water at night', credit: 'Massimo Virgilio' },
  ],

  'rome': [
    { url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=85', alt: 'Colosseum ancient amphitheater bathed in golden light', credit: 'Spencer Davis' },
    { url: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&q=85', alt: 'Trevi Fountain baroque marble masterpiece', credit: 'Cristina Gottardi' },
    { url: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&q=85', alt: 'Trastevere neighborhood cobblestone streets with ivy-covered walls', credit: 'Cristina Gottardi' },
    { url: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=1200&q=85', alt: 'Fresh pasta and wine at a traditional Roman trattoria', credit: 'Heather Gill' },
    { url: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=1200&q=85', alt: 'St. Peter\'s Basilica dome and Vatican at sunset', credit: 'Caleb Miller' },
  ],

  'edinburgh': [
    { url: 'https://images.unsplash.com/photo-1626053005252-9cced16477aa?w=1200&q=85', alt: 'Edinburgh Castle perched on volcanic rock', credit: 'Jorg Angeli' },
    { url: 'https://images.unsplash.com/photo-1565361849078-294849288eff?w=1200&q=85', alt: 'Victoria Street colorful shopfronts curving downhill', credit: 'Adam Wilson' },
    { url: 'https://images.unsplash.com/photo-1583225214464-9296029427aa?w=1200&q=85', alt: 'Arthur\'s Seat hillside overlooking the city at sunset', credit: 'Federico Beccari' },
    { url: 'https://images.unsplash.com/photo-1567163450457-dfaacd9bf013?w=1200&q=85', alt: 'Royal Mile cobblestones with historic tenements', credit: 'Jorg Angeli' },
    { url: 'https://images.unsplash.com/photo-1570282767674-6e249fb27f5f?w=1200&q=85', alt: 'Calton Hill monuments at twilight with city lights', credit: 'Adam Wilson' },
  ],

  'budapest': [
    { url: 'https://images.unsplash.com/photo-1541343672885-9be56236302a?w=1200&q=85', alt: 'Hungarian Parliament building from across the Danube', credit: 'Andreas Brücker' },
    { url: 'https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?w=1200&q=85', alt: 'Szechenyi Chain Bridge lit up at night', credit: 'Keszthelyi Timi' },
    { url: 'https://images.unsplash.com/photo-1551867633-194f125bddfa?w=1200&q=85', alt: 'Szechenyi Thermal Bath outdoor pool with steam rising', credit: 'Nick Fewings' },
    { url: 'https://images.unsplash.com/photo-1577738060073-4b3fbf8e93dd?w=1200&q=85', alt: 'Great Market Hall interior with paprika and sausage vendors', credit: 'Julius Drost' },
    { url: 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=1200&q=85', alt: 'Fisherman\'s Bastion terrace overlooking the river at sunrise', credit: 'Keszthelyi Timi' },
  ],

  // ============== NORTH & CENTRAL AMERICA ==============

  'mexico-city': [
    { url: 'https://images.unsplash.com/photo-1518659526054-190340b32735?w=1200&q=85', alt: 'Palacio de Bellas Artes marble art deco facade', credit: 'Bhargava Marripati' },
    { url: 'https://images.unsplash.com/photo-1547995886-6dc09384c6e6?w=1200&q=85', alt: 'Colorful buildings and murals in Coyoacan neighborhood', credit: 'Jezael Melgoza' },
    { url: 'https://images.unsplash.com/photo-1562552476-8ac59b2a2e46?w=1200&q=85', alt: 'Street tacos al pastor with pineapple and salsa', credit: 'Jeswin Thomas' },
    { url: 'https://images.unsplash.com/photo-1585465173850-9ee26fa20f9d?w=1200&q=85', alt: 'Zocalo main square with the Metropolitan Cathedral', credit: 'ALONSO DE MENA' },
    { url: 'https://images.unsplash.com/photo-1574493264149-87eb7c934bc7?w=1200&q=85', alt: 'Angel of Independence monument on Paseo de la Reforma at dusk', credit: 'Daniela Cuevas' },
  ],

  'tulum': [
    { url: 'https://images.unsplash.com/photo-1581710862235-eb6e05d8783f?w=1200&q=85', alt: 'Ancient Mayan ruins perched on cliff above Caribbean Sea', credit: 'Jared Rice' },
    { url: 'https://images.unsplash.com/photo-1504759560942-13f2e1a0a21b?w=1200&q=85', alt: 'Turquoise Caribbean waters along white sand beach', credit: 'Spencer Watson' },
    { url: 'https://images.unsplash.com/photo-1559288924-703c7e53c0e9?w=1200&q=85', alt: 'Cenote with crystal clear water surrounded by jungle', credit: 'Olena Bohovyk' },
    { url: 'https://images.unsplash.com/photo-1502790671504-542ad42d5189?w=1200&q=85', alt: 'Bohemian beach club with palm-thatched cabanas', credit: 'Chen Hu' },
    { url: 'https://images.unsplash.com/photo-1531050736163-0e9d6da59b71?w=1200&q=85', alt: 'Palm tree silhouettes against a vivid tropical sunset', credit: 'Sean Oulashin' },
  ],

  'vancouver': [
    { url: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=1200&q=85', alt: 'Vancouver skyline with North Shore mountains', credit: 'Mike Benna' },
    { url: 'https://images.unsplash.com/photo-1508167928029-18fc4aac51f9?w=1200&q=85', alt: 'Stanley Park seawall with totem poles and forest', credit: 'Lee Robinson' },
    { url: 'https://images.unsplash.com/photo-1578521046753-56c28aadb916?w=1200&q=85', alt: 'Granville Island Public Market with fresh seafood', credit: 'Nick Tiemeyer' },
    { url: 'https://images.unsplash.com/photo-1560820384-dc68d60e56f2?w=1200&q=85', alt: 'Capilano Suspension Bridge in lush rainforest', credit: 'John Lee' },
    { url: 'https://images.unsplash.com/photo-1562422512-efe17c1db043?w=1200&q=85', alt: 'English Bay beach at sunset with city lights', credit: 'Mike Benna' },
  ],

  'banff': [
    { url: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&q=85', alt: 'Moraine Lake turquoise waters with Valley of Ten Peaks', credit: 'John Lee' },
    { url: 'https://images.unsplash.com/photo-1561134643-668f9057cce4?w=1200&q=85', alt: 'Lake Louise emerald waters with Victoria Glacier', credit: 'John Lee' },
    { url: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&q=85', alt: 'Banff town nestled in the Rocky Mountain valley', credit: 'Kalen Emsley' },
    { url: 'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1200&q=85', alt: 'Wildlife elk grazing with mountain backdrop', credit: 'Toomas Tartes' },
    { url: 'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?w=1200&q=85', alt: 'Northern lights dancing over Vermilion Lakes', credit: 'Zoltan Tasi' },
  ],

  'havana': [
    { url: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=1200&q=85', alt: 'Classic American vintage cars on Havana streets', credit: 'Alexander Kunze' },
    { url: 'https://images.unsplash.com/photo-1570299437522-25057ab0e8ea?w=1200&q=85', alt: 'Colorful colonial buildings along the Malecon seawall', credit: 'Stéphan Valentin' },
    { url: 'https://images.unsplash.com/photo-1545601445-4d6a0a795424?w=1200&q=85', alt: 'Old Havana plaza with baroque architecture', credit: 'Spencer Everett' },
    { url: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=1200&q=85', alt: 'Live salsa band performing in a Havana courtyard', credit: 'Persnickety Prints' },
    { url: 'https://images.unsplash.com/photo-1504759722826-18de1e1b1a66?w=1200&q=85', alt: 'Sunset over the Malecon with crashing waves', credit: 'Martin Jernberg' },
  ],

  'san-juan': [
    { url: 'https://images.unsplash.com/photo-1734883930516-79a04535da8e?w=1200&q=85', alt: 'Colorful colonial buildings in Old San Juan', credit: 'Willian Justen' },
    { url: 'https://images.unsplash.com/photo-1579687196544-08ae57ab5060?w=1200&q=85', alt: 'El Morro fortress overlooking the Atlantic Ocean', credit: 'Sonder Quest' },
    { url: 'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=1200&q=85', alt: 'Cobblestone streets with pastel-painted buildings', credit: 'Stuck in Customs' },
    { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=85', alt: 'Fresh mofongo and tropical cocktails at local restaurant', credit: 'Edgar Castrejon' },
    { url: 'https://images.unsplash.com/photo-1548504769-900b70ed122e?w=1200&q=85', alt: 'San Juan Bay with cruise ships and city skyline at dusk', credit: 'Robert Bhatt' },
  ],

  // ============== SOUTH AMERICA ==============

  'buenos-aires': [
    { url: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=85', alt: 'La Boca colorful Caminito street with painted houses', credit: 'Barbara Zandoval' },
    { url: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=1200&q=85', alt: 'Obelisco monument on Avenida 9 de Julio at night', credit: 'Dennis Schrader' },
    { url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=85', alt: 'Tango dancers performing on a Buenos Aires street', credit: 'Héctor Emilio Gonzalez' },
    { url: 'https://images.unsplash.com/photo-1588625500633-a0752a1a8464?w=1200&q=85', alt: 'Argentine asado steak grilling over open flame', credit: 'Loija Nguyen' },
    { url: 'https://images.unsplash.com/photo-1584848892618-f04e95a86df6?w=1200&q=85', alt: 'Recoleta Cemetery ornate mausoleums at golden hour', credit: 'Barbara Zandoval' },
  ],

  'cartagena': [
    { url: 'https://images.unsplash.com/photo-1534586171786-479ba91943f5?w=1200&q=85', alt: 'Colorful colonial buildings in the Walled City', credit: 'Ricardo Gomez Angel' },
    { url: 'https://images.unsplash.com/photo-1558423837-0e5c68ecc6f9?w=1200&q=85', alt: 'Clock Tower gate entrance to the Old Town', credit: 'Leandro Loureiro' },
    { url: 'https://images.unsplash.com/photo-1583997052301-0042b0fc0126?w=1200&q=85', alt: 'Bougainvillea-draped balconies on narrow streets', credit: 'Milo Miloezger' },
    { url: 'https://images.unsplash.com/photo-1551704619-009c5e47ae16?w=1200&q=85', alt: 'Fresh ceviche and tropical fruit at a local market', credit: 'Hermes Rivera' },
    { url: 'https://images.unsplash.com/photo-1574794470824-e4c7c5434ea4?w=1200&q=85', alt: 'Castillo San Felipe de Barajas fortress at sunset', credit: 'Ricardo Gomez Angel' },
  ],

  'cusco': [
    { url: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85', alt: 'Machu Picchu ancient Inca citadel in the clouds', credit: 'Willian Justen' },
    { url: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&q=85', alt: 'Plaza de Armas with colonial cathedral and Inca walls', credit: 'Persnickety Prints' },
    { url: 'https://images.unsplash.com/photo-1561464382-349a0d78a9b7?w=1200&q=85', alt: 'Colorful textiles and alpaca wool at San Pedro Market', credit: 'Willian Justen' },
    { url: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=85', alt: 'Salineras de Maras salt terraces in Sacred Valley', credit: 'Errin Casano' },
    { url: 'https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=1200&q=85', alt: 'Cusco terracotta rooftops seen from Sacsayhuaman ruins', credit: 'Eddie Bugajewski' },
  ],

  'rio-de-janeiro': [
    { url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85', alt: 'Christ the Redeemer and Sugarloaf panoramic cityscape', credit: 'Agustín Diaz Gargiulo' },
    { url: 'https://images.unsplash.com/photo-1544989164-31dc3291c578?w=1200&q=85', alt: 'Copacabana Beach with mosaic boardwalk and beachgoers', credit: 'Raphael Nogueira' },
    { url: 'https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f?w=1200&q=85', alt: 'Selaron Steps colorful mosaic tiles in Lapa', credit: 'Raphael Nogueira' },
    { url: 'https://images.unsplash.com/photo-1551625297-7de9d2babb7c?w=1200&q=85', alt: 'Brazilian street food and acai bowls', credit: 'Jen P' },
    { url: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&q=85', alt: 'Sugarloaf Mountain cable car at sunset', credit: 'Raphael Nogueira' },
  ],

  'medellin': [
    { url: 'https://images.unsplash.com/photo-1680209082064-fcbe45846ea9?w=1200&q=85', alt: 'Medellin skyline nestled in the Aburra Valley', credit: 'Marcela Cardona' },
    { url: 'https://images.unsplash.com/photo-1598113867665-edd02a3c6a40?w=1200&q=85', alt: 'Comuna 13 outdoor escalators with vibrant street art', credit: 'Milo Miloezger' },
    { url: 'https://images.unsplash.com/photo-1599050747521-10bb39e29923?w=1200&q=85', alt: 'Botero Plaza with bronze sculptures in the plaza', credit: 'Milo Miloezger' },
    { url: 'https://images.unsplash.com/photo-1583377065883-15b0f0e0ef4c?w=1200&q=85', alt: 'Fresh Colombian coffee and empanadas at a local cafe', credit: 'Milo Miloezger' },
    { url: 'https://images.unsplash.com/photo-1597093677171-9bdc5e1d5972?w=1200&q=85', alt: 'Metro cable car above green hills of Medellin at dusk', credit: 'Milo Miloezger' },
  ],

  // ============== AFRICA ==============

  'marrakech': [
    { url: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200&q=85', alt: 'Jemaa el-Fna square bustling with market stalls and crowds', credit: 'Annie Spratt' },
    { url: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=85', alt: 'Colorful souk alleyway with hanging lanterns and carpets', credit: 'Annie Spratt' },
    { url: 'https://images.unsplash.com/photo-1560611588-163f295eb145?w=1200&q=85', alt: 'Bahia Palace intricate tilework and carved plaster', credit: 'Sergey Pesterev' },
    { url: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=1200&q=85', alt: 'Tagine pots simmering at a Moroccan food stall', credit: 'Heather Gill' },
    { url: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=85', alt: 'Majorelle Garden with cobalt blue villa and cacti', credit: 'Canmandawe Ella' },
  ],

  'cape-town': [
    { url: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=85', alt: 'Table Mountain towering over the city and harbor', credit: 'Tobias Reich' },
    { url: 'https://images.unsplash.com/photo-1566041510394-cf7ad78aa44b?w=1200&q=85', alt: 'Bo-Kaap colorful houses on cobblestone streets', credit: 'Taryn Elliott' },
    { url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=85', alt: 'Cape of Good Hope dramatic cliffs meeting the ocean', credit: 'Dim Hou' },
    { url: 'https://images.unsplash.com/photo-1576485375217-d6a95e34d043?w=1200&q=85', alt: 'V&A Waterfront food market with local wines and braai', credit: 'Olga Kononenko' },
    { url: 'https://images.unsplash.com/photo-1591113730795-b59f9da63e02?w=1200&q=85', alt: 'Lion\'s Head summit hike at sunset over the Atlantic', credit: 'Tobias Reich' },
  ],

  'zanzibar': [
    { url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=85', alt: 'Pristine white sand beach with turquoise Indian Ocean', credit: 'Dan Smedley' },
    { url: 'https://images.unsplash.com/photo-1585229259244-e58aa7e7fd47?w=1200&q=85', alt: 'Stone Town narrow streets with carved wooden doors', credit: 'Dan Smedley' },
    { url: 'https://images.unsplash.com/photo-1590431474025-de0e15fcc0e9?w=1200&q=85', alt: 'Traditional dhow sailboat on crystal waters at sunset', credit: 'Dan Smedley' },
    { url: 'https://images.unsplash.com/photo-1585228328464-63e25aaae7b4?w=1200&q=85', alt: 'Spice market with fresh cloves, cinnamon, and vanilla', credit: 'Dwayne Joe' },
    { url: 'https://images.unsplash.com/photo-1580985512846-3e24e66b0d94?w=1200&q=85', alt: 'Zanzibar seafood grill with fresh catch on the beach', credit: 'Dan Smedley' },
  ],

  'nairobi': [
    { url: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1200&q=85', alt: 'Nairobi skyline with modern skyscrapers', credit: 'Amani Nation' },
    { url: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1200&q=85', alt: 'Giraffe at Nairobi National Park with city backdrop', credit: 'Harshil Gudka' },
    { url: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1200&q=85', alt: 'Maasai Market with beaded jewelry and colorful fabrics', credit: 'Antenna' },
    { url: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?w=1200&q=85', alt: 'Kenyan ugali and nyama choma at a local eatery', credit: 'James Wiseman' },
    { url: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&q=85', alt: 'African savannah sunset with acacia tree silhouette', credit: 'Ray Rui' },
  ],

  // ============== OCEANIA ==============

  'sydney': [
    { url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=85', alt: 'Sydney Opera House and Harbour Bridge at sunset', credit: 'Dan Freeman' },
    { url: 'https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=1200&q=85', alt: 'Bondi Beach with surfers and golden sand', credit: 'Caleb' },
    { url: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=1200&q=85', alt: 'The Rocks historic neighborhood with weekend markets', credit: 'Jack Finnigan' },
    { url: 'https://images.unsplash.com/photo-1530276371031-2faab6e89e8c?w=1200&q=85', alt: 'Fresh oysters and seafood at Sydney Fish Market', credit: 'Jairo Alzate' },
    { url: 'https://images.unsplash.com/photo-1523428096049-1ca593f0ea82?w=1200&q=85', alt: 'Sydney Harbour at night with illuminated skyline', credit: 'Keith Zhu' },
  ],

  'queenstown': [
    { url: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&q=85', alt: 'Lake Wakatipu surrounded by the Remarkables mountains', credit: 'Todd Quackenbush' },
    { url: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=1200&q=85', alt: 'Milford Sound towering fiord with waterfalls', credit: 'Tom Hall' },
    { url: 'https://images.unsplash.com/photo-1504736038806-94bd1115084e?w=1200&q=85', alt: 'Queenstown downtown waterfront with autumn colors', credit: 'Bernard Spragg' },
    { url: 'https://images.unsplash.com/photo-1531731457588-46d0a4bce4fb?w=1200&q=85', alt: 'Bungy jumping at Kawarau Bridge over gorge', credit: 'Todd Quackenbush' },
    { url: 'https://images.unsplash.com/photo-1499578124509-1611b77778c8?w=1200&q=85', alt: 'Star-filled night sky over Queenstown and lake', credit: 'Graham Holtshausen' },
  ],

  'fiji': [
    { url: 'https://images.unsplash.com/photo-1706066954162-d557cc64a163?w=1200&q=85', alt: 'Fiji island aerial view with turquoise lagoon', credit: 'Shifaaz Shamoon' },
    { url: 'https://images.unsplash.com/photo-1575818130640-e7e3b0d4f3f3?w=1200&q=85', alt: 'Palm-fringed white sand beach with crystal clear water', credit: 'Sandro Schuh' },
    { url: 'https://images.unsplash.com/photo-1584275893275-07254a4993be?w=1200&q=85', alt: 'Traditional Fijian bure hut by the ocean', credit: 'Tristan Bayer' },
    { url: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=85', alt: 'Snorkeling over colorful coral reef', credit: 'Christoffer Engstrom' },
    { url: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&q=85', alt: 'Tropical sunset with silhouetted palms over the Pacific', credit: 'Sean Oulashin' },
  ],

  // ============== NEW ASIA ADDITIONS ==============

  'beijing': [
    { url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=85', alt: 'Great Wall of China stretching across mountain ridges', credit: 'Hanson Lu' },
    { url: 'https://images.unsplash.com/photo-1537539722584-67b2faa006c0?w=1200&q=85', alt: 'Forbidden City golden-roofed palace complex', credit: 'Ling Tang' },
    { url: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=85', alt: 'Temple of Heaven circular prayer hall with blue tiles', credit: 'Zhang Kaiyv' },
    { url: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=1200&q=85', alt: 'Beijing hutong alleyway with traditional courtyard homes', credit: 'Ling Tang' },
    { url: 'https://images.unsplash.com/photo-1563254936-84af42b0bcd3?w=1200&q=85', alt: 'Peking duck being sliced at a traditional restaurant', credit: 'Jason Leung' },
  ],

  'shanghai': [
    { url: 'https://images.unsplash.com/photo-1537531383496-f4749b535950?w=1200&q=85', alt: 'Pudong skyline with Oriental Pearl Tower and skyscrapers', credit: 'Ralf Leineweber' },
    { url: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=1200&q=85', alt: 'The Bund waterfront promenade with colonial architecture', credit: 'Road Trip with Raj' },
    { url: 'https://images.unsplash.com/photo-1567253508607-3da78efcb0d6?w=1200&q=85', alt: 'Yu Garden traditional Chinese pavilions and ponds', credit: 'Adolfo Felix' },
    { url: 'https://images.unsplash.com/photo-1494399786595-0e50997f31a3?w=1200&q=85', alt: 'Xiaolongbao soup dumplings at a dim sum restaurant', credit: 'Charles Deluvio' },
    { url: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=1200&q=85', alt: 'Nanjing Road neon lights and shopping at night', credit: 'Li Yang' },
  ],

  'hong-kong': [
    { url: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1200&q=85', alt: 'Hong Kong skyline from Victoria Peak at night', credit: 'Ruslan Bardash' },
    { url: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=1200&q=85', alt: 'Dense apartment buildings creating urban canyon', credit: 'Romain Tordo' },
    { url: 'https://images.unsplash.com/photo-1533551268962-824e232eaf30?w=1200&q=85', alt: 'Dim sum bamboo steamers with har gow and siu mai', credit: 'Bady Abbas' },
    { url: 'https://images.unsplash.com/photo-1576788369575-4ab045b9287e?w=1200&q=85', alt: 'Star Ferry crossing Victoria Harbour with junk boat', credit: 'Manson Yim' },
    { url: 'https://images.unsplash.com/photo-1578076175432-9fa5bfed4beb?w=1200&q=85', alt: 'Temple Street Night Market glowing neon signs', credit: 'Joseph Chan' },
  ],

  'phuket': [
    { url: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=85', alt: 'Maya Bay crystal clear water with limestone cliffs', credit: 'Sebastian Pena Lambarri' },
    { url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=85', alt: 'Long-tail boats on turquoise Andaman Sea', credit: 'Lisheng Chang' },
    { url: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1200&q=85', alt: 'Big Buddha statue overlooking the island', credit: 'Jared Rice' },
    { url: 'https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?w=1200&q=85', alt: 'Thai seafood feast with grilled prawns on the beach', credit: 'Delaney Van' },
    { url: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=1200&q=85', alt: 'Patong Beach sunset with longboats silhouetted', credit: 'Hanny Naibaho' },
  ],

  'siem-reap': [
    { url: 'https://images.unsplash.com/photo-1600490036275-35f5f1656861?w=1200&q=85', alt: 'Angkor Wat temple silhouette reflected at sunrise', credit: 'Vicky Sim' },
    { url: 'https://images.unsplash.com/photo-1569321564608-f36b4f3ea456?w=1200&q=85', alt: 'Tree roots overtaking Ta Prohm temple ruins', credit: 'Dan Smedley' },
    { url: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=1200&q=85', alt: 'Intricate bas-relief carvings on temple walls', credit: 'Evgeny Tchebotarev' },
    { url: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=1200&q=85', alt: 'Pub Street night market with food stalls and lights', credit: 'Diego Jimenez' },
    { url: 'https://images.unsplash.com/photo-1601014879887-e8dbad0b8310?w=1200&q=85', alt: 'Cambodian amok fish curry in banana leaf', credit: 'Vu Anh' },
  ],

  'luang-prabang': [
    { url: 'https://images.unsplash.com/photo-1583531172005-814194ae08c5?w=1200&q=85', alt: 'Buddhist monks collecting morning alms at dawn', credit: 'Yuni Shrestha' },
    { url: 'https://images.unsplash.com/photo-1582650625119-3a304b8e8dab?w=1200&q=85', alt: 'Kuang Si waterfalls turquoise pools in jungle', credit: 'Suhel Vba' },
    { url: 'https://images.unsplash.com/photo-1577862027030-0d7b46b8d2f4?w=1200&q=85', alt: 'Golden temple spires along the Mekong River', credit: 'Suhel Vba' },
    { url: 'https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=1200&q=85', alt: 'Night market with Hmong textiles and handicrafts', credit: 'Humphrey Muleba' },
    { url: 'https://images.unsplash.com/photo-1556825020-8afed76db27c?w=1200&q=85', alt: 'Mekong River sunset with wooden boats', credit: 'Sylwia Bartyzel' },
  ],

  'kuala-lumpur': [
    { url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=85', alt: 'Petronas Twin Towers illuminated against night sky', credit: 'Esmonde Yong' },
    { url: 'https://images.unsplash.com/photo-1582216928235-c34f49b3e06e?w=1200&q=85', alt: 'Batu Caves rainbow staircase and Hindu temple', credit: 'Kit Suman' },
    { url: 'https://images.unsplash.com/photo-1599570131868-55ab8a1760a4?w=1200&q=85', alt: 'Jalan Alor street food hawkers with satay and roti', credit: 'Afif Kusuma' },
    { url: 'https://images.unsplash.com/photo-1556375413-f6cdb1d56400?w=1200&q=85', alt: 'Islamic Arts Museum ornate geometric dome interior', credit: 'Syed Ahmad' },
    { url: 'https://images.unsplash.com/photo-1573065706775-42a4e1f0e181?w=1200&q=85', alt: 'KL skyline from helipad rooftop bar at twilight', credit: 'Sadie Teper' },
  ],

  'kathmandu': [
    { url: 'https://images.unsplash.com/photo-1558799401-1dcba79834c2?w=1200&q=85', alt: 'Boudhanath Stupa with prayer flags and golden spire', credit: 'Raimond Klavins' },
    { url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=85', alt: 'Himalayan mountain range seen from Nagarkot at sunrise', credit: 'Raimond Klavins' },
    { url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=85', alt: 'Durbar Square ancient temples and pagodas', credit: 'Adli Wahid' },
    { url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1200&q=85', alt: 'Thamel street with colorful shops and prayer wheels', credit: 'Raimond Klavins' },
    { url: 'https://images.unsplash.com/photo-1526712318848-5f38e2740d44?w=1200&q=85', alt: 'Momo dumplings steaming at a Kathmandu street vendor', credit: 'Raimond Klavins' },
  ],

  // ============== NEW EUROPE ADDITIONS ==============

  'istanbul': [
    { url: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=85', alt: 'Blue Mosque minarets silhouetted against sunset sky', credit: 'Adli Wahid' },
    { url: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=85', alt: 'Hagia Sophia massive dome and Byzantine mosaics', credit: 'Adli Wahid' },
    { url: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=85', alt: 'Grand Bazaar arched hallways with lanterns and ceramics', credit: 'Patrick Selin' },
    { url: 'https://images.unsplash.com/photo-1571220455896-20a876413db5?w=1200&q=85', alt: 'Turkish breakfast spread with simit, cheese, and tea', credit: 'Tai Jyun Chang' },
    { url: 'https://images.unsplash.com/photo-1558383331-f520f2888351?w=1200&q=85', alt: 'Bosphorus ferry crossing between Europe and Asia at dusk', credit: 'Osman Koycu' },
  ],

  'vienna': [
    { url: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=85', alt: 'Schonbrunn Palace grand facade and manicured gardens', credit: 'Dimitry Anikin' },
    { url: 'https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?w=1200&q=85', alt: 'St. Stephen\'s Cathedral ornate Gothic spire', credit: 'Michael Fousert' },
    { url: 'https://images.unsplash.com/photo-1568739253582-c8720de10d3d?w=1200&q=85', alt: 'Traditional Viennese coffee house with pastries', credit: 'Julian Hochgesang' },
    { url: 'https://images.unsplash.com/photo-1544143802-ab55a9f4acff?w=1200&q=85', alt: 'Belvedere Palace with reflecting pool at golden hour', credit: 'Jacek Dylag' },
    { url: 'https://images.unsplash.com/photo-1548947464-1f3cca38bd03?w=1200&q=85', alt: 'Vienna State Opera house illuminated at night', credit: 'Dimitry Anikin' },
  ],

  'copenhagen': [
    { url: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=85', alt: 'Nyhavn colorful waterfront houses and sailboats', credit: 'Daniel Rasmussen' },
    { url: 'https://images.unsplash.com/photo-1552560880-2482dfc5a1e4?w=1200&q=85', alt: 'Tivoli Gardens amusement park lights at night', credit: 'Febiyan' },
    { url: 'https://images.unsplash.com/photo-1524946274118-e7680e33ceb1?w=1200&q=85', alt: 'Cyclists on Copenhagen bridge over canal', credit: 'Max Adulyanukosol' },
    { url: 'https://images.unsplash.com/photo-1569255977840-f75e5d0b71ca?w=1200&q=85', alt: 'Smorrebrod open-faced sandwich at a Nordic restaurant', credit: 'Thomas Bormans' },
    { url: 'https://images.unsplash.com/photo-1594905013085-10f1e3c8c2ba?w=1200&q=85', alt: 'The Little Mermaid statue in Copenhagen harbour', credit: 'Kévin Langlais' },
  ],

  'reykjavik': [
    { url: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1200&q=85', alt: 'Hallgrimskirkja church towering over the colorful city', credit: 'Daniel Plan' },
    { url: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1200&q=85', alt: 'Northern lights dancing green and purple over Iceland', credit: 'Jonatan Pie' },
    { url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=1200&q=85', alt: 'Blue Lagoon geothermal spa with milky blue water', credit: 'Andrea Davis' },
    { url: 'https://images.unsplash.com/photo-1520209268518-aec60b8bb5ca?w=1200&q=85', alt: 'Gullfoss waterfall with rainbow in golden circle', credit: 'Jack Anstey' },
    { url: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=1200&q=85', alt: 'Colorful tin-roofed houses along Reykjavik harborfront', credit: 'Jon Flobrant' },
  ],

  'athens': [
    { url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=85', alt: 'Acropolis and Parthenon atop the hill at golden hour', credit: 'Spencer Davis' },
    { url: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1200&q=85', alt: 'Plaka neighborhood with tavernas and bougainvillea', credit: 'Milada Vigerova' },
    { url: 'https://images.unsplash.com/photo-1562832135-14a35d25edef?w=1200&q=85', alt: 'Greek salad with fresh feta, olives, and tomatoes', credit: 'Mariana Medvedeva' },
    { url: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=1200&q=85', alt: 'Monastiraki Square with Acropolis view at sunset', credit: 'Arthur Yeti' },
    { url: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1200&q=85', alt: 'Temple of Poseidon at Cape Sounion overlooking the sea', credit: 'Anna Church' },
  ],

  // ============== NEW NORTH AMERICA ADDITIONS ==============

  'new-orleans': [
    { url: 'https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=85', alt: 'French Quarter Bourbon Street with wrought-iron balconies', credit: 'Rosie Kerr' },
    { url: 'https://images.unsplash.com/photo-1560712423-99d1daa63b67?w=1200&q=85', alt: 'Jackson Square with St. Louis Cathedral at twilight', credit: 'Rosie Kerr' },
    { url: 'https://images.unsplash.com/photo-1608096299210-db7e5692a549?w=1200&q=85', alt: 'Crawfish boil with corn and potatoes Cajun style', credit: 'Timothy Hales Bennett' },
    { url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85', alt: 'Jazz musicians performing on Frenchmen Street', credit: 'William Recinos' },
    { url: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=1200&q=85', alt: 'Oak-lined Garden District mansions draped in Spanish moss', credit: 'Rosie Kerr' },
  ],

  'costa-rica': [
    { url: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1200&q=85', alt: 'Arenal Volcano rising above tropical rainforest', credit: 'Matthew Essman' },
    { url: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&q=85', alt: 'Toucan perched on branch in cloud forest', credit: 'Zdenek Machacek' },
    { url: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&q=85', alt: 'Manuel Antonio beach with lush jungle backdrop', credit: 'Atanas Malamov' },
    { url: 'https://images.unsplash.com/photo-1528129550655-a35b14a6e820?w=1200&q=85', alt: 'Suspension bridge walkway through rainforest canopy', credit: 'Simon Berger' },
    { url: 'https://images.unsplash.com/photo-1518259102261-b713f1564e47?w=1200&q=85', alt: 'Pacific coast sunset with palm trees and surfers', credit: 'Roberto Nickson' },
  ],

  'cancun': [
    { url: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85', alt: 'Cancun hotel zone aerial view with turquoise Caribbean', credit: 'Marv Watson' },
    { url: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=1200&q=85', alt: 'Chichen Itza Mayan pyramid El Castillo', credit: 'Kentaro Toma' },
    { url: 'https://images.unsplash.com/photo-1535913070837-2b7de3a0b483?w=1200&q=85', alt: 'Isla Mujeres white sand beach with crystal water', credit: 'Viviana Rishe' },
    { url: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=1200&q=85', alt: 'Fresh ceviche and tacos at beachside restaurant', credit: 'Edgar Castrejon' },
    { url: 'https://images.unsplash.com/photo-1590080876039-4b42fcee04cd?w=1200&q=85', alt: 'Underwater museum sculpture in Caribbean reef', credit: 'Nanu Berks' },
  ],

  // ============== NEW SOUTH AMERICA ADDITIONS ==============

  'santiago': [
    { url: 'https://images.unsplash.com/photo-1594568284297-7c64464062b1?w=1200&q=85', alt: 'Santiago skyline with Andes mountains backdrop', credit: 'Henrique Ferreira' },
    { url: 'https://images.unsplash.com/photo-1588962091159-55c365eb9192?w=1200&q=85', alt: 'Cerro San Cristobal hilltop statue overlooking the city', credit: 'Sebastián Alfaro' },
    { url: 'https://images.unsplash.com/photo-1590846083693-f23fdede809f?w=1200&q=85', alt: 'Mercado Central fish market with fresh seafood', credit: 'Mika Baumeister' },
    { url: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200&q=85', alt: 'Barrio Lastarria colorful murals and cafe culture', credit: 'Jack Finnigan' },
    { url: 'https://images.unsplash.com/photo-1510179828668-d811a78cd3ea?w=1200&q=85', alt: 'Chilean wine country vineyard with Andes views', credit: 'Kym Ellis' },
  ],

  'lima': [
    { url: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85', alt: 'Lima Miraflores district cliffs overlooking the Pacific', credit: 'Willian Justen' },
    { url: 'https://images.unsplash.com/photo-1580181509143-30e90df91ec3?w=1200&q=85', alt: 'Plaza de Armas with colonial cathedral and gardens', credit: 'Raul Bragau' },
    { url: 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=1200&q=85', alt: 'Peruvian ceviche with fresh fish and lime', credit: 'Amanda Lim' },
    { url: 'https://images.unsplash.com/photo-1588862973686-6cb5c69a57e1?w=1200&q=85', alt: 'Barranco bohemian district with Bridge of Sighs', credit: 'Pedro Lastra' },
    { url: 'https://images.unsplash.com/photo-1604858673673-1ea0c9614e88?w=1200&q=85', alt: 'Huaca Pucllana illuminated pre-Inca ruins at night', credit: 'Scott Umstattd' },
  ],

  'bogota': [
    { url: 'https://images.unsplash.com/photo-1568578501256-ee5db5001ed9?w=1200&q=85', alt: 'Bogota cityscape with Cerros Orientales mountains', credit: 'Pedro Lastra' },
    { url: 'https://images.unsplash.com/photo-1536702071395-d07dacbcc27f?w=1200&q=85', alt: 'La Candelaria colonial neighborhood colorful streets', credit: 'Kate Trysh' },
    { url: 'https://images.unsplash.com/photo-1586985564150-11ee04838034?w=1200&q=85', alt: 'Museo del Oro gold artifacts display', credit: 'Santiago Rodriguez' },
    { url: 'https://images.unsplash.com/photo-1625638237915-20a50f12c1ad?w=1200&q=85', alt: 'Colombian arepas and bandeja paisa at local eatery', credit: 'Milo Miloezger' },
    { url: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1200&q=85', alt: 'Monserrate hilltop church with city views at sunset', credit: 'Pedro Lastra' },
  ],

  // ============== NEW AFRICA ADDITIONS ==============

  'cairo': [
    { url: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=85', alt: 'Great Pyramids of Giza with the Sphinx in foreground', credit: 'Simon Berger' },
    { url: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=85', alt: 'Cairo cityscape with minarets and Nile River', credit: 'Samer Daboul' },
    { url: 'https://images.unsplash.com/photo-1568322445389-f64e08de55af?w=1200&q=85', alt: 'Khan el-Khalili bazaar with lanterns and spices', credit: 'Nadine Shaabana' },
    { url: 'https://images.unsplash.com/photo-1590846083693-f23fdede809f?w=1200&q=85', alt: 'Egyptian koshari street food in a bowl', credit: 'Dennis Schrader' },
    { url: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?w=1200&q=85', alt: 'Mohamed Ali Mosque at the Citadel at golden hour', credit: 'Alex Azabache' },
  ],

  'accra': [
    { url: 'https://images.unsplash.com/photo-1595925889916-af7f25cc0df2?w=1200&q=85', alt: 'Accra skyline with Independence Arch', credit: 'Rowen Smith' },
    { url: 'https://images.unsplash.com/photo-1586908013228-4c46bd50fec8?w=1200&q=85', alt: 'Jamestown colorful fishing boats on the shore', credit: 'Kwasi Harrington' },
    { url: 'https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?w=1200&q=85', alt: 'Makola Market with vibrant textiles and produce', credit: 'Kwadwo Anane' },
    { url: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=1200&q=85', alt: 'Jollof rice and grilled tilapia Ghanaian style', credit: 'Joice Kelly' },
    { url: 'https://images.unsplash.com/photo-1569082238099-c4c40f5c001d?w=1200&q=85', alt: 'Labadi Beach with palm trees and Atlantic waves', credit: 'Raimond Klavins' },
  ],

  'mauritius': [
    { url: 'https://images.unsplash.com/photo-1589979481223-deb893043163?w=1200&q=85', alt: 'Le Morne Brabant mountain rising from turquoise lagoon', credit: 'Xavier Coiffic' },
    { url: 'https://images.unsplash.com/photo-1564594736624-def7a10ab047?w=1200&q=85', alt: 'Chamarel seven-colored earth geological formation', credit: 'Xavier Coiffic' },
    { url: 'https://images.unsplash.com/photo-1586396978270-d41f4491a9f6?w=1200&q=85', alt: 'Overwater hammock and crystal clear lagoon', credit: 'Sander Crombach' },
    { url: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=1200&q=85', alt: 'Hindu temple at Grand Bassin crater lake', credit: 'Xavier Coiffic' },
    { url: 'https://images.unsplash.com/photo-1622557850956-5e7e7cb79e4b?w=1200&q=85', alt: 'Mauritius sunset over the Indian Ocean from beach', credit: 'Xavier Coiffic' },
  ],

  // ============== NEW OCEANIA ADDITIONS ==============

  'melbourne': [
    { url: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1200&q=85', alt: 'Melbourne city skyline along the Yarra River', credit: 'Weyne Yew' },
    { url: 'https://images.unsplash.com/photo-1523985042073-f32ad06be1cd?w=1200&q=85', alt: 'Hosier Lane famous street art and graffiti walls', credit: 'Annie Spratt' },
    { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=85', alt: 'Queen Victoria Market fresh produce and artisan stalls', credit: 'Fred Rivett' },
    { url: 'https://images.unsplash.com/photo-1545042746-ec9e5e9d7e65?w=1200&q=85', alt: 'Specialty coffee pour-over at a Melbourne cafe', credit: 'Tyler Nix' },
    { url: 'https://images.unsplash.com/photo-1562068206-e5156ade9c01?w=1200&q=85', alt: 'Flinders Street Station clock tower at dusk', credit: 'Weyne Yew' },
  ],

  'bora-bora': [
    { url: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=1200&q=85', alt: 'Mount Otemanu volcanic peak rising above the lagoon', credit: 'Thomas Lefebvre' },
    { url: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?w=1200&q=85', alt: 'Overwater bungalows with glass-floor panels', credit: 'Ishan' },
    { url: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=85', alt: 'Snorkeling in vibrant coral garden with tropical fish', credit: 'Christoffer Engstrom' },
    { url: 'https://images.unsplash.com/photo-1500255077233-3a3c6cd67da7?w=1200&q=85', alt: 'White sand beach with crystal lagoon and palm trees', credit: 'Sean Oulashin' },
    { url: 'https://images.unsplash.com/photo-1549194400-c4245ecf2c28?w=1200&q=85', alt: 'Polynesian sunset painting the sky orange and purple', credit: 'Rafael Leao' },
  ],

  'auckland': [
    { url: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&q=85', alt: 'Auckland skyline with Sky Tower from harbour', credit: 'Todd Quackenbush' },
    { url: 'https://images.unsplash.com/photo-1504536828688-0c4cc5ef3e9c?w=1200&q=85', alt: 'Rangitoto Island volcanic cone across the harbour', credit: 'Dan Freeman' },
    { url: 'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?w=1200&q=85', alt: 'Piha Beach black sand with Lion Rock formation', credit: 'Sulthan Auliya' },
    { url: 'https://images.unsplash.com/photo-1563284223-333497472e88?w=1200&q=85', alt: 'Auckland Fish Market with fresh New Zealand seafood', credit: 'Jason Leung' },
    { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85', alt: 'Mount Eden crater rim with panoramic city views at sunset', credit: 'Graham Holtshausen' },
  ],
}
