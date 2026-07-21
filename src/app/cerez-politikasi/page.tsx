import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Çerez Politikası",
  description: "Plise Perde çerez politikası. Çerez türleri, amaçları, yönetimi. Çerez ayarları.",
  slug: "cerez-politikasi",
});

export default function CerezPolitikasiPage() {
  return (
    <PageTemplate
      title="Çerez Politikası"
      description="Plise Perde çerez politikası. Çerez türleri, amaçları, yönetimi."
      slug="cerez-politikasi"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalar", url: "/politikalarimiz" }, { name: "Çerez Politikası", url: "/cerez-politikasi" }]}
      h1="Çerez Politikası"
      intro="Bu çerez politikası, pliseperde.com web sitesinde kullanılan çerezleri açıklar. Çerezler, site deneyimini iyileştirmek ve site performansını ölçmek için kullanılır. Çerez türleri, amaçları ve yönetim seçenekleri bu sayfada detaylıca açıklanır."
      schemaType="article"
      schemaData={{ headline: "Çerez Politikası", description: "Çerez türleri, amaçları, yönetimi." }}
      sections={[
        {
          h2: "Çerez Nedir?",
          paragraphs: ["Çerez, <strong>web tarayıcınıza kaydedilen</strong> küçük metin dosyalarıdır. <em>Site fonksiyonu ve kullanıcı deneyimi</em> için kullanılır."],
        },
        {
          h2: "Çerez Türleri",
          paragraphs: ["Üç çerez türü kullanılır:"],
          table: {
            headers: ["Tür", "Amaç", "Süre", "Zorunlu mu?"],
            rows: [
              ["Zorunlu", "Site fonksiyonu", "Oturum", "Evet"],
              ["Analitik", "Ziyaret analizi", "30 gün", "Hayır"],
              ["Pazarlama", "Reklam ölçümü", "90 gün", "Hayır"],
            ],
          },
        },
        {
          h2: "Çerez Amaçları",
          paragraphs: ["Çerezler <strong>şu amaçlar</strong> için kullanılır:"],
          list: { type: "ul", items: ["Site fonksiyonu — sayfa yükleme", "Kullanıcı deneyimi — dil, tema", "Analitik — ziyaret, sayfa görüntüleme", "Pazarlama — reklam etkinliği ölçümü", "Güvenlik — kötüye kullanım önleme"] },
        },
        {
          h2: "Çerez Yönetimi",
          paragraphs: ["Çerezleri <strong>tarayıcı ayarlarından</strong> yönetebilirsiniz."],
          list: { type: "ol", items: ["Tarayıcı ayarları — çerez tercihleri", "Gizli mod — çerez kaydetmez", "Çerez silme — tarayıcı geçmişini temizle", "Çerez reddi — analitik ve pazarlama çerezleri"] },
        },
        {
          h2: "Üçüncü Taraf Çerezler",
          paragraphs: ["Üçüncü taraf <strong>çerez sağlayıcılar</strong>:"],
          list: { type: "ul", items: ["Google Analytics — ziyaret analizi", "Google Ads — reklam ölçümü", "Meta Pixel — sosyal medya ölçümü", "WhatsApp — mesaj widget"] },
        },
      ]}
      faqItems={[
        { question: "Çerez nedir?", answer: "Web tarayıcınıza kaydedilen küçük metin dosyalarıdır. Site fonksiyonu, kullanıcı deneyimi ve analiz için kullanılır." },
        { question: "Hangi çerezleri kullanıyorsunuz?", answer: "Zorunlu (site fonksiyonu), analitik (ziyaret analizi) ve pazarlama (reklam ölçümü) çerezleri kullanılır." },
        { question: "Çerezleri reddedebilir miyim?", answer: "Evet, tarayıcı ayarlarından analitik ve pazarlama çerezlerini reddedebilirsiniz. Zorunlu çerezler site fonksiyonu için gereklidir." },
        { question: "Çerezleri nasıl silerim?", answer: "Tarayıcı geçmişini temizleyerek çerezleri silebilirsiniz. Gizli mod çerez kaydetmez." },
        { question: "Üçüncü taraf çerez var mı?", answer: "Evet, Google Analytics, Google Ads, Meta Pixel ve WhatsApp widget çerezleri kullanılır. Tümü pazarlama ve analiz amaçlıdır." },
      ]}
    />
  );
}
