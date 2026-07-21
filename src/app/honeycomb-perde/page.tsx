import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Honeycomb Plise Perde — Isı Yalıtımlı",
  description:
    "Honeycomb plise perde, petek hücreli yapısıyla ısı yalıtımı sağlar. Enerji tasarrufu, ses azaltma, tam karartma seçenekleri. 2 yıl garanti.",
  slug: "honeycomb-perde",
});

export default function HoneycombPerdePage() {
  return (
    <PageTemplate
      title="Honeycomb Plise Perde"
      description="Honeycomb plise perde, petek hücreli yapısıyla ısı yalıtımı sağlar. Enerji tasarrufu, ses azaltma, tam karartma seçenekleri."
      slug="honeycomb-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Ürünlerimiz", url: "/urunlerimiz" }, { name: "Honeycomb Plise Perde", url: "/honeycomb-perde" }]}
      h1="Honeycomb Plise Perde"
      intro="Honeycomb plise perde, petek hücreli (arı kovanı) yapısıyla standart plise perdeden farklıdır. Hücrelerin içinde hava hapsolur, bu da ısı yalıtımı sağlar. Kışın sıcak havayı içeride tutar, yazın sıcak havayı dışarıda bırakır. Enerji tasarrufu sağlayan tek perde sistemidir. 2 yıl garanti ile üretilir."
      schemaType="product"
      schemaData={{
        name: "Honeycomb Plise Perde",
        description: "Petek hücreli, ısı yalıtımlı honeycomb plise perde. Enerji tasarrufu sağlar.",
      }}
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
