import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde — Özel Ölçü Üretim",
  description:
    "Plise perde özel ölçü üretim. Tül, güneşlik, karartma kumaş seçenekleri. 2 yıl garanti, ücretsiz keşif, profesyonel montaj. Türkiye geneli hizmet.",
  slug: "plise-perde",
  keywords: ["plise perdeler"],
});

export default function PlisePerdePage() {
  return (
    <PageTemplate
      title="Plise Perde"
      description="Plise perde özel ölçü üretim. Tül, güneşlik, karartma kumaş seçenekleri. 2 yıl garanti, ücretsiz keşif, profesyonel montaj."
      slug="plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Ürünlerimiz", url: "/urunlerimiz" }, { name: "Plise Perde", url: "/plise-perde" }]}
      h1="Plise Perde"
      intro="Plise perde, katlanır kumaş yapısıyla pencerede şık ve pratik bir gölgeleme çözümüdür. Özel ölçü üretim yaparız — her pencere boyutuna uygun. Tül, güneşlik, yarı karartma ve tam karartma kumaş seçenekleri sunarız. 2022'den beri üretici olarak hizmet veriyoruz. 2 yıl garanti, ücretsiz keşif ve profesyonel montaj ile Türkiye geneli hizmet."
      schemaType="product"
      schemaData={{
        name: "Plise Perde",
        description: "Özel ölçü plise perde üretimi. Tül, güneşlik, karartma kumaş seçenekleri.",
      }}
      sections={[
        {
          h2: "Plise Perde Nedir?",
          paragraphs: [
            "Plise perde, kumaşın <strong>akordeon gibi katlanarak</strong> açılıp kapanan bir perde sistemidir. Üst ve alt kanallar arasında gerilen kumaş, ip mekanizması ile hareket eder. Açıldığında kat kat toplanır, kapandığında pencereyi tam örter.",
            "Diğer perde türlerinden farkı: <em>hafif olması, az yer kaplaması ve pencere içinde montaj</em> yapılmasıdır. Stor ve zebra perdelere göre daha yumuşak bir görünüm sunar.",
          ],
        },
        {
          h2: "Kumaş Seçenekleri",
          paragraphs: [
            "Plise perde kumaşı <strong>ihtiyacınıza göre</strong> seçilir. Odanın fonksiyonu, ışık ihtiyacı ve gizlilik beklentisi belirleyicidir.",
          ],
          table: {
            headers: ["Kumaş Tipi", "Işık Geçirgenliği", "Kullanım Alanı"],
            rows: [
              ["Tül", "Yüksek", "Oturma odası, mutfak"],
              ["Güneşlik", "Orta", "Çalışma odası, salon"],
              ["Yarı Karartma", "Düşük", "Yatak odası, çocuk odası"],
              ["Tam Karartma", "Sıfır", "Yatak odası, sinema odası"],
            ],
          },
        },
        {
          h2: "Ölçü ve Üretim",
          paragraphs: [
            "Her plise perde <strong>özel ölçü</strong> üretilir. Pencere genişlik ve yüksekliği milimetrik alınır. Üretim 2-4 iş gününde tamamlanır. Ölçü alma desteği ücretsizdir.",
          ],
          list: {
            type: "ol",
            items: [
              "Ücretsiz keşif ve ölçü alma",
              "Kumaş ve profil seçimi",
              "Özel ölçü üretim (2-4 iş günü)",
              "Profesyonel montaj",
              "2 yıl garanti belgesi",
            ],
          },
        },
        {
          h2: "Plise Perde Avantajları",
          paragraphs: [
            "Plise perde tercih etmenizin başlıca nedenleri:",
          ],
          list: {
            type: "ul",
            items: [
              "Pencere içinde montaj — yer kaplamaz",
              "Hafif kumaş — kolay açılır kapanır",
              "Üstten-alttan veya ortadan açılım seçeneği",
              "Delmesiz montaj mümkün (kira evi dostu)",
              "Çocuk güvenliği — ipleme riski yok",
              "2 yıl garanti",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde ne kadar sürede üretilir?",
          answer: "Özel ölçü üretim 2-4 iş gününde tamamlanır. Kumaş stoğu mevcut ise aynı gün üretim de mümkündür.",
        },
        {
          question: "Plise perde montajı delmesiz yapılır mı?",
          answer: "Evet, yapışkanlı veya kancalı montaj tipi ile delmesiz montaj yapılır. Kiracılar için idealdir.",
        },
        {
          question: "Plise perde fiyatı ne kadar?",
          answer: "Fiyat; pencere ölçüsü, kumaş tipi ve montaj tipine göre değişir. Fiyat hesaplama aracımızı kullanarak net fiyat alabilirsiniz.",
        },
        {
          question: "Plise perde temizliği nasıl yapılır?",
          answer: "Plise perde kumaşı toz tutmaz. Nemli bez ile silinerek temizlenir. Derin temizlik için kumaş sökülüp yıkanabilir.",
        },
        {
          question: "Türkiye geneli hizmet veriyor musunuz?",
          answer: "Evet, İstanbul'da ücretsiz keşif ve montaj yapılırız. Diğer şehirlerde kargo ile ürün gönderilir ve video montaj desteği sağlanır.",
        },
      ]}
    />
  );
}
