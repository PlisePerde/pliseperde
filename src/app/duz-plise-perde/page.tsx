import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Düz Plise Perde — Klasik Sade Model",
  description:
    "Düz plise perde: sade ve klasik kumaş yapısı. Düz renk, desensiz, her mekana uyumlu. Işık geçirgen ve karartma seçenekleri. 2 yıl garanti.",
  slug: "duz-plise-perde",
});

export default function DuzPlisePerdePage() {
  return (
    <PageTemplate
      title="Düz Plise Perde"
      description="Düz plise perde: sade ve klasik kumaş yapısı. Düz renk, desensiz, her mekana uyumlu."
      slug="duz-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Modellerimiz", url: "/plise-perde-modelleri" }, { name: "Düz Plise Perde", url: "/duz-plise-perde" }]}
      h1="Düz Plise Perde"
      intro="Düz plise perde, desensiz ve sade kumaş yapısı ile en klasik plise perde modelidir. Tek renk, düz yüzey — her mekan tasarımına uyum sağlar. Minimal estetik arayanlar için ideal. Işık geçirgen tül, güneşlik, yarı karartma ve tam karartma kumaş seçenekleri ile üretilir. 2 yıl garanti, özel ölçü üretim ve profesyonel montaj ile gelir."
      schemaType="product"
      schemaData={{
        name: "Düz Plise Perde",
        description: "Desensiz, sade ve klasik düz kumaş plise perde modeli.",
      }}
      sections={[
        {
          h2: "Düz Plise Perde Nedir?",
          paragraphs: [
            "Düz plise perde, kumaş yüzeyinde <strong>herhangi bir desen, dokuma veya baskı</strong> bulundurmayan plise perde modelidir. Kumaş tek renk ve düz yüzeylidir. Katlanır yapı (akordeon) nedeniyle kumaş kendiliğinden tekstür oluşturur — ekstra desene ihtiyaç duymaz.",
            "En çok tercih edilen modeldir çünkü <em>her mekan tasarımına uyum sağlar</em>. Modern, klasik, minimalist veya endüstriyel — her tarzla çalışır.",
          ],
        },
        {
          h2: "Düz Plise Perde Avantajları",
          paragraphs: [
            "Düz modelin başlıca avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Her mekana uyum — desensiz yapı tüm tarzlarla çalışır",
              "Zamanlı tasarım — trend geçmez, yıllar boyu güncel",
              "Kolay kombin — mobilya ve duvar rengi ile uyumlu",
              "Geniş renk skalası — beyaz, krem, gri, bej, antrasit",
              "Bakım kolaylığı — düz yüzey temizlenmesi kolay",
              "Ekonomik — desen/baskı maliyeti yok",
            ],
          },
        },
        {
          h2: "Kumaş Seçenekleri",
          paragraphs: [
            "Düz plise perdede kumaş seçimi <strong>ışık kontrolü</strong> için belirleyicidir:",
          ],
          table: {
            headers: ["Kumaş", "Işık", "Gizlilik", "Kullanım"],
            rows: [
              ["Tül düz", "Yüksek", "Az", "Oturma odası, mutfak"],
              ["Güneşlik düz", "Orta", "İyi", "Salon, çalışma odası"],
              ["Yarı karartma düz", "Düşük", "Yüksek", "Yatak odası, çocuk odası"],
              ["Tam karartma düz", "Sıfır", "Tam", "Yatak odası, sinema odası"],
            ],
          },
        },
        {
          h2: "Renk Seçenekleri",
          paragraphs: [
            "Düz plise perde <strong>geniş renk yelpazesinde</strong> üretilir. En çok tercih edilen renkler:",
          ],
          list: {
            type: "ul",
            items: [
              "Beyaz — en popüler, her mekanla uyumlu, ferah",
              "Krem — sıcak ton, klasik mekanlara uygun",
              "Gri — modern ve nötr, endüstriyel tarz",
              "Bej — doğal ton, ahşap mobilya ile uyumlu",
              "Antrasit — koyu ve şık, kontrast arayanlar",
              "Açık gri — soft ve modern, pastel mekanlar",
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Düz plise perde <strong>ev ve ticari mekanlarda</strong> yaygın tercih edilir:",
          ],
          list: {
            type: "ul",
            items: [
              "Oturma odası — sade ve ferah görünüm",
              "Yatak odası — karartma düz kumaş ile tam karanlık",
              "Mutfak — tül düz ile ışık ve gizlilik",
              "Ofis — gri/antrasit düz ile profesyonel görünüm",
              "Çocuk odası — açık renk düz kumaş",
              "Banyo — nem dayanımlı düz kumaş",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Düz plise perde desensiz mi?",
          answer: "Evet, düz plise perde desensizdir. Kumaş tek renk ve düz yüzeylidir. Katlanır yapı kendiliğinden tekstür oluşturur, ekstra desene ihtiyaç duymaz.",
        },
        {
          question: "Düz plise perde hangi renkler mevcut?",
          answer: "Beyaz, krem, gri, bej, antrasit ve açık gri en çok tercih edilen renklerdir. Özel renk talepleri için üretim yapılabilir.",
        },
        {
          question: "Düz plise perde fiyatı desenliye göre farklı mı?",
          answer: "Düz plise perde, desenli ve baskılı modellere göre daha ekonomiktir. Desen ve baskı maliyeti içermez. Ancak kumaş tipi (tül, karartma) fiyatı etkiler.",
        },
        {
          question: "Düz plise perde her mekana uyum mu?",
          answer: "Evet, desensiz yapısı nedeniyle modern, klasik, minimalist ve endüstriyel her tarzla uyum sağlar. En çok tercih edilen modeldir.",
        },
        {
          question: "Düz plise perde temizliği kolay mı?",
          answer: "Evet, düz yüzey toz tutmaz ve nemli bez ile kolayca silinir. Desenli kumaşlara göre temizliği daha pratiktir.",
        },
      ]}
    />
  );
}
