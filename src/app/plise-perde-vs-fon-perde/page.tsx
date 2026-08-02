import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Fon Perde — Karşılaştırma",
  description:
    "Plise perde vs fon perde karşılaştırması. Tül perde, ışık geçirgenliği, gizlilik, estetik, fiyat, montaj, temizlik. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-fon-perde",
});

export default function PliseVsFonPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Fon Perde"
      description="Plise perde vs fon perde karşılaştırması. Işık geçirgenliği, gizlilik, estetik, fiyat, montaj."
      slug="plise-perde-vs-fon-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/plise-perde-modelleri" }, { name: "Plise vs Fon", url: "/plise-perde-vs-fon-perde" }]}
      h1="Plise Perde vs Fon Perde — Hangisi Daha İyi?"
      intro="Plise perde ve fon perde (tül perde), iç mekan pencere çözümlerinin en yaygın iki seçeneğidir. Fon perde, ince tül kumaşı ile yumuşak ışık ve gizlilik sağlar — klasik ve geleneksel bir çözümdür. Plise perde ise pile katlı yapısıyla modern esneklik sunar ve blackout kumaş seçeneği ile tam karartma yapabilir. Bu karşılaştırmada ışık geçirgenliği, gizlilik, estetik, fiyat ve montaj açısından ikisini detaylıca inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Fon Perde Karşılaştırması",
        description: "Plise perde ve fon perde karşılaştırması — ışık geçirgenliği, gizlilik, estetik, fiyat.",
      }}
      sections={[
        {
          h2: "Çalışma Prensibi Farkı",
          paragraphs: [
            "Plise perde, <strong>kumaşı pile katlayarak</strong> yukarı-aşağı hareket ettirir. İp mekanizması ile kumaş istenen yükseklikte durur. Pencere içine monte edilir ve hem üstten hem alttan açılabilir.",
            "Fon perde (tül perde), <strong>ince tül kumaşı pencere önünde asılı</strong> durur. Genellikle korniş veya ray üzerine takılır, yana açılır. Kumaş pile yapmaz, düz olarak asılır. Açma-kapama mekanizması yana kaydırma veya toplama şeklindedir.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Fon Perde"],
            rows: [
              ["Montaj", "Pencere içi", "Korniş/ray (pencere üstü)"],
              ["Açılma yönü", "Üstten + alttan", "Yana kaydırma"],
              ["Kumaş türü", "Tül, güneşlik, blackout", "İnce tül"],
              ["Tam karartma", "Mümkün (blackout)", "Mümkün değil"],
              ["Mekanizma", "İp ile yukarı-aşağı", "Ray/korniş ile yana"],
              ["Pencere içi mi", "Evet", "Hayır (pencere önü)"],
            ],
          },
        },
        {
          h2: "Işık Geçirgenliği ve Gizlilik",
          paragraphs: [
            "Fon perde <strong>maksimum ışık geçirgenliği</strong> sağlar. İnce tül kumaş, ışığın %80-95'ini geçirir ve odayı ferah gösterir. Gündüz dışarıdan içeriyi zor görür, ama gece içeriden dışarı net görünür.",
            "Plise perde tül kumaş ile benzer ışık geçirir, ancak <em>güneşlik, yarı karartma ve blackout</em> seçenekleri de sunar. Gündüz tül, gece blackout gibi esnek kullanım mümkündür. Ayrıca plise perde, pencere içine takıldığı için <u>pencere ile perde arasında boşluk yoktur</u> — fon perdede ise korniş ile pencere arası açık kalır.",
          ],
          list: {
            type: "ul",
            items: [
              "Fon — maksimum ışık (%80-95 geçirgen)",
              "Plise — tül ile aynı ışık + blackout seçeneği",
              "Fon — gece içeriden dışarı görünür",
              "Plise — blackout ile gece tam gizlilik",
              "Fon — pencere ile perde arası boşluk",
              "Plise — pencere içine tam oturur, boşluk yok",
            ],
          },
        },
        {
          h2: "Estetik ve Görünüm",
          paragraphs: [
            "Fon perde <strong>klasik ve geleneksel</strong> bir görünüm sunar. İnce tül kumaş, pencere önünde zarif bir doku oluşturur. Korniş veya ray ile birleştiğinde klasik ev dekorasyonuna uyar.",
            "Plise perde ise <strong>modern ve minimalist</strong> görünüm sunar. Pencere içine monte edildiği için korniş gerekmez, pencere çerçevesi içinde gizli çalışır. Pile katlı doku, modern mimariye daha uygun bir estetik verir.",
          ],
          list: {
            type: "ul",
            items: [
              "Fon — klasik, geleneksel, zarif",
              "Plise — modern, minimalist, gizli",
              "Fon — korniş/ray görünür",
              "Plise — pencere içinde, korniş gerekmez",
              "Fon — tül doku, yumuşak dalgalı görünüm",
              "Plise — pile katlı, düzgün geometrik doku",
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Fon perde <strong>genelde daha ekonomiktir</strong>. İnce tül kumaş ve basit ray/korniş montajı maliyeti düşüktür. Plise perde, alüminyum profil ve ip mekanizması nedeniyle daha maliyetlidir. <em>M² bazında fon perde 150-800 TL</em>, plise 450-3500 TL aralığında.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Fon Perde"],
            rows: [
              ["Standart (tül)", "450-1100 TL", "150-400 TL"],
              ["Karartma", "700-1400 TL", "—"],
              ["Premium", "1200-3500 TL", "400-800 TL"],
              ["Motorlu", "1800-3500 TL", "—"],
              ["Montaj", "100-300 TL", "50-150 TL"],
            ],
          },
        },
        {
          h2: "Montaj ve Temizlik",
          paragraphs: [
            "Fon perde montajı <strong>çok basittir</strong> — korniş veya ray üzerine asılır. Temizlik de kolaydır, tül kumaş çıkarılıp yıkanabilir. Plise perde ise pencere içine monte edilir, mekanizma daha komplekstir.",
          ],
          list: {
            type: "ol",
            items: [
              "Fon — korniş/ray üzerine asma, çok kolay",
              "Plise — pencere içi profil montajı, daha teknik",
              "Fon — tül kumaş çıkarılıp makinede yıkanabilir",
              "Plise — kumaş nemli bez ile silinir, makine yıkanmaz",
              "Fon — düzenli yıkama gerekir (toz emer)",
              "Plise — daha az toz biriktirir, az temizlik",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Fon perde <strong>ekonomik fiyat ve klasik görünüm</strong> isteyenler için idealdir. Plise perde <em>modern görünüm, esnek ışık kontrolü ve tam karartma</em> öncelikli olanlar için daha uygun.",
          ],
          list: {
            type: "ul",
            items: [
              "Fon seçin — ekonomik fiyat",
              "Fon seçin — klasik, geleneksel görünüm",
              "Fon seçin — maksimum gündüz ışığı",
              "Fon seçin — kolay yıkanabilir kumaş",
              "Plise seçin — modern, minimalist görünüm",
              "Plise seçin — blackout ile tam karartma",
              "Plise seçin — esnek ışık kontrolü (tül + blackout)",
              "Plise seçin — pencere içi montaj, korniş gerekmez",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi fon perde mi daha iyi?",
          answer: "Ekonomik fiyat ve klasik görünüm istiyorsanız fon perde tercih edin. Modern görünüm, esnek ışık kontrolü ve tam karartma istiyorsanız plise perde daha uygun. Plise perde hem tül hem blackout kumaş sunar, fon perde sadece tül.",
        },
        {
          question: "Fon perde tam karartma yapar mı?",
          answer: "Hayır, fon perde ince tül kumaştan üretilir ve ışığın %80-95'ini geçirir. Tam karartma için plise perde blackout kumaş veya ayrı bir karartma perde kullanmanız gerekir.",
        },
        {
          question: "Hangisi daha ucuz?",
          answer: "Fon perde genelde daha ekonomiktir. M² bazında fon perde 150-800 TL, plise 450-3500 TL aralığında. Fon perde basit kumaş ve ray montajı ile düşük maliyetlidir.",
        },
        {
          question: "Fon perde yıkanabilir mi?",
          answer: "Evet, fon perde tül kumaşı çıkarılıp makinede yıkanabilir. Bu, fon perdenin temizlik açısından bir avantajıdır. Plise perde kumaşı ise nemli bez ile silinir, makinede yıkanması önerilmez.",
        },
        {
          question: "Plise perde pencere içine takılır mı?",
          answer: "Evet, plise perde pencere içine monte edilir — pencere çerçevesine vidalı, yapışkanlı veya kancalı sistemle. Korniş veya ray gerekmez. Fon perde ise korniş veya ray üzerine pencere önüne asılır.",
        },
      ]}
    />
  );
}
