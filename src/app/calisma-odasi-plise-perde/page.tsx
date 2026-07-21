import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Çalışma Odası Plise Perde — Ekran Parlaması Önleme, Odaklanma",
  description:
    "Çalışma odası için plise perde: güneşlik kumaş ile ekran parlaması önleme, odaklanma için ışık kontrolü, profesyonel görünüm. Montaj dahil, 2 yıl garanti.",
  slug: "calisma-odasi-plise-perde",
});

export default function CalismaOdasiPlisePerdePage() {
  return (
    <PageTemplate
      title="Çalışma Odası Plise Perde"
      description="Çalışma odası için plise perde: ekran parlaması önleme, ışık kontrolü, odaklanma."
      slug="calisma-odasi-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Çalışma Odası", url: "/calisma-odasi-plise-perde" }]}
      h1="Çalışma Odası Plise Perde"
      intro="Çalışma odasında <strong>ekran parlaması</strong>, odaklanmayı bozan en büyük sorundur. Güneş ışığı bilgisayar ekranına veya monitöre vurduğunda görünürlük düşer, göz yorgunluğu artar ve verimlilik azalır. Plise perde, <strong>güneşlik kumaş</strong> ile ışığı filtreler — ekran parlamasını önlerken odayı tamamen karartmaz. Pencere içine takıldığı için çalışma masasına engel olmaz, az yer kaplar."
      schemaType="service"
      schemaData={{
        name: "Çalışma Odası Plise Perde",
        description: "Çalışma odası için ekran parlaması önleyen plise perde.",
      }}
      sections={[
        {
          h2: "Çalışma Odasında Işık Kontrolü",
          paragraphs: [
            "Çalışma odasında <strong>doğru ışık</strong>, verimliliği doğrudan etkiler. Çok ışık gözü yorar, az ışık odaklanmayı zorlaştırır. Plise perde kademeli açma ile ideal dengeyi sağlar:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Güneşlik kumaş</strong> — ışığı %30-50 filtreler, ekran parlamasını önler, odayı aydınlatır",
              "<strong>Yukarıdan açma</strong> — pencerenin üst kısmını aç, alt kısmını kapalı tut, masaüstü ışık alır",
              "<strong>Aşağıdan açma</strong> — alt kısmı aç, üstü kapalı, direkt güneşi engelle",
              "<strong>Tam açma</strong> — bulutlu havada maksimum ışık için tamamen aç",
              "<strong>Tam kapatma</strong> — sunum/video izleme için tam karartma",
            ],
          },
        },
        {
          h2: "Çalışma Odası İçin Kumaş Seçimi",
          paragraphs: [
            "Çalışma odasında <strong>güneşlik</strong> birincil tercihtir, ancak farklı çalışma tiplerine göre alternatifler:",
          ],
          table: {
            headers: ["Kumaş Tipi", "Işık Geçirgenliği", "Ekran Parlaması", "Önerilen Çalışma Tipi"],
            rows: [
              ["Güneşlik", "%30-50", "Önlenir", "Bilgisayar çalışması (birincil)"],
              ["Yarı karartma", "%10-20", "Tamamen önlenir", "Video düzenleme, tasarım"],
              ["Tam karartma", "%0", "Tamamen önlenir", "Sunum, video izleme, projeksiyon"],
              ["Düet", "%0 / %70", "Kontrollü", "Esnek çalışma (gündüz/gece)"],
            ],
          },
        },
        {
          h2: "Çalışma Odası Pencere Yerleşimi ve Montaj",
          paragraphs: [
            "Çalışma masası pencereye göre <strong>farklı yönlerde</strong> olabilir ve her yön farklı ışık sorunu yaratır:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Masa pencereye bakar</strong> — güneş ekrana vurur, güneşlik kumaş şart",
              "<strong>Masa pencereye sırtı dönük</strong> — güneş ekrana yansır, güneşlik + yarı karartma",
              "<strong>Masa pencere yanında</strong> — yan ışık gözü yorar, kademeli açma ile denge",
              "<strong>Pencere karşısında duvar</strong> — yansıma gelir, güneşlik ile filtreleme",
            ],
          },
        },
        {
          h2: "Çalışma Odası Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Çalışma odası pencereleri genellikle <strong>standart boyutta</strong> olur:",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Güneşlik Fiyat", "Yarı Karartma Fiyat"],
            rows: [
              ["80x120 cm (küçük)", "0.96 m²", "960-1.440 TL", "1.152-1.728 TL"],
              ["100x120 cm (standart)", "1.20 m²", "1.200-1.800 TL", "1.440-2.160 TL"],
              ["120x150 cm (büyük)", "1.80 m²", "1.800-2.700 TL", "2.160-3.240 TL"],
            ],
          },
        },
        {
          h2: "Çalışma Odası İçin Ek Özellikler",
          paragraphs: [
            "Çalışma odasında verimliliği artıran <strong>ek özellikler</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>UV koruma</strong> — güneş UV ışınlarını filtreler, masaüstü ve ekipman rengini korur",
              "<strong>Isı kontrolü (honeycomb)</strong> — yazın serin tutar, uzun çalışmada konfor",
              "<strong>Sessiz mekanizma</strong> — telefon görüşmesi sırasında perde açma/kapama sessiz",
              "<strong>Motorlu opsiyon</strong> — masadan kalkmadan uzaktan kumanda",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Çalışma odası için en iyi plise perde hangisi?",
          answer: "Güneşlik plise perde birincil tercihtir. Işığı %30-50 filtreler, ekran parlamasını önlerken odayı aydınlatır. Video düzenleme için yarı karartma, sunum için tam karartma önerilir.",
        },
        {
          question: "Plise perde ekran parlamasını tamamen önler mi?",
          answer: "Güneşlik kumaş büyük ölçüde önler. Tamamen önlemek için yarı karartma veya tam karartma kumaş seçilmelidir. Kademeli açma ile ideal denge bulunabilir.",
        },
        {
          question: "Çalışma odası plise perde fiyatı ne kadar?",
          answer: "100x120 cm standart pencere için güneşlik 1.200-1.800 TL, yarı karartma 1.440-2.160 TL aralığındadır. Montaj dahildir.",
        },
        {
          question: "Çalışma masası pencereye bakıyor, hangi perde?",
          answer: "Güneşlik plise perde önerilir. Işığı filtreler, ekrana direkt güneş vurmasını engeller. Kademeli açma ile masaüstü ışık alırken ekran korunur.",
        },
      ]}
    />
  );
}
