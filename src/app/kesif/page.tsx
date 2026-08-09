import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Ücretsiz Keşif ve Danışmanlık — Plise Perde",
  description:
    "Ücretsiz keşif ve danışmanlık hizmeti. Profesyonel ekip pencere ölçüsü alır, montaj tipi belirler, net fiyat teklifi sunar. İstanbul ve çevre şehirler.",
  slug: "kesif",
});

export default function KesifPage() {
  return (
    <PageTemplate
      title="Ücretsiz Keşif ve Danışmanlık"
      description="Ücretsiz keşif ve danışmanlık hizmeti. Profesyonel ekip pencere ölçüsü alır, montaj tipi belirler, net fiyat teklifi sunar."
      slug="kesif"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmetlerimiz", url: "/hizmetlerimiz" }, { name: "Ücretsiz Keşif ve Danışmanlık", url: "/kesif" }]}
      h1="Ücretsiz Keşif ve Danışmanlık"
      intro="Ücretsiz keşif ve danışmanlık hizmeti ile profesyonel ekibimiz adresinize gelir, pencere ölçülerinizi alır, uygun montaj tipini belirler ve net fiyat teklifi sunar. İstanbul ve çevre şehirlerde tamamen ücretsizdir. Keşif sonrası ürün siparişi vermek zorunda değilsiniz. Net fiyat ile karar verirsiniz, sürpriz maliyet yoktur. Danışmanlık desteği ile hangi model, hangi sistem ve hangi kumaşın size uygun olduğunu birlikte belirleriz."
      schemaType="service"
      schemaData={{
        name: "Ücretsiz Keşif ve Danışmanlık",
        description: "Plise perde için ücretsiz keşif ve danışmanlık hizmeti. Ölçü alma, montaj tipi belirleme, fiyat teklifi, model ve sistem seçimi.",
        serviceType: "Keşif ve Danışmanlık",
        areaServed: "İstanbul",
      }}
      sections={[
        {
          h2: "Ücretsiz Keşif ve Danışmanlık Nedir?",
          paragraphs: [
            "Ücretsiz keşif ve danışmanlık, <strong>profesyonel ekibin adresinize gelmesi</strong> ile başlar. Pencere ölçüleri alınır, çerçeve tipi kontrol edilir ve uygun montaj tipi belirlenir. <em>Net fiyat teklifi</em> sunulur.",
            "Danışmanlık kısmında; hangi <u>plise perde modeli</u> (düz, blackout, gece gündüz, desenli), hangi <u>sistem</u> (vidalı, yapışkanlı, kancalı, portrayli, braketli, motorlu) ve hangi <u>kumaş</u> (honeycomb, düet, standart) size uygun olduğunu birlikte karar veririz. Karar tamamen sizin — biz sadece profesyonel rehberlik sunarız.",
            "Keşif sonrası <u>sipariş zorunluluğu yoktur</u>. Net fiyat ile karar verirsiniz. Sürpriz maliyet, gizli ücret yoktur.",
          ],
          table: {
            headers: ["Adım", "Süre", "İşlem"],
            rows: [
              ["1. Randevu", "5 dk", "Telefon veya WhatsApp ile randevu"],
              ["2. Ziyaret", "30-45 dk", "Adrese gelinir, ölçü alınır"],
              ["3. Danışmanlık", "10 dk", "Model, sistem ve kumaş seçimi"],
              ["4. Değerlendirme", "10 dk", "Montaj tipi ve ürün belirlenir"],
              ["5. Teklif", "5 dk", "Net fiyat sunulur"],
            ],
          },
        },
        {
          h2: "Keşif ve Danışmanlık Süreci",
          paragraphs: [
            "Süreç <strong>5 adımdan</strong> oluşur. Randevu alırsınız, ekip gelir, ölçü alır, danışmanlık yapar ve teklif sunar. Tüm süreç 1 saat içinde tamamlanır.",
          ],
          list: {
            type: "ol",
            items: [
              "WhatsApp veya telefon ile randevu alınır",
              "Profesyonel ekip adresinize gelir",
              "Pencere ölçüleri milimetrik alınır",
              "Çerçeve tipi ve montaj uygunluğu kontrol edilir",
              "Model, sistem ve kumaş seçimi için danışmanlık yapılır",
              "Uygun montaj tipi ve ürün belirlenir",
              "Net fiyat teklifi sunulur — sipariş zorunluluğu yok",
            ],
          },
        },
        {
          h2: "Danışmanlık Kapsamı",
          paragraphs: [
            "Keşif sırasında <strong>model, sistem ve kumaş</strong> seçimi için profesyonel danışmanlık alınır. Pencere yapısına, oda kullanımına ve bütçenize göre en uygun kombinasyon belirlenir.",
          ],
          table: {
            headers: ["Karar", "Seçenekler", "Kriter"],
            rows: [
              ["Model", "Düz, Blackout, Gece Gündüz, Desenli, Baskılı", "Oda kullanımı ve ışık ihtiyacı"],
              ["Sistem", "Vidalı, Yapışkanlı, Kancalı, Portrayli, Braketli, Motorlu", "Çerçeve yapısı ve sökülebilirlik"],
              ["Kumaş", "Standart, Honeycomb, Düet", "Yalıtım ve enerji tasarrufu"],
              ["Montaj", "Vidalı, Yapışkanlı, Kancalı", "Kumaş ağırlığı ve çerçeve"],
            ],
          },
        },
        {
          h2: "Keşif Bölgeleri",
          paragraphs: [
            "İstanbul içinde <strong>tamamen ücretsizdir</strong>. Çevre şehirlerde de ücretsiz keşif yapılır. Diğer şehirlerde video ile uzaktan keşif ve danışmanlık desteği sağlanır.",
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
              "Ekip adresinize gelir — keşif ve danışmanlık yapılır",
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
          answer: "Adresinizde 30-45 dakika sürer. Ölçü alma, çerçeve kontrolü, model ve sistem danışmanlığı, fiyat teklifi bu süre içinde yapılır. Tüm süreç 1 saat içinde tamamlanır.",
        },
        {
          question: "Keşif sonrası sipariş vermek zorunda mıyım?",
          answer: "Hayır, sipariş zorunluluğu yoktur. Net fiyat ile karar verirsiniz. Sipariş verirseniz üretim başlar, vermezseniz hiçbir ücret ödemezsiniz.",
        },
        {
          question: "İstanbul dışında keşif yapılır mı?",
          answer: "Kocaeli, Yalova ve Sakarya'da ücretsiz keşif yapılır. Diğer şehirlerde video ile uzaktan keşif ve danışmanlık desteği sağlanır. Video keşif aynı gün yapılır.",
        },
        {
          question: "Danışmanlık kapsamında ne karar veriliyor?",
          answer: "Pencere yapınıza, oda kullanımınıza ve bütçenize göre plise perde modeli (düz, blackout, gece gündüz, desenli), sistem (vidalı, yapışkanlı, kancalı, portrayli) ve kumaş (standart, honeycomb, düet) seçimi için profesyonel rehberlik alırsınız.",
        },
        {
          question: "Keşif için nasıl randevu alınır?",
          answer: "WhatsApp'tan 0540 336 3873 numarasına mesaj gönderin. Adresinizi, pencere sayısını ve uygun zaman dilimini belirtin. Ekip 1-2 gün içinde adresinize gelir.",
        },
      ]}
    />
  );
}
