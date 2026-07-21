import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Kullanım Koşulları",
  description: "Plise Perde kullanım koşulları. Web site kullanım şartları, sorumluluklar, telif hakları.",
  slug: "kullanim-kosullari",
});

export default function KullanimKosullariPage() {
  return (
    <PageTemplate
      title="Kullanım Koşulları"
      description="Plise Perde kullanım koşulları. Web site kullanım şartları, sorumluluklar."
      slug="kullanim-kosullari"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalar", url: "/politikalarimiz" }, { name: "Kullanım Koşulları", url: "/kullanim-kosullari" }]}
      h1="Kullanım Koşulları"
      intro="Bu kullanım koşulları, pliseperde.com web sitesinin kullanım şartlarını açıklar. Siteyi ziyaret eden tüm kullanıcılar bu koşulları kabul etmiş sayılır. Koşullar, site kullanımı, sorumluluklar, telif hakları ve uyuşmazlık çözümünü kapsar."
      schemaType="article"
      schemaData={{ headline: "Kullanım Koşulları", description: "Web site kullanım şartları." }}
      sections={[
        {
          h2: "Kabul Edilen Koşullar",
          paragraphs: ["Siteyi ziyaret ederek <strong>bu koşulları kabul</strong> etmiş olursunuz."],
        },
        {
          h2: "Site Kullanımı",
          paragraphs: ["Site <strong>yasal amaçlarla</strong> kullanılır."],
          list: { type: "ul", items: ["Yasal amaç — bilgi ve iletişim", "Yasak — kötüye kullanım, spam", "Yasak — telif ihlali, hile", "Yasak — otomatik bot, scraping", "Yasak — güvenlik ihlali girişimi"] },
        },
        {
          h2: "Telif Hakları",
          paragraphs: ["Site içeriği <strong>Plise Perde'ye aittir</strong>."],
          list: { type: "ol", items: ["Tüm içerik — Plise Perde telifi", "Fotoğraflar — izinsiz kullanım yasak", "Metinler — izinsiz kopyalama yasak", "Marka — pliseperde.com tescilli"] },
        },
        {
          h2: "Sorumluluk Reddi",
          paragraphs: ["Site içeriği <strong>bilgi amaçlıdır</strong>."],
          list: { type: "ul", items: ["Fiyatlar — değişebilir", "Ürün görselleri — temsilidir", "Bilgiler — güncel olabilir", "Keşif — net fiyat belirler"] },
        },
        {
          h2: "Uyuşmazlık Çözümü",
          paragraphs: ["Uyuşmazlıkta <strong>İstanbul mahkemeleri</strong> yetkilidir."],
          list: { type: "ol", items: ["Önce iletişim — WhatsApp", "Uzlaşma — mümkünse", "Mahkeme — İstanbul Pendik", "Yürürlük — 2022'den beri"] },
        },
      ]}
      faqItems={[
        { question: "Site içeriğini kopyalayabilir miyim?", answer: "Hayır, tüm içerik Plise Perde telifine aittir. İzinsiz kopyalama, fotoğraf ve metin kullanımı yasaktır." },
        { question: "Fiyatlar güncel mi?", answer: "Fiyatlar bilgi amaçlıdır ve değişebilir. Net fiyat için ücretsiz keşif talep edin." },
        { question: "Uyuşmazlıkta hangi mahkeme yetkili?", answer: "İstanbul mahkemeleri yetkilidir. Önce iletişim ve uzlaşma yoluna gidilir, mümkün değilse mahkeme yoluna başvurulur." },
        { question: "Siteyi nasıl kullanabilirim?", answer: "Siteyi yasal amaçlarla, bilgi ve iletişim için kullanabilirsiniz. Kötüye kullanım, spam, bot ve scraping yasaktır." },
        { question: "Kullanım koşulları ne zaman yürürlüğe girdi?", answer: "2022 yılından beri yürürlüktedir. Güncellemeler bu sayfada yayınlanır." },
      ]}
    />
  );
}
