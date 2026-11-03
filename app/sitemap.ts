import type { MetadataRoute } from 'next';

const staticPaths = [
  '',
  '/adatkezelesi-tajekoztato',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${process.env.DOMAIN}`;

  return staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}
