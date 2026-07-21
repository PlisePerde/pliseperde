import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Çeşitleri — Tüm Çeşitler",
  description:
    "Plise perde çeşitleri: tül, güneşlik, yarı karartma, tam karartma, honeycomb, düet, motorlu. Her ihtiyaç ve mekan için uygun çeşit. 2 yıl garanti.",
  slug: "plise-perde-cesitleri",
});

export default function PlisePerdeCesitleriPage() {
  return (
    <PageTemplate
      title="Plise Perde Çeşitleri"
      description="Plise perde çeşitleri: tül, güneşlik, yarı karartma, tam karartma, honeycomb, düet, motorlu. Her ihtiyaç ve mekan için uygun çeşit."
      slug="plise-perde-cesitleri"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Çeşitlerimiz", url: "/plise-perde-cesitleri" }]}
      h1="Plise Perde Çeşitleri"
      intro="Plise perde çeşitleri, kumaş yapısına, ışık geçirgenliğine ve fonksiyonuna göre farklılaşır. Tül, güneşlik, yarı karartma, tam karartma, honeycomb, düet ve motorlu çeşitler arasından ihtiyacınıza uygun olanı seçin. Her çeşit özel ölçü üretim, profesyonel montaj ve 2 yıl garanti ile gelir. Türkiye geneli hizmet."
      schemaType="collectionpage"
      schemaData={{
        name: "Plise Perde Çeşitleri",
        description: "Tül, güneşlik, karartma, honeycomb, düet, motorlu plise perde çeşitleri.",
        url: "/plise-perde-cesitleri",
        items: [
          { name: "Tül Plise Perde", url: "/plise-perde" },
          { name: "Honeycomb Plise Perde", url: "/honeycomb-perde" },
          { name: "Düet Plise Perde", url: "/duet-perde" },
          { name: "Blackout Plise Perde", url: "/blackout-plise-perde" },
          { name: "Motorlu Plise Perde", url: "/motorlu-plise-perde" },
        ],
      }}
      sections={[
        {
          h2: "Plise Perde Çeşitleri Nelerdir?",
          paragraphs: [
            "Plise perde çeşitleri <strong>kumaş tipine, ışık geçirgenliğine ve fonksiyonuna</strong> göre sınıflandırılır. Her çeşit farklı bir ihtiyaca cevap verir — ışık, gizlilik, karartma, yalıtım veya otomasyon.",
            "Doğru çeşidi seçmek için <em>odanın fonksiyonunu, ışık ihtiyacını ve gizlilik beklentisini</em> belirlemek gerekir.",
          ],
        },
        {
          h2: "Kumaş Tipine Göre Çeşitler",
          paragraphs: [
            "Plise perde kumaş tipine göre 4 ana çeşide ayrılır:",
          ],
          table: {
            headers: ["Çeşit", "Işık Geçirgenliği", "Gizlilik", "Tipik Kullanım"],
            rows: [
              ["Tül plise perde", "Yüksek (%70-90)", "Az", "Oturma odası, mutfak"],
              ["Güneşlik plise perde", "Orta (%30-50)", "İyi", "Salon, çalışma odası"],
              ["Yarı karartma plise perde", "Düşük (%10-20)", "Yüksek", "Yatak odası, çocuk odası"],
              ["Tam karartma plise perde", "Sıfır (%0)", "Tam", "Yatak odası, sinema odası"],
            ],
          },
        },
        {
          h2: "Fonksiyona Göre Çeşitler",
          paragraphs: [
            "Plise perde fonksiyonuna göre ek çeşitlere sahiptir:",
          ],
          list: {
            type: "ul",
            items: [
              "Honeycomb plise perde — petek hücreli, ısı yalıtımı sağlar",
              "Düet plise perde — iki katmanlı, gece-gündüz sistemi",
              "Motorlu plise perde — uzaktan kumanda ve akıllı ev",
              "Gece gündüz plise perde — ışık + karartma tek perdede",
              "Blackout plise perde — %100 ışık kesme",
              "Desenli plise perde — dokuma desenli, dekoratif",
              "Baskılı plise perde — özel baskı, kişiselleştirilmiş",
            ],
          },
        },
        {
          h2: "Açılım Tipine Göre Çeşitler",
          paragraphs: [
            "Plise perde <strong>açılım yönüne</strong> göre de çeşitlenir:",
          ],
          list: {
            type: "ul",
            items: [
              "Standart açılım — alttan yukarı doğru açılır",
              "Ters açılım — üstten aşağı doğru açılır",
              "Ortadan açılım — hem üstten hem alttan, ortada toplanır",
              "Üstten-alttan açılım — honeycomb ve düette yaygın",
            ],
          },
        },
        {
          h2: "Hangi Çeşiti Seçmelisiniz?",
          paragraphs: [
            "Çeşit seçimi için <strong>3 soruya</strong> cevap verin:",
          ],
          list: {
            type: "ol",
            items: [
              "Oda ne için kullanılacak? (uyku, çalışma, oturma)",
              "Ne kadar ışık istiyorsunuz? (çok, orta, az, hiç)",
              "Gizlilik beklentiniz nedir? (dışarıdan görünmesin / görünmesin önemli değil)",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde kaç çeşidi var?",
          answer: "Kumaş tipine göre 4 (tül, güneşlik, yarı karartma, tam karartma), fonksiyona göre 7+ (honeycomb, düet, motorlu, gece gündüz, blackout, desenli, baskılı) çeşit mevcuttur.",
        },
        {
          question: "Hangi çeşit yatak odası için uygun?",
          answer: "Yatak odası için tam karartma veya blackout plise perde önerilir. Gündüz ışık da istiyorsanız gece gündüz veya düet perde tercih edebilirsiniz.",
        },
        {
          question: "Hangi çeşit oturma odası için uygun?",
          answer: "Oturma odası için tül veya güneşlik plise perde önerilir. Işık alırken dışarıdan görünmemek için güneşlik idealdir.",
        },
        {
          question: "Honeycomb ve standart plise perde farkı nedir?",
          answer: "Honeycomb plise perde petek hücreli yapısıyla ısı yalıtımı sağlar. Standart plise perde yalıtım sağlamaz. Enerji tasarrufu isteyenler honeycomb tercih etmelidir.",
        },
        {
          question: "Motorlu plise perde çeşiti var mı?",
          answer: "Evet, motorlu plise perde uzaktan kumanda, akıllı telefon ve sesli komut ile kontrol edilir. Geniş pencere ve yüksek tavanlar için idealdir.",
        },
      ]}
    />
  );
}
