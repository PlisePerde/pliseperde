import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Kafe ve Restoran Plise Perde — Atmosfer Kontrolü, Dekoratif Seçenekler",
  description:
    "Kafe ve restoran için plise perde: atmosfer kontrolü, dış mekan oturma alanı, dekoratif kumaş, güneşlik ile müşteri konforu. Montaj dahil, 2 yıl garanti.",
  slug: "kafe-restoran-plise-perde",
});

export default function KafeRestoranPlisePerdePage() {
  return (
    <PageTemplate
      title="Kafe ve Restoran Plise Perde"
      description="Kafe ve restoran için plise perde: atmosfer kontrolü, dekoratif seçenekler, müşteri konforu."
      slug="kafe-restoran-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Kafe ve Restoran", url: "/kafe-restoran-plise-perde" }]}
      h1="Kafe ve Restoran Plise Perde"
      intro="Kafe ve restoranlarda <strong>atmosfer, müşteri deneyiminin</strong> temelidir. Güneş ışığının kontrol edilememesi, öğle saatlerinde aşırı parlama veya akşamüstü batan güneşin müşteri gözüne batması, deneyimi olumsuz etkiler. Plise perde, <strong>güneşlik kumaş ile ışığı filtreler</strong>, kademeli açma ile manzara korunurken güneş engellenir ve dekoratif kumaş seçenekleri ile mekana karakter katar. Dış mekan oturma alanlarında da rüzgar dayanımı ile pratik çözüm sunar."
      schemaType="service"
      schemaData={{
        name: "Kafe ve Restoran Plise Perde",
        description: "Kafe ve restoran için atmosfer kontrolü, dekoratif plise perde.",
      }}
      sections={[
        {
          h2: "Kafe ve Restoranda Işık ve Atmosfer",
          paragraphs: [
            "Kafe/restoranda <strong>ışık kontrolü</strong> müşteri memnuniyetini doğrudan etkiler:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Öğle parlaması</strong> — güneşlik kumaş ışığı filtreler, masada rahat yemek",
              "<strong>Batan güneş</strong> — kademeli açma ile batan güneş engellenir, manzara korunur",
              "<strong>Akşam atmosferi</strong> — perde açıkken şehir ışıkları içeri girer, romantik ortam",
              "<strong>Dış mekan oturma</strong> — pencere içi perde dışarıdan rüzgarla savrulmaz",
              "<strong>Mahremiyet</strong> — karartma kumaş ile akşam dışarıdan görünme engellenir",
            ],
          },
        },
        {
          h2: "Kafe/Restoran Alanlarına Göre Çözümler",
          paragraphs: [
            "Mekanın farklı alanları <strong>farklı ihtiyaç</strong> gerektirir:",
          ],
          table: {
            headers: ["Alan", "Önerilen Kumaş", "Öncelik", "Özel Not"],
            rows: [
              ["İç mekan (genel)", "Güneşlik", "Işık + atmosfer", "Motorlu önerilir"],
              ["Vitrin/cam cephe", "Güneşlik + UV", "Müşteri çekme", "Motorlu"],
              ["Özel bölüm (VIP)", "Tam karartma / düet", "Mahremiyet", "Manuel"],
              ["Dış mekan oturma", "Güneşlik", "Rüzgar dayanımı", "Pencere içi"],
              ["Teras/bahçe", "Honeycomb", "Isı kontrolü", "Motorlu"],
              ["Mutfak/hazırlık", "Tül", "Işık + nem", "Yapışkanlı"],
            ],
          },
        },
        {
          h2: "Dekoratif Kumaş Seçenekleri",
          paragraphs: [
            "Kafe ve restoranda perde <strong>dekorun bir parçasıdır</strong>. Plise perde kumaşında mekan tarzına uygun seçenekler:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Doğal tonlar (bej, krem, tahta)</strong> — rustik, organik, farm-to-table konsept",
              "<strong>Antrasit / siyah</strong> — modern, endüstriyel, speakeasy tarzı",
              "<strong>Sıcak renkler (bordo, kahve)</strong> — klasik, sıcak, İtalyan/Fransız restoran",
              "<strong>Desenli kumaş</strong> — kafe teması, vintage veya modern desen",
              "<strong>Baskılı kumaş</strong> — logo veya marka baskısı ile kurumsal kimlik",
              "<strong>Renk geçişli (ombre)</strong> — trend, Instagram'a uygun estetik",
            ],
          },
        },
        {
          h2: "Kafe/Restoran Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Kafe/restoran pencereleri <strong>geniş cam cephe</strong> olduğu için toplu alım uygundur:",
          ],
          table: {
            headers: ["Alan", "Pencere Adedi", "Önerilen", "Fiyat Aralığı"],
            rows: [
              ["Küçük kafe (4 pencere)", "4x 120x150 cm", "Güneşlik", "7.200-10.800 TL"],
              ["Orta restoran (8 pencere)", "8x 150x180 cm", "Güneşlik + motorlu", "21.600-36.000 TL"],
              ["Büyük restoran (15 pencere)", "15x 150x180 cm", "Güneşlik + motorlu", "40.500-67.500 TL"],
              ["Teras kafe (6 pencere)", "6x 200x250 cm", "Honeycomb + motorlu", "54.000-84.000 TL"],
            ],
          },
        },
        {
          h2: "Kafe/Restoran İçin Ek Özellikler",
          paragraphs: [
            "Ticari mekanda <strong>pratik özellikler</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Merkezi kontrol</strong> — tüm perdeleri tek kumandadan açma/kapama",
              "<strong>Zamanlayıcı</strong> — öğle/akşam saatlerine göre otomatik ayar",
              "<strong>Güneş sensörü</strong> — güneş geldiğinde otomatik kapanma",
              "<strong>Dayanıklı mekanizma</strong> — ticari kullanım için güçlendirilmiş",
              "<strong>Kolay temizlik</strong> — kumaş silinebilir, yemek lekesi tutmaz",
              "<strong>Bakım anlaşması</strong> — ticari müşteriler için yıllık bakım",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Kafe/restoran için plise perde uygun mu?",
          answer: "Evet, kafe ve restoran için idealdir. Güneşlik kumaş ışığı filtreler, dekoratif kumaş seçenekleri ile mekana karakter katar, motorlu seçenek ile tüm cam cepheyi tek kumandadan kontrol edebilirsiniz.",
        },
        {
          question: "Kafe vitrini için hangi perde?",
          answer: "Güneşlik + UV koruma kaplamalı kumaş önerilir. Müşteri içeriyi rahat görebilsin ama güneş parlaması olmasın. Motorlu seçenek ile açılış/kapanış saatlerinde pratik kontrol.",
        },
        {
          question: "Restoran plise perde fiyatı ne kadar?",
          answer: "8 pencere orta restoran için 21.600-36.000 TL aralığındadır. 15+ pencerede %10-15 indirim uygulanır. Montaj dahildir.",
        },
        {
          question: "Dış mekan oturma alanında plise perde olur mu?",
          answer: "Evet, pencere içine takıldığı için dışarıdan rüzgarla savrulmaz. Güneşlik kumaş ile rüzgar + güneş kontrolü sağlanır.",
        },
      ]}
    />
  );
}
