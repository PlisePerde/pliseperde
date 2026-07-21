import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Tül Perde — Karşılaştırma",
  description:
    "Plise perde vs tül perde karşılaştırması. Işık kontrolü, montaj, temizlik, modern görünüm. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-tul-perde",
});

export default function PliseVsTulPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Tül Perde"
      description="Plise perde vs tül perde karşılaştırması. Işık kontrolü, montaj, temizlik, modern görünüm."
      slug="plise-perde-vs-tul-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/plise-perde-modelleri" }, { name: "Plise vs Tül", url: "/plise-perde-vs-tul-perde" }]}
      h1="Plise Perde vs Tül Perde — Hangisi Daha İyi?"
      intro="Plise perde ve tül perde, iki farklı pencere çözümü sunar. Plise perde pile katlı kumaş yapısı ile modern bir görünüm sağlar, tül perde ise klasik dalgalı kumaş ile yumuşak bir atmosfer yaratır. Bu karşılaştırmada ışık kontrolü, montaj, temizlik, estetik ve fiyat açısından her ikisini detaylıca inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Tül Perde Karşılaştırması",
        description: "Plise perde ve tül perde karşılaştırması — ışık, montaj, temizlik, fiyat.",
      }}
      sections={[
        {
          h2: "Görünüm ve Estetik Farkı",
          paragraphs: [
            "Plise perde, <strong>pile katlı düz kumaş yapısı</strong> ile modern ve minimalist bir görünüm sunar. <em>Pencerede düz durur</em> ve dalgalanmaz. Tül perde ise klasik dalgalı kumaş ile yumuşak ve romantik bir atmosfer yaratır.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Tül Perde"],
            rows: [
              ["Görünüm", "Modern, minimalist", "Klasik, dalgalı"],
              ["Kumaş yapısı", "Pile katlı, düz", "Dalgalı, akıcı"],
              ["Pencerede duruş", "Düz, sabit", "Dalgalı, hareketli"],
              ["Uygun tarz", "Modern iç mekan", "Klasik iç mekan"],
              ["Renk seçenekleri", "Sınırlı (3-5 renk)", "Geniş (10+ renk)"],
            ],
          },
        },
        {
          h2: "Işık Kontrolü",
          paragraphs: [
            "Plise perde <strong>kademeli ışık kontrolü</strong> sağlar. Kumaşı istediğiniz yükseklikte durdurabilirsiniz. <em>Üstten açık alttan kapalı</em> yapılabilir. Tül perde ise <u>tam açık veya tam kapalı</u> çalışır, kademeli ayar yoktur.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — kademeli ışık ayarı",
              "Tül — tam açık veya tam kapalı",
              "Plise — üstten/alttan bağımsız",
              "Tül — sadece yana açılır",
              "Plise — tam karartma seçeneği var",
            ],
          },
        },
        {
          h2: "Montaj ve Mekanizma",
          paragraphs: [
            "Plise perde <strong>kanal ve ip mekanizması</strong> ile çalışır. Profil çerçeveye monte edilir, kumaş kanallar arasında hareket eder. Tül perde ise <em>korniş ve makara sistemi</em> ile çalışır, kumaş yana açılır.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Tül Perde"],
            rows: [
              ["Mekanizma", "İp + kanal", "Korniş + makara"],
              ["Montaj tipleri", "Vidalı, yapışkanlı, kancalı", "Vidalı (korniş)"],
              ["Açılma", "Yukarı-aşağı", "Yana"],
              ["Yer kaplama", "2-3 cm", "10-15 cm (korniş)"],
            ],
          },
        },
        {
          h2: "Temizlik ve Bakım",
          paragraphs: [
            "Plise perde <strong>daha kolay temizlenir</strong>. Nemli bez ile silinir, kumaş çıkarılabilir. Tül perde ise <em>yıkanması gerekir</em>, makine yıkaması yapılır ama sökme-takma işlemi zordur.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — nemli bez ile silinir",
              "Tül — makinede yıkanır (sökerek)",
              "Plise — 10 dakikada temizlenir",
              "Tül — sökme + yıkama + ütüleme gerekir",
              "Plise — ütüleme gerekmez",
            ],
          },
        },
        {
          h2: "Fiyat ve Hangisini Seçmelisiniz?",
          paragraphs: [
            "Plise perde <strong>genelde daha ekonomiktir</strong>. Tül perde korniş ve makara maliyeti nedeniyle daha yüksek fiyatlanır. <em>Modern görünüm ve kolay temizlik için plise</em>, klasik atmosfer için tül tercih edin.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise seçin — modern, minimalist görünüm",
              "Plise seçin — kademeli ışık kontrolü",
              "Plise seçin — kolay temizlik",
              "Tül seçin — klasik, romantik atmosfer",
              "Tül seçin — geniş renk seçeneği",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi tül perde mi daha iyi?",
          answer: "Modern görünüm, kademeli ışık kontrolü ve kolay temizlik için plise perde tercih edin. Klasik dalgalı görünüm ve geniş renk seçeneği için tül perde uygundur.",
        },
        {
          question: "Hangisi daha kolay temizlenir?",
          answer: "Plise perde daha kolay temizlenir. Nemli bez ile silinir, 10 dakikada temizlik yapılır. Tül perde sökülür, makinede yıkanır ve ütülenir, daha zahmetlidir.",
        },
        {
          question: "Plise perde tül perdeden ucuz mu?",
          answer: "Genelde plise perde daha ekonomiktir. Tül perde korniş ve makara maliyeti nedeniyle daha yüksek fiyatlanır. Plise perde 450-3500 TL/m², tül perde 600-2000 TL/m² aralığında.",
        },
        {
          question: "Plise perde tam karartma yapar mı?",
          answer: "Evet, plise perde tam karartma modeli ile ışığın %99'unu keser. Tül perde tam karartma yapamaz, sadece ışık filtreler.",
        },
        {
          question: "Hangisi daha az yer kaplar?",
          answer: "Plise perde daha az yer kaplar. Katlandığında 2-3 cm kalınlığa ulaşır. Tül perde korniş nedeniyle 10-15 cm yer kaplar.",
        },
      ]}
    />
  );
}
