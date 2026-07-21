import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "İade ve Değişim",
  description: "Plise perde iade ve değişim. Koşullar, süreç, geri ödeme. Özel üretim iade.",
  slug: "iade-ve-degisim",
});

export default function IadeDegisimPage() {
  return (
    <PageTemplate
      title="İade ve Değişim"
      description="Plise perde iade ve değişim. Koşullar, süreç, geri ödeme."
      slug="iade-ve-degisim"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz" }, { name: "İade ve Değişim", url: "/iade-ve-degisim" }]}
      h1="İade ve Değişim"
      intro="Bu sayfa, plise perde iade ve değişim koşullarını açıklar. Özel üretim ürünlerde iade sınırlaması vardır. Üretim hatası durumunda ücretsiz değişim yapılır. İade ve değişim süreci, koşulları ve geri ödeme detayları burada belirtilir."
      schemaType="article"
      schemaData={{ headline: "İade ve Değişim", description: "Koşullar, süreç, geri ödeme." }}
      sections={[
        {
          h2: "İade Koşulları",
          paragraphs: ["İade için <strong>şu koşullar</strong> geçerlidir."],
          list: { type: "ul", items: ["Üretim hatası — ücretsiz iade", "Özel üretim — iade yok", "Hasarsız — kullanılmamış", "Orijinal paket — korunmuş", "Fatura — iade ile"] },
        },
        {
          h2: "Değişim Koşulları",
          paragraphs: ["Değişim <strong>duruma göre</strong> ücretsiz veya ücretli."],
          table: { headers: ["Durum", "Değişim", "Ücret"], rows: [["Üretim hatası", "Ücretsiz", "Yok"], ["Ölçü hatası (bizden)", "Ücretsiz", "Yok"], ["Ölçü hatası (sizden)", "Ücretli", "Yeniden üretim"], ["Renk değişimi", "Ücretli", "Yeniden üretim"]] },
        },
        {
          h2: "İade Süreci",
          paragraphs: ["İade süreci <strong>5 adımda</strong> tamamlanır."],
          list: { type: "ol", items: ["Talep — WhatsApp", "Onay — 24 saat değerlendirme", "Kargo — iade adresi", "Teslim — tarafımıza ulaşır", "Geri ödeme — 14 gün"] },
        },
        {
          h2: "Geri Ödeme",
          paragraphs: ["Geri ödeme <strong>14 gün içinde</strong> yapılır."],
          list: { type: "ul", items: ["Nakit — nakit iade", "Kredi kartı — karta iade", "Havale — havale iade", "Taksit — taksit iade"] },
        },
        {
          h2: "Özel Üretim",
          paragraphs: ["Özel ölçü üretim <strong>iade edilmez</strong>. Ürün sizin için özel üretildiği için iade edilemez."],
          list: { type: "ul", items: ["Özel ölçü — iade yok", "Özel renk — iade yok", "Üretim hatası — değişim var", "Montaj hatası — değişim var"] },
        },
      ]}
      faqItems={[
        { question: "Özel üretim iade edilir mi?", answer: "Hayır, özel ölçü üretim ürünler iade edilmez. Ürün sizin için özel üretildiği için iade edilemez. Üretim hatası varsa ücretsiz değişim yapılır." },
        { question: "İade nasıl yapılır?", answer: "WhatsApp'tan iade talebi yapın. Ürün hasarsız ve kullanılmamış olmalı, orijinal paket korunmalıdır. 24 saat içinde onay verilir." },
        { question: "Geri ödeme ne zaman yapılır?", answer: "Ürün tarafımıza ulaştıktan sonra 14 gün içinde geri ödeme yapılır. Ödeme yöntemine göre iade edilir." },
        { question: "Değişim ücretsiz mi?", answer: "Üretim hatası veya bizim hatamız ise ücretsiz. Sizin hatanız (ölçü, renk) ise ücretli değişim yapılır." },
        { question: "Kargo ücretini kim karşılar?", answer: "Üretim hatası durumunda kargo ücretini biz karşılar. Diğer durumlarda kargo ücretini tüketici karşılar." },
      ]}
    />
  );
}
