import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Desenli Plise Perde — Dokumalı ve Figürlü Model",
  description:
    "Desenli plise perde: dokuma veya figür desenli kumaş. Çizgili, noktalı, geometrik, doğal motifler. Dekoratif ve şık. 2 yıl garanti.",
  slug: "desenli-plise-perde",
});

export default function DesenliPlisePerdePage() {
  return (
    <PageTemplate
      title="Desenli Plise Perde"
      description="Desenli plise perde: dokuma veya figür desenli kumaş. Çizgili, noktalı, geometrik, doğal motifler. Dekoratif ve şık."
      slug="desenli-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Modellerimiz", url: "/plise-perde-modelleri" }, { name: "Desenli Plise Perde", url: "/desenli-plise-perde" }]}
      h1="Desenli Plise Perde"
      intro="Desenli plise perde, kumaş yüzeyinde dokuma veya figür deseni bulunan plise perde modelidir. Çizgili, noktalı, geometrik, doğal motifler ve daha fazla desen seçeneği mevcuttur. Düz kumaşa göre daha dekoratif ve karakter katar. Mekan tasarımına renk ve hareket getirir. Işık geçirgen, güneşlik ve karartma kumaş seçenekleri ile üretilir. 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Desenli Plise Perde",
        description: "Dokuma veya figür desenli dekoratif plise perde modeli.",
      }}
      sections={[
        {
          h2: "Desenli Plise Perde Nedir?",
          paragraphs: [
            "Desenli plise perde, kumaşın <strong>dokuma tekniği ile üretilen</strong> desen veya figür içeren modelidir. Desen, kumaşa sonradan basılmaz — dokuma sırasında oluşturulur. Bu nedenle desen kalıcıdır, silinmez ve solmaz.",
            "Düz kumaşa göre <em>daha fazla karakter ve derinlik</em> katar. Mekanda focal point oluşturur, pencereyi sadece fonksiyonel bir öğe olmaktan çıkarıp dekoratif bir unsur yapar.",
          ],
        },
        {
          h2: "Desen Çeşitleri",
          paragraphs: [
            "Desenli plise perdede <strong>farklı desen kategorileri</strong> mevcuttur:",
          ],
          table: {
            headers: ["Desen Tipi", "Özellik", "Uyumlu Tarz"],
            rows: [
              ["Çizgili", "İnce/kalın çizgiler", "Modern, endüstriyel"],
              ["Noktalı", "Mini noktalar", "Minimal, retro"],
              ["Geometrik", "Üçgen, kare, baklava", "Modern, çağdaş"],
              ["Doğal motif", "Yaprak, dalga, bulut", "Doğal, organik"],
              ["Damask", "Klasik dokuma deseni", "Klasik, lüks"],
              ["Abstrakt", "Soyut şekiller", "Sanatsal, yaratıcı"],
            ],
          },
        },
        {
          h2: "Desenli Plise Perde Avantajları",
          paragraphs: [
            "Desenli modelin başlıca avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Dekoratif — pencereye karakter ve derinlik katar",
              "Kalıcı desen — dokuma ile üretilir, silinmez",
              "Mekan kimliği — tasarım bütünlüğüne katkı",
              "Gizlilik — desen kumaşı arkasını daha az gösterir",
              "Renk oyunu — desen ile ışık etkisi artar",
              "Özgün görünüm — düz kumaştan farklı, dikkat çeker",
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Desenli plise perde <strong>karakter ve dekorasyon</strong> önceliği olan mekanlar için idealdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Oturma odası — desen ile dekoratif vurgu",
              "Çocuk odası — figürlü desen ile eğlenceli görünüm",
              "Kafe/restoran — mekana kimlik katar",
              "Butik otel — tasarım odaklı mekan",
              "Ofis toplantı odası — geometrik desen ile profesyonel",
              "Galeri/showroom — sanatsal abstrakt desen",
            ],
          },
        },
        {
          h2: "Desen ve Kumaş Seçimi",
          paragraphs: [
            "Desenli plise perdede <strong>desen ve kumaş tipi</strong> birlikte seçilir:",
          ],
          list: {
            type: "ul",
            items: [
              "Tül desenli — ışık geçirgen, dekoratif (oturma odası)",
              "Güneşlik desenli — filtreli ışık, gizlilik (salon, ofis)",
              "Yarı karartma desenli — soft ışık, desen görünür (yatak odası)",
              "Tam karartma desenli — karanlık + dekoratif (yatak odası)",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Desenli plise perde deseni silinir mi?",
          answer: "Hayır, desen dokuma tekniği ile kumaşa işlenir. Baskı değil dokuma olduğu için silinmez, solmaz ve yıkanınca çıkmaz. Kalıcı özelliktir.",
        },
        {
          question: "Desenli plise perde fiyatı düzden farklı mı?",
          answer: "Evet, desenli kumaş dokuma karmaşıklığı nedeniyle düz kumaşa göre biraz daha yüksektir. Ancak fiyat farkı minimaldir ve dekoratif değer katmaktadır.",
        },
        {
          question: "Desenli plise perde ışık geçirir mi?",
          answer: "Evet, desenli kumaş hem ışık geçirgen tül hem de tam karartma seçeneği ile üretilir. Desen, kumaş tipinden bağımsızdır — her kumaş tipinde desen uygulanabilir.",
        },
        {
          question: "Hangi desen trend mi?",
          answer: "Geometrik ve doğal motif desenler şu an trend. Minimal noktalı ve ince çizgili ise zamansız seçenekler. Klasik mekanlar için damask desen önerilir.",
        },
        {
          question: "Desenli plise perde temizliği zor mu?",
          answer: "Hayır, düz kumaş ile aynı temizlik yöntemi geçerlidir. Nemli bez ile silinir. Desenli kumaş toz tutma eğilimi düz kumaşa benzerdir.",
        },
      ]}
    />
  );
}
