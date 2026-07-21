import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Hastane Plise Perde — Anti-Bakteriyel, Hijyenik, Tam Karartma",
  description:
    "Hastane için plise perde: anti-bakteriyel kumaş, hijyenik, kolay silme, tam karartma, dayanıklı mekanizma. Kurumsal proje çözümleri. Montaj dahil, 2 yıl garanti.",
  slug: "hastane-plise-perde",
});

export default function HastanePlisePerdePage() {
  return (
    <PageTemplate
      title="Hastane Plise Perde"
      description="Hastane için anti-bakteriyel, hijyenik, tam karartma plise perde."
      slug="hastane-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Hastane", url: "/hastane-plise-perde" }]}
      h1="Hastane Plise Perde"
      intro="Hastane ortamında <strong>hijyen birinci önceliktir</strong>. Standart perde sistemleri toz tutar, yıkanması zordur ve bakteri üretimine zemin hazırlar. Hastane odalarında hastanın dinlenmesi için tam karanlık, ameliyathanelerde kontrollü ışık ve yoğun bakımda monitör parlamasını önleme gereklidir. Plise perde, <strong>anti-bakteriyel kumaş, kolay silinebilir yüzey ve pencere içi montaj</strong> ile hastane ortamı için ideal hijyenik çözüm sunar. Kumaş toz tutmaz, nemli bezle dezenfekte edilir ve pencere içinde yer kaplamaz."
      schemaType="service"
      schemaData={{
        name: "Hastane Plise Perde",
        description: "Hastane için anti-bakteriyel, hijyenik plise perde.",
      }}
      sections={[
        {
          h2: "Hastanede Perde Seçimi Kriterleri",
          paragraphs: [
            "Hastane perdesi seçiminde <strong>5 kritik kriter</strong> vardır:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>Hijyen</strong> — anti-bakteriyel kumaş, toz tutmaz, silinebilir",
              "<strong>Dezenfeksiyon</strong> — kumaş yüzeyi dezenfektan ile silinebilir",
              "<strong>Işık kontrolü</strong> — hasta odası karartma, ameliyathane kontrollü ışık",
              "<strong>Dayanıklılık</strong> — sık açma/kapama, uzun ömürlü mekanizma",
              "<strong>Güvenlik</strong> — ip mekanizması yok, hasta güvenliği",
            ],
          },
        },
        {
          h2: "Hastane Alanlarına Göre Çözümler",
          paragraphs: [
            "Hastanenin farklı alanları <strong>farklı ihtiyaçlar</strong> gerektirir:",
          ],
          table: {
            headers: ["Alan", "Önerilen Kumaş", "Öncelik", "Özel Not"],
            rows: [
              ["Hasta odası", "Tam karartma + anti-bakteriyel", "Uyku + hijyen", "Motorlu önerilir"],
              ["Yoğun bakım", "Güneşlik + anti-bakteriyel", "Monitör parlaması", "Sessiz mekanizma"],
              ["Ameliyathane", "Tam karartma + steril", "Kontrollü ışık", "Özel kumaş"],
              ["Poliklinik/muayene", "Yarı karartma", "Gizlilik + ışık", "Manuel"],
              ["Bekleme alanı", "Güneşlik", "Atmosfer + ışık", "Dayanıklı"],
              ["Koridor", "Tül", "Işık geçişi", "Az yer kaplayan"],
            ],
          },
        },
        {
          h2: "Anti-Bakteriyel Kumaş Özellikleri",
          paragraphs: [
            "Hastane için <strong>anti-bakteriyel plise perde kumaşı</strong> özel üretimdir:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Anti-bakteriyel kaplama</strong> — kumaş yüzeyinde bakteri üremesi engellenir",
              "<strong>Toz tutmaz</strong> — düz yüzey, toz ve partikül tutmaz",
              "<strong>Dezenfektan dayanımı</strong> — çamaşır suyu ve dezenfektan ile silinebilir",
              "<strong>Nem dayanımı</strong> — hastane ortamı nemli, kumaş nem emmez",
              "<strong>Kolay temizlik</strong> — nemli bezle günlük silme, yıkmaya gerek yok",
              "<strong>Renk dayanımı</strong> — sık silmeye rağmen renk solmaz",
            ],
          },
        },
        {
          h2: "Hastane Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Hastane projelerinde <strong>kurumsal fiyat</strong> uygulanır:",
          ],
          table: {
            headers: ["Alan / Proje", "Pencere Adedi", "Kumaş Tipi", "Fiyat Aralığı"],
            rows: [
              ["Tek hasta odası (1 pencere)", "1 pencere", "Karartma + anti-bakteriyel", "1.680-2.400 TL"],
              ["Servis (20 oda)", "20 pencere", "Karartma + anti-bakteriyel", "33.600-48.000 TL"],
              ["Yoğun bakım (10 pencere)", "10 pencere", "Güneşlik + anti-bakteriyel", "12.000-18.000 TL"],
              ["Tüm hastane (100+ pencere)", "100+ pencere", "Karışık", "Müzakere"],
            ],
          },
        },
        {
          h2: "Hastane Projeleri İçin Özel Hizmetler",
          paragraphs: [
            "Hastane projelerinde <strong>ek hizmetler</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Keşif ve ölçü</strong> — tüm alanlar ücretsiz keşif",
              "<strong>Anti-bakteriyel sertifika</strong> — kumaş antibakteriyel test raporu",
              "<strong>Hijyenik montaj</strong> — montaj sırasında steril çalışma",
              "<strong>Bakım anlaşması</strong> — yıllık bakım, dezenfeksiyon kontrolü",
              "<strong>Yedek parça</strong> — hızlı yedek parça tedariki",
              "<strong>Garanti</strong> — 2 yıl ürün, mekanizma 3 yıl",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Hastane için plise perde hijyenik mi?",
          answer: "Evet, anti-bakteriyel kaplamalı kumaş kullanılır. Toz tutmaz, dezenfektan ile silinebilir, bakteri üretmez. Standart perde sistemlerinden çok daha hijyeniktir.",
        },
        {
          question: "Hasta odası için hangi perde önerilir?",
          answer: "Tam karartma + anti-bakteriyel kumaş önerilir. Hasta dinlenmesi için tam karanlık, hijyen için anti-bakteriyel kumaş. Motorlu seçenek ile hasta kalkmadan perde kontrolü.",
        },
        {
          question: "Hastane plise perde fiyatı ne kadar?",
          answer: "Tek hasta odası için 1.680-2.400 TL. 20 odalı servis için 33.600-48.000 TL. 100+ pencere kurumsal projede müzakere ile özel fiyat yapılır.",
        },
        {
          question: "Hastane perdesi dezenfektan ile silinir mi?",
          answer: "Evet, anti-bakteriyel kumaş yüzeyi çamaşır suyu ve dezenfektan ile silinebilir. Kumaş dezenfektana dayanıklıdır, sık silmeye rağmen renk solmaz.",
        },
      ]}
    />
  );
}
