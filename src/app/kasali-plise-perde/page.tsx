import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Kasalı Plise Perde — Alüminyum Kasa Sistemi",
  description:
    "Kasalı plise perde: alüminyum kasa içinde gizli sistem. Estetik, korumalı, modern görünüm. Özel ölçü üretim, 2 yıl garanti.",
  slug: "kasali-plise-perde",
  keywords: ["kasalı plise perde", "kasa içinde plise perde"],
});

export default function KasaliPlisePerdePage() {
  return (
    <PageTemplate
      title="Kasalı Plise Perde"
      description="Kasalı plise perde: alüminyum kasa içinde gizli sistem. Estetik, korumalı, modern görünüm."
      slug="kasali-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Sistemleri", url: "/plise-perde-sistemleri/" }, { name: "Kasalı Plise Perde", url: "/kasali-plise-perde/" }]}
      h1="Kasalı Plise Perde"
      intro="Kasalı plise perde, kumaşın alüminyum kasa içinde gizlendiği bir sistemdir. Perde kullanılmadığında kumaş kasa içinde kaybolur — sadece kasa görünür. Kumaş toz ve hasardan korunur, mekanın estetiği bozulmaz. Modern ve minimalist tasarım arayanlar için ideal çözümdür. Özel ölçü üretim ve 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Kasalı Plise Perde",
        description: "Alüminyum kasa içinde gizli plise perde sistemi.",
      }}
      sections={[
        {
          h2: "Kasalı Sistem Nedir?",
          paragraphs: [
            "Kasalı plise perde sistemini tanımlayan en önemli özellik, kumaşın <strong>alüminyum kasa içinde</strong> gizlenmesidir. Standart sistemde kumaş açıkta toplanırken, kasalı sistemde kumaş kasa içine çekilir.",
            "Kasa, pencere üstüne monte edilen alüminyum bir profiledir. Kumaş kullanılmadığında kasa içinde tamamen kaybolur. Bu sayede kumaş tozdan, hasardan ve UV'den korunur. Mekanın estetiği bozulmaz.",
          ],
        },
        {
          h2: "Kasalı Sistem Avantajları",
          paragraphs: [
            "Kasalı plise perde sisteminin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Gizli kumaş — kullanılmadığında kasa içinde kaybolur",
              "Toz koruması — kumaş kasa içinde tozdan korunur",
              "UV koruması — güneş ışığı kumaşa direkt ulaşmaz",
              "Estetik — sadece kasa görünür, minimalist tasarım",
              "Uzun ömür — kumaş hasardan korunur, ömrü uzar",
              "Modern görünüm — yeni nesil mimariye uygun",
            ],
          },
        },
        {
          h2: "Kasalı vs Standart Sistem",
          paragraphs: [
            "Kasalı ve standart plise perde sistemleri arasındaki temel farklar:",
          ],
          table: {
            headers: ["Özellik", "Kasalı Sistem", "Standart Sistem"],
            rows: [
              ["Kumaş görünümü", "Kasa içinde gizli", "Açıkta toplanır"],
              ["Toz koruması", "Var", "Yok"],
              ["UV koruması", "Var", "Yok"],
              ["Estetik", "Minimalist", "Standart"],
              ["Fiyat", "Daha yüksek", "Standart"],
              ["Uygun alan", "Modern mimari", "Tüm mekanlar"],
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Kasalı plise perde <strong>aşağıdaki mekanlar</strong> için en uygun sistemdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Modern ev — minimalist tasarım sevenler",
              "Ofis — profesyonel ve sade görünüm",
              "Showroom — estetik öncelikli mekanlar",
              "Butik otel — tasarım odaklı mekanlar",
              "Yeni nesil mimari — büyük cam yüzeyler",
              "Stüdyo daire — az yer kaplayan çözüm",
            ],
          },
        },
        {
          h2: "Kasalı Sistem Montajı",
          paragraphs: [
            "Kasalı plise perde montajı <strong>iki şekilde</strong> yapılır:",
          ],
          list: {
            type: "ul",
            items: [
              "Vidalı kasa montajı — kasa vidalar ile çerçeveye veya tavana sabitlenir",
              "Korniş içi montaj — kasa korniş içine gizlenir, tamamen görünmez",
              "Her iki montajda da kumaş kasa içinde toplanır",
              "Kasa rengi pencere rengi ile eşleştirilir — beyaz, krem, gri",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Kasalı plise perde nedir?",
          answer: "Kasalı plise perde, kumaşın alüminyum kasa içinde gizlendiği bir sistemdir. Perde kullanılmadığında kumaş kasa içinde kaybolur. Kumaş toz, UV ve hasardan korunur. Modern ve minimalist tasarım arayanlar için ideal.",
        },
        {
          question: "Kasalı sistem standarttan daha mı pahalı?",
          answer: "Evet, kasalı sistem ek alüminyum kasa gereksinimi nedeniyle standart sistemden biraz daha yüksektir. Ancak kumaş koruması ve estetik avantajı göz önüne alındığında değer katmaktadır.",
        },
        {
          question: "Kasalı sistemde kumaş görünür mü?",
          answer: "Perde kullanıldığında kumaş görünür. Perde kullanılmadığında kumaş kasa içinde tamamen kaybolur — sadece kasa görünür. Bu minimalist ve estetik bir görünüm sağlar.",
        },
        {
          question: "Kasa rengi seçilebilir mi?",
          answer: "Evet, kasa rengi pencere rengi ile eşleştirilir. Beyaz, krem, gri ve bej gibi renk seçenekleri mevcuttur. Kasa rengi mekan tasarımına uygun seçilir.",
        },
        {
          question: "Kasalı plise perde nerelerde kullanılır?",
          answer: "Modern evlerde, ofislerde, showroomlarda, butik otellerde ve yeni nesil mimari yapılarında kullanılır. Estetik önceliği olan ve minimalist tasarım arayan mekanlar için ideal.",
        },
      ]}
    />
  );
}
