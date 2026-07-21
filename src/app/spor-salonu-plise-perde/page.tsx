import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Spor Salonu Plise Perde — Nem Dayanımlı, Hafif, Geniş Pencere",
  description:
    "Spor salonu için plise perde: nem dayanımlı kumaş, hafif yapı, geniş pencere için motorlu seçenek, UV koruma. Montaj dahil, 2 yıl garanti.",
  slug: "spor-salonu-plise-perde",
});

export default function SporSalonuPlisePerdePage() {
  return (
    <PageTemplate
      title="Spor Salonu Plise Perde"
      description="Spor salonu için nem dayanımlı, hafif, geniş pencere plise perde."
      slug="spor-salonu-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Spor Salonu", url: "/spor-salonu-plise-perde" }]}
      h1="Spor Salonu Plise Perde"
      intro="Spor salonlarında <strong>yüksek nem, ter buharı ve sürekli hareket</strong> perde seçimini zorlaştırır. Standart perde sistemleri nemden dolayı küflenir, ağır kumaş hava akışını engeller ve geniş cam yüzeylerde manuel kontrol impratik olur. Plise perde, <strong>nem dayanımlı polyester kumaş, hafif yapı ve motorlu seçenek</strong> ile spor salonu için ideal çözüm sunar. Geniş cam cephelerde motorlu kumanda ile tüm perdeleri tek komutla kontrol edebilir, UV korumalı kumaş ile spor ekipmanlarını güneşten koruyabilirsiniz."
      schemaType="service"
      schemaData={{
        name: "Spor Salonu Plise Perde",
        description: "Spor salonu için nem dayanımlı, motorlu plise perde.",
      }}
      sections={[
        {
          h2: "Spor Salonunda Perde Zorlukları",
          paragraphs: [
            "Spor salonu ortamı <strong>4 ana zorluk</strong> yaratır:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>Yüksek nem</strong> — ter buharı ve duş nemi, kumaş küflenir",
              "<strong>Geniş cam cephe</strong> — büyük cam yüzeylerde manuel kontrol zor",
              "<strong>UV hasarı</strong> — güneş spor ekipmanlarını ve zeminini solmasına neden olur",
              "<strong>Hava akışı</strong> — ağır perde hava sirkülasyonunu engeller",
            ],
          },
        },
        {
          h2: "Spor Salonu Alanlarına Göre Çözümler",
          paragraphs: [
            "Spor salonunun farklı alanları <strong>farklı ihtiyaç</strong> gerektirir:",
          ],
          table: {
            headers: ["Alan", "Önerilen Kumaş", "Öncelik", "Özel Not"],
            rows: [
              ["Kardiyo alanı (cam cephe)", "Güneşlik + UV + motorlu", "Ekran + manzara", "Motorlu şart"],
              ["Ağırlık alanı", "Güneşlik", "Işık + dayanım", "Dayanıklı mekanizma"],
              ["Grup dersi (studio)", "Tam karartma", "Kontrollü ışık", "Motorlu"],
              ["Soyunma odası", "Tam karartma + nem dayanım", "Gizlilik + nem", "Anti-bakteriyel"],
              ["Duş/banyo", "Tam karartma + nem dayanım", "Gizlilik + nem", "Kolay temizlik"],
              ["Resepsiyon/lobi", "Güneşlik", "Profesyonel görünüm", "Manuel"],
            ],
          },
        },
        {
          h2: "Spor Salonu İçin Kumaş Özellikleri",
          paragraphs: [
            "Spor salonu için <strong>özel kumaş özellikleri</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Nem dayanımlı</strong> — ter buharı ve duş neminden etkilenmez, küflenmez",
              "<strong>Hafif kumaş</strong> — hava sirkülasyonunu engellemez, sporcu rahat",
              "<strong>UV koruma</strong> — ekipman, zemin ve ayna rengini korur",
              "<strong>Anti-bakteriyel</strong> — soyunma odası ve duş için hijyenik",
              "<strong>Kolay temizlik</strong> — nemli bezle silme, ter lekesi tutmaz",
              "<strong>Dayanıklı mekanizma</strong> — sık kullanım için güçlendirilmiş",
            ],
          },
        },
        {
          h2: "Spor Salonu Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Spor salonu cam cepheleri <strong>geniş</strong> olduğu için toplu alım uygundur:",
          ],
          table: {
            headers: ["Alan", "Pencere Adedi", "Önerilen", "Fiyat Aralığı"],
            rows: [
              ["Küçük stüdyo (3 pencere)", "3x 150x180 cm", "Güneşlik", "8.100-12.150 TL"],
              ["Orta spor salonu (8 pencere)", "8x 200x250 cm", "Güneşlik + motorlu", "40.000-60.000 TL"],
              ["Büyük spor salonu (15 pencere)", "15x 200x250 cm", "Güneşlik + motorlu", "75.000-112.500 TL"],
              ["Soyunma odası (4 pencere)", "4x 80x120 cm", "Karartma + anti-bakteriyel", "5.376-7.680 TL"],
            ],
          },
        },
        {
          h2: "Spor Salonu İçin Motorlu Sistem",
          paragraphs: [
            "Spor salonunda <strong>motorlu plise perde</strong> pratik sağlar:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Merkezi kontrol</strong> — tüm cam cepheleri tek kumandadan yönetim",
              "<strong>Zamanlayıcı</strong> — açılış/kapanış saatlerine göre otomatik",
              "<strong>Güneş sensörü</strong> — güneş geldiğinde otomatik kapanma, ekipman koruması",
              "<strong>Grup dersi modu</strong> — ders başında karartma, ders sonu açma",
              "<strong>Dayanıklı motor</strong> — ticari kullanım için güçlendirilmiş, 3 yıl garanti",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Spor salonu için plise perde uygun mu?",
          answer: "Evet, nem dayanımlı kumaş ve hafif yapı ile idealdir. Geniş cam cephelerde motorlu seçenek ile tüm perdeleri tek kumandadan kontrol edebilirsiniz. UV koruma ile ekipmanları güneşten korur.",
        },
        {
          question: "Spor salonu kardiyo alanında hangi perde?",
          answer: "Güneşlik + UV koruma + motorlu plise perde önerilir. Koşu bandı ekranında parlamayı önler, manzarayı korur, motorlu ile pratik kontrol. Güneş sensörü ile otomatik kapanma.",
        },
        {
          question: "Spor salonu plise perde fiyatı ne kadar?",
          answer: "8 pencere orta spor salonu için 40.000-60.000 TL, 15+ pencere büyük salon için 75.000-112.500 TL aralığındadır. Toplu alımda %10-15 indirim uygulanır.",
        },
        {
          question: "Spor salonu perdesi nemden küflenir mi?",
          answer: "Hayır, polyester bazlı kumaş nem emmez, küflenmez. Ter buharı ve duş neminden etkilenmez. Anti-bakteriyel kumaş seçeneği ile soyunma odası ve duş için hijyenik çözüm.",
        },
      ]}
    />
  );
}
