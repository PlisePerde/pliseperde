import { siteConfig } from "@/lib/site-config";
import { organizationSchema, breadcrumbSchema, websiteSchema, localBusinessSchema } from "@/lib/schema";

interface JsonLdProps {
  schemas: object[];
}

export default function JsonLd({ schemas }: JsonLdProps) {
  const allSchemas = [organizationSchema(), localBusinessSchema(), websiteSchema(), ...schemas];
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
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    datePublished: data.datePublished ? `${data.datePublished}T00:00:00+03:00` : "2026-01-01T00:00:00+03:00",
    dateModified: data.dateModified ? `${data.dateModified}T00:00:00+03:00` : new Date().toISOString(),
    inLanguage: "tr-TR",
    ...(data.image && {
      image: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${data.image}`,
        contentUrl: `${siteConfig.url}${data.image}`,
        inLanguage: "tr-TR",
        copyrightHolder: { "@id": `${siteConfig.url}/#organization` },
      },
    }),
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
    creditText: siteConfig.name,
    copyrightNotice: `© ${siteConfig.foundedYear} ${siteConfig.name} — Tüm hakları saklıdır`,
    license: `${siteConfig.url}/kullanim-sartlari/`,
    acquireLicensePage: `${siteConfig.url}/iletisim/`,
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

export function createBlogSchema(data: {
  name: string;
  description: string;
  url: string;
  posts: { title: string; url: string; datePublished: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: data.name,
    description: data.description,
    url: `${siteConfig.url}${data.url}`,
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    blogPost: data.posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteConfig.url}${post.url}`,
      datePublished: post.datePublished,
      author: { "@id": `${siteConfig.url}/#organization` },
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "tr-TR",
    })),
  };
}

export function createBlogPostingSchema(data: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
  url: string;
  section?: string;
  image?: string;
  imageAlt?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.headline,
    description: data.description,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      "@type": "Organization",
      name: data.author || siteConfig.name,
      "@id": `${siteConfig.url}/#organization`,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "tr-TR",
    keywords: data.keywords?.join(", "),
    articleSection: data.section,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${data.url}`,
    },
    ...(data.image && {
      image: {
        "@type": "ImageObject",
        url: data.image,
        width: 1200,
        height: 675,
        caption: data.imageAlt || data.headline,
      },
    }),
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

export function createImageGallerySchema(data: {
  name: string;
  description: string;
  url: string;
  images: {
    src: string;
    alt: string;
    caption?: string;
    description?: string;
    width?: number;
    height?: number;
  }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: data.name,
    description: data.description,
    url: `${siteConfig.url}${data.url}`,
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    image: data.images.map((img) => ({
      "@type": "ImageObject",
      url: `${siteConfig.url}${img.src}`,
      contentUrl: `${siteConfig.url}${img.src}`,
      name: img.alt,
      caption: img.caption || img.alt,
      description: img.description || img.caption || img.alt,
      inLanguage: "tr-TR",
      creator: { "@id": `${siteConfig.url}/#organization` },
      copyrightHolder: { "@id": `${siteConfig.url}/#organization` },
      creditText: siteConfig.name,
      copyrightNotice: `© ${siteConfig.foundedYear} ${siteConfig.name} — Tüm hakları saklıdır`,
      license: `${siteConfig.url}/kullanim-sartlari/`,
      acquireLicensePage: `${siteConfig.url}/iletisim/`,
      ...(img.width && img.height
        ? { width: { "@type": "QuantitativeValue", value: img.width, unitCode: "E37" },
            height: { "@type": "QuantitativeValue", value: img.height, unitCode: "E37" } }
        : {}),
    })),
  };
}

export function createItemListSchema(data: {
  name: string;
  description: string;
  url: string;
  items: {
    name: string;
    description: string;
    url?: string;
    logo?: string;
    sector?: string;
    location?: string;
    countryCode?: string;
  }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: data.name,
    description: data.description,
    url: `${siteConfig.url}${data.url}`,
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    itemListElement: data.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: item.name,
        description: item.description,
        ...(item.url ? { url: item.url } : {}),
        ...(item.logo
          ? {
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}${item.logo}`,
                contentUrl: `${siteConfig.url}${item.logo}`,
                inLanguage: "tr-TR",
                copyrightHolder: { "@id": `${siteConfig.url}/#organization` },
              },
              image: `${siteConfig.url}${item.logo}`,
            }
          : {}),
        ...(item.sector ? { knowsAbout: item.sector } : {}),
        ...(item.location
          ? { address: { "@type": "PostalAddress", addressLocality: item.location, addressCountry: item.countryCode || item.location } }
          : {}),
        sponsor: { "@id": `${siteConfig.url}/#organization` },
        subjectOf: {
          "@type": "WebPage",
          url: `${siteConfig.url}${data.url}`,
          name: "Plise Perde Referansları",
        },
      },
    })),
  };
}
