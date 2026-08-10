import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Üçgen Plise Perde — Üçgen Formda Özel Üretim",
  description:
    "Üçgen plise perde: üçgen formda özel üretim. Çatı pencereleri ve beşik çatı için ideal. Özel profil kesimi, 2 yıl garanti.",
  slug: "ucgen-plise-perde",
  keywords: ["üçgen plise perde", "üçgen pencere plise perde"],
});

export default function UcgenPlisePerdePage() {
  return (
    <PageTemplate
      title="Üçgen Plise Perde"
      description="Üçgen plise perde: üçgen formda özel üretim. Çatı pencereleri ve beşik çatı için ideal."
      slug="ucgen-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Sistemleri", url: "/plise-perde-sistemleri/" }, { name: "Üçgen Plise Perde", url: "/ucgen-plise-perde/" }]}
      h1="Üçgen Plise Perde"
      intro="Üçgen plise perde, üçgen formdaki pencereler için özel üretilen bir sistemdir. Çatı pencereleri, beşik çatı pencereleri ve mimari üçgen formlar için idealdir. Standart plise perde üçgen pencereye uymaz — özel profil kesimi ve kumaş şekillendirme ile üçgen forma tam uyum sağlanır. Her üçgen pencere ölçüsüne göre özel üretim yapılır. 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Üçgen Plise Perde",
        description: "Üçgen formda özel üretim plise perde. Çatı pencereleri için ideal.",
      }}
      sections={[
        {
          h2: "Üçgen Sistem Nedir?",
          paragraphs: [
            "Üçgen plise perde sistemini tanımlayan en önemli özellik, kumaş ve profilin <strong>üçgen formda</strong> kesilmesidir. Standart plise perde dikdörtgen olduğu için üçgen pencereye uymaz.",
            "Üçgen sistemde profil, pencerenin üç kenarına da uyacak şekilde özel kesilir. Kumaş, üçgen forma göre şekillendirilir ve katlanır. Bu sayede üçgen pencerede tam örtü sağlanır.",
          ],
        },
        {
          h2: "Üçgen Sistem Avantajları",
          paragraphs: [
            "Üçgen plise perde sisteminin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Üçgen pencerede tam örtü — standart perde uymaz",
              "Çatı penceresi için ideal — beşik çatı pencerelerinde kullanım",
              "Özel profil kesimi — her üçgen forma uyum",
              "Işık kontrolü — çatı penceresinde güneş ışığını kontrol",
              "Estetik — üçgen pencerede düzgün görünüm",
              "Isı yalıtımı — çatı penceresinde ısı kontrolü",
            ],
          },
        },
        {
          h2: "Üçgen Sistem Üretimi",
          paragraphs: [
            "Üçgen plise perde üretimi <strong>özel süreç</strong> gerektirir:",
          ],
          list: {
            type: "ol",
            items: [
              "Ölçü alma — üçgenin üç kenarı ve açıları ölçülür",
              "Profil kesimi — alüminyum profil üçgen forma kesilir",
              "Kumaş şekillendirme — kumaş üçgen forma göre katlanır",
              "Montaj — özel aparat ile üç kenara sabitlenir",
              "Test — açılım ve toplanma test edilir",
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Üçgen plise perde <strong>aşağıdaki mekanlar</strong> için en uygun sistemdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Çatı penceresi — beşik çatı üçgen pencereleri",
              "Tavan arası — üçgen formdaki tavan pencereleri",
              "Modern mimari — üçgen formlu mimari pencereler",
              "Kış bahçesi — üçgen cam yüzeyler",
              "Teras üstü — üçgen çatı formları",
              "Tarihi bina — üçgen formlu geleneksel pencereler",
            ],
          },
        },
        {
          h2: "Üçgen Sistem Ölçüleri",
          paragraphs: [
            "Üçgen plise perde üretiminde ölçü sınırları:",
          ],
          table: {
            headers: ["Ölçü", "Min", "Maks"],
            rows: [
              ["Taban genişliği", "30 cm", "300 cm"],
              ["Yükseklik", "40 cm", "280 cm"],
              ["Açı", "30°", "150°"],
              ["Profil kalınlığı", "25 mm", "30 mm"],
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Üçgen plise perde çatı penceresinde kullanılır mı?",
          answer: "Evet, üçgen plise perde çatı pencereleri için ideal sistemdir. Beşik çatı üçgen pencerelerinde tam örtü sağlar. Özel profil kesimi ile her üçgen forma uyum sağlar.",
        },
        {
          question: "Üçgen plise perde nasıl ölçülür?",
          answer: "Üçgenin üç kenarı ve açıları ölçülür. Taban genişliği, yükseklik ve açı değerleri alınır. Bu ölçülere göre özel profil kesimi ve kumaş şekillendirme yapılır. Ücretsiz keşif ile ölçü alabilirsiniz.",
        },
        {
          question: "Üçgen sistem standarttan daha pahalı mı?",
          answer: "Evet, üçgen sistem özel profil kesimi ve kumaş şekillendirme gerektirdiği için standart dikdörtgen sistemden daha yüksektir. Ancak üçgen pencerede standart perde kullanılamaz, özel üretim zorunludur.",
        },
        {
          question: "Üçgen plise perde açılımı nasıl çalışır?",
          answer: "Üçgen sistemde kumaş genellikle tabandan tepeye doğru açılır. Alt profil yukarı çekildiğinde kumaş tepeye toplanır. Açılım yönü pencere formuna göre belirlenir.",
        },
        {
          question: "Üçgen plise perde hangi kumaşlarla yapılır?",
          answer: "Tüm kumaş tipleri üçgen sistemde kullanılabilir: tül, güneşlik, yarı karartma ve blackout. Çatı penceresi için güneşlik veya blackout önerilir — güneş ışığını kontrol eder.",
        },
      ]}
    />
  );
}
