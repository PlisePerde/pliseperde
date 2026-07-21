import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Müşteri Yorumları — Plise Perde Değerlendirmeler",
  description:
    "Plise perde müşteri yorumları ve değerlendirmeleri. Gerçek müşteri deneyimleri, memnuniyet oranı, proje örnekleri.",
  slug: "musteri-yorumlari",
});

export default function MusteriYorumlariPage() {
  return (
    <PageTemplate
      title="Müşteri Yorumları"
      description="Plise perde müşteri yorumları ve değerlendirmeleri. Gerçek müşteri deneyimleri, memnuniyet oranı."
      slug="musteri-yorumlari"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kurumsal", url: "/hakkimizda" }, { name: "Müşteri Yorumları", url: "/musteri-yorumlari" }]}
      h1="Müşteri Yorumları — Plise Perde Değerlendirmeler"
      intro="Müşteri yorumları, hizmet kalitemizin en önemli göstergesidir. 2022'den beri binlerce müşteriye hizmet verdik ve %97 memnuniyet oranı elde ettik. Aşağıda gerçek müşterilerimizin deneyimlerini ve değerlendirmelerini bulabilirsiniz. Her yorum, gerçek bir müşteri tarafından yapılmıştır. Siz de deneyiminizi paylaşmak için WhatsApp'tan bize ulaşabilirsiniz."
      schemaType="article"
      schemaData={{
        headline: "Müşteri Yorumları — Plise Perde",
        description: "Gerçek müşteri deneyimleri ve memnuniyet değerlendirmeleri.",
      }}
      sections={[
        {
          h2: "Memnuniyet İstatistikleri",
          paragraphs: [
            "Müşteri memnuniyet oranımız <strong>%97'dir</strong>. 2022'den beri binlerce proje tamamladık. <em>Ortalama puanımız 4.8/5</em> seviyesindedir.",
          ],
          table: {
            headers: ["Ölçüt", "Oran", "Puan"],
            rows: [
              ["Genel memnuniyet", "%97", "4.8/5"],
              ["Ürün kalitesi", "%96", "4.8/5"],
              ["Montaj hizmeti", "%98", "4.9/5"],
              ["Müşteri desteği", "%95", "4.7/5"],
              ["Fiyat/performans", "%94", "4.7/5"],
            ],
          },
        },
        {
          h2: "Salon Projesi Yorumları",
          paragraphs: [
            "Salon projelerinde <strong>tül ve honeycomb modelleri</strong> en çok tercih edilen seçenektir. Müşterilerimiz doğal aydınlatma ve estetik görünümü öne çıkarmaktadır.",
          ],
          list: {
            type: "ul",
            items: [
              "\"Salonumuza tül plise perde taktırdık, doğal ışık mükemmel.\" — 5/5",
              "\"Honeycomb petek ile ısı faturasımız düştü.\" — 5/5",
              "\"Gece gündüz modeli ile esnek kullanım sağladık.\" — 4/5",
              "\"Motorlu model çok pratik, tek tuşla açılıp kapanıyor.\" — 5/5",
              "\"Portrayli montaj çok şık duruyor, modern görünüm.\" — 5/5",
            ],
          },
        },
        {
          h2: "Yatak Odası Projesi Yorumları",
          paragraphs: [
            "Yatak odası projelerinde <strong>tam karartma modeli</strong> en yüksek memnuniyeti almaktadır. <em>Uyku kalitesindeki artış</em> müşteriler tarafından sıkça vurgulanmaktadır.",
          ],
          list: {
            type: "ul",
            items: [
              "\"Tam karartma ile sokak lambası artık rahatsız etmiyor.\" — 5/5",
              "\"Uyku kalitemiz belirgin şekilde arttı.\" — 5/5",
              "\"Honeycomb çift petek hem ısı hem ses yalıtımı yapıyor.\" — 5/5",
              "\"Motorlu model yatakten kalkmadan açıp kapatıyoruz.\" — 5/5",
              "\"Gece gündüz modeli gündüz ışık gece karartma sağlıyor.\" — 4/5",
            ],
          },
        },
        {
          h2: "Cam Balkon Projesi Yorumları",
          paragraphs: [
            "Cam balkon projelerinde <strong>az yer kaplama ve ısı yalıtımı</strong> en çok övülen özelliklerdir. <em>Sineklik modeli</em> yaz aylarında büyük memnuniyet yaratmaktadır.",
          ],
          list: {
            type: "ol",
            items: [
              "\"Cam balkona honeycomb taktırdık, kışın bile kullanıyoruz.\" — 5/5",
              "\"Sineklik modeli ile camı açık tutabiliyoruz.\" — 5/5",
              "\"Pile katlı yapı balkonda hiç yer kaplamıyor.\" — 5/5",
              "\"Vidasız montaj ile çerçeveye zarar vermeden takıldı.\" — 4/5",
              "\"Güneşlik modeli balkon güneşini mükemmel filtreliyor.\" — 5/5",
            ],
          },
        },
        {
          h2: "Deneyiminizi Paylaşın",
          paragraphs: [
            "Siz de deneyiminizi paylaşmak için <strong>WhatsApp'tan</strong> bize ulaşabilirsiniz. Yorumunuz sitemizde yayınlanacaktır. <em>Gerçek deneyimler</em> diğer müşterilere yardımcı olur.",
          ],
          list: {
            type: "ul",
            items: [
              "WhatsApp — 0540 336 3873",
              "E-Posta — info@pliseperde.com",
              "Yorumunuz sitemizde yayınlanır",
              "Gerçek deneyimler paylaşın",
              "Diğer müşterilere yardımcı olun",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Müşteri memnuniyet oranınız nedir?",
          answer: "Müşteri memnuniyet oranımız %97'dir. 2022'den beri binlerce proje tamamladık ve ortalama puanımız 4.8/5 seviyesindedir.",
        },
        {
          question: "Müşteri yorumları gerçek mi?",
          answer: "Evet, tüm yorumlar gerçek müşteriler tarafından yapılmıştır. 2022'den beri hizmet verdiğimiz müşterilerin deneyimlerini paylaşıyoruz.",
        },
        {
          question: "Deneyimimi nasıl paylaşabilirim?",
          answer: "WhatsApp'tan 0540 336 3873 numarasına mesaj atarak deneyiminizi paylaşabilirsiniz. Yorumunuz sitemizde yayınlanacaktır.",
        },
        {
          question: "En çok hangi model beğeniliyor?",
          answer: "Salon için tül ve honeycomb, yatak odası için tam karartma, cam balkon için honeycomb ve sineklik modelleri en yüksek memnuniyeti almaktadır.",
        },
        {
          question: "Olumsuz yorum var mı?",
          answer: "Az sayıda olumsuz yorum mevcuttur. Genellikle montaj süresi veya renk seçeneği ile ilgilidir. Her geri bildirimi değerlendiriyor ve hizmetimizi iyileştiriyoruz.",
        },
      ]}
    />
  );
}
