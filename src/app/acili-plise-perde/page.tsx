import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Açılı Plise Perde — Açılı Formda Özel Üretim",
  description:
    "Açılı plise perde: açılı formda özel üretim. Köşe pencere ve dikdörtgen olmayan yüzeyler için ideal. Özel profil kesimi, 2 yıl garanti.",
  slug: "acili-plise-perde",
  keywords: ["açılı plise perde", "açılı pencere plise perde"],
});

export default function AciliPlisePerdePage() {
  return (
    <PageTemplate
      title="Açılı Plise Perde"
      description="Açılı plise perde: açılı formda özel üretim. Köşe pencere ve dikdörtgen olmayan yüzeyler için ideal."
      slug="acili-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Sistemleri", url: "/plise-perde-sistemleri" }, { name: "Açılı Plise Perde", url: "/acili-plise-perde" }]}
      h1="Açılı Plise Perde"
      intro="Açılı plise perde, dikdörtgen olmayan açılı formlardaki pencereler için özel üretilen bir sistemdir. Köşe pencereleri, beşik çatı açılı formları ve dikdörtgen olmayan mimari pencereler için idealdir. Standart plise perde açılı pencereye uymaz — özel profil kesimi ve kumaş şekillendirme ile açılı forma tam uyum sağlanır. Her açılı pencere ölçüsüne göre özel üretim yapılır. 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Açılı Plise Perde",
        description: "Açılı formda özel üretim plise perde. Köşe pencere için ideal.",
      }}
      sections={[
        {
          h2: "Açılı Sistem Nedir?",
          paragraphs: [
            "Açılı plise perde sistemini tanımlayan en önemli özellik, kumaş ve profilin <strong>açılı formda</strong> kesilmesidir. Standart plise perde dikdörtgen olduğu için açılı pencereye uymaz.",
            "Açılı sistemde profil, pencerenin açılı kenarlarına uyacak şekilde özel kesilir. Kumaş, açılı forma göre şekillendirilir. Bu sayede dikdörtgen olmayan pencerede tam örtü sağlanır.",
          ],
        },
        {
          h2: "Açılı Sistem Avantajları",
          paragraphs: [
            "Açılı plise perde sisteminin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Açılı pencerede tam örtü — standart perde uymaz",
              "Köşe pencere için ideal — iki pencere birleşiminde kullanım",
              "Özel profil kesimi — her açılı forma uyum",
              "Estetik — açılı pencerede düzgün görünüm",
              "Işık kontrolü — açılı pencerede ışık yönetimi",
              "Mimari uyum — dikdörtgen olmayan formlarda kullanım",
            ],
          },
        },
        {
          h2: "Açılı Sistem Üretimi",
          paragraphs: [
            "Açılı plise perde üretimi <strong>özel süreç</strong> gerektirir:",
          ],
          list: {
            type: "ol",
            items: [
              "Ölçü alma — açılı kenarlar ve açılar ölçülür",
              "Profil kesimi — alüminyum profil açılı forma kesilir",
              "Kumaş şekillendirme — kumaş açılı forma göre katlanır",
              "Montaj — özel aparat ile açılı kenarlara sabitlenir",
              "Test — açılım ve toplanma test edilir",
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Açılı plise perde <strong>aşağıdaki mekanlar</strong> için en uygun sistemdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Köşe pencere — iki pencere birleşim noktası",
              "Beşik çatı — açılı formlu çatı pencereleri",
              "Modern mimari — dikdörtgen olmayan formlar",
              "Kış bahçesi — açılı cam yüzeyler",
              "Teras — açılı çatı formları",
              "Tarihi bina — açılı formlu geleneksel pencereler",
            ],
          },
        },
        {
          h2: "Açılı Sistem Ölçüleri",
          paragraphs: [
            "Açılı plise perde üretiminde ölçü sınırları:",
          ],
          table: {
            headers: ["Ölçü", "Min", "Maks"],
            rows: [
              ["Genişlik", "30 cm", "300 cm"],
              ["Yükseklik", "40 cm", "280 cm"],
              ["Açı", "30°", "150°"],
              ["Profil kalınlığı", "25 mm", "30 mm"],
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Açılı plise perde köşe pencerede kullanılır mı?",
          answer: "Evet, açılı plise perde köşe pencereler için ideal sistemdir. İki pencere birleşim noktasında tam örtü sağlar. Özel profil kesimi ile her açılı forma uyum sağlar.",
        },
        {
          question: "Açılı plise perde nasıl ölçülür?",
          answer: "Açılı kenarlar ve açılar ölçülür. Her kenarın uzunluğu ve açı değerleri alınır. Bu ölçülere göre özel profil kesimi ve kumaş şekillendirme yapılır. Ücretsiz keşif ile ölçü alabilirsiniz.",
        },
        {
          question: "Açılı sistem standarttan daha pahalı mı?",
          answer: "Evet, açılı sistem özel profil kesimi ve kumaş şekillendirme gerektirdiği için standart dikdörtgen sistemden daha yüksektir. Ancak açılı pencerede standart perde kullanılamaz, özel üretim zorunludur.",
        },
        {
          question: "Açılı plise perde açılımı nasıl çalışır?",
          answer: "Açılı sistemde kumaş, pencere formuna göre açılır. Köşe pencerede iki yöne açılım yapılabilir. Açılım yönü pencere formuna ve mekan düzenine göre belirlenir.",
        },
        {
          question: "Açılı plise perde hangi kumaşlarla yapılır?",
          answer: "Tüm kumaş tipleri açılı sistemde kullanılabilir: tül, güneşlik, yarı karartma ve blackout. Köşe pencere için tül veya güneşlik, özel mekanlar için blackout önerilir.",
        },
      ]}
    />
  );
}
