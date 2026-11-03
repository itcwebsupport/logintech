import type { Site } from '@/stores/main';

export default function LocalBusinessJsonLd({ site }: { site: Site }) {
  const sameAs = [
    site.facebookUrl,
    site.instagramUrl,
    site.youtubeUrl,
    site.linkedinUrl,
    site.threadsUrl,
    site.tiktokUrl,
  ].filter((url): url is string => Boolean(url));

  const telephones = [site.phone, site.phone2].filter((phone): phone is string => Boolean(phone));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: "LIDA és Társa 97' Kft.",
    legalName: "LIDA ÉS TÁRSA 97' Könyvelő, Adótanácsadó és Szolgáltató Kft.",
    url: `https://${process.env.DOMAIN}`,
    foundingDate: '1997',
    taxID: '11594303-2-06',
    areaServed: 'Szeged',
    ...(site.address && { address: site.address }),
    ...(telephones.length > 0 && { telephone: telephones.length === 1 ? telephones[0] : telephones }),
    ...(site.email && { email: site.email }),
    ...(site.openingTime && { openingHours: site.openingTime }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
