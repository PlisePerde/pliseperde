import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Montaj Hizmeti — Profesyonel Montaj",
  description:
    "Plise perde montaj hizmeti. Deneyimli montaj ekibi, vidalı/yapışkanlı/kancalı montaj. İstanbul ve Türkiye geneli. 2 yıl garanti.",
  slug: "montaj",
});

export default function MontajPage() {
  return (
    <PageTemplate
      title="Plise Perde Montajı"
      description="Plise perde montaj hizmeti. Deneyimli montaj ekibi, vidalı/yapışkanlı/kancalı montaj. 2 yıl garanti."
      slug="montaj"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmetlerimiz", url: "/hizmetlerimiz" }, { name: "Montaj", url: "/montaj" }]}
      h1="Plise Perde Montajı"
      intro="Plise perde montajı, deneyimli montaj ekibimiz tarafından profesyonel şekilde yapılır. Vidalı, yapışkanlı ve kancalı montaj tiplerinden pencere yapısına uygun olanı seçeriz. Her montaj 2 yıl garanti ile gelir. İstanbul merkezli ekibimiz Türkiye geneli hizmet verir. Tek pencere veya tüm ev, her ölçekte montaj yapılır."
      schemaType="service"
      schemaData={{
        name: "Plise Perde Montajı",
        description: "Profesyonel plise perde montaj hizmeti. Vidalı, yapışkanlı, kancalı montaj tipleri.",
        serviceType: "Montaj",
        areaServed: "İstanbul",
      }}
      sections={[
        {
          h2: "Plise Perde Montajı Nasıl Yapılır?",
          paragraphs: [
            "Montaj; ölçü alma, profil kesimi, kanal yerleştirme ve kumaş germe adımlarından oluşur. <strong>Her adım profesyonel ekip</strong> tarafından yapılır. Montaj süresi pencere sayısına göre değişir.",
            "Tek pencere montajı 20-30 dakika sürer. <em>Bir oda (3-4 pencere)</em> 1-1.5 saatte monte edilir. Tüm ev (8-12 pencere) yarım günde tamamlanır.",
          ],
          table: {
            headers: ["Adım", "Süre", "İşlem"],
            rows: [
              ["1. Ölçü", "5 dk", "Genişlik ve yükseklik alınır"],
              ["2. Profil kesimi", "5 dk", "Ölçüye göre profil ayarlanır"],
              ["3. Kanal montajı", "5 dk", "Üst ve alt kanallar takılır"],
              ["4. Kumaş germe", "5 dk", "İp mekanizması ayarlanır"],
              ["5. Test", "5 dk", "Açılır kapanır kontrolü"],
            ],
          },
        },
        {
          h2: "Montaj Tipleri",
          paragraphs: [
            "Üç montaj tipi mevcuttur. <strong>Pencere yapısına ve kumaş ağırlığına</strong> göre uygun tip seçilir. Ağır kumaşlarda vidalı, hafif kumaşlarda yapışkanlı veya kancalı tercih edilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Vidalı — en sağlam, ağır kumaş için",
              "Yapışkanlı — delmesiz, kiracı dostu",
              "Kancalı — sökülebilir, temizlik dostu",
              "Portrayli — estetik, ince profil",
            ],
          },
        },
        {
          h2: "Montaj Fiyatları",
          paragraphs: [
            "Montaj ücreti <strong>pencere sayısına ve montaj tipine</strong> göre belirlenir. Ürün fiyatına dahil montaj seçeneği de mevcuttur.",
          ],
          table: {
            headers: ["Montaj Tipi", "Tek Pencere", "Oda (3-4 pencere)"],
            rows: [
              ["Vidalı", "150-250 TL", "450-900 TL"],
              ["Yapışkanlı", "100-200 TL", "300-700 TL"],
              ["Kancalı", "100-180 TL", "300-600 TL"],
              ["Portrayli", "180-300 TL", "540-1100 TL"],
            ],
          },
        },
        {
          h2: "Montaj Garantisi",
          paragraphs: [
            "Tüm montaj işleri <strong>2 yıl garanti</strong> ile yapılır. Garanti kapsamında mekanizma ayarı, profil sıkıştırma ve kumaş germe dahildir. Sorun çıkarsa ücretsiz servis yapılır.",
          ],
          list: {
            type: "ol",
            items: [
              "Montaj sonrası 2 yıl garanti belgesi verilir",
              "Mekanizma sorunlarında ücretsiz servis",
              "Profil gevşemesinde ücretsiz sıkıştırma",
              "Kumaş sarkmasında ücretsiz germe",
            ],
          },
        },
        {
          h2: "Montaj Bölgeleri",
          paragraphs: [
            "İstanbul merkezli montaj ekibimiz <strong>Türkiye geneli</strong> hizmet verir. İstanbul içinde ücretsiz keşif, diğer şehirlerde kargo ile ürün gönderimi yapılır.",
          ],
          list: {
            type: "ul",
            items: [
              "İstanbul — ücretsiz keşif + montaj",
              "Kocaeli, Yalova, Sakarya — keşif + montaj",
              "Ankara, İzmir, Bursa — kargo + yerel montaj",
              "Diğer şehirler — kargo + video montaj desteği",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde montajı ne kadar sürer?",
          answer: "Tek pencere 20-30 dakikada monte edilir. Bir oda (3-4 pencere) 1-1.5 saatte, tüm ev (8-12 pencere) yarım günde tamamlanır.",
        },
        {
          question: "Montaj ücreti ne kadar?",
          answer: "Montaj tipine göre tek pencere 100-300 TL aralığında fiyatlanır. Oda bazında 300-1100 TL. Ürün fiyatına dahil montaj seçeneği de mevcuttur.",
        },
        {
          question: "Montaj garantisi var mı?",
          answer: "Evet, tüm montaj işleri 2 yıl garanti ile yapılır. Mekanizma, profil ve kumaş sorunlarında ücretsiz servis yapılır.",
        },
        {
          question: "İstanbul dışında montaj yapılır mı?",
          answer: "Evet, Türkiye geneli hizmet veriyoruz. İstanbul ve çevre şehirlerde keşif + montaj yapılır. Diğer şehirlerde kargo ile ürün gönderilir ve video montaj desteği sağlanır.",
        },
        {
          question: "Hangi montaj tipini seçmeliyim?",
          answer: "Ağır kumaş (honeycomb, motorlu) için vidalı, kira evi için yapışkanlı, sık sök-tak için kancalı, estetik öncelik için portrayli montaj tercih edin.",
        },
      ]}
    />
  );
}
