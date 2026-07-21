import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Salon Plise Perde — Geniş Pencere İçin Işık ve Gizlilik",
  description:
    "Salon için plise perde: güneşlik ve düet kumaş ile ışık-gizlilik dengesi. Geniş pencere, katlanır sistem, motorlu seçenek. Montaj dahil, 2 yıl garanti.",
  slug: "salon-plise-perde",
});

export default function SalonPlisePerdePage() {
  return (
    <PageTemplate
      title="Salon Plise Perde"
      description="Salon için plise perde: geniş pencere, ışık-gizlilik dengesi, motorlu seçenek."
      slug="salon-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Salon", url: "/salon-plise-perde" }]}
      h1="Salon Plise Perde"
      intro="Salon, evin en geniş pencere yüzeyine sahip alanıdır. Büyük camlar bol ışık alır ancak yaz aylarında aşırı ısınma, gün batımında televizyon parlaması ve dışarıdan görünme endişesi yaratır. Plise perde, <strong>güneşlik ve düet kumaş seçenekleri</strong> ile salonda ışık ile gizlilik arasında tam denge kurar. Pencere içine takıldığı için salonun dekorasyonunu bozmaz, perde rengi ve dökümü ile mekanla yarışmaz."
      schemaType="service"
      schemaData={{
        name: "Salon Plise Perde",
        description: "Salon için geniş pencere plise perde çözümleri.",
      }}
      sections={[
        {
          h2: "Salonda Plise Perde Neden Tercih Edilir?",
          paragraphs: [
            "Salon pencereleri genellikle <strong>geniş ve yüksek</strong> olur. Bu pencerelerde klasik tül perde yer kaplar, dekorasyonu domine eder ve ışık kontrolü sınırlıdır. Plise perde ise:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Pencere içinde çalışır</strong> — salon duvarında perde dökümü yok, mekan daha geniş görünür",
              "<strong>Kademeli ışık kontrolü</strong> — yukarıdan aşağı, aşağıdan yukarı açma ile istediğin kısmı aç/kapat",
              "<strong>Güneşlik kumaş</strong> — gün ışığını filtreler, televizyon parlamasını önler, mobilya rengini korur",
              "<strong>Düet seçeneği</strong> — gündüz tül + gece karartma tek perdede, iki ayrı perdeye gerek yok",
              "<strong>Motorlu opsiyon</strong> — yüksek ve geniş pencerede uzaktan kumanda ile açma/kapama",
              "<strong>UV koruma</strong> — güneş UV ışınlarını filtreler, mobilya, zemin ve halı rengini korur",
            ],
          },
        },
        {
          h2: "Salon Pencere Tipleri ve Çözümler",
          paragraphs: [
            "Salonlarda <strong>farklı pencere tipleri</strong> bulunur ve her biri farklı yaklaşım gerektirir:",
          ],
          table: {
            headers: ["Pencere Tipi", "Önerilen Kumaş", "Montaj Tipi", "Özel Not"],
            rows: [
              ["Geniş cam (150-200 cm)", "Güneşlik / Düet", "Vidalı", "Motorlu önerilir"],
              ["Yüksek pencere (200+ cm)", "Güneşlik", "Vidalı / braketli", "Motorlu zorunlu"],
              ["French pencere (kapılı)", "Tül / güneşlik", "Kancalı", "Sök-tak gerekli"],
              ["Köşe pencere", "Güneşlik", "Vidalı özel", "Özel ölçü"],
              ["Panjur pencere", "Tül", "Yapışkanlı", "Pencere içi sığ"],
              ["Katlanır cam (accordion)", "Güneşlik", "Vidalı özel", "Kanat bazlı ölçü"],
            ],
          },
        },
        {
          h2: "Salon İçin Kumaş Renk Seçimi",
          paragraphs: [
            "Salon perdesinde <strong>renk seçimi</strong>, mekanın genel atmosferini belirler. Plise perde kumaş renkleri 20+ seçenek ile sunulur:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Beyaz / krem</strong> — her stile uyar, maksimum ışık, en popüler seçim",
              "<strong>Gri / antrasit</strong> — modern ve endüstriyel stil, şık görünüm",
              "<strong>Bej / tahta rengi</strong> — doğal ve sıcak atmosfer, ahşap detaylarla uyumlu",
              "<strong>Lacivert / mavi</strong> — deniz temalı veya klasik dekorasyon",
              "<strong>Kahverengi</strong> — toprak tonları, sıcak ve davetkar",
              "<strong>Renkli (yeşil, bordo)</strong> — cesur dekorasyon, odak noktası",
            ],
          },
        },
        {
          h2: "Salon Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Salon pencereleri geniş olduğu için <strong>metrekare bazında daha yüksek</strong> toplam fiyat çıkar. Tipik salon pencere ölçüleri:",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Güneşlik Fiyat", "Düet Fiyat", "Motorlu Fiyat"],
            rows: [
              ["150x180 cm (standart salon)", "2.70 m²", "2.700-4.050 TL", "5.400-8.640 TL", "9.450-16.200 TL"],
              ["180x200 cm (geniş salon)", "3.60 m²", "3.600-5.400 TL", "7.200-11.520 TL", "12.600-21.600 TL"],
              ["200x250 cm (büyük cam)", "5.00 m²", "5.000-7.500 TL", "10.000-16.000 TL", "17.500-30.000 TL"],
              ["2 adet 120x150 cm (ikili)", "3.60 m²", "3.600-5.400 TL", "7.200-11.520 TL", "12.600-21.600 TL"],
            ],
          },
        },
        {
          h2: "Salon Perdesinde Düet (Gece-Gündüz) Avantajı",
          paragraphs: [
            "Salon için <strong>düet plise perde</strong>, tek profilde iki kumaş barındırır: üst katman tül (gündüz ışık), alt katman karartma (gece gizlilik). Bu sayede salonda gündüz ışık akar, akşam dışarıdan görünme riski ortadan kalkar. İki ayrı perde almaya gerek kalmaz.",
          ],
        },
      ]}
      faqItems={[
        {
          question: "Salon için plise perde mi tül perde mi?",
          answer: "Plise perde daha pratiktir. Pencere içine takılır, yer kaplamaz, kademeli açılır. Tül perde dekoratif döküm sağlar ama ışık kontrolü sınırlıdır ve yer kaplar. Salon için güneşlik veya düet plise perde önerilir.",
        },
        {
          question: "Geniş salon penceresi için motorlu plise perde şart mı?",
          answer: "200 cm üzeri yüksek pencerede motorlu önerilir. Uzaktan kumanda ile açma/kapama pratik sağlar. Daha küçük pencerelerde manuel yeterlidir.",
        },
        {
          question: "Salon plise perde televizyon parlamasını önler mi?",
          answer: "Evet, güneşlik kumaş gün ışığını filtreler ve televizyon ekranındaki parlamayı büyük ölçüde azaltır. Tam karartma ile tamamen önlenir.",
        },
        {
          question: "Salon plise perde fiyatı ne kadar?",
          answer: "150x180 cm standart salon penceresi için güneşlik 2.700-4.050 TL, düet 5.400-8.640 TL aralığındadır. Montaj dahildir. Motorlu seçenek daha yüksektir.",
        },
      ]}
    />
  );
}
