import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Dikey Plise Perde — Dikey Açılan Sistem",
  description:
    "Dikey plise perde: yana açılan sistem. Uzun pencereler, katlanır cam ve cam balkon için ideal. Özel ölçü üretim, 2 yıl garanti.",
  slug: "dikey-plise-perde",
  keywords: ["dikey plise perde", "dikey açılan plise perde"],
});

export default function DikeyPlisePerdePage() {
  return (
    <PageTemplate
      title="Dikey Plise Perde"
      description="Dikey plise perde: yana açılan sistem. Uzun pencereler, katlanır cam ve cam balkon için ideal."
      slug="dikey-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Sistemleri", url: "/plise-perde-sistemleri/" }, { name: "Dikey Plise Perde", url: "/dikey-plise-perde/" }]}
      h1="Dikey Plise Perde"
      intro="Dikey plise perde, kumaşın soldan sağa veya sağdan sola açıldığı bir sistemdir. Yan profilden çekildiğinde kumaş yana toplanır, bırakıldığında pencere tamamen kapanır. Uzun pencereler, katlanır cam sistemleri ve cam balkonlar için en uygun çözümdür. Geniş pencere yüzeylerinde pratik ışık kontrolü sağlar. Özel ölçü üretim ve 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Dikey Plise Perde",
        description: "Dikey açılan plise perde sistemi. Uzun pencere ve cam balkon için ideal.",
      }}
      sections={[
        {
          h2: "Dikey Sistem Nedir?",
          paragraphs: [
            "Dikey plise perde sistemini tanımlayan en önemli özellik, kumaşın <strong>dikey düzlemde</strong> yana açılmasıdır. Bir yan profil sabit, diğer yan profil hareketlidir. Hareketli profili yana çektiğinizde kumaş yana toplanır, bıraktığınızda pencere tamamen kapanır.",
            "Bu sistem özellikle <em>geniş ve uzun pencerelerde</em> tercih edilir. Yana açılım, geniş pencere yüzeylerinde hızlı ışık kontrolü sağlar. Katlanır cam ve sürme kapı sistemleri ile uyumlu çalışır.",
          ],
        },
        {
          h2: "Dikey Sistem Avantajları",
          paragraphs: [
            "Dikey plise perde sisteminin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Geniş pencerede hızlı açılım — tek hareketle yana toplanır",
              "Katlanır cam ile uyumlu — cam açıldığında perde yana toplanır",
              "Cam balkon için ideal — geniş yüzeyde pratik kontrol",
              "Uzun pencerede estetik — dikey hatlar pencereyi uzun gösterir",
              "Sürme kapı ile uyumlu — kapı açıldığında perde yana çekilir",
              "Çift yön açılım — soldan sağa veya sağdan sola seçenek",
            ],
          },
        },
        {
          h2: "Dikey vs Yatay Sistem",
          paragraphs: [
            "Dikey ve yatay plise perde sistemleri arasındaki temel farklar:",
          ],
          table: {
            headers: ["Özellik", "Dikey Sistem", "Yatay Sistem"],
            rows: [
              ["Açılım yönü", "Sağa-sola", "Yukarı-aşağı"],
              ["Toplanma", "Yana toplanır", "Yukarı toplanır"],
              ["Pencere önü", "Bir taraf dolu kalır", "Tamamen boşalır"],
              ["Uygun alan", "Uzun pencere, cam balkon", "Mutfak, banyo, dar pencere"],
              ["Genişlik", "30-300 cm", "30-300 cm"],
              ["Yükseklik", "40-280 cm", "40-280 cm"],
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Dikey plise perde <strong>aşağıdaki mekanlar</strong> için en uygun sistemdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Cam balkon — geniş cam yüzeyinde pratik ışık kontrolü",
              "Katlanır cam — cam açıldığında perde yana toplanır",
              "Sürme kapı — kapı hareketine engel olmaz",
              "Salon — geniş pencerede hızlı açılım",
              "Otel lobisi — geniş cam yüzeyde estetik kontrol",
              "Vitrin — geniş camda ışık ve gizlilik dengesi",
            ],
          },
        },
        {
          h2: "Dikey Sistem Montajı",
          paragraphs: [
            "Dikey plise perde montajı <strong>üç şekilde</strong> yapılır:",
          ],
          list: {
            type: "ul",
            items: [
              "Vidalı montaj — yan profiller vidalar ile sabitlenir, en sağlam",
              "Yapışkanlı montaj — çift taraflı bant ile delmesiz, PVC çerçeveye ideal",
              "Kancalı montaj — sökülüp takılır, temizlik için pratik",
              "Her üç montajda da hareketli profil serbestçe yana hareket eder",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Dikey plise perde cam balkonda kullanılır mı?",
          answer: "Evet, dikey plise perde cam balkon için en ideal sistemdir. Geniş cam yüzeyde kumaş yana toplanarak hızlı ışık kontrolü sağlar. Katlanır cam sistemi ile uyumlu çalışır.",
        },
        {
          question: "Dikey plise perde sürme kapıda kullanılır mı?",
          answer: "Evet, dikey sistem sürme kapılar için idealdir. Kapı açıldığında perde yana toplanır, kapı hareketine engel olmaz. Katlanır cam ve sürme kapı sistemleri ile tam uyumlu çalışır.",
        },
        {
          question: "Dikey sistemde açılım yönü seçilebilir mi?",
          answer: "Evet, dikey sistemde açılım yönü seçilebilir. Soldan sağa veya sağdan sola açılım seçenekleri mevcuttur. Mekan düzenine ve pencere konumuna göre uygun yön belirlenir.",
        },
        {
          question: "Dikey plise perde uzun pencerede nasıl görünür?",
          answer: "Dikey sistem uzun pencerelerde estetik görünür. Dikey hatlar pencereyi daha uzun ve zarif gösterir. Geniş pencere yüzeyinde tek hareketle kumaş yana toplanır.",
        },
        {
          question: "Dikey sistemde hangi kumaşlar kullanılır?",
          answer: "Tüm kumaş tipleri dikey sistemde kullanılabilir: tül, güneşlik, yarı karartma ve blackout. Cam balkon için tül veya güneşlik, yatak odası için blackout önerilir.",
        },
      ]}
    />
  );
}
