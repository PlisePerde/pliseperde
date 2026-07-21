import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Banyo ve WC Plise Perde — Nem Dayanımlı, Tam Gizlilik",
  description:
    "Banyo ve WC için plise perde: nem dayanımlı kumaş, tam gizlilik, pencere içi montaj, küçük pencere için kompakt çözüm. Montaj dahil, 2 yıl garanti.",
  slug: "banyo-wc-plise-perde",
});

export default function BanyoWCPlisePerdePage() {
  return (
    <PageTemplate
      title="Banyo ve WC Plise Perde"
      description="Banyo ve WC için nem dayanımlı, tam gizlilik plise perde."
      slug="banyo-wc-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Banyo ve WC", url: "/banyo-wc-plise-perde" }]}
      h1="Banyo ve WC Plise Perde"
      intro="Banyo ve WC, evin <strong>en nemli ve en özel</strong> alanlarıdır. Banyo pencereleri genellikle küçük, yüksek ve dışarıdan görünme riski yüksek konumdadır. Standart perde sistemleri nemden dolayı küflenir, şekil bozukluğu yaşar ve banyoda yer kaplar. Plise perde, <strong>nem dayanımlı polyester kumaş</strong> ve pencere içi montaj ile banyo için ideal çözüm sunar — küflenmez, yer kaplamaz ve tam gizlilik sağlar."
      schemaType="service"
      schemaData={{
        name: "Banyo ve WC Plise Perde",
        description: "Banyo ve WC için nem dayanımlı, tam gizlilik plise perde.",
      }}
      sections={[
        {
          h2: "Banyo ve WC'de Plise Perde Avantajları",
          paragraphs: [
            "Banyo perdesi seçiminde <strong>nem, gizlilik ve yer</strong> üç kritik faktördür:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Nem dayanımlı kumaş</strong> — banyo buharından etkilenmez, küflenmez, deformasyon olmaz",
              "<strong>Tam gizlilik</strong> — tam karartma kumaş ile dışarıdan içerisi tamamen görünmez",
              "<strong>Pencere içi montaj</strong> — banyoda dar alan var, perde pencere içinde yer kaplamaz",
              "<strong>Kolay temizlik</strong> — nemli bezle silinir, sabun kalıntısı tutmaz",
              "<strong>Küçük pencere uyumu</strong> — banyo pencereleri küçüktür, plise perde özel ölçü yapılır",
              "<strong>Havalandırma</strong> — perde açıkken pencere tam açılır, hava akışı engellenmez",
            ],
          },
        },
        {
          h2: "Banyo ve WC İçin Kumaş Seçimi",
          paragraphs: [
            "Banyo ve WC'de <strong>tam karartma</strong> birincil tercihtir — gizlilik için şarttır. Ancak bazı banyolarda doğal ışık da istenir:",
          ],
          table: {
            headers: ["Kumaş Tipi", "Işık", "Gizlilik", "Nem Dayanımı", "Önerilen"],
            rows: [
              ["Tam karartma", "%0", "Tam", "Yüksek", "Birincil tercih"],
              ["Yarı karartma", "%10-20", "Yüksek", "Yüksek", "Doğal ışık istenen banyo"],
              ["Güneşlik (frosted)", "%30-50", "İyi", "Yüksek", "Camı buzlu olmayan banyo"],
              ["Tül (özel)", "%70-90", "Az", "Yüksek", "Yüksek pencere / ışıklık"],
            ],
          },
        },
        {
          h2: "Banyo Pencere Tipleri ve Montaj",
          paragraphs: [
            "Banyo pencereleri <strong>çeşitli tiplerde</strong> olur ve her biri farklı montaj gerektirir:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Küçük üst pencere</strong> — yapışkanlı montaj, delmeden takılır, küçük ölçü",
              "<strong>Standart banyo penceresi</strong> — vidalı montaj, tam karartma kumaş",
              "<strong>Işıklık (zenit)</strong> — tavan penceresi, vidalı montaj, honeycomb karartma",
              "<strong>Mat cam (frosted)</strong> — zaten gizlilik var, tül veya güneşlik yeterli",
              "<strong>Açılır-kapanır pencere</strong> — kancalı montaj, pencere açıldığında perde engel olmaz",
            ],
          },
        },
        {
          h2: "Banyo ve WC Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Banyo pencereleri genellikle <strong>küçük</strong> olduğu için fiyat ekonomiktir:",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Tam Karartma", "Yarı Karartma", "Montaj"],
            rows: [
              ["40x60 cm (WC/üst pencere)", "0.24 m²", "336-480 TL", "288-432 TL", "Dahil"],
              ["60x80 cm (küçük banyo)", "0.48 m²", "672-960 TL", "576-864 TL", "Dahil"],
              ["80x120 cm (standart banyo)", "0.96 m²", "1.344-1.920 TL", "1.152-1.728 TL", "Dahil"],
              ["100x120 cm (geniş banyo)", "1.20 m²", "1.680-2.400 TL", "1.440-2.160 TL", "Dahil"],
            ],
          },
        },
        {
          h2: "Banyo Perdesinde Sık Yapılan Hatalar",
          paragraphs: [
            "Banyo perdesi seçiminde <strong>yaygın hatalar</strong> ve plise perde ile çözüm:",
          ],
          list: {
            type: "ul",
            items: [
              "Pencere dışına perde takmak — banyoda yer kaplar, plise perde pencere içine takılır",
              "Pamuklu kumaş kullanmak — nem emer, küflenir, plise perde polyester kumaş nem emmez",
              "Uzun perde — banyo tezgahına sarkar, ıslanır, plise perde pencere ölçüsünde çalışır",
              "Jaluzi kullanmak — kanatlar arasında nem birikir, plise perde düz yüzey kolay silinir",
              "İp mekanizma — banyoda ip kirlenir, plise perde ip kullanmaz",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Banyo için plise perde uygun mu?",
          answer: "Evet, banyo için idealdir. Nem dayanımlı polyester kumaş küflenmez, pencere içine takılır yer kaplamaz, tam karartma ile tam gizlilik sağlar.",
        },
        {
          question: "Banyo plise perde küflenir mi?",
          answer: "Hayır, plise perde kumaşı polyester bazlıdır, nem emmez. Banyo buharından etkilenmez, küflenmez. Nemli bezle silinerek temizlenir.",
        },
        {
          question: "WC için plise perde fiyatı ne kadar?",
          answer: "WC pencereleri genellikle küçüktür. 40x60 cm pencere için 336-480 TL, 60x80 cm için 672-960 TL aralığındadır. Montaj dahildir.",
        },
        {
          question: "Banyo penceresi küçük, plise perde olur mu?",
          answer: "Evet, plise perde özel ölçü üretilir. En küçük pencere ölçülerine bile uyum sağlar. Yapışkanlı montaj ile pencere profiline delmeden takılır.",
        },
      ]}
    />
  );
}
