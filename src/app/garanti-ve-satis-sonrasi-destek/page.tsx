import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Garanti ve Satış Sonrası Destek",
  description: "Plise perde garanti ve satış sonrası destek. 2 yıl ürün, 5 yıl motor, servis.",
  slug: "garanti-ve-satis-sonrasi-destek",
});

export default function GarantiDestekPage() {
  return (
    <PageTemplate
      title="Garanti ve Satış Sonrası Destek"
      description="Plise perde garanti ve satış sonrası destek. 2 yıl ürün, 5 yıl motor, servis."
      slug="garanti-ve-satis-sonrasi-destek"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz" }, { name: "Garanti ve Destek", url: "/garanti-ve-satis-sonrasi-destek" }]}
      h1="Garanti ve Satış Sonrası Destek"
      intro="Bu sayfa, plise perde garanti koşullarını ve satış sonrası destek hizmetlerini açıklar. Ürün ve montaj 2 yıl, motor 5 yıl garanti ile gelir. Garanti içinde servis ve parça değişimi ücretsizdir. Yedek parça 5+ yıl tedarik edilir."
      schemaType="article"
      schemaData={{ headline: "Garanti ve Satış Sonrası Destek", description: "2 yıl ürün, 5 yıl motor garantisi." }}
      sections={[
        {
          h2: "Garanti Süreleri",
          paragraphs: ["Garanti <strong>bileşene göre</strong> değişir."],
          table: { headers: ["Bileşen", "Garanti", "Kapsam"], rows: [["Kumaş", "2 yıl", "Üretim hatası"], ["Profil", "2 yıl", "Üretim hatası"], ["İp mekanizması", "2 yıl", "Mekanizma hatası"], ["Montaj", "2 yıl", "Montaj kusuru"], ["Motor", "5 yıl", "Motor arızası"]] },
        },
        {
          h2: "Garanti Kapsamı",
          paragraphs: ["Garanti <strong>üretim ve montaj hatalarını</strong> kapsar."],
          list: { type: "ul", items: ["Kumaş yırtılması — üretim hatası", "Profil kırılması — üretim hatası", "İp kopması — mekanizma hatası", "Montaj gevşemesi — montaj kusuru", "Motor arızası — motor hatası"] },
        },
        {
          h2: "Garanti Dışı",
          paragraphs: ["Aşağıdaki durumlar <strong>garanti dışıdır</strong>."],
          list: { type: "ul", items: ["Kullanım hatası — zorlama", "Doğal yıpranma — 5+ yıl", "Dış müdahale — kullanıcı", "Doğal afet — yangın, su", "Kimyasal hasar — ağartıcı"] },
        },
        {
          h2: "Servis Süreci",
          paragraphs: ["Servis <strong>WhatsApp'tan</strong> talep edilir."],
          list: { type: "ol", items: ["WhatsApp — fotoğraf gönder", "Değerlendirme — 24 saat", "Servis randevusu — 3-5 gün", "Onarım veya değişim — ücretsiz", "Test — açılır kapanır kontrol"] },
        },
        {
          h2: "Yedek Parça",
          paragraphs: ["Yedek parça <strong>5+ yıl tedarik</strong> garantisi vardır."],
          list: { type: "ul", items: ["Kumaş — 5+ yıl tedarik", "Profil — 5+ yıl tedarik", "İp mekanizması — 5+ yıl", "Motor — 5+ yıl", "Aksesuar — 5+ yıl"] },
        },
      ]}
      faqItems={[
        { question: "Garanti süresi ne kadar?", answer: "Ürün ve montaj 2 yıl, motorlu modellerde motor 5 yıl garanti ile gelir." },
        { question: "Garanti neyi kapsar?", answer: "Üretim hataları (kumaş yırtılması, profil kırılması), mekanizma hatası (ip kopması) ve montaj kusurlarını kapsar." },
        { question: "Servis nasıl talep edilir?", answer: "WhatsApp'tan fotoğraf gönderin, 24 saat içinde değerlendirme yapılır. Servis randevusu 3-5 gün içinde planlanır." },
        { question: "Yedek parça tedariki ne kadar?", answer: "Yedek parça 5+ yıl tedarik garantisi vardır. Kumaş, profil, mekanizma ve motor yedek parçaları mevcuttur." },
        { question: "Garanti dışı durumlar neler?", answer: "Kullanım hatası, doğal yıpranma, dış müdahale, doğal afet ve kimyasal hasar garanti dışıdır." },
      ]}
    />
  );
}
