import type { Destination } from '@/data/types'

export function DestinationJsonLd({ destination }: { destination: Destination }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destination.name,
    description: destination.description,
    image: `https://wherenexttrip.com${destination.heroImage}`,
    url: `https://wherenexttrip.com/destination/${destination.slug}`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: destination.coordinates.lat,
      longitude: destination.coordinates.lng,
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: destination.country,
    },
    touristType: {
      '@type': 'Audience',
      audienceType: destination.vibeTags.join(', '),
    },
    includesAttraction: destination.topThingsToDo.map((name) => ({
      '@type': 'TouristAttraction',
      name,
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://wherenexttrip.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Explore',
        item: 'https://wherenexttrip.com/explore',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: destination.name,
        item: `https://wherenexttrip.com/destination/${destination.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  )
}
