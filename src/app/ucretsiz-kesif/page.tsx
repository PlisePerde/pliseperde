import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Ücretsiz Keşif — Plise Perde Keşif Hizmeti",
  description:
    "Ücretsiz keşif hizmeti. Profesyonel ekip pencere ölçüsü alır, montaj tipi belirler, net fiyat teklifi sunar. İstanbul ve çevre şehirler.",
  slug: "ucretsiz-kesif",
});

export default function UcretsizKesifPage() {
  return (
    <PageTemplate
      title="Ücretsiz Keşif"
      description="Ücretsiz keşif hizmeti. Profesyonel ekip pencere ölçüsü alır, montaj tipi belirler, net fiyat teklifi sunar."
      slug="ucretsiz-kesif"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmetlerimiz", url: "/hizmetlerimiz" }, { name: "Ücretsiz Keşif", url: "/ucretsiz-kesif" }]}
      h1="Ücretsiz Keşif — Plise Perde Keşif Hizmeti"
      intro="Ücretsiz keşif hizmeti ile profesyonel ekibimiz adresinize gelir, pencere ölçülerinizi alır, uygun montaj tipini belirler ve net fiyat teklifi sunar. İstanbul ve çevre şehirlerde tamamen ücretsizdir. Keşif sonrası ürün siparişi vermek zorunda değilsiniz. Net fiyat ile karar verirsiniz, sürpriz maliyet yoktur."
      schemaType="service"
      schemaData={{
        name: "Ücretsiz Keşif",
        description: "Plise perde için ücretsiz keşif hizmeti. Ölçü alma, montaj tipi belirleme, fiyat teklifi.",
        serviceType: "Keşif",
        areaServed: "İstanbul",
      }}
      sections={[
        {
          h2: "Ücretsiz Keşif Nedir?",
          paragraphs: [
            "Ücretsiz keşif, <strong>profesyonel ekibin adresinize gelmesi</strong> ile başlar. Pencere ölçüleri alınır, çerçeve tipi kontrol edilir ve uygun montaj tipi belirlenir. <em>Net fiyat teklifi</em> sunulur.",
            "Keşif sonrası <u>sipariş zorunluluğu yoktur</u>. Net fiyat ile karar verirsiniz. Sürpriz maliyet, gizli ücret yoktur.",
          ],
          table: {
            headers: ["Adım", "Süre", "İşlem"],
            rows: [
              ["1. Randevu", "5 dk", "Telefon veya WhatsApp ile randevu"],
              ["2. Ziyaret", "30-45 dk", "Adrese gelinir, ölçü alınır"],
              ["3. Değerlendirme", "10 dk", "Montaj tipi ve ürün belirlenir"],
              ["4. Teklif", "5 dk", "Net fiyat sunulur"],
            ],
          },
        },
        {
          h2: "Keşif Süreci",
          paragraphs: [
            "Keşif <strong>4 adımdan</strong> oluşur. Randevu alırsınız, ekip gelir, ölçü alır ve teklif sunar. Tüm süreç 1 saat içinde tamamlanır.",
          ],
          list: {
            type: "ol",
            items: [
              "WhatsApp veya telefon ile randevu alınır",
              "Profesyonel ekip adresinize gelir",
              "Pencere ölçüleri milimetrik alınır",
              "Çerçeve tipi ve montaj uygunluğu kontrol edilir",
              "Uygun montaj tipi ve ürün modeli belirlenir",
              "Net fiyat teklifi sunulur — sipariş zorunluluğu yok",
            ],
          },
        },
        {
          h2: "Keşif Bölgeleri",
          paragraphs: [
            "İstanbul içinde <strong>tamamen ücretsizdir</strong>. Çevre şehirlerde de ücretsiz keşif yapılır. Diğer şehirlerde video ile uzaktan keşif desteği sağlanır.",
          ],
          table: {
            headers: ["Bölge", "Keşif Ücreti", "Süre"],
            rows: [
              ["İstanbul (Avrupa + Anadolu)", "Ücretsiz", "1-2 gün içinde"],
              ["Kocaeli, Yalova, Sakarya", "Ücretsiz", "2-3 gün içinde"],
              ["Ankara, Bursa, İzmir", "Video keşif", "Aynı gün"],
              ["Diğer şehirler", "Video keşif", "Aynı gün"],
            ],
          },
        },
        {
          h2: "Keşif Sonrası Süreç",
          paragraphs: [
            "Keşif sonrası <strong>net fiyat</strong> ile karar verirsiniz. Sipariş verirseniz üretim başlar, 3-5 gün içinde montaj yapılır. Sipariş vermezseniz hiçbir ücret ödemezsiniz.",
          ],
          list: {
            type: "ul",
            items: [
              "Net fiyat — sürpriz maliyet yok",
              "Sipariş zorunluluğu yok — karar sizin",
              "Üretim 3-5 gün — sipariş sonrası",
              "Montaj — üretim sonrası 1-2 gün",
              "Garanti — 2 yıl ürün + montaj",
            ],
          },
        },
        {
          h2: "Nasıl Randevu Alınır?",
          paragraphs: [
            "Randevu için <strong>WhatsApp veya telefon</strong> ile iletişime geçin. Adresinizi ve uygun zaman dilimini belirtin. Ekip 1-2 gün içinde adresinize gelir.",
          ],
          list: {
            type: "ol",
            items: [
              "WhatsApp'tan mesaj gönderin — 0540 336 3873",
              "Adresinizi ve pencere sayısını belirtin",
              "Uygun gün ve saat dilimini söyleyin",
              "Ekip adresinize gelir — keşif yapılır",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Ücretsiz keşif gerçekten ücretsiz mi?",
          answer: "Evet, İstanbul ve çevre şehirlerde tamamen ücretsizdir. Keşif sonrası sipariş vermezseniz hiçbir ücret ödemezsiniz. Gizli ücret veya sürpriz maliyet yoktur.",
        },
        {
          question: "Keşif ne kadar sürer?",
          answer: "Adresinizde 30-45 dakika sürer. Ölçü alma, çerçeve kontrolü ve fiyat teklifi bu süre içinde yapılır. Tüm süreç 1 saat içinde tamamlanır.",
        },
        {
          question: "Keşif sonrası sipariş vermek zorunda mıyım?",
          answer: "Hayır, sipariş zorunluluğu yoktur. Net fiyat ile karar verirsiniz. Sipariş verirseniz üretim başlar, vermezseniz hiçbir ücret ödemezsiniz.",
        },
        {
          question: "İstanbul dışında keşif yapılır mı?",
          answer: "Kocaeli, Yalova ve Sakarya'da ücretsiz keşif yapılır. Diğer şehirlerde video ile uzaktan keşif desteği sağlanır. Video keşif aynı gün yapılır.",
        },
        {
          question: "Keşif için nasıl randevu alınır?",
          answer: "WhatsApp'tan 0540 336 3873 numarasına mesaj gönderin. Adresinizi, pencere sayısını ve uygun zaman dilimini belirtin. Ekip 1-2 gün içinde adresinize gelir.",
        },
      ]}
    />
  );
}
