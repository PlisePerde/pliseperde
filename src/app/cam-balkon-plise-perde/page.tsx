import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Cam Balkon Plise Perde — Geniş Cam Yüzey, Rüzgar ve Güneş Kontrolü",
  description:
    "Cam balkon için plise perde: geniş cam yüzeyler için katlanır sistem, rüzgar dayanımı, güneş kontrolü, honeycomb ile ısı yalıtımı. Montaj dahil, 2 yıl garanti.",
  slug: "cam-balkon-plise-perde",
});

export default function CamBalkonPlisePerdePage() {
  return (
    <PageTemplate
      title="Cam Balkon Plise Perde"
      description="Cam balkon için plise perde: geniş cam yüzey, rüzgar dayanımı, güneş ve ısı kontrolü."
      slug="cam-balkon-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Cam Balkon", url: "/cam-balkon-plise-perde" }]}
      h1="Cam Balkon Plise Perde"
      intro="Cam balkonlar, <strong>geniş cam yüzeyler</strong> sayesinde bol ışık ve manzara sunar ancak yaz aylarında aşırı ısınma, kış aylarında ısı kaybı ve gün batımında rüzgar ile birlikte gelen toz/güneş sorunu yaratır. Cam balkon katlanır cam sistemlerinde her kanat ayrı açıldığı için perde montajı zordur. Plise perde, <strong>her cam kanadına ayrı ölçü</strong> yapılması ve pencere profili içine takılması sayesinde cam balkon için en uygun perde sistemidir."
      schemaType="service"
      schemaData={{
        name: "Cam Balkon Plise Perde",
        description: "Cam balkon için geniş cam yüzey plise perde çözümü.",
      }}
      sections={[
        {
          h2: "Cam Balkonda Plise Perde Avantajları",
          paragraphs: [
            "Cam balkonlar <strong>standart pencerelerden farklıdır</strong> — geniş cam yüzey, katlanır sistem ve çok kanatlı yapı:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Kanat bazlı ölçü</strong> — her cam kanadına ayrı plise perde, kanat açıldığında perde de açılır",
              "<strong>Geniş cam yüzey</strong> — 2-3 metrelik cam yüzeylerde katlanarak tamamen görünmez olur",
              "<strong>Rüzgar dayanımı</strong> — pencere içine takıldığı için rüzgar perdeyi savurmaz",
              "<strong>Isı kontrolü (honeycomb)</strong> — cam balkonda ısı değişimi yüksektir, honeycomb ile yalıtım",
              "<strong>Güneş filtreleme</strong> — güneşlik kumaş ile yazın aşırı ısınmayı önleme",
              "<strong>Manzara korunumu</strong> — kademeli açma ile manzara görünür, güneş engellenir",
            ],
          },
        },
        {
          h2: "Cam Balkon Sistem Tipleri ve Montaj",
          paragraphs: [
            "Cam balkonlarda <strong>farklı katlanır sistemler</strong> bulunur ve her biri farklı montaj gerektirir:",
          ],
          table: {
            headers: ["Sistem Tipi", "Kanat Sayısı", "Montaj", "Özel Not"],
            rows: [
              ["Isıcam katlanır (akordiyon)", "3-6 kanat", "Kanat bazlı vidalı", "Her kanada ayrı perde"],
              ["Sürme cam (raylı)", "2-4 kanat", "Kanat bazlı vidalı", "Ray sistemi ile uyumlu"],
              ["Pivot (döner) cam", "2-3 kanat", "Vidalı özel", "Dönme hareketine uyum"],
              ["Giizmo (katlanır) cam", "4-8 kanat", "Kanat bazlı yapışkanlı", "Hafif yapı"],
            ],
          },
        },
        {
          h2: "Cam Balkon İçin Kumaş Seçimi",
          paragraphs: [
            "Cam balkonda <strong>güneş ve ısı</strong> en kritik faktörlerdir. Mevsime göre farklı ihtiyaçlar:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Güneşlik</strong> — yazın aşırı güneşi filtreler, manzarayı korur, en popüler seçim",
              "<strong>Honeycomb</strong> — kışın ısı yalıtımı, yazın serin tutar, enerji tasarrufu",
              "<strong>Tül</strong> — maksimum ışık ve manzara, az gizlilik",
              "<strong>Düet</strong> — gündüz ışık + gece karartma tek profilde",
              "<strong>Tam karartma</strong> — tam gizlilik ve güneş engelleme",
            ],
          },
        },
        {
          h2: "Cam Balkon Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Cam balkon pencereleri <strong>geniş</strong> olduğu için metrekare bazında fiyat yüksektir:",
          ],
          table: {
            headers: ["Balkon Tipi", "Toplam Alan (m²)", "Güneşlik Fiyat", "Honeycomb Fiyat"],
            rows: [
              ["3 kanat (her biri 80x200 cm)", "4.80 m²", "4.800-7.200 TL", "8.640-13.440 TL"],
              ["4 kanat (her biri 80x200 cm)", "6.40 m²", "6.400-9.600 TL", "11.520-17.920 TL"],
              ["5 kanat (her biri 80x220 cm)", "8.80 m²", "8.800-13.200 TL", "15.840-24.640 TL"],
              ["6 kanat (her biri 80x220 cm)", "10.56 m²", "10.560-15.840 TL", "19.008-29.568 TL"],
            ],
          },
        },
        {
          h2: "Cam Balkon Perdesinde Dikkat Edilmesi Gerekenler",
          paragraphs: [
            "Cam balkon perdesi seçiminde <strong>kritik noktalar</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Kanat sayısı</strong> — her kanada ayrı perde yapılmalı, tek parça perde katlanır sisteme uymaz",
              "<strong>Profil tipi</strong> — alüminyum veya PVC profile göre montaj yöntemi değişir",
              "<strong>Rüzgar direnci</strong> — pencere içi montaj rüzgar savurmasını engeller",
              "<strong>Temizlik</strong> — cam balkon toz çeker, kumaş silinebilir olmalı",
              "<strong>Motorlu opsiyon</strong> — çok kanatlı balkonda her kanada ayrı motor zor, manuel önerilir",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Cam balkona plise perde takılır mı?",
          answer: "Evet, her cam kanadına ayrı ölçü plise perde yapılır. Kanat açıldığında perde de birlikte açılır. Pencere profili içine takıldığı için rüzgar savurmaz.",
        },
        {
          question: "Cam balkon için hangi kumaş önerilir?",
          answer: "Güneşlik kumaş birincil tercihtir — güneşi filtreler, manzarayı korur. Kışın ısı yalıtımı için honeycomb önerilir. Düet ile gündüz ışık + gece karartma sağlanır.",
        },
        {
          question: "Cam balkon plise perde fiyatı ne kadar?",
          answer: "4 kanatlı standart cam balkon (6.40 m²) için güneşlik 6.400-9.600 TL, honeycomb 11.520-17.920 TL aralığındadır. Kanat bazlı fiyatlandırma yapılır.",
        },
        {
          question: "Cam balkonda motorlu plise perde olur mu?",
          answer: "Teknik olarak mümkündür ancak çok kanatlı balkonda her kanada ayrı motor takılması maliyetli olur. Manuel plise perde daha pratik ve ekonomiktir.",
        },
      ]}
    />
  );
}
