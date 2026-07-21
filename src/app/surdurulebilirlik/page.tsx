import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Sürdürülebilirlik — Plise Perde Çevre Politikası",
  description:
    "Plise perde sürdürülebilirlik politikası. Geri dönüştürülebilir malzeme, enerji tasarrufu, azaltılmış atık. Çevre dostu üretim.",
  slug: "surdurulebilirlik",
});

export default function SurdurulebilirlikPage() {
  return (
    <PageTemplate
      title="Sürdürülebilirlik"
      description="Plise perde sürdürülebilirlik politikası. Geri dönüştürülebilir malzeme, enerji tasarrufu, azaltılmış atık."
      slug="surdurulebilirlik"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kurumsal", url: "/hakkimizda" }, { name: "Sürdürülebilirlik", url: "/surdurulebilirlik" }]}
      h1="Sürdürülebilirlik — Çevre Politikamız"
      intro="Sürdürülebilirlik, üretim felsefemizin temelidir. Plise perde üretiminde geri dönüştürülebilir malzemeler kullanıyor, atığı en aza indiriyor ve enerji tasarrufu sağlayan modeller geliştiriyoruz. Honeycomb petek modeli ile kullanıcılarımıza %40'a varan enerji tasarrufu sağlıyoruz. Çevre dostu üretim ile gelecek nesillere temiz bir çevre bırakmayı hedefliyoruz."
      schemaType="article"
      schemaData={{
        headline: "Sürdürülebilirlik — Plise Perde Çevre Politikası",
        description: "Geri dönüştürülebilir malzeme, enerji tasarrufu, azaltılmış atık ile çevre dostu üretim.",
      }}
      sections={[
        {
          h2: "Çevre Dostu Malzemeler",
          paragraphs: [
            "Üretimde <strong>geri dönüştürülebilir polyester</strong> kumaş kullanıyoruz. <em>%85 geri dönüştürülmüş polyester</em> içeren kumaş tercih ediyoruz. Profil malzemesi olarak alüminyum ve PVC kullanıyoruz, her ikisi de geri dönüştürülebilir.",
          ],
          table: {
            headers: ["Malzeme", "Geri Dönüşüm", "Oran"],
            rows: [
              ["Kumaş (polyester)", "Geri dönüştürülebilir", "%85 geri dönüşümlü"],
              ["Profil (alüminyum)", "%100 geri dönüştürülebilir", "Sonsuz döngü"],
              ["Profil (PVC)", "Geri dönüştürülebilir", "%70 geri dönüşüm"],
              ["Paketleme", "Geri dönüştürülebilir", "%90 karton"],
            ],
          },
        },
        {
          h2: "Enerji Tasarrufu",
          paragraphs: [
            "Honeycomb petek modeli ile <strong>kışın ısı kaybını %40'a kadar azaltıyoruz</strong>. Bu, kullanıcılarımızın doğalgaz ve elektrik tüketimini düşürerek <em>karbon ayak izini</em> küçültüyor.",
          ],
          list: {
            type: "ul",
            items: [
              "Honeycomb petek — %40 ısı kaybı azaltma",
              "UV koruma — mobilya ömrünü uzatır",
              "Doğal aydınlatma — elektrik tasarrufu",
              "Isı yalıtımı — klima tüketimini düşürür",
              "Az paketleme — atık azaltma",
            ],
          },
        },
        {
          h2: "Atık Azaltma",
          paragraphs: [
            "Üretim sürecinde <strong>atığı en aza indiriyoruz</strong>. Kumaş kesim atığı geri dönüştürülür, profil fireleri toplanır. <em>Sıfır atık</em> hedefi ile çalışıyoruz.",
          ],
          list: {
            type: "ol",
            items: [
              "Kumaş kesim atığı toplanır — geri dönüştürülür",
              "Profil fireleri ayrıştırılır — geri kazanım",
              "Paketleme atığı en aza indirilir",
              "Su bazlı boya — çevre dostu",
              "Enerji verimli üretim — düşük tüketim",
            ],
          },
        },
        {
          h2: "Ürün Ömrü ve Geri Dönüşüm",
          paragraphs: [
            "Plise perde <strong>10+ yıl ömür</strong> ile tasarlanır. Ürün ömrü bittiğinde tüm parçalar geri dönüştürülebilir. <em>Kumaş, profil ve mekanizma</em> ayrıştırılarak geri kazanılır.",
          ],
          table: {
            headers: ["Bileşen", "Ömür", "Geri Dönüşüm"],
            rows: [
              ["Kumaş", "10+ yıl", "%85 geri dönüşüm"],
              ["Profil", "15+ yıl", "%100 geri dönüşüm"],
              ["Mekanizma", "10+ yıl", "Metal geri dönüşüm"],
              ["İp", "5-8 yıl", "Geri dönüştürülebilir"],
            ],
          },
        },
        {
          h2: "Sertifikalar ve Standartlar",
          paragraphs: [
            "Üretimimiz <strong>çevre standartlarına</strong> uygundur. Kullanılan malzemeler <em>RoHS ve REACH</em> sertifikalarına sahiptir.",
          ],
          list: {
            type: "ul",
            items: [
              "RoHS — zararlı madde kısıtlaması",
              "REACH — kimyasal güvenlik",
              "ISO 14001 — çevre yönetimi hedefi",
              "Geri dönüştürülebilir malzeme — %85+",
              "Su bazlı boya — VOC düşük",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde geri dönüştürülebilir mi?",
          answer: "Evet, plise perde tüm bileşenleri geri dönüştürülebilir. Kumaş %85, profil %100, mekanizma metal olarak geri kazanılır. Ürün ömrü bittiğinde ayrıştırılarak geri dönüştürülür.",
        },
        {
          question: "Plise perde enerji tasarrufu sağlar mı?",
          answer: "Evet, honeycomb petek modeli kışın ısı kaybını %40'a kadar azaltır. Doğal aydınlatma ile elektrik tasarrufu, ısı yalıtımı ile klima tüketimini düşürür.",
        },
        {
          question: "Üretimde hangi malzemeler kullanılıyor?",
          answer: "%85 geri dönüştürülmüş polyester kumaş, %100 geri dönüştürülebilir alüminyum profil ve geri dönüştürülebilir PVC kullanıyoruz. Paketleme %90 kartondur.",
        },
        {
          question: "Plise perde ömrü ne kadar?",
          answer: "Plise perde 10+ yıl ömür ile tasarlanır. Profil 15+ yıl, kumaş 10+ yıl, ip mekanizması 5-8 yıl ömre sahiptir. Yedek parça ile ömür uzatılır.",
        },
        {
          question: "Çevre sertifikalarınız var mı?",
          answer: "Kullanılan malzemeler RoHS ve REACH sertifikalarına sahiptir. ISO 14001 çevre yönetimi sertifikası hedefimizdir. Su bazlı boya ile VOC emisyonu düşürülmüştür.",
        },
      ]}
    />
  );
}
