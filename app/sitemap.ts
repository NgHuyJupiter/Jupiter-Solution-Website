import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.jupiter-ai.pro';
const ROUTES = ['', '/products', '/services', '/capabilities', '/contact', '/privacy'];
const LOCALES = ['vi', 'en'];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of ROUTES) {
      const pathUrl = `${BASE_URL}/${locale}${route}`;
      sitemapEntries.push({
        url: pathUrl,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
// Note: This matches the dynamic sitemap generation schema for Next.js App Router.
