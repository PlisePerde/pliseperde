import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Jaluzi Perde — Karşılaştırma",
  description:
    "Plise perde vs jaluzi perde karşılaştırması. Fiyat, ışık kontrolü, montaj, temizlik, dayanıklılık. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-jaluzi-perde",
});

export default function PliseVsJaluziPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Jaluzi Perde"
      description="Plise perde vs jaluzi perde karşılaştırması. Fiyat, ışık kontrolü, montaj, temizlik, dayanıklılık."
      slug="plise-perde-vs-jaluzi-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/plise-perde-modelleri" }, { name: "Plise vs Jaluzi", url: "/plise-perde-vs-jaluzi-perde" }]}
      h1="Plise Perde vs Jaluzi Perde — Hangisi Daha İyi?"
      intro="Plise perde ve jaluzi perde, iki farklı pencere çözümü sunar. Plise perde kumaş katmanını pile yaparak çalışır, jaluzi perde ise yatay veya dikey kanatları döndürerek ışık kontrolü sağlar. Bu karşılaştırmada her iki sistemi fiyat, ışık kontrolü, montaj, temizlik ve estetik açısından inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Jaluzi Perde Karşılaştırması",
        description: "Plise perde ve jaluzi perde karşılaştırması — fiyat, ışık, montaj, temizlik.",
      }}
      sections={[
        {
          h2: "Çalışma Prensibi Farkı",
          paragraphs: [
            "Plise perde, <strong>kumaşı pile katlayarak</strong> yukarı-aşağı hareket ettirir. <em>Yumuşak doku</em> ve estetik görünüm sunar. Jaluzi perde ise <u>alüminyum veya ahşap kanatları</u> döndürerek ışık açısını ayarlar.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Jaluzi Perde"],
            rows: [
              ["Malzeme", "Kumaş", "Alüminyum/ahşap"],
              ["Işık kontrolü", "Kademeli açma", "Kanat açısı"],
              ["Görünüm", "Yumuşak, sıcak", "Modern, endüstriyel"],
              ["Tam karartma", "Mümkün", "Sınırlı"],
              ["Açılma yönü", "Üstten + alttan", "Yukarı toplama"],
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Plise perde <strong>genelde daha ekonomiktir</strong>. Jaluzi perde alüminyum veya ahşap malzeme nedeniyle daha maliyetlidir. <em>Plise 450-3500 TL/m²</em>, jaluzi 600-5000 TL/m² aralığında.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Jaluzi Perde"],
            rows: [
              ["Standart", "450-1100 TL", "600-1500 TL"],
              ["Karartma", "700-1400 TL", "1000-2500 TL"],
              ["Ahşap görünümlü", "—", "1500-5000 TL"],
              ["Motorlu", "1800-3500 TL", "2500-6000 TL"],
            ],
          },
        },
        {
          h2: "Işık Kontrolü ve Gizlilik",
          paragraphs: [
            "Jaluzi perde <strong>kanat açısı ile hassas</strong> ışık kontrolü sağlar. Kanatları kapalı tutup ışığı tam kesmeden <em>tam gizlilik</em> elde edebilirsiniz. Plise perde ise kademeli açma ile ışık miktarını ayarlar.",
          ],
          list: {
            type: "ul",
            items: [
              "Jaluzi — kanat açısı ile ışık yönü ayarlanır",
              "Plise — kademeli açma ile ışık miktarı ayarlanır",
              "Jaluzi — kanat kapalıyken gizlilik + ışık",
              "Plise — tam karartmada sıfır ışık",
              "Plise — üstten/alttan bağımsız açılım",
            ],
          },
        },
        {
          h2: "Temizlik ve Bakım",
          paragraphs: [
            "Temizlik açısından <strong>plise perde daha kolaydır</strong>. Jaluzi perde her kanat tek tek silinmelidir. <em>Plise perde ise nemli bez ile</em> tek geçişte temizlenir.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — nemli bez ile tek geçiş",
              "Jaluzi — her kanat tek tek silinir",
              "Plise — haftada toz alma yeterli",
              "Jaluzi — kanat araları zor temizlenir",
              "Plise — kumaş çıkarılabilir",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Plise perde <strong>yumuşak görünüm ve kolay temizlik</strong> isteyenler için idealdir. Jaluzi perde <em>modern endüstriyel görünüm</em> ve hassas kanat kontrolü tercih edenler için uygundur.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise seçin — yumuşak, sıcak görünüm",
              "Plise seçin — kolay temizlik",
              "Plise seçin — tam karartma",
              "Jaluzi seçin — modern, endüstriyel görünüm",
              "Jaluzi seçin — kanat açısı ile ışık yönü",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi jaluzi perde mi daha iyi?",
          answer: "Yumuşak görünüm, kolay temizlik ve tam karartma için plise perde tercih edin. Modern endüstriyel görünüm ve kanat açısı ile ışık yönü kontrolü için jaluzi perde uygundur.",
        },
        {
          question: "Hangisi daha ucuz?",
          answer: "Plise perde genelde daha ekonomiktir. M² bazında plise 450-3500 TL, jaluzi 600-5000 TL aralığında. Jaluzi alüminyum veya ahşap malzeme nedeniyle daha maliyetlidir.",
        },
        {
          question: "Hangisi daha kolay temizlenir?",
          answer: "Plise perde daha kolay temizlenir. Nemli bez ile tek geçiş yeterlidir. Jaluzi perde her kanat tek tek silinmelidir, kanat araları zor temizlenir.",
        },
        {
          question: "Tam karartma için hangisi daha uygun?",
          answer: "Plise perde tam karartma için daha uygundur. Üç katlı kumaş ile ışığın %99'unu keser. Jaluzi perde kanat aralarından ışık sızıntısı olabilir.",
        },
        {
          question: "Jaluzi perdenin avantajı nedir?",
          answer: "Jaluzi perde kanat açısını ayarlayarak ışığın yönünü kontrol etmenizi sağlar. Kanatları kapalı tutup ışığı kesmeden tam gizlilik elde edebilirsiniz. Modern endüstriyel görünüm sunar.",
        },
      ]}
    />
  );
}
