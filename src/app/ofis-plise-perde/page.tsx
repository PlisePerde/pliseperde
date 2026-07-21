import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Ofis Plise Perde — Ekran Parlaması Önleme, Profesyonel Görünüm",
  description:
    "Ofis için plise perde: güneşlik ile ekran parlaması önleme, toplantı odası karartma, motorlu seçenek, profesyonel görünüm. Montaj dahil, 2 yıl garanti.",
  slug: "ofis-plise-perde",
});

export default function OfisPlisePerdePage() {
  return (
    <PageTemplate
      title="Ofis Plise Perde"
      description="Ofis için plise perde: ekran parlaması önleme, profesyonel görünüm, toplantı odası karartma."
      slug="ofis-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Ofis", url: "/ofis-plise-perde" }]}
      h1="Ofis Plise Perde"
      intro="Ofis ortamında <strong>çalışan verimliliği</strong>, doğru ışık kontrolü ile doğrudan ilişkilidir. Güneş ışığının monitöre vurması ekran parlaması yaratır, göz yorgunluğu ve baş ağrısına neden olur. Toplantı odalarında projeksiyon ve sunum için tam karanlık gerekir. Açık ofis düzeninde geniş cam yüzeyler ısı ve parlama sorunu yaratır. Plise perde, <strong>güneşlik kumaş ile ekran parlamasını önler</strong>, toplantı odasında karartma sağlar ve motorlu seçenek ile geniş cam yüzeyleri pratik şekilde kontrol eder."
      schemaType="service"
      schemaData={{
        name: "Ofis Plise Perde",
        description: "Ofis için ekran parlaması önleyici, profesyonel plise perde.",
      }}
      sections={[
        {
          h2: "Ofiste Işık Kontrolü ve Verimlilik",
          paragraphs: [
            "Ofiste <strong>ışık kontrolü</strong> çalışan sağlığı ve verimlilik için kritiktir:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Ekran parlaması</strong> — güneşlik kumaş ışığı filtreler, monitör parlamasını önler",
              "<strong>Göz yorgunluğu</strong> — doğru filtreleme ile göz kasları rahat, baş ağrısı azalır",
              "<strong>Odaklanma</strong> — aşırı ışık dikkati dağıtır, kontrollü ışık odaklanmayı artırır",
              "<strong>Sunum/projeksiyon</strong> — toplantı odasında tam karartma ile net sunum",
              "<strong>Isı kontrolü</strong> — honeycomb ile yazın serin, kışın sıcak ofis, enerji tasarrufu",
            ],
          },
        },
        {
          h2: "Ofis Alanlarına Göre Çözümler",
          paragraphs: [
            "Ofisin farklı alanları <strong>farklı ihtiyaçlar</strong> gerektirir:",
          ],
          table: {
            headers: ["Alan", "Önerilen Kumaş", "Montaj", "Özel Not"],
            rows: [
              ["Açık ofis (genel)", "Güneşlik", "Vidalı", "Motorlu önerilir"],
              ["Toplantı odası", "Tam karartma", "Vidalı", "Sunum için şart"],
              ["Yönetici odası", "Düet", "Vidalı", "Gündüz ışık + gizlilik"],
              ["Resepsiyon/lobi", "Güneşlik", "Vidalı", "Profesyonel görünüm"],
              ["Mutfak/dinlenme", "Tül", "Yapışkanlı", "Bol ışık"],
              ["Arşiv/depo", "Tam karartma", "Vidalı", "UV koruma"],
            ],
          },
        },
        {
          h2: "Ofis Pencere Tipleri ve Montaj",
          paragraphs: [
            "Ofis binalarında <strong>farklı pencere tipleri</strong> bulunur:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Curtain wall (cam cephe)</strong> — geniş cam yüzey, vidalı montaj, motorlu önerilir",
              "<strong>Standart ofis penceresi</strong> — vidalı montaj, güneşlik kumaş",
              "<strong>French pencere (kapılı)</strong> — kancalı montaj, sök-tak gerekli",
              "<strong>Çatı penceresi (atrium)</strong> — vidalı eğimli, honeycomb ile ısı yalıtımı",
              "<strong>Köşe pencere</strong> — özel ölçü, vidalı montaj",
            ],
          },
        },
        {
          h2: "Ofis Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Ofis pencereleri <strong>geniş</strong> olduğu için toplu alımda indirim uygulanır:",
          ],
          table: {
            headers: ["Alan / Pencere", "Ölçü", "Güneşlik", "Karartma (toplantı)"],
            rows: [
              ["Tek çalışma istasyonu", "120x150 cm", "1.800-2.700 TL", "2.520-3.600 TL"],
              ["Toplantı odası (3 pencere)", "3x 150x180 cm", "8.100-12.150 TL", "11.340-16.200 TL"],
              ["Açık ofis (10 pencere)", "10x 120x150 cm", "18.000-27.000 TL", "25.200-36.000 TL"],
              ["Yönetici odası (2 pencere)", "2x 150x180 cm", "5.400-8.100 TL", "7.560-10.800 TL"],
            ],
          },
        },
        {
          h2: "Ofis İçin Motorlu ve Akıllı Sistem",
          paragraphs: [
            "Ofiste <strong>motorlu plise perde</strong> ile verimlilik artar:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Merkezi kontrol</strong> — tüm ofis perdeleri tek panelden açma/kapama",
              "<strong>Zamanlayıcı</strong> — çalışma saatlerine göre otomatik açma/kapama",
              "<strong>Güneş sensörü</strong> — güneş geldiğinde otomatik kapanma, parlamayı önler",
              "<strong>Akıllı telefon</strong> — uygulama ile perde kontrolü",
              "<strong>Toplu indirim</strong> — 10+ pencerede %10, 20+ pencerede %15 indirim",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Ofis için en iyi plise perde hangisi?",
          answer: "Açık ofis için güneşlik kumaş (ekran parlaması önleme), toplantı odası için tam karartma (sunum), yönetici odası için düet (gündüz ışık + gizlilik) önerilir.",
        },
        {
          question: "Ofiste ekran parlaması nasıl önlenir?",
          answer: "Güneşlik plise perde ışığı %30-50 filtreler ve monitöre direkt güneş vurmasını engeller. Kademeli açma ile çalışma masası ışık alırken ekran korunur.",
        },
        {
          question: "Ofis plise perde fiyatı ne kadar?",
          answer: "Tek çalışma istasyonu (120x150 cm) için güneşlik 1.800-2.700 TL. 10+ pencerede %10, 20+ pencerede %15 indirim uygulanır. Montaj dahildir.",
        },
        {
          question: "Ofiste motorlu plise perde kullanışlı mı?",
          answer: "Evet, özellikle geniş ofislerde. Merkezi kontrol ile tüm perdeleri tek panelden yönetebilir, zamanlayıcı ve güneş sensörü ile otomatik çalışma sağlayabilirsiniz.",
        },
      ]}
    />
  );
}
