import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Açık Rıza Metni",
  description: "Plise Perde açık rıza metni. KVKK kapsamında kişisel veri işleme rıza metni.",
  slug: "acik-riza-metni",
});

export default function AcikRizaPage() {
  return (
    <PageTemplate
      title="Açık Rıza Metni"
      description="Plise Perde açık rıza metni. KVKK kapsamında kişisel veri işleme rıza."
      slug="acik-riza-metni"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz" }, { name: "Açık Rıza Metni", url: "/acik-riza-metni" }]}
      h1="Açık Rıza Metni"
      intro="Bu açık rıza metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerinizin işlenmesine dair rızanızı açıklar. Verilerinizi işlerken açık rızanız çerçevesinde hareket ederiz. Bu metni okuyarak rızanızı verebilir veya reddedebilirsiniz."
      schemaType="article"
      schemaData={{ headline: "Açık Rıza Metni", description: "KVKK kapsamında açık rıza." }}
      sections={[
        {
          h2: "Veri İşleme",
          paragraphs: ["Kişisel verileriniz <strong>açık rızanız ile</strong> işlenir."],
          list: { type: "ul", items: ["Ad soyad — iletişim", "Telefon — randevu ve destek", "E-Posta — bilgilendirme", "Adres — keşif ve montaj", "IP — site güvenliği"] },
        },
        {
          h2: "İşleme Amaçları",
          paragraphs: ["Veriler <strong>şu amaçlarla</strong> işlenir."],
          list: { type: "ol", items: ["Keşif randevusu — iletişim", "Fiyat teklifi — hizmet", "Sipariş takibi — teslimat", "Müşteri desteği — servis", "Pazarlama — ürün bilgilendirme"] },
        },
        {
          h2: "Veri Aktarımı",
          paragraphs: ["Veriler <strong>üçüncü taraflara</strong> aktarılabilir."],
          list: { type: "ul", items: ["Kargo — teslimat için", "Banka — ödeme için", "SMS sağlayıcı — bilgilendirme", "Hosting — veri saklama"] },
        },
        {
          h2: "Saklama Süresi",
          paragraphs: ["Veriler <strong>ihtiyaç süresince</strong> saklanır."],
          table: { headers: ["Veri", "Süre"], rows: [["Sipariş verisi", "10 yıl"], ["İletişim verisi", "5 yıl"], ["Çerez", "30-90 gün"], ["Pazarlama", "İptal edilene kadar"]] },
        },
        {
          h2: "Rıza Geri Çekme",
          paragraphs: ["Rızanızı <strong>istediğiniz zaman</strong> geri çekebilirsiniz."],
          list: { type: "ol", items: ["WhatsApp — rıza geri çekme talebi", "E-Posta — yazılı talep", "Veri silme — 30 gün içinde", "Pazarlama iptali — anında"] },
        },
      ]}
      faqItems={[
        { question: "Açık rıza nedir?", answer: "KVKK kapsamında kişisel verilerinizin işlenmesine verdiğiniz onaydır. Rızanızı verebilir veya reddedebilirsiniz." },
        { question: "Rızamı nasıl geri çekerim?", answer: "WhatsApp'tan veya e-posta ile rıza geri çekme talebi gönderebilirsiniz. Verileriniz 30 gün içinde silinir." },
        { question: "Verilerim kimlere aktarılır?", answer: "Kargo (teslimat), banka (ödeme), SMS sağlayıcı (bilgilendirme) ve hosting (veri saklama) ile sınırlı aktarılır." },
        { question: "Verilerim ne kadar saklanır?", answer: "Sipariş verisi 10 yıl, iletişim verisi 5 yıl, çerez 30-90 gün, pazarlama verisi iptal edilene kadar saklanır." },
        { question: "Pazarlama mesajlarını nasıl durdururum?", answer: "WhatsApp'tan pazarlama iptali talep edin, anında durdurulur. SMS ve e-posta pazarlama iptali de yapılabilir." },
      ]}
    />
  );
}
