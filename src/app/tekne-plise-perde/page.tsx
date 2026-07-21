import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Tekne ve Yat Plise Perde — Tuzlu Su Dayanımı, Eğimli Pencere, Özel Ölçü",
  description:
    "Tekne, yat, yelkenli ve gemi için plise perde: tuzlu su dayanımı, eğimli pencere, rüzgar direnci, özel ölçü, hafif kumaş. Montaj dahil, 2 yıl garanti.",
  slug: "tekne-plise-perde",
});

export default function TeknePlisePerdePage() {
  return (
    <PageTemplate
      title="Tekne ve Yat Plise Perde"
      description="Tekne, yat, yelkenli ve gemi için plise perde: tuzlu su dayanımı, özel ölçü."
      slug="tekne-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Tekne ve Yat", url: "/tekne-plise-perde" }]}
      h1="Tekne ve Yat Plise Perde"
      intro="Tekne, yat, yelkenli ve gemilerde perde seçimi <strong>karada kullanılan perde sistemlerinden tamamen farklıdır</strong>. Tuzlu su, yüksek nem, sürekli hareket (yalpa), rüzgar ve dar özel ölçü pencereler standart perde sistemlerini kullanılamaz kılar. Plise perde, <strong>paslanmaz alüminyum profil, tuzlu su dayanımlı kumaş ve pencere içi montaj</strong> ile deniz araçları için en uygun perde sistemidir. Eğimli ve farklı açılı pencerelere birebir uyum sağlar."
      schemaType="service"
      schemaData={{
        name: "Tekne ve Yat Plise Perde",
        description: "Tekne, yat, yelkenli ve gemi için tuzlu su dayanımlı plise perde.",
      }}
      sections={[
        {
          h2: "Deniz Araçlarında Perde Zorlukları",
          paragraphs: [
            "Deniz araçlarında perde seçimi <strong>5 ana zorluk</strong> içerir:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>Tuzlu su ve yüksek nem</strong> — metal aksamlar paslanır, kumaş küflenir",
              "<strong>Sürekli hareket (yalpa)</strong> — perde savrulur, mekanizma zarar görür",
              "<strong>Eğimli ve açılı pencere</strong> — standart perde açılı pencereye uymaz",
              "<strong>Özel ölçü pencere</strong> — tekne pencereleri her gemide farklıdır",
              "<strong>Rüzgar direnci</strong> — açık pencerelerde rüzgar perdeyi savurur",
            ],
          },
        },
        {
          h2: "Plise Perde ile Deniz Aracı Çözümü",
          paragraphs: [
            "Plise perde bu zorlukların <strong>tümünü</strong> çözer:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Alüminyum profil</strong> — paslanmaz, tuzlu suya dayanıklı, deniz sınıfı",
              "<strong>Tuzlu su dayanımlı kumaş</strong> — polyester bazlı, nem emmez, küflenmez",
              "<strong>Pencere içi montaj</strong> — perde pencere profili içinde sabit, yalpada savrulmaz",
              "<strong>Özel ölçü</strong> — her pencere açısına ve boyutuna birebir yapılır",
              "<strong>Hafif kumaş</strong> — tekne ağırlığını etkilemez, dengeyi bozmaz",
              "<strong>Rüzgar dayanımı</strong> — pencere içinde çalışır, rüzgar savurmaz",
            ],
          },
        },
        {
          h2: "Deniz Aracı Tipleri ve Pencere Özellikleri",
          paragraphs: [
            "Farklı deniz araçları <strong>farklı pencere tiplerine</strong> sahiptir:",
          ],
          table: {
            headers: ["Aracı Tipi", "Pencere Özelliği", "Önerilen Kumaş", "Montaj"],
            rows: [
              ["Yat (motorlu)", "Geniş pencere, köşk cam", "Güneşlik / karartma", "Vidalı paslanmaz"],
              ["Yelkenli (sailboat)", "Eğimli, dar pencere", "Güneşlik", "Vidalı özel"],
              ["Gulet (ahşap tekne)", "Yuvarlak/köşeli pencere", "Tül / güneşlik", "Vidalı özel"],
              ["Gemi (büyük)", "Geniş cam, köprü penceresi", "Güneşlik + motorlu", "Vidalı + motorlu"],
              ["Balıkçı teknesi", "Küçük pencere", "Tül", "Yapışkanlı"],
              ["Houseboat (ev teknesi)", "Geniş pencere, yaşam alanı", "Düet / güneşlik", "Vidalı"],
            ],
          },
        },
        {
          h2: "Tekne Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Tekne pencereleri <strong>özel ölçü</strong> olduğu için fiyat standart ev perdesinden farklıdır:",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Güneşlik", "Karartma", "Montaj"],
            rows: [
              ["40x30 cm (küçük pencere)", "0.12 m²", "120-180 TL", "168-240 TL", "Dahil"],
              ["60x40 cm (standart)", "0.24 m²", "240-360 TL", "336-480 TL", "Dahil"],
              ["80x60 cm (geniş)", "0.48 m²", "480-720 TL", "672-960 TL", "Dahil"],
              ["100x80 cm (yat köşk cam)", "0.80 m²", "800-1.200 TL", "1.120-1.600 TL", "Dahil"],
              ["120x100 cm (büyük pencere)", "1.20 m²", "1.200-1.800 TL", "1.680-2.400 TL", "Dahil"],
            ],
          },
        },
        {
          h2: "Tekne Perdesinde Kritik Noktalar",
          paragraphs: [
            "Deniz aracı perdesi seçiminde <strong>dikkat edilmesi gerekenler</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Paslanmaz vidalar</strong> — montajda paslanmaz çelik (316) vida kullanılmalı",
              "<strong>Deniz sınıfı alüminyum</strong> — profil tuzlu suya dayanıklı, anodize edilmiş olmalı",
              "<strong>Kumaş nem dayanımı</strong> — polyester bazlı, nem emmez, küflenmez",
              "<strong>Ölçü hassasiyeti</strong> — tekne penceresi milimetrik ölçülmeli, birebir yapılmalı",
              "<strong>Mekanizma dayanımı</strong> — yalpa ve titreşime dayanıklı mekanizma",
              "<strong>Bakım</strong> — tuz birikimini önlemek için tatlı su ile durulama",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Tekne/yat için plise perde takılır mı?",
          answer: "Evet, tekne ve yat pencerelerine özel ölçü plise perde yapılır. Alüminyum profil tuzlu suya dayanıklı, kumaş nem emmez ve pencere içine takıldığı için yalpada savrulmaz.",
        },
        {
          question: "Tekne perdesi tuzlu sudan dolayı paslanır mı?",
          answer: "Hayır, deniz sınıfı anodize alüminyum profil ve paslanmaz çelik (316) vidalar kullanılır. Tuzlu suya dayanıklıdır. Düzenli tatlı su durulaması ile bakım yapılır.",
        },
        {
          question: "Yelkenli eğimli pencereye plise perde olur mu?",
          answer: "Evet, eğimli ve açılı pencerelere özel ölçü plise perde yapılır. Pencere profili içine vidalı montaj ile sabitlenir, eğimde kaymaz.",
        },
        {
          question: "Tekne plise perde fiyatı ne kadar?",
          answer: "60x40 cm standart pencere için 240-480 TL, 100x80 cm yat köşk camı için 800-1.600 TL aralığındadır. Özel ölçü olduğu için fiyat pencere boyutuna göre değişir. Montaj dahildir.",
        },
      ]}
    />
  );
}
