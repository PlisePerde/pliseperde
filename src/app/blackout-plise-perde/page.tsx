import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Blackout Plise Perde — %100 Karartma Modeli",
  description:
    "Blackout plise perde: %100 ışık geçirmeyen tam karartma kumaş. Yatak odası, sinema odası, gece çalışılan mekanlar için ideal. 2 yıl garanti.",
  slug: "blackout-plise-perde",
});

export default function BlackoutPlisePerdePage() {
  return (
    <PageTemplate
      title="Blackout Plise Perde"
      description="Blackout plise perde: %100 ışık geçirmeyen tam karartma kumaş. Yatak odası, sinema odası için ideal."
      slug="blackout-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Modellerimiz", url: "/plise-perde-modelleri" }, { name: "Blackout Plise Perde", url: "/blackout-plise-perde" }]}
      h1="Blackout Plise Perde"
      intro="Blackout plise perde, %100 ışık geçirmeyen tam karartma kumaşı ile pencereyi tamamen karanlık yapabilen plise perde modelidir. Kumaş arkasında özel kaplama tabakası vardır — ışığı, sızıntıyı ve dış manzarayı tamamen keser. Yatak odası, sinema odası, gece çalışanlar ve gündüz uykusu için ideal. 2 yıl garanti ile üretilir."
      schemaType="product"
      schemaData={{
        name: "Blackout Plise Perde",
        description: "%100 ışık geçirmeyen tam karartma plise perde modeli.",
      }}
      sections={[
        {
          h2: "Blackout Plise Perde Nedir?",
          paragraphs: [
            "Blackout plise perde, kumaşın arkasında <strong>ışık geçirmeyen özel kaplama</strong> tabakası bulunan tam karartma modelidir. Bu kaplama sayesinde perde kapalıyken oda %100 karanlık olur — hiçbir ışık sızıntısı yoktur.",
            "Standart karartma kumaş %90-95 ışık keser, blackout kumaş ise <em>%100 ışık keser</em>. Fark, özellikle güneşli cephelerde ve gündüz uykusunda belirgindir.",
          ],
        },
        {
          h2: "Blackout vs Standart Karartma",
          paragraphs: [
            "Blackout ve standart karartma arasındaki temel farklar:",
          ],
          table: {
            headers: ["Özellik", "Blackout", "Standart Karartma"],
            rows: [
              ["Işık kesme", "%100", "%90-95"],
              ["Sızıntı", "Sıfır", "Minimal kenar sızıntısı"],
              ["Kumaş kalınlığı", "Kalın", "Orta"],
              ["Ağırlık", "Ağır", "Orta"],
              ["Kullanım", "Yatak odası, sinema", "Genel karartma ihtiyacı"],
              ["Fiyat", "Daha yüksek", "Standart"],
            ],
          },
        },
        {
          h2: "Blackout Plise Perde Avantajları",
          paragraphs: [
            "Blackout modelinin başlıca avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "%100 karartma — tam karanlık, sıfır ışık sızıntısı",
              "Güneş koruma — UV ışınlarını tamamen keser",
              "Isı yalıtımı — kalın kumaş ısı transferini azaltır",
              "Ses azaltma — kalın kumaş dış sesi filtreler",
              "Gizlilik — dışarıdan içerisi hiç görünmez",
              "Uyku kalitesi — karanlık oda ile derin uyku",
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Blackout plise perde <strong>tam karanlık gerektiren</strong> mekanlar için idealdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Yatak odası — gece uykusu ve gündüz uykusu için",
              "Çocuk odası — bebek uyku düzeni için",
              "Sinema odası — projeksiyon ve TV için karanlık",
              "Gece çalışma odası — gündüz uyuyanlar için",
              "Shift çalışanları — gündüz karanlık oda ihtiyacı",
              "Güneşli cephe — güney cepheli yoğun ışıklı pencere",
            ],
          },
        },
        {
          h2: "Blackout Kumaş Teknolojisi",
          paragraphs: [
            "Blackout kumaş <strong>üç katmanlı yapıya</strong> sahiptir:",
          ],
          list: {
            type: "ol",
            items: [
              "Ön yüz — dekoratif renkli kumaş (oda görür)",
              "Orta katman — ışık geçirmeyen siyah kaplama",
              "Arka yüz — koruyucu ve yalıtım tabakası (pencere görür)",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Blackout plise perde gerçekten %100 karartma mı?",
          answer: "Evet, blackout kumaş üç katmanlı yapısı ile ışığı %100 keser. Perde kapalıyken oda tamamen karanlık olur. Sadece kenar sızıntısı olabilir, bu da profil montajı ile minimizedir.",
        },
        {
          question: "Blackout ve tam karartma aynı mı?",
          answer: "Hayır. Tam karartma %90-95 ışık keser, blackout %100 keser. Blackout daha kalın kumaşa ve özel kaplamaya sahiptir. Tam karanlık isteyenler blackout tercih etmelidir.",
        },
        {
          question: "Blackout plise perde ağır mı, montajı zor mu?",
          answer: "Blackout kumaş standart kumaşa göre daha ağırdır. Bu nedenle vidalı veya braketli montaj önerilir. Yapışkanlı montaj da uygulanabilir ancak vidalı daha sağlamdır.",
        },
        {
          question: "Blackout plise perde ısı yalıtımı yapar mı?",
          answer: "Evet, kalın kumaş yapısı ısı transferini azaltır. Kışın sıcak havayı içeride, yazın sıcak havayı dışarıda tutar. Honeycomb blackout ise maksimum yalıtım sağlar.",
        },
        {
          question: "Blackout plise perde fiyatı ne kadar?",
          answer: "Blackout kumaş, özel kaplama teknolojisi nedeniyle standart kumaşa göre daha yüksektir. Ancak uyku kalitesi ve enerji tasarrufu göz önüne alındığında değer katmaktadır.",
        },
      ]}
    />
  );
}
