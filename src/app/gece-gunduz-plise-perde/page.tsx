import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Gece Gündüz Plise Perde — İki Katmanlı Model",
  description:
    "Gece gündüz plise perde: ışık geçirgen ve tam karartma iki katman tek perdede. Gündüz ışık, gece karanlık. Yer tasarrufu. 2 yıl garanti.",
  slug: "gece-gunduz-plise-perde",
});

export default function GeceGunduzPlisePerdePage() {
  return (
    <PageTemplate
      title="Gece Gündüz Plise Perde"
      description="Gece gündüz plise perde: ışık geçirgen ve tam karartma iki katman tek perdede. Gündüz ışık, gece karanlık."
      slug="gece-gunduz-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Modellerimiz", url: "/plise-perde-modelleri" }, { name: "Gece Gündüz Plise Perde", url: "/gece-gunduz-plise-perde" }]}
      h1="Gece Gündüz Plise Perde"
      intro="Gece gündüz plise perde, iki farklı kumaş katmanını tek perdede birleştiren modeldir. Üst katman ışık geçirgen (tül/güneşlik), alt katman tam karartmadır. Gündüz üst katmanı kullanarak ışık alırsınız, gece alt katmanı indirerek tam karanlık sağlarsınız. İki ayrı perde yerine tek perde — yer tasarrufu ve estetik. 2 yıl garanti ile üretilir."
      schemaType="product"
      schemaData={{
        name: "Gece Gündüz Plise Perde",
        description: "Işık geçirgen ve tam karartma iki katmanlı gece gündüz plise perde modeli.",
      }}
      sections={[
        {
          h2: "Gece Gündüz Modeli Nedir?",
          paragraphs: [
            "Gece gündüz plise perde, <strong>iki bağımsız kumaş katmanını</strong> tek perde sistemi içinde barındırır. Her katman ayrı açılıp kapanır — gündüz ışık geçirgen katman, gece tam karartma katman kullanılır.",
            "Bu model, tek pencerede hem ışık hem de gizlilik/karanlık ihtiyacını çözer. İki ayrı perde takmaya gerek yoktur — tek kanal, tek montaj, iki fonksiyon.",
          ],
        },
        {
          h2: "Gece Gündüz vs Düet Perde",
          paragraphs: [
            "Gece gündüz ve düet perde benzer sistemlerdir, ancak küçük farklar vardır:",
          ],
          table: {
            headers: ["Özellik", "Gece Gündüz", "Düet"],
            rows: [
              ["Katman yapısı", "Plise + plise", "Plise + honeycomb"],
              ["Isı yalıtımı", "Standart", "Honeycomb ile yüksek"],
              ["Ağırlık", "Orta", "Ağır"],
              ["Fiyat", "Orta", "Daha yüksek"],
              ["Kullanım", "Işık + karartma", "Işık + karartma + yalıtım"],
            ],
          },
        },
        {
          h2: "Gece Gündüz Avantajları",
          paragraphs: [
            "Gece gündüz modelinin başlıca avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Tek perde iki fonksiyon — gündüz ışık, gece karartma",
              "Yer tasarrufu — iki perde yerine tek perde",
              "Bağımsız kontrol — her katman ayrı açılır kapanır",
              "Estetik — katmanlar uyumlu, sade görünüm",
              "Ekonomik — iki perde almaktan daha avantajlı",
              "Esnek kullanım — istediğiniz katmanı istediğiniz konumda",
            ],
          },
        },
        {
          h2: "Kullanım Senaryoları",
          paragraphs: [
            "Gece gündüz plise perde <strong>gündüz-gece döngüsü</strong> olan mekanlar için idealdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Yatak odası — gündüz ışık, gece tam karanlık",
              "Çocuk odası — uyku saatinde karartma, gündüz ışık",
              "Oturma odası — film izlerken karartma, gündüz ışık",
              "Çalışma odası — ekran parlamasında karartma",
              "Shift çalışanı — gündüz uyku için karartma",
              "Misafir odası — esnek ışık kontrolü",
            ],
          },
        },
        {
          h2: "Katman Seçenekleri",
          paragraphs: [
            "Gece gündüz modelinde <strong>katman kombinasyonları</strong> özelleştirilebilir:",
          ],
          list: {
            type: "ul",
            items: [
              "Tül + blackout — gündüz ışık, gece tam karanlık",
              "Güneşlik + blackout — gündüz filtreli ışık, gece karanlık",
              "Yarı karartma + blackout — gündüz soft ışık, gece karanlık",
              "Tül + yarı karartma — gündüz ışık, gece gizlilik",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Gece gündüz plise perde nedir?",
          answer: "İki katmanlı (ışık geçirgen + tam karartma) kumaşın tek perdede birleştiği modeldir. Gündüz ışık geçirgen katman, gece tam karartma katman kullanılır.",
        },
        {
          question: "Gece gündüz mü iki ayrı perde mi?",
          answer: "Gece gündüz daha avantajlıdır. Tek perdede iki fonksiyon sağlar, yer kaplamaz, daha sade görünür ve tek kanal montaj yapılır. İki perde almaktan daha ekonomiktir.",
        },
        {
          question: "Katmanlar bağımsız çalışır mı?",
          answer: "Evet, üst ve alt katmanlar bağımsız olarak açılıp kapanır. İstediğiniz katmanı istediğiniz konumda kullanabilirsiniz.",
        },
        {
          question: "Gece gündüz ve düet perde farkı nedir?",
          answer: "Gece gündüz plise+plise katmanlara sahiptir, düet ise plise+honeycomb katmanlara sahiptir. Düet honeycomb katmanı nedeniyle ısı yalıtımı sağlar, gece gündüz ise yalıtım sağlamaz.",
        },
        {
          question: "Gece gündüz plise perde fiyatı ne kadar?",
          answer: "İki katmanlı kumaş yapısı nedeniyle standart plise perdeden yüksektir. Ancak iki ayrı perde almaktan daha ekonomiktir. Fiyat detayı için iletişime geçebilirsiniz.",
        },
      ]}
    />
  );
}
