import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Çocuk Güvenliği — Plise Perde Güvenli Tasarım",
  description:
    "Plise perde çocuk güvenliği. İpsiz modeller, kancalı montaj, toksik olmayan malzeme. Çocuklu evler için güvenli perde çözümü.",
  slug: "cocuk-guvenligi",
});

export default function CocukGuvenligiPage() {
  return (
    <PageTemplate
      title="Çocuk Güvenliği"
      description="Plise perde çocuk güvenliği. İpsiz modeller, kancalı montaj, toksik olmayan malzeme. Çocuklu evler için güvenli perde."
      slug="cocuk-guvenligi"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kurumsal", url: "/hakkimizda" }, { name: "Çocuk Güvenliği", url: "/cocuk-guvenligi" }]}
      h1="Çocuk Güvenliği — Plise Perde ile Güvenli Ev"
      intro="Çocuk güvenliği, plise perde tasarımımızın önceliklerinden biridir. Geleneksel perde ipleri boğulma riski taşır. Plise perde, kısa ip mekanizması ve alternatif açma seçenekleri ile bu riski en aza indirir. Motorlu modelde ip tamamen yoktur. Kancalı montaj ile perde sökülüp takılabilir, çocuğun erişemeyeceği yükseklikte kullanılır. Toksik olmayan malzemeler ile çocuklu evler için güvenli çözüm sunar."
      schemaType="article"
      schemaData={{
        headline: "Çocuk Güvenliği — Plise Perde Güvenli Tasarım",
        description: "İpsiz modeller, kancalı montaj, toksik olmayan malzeme ile çocuk güvenliği.",
      }}
      sections={[
        {
          h2: "Plise Perde Çocuk Güvenliği Avantajları",
          paragraphs: [
            "Plise perde, <strong>geleneksel perdelere göre</strong> çocuk güvenliği açısından çok daha avantajlıdır. <em>Kısa ip mekanizması</em> boğulma riskini azaltır, motorlu modelde ip tamamen yoktur.",
          ],
          table: {
            headers: ["Güvenlik Özelliği", "Plise Perde", "Geleneksel Perde"],
            rows: [
              ["İp uzunluğu", "Kısa (çocuğun erişemeyeceği)", "Uzun (boğulma riski)"],
              ["İpsiz seçenek", "Motorlu model", "Yok"],
              ["Montaj tipi", "Kancalı (sökülebilir)", "Sabit"],
              ["Malzeme", "Toksik olmayan", "Değişken"],
              ["Kumaş", "Yırtılma dirençli", "Değişken"],
            ],
          },
        },
        {
          h2: "Çocuklu Evler İçin Önerilen Modeller",
          paragraphs: [
            "Çocuklu evlerde <strong>motorlu model</strong> en güvenli seçenektir. <em>İp tamamen yoktur</em> ve uzaktan kumanda ile açılır kapanır. İp mekanizması boğulma riski taşımaz.",
          ],
          list: {
            type: "ul",
            items: [
              "Motorlu — ip yok, en güvenli seçenek",
              "Kancalı — perde sökülüp yüksek yere takılır",
              "Vidasız — çerçeveye zarar vermeden sökülebilir",
              "Tam karartma — bebek odası için uyku düzeni",
              "Honeycomb — ısıl konfor için çocuk odası",
            ],
          },
        },
        {
          h2: "İp Mekanizması Güvenliği",
          paragraphs: [
            "Plise perde ip mekanizması <strong>çok kısadır</strong>. İp, kumaş ile birlikte hareket eder ve <em>sarkmaz</em>. Geleneksel perde ipleri gibi uzun ve boğulma riskli değildir.",
          ],
          list: {
            type: "ol",
            items: [
              "İp kısa — çocuğun erişemeyeceği uzunlukta",
              "İp sarkmaz — kumaş ile birlikte hareket eder",
              "İp döngüsü yok — boğulma riski sıfır",
              "Motorlu model — ip tamamen yok",
              "İp güvenlik klipsi — ekstra güvenlik",
            ],
          },
        },
        {
          h2: "Toksisite ve Malzeme Güvenliği",
          paragraphs: [
            "Kullanılan tüm malzemeler <strong>toksik değildir</strong>. Kumaş <em>OEKO-TEX</em> sertifikalıdır, çocuk cildi ile temasında zararlı madde içermez. Profil ve boya su bazlıdır.",
          ],
          table: {
            headers: ["Malzeme", "Sertifika", "Güvenlik"],
            rows: [
              ["Kumaş", "OEKO-TEX", "Toksik olmayan"],
              ["Profil", "RoHS", "Zararlı madde yok"],
              ["Boya", "Su bazlı", "VOC düşük"],
              ["İp", "Poliester", "Toksik olmayan"],
              ["Yapışkan", "3M VHB", "Çocuk güvenli"],
            ],
          },
        },
        {
          h2: "Montaj Güvenliği",
          paragraphs: [
            "Kancalı montaj ile perde <strong>sökülebilir</strong>. Çocuğun erişebileceği yükseklikteki pencerelerde perdeyi çıkarabilirsiniz. <em>Vidasız montaj</em> ile çerçevede keskin kenar oluşmaz.",
          ],
          list: {
            type: "ul",
            items: [
              "Kancalı — perde sökülür, çocuğun erişemeyeceği yere konur",
              "Vidasız — çerçevede keskin vida ucu yok",
              "Motorlu — ip yok, uzaktan kumanda",
              "Profil köşeleri — yuvarlatılmış, keskin değil",
              "Kumaş — yırtılma dirençli, parçalanmaz",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde çocuklar için güvenli mi?",
          answer: "Evet, plise perde çocuklar için geleneksel perdelere göre çok daha güvenlidir. İp mekanizması kısadır ve sarkmaz. Motorlu modelde ip tamamen yoktur. Malzemeler toksik değildir.",
        },
        {
          question: "Plise perde ipi boğulma riski taşır mı?",
          answer: "Hayır, plise perde ipi çok kısadır ve kumaş ile birlikte hareket eder, sarkmaz. Geleneksel perde ipleri gibi uzun ve döngülü değildir. Motorlu modelde ip tamamen yoktur.",
        },
        {
          question: "Çocuklu ev için hangi model önerilir?",
          answer: "Motorlu model en güvenli seçenektir, ip tamamen yoktur. Kancalı montaj ile perde sökülüp çocuğun erişemeyeceği yere konabilir. Tam karartma modeli bebek odası için uygundur.",
        },
        {
          question: "Plise perde malzemeleri toksik mi?",
          answer: "Hayır, tüm malzemeler toksik değildir. Kumaş OEKO-TEX sertifikalıdır, profil RoHS uyumludur, boya su bazlıdır. Çocuk cildi ile temasında zararlı madde içermez.",
        },
        {
          question: "Plise perde kancalı montaj nasıl güvenlik sağlar?",
          answer: "Kancalı montaj ile perde sökülüp takılabilir. Çocuğun erişebileceği yükseklikteki pencerede perdeyi çıkarabilirsiniz. Vidasız montaj ile çerçevede keskin vida ucu oluşmaz.",
        },
      ]}
    />
  );
}
