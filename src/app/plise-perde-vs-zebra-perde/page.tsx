import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Zebra Perde — Karşılaştırma",
  description:
    "Plise perde vs zebra perde karşılaştırması. Fiyat, ışık kontrolü, montaj, temizlik, dayanıklılık açısından detaylı inceleme. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-zebra-perde",
});

export default function PliseVsZebraPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Zebra Perde"
      description="Plise perde vs zebra perde karşılaştırması. Fiyat, ışık kontrolü, montaj, temizlik, dayanıklılık."
      slug="plise-perde-vs-zebra-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/plise-perde-modelleri" }, { name: "Plise vs Zebra", url: "/plise-perde-vs-zebra-perde" }]}
      h1="Plise Perde vs Zebra Perde — Hangisi Daha İyi?"
      intro="Plise perde ve zebra perde, modern pencere çözümlerinin en popüler iki seçeneğidir. Her ikisi de pile katlı yapıya sahiptir ama çalışma prensipleri farklıdır. Plise perde tek kumaş katmanını yukarı-aşağı hareket ettirir, zebra perde ise iki kumaş katmanını birbiri üzerinden kaydırır. Bu karşılaştırmada fiyat, ışık kontrolü, montaj, temizlik ve dayanıklılık açısından ikisini detaylıca inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Zebra Perde Karşılaştırması",
        description: "Plise perde ve zebra perde karşılaştırması — fiyat, ışık, montaj, temizlik.",
      }}
      sections={[
        {
          h2: "Çalışma Prensibi Farkı",
          paragraphs: [
            "Plise perde, <strong>tek kumaş katmanını</strong> ip mekanizması ile yukarı-aşağı hareket ettirir. <em>Üstten ve alttan</em> açılabilir. Kumaş pile katlı yapısıyla katlanır.",
            "Zebra perde, <strong>iki kumaş katmanını</strong> birbiri üzerinden kaydırır. Şeritli yapısı sayesinde <u>açık ve kapalı şeritler</u> arasında geçiş yapar. Sadece yukarı-aşağı açılır, üstten aşağı açılamaz.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Zebra Perde"],
            rows: [
              ["Kumaş katmanı", "Tek", "Çift"],
              ["Açılma yönü", "Üstten + alttan", "Sadece yukarı-aşağı"],
              ["Işık ayarı", "Kademeli", "Şeritli (açık/kapalı)"],
              ["Katman hareketi", "Katlanır", "Kayar"],
              ["Tam karartma", "Mümkün", "Şerit arası sızıntı"],
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Plise perde <strong>genelde daha ekonomiktir</strong>. Zebra perde iki kumaş katmanı nedeniyle daha maliyetlidir. <em>M² bazında plise 450-3500 TL</em>, zebra 600-4000 TL aralığında fiyatlanır.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Zebra Perde"],
            rows: [
              ["Standart (tül/güneşlik)", "450-1100 TL", "600-1300 TL"],
              ["Karartma", "700-1400 TL", "900-1800 TL"],
              ["Motorlu", "1800-3500 TL", "2200-4000 TL"],
              ["Montaj", "100-300 TL", "150-350 TL"],
            ],
          },
        },
        {
          h2: "Işık Kontrolü",
          paragraphs: [
            "Plise perde <strong>kademeli ışık kontrolü</strong> sağlar. Kumaşı istediğiniz yükseklikte durdurabilirsiniz. <em>Üstten açık alttan kapalı</em> veya tam tersi yapılabilir.",
            "Zebra perde <strong>şeritli ışık kontrolü</strong> sağlar. Açık ve kapalı şeritler arasında geçiş yapar. <u>Tam karartma yaparken</u> şerit aralarından ışık sızıntısı olabilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — kademeli ayar, üstten/alttan bağımsız",
              "Zebra — şeritli ayar, açık/kapalı geçiş",
              "Plise — tam karartmada sıfır sızıntı",
              "Zebra — şerit arası ışık sızıntısı olabilir",
              "Plise — daha hassas ışık ayarı",
            ],
          },
        },
        {
          h2: "Montaj ve Temizlik",
          paragraphs: [
            "Montaj açısından <strong>ikisi de benzer</strong>. Vidalı, yapışkanlı ve kancalı montaj tipleri her ikisinde de mevcuttur. Temizlik açısından plise perde daha kolaydır.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — tek kumaş, nemli bez ile silinir",
              "Zebra — çift kumaş, şerit araları zor temizlenir",
              "Plise — kumaş çıkarılabilir, yıkanabilir",
              "Zebra — kumaş çıkarılması daha zordur",
              "Plise — daha az toz biriktir",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Plise perde <strong>esnek ışık kontrolü ve ekonomik fiyat</strong> isteyenler için idealdir. Zebra perde <em>modern şeritli görünüm</em> tercih edenler için uygundur.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise seçin — esnek ışık, ekonomik fiyat",
              "Plise seçin — tam karartma, sıfır sızıntı",
              "Plise seçin — üstten/alttan bağımsız açılım",
              "Zebra seçin — modern şeritli görünüm",
              "Zebra seçin — dekoratif öncelik",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi zebra perde mi daha iyi?",
          answer: "İhtiyaca göre değişir. Esnek ışık kontrolü, tam karartma ve ekonomik fiyat için plise perde tercih edin. Modern şeritli görünüm için zebra perde uygundur.",
        },
        {
          question: "Plise perde zebra perdeden ucuz mu?",
          answer: "Evet, genelde plise perde daha ekonomiktir. M² bazında plise 450-3500 TL, zebra 600-4000 TL aralığında fiyatlanır. Zebra iki kumaş katmanı nedeniyle daha maliyetlidir.",
        },
        {
          question: "Hangisi daha iyi ışık kontrolü sağlar?",
          answer: "Plise perde daha hassas ışık kontrolü sağlar. Kumaşı istediğiniz yükseklikte durdurabilir, üstten veya alttan bağımsız açabilirsiniz. Zebra şeritli yapıda olduğu için kademeli ayar daha sınırlıdır.",
        },
        {
          question: "Hangisi daha kolay temizlenir?",
          answer: "Plise perde daha kolay temizlenir. Tek kumaş katmanı nemli bez ile silinir. Zebra perdede çift kumaş ve şerit araları temizliği zorlaştırır.",
        },
        {
          question: "Tam karartma için hangisi daha uygun?",
          answer: "Plise perde tam karartma için daha uygundur. Üç katlı kumaş ile ışığın %99'unu keser ve sızıntı olmaz. Zebra perdede şerit aralarından ışık sızıntısı olabilir.",
        },
      ]}
    />
  );
}
