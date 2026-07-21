import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Çevrimdışı",
  description: "İnternet bağlantınız yok. Plise Perde'ye telefon, WhatsApp veya e-posta ile ulaşın. Bağlantı geri gelince otomatik yönlendirme.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/offline/" },
  openGraph: {
    title: "Çevrimdışı — Plise Perde",
    description: "İnternet bağlantınız yok. Acil iletişim bilgileri ve otomatik bağlantı kontrolü.",
    url: `${siteConfig.url}/offline/`,
    siteName: siteConfig.name,
    locale: "tr_TR",
  },
  twitter: {
    card: "summary",
    title: "Çevrimdışı — Plise Perde",
    description: "İnternet bağlantınız yok. Acil iletişim bilgileri.",
  },
};

export default function OfflineLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Çevrimdışı — Plise Perde",
            description: "İnternet bağlantısı yok. Acil iletişim bilgileri ve otomatik bağlantı kontrolü.",
            url: `${siteConfig.url}/offline/`,
            inLanguage: "tr-TR",
            isPartOf: { "@id": `${siteConfig.url}/#website` },
            publisher: { "@id": `${siteConfig.url}/#organization` },
          }),
        }}
      />
      {children}
    </>
  );
}
