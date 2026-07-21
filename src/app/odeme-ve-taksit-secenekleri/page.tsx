import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Ödeme ve Taksit Seçenekleri",
  description: "Plise perde ödeme ve taksit seçenekleri. Nakit, kredi kartı, taksit, havale.",
  slug: "odeme-ve-taksit-secenekleri",
});

export default function OdemeTaksitPage() {
  return (
    <PageTemplate
      title="Ödeme ve Taksit Seçenekleri"
      description="Plise perde ödeme ve taksit seçenekleri. Nakit, kredi kartı, taksit, havale."
      slug="odeme-ve-taksit-secenekleri"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz" }, { name: "Ödeme ve Taksit", url: "/odeme-ve-taksit-secenekleri" }]}
      h1="Ödeme ve Taksit Seçenekleri"
      intro="Bu sayfa, plise perde siparişlerindeki ödeme ve taksit seçeneklerini açıklar. Nakit, kredi kartı, taksit ve havale yöntemleri mevcuttur. Nakit ödemede %5 indirim vardır. Taksit 3-6 ay arası yapılandırılabilir. Tüm ödemeler güvenli SSL şifreleme ile yapılır."
      schemaType="article"
      schemaData={{ headline: "Ödeme ve Taksit Seçenekleri", description: "Nakit, kart, taksit, havale." }}
      sections={[
        {
          h2: "Ödeme Yöntemleri",
          paragraphs: ["Dört ödeme yöntemi mevcuttur."],
          table: { headers: ["Yöntem", "İndirim", "Detay"], rows: [["Nakit", "%5", "En avantajlı"], ["Kredi kartı", "Yok", "Tek çekim"], ["Taksit", "Yok", "3-6 taksit"], ["Havale", "Yok", "Sipariş onayı sonrası"]] },
        },
        {
          h2: "Taksit Seçenekleri",
          paragraphs: ["Taksit <strong>3-6 ay</strong> arası yapılır."],
          table: { headers: ["Taksit", "Vade", "Fark"], rows: [["3 taksit", "3 ay", "Vade farkı yok"], ["6 taksit", "6 ay", "Vade farkı %5"], ["9 taksit", "9 ay", "Vade farkı %10"], ["12 taksit", "12 ay", "Vade farkı %15"]] },
        },
        {
          h2: "Nakit İndirimi",
          paragraphs: ["Nakit ödemede <strong>%5 indirim</strong> uygulanır."],
          list: { type: "ul", items: ["%5 indirim — nakit ödeme", "Peşin — en avantajlı", "Montaj sonrası — nakit ödeme", "Fatura — resmi fatura"] },
        },
        {
          h2: "Güvenli Ödeme",
          paragraphs: ["Tüm ödemeler <strong>SSL 256-bit</strong> şifreleme ile yapılır."],
          list: { type: "ol", items: ["SSL 256-bit — şifreli işlem", "3D Secure — kart güvenliği", "PCI DSS — ödeme güvenliği", "KVKK — veri koruma"] },
        },
        {
          h2: "Ödeme Süreci",
          paragraphs: ["Ödeme <strong>sipariş onayı sonrası</strong> yapılır."],
          list: { type: "ol", items: ["Keşif — ücretsiz", "Teklif — net fiyat", "Sipariş onayı — ödeme", "Üretim — 3-5 iş günü", "Teslim — montaj veya kargo"] },
        },
      ]}
      faqItems={[
        { question: "Hangi ödeme yöntemleri var?", answer: "Nakit (%5 indirim), kredi kartı (tek çekim), taksit (3-6 ay) ve havale ile ödeme yapılır." },
        { question: "Taksit kaç ay yapılır?", answer: "3-12 ay arası taksit yapılır. 3 taksitte vade farkı yok, 6 taksitte %5, 9 taksitte %10, 12 taksitte %15 vade farkı uygulanır." },
        { question: "Nakit ödemede indirim var mı?", answer: "Evet, nakit ödemede %5 indirim uygulanır. En avantajlı ödeme yöntemidir." },
        { question: "Ödeme güvenli mi?", answer: "Evet, SSL 256-bit şifreleme, 3D Secure ve PCI DSS ile tüm ödemeler güvenli yapılır." },
        { question: "Ödeme ne zaman yapılır?", answer: "Sipariş onayı sonrası ödeme yapılır. Üretim ödeme sonrası başlar." },
      ]}
    />
  );
}
