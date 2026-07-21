import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Mağaza Plise Perde — Vitrin UV Koruma, Ürün Renk Koruması",
  description:
    "Mağaza için plise perde: vitrin UV koruma, ürün renk solmasını önleme, motorlu vitrin kontrolü, profesyonel görünüm. Montaj dahil, 2 yıl garanti.",
  slug: "magaza-plise-perde",
});

export default function MagazaPlisePerdePage() {
  return (
    <PageTemplate
      title="Mağaza Plise Perde"
      description="Mağaza için plise perde: vitrin UV koruma, ürün renk koruması, motorlu kontrol."
      slug="magaza-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Mağaza", url: "/magaza-plise-perde" }]}
      h1="Mağaza Plise Perde"
      intro="Mağaza vitrinlerinde <strong>güneş UV ışınları</strong>, sergilenen ürünlerin rengini solmasına, kumaşın yıpranmasına ve elektronik cihazların zarar görmesine neden olur. Ayrıca gün batımında vitrin camına vuran güneş, içeriyi görünmez kılar ve potansiyel müşterinin dikkati dağılır. Plise perde, <strong>UV koruma kaplamalı kumaş</strong> ile ürünleri güneşten korur, motorlu seçenek ile vitrin perdesini uzaktan kumandayla açıp kapatır ve mağaza açılış/kapanış saatlerinde pratik kontrol sağlar."
      schemaType="service"
      schemaData={{
        name: "Mağaza Plise Perde",
        description: "Mağaza vitrini için UV korumalı, motorlu plise perde.",
      }}
      sections={[
        {
          h2: "Mağaza Vitrininde Güneş Sorunu",
          paragraphs: [
            "Mağaza vitrinlerinde güneş <strong>3 ana sorun</strong> yaratır:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>UV hasarı</strong> — güneş UV ışınları ürün rengini solmasına, kumaşın yıpranmasına neden olur",
              "<strong>Isı birikimi</strong> — vitrin camından giren güneş ısısı ürünleri ve elektronik cihazları zarar verir",
              "<strong>Yansıma</strong> — gün batımında cam yüzeyinde yansıma oluşur, vitrin içeriği görünmez",
            ],
          },
        },
        {
          h2: "Mağaza İçin Plise Perde Çözümü",
          paragraphs: [
            "Plise perde, mağaza vitrininde bu sorunları <strong>tek sistemle</strong> çözer:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>UV koruma kaplaması</strong> — kumaş üzerinde UV filtre tabakası, ürün rengini korur",
              "<strong>Güneş filtreleme</strong> — güneşlik kumaş ışığı filtreler, vitrin aydınlatması korunur",
              "<strong>Motorlu kontrol</strong> — uzaktan kumanda ile vitrin perdesini aç/kapat, açılış/kapanış pratiği",
              "<strong>Zamanlayıcı</strong> — mağaza saatlerine göre otomatik açma/kapama",
              "<strong>Güneş sensörü</strong> — güneş geldiğinde otomatik kapanma, ürün koruması otomatik",
              "<strong>Profesyonel görünüm</strong> — pencere içinde temiz ve düzenli vitrin görünümü",
            ],
          },
        },
        {
          h2: "Mağaza Tipine Göre Kumaş Seçimi",
          paragraphs: [
            "Farklı mağaza tipleri <strong>farklı kumaş</strong> gerektirir:",
          ],
          table: {
            headers: ["Mağaza Tipi", "Önerilen Kumaş", "Öncelik", "Motorlu"],
            rows: [
              ["Tekstil/Giyim", "Güneşlik + UV koruma", "Renk koruması", "Önerilir"],
              ["Elektronik", "Tam karartma + UV", "Isı koruması", "Önerilir"],
              ["Kuyum/Saat", "Güneşlik + UV", "Parlama kontrolü", "Önerilir"],
              ["Mobilya/Decor", "Honeycomb + UV", "Isı + renk koruması", "Önerilir"],
              ["Kozmetik/Parfüm", "Güneşlik + UV", "Renk + ısı koruması", "Önerilir"],
              ["Kitab/Kırtasiye", "Güneşlik + UV", "Renk koruması", "Opsiyonel"],
            ],
          },
        },
        {
          h2: "Mağaza Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Mağaza vitrinleri <strong>geniş</strong> olduğu için metrekare bazında fiyat yüksektir:",
          ],
          table: {
            headers: ["Vitrin Ölçüsü", "Alan (m²)", "Güneşlik + UV", "Motorlu Toplam"],
            rows: [
              ["200x250 cm (standart vitrin)", "5.00 m²", "5.000-7.500 TL", "8.000-12.000 TL"],
              ["300x250 cm (geniş vitrin)", "7.50 m²", "7.500-11.250 TL", "12.000-18.000 TL"],
              ["400x250 cm (büyük vitrin)", "10.00 m²", "10.000-15.000 TL", "16.000-24.000 TL"],
              ["2 adet 200x250 cm (ikili)", "10.00 m²", "10.000-15.000 TL", "16.000-24.000 TL"],
            ],
          },
        },
        {
          h2: "Mağaza Perdesinde Ek Özellikler",
          paragraphs: [
            "Mağaza vitrininde <strong>profesyonel özellikler</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Merkezi kontrol</strong> — tüm vitrin perdeleri tek kumandadan senkronize açma/kapama",
              "<strong>Akıllı sistem</strong> — güneş sensörü + zamanlayıcı + telefon kontrolü entegre",
              "<strong>Güvenlik</strong> — kapanma durumunda vitrin içeriği kısmen gizlenir, gece güvenliği",
              "<strong>Dayanıklılık</strong> — ticari kullanım için güçlendirilmiş profil ve mekanizma",
              "<strong>Bakım anlaşması</strong> — ticari müşteriler için yıllık bakım servisi",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Mağaza vitrini için plise perde uygun mu?",
          answer: "Evet, mağaza vitrini için idealdir. UV koruma kaplamalı kumaş ürün rengini solmasına engel olur, motorlu seçenek ile uzaktan kumandadan vitrin perdesini kontrol edebilirsiniz.",
        },
        {
          question: "Mağaza vitrininde güneş hasarı nasıl önlenir?",
          answer: "UV koruma kaplamalı güneşlik veya tam karartma kumaş ile güneş UV ışınları filtrelenir. Güneş sensörü ile güneş geldiğinde perde otomatik kapanır.",
        },
        {
          question: "Mağaza plise perde fiyatı ne kadar?",
          answer: "200x250 cm standart vitrin için güneşlik+UV 5.000-7.500 TL, motorlu seçenek 8.000-12.000 TL aralığındadır. Vitrin genişliğine göre fiyat artar.",
        },
        {
          question: "Mağazada tüm vitrin perdeleri tek kumandadan kontrol edilir mi?",
          answer: "Evet, merkezi kontrol sistemi ile tüm vitrin perdeleri tek kumandadan senkronize açma/kapama yapılabilir. Zamanlayıcı ile mağaza saatlerine göre otomatik çalışır.",
        },
      ]}
    />
  );
}
