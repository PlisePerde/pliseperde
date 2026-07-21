import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Vidalı Plise Perde — En Sağlam Montaj Sistemi",
  description:
    "Vidalı plise perde montajı: vidalı profil ile pencereye en sağlam sabitleme. Ağır kumaşlar için ideal. 2 yıl garanti, profesyonel montaj.",
  slug: "vidali-plise-perde",
});

export default function VidaliPlisePerdePage() {
  return (
    <PageTemplate
      title="Vidalı Plise Perde"
      description="Vidalı plise perde montajı: vidalı profil ile pencereye en sağlam sabitleme. Ağır kumaşlar için ideal."
      slug="vidali-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sistemlerimiz", url: "/plise-perde-sistemleri" }, { name: "Vidalı Plise Perde", url: "/vidali-plise-perde" }]}
      h1="Vidalı Plise Perde"
      intro="Vidalı plise perde, profilin pencere çerçevesine vidalar ile sabitlendiği montaj sistemidir. En sağlam ve dayanıklı montaj tipidir. Ağır kumaşlar (honeycomb, tam karartma, motorlu) için idealdir. Vidalı montaj ile perde yıllar boyu yerinden oynamaz. Profesyonel montaj ekibimiz tarafından uygulanır, 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Vidalı Plise Perde",
        description: "Vidalı montaj sistemi ile sabitlenen plise perde. En sağlam montaj tipi.",
      }}
      sections={[
        {
          h2: "Vidalı Montaj Nedir?",
          paragraphs: [
            "Vidalı montajda, plise perde profili (üst ve alt kanal) pencere çerçevesine <strong>çelik vidalar</strong> ile sabitlenir. Vida, profilin içinden çerçeveye girer ve görünmez kalır. Bu yöntem, perdenin ağırlığını çerçeveye en güvenli şekilde aktarır.",
            "Diğer montaj tiplerine göre <em>en yüksek yük taşıma kapasitesine</em> sahiptir. Rüzgâr alan pencerelerde, sık açılıp kapanan perdelerde ve ağır kumaşlarda tercih edilir.",
          ],
        },
        {
          h2: "Hangi Durumlarda Vidalı Montaj Seçilmeli?",
          paragraphs: [
            "Vidalı montaj aşağıdaki durumlarda en doğru seçimdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Ağır kumaş — honeycomb, tam karartma, düet perde",
              "Motorlu sistem — mekanizma ağırlığı yük bindirir",
              "Geniş pencere — 120 cm'den geniş ölçüler",
              "Sık kullanım — günde 5+ kez açılıp kapanan perde",
              "Rüzgâr alan pencere — balkon, teras, pencere kapısı",
              "Kalıcı montaj — ev sahibi, uzun süreli kullanım",
            ],
          },
        },
        {
          h2: "Vidalı Montaj Avantajları",
          paragraphs: [
            "Vidalı montajın sağladığı başlıca avantajlar:",
          ],
          table: {
            headers: ["Avantaj", "Açıklama"],
            rows: [
              ["Maksimum sağlamlık", "Profil çerçeveye vidalar ile sabitlenir"],
              ["Yüksek yük kapasitesi", "Ağır kumaş ve motorlu sistem destekler"],
              ["Uzun ömür", "Yıllar boyu gevşeme yapmaz"],
              ["Gizli vida", "Vidalar profil içinde kalır, görünmez"],
              ["Tam uyum", "Her pencere tipine uygulanabilir"],
            ],
          },
        },
        {
          h2: "Vidalı Montaj Süreci",
          paragraphs: [
            "Vidalı montaj <strong>5 adımda</strong> profesyonel ekibimiz tarafından yapılır:",
          ],
          list: {
            type: "ol",
            items: [
              "Ölçü alma — pencere genişlik ve yüksekliği milimetrik alınır",
              "Profil kesimi — ölçüye göre üst/alt profil kesilir",
              "Vida noktası işaretleme — profil üzerinde vida yerleri belirlenir",
              "Vidalama — profil çerçeveye çelik vidalar ile sabitlenir",
              "Kumaş germe ve test — ip mekanizması ayarlanır, açılır kapanır kontrol edilir",
            ],
          },
        },
        {
          h2: "Vidalı Montazda Dikkat Edilmesi Gerekenler",
          paragraphs: [
            "Vidalı montajda doğru vida seçimi ve montaj tekniği kritiktir. <strong>Yanlış vida veya hatalı montaj</strong>, pencere çerçevesinde hasara yol açabilir.",
            "PVC çerçeve için özel vidalar, alüminyum çerçeve için metal vidalar kullanılır. Ahşap çerçevelerde ise ahşap vidaları tercih edilir. Her çerçeve tipine uygun vida seçimi profesyonel montajın parçasıdır.",
          ],
        },
      ]}
      faqItems={[
        {
          question: "Vidalı montaj pencereye zarar verir mi?",
          answer: "Hayır, doğru vida ve teknik ile pencere çerçevesine zarar verilmez. Vida çerçeve içine girer ve profil tarafından gizlenir. Profesyonel montaj ekibimiz her çerçeve tipine uygun vida seçer.",
        },
        {
          question: "Vidalı montaj kiracılar için uygun mu?",
          answer: "Vidalı montaj kalıcı bir montajdır. Kiracılar için delmesiz montaj tipleri (yapışkanlı, kancalı) daha uygundur. Ev sahibi veya uzun süreli kullanım için vidalı montaj idealdir.",
        },
        {
          question: "Vidalı montaj ne kadar dayanır?",
          answer: "Vidalı montaj en dayanıklı montaj tipidir. Doğru uygulandığında yıllar boyu gevşeme yapmaz. 2 yıl garanti ile gelir, garanti süresi sonrası da servis desteği sağlanır.",
        },
        {
          question: "Vidalı montaj hangi kumaşlar için uygundur?",
          answer: "Ağır kumaşlar (honeycomb, tam karartma, düet) ve motorlu sistemler için en uygun montaj tipidir. Hafif kumaşlarda da kullanılabilir ancak yük taşıma avantajı daha az belirgindir.",
        },
        {
          question: "Vidalı montaj fiyatı diğerlerinden farklı mı?",
          answer: "Vidalı montaj, diğer montaj tipleri ile benzer fiyat aralığındadır. Maliyet farkı minimaldir. Sağlamlık ve dayanıklılık avantajı göz önüne alındığında en değer veren montaj tipidir.",
        },
      ]}
    />
  );
}
