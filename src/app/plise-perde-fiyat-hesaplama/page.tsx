import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import PriceCalculator from "@/components/PriceCalculator";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Fiyat Hesaplama — Online Hesaplayıcı",
  description:
    "Plise perde fiyat hesaplama aracı. Pencere ölçüsü, model ve montaj tipi seçerek net fiyat hesaplayın. Ücretsiz keşif ile doğrulayın.",
  slug: "plise-perde-fiyat-hesaplama",
});

export default function FiyatHesaplamaPage() {
  return (
    <PageTemplate
      title="Fiyat Hesaplama"
      description="Plise perde fiyat hesaplama aracı. Pencere ölçüsü, model ve montaj tipi seçerek net fiyat hesaplayın."
      slug="plise-perde-fiyat-hesaplama"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Fiyat Hesaplama", url: "/plise-perde-fiyat-hesaplama" }]}
      h1="Plise Perde Fiyat Hesaplama"
      intro="Plise perde fiyat hesaplama aracı ile pencere ölçünüzü, model tercihinizi ve montaj tipini seçerek tahmini fiyat öğrenebilirsiniz. Hesaplama sonucu bir tahmindir, net fiyat ücretsiz keşif sonrası belirlenir. Fiyat; pencere genişliği, yüksekliği, kumaş tipi ve montaj seçeneğine göre değişir."
      schemaType="service"
      schemaData={{
        name: "Plise Perde Fiyat Hesaplama",
        description: "Plise perde için online fiyat hesaplama aracı.",
        serviceType: "Fiyat Hesaplama",
      }}
      beforeContent={<PriceCalculator />}
      sections={[
        {
          h2: "Fiyat Hesaplama Nasıl Çalışır?",
          paragraphs: [
            "Hesaplama <strong>4 faktöre</strong> dayanır: pencere genişliği, pencere yüksekliği, kumaş modeli ve montaj tipi. <em>M² fiyatı</em> bu faktörlere göre belirlenir.",
            "Aşağıdaki tabloda her model için <u>m² fiyatı</u> verilmiştir. Pencere ölçünüzü bu fiyata çarparak tahmini fiyatı bulabilirsiniz. Ölçüler <strong>10 cm aralıklarla yukarı yuvarlanır</strong> — örneğin 97 cm girerseniz 100 cm üzerinden, 46 cm girerseniz 50 cm üzerinden hesaplanır.",
          ],
          table: {
            headers: ["Model", "M² Fiyat (TL)", "Kategori"],
            rows: [
              ["Diamond", "₺1.042,80", "Standart"],
              ["Tulle", "₺1.161,60", "Tül"],
              ["Valeria", "₺1.174,80", "Standart"],
              ["Linen Tülle", "₺1.399,20", "Tül"],
              ["Elegant", "₺1.372,80", "Standart"],
              ["Spark", "₺1.372,80", "Standart"],
              ["Crystal", "₺1.557,60", "Standart"],
              ["Safir - Rubin", "₺1.584,00", "Standart"],
              ["Forest", "₺1.584,00", "Standart"],
              ["Fashion (Çift Taraflı)", "₺1.768,80", "Standart"],
              ["Moonlight (Yarı Blackout)", "₺1.980,00", "Yarı Karartma"],
              ["Blackout (Tam Blackout)", "₺2.428,80", "Blackout"],
              ["Honeycomb (Blackout) 2000", "₺2.640,00", "Blackout"],
            ],
          },
        },
        {
          h2: "Fiyata Etki Eden Faktörler",
          paragraphs: [
            "Fiyat <strong>pencere ölçüsü ile doğru orantılıdır</strong>. Büyük pencere daha fazla kumaş ve profil gerektirir. Montaj tipi de fiyata etki eder.",
          ],
          list: {
            type: "ul",
            items: [
              "Pencere genişliği — m² hesabında",
              "Pencere yüksekliği — m² hesabında",
              "Kumaş modeli — her model farklı fiyat",
              "Montaj tipi — vidalı, yapışkanlı, kancalı",
              "Motor — motorlu modelde ekstra maliyet",
              "Renk seçimi — özel renk +%5-10",
            ],
          },
        },
        {
          h2: "Örnek Fiyat Hesaplaması",
          paragraphs: [
            "80x120 cm pencere için <strong>Tulle</strong> kumaş seçelim. Ölçü yukarı yuvarlanır: 80x120 cm → 80x120 cm (zaten 10'un katı). M² = 0.8 x 1.2 = 0.96 m². <em>₺1.161,60/m²</em>: 0.96 x 1.161,60 = ₺1.115,14. Montaj ₺280. <u>Toplam: ₺1.395,14</u>.",
          ],
          table: {
            headers: ["Örnek", "Ölçü", "Model", "M²", "Tahmini Fiyat"],
            rows: [
              ["Örnek 1", "60x80 cm", "Diamond", "0.48", "₺780,54"],
              ["Örnek 2", "80x120 cm", "Tulle", "0.96", "₺1.395,14"],
              ["Örnek 3", "120x150 cm", "Blackout", "1.80", "₺4.651,84"],
              ["Örnek 4", "100x130 cm", "Honeycomb", "1.30", "₺3.712,00"],
            ],
          },
        },
        {
          h2: "Net Fiyat İçin Ücretsiz Keşif",
          paragraphs: [
            "Hesaplama sonucu <strong>tahminidir</strong>. Net fiyat için ücretsiz keşif talep edin. Profesyonel ekip ölçü alır ve <em>kesin fiyat</em> sunar.",
          ],
          list: {
            type: "ol",
            items: [
              "WhatsApp'tan keşif talep edin",
              "Ekip adresinize gelir — ücretsiz",
              "Milimetrik ölçü alınır",
              "Net fiyat teklifi sunulur",
              "Karar sizin — sipariş zorunluluğu yok",
            ],
          },
        },
        {
          h2: "Ödeme Seçenekleri",
          paragraphs: [
            "Ödeme <strong>nakit, kredi kartı ve havale</strong> ile yapılır. Taksit imkanı mevcuttur. Montaj sonrası ödeme kabul edilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Nakit — %5 indirim",
              "Kredi kartı — tek çekim",
              "Taksit — 3-6 taksit (banka göre)",
              "Havale — sipariş onayı sonrası",
              "Montaj sonrası ödeme — güvenli",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde fiyatı nasıl hesaplanır?",
          answer: "M² fiyatı pencere genişliği x yüksekliği ile çarpılır. Ölçü 10 cm aralıklarla yukarı yuvarlanır. Model, montaj tipi ve adet fiyata eklenir. Örnek: 80x120 cm Tulle perde = 0.96 m² x ₺1.161,60 = ₺1.115,14 + montaj ₺280 = ₺1.395,14.",
        },
        {
          question: "Online fiyat hesaplama ne kadar doğru?",
          answer: "Tahmini fiyattır, %10-15 sapma olabilir. Net fiyat için ücretsiz keşif öneririz. Profesyonel ekip milimetrik ölçü alır ve kesin fiyat sunar.",
        },
        {
          question: "Plise perde fiyatına montaj dahil mi?",
          answer: "Hayır, montaj ayrı ücretlendirilir. Portraylı, yapışkanlı ve çiftli sistemler ₺280/adet (her bir ürün için) montaj ücreti eklenir.",
        },
        {
          question: "Çiftli sistem nasıl hesaplanır?",
          answer: "Çiftli sistemde iki kumaş seçilir: biri Blackout (Tam Blackout veya Honeycomb Blackout 2000), diğeri Tülle (Tulle veya Linen Tülle). Her iki kumaşın m² fiyatı ayrı hesaplanır ve montaj ücreti iki ürün için eklenir (₺280 x 2).",
        },
        {
          question: "Motorlu plise perde fiyatı nedir?",
          answer: "Motorlu sistemler pencere ölçüsü, motor tipi ve kontrol yöntemine göre özel fiyatlandırılır. Online hesaplamada yer almaz. Net fiyat için WhatsApp veya iletişim sayfasından bize ulaşın.",
        },
        {
          question: "Net fiyat için ne yapmalıyım?",
          answer: "WhatsApp'tan ücretsiz keşif talep edin. Profesyonel ekip adresinize gelir, ölçü alır ve net fiyat teklifi sunar. Sipariş zorunluluğu yoktur.",
        },
      ]}
    />
  );
}
