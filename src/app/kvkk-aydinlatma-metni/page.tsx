import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "KVKK Aydınlatma Metni",
  description: "Plise Perde KVKK aydınlatma metni. Kişisel verilerin işlenmesine dair bilgilendirme.",
  slug: "kvkk-aydinlatma-metni",
});

export default function KvkkPage() {
  return (
    <PageTemplate
      title="KVKK Aydınlatma Metni"
      description="Plise Perde KVKK aydınlatma metni. Kişisel verilerin işlenmesine dair bilgilendirme."
      slug="kvkk-aydinlatma-metni"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz" }, { name: "KVKK Aydınlatma", url: "/kvkk-aydinlatma-metni" }]}
      h1="KVKK Aydınlatma Metni"
      intro="Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerinizin işlenmesine dair sizi bilgilendirmek amacıyla hazırlanmıştır. Veri sorumlusu olarak Plise Perde, kişisel verilerinizi yasalara uygun olarak işler ve korur."
      schemaType="article"
      schemaData={{ headline: "KVKK Aydınlatma Metni", description: "Kişisel verilerin işlenmesine dair bilgilendirme." }}
      sections={[
        {
          h2: "Veri Sorumlusu",
          paragraphs: ["Veri sorumlusu <strong>Plise Perde</strong>'dir."],
          table: { headers: ["Bilgi", "Değer"], rows: [["Ünvan", "Plise Perde"], ["Adres", "Esenyalı Mah. Edebali Cad. No:13/C Pendik/İstanbul"], ["Telefon", "0540 336 38 73"], ["E-Posta", "info@pliseperde.com"]] },
        },
        {
          h2: "İşlenen Veriler",
          paragraphs: ["<strong>İşlenen kişisel veriler</strong>:"],
          list: { type: "ul", items: ["Kimlik — ad, soyad", "İletişim — telefon, e-posta", "Adres — keşif ve montaj", "İşlem — sipariş, ödeme", "Çerez — IP, tarayıcı"] },
        },
        {
          h2: "İşleme Amaçları",
          paragraphs: ["Veriler <strong>şu amaçlarla</strong> işlenir."],
          list: { type: "ol", items: ["Keşif — iletişim ve randevu", "Sipariş — ürün teslimi", "Ödeme — finansal işlem", "Servis — garanti ve destek", "Güvenlik — kötüye kullanım önleme"] },
        },
        {
          h2: "Veri Aktarımı",
          paragraphs: ["Veriler <strong>üçüncü taraflara</strong> aktarılabilir."],
          list: { type: "ul", items: ["Kargo — teslimat", "Banka — ödeme", "SMS — bilgilendirme", "Hosting — veri saklama", "Yetkili kurum — yasal zorunluluk"] },
        },
        {
          h2: "Kullanıcı Hakları",
          paragraphs: ["KVKK kapsamında <strong>kullanıcı hakları</strong>:"],
          list: { type: "ol", items: ["Veri erişim — verinizi görüntüleme", "Düzeltme — hatalı veri", "Silme — veri silme talebi", "İşleme itiraz — veri işlemeye itiraz", "Şikayet — KVKK'ya şikayet"] },
        },
      ]}
      faqItems={[
        { question: "KVKK aydınlatma metni nedir?", answer: "6698 sayılı KVKK kapsamında kişisel verilerinizin işlenmesine dair sizi bilgilendirmek amacıyla hazırlanan metindir." },
        { question: "Veri sorumlusu kimdir?", answer: "Veri sorumlusu Plise Perde'dir. Esenyalı Mah. Edebali Cad. No:13/C Pendik/İstanbul adresinde ikamet eder." },
        { question: "Hangi verilerim işlenir?", answer: "Kimlik (ad, soyad), iletişim (telefon, e-posta), adres, işlem (sipariş, ödeme) ve çerez (IP, tarayıcı) verileriniz işlenir." },
        { question: "Verilerim kimlere aktarılır?", answer: "Kargo (teslimat), banka (ödeme), SMS sağlayıcı (bilgilendirme), hosting (veri saklama) ve yasal zorunluluk halinde yetkili kurumlara aktarılır." },
        { question: "KVKK haklarımı nasıl kullanırım?", answer: "WhatsApp'tan veri erişim, düzeltme, silme veya itiraz talebi gönderebilirsiniz. 30 gün içinde yanıt verilir. Çözümsüz durumda KVKK'ya şikayet edebilirsiniz." },
      ]}
    />
  );
}
