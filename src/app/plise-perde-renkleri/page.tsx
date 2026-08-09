import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Renkleri — Profil & Kumaş Renk Seçenekleri",
  description:
    "Plise perde renkleri: profil renkleri (beyaz, bej, antrasit, ahşap görünümlü) ve kumaş renkleri (tül, güneşlik, karartma). 20+ renk seçeneği, özel ölçü üretim.",
  slug: "plise-perde-renkleri",
});

export default function PlisePerdeRenkleriPage() {
  return (
    <PageTemplate
      title="Plise Perde Renkleri"
      description="Plise perde renkleri: profil renkleri (beyaz, bej, antrasit, ahşap görünümlü) ve kumaş renkleri (tül, güneşlik, karartma). 20+ renk seçeneği, özel ölçü üretim."
      slug="plise-perde-renkleri"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Renkler", url: "/plise-perde-renkleri" }]}
      h1="Plise Perde Renkleri"
      intro="Plise perde renk seçimi, mekanın atmosferini belirleyen en önemli karardır. Plise perdelerde <strong>iki ayrı renk bileşeni</strong> vardır: alüminyum profil rengi ve kumaş rengi. Profil rengi pencere çerçevesiyle uyumlu olmalı, kumaş rengi ise odanın ışık ihtiyacına ve dekorasyonuna göre seçilmelidir. Bu sayfada her iki renk grubunu inceleyebilir, mekanınıza uygun kombinasyonu belirleyebilirsiniz."
      schemaType="collectionpage"
      schemaData={{
        name: "Plise Perde Renkleri",
        description: "Profil ve kumaş renk seçenekleri — 20+ renk, özel ölçü üretim.",
        url: "/plise-perde-renkleri",
        items: [
          { name: "Profil Renkleri", url: "/plise-perde-renkleri" },
          { name: "Kumaş Renkleri", url: "/plise-perde-renkleri" },
        ],
      }}
      sections={[
        {
          h2: "Plise Perde Renk Seçimi Neden Önemli?",
          paragraphs: [
            "Plise perde, pencere ile mekan arasında <strong>görsel bir köprü</strong> oluşturur. Yanlış renk seçimi, perdenin dikkat çekici bir unsur olmasına neden olurken; doğru renk seçimi perdenin mimari ile bütünleşmesini sağlar.",
            "Renk seçiminde <em>3 faktör</em> belirleyicidir: pencere çerçeve rengi, oda duvar rengi ve ışık ihtiyacı. Profil rengi çerçeveyle, kumaş rengi ise duvar ve mobilyalarla uyumlu olmalıdır.",
          ],
        },
        {
          h2: "Plise Perde Profil Renkleri",
          paragraphs: [
            "Plise perde profilleri <strong>alüminyum</strong> malzemeden üretilir ve elektrostatik toz boya ile boyanır. Profil rengi, perdenin pencere çerçevesiyle uyumunu sağlar. PVC pencere kullanılan mekanlarda profil rengi çerçeve rengine eşit seçilir; ahşap pencerede ise nötr profil rengi tercih edilir.",
          ],
          table: {
            headers: ["Profil Rengi", "Kod", "Uyumlu Pencere Çerçevesi", "Tipik Kullanım"],
            rows: [
              ["Beyaz", "RAL 9016", "Beyaz PVC, boyalı ahşap", "Modern, minimalist mekanlar"],
              ["Bej", "RAL 1013", "Bej PVC, açık ahşap", "Klasik, sıcak mekanlar"],
              ["Antrasit", "RAL 7016", "Antrasit PVC, alüminyum", "Endüstriyel, modern mekanlar"],
              ["Gri", "RAL 7035", "Gri PVC, alüminyum", "Modern, nötr mekanlar"],
              ["Ahşap görünümlü — meşe", "Dekor", "Lamine ahşap PVC", "Klasik, doğal mekanlar"],
              ["Ahşap görünümlü — ceviz", "Dekor", "Koyu lamine PVC", "Klasik, sıcak mekanlar"],
              ["Siyah", "RAL 9005", "Siyah alüminyum, çelik", "Endüstriyel, loft mekanlar"],
            ],
          },
        },
        {
          h2: "Profil Rengi Seçim Rehberi",
          paragraphs: [
            "Profil rengi seçiminde <strong>pencere çerçeve rengini eşleştirmek</strong> en güvenli yaklaşımdır. Eşleşme olmadığında ise nötr renkler (beyaz, bej) tercih edilmelidir.",
          ],
          list: {
            type: "ul",
            items: [
              "Beyaz PVC pencere → beyaz profil (en yaygın, en güvenli)",
              "Lamine (ahşap görünümlü) PVC → ahşap dekor profil",
              "Antrasit/alüminyum pencere → antrasit veya gri profil",
              "Boyalı ahşap pencere → profil rengi çerçeve rengine eşit",
              "Karma durum → beyaz profil (nötr, her çerçeveyle uyumlu)",
            ],
          },
        },
        {
          h2: "Plise Perde Kumaş Renkleri",
          paragraphs: [
            "Plise perde kumaş renkleri, <strong>kumaş tipine göre</strong> farklılaşır. Tül, güneşlik, yarı karartma ve tam karartma kumaşların her biri farklı renk paletlerine sahiptir. Kumaş rengi, odanın ışık almasını ve dekoratif bütünlüğünü belirler.",
            "Açık renk kumaşlar <strong>daha fazla ışık geçirir</strong> ve mekanın daha geniş görünmesini sağlar. Koyu renk kumaşlar ise ışığı azaltır ve daha sıcak bir atmosfer oluşturur.",
          ],
          table: {
            headers: ["Kumaş Tipi", "Mevcut Renkler", "Işık Geçirgenlik", "Önerilen Oda"],
            rows: [
              ["Tül", "Beyaz, ekru, bej, açık gri", "%70-85", "Oturma odası, mutfak"],
              ["Güneşlik", "Beyaz, bej, gri, ekru, krem", "%30-50", "Salon, çalışma odası"],
              ["Yarı karartma", "Bej, gri, antrasit, kahve, ekru", "%10-20", "Yatak odası, çocuk odası"],
              ["Tam karartma (blackout)", "Beyaz, bej, gri, antrasit, siyah, kahve", "%0", "Yatak odası, sinema odası"],
              ["Honeycomb", "Beyaz, bej, gri, antrasit, krem", "%5-50", "Salon, yatak odası, kış bahçesi"],
            ],
          },
        },
        {
          h2: "Kumaş Rengi Seçim Rehberi",
          paragraphs: [
            "Kumaş rengi seçiminde <strong>odanın fonksiyonu ve ışık ihtiyacı</strong> belirleyicidir. Aşağıdaki rehber en yaygın kombinasyonları önerir:",
          ],
          list: {
            type: "ul",
            items: [
              "Oturma odası — tül veya güneşlik, açık renk (beyaz, ekru, bej)",
              "Yatak odası — yarı karartma veya blackout, nötr renk (bej, gri, antrasit)",
              "Çocuk odası — yarı karartma, pastel renk (bej, açık gri)",
              "Mutfak — tül, açık renk (beyaz, ekru) — ışık ve temizlik önemli",
              "Banyo — tül veya güneşlik, açık renk (beyaz) — nem dayanımlı kumaş",
              "Ofis/çalışma odası — güneşlik, nötr renk (gri, bej) — ekran parlamasını önler",
              "Sinema/oyun odası — blackout, koyu renk (antrasit, siyah) — tam karanlık",
            ],
          },
        },
        {
          h2: "Profil ve Kumaş Renk Kombinasyonları",
          paragraphs: [
            "Profil ve kumaş renkleri <strong>birbirinden bağımsız seçilir</strong>. En yaygın ve güvenli kombinasyonlar aşağıdaki gibidir:",
          ],
          table: {
            headers: ["Profil Rengi", "Kumaş Rengi", "Stil", "Uyumlu Mekan"],
            rows: [
              ["Beyaz", "Beyaz tül", "Modern, minimalist", "Oturma odası, mutfak"],
              ["Beyaz", "Bej güneşlik", "Modern, sıcak", "Salon, çalışma odası"],
              ["Antrasit", "Antrasit blackout", "Endüstriyel", "Yatak odası, loft"],
              ["Bej", "Ekru tül", "Klasik, sıcak", "Oturma odası, kış bahçesi"],
              ["Ahşap dekor", "Bej honeycomb", "Klasik, doğal", "Villa, kır evi"],
              ["Gri", "Gri güneşlik", "Modern, nötr", "Ofis, çalışma odası"],
              ["Siyah", "Siyah blackout", "Endüstriyel, loft", "Sinema odası, stüdyo"],
            ],
          },
        },
        {
          h2: "Renk Numunesi Talep Edin",
          paragraphs: [
            "Renk seçimi, ekranda görüldüğü gibi <strong>gerçek aydınlatmada farklı</strong> görünebilir. Doğru karar için numune talep etmeniz önerilir. Numune ile birlikte profil ve kumaş rengini mekanınızın aydınlatmasında görebilir, kararınızı güvenle verebilirsiniz.",
            "Numune talebi için <a href=\"/numune/\">numune sayfamızı</a> ziyaret edebilir veya WhatsApp ile iletişime geçebilirsiniz. Numune gönderimi Türkiye geneli ücretsizdir.",
          ],
        },
      ]}
      faqItems={[
        {
          question: "Plise perde kaç renk seçeneği var?",
          answer: "Profil renklerinde 7 (beyaz, bej, antrasit, gri, ahşap meşe, ahşap ceviz, siyah), kumaş renklerinde ise kumaş tipine göre 5-8 renk arası seçenek mevcuttur. Toplamda 20+ renk kombinasyonu mümkündür.",
        },
        {
          question: "Profil rengi ve kumaş rengi farklı seçilebilir mi?",
          answer: "Evet, profil ve kumaş renkleri birbirinden bağımsız seçilir. Örneğin beyaz profil ile antrasit kumaş, veya antrasit profil ile bej kumaş seçebilirsiniz. Kombinasyon tamamen size bağlıdır.",
        },
        {
          question: "Hangi profil rengi en yaygın?",
          answer: "Beyaz profil en yaygın seçimdir çünkü beyaz PVC pencerelerle tam uyum sağlar ve her mekan stiline uyar. İkinci en yaygın seçim antrasit profildir.",
        },
        {
          question: "Renk numunesi ücretli mi?",
          answer: "Hayır, numune gönderimi Türkiye geneli ücretsizdir. Numune talebi için numune sayfamızı ziyaret edebilir veya WhatsApp ile iletişime geçebilirsiniz.",
        },
        {
          question: "Ahşap görünümlü profil gerçek ahşap mı?",
          answer: "Hayır, ahşap görünümlü profiller alüminyum profillerin ahşap desenli elektrostatik toz boyasıdır. Gerçek ahşap görünümü sağlar ancak alüminyumun dayanımı ve bakım kolaylığına sahiptir.",
        },
        {
          question: "Kumaş rengi ışık geçirgenliği etkiler mi?",
          answer: "Evet, açık renk kumaşlar (beyaz, ekru, bej) daha fazla ışık geçirirken, koyu renk kumaşlar (antrasit, siyah, kahve) ışığı daha fazla emer. Aynı kumaş tipinde bile renk, ışık geçirgenliği oranını %5-15 etkileyebilir.",
        },
      ]}
    />
  );
}
