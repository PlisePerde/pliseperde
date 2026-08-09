import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Cam Balkon Plise Perde — Rüzgar & Güneş Kontrolü",
  description:
    "Cam balkon için plise perde: katlanır cam sistemlerine uyumlu, her kanada ayrı ölçü, rüzgar dayanımı, güneş kontrolü, honeycomb ile ısı yalıtımı. Montaj dahil, 2 yıl garanti.",
  slug: "cam-balkon-plise-perde",
  keywords: ["cam balkon plise perde", "katlanır cam plise perde", "katlanır cam sistemine plise perde"],
});

export default function CamBalkonPlisePerdePage() {
  return (
    <PageTemplate
      title="Cam Balkon Plise Perde"
      description="Cam balkon için plise perde: geniş cam yüzey, rüzgar dayanımı, güneş ve ısı kontrolü."
      slug="cam-balkon-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Cam Balkon", url: "/cam-balkon-plise-perde" }]}
      h1="Cam Balkon Plise Perde"
      intro="Cam balkonlar, <strong>geniş cam yüzeyler</strong> sayesinde bol ışık ve manzara sunar ancak yaz aylarında aşırı ısınma, kış aylarında ısı kaybı ve gün batımında rüzgar ile birlikte gelen toz/güneş sorunu yaratır. <strong>Katlanır cam sistemlerinde</strong> her kanat ayrı açıldığı için perde montajı zordur. Katlanır cam plise perde, <strong>her cam kanadına ayrı ölçü</strong> yapılması ve pencere profili içine takılması sayesinde cam balkon için en uygun perde sistemidir."
      schemaType="service"
      schemaData={{
        name: "Cam Balkon Plise Perde",
        description: "Cam balkon ve katlanır cam sistemleri için plise perde çözümü.",
      }}
      sections={[
        {
          h2: "Katlanır Cam Sistemleri ve Plise Perde",
          paragraphs: [
            "Katlanır cam sistemleri, <strong>akordiyon mantığıyla</strong> çalışan ve cam kanatların ray üzerinde katlanarak toplanmasıyla açılan sistemlerdir. Isıcam katlanır, giizmo katlanır ve sürme cam sistemleri en yaygın tiplerdir.",
            "Katlanır cam plise perde, bu sistemlerin her bir kanadına <strong>ayrı ölçü</strong> yapılmasıyla çalışır. Kanat açıldığında perde de birlikte açılır, kanat kapandığında perde de kapanır. Bu sayede katlanır cam sisteminin hareketine engel olmaz.",
            "Standart perde (tül, stor, zebra) katlanır cam sistemine uyum sağlayamaz — tek parça olduğu için kanat hareketini bloke eder. Katlanır cam plise perde ise <strong>kanat bazlı</strong> çalışır, her kanat bağımsız hareket eder.",
          ],
        },
        {
          h2: "Cam Balkonda Plise Perde Avantajları",
          paragraphs: [
            "Cam balkonlar <strong>standart pencerelerden farklıdır</strong> — geniş cam yüzey, katlanır sistem ve çok kanatlı yapı:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Kanat bazlı ölçü</strong> — her cam kanadına ayrı plise perde, katlanır cam açıldığında perde de açılır",
              "<strong>Geniş cam yüzey</strong> — 2-3 metrelik cam yüzeylerde katlanarak tamamen görünmez olur",
              "<strong>Rüzgar dayanımı</strong> — pencere içine takıldığı için rüzgar perdeyi savurmaz",
              "<strong>Isı kontrolü (honeycomb)</strong> — cam balkonda ısı değişimi yüksektir, honeycomb ile yalıtım",
              "<strong>Güneş filtreleme</strong> — güneşlik kumaş ile yazın aşırı ısınmayı önleme",
              "<strong>Manzara korunumu</strong> — kademeli açma ile manzara görünür, güneş engellenir",
              "<strong>Katlanır cam uyumu</strong> — akordiyon, giizmo ve sürme sistemlerle tam uyumlu",
            ],
          },
        },
        {
          h2: "Katlanır Cam Sistem Tipleri ve Montaj",
          paragraphs: [
            "Cam balkonlarda <strong>farklı katlanır cam sistemleri</strong> bulunur ve her biri farklı montaj gerektirir:",
          ],
          table: {
            headers: ["Katlanır Cam Sistemi", "Kanat Sayısı", "Montaj", "Özel Not"],
            rows: [
              ["Isıcam katlanır (akordiyon)", "3-6 kanat", "Kanat bazlı vidalı", "Her kanada ayrı perde"],
              ["Giizmo katlanır cam", "4-8 kanat", "Kanat bazlı yapışkanlı", "Hafif yapı, ince profil"],
              ["Sürme cam (raylı)", "2-4 kanat", "Kanat bazlı vidalı", "Ray sistemi ile uyumlu"],
              ["Pivot (döner) cam", "2-3 kanat", "Vidalı özel", "Dönme hareketine uyum"],
            ],
          },
        },
        {
          h2: "Katlanır Cam Plise Perde Nasıl Çalışır?",
          paragraphs: [
            "Katlanır cam plise perde, <strong>her cam kanadına ayrı</strong> monte edilir. Kanat kapalıyken perde pencereyi örter, kanat açıldığında perde kanatla birlikte katlanır.",
            "Çalışma mantığı:",
          ],
          list: {
            type: "ol",
            items: [
              "Her cam kanadı için ayrı ölçü alınır — kanat genişliği ve yüksekliği",
              "Plise perde, kanat profilinin içine monte edilir — vidalı veya yapışkanlı",
              "Kanat kapalıyken perde aşağı indirilir, pencere tamamen örter",
              "Kanat açıldığında perde yukarı toplanır, kanatla birlikte katlanır",
              "Her kanat bağımsız çalışır — tek kanat açılıp diğeri kapalı kalabilir",
            ],
          },
        },
        {
          h2: "Cam Balkon İçin Kumaş Seçimi",
          paragraphs: [
            "Cam balkonda <strong>güneş ve ısı</strong> en kritik faktörlerdir. Katlanır cam sisteminde mevsime göre farklı ihtiyaçlar:",
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
          h2: "Katlanır Cam Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Cam balkon pencereleri <strong>geniş</strong> olduğu için metrekare bazında fiyat yüksektir. Katlanır cam sisteminde her kanat ayrı fiyatlandırılır:",
          ],
          table: {
            headers: ["Katlanır Cam Tipi", "Toplam Alan (m²)", "Güneşlik Fiyat", "Honeycomb Fiyat"],
            rows: [
              ["3 kanat (her biri 80x200 cm)", "4.80 m²", "4.800-7.200 TL", "8.640-13.440 TL"],
              ["4 kanat (her biri 80x200 cm)", "6.40 m²", "6.400-9.600 TL", "11.520-17.920 TL"],
              ["5 kanat (her biri 80x220 cm)", "8.80 m²", "8.800-13.200 TL", "15.840-24.640 TL"],
              ["6 kanat (her biri 80x220 cm)", "10.56 m²", "10.560-15.840 TL", "19.008-29.568 TL"],
            ],
          },
        },
        {
          h2: "Katlanır Cam Perdesinde Dikkat Edilmesi Gerekenler",
          paragraphs: [
            "Katlanır cam plise perde seçiminde <strong>kritik noktalar</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Kanat sayısı</strong> — her kanada ayrı perde yapılmalı, tek parça perde katlanır sisteme uymaz",
              "<strong>Katlanır cam tipi</strong> — ısıcam, giizmo veya sürme sistemine göre montaj yöntemi değişir",
              "<strong>Profil tipi</strong> — alüminyum veya PVC profile göre montaj yöntemi değişir",
              "<strong>Rüzgar direnci</strong> — pencere içi montaj rüzgar savurmasını engeller",
              "<strong>Temizlik</strong> — cam balkon toz çeker, kumaş silinebilir olmalı",
              "<strong>Motorlu opsiyon</strong> — çok kanatlı balkonda her kanada ayrı motor zor, manuel önerilir",
            ],
          },
        },
        {
          h2: "Katlanır Cam vs Sürme Cam Plise Perde",
          paragraphs: [
            "Cam balkonlarda iki ana cam sistemi vardır ve plise perde montajı farklı çalışır:",
          ],
          table: {
            headers: ["Özellik", "Katlanır Cam (Akordiyon)", "Sürme Cam (Raylı)"],
            rows: [
              ["Açılım", "Kanatlar yana katlanır", "Kanatlar ray üzerinde kayar"],
              ["Kanat sayısı", "3-8 kanat", "2-4 kanat"],
              ["Perde montajı", "Her kanada ayrı", "Her kanada ayrı"],
              ["Perde açılımı", "Kanatla birlikte katlanır", "Kanatla birlikte kayar"],
              ["Uygun perde", "Plise perde (kanat bazlı)", "Plise perde (kanat bazlı)"],
              ["Uyumsuz perde", "Stor, zebra, tül (tek parça)", "Stor, zebra, tül (tek parça)"],
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Katlanır cam sistemine plise perde takılır mı?",
          answer: "Evet, katlanır cam sistemine plise perde takılır. Her cam kanadına ayrı ölçü plise perde yapılır. Kanat açıldığında perde de birlikte açılır, katlanır cam sisteminin hareketine engel olmaz. Standart tek parça perde (stor, zebra, tül) katlanır cama uyum sağlayamaz.",
        },
        {
          question: "Katlanır cam plise perde nasıl çalışır?",
          answer: "Katlanır cam plise perde, her cam kanadına ayrı monte edilir. Kanat kapalıyken perde pencereyi örter, kanat açıldığında perde kanatla birlikte katlanır. Her kanat bağımsız çalışır — tek kanat açılıp diğeri kapalı kalabilir.",
        },
        {
          question: "Cam balkona plise perde takılır mı?",
          answer: "Evet, her cam kanadına ayrı ölçü plise perde yapılır. Kanat açıldığında perde de birlikte açılır. Pencere profili içine takıldığı için rüzgar savurmaz. Katlanır cam, sürme cam ve giizmo sistemlerin tümüne uyum sağlar.",
        },
        {
          question: "Katlanır cam ve sürme cam için perde montajı farklı mı?",
          answer: "Montaj prensibi aynı — her kanada ayrı perde. Farklı olan açılım yönüdür: katlanır camda kanatlar yana katlanır, sürme camda ray üzerinde kayar. Plise perde her iki sistemde de kanatla birlikte hareket eder.",
        },
        {
          question: "Cam balkon için hangi kumaş önerilir?",
          answer: "Güneşlik kumaş birincil tercihtir — güneşi filtreler, manzarayı korur. Kışın ısı yalıtımı için honeycomb önerilir. Düet ile gündüz ışık + gece karartma sağlanır. Katlanır cam sisteminde tüm kumaş tipleri kullanılabilir.",
        },
        {
          question: "Katlanır cam plise perde fiyatı ne kadar?",
          answer: "4 kanatlı standart cam balkon (6.40 m²) için güneşlik 6.400-9.600 TL, honeycomb 11.520-17.920 TL aralığındadır. Kanat bazlı fiyatlandırma yapılır, her kanat ayrı ölçülendirilir.",
        },
        {
          question: "Cam balkonda motorlu plise perde olur mu?",
          answer: "Teknik olarak mümkündür ancak çok kanatlı balkonda her kanada ayrı motor takılması maliyetli olur. Katlanır cam sisteminde manuel plise perde daha pratik ve ekonomiktir.",
        },
      ]}
    />
  );
}
