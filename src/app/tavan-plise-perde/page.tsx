import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Tavan Plise Perde — Tavan Montajlı Sistem",
  description:
    "Tavan plise perde: tavan montajlı sistem. Vitrin, kış bahçesi, cam balkon ve yüksek tavanlar için ideal. Özel ölçü üretim, 2 yıl garanti.",
  slug: "tavan-plise-perde",
  keywords: ["tavan plise perde", "tavan montajlı plise perde"],
});

export default function TavanPlisePerdePage() {
  return (
    <PageTemplate
      title="Tavan Plise Perde"
      description="Tavan plise perde: tavan montajlı sistem. Vitrin, kış bahçesi, cam balkon ve yüksek tavanlar için ideal."
      slug="tavan-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Sistemleri", url: "/plise-perde-sistemleri/" }, { name: "Tavan Plise Perde", url: "/tavan-plise-perde/" }]}
      h1="Tavan Plise Perde"
      intro="Tavan plise perde, profilin pencere çerçevesine değil doğrudan tavana monte edildiği bir sistemdir. Vitrinler, kış bahçeleri, cam balkonlar ve yüksek tavanlı mekanlarda ışık kontrolü ve gizlilik sağlar. Tavan montajı ile pencere çerçevesi boş kalır, geniş cam yüzeylerde kesintisiz örtü oluşturur. Özel ölçü üretim ve 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Tavan Plise Perde",
        description: "Tavan montajlı plise perde sistemi. Vitrin ve kış bahçesi için ideal.",
      }}
      sections={[
        {
          h2: "Tavan Sistemi Nedir?",
          paragraphs: [
            "Tavan plise perde sistemini tanımlayan en önemli özellik, profilin <strong>tavana monte</strong> edilmesidir. Standart montajda profil pencere çerçevesine takılırken, tavan sisteminde profil doğrudan tuz yüzeyine veya korniş içine sabitlenir.",
            "Bu sistem özellikle <em>geniş cam yüzeylerde</em> ve <em>çerçevesiz pencerelerde</em> tercih edilir. Tavan montajı ile pencere çerçevesi boş kalır, cam yüzeyinde kesintisiz bir örtü oluşturulur.",
          ],
        },
        {
          h2: "Tavan Sistemi Avantajları",
          paragraphs: [
            "Tavan plise perde sisteminin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Çerçevesiz camda kullanım — pencere çerçevesi gerektirmez",
              "Geniş vitrinde kesintisiz örtü — tek parça kumaş",
              "Kış bahçesi tavanı — cam tavanlarda ışık kontrolü",
              "Yüksek tavanlarda pratik — uzatma profili ile erişim",
              "Estetik — profil korniş içinde gizlenir",
              "Kombinasyon — dikey ve tavan montajı birlikte kullanılabilir",
            ],
          },
        },
        {
          h2: "Tavan vs Çerçeve Montajı",
          paragraphs: [
            "Tavan ve çerçeve montajı arasındaki temel farklar:",
          ],
          table: {
            headers: ["Özellik", "Tavan Montajı", "Çerçeve Montajı"],
            rows: [
              ["Montaj yeri", "Tuz yüzeyi", "Pencere çerçevesi"],
              ["Çerçeve gereksinimi", "Hayır", "Evet"],
              ["Uygun alan", "Vitrin, kış bahçesi", "Standart pencere"],
              ["Profil görünümü", "Korniş içinde gizli", "Çerçevede belirgin"],
              ["Genişlik", "30-400 cm", "30-300 cm"],
              ["Yükseklik", "40-300 cm", "40-280 cm"],
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Tavan plise perde <strong>aşağıdaki mekanlar</strong> için en uygun sistemdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Vitrin — geniş cam yüzeyde kesintisiz örtü",
              "Kış bahçesi — cam tavanlarda ışık kontrolü",
              "Cam balkon — çerçevesiz camlarda kullanım",
              "Yüksek tavan — uzatma profili ile erişim",
              "Showroom — geniş cam yüzeyde estetik",
              "Modern mimari — çerçevesiz büyük camlar",
            ],
          },
        },
        {
          h2: "Tavan Sistemi Montajı",
          paragraphs: [
            "Tavan plise perde montajı <strong>iki şekilde</strong> yapılır:",
          ],
          list: {
            type: "ul",
            items: [
              "Vidalı tavan montajı — profil vidalar ile tuz yüzeyine sabitlenir, en sağlam",
              "Korniş içi montaj — profil korniş içine gizlenir, estetik",
              "Her iki montajda da profil tuz yüzeyine paralel sabitlenir",
              "Uzatma profili ile yüksek tavanlarda erişim kolaylığı sağlanır",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Tavan plise perde vitrinde kullanılır mı?",
          answer: "Evet, tavan plise perde vitrinler için ideal sistemdir. Geniş cam yüzeyde kesintisiz örtü sağlar. Çerçeve montajı gerektirmez, profil korniş içinde gizlenir.",
        },
        {
          question: "Kış bahçesi cam tavanında plise perde kullanılır mı?",
          answer: "Evet, kış bahçesi cam tavanlarında tavan plise perde sistemi kullanılır. Cam tavanlarda ışık kontrolü ve ısı yalıtımı sağlar. Özel ölçü üretim ile her cam tavan formuna uygulanır.",
        },
        {
          question: "Tavan montajı çerçeve montajından farklı mı?",
          answer: "Evet, tavan montajında profil tuz yüzeyine sabitlenir, çerçeve montajında ise pencere çerçevesine. Tavan montajı çerçevesiz camlarda kullanılır, çerçeve montajı standart pencerelerde.",
        },
        {
          question: "Yüksek tavanlarda tavan plise perde nasıl kullanılır?",
          answer: "Yüksek tavanlarda uzatma profili ile erişim kolaylığı sağlanır. Motorlu sistem ile uzaktan kumanda kullanılabilir. El ile kullanım için uzatma kolu mevcuttur.",
        },
        {
          question: "Tavan plise perde fiyatı çerçeve montajından farklı mı?",
          answer: "Tavan montajı, ek profil ve montaj gereksinimleri nedeniyle çerçeve montajından biraz daha yüksektir. Ancak geniş cam yüzeylerde daha estetik ve pratik bir çözüm sunar.",
        },
      ]}
    />
  );
}
