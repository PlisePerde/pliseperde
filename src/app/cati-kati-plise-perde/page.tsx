import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Çatı Katı Plise Perde — Çatı Penceresi, Eğimli Montaj, Isı Yalıtımı",
  description:
    "Çatı katı için plise perde: çatı penceresi, eğimli montaj, honeycomb ile ısı yalıtımı, tam karartma, motorlu seçenek. Montaj dahil, 2 yıl garanti.",
  slug: "cati-kati-plise-perde",
});

export default function CatiKatiPlisePerdePage() {
  return (
    <PageTemplate
      title="Çatı Katı Plise Perde"
      description="Çatı katı için plise perde: çatı penceresi, eğimli montaj, honeycomb ısı yalıtımı."
      slug="cati-kati-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Çatı Katı", url: "/cati-kati-plise-perde" }]}
      h1="Çatı Katı Plise Perde"
      intro="Çatı katlarında pencereler <strong>eğimli ve gökyüzüne bakar</strong>. Bu yapı, güneş ışığının direkt gelmesine, yaz aylarında aşırı ısınmaya ve kış aylarında ısı kaybına neden olur. Standart perde sistemleri eğimli pencerede yer çekimi nedeniyle sarkar ve düzgün çalışmaz. Plise perde, <strong>pencere profili içine vidalı montaj</strong> ile eğimli yüzeye sabitlenir, yer çekiminden etkilenmez ve honeycomb kumaş ile ısı yalıtımı sağlar. Çatı katı yaşamı için en uygun perde sistemidir."
      schemaType="service"
      schemaData={{
        name: "Çatı Katı Plise Perde",
        description: "Çatı katı için eğimli pencere, honeycomb ısı yalıtımı plise perde.",
      }}
      sections={[
        {
          h2: "Çatı Katında Perde Zorlukları",
          paragraphs: [
            "Çatı katı pencereleri <strong>4 ana zorluk</strong> yaratır:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>Eğimli pencere</strong> — standart perde yer çekimiyle sarkar, düzgün çalışmaz",
              "<strong>Direkt güneş</strong> — gökyüzüne bakan cam, güneşi direkt alır, aşırı ısınma",
              "<strong>Isı kaybı/kazanımı</strong> — çatı camı en fazla ısı transferi olan yüzeydir",
              "<strong>Ulaşılamaz yükseklik</strong> — bazı çatı pencereleri yüksekte, manuel zor",
            ],
          },
        },
        {
          h2: "Çatı Katı İçin Plise Perde Çözümü",
          paragraphs: [
            "Plise perde çatı katı zorluklarını <strong>tek sistemle</strong> çözer:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Eğimli montaj</strong> — pencere profili içine vidalı, yer çekiminden etkilenmez",
              "<strong>Honeycomb ısı yalıtımı</strong> — petek yapısı ısı transferini %30-40 azaltır",
              "<strong>Güneş filtreleme</strong> — güneşlik kumaş direkt güneşi filtreler, aşırı ısınmayı önler",
              "<strong>Tam karartma</strong> — gece uyku için tam karanlık, yıldız ışığını bile engeller",
              "<strong>Motorlu seçenek</strong> — yüksek çatı penceresinde uzaktan kumanda",
              "<strong>Yağmur sesi azaltma</strong> — honeycomb kumaş yağmur sesini kısmen emer",
            ],
          },
        },
        {
          h2: "Çatı Penceresi Tipleri ve Montaj",
          paragraphs: [
            "Çatı pencereleri <strong>farklı tiplerde</strong> olur:",
          ],
          table: {
            headers: ["Pencere Tipi", "Özellik", "Önerilen Kumaş", "Montaj / Motor"],
            rows: [
              ["Düz çatı penceresi (Velux)", "Eğimli, standart", "Honeycomb karartma", "Vidalı + motorlu"],
              ["Balcony (balkonlu çatı)", "Açılır balkon", "Güneşlik / düet", "Vidalı + kancalı"],
              ["Top-light (sabit)", "Açılmaz, sabit cam", "Honeycomb güneşlik", "Vidalı + motorlu"],
              ["Köşk penceresi (yat)", "Yatay cam, gökyüzü", "Honeycomb karartma", "Vidalı + motorlu"],
              ["Eğimli yan pencere", "Yan duvarda eğimli", "Güneşlik", "Vidalı"],
            ],
          },
        },
        {
          h2: "Çatı Katı Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Çatı penceresi ölçüleri ve fiyat aralıkları:",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Honeycomb", "Karartma", "Motorlu Toplam"],
            rows: [
              ["78x98 cm (Velux S)", "0.76 m²", "1.368-2.128 TL", "1.064-1.520 TL", "2.868-4.628 TL"],
              ["78x118 cm (Velux M)", "0.92 m²", "1.656-2.576 TL", "1.288-1.840 TL", "3.156-5.076 TL"],
              ["94x140 cm (Velux L)", "1.32 m²", "2.376-3.696 TL", "1.848-2.640 TL", "3.876-6.196 TL"],
              ["114x140 cm (Velux XL)", "1.60 m²", "2.880-4.480 TL", "2.240-3.200 TL", "4.380-7.000 TL"],
            ],
          },
        },
        {
          h2: "Çatı Katı İçin Honeycomb (Petek) Kritik Önemi",
          paragraphs: [
            "Çatı katında <strong>honeycomb plise perde</strong> seçmek neredeyse zorunludur:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Yazın serin</strong> — çatı camından giren güneş ısısını %30-40 azaltır",
              "<strong>Kışın sıcak</strong> — çatı camından olan ısı kaybını %30-40 azaltır",
              "<strong>Enerji tasarrufu</strong> — klima/kalorifer faturasında %15-20 tasarruf",
              "<strong>Yağmur sesi</strong> — petek yapısı yağmur damlalarının sesini kısmen emer",
              "<strong>Kondensasyon önleme</strong> — cam ile oda arasında hava tabakası, terlemeyi önler",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Çatı penceresine plise perde takılır mı?",
          answer: "Evet, çatı penceresine plise perde takılır. Pencere profili içine vidalı montaj ile eğimli yüzeye sabitlenir. Yer çekiminden etkilenmez, düzgün çalışır.",
        },
        {
          question: "Çatı katı için hangi kumaş önerilir?",
          answer: "Honeycomb (petek) kumaş kesinlikle önerilir. Çatı camından ısı transferini %30-40 azaltır, yazın serin kışın sıcak tutar. Karartma gerekiyorsa honeycomb karartma seçeneği vardır.",
        },
        {
          question: "Çatı katı plise perde fiyatı ne kadar?",
          answer: "78x98 cm standart Velux pencere için honeycomb 1.368-2.128 TL, motorlu seçenek 2.868-4.628 TL aralığındadır. Montaj dahildir.",
        },
        {
          question: "Yüksek çatı penceresi için motorlu şart mı?",
          answer: "Ulaşılamaz yükseklikteki çatı pencereleri için motorlu önerilir. Uzaktan kumanda ile yataktan kalkmadan perde açma/kapama. Güneş sensörü ile otomatik kontrol mümkün.",
        },
      ]}
    />
  );
}
