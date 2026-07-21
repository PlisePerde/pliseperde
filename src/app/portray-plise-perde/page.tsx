import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Portray Plise Perde — İnce Profil Estetik Sistem",
  description:
    "Portray plise perde: ince profil ile estetik montaj sistemi. Minimal görünüm, pencere içinde gizli profil. Modern tasarım. 2 yıl garanti.",
  slug: "portray-plise-perde",
});

export default function PortrayPlisePerdePage() {
  return (
    <PageTemplate
      title="Portray Plise Perde"
      description="Portray plise perde: ince profil ile estetik montaj sistemi. Minimal görünüm, pencere içinde gizli profil."
      slug="portray-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sistemlerimiz", url: "/plise-perde-sistemleri" }, { name: "Portray Plise Perde", url: "/portray-plise-perde" }]}
      h1="Portray Plise Perde"
      intro="Portray plise perde, standart plise perdeden daha ince profil ile monte edilen estetik odaklı bir sistemdir. Profil pencere içinde neredeyse görünmez — sadece kumaş görünür. Modern ve minimal tasarım sevenler için ideal. İnce profile rağmen sağlamlık korunur. Vidalı veya yapışkanlı montaj ile uygulanır. 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Portray Plise Perde",
        description: "İnce profil ile estetik montaj sistemi. Minimal görünüm, gizli profil.",
      }}
      sections={[
        {
          h2: "Portray Sistem Nedir?",
          paragraphs: [
            "Portray sistem, plise perde profilinin <strong>standart profilden daha ince</strong> olduğu bir montaj yöntemidir. Standart profil kalınlığı 25-30 mm iken, portray profil 15-18 mm kalınlığındadır.",
            "Bu incelik, profilin pencere içinde <em>neredeyse görünmez</em> olmasını sağlar. Sadece kumaş görünür, profil arka planda kalır. Estetik beklentisi yüksek mekanlarda tercih edilir.",
          ],
        },
        {
          h2: "Portray Sistem Avantajları",
          paragraphs: [
            "Portray sisteminin başlıca avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Minimal görünüm — ince profil, sadece kumaş görünür",
              "Estetik — modern ve sade tasarım",
              "Az yer kaplama — 15-18 mm profil ile pencerede yer tasarrufu",
              "Gizli montaj — profil pencere içinde kaybolur",
              "Renk uyumu — profil pencere renginde seçilir",
              "Modern mimari — yeni nesil ev ve ofis tasarımına uygun",
            ],
          },
        },
        {
          h2: "Portray vs Standart Profil",
          paragraphs: [
            "Portray ve standart profil arasındaki temel farklar:",
          ],
          table: {
            headers: ["Özellik", "Portray Profil", "Standart Profil"],
            rows: [
              ["Kalınlık", "15-18 mm", "25-30 mm"],
              ["Görünüm", "Minimal, gizli", "Belirgin profil"],
              ["Yer kaplama", "Az", "Orta"],
              ["Estetik", "Yüksek", "Standart"],
              ["Sağlamlık", "İyi", "Yüksek"],
              ["Uygun kumaş", "Hafif-orta", "Tüm kumaşlar"],
            ],
          },
        },
        {
          h2: "Portray Sistem Montajı",
          paragraphs: [
            "Portray sistem montajı <strong>iki şekilde</strong> yapılır:",
          ],
          list: {
            type: "ul",
            items: [
              "Vidalı portray — ince profil vidalar ile sabitlenir, en sağlam",
              "Yapışkanlı portray — ince profil bant ile yapıştırılır, delmesiz",
              "Her iki yöntemde de profil pencere içine oturur, dışarı taşmaz",
              "Profil rengi pencere rengi ile eşleştirilir — beyaz, krem, gri",
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Portray sistem <strong>estetik önceliği olan</strong> mekanlar için idealdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Modern ev — minimal tasarım sevenler",
              "Ofis ve çalışma alanı — sade, profesyonel görünüm",
              "Showroom ve vitrin — estetik öncelikli mekanlar",
              "Yeni nesil mimari — büyük cam yüzeyler",
              "Butik otel ve kafe — tasarım odaklı mekanlar",
              "Stüdyo daire — az yer kaplayan çözüm",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Portray profil ne kadar ince?",
          answer: "Portray profil 15-18 mm kalınlığındadır. Standart profil 25-30 mm'dir. Bu incelik profilin pencerede neredeyse görünmemesini sağlar.",
        },
        {
          question: "Portray sistem sağlam mı?",
          answer: "Evet, portray sistem ince olmasına rağmen sağlamdır. Vidalı portray montajı ile maksimum sağlamlık sağlanır. Hafif ve orta ağırlıktaki kumaşlar için idealdir.",
        },
        {
          question: "Portray sistem hangi kumaşlar için uygun?",
          answer: "Hafif ve orta ağırlıktaki kumaşlar (tül, güneşlik, yarı karartma) için uygundur. Ağır kumaşlar (honeycomb, motorlu) için standart profil önerilir.",
        },
        {
          question: "Portray sistem fiyatı standarttan farklı mı?",
          answer: "Portray profil, ince yapısı ve özel üretim gereği standart profile göre biraz daha yüksektir. Estetik avantajı göz önüne alındığında değer katmaktadır.",
        },
        {
          question: "Portray profil rengi seçilebilir mi?",
          answer: "Evet, portray profil pencere rengi ile eşleştirilir. Beyaz, krem, gri ve bej gibi renk seçenekleri mevcuttur. Profilin görünmez olması için renk uyumu önemlidir.",
        },
      ]}
    />
  );
}
