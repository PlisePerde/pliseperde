import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Yuvarlak Plise Perde — Dairesel Formda Özel Üretim",
  description:
    "Yuvarlak plise perde: dairesel formda özel üretim. Yuvarlak pencere ve mimari özellikler için ideal. Özel profil büküm, 2 yıl garanti.",
  slug: "yuvarlak-plise-perde",
  keywords: ["yuvarlak plise perde", "yuvarlak pencere plise perde"],
});

export default function YuvarlakPlisePerdePage() {
  return (
    <PageTemplate
      title="Yuvarlak Plise Perde"
      description="Yuvarlak plise perde: dairesel formda özel üretim. Yuvarlak pencere ve mimari özellikler için ideal."
      slug="yuvarlak-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Sistemleri", url: "/plise-perde-sistemleri" }, { name: "Yuvarlak Plise Perde", url: "/yuvarlak-plise-perde" }]}
      h1="Yuvarlak Plise Perde"
      intro="Yuvarlak plise perde, dairesel formdaki pencereler için özel üretilen bir sistemdir. Yuvarlak pencereler, mimari özellikler ve dekoratif formlar için idealdir. Standart plise perde yuvarlak pencereye uymaz — özel profil büküm ve kumaş şekillendirme ile dairesel forma tam uyum sağlanır. Her yuvarlak pencere ölçüsüne göre özel üretim yapılır. 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Yuvarlak Plise Perde",
        description: "Dairesel formda özel üretim plise perde. Yuvarlak pencere için ideal.",
      }}
      sections={[
        {
          h2: "Yuvarlak Sistem Nedir?",
          paragraphs: [
            "Yuvarlak plise perde sistemini tanımlayan en önemli özellik, profilin <strong>dairesel formda</strong> bükülmesidir. Standart plise perde dikdörtgen olduğu için yuvarlak pencereye uymaz.",
            "Yuvarlak sistemde alüminyum profil, dairesel forma göre özel bükülür. Kumaş, dairesel forma göre şekillendirilir ve katlanır. Bu sayede yuvarlak pencerede tam örtü sağlanır.",
          ],
        },
        {
          h2: "Yuvarlak Sistem Avantajları",
          paragraphs: [
            "Yuvarlak plise perde sisteminin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Yuvarlak pencerede tam örtü — standart perde uymaz",
              "Dairesel profil büküm — özel üretim teknik",
              "Estetik — yuvarlak pencerede düzgün görünüm",
              "Mimari uyum — dekoratif formlarda kullanım",
              "Işık kontrolü — yuvarlak pencerede ışık yönetimi",
              "Özel üretim — her çapta üretim yapılır",
            ],
          },
        },
        {
          h2: "Yuvarlak Sistem Üretimi",
          paragraphs: [
            "Yuvarlak plise perde üretimi <strong>özel süreç</strong> gerektirir:",
          ],
          list: {
            type: "ol",
            items: [
              "Çap ölçülür — yuvarlak pencerenin çapı alınır",
              "Profil büküm — alüminyum profil dairesel forma bükülür",
              "Kumaş şekillendirme — kumaş dairesel forma göre kesilir",
              "Montaj — özel aparat ile çerçeveye sabitlenir",
              "Test — açılım ve dairesel uyum test edilir",
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Yuvarlak plise perde <strong>aşağıdaki mekanlar</strong> için en uygun sistemdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Yuvarlak pencere — dairesel formdaki pencereler",
              "Mimari özellik — dekoratif yuvarlak formlar",
              "Tarihi bina — yuvarlak formlu geleneksel pencereler",
              "Modern mimari — dairesel cam yüzeyler",
              "Kış bahçesi — yuvarlak cam formları",
              "Teras — yuvarlak çatı formları",
            ],
          },
        },
        {
          h2: "Yuvarlak Sistem Ölçüleri",
          paragraphs: [
            "Yuvarlak plise perde üretiminde ölçü sınırları:",
          ],
          table: {
            headers: ["Ölçü", "Min", "Maks"],
            rows: [
              ["Çap", "30 cm", "200 cm"],
              ["Profil kalınlığı", "25 mm", "30 mm"],
              ["Kumaş tipi", "Tüm tipler", "Tüm tipler"],
              ["Açılım", "Merkezi", "Merkezi"],
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Yuvarlak plise perde nasıl üretilir?",
          answer: "Yuvarlak plise perde özel üretim süreciyle yapılır. Alüminyum profil dairesel forma bükülür, kumaş dairesel forma göre kesilir. Her yuvarlak pencere çapına göre özel üretim yapılır.",
        },
        {
          question: "Yuvarlak plise perde hangi çaplarda yapılır?",
          answer: "Yuvarlak plise perde 30 cm ile 200 cm çap aralığında üretilebilir. Daha büyük çaplarda özel değerlendirme yapılır. Çap ölçüsü alındıktan sonra özel üretim süreci başlar.",
        },
        {
          question: "Yuvarlak sistem standarttan daha pahalı mı?",
          answer: "Evet, yuvarlak sistem özel profil büküm ve kumaş şekillendirme gerektirdiği için standart dikdörtgen sistemden daha yüksektir. Ancak yuvarlak pencerede standart perde kullanılamaz, özel üretim zorunludur.",
        },
        {
          question: "Yuvarlak plise perde açılımı nasıl çalışır?",
          answer: "Yuvarlak sistemde kumaş genellikle merkezi açılımlı çalışır. Kumaş merkezden açılır ve toplanır. Açılım yönü pencere formuna ve mekan düzenine göre belirlenir.",
        },
        {
          question: "Yuvarlak plise perde hangi kumaşlarla yapılır?",
          answer: "Tüm kumaş tipleri yuvarlak sistemde kullanılabilir: tül, güneşlik, yarı karartma ve blackout. Yuvarlak pencerede estetik için tül veya güneşlik, gizlilik için blackout önerilir.",
        },
      ]}
    />
  );
}
