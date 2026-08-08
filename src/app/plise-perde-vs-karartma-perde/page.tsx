import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Karartma Perde — Karşılaştırma",
  description:
    "Plise perde ve karartma (blackout) perde karşılaştırması. Işık kesme oranı, uyku verimliliği, kumaş esnekliği, fiyat ve bakım farkları. Doğru seçim için rehber.",
  slug: "plise-perde-vs-karartma-perde",
});

export default function PliseVsKarartmaPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Karartma Perde"
      description="Plise perde ve karartma (blackout) perde karşılaştırması. Işık kesme, uyku, kumaş esnekliği, fiyat, bakım."
      slug="plise-perde-vs-karartma-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Karartma", url: "/plise-perde-vs-karartma-perde" }]}
      h1="Plise Perde ile Karartma Perde Arasındaki Farklar Nelerdir?"
      intro="Karartma perde (blackout), ışığın neredeyse tamamını durdurmak üzere tasarlanmış tek işlevli bir üründür; plise perde ise tül, güneşlik ve blackout dahil birden fazla kumaşla çalışabilen çok yönlü bir sistemdir. Biri karanlık odaklı, diğeri esneklik odaklıdır. Bu yazıda ışık geçirgenliği, uyku düzeni, bütçe, kurulum ve görsel tarz başlıklarını karşılaştırarak ihtiyacınıza uygun tarafı belirlemenize yardımcı oluyoruz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Karartma Perde Karşılaştırması",
        description: "Plise perde ve karartma perde karşılaştırması — ışık kesme, uyku, kumaş esnekliği, fiyat, bakım.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-karartma-perde.webp"
          alt="Plise Perde vs Karartma Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Karanlık Odaklı Tasarım Karşı Pile Esnekliği",
          paragraphs: [
            "Blackout perde, arka yüzeyine sürülen <strong>kauçuk tabaka</strong> sayesinde ışığın yaklaşık %99'unu durdurur. Kapalı konumda mekan zifiri karanlığa bürünür ve bu özellik sabit olarak her zaman aktiftir.",
            "Plise perde ise kumaş seçimine göre <strong>çok farklı ışık seviyeleri</strong> üretir: tül %70-90 arası geçirgen, güneşlik %40-60, yarı karartma %10-30 ve blackout %0-1. Yani blackout dokuma seçildiğinde karartma perdeye eşdeğer karanlık elde edilir; tül veya güneşlik tercih edilirse ortam aydınlık kalır.",
          ],
          table: {
            headers: ["Ölçüt", "Plise Perde", "Karartma Perde"],
            rows: [
              ["Işık geçişi", "%0-90 (kumaşa bağlı)", "%0-1 (yalnızca blackout)"],
              ["Kumaş çeşitliliği", "Tül, güneşlik, blackout", "Tek tip blackout"],
              ["Karanlık modu", "Blackout kumaşla aktif", "Sürekli aktif"],
              ["Gündüz ışık alma", "Tül/güneşlik ile mümkün", "Kapalıyken imkânsız"],
              ["Kullanım esnekliği", "Yüksek", "Kısıtlı"],
            ],
          },
        },
        {
          h2: "Uyku Verimliliği ve Melatonin Döngüsü",
          paragraphs: [
            "Karartma perde <strong>uyku ortamını optimize etmek</strong> için geliştirilmiştir. Tam karanlık, melatonin salınımını destekler; gece vardiyasında çalışanlar ve gündüz uyuyanlar için kritik bir koşuldur.",
            "Plise perde blackout dokuma ile aynı karanlığı verebilir, ancak <em>asıl farkı esnekliğidir</em>: gece/gündüz (düet) kumaş ile tek perdede hem aydınlık hem karanlık modu sunulur. Böylece aynı pencerede sabah ışığı ve gece karanlığı tek sistemle yönetilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Blackout perde — kesintisiz karanlık, uyku için en yüksek verim",
              "Plise blackout — eşdeğer karanlık, kumaş değişimi esnek",
              "Blackout perde — yatak ve sinema odası odaklı",
              "Plise — tüm yaşam alanlarına uyumlu",
              "Plise düet — gündüz tül + gece blackout tek sistemde",
              "Blackout perde — gündüz ışık için perde tam açılmalı",
            ],
          },
        },
        {
          h2: "Maliyet Analizi ve Metrekare Fiyatları",
          paragraphs: [
            "Standart karartma perde <strong>daha düşük maliyetlidir</strong> çünkü tek kumaş tipi ve sade mekanizma kullanılır. Plise perde blackout dokuma seçildiğinde fiyatlar yaklaşır; düet veya motorlu modeller ise bandı yukarı çeker. <em>Karartma perde m² 300-2000 TL</em>, plise blackout m² 700-3500 TL arasında fiyatlanır.",
          ],
          table: {
            headers: ["Çeşit", "Plise Perde (Blackout)", "Karartma Perde"],
            rows: [
              ["Standart blackout", "700-1400 TL", "300-800 TL"],
              ["Premium blackout", "1200-2500 TL", "600-1500 TL"],
              ["Motorlu blackout", "1800-3500 TL", "1200-3000 TL"],
              ["Düet (tül+blackout)", "900-2000 TL", "—"],
              ["Montaj", "100-300 TL", "100-250 TL"],
            ],
          },
        },
        {
          h2: "Takma İşlemi ve Yüzey Bakımı",
          paragraphs: [
            "Montaj tarafında her iki ürün de <strong>benzer pratikliğe</strong> sahiptir: pencere içine vidalı, yapışkanlı veya kancalı takılır. Bakım tarafında ise karartma perde, düz ve kaygan yüzeyiyle daha az efor ister.",
          ],
          list: {
            type: "ol",
            items: [
              "Blackout perde — düz yüzey, nemli bezle tek geçiş",
              "Plise — pile kıvrımları toz tutmaya müsait",
              "Blackout perde — kauçuk kaplama suya dayanıklı",
              "Plise — blackout dokumanın arka tabakası silmeye uygun",
              "Blackout perde — az toz biriktirir",
              "Plise — daha sık toz alma gerekir",
            ],
          },
        },
        {
          h2: "Görsel Tarz ve Mekan Uyumu",
          paragraphs: [
            "Karartma perde <strong>düz ve opak bir yüzey</strong> sunar; pile dokusu olmadığı için pencereyi sade bir perde ile örter. Minimalist ve çağdaş iç mekanlarla kolayca bütünleşir.",
            "Plise perde ise <em>akordeon katlı dokusuyla</em> daha yumuşak bir görsel atmosfer yaratır. Pile ritmi, pencere çevresine dekoratif bir hareket katar.",
          ],
          list: {
            type: "ul",
            items: [
              "Blackout perde — düz, opak, sade yüzey",
              "Plise — pile katlı, dokulu görünüm",
              "Blackout perde — modern ve minimalist tarz",
              "Plise — sıcak ve davetkâr atmosfer",
              "Blackout perde — genelde tek renk seçenek",
              "Plise — blackout dokuma + pile ritmi bir arada",
            ],
          },
        },
        {
          h2: "Doğru Tercih Kılavuzu",
          paragraphs: [
            "Yalnızca tam karanlık aranıyorsa <strong>karartma perde</strong> en sade ve ekonomik yoldur. Hem karanlık hem de gündüz ışığı esnekliği isteniyorsa <em>plise perde blackout veya düet kumaş</em> ile daha kapsamlı bir çözüm olur.",
          ],
          list: {
            type: "ul",
            items: [
              "Karartma perde — sadece karanlık yeterliyse",
              "Karartma perde — bütçe öncelikli",
              "Karartma perde — yatak ve sinema odası",
              "Plise blackout — karanlık + pile görselliği",
              "Plise — oda bazında farklı kumaş esnekliği",
              "Plise düet — gündüz ışık + gece karanlık",
              "Plise — tüm ev için tek sistem tercihi",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Blackout perde mi yoksa plise perde mi uyku için daha verimli?",
          answer: "Sadece uyku karanlığı aranıyorsa blackout perde en doğrudan çözümdür. Ancak gündüz ışık alıp gece karanlık isteniyorsa plise perde düet kumaş ile her iki modu tek sistemde sunar, bu da kullanım esnekliği sağlar.",
        },
        {
          question: "Plise perde blackout kumaşla gerçekten sıfır ışık verir mi?",
          answer: "Evet. Plise perdede blackout dokuma tercih edildiğinde ışığın %99'u kesilir ve karartma perdeyle aynı karanlık elde edilir. Düet kumaşla ise gündüz tül, gece blackout modu tek perdede birleşir.",
        },
        {
          question: "Bütçe açısından hangi seçenek daha avantajlı?",
          answer: "Standart karartma perde daha ekonomiktir. Karartma perde m² 300-2000 TL, plise blackout m² 700-3500 TL aralığında. Karartma perde tek kumaş tipi kullandığı için maliyeti düşük kalır.",
        },
        {
          question: "Yatak odası için hangi perde daha mantıklı olur?",
          answer: "İki seçenek de uygundur. Yalnızca gece karanlığı yeterliyse karartma perde bütçe dostu seçimdir. Yatak odasında gündüz de doğal ışık isteniyorsa plise düet perde daha esnek bir kullanım sağlar.",
        },
        {
          question: "Karartma perde kapalıyken hiç mi ışık almaz?",
          answer: "Karartma perde yalnızca blackout kumaş kullandığı için kapalı konumda ışık geçirmez. Gündüz ışık almak için perdeyi tamamen açmak gerekir. Plise perde ise tül veya güneşlik dokuma ile ışık alırken gece blackout moduna geçebilir.",
        },
      ]}
    />
  );
}
