import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Montaj ve Uygulama Şartları",
  description: "Plise perde montaj ve uygulama şartları. Montaj süreci, garanti, sorumluluk.",
  slug: "montaj-ve-uygulama-sartlari",
});

export default function MontajUygulamaPage() {
  return (
    <PageTemplate
      title="Montaj ve Uygulama Şartları"
      description="Plise perde montaj ve uygulama şartları. Montaj süreci, garanti, sorumluluk."
      slug="montaj-ve-uygulama-sartlari"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sözleşmelerimiz", url: "/sozlesmelerimiz" }, { name: "Montaj ve Uygulama", url: "/montaj-ve-uygulama-sartlari" }]}
      h1="Montaj ve Uygulama Şartları"
      intro="Bu sayfa, plise perde montaj ve uygulama şartlarını açıklar. Montaj süreci, yerinde uygulama koşulları, garanti ve sorumluluklar burada detaylandırılır. Montaj hizmeti alarak bu şartları kabul etmiş sayılırsınız."
      schemaType="article"
      schemaData={{ headline: "Montaj ve Uygulama Şartları", description: "Montaj süreci ve garanti koşulları." }}
      sections={[
        {
          h2: "Montaj Süreci",
          paragraphs: ["Montaj <strong>4 adımda</strong> yapılır."],
          list: { type: "ol", items: ["Randevu — WhatsApp ile tarih belirlenir", "Ölçü — milimetrik son kontrol", "Montaj — 20-30 dk/pencere", "Test — açılır kapanır kontrolü"] },
        },
        {
          h2: "Montaj Bölgeleri",
          paragraphs: ["Montaj <strong>İstanbul ve çevre şehirlerde</strong> yapılır."],
          list: { type: "ul", items: ["İstanbul — tüm ilçeler", "Kocaeli, Yalova, Sakarya — ücretsiz", "Ankara, Bursa, İzmir — ücretli", "Diğer şehir — kargo + video rehber"] },
        },
        {
          h2: "Montaj Garantisi",
          paragraphs: ["Montaj <strong>2 yıl garanti</strong> ile yapılır."],
          list: { type: "ul", items: ["2 yıl montaj garantisi", "Gevşeme — ücretsiz sıkma", "Düşme — ücretsiz yeniden montaj", "Hasar — ücretsiz onarım"] },
        },
        {
          h2: "Sorumluluklar",
          paragraphs: ["Montaj sırasında <strong>müşteri sorumlulukları</strong>:"],
          list: { type: "ol", items: ["Erişim — pencere önü açık", "Mobilya — koruma altına alınır", "Elektrik — motorlu için prize erişim", "Yer — montaj ekibi için çalışma alanı"] },
        },
        {
          h2: "Montaj Sonrası",
          paragraphs: ["Montaj sonrası <strong>kontrol ve eğitim</strong> yapılır."],
          list: { type: "ul", items: ["Açılır kapanır testi — 5 döngü", "Kullanım eğitimi — ip mekanizma", "Temizlik bilgisi — bakım önerileri", "Garanti belgesi — dijital", "Servis iletişim — WhatsApp"] },
        },
      ]}
      faqItems={[
        { question: "Montaj garantisi ne kadar?", answer: "Montaj 2 yıl garanti ile yapılır. Gevşeme, düşme ve hasar durumunda ücretsiz servis sağlanır." },
        { question: "Hangi şehirlerde montaj yapılıyor?", answer: "İstanbul tüm ilçeler ve Kocaeli, Yalova, Sakarya'da ücretsiz montaj yapılır. Ankara, Bursa, İzmir'de ücretli montaj mevcuttur." },
        { question: "Montaj ne kadar sürer?", answer: "Tek pencere montajı 20-30 dakika sürer. Kumaş, profil ve mekanizma monte edilir, test yapılır." },
        { question: "Montaj sırasında ne hazırlamalıyım?", answer: "Pencere önünü açık tutun, mobilyaları koruyun, motorlu model için prize erişim sağlayın ve montaj ekibi için çalışma alanı bırakın." },
        { question: "Diğer şehirlerde montaj var mı?", answer: "Diğer şehirlerde kargo ile teslimat yapılır ve video rehber ile kendi montajınızı yapabilirsiniz. Profesyonel montaj ekibi gönderilmez." },
      ]}
    />
  );
}
