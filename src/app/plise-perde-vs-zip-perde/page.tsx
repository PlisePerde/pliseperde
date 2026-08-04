import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Zip Perde — Karşılaştırma",
  description:
    "Plise perde vs zip perde karşılaştırması. Cam balkon, dış cephe, ışık kontrolü, rüzgar dayanımı, fiyat, montaj. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-zip-perde",
});

export default function PliseVsZipPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Zip Perde"
      description="Plise perde vs zip perde karşılaştırması. Işık kontrolü, rüzgar dayanımı, fiyat, montaj, temizlik."
      slug="plise-perde-vs-zip-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Zip", url: "/plise-perde-vs-zip-perde" }]}
      h1="Plise Perde vs Zip Perde — Hangisi Daha İyi?"
      intro="Plise perde ve zip perde, farklı ihtiyaçlara yönelik iki pencere çözümüdür. Plise perde iç mekanlarda pencere üzerinde çalışır, zip perde ise dış cephe ve cam balkonlarda kullanılan bir sistemdir. Zip perde, kumaş kenarlarının profil kanalına zip şeklinde oturmasıyla rüzgar ve hava akımına karşı direnç sağlar. Bu karşılaştırmada kullanım alanı, ışık kontrolü, rüzgar dayanımı, fiyat ve montaj açısından ikisini detaylıca inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Zip Perde Karşılaştırması",
        description: "Plise perde ve zip perde karşılaştırması — kullanım alanı, rüzgar dayanımı, fiyat, montaj.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-zip-perde.webp"
          alt="Plise Perde vs Zip Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Kullanım Alanı Farkı",
          paragraphs: [
            "Plise perde <strong>iç mekanlarda</strong> pencere üzerine monte edilir. Pencere içine takılır, oda içinde çalışır. Ev, ofis, otel gibi iç mekanlarda kullanılır.",
            "Zip perde ise <strong>dış cephe ve cam balkonlarda</strong> kullanılır. Kumaş, profil kanalına zip şeklinde oturarak rüzgara karşı direnç sağlar. Cam balkon, teras, kış bahçesi ve dış cephe gölgeleme için idealdir. İç mekan pencere perdesi olarak tasarlanmamıştır.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Zip Perde"],
            rows: [
              ["Montaj konumu", "İç mekan (pencere içi)", "Dış cephe / cam balkon"],
              ["Rüzgar dayanımı", "Düşük", "Yüksek (zip kanal)"],
              ["Kullanım amacı", "Işık ve gizlilik", "Gölgeleme ve rüzgar koruması"],
              ["Hava koşulları", "İç mekan", "Dış hava (yağmur, rüzgar)"],
              ["Tam karartma", "Mümkün", "Mümkün (screen/blackout)"],
            ],
          },
        },
        {
          h2: "Rüzgar Dayanımı ve Dış Hava",
          paragraphs: [
            "Zip perdenin en büyük avantajı <strong>rüzgar dayanımıdır</strong>. Kumaş kenarları, alüminyum profilin içindeki zip kanalına oturur ve rüzgar ne kadar kuvvetli olursa olsun kumaş kanaldan çıkmaz. Bu özellik, cam balkon ve teras gibi <u>açık hava koşullarına maruz</u> alanlarda zip perdeyi rakipsiz kılar.",
            "Plise perde ise iç mekanda çalışır ve rüzgarla karşılaşmaz. Ancak cam balkonda kullanılacaksa, rüzgar kumaşı hareket ettirebilir ve pile yapısını bozabilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Zip — kumaş kenarları profile sabitlenmiş (zip kanal)",
              "Zip — yüksek rüzgarda kumaş çıkmaz, sallanmaz",
              "Plise — iç mekanda rüzgar sorunu yok",
              "Zip — yağmura dayanıklı kumaş seçeneği mevcut",
              "Plise — dış cephe için tasarlanmamıştır",
              "Zip — cam balkon, teras, kış bahçesi için ideal",
            ],
          },
        },
        {
          h2: "Fiyat Karşılaştırması",
          paragraphs: [
            "Plise perde <strong>iç mekan perdesi olarak daha ekonomiktir</strong>. Zip perde, dış cephe sistemine uygun alüminyum profil ve özel kumaş kullanımı nedeniyle daha maliyetlidir. <em>M² bazında plise 450-3500 TL</em>, zip perde 800-6000 TL aralığında fiyatlanır.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Zip Perde"],
            rows: [
              ["Standart (screen)", "450-1100 TL", "800-2000 TL"],
              ["Karartma", "700-1400 TL", "1200-3000 TL"],
              ["Motorlu", "1800-3500 TL", "2500-6000 TL"],
              ["Dış cephe özel", "—", "2000-5000 TL"],
              ["Montaj", "100-300 TL", "200-500 TL"],
            ],
          },
        },
        {
          h2: "Işık Kontrolü",
          paragraphs: [
            "Plise perde <strong>kademeli ışık kontrolü</strong> sağlar — kumaşı istediğiniz yükseklikte durdurabilir, üstten veya alttan açabilirsiniz.",
            "Zip perde ise genellikle <strong>tam açık veya tam kapalı</strong> çalışır. Kumaş yukarıdan aşağı iner ve toplandığında profil kutusuna girer. Screen kumaş ile güneş ışığını filtreler, blackout kumaş ile tam karartma sağlar.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — kademeli ayar, üstten/alttan bağımsız",
              "Zip — tam açık veya tam kapalı",
              "Plise — daha hassas ışık ayarı",
              "Zip — screen kumaş ile güneş filtreleme",
              "Plise — blackout ile tam karartma",
              "Zip — blackout ile dış cephe tam karartma",
            ],
          },
        },
        {
          h2: "Montaj ve Temizlik",
          paragraphs: [
            "Plise perde montajı <strong>daha basittir</strong> — pencere içine vidalı, yapışkanlı veya kancalı takılır. Zip perde ise dış cepheye monte edilir, profesyonel montaj gerektirir.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — iç mekan montajı, DIY mümkün",
              "Zip — dış cephe montajı, profesyonel gerekir",
              "Plise — nemli bez ile temizlenir",
              "Zip — dış cephe kumaşı, su ile yıkanabilir",
              "Plise — kumaş çıkarılabilir",
              "Zip — kumaş çıkarılması profesyonel gerektirir",
            ],
          },
        },
        {
          h2: "Hangisini Seçmelisiniz?",
          paragraphs: [
            "Plise perde <strong>iç mekan pencere perdesi</strong> olarak idealdir. Zip perde <em>cam balkon, teras ve dış cephe gölgeleme</em> için doğru seçimdir. İkisi farklı ihtiyaçlara yöneliktir — birbirinin alternatifi değil, tamamlayıcısıdır.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise seçin — iç mekan pencere perdesi",
              "Plise seçin — ekonomik fiyat",
              "Plise seçin — kademeli ışık kontrolü",
              "Plise seçin — kolay montaj ve temizlik",
              "Zip seçin — cam balkon gölgeleme",
              "Zip seçin — teras ve kış bahçesi",
              "Zip seçin — rüzgarlı ortamlar için",
              "Zip seçin — dış cephe tam karartma",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi zip perde mi daha iyi?",
          answer: "İhtiyaca göre değişir. İç mekanda pencere perdesi olarak plise perde tercih edin. Cam balkon, teras veya dış cephe gölgeleme için zip perde uygundur. İkisi farklı ihtiyaçlara yöneliktir, birbirinin alternatifi değil tamamlayıcısıdır.",
        },
        {
          question: "Zip perde cam balkon için uygun mu?",
          answer: "Evet, zip perde cam balkon için idealdir. Kumaş kenarları profil kanalına zip şeklinde oturur ve rüzgarda çıkmaz. Cam balkon, teras ve kış bahçesi gibi dış hava koşullarına maruz alanlar için en uygun sistemdir.",
        },
        {
          question: "Hangisi daha ucuz?",
          answer: "Plise perde genelde daha ekonomiktir. M² bazında plise 450-3500 TL, zip perde 800-6000 TL aralığında. Zip perde, dış cephe profil ve özel kumaş nedeniyle daha maliyetlidir.",
        },
        {
          question: "Zip perde rüzgara dayanır mı?",
          answer: "Evet, zip perde yüksek rüzgar dayanımına sahiptir. Kumaş kenarları alüminyum profilin zip kanalına sabitlenmiştir, rüzgar ne kadar kuvvetli olursa olsun kumaş kanaldan çıkmaz. Bu özellik zip perdeyi dış cephe ve cam balkon için rakipsiz kılar.",
        },
        {
          question: "Plise perde dış cepheye takılır mı?",
          answer: "Plise perde iç mekan pencere perdesi olarak tasarlanmıştır. Dış cepheye takılması önerilmez — rüzgar kumaşı hareket ettirip pile yapısını bozabilir. Dış cephe için zip perde veya stor perde daha uygundur.",
        },
      ]}
    />
  );
}
