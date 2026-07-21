import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Hakkımızda — Plise Perde Üretici",
  description:
    "Plise Perde olarak 2022'den beri üretici ve montaj hizmeti veriyoruz. Pendik merkezli, Türkiye geneli hizmet, 2 yıl garanti.",
  slug: "hakkimizda",
});

export default function HakkimizdaPage() {
  return (
    <PageTemplate
      title="Hakkımızda"
      description="Plise Perde olarak 2022'den beri üretici ve montaj hizmeti veriyoruz. Pendik merkezli, Türkiye geneli hizmet."
      slug="hakkimizda"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kurumsal", url: "/hakkimizda" }, { name: "Hakkımızda", url: "/hakkimizda" }]}
      h1="Hakkımızda — Plise Perde"
      intro="Plise Perde, 2022 yılında İstanbul Pendik'te kurulmuş bir plise perde üreticisidir. Kuruluşumuzdan bu yana üretici olarak doğrudan tüketiciye hizmet veriyoruz. Ara katman maliyeti olmadan, üretici fiyatı ile kaliteli plise perde çözümleri sunuyoruz. Türkiye geneli ücretsiz keşif, profesyonel montaj ve 2 yıl garanti ile yanınızdayız."
      schemaType="article"
      schemaData={{
        headline: "Hakkımızda — Plise Perde",
        description: "2022'den beri plise perde üretici ve montaj hizmeti.",
      }}
      sections={[
        {
          h2: "Şirket Profili",
          paragraphs: [
            "Plise Perde, <strong>2022 yılında İstanbul Pendik'te</strong> kurulmuştur. Esenyalı Mahallesi Edebali Caddesi No:13/C adresindeki üretim tesisimizde tüm plise perde modellerini üretiyoruz.",
            "Üretici olarak <em>doğrudan tüketiciye</em> hizmet veriyoruz. Bu sayede ara katman maliyeti olmadan, <u>üretici fiyatı</u> ile kaliteli ürün sunuyoruz.",
          ],
          table: {
            headers: ["Bilgi", "Değer"],
            rows: [
              ["Kuruluş yılı", "2022"],
              ["Merkez", "İstanbul / Pendik"],
              ["Üretim tesisi", "Esenyalı Mah. Edebali Cad."],
              ["Hizmet bölgesi", "Türkiye geneli"],
              ["Çalışan sayısı", "15+"],
              ["Üretilen model", "10+ plise perde tipi"],
            ],
          },
        },
        {
          h2: "Misyonumuz",
          paragraphs: [
            "Misyonumuz, <strong>her eve uygun plise perde çözümü</strong> sunmaktır. Üretici olarak kaliteli ürünü uygun fiyat ile tüketiciye ulaştırmak önceliğimizdir.",
          ],
          list: {
            type: "ul",
            items: [
              "Üretici fiyatı — ara katman yok",
              "Kaliteli malzeme — dayanıklı kumaş",
              "Profesyonel montaj — deneyimli ekip",
              "2 yıl garanti — ürün ve montaj",
              "Türkiye geneli — ücretsiz keşif",
              "Müşteri memnuniyeti — 7/24 destek",
            ],
          },
        },
        {
          h2: "Üretim Sürecimiz",
          paragraphs: [
            "Üretim tesisimizde <strong>her modeli sıfırdan üretiyoruz</strong>. Kumaş kesimi, profil hazırlığı, mekanizma montajı ve kalite kontrol adımları tamamen bizde yapılır.",
          ],
          list: {
            type: "ol",
            items: [
              "Kumaş seçimi — polyester, UV korumalı, karartma",
              "Profil hazırlığı — alüminyum ve PVC",
              "Mekanizma montajı — ip, motor, kanal",
              "Kalite kontrol — açılır kapanır testi",
              "Paketleme — çift kat koruma",
              "Sevkiyat — kargo veya montaj ekibi",
            ],
          },
        },
        {
          h2: "Hizmet Bölgelerimiz",
          paragraphs: [
            "İstanbul merkezli olarak <strong>Türkiye'nin 23 şehrine</strong> hizmet veriyoruz. İstanbul ve çevre şehirlerde ücretsiz keşif + montaj, diğer şehirlerde kargo + video montaj desteği sağlıyoruz.",
          ],
          table: {
            headers: ["Bölge", "Hizmet", "Keşif"],
            rows: [
              ["İstanbul", "Keşif + montaj", "Ücretsiz"],
              ["Kocaeli, Yalova, Sakarya", "Keşif + montaj", "Ücretsiz"],
              ["Ankara, İzmir, Bursa", "Kargo + montaj", "Video keşif"],
              ["Diğer şehirler", "Kargo + video destek", "Video keşif"],
            ],
          },
        },
        {
          h2: "İletişim",
          paragraphs: [
            "Bize <strong>WhatsApp, telefon veya e-posta</strong> ile ulaşabilirsiniz. Üretim tesisimizi ziyaret edebilir, ürünleri yerinde inceleyebilirsiniz.",
          ],
          list: {
            type: "ul",
            items: [
              "Telefon: 0540 336 3873",
              "E-Posta: info@pliseperde.com",
              "Adres: Esenyalı Mah. Edebali Cad. No:13/C Pendik/İstanbul",
              "WhatsApp: 7/24 mesaj atabilirsiniz",
              "Üretim tesisi ziyareti: Randevu ile",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise Perde ne zaman kuruldu?",
          answer: "2022 yılında İstanbul Pendik'te kurulmuştur. O günden beri üretici olarak doğrudan tüketiciye hizmet veriyoruz.",
        },
        {
          question: "Üretim tesisiniz nerede?",
          answer: "İstanbul Pendik, Esenyalı Mahallesi Edebali Caddesi No:13/C adresinde üretim tesisimiz bulunmaktadır. Randevu ile ziyaret edebilirsiniz.",
        },
        {
          question: "Hangi şehirlere hizmet veriyorsunuz?",
          answer: "Türkiye'nin 23 şehrine hizmet veriyoruz. İstanbul ve çevre şehirlerde ücretsiz keşif + montaj, diğer şehirlerde kargo + video montaj desteği sağlıyoruz.",
        },
        {
          question: "Üretici mı yoksa bayi misiniz?",
          answer: "Üreticiyiz. Kendi üretim tesisimizde tüm plise perde modellerini üretiyoruz. Ara katman maliyeti olmadan üretici fiyatı ile hizmet veriyoruz.",
        },
        {
          question: "Garanti veriyor musunuz?",
          answer: "Evet, tüm ürün ve montaj 2 yıl garanti ile gelir. Motorlu modellerde motor 5 yıl garanti kapsamındadır. Garanti kapsamında servis ücretsizdir.",
        },
      ]}
    />
  );
}
