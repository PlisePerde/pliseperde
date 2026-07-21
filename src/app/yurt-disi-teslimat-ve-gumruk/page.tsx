import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Yurt Dışı Teslimat ve Gümrük",
  description: "Plise perde yurt dışı teslimat ve gümrük. Kargo, gümrük, teslimat koşulları.",
  slug: "yurt-disi-teslimat-ve-gumruk",
});

export default function YurtDisiPage() {
  return (
    <PageTemplate
      title="Yurt Dışı Teslimat ve Gümrük"
      description="Plise perde yurt dışı teslimat ve gümrük. Kargo, gümrük, teslimat koşulları."
      slug="yurt-disi-teslimat-ve-gumruk"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz" }, { name: "Yurt Dışı Teslimat", url: "/yurt-disi-teslimat-ve-gumruk" }]}
      h1="Yurt Dışı Teslimat ve Gümrük"
      intro="Bu sayfa, plise perde yurt dışı teslimat ve gümrük koşullarını açıklar. Kargo süreci, gümrük vergileri, teslimat süresi ve sorumluluklar burada detaylandırılır. Yurt dışı siparişlerde ek gümrük vergileri ve kargo ücretleri olabilir."
      schemaType="article"
      schemaData={{ headline: "Yurt Dışı Teslimat ve Gümrük", description: "Kargo, gümrük, teslimat." }}
      sections={[
        {
          h2: "Yurt Dışı Kargo",
          paragraphs: ["Yurt dışı teslimat <strong>DHL veya UPS</strong> ile yapılır."],
          list: { type: "ul", items: ["DHL — 3-7 iş günü", "UPS — 3-7 iş günü", "Paketleme — korumalı", "Takip — kargo takip numarası", "Sigorta — kargo sigortası"] },
        },
        {
          h2: "Gümrük Vergileri",
          paragraphs: ["Gümrük vergileri <strong>alıcıya aittir</strong>."],
          table: { headers: ["Ülke", "Gümrük", "KDV"], rows: [["ABD", "%5-10", "Eyalet bazlı"], ["Almanya", "%4-6", "%19"], ["İngiltere", "%4-6", "%20"], ["KKTc", "Muaf", "Muaf"]] },
        },
        {
          h2: "Teslimat Süresi",
          paragraphs: ["Yurt dışı teslimat <strong>5-10 iş günü</strong> sürer."],
          list: { type: "ol", items: ["Üretim — 3-5 iş günü", "Kargo — 3-7 iş günü", "Gümrük — 1-3 gün", "Teslim — toplam 5-10 gün"] },
        },
        {
          h2: "Sorumluluk",
          paragraphs: ["Gümrük vergileri ve <strong>ithalat süreci</strong> alıcı sorumluluğundadır."],
          list: { type: "ul", items: ["Gümrük vergisi — alıcı öder", "İthalat izin — alıcı sağlar", "Gümrük gecikmesi — alıcı sorumluluğu", "Kargo hasarı — sigorta kapsar"] },
        },
        {
          h2: "Ödeme",
          paragraphs: ["Yurt dışı siparişlerde <strong>havale veya kredi kartı</strong> ile ödeme yapılır."],
          list: { type: "ul", items: ["Havale — uluslararası SWIFT", "Kredi kartı — USD/EUR", "PayPal — opsiyonel", "Kargo — ödeme sonrası gönderim"] },
        },
      ]}
      faqItems={[
        { question: "Yurt dışına kargo var mı?", answer: "Evet, DHL veya UPS ile yurt dışı kargo yapılır. 3-7 iş gününde teslim edilir." },
        { question: "Gümrük vergisini kim öder?", answer: "Gümrük vergileri alıcıya aittir. Ülkeye göre %4-20 arası gümrük ve KDV uygulanabilir." },
        { question: "Yurt dışı teslimat ne kadar sürer?", answer: "Üretim 3-5 iş günü, kargo 3-7 iş günü, gümrük 1-3 gün — toplam 5-10 iş günü." },
        { question: "Ödeme nasıl yapılır?", answer: "Uluslararası havale (SWIFT) veya kredi kartı (USD/EUR) ile ödeme yapılır. PayPal opsiyonel olarak mevcuttur." },
        { question: "Kargo sigortası var mı?", answer: "Evet, tüm yurt dışı kargolar sigortalıdır. Kargo hasarı durumunda sigorta kapsar." },
      ]}
    />
  );
}
