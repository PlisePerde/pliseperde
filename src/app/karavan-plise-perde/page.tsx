import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Karavan Plise Perde — Dar Pencere, Hafif Kumaş, Yapışkanlı Montaj",
  description:
    "Karavan için plise perde: dar pencere, hafif kumaş, yapışkanlı montaj ile delmeden takma, sarsıntı dayanımı, az yer kaplama. Montaj dahil, 2 yıl garanti.",
  slug: "karavan-plise-perde",
});

export default function KaravanPlisePerdePage() {
  return (
    <PageTemplate
      title="Karavan Plise Perde"
      description="Karavan için plise perde: dar pencere, hafif kumaş, yapışkanlı montaj, sarsıntı dayanımı."
      slug="karavan-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Karavan", url: "/karavan-plise-perde" }]}
      h1="Karavan Plise Perde"
      intro="Karavanlarda pencere ölçüleri <strong>standart dışı ve küçük</strong> olur. Araç hareket halindeyken sarsıntı, titreşim ve darbe vardır. Standart perde sistemleri karavanda savrulur, yer kaplar ve sarsıntıdan dolayı zarar görür. Plise perde, <strong>yapışkanlı montaj</strong> ile pencere profiline delmeden takılır, pencere içinde sabit kalır, sarsıntıdan etkilenmez ve hafif kumaş ile araca ek ağırlık eklemez. Karavan yaşamı için en uygun perde sistemidir."
      schemaType="service"
      schemaData={{
        name: "Karavan Plise Perde",
        description: "Karavan için dar pencere, yapışkanlı montaj plise perde.",
      }}
      sections={[
        {
          h2: "Karavanda Perde Seçimi Zorlukları",
          paragraphs: [
            "Karavanlarda perde seçimi <strong>4 ana zorluk</strong> içerir:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>Küçük ve özel ölçü pencere</strong> — karavan pencereleri standart değildir, özel ölçü gerekir",
              "<strong>Sarsıntı ve titreşim</strong> — araç hareket halindeyken perde savrulur",
              "<strong>Montaj kısıtı</strong> — pencere profiline delme yapılmak istenmez (su sızıntısı riski)",
              "<strong>Ağırlık</strong> — karavanda her gram önemlidir, hafif kumaş şarttır",
            ],
          },
        },
        {
          h2: "Karavan İçin Plise Perde Çözümü",
          paragraphs: [
            "Plise perde bu zorlukların <strong>tümünü</strong> çözer:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Özel ölçü</strong> — her pencere ölçüsüne birebir yapılır, standart dışı boyut sorunu yok",
              "<strong>Yapışkanlı montaj</strong> — pencere profiline delmeden, çift taraflı bant ile takılır",
              "<strong>Pencere içi sabit</strong> — perde pencere profili içinde çalışır, sarsıntıda savrulmaz",
              "<strong>Hafif kumaş</strong> — polyester kumaş çok hafiftir, araca ek ağırlık eklemez",
              "<strong>Yer kaplamaz</strong> — pencere içinde katlanır, karavanın dar alanında yer işgal etmez",
              "<strong>Sarsıntı dayanımı</strong> — profil mekanizması sarsıntıya dayanıklı, yol koşullarında güvenli",
            ],
          },
        },
        {
          h2: "Karavan Pencere Tipleri ve Ölçüler",
          paragraphs: [
            "Karavan pencere tipleri <strong>markaya göre değişir</strong>. Yaygın karavan markaları ve pencere ölçüleri:",
          ],
          table: {
            headers: ["Karavan Tipi", "Pencere Ölçüsü", "Montaj", "Kumaş Önerisi"],
            rows: [
              ["Panelvan (Caddy, Doblo)", "60x40 cm", "Yapışkanlı", "Tül / güneşlik"],
              ["Kamper (Dethleffs, Hymer)", "80x60 cm", "Yapışkanlı / vidalı", "Güneşlik"],
              ["Çekme karavan (caravan)", "70x50 cm", "Yapışkanlı", "Güneşlik / karartma"],
              ["Motorhome (büyük)", "90x70 cm", "Vidalı", "Güneşlik / düet"],
              ["Roof tent (çadır üst)", "50x40 cm", "Yapışkanlı", "Tül"],
            ],
          },
        },
        {
          h2: "Karavan Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Karavan pencereleri <strong>küçük</strong> olduğu için fiyat ekonomiktir:",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Tül Fiyat", "Güneşlik Fiyat", "Karartma Fiyat"],
            rows: [
              ["50x40 cm (küçük)", "0.20 m²", "160-240 TL", "200-300 TL", "280-400 TL"],
              ["60x40 cm (panelvan)", "0.24 m²", "192-288 TL", "240-360 TL", "336-480 TL"],
              ["80x60 cm (kamper)", "0.48 m²", "384-576 TL", "480-720 TL", "672-960 TL"],
              ["90x70 cm (motorhome)", "0.63 m²", "504-756 TL", "630-945 TL", "882-1.260 TL"],
            ],
          },
        },
        {
          h2: "Karavan Perdesinde Dikkat Edilmesi Gerekenler",
          paragraphs: [
            "Karavan perdesi seçiminde <strong>kritik noktalar</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Ölçü hassasiyeti</strong> — karavan penceresi milimetrik ölçülmeli, birebir yapılmalı",
              "<strong>Yapışkan kalitesi</strong> — otomotiv sınıfı çift taraflı bant, yüksek sıcaklıkta erimez",
              "<strong>Kumaş ağırlığı</strong> — ne kadar hafif o kadar iyi, araç yakıt tüketimini etkilemez",
              "<strong>Sıcaklık dayanımı</strong> — karavan içi yazın 60°C'ye çıkar, kumaş dayanıklı olmalı",
              "<strong>Çocuk güvenliği</strong> — ip mekanizması yok, karavanda çocuk varsa güvenli",
              "<strong>Yedek parça</strong> — yolda mekanizma arızalanırsa, yedek parça gönderimi",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Karavan penceresine plise perde takılır mı?",
          answer: "Evet, karavan pencerelerine özel ölçü plise perde yapılır. Yapışkanlı montaj ile pencere profiline delmeden takılır. Sarsıntıdan etkilenmez, hafif kumaş ile araca ağırlık eklemez.",
        },
        {
          question: "Karavan plise perde nasıl takılır?",
          answer: "Yapışkanlı montaj ile pencere profiline çift taraflı otomotiv bantı ile takılır. Delme gerekmez, su sızıntısı riski yoktur. Vidalı montaj da mümkündür ancak delme istenmez.",
        },
        {
          question: "Karavan plise perde fiyatı ne kadar?",
          answer: "60x40 cm panelvan penceresi için 192-360 TL, 80x60 cm kamper penceresi için 384-960 TL aralığındadır. Montaj dahildir.",
        },
        {
          question: "Karavan perdesi sarsıntıdan düşer mi?",
          answer: "Hayır, plise perde pencere profili içinde çalışır. Profil mekanizması sarsıntıya dayanıklıdır. Otomotiv sınıfı yapışkanlı montaj ile sağlam takılır.",
        },
      ]}
    />
  );
}
