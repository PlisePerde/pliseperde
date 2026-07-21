import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "SSS — Plise Perde Sıkça Sorulan Sorular",
  description:
    "Plise perde sıkça sorulan sorular. Fiyat, montaj, modeller, garanti, temizlik hakkında merak edilen her şey.",
  slug: "sss",
});

export default function SSSPage() {
  return (
    <PageTemplate
      title="SSS — Sıkça Sorulan Sorular"
      description="Plise perde sıkça sorulan sorular. Fiyat, montaj, modeller, garanti, temizlik hakkında merak edilen her şey."
      slug="sss"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kurumsal", url: "/hakkimizda" }, { name: "SSS", url: "/sss" }]}
      h1="SSS — Plise Perde Sıkça Sorulan Sorular"
      intro="Plise perde hakkında en sık sorulan soruları ve cevaplarını bu sayfada topladık. Fiyat, montaj, modeller, garanti, temizlik ve kullanım hakkında merak ettiğiniz her şeyi bulabilirsiniz. Aradığınız soruyu bulamazsanız WhatsApp'tan bize ulaşın, en kısa sürede yanıtlayalım."
      schemaType="article"
      schemaData={{
        headline: "SSS — Plise Perde Sıkça Sorulan Sorular",
        description: "Plise perde hakkında sıkça sorulan sorular ve cevapları.",
      }}
      sections={[
        {
          h2: "Fiyat ve Ödeme",
          paragraphs: [
            "Fiyat; pencere ölçüsü, model ve montaj tipine göre belirlenir. <strong>M² bazında 450-3500 TL</strong> aralığında seçenek mevcuttur. Ücretsiz keşif ile net fiyat öğrenilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Tül — 450-900 TL/m²",
              "Honeycomb petek — 990-1500 TL/m²",
              "Motorlu — 1800-3500 TL/m²",
              "Montaj — 100-300 TL/pencere",
              "Ödeme — nakit, kart, taksit, havale",
            ],
          },
        },
        {
          h2: "Montaj ve Keşif",
          paragraphs: [
            "Montaj <strong>profesyonel ekip</strong> tarafından yapılır. İstanbul ve çevre şehirlerde <em>ücretsiz keşif</em> mevcuttur. Diğer şehirlerde video keşif desteği sağlanır.",
          ],
          table: {
            headers: ["Soru", "Cevap"],
            rows: [
              ["Keşif ücretli mi?", "Hayır, tamamen ücretsiz"],
              ["Montaj ne kadar sürer?", "Tek pencere 20-30 dk"],
              ["Hangi şehirlerde montaj var?", "Türkiye geneli"],
              ["Montaj garantisi var mı?", "Evet, 2 yıl"],
            ],
          },
        },
        {
          h2: "Modeller ve Seçim",
          paragraphs: [
            "7 ana model mevcuttur. <strong>Işık geçirgenliği ve kullanım amacına</strong> göre model seçilir. Kararsız kaldığınızda ücretsiz keşif sırasında öneri alabilirsiniz.",
          ],
          list: {
            type: "ol",
            items: [
              "Tül — %70 ışık, doğal aydınlatma",
              "Güneşlik — %30-40 ışık, güneş filtreleme",
              "Yarı karartma — %15-20 ışık, gizlilik",
              "Tam karartma — %1 ışık, tam karanlık",
              "Honeycomb — ısı ve ses yalıtımı",
              "Gece gündüz — iki fonksiyon",
              "Motorlu — uzaktan kumanda",
            ],
          },
        },
        {
          h2: "Garanti ve Servis",
          paragraphs: [
            "Tüm ürün ve montaj <strong>2 yıl garanti</strong> ile gelir. Motorlu modellerde motor <em>5 yıl garanti</em> kapsamındadır. Garanti içinde servis ücretsizdir.",
          ],
          list: {
            type: "ul",
            items: [
              "Ürün garantisi — 2 yıl",
              "Montaj garantisi — 2 yıl",
              "Motor garantisi — 5 yıl",
              "Yedek parça — 5+ yıl tedarik",
              "Servis — garanti içi ücretsiz",
            ],
          },
        },
        {
          h2: "Temizlik ve Bakım",
          paragraphs: [
            "Plise perde temizliği <strong>nemli bez ile silme</strong> yöntemiyle yapılır. Makine yıkaması önerilmez. <em>Haftada toz alma, ayda nemli silme</em> yeterlidir.",
          ],
          table: {
            headers: ["Soru", "Cevap"],
            rows: [
              ["Makinede yıkanır mı?", "Hayır, nemli bez ile silin"],
              ["Ne sıklıkta temizlenir?", "Haftada toz, ayda silme"],
              ["Profesyonel temizlik var mı?", "Evet, 50-100 TL/pencere"],
              ["Kumaş çıkarılabilir mi?", "Evet, çıkarılabilir"],
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde fiyatı ne kadar?",
          answer: "M² bazında 450-3500 TL aralığında model seçenekleri mevcuttur. Tül en ekonomik, motorlu en yüksek fiyatlı modeldir. Ücretsiz keşif ile net fiyat öğrenilir.",
        },
        {
          question: "Ücretsiz keşif var mı?",
          answer: "Evet, İstanbul ve çevre şehirlerde tamamen ücretsiz keşif yapılır. Diğer şehirlerde video keşif desteği sağlanır. Keşif sonrası sipariş zorunluluğu yoktur.",
        },
        {
          question: "Plise perde garantisi ne kadar?",
          answer: "Tüm ürün ve montaj 2 yıl garanti ile gelir. Motorlu modellerde motor 5 yıl garanti kapsamındadır. Garanti içinde servis ve parça değişimi ücretsizdir.",
        },
        {
          question: "Plise perde nasıl temizlenir?",
          answer: "Nemli bez ile silme yöntemiyle temizlenir. 30 derece ılık su ve hafif deterjan kullanın. Makine yıkaması önerilmez. Haftada toz alma, ayda nemli silme yeterlidir.",
        },
        {
          question: "Hangi modeli seçmeliyim?",
          answer: "Doğal ışık için tül, güneş filtreleme için güneşlik, gizlilik için yarı/tam karartma, ısı yalıtımı için honeycomb, esnek kullanım için gece gündüz, konfor için motorlu model tercih edin. Kararsız kalırsanız ücretsiz keşif sırasında öneri alın.",
        },
      ]}
    />
  );
}
