import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Mesafeli Satış Sözleşmesi",
  description: "Plise Perde mesafeli satış sözleşmesi. İade, cayma, teslimat, ödeme koşulları.",
  slug: "mesafeli-satis-sozlesmesi",
});

export default function MesafeliSatisPage() {
  return (
    <PageTemplate
      title="Mesafeli Satış Sözleşmesi"
      description="Plise Perde mesafeli satış sözleşmesi. İade, cayma, teslimat, ödeme koşulları."
      slug="mesafeli-satis-sozlesmesi"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalar", url: "/politikalarimiz" }, { name: "Mesafeli Satış", url: "/mesafeli-satis-sozlesmesi" }]}
      h1="Mesafeli Satış Sözleşmesi"
      intro="Bu mesafeli satış sözleşmesi, pliseperde.com üzerinden yapılan siparişlerdeki hak ve yükümlülükleri açıklar. 6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında hazırlanmıştır. Cayma hakkı, iade koşulları, teslimat ve ödeme şartları bu sözleşmede detaylıca belirtilir."
      schemaType="article"
      schemaData={{ headline: "Mesafeli Satış Sözleşmesi", description: "İade, cayma, teslimat, ödeme koşulları." }}
      sections={[
        {
          h2: "Sözleşme Tarafları",
          paragraphs: ["Sözleşme <strong>Plise Perde ve tüketici</strong> arasında yapılır."],
          table: {
            headers: ["Bilgi", "Değer"],
            rows: [
              ["Satıcı", "Plise Perde"],
              ["Adres", "Esenyalı Mah. Edebali Cad. No:13/C Pendik/İstanbul"],
              ["Telefon", "0540 336 38 73"],
              ["E-Posta", "info@pliseperde.com"],
            ],
          },
        },
        {
          h2: "Cayma Hakkı",
          paragraphs: ["Tüketici <strong>14 gün içinde</strong> cayma hakkına sahiptir."],
          list: { type: "ul", items: ["14 gün cayma hakkı — sipariş tesliminden itibaren", "Özel üretim — cayma hakkı yok (özel ölçü)", "İade — ürün hasarsız ve kullanılmamış", "Geri ödeme — 14 gün içinde", "Kargo — tüketici karşılar"] },
        },
        {
          h2: "Teslimat",
          paragraphs: ["Teslimat <strong>3-5 iş günü</strong> içinde yapılır."],
          list: { type: "ol", items: ["Sipariş onayı — ödeme sonrası", "Üretim — 3-5 iş günü", "Kargo — Türkiye geneli 2-3 gün", "Montaj — İstanbul ve çevre şehir", "Teslim — kargo veya montaj ekibi"] },
        },
        {
          h2: "Ödeme Koşulları",
          paragraphs: ["Ödeme <strong>çeşitli yöntemlerle</strong> yapılır."],
          table: {
            headers: ["Yöntem", "Detay"],
            rows: [
              ["Nakit", "%5 indirim"],
              ["Kredi kartı", "Tek çekim"],
              ["Taksit", "3-6 taksit"],
              ["Havale", "Sipariş onayı sonrası"],
            ],
          },
        },
        {
          h2: "Garanti",
          paragraphs: ["Ürün ve montaj <strong>2 yıl garanti</strong> ile gelir."],
          list: { type: "ul", items: ["Ürün garantisi — 2 yıl", "Montaj garantisi — 2 yıl", "Motor garantisi — 5 yıl", "Yedek parça — 5+ yıl tedarik"] },
        },
      ]}
      faqItems={[
        { question: "Cayma hakkım var mı?", answer: "Evet, 14 gün içinde cayma hakkınız vardır. Ancak özel ölçü üretimlerde cayma hakkı yoktur, çünkü ürün sizin için özel üretilmiştir." },
        { question: "İade nasıl yapılır?", answer: "Ürün hasarsız ve kullanılmamış olmalıdır. WhatsApp'tan iade talebi yapın, kargo adresi gönderilir. Geri ödeme 14 gün içinde yapılır." },
        { question: "Teslimat ne kadar sürer?", answer: "Sipariş onayı sonrası 3-5 iş gününde üretim, 2-3 gün kargo ile teslimat yapılır. Montaj İstanbul ve çevre şehirlerde yapılır." },
        { question: "Ödeme seçenekleri neler?", answer: "Nakit (%5 indirim), kredi kartı (tek çekim), taksit (3-6 taksit) ve havale ile ödeme yapılır." },
        { question: "Garanti süresi ne kadar?", answer: "Ürün ve montaj 2 yıl, motorlu modellerde motor 5 yıl garanti ile gelir. Yedek parça 5+ yıl tedarik edilir." },
      ]}
    />
  );
}
