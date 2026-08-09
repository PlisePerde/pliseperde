import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Ürünleri — Özel Ölçü Kategori",
  description:
    "Plise perde ürünleri kategorisi: tül, güneşlik, karartma kumaş seçenekleri. Özel ölçü üretim, 2 yıl garanti, ücretsiz keşif, montaj.",
  slug: "plise-perde",
  keywords: ["plise perde ürünleri", "plise perde kategorisi"],
});

const relatedCategories = [
  { name: "Honeycomb Perde Ürünleri", url: "/honeycomb-perde/", description: "Petek hücreli ısı yalıtımlı" },
  { name: "Düet Perde Ürünleri", url: "/duet-perde/", description: "İki katmanlı gece gündüz" },
  { name: "Plise Perde Aparatları", url: "/plise-perde-aparatlari/", description: "Tüm aparatlar" },
  { name: "Plise Perde Yedek Parça", url: "/plise-perde-yedek-parca/", description: "Orijinal yedek parçalar" },
];

export default function PlisePerdePage() {
  return (
    <PageTemplate
      title="Plise Perde Ürünleri"
      description="Plise perde ürünleri kategorisi: tül, güneşlik, karartma kumaş seçenekleri. Özel ölçü üretim, 2 yıl garanti, ücretsiz keşif, montaj."
      slug="plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Ürünlerimiz", url: "/urunlerimiz" }, { name: "Plise Perde Ürünleri", url: "/plise-perde" }]}
      h1="Plise Perde Ürünleri"
      intro="Plise perde ürünleri kategorisinde katlanır kumaş yapısıyla pencerede şık ve pratik gölgeleme çözümleri sunuyoruz. Özel ölçü üretim yaparız — her pencere boyutuna uygun. Tül, güneşlik, yarı karartma ve tam karartma kumaş seçenekleri mevcuttur. 2022'den beri üretici olarak hizmet veriyoruz. 2 yıl garanti, ücretsiz keşif ve profesyonel montaj ile Türkiye geneli hizmet."
      schemaType="collectionpage"
      schemaData={{
        name: "Plise Perde Ürünleri",
        description: "Özel ölçü plise perde ürünleri kategorisi. Tül, güneşlik, karartma kumaş seçenekleri.",
        url: "/plise-perde/",
        items: relatedCategories,
      }}
      beforeContent={
        <nav aria-label="İlgili kategoriler" className="mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-3">İlgili Kategoriler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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
          h2: "Plise Perde Nedir?",
          paragraphs: [
            "Plise perde, kumaşın <strong>akordeon gibi katlanarak</strong> açılıp kapanan bir perde sistemidir. Üst ve alt kanallar arasında gerilen kumaş, ip mekanizması ile hareket eder. Açıldığında kat kat toplanır, kapandığında pencereyi tam örter.",
            "Diğer perde türlerinden farkı: <em>hafif olması, az yer kaplaması ve pencere içinde montaj</em> yapılmasıdır. Stor ve zebra perdelere göre daha yumuşak bir görünüm sunar.",
          ],
        },
        {
          h2: "Kumaş Seçenekleri",
          paragraphs: [
            "Plise perde kumaşı <strong>ihtiyacınıza göre</strong> seçilir. Odanın fonksiyonu, ışık ihtiyacı ve gizlilik beklentisi belirleyicidir.",
          ],
          table: {
            headers: ["Kumaş Tipi", "Işık Geçirgenliği", "Kullanım Alanı"],
            rows: [
              ["Tül", "Yüksek", "Oturma odası, mutfak"],
              ["Güneşlik", "Orta", "Çalışma odası, salon"],
              ["Yarı Karartma", "Düşük", "Yatak odası, çocuk odası"],
              ["Tam Karartma", "Sıfır", "Yatak odası, sinema odası"],
            ],
          },
        },
        {
          h2: "Ölçü ve Üretim",
          paragraphs: [
            "Her plise perde <strong>özel ölçü</strong> üretilir. Pencere genişlik ve yüksekliği milimetrik alınır. Üretim 2-4 iş gününde tamamlanır. Ölçü alma desteği ücretsizdir.",
          ],
          list: {
            type: "ol",
            items: [
              "Ücretsiz keşif ve ölçü alma",
              "Kumaş ve profil seçimi",
              "Özel ölçü üretim (2-4 iş günü)",
              "Profesyonel montaj",
              "2 yıl garanti belgesi",
            ],
          },
        },
        {
          h2: "Plise Perde Avantajları",
          paragraphs: [
            "Plise perde tercih etmenizin başlıca nedenleri:",
          ],
          list: {
            type: "ul",
            items: [
              "Pencere içinde montaj — yer kaplamaz",
              "Hafif kumaş — kolay açılır kapanır",
              "Üstten-alttan veya ortadan açılım seçeneği",
              "Delmesiz montaj mümkün (kira evi dostu)",
              "Çocuk güvenliği — ipleme riski yok",
              "2 yıl garanti",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde ne kadar sürede üretilir?",
          answer: "Özel ölçü üretim 2-4 iş gününde tamamlanır. Kumaş stoğu mevcut ise aynı gün üretim de mümkündür.",
        },
        {
          question: "Plise perde montajı delmesiz yapılır mı?",
          answer: "Evet, yapışkanlı veya kancalı montaj tipi ile delmesiz montaj yapılır. Kiracılar için idealdir.",
        },
        {
          question: "Plise perde fiyatı ne kadar?",
          answer: "Fiyat; pencere ölçüsü, kumaş tipi ve montaj tipine göre değişir. Fiyat hesaplama aracımızı kullanarak net fiyat alabilirsiniz.",
        },
        {
          question: "Plise perde temizliği nasıl yapılır?",
          answer: "Plise perde kumaşı toz tutmaz. Nemli bez ile silinerek temizlenir. Derin temizlik için kumaş sökülüp yıkanabilir.",
        },
        {
          question: "Türkiye geneli hizmet veriyor musunuz?",
          answer: "Evet, İstanbul'da ücretsiz keşif ve montaj yapılırız. Diğer şehirlerde kargo ile ürün gönderilir ve video montaj desteği sağlanır.",
        },
      ]}
    />
  );
}
