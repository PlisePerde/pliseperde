import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Oval Plise Perde — Oval Formda Özel Üretim",
  description:
    "Oval plise perde: oval formda özel üretim. Kemerli pencere ve estetik mimari için ideal. Özel profil büküm, 2 yıl garanti.",
  slug: "oval-plise-perde",
  keywords: ["oval plise perde", "oval pencere plise perde", "kemerli pencere plise perde"],
});

export default function OvalPlisePerdePage() {
  return (
    <PageTemplate
      title="Oval Plise Perde"
      description="Oval plise perde: oval formda özel üretim. Kemerli pencere ve estetik mimari için ideal."
      slug="oval-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Sistemleri", url: "/plise-perde-sistemleri" }, { name: "Oval Plise Perde", url: "/oval-plise-perde" }]}
      h1="Oval Plise Perde"
      intro="Oval plise perde, oval formdaki pencereler için özel üretilen bir sistemdir. Kemerli pencereler, oval cam yüzeyler ve estetik mimari formlar için idealdir. Standart plise perde oval pencereye uymaz — özel profil büküm ve kumaş şekillendirme ile oval forma tam uyum sağlanır. Her oval pencere ölçüsüne göre özel üretim yapılır. 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Oval Plise Perde",
        description: "Oval formda özel üretim plise perde. Kemerli pencere için ideal.",
      }}
      sections={[
        {
          h2: "Oval Sistem Nedir?",
          paragraphs: [
            "Oval plise perde sistemini tanımlayan en önemli özellik, profilin <strong>oval formda</strong> bükülmesidir. Standart plise perde dikdörtgen olduğu için oval pencereye uymaz.",
            "Oval sistemde alüminyum profil, oval forma göre özel bükülür. Kumaş, oval forma göre şekillendirilir. Bu sayede kemerli ve oval pencerelerde tam örtü sağlanır.",
          ],
        },
        {
          h2: "Oval Sistem Avantajları",
          paragraphs: [
            "Oval plise perde sisteminin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Oval pencerede tam örtü — standart perde uymaz",
              "Kemerli pencere için ideal — estetik mimari formlar",
              "Oval profil büküm — özel üretim teknik",
              "Estetik — oval pencerede düzgün görünüm",
              "Mimari uyum — dekoratif formlarda kullanım",
              "Özel üretim — her oval ölçüye üretim",
            ],
          },
        },
        {
          h2: "Oval vs Yuvarlak Sistem",
          paragraphs: [
            "Oval ve yuvarlak plise perde sistemleri arasındaki temel farklar:",
          ],
          table: {
            headers: ["Özellik", "Oval Sistem", "Yuvarlak Sistem"],
            rows: [
              ["Form", "Oval (elips)", "Dairesel (tam yuvarlak)"],
              ["Uygun pencere", "Kemerli, oval", "Yuvarlak"],
              ["Profil büküm", "Oval büküm", "Dairesel büküm"],
              ["Ölçü", "Genişlik + yükseklik", "Çap"],
              ["Uygun alan", "Kemerli pencere", "Yuvarlak pencere"],
              ["Estetik", "Zarif, klasik", "Modern, dekoratif"],
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Oval plise perde <strong>aşağıdaki mekanlar</strong> için en uygun sistemdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Kemerli pencere — klasik mimari formlar",
              "Oval pencere — dekoratif mimari özellikler",
              "Tarihi bina — kemerli geleneksel pencereler",
              "Modern mimari — oval cam yüzeyler",
              "Kış bahçesi — oval cam formları",
              "Estetik mekan — tasarım odaklı pencereler",
            ],
          },
        },
        {
          h2: "Oval Sistem Üretimi",
          paragraphs: [
            "Oval plise perde üretimi <strong>özel süreç</strong> gerektirir:",
          ],
          list: {
            type: "ol",
            items: [
              "Ölçü alma — oval genişlik ve yükseklik ölçülür",
              "Profil büküm — alüminyum profil oval forma bükülür",
              "Kumaş şekillendirme — kumaş oval forma göre kesilir",
              "Montaj — özel aparat ile çerçeveye sabitlenir",
              "Test — açılım ve oval uyum test edilir",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Oval plise perde kemerli pencerede kullanılır mı?",
          answer: "Evet, oval plise perde kemerli pencereler için ideal sistemdir. Kemerli pencerede tam örtü sağlar. Özel profil büküm ile her kemer formuna uyum sağlar.",
        },
        {
          question: "Oval ve yuvarlak plise perde arasındaki fark nedir?",
          answer: "Oval sistem elips formda, yuvarlak sistem tam dairesel formda üretilir. Oval sistem kemerli pencerelerde, yuvarlak sistem tam yuvarlak pencerelerde kullanılır. Her ikisi de özel profil büküm gerektirir.",
        },
        {
          question: "Oval plise perde nasıl ölçülür?",
          answer: "Oval pencerenin genişlik ve yükseklik ölçüleri alınır. Kemer açısı ve formu belirlenir. Bu ölçülere göre özel profil büküm ve kumaş şekillendirme yapılır. Ücretsiz keşif ile ölçü alabilirsiniz.",
        },
        {
          question: "Oval sistem standarttan daha pahalı mı?",
          answer: "Evet, oval sistem özel profil büküm ve kumaş şekillendirme gerektirdiği için standart dikdörtgen sistemden daha yüksektir. Ancak oval pencerede standart perde kullanılamaz, özel üretim zorunludur.",
        },
        {
          question: "Oval plise perde hangi kumaşlarla yapılır?",
          answer: "Tüm kumaş tipleri oval sistemde kullanılabilir: tül, güneşlik, yarı karartma ve blackout. Kemerli pencerede estetik için tül veya güneşlik, gizlilik için blackout önerilir.",
        },
      ]}
    />
  );
}
