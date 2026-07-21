import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Stor Perde — Karşılaştırma",
  description:
    "Plise perde vs stor perde karşılaştırması. Fiyat, ışık kontrolü, montaj, temizlik, dayanıklılık. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-stor-perde",
});

export default function PliseVsStorPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Stor Perde"
      description="Plise perde vs stor perde karşılaştırması. Fiyat, ışık kontrolü, montaj, temizlik, dayanıklılık."
      slug="plise-perde-vs-stor-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/plise-perde-modelleri" }, { name: "Plise vs Stor", url: "/plise-perde-vs-stor-perde" }]}
      h1="Plise Perde vs Stor Perde — Hangisi Daha İyi?"
      intro="Plise perde ve stor perde, iki yaygın pencere çözümüdür. Plise perde kumaşı pile katlayarak çalışır, stor perde ise kumaşı silindirik bir tüp üzerine sarar. Bu karşılaştırmada fiyat, ışık kontrolü, montaj, temizlik ve estetik açısından her iki sistemi detaylıca inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Stor Perde Karşılaştırması",
        description: "Plise perde ve stor perde karşılaştırması — fiyat, ışık, montaj, temizlik.",
      }}
      sections={[
        {
          h2: "Çalışma Prensibi Farkı",
          paragraphs: [
            "Plise perde, <strong>kumaşı pile katlayarak</strong> yukarı-aşağı hareket ettirir. <em>Üstten ve alttan</em> bağımsız açılabilir. Stor perde ise kumaşı <u>tüp üzerine sararak</u> yukarı toplar, sadece yukarı açılır.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Stor Perde"],
            rows: [
              ["Açılma yönü", "Üstten + alttan", "Sadece yukarı"],
              ["Kumaş hareketi", "Pile katlanır", "Tübe sarılır"],
              ["Açıkta kumaş", "Pile katlı görünür", "Tüp üzerinde gizli"],
              ["Yer kaplama", "2-3 cm (katlı)", "5-8 cm (tüp)"],
              ["Tam karartma", "Mümkün", "Mümkün"],
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Plise perde ve stor perde <strong>fiyat açısından benzerdir</strong>. Her ikisi de 450-3500 TL/m² aralığında fiyatlanır. Stor perde mekanizma tüpü nedeniyle <em>biraz daha maliyetli</em> olabilir.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Stor Perde"],
            rows: [
              ["Standart (tül)", "450-900 TL", "500-1000 TL"],
              ["Karartma", "700-1400 TL", "800-1500 TL"],
              ["Motorlu", "1800-3500 TL", "2000-3800 TL"],
              ["Montaj", "100-300 TL", "150-300 TL"],
            ],
          },
        },
        {
          h2: "Işık Kontrolü",
          paragraphs: [
            "Plise perde <strong>üstten ve alttan bağımsız</strong> açılabilir. Bu sayede <em>üstten ışık alıp alttan gizlilik</em> sağlanabilir. Stor perde sadece yukarı açılır, bu esneklik yoktur.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — üstten/alttan bağımsız açılım",
              "Stor — sadece yukarı açılır",
              "Plise — kademeli ışık ayarı",
              "Stor — tam açık veya tam kapalı",
              "Plise — daha esnek ışık kontrolü",
            ],
          },
        },
        {
          h2: "Estetik ve Yer Kaplama",
          paragraphs: [
            "Plise perde <strong>daha az yer kaplar</strong>. Katlandığında 2-3 cm kalınlığa ulaşır. Stor perde tüp mekanizması nedeniyle <em>5-8 cm yer</em> kaplar. Plise perde pile katlı görünümü ile daha yumuşak bir estetik sunar.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — 2-3 cm yer kaplar (katlı)",
              "Stor — 5-8 cm yer kaplar (tüp)",
              "Plise — pile katlı yumuşak görünüm",
              "Stor — düz kumaş, modern görünüm",
              "Plise — dar pencerede avantajlı",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Plise perde <strong>esnek açılım ve az yer kaplama</strong> isteyenler için idealdir. Stor perde <em>düz kumaş görünümü</em> tercih edenler için uygundur.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise seçin — üstten/alttan bağımsız açılım",
              "Plise seçin — az yer kaplar (2-3 cm)",
              "Plise seçin — pile katlı estetik",
              "Stor seçin — düz kumaş modern görünüm",
              "Stor seçin — tam açık/tam kapalı kullanım",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi stor perde mi daha iyi?",
          answer: "Esnek açılım, az yer kaplama ve pile katlı estetik için plise perde tercih edin. Düz kumaş modern görünüm için stor perde uygundur.",
        },
        {
          question: "Hangisi daha az yer kaplar?",
          answer: "Plise perde daha az yer kaplar. Katlandığında 2-3 cm kalınlığa ulaşır. Stor perde tüp mekanizması nedeniyle 5-8 cm yer kaplar.",
        },
        {
          question: "Plise perde üstten açılır mı?",
          answer: "Evet, plise perde üstten ve alttan bağımsız açılabilir. Üstten ışık alıp alttan gizlilik sağlayabilirsiniz. Stor perde sadece yukarı açılır.",
        },
        {
          question: "Fiyat farkı var mı?",
          answer: "Fiyat açısından benzerdir. Her ikisi de 450-3500 TL/m² aralığında. Stor perde tüp mekanizması nedeniyle biraz daha maliyetli olabilir.",
        },
        {
          question: "Hangisi daha estetik?",
          answer: "Tercih meselesidir. Plise perde pile katlı yumuşak görünüm sunar. Stor perde düz kumaş ile modern görünüm sağlar. İç mekan tasarımına göre seçim yapın.",
        },
      ]}
    />
  );
}
