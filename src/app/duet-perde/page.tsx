import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Düet Perde Ürünleri — Gece Gündüz Sistemi",
  description:
    "Düet perde ürünleri: iki katmanlı gece-gündüz sistemidir. Gündüz ışık geçirgen, gece tam karartma. Tek perdede iki fonksiyon. 2 yıl garanti.",
  slug: "duet-perde",
});

const relatedCategories = [
  { name: "Plise Perde Ürünleri", url: "/plise-perde/", description: "Klasik katlanır plise perde" },
  { name: "Honeycomb Perde Ürünleri", url: "/honeycomb-perde/", description: "Petek hücreli ısı yalıtımlı" },
  { name: "Plise Perde vs Düet Perde", url: "/plise-perde-vs-duet-perde/", description: "Karşılaştırma" },
];

export default function DuetPerdePage() {
  return (
    <PageTemplate
      title="Düet Perde Ürünleri"
      description="Düet perde ürünleri: iki katmanlı gece-gündüz sistemidir. Gündüz ışık geçirgen, gece tam karartma."
      slug="duet-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Ürünlerimiz", url: "/urunlerimiz" }, { name: "Düet Perde Ürünleri", url: "/duet-perde" }]}
      h1="Düet Perde Ürünleri"
      intro="Düet perde ürünleri kategorisinde iki farklı kumaş katmanını tek perdede birleştiren modeller sunuyoruz. Üst katman ışık geçirgen (tül/güneşlik), alt katman tam karartmadır. Gündüz üst katmanı kullanarak ışık alırsınız, gece alt katmanı indirerek tam karanlık sağlarsınız. Tek perdede iki fonksiyon — yerden tasarruf. 2 yıl garanti ile üretilir."
      schemaType="collectionpage"
      schemaData={{
        name: "Düet Perde Ürünleri",
        description: "İki katmanlı gece-gündüz perde ürünleri. Işık ve karartma tek perdede.",
        url: "/duet-perde/",
        items: relatedCategories,
      }}
      beforeContent={
        <nav aria-label="İlgili kategoriler" className="mb-8">
          <p className="text-lg md:text-xl font-semibold text-brand-text mb-3">İlgili Kategoriler</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {relatedCategories.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="block p-4 bg-white border border-brand-border rounded-lg hover:border-brand transition-colors"
              >
                <span className="text-sm font-medium text-brand-text">{item.name}</span>
                <span className="block text-xs text-brand-text-light mt-1">{item.description}</span>
                <span className="flex items-center gap-1 text-xs text-brand mt-2">
                  İncele <ChevronRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </nav>
      }
      sections={[
        {
          h2: "Düet Perde Nedir?",
          paragraphs: [
            "Düet perde, <strong>iki katmanlı kumaş</strong> sistemidir. Üst katman ışık geçirgen, alt katman tam karartmadır. Her iki katman bağımsız olarak açılıp kapanır.",
            "Gece-gündüz perde olarak da bilinir. Gündüz ışık almak için üst katmanı, gece karanlık için alt katmanı kullanırsınız. Tek perdede iki farklı fonksiyon sağlar.",
          ],
        },
        {
          h2: "Düet Perde Avantajları",
          paragraphs: [
            "Düet perde tercih etmenizin başlıca nedenleri:",
          ],
          list: {
            type: "ul",
            items: [
              "Tek perdede iki fonksiyon — gece ve gündüz",
              "Yer tasarrufu — iki perde yerine tek perde",
              "Bağımsız katman kontrolü",
              "Hem ışık hem gizlilik çözümü",
              "Estetik görünüm — katmanlar uyumlu",
              "2 yıl garanti",
            ],
          },
        },
        {
          h2: "Kullanım Alanları",
          paragraphs: [
            "Düet perde özellikle <strong>tek pencerede hem ışık hem gizlilik</strong> isteyenler için idealdir.",
          ],
          list: {
            type: "ul",
            items: [
              "Yatak odası — gündüz ışık, gece karartma",
              "Çocuk odası — uyku saatinde karartma",
              "Oturma odası — ışık kontrolü",
              "Çalışma odası — ekran parlamasını önleme",
            ],
          },
        },
        {
          h2: "Düet Perde vs Çift Perde",
          paragraphs: [
            "Geleneksel yöntemde tül + karartma olarak iki ayrı perde takılır. Düet perde ile bu iki fonksiyon tek perdede birleşir.",
          ],
          table: {
            headers: ["Özellik", "Çift Perde", "Düet Perde"],
            rows: [
              ["Yer kaplama", "Fazla", "Az"],
              ["Maliyet", "İki perde", "Tek perde"],
              ["Kontrol", "Ayrı ayrı", "Tek sistem"],
              ["Estetik", "Kalabalık", "Sade"],
              ["Montaj", "Çift kanal", "Tek kanal"],
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Düet perde nedir?",
          answer: "Düet perde, iki katmanlı (ışık geçirgen + tam karartma) kumaşın tek perdede birleştiği sistemdir. Gündüz ışık, gece karartma sağlar.",
        },
        {
          question: "Düet perde mi çift perde mi?",
          answer: "Düet perde daha avantajlıdır. Tek perdede iki fonksiyon sağlar, yer kaplamaz, daha sade görünür ve tek kanal montaj yapılır.",
        },
        {
          question: "Düet perde katmanları bağımsız çalışır mı?",
          answer: "Evet, üst ve alt katmanlar bağımsız olarak açılıp kapanır. İstediğiniz katmanı istediğiniz konumda kullanabilirsiniz.",
        },
        {
          question: "Düet perde fiyatı ne kadar?",
          answer: "Düet perde fiyatı, iki katmanlı kumaş yapısı nedeniyle standart plise perdeden yüksektir. Ancak iki ayrı perde almaktan daha ekonomiktir.",
        },
        {
          question: "Düet perde montajı nasıl yapılır?",
          answer: "Standart plise perde montajına benzer. Tek kanal ile pencere içine monte edilir. Delmesiz montaj seçeneği de mevcuttur.",
        },
      ]}
    />
  );
}
