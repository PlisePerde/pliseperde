import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Prefabrik Ev Plise Perde — Hafif Yapı, Yapışkanlı Montaj, Isı Yalıtımı",
  description:
    "Prefabrik ev için plise perde: hafif yapı, yapışkanlı montaj ile delmeden takma, honeycomb ile ısı yalıtımı, ekonomik fiyat. Montaj dahil, 2 yıl garanti.",
  slug: "prefabrik-ev-plise-perde",
});

export default function PrefabrikEvPlisePerdePage() {
  return (
    <PageTemplate
      title="Prefabrik Ev Plise Perde"
      description="Prefabrik ev için hafif yapı, yapışkanlı montaj, honeycomb ısı yalıtımı plise perde."
      slug="prefabrik-ev-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Prefabrik Ev", url: "/prefabrik-ev-plise-perde" }]}
      h1="Prefabrik Ev Plise Perde"
      intro="Prefabrik evlerde <strong>hafif yapı ve ısı yalıtımı</strong> en kritik faktörlerdir. Prefabrik duvarlar standart evlerden daha incedir, pencere profilleri farklıdır ve yapıya delme yapılmak istenmez. Standart perde sistemleri prefabrik eve ağır gelir, montaj için delme gerektirir ve ısı yalıtımı sağlamaz. Plise perde, <strong>yapışkanlı montaj ile delmeden takılır, hafif kumaş ile yapıya yük bindirmez ve honeycomb kumaş ile ısı yalıtımı</strong> sağlar. Prefabrik ev yaşamı için en uygun perde sistemidir."
      schemaType="service"
      schemaData={{
        name: "Prefabrik Ev Plise Perde",
        description: "Prefabrik ev için hafif, yapışkanlı montaj, honeycomb plise perde.",
      }}
      sections={[
        {
          h2: "Prefabrik Evde Perde Zorlukları",
          paragraphs: [
            "Prefabrik evlerde perde seçimi <strong>4 ana zorluk</strong> içerir:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>Hafif yapı</strong> — prefabrik duvarlara ağır perde takılmaz, yük bindirmez",
              "<strong>Delme kısıtı</strong> — prefabrik panele delme yapılmak istenmez",
              "<strong>İnce duvar</strong> — ısı yalıtımı düşük, pencerede ısı kaybı yüksek",
              "<strong>Özel profil</strong> — prefabrik pencere profilleri standart dışı",
            ],
          },
        },
        {
          h2: "Prefabrik Ev İçin Plise Perde Çözümü",
          paragraphs: [
            "Plise perde bu zorlukları <strong>tek sistemle</strong> çözer:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Yapışkanlı montaj</strong> — prefabrik panele delmeden, çift taraflı bant ile takılır",
              "<strong>Hafif kumaş</strong> — polyester kumaş çok hafif, yapıya yük bindirmez",
              "<strong>Honeycomb ısı yalıtımı</strong> — petek yapısı ısı kaybını %30-40 azaltır",
              "<strong>Özel profil uyumu</strong> — her prefabrik pencere profiline birebir yapılır",
              "<strong>Pencere içi montaj</strong> — prefabrik evin dar alanında yer kaplamaz",
              "<strong>Ekonomik fiyat</strong> — prefabrik ev bütçesine uygun",
            ],
          },
        },
        {
          h2: "Prefabrik Ev Odalarına Göre Çözümler",
          paragraphs: [
            "Prefabrik evin odaları <strong>farklı ihtiyaç</strong> gerektirir:",
          ],
          table: {
            headers: ["Oda", "Önerilen Kumaş", "Montaj", "Öncelik"],
            rows: [
              ["Oturma odası", "Güneşlik / honeycomb", "Yapışkanlı / vidalı", "Isı + ışık"],
              ["Yatak odası", "Honeycomb karartma", "Yapışkanlı", "Isı + uyku"],
              ["Mutfak", "Tül / güneşlik", "Yapışkanlı", "Işık + nem"],
              ["Banyo", "Tam karartma + nem", "Yapışkanlı", "Gizlilik + nem"],
              ["Çocuk odası", "Yarı karartma", "Yapışkanlı", "Güvenlik + ışık"],
            ],
          },
        },
        {
          h2: "Prefabrik Ev Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Prefabrik ev pencereleri genellikle <strong>standart boyutta</strong> ve ekonomiktir:",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Güneşlik", "Honeycomb", "Karartma"],
            rows: [
              ["80x120 cm (standart)", "0.96 m²", "960-1.440 TL", "1.728-2.688 TL", "1.344-1.920 TL"],
              ["100x120 cm (büyük)", "1.20 m²", "1.200-1.800 TL", "2.160-3.360 TL", "1.680-2.400 TL"],
              ["120x150 cm (geniş)", "1.80 m²", "1.800-2.700 TL", "3.240-5.040 TL", "2.520-3.600 TL"],
              ["Tüm ev (5-6 pencere)", "5-6 m²", "5.000-8.000 TL", "9.000-15.000 TL", "7.000-12.000 TL"],
            ],
          },
        },
        {
          h2: "Prefabrik Ev İçin Honeycomb Avantajı",
          paragraphs: [
            "Prefabrik evde <strong>honeycomb plise perde</strong> neredeyse zorunludur:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>İnce duvar kompanzasyon</strong> — prefabrik duvar ısı yalıtımı düşük, honeycomb tamamlar",
              "<strong>Kışın sıcak</strong> — ısı kaybını %30-40 azaltır, kalorifer faturası düşer",
              "<strong>Yazın serin</strong> — ısı girişini engeller, klima yükü azalır",
              "<strong>Enerji tasarrufu</strong> — %15-20 enerji tasarrufu, prefabrik evde daha belirgin",
              "<strong>Hafif yapı</strong> — honeycomb kumaş da hafiftir, yapıya yük bindirmez",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Prefabrik eve plise perde takılır mı?",
          answer: "Evet, yapışkanlı montaj ile prefabrik panele delmeden takılır. Hafif kumaş ile yapıya yük bindirmez. Honeycomb kumaş ile ısı yalıtımı sağlanır.",
        },
        {
          question: "Prefabrik ev perdesi nasıl takılır?",
          answer: "Yapışkanlı montaj ile pencere profiline çift taraflı bant ile takılır. Delme gerekmez, prefabrik panele zarar vermez. Vidalı montaj da mümkündür ancak delme istenmez.",
        },
        {
          question: "Prefabrik ev plise perde fiyatı ne kadar?",
          answer: "80x120 cm standart pencere için güneşlik 960-1.440 TL, honeycomb 1.728-2.688 TL. Tüm ev (5-6 pencere) için 5.000-15.000 TL aralığındadır.",
        },
        {
          question: "Prefabrik evde honeycomb perde şart mı?",
          answer: "Önerilir. Prefabrik duvarlar ince olduğu için ısı yalıtımı düşüktür. Honeycomb kumaş ısı kaybını %30-40 azaltır, enerji tasarrufu sağlar. Prefabrik evde honeycomb avantajı daha belirgindir.",
        },
      ]}
    />
  );
}
