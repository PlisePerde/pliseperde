import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Mutfak Plise Perde — Nem Dayanımlı, Pencere İçi Montaj",
  description:
    "Mutfak için plise perde: nem dayanımlı kumaş, pencere içi montaj ile tezgaha engel olmaz. Yağ buharı dayanımı, kolay temizlik, ışık kontrolü. 2 yıl garanti.",
  slug: "mutfak-plise-perde",
});

export default function MutfakPlisePerdePage() {
  return (
    <PageTemplate
      title="Mutfak Plise Perde"
      description="Mutfak için nem dayanımlı plise perde: pencere içi montaj, yağ buharı dayanımı, kolay temizlik."
      slug="mutfak-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Mutfak", url: "/mutfak-plise-perde" }]}
      h1="Mutfak Plise Perde"
      intro="Mutfak, evin en çok nem, yağ buharı ve ısıya maruz kalan alanıdır. Standart perde sistemleri mutfakta hızla kirlenir, nemden dolayı şekil bozukluğu yaşar ve tezgah üstünde yer kaplayarak kullanımı zorlaştırır. Plise perde, <strong>pencere profili içine montaj</strong> yapılması sayesinde tezgaha engel olmaz, nem dayanımlı kumaş seçenekleri ile yağ buharına direnç gösterir ve pencere içinde katlanarak tamamen görünmez olur."
      schemaType="service"
      schemaData={{
        name: "Mutfak Plise Perde",
        description: "Mutfak için nem dayanımlı, pencere içi montaj plise perde.",
      }}
      sections={[
        {
          h2: "Mutfakta Plise Perde Avantajları",
          paragraphs: [
            "Mutfak pencereleri genellikle tezgah üstünde, evye yanında veya ocak yakınında bulunur. Bu konum, perde seçimini zorlaştırır. Plise perde bu zorlukları aşar:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Pencere içi montaj</strong> — perde pencere profili içine takılır, tezgaha sarkmaz, mutfak dolaplarına karışmaz",
              "<strong>Nem dayanımlı kumaş</strong> — yemek buharı ve nemden etkilenmez, küflenmez, deformasyon olmaz",
              "<strong>Kolay temizlik</strong> — kumaş yüzeyi nemli bezle silinir, makinede yıkanmaz ama yağ lekesi tutmaz",
              "<strong>Işık kontrolü</strong> — tül kumaş ile maksimum ışık, güneşlik ile gündüz gizliliği",
              "<strong>Yer kaplamaz</strong> — pencere içinde katlanır, mutfakta ek alan işgal etmez",
              "<strong>Uzun ömür</strong> — alüminyum profil ve polyester kumaş, mutfak koşullarında yıllarca dayanır",
            ],
          },
        },
        {
          h2: "Mutfak İçin Kumaş Seçimi",
          paragraphs: [
            "Mutfakta <strong>nem ve yağ buharı</strong> en kritik faktördür. Standart tül kumaşlar mutfakta hızla sararıp kirlenir. Plise perde kumaşları polyester bazlı olup, nem emmez ve yağ tutmaz:",
          ],
          table: {
            headers: ["Kumaş Tipi", "Mutfak Uyumu", "Işık Geçirgenliği", "Nem Dayanımı", "Önerilen Montaj"],
            rows: [
              ["Tül", "Maksimum ışık istenen mutfak", "%70-90", "Yüksek", "Yapışkanlı / vidalı"],
              ["Güneşlik", "Gündüz gizlilik + ışık", "%30-50", "Yüksek", "Vidalı"],
              ["Yarı karartma", "Güneş gelen mutfak", "%10-20", "Yüksek", "Vidalı"],
              ["Tam karartma", "Aşırı güneşli mutfak", "%0", "Orta", "Vidalı"],
            ],
          },
        },
        {
          h2: "Mutfak Pencere Tipleri ve Montaj",
          paragraphs: [
            "Mutfak pencereleri genellikle <strong>küçük ve fonksiyonel</strong> olur. Tezgah üstü pencere, evye penceresi, ankastre fırın üstü pencere gibi farklı konumlar farklı montaj gerektirir:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Tezgah üstü pencere</strong> — yapışkanlı montaj ile pencere profiline delmeden takılır, tezgaha sarkmaz",
              "<strong>Evye penceresi</strong> — su sıçramasına karşı nem dayanımlı kumaş, pencere içi montaj",
              "<strong>Ocak yakını pencere</strong> — ısıya dayanıklı kumaş, pencere içinde güvenli mesafe",
              "<strong>Geniş mutfak penceresi</strong> — vidalı montaj, güneşlik kumaş ile ışık kontrolü",
              "<strong>Çift açılır pencere</strong> — kancalı montaj ile sök-tak, pencere açıldığında perde engel olmaz",
            ],
          },
        },
        {
          h2: "Mutfak Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Mutfak pencereleri genellikle küçük olduğu için <strong>metrekare bazında ekonomik</strong> olur. Tipik mutfak pencere ölçüleri ve fiyat aralıkları:",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Tül Fiyat", "Güneşlik Fiyat", "Montaj"],
            rows: [
              ["60x80 cm (tezgah üstü)", "0.48 m²", "384-576 TL", "480-720 TL", "Dahil"],
              ["80x120 cm (standart)", "0.96 m²", "768-1.152 TL", "960-1.440 TL", "Dahil"],
              ["100x120 cm (geniş)", "1.20 m²", "960-1.440 TL", "1.200-1.800 TL", "Dahil"],
              ["120x150 cm (büyük mutfak)", "1.80 m²", "1.440-2.160 TL", "1.800-2.700 TL", "Dahil"],
            ],
          },
        },
        {
          h2: "Mutfak Perdesinde Sık Yapılan Hatalar",
          paragraphs: [
            "Mutfak perdesi seçiminde yapılan <strong>yaygın hatalar</strong> ve plise perde ile nasıl önlenir:",
          ],
          list: {
            type: "ul",
            items: [
              "Tül perde kullanmak — mutfakta hızla sararır ve yağ çeker, plise perde polyester kumaş ile yağ tutmaz",
              "Pencere dışına perde takmak — tezgah ve dolaplara engel olur, plise perde pencere içine takılır",
              "Uzun perde kullanmak — mutfakta pratik değil, plise perde pencere ölçüsünde çalışır",
              "Nem emici kumaş — küflenir, plise perde kumaşı nem emmez",
              "İp mekanizmalı perde — mutfakta ip kirlenir, plise perde ip kullanmaz (kordon mekanizması)",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Mutfak için plise perde uygun mu?",
          answer: "Evet, mutfak için en uygun perde sistemidir. Pencere içine takılır, tezgaha engel olmaz, nem dayanımlı kumaş ile yağ buharından etkilenmez.",
        },
        {
          question: "Mutfak plise perde kumaşı yıkanır mı?",
          answer: "Plise perde kumaşı makinede yıkanmaz. Nemli bezle silinerek temizlenir. Kumaş yüzeyi yağ tutmaz, düzenli silme ile temiz kalır.",
        },
        {
          question: "Mutfak penceresine plise perde nasıl takılır?",
          answer: "Tezgah üstü pencereye yapışkanlı montaj ile delmeden takılır. Standart pencereye vidalı montaj yapılır. Montaj tipi pencere tipine göre belirlenir.",
        },
        {
          question: "Mutfak plise perde fiyatı ne kadar?",
          answer: "Mutfak pencereleri genellikle küçük olduğu için ekonomiktir. 60x80 cm pencere için 384-720 TL, 80x120 cm pencere için 768-1.440 TL aralığındadır. Montaj dahildir.",
        },
      ]}
    />
  );
}
