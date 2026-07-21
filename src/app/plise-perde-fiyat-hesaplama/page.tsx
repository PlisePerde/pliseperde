import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
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
      sections={[
        {
          h2: "Fiyat Hesaplama Nasıl Çalışır?",
          paragraphs: [
            "Hesaplama <strong>4 faktöre</strong> dayanır: pencere genişliği, pencere yüksekliği, kumaş modeli ve montaj tipi. <em>M² fiyatı</em> bu faktörlere göre belirlenir.",
            "Aşağıdaki tabloda her model için <u>m² fiyat aralığı</u> verilmiştir. Pencere ölçünüzü bu fiyata çarparak tahmini fiyatı bulabilirsiniz.",
          ],
          table: {
            headers: ["Model", "M² Fiyat (TL)", "Montaj Dahil"],
            rows: [
              ["Tül Plise Perde", "450-900", "+150 TL/pencere"],
              ["Güneşlik Plise Perde", "550-1100", "+150 TL/pencere"],
              ["Yarı Karartma", "600-1200", "+150 TL/pencere"],
              ["Tam Karartma", "700-1400", "+150 TL/pencere"],
              ["Honeycomb Petek", "990-1500", "+200 TL/pencere"],
              ["Gece Gündüz", "850-1600", "+200 TL/pencere"],
              ["Motorlu", "1800-3500", "+300 TL/pencere"],
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
            "80x120 cm pencere için <strong>tül plise perde</strong> seçelim. M² = 0.8 x 1.2 = 0.96 m². <em>450-900 TL/m²</em> aralığı: 432-864 TL. Montaj +150 TL. <u>Toplam: 582-1014 TL</u>.",
          ],
          table: {
            headers: ["Örnek", "Ölçü", "Model", "Tahmini Fiyat"],
            rows: [
              ["Örnek 1", "60x80 cm", "Tül", "286-534 TL"],
              ["Örnek 2", "80x120 cm", "Tam Karartma", "672-1302 TL"],
              ["Örnek 3", "120x150 cm", "Honeycomb", "1778-2450 TL"],
              ["Örnek 4", "150x200 cm", "Motorlu", "5400-10500 TL"],
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
          answer: "M² fiyatı pencere genişliği x yüksekliği ile çarpılır. Model, montaj tipi ve ekstra özellikler fiyata eklenir. Örnek: 80x120 cm tül perde = 0.96 m² x 450-900 TL = 432-864 TL + montaj.",
        },
        {
          question: "Online fiyat hesaplama ne kadar doğru?",
          answer: "Tahmini fiyattır, %10-15 sapma olabilir. Net fiyat için ücretsiz keşif öneririz. Profesyonel ekip milimetrik ölçü alır ve kesin fiyat sunar.",
        },
        {
          question: "Plise perde fiyatına montaj dahil mi?",
          answer: "Hayır, montaj ayrı ücretlendirilir. Vidalı 150-250 TL, yapışkanlı 100-200 TL, kancalı 100-180 TL/pencere. Bazı modellerde montaj dahil paket mevcuttur.",
        },
        {
          question: "Taksit imkanı var mı?",
          answer: "Evet, 3-6 taksit imkanı mevcuttur (banka göre değişir). Nakit ödemede %5 indirim vardır. Montaj sonrası ödeme kabul edilir.",
        },
        {
          question: "Net fiyat için ne yapmalıyım?",
          answer: "WhatsApp'tan ücretsiz keşif talep edin. Profesyonel ekip adresinize gelir, ölçü alır ve net fiyat teklifi sunar. Sipariş zorunluluğu yoktur.",
        },
      ]}
    />
  );
}
