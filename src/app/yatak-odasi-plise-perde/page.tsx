import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Yatak Odası Plise Perde — Tam Karartma ile Kesintisiz Uyku",
  description:
    "Yatak odası için plise perde: tam karartma blackout kumaş ile tam karanlık uyku. Pencere içi montaj, sessiz mekanizma, ısı yalıtımı. 2 yıl garanti.",
  slug: "yatak-odasi-plise-perde",
});

export default function YatakOdasiPlisePerdePage() {
  return (
    <PageTemplate
      title="Yatak Odası Plise Perde"
      description="Yatak odası için tam karartma plise perde: blackout kumaş, pencere içi montaj, sessiz çalışma."
      slug="yatak-odasi-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Yatak Odası", url: "/yatak-odasi-plise-perde" }]}
      h1="Yatak Odası Plise Perde"
      intro="Yatak odasında en kritik ihtiyaç <strong>kesintisiz uyku</strong> için tam karanlıktır. Sabah güneşi, sokak lambası veya araç farları uykuyu bölebilir. Tam karartma (blackout) plise perde, 3 katmanlı kumaş yapısı ile ışığın %0'ını geçirir ve odayı tam karanlık yapar. Pencere profili içine takıldığı için yatak odasında yer kaplamaz, dekoratif perde dökümü ile mekan daralmaz."
      schemaType="service"
      schemaData={{
        name: "Yatak Odası Plise Perde",
        description: "Yatak odası için tam karartma blackout plise perde.",
      }}
      sections={[
        {
          h2: "Yatak Odasında Tam Karartma Neden Önemli?",
          paragraphs: [
            "Uyku kalitesi, melatonin hormonu sayesinde düzenlenir. Melatonin <strong>karanlıkta</strong> salgılanır. Yatak odasına giren ışık, melatonin üretimini durdurur ve uyku kalitesini düşürür. Tam karartma plise perde:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Sabah güneşini engeller</strong> — yaz aylarında 05:30'da doğan güneş uykuyu bölmez",
              "<strong>Sokak lambasını keser</strong> — pencereye yakın sokak aydınlatması odayı aydınlatmaz",
              "<strong>Araç farlarını bloke eder</strong> — yol kenarındaki yatak odaları için kritik",
              "<strong>Gündüz uyku sağlar</strong> — gece çalışanlar için gündüz tam karanlık",
              "<strong>Mahremiyet</strong> — dışarıdan içerisi tamamen görünmez",
            ],
          },
        },
        {
          h2: "Yatak Odası İçin Kumaş Seçenekleri",
          paragraphs: [
            "Yatak odasında <strong>tam karartma (blackout)</strong> birincil tercih olsa da, farklı ihtiyaçlar için alternatifler mevcuttur:",
          ],
          table: {
            headers: ["Kumaş Tipi", "Işık Geçirgenliği", "Uyku Etkisi", "Önerilen Durum"],
            rows: [
              ["Tam karartma (Blackout)", "%0", "Tam karanlık uyku", "Birincil tercih"],
              ["Yarı karartma", "%10-20", "Soft ışık, hafif karanlık", "Sabah ışığı isteyenler"],
              ["Düet (gece-gündüz)", "%0 / %70", "Gece karartma + gündüz ışık", "Tek pencere iki ihtiyaç"],
              ["Honeycomb karartma", "%0 + ısı yalıtımı", "Karanlık + sıcak oda", "Soğuk yatak odası"],
            ],
          },
        },
        {
          h2: "Yatak Odası Pencere Özellikleri ve Montaj",
          paragraphs: [
            "Yatak odası pencereleri genellikle <strong>standart boyutta</strong> olur ancak bazı evlerde farklı tipler bulunur:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Standart pencere (100-120x120-150 cm)</strong> — vidalı montaj, tam karartma kumaş",
              "<strong>French pencere (kapılı)</strong> — kancalı montaj, pencere açıldığında perde engel olmaz",
              "<strong>Çatı penceresi (eğimli)</strong> — vidalı montaj, honeycomb karartma ile ısı yalıtımı",
              "<strong>Geniş pencere (150+ cm)</strong> — vidalı montaj, motorlu opsiyon ile uzaktan kontrol",
              "<strong>İkili pencere</strong> — her pencereye ayrı plise perde, senkronize görünüm",
            ],
          },
        },
        {
          h2: "Yatak Odası Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Yatak odası pencere ölçüleri ve <strong>tam karartma kumaş</strong> fiyat aralıkları:",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Karartma Fiyat", "Düet Fiyat", "Honeycomb Karartma"],
            rows: [
              ["100x120 cm (standart)", "1.20 m²", "1.680-2.400 TL", "2.400-3.840 TL", "2.160-3.360 TL"],
              ["120x150 cm (büyük)", "1.80 m²", "2.520-3.600 TL", "3.600-5.760 TL", "3.240-5.040 TL"],
              ["150x180 cm (geniş)", "2.70 m²", "3.780-5.400 TL", "5.400-8.640 TL", "4.860-7.560 TL"],
              ["2 adet 100x120 cm (ikili)", "2.40 m²", "3.360-4.800 TL", "4.800-7.680 TL", "4.320-6.720 TL"],
            ],
          },
        },
        {
          h2: "Yatak Odası İçin Ek Özellikler",
          paragraphs: [
            "Yatak odasında uyku konforunu artıran <strong>ek özellikler</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Motorlu seçenek</strong> — yataktan kalkmadan uzaktan kumanda ile perde açma/kapama",
              "<strong>Zamanlayıcı</strong> — sabah belirli saatte otomatik açılma, doğal uyanma",
              "<strong>Sessiz mekanizma</strong> — plise perde mekanizması sessiz çalışır, uyku bölmez",
              "<strong>Çocuk güvenliği</strong> — ip mekanizması yok, strangülasyon riski sıfır",
              "<strong>Isı yalıtımı (honeycomb)</strong> — kışın sıcak tutar, yazın serin, uyku konforu artar",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Yatak odası için en iyi plise perde hangisi?",
          answer: "Tam karartma (blackout) plise perde birincil tercihtir. Işığı %0 geçirir, tam karanlık uyku sağlar. Soğuk oda için honeycomb karartma, tek pencerede gündüz ışık+gece karanlık için düet önerilir.",
        },
        {
          question: "Plise perde tam karartma mı, blackout zebra perde mi?",
          answer: "Plise perde pencere içine takılır, yer kaplamaz. Blackout zebra perde ise pencere önünde çalışır. Karartma performansı benzerdir ancak plise perde daha kompakt ve sessizdir.",
        },
        {
          question: "Yatak odası plise perde fiyatı ne kadar?",
          answer: "100x120 cm standart pencere için tam karartma 1.680-2.400 TL, 120x150 cm için 2.520-3.600 TL aralığındadır. Montaj dahildir.",
        },
        {
          question: "Yatak odasında motorlu plise perde kullanışlı mı?",
          answer: "Evet, özellikle geniş ve yüksek pencerede. Yataktan kalkmadan uzaktan kumanda ile açma/kapama. Zamanlayıcı ile sabah otomatik açılma doğal uyanma sağlar.",
        },
      ]}
    />
  );
}
