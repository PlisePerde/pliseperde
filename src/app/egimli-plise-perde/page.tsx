import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Eğimli Plise Perde — Eğimli Yüzeye Özel Sistem",
  description:
    "Eğimli plise perde: eğimli yüzeylere özel sistem. Çatı, merdiven boşluğu ve eğimli pencereler için ideal. Özel ölçü üretim, 2 yıl garanti.",
  slug: "egimli-plise-perde",
  keywords: ["eğimli plise perde", "eğimli pencere plise perde"],
});

export default function EgimliPlisePerdePage() {
  return (
    <PageTemplate
      title="Eğimli Plise Perde"
      description="Eğimli plise perde: eğimli yüzeylere özel sistem. Çatı, merdiven boşluğu ve eğimli pencereler için ideal."
      slug="egimli-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Sistemleri", url: "/plise-perde-sistemleri/" }, { name: "Eğimli Plise Perde", url: "/egimli-plise-perde/" }]}
      h1="Eğimli Plise Perde"
      intro="Eğimli plise perde, dik olmayan eğimli yüzeylere özel üretilen bir sistemdir. Çatı pencereleri, merdiven boşlukları ve eğimli cam yüzeyler için idealdir. Standart plise perde eğimli yüzeye uymaz — özel profil ve kumaş tutucu sistem ile eğimli yüzeye tam uyum sağlanır. Kumaş eğimde kaymaz, yerçekimine karşı sabitlenir. Özel ölçü üretim ve 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Eğimli Plise Perde",
        description: "Eğimli yüzeylere özel plise perde sistemi. Çatı ve merdiven boşluğu için ideal.",
      }}
      sections={[
        {
          h2: "Eğimli Sistem Nedir?",
          paragraphs: [
            "Eğimli plise perde sistemini tanımlayan en önemli özellik, profilin <strong>eğimli yüzeye</strong> monte edilmesidir. Standart sistemde profil dikey veya yatay iken, eğimli sistemde profil eğim açısına göre monte edilir.",
            "Eğimli sistemde kumaşın yerçekimi ile kaymaması için <em>özel kumaş tutucu</em> kullanılır. Kumaş, eğimli yüzeyde sabit kalır ve açılım yönünde hareket eder.",
          ],
        },
        {
          h2: "Eğimli Sistem Avantajları",
          paragraphs: [
            "Eğimli plise perde sisteminin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Eğimli yüzeye tam uyum — standart perde uymaz",
              "Kumaş kaymaz — özel tutucu ile sabitlenir",
              "Çatı penceresi için ideal — eğimli cam yüzeylerde kullanım",
              "Merdiven boşluğu — eğimli pencere alanlarında kullanım",
              "Işık kontrolü — eğimli yüzeyde güneş ışığını kontrol",
              "Isı yalıtımı — eğimli cam yüzeylerde ısı kontrolü",
            ],
          },
        },
        {
          h2: "Eğimli Sistem vs Standart Sistem",
          paragraphs: [
            "Eğimli ve standart plise perde sistemleri arasındaki temel farklar:",
          ],
          table: {
            headers: ["Özellik", "Eğimli Sistem", "Standart Sistem"],
            rows: [
              ["Montaj yüzeyi", "Eğimli", "Dikey veya yatay"],
              ["Kumaş tutucu", "Var — kaymaz", "Yok"],
              ["Uygun alan", "Çatı, merdiven boşluğu", "Standart pencere"],
              ["Açı", "15°-75°", "0° veya 90°"],
              ["Özel üretim", "Evet", "Hayır"],
              ["Fiyat", "Daha yüksek", "Standart"],
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Eğimli plise perde <strong>aşağıdaki mekanlar</strong> için en uygun sistemdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Çatı penceresi — eğimli çatı camlarında kullanım",
              "Merdiven boşluğu — eğimli pencere alanları",
              "Kış bahçesi — eğimli cam tavanlarda",
              "Teras üstü — eğimli çatı formları",
              "Tavan arası — eğimli tavan pencereleri",
              "Modern mimari — eğimli formlu cam yüzeyler",
            ],
          },
        },
        {
          h2: "Eğimli Sistem Montajı",
          paragraphs: [
            "Eğimli plise perde montajı <strong>özel süreç</strong> gerektirir:",
          ],
          list: {
            type: "ol",
            items: [
              "Eğim açısı ölçülür — 15°-75° aralığında üretim",
              "Özel profil kesimi — eğim açısına göre profil kesilir",
              "Kumaş tutucu takılır — kumaş kaymasını önler",
              "Montaj — eğimli yüzeye vidalı veya yapışkanlı",
              "Test — açılım ve kumaş sabitliği test edilir",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Eğimli plise perde çatı penceresinde kullanılır mı?",
          answer: "Evet, eğimli plise perde çatı pencereleri için ideal sistemdir. Eğimli cam yüzeyde kumaş kaymaz, özel tutucu ile sabitlenir. Işık kontrolü ve ısı yalıtımı sağlar.",
        },
        {
          question: "Eğimli sistemde kumaş kayar mı?",
          answer: "Hayır, eğimli sistemde özel kumaş tutucu kullanılır. Kumaş, eğimli yüzeyde yerçekimine karşı sabitlenir. Açılım yönünde hareket eder ama kaymaz.",
        },
        {
          question: "Eğimli plise perde hangi açılarda kullanılır?",
          answer: "Eğimli plise perde 15°-75° aralığında eğimli yüzeylerde kullanılır. Daha dik açılarda standart dikey sistem, daha yatay açılarda tavan sistemi uygundur.",
        },
        {
          question: "Eğimli sistem standarttan daha pahalı mı?",
          answer: "Evet, eğimli sistem özel profil kesimi ve kumaş tutucu gerektirdiği için standart sistemden daha yüksektir. Ancak eğimli yüzeyde standart perde kullanılamaz, özel üretim zorunludur.",
        },
        {
          question: "Eğimli plise perde merdiven boşluğunda kullanılır mı?",
          answer: "Evet, merdiven boşluklarındaki eğimli pencere alanlarında kullanılır. Eğimli yüzeye tam uyum sağlar, kumaş kaymaz. Özel ölçü üretim ile her eğimli pencereye uygulanır.",
        },
      ]}
    />
  );
}
