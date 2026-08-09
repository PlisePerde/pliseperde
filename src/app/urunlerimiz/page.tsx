import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createCollectionPageSchema } from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Ürünlerimiz — Plise Perde" },
  description:
    "Plise perde ürün kategorileri: Plise Perde, Honeycomb, Düet, Aparatlar, Yedek Parça. Modeller, sistemler, çeşitler. Üretici garantisi, montaj.",
  keywords: ["ürünlerimiz", "plise perde ürünleri", "plise perde kategorileri"],
  alternates: { canonical: "/urunlerimiz/" },
};

interface SubItem {
  name: string;
  url: string;
  description?: string;
}

interface MainCategory {
  name: string;
  url: string;
  description: string;
  subItems: SubItem[];
}

const mainCategories: MainCategory[] = [
  {
    name: "Plise Perde Ürünleri",
    url: "/plise-perde/",
    description: "Klasik katlanır kumaş yapısıyla pencere içi gölgeleme. Tül, güneşlik, karartma seçenekleri.",
    subItems: [],
  },
  {
    name: "Honeycomb Perde Ürünleri",
    url: "/honeycomb-perde/",
    description: "Petek hücreli yapısıyla ısı yalıtımı sağlayan enerji tasarruflu perde sistemi.",
    subItems: [],
  },
  {
    name: "Düet Perde Ürünleri",
    url: "/duet-perde/",
    description: "İki katmanlı gece-gündüz sistemi. Tek perdede ışık ve karartma fonksiyonu.",
    subItems: [],
  },
  {
    name: "Plise Perde Aparatları",
    url: "/plise-perde-aparatlari/",
    description: "Tüm plise perde aparatları: kanal, ip, mekanizma, braket, klips.",
    subItems: [],
  },
  {
    name: "Plise Perde Yedek Parça",
    url: "/plise-perde-yedek-parca/",
    description: "Orijinal yedek parçalar: kumaş, ip, mekanizma, kanal, tırnak.",
    subItems: [],
  },
];

const independentCategories: MainCategory[] = [
  {
    name: "Plise Perde Modelleri",
    url: "/plise-perde-modelleri/",
    description: "Tüm plise perde model seçenekleri: düz, blackout, gece gündüz, desenli, baskılı.",
    subItems: [
      { name: "Düz Plise Perde", url: "/duz-plise-perde/" },
      { name: "Blackout Plise Perde", url: "/blackout-plise-perde/" },
      { name: "Gece Gündüz Plise Perde", url: "/gece-gunduz-plise-perde/" },
      { name: "Desenli Plise Perde", url: "/desenli-plise-perde/" },
      { name: "Baskılı Plise Perde", url: "/baskili-plise-perde/" },
    ],
  },
  {
    name: "Plise Perde Sistemleri",
    url: "/plise-perde-sistemleri/",
    description: "Montaj sistemlerine göre plise perde: vidalı, vidasız, yapışkanlı, kancalı, motorlu.",
    subItems: [
      { name: "Vidalı Plise Perde", url: "/vidali-plise-perde/" },
      { name: "Vidasız Plise Perde", url: "/vidasiz-plise-perde/" },
      { name: "Yapışkanlı Plise Perde", url: "/yapiskanli-plise-perde/" },
      { name: "Kancalı Plise Perde", url: "/kancali-plise-perde/" },
      { name: "Portray Plise Perde", url: "/portray-plise-perde/" },
      { name: "Braketli Plise Perde", url: "/braketli-plise-perde/" },
      { name: "Motorlu Plise Perde", url: "/motorlu-plise-perde/" },
    ],
  },
  {
    name: "Plise Perde Çeşitleri",
    url: "/plise-perde-cesitleri/",
    description: "Kumaş ve fonksiyon türlerine göre tüm plise perde çeşitleri.",
    subItems: [],
  },
  {
    name: "Plise Perde Özellikleri",
    url: "/plise-perde-ozellikleri/",
    description: "Plise perde teknik özellikleri: kumaş, mekanizma, boyut, performans.",
    subItems: [],
  },
  {
    name: "Plise Perde Fiyatları",
    url: "/plise-perde-fiyatlari/",
    description: "Plise perde fiyat aralıkları ve fiyatı etkileyen faktörler.",
    subItems: [],
  },
  {
    name: "Plise Perde Kullanım Alanları",
    url: "/plise-perde-kullanim-alanlari/",
    description: "Oda ve mekan türlerine göre plise perde kullanım rehberi.",
    subItems: [
      { name: "Salon Plise Perde", url: "/salon-plise-perde/" },
      { name: "Yatak Odası Plise Perde", url: "/yatak-odasi-plise-perde/" },
      { name: "Mutfak Plise Perde", url: "/mutfak-plise-perde/" },
      { name: "Çocuk Odası Plise Perde", url: "/cocuk-odasi-plise-perde/" },
      { name: "Genç Odası Plise Perde", url: "/genc-odasi-plise-perde/" },
      { name: "Çalışma Odası Plise Perde", url: "/calisma-odasi-plise-perde/" },
      { name: "Banyo/WC Plise Perde", url: "/banyo-wc-plise-perde/" },
    ],
  },
];

const allItems = [...mainCategories, ...independentCategories].flatMap((cat) => [
  { name: cat.name, url: cat.url },
  ...cat.subItems,
]);

export default function UrunlerPage() {
  const breadcrumb = ["Ana Sayfa", "Ürünlerimiz"];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createCollectionPageSchema({
            name: "Ürünlerimiz",
            description: "Plise perde ürün kategorileri, modelleri, sistemleri ve çeşitleri.",
            url: "/urunlerimiz/",
            items: allItems,
          }),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Ürünlerimiz", url: "/urunlerimiz/" }]}
        title="Ürünlerimiz — Plise Perde Kategorileri"
        description="2022'den beri üretici olarak plise perde ürünleri sunuyoruz. Ana kategoriler, modeller, sistemler ve çeşitler. Her ürün profesyonel montaj ve 2 yıl garanti ile gelir."
        highlight="Üretici garantisi · 2 yıl · Ücretsiz montaj"
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8 space-y-10">

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">Ana Ürün Kategorileri</h2>
            <div className="space-y-4">
              {mainCategories.map((category) => (
                <article key={category.url} className="border border-brand-border rounded-lg p-5 bg-white">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-brand-text mb-1">
                        <Link href={category.url} className="hover:text-brand transition-colors">
                          {category.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-brand-text-light mb-3">{category.description}</p>
                      {category.subItems.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {category.subItems.map((item) => (
                            <Link
                              key={item.url}
                              href={item.url}
                              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-brand-bg border border-brand-border rounded-md hover:border-brand hover:text-brand transition-colors"
                            >
                              {item.name} <ChevronRight size={10} />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <Link
                      href={category.url}
                      className="inline-flex items-center gap-1 text-sm text-brand whitespace-nowrap"
                    >
                      Kategoriye Git <ChevronRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">Bağımsız Kategoriler</h2>
            <div className="space-y-4">
              {independentCategories.map((category) => (
                <article key={category.url} className="border border-brand-border rounded-lg p-5 bg-white">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-brand-text mb-1">
                        <Link href={category.url} className="hover:text-brand transition-colors">
                          {category.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-brand-text-light mb-3">{category.description}</p>
                      {category.subItems.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {category.subItems.map((item) => (
                            <Link
                              key={item.url}
                              href={item.url}
                              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-brand-bg border border-brand-border rounded-md hover:border-brand hover:text-brand transition-colors"
                            >
                              {item.name} <ChevronRight size={10} />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <Link
                      href={category.url}
                      className="inline-flex items-center gap-1 text-sm text-brand whitespace-nowrap"
                    >
                      İncele <ChevronRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

        </div>
      </div>
      <CTASection />
    </PageLayout>
  );
}
