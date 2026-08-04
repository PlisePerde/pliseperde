import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Jaluzi Perde — Karşılaştırma",
  description:
    "Plise perde vs jaluzi perde karşılaştırması. Ahşap jaluzi, alüminyum jaluzi ve plise perde fiyat, ışık kontrolü, montaj, temizlik, dayanıklılık. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-jaluzi-perde",
});

export default function PliseVsJaluziPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Jaluzi Perde"
      description="Plise perde vs jaluzi perde karşılaştırması. Fiyat, ışık kontrolü, montaj, temizlik, dayanıklılık."
      slug="plise-perde-vs-jaluzi-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Jaluzi", url: "/plise-perde-vs-jaluzi-perde" }]}
      h1="Plise Perde vs Jaluzi Perde — Hangisi Daha İyi?"
      intro="Plise perde ve jaluzi perde, iki farklı pencere çözümü sunar. Plise perde kumaş katmanını pile yaparak çalışır, jaluzi perde ise yatay veya dikey kanatları döndürerek ışık kontrolü sağlar. Jaluzi perde iki ana türe ayrılır: <strong>alüminyum jaluzi</strong> ve <strong>ahşap jaluzi</strong>. Alüminyum jaluzi hafif, dayanıklı ve ekonomiktir; ahşap jaluzi ise doğal sıcak görünüm sunar ama daha pahalıdır. Bu karşılaştırmada her iki sistemi fiyat, ışık kontrolü, montaj, temizlik ve estetik açısından inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Jaluzi Perde Karşılaştırması",
        description: "Plise perde ve jaluzi perde karşılaştırması — fiyat, ışık, montaj, temizlik.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-jaluzi-perde.webp"
          alt="Plise Perde vs Jaluzi Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Çalışma Prensibi Farkı",
          paragraphs: [
            "Plise perde, <strong>kumaşı pile katlayarak</strong> yukarı-aşağı hareket ettirir. <em>Yumuşak doku</em> ve estetik görünüm sunar. Jaluzi perde ise yatay veya dikey kanatları döndürerek ışık açısını ayarlar.",
            "Jaluzi perde iki ana malzeme türünde üretilir: <strong>alüminyum jaluzi</strong> ve <strong>ahşap jaluzi</strong>. Alüminyum jaluzi, hafif yapısı ve geniş renk seçeneği ile en yaygın türdür. Ahşap jaluzi ise doğal doku ve sıcak görünüm sunar, ancak nemli ortamlarda (banyo, mutfak) kullanımı önerilmez.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Alüminyum Jaluzi", "Ahşap Jaluzi"],
            rows: [
              ["Malzeme", "Polyester kumaş", "Alüminyum kanat", "Ahşap/bambu kanat"],
              ["Işık kontrolü", "Kademeli açma", "Kanat açısı", "Kanat açısı"],
              ["Görünüm", "Yumuşak, sıcak", "Modern, endüstriyel", "Doğal, sıcak"],
              ["Tam karartma", "Mümkün (blackout)", "Sınırlı", "Sınırlı"],
              ["Açılma yönü", "Üstten + alttan", "Yukarı toplama", "Yukarı toplama"],
              ["Nem dayanımı", "Yüksek", "Yüksek", "Düşük"],
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Plise perde <strong>genelde daha ekonomiktir</strong>. Jaluzi perde fiyatı, malzeme türüne göre değişir: <strong>alüminyum jaluzi</strong> daha uygun fiyatlı iken, <strong>ahşap jaluzi</strong> doğal malzeme nedeniyle daha pahalıdır. <em>Plise 450-3500 TL/m²</em>, alüminyum jaluzi 600-3000 TL/m², ahşap jaluzi 1500-5000 TL/m² aralığında.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Alüminyum Jaluzi", "Ahşap Jaluzi"],
            rows: [
              ["Standart", "450-1100 TL", "600-1200 TL", "1500-3000 TL"],
              ["Karartma", "700-1400 TL", "1000-2000 TL", "2000-4000 TL"],
              ["Premium", "1200-3500 TL", "1800-3000 TL", "3000-5000 TL"],
              ["Motorlu", "1800-3500 TL", "2500-5000 TL", "3500-6000 TL"],
            ],
          },
        },
        {
          h2: "Işık Kontrolü ve Gizlilik",
          paragraphs: [
            "Jaluzi perde <strong>kanat açısı ile hassas</strong> ışık kontrolü sağlar. Kanatları kapalı tutup ışığı tam kesmeden <em>tam gizlilik</em> elde edebilirsiniz. Plise perde ise kademeli açma ile ışık miktarını ayarlar.",
            "Alüminyum jaluzi ve ahşap jaluzi, ışık kontrolü açısından benzer çalışır. Ancak ahşap jaluzi kanatları daha kalın olduğundan, kanatlar kapalıyken ışık geçirgenliği alüminyum jaluziye göre daha düşüktür.",
          ],
          list: {
            type: "ul",
            items: [
              "Alüminyum jaluzi — kanat açısı ile ışık yönü ayarlanır",
              "Ahşap jaluzi — daha kalın kanatlar, daha az ışık sızıntısı",
              "Plise — kademeli açma ile ışık miktarı ayarlanır",
              "Alüminyum jaluzi — kanat kapalıyken gizlilik + ışık",
              "Plise — tam karartmada sıfır ışık",
              "Plise — üstten/alttan bağımsız açılım",
            ],
          },
        },
        {
          h2: "Temizlik ve Bakım",
          paragraphs: [
            "Temizlik açısından <strong>plise perde daha kolaydır</strong>. Jaluzi perde her kanat tek tek silinmelidir. <em>Plise perde ise nemli bez ile</em> tek geçişte temizlenir.",
            "Alüminyum jaluzi, nemli bez ile kolayca silinebilir ve banyo/mutfak gibi nemli ortamlarda kullanılabilir. Ahşap jaluzi ise su ve nemden etkilendiği için kuru bez ile temizlenmeli, nemli ortamlarda kullanılmamalıdır.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — nemli bez ile tek geçiş",
              "Alüminyum jaluzi — nemli bez ile silinebilir",
              "Ahşap jaluzi — kuru bez ile silinir, nem kaçınılmaz",
              "Plise — haftada toz alma yeterli",
              "Alüminyum jaluzi — kanat araları zor temizlenir",
              "Ahşap jaluzi — ahşap yağı ile periyodik bakım gerekir",
              "Plise — kumaş çıkarılabilir",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Plise perde <strong>yumuşak görünüm ve kolay temizlik</strong> isteyenler için idealdir. Alüminyum jaluzi <em>modern endüstriyel görünüm</em> ve hassas kanat kontrolü tercih edenler için uygundur. Ahşap jaluzi ise <em>doğal, sıcak atmosfer</em> isteyen ve nemli olmayan ortamlar için idealdir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise seçin — yumuşak, sıcak görünüm",
              "Plise seçin — kolay temizlik",
              "Plise seçin — tam karartma",
              "Plise seçin — banyo ve mutfak için nem dayanımlı",
              "Alüminyum jaluzi seçin — modern, endüstriyel görünüm",
              "Alüminyum jaluzi seçin — kanat açısı ile ışık yönü",
              "Alüminyum jaluzi seçin — nemli ortamlar için uygun",
              "Ahşap jaluzi seçin — doğal, sıcak ahşap doku",
              "Ahşap jaluzi seçin — oturma odası ve çalışma odası için",
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
          question: "Alüminyum jaluzi mi ahşap jaluzi mi daha iyi?",
          answer: "Alüminyum jaluzi, hafiflik, dayanıklılık, ekonomik fiyat ve nem dayanımı açısından avantajlıdır. Ahşap jaluzi ise doğal sıcak görünüm sunar ama daha pahalıdır ve nemli ortamlarda kullanılmamalıdır. Banyo ve mutfak için alüminyum jaluzi, oturma odası için ahşap jaluzi daha uygundur.",
        },
        {
          question: "Jaluzi perdenin avantajı nedir?",
          answer: "Jaluzi perde kanat açısını ayarlayarak ışığın yönünü kontrol etmenizi sağlar. Kanatları kapalı tutup ışığı kesmeden tam gizlilik elde edebilirsiniz. Alüminyum jaluzi modern endüstriyel görünüm, ahşap jaluzi ise doğal sıcak atmosfer sunar.",
        },
        {
          question: "Ahşap jaluzi nerede kullanılmamalı?",
          answer: "Ahşap jaluzi, banyo, mutfak ve cam balkon gibi nemli ortamlarda kullanılmamalıdır. Ahşap malzeme nem emer, şekil değiştirebilir ve küf yapabilir. Nemli ortamlar için alüminyum jaluzi veya plise perde daha uygundur.",
        },
      ]}
    />
  );
}
