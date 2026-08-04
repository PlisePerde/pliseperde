import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Japon Perde — Karşılaştırma",
  description:
    "Plise perde vs japon perde karşılaştırması. Panjur, stor, ışık kontrolü, estetik, fiyat, montaj, temizlik. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-japon-perde",
});

export default function PliseVsJaponPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Japon Perde"
      description="Plise perde vs japon perde karşılaştırması. Işık kontrolü, estetik, fiyat, montaj, temizlik."
      slug="plise-perde-vs-japon-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Japon", url: "/plise-perde-vs-japon-perde" }]}
      h1="Plise Perde vs Japon Perde — Hangisi Daha İyi?"
      intro="Plise perde ve japon perde (panjur), farklı çalışma prensiplerine sahip iki pencere çözümüdür. Plise perde kumaşı pile yaparak yukarı-aşağı hareket ettirir, japon perde (panjur) ise yatay lamel veya düz kumaşı yukarı toplar. Japon perde, özellikle dış cephe gölgeleme ve tam karartma için yaygın kullanılırken, plise perde iç mekanda esnek ışık kontrolü sunar. Bu karşılaştırmada çalışma prensibi, ışık kontrolü, estetik, fiyat ve montaj açısından ikisini detaylıca inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Japon Perde Karşılaştırması",
        description: "Plise perde ve japon perde karşılaştırması — ışık kontrolü, estetik, fiyat, montaj.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-japon-perde.webp"
          alt="Plise Perde vs Japon Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Çalışma Prensibi Farkı",
          paragraphs: [
            "Plise perde, <strong>kumaşı pile katlayarak</strong> yukarı-aşağı hareket ettirir. İp mekanizması ile kumaş istenen yükseklikte durur. Hem üstten hem alttan açılabilir.",
            "Japon perde (panjur), <strong>düz kumaşı yukarı toplayarak</strong> çalışır. Kumaş pile yapmaz, düz bir panel olarak aşağı iner ve yukarı toplandığında profil kutusuna sarılır. Sadece yukarı-aşağı açılır, üstten aşağı açılamaz.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Japon Perde"],
            rows: [
              ["Kumaş yapısı", "Pile katlı", "Düz panel"],
              ["Açılma yönü", "Üstten + alttan", "Sadece yukarı-aşağı"],
              ["Toplu görünüm", "Pile katlı, kompakt", "Profil kutusunda gizli"],
              ["Işık kontrolü", "Kademeli", "Tam açık / tam kapalı"],
              ["Tam karartma", "Blackout kumaş ile", "Blackout kumaş ile"],
              ["Montaj konumu", "İç mekan", "İç veya dış cephe"],
            ],
          },
        },
        {
          h2: "Işık Kontrolü ve Esneklik",
          paragraphs: [
            "Plise perde <strong>daha esnek ışık kontrolü</strong> sağlar. Kumaşı istediğiniz yükseklikte durdurabilir, üstten açık alttan kapalı yapabilirsiniz. Kademeli ışık ayarı ile oda aydınlık seviyesini hassas kontrol edersiniz.",
            "Japon perde ise genellikle <strong>tam açık veya tam kapalı</strong> çalışır. Kumaşı yarıya kadar indirebilirsiniz ama pile yapısı olmadığı için kademeli ışık ayarı daha sınırlıdır. <em>Üstten açık alttan kapalı</em> gibi bağımsız açılım mümkün değildir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — kademeli ayar, üstten/alttan bağımsız",
              "Japon — tam açık veya tam kapalı",
              "Plise — daha hassas ışık ayarı",
              "Japon — düz kumaş, pile yok",
              "Plise — ara konumlarda estetik pile görünüm",
              "Japon — ara konumda düz panel görünüm",
            ],
          },
        },
        {
          h2: "Estetik ve Görünüm",
          paragraphs: [
            "Plise perde <strong>pile katlı dokusu</strong> ile yumuşak ve sıcak bir görünüm sunar. Kumaşın kıvrımları pencereye dekoratif bir doku katar. Toplu halde bile pile yapısı görünür.",
            "Japon perde ise <strong>düz ve temiz</strong> görünüm sunar. Kumaş tamamen düz iner, pile yapısı yoktur. Toplu halde profil kutusunda gizlenir — pencere tamamen açık görünür. Modern ve minimalist mekanlar için uygundur.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — pile katlı, yumuşak doku",
              "Japon — düz panel, temiz görünüm",
              "Plise — sıcak ve dekoratif atmosfer",
              "Japon — modern ve minimalist",
              "Plise — toplu halde pile görünür",
              "Japon — toplu halde kutuda gizlenir",
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Fiyat açısından <strong>ikisi de yakındır</strong>. Japon perde, düz kumaş kullandığı için kumaş maliyeti düşüktür ancak mekanizma daha komplekstir. Plise perde, pile kumaş üretimi daha maliyetlidir ama mekanizma daha basittir. <em>M² bazında plise 450-3500 TL</em>, japon perde 400-3000 TL aralığında.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Japon Perde"],
            rows: [
              ["Standart (tül)", "450-1100 TL", "400-900 TL"],
              ["Karartma", "700-1400 TL", "600-1200 TL"],
              ["Premium", "1200-3500 TL", "1000-3000 TL"],
              ["Motorlu", "1800-3500 TL", "1500-3500 TL"],
              ["Montaj", "100-300 TL", "150-350 TL"],
            ],
          },
        },
        {
          h2: "Montaj ve Temizlik",
          paragraphs: [
            "Plise perde montajı <strong>daha basittir</strong> — pencere içine vidalı, yapışkanlı veya kancalı takılır, DIY mümkündür. Japon perde montajı daha komplekstir, genellikle profesyonel montaj önerilir.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — pencere içi montaj, DIY mümkün",
              "Japon — pencere üstü veya dış montaj, profesyonel önerilir",
              "Plise — pile kumaş, kıvrım araları toz tutabilir",
              "Japon — düz kumaş, nemli bez ile kolay temizlik",
              "Plise — kumaş çıkarılabilir",
              "Japon — kumaş çıkarma daha kompleks",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Plise perde <strong>esnek ışık kontrolü ve pile estetiği</strong> isteyenler için idealdir. Japon perde <em>modern, düz görünüm ve minimalist tasarım</em> tercih edenler için uygundur.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise seçin — esnek ışık, üstten/alttan bağımsız",
              "Plise seçin — pile katlı, sıcak görünüm",
              "Plise seçin — kolay montaj, DIY",
              "Plise seçin — tüm oda türleri için esnek",
              "Japon seçin — modern, düz, minimalist görünüm",
              "Japon seçin — toplu halde gizli kumaş",
              "Japon seçin — tam açık/tam kapalı kullanım",
              "Japon seçin — dış cephe gölgeleme",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi japon perde mi daha iyi?",
          answer: "Esnek ışık kontrolü ve pile estetiği istiyorsanız plise perde tercih edin. Modern, düz ve minimalist görünüm istiyorsanız japon perde uygundur. Plise perde üstten/alttan bağımsız açılım sunar, japon perde ise sadece yukarı-aşağı açılır.",
        },
        {
          question: "Japon perde nedir?",
          answer: "Japon perde (panjur), düz kumaşı yukarı toplayarak çalışan bir perde sistemidir. Kumaş pile yapmaz, düz panel olarak iner ve yukarı toplandığında profil kutusunda gizlenir. Modern ve minimalist görünüm sunar.",
        },
        {
          question: "Hangisi daha ucuz?",
          answer: "Fiyatlar yakındır. M² bazında plise 450-3500 TL, japon perde 400-3000 TL aralığında. Japon perde düz kumaş kullandığı için kumaş maliyeti düşüktür, ancak montaj daha komplekstir.",
        },
        {
          question: "Hangisi daha iyi ışık kontrolü sağlar?",
          answer: "Plise perde daha esnek ışık kontrolü sağlar. Kumaşı istediğiniz yükseklikte durdurabilir, üstten açık alttan kapalı yapabilirsiniz. Japon perde ise genellikle tam açık veya tam kapalı çalışır, kademeli ayar daha sınırlıdır.",
        },
        {
          question: "Hangisi daha kolay temizlenir?",
          answer: "Japon perde daha kolay temizlenir. Düz kumaş yüzeyi nemli bez ile tek geçişte silinir. Plise perdede pile kıvrımları arası toz tutabilir, daha sık temizlik gerekir.",
        },
      ]}
    />
  );
}
