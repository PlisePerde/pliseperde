import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Karartma Perde — Karşılaştırma",
  description:
    "Plise perde vs karartma perde karşılaştırması. Blackout perde, ışık geçirgenliği, tam karanlık, uyku kalitesi, fiyat, montaj. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-karartma-perde",
});

export default function PliseVsKarartmaPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Karartma Perde"
      description="Plise perde vs karartma perde karşılaştırması. Işık kontrolü, tam karanlık, uyku, fiyat, montaj."
      slug="plise-perde-vs-karartma-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/plise-perde-modelleri" }, { name: "Plise vs Karartma", url: "/plise-perde-vs-karartma-perde" }]}
      h1="Plise Perde vs Karartma Perde — Hangisi Daha İyi?"
      intro="Plise perde ve karartma perde (blackout perde), ışık kontrolü konusunda farklı yaklaşım sunan iki perde türüdür. Karartma perde, ışığın %99'unu keserek tam karanlık sağlar — yatak odası ve sinema odası için idealdir. Plise perde ise hem tül hem blackout kumaş seçenekleriyle daha esnek bir kullanım sunar. Bu karşılaştırmada ışık geçirgenliği, uyku kalitesi, fiyat, montaj ve temizlik açısından ikisini detaylıca inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Karartma Perde Karşılaştırması",
        description: "Plise perde ve karartma perde karşılaştırması — ışık kontrolü, tam karanlık, uyku, fiyat.",
      }}
      sections={[
        {
          h2: "Işık Geçirgenliği Farkı",
          paragraphs: [
            "Karartma perde (blackout perde), <strong>ışığın %99'unu keser</strong>. Kumaşın arka yüzeyindeki kauçuk tabaka, hiçbir ışığın geçmesine izin vermez. Tam kapalı konumda oda zifiri karanlık olur.",
            "Plise perde ise <strong>farklı kumaş türleri</strong> sunar: tül (%70-90 ışık geçirir), güneşlik (%40-60), yarı karartma (%10-30) ve blackout (%0-1). Yani plise perde, blackout kumaş seçilirse karartma perde ile aynı sonucu verir, ama tül veya güneşlik kumaş seçilirse daha fazla ışık geçirir.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Karartma Perde"],
            rows: [
              ["Işık geçirgenliği", "%0-90 (kumaşa göre)", "%0-1 (sadece blackout)"],
              ["Kumaş seçeneği", "Tül, güneşlik, blackout", "Sadece blackout"],
              ["Tam karanlık", "Blackout kumaş ile", "Her zaman"],
              ["Gündüz ışık", "Tül/güneşlik ile mümkün", "Mümkün değil"],
              ["Esneklik", "Yüksek (kumaş değiştirilebilir)", "Düşük (sadece karartma)"],
            ],
          },
        },
        {
          h2: "Uyku Kalitesi ve Kullanım Alanı",
          paragraphs: [
            "Karartma perde, <strong>yatak odası ve sinema odası</strong> için optimize edilmiştir. Tam karanlık ortam, melatonin üretimini destekler ve uyku kalitesini artırır. Gece çalışıp gündüz uyuyanlar için vazgeçilmezdir.",
            "Plise perde blackout kumaş ile de aynı karanlığı sağlar, ancak <em>esneklik avantajı</em> vardır — aynı perdeyi farklı odalarda farklı kumaşlarla kullanabilirsiniz. Ayrıca gece gündüz (düet) plise perde ile hem gündüz ışık hem gece karanlık tek perdede mümkündür.",
          ],
          list: {
            type: "ul",
            items: [
              "Karartma perde — her zaman tam karanlık, uyku için optimal",
              "Plise blackout — aynı karanlık, ama kumaş değiştirilebilir",
              "Karartma perde — yatak odası ve sinema odası için",
              "Plise — tüm odalar için esnek çözüm",
              "Plise gece/gündüz — gündüz tül + gece blackout tek perdede",
              "Karartma perde — gündüz ışık almak için perdeyi tam açmak gerekir",
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Standart karartma perde <strong>genelde daha ekonomiktir</strong> çünkü tek kumaş türü kullanılır. Plise perde blackout kumaş seçildiğinde fiyatlar yakındır, ancak tül veya gece/gündüz seçenekleri fiyatı değiştirir. <em>M² bazında karartma perde 300-2000 TL</em>, plise blackout 700-3500 TL aralığında.",
          ],
          table: {
            headers: ["Model", "Plise Perde (Blackout)", "Karartma Perde"],
            rows: [
              ["Standart blackout", "700-1400 TL", "300-800 TL"],
              ["Premium blackout", "1200-2500 TL", "600-1500 TL"],
              ["Motorlu blackout", "1800-3500 TL", "1200-3000 TL"],
              ["Gece/gündüz (tül+blackout)", "900-2000 TL", "—"],
              ["Montaj", "100-300 TL", "100-250 TL"],
            ],
          },
        },
        {
          h2: "Montaj ve Temizlik",
          paragraphs: [
            "Montaj açısından <strong>ikisi de benzer</strong>. Pencere içine vidalı, yapışkanlı veya kancalı takılır. Temizlik açısından karartma perde daha kolaydır — düz kumaş yüzeyi nemli bez ile tek geçişte temizlenir.",
          ],
          list: {
            type: "ol",
            items: [
              "Karartma perde — düz kumaş, nemli bez ile kolay temizlik",
              "Plise — pile katlı yapı, kıvrım araları toz tutabilir",
              "Karartma perde — kauçuk kaplama suya dayanıklı",
              "Plise — blackout kumaşın kauçuk tabakası temizliğe uygun",
              "Karartma perde — daha az toz biriktirir",
              "Plise — daha sık toz alma gerekir",
            ],
          },
        },
        {
          h2: "Estetik ve Görünüm",
          paragraphs: [
            "Karartma perde <strong>düz ve opak</strong> görünüm sunar. Kumaş pencereyi tam örter, pile yapısı yoktur. Plise perde ise <em>pile katlı estetik dokusu</em> ile daha dekoratif görünür.",
          ],
          list: {
            type: "ul",
            items: [
              "Karartma perde — düz, opak, sade görünüm",
              "Plise — pile katlı, dekoratif doku",
              "Karartma perde — modern ve minimalist",
              "Plise — yumuşak ve sıcak atmosfer",
              "Karartma perde — tek renk, blackout kumaş",
              "Plise — blackout kumaş + pile doku kombinasyonu",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Karartma perde <strong>sadece tam karanlık</strong> isteyenler için idealdir. Plise perde blackout kumaş ile <em>hem tam karanlık hem de esneklik</em> isteyenler için daha uygun.",
          ],
          list: {
            type: "ul",
            items: [
              "Karartma perde seçin — sadece tam karanlık yeterliyse",
              "Karartma perde seçin — ekonomik fiyat öncelikli",
              "Karartma perde seçin — yatak odası, sinema odası",
              "Plise blackout seçin — tam karanlık + pile estetiği",
              "Plise seçin — farklı odalarda farklı kumaş esnekliği",
              "Plise gece/gündüz seçin — gündüz ışık + gece karanlık",
              "Plise seçin — tüm ev için tek sistem",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi karartma perde mi daha iyi?",
          answer: "Sadece tam karanlık istiyorsanız karartma perde yeterli ve daha ekonomiktir. Hem tam karanlık hem de gündüz ışık esnekliği istiyorsanız plise perde blackout veya gece/gündüz kumaş ile daha uygun.",
        },
        {
          question: "Plise perde tam karartma yapar mı?",
          answer: "Evet, plise perde blackout kumaş seçildiğinde ışığın %99'unu keser ve karartma perde ile aynı karanlığı sağlar. Ayrıca gece/gündüz (düet) kumaş ile gündüz tül, gece blackout modunu tek perdede sunar.",
        },
        {
          question: "Hangisi daha ucuz?",
          answer: "Standart karartma perde genelde daha ekonomiktir. M² bazında karartma perde 300-2000 TL, plise blackout 700-3500 TL aralığında. Karartma perde tek kumaş türü kullandığı için maliyeti düşüktür.",
        },
        {
          question: "Yatak odası için hangisi daha uygun?",
          answer: "İkisi de uygundur. Sadece uyku için tam karanlık yeterliyse karartma perde ekonomik seçimdir. Yatak odasında gündüz de ışık almak istiyorsanız plise gece/gündüz perde daha esnektir.",
        },
        {
          question: "Karartma perde gündüz ışık alır mı?",
          answer: "Hayır, karartma perde sadece blackout kumaş kullanır. Gündüz ışık almak için perdeyi tamamen açmanız gerekir. Plise perde ise tül veya güneşlik kumaş ile gündüz ışık alırken gece blackout ile karanlık sağlar.",
        },
      ]}
    />
  );
}
