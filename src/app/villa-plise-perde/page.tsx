import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Villa Plise Perde — Yüksek Pencere, Çatı Penceresi, Motorlu Seçenek",
  description:
    "Villa için plise perde: yüksek pencere, çatı penceresi, motorlu seçenek, honeycomb ile ısı yalıtımı, prestijli görünüm. Montaj dahil, 2 yıl garanti.",
  slug: "villa-plise-perde",
});

export default function VillaPlisePerdePage() {
  return (
    <PageTemplate
      title="Villa Plise Perde"
      description="Villa için plise perde: yüksek pencere, çatı penceresi, motorlu, honeycomb ısı yalıtımı."
      slug="villa-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Villa", url: "/villa-plise-perde" }]}
      h1="Villa Plise Perde"
      intro="Villalarda pencere mimarisi <strong>standart evlerden farklıdır</strong> — yüksek tavanlar, geniş cam yüzeyler, çatı pencereleri, köşe pencereler ve katlı pencere sistemleri bulunur. Bu çeşitlilik, tek tip perde çözümünü imkansız kılar. Plise perde, <strong>her pencere tipine özel ölçü</strong> yapılması, motorlu seçenek ile yüksek pencereleri uzaktan kumandayla kontrol etme ve honeycomb kumaş ile geniş cam yüzeylerde ısı yalıtımı sağlama özellikleri ile villa projeleri için en uygun perde sistemidir."
      schemaType="service"
      schemaData={{
        name: "Villa Plise Perde",
        description: "Villa için yüksek pencere, çatı penceresi, motorlu plise perde.",
      }}
      sections={[
        {
          h2: "Villa Pencere Mimarisine Göre Çözümler",
          paragraphs: [
            "Villalarda <strong>farklı pencere tipleri</strong> farklı yaklaşım gerektirir:",
          ],
          table: {
            headers: ["Pencere Tipi", "Özellik", "Önerilen Kumaş", "Montaj / Motor"],
            rows: [
              ["Yüksek pencere (250+ cm)", "Ulaşılamaz üst kısım", "Güneşlik / düet", "Motorlu zorunlu"],
              ["Çatı penceresi (eğimli)", "Eğimli, güneş direkt", "Honeycomb karartma", "Vidalı + motorlu"],
              ["Geniş cam (200+ cm)", "Bol ışık + ısı", "Güneşlik / honeycomb", "Motorlu önerilir"],
              ["Köşe pencere", "İki yönde cam", "Güneşlik", "Vidalı özel"],
              ["Katlı pencere (double height)", "Çift kat yükseklik", "Güneşlik", "Motorlu zorunlu"],
              ["French pencere (kapılı)", "Balkon/teras çıkış", "Düet / güneşlik", "Kancalı"],
            ],
          },
        },
        {
          h2: "Villa İçin Honeycomb (Petek) Avantajı",
          paragraphs: [
            "Villalarda <strong>geniş cam yüzeyler</strong> ısı kaybı/kazanımını artırır. Honeycomb plise perde, petek hücreli yapısı ile:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Isı yalıtımı %30-40</strong> — kışın ısı kaybını azaltır, yazın ısı girişini engeller",
              "<strong>Enerji tasarrufu %15-20</strong> — Klima ve kalorifer faturasında tasarruf",
              "<strong>Ses azaltma %20-30</strong> — dışarısı gürültüsünü azaltır",
              "<strong>Çatı penceresinde kritik</strong> — çatı penceresi en fazla ısı kaybı/gain kaynağıdır",
              "<strong>Geniş camda önemli</strong> — 5+ m² cam yüzeyinde honeycomb yalıtım değeri yüksektir",
            ],
          },
        },
        {
          h2: "Villa Odalarına Göre Plise Perde",
          paragraphs: [
            "Villada her oda <strong>farklı ihtiyaç</strong> gerektirir:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Salon (geniş cam)</strong> — güneşlik veya düet, motorlu, honeycomb opsiyon",
              "<strong>Yatak odası</strong> — tam karartma, motorlu (uzaktan kumanda)",
              "<strong>Çocuk odası</strong> — yarı karartma, güvenli mekanizma",
              "<strong>Mutfak</strong> — tül / güneşlik, nem dayanımlı",
              "<strong>Çatı katı</strong> — honeycomb karartma, eğimli montaj, motorlu",
              "<strong>Banyo</strong> — tam karartma, nem dayanımlı",
              "<strong>Antre/merdiven boşluğu</strong> — güneşlik, motorlu (yüksek pencere)",
              "<strong>Çalışma odası</strong> — güneşlik, ekran parlaması önleme",
            ],
          },
        },
        {
          h2: "Villa Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Villa pencereleri <strong>geniş ve yüksek</strong> olduğu için metrekare bazında fiyat yüksektir. Tüm ev paketi özel fiyat:",
          ],
          table: {
            headers: ["Alan", "Pencere Adedi", "Önerilen Kumaş", "Fiyat Aralığı"],
            rows: [
              ["Salon (geniş cam)", "2-3 pencere", "Güneşlik + motorlu", "8.000-15.000 TL"],
              ["Yatak odası (2 pencere)", "2 pencere", "Karartma + motorlu", "5.000-8.000 TL"],
              ["Çocuk odası (1-2 pencere)", "1-2 pencere", "Yarı karartma", "2.000-4.000 TL"],
              ["Mutfak (2 pencere)", "2 pencere", "Tül / güneşlik", "1.500-3.000 TL"],
              ["Çatı katı (2-3 pencere)", "2-3 pencere", "Honeycomb + motorlu", "6.000-12.000 TL"],
              ["Tüm villa paketi (10+ pencere)", "10-15 pencere", "Karışık", "25.000-50.000 TL"],
            ],
          },
        },
        {
          h2: "Villa İçin Motorlu ve Akıllı Ev",
          paragraphs: [
            "Villada <strong>akıllı ev entegrasyonu</strong> ile perde kontrolü:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Merkezi kontrol</strong> — tüm villa perdeleri tek panelden yönetim",
              "<strong>Akıllı telefon</strong> — uygulama ile her oda perdesini kontrol",
              "<strong>Sesli komut</strong> — Alexa / Google Home ile 'perdeleri kapat'",
              "<strong>Zamanlayıcı</strong> — güneş doğum/batım saatlarına göre otomatik",
              "<strong>Güneş sensörü</strong> — güneş geldiğinde otomatik kapanma",
              "<strong>Senaryo</strong> — 'Film modu' tüm karartmaları kapatır, 'Sabah modu' tümünü açar",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Villa için plise perde uygun mu?",
          answer: "Evet, villa pencere mimarisi (yüksek, geniş, çatı, köşe) için en uygun sistemdir. Her pencereye özel ölçü yapılır, motorlu seçenek ile yüksek pencereler uzaktan kumandayla kontrol edilir.",
        },
        {
          question: "Villa çatı penceresi için hangi perde?",
          answer: "Honeycomb karartma plise perde önerilir. Eğimli pencerede vidalı montaj ile sabitlenir. Petek yapısı ısı yalıtımı sağlar, çatı penceresinde ısı kaybını azaltır. Motorlu opsiyon ile uzaktan kumanda.",
        },
        {
          question: "Villa plise perde fiyatı ne kadar?",
          answer: "Tüm villa paketi (10-15 pencere) için 25.000-50.000 TL aralığındadır. Tek oda bazında salon 8.000-15.000 TL, yatak odası 5.000-8.000 TL. Toplu alımda %10-15 indirim uygulanır.",
        },
        {
          question: "Villada akıllı ev ile perde kontrolü mümkün mü?",
          answer: "Evet, motorlu plise perde Alexa/Google Home ile entegre çalışır. Sesli komut, akıllı telefon uygulaması, zamanlayıcı ve senaryo modu ile tüm villa perdeleri otomatik kontrol edilir.",
        },
      ]}
    />
  );
}
