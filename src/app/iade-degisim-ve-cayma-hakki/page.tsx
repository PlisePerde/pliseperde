import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "İade, Değişim ve Cayma Hakkı",
  description: "Plise perde iade, değişim ve cayma hakkı. Koşullar, süreç, geri ödeme.",
  slug: "iade-degisim-ve-cayma-hakki",
});

export default function IadeDegisimCaymaPage() {
  return (
    <PageTemplate
      title="İade, Değişim ve Cayma Hakkı"
      description="Plise perde iade, değişim ve cayma hakkı. Koşullar, süreç, geri ödeme."
      slug="iade-degisim-ve-cayma-hakki"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz" }, { name: "İade, Değişim ve Cayma", url: "/iade-degisim-ve-cayma-hakki" }]}
      h1="İade, Değişim ve Cayma Hakkı"
      intro="Bu sayfa, plise perde iade, değişim ve cayma hakkı koşullarını açıklar. 6502 sayılı kanun kapsamında tüketici hakları korunur. Özel üretim ürünlerde cayma hakkı sınırlaması vardır. İade ve değişim koşulları, süreci ve geri ödeme detayları burada belirtilir."
      schemaType="article"
      schemaData={{ headline: "İade, Değişim ve Cayma Hakkı", description: "Koşullar, süreç, geri ödeme." }}
      sections={[
        {
          h2: "Cayma Hakkı",
          paragraphs: ["Tüketici <strong>14 gün içinde</strong> cayma hakkına sahiptir. Ancak <em>özel üretim</em> ürünlerde cayma hakkı yoktur."],
          list: { type: "ul", items: ["14 gün cayma — standart ürünlerde", "Özel üretim — cayma hakkı yok", "Cayma bildirimi — WhatsApp veya e-posta", "Geri ödeme — 14 gün içinde"] },
        },
        {
          h2: "İade Koşulları",
          paragraphs: ["İade için <strong>şu koşullar</strong> geçerlidir."],
          list: { type: "ol", items: ["Ürün hasarsız ve kullanılmamış olmalı", "Orijinal paketleme korunmalı", "Fatura ile iade edilmeli", "İade talebi — WhatsApp'tan", "Kargo — tüketici karşılar"] },
        },
        {
          h2: "Değişim",
          paragraphs: ["Değişim <strong>ücretsiz</strong> yapılır (üretim hatası durumunda)."],
          list: { type: "ul", items: ["Üretim hatası — ücretsiz değişim", "Ölçü hatası (bizden) — ücretsiz", "Ölçü hatası (sizden) — ücretli", "Renk değişimi — ücretli (özel üretim)"] },
        },
        {
          h2: "Geri Ödeme",
          paragraphs: ["Geri ödeme <strong>14 gün içinde</strong> yapılır."],
          table: { headers: ["Ödeme", "Geri Ödeme"], rows: [["Nakit", "Nakit — 14 gün"], ["Kredi kartı", "Karta iade — 14 gün"], ["Havale", "Havale — 14 gün"], ["Taksit", "Taksit iade — 14 gün"]] },
        },
        {
          h2: "İade Süreci",
          paragraphs: ["İade süreci <strong>5 adımda</strong> tamamlanır."],
          list: { type: "ol", items: ["İade talebi — WhatsApp", "Onay — durum değerlendirme 24 saat", "Kargo — iade adresi gönderilir", "Teslim — ürün tarafımıza ulaşır", "Geri ödeme — 14 gün içinde"] },
        },
      ]}
      faqItems={[
        { question: "Cayma hakkım var mı?", answer: "Standart ürünlerde 14 gün cayma hakkı vardır. Ancak özel ölçü üretim ürünlerde cayma hakkı yoktur." },
        { question: "İade nasıl yapılır?", answer: "WhatsApp'tan iade talebi yapın. Ürün hasarsız ve kullanılmamış olmalı, orijinal paketleme korunmalıdır. Kargo ücretini tüketici karşılar." },
        { question: "Geri ödeme ne zaman yapılır?", answer: "Ürün tarafımıza ulaştıktan sonra 14 gün içinde geri ödeme yapılır. Ödeme yöntemine göre iade edilir." },
        { question: "Değişim ücretsiz mi?", answer: "Üretim hatası veya bizim hatamız ise değişim ücretsizdir. Sizin hatanız (ölçü, renk) ise ücretli değişim yapılır." },
        { question: "Kargo ücretini kim karşılar?", answer: "İade kargo ücretini tüketici karşılar. Üretim hatası durumunda kargo ücretini biz karşılarız." },
      ]}
    />
  );
}
