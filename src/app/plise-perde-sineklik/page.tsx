import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde + Sineklik — Çift Katmanlı Sistem",
  description:
    "Plise perde + sineklik: bir tarafı plise perde veya honeycomb, diğer tarafı plise sineklik. Çift katmanlı sistem, sinek koruması + ışık kontrolü. Özel ölçü üretim, 2 yıl garanti.",
  slug: "plise-perde-sineklik",
  keywords: ["plise perde sineklik", "plise perde + sineklik", "sinekliklı plise perde"],
});

export default function PlisePerdeSineklikPage() {
  return (
    <PageTemplate
      title="Plise Perde + Sineklik"
      description="Plise perde + sineklik: çift katmanlı sistem. Bir taraf plise perde, diğer taraf plise sineklik."
      slug="plise-perde-sineklik"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Modellerimiz", url: "/plise-perde-modelleri" }, { name: "Plise Perde + Sineklik", url: "/plise-perde-sineklik" }]}
      h1="Plise Perde + Sineklik"
      intro="Plise perde + sineklik, <strong>çift katmanlı bir modeldir</strong>. Bir tarafı plise perde veya honeycomb kumaş, diğer tarafı plise sineklik tül olarak üretilir. Tek profilde iki fonksiyon: sinek koruması + ışık ve gizlilik kontrolü. Sıcak aylarda pencere açıkken sinekleri engeller, aynı zamanda ışık kontrolü sağlar. Özel ölçü üretim ve 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Plise Perde + Sineklik",
        description: "Çift katmanlı plise perde + sineklik sistemi.",
      }}
      sections={[
        {
          h2: "Plise Perde + Sineklik Nedir?",
          paragraphs: [
            "Plise perde + sineklik, <strong>tek profilde iki katmanlı</strong> çalışan bir modeldir. Profilin bir tarafında plise perde kumaşı (tül, güneşlik, honeycomb veya blackout), diğer tarafında ince plise sineklik tülü bulunur.",
            "Her iki katman da <em>bağımsız çalışır</em>. Sineklik sabit kalırken perde açılıp kapanabilir. Pencere açıkken sineklik sinekleri ve böcekleri engeller, perde ise ışık ve gizlilik kontrolü sağlar.",
            "Bu model özellikle <strong>yaz aylarında pencere açık tutmak isteyen</strong> ama sinek girmesini de engellemek isteyenler için idealdir.",
          ],
        },
        {
          h2: "Çift Katmanlı Sistem Avantajları",
          paragraphs: [
            "Plise perde + sineklik modelinin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Tek profilde iki fonksiyon — sineklik + perde",
              "Bağımsız çalışır — sineklik sabit, perde hareketli",
              "Sinek koruması — pencere açıkken sinek ve böcek engeli",
              "Işık kontrolü — perde ile ışık ve gizlilik ayarı",
              "Yer tasarrufu — iki ayrı sistem yerine tek profil",
              "Estetik — tek profil, temiz görünüm",
              "Yaz kış kullanım — kışın sineklik toplanır, sadece perde",
            ],
          },
        },
        {
          h2: "Sistem Nasıl Çalışır?",
          paragraphs: [
            "Plise perde + sineklik sisteminin çalışma mantığı:",
          ],
          list: {
            type: "ol",
            items: [
              "Profilin dış tarafında sineklik tülü, iç tarafında plise perde kumaşı bulunur",
              "Sineklik sabit monte edilir — pencere açıkken sürekli koruma sağlar",
              "Perde bağımsız açılıp kapanır — ışık ve gizlilik kontrolü",
              "Pencere kapalıyken sineklik toplanır, sadece perde kullanılır",
              "Pencere açıkken sineklik açılır, perde istenildiği gibi ayarlanır",
            ],
          },
        },
        {
          h2: "Katman Seçenekleri",
          paragraphs: [
            "Plise perde + sineklik modelinde <strong>perde katmanı seçilebilir</strong>:",
          ],
          table: {
            headers: ["Perde Katmanı", "Işık", "Gizlilik", "Uygun Mevsim"],
            rows: [
              ["Tül + Sineklik", "%70-85", "Az", "Yaz — hafif ışık + sinek koruması"],
              ["Güneşlik + Sineklik", "%30-50", "İyi", "Yaz — güneş filtreleme + sinek koruması"],
              ["Honeycomb + Sineklik", "%5-50", "İyi", "Yaz/Kış — ısı yalıtımı + sinek koruması"],
              ["Blackout + Sineklik", "%0", "Tam", "Yaz — tam karartma + sinek koruması"],
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Plise perde + sineklik <strong>aşağıdaki mekanlar</strong> için en uygun modeldir:",
          ],
          list: {
            type: "ul",
            items: [
              "Mutfak — pencere açıkken sinek girmesini engeller",
              "Yatak odası — yazın açık pencerede sinek koruması",
              "Çocuk odası — güvenli hava akışı + sinek engeli",
              "Banyo ve WC — havalandırma sırasında sinek koruması",
              "Kırsal alan — sinek ve böcek yoğun bölgelerde ideal",
              "Cam balkon — açık camlarda sinek koruması + perde",
              "Yazlık ev — sezon boyunca sinek koruması",
            ],
          },
        },
        {
          h2: "Montaj Seçenekleri",
          paragraphs: [
            "Plise perde + sineklik montajı <strong>üç şekilde</strong> yapılır:",
          ],
          list: {
            type: "ul",
            items: [
              "Vidalı montaj — profil vidalar ile çerçeveye sabitlenir, en sağlam",
              "Yapışkanlı montaj — çift taraflı bant ile delmesiz, PVC çerçeveye ideal",
              "Kancalı montaj — sökülüp takılır, temizlik için pratik",
              "Her üç montajda da sineklik ve perde bağımsız çalışır",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde + sineklik nedir?",
          answer: "Plise perde + sineklik, tek profilde iki katmanlı çalışan bir modeldir. Bir tarafı plise perde kumaşı (tül, güneşlik, honeycomb veya blackout), diğer tarafı plise sineklik tülü. Sineklik sabit kalırken perde bağımsız açılıp kapanır.",
        },
        {
          question: "Plise perde + sineklik nasıl çalışır?",
          answer: "Profilin dış tarafında sineklik, iç tarafında perde bulunur. Sineklik sabit, perde hareketlidir. Pencere açıkken sineklik sinekleri engeller, perde ışık kontrolü sağlar. Pencere kapalıyken sineklik toplanır, sadece perde kullanılır.",
        },
        {
          question: "Hangi perde kumaşı sineklik ile kullanılır?",
          answer: "Tüm kumaş tipleri sineklik ile kullanılabilir: tül, güneşlik, honeycomb ve blackout. Yaz için tül veya güneşlik, ısı yalıtımı için honeycomb, tam karartma için blackout önerilir.",
        },
        {
          question: "Plise perde + sineklik mutfakta kullanılır mı?",
          answer: "Evet, mutfak için ideal bir modeldir. Pencere açıkken sinek girmesini engeller, aynı zamanda ışık kontrolü sağlar. Mutfakta havalandırma sırasında sinek koruması önemlidir.",
        },
        {
          question: "Sineklik ve perde bağımsız çalışır mı?",
          answer: "Evet, sineklik ve perde bağımsız çalışır. Sineklik sabit kalırken perde açılıp kapanabilir. İstediğiniz zaman sadece perdeyi kullanabilir, sinekliği toplayabilirsiniz.",
        },
        {
          question: "Plise perde + sineklik fiyatı ne kadar?",
          answer: "Çift katmanlı sistem olduğu için tek katmanlı plise perdeden biraz daha yüksektir. Perde kumaşı tipine (tül, güneşlik, honeycomb, blackout) göre fiyat değişir. Özel ölçü üretim yapılır.",
        },
      ]}
    />
  );
}
