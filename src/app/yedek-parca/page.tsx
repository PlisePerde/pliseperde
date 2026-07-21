import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Yedek Parça — Orijinal Parça Tedariği",
  description:
    "Plise perde yedek parça hizmeti. İp, profil, mekanizma, kumaş, kanca, bant. Orijinal parça, üretici garantisi. Türkiye geneli kargo.",
  slug: "yedek-parca",
});

export default function YedekParcaPage() {
  return (
    <PageTemplate
      title="Yedek Parça"
      description="Plise perde yedek parça hizmeti. İp, profil, mekanizma, kumaş, kanca, bant. Orijinal parça, üretici garantisi."
      slug="yedek-parca"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmetlerimiz", url: "/hizmetlerimiz" }, { name: "Yedek Parça", url: "/yedek-parca" }]}
      h1="Plise Perde Yedek Parça"
      intro="Plise perde yedek parça hizmeti ile ürününüzün ömrünü uzaltın. İp mekanizması, profil, kumaş, kanca ve bant gibi tüm parçaları orijinal kalitede tedarik ediyoruz. Üretici olarak her parçayı stokta tutuyoruz. Türkiye geneli kargo ile gönderim yapılır. Garanti kapsamındaki parçalar ücretsiz değiştirilir."
      schemaType="service"
      schemaData={{
        name: "Plise Perde Yedek Parça",
        description: "Plise perde için orijinal yedek parça tedarik hizmeti.",
        serviceType: "Yedek Parça",
      }}
      sections={[
        {
          h2: "Yedek Parça Çeşitleri",
          paragraphs: [
            "Üretici olarak <strong>tüm parçaları stokta</strong> tutuyoruz. İp mekanizması en sık değişen parçadır. <em>5 yıl üzerinde</em> parça tedarik garantisi veriyoruz.",
          ],
          table: {
            headers: ["Parça", "Fiyat Aralığı", "Değişim Sıklığı"],
            rows: [
              ["İp mekanizması", "50-120 TL", "3-5 yıl"],
              ["Profil (m)", "80-150 TL", "Hasar durumunda"],
              ["Kumaş (m²)", "150-400 TL", "Yıpranmada"],
              ["Kanca seti", "30-60 TL", "Kayıp/hasar"],
              ["Yapışkan bant (m)", "20-40 TL", "Sökme sonrası"],
              ["Motor", "800-2000 TL", "Arıza durumunda"],
            ],
          },
        },
        {
          h2: "İp Mekanizması Değişimi",
          paragraphs: [
            "İp mekanizması <strong>en sık değişen parçadır</strong>. İp yıprandığında, sertleştiğinde veya koptuğunda değiştirilmelidir. <em>DIY değişim</em> mümkündür ama profesyonel servis önerilir.",
          ],
          list: {
            type: "ol",
            items: [
              "Eski ip çıkarılır — mekanizma kanalından",
              "Yeni ip takılır — orijinal kalitede",
              "İp gerilir — mekanizma ayarlanır",
              "Açılır kapanır test edilir",
              "Kullanım önerileri verilir",
            ],
          },
        },
        {
          h2: "Kumaş Değişimi",
          paragraphs: [
            "Kumaş yıprandığında veya <strong>renk solması</strong> olduğunda değiştirilebilir. Profil ve mekanizma korunur, sadece kumaş yenilenir. <em>Maliyet avantajı</em> sağlar.",
          ],
          table: {
            headers: ["Kumaş Tipi", "Fiyat (m²)", "Renk Seçenekleri"],
            rows: [
              ["Tül", "150-250 TL", "Beyaz, krem, ekru"],
              ["Güneşlik", "200-300 TL", "Beyaz, krem, gri"],
              ["Karartma", "250-400 TL", "Beyaz, antrasit, krem"],
              ["Honeycomb", "300-400 TL", "Beyaz, krem, antrasit"],
            ],
          },
        },
        {
          h2: "Garanti Kapsamı",
          paragraphs: [
            "Garanti süresi içinde <strong>ücretsiz parça değişimi</strong> yapılır. İp kopması, mekanizma arızası ve profil kırılması garanti kapsamındadır.",
          ],
          list: {
            type: "ul",
            items: [
              "İp kopması — ücretsiz değişim (2 yıl)",
              "Mekanizma arızası — ücretsiz tamir (2 yıl)",
              "Profil kırılması — ücretsiz değişim (2 yıl)",
              "Kumaş yırtılması — ücretsiz değişim (2 yıl)",
              "Motor arızası — 5 yıl garanti",
            ],
          },
        },
        {
          h2: "Nasıl Sipariş Verilir?",
          paragraphs: [
            "Yedek parça siparişi için <strong>WhatsApp'tan</strong> fotoğraf gönderin. Parça tipi ve ölçü belirtilir, kargo ile gönderilir. Türkiye geneli 1-3 gün teslim.",
          ],
          list: {
            type: "ol",
            items: [
              "WhatsApp'tan parça fotoğrafı gönderin",
              "Parça tipi ve ölçü belirtilir",
              "Fiyat teklifi sunulur",
              "Ödeme alındıktan sonra kargo yapılır",
              "1-3 gün içinde teslim edilir",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde yedek parça fiyatları ne kadar?",
          answer: "İp mekanizması 50-120 TL, kumaş m² 150-400 TL, profil m 80-150 TL, kanca seti 30-60 TL, motor 800-2000 TL aralığında fiyatlanır.",
        },
        {
          question: "Garanti kapsamında parça değişimi ücretsiz mi?",
          answer: "Evet, 2 yıl garanti kapsamında ip kopması, mekanizma arızası, profil kırılması ve kumaş yırtılması ücretsiz değiştirilir. Motor 5 yıl garanti kapsamındadır.",
        },
        {
          question: "Yedek parça nasıl sipariş edilir?",
          answer: "WhatsApp'tan parça fotoğrafı gönderin. Parça tipi ve ölçü belirtilir, fiyat teklifi sunulur. Ödeme sonrası kargo ile 1-3 gün içinde teslim edilir.",
        },
        {
          question: "İp mekanizması kendim değiştirebilir miyim?",
          answer: "Evet, DIY değişim mümkündür. İp mekanizması kanaldan çıkarılır, yeni ip takılır ve gerilir. Ancak profesyonel servis önerilir, ücretsiz garanti kapsamındadır.",
        },
        {
          question: "Kumaş değişiminde profil korunur mu?",
          answer: "Evet, kumaş değişiminde profil ve mekanizma korunur. Sadece kumaş yenilenir. Bu, tamamen yeni perde almaktan daha ekonomiktir.",
        },
      ]}
    />
  );
}
