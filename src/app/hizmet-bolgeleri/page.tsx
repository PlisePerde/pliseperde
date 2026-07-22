import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import { cities } from "@/data/cities";
import { internationalCountries, internationalStats } from "@/data/international-regions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Plise Perde Hizmet Bölgeleri — Türkiye 81 İl ve Avrupa" },
  description:
    "Plise perde hizmet bölgeleri: Türkiye 81 il ve Avrupa'da 6 ülkede (Almanya, Hollanda, Fransa, Belçika, İsviçre, Avusturya) plise perde tedarik ve montaj. Ücretsiz keşif, profesyonel montaj, haftalık Avrupa sevkiyatı.",
  alternates: { canonical: "/hizmet-bolgeleri/" },
  keywords: ["hizmet bölgeleri", "plise perde almanya", "plise perde hollanda", "plise perde avrupa", "plise perde fransa", "plise perde belçika", "plise perde isviçre", "plise perde avusturya"],
  openGraph: {
    title: "Plise Perde Hizmet Bölgeleri — Türkiye 81 İl ve Avrupa",
    description:
      "Türkiye 81 il ve Avrupa'da 6 ülkede plise perde tedarik ve montaj hizmeti.",
    url: "/hizmet-bolgeleri/",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Plise Perde Hizmet Bölgeleri — Türkiye ve Avrupa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plise Perde Hizmet Bölgeleri — Türkiye 81 İl ve Avrupa",
    description:
      "Türkiye 81 il ve Avrupa'da 6 ülkede plise perde tedarik ve montaj hizmeti.",
    images: ["/og-image.webp"],
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
            name: "Plise Perde Avrupa Hizmet Bölgesi",
            description:
              "Almanya, Hollanda, Fransa, Belçika, İsviçre ve Avusturya'da plise perde, honeycomb perde ve düet perde tedarik ve montaj hizmeti. Haftalık Avrupa sevkiyatı.",
            provider: {
              "@type": "Organization",
              name: "Plise Perde",
              url: "https://pliseperde.com",
              telephone: "+905403363873",
            },
            areaServed: internationalCountries.map((country) => ({
              "@type": "Country",
              name: country.name,
              alternateName: country.nameLocal,
              isoCode: country.code,
            })),
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Plise Perde Avrupa Hizmetleri",
              itemListElement: internationalCountries.flatMap((country) =>
                country.cities.map((city) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: `${city.name} Plise Perde Hizmeti`,
                    areaServed: {
                      "@type": "City",
                      name: city.name,
                      alternateName: city.nameLocal,
                      address: {
                        "@type": "PostalAddress",
                        addressCountry: country.code,
                      },
                    },
                    url: `https://pliseperde.com/hizmet-bolgeleri/${country.slug}/${city.slug}/`,
                  },
                }))
              ),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Plise Perde Avrupa Hizmet Bölgeleri",
            description:
              "Almanya, Hollanda, Fransa, Belçika, İsviçre ve Avusturya'da plise perde hizmet verilen şehirler.",
            url: "https://pliseperde.com/hizmet-bolgeleri/",
            itemListElement: internationalCountries.map((country, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Country",
                name: country.name,
                alternateName: country.nameLocal,
                isoCode: country.code,
                description: country.description,
              },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "ServiceArea",
            name: "Plise Perde Türkiye Hizmet Bölgesi",
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
        title="Plise Perde Hizmet Bölgeleri — Türkiye 81 İl ve Avrupa"
        description="Pendik İstanbul merkezli üretim tesisimizden Türkiye'nin 81 iline ve Avrupa'da 6 ülkeye plise perde hizmeti veriyoruz. Marmara Bölgesi'nde ücretsiz yerinde keşif ve montaj, diğer şehirlerde video keşif ve kargo ile teslimat. Avrupa'ya haftalık sevkiyat."
        highlight="81 il · 6 Avrupa ülkesi · Ücretsiz keşif · Haftalık Avrupa sevkiyatı"
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

          {/* Avrupa Hizmet Bölgeleri */}
          <section
            aria-label="Avrupa hizmet bölgeleri"
            itemScope
            itemType="https://schema.org/ServiceArea"
          >
            <meta itemProp="name" content="Plise Perde Avrupa Hizmet Bölgesi" />
            <meta itemProp="description" content="Almanya, Hollanda, Fransa, Belçika, İsviçre ve Avusturya'da plise perde tedarik ve montaj hizmeti. Haftalık Avrupa sevkiyatı." />
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-lg md:text-xl font-semibold text-brand-text">
                Avrupa Hizmet Bölgeleri
              </h2>
              <span className="text-xs bg-brand/10 text-brand px-2 py-1 rounded-full font-medium">
                {internationalStats.countryCount} ülke · {internationalStats.cityCount} şehir · {internationalStats.weeklyShipments} sevkiyat
              </span>
            </div>
            <p className="text-sm md:text-base text-brand-text-light leading-relaxed mb-6">
              <strong>Almanya, Hollanda, Fransa, Belçika, İsviçre ve Avusturya</strong>'da plise perde,
              honeycomb perde ve düet perde tedarik ve montaj hizmeti veriyoruz. Haftalık olarak
              Avrupa'ya bitmiş ürün sevkiyatı yapıyoruz. <em>Üretici olarak doğrudan bayi ilişkisi</em>{" "}
              ile çalışıyoruz.
            </p>

            <div className="space-y-6">
              {internationalCountries.map((country) => (
                <div
                  key={country.slug}
                  className="bg-white rounded-xl border border-brand-border p-4 md:p-6"
                  itemScope
                  itemType="https://schema.org/Country"
                >
                  <meta itemProp="name" content={country.name} />
                  <meta itemProp="alternateName" content={country.nameLocal} />
                  <meta itemProp="isoCode" content={country.code} />
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-brand-text">
                        {country.name}{" "}
                        <span className="text-sm font-normal text-brand-text-light">
                          ({country.nameLocal})
                        </span>
                      </h3>
                      <p className="text-xs text-brand-text-light">
                        {country.cities.length} şehir · {country.code}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-brand-text-light leading-relaxed mb-4">
                    {country.description}
                  </p>
                  <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
                    role="list"
                    aria-label={`${country.name} şehirleri`}
                  >
                    {country.cities.map((city) => (
                      <div
                        key={city.slug}
                        role="listitem"
                        itemScope
                        itemType="https://schema.org/City"
                        className="group flex flex-col p-2 rounded-lg bg-brand-bg border border-brand-border hover:border-brand hover:shadow-sm transition-all"
                      >
                        <meta itemProp="name" content={city.name} />
                        <meta itemProp="alternateName" content={city.nameLocal} />
                        <span className="text-sm font-medium text-brand-text group-hover:text-brand transition-colors">
                          {city.name}
                        </span>
                        <span className="text-xs text-brand-text-light">
                          {city.nameLocal}
                        </span>
                        {city.population && (
                          <span className="text-xs text-brand-text-light/70 mt-0.5">
                            {city.population}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
      <CTASection />
    </PageLayout>
  );
}
