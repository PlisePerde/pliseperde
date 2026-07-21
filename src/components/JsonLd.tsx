import { siteConfig } from "@/lib/site-config";
import { organizationSchema, breadcrumbSchema, websiteSchema } from "@/lib/schema";

interface JsonLdProps {
  schemas: object[];
}

export default function JsonLd({ schemas }: JsonLdProps) {
  const allSchemas = [organizationSchema(), websiteSchema(), ...schemas];
  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export function createBreadcrumbJsonLd(breadcrumb: string[] | { name: string; url: string }[]) {
  const items = breadcrumb.map((item, index) => {
    if (typeof item === "object") {
      return { name: item.name, url: item.url };
    }
    const slug = index === 0 ? "" : item.toLowerCase().replace(/ /g, "-");
    return {
      name: item,
      url: index === 0 ? "/" : `/${slug}`,
    };
  });
  return breadcrumbSchema(items);
}

export function createProductSchema(data: {
  name: string;
  description: string;
  lowPrice: string;
  highPrice: string;
  ratingValue?: string;
  reviewCount?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    brand: { "@id": `${siteConfig.url}/#organization` },
    category: "Plise Perde",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "TRY",
      lowPrice: data.lowPrice,
      highPrice: data.highPrice,
      offerCount: "5",
      availability: "https://schema.org/InStock",
    },
    ...(data.ratingValue && data.reviewCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: data.ratingValue,
            reviewCount: data.reviewCount,
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
  };
}

export function createServiceSchema(data: {
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    serviceType: data.serviceType || data.name,
    provider: { "@id": `${siteConfig.url}/#organization` },
    ...(data.areaServed
      ? { areaServed: { "@type": "City", name: data.areaServed } }
      : {}),
  };
}

export function createArticleSchema(data: {
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    datePublished: data.datePublished || "2026-01-01",
    dateModified: data.dateModified || new Date().toISOString().split("T")[0],
    inLanguage: "tr-TR",
  };
}

export function createFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createWebPageSchema(data: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.name,
    description: data.description,
    url: `${siteConfig.url}${data.url}`,
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  };
}

export function createContactPageSchema(data: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: data.name,
    description: data.description,
    url: `${siteConfig.url}${data.url}`,
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntity: { "@id": `${siteConfig.url}/#localbusiness` },
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.openingHours.days,
        opens: siteConfig.openingHours.opens,
        closes: siteConfig.openingHours.closes,
      },
    ],
    sameAs: Object.values(siteConfig.social),
  };
}

export function createImageSchema(data: {
  url: string;
  caption?: string;
  description?: string;
  contentUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: `${siteConfig.url}${data.url}`,
    contentUrl: data.contentUrl ? `${siteConfig.url}${data.contentUrl}` : `${siteConfig.url}${data.url}`,
    caption: data.caption,
    description: data.description || data.caption,
    inLanguage: "tr-TR",
    creator: { "@id": `${siteConfig.url}/#organization` },
    copyrightHolder: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function createVideoSchema(data: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate?: string;
  duration?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: data.name,
    description: data.description,
    thumbnailUrl: `${siteConfig.url}${data.thumbnailUrl}`,
    contentUrl: `${siteConfig.url}${data.contentUrl}`,
    uploadDate: data.uploadDate || new Date().toISOString().split("T")[0],
    duration: data.duration,
    inLanguage: "tr-TR",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function createCollectionPageSchema(data: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.name,
    description: data.description,
    url: `${siteConfig.url}${data.url}`,
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    hasPart: data.items.map((item) => ({
      "@type": "WebPage",
      name: item.name,
      url: `${siteConfig.url}${item.url}`,
    })),
  };
}
