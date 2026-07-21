import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Teslimat ve Kargo",
  description: "Plise perde teslimat ve kargo. Kargo süreci, paketleme, teslimat süresi.",
  slug: "teslimat-ve-kargo",
});

export default function TeslimatKargoPage() {
  return (
    <PageTemplate
      title="Teslimat ve Kargo"
      description="Plise perde teslimat ve kargo. Kargo süreci, paketleme, teslimat süresi."
      slug="teslimat-ve-kargo"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz" }, { name: "Teslimat ve Kargo", url: "/teslimat-ve-kargo" }]}
      h1="Teslimat ve Kargo"
      intro="Bu sayfa, plise perde teslimat ve kargo koşullarını açıklar. Montaj veya kargo ile teslimat yapılır. Kargo paketleme korumalıdır ve sigortalıdır. Teslimat süresi, kargo süreci ve hasar durumunda yapılacaklar burada detaylandırılır."
      schemaType="article"
      schemaData={{ headline: "Teslimat ve Kargo", description: "Kargo süreci, paketleme, teslimat." }}
      sections={[
        {
          h2: "Teslimat Yöntemleri",
          paragraphs: ["Teslimat <strong>iki şekilde</strong> yapılır."],
          table: { headers: ["Yöntem", "Bölge", "Süre"], rows: [["Montaj", "İstanbul + çevre", "3-5 iş günü"], ["Kargo", "Türkiye geneli", "5-8 iş günü"], ["Yurt dışı", "DHL/UPS", "5-10 iş günü"]] },
        },
        {
          h2: "Kargo Süreci",
          paragraphs: ["Kargo <strong>4 adımda</strong> yapılır."],
          list: { type: "ol", items: ["Üretim — 3-5 iş günü", "Paketleme — korumalı", "Kargo — 2-3 gün", "Teslim — kapınıza"] },
        },
        {
          h2: "Paketleme",
          paragraphs: ["Paketleme <strong>korunaklı</strong> yapılır."],
          list: { type: "ul", items: ["Karton — çift cidarlı", "Köşe koruma — köşe köpük", "Hava kabarcığı — kumaş koruma", "Profil koruma — naylon", "Etiket — kırılır uyarısı"] },
        },
        {
          h2: "Kargo Hasarı",
          paragraphs: ["Kargo hasarı durumunda <strong>sigorta</strong> devreye girer."],
          list: { type: "ol", items: ["Hasar tespiti — teslim sırasında", "Fotoğraf — hasar kanıtı", "Tutnak — kargo yetkilisi", "Bildirim — 24 saat içinde", "Yeniden gönderim — ücretsiz"] },
        },
        {
          h2: "Teslimat Kontrol",
          paragraphs: ["Teslim sırasında <strong>kontrol</strong> yapın."],
          list: { type: "ul", items: ["Paket — hasar kontrolü", "İçerik — ürün sayısı", "Ölçü — sipariş kontrolü", "Renk — sipariş kontrolü", "İmza — tutanak"] },
        },
      ]}
      faqItems={[
        { question: "Teslimat ne kadar sürer?", answer: "Montaj ile İstanbul ve çevrede 3-5 iş günü, kargo ile Türkiye geneline 5-8 iş günü, yurt dışına 5-10 iş günü." },
        { question: "Kargo hasarı olursa ne olur?", answer: "Teslim sırasında hasar tespit edin, fotoğraf çekin ve kargo yetkilisinden tutanak alın. 24 saat içinde bildirin, ücretsiz yeniden gönderim yapılır." },
        { question: "Paketleme nasıl yapılır?", answer: "Çift cidarlı karton, köşe koruma, hava kabarcığı ve profil koruma ile korunaklı paketleme yapılır. Kırılır uyarı etiketi yapıştırılır." },
        { question: "Teslim sırasında neyi kontrol etmeliyim?", answer: "Paket hasarını, ürün sayısını, ölçüyü ve rengi kontrol edin. Hasar varsa tutanak tutturun ve imzalamadan önce kontrol edin." },
        { question: "Kargo sigortalı mı?", answer: "Evet, tüm kargolar sigortalıdır. Hasar durumunda sigorta kapsar ve ücretsiz yeniden gönderim yapılır." },
      ]}
    />
  );
}
