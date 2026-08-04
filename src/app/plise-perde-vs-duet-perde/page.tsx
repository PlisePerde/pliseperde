import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Düet Perde — Karşılaştırma",
  description:
    "Plise perde vs düet perde karşılaştırması. Duette perde, gece gündüz kumaş, ışık kontrolü, fiyat, montaj, temizlik. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-duet-perde",
});

export default function PliseVsDuetPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Düet Perde"
      description="Plise perde vs düet perde karşılaştırması. Işık kontrolü, fiyat, montaj, temizlik, dayanıklılık."
      slug="plise-perde-vs-duet-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Düet", url: "/plise-perde-vs-duet-perde" }]}
      h1="Plise Perde vs Düet Perde — Hangisi Daha İyi?"
      intro="Plise perde ve düet perde, esnek ışık kontrolü sunan iki popüler pencere çözümüdür. Düet perde (aynı zamanda Duette perde olarak da bilinir), tek bir perdede iki farklı kumaş türünü birleştirir — genellikle tül ve blackout. Plise perde ise tek kumaş katmanını pile yaparak çalışır. Bu karşılaştırmada ışık kontrolü, fiyat, montaj, temizlik ve estetik açısından ikisini detaylıca inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Düet Perde Karşılaştırması",
        description: "Plise perde ve düet perde karşılaştırması — ışık kontrolü, fiyat, montaj, temizlik.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-duet-perde.webp"
          alt="Plise Perde vs Düet Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Çalışma Prensibi Farkı",
          paragraphs: [
            "Plise perde, <strong>tek kumaş katmanını</strong> ip mekanizması ile yukarı-aşağı hareket ettirir. Kumaş pile katlı yapısıyla katlanır. Tek bir kumaş türü kullanılır — tül, güneşlik, yarı karartma veya blackout.",
            "Düet perde (Duette perde), <strong>iki farklı kumaş türünü</strong> tek bir perde sisteminde birleştirir. Üst kısımda tül veya güneşlik, alt kısımda blackout kumaş bulunur. Perdeyi hangi konumda açtığınıza bağlı olarak <u>farklı ışık seviyeleri</u> elde edersiniz — gündüz modu (tül), gece modu (blackout) veya yarı aydınlık mod.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Düet Perde"],
            rows: [
              ["Kumaş katmanı", "Tek", "Çift (tül + blackout)"],
              ["Işık modu", "Tek seviye", "Gece/gündüz (iki mod)"],
              ["Açılma yönü", "Üstten + alttan", "Üstten + alttan"],
              ["Tam karartma", "Blackout kumaş ile", "Blackout katman ile"],
              ["Gündüz ışık", "Tül kumaş ile", "Tül katman ile"],
              ["Kalınlık", "İnce", "Daha kalın (iki kumaş)"],
            ],
          },
        },
        {
          h2: "Işık Kontrolü ve Esneklik",
          paragraphs: [
            "Düet perde, <strong>gece ve gündüz modlarını</strong> tek perdede sunarak en esnek ışık kontrolünü sağlar. Gündüz tül katmanını kullanarak maksimum ışık alır, gece blackout katmanını indirerek tam karanlık sağlarsınız. Ayrı tül ve blackout perde almaya gerek yoktur.",
            "Plise perde ise tek kumaş türü kullanır. Tam karartma istiyorsanız blackout plise perde seçersiniz, ama gündüz maksimum ışık alamazsınız. Tül isterseniz gündüz ışık alır ama gece tam karanlık olmaz. <em>Düet perde bu ikisini tek perdede çözer.</em>",
          ],
          list: {
            type: "ul",
            items: [
              "Düet — gece modu (blackout) ve gündüz modu (tül) tek perdede",
              "Plise — tek kumaş, tek ışık seviyesi",
              "Düet — ara konumda yarı aydınlık mod",
              "Plise — blackout seçilirse gündüz ışık azalır",
              "Düet — ayrı tül ve blackout perde almaya gerek yok",
              "Plise — daha basit mekanizma, daha az arıza riski",
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Plise perde <strong>genelde daha ekonomiktir</strong>. Düet perde (Duette perde), iki farklı kumaşı tek sistemde birleştirdiği için daha maliyetlidir. <em>M² bazında plise 450-3500 TL</em>, düet perde 900-5000 TL aralığında fiyatlanır.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Düet Perde"],
            rows: [
              ["Standart (tül)", "450-1100 TL", "—"],
              ["Gece/gündüz", "—", "900-2000 TL"],
              ["Karartma", "700-1400 TL", "—"],
              ["Premium gece/gündüz", "—", "1500-3500 TL"],
              ["Motorlu", "1800-3500 TL", "2500-5000 TL"],
              ["Montaj", "100-300 TL", "150-350 TL"],
            ],
          },
        },
        {
          h2: "Montaj ve Temizlik",
          paragraphs: [
            "Montaj açısından <strong>ikisi de benzer</strong>. Vidalı, yapışkanlı ve kancalı montaj tipleri her ikisinde de mevcuttur. Düet perde, iki kumaş katmanı nedeniyle profil daha geniştir.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — tek kumaş, nemli bez ile silinir",
              "Düet — çift kumaş, katman araları temizliği zor",
              "Plise — daha ince profil, pencerede az yer kaplar",
              "Düet — daha kalın profil, pencere derinliği gerekir",
              "Plise — kumaş çıkarılması kolay",
              "Düet — kumaş çıkarılması daha kompleks",
            ],
          },
        },
        {
          h2: "Estetik ve Görünüm",
          paragraphs: [
            "Plise perde <strong>daha ince ve hafif</strong> görünüm sunar. Tek kumaş katmanı pencere içinde neredeyse görünmez. Düet perde ise iki kumaş katmanı nedeniyle daha dolu görünür, ancak <em>gece ve gündüz kumaşlarının kontrastı</em> dekoratif bir etki yaratabilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — ince, hafif, minimalist görünüm",
              "Düet — daha dolu, katmanlı görünüm",
              "Plise — tek renk, tek doku",
              "Düet — iki farklı kumaş rengi/dokusu kombinasyonu",
              "Plise — küçük pencerelerde daha uygun",
              "Düet — büyük pencerelerde etkileyici",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Plise perde <strong>ekonomik fiyat ve ince görünüm</strong> isteyenler için idealdir. Düet perde (Duette perde) <em>hem gece hem gündüz tek perdede</em> çözüm arayanlar için en doğru seçimdir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise seçin — ekonomik fiyat",
              "Plise seçin — ince, hafif görünüm",
              "Plise seçin — tek ışık seviyesi yeterliyse",
              "Plise seçin — küçük pencereler",
              "Düet seçin — gece/gündüz tek perdede",
              "Düet seçin — ayrı tül + blackout almaktan kaçının",
              "Düet seçin — esnek ışık kontrolü öncelikli",
              "Düet seçin — büyük pencereler",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi düet perde mi daha iyi?",
          answer: "Hem gece hem gündüz tek perdede çözmek istiyorsanız düet perde (Duette perde) tercih edin. Ekonomik fiyat ve ince görünüm istiyorsanız plise perde daha uygundur. Düet perde, ayrı tül ve blackout perde almaya gerek bırakmaz.",
        },
        {
          question: "Düet perde nedir?",
          answer: "Düet perde (Duette perde), tek bir perde sisteminde iki farklı kumaş türünü birleştiren perdedir. Üst kısımda tül veya güneşlik, alt kısımda blackout kumaş bulunur. Perdeyi açtığınız konuma göre gündüz modu (tül), gece modu (blackout) veya yarı aydınlık mod elde edersiniz.",
        },
        {
          question: "Hangisi daha ucuz?",
          answer: "Plise perde genelde daha ekonomiktir. M² bazında plise 450-3500 TL, düet perde 900-5000 TL aralığında. Düet perde, iki kumaşı tek sistemde birleştirdiği için daha maliyetlidir.",
        },
        {
          question: "Düet perde tam karartma yapar mı?",
          answer: "Evet, düet perdenin blackout katmanı tam karartma sağlar. Gece moduna geçtiğinizde blackout kumaş pencereyi örter ve ışığın %99'unu keser. Gündüz modunda ise tül katman ile maksimum ışık alırsınız.",
        },
        {
          question: "Hangisi daha kolay temizlenir?",
          answer: "Plise perde daha kolay temizlenir. Tek kumaş katmanı nemli bez ile silinir. Düet perdede iki kumaş katmanı ve katman araları temizliği daha zordur.",
        },
      ]}
    />
  );
}
