import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

interface GenerateMetadataParams {
  title: string;
  description: string;
  slug: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  type?: "website" | "article";
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  slug,
  ogImage = "/og-image.webp",
  ogImageAlt,
  ogImageWidth = 1200,
  ogImageHeight = 630,
  type = "website",
  keywords: extraKeywords = [],
}: GenerateMetadataParams): Metadata {
  const fullTitle = title.includes("Plise Perde") ? title : `${title} — Plise Perde`;
  const canonical = slug === "" ? "/" : `/${slug}/`;
  const url = `${siteConfig.url}${slug === "" ? "" : `/${slug}/`}`;
  const imageAlt = ogImageAlt || fullTitle;
  const titleKeyword = title.replace(/—.*$/, "").trim().toLowerCase();
  const keywords = [titleKeyword, ...extraKeywords];

  return {
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type,
      locale: "tr_TR",
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
