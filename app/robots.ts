import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://www.jupiter-ai.pro/sitemap.xml',
  };
}
// Note: This matches the robots config schema for Next.js App Router.
