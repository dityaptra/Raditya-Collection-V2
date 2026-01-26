import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',     
      allow: '/',         
      disallow: '/private/', // (Opsional) Blokir folder private jika nanti ada
    },
    sitemap: 'https://www.radityacollection.web.id/sitemap.xml',
  };
}