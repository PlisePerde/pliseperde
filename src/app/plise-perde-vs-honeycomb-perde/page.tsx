import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Honeycomb Perde — Karşılaştırma",
  description:
    "Plise perde vs honeycomb perde karşılaştırması. Isıl yalıtım, ışık kontrolü, fiyat, montaj, temizlik. Honeycomb petek yapısı vs plise pile yapısı. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-honeycomb-perde",
});

export default function PliseVsHoneycombPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Honeycomb Perde"
      description="Plise perde vs honeycomb perde karşılaştırması. Isıl yalıtım, ışık kontrolü, fiyat, montaj, temizlik."
      slug="plise-perde-vs-honeycomb-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Honeycomb", url: "/plise-perde-vs-honeycomb-perde" }]}
      h1="Plise Perde vs Honeycomb Perde — Hangisi Daha İyi?"
      intro="Plise perde ve honeycomb perde, benzer görünen ama temel olarak farklı iki pencere çözümüdür. Her ikisi de kumaş katmanını katlayarak çalışır, ancak honeycomb perde iki katmanlı petek yapısıyla ekstra ısıl yalıtım sağlar. Plise perde ise tek katmanlı pile yapısıyla daha ekonomik ve daha hafiftir. Bu karşılaştırmada ısıl yalıtım, ışık kontrolü, fiyat, montaj ve temizlik açısından ikisini detaylıca inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Honeycomb Perde Karşılaştırması",
        description: "Plise perde ve honeycomb perde karşılaştırması — ısıl yalıtım, fiyat, ışık, montaj, temizlik.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-honeycomb-perde.webp"
          alt="Plise Perde vs Honeycomb Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Çalışma Prensibi Farkı",
          paragraphs: [
            "Plise perde, <strong>tek kumaş katmanını</strong> ip mekanizması ile yukarı-aşağı hareket ettirir. Kumaş, pile katlı yapısıyla katlanır ve pencere içinde kompakt olarak toplanır.",
            "Honeycomb perde (petek perde), <strong>iki kumaş katmanının</strong> arasında hava boşlukları (petek hücreleri) oluşturarak çalışır. Bu petek yapısı, pencereden gelen soğuğu ve sıcağı kesen bir <u>hava yalıtım tabakası</u> oluşturur. Honeycomb perde, tek katmanlı plise perdeden farklı olarak ısıl yalıtım odaklı bir üründür.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Honeycomb Perde"],
            rows: [
              ["Kumaş katmanı", "Tek katman", "Çift katman (petek)"],
              ["Yapı", "Pile katlı", "Petek hücreli"],
              ["Isıl yalıtım", "Düşük", "Yüksek (%60'a kadar)"],
              ["Akustik yalıtım", "Yok", "Var (petek ses emer)"],
              ["Ağırlık", "Hafif", "Daha ağır"],
              ["Kalınlık (toplu)", "İnce", "Daha kalın"],
            ],
          },
        },
        {
          h2: "Isıl Yalıtım ve Enerji Tasarrufu",
          paragraphs: [
            "Honeycomb perdenin en büyük avantajı <strong>ısıl yalıtımdır</strong>. Petek hücrelerindeki hava tabakası, pencereden gelen soğuğu kışın %60'a kadar keser, yazın sıcak hava girişini azaltır. Bu sayede ısıtma ve soğutma maliyetlerinde belirgin düşüş sağlar.",
            "Plise perde de hafif bir yalıtım sağlar, ancak tek katmanlı yapısı nedeniyle honeycomb kadar etkili değildir. <em>Büyük ve güneş cepheli pencerelerde</em> honeycomb perde, enerji tasarrufu ile fiyat farkını zamanla amorti eder.",
          ],
          list: {
            type: "ul",
            items: [
              "Honeycomb — petek yapısı hava yalıtımı sağlar",
              "Honeycomb — kışın ısı kaybını %60'a kadar azaltır",
              "Honeycomb — yazın güneş ısısını keser, klima yükünü azaltır",
              "Plise — hafif yalıtım, tek katman",
              "Honeycomb — akustik yalıtım da sağlar (dış gürültüyü azaltır)",
              "Plise — enerji tasarrufu öncelik değilse yeterli",
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Plise perde <strong>genelde daha ekonomiktir</strong>. Honeycomb perde, çift katmanlı petek yapısı nedeniyle üretimi daha kompleks ve maliyetlidir. <em>M² bazında plise 450-3500 TL</em>, honeycomb 800-4500 TL aralığında fiyatlanır.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Honeycomb Perde"],
            rows: [
              ["Standart (tül)", "450-1100 TL", "800-1500 TL"],
              ["Karartma", "700-1400 TL", "1200-2200 TL"],
              ["Yarı karartma", "600-1200 TL", "1000-1800 TL"],
              ["Motorlu", "1800-3500 TL", "2500-4500 TL"],
              ["Montaj", "100-300 TL", "150-350 TL"],
            ],
          },
        },
        {
          h2: "Işık Kontrolü",
          paragraphs: [
            "Her iki perde de <strong>kademeli ışık kontrolü</strong> sağlar. Kumaşı istediğiniz yükseklikte durdurabilirsiniz. Plise perde, üstten ve alttan bağımsız açılabilir.",
            "Honeycomb perde de üstten/alttan açılabilir modelleri mevcuttur, ancak petek yapısı nedeniyle <u>kumaş daha kalın</u> olduğu için toplu halde daha fazla yer kaplar.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — kademeli ayar, üstten/alttan bağımsız",
              "Honeycomb — kademeli ayar, üstten/alttan modelleri var",
              "Plise — toplu halde daha ince, pencere içinde az yer kaplar",
              "Honeycomb — toplu halde daha kalın",
              "Plise — blackout kumaş ile tam karartma mümkün",
              "Honeycomb — blackout petek ile tam karartma + yalıtım",
            ],
          },
        },
        {
          h2: "Montaj ve Temizlik",
          paragraphs: [
            "Montaj açısından <strong>ikisi de benzer</strong>. Vidalı, yapışkanlı ve kancalı montaj tipleri her ikisinde de mevcuttur. Temizlik açısından plise perde daha kolaydır çünkü tek katmanlıdır.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — tek kumaş, nemli bez ile silinir",
              "Honeycomb — çift katman, petek araları toz tutabilir",
              "Plise — kumaş çıkarılabilir",
              "Honeycomb — kumaş çıkarılması daha zordur",
              "Plise — daha az toz biriktirir",
              "Honeycomb — periyodik vakumlama gerekir",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Plise perde <strong>ekonomik fiyat ve hafif yapı</strong> isteyenler için idealdir. Honeycomb perde <em>ısıl yalıtım ve enerji tasarrufu</em> öncelikli olanlar için en doğru seçimdir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise seçin — ekonomik fiyat",
              "Plise seçin — hafif ve ince yapı",
              "Plise seçin — kolay temizlik",
              "Plise seçin — küçük pencereler",
              "Honeycomb seçin — ısıl yalıtım öncelikli",
              "Honeycomb seçin — büyük ve güneş cepheli pencereler",
              "Honeycomb seçin — akustik yalıtım isteniyorsa",
              "Honeycomb seçin — enerji tasarrufu uzun vadede",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi honeycomb perde mi daha iyi?",
          answer: "Isıl yalıtım ve enerji tasarrufu öncelikliyse honeycomb perde tercih edin. Ekonomik fiyat, hafif yapı ve kolay temizlik istiyorsanız plise perde daha uygundur. Büyük ve güneş cepheli pencerelerde honeycomb, küçük pencerelerde plise idealdir.",
        },
        {
          question: "Honeycomb perde enerji tasarrufu sağlar mı?",
          answer: "Evet, honeycomb perde petek yapısındaki hava tabakası sayesinde kışın ısı kaybını %60'a kadar azaltır. Isıtma ve soğutma maliyetlerinde belirgin düşüş sağlar. Büyük pencerelerde fiyat farkını enerji tasarrufu ile amorti eder.",
        },
        {
          question: "Hangisi daha ucuz?",
          answer: "Plise perde genelde daha ekonomiktir. M² bazında plise 450-3500 TL, honeycomb 800-4500 TL aralığında. Honeycomb, çift katmanlı petek yapısı nedeniyle daha maliyetlidir.",
        },
        {
          question: "Honeycomb perde tam karartma yapar mı?",
          answer: "Evet, blackout petek kumaş ile honeycomb perde tam karartma sağlar. Hem ısıl yalıtım hem de tam karanlık isteyenler için ideal çözümdür. Plise perde blackout kumaş ile de tam karartma yapar ama yalıtım sağlamaz.",
        },
        {
          question: "Hangisi daha kolay temizlenir?",
          answer: "Plise perde daha kolay temizlenir. Tek katmanlı kumaş nemli bez ile silinir. Honeycomb perdede petek araları toz tutabilir, periyodik vakumlama gerekir.",
        },
      ]}
    />
  );
}
