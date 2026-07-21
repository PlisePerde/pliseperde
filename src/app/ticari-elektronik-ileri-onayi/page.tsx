import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Ticari Elektronik İleti Onayı",
  description: "Plise Perde ticari elektronik ileti onayı. SMS, e-posta, WhatsApp pazarlama izni.",
  slug: "ticari-elektronik-ileri-onayi",
});

export default function TicariElektronikPage() {
  return (
    <PageTemplate
      title="Ticari Elektronik İleti Onayı"
      description="Plise Perde ticari elektronik ileti onayı. SMS, e-posta, WhatsApp pazarlama izni."
      slug="ticari-elektronik-ileri-onayi"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz" }, { name: "Ticari Elektronik İleti", url: "/ticari-elektronik-ileri-onayi" }]}
      h1="Ticari Elektronik İleti Onayı"
      intro="Bu onay metni, 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun kapsamında ticari elektronik ileti gönderimine dair izninizi açıklar. SMS, e-posta ve WhatsApp üzerinden ürün bilgilendirme, kampanya ve duyuru gönderilebilir. İzninizi istediğiniz zaman geri çekebilirsiniz."
      schemaType="article"
      schemaData={{ headline: "Ticari Elektronik İleti Onayı", description: "SMS, e-posta, WhatsApp izni." }}
      sections={[
        {
          h2: "İleti Türleri",
          paragraphs: ["Ticari elektronik ileti <strong>üç kanal</strong> ile gönderilir."],
          list: { type: "ul", items: ["SMS — kampanya ve duyuru", "E-Posta — ürün bilgilendirme", "WhatsApp — mesaj bildirimi"] },
        },
        {
          h2: "İleti İçeriği",
          paragraphs: ["İletiler <strong>şu içeriklerde</strong> olabilir."],
          list: { type: "ol", items: ["Kampanya — indirim ve fırsat", "Yeni ürün — model duyurusu", "Bakım hatırlatma — servis", "Mevsimsel — yaz/kış önerisi", "Etkinlik — fuar ve gün"] },
        },
        {
          h2: "İleti Sıklığı",
          paragraphs: ["İleti sıklığı <strong>ayda 2-4</strong> ile sınırlıdır."],
          table: { headers: ["Kanal", "Sıklık"], rows: [["SMS", "Ayda 2"], ["E-Posta", "Ayda 4"], ["WhatsApp", "Ayda 2"]] },
        },
        {
          h2: "İzin Verme",
          paragraphs: ["İzin <strong>web formu veya WhatsApp</strong> ile verilir."],
          list: { type: "ol", items: ["Web formu — onay kutusu", "WhatsApp — 'İleti izni veriyorum'", "Sipariş sırasında — onay", "Keşif sırasında — onay"] },
        },
        {
          h2: "İzin Geri Çekme",
          paragraphs: ["İzni <strong>istediğiniz zaman</strong> geri çekebilirsiniz."],
          list: { type: "ul", items: ["WhatsApp — 'İleti iptal'", "SMS — 'DUR' yanıtla", "E-Posta — abonelik iptal linki", "Telefon — müşteri hizmetleri"] },
        },
      ]}
      faqItems={[
        { question: "Ticari elektronik ileti nedir?", answer: "SMS, e-posta ve WhatsApp üzerinden gönderilen kampanya, ürün bilgilendirme ve duyuru mesajlarıdır." },
        { question: "İleti sıklığı ne kadar?", answer: "SMS ayda 2, e-posta ayda 4, WhatsApp ayda 2 ile sınırlıdır. Abone olmayanlara ileti gönderilmez." },
        { question: "İzni nasıl geri çekerim?", answer: "WhatsApp'tan 'İleti iptal' yazın, SMS'e 'DUR' yanıtlayın veya e-postadaki abonelik iptal linkine tıklayın." },
        { question: "İzni nasıl veririm?", answer: "Web formundaki onay kutusunu işaretleyin, WhatsApp'tan 'İleti izni veriyorum' yazın veya sipariş/keşif sırasında onay verin." },
        { question: "İleti içeriği ne olacak?", answer: "Kampanya, indirim, yeni ürün duyurusu, bakım hatırlatma ve mevsimsel öneriler gönderilir. Spam veya gereksiz ileti gönderilmez." },
      ]}
    />
  );
}
