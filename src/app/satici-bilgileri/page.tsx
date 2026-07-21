import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Satıcı Bilgileri",
  description: "Plise Perde satıcı bilgileri. Şirket, adres, iletişim, sicil bilgileri.",
  slug: "satici-bilgileri",
});

export default function SaticiBilgileriPage() {
  return (
    <PageTemplate
      title="Satıcı Bilgileri"
      description="Plise Perde satıcı bilgileri. Şirket, adres, iletişim, sicil bilgileri."
      slug="satici-bilgileri"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz" }, { name: "Satıcı Bilgileri", url: "/satici-bilgileri" }]}
      h1="Satıcı Bilgileri"
      intro="Bu sayfa, Plise Perde satıcı bilgilerini içerir. Şirket unvanı, adres, iletişim ve sicil bilgileri burada listelenir. 6502 sayılı kanun kapsamında tüketiciye sunulması gereken satıcı bilgileridir."
      schemaType="article"
      schemaData={{ headline: "Satıcı Bilgileri", description: "Şirket bilgileri." }}
      sections={[
        {
          h2: "Şirket Bilgileri",
          paragraphs: ["Satıcı <strong>şirket bilgileri</strong> aşağıda."],
          table: { headers: ["Bilgi", "Değer"], rows: [["Ünvan", "Plise Perde"], ["Adres", "Esenyalı Mah. Edebali Cad. No:13/C Pendik/İstanbul"], ["Telefon", "0540 336 38 73"], ["E-Posta", "info@pliseperde.com"], ["Web", "pliseperde.com"], ["Kuruluş", "2022"]] },
        },
        {
          h2: "İletişim",
          paragraphs: ["İletişim <strong>kanalları</strong>:"],
          list: { type: "ul", items: ["Telefon — 0540 336 38 73", "WhatsApp — 0540 336 38 73 (7/24)", "E-Posta — info@pliseperde.com", "Adres — Pendik/İstanbul", "Çalışma — Pzt-Cmt 08:00-18:00, Ölçü 08:00-21:00"] },
        },
        {
          h2: "Çalışma Alanı",
          paragraphs: ["Plise Perde <strong>üretici ve satıcı</strong> olarak çalışır."],
          list: { type: "ol", items: ["Üretim — Pendik tesis", "Montaj — İstanbul ve çevre", "Kargo — Türkiye geneli", "Yurt dışı — DHL/UPS"] },
        },
        {
          h2: "Sicil Bilgileri",
          paragraphs: ["Sicil bilgileri <strong>talep üzerine</strong> paylaşılır."],
          list: { type: "ul", items: ["MERSİS — talep üzerine", "Vergi no — talep üzerine", "Ticaret sicil — talep üzerine", "Yetki belgesi — talep üzerine"] },
        },
        {
          h2: "Şikayet ve İletişim",
          paragraphs: ["Şikayet için <strong>iletişim</strong>:"],
          list: { type: "ol", items: ["WhatsApp — ilk başvuru", "E-Posta — yazılı şikayet", "Tüketici hakem heyeti — çözümsüz durum", "TÜBİTAK — uzman gerektiren durum"] },
        },
      ]}
      faqItems={[
        { question: "Satıcı kimdir?", answer: "Plise Perde, Esenyalı Mah. Edebali Cad. No:13/C Pendik/İstanbul adresinde üretim ve satış yapan şirkettir." },
        { question: "İletişim bilgileri nedir?", answer: "Telefon: 0540 336 38 73, E-Posta: info@pliseperde.com, WhatsApp: 0540 336 38 73 (7/24)." },
        { question: "Sicil bilgilerini nasıl alırım?", answer: "MERSİS, vergi no ve ticaret sicil bilgileri WhatsApp'tan talep üzerine paylaşılır." },
        { question: "Şikayetimi nereye iletebilirim?", answer: "Önce WhatsApp'tan, sonra e-posta ile yazılı şikayet. Çözümsüz durumda tüketici hakem heyetine başvurabilirsiniz." },
        { question: "Çalışma saatleri nedir?", answer: "Pazartesi-Cumartesi 08:00-18:00, ücretsiz ölçü hizmeti 08:00-21:00, Pazar kapalı (WhatsApp 7/24)." },
      ]}
    />
  );
}
