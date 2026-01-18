const StructuredData = () => {
  const jsonLd = [{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Raditya Collection",
    "image": "https://radityacollection.web.id/images/hero.jpg",
    "telephone": "+6285946182092",
    "url": "https://radityacollection.web.id",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Singaraja",
      "addressLocality": "Buleleng",
      "addressRegion": "Bali",
      "addressCountry": "ID"
    },
    "priceRange": "$",
    "description": "Jasa lubang kancing dan pasang kancing profesional."
  },
  {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Raditya Collection",
      "alternateName": "Raditya Collection Singaraja",
      "url": "https://radityacollection.web.id"
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;