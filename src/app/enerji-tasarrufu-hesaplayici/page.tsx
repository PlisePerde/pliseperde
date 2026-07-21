import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Enerji Tasarrufu Hesaplayıcı — Plise Perde Isı Yalıtımı",
  description:
    "Plise perde enerji tasarrufu hesaplayıcı. Honeycomb petek modeli ile ısıtma ve soğutma giderinizi düşürün. U-değeri ve tasarruf hesaplama.",
  slug: "enerji-tasarrufu-hesaplayici",
});

export default function EnerjiTasarrufuHesaplayiciPage() {
  return (
    <PageTemplate
      title="Enerji Tasarrufu Hesaplayıcı"
      description="Plise perde enerji tasarrufu hesaplayıcı. Honeycomb petek modeli ile ısıtma ve soğutma giderinizi düşürün."
      slug="enerji-tasarrufu-hesaplayici"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmetlerimiz", url: "/hizmetlerimiz" }, { name: "Enerji Tasarrufu", url: "/enerji-tasarrufu-hesaplayici" }]}
      h1="Enerji Tasarrufu Hesaplayıcı"
      intro="Enerji tasarrufu hesaplayıcı ile plise perde seçerek yıllık ısıtma ve soğutma giderinizden ne kadar tasarruf edeceğinizi hesaplayın. Honeycomb petek modeli, petek hücre yapısı sayesinde ısı yalıtımı sağlar ve enerji faturalarını %40'a kadar düşürür. Pencere ölçünüzü ve bölgenizi girerek tahmini tasarrufu öğrenebilirsiniz."
      schemaType="service"
      schemaData={{
        name: "Enerji Tasarrufu Hesaplayıcı",
        description: "Plise perde ile enerji tasarrufu hesaplama aracı.",
        serviceType: "Enerji Tasarrufu",
      }}
      sections={[
        {
          h2: "Plise Perde Enerji Tasarrufu Nasıl Sağlar?",
          paragraphs: [
            "Honeycomb perde, <strong>altıgen petek hücreleri</strong> içinde hava hapseder. Bu hava tabakası, pencere ile oda arasında <em>doğal yalıtım bariyeri</em> oluşturur.",
            "Kışın camdan gelen soğuk hava petek yapısında filtrelenir. <u>Isı kaybı %40'a kadar azalır</u>. Yazın ise sıcak hava engellenir ve klima tüketimi düşer.",
          ],
          table: {
            headers: ["Model", "U-değeri (W/m²K)", "Isı Kaybı Azaltma"],
            rows: [
              ["Standart plise (tül)", "5.8", "%0 (referans)"],
              ["Güneşlik plise", "4.2", "%15"],
              ["Yarı karartma", "3.5", "%25"],
              ["Tam karartma", "3.0", "%30"],
              ["Honeycomb tek petek", "2.8", "%25"],
              ["Honeycomb çift petek", "1.8", "%40"],
            ],
          },
        },
        {
          h2: "Tasarruf Hesaplama Yöntemi",
          paragraphs: [
            "Tasarruf hesabı <strong>pencere alanı, U-değeri ve bölge</strong> faktörlerine dayanır. Yıllık ısıtma/soğutma giderinden tasarruf miktarı çıkarılır.",
          ],
          list: {
            type: "ol",
            items: [
              "Pencere alanı hesaplanır — m²",
              "Mevcut U-değeri belirlenir — cam tipine göre",
              "Plise perde U-değeri eklenir — model seçimi",
              "Isı kaybı farkı hesaplanır — yıllık kWh",
              "kWh fiyatı ile çarpılır — yıllık tasarruf TL",
            ],
          },
        },
        {
          h2: "Örnek Tasarruf Hesabı",
          paragraphs: [
            "İstanbul'da 10 m² pencere alanı için <strong>honeycomb çift petek</strong> seçelim. Mevcut tek cam U-değeri 5.8. Honeycomb ile U-değeri 1.8'e düşer.",
          ],
          table: {
            headers: ["Bölge", "Pencere Alanı", "Yıllık Tasarruf"],
            rows: [
              ["İstanbul (Marmara)", "10 m²", "2.800-3.500 TL"],
              ["Ankara (İç Anadolu)", "10 m²", "3.500-4.500 TL"],
              ["Antalya (Akdeniz)", "10 m²", "2.000-2.800 TL"],
              ["Erzurum (Doğu Anadolu)", "10 m²", "5.000-6.500 TL"],
            ],
          },
        },
        {
          h2: "Honeycomb Petek ile Tasarruf",
          paragraphs: [
            "Honeycomb çift petek modeli <strong>en yüksek tasarruf</strong> sağlar. Yıllık 2.800-6.500 TL arası tasarruf, ürün maliyetini 1-2 yılda amorti eder.",
          ],
          list: {
            type: "ul",
            items: [
              "Çift petek — %40 ısı kaybı azaltma",
              "Yıllık tasarruf — 2.800-6.500 TL",
              "Amortisman — 1-2 yıl içinde",
              "Kışın ısıtma — doğalgaz faturası düşer",
              "Yazın soğutma — klima faturası düşer",
              "UV koruma — mobilya ömrü uzar",
            ],
          },
        },
        {
          h2: "Net Tasarruf İçin Keşif",
          paragraphs: [
            "Hesaplama <strong>tahminidir</strong>. Net tasarruf için ücretsiz keşif talep edin. Ekip pencere ölçüsü alır, cam tipini kontrol eder ve <em>kesin tasarruf hesabı</em> sunar.",
          ],
          list: {
            type: "ol",
            items: [
              "WhatsApp'tan keşif talep edin",
              "Ekip pencere ve cam tipini kontrol eder",
              "U-değeri hesaplanır — mevcut vs plise perde",
              "Yıllık tasarruf hesaplanır — net rakam",
              "Ürün maliyeti vs tasarruf karşılaştırması",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde enerji tasarrufu sağlar mı?",
          answer: "Evet, honeycomb petek modeli %40'a kadar ısı kaybını azaltır. Petek hücreleri içindeki hava tabakası doğal yalıtım sağlar. Yıllık 2.800-6.500 TL tasarruf mümkündür.",
        },
        {
          question: "Hangi plise perde modeli en çok tasarruf sağlar?",
          answer: "Honeycomb çift petek modeli en yüksek tasarruf sağlar. U-değeri 1.8 W/m²K'ye düşer ve ısı kaybını %40 azaltır. Tek petek %25, tam karartma %30 azaltma sağlar.",
        },
        {
          question: "Enerji tasarrufu hesaplayıcı nasıl çalışır?",
          answer: "Pencere alanı, mevcut cam U-değeri ve plise perde U-değeri ile yıllık ısı kaybı farkı hesaplanır. kWh fiyatı ile çarpılarak yıllık tasarruf TL olarak bulunur.",
        },
        {
          question: "Honeycomb plise perde kendini ne kadar sürede amorti eder?",
          answer: "Yıllık 2.800-6.500 TL tasarruf ile honeycomb çift petek modeli 1-2 yıl içinde kendini amorti eder. Sonrası yıllık net tasarruf sağlar.",
        },
        {
          question: "Net tasarruf hesabı için ne yapmalıyım?",
          answer: "Ücretsiz keşif talep edin. Ekip pencere ölçüsü alır, cam tipini kontrol eder ve kesin tasarruf hesabı sunar. WhatsApp'tan randevu alabilirsiniz.",
        },
      ]}
    />
  );
}
