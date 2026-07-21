import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Ön Bilgilendirme Formu",
  description: "Plise Perde ön bilgilendirme formu. Tüketici ön bilgilendirme yükümlülükleri.",
  slug: "on-bilgilendirme-formu",
});

export default function OnBilgilendirmePage() {
  return (
    <PageTemplate
      title="Ön Bilgilendirme Formu"
      description="Plise Perde ön bilgilendirme formu. Tüketici ön bilgilendirme yükümlülükleri."
      slug="on-bilgilendirme-formu"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sözleşmelerimiz", url: "/sozlesmelerimiz" }, { name: "Ön Bilgilendirme", url: "/on-bilgilendirme-formu" }]}
      h1="Ön Bilgilendirme Formu"
      intro="Bu ön bilgilendirme formu, 6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında tüketiciye yapılması gereken bilgilendirmeyi içerir. Ürün, fiyat, teslimat, garanti ve cayma hakkı bilgileri burada detaylandırılır."
      schemaType="article"
      schemaData={{ headline: "Ön Bilgilendirme Formu", description: "Tüketici ön bilgilendirme." }}
      sections={[
        {
          h2: "Satıcı Bilgileri",
          paragraphs: ["Satıcı <strong>bilgileri</strong> aşağıda."],
          table: { headers: ["Bilgi", "Değer"], rows: [["Satıcı", "Plise Perde"], ["Adres", "Esenyalı Mah. Edebali Cad. No:13/C Pendik/İstanbul"], ["Telefon", "0540 336 38 73"], ["E-Posta", "info@pliseperde.com"], ["MERSİS", "Talep üzerine"] ] },
        },
        {
          h2: "Ürün Bilgileri",
          paragraphs: ["Ürün <strong>özel ölçü plise perde</strong> olarak üretilir."],
          list: { type: "ul", items: ["Ürün — plise perde (özel ölçü)", "Malzeme — polyester kumaş + alüminyum/PVC profil", "Renk — beyaz, antrasit, ahşap desen, krem", "Model — 7 model seçeneği", "Montaj — vidalı, yapışkanlı, kancalı, portrayli"] },
        },
        {
          h2: "Fiyat ve Ödeme",
          paragraphs: ["Fiyat <strong>m² bazında</strong> belirlenir."],
          table: { headers: ["Bilgi", "Değer"], rows: [["Fiyat aralığı", "450-3500 TL/m²"], ["Montaj", "100-300 TL/pencere"], ["Ödeme", "Nakit, kart, taksit, havale"], ["Nakit indirim", "%5"], ["Taksit", "3-6 taksit"]] },
        },
        {
          h2: "Teslimat",
          paragraphs: ["Teslimat <strong>3-5 iş günü</strong> içinde yapılır."],
          list: { type: "ol", items: ["Üretim — 3-5 iş günü", "Montaj — İstanbul ve çevre", "Kargo — Türkiye geneli 2-3 gün", "Teslim — kargo veya montaj ekibi"] },
        },
        {
          h2: "Cayma Hakkı",
          paragraphs: ["Özel üretim ürünlerde <strong>cayma hakkı yoktur</strong>."],
          list: { type: "ul", items: ["14 gün cayma — standart ürünlerde", "Özel üretim — cayma hakkı yok", "Ürün hasarı — garanti kapsamı", "Geri ödeme — 14 gün içinde"] },
        },
      ]}
      faqItems={[
        { question: "Ön bilgilendirme formu nedir?", answer: "6502 sayılı kanun kapsamında tüketiciye yapılması gereken bilgilendirmedir. Satıcı, ürün, fiyat, teslimat ve cayma hakkı bilgilerini içerir." },
        { question: "Cayma hakkım var mı?", answer: "Standart ürünlerde 14 gün cayma hakkı vardır. Ancak özel ölçü üretimlerde cayma hakkı yoktur, çünkü ürün sizin için özel üretilmiştir." },
        { question: "Ödeme seçenekleri neler?", answer: "Nakit (%5 indirim), kredi kartı (tek çekim), taksit (3-6 taksit) ve havale ile ödeme yapılır." },
        { question: "Teslimat ne kadar sürer?", answer: "Sipariş onayı sonrası 3-5 iş gününde üretim, ardından montaj veya kargo ile teslimat yapılır." },
        { question: "Satıcı bilgileri nedir?", answer: "Plise Perde, Esenyalı Mah. Edebali Cad. No:13/C Pendik/İstanbul. Telefon: 0540 336 38 73, E-Posta: info@pliseperde.com." },
      ]}
    />
  );
}
