import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Otel Plise Perde — Misafir Konforu, Blackout, Motorlu, Toplu Proje",
  description:
    "Otel için plise perde: blackout ile misafir uyku konforu, motorlu seçenek, toplu proje çözümleri, dayanıklı mekanizma. Montaj dahil, 2 yıl garanti.",
  slug: "otel-plise-perde",
});

export default function OtelPlisePerdePage() {
  return (
    <PageTemplate
      title="Otel Plise Perde"
      description="Otel için plise perde: blackout misafir konforu, motorlu, toplu proje çözümleri."
      slug="otel-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Otel", url: "/otel-plise-perde" }]}
      h1="Otel Plise Perde"
      intro="Otellerde <strong>misafir uyku konforu</strong>, müşteri memnuniyetinin ve tekrar ziyaret oranının en kritik faktörüdür. Yatak odasında tam karanlık sağlanamaması, sabah güneşi ile erken uyanma ve dışarıdan görünme endişesi misafir deneyimini olumsuz etkiler. Plise perde, <strong>blackout kumaş ile %0 ışık geçirgenliği</strong>, motorlu seçenek ile yataktan kumanda, ve toplu proje çözümleri ile tüm otel odalarında standart kalite sağlar. Ticari dayanıklılıkta mekanizma ile uzun ömürlü kullanım sunar."
      schemaType="service"
      schemaData={{
        name: "Otel Plise Perde",
        description: "Otel için blackout, motorlu, ticari dayanıklılıkta plise perde.",
      }}
      sections={[
        {
          h2: "Otelde Misafir Konforu ve Perde",
          paragraphs: [
            "Otel misafirinin uyku kalitesi <strong>5 kritik faktöre</strong> bağlıdır:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>Tam karanlık</strong> — blackout kumaş ile %0 ışık, kesintisiz uyku",
              "<strong>Sessiz çalışma</strong> — plise perde mekanizması sessiz, uykuyü bölmez",
              "<strong>Kolay kontrol</strong> — motorlu seçenek ile yataktan kumanda",
              "<strong>Mahremiyet</strong> — dışarıdan tamamen görünmez",
              "<strong>İklim kontrolü</strong> — honeycomb ile oda sıcaklığı dengesi",
            ],
          },
        },
        {
          h2: "Otel Alanlarına Göre Çözümler",
          paragraphs: [
            "Otelin farklı alanları <strong>farklı perde ihtiyacı</strong> gerektirir:",
          ],
          table: {
            headers: ["Alan", "Önerilen Kumaş", "Motorlu", "Özel Not"],
            rows: [
              ["Standart oda", "Blackout + motorlu", "Önerilir", "Misafir konforu"],
              ["Suit oda", "Düet + motorlu", "Şart", "Gündüz ışık + gece karartma"],
              ["Lobi/resepsiyon", "Güneşlik", "Önerilir", "Profesyonel görünüm"],
              ["Restoran/kahvaltı", "Güneşlik", "Opsiyonel", "Atmosfer kontrolü"],
              ["Toplantı salonu", "Tam karartma + motorlu", "Şart", "Sunum/projeksiyon"],
              ["Spa/wellness", "Yarı karartma", "Hayır", "Soft ışık, rahatlatıcı"],
              ["Koridor/ara alan", "Tül", "Hayır", "Işık geçişi"],
            ],
          },
        },
        {
          h2: "Otel Odası İçin Blackout + Motorlu",
          paragraphs: [
            "Otel odasında <strong>blackout + motorlu plise perde</strong> standart olmalıdır:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Blackout kumaş</strong> — %0 ışık, sabah güneşi engelli, tam karanlık uyku",
              "<strong>Motorlu</strong> — yataktan uzaktan kumanda, misafir kalkmadan perde kontrolü",
              "<strong>Zamanlayıcı</strong> — check-out sonrası otomatik açılma, oda havalandırma",
              "<strong>Sessiz motor</strong> — misafir uyurken perde açma/kapama sessiz",
              "<strong>Merkezi kontrol</strong> — housekeeping tüm odaları tek panelden açabilir",
            ],
          },
        },
        {
          h2: "Otel Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Otel projelerinde <strong>toplu alım indirimleri</strong> uygulanır:",
          ],
          table: {
            headers: ["Otel Kapasitesi", "Oda Sayısı", "Oda Başına Fiyat", "Toplam Proje"],
            rows: [
              ["Butik otel", "10-20 oda", "3.000-5.000 TL", "30.000-100.000 TL"],
              ["3 yıldız otel", "50-80 oda", "2.500-4.000 TL", "125.000-320.000 TL"],
              ["4-5 yıldız otel", "100-200 oda", "3.500-6.000 TL", "350.000-1.200.000 TL"],
              ["Resort otel", "200+ oda", "Müzakere", "Projeye özel"],
            ],
          },
        },
        {
          h2: "Otel Projeleri İçin Özel Hizmetler",
          paragraphs: [
            "Otel projelerinde <strong>ek hizmetler</strong> sunulur:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Keşif ve ölçü</strong> — tüm odalar ücretsiz keşif, profesyonel ölçü alma",
              "<strong>Standart kalite</strong> — tüm odalarda aynı perde modeli ve kumaş",
              "<strong>Toplu montaj</strong> — tek seferde tüm odalara montaj, otel operasyonu aksamaz",
              "<strong>Bakım anlaşması</strong> — yıllık bakım, onarım ve yedek parça servisi",
              "<strong>Garanti</strong> — 2 yıl ürün, 3 yıl motor garantisi",
              "<strong>Kurumsal fiyat</strong> — proje bazlı özel fiyat, müzakere imkanı",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Otel odası için en iyi perde hangisi?",
          answer: "Blackout + motorlu plise perde idealdir. Blackout kumaş %0 ışık geçirir, tam karanlık uyku sağlar. Motorlu seçenek ile misafir yataktan kalkmadan perdeyi kontrol eder.",
        },
        {
          question: "Otel plise perde toplu proje fiyatı ne kadar?",
          answer: "50-80 odalı 3 yıldız otel için oda başına 2.500-4.000 TL, toplam 125.000-320.000 TL aralığındadır. 100+ odada müzakere ile özel fiyat yapılır.",
        },
        {
          question: "Otelde motorlu perde merkezi kontrol mümkün mü?",
          answer: "Evet, housekeeping tüm oda perdelerini tek panelden kontrol edebilir. Check-out sonrası otomatik açma ile oda havalandırması sağlanır. Zamanlayıcı ile otomatik çalışma.",
        },
        {
          question: "Otel perdesi ne kadar dayanıklı olmalı?",
          answer: "Ticari kullanım için güçlendirilmiş mekanizma ve profil kullanılır. Otelde her gün açma/kapama yapıldığı için dayanıklılık kritiktir. 2 yıl ürün, 3 yıl motor garantisi verilir.",
        },
      ]}
    />
  );
}
