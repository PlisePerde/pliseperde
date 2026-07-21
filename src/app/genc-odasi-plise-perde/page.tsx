import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Genç Odası Plise Perde — Modern Tasarım, Renk Seçenekleri",
  description:
    "Genç odası için plise perde: modern tasarım, renk seçenekleri, çalışma ve dinlenme dengesi, güneşlik ile ekran parlaması önleme. Montaj dahil, 2 yıl garanti.",
  slug: "genc-odasi-plise-perde",
});

export default function GencOdasiPlisePerdePage() {
  return (
    <PageTemplate
      title="Genç Odası Plise Perde"
      description="Genç odası için modern plise perde: renk seçenekleri, çalışma-dinlenme dengesi."
      slug="genc-odasi-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Genç Odası", url: "/genc-odasi-plise-perde" }]}
      h1="Genç Odası Plise Perde"
      intro="Genç odası, <strong>çalışma ve dinlenmenin</strong> aynı mekanda olduğu çok fonksiyonel bir alandır. Gençler burada ders çalışar, bilgisayar kullanır, müzik dinler ve uyur. Bu çoklu kullanım, farklı ışık ihtiyaçları yaratır — ders çalışırken ekran parlamasını önleyecek filtreleme, dinlenirken soft ışık, uyurken tam karanlık. Plise perde, <strong>düet kumaş</strong> ile tek profilde bu üç ihtiyacı da karşılar. Modern tasarımı ve geniş renk yelpazesi ile gençin tarzına uyum sağlar."
      schemaType="service"
      schemaData={{
        name: "Genç Odası Plise Perde",
        description: "Genç odası için modern, çok fonksiyonlu plise perde.",
      }}
      sections={[
        {
          h2: "Genç Odasında Çoklu Işık İhtiyacı",
          paragraphs: [
            "Genç odası tek mekanda <strong>üç farklı fonksiyon</strong> barındırır:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>Çalışma</strong> — güneşlik kumaş ile ekran parlaması önleme, odaklanma için filtreli ışık",
              "<strong>Dinlenme</strong> — yarı karartma ile soft ışık, müzik dinlerken veya kitap okurken",
              "<strong>Uyku</strong> — tam karartma ile tam karanlık, özellikle hafta sonu geç uyku için",
            ],
          },
        },
        {
          h2: "Düet (Gece-Gündüz) Çözümü",
          paragraphs: [
            "<strong>Düet plise perde</strong>, genç odası için ideal çözümdür. Tek profilde iki kumaş katmanı bulunur:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Üst katman (tül)</strong> — gündüz çalışma ve dinlenme için ışık geçirgen",
              "<strong>Alt katman (karartma)</strong> — gece uyku için tam karanlık",
              "<strong>Tek profil</strong> — iki ayrı perde alma gerekmez",
              "<strong>Geçiş</strong> — kademeli geçiş ile istenen kısmı aç/kapat",
            ],
          },
        },
        {
          h2: "Genç Odası İçin Renk ve Tasarım",
          paragraphs: [
            "Gençler <strong>kişisel tarzlarını</strong> yansıtan renkler tercih eder. Plise perde kumaşında genç odası için popüler seçenekler:",
          ],
          table: {
            headers: ["Renk", "Stil", "Atmosfer", "Popülerlik"],
            rows: [
              ["Antrasit / siyah", "Modern, endüstriyel", "Şık ve sofistike", "Yüksek"],
              ["Gri", "Minimalist", "Sakin ve odaklı", "Yüksek"],
              ["Lacivert", "Klasik-modern", "Derin ve huzurlu", "Orta"],
              ["Beyaz / krem", "Skandinav", "Ferah ve temiz", "Yüksek"],
              ["Bej / tahta", "Doğal", "Sıcak ve davetkar", "Orta"],
              ["Bordo / yeşil", "Cesur", "Karakterli", "Düşük"],
            ],
          },
        },
        {
          h2: "Genç Odası Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Genç odası pencereleri genellikle <strong>standart boyutta</strong> olur:",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Güneşlik", "Düet", "Tam Karartma"],
            rows: [
              ["100x120 cm (standart)", "1.20 m²", "1.200-1.800 TL", "2.400-3.840 TL", "1.680-2.400 TL"],
              ["120x150 cm (büyük)", "1.80 m²", "1.800-2.700 TL", "3.600-5.760 TL", "2.520-3.600 TL"],
              ["150x180 cm (geniş)", "2.70 m²", "2.700-4.050 TL", "5.400-8.640 TL", "3.780-5.400 TL"],
            ],
          },
        },
        {
          h2: "Genç Odası İçin Ek Özellikler",
          paragraphs: [
            "Genç odasında <strong>kullanım konforunu</strong> artıran özellikler:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Motorlu seçenek</strong> — yatakta veya masadan kalkmadan uzaktan kumanda",
              "<strong>Akıllı telefon kontrolü</strong> — uygulama ile perde açma/kapama",
              "<strong>Zamanlayıcı</strong> — sabah belirli saatte otomatik açılma ile doğal uyanma",
              "<strong>UV koruma</strong> — poster, kitap ve ekipman rengini korur",
              "<strong>Sessiz mekanizma</strong> — müzik dinlerken veya ders çalışırken rahatsız etmez",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Genç odası için en iyi plise perde hangisi?",
          answer: "Düet (gece-gündüz) plise perde idealdir. Tek profilde gündüz ışık (tül) + gece karartma sağlar. Bütçe kısıtlı ise güneşlik kumaş önerilir.",
        },
        {
          question: "Genç odası için hangi renk plise perde?",
          answer: "Antrasit, gri ve beyaz en popüler seçimler. Modern ve şık görünüm sağlar. Gençin tarzına göre lacivert, bordo veya bej de tercih edilebilir.",
        },
        {
          question: "Genç odası plise perde fiyatı ne kadar?",
          answer: "100x120 cm standart pencere için güneşlik 1.200-1.800 TL, düet 2.400-3.840 TL aralığındadır. Montaj dahildir.",
        },
        {
          question: "Genç odasında motorlu plise perde kullanışlı mı?",
          answer: "Evet, özellikle geniş pencerede. Uzaktan kumanda veya akıllı telefon ile kontrol pratik sağlar. Zamanlayıcı ile sabah otomatik açılma doğal uyanma sağlar.",
        },
      ]}
    />
  );
}
