import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Dikey Perde — Karşılaştırma",
  description:
    "Plise perde vs dikey perde karşılaştırması. Dikey lamel, geniş pencere, kaydırma, ışık kontrolü, fiyat, montaj, temizlik. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-dikey-perde",
});

export default function PliseVsDikeyPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Dikey Perde"
      description="Plise perde vs dikey perde karşılaştırması. Işık kontrolü, geniş pencere, fiyat, montaj, temizlik."
      slug="plise-perde-vs-dikey-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/plise-perde-modelleri" }, { name: "Plise vs Dikey", url: "/plise-perde-vs-dikey-perde" }]}
      h1="Plise Perde vs Dikey Perde — Hangisi Daha İyi?"
      intro="Plise perde ve dikey perde, farklı pencere tipleri için optimize edilmiş iki çözümdür. Dikey perde, dikey lamelleri yana kaydırarak ve döndürerek ışık kontrolü sağlar — özellikle geniş pencereler ve cam balkonlar için uygundur. Plise perde ise pile katlı kumaşı yukarı-aşağı hareket ettirerek esnek ışık kontrolü sunar. Bu karşılaştırmada çalışma prensibi, pencere tipi uyumu, ışık kontrolü, fiyat ve montaj açısından ikisini detaylıca inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Dikey Perde Karşılaştırması",
        description: "Plise perde ve dikey perde karşılaştırması — pencere tipi, ışık kontrolü, fiyat, montaj.",
      }}
      sections={[
        {
          h2: "Çalışma Prensibi Farkı",
          paragraphs: [
            "Plise perde, <strong>kumaşı pile katlayarak</strong> yukarı-aşağı hareket ettirir. İp mekanizması ile kumaş istenen yükseklikte durur. Pencere içine monte edilir.",
            "Dikey perde, <strong>dikey lamelleri yana kaydırarak</strong> ve 180° döndürerek çalışır. Lameller bir ray sistemi üzerinde yana toplanır ve döndürme mekanizması ile ışık açısı ayarlanır. Geniş pencereler ve yüksek pencereler için optimize edilmiştir.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Dikey Perde"],
            rows: [
              ["Mekanizma", "İp ile yukarı-aşağı", "Ray ile yana + döndürme"],
              ["Açılma yönü", "Üstten + alttan", "Yana kaydırma"],
              ["Işık ayarı", "Kademeli (yükseklik)", "Lamel açısı (yatay)"],
              ["Pencere tipi", "Tüm pencere tipleri", "Geniş ve yüksek pencereler"],
              ["Montaj konumu", "Pencere içi", "Tavan/korniş (pencere üstü)"],
              ["Tam karartma", "Blackout kumaş ile", "Blackout lamel ile"],
            ],
          },
        },
        {
          h2: "Pencere Tipi Uyumu",
          paragraphs: [
            "Dikey perde <strong>geniş ve yüksek pencereler</strong> için en uygun sistemdir. Sürme cam balkon kapıları, geniş vitrinler, ofis pencereleri ve yüksek tavanlı mekanlarda dikey lameller yana kayarak pencereyi tam açar. Plise perde ise <em>her pencere tipine</em> uyum sağlar — küçük mutfak penceresinden büyük salon penceresine kadar.",
            "Ancak çok geniş pencerelerde (3m+) plise perde kumaş ağırlığı nedeniyle zorlanabilir. Dikey perde, geniş pencerede lamel ray sistemi ile daha akıcı çalışır.",
          ],
          list: {
            type: "ul",
            items: [
              "Dikey — geniş pencereler (3m+) için ideal",
              "Plise — tüm pencere tiplerine uyumlu",
              "Dikey — sürme kapı ve cam balkon için uygun",
              "Plise — küçük ve orta pencerelerde daha pratik",
              "Dikey — yüksek tavanlı mekanlar için",
              "Plise — standart ev pencereleri için optimal",
            ],
          },
        },
        {
          h2: "Işık Kontrolü",
          paragraphs: [
            "Dikey perde <strong>lamel açısı ile hassas ışık yönü kontrolü</strong> sağlar. Lamelleri 180° döndürerek ışığın yönünü ve miktarını ayarlayabilirsiniz. Lameller kapalıyken ışığı kesmeden gizlilik elde edebilirsiniz.",
            "Plise perde ise <strong>kademeli yükseklik kontrolü</strong> sağlar. Kumaşı istediğiniz yükseklikte durdurarak ışık miktarını ayarlarsınız. Üstten açık alttan kapalı yapabilirsiniz, ancak ışığın <u>yönünü</u> kontrol edemezsiniz.",
          ],
          list: {
            type: "ul",
            items: [
              "Dikey — lamel açısı ile ışık yönü ayarlanır",
              "Plise — kademeli yükseklik ile ışık miktarı ayarlanır",
              "Dikey — lamel kapalıyken gizlilik + ışık",
              "Plise — tam karartmada sıfır ışık",
              "Dikey — yana tam açma ile pencereyi serbest bırakır",
              "Plise — üstten/alttan bağımsız açılım",
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Fiyat açısından <strong>ikisi de yakındır</strong>. Dikey perde, lamel ve ray sistemi nedeniyle m² bazında benzer maliyettedir. <em>M² bazında plise 450-3500 TL</em>, dikey perde 400-3000 TL aralığında.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Dikey Perde"],
            rows: [
              ["Standart (tül/güneşlik)", "450-1100 TL", "400-900 TL"],
              ["Karartma", "700-1400 TL", "600-1200 TL"],
              ["Premium", "1200-3500 TL", "1000-3000 TL"],
              ["Motorlu", "1800-3500 TL", "1500-3500 TL"],
              ["Montaj", "100-300 TL", "150-400 TL"],
            ],
          },
        },
        {
          h2: "Montaj ve Temizlik",
          paragraphs: [
            "Plise perde montajı <strong>daha basittir</strong> — pencere içine takılır, DIY mümkündür. Dikey perde ise tavan veya korniş üzerine monte edilir, ray sistemi kurulumu daha teknik gerektirir.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — pencere içi montaj, DIY mümkün",
              "Dikey — tavan/korniş montajı, profesyonel önerilir",
              "Plise — pile kumaş, nemli bez ile silinir",
              "Dikey — her lamel tek tek silinmelidir",
              "Plise — kumaş çıkarılabilir",
              "Dikey — lameller çıkarılabilir, tek tek yıkanabilir",
            ],
          },
        },
        {
          h2: "Estetik ve Görünüm",
          paragraphs: [
            "Plise perde <strong>pile katlı, yumuşak doku</strong> sunar. Pencere içinde gizli çalışır, modern ve minimalist görünür. Dikey perde ise <em>dikey lamelleri</em> ile daha geometrik ve endüstriyel bir estetik verir. Ofis ve ticari mekanlarda yaygın tercih edilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — pile katlı, yumuşak, sıcak görünüm",
              "Dikey — geometrik lameller, modern/endüstriyel",
              "Plise — ev ve konut için uygun",
              "Dikey — ofis, ticari mekan, cam balkon için",
              "Plise — pencere içinde gizli",
              "Dikey — pencere önünde belirgin",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Plise perde <strong>ev ve konut için esnek ışık kontrolü</strong> isteyenler için idealdir. Dikey perde <em>geniş pencere, ofis ve cam balkon</em> için daha uygun.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise seçin — ev, konut, standart pencereler",
              "Plise seçin — pile estetiği, yumuşak görünüm",
              "Plise seçin — üstten/alttan bağımsız açılım",
              "Plise seçin — kolay montaj, DIY",
              "Dikey seçin — geniş pencere (3m+)",
              "Dikey seçin — ofis, ticari mekan",
              "Dikey seçin — cam balkon, sürme kapı",
              "Dikey seçin — lamel açısı ile ışık yönü kontrolü",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi dikey perde mi daha iyi?",
          answer: "Ev ve konutlarda standart pencereler için plise perde daha uygun. Geniş pencereler, ofis ve cam balkonlar için dikey perde daha iyi. Plise perde üstten/alttan bağımsız açılım sunar, dikey perde lamel açısı ile ışık yönünü kontrol eder.",
        },
        {
          question: "Dikey perde geniş pencere için uygun mu?",
          answer: "Evet, dikey perde geniş pencereler (3m+) için en uygun sistemdir. Lamel ray sistemi yana kayarak geniş pencereyi tam açar. Sürme cam balkon kapıları ve yüksek tavanlı mekanlar için ideal.",
        },
        {
          question: "Hangisi daha ucuz?",
          answer: "Fiyatlar yakındır. M² bazında plise 450-3500 TL, dikey perde 400-3000 TL aralığında. Dikey perde standart modellerde biraz daha ekonomik olabilir.",
        },
        {
          question: "Hangisi daha iyi ışık kontrolü sağlar?",
          answer: "Ihtiyaca göre değişir. Işığın yönünü kontrol etmek istiyorsanız dikey perde lamel açısı ile daha hassastır. Işık miktarını kademeli ayarlamak ve üstten/alttan bağımsız açmak istiyorsanız plise perde daha esnek.",
        },
        {
          question: "Dikey perde evde kullanılır mı?",
          answer: "Evet, kullanılabilir ancak daha çok ofis ve ticari mekanlarda tercih edilir. Evde geniş pencere veya cam balkon varsa dikey perde uygun olabilir. Standart ev pencereleri için plise perde daha pratik ve estetik.",
        },
      ]}
    />
  );
}
