import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Düet Plise Perde — Gece Gündüz Sistemi",
  description:
    "Düet plise perde, iki katmanlı gece-gündüz sistemidir. Gündüz ışık geçirgen, gece tam karartma. Tek perdede iki fonksiyon. 2 yıl garanti.",
  slug: "duet-perde",
});

export default function DuetPerdePage() {
  return (
    <PageTemplate
      title="Düet Plise Perde"
      description="Düet plise perde, iki katmanlı gece-gündüz sistemidir. Gündüz ışık geçirgen, gece tam karartma."
      slug="duet-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Ürünlerimiz", url: "/urunlerimiz" }, { name: "Düet Plise Perde", url: "/duet-perde" }]}
      h1="Düet Plise Perde"
      intro="Düet plise perde, iki farklı kumaş katmanını tek perdede birleştirir. Üst katman ışık geçirgen (tül/güneşlik), alt katman tam karartmadır. Gündüz üst katmanı kullanarak ışık alırsınız, gece alt katmanı indirerek tam karanlık sağlarsınız. Tek perdede iki fonksiyon — yerden tasarruf. 2 yıl garanti ile üretilir."
      schemaType="product"
      schemaData={{
        name: "Düet Plise Perde",
        description: "İki katmanlı gece-gündüz plise perde sistemi. Işık ve karartma tek perdede.",
      }}
      sections={[
        {
          h2: "Düet Perde Nedir?",
          paragraphs: [
            "Düet perde, <strong>iki katmanlı kumaş</strong> sistemidir. Üst katman ışık geçirgen, alt katman tam karartmadır. Her iki katman bağımsız olarak açılıp kapanır.",
            "Gece-gündüz perde olarak da bilinir. Gündüz ışık almak için üst katmanı, gece karanlık için alt katmanı kullanırsınız. Tek perdede iki farklı fonksiyon sağlar.",
          ],
        },
        {
          h2: "Düet Perde Avantajları",
          paragraphs: [
            "Düet perde tercih etmenizin başlıca nedenleri:",
          ],
          list: {
            type: "ul",
            items: [
              "Tek perdede iki fonksiyon — gece ve gündüz",
              "Yer tasarrufu — iki perde yerine tek perde",
              "Bağımsız katman kontrolü",
              "Hem ışık hem gizlilik çözümü",
              "Estetik görünüm — katmanlar uyumlu",
              "2 yıl garanti",
            ],
          },
        },
        {
          h2: "Kullanım Alanları",
          paragraphs: [
            "Düet perde özellikle <strong>tek pencerede hem ışık hem gizlilik</strong> isteyenler için idealdir.",
          ],
          list: {
            type: "ul",
            items: [
              "Yatak odası — gündüz ışık, gece karartma",
              "Çocuk odası — uyku saatinde karartma",
              "Oturma odası — ışık kontrolü",
              "Çalışma odası — ekran parlamasını önleme",
            ],
          },
        },
        {
          h2: "Düet Perde vs Çift Perde",
          paragraphs: [
            "Geleneksel yöntemde tül + karartma olarak iki ayrı perde takılır. Düet perde ile bu iki fonksiyon tek perdede birleşir.",
          ],
          table: {
            headers: ["Özellik", "Çift Perde", "Düet Perde"],
            rows: [
              ["Yer kaplama", "Fazla", "Az"],
              ["Maliyet", "İki perde", "Tek perde"],
              ["Kontrol", "Ayrı ayrı", "Tek sistem"],
              ["Estetik", "Kalabalık", "Sade"],
              ["Montaj", "Çift kanal", "Tek kanal"],
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Düet perde nedir?",
          answer: "Düet perde, iki katmanlı (ışık geçirgen + tam karartma) kumaşın tek perdede birleştiği sistemdir. Gündüz ışık, gece karartma sağlar.",
        },
        {
          question: "Düet perde mi çift perde mi?",
          answer: "Düet perde daha avantajlıdır. Tek perdede iki fonksiyon sağlar, yer kaplamaz, daha sade görünür ve tek kanal montaj yapılır.",
        },
        {
          question: "Düet perde katmanları bağımsız çalışır mı?",
          answer: "Evet, üst ve alt katmanlar bağımsız olarak açılıp kapanır. İstediğiniz katmanı istediğiniz konumda kullanabilirsiniz.",
        },
        {
          question: "Düet perde fiyatı ne kadar?",
          answer: "Düet perde fiyatı, iki katmanlı kumaş yapısı nedeniyle standart plise perdeden yüksektir. Ancak iki ayrı perde almaktan daha ekonomiktir.",
        },
        {
          question: "Düet perde montajı nasıl yapılır?",
          answer: "Standart plise perde montajına benzer. Tek kanal ile pencere içine monte edilir. Delmesiz montaj seçeneği de mevcuttur.",
        },
      ]}
    />
  );
}
