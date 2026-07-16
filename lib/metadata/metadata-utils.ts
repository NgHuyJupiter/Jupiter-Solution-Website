import { Metadata } from 'next';

const BASE_URL = 'https://www.jupiter-ai.pro';

interface MetadataParams {
  title: string;
  description: string;
  path: string;
  locale: string;
  ogImage?: string;
}

/**
 * Generate Next.js Metadata object with proper B2B multi-language SEO defaults.
 */
export function getPageMetadata({
  title,
  description,
  path,
  locale,
  ogImage = '/brand/og-image.jpg',
}: MetadataParams): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${BASE_URL}/${locale}${cleanPath}`;
  const alternateVi = `${BASE_URL}/vi${cleanPath}`;
  const alternateEn = `${BASE_URL}/en${cleanPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        vi: alternateVi,
        en: alternateEn,
        'x-default': alternateVi, // Default is Vietnamese (Sao Mộc)
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Sao Mộc · Jupiter Solutions Technology',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Returns corporate B2B JSON-LD structured data for Google organization search crawler mapping.
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Công ty Cổ phần Giải pháp Công nghệ Sao Mộc',
    'alternateName': 'Sao Mộc · Jupiter Solutions Technology',
    'url': BASE_URL,
    'logo': `${BASE_URL}/brand/logo.png`,
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+84-326-813-947',
      'contactType': 'sales',
      'areaServed': 'VN',
      'availableLanguage': ['Vietnamese', 'English']
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Tầng 12, Toà nhà Sao Mộc, 88 Đại Cồ Việt, Hai Bà Trưng',
      'addressLocality': 'Hà Nội',
      'addressCountry': 'VN'
    },
    'sameAs': [
      'https://www.linkedin.com/company/jupiter-solutions-technology', // [CONTENT VERIFICATION REQUIRED]
      'https://github.com/jupiter-solutions'                          // [CONTENT VERIFICATION REQUIRED]
    ]
  };
}
