import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Sipariş ve Özel Üretim Şartları",
  description: "Plise perde sipariş ve özel üretim şartları. Özel ölçü, üretim süreci, teslimat.",
  slug: "siparis-ve-ozel-uretim-sartlari",
});

export default function SiparisOzelUretimPage() {
  return (
    <PageTemplate
      title="Sipariş ve Özel Üretim Şartları"
      description="Plise perde sipariş ve özel üretim şartları. Özel ölçü, üretim süreci, teslimat."
      slug="siparis-ve-ozel-uretim-sartlari"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sözleşmelerimiz", url: "/sozlesmelerimiz" }, { name: "Sipariş ve Özel Üretim", url: "/siparis-ve-ozel-uretim-sartlari" }]}
      h1="Sipariş ve Özel Üretim Şartları"
      intro="Bu sayfa, plise perde siparişi ve özel üretim süreçlerine dair şartları açıklar. Özel ölçü üretim, sipariş onayı, üretim süresi, teslimat ve değişiklik koşulları burada detaylandırılır. Sipariş vererek bu şartları kabul etmiş sayılırsınız."
      schemaType="article"
      schemaData={{ headline: "Sipariş ve Özel Üretim Şartları", description: "Özel ölçü üretim şartları." }}
      sections={[
        {
          h2: "Sipariş Süreci",
          paragraphs: ["Sipariş <strong>5 adımda</strong> tamamlanır."],
          list: { type: "ol", items: ["Keşif — ücretsiz, milimetrik ölçü", "Teklif — net fiyat sunulur", "Onay — sipariş onayı ve ödeme", "Üretim — 3-5 iş günü", "Teslim — kargo veya montaj"] },
        },
        {
          h2: "Özel Ölçü Üretim",
          paragraphs: ["Tüm plise perde <strong>özel ölçü</strong> üretilir. <em>Milimetrik hassasiyet</em> ile pencere ölçünüze uygun üretilir."],
          list: { type: "ul", items: ["Milimetrik ölçü — 0.5 mm hassasiyet", "Özel renk — kumaş ve profil", "Özel model — 7 model seçeneği", "Özel montaj — 4 montaj tipi", "Cayma hakkı yok — özel üretim"] },
        },
        {
          h2: "Üretim Süresi",
          paragraphs: ["Üretim <strong>3-5 iş günü</strong> içinde tamamlanır."],
          table: { headers: ["Adım", "Süre"], rows: [["Kumaş kesimi", "1 saat"], ["Profil hazırlığı", "2 saat"], ["Mekanizma montajı", "1 saat"], ["Kalite kontrol", "30 dk"], ["Toplam (pencere)", "4-5 saat"], ["Sipariş teslim", "3-5 iş günü"]] },
        },
        {
          h2: "Değişiklik ve İptal",
          paragraphs: ["Sipariş onayından sonra <strong>değişiklik yapılamaz</strong>. Özel üretim olduğu için iptal edilemez."],
          list: { type: "ul", items: ["Ölçü değişikliği — onay öncesi mümkün", "Renk değişikliği — onay öncesi mümkün", "İptal — özel üretim, iptal edilemez", "Üretim sonrası — değişiklik yok"] },
        },
        {
          h2: "Teslimat",
          paragraphs: ["Teslimat <strong>iki şekilde</strong> yapılır."],
          list: { type: "ol", items: ["Montaj — İstanbul ve çevre şehir, ekip gelir", "Kargo — Türkiye geneli, 2-3 gün", "Kargo paketleme — korumalı", "Hasar — kargo sigortası"] },
        },
      ]}
      faqItems={[
        { question: "Sipariş ne kadar sürede teslim edilir?", answer: "Sipariş onayı sonrası 3-5 iş gününde üretim, ardından montaj veya kargo ile teslimat yapılır." },
        { question: "Özel ölçü üretimde cayma hakkı var mı?", answer: "Hayır, özel ölçü üretimlerde cayma hakkı yoktur. Ürün sizin için özel üretildiği için iade edilemez." },
        { question: "Sipariş onayından sonra değişiklik yapılabilir mi?", answer: "Hayır, sipariş onayından sonra ölçü, renk veya model değişikliği yapılamaz. Üretim başlamıştır." },
        { question: "Kargo ile teslimat var mı?", answer: "Evet, Türkiye geneline kargo ile teslimat yapılır. Kargo 2-3 gün içinde ulaşır. Kargo paketleme korumalıdır." },
        { question: "Üretim süresi ne kadar?", answer: "Tek pencere 4-5 saatte üretilir. Toplam sipariş 3-5 iş gününde tamamlanır ve teslime hazır olur." },
      ]}
    />
  );
}
