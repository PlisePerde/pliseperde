import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Laboratuvar Plise Perde — Kimyasal Dayanımlı, Toz Geçirmez, Hassas Işık",
  description:
    "Laboratuvar için plise perde: kimyasal dayanımlı kumaş, toz geçirmez, hassas ışık kontrolü, anti-bakteriyel. Montaj dahil, 2 yıl garanti.",
  slug: "laboratuvar-plise-perde",
});

export default function LaboratuvarPlisePerdePage() {
  return (
    <PageTemplate
      title="Laboratuvar Plise Perde"
      description="Laboratuvar için kimyasal dayanımlı, toz geçirmez, hassas ışık kontrolü plise perde."
      slug="laboratuvar-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Laboratuvar", url: "/laboratuvar-plise-perde" }]}
      h1="Laboratuvar Plise Perde"
      intro="Laboratuvar ortamında <strong>kimyasal dayanım, toz kontrolü ve hassas ışık ayarı</strong> kritik faktörlerdir. Standart perde sistemleri toz tutar, kimyasal buharından etkilenir ve ışık kontrolü yetersizdir. Plise perde, <strong>kimyasal dayanımlı kumaş, toz geçirmez yapı ve pencere içi montaj</strong> ile laboratuvar için ideal çözüm sunar. Mikroskop ve hassas ölçüm cihazları için kontrollü ışık, steril ortam için toz geçirmez kumaş ve kimyasal buharına dayanıklı yapı ile uzun ömürlü kullanım sağlar."
      schemaType="service"
      schemaData={{
        name: "Laboratuvar Plise Perde",
        description: "Laboratuvar için kimyasal dayanımlı, toz geçirmez plise perde.",
      }}
      sections={[
        {
          h2: "Laboratuvarda Perde Seçimi Kriterleri",
          paragraphs: [
            "Laboratuvar perdesi seçiminde <strong>5 kritik kriter</strong> vardır:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>Kimyasal dayanım</strong> — asit, baz ve solvent buharına dayanıklı kumaş",
              "<strong>Toz geçirmez</strong> — düz yüzey, toz ve partikül tutmaz",
              "<strong>Hassas ışık</strong> — mikroskop ve ölçüm için kademeli ışık kontrolü",
              "<strong>Steril uyum</strong> — dezenfektan ile silinebilir, anti-bakteriyel",
              "<strong>Pencere içi montaj</strong> — tezgaha engel olmaz, dar alanda yer kaplamaz",
            ],
          },
        },
        {
          h2: "Laboratuvar Alanlarına Göre Çözümler",
          paragraphs: [
            "Laboratuvarın farklı alanları <strong>farklı ihtiyaç</strong> gerektirir:",
          ],
          table: {
            headers: ["Alan", "Önerilen Kumaş", "Öncelik", "Özel Not"],
            rows: [
              ["Analiz laboratuvarı", "Güneşlik + kimyasal dayanım", "Hassas ışık", "Kademeli açma"],
              ["Mikroskop odası", "Tam karartma", "Kontrollü ışık", "Sessiz mekanizma"],
              ["Steril oda (clean room)", "Anti-bakteriyel + toz geçirmez", "Steril ortam", "Özel kumaş"],
              ["Kimya laboratuvarı", "Kimyasal dayanımlı karartma", "Kimyasal buharı", "Asit/baz dayanım"],
              ["Biyoloji laboratuvarı", "Güneşlik + anti-bakteriyel", "Işık + hijyen", "Kolay silme"],
              ["Ofis/yazım alanı", "Güneşlik", "Ekran parlaması", "Standart"],
            ],
          },
        },
        {
          h2: "Kimyasal Dayanımlı Kumaş Özellikleri",
          paragraphs: [
            "Laboratuvar için <strong>özel kumaş özellikleri</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Asit dayanımı</strong> — asit buharından etkilenmez, renk değişimi olmaz",
              "<strong>Baz dayanımı</strong> — alkali buharına dayanıklı",
              "<strong>Solvent dayanımı</strong> — organik solvent buharından etkilenmez",
              "<strong>Toz geçirmez</strong> — düz yüzey, partikül tutmaz, steril ortam",
              "<strong>Dezenfektan dayanımı</strong> — çamaşır suyu, alkol, UV ile silinebilir",
              "<strong>Anti-bakteriyel</strong> — bakteri üremesi engellenir",
            ],
          },
        },
        {
          h2: "Laboratuvar Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Laboratuvar kumaşı <strong>özel üretim</strong> olduğu için standart fiyattan farklıdır:",
          ],
          table: {
            headers: ["Alan", "Pencere Ölçüsü", "Kumaş Tipi", "Fiyat Aralığı"],
            rows: [
              ["Tek analiz odası (1 pencere)", "120x150 cm", "Güneşlik + kimyasal", "2.700-4.050 TL"],
              ["Mikroskop odası (1 pencere)", "100x120 cm", "Tam karartma + kimyasal", "2.520-3.600 TL"],
              ["Steril oda (2 pencere)", "2x 80x120 cm", "Anti-bakteriyel + toz geçirmez", "3.840-5.760 TL"],
              ["Tüm laboratuvar (10+ pencere)", "Karışık", "Karışık", "25.000-50.000 TL"],
            ],
          },
        },
        {
          h2: "Laboratuvar İçin Hassas Işık Kontrolü",
          paragraphs: [
            "Laboratuvarda <strong>ışık kontrolü</strong> hassas ölçümler için kritiktir:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Kademeli açma</strong> — üstten/aştan kademeli ışık ayarı",
              "<strong>Tam karartma</strong> — mikroskop ve floresan inceleme için",
              "<strong>Güneşlik filtreleme</strong> — hassas ölçüm cihazı için ışık filtreleme",
              "<strong>UV blokaj</strong> — UV duyarlı numuneler için UV filtreli kumaş",
              "<strong>Sessiz mekanizma</strong> — hassas ölçüm sırasında sessiz çalışma",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Laboratuvar için plise perde uygun mu?",
          answer: "Evet, kimyasal dayanımlı ve toz geçirmez kumaş ile idealdir. Pencere içine takılır, tezgaha engel olmaz. Hassas ışık kontrolü ile mikroskop ve ölçüm cihazları için uygun.",
        },
        {
          question: "Laboratuvar perdesi kimyasal buharına dayanır mı?",
          answer: "Evet, özel kimyasal dayanımlı kumaş asit, baz ve solvent buharından etkilenmez. Renk değişimi olmaz, kumaş yapısı bozulmaz. Dezenfektan ile silinebilir.",
        },
        {
          question: "Mikroskop odası için hangi perde?",
          answer: "Tam karartma + kimyasal dayanımlı kumaş önerilir. Mikroskop ve floresan inceleme için tam karanlık. Sessiz mekanizma ile hassas çalışma sırasında rahatsız etmez.",
        },
        {
          question: "Laboratuvar plise perde fiyatı ne kadar?",
          answer: "Tek analiz odası (120x150 cm) için 2.700-4.050 TL. 10+ pencereli tüm laboratuvar için 25.000-50.000 TL aralığındadır. Özel kumaş olduğu için standart fiyattan yüksektir.",
        },
      ]}
    />
  );
}
