import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Gizlilik Politikası",
  description: "Plise Perde gizlilik politikası. Kişisel veriler, çerezler, veri güvenliği. KVKK uyumlu.",
  slug: "gizlilik-politikasi",
});

export default function GizlilikPolitikasiPage() {
  return (
    <PageTemplate
      title="Gizlilik Politikası"
      description="Plise Perde gizlilik politikası. Kişisel veriler, çerezler, veri güvenliği."
      slug="gizlilik-politikasi"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalar", url: "/politikalarimiz" }, { name: "Gizlilik", url: "/gizlilik-politikasi" }]}
      h1="Gizlilik Politikası"
      intro="Bu gizlilik politikası, pliseperde.com web sitesi üzerinden toplanan kişisel verilerin nasıl işlendiğini açıklar. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri güvenliği sağlanır. Bu politika, web sitemizi ziyaret eden tüm kullanıcılar için geçerlidir."
      schemaType="article"
      schemaData={{ headline: "Gizlilik Politikası", description: "Kişisel veriler, çerezler, veri güvenliği." }}
      sections={[
        {
          h2: "Toplanan Veriler",
          paragraphs: ["Web sitemizde <strong>şu veriler</strong> toplanır:"],
          list: { type: "ul", items: ["İletişim formu — ad, telefon, ilçe", "WhatsApp mesaj — ad, telefon, mesaj içeriği", "Çerezler — tarayıcı, IP, ziyaret verisi", "Keşif formu — ad, telefon, adres"] },
        },
        {
          h2: "Veri İşleme Amaçları",
          paragraphs: ["Veriler <strong>şu amaçlarla</strong> işlenir:"],
          list: { type: "ol", items: ["Keşif randevusu — iletişim", "Fiyat teklifi — hizmet sunumu", "Sipariş takibi — ürün teslim", "Müşteri desteği — servis", "Site güvenliği — kötüye kullanım önleme"] },
        },
        {
          h2: "Çerezler",
          paragraphs: ["Web sitemiz <strong>çerez</strong> kullanır."],
          table: {
            headers: ["Çerez", "Amaç", "Süre"],
            rows: [
              ["Zorunlu çerez", "Site fonksiyonu", "Oturum"],
              ["Analitik çerez", "Ziyaret analizi", "30 gün"],
              ["Pazarlama çerez", "Reklam ölçümü", "90 gün"],
            ],
          },
        },
        {
          h2: "Veri Güvenliği",
          paragraphs: ["Veriler <strong>SSL ile şifrelenir</strong> ve güvenli sunucuda saklanır."],
          list: { type: "ul", items: ["SSL şifreleme — 256 bit", "Güvenli sunucu — Türkiye lokasyon", "Erişim kısıtlı — yetkili personel", "Yedekleme — günlük otomatik", "KVKK uyumlu — 6698 sayılı kanun"] },
        },
        {
          h2: "Kullanıcı Hakları",
          paragraphs: ["KVKK kapsamında <strong>kullanıcı hakları</strong>:"],
          list: { type: "ol", items: ["Veri erişim — verinizi görüntüleme", "Düzeltme — hatalı veri düzeltme", "Silme — verinizi silme talebi", "İtiraz — veri işlemeye itiraz", "Şikayet — KVKK'ya şikayet hakkı"] },
        },
      ]}
      faqItems={[
        { question: "Verilerim nasıl korunuyor?", answer: "SSL 256-bit şifreleme ile güvenli sunucuda saklanır. Erişim yetkili personel ile sınırlıdır. Günlük otomatik yedekleme yapılır." },
        { question: "Hangi verilerim toplanıyor?", answer: "İletişim formu ile ad, telefon, ilçe; WhatsApp mesajı ile ad, telefon, mesaj içeriği; çerezler ile tarayıcı ve ziyaret verisi toplanır." },
        { question: "Çerezleri reddedebilir miyim?", answer: "Evet, tarayıcı ayarlarından çerezleri reddedebilirsiniz. Zorunlu çerezler site fonksiyonu için gereklidir." },
        { question: "Verimi sildirebilir miyim?", answer: "Evet, KVKK kapsamında veri silme talebinde bulunabilirsiniz. WhatsApp'tan talebinizi iletin, 30 gün içinde silinir." },
        { question: "KVKK uyumlu musunuz?", answer: "Evet, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında tüm veri işleme süreçleri KVKK uyumludur." },
      ]}
    />
  );
}
