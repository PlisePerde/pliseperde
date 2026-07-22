import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import { cities } from "@/data/cities";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Plise Perde Hizmet Bölgeleri — 81 İl, Türkiye Geneli" },
  description:
    "Plise perde Türkiye geneli hizmet bölgeleri: 81 ilde ücretsiz keşif, profesyonel montaj, video keşif ve kargo ile teslimat. İstanbul, Ankara, İzmir, Bursa ve tüm şehirlerde plise perde hizmeti.",
  alternates: { canonical: "/hizmet-bolgeleri/" },
  keywords: ["hizmet bölgeleri"],
  openGraph: {
    title: "Plise Perde Hizmet Bölgeleri — 81 İl, Türkiye Geneli",
    description:
      "81 ilde plise perde hizmeti: ücretsiz keşif, profesyonel montaj, video keşif ve kargo ile teslimat.",
    url: "/hizmet-bolgeleri/",
  },
};

const priorityCities = cities.filter((c) => c.priority);
const otherCities = cities.filter((c) => !c.priority);
const allCities = [...priorityCities, ...otherCities];

export default function HizmetBolgeleriPage() {
  const breadcrumb = ["Ana Sayfa", "Hizmet Bölgeleri"];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createWebPageSchema({
            name: "Plise Perde Hizmet Bölgeleri — 81 İl",
            description:
              "Türkiye'nin 81 ilinde plise perde hizmeti: ücretsiz keşif, profesyonel montaj, video keşif ve kargo ile teslimat.",
            url: "/hizmet-bolgeleri/",
          }),
          {
            "@context": "https://schema.org",
            "@type": "ServiceArea",
            name: "Plise Perde Hizmet Bölgesi",
            description:
              "Türkiye'nin 81 ilinde plise perde üretim, keşif, montaj ve teslimat hizmeti.",
            provider: {
              "@type": "Organization",
              name: "Plise Perde",
              url: "https://pliseperde.com",
              telephone: "+905403363873",
            },
            areaServed: {
              "@type": "Country",
              name: "Türkiye",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Plise Perde Hizmetleri",
              itemListElement: allCities.map((city) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: `${city.name} Plise Perde Hizmeti`,
                  areaServed: {
                    "@type": "City",
                    name: city.name,
                  },
                  url: `https://pliseperde.com/${city.slug}/`,
                },
              })),
            },
          },
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmet Bölgeleri", url: "/hizmet-bolgeleri/" }]}
        title="Plise Perde Hizmet Bölgeleri — 81 İl, Türkiye Geneli"
        description="Pendik İstanbul merkezli üretim tesisimizden Türkiye'nin 81 iline plise perde hizmeti veriyoruz. Marmara Bölgesi'nde ücretsiz yerinde keşif ve montaj, diğer şehirlerde video keşif ve kargo ile teslimat seçenekleri mevcuttur."
        highlight="81 il · Ücretsiz keşif · Profesyonel montaj · Video keşif · Kargo ile teslimat"
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <section className="py-6 md:py-8 space-y-8">
          <section className="prose prose-sm max-w-none">
            <p className="text-sm md:text-base text-brand-text-light leading-relaxed">
              Pendik İstanbul merkezli üretim tesisimizden <strong>tüm Türkiye&apos;ye plise perde hizmeti</strong>{" "}veriyoruz. Marmara Bölgesi&apos;nde (İstanbul, Kocaeli, Sakarya, Yalova, Düzce, Bilecik, Bursa, Balıkesir, Çanakkale){" "}<strong>ücretsiz yerinde keşif ve aynı gün montaj</strong>{" "}yapıyoruz.
              Diğer şehirlerde <strong>video keşif</strong> ile ölçü alıp, <strong>kargo ile gönderim</strong> yapıyoruz.
            </p>
            <p className="text-sm md:text-base text-brand-text-light leading-relaxed">
              Tüm 81 ilde plise perde üretim, keşif, montaj ve after-sales hizmeti sunuyoruz.
              İstanbul&apos;un 39 ilçesinin tamamında yerinde keşif ve montaj yapıyoruz.
              Anadolu ve Trakya&apos;nın tüm şehirlerinde kargo ile teslimat ve video destek ile montaj sağlıyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-text mb-4">Tüm Hizmet Verilen İller — 81 İl</h2>
            <p className="text-sm text-brand-text-light mb-4">
              Türkiye&apos;nin 81 ilinde plise perde hizmeti. Video keşif ve kargo ile teslimat.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
              {allCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="flex items-center justify-between p-4 bg-white border border-brand-border rounded-lg hover:border-brand hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-medium text-brand-text">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-brand-bg rounded-lg p-6">
            <h2 className="text-lg font-semibold text-brand-text mb-3">Hizmet Tipleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-brand-border">
                <h3 className="text-sm font-semibold text-brand mb-2">Yerinde Keşif & Montaj</h3>
                <p className="text-sm text-brand-text-light">
                  İstanbul, Kocaeli, Sakarya, Yalova, Düzce, Bilecik, Bursa, Balıkesir, Çanakkale.
                  Ücretsiz yerinde keşif, aynı gün montaj.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-brand-border">
                <h3 className="text-sm font-semibold text-brand mb-2">Video Keşif & Kargo</h3>
                <p className="text-sm text-brand-text-light">
                  Türkiye&apos;nin diğer 72 ilinde video keşif ile ölçü alma,
                  kargo ile teslimat ve video destekli montaj.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
      <CTASection />
    </PageLayout>
  );
}
