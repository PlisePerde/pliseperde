import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Honeycomb Perde Ürünleri — Isı Yalıtımlı",
  description:
    "Honeycomb perde ürünleri: petek hücreli yapısıyla ısı yalıtımı sağlar. Enerji tasarrufu, ses azaltma, tam karartma. 2 yıl garanti.",
  slug: "honeycomb-perde",
});

const relatedCategories = [
  { name: "Plise Perde Ürünleri", url: "/plise-perde/", description: "Klasik katlanır plise perde" },
  { name: "Düet Perde Ürünleri", url: "/duet-perde/", description: "İki katmanlı gece gündüz" },
  { name: "Plise Perde vs Honeycomb", url: "/plise-perde-vs-honeycomb-perde/", description: "Karşılaştırma" },
];

export default function HoneycombPerdePage() {
  return (
    <PageTemplate
      title="Honeycomb Perde Ürünleri"
      description="Honeycomb perde ürünleri: petek hücreli yapısıyla ısı yalıtımı sağlar. Enerji tasarrufu, ses azaltma, tam karartma."
      slug="honeycomb-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Ürünlerimiz", url: "/urunlerimiz/" }, { name: "Honeycomb Perde Ürünleri", url: "/honeycomb-perde/" }]}
      h1="Honeycomb Perde Ürünleri"
      intro="Honeycomb perde ürünleri kategorisinde petek hücreli (arı kovanı) yapısıyla standart plise perdeden farklı modeller sunuyoruz. Hücrelerin içinde hava hapsolur, bu da ısı yalıtımı sağlar. Kışın sıcak havayı içeride tutar, yazın sıcak havayı dışarıda bırakır. Enerji tasarrufu sağlayan tek perde sistemidir. 2 yıl garanti ile üretilir."
      schemaType="collectionpage"
      schemaData={{
        name: "Honeycomb Perde Ürünleri",
        description: "Petek hücreli, ısı yalıtımlı honeycomb perde ürünleri. Enerji tasarrufu sağlar.",
        url: "/honeycomb-perde/",
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
          h2: "Honeycomb Perde Nedir?",
          paragraphs: [
            "Honeycomb perde, kumaşın <strong>petek şeklinde hücreler</strong> oluşturacak şekilde katlanmasıyla oluşur. Bu hücrelerin içinde hava tabakası oluşur ve doğal bir yalıtım sağlar.",
            "Standart plise perdeden farkı: <em>çift katmanlı kumaş yapısı</em> ve hücrelerin arasındaki hava boşluğudur. Bu yapı hem ısı hem ses yalıtımı sağlar.",
          ],
        },
        {
          h2: "Honeycomb Perde Avantajları",
          paragraphs: [
            "Honeycomb perde tercih etmenizin başlıca nedenleri:",
          ],
          list: {
            type: "ul",
            items: [
              "Isı yalıtımı — kışın sıcak, yazın serin",
              "Ses azaltma — dış gürültüyü filtreler",
              "Enerji tasarrufu — ısıtma/soğutma giderini düşürür",
              "Tam karartma seçeneği mevcuttur",
              "Üstten-alttan açılım — ışık kontrolü",
              "Çocuk güvenliği — ip mekanizması yok",
            ],
          },
        },
        {
          h2: "Hücre Tipleri",
          paragraphs: [
            "Honeycomb perdede <strong>hücre boyutu</strong> yalıtım performansını belirler.",
          ],
          table: {
            headers: ["Hücre Tipi", "Boyut", "Yalıtım", "Kullanım"],
            rows: [
              ["Tek hücre", "9 mm", "Standart", "Oturma odası, mutfak"],
              ["Tek hücre", "20 mm", "Yüksek", "Yatak odası, salon"],
              ["Çift hücre", "9+9 mm", "Maksimum", "Kuzey cepheli pencere"],
              ["Karartma", "20 mm", "Yüksek + Karartma", "Yatak odası, sinema odası"],
            ],
          },
        },
        {
          h2: "Enerji Tasarrufu",
          paragraphs: [
            "Honeycomb perde, pencereden olan ısı kaybını <strong>%30-40 azaltır</strong>. Kışın ısınma, yazın soğutma giderinizi düşürür. Yatırım maliyetini 2-3 yılda amorti eder.",
            "Özellikle büyük pencerelerde, kuzey cepheli odalarda ve katı camlı sistemlerde etkisi belirgindir.",
          ],
        },
      ]}
      faqItems={[
        {
          question: "Honeycomb perde gerçekten enerji tasarrufu sağlar mı?",
          answer: "Evet, petek hücre yapısı pencereden ısı kaybını %30-40 azaltır. Kışın ısınma, yazın soğutma giderinizi düşürür.",
        },
        {
          question: "Honeycomb perde ile plise perde arasındaki fark nedir?",
          answer: "Honeycomb perde çift katmanlı petek hücre yapısına sahiptir, aralarında hava boşluğu vardır. Bu yapı ısı ve ses yalıtımı sağlar. Plise perde ise tek katmanlıdır, yalıtım sağlamaz.",
        },
        {
          question: "Honeycomb perde tam karartma mı?",
          answer: "Honeycomb perde hem ışık geçirgen hem tam karartma kumaş seçeneği ile üretilir. Yatak odası için tam karartma tercih edebilirsiniz.",
        },
        {
          question: "Honeycomb perde fiyatı plise perdeden fazla mı?",
          answer: "Evet, çift katmanlı kumaş yapısı nedeniyle honeycomb perde fiyatı plise perdeden yaklaşık %30-40 daha yüksektir. Enerji tasarrufu ile bu fark 2-3 yılda amorti olur.",
        },
        {
          question: "Honeycomb perde temizliği nasıl yapılır?",
          answer: "Nemli bez ile silinerek temizlenir. Toz tutmaz yapısı sayesinde sık temizlik gerektirmez.",
        },
      ]}
    />
  );
}
