import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Baskılı Plise Perde — Özel Baskı Modeli",
  description:
    "Baskılı plise perde: özel baskı teknolojisi ile kişiselleştirilmiş kumaş. Logo, fotoğraf, sanat eseri baskısı. Kurumsal ve dekoratif. 2 yıl garanti.",
  slug: "basili-plise-perde",
});

export default function BasiliPlisePerdePage() {
  return (
    <PageTemplate
      title="Baskılı Plise Perde"
      description="Baskılı plise perde: özel baskı teknolojisi ile kişiselleştirilmiş kumaş. Logo, fotoğraf, sanat eseri baskısı."
      slug="basili-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Modellerimiz", url: "/plise-perde-modelleri" }, { name: "Baskılı Plise Perde", url: "/basili-plise-perde" }]}
      h1="Baskılı Plise Perde"
      intro="Baskılı plise perde, kumaş üzerine dijital baskı teknolojisi ile istenilen görüntünün basıldığı plise perde modelidir. Logo, fotoğraf, sanat eseri, manzara veya grafik tasarım — hayal gücünüz sınırdır. Kurumsal mekanlar için marka kimliği, evler için kişisel dokunuş. UV dayanımlı baskı ile renkler yıllar boyu canlı kalır. 2 yıl garanti ile üretilir."
      schemaType="product"
      schemaData={{
        name: "Baskılı Plise Perde",
        description: "Özel dijital baskı teknolojisi ile kişiselleştirilmiş plise perde modeli.",
      }}
      sections={[
        {
          h2: "Baskılı Plise Perde Nedir?",
          paragraphs: [
            "Baskılı plise perde, kumaş üzerine <strong>dijital baskı teknolojisi</strong> ile görüntü basılan modeldir. Desenli modelden farkı: desenli kumaşta desen dokuma sırasında oluşur, baskılıda ise sonradan dijital baskı ile uygulanır.",
            "Bu sayede <em>tamamen kişiselleştirilmiş</em> perde üretmek mümkündür. Logo, fotoğraf, manzara, sanat eseri veya grafik tasarım — her görüntü kumaşa basılabilir.",
          ],
        },
        {
          h2: "Baskılı vs Desenli Plise Perde",
          paragraphs: [
            "Baskılı ve desenli model arasındaki temel farklar:",
          ],
          table: {
            headers: ["Özellik", "Baskılı", "Desenli"],
            rows: [
              ["Üretim", "Dijital baskı", "Dokuma"],
              ["Kişiselleştirme", "Tam — her görüntü", "Sınırlı — dokuma desenler"],
              ["Min. adet", "Tek perde", "Seri üretim"],
              ["Fiyat", "Daha yüksek", "Orta"],
              ["Dayanıklılık", "UV baskı, 5+ yıl", "Kalıcı dokuma"],
              ["Kullanım", "Kurumsal, kişisel", "Dekoratif"],
            ],
          },
        },
        {
          h2: "Baskı Seçenekleri",
          paragraphs: [
            "Baskılı plise perdede <strong>farklı baskı kategorileri</strong> mevcuttur:",
          ],
          list: {
            type: "ul",
            items: [
              "Kurumsal logo — ofis, showroom, mağaza için marka kimliği",
              "Fotoğraf baskı — aile fotoğrafı, manzara, anı",
              "Sanat eseri — tablo, illüstrasyon, grafik tasarım",
              "Çocuk temaları — kahramanlar, hayvanlar, uzay temaları",
              "Geometrik baskı — modern grafik, optik illüzyon",
              "Doğa manzarası — deniz, orman, dağ, gökyüzü",
            ],
          },
        },
        {
          h2: "Baskı Teknolojisi",
          paragraphs: [
            "Baskılı plise perdede <strong>UV dijital baskı</strong> teknolojisi kullanılır:",
          ],
          list: {
            type: "ol",
            items: [
              "Yüksek çözünürlük — 1440 dpi, fotoğraf kalitesi",
              "UV dayanımlı mürekkep — güneşte solmaz, 5+ yıl",
              "Su bazlı mürekkep — çevre dostu, kokusuz",
              "Kumaş uyumu — baskı kumaş esnekliğine uyum sağlar",
              "Renk garantisi — Pantone renk eşleştirme",
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Baskılı plise perde <strong>kişiselleştirme ve marka kimliği</strong> gerektiren mekanlar için idealdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Kurumsal ofis — logo ve marka kimliği",
              "Showroom/mağaza — marka vitrini",
              "Kafe/restoran — tema ve atmosfer",
              "Çocuk odası — sevilen kahramanlar ve temalar",
              "Butik otel — mekana özel tasarım",
              "Kişisel ev — aile fotoğrafı veya sanat eseri",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Baskılı plise perdeye her görüntü basılabilir mi?",
          answer: "Evet, dijital baskı teknolojisi ile her görüntü basılabilir. Logo, fotoğraf, sanat eseri, manzara — yeter ki yüksek çözünürlüklü olsun. 1440 dpi baskı kalitesi ile fotoğraf netliğinde sonuç alınır.",
        },
        {
          question: "Baskı solar mı, silinir mi?",
          answer: "Hayır, UV dayanımlı mürekkep kullanılır. Güneşte 5+ yıl solmaz. Mürekkep kumaşa işlenir, silinmez veya çizilmez. 2 yıl garanti ile gelir.",
        },
        {
          question: "Baskılı plise perde fiyatı ne kadar?",
          answer: "Baskılı model, dijital baskı maliyeti nedeniyle düz ve desenli modellere göre daha yüksektir. Tek perde bile üretilir. Fiyat, baskı alanı ve kumaş tipine göre değişir.",
        },
        {
          question: "Baskı için dosya formatı ne olmalı?",
          answer: "Yüksek çözünürlüklü vektör (AI, EPS, SVG) veya raster (PNG, JPG, TIFF — min 300 dpi) formatında dosya gönderilir. Pantone renk eşleştirme yapılabilir.",
        },
        {
          question: "Baskılı plise perde ışık geçirir mi?",
          answer: "Baskı, kumaş tipine göre uygulanır. Tül kumaşa baskı ışık geçirir, karartma kumaşa baskı ise ışığı keser. Baskı her kumaş tipinde uygulanabilir.",
        },
      ]}
    />
  );
}
