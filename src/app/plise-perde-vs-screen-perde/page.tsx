import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Screen Perde — Karşılaştırma",
  description:
    "Plise perde vs screen perde karşılaştırması. Güneşlik, ışık filtreleme, güneş cephesi, UV koruma, fiyat, montaj, temizlik. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-screen-perde",
});

export default function PliseVsScreenPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Screen Perde"
      description="Plise perde vs screen perde karşılaştırması. Işık filtreleme, UV koruma, güneş cephesi, fiyat, montaj."
      slug="plise-perde-vs-screen-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/plise-perde-modelleri" }, { name: "Plise vs Screen", url: "/plise-perde-vs-screen-perde" }]}
      h1="Plise Perde vs Screen Perde — Hangisi Daha İyi?"
      intro="Plise perde ve screen perde (güneşlik perde), ışık filtreleme konusunda farklı yaklaşım sunan iki çözümdür. Screen perde, özel dokuma yapısı ile güneş ışığını filtreler, UV ışınlarını keser ve dış görünüşü kısmen korur — özellikle güneş cepheli ofis ve cam balkonlar için idealdir. Plise perde ise güneşlik kumaş seçeneği ile benzer filtreleme sağlar, ancak tül ve blackout seçenekleriyle daha esnek bir kullanım sunar. Bu karşılaştırmada ışık filtreleme, UV koruma, güneş cephesi uyumu, fiyat ve montaj açısından ikisini detaylıca inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Screen Perde Karşılaştırması",
        description: "Plise perde ve screen perde karşılaştırması — ışık filtreleme, UV koruma, güneş cephesi, fiyat.",
      }}
      sections={[
        {
          h2: "Çalışma Prensibi Farkı",
          paragraphs: [
            "Plise perde, <strong>kumaşı pile katlayarak</strong> yukarı-aşağı hareket ettirir. Tül, güneşlik (screen), yarı karartma ve blackout kumaş seçenekleri sunar. Pencere içine monte edilir ve hem üstten hem alttan açılabilir.",
            "Screen perde (güneşlik perde), <strong>özel dokuma yapısına sahip</strong> polyester+PVC kumaşı ile güneş ışığını filtreler. Kumaş, mikroskobik delikler içerir — ışığın bir kısmını geçirir, UV ışınlarını keser ve dışarıdan içeriyi zor gördürür. Genellikle stor veya zip sistem olarak çalışır, sadece yukarı-aşağı açılır.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Screen Perde"],
            rows: [
              ["Kumaş türü", "Tül/güneşlik/blackout", "Sadece screen (güneşlik)"],
              ["Işık geçirgenliği", "%0-90 (kumaşa göre)", "%3-10 (screen dokuma)"],
              ["UV koruma", "Güneşlik kumaş ile", "Her zaman (screen özelliği)"],
              ["Dış görünüş", "Kumaşa göre değişir", "Kısmen korunur"],
              ["Açılma yönü", "Üstten + alttan", "Sadece yukarı-aşağı"],
              ["Kumaş yapısı", "Pile katlı", "Düz (stor/zip)"],
            ],
          },
        },
        {
          h2: "Işık Filtreleme ve UV Koruma",
          paragraphs: [
            "Screen perde <strong>UV ışınlarını %95-99 oranında keser</strong>. Özel dokuma yapısı, güneş ışının zararlı UV bileşenini filtrelerken görünür ışığın bir kısmını geçirir. Bu sayede mobilya, zemin ve eşyalar güneşten zarar görmez.",
            "Plise perde güneşlik kumaş seçildiğinde benzer UV koruma sağlar, ancak <em>ek olarak</em> tül (maksimum ışık) ve blackout (tam karartma) seçenekleri de sunar. Screen perde sadece güneşlik seviyesinde çalışır — daha fazla ışık veya tam karanlık istenemez.",
          ],
          list: {
            type: "ul",
            items: [
              "Screen — UV ışınları %95-99 kesilir",
              "Plise güneşlik — benzer UV koruma",
              "Screen — dış görünüş kısmen korunur",
              "Plise — tül ile maksimum ışık, blackout ile tam karanlık",
              "Screen — sadece güneşlik seviyesi",
              "Plise — esnek kumaş seçimi (tül/güneşlik/blackout)",
            ],
          },
        },
        {
          h2: "Güneş Cephesi ve Kullanım Alanı",
          paragraphs: [
            "Screen perde <strong>güneş cepheli pencereler</strong> için optimize edilmiştir. Güney ve batı cephelerinde, güneş ışının yoğun olduğu ofis, çalışma odası ve cam balkonlarda ekran yansımasını azaltır ve ortamı serin tutar.",
            "Plise perde de güneşlik kumaş ile güneş cephesinde kullanılabilir, ancak <em>ek esneklik</em> sağlar — kışın tül kumaş ile daha fazla ışık, yazın güneşlik ile filtreleme. Tek perdede bu esnekliği sağlamak için gece/gündüz (düet) plise perde tercih edilebilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Screen — güney/batı cepheleri için ideal",
              "Screen — ofis, çalışma odası, cam balkon",
              "Screen — ekran yansımasını azaltır",
              "Plise — güneşlik + tül + blackout esnekliği",
              "Plise — mevsime göre kumaş seçimi",
              "Plise — gece/gündüz ile tek perdede çözüm",
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Screen perde <strong>genelde daha ekonomiktir</strong> çünkü tek kumaş türü kullanılır ve mekanizma daha basittir (stor veya zip). Plise perde, alüminyum profil ve ip mekanizması nedeniyle daha maliyetlidir. <em>M² bazında screen perde 300-2000 TL</em>, plise 450-3500 TL aralığında.",
          ],
          table: {
            headers: ["Model", "Plise Perde (Güneşlik)", "Screen Perde"],
            rows: [
              ["Standart (screen)", "600-1200 TL", "300-800 TL"],
              ["Premium screen", "1000-2000 TL", "600-1500 TL"],
              ["Motorlu", "1800-3500 TL", "1200-3000 TL"],
              ["Gece/gündüz (tül+screen)", "900-2000 TL", "—"],
              ["Montaj", "100-300 TL", "100-250 TL"],
            ],
          },
        },
        {
          h2: "Montaj ve Temizlik",
          paragraphs: [
            "Screen perde montajı <strong>daha basittir</strong> — stor sistem olarak pencere üzerine takılır. Düz kumaş, nemli bez ile kolayca temizlenir. Plise perde, pile katlı yapı nedeniyle daha fazla bakım gerektirir.",
          ],
          list: {
            type: "ol",
            items: [
              "Screen — stor montaj, basit ve hızlı",
              "Plise — pencere içi profil montajı, daha teknik",
              "Screen — düz kumaş, nemli bez ile tek geçiş",
              "Plise — pile kıvrımları arası toz tutabilir",
              "Screen — daha az toz biriktirir",
              "Plise — kumaş çıkarılabilir, daha fazla bakım",
            ],
          },
        },
        {
          h2: "Estetik ve Görünüm",
          paragraphs: [
            "Screen perde <strong>düz ve modern</strong> görünüm sunar. Kumaş pencereyi düz olarak örter, pile yapısı yoktur. Ofis ve modern mekanlar için uygundur. Plise perde ise <em>pile katlı dokusu</em> ile daha sıcak ve dekoratif bir görünüm verir.",
          ],
          list: {
            type: "ul",
            items: [
              "Screen — düz, modern, endüstriyel görünüm",
              "Plise — pile katlı, yumuşak, sıcak görünüm",
              "Screen — ofis ve çağdaş mekanlar için",
              "Plise — ev ve konut için daha sıcak",
              "Screen — dışarıdan düz görünüm",
              "Plise — dışarıdan pile doku görünümü",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Screen perde <strong>güneş cepheli ofis ve cam balkon</strong> için ekonomik ve etkili çözümdür. Plise perde <em>esnek kumaş seçimi ve pile estetiği</em> isteyenler için daha uygun.",
          ],
          list: {
            type: "ul",
            items: [
              "Screen seçin — güneş cepheli ofis, çalışma odası",
              "Screen seçin — ekonomik fiyat",
              "Screen seçin — UV koruma ve ekran yansıması azaltma",
              "Screen seçin — cam balkon, modern mekan",
              "Plise seçin — ev, konut, sıcak görünüm",
              "Plise seçin — tül + güneşlik + blackout esnekliği",
              "Plise seçin — üstten/alttan bağımsız açılım",
              "Plise seçin — gece/gündüz ile tek perdede çözüm",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi screen perde mi daha iyi?",
          answer: "Güneş cepheli ofis ve cam balkon için ekonomik UV koruma istiyorsanız screen perde tercih edin. Evde esnek kumaş seçimi (tül, güneşlik, blackout) ve pile estetiği istiyorsanız plise perde daha uygun.",
        },
        {
          question: "Screen perde UV koruması sağlar mı?",
          answer: "Evet, screen perde özel dokuma yapısı ile UV ışınlarını %95-99 oranında keser. Mobilya, zemin ve eşyaları güneşten korur. Plise perde güneşlik kumaş ile benzer koruma sağlar.",
        },
        {
          question: "Hangisi daha ucuz?",
          answer: "Screen perde genelde daha ekonomiktir. M² bazında screen perde 300-2000 TL, plise güneşlik 600-3500 TL aralığında. Screen perde tek kumaş türü ve basit mekanizma ile düşük maliyetlidir.",
        },
        {
          question: "Screen perde tam karartma yapar mı?",
          answer: "Hayır, screen perde sadece güneşlik seviyesinde çalışır. Işığın %3-10'unu geçirir. Tam karartma için plise perde blackout kumaş veya ayrı bir karartma perde kullanmanız gerekir.",
        },
        {
          question: "Plise perde güneşlik kumaş screen perde ile aynı mı?",
          answer: "Benzer ama aynı değil. Plise perde güneşlik kumaşı da UV koruma sağlar ve ışığı filtreler, ancak pile katlı yapıda olduğu için görünüm ve çalışma prensibi farklıdır. Screen perde düz kumaş ile çalışır, plise perde pile yaparak çalışır.",
        },
      ]}
    />
  );
}
