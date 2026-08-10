import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Yatay Plise Perde — Yatay Açılan Sistem",
  description:
    "Yatay plise perde: üstten alt açılan sistem. Mutfak, banyo ve dar alanlar için ideal. Özel ölçü üretim, 2 yıl garanti.",
  slug: "yatay-plise-perde",
  keywords: ["yatay plise perde", "yatay açılan plise perde"],
});

export default function YatayPlisePerdePage() {
  return (
    <PageTemplate
      title="Yatay Plise Perde"
      description="Yatay plise perde: üstten alt açılan sistem. Mutfak, banyo ve dar alanlar için ideal."
      slug="yatay-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Sistemleri", url: "/plise-perde-sistemleri/" }, { name: "Yatay Plise Perde", url: "/yatay-plise-perde/" }]}
      h1="Yatay Plise Perde"
      intro="Yatay plise perde, kumaşın üst profilden aşağı doğru açıldığı bir sistemdir. Üstten çekildiğinde kumaş yukarı toplanır, aşağı bırakıldığında tamamen açılır. Mutfak, banyo ve dar pencere alanları için en pratik çözümdür. Pencere önünde yer kaplamaz, temizlik kolaylığı sağlar. Özel ölçü üretim ve 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Yatay Plise Perde",
        description: "Yatay açılan plise perde sistemi. Mutfak ve banyo için ideal.",
      }}
      sections={[
        {
          h2: "Yatay Sistem Nedir?",
          paragraphs: [
            "Yatay plise perde sistemini tanımlayan en önemli özellik, kumaşın <strong>yatay düzlemde</strong> açılmasıdır. Üst profil sabit, alt profil hareketlidir. Alt profili yukarı çektiğinizde kumaş yukarı toplanır, aşağı bıraktığınızda pencere tamamen kapanır.",
            "Bu sistem özellikle <em>pencere önünde yer kaplamayan</em> çözümler arayanlar için idealdir. Dikey sistemlerde kumaş yana açılırken, yatay sistemde kumaş yukarı toplanır — pencere önünde hiçbir engel kalmaz.",
          ],
        },
        {
          h2: "Yatay Sistem Avantajları",
          paragraphs: [
            "Yatay plise perde sisteminin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Pencere önünde yer kaplamaz — kumaş yukarı toplanır",
              "Mutfak tezgahı önünde pratik — tezgaha engel olmaz",
              "Banyo ve WC için ideal — dar alanlarda rahat kullanım",
              "Temizlik kolaylığı — kumaş yukarı çekildiğinde cam tamamen açık",
              "Çocuk odası için güvenli — alt profil çocuk erişiminden uzak",
              "Dar pencerelerde ideal — yana açılım alan gerektirmez",
            ],
          },
        },
        {
          h2: "Yatay vs Dikey Sistem",
          paragraphs: [
            "Yatay ve dikey plise perde sistemleri arasındaki temel farklar:",
          ],
          table: {
            headers: ["Özellik", "Yatay Sistem", "Dikey Sistem"],
            rows: [
              ["Açılım yönü", "Yukarı-aşağı", "Sağa-sola"],
              ["Toplanma", "Yukarı toplanır", "Yana toplanır"],
              ["Pencere önü", "Tamamen boşalır", "Bir taraf dolu kalır"],
              ["Uygun alan", "Mutfak, banyo, dar pencere", "Uzun pencere, cam balkon"],
              ["Genişlik", "30-300 cm", "30-300 cm"],
              ["Yükseklik", "40-280 cm", "40-280 cm"],
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Yatay plise perde <strong>aşağıdaki mekanlar</strong> için en uygun sistemdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Mutfak — tezgah önü pencerede engel yok",
              "Banyo ve WC — dar alanlarda pratik kullanım",
              "Çocuk odası — alt profil yukarıda, güvenli",
              "Dar pencere — yana açılım alanı yoksa ideal",
              "Stüdyo daire — pencere önü boş kalır, ferah görünüm",
              "Ofis — bilgisayar ekranı önünde ışık kontrolü",
            ],
          },
        },
        {
          h2: "Yatay Sistem Montajı",
          paragraphs: [
            "Yatay plise perde montajı <strong>üç şekilde</strong> yapılır:",
          ],
          list: {
            type: "ul",
            items: [
              "Vidalı montaj — üst profil vidalar ile sabitlenir, en sağlam",
              "Yapışkanlı montaj — çift taraflı bant ile delmesiz, PVC çerçeveye ideal",
              "Kancalı montaj — sökülüp takılır, temizlik için pratik",
              "Her üç montajda da alt profil serbestçe yukarı-aşağı hareket eder",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Yatay plise perde mutfakta kullanılır mı?",
          answer: "Evet, yatay plise perde mutfak için en ideal sistemdir. Kumaş yukarı açıldığında tezgah önü tamamen boşalır — tezgaha engel olmaz. Mutfak penceresinde pratik ışık kontrolü sağlar.",
        },
        {
          question: "Yatay ve dikey plise perde arasındaki fark nedir?",
          answer: "Yatay sistemde kumaş yukarı-aşağı açılır, dikey sistemde yana açılır. Yatay sistem pencere önünü tamamen boşaltır, dikey sistem bir tarafı dolu bırakır. Mutfak ve banyo için yatay, uzun pencere ve cam balkon için dikey daha uygundur.",
        },
        {
          question: "Yatay plise perde dar pencerede kullanılır mı?",
          answer: "Evet, dar pencerelerde yatay sistem idealdir. Dikey sistemde yana açılım için alan gerekir, yatay sistemde ise kumaş yukarı toplanır — dar pencerede yer kaplamaz.",
        },
        {
          question: "Yatay sistemde hangi kumaşlar kullanılır?",
          answer: "Tüm kumaş tipleri yatay sistemde kullanılabilir: tül, güneşlik, yarı karartma ve blackout. Mutfak için tül veya güneşlik, yatak odası için blackout önerilir.",
        },
        {
          question: "Yatay plise perde temizliği nasıl yapılır?",
          answer: "Kumaşı yukarı çekip camı tamamen açarak temizlik yapabilirsiniz. Kumaş nemli bez ile silinir veya kancalı montajda sökülüp yıkanabilir. Toz tutmaz, antistatik kumaş seçeneği mevcuttur.",
        },
      ]}
    />
  );
}
