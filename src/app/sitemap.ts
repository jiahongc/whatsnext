import type { MetadataRoute } from 'next'
import destinations from '@/data/destinations.json'

const BASE_URL = 'https://whatsnext.travel'

export default function sitemap(): MetadataRoute.Sitemap {
  const destinationEntries: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${BASE_URL}/destination/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/explore`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...destinationEntries,
  ]
}
