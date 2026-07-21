import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site-config";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  verification: {
    google: "nqWwFE2E710n1sOZY32SHixMuJ860LFuJZV7biitAqo",
  },
  title: {
    default: "Plise Perde | Özel Ölçü Üretim | Hızlı Teslimat - 2 Yıl Garanti",
    template: "%s — Plise Perde",
  },
  description:
    "Plise Perde özel ölçü üretim, ücretsiz keşif, ücretsiz ölçülendirme ve ücretsiz montaj hizmetiyle FENETRE kalitesini yaşam alanlarınıza taşır.",
  keywords: [
    "plise perde",
    "plise perde modelleri",
    "plise perde fiyatları",
    "plise perde üreticisi",
    "plise perde satın al",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Plise Perde | Özel Ölçü Üretim | Hızlı Teslimat - 2 Yıl Garanti",
    description:
      "Plise Perde özel ölçü üretim, ücretsiz keşif, ücretsiz ölçülendirme ve ücretsiz montaj hizmetiyle FENETRE kalitesini yaşam alanlarınıza taşır.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Plise Perde — pliseperde.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plise Perde | Özel Ölçü Üretim | Hızlı Teslimat - 2 Yıl Garanti",
    description:
      "Plise Perde özel ölçü üretim, ücretsiz keşif, ücretsiz ölçülendirme ve ücretsiz montaj hizmetiyle FENETRE kalitesini yaşam alanlarınıza taşır.",
    images: ["/og-image.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Plise Perde" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-brand-text">
        <GoogleAnalytics />
        <noscript>
          <style>{`{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
