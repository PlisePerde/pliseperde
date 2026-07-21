import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Banka ve Havale Bilgileri",
  description: "Plise Perde banka ve havale bilgileri. Banka hesap bilgileri ve havale yöntemi.",
  slug: "banka-ve-havale-bilgileri",
});

export default function BankaHavalePage() {
  return (
    <PageTemplate
      title="Banka ve Havale Bilgileri"
      description="Plise Perde banka ve havale bilgileri. Banka hesap bilgileri ve havale yöntemi."
      slug="banka-ve-havale-bilgileri"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz" }, { name: "Banka ve Havale", url: "/banka-ve-havale-bilgileri" }]}
      h1="Banka ve Havale Bilgileri"
      intro="Bu sayfa, plise perde siparişlerinde havale ödeme için banka hesap bilgilerini içerir. Havale ödeme sonrası dekont WhatsApp'tan gönderilir. Sipariş, dekont alındıktan sonra başlar. Güvenli ve hızlı ödeme yöntemidir."
      schemaType="article"
      schemaData={{ headline: "Banka ve Havale Bilgileri", description: "Banka hesap bilgileri." }}
      sections={[
        {
          h2: "Banka Hesap Bilgileri",
          paragraphs: ["Havale için <strong>banka hesap bilgileri</strong> aşağıda."],
          table: { headers: ["Banka", "Hesap Sahibi", "IBAN"], rows: [["Banka bilgisi", "Talep üzerine", "Talep üzerine"], ["Hesap türü", "Vadesiz TL", "—"]] },
        },
        {
          h2: "Havale Süreci",
          paragraphs: ["Havale ödeme <strong>4 adımda</strong> tamamlanır."],
          list: { type: "ol", items: ["Sipariş onayı — fiyat belirlenir", "Havale — bankaya ödeme", "Dekont — WhatsApp'tan gönderilir", "Sipariş başlar — dekont onayı sonrası"] },
        },
        {
          h2: "Dekont Gönderimi",
          paragraphs: ["Dekont <strong>WhatsApp'tan</strong> gönderilir."],
          list: { type: "ul", items: ["WhatsApp — 0540 336 38 73", "Dekont fotoğrafı — net görünmeli", "Tutar — doğru olmalı", "Açıklama — sipariş no veya ad"] },
        },
        {
          h2: "Havale Süresi",
          paragraphs: ["Havale <strong>bankaya göre</strong> farklı sürede yansır."],
          table: { headers: ["Banka", "Süre"], rows: [["Aynı banka", "Anında"], ["Farklı banka", "1-2 saat"], ["EFT", "1 iş günü"]] },
        },
        {
          h2: "Güvenlik",
          paragraphs: ["Havale ödeme <strong>güvenli</strong>dir."],
          list: { type: "ul", items: ["Banka kanalı — güvenli", "Dekont — kanıt", "KVKK — veri koruma", "SSL — site güvenliği"] },
        },
      ]}
      faqItems={[
        { question: "Banka hesap bilgilerini nasıl alırım?", answer: "Sipariş onayı sonrası WhatsApp'tan banka hesap bilgileri ve IBAN gönderilir. Güvenlik nedeniyle bu sayfada yayınlanmaz." },
        { question: "Havale dekontunu nereye gönderirim?", answer: "Dekont fotoğrafını WhatsApp'tan 0540 336 38 73 numarasına gönderin. Dekont net görünmeli ve tutar doğru olmalıdır." },
        { question: "Havale ne zaman yansır?", answer: "Aynı banka ise anında, farklı banka ise 1-2 saat, EFT ise 1 iş günü içinde yansır." },
        { question: "Sipariş ne zaman başlar?", answer: "Dekont alındıktan sonra sipariş başlar. Üretim 3-5 iş gününde tamamlanır." },
        { question: "Havale güvenli mi?", answer: "Evet, havale banka kanalı ile yapılır ve dekont ile kanıtlanır. SSL ve KVKK kapsamında korunur." },
      ]}
    />
  );
}
