import { siteConfig } from "@/lib/site-config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "additionalType": "Manufacturer",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.webp`,
    foundingDate: String(siteConfig.foundedYear),
    founder: {
      "@type": "Person",
      name: "Plise Perde",
    },
    knowsAbout: [
      "plise perde üretimi",
      "honeycomb perde",
      "motorlu perde sistemleri",
      "gece gündüz perde",
      "blackout perde",
      "pencere giydirme sistemleri",
      "ısı yalıtım sistemleri",
      "perde montajı",
      "özel ölçü perde üretimi",
    ],
    hasCredential: [
      "CE Certification",
      "ISO 9001 Quality Management",
      "TSE Turkish Standards Institute",
      "EN 13501-1 Fire Classification",
    ],
    sameAs: Object.values(siteConfig.social),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: "Turkish",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "15",
      unitText: "employees",
    },
    productionVolume: {
      "@type": "QuantitativeValue",
      value: "56000",
      unitText: "units per year",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.webp`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.openingHours.days,
      opens: siteConfig.openingHours.opens,
      closes: siteConfig.openingHours.closes,
    },
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      { "@type": "AdministrativeArea", name: "İstanbul" },
      { "@type": "AdministrativeArea", name: "Ankara" },
      { "@type": "AdministrativeArea", name: "İzmir" },
      { "@type": "AdministrativeArea", name: "Bursa" },
      { "@type": "AdministrativeArea", name: "Antalya" },
      { "@type": "AdministrativeArea", name: "Kocaeli" },
      { "@type": "AdministrativeArea", name: "Adana" },
      { "@type": "AdministrativeArea", name: "Konya" },
      { "@type": "AdministrativeArea", name: "Gaziantep" },
      { "@type": "AdministrativeArea", name: "Eskişehir" },
      { "@type": "AdministrativeArea", name: "Samsun" },
      { "@type": "AdministrativeArea", name: "Kayseri" },
      { "@type": "AdministrativeArea", name: "Mersin" },
      { "@type": "AdministrativeArea", name: "Trabzon" },
      { "@type": "AdministrativeArea", name: "Diyarbakır" },
    ],
    sameAs: Object.values(siteConfig.social),
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: "Plise Perde",
    url: siteConfig.url,
    inLanguage: "tr-TR",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function speakableSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: "Plise Perde — Özel Ölçü Üretim & Hızlı Teslimat",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[role='doc-subtitle']", ".hero-description"],
    },
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
