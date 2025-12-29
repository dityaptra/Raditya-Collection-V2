const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Raditya Collection",
    "image": "https://www.radityacollection.web.id/images/hero.jpg",
    "telephone": "+6285946182092", // Ganti dengan nomor WA Anda
    "url": "https://www.radityacollection.web.id",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Singaraja",
      "addressLocality": "Buleleng",
      "addressRegion": "Bali",
      "addressCountry": "ID"
    },
    "priceRange": "$",
    "description": "Jasa lubang kancing dan pasang kancing profesional."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;