import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Zip Perde — Karşılaştırma",
  description:
    "Plise perde ile zip perde arasındaki farklar: iç mekan ve dış cephe kullanımı, rüzgar performansı, bütçe, güneş süzme ve takma işlemi. Doğru tercihi öğrenin.",
  slug: "plise-perde-vs-zip-perde",
});

export default function PliseVsZipPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Zip Perde"
      description="Plise perde ile zip perde arasındaki farklar: iç mekan ve dış cephe kullanımı, rüzgar performansı, bütçe, güneş süzme ve takma işlemi."
      slug="plise-perde-vs-zip-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Zip", url: "/plise-perde-vs-zip-perde" }]}
      h1="Plise Perde vs Zip Perde — Hangisi Daha İyi?"
      intro="Plise perde ve zip perde, birbirinden ayrı iki farklı pencere çözümüdür. Plise perde odanın içinde, pencere kasası üzerine takılan bir iç perdedir; zip perde ise cam balkon, teras ve dış cephede görev yapan bir gölgeleme sistemidir. Zip perde, kumaş kenarlarının alüminyum profil içindeki kanala fermuar gibi otmasıyla rüzgara karşı direnç kazanır. Bu yazıda iç mekan ile dış cephe kullanımı, rüzgar performansı, bütçe, güneş süzme kapasitesi ve takma işlemi başlıkları altında iki sistemi karşılaştıracağız."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Zip Perde Karşılaştırması",
        description: "Plise perde ve zip perde karşılaştırması — kullanım alanı, rüzgar dayanımı, bütçe, güneş süzme, takma.",
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
          h2: "İç Mekan Pencere Perdesi ile Dış Cephe Gölgeleme Sistemi",
          paragraphs: [
            "Plise perde, <strong>odanın iç tarafında</strong> pencere kasasına monte edilir ve yalnızca iç mekanda çalışır. Ev, ofis ve otel gibi kapalı alanlarda ışık ve gizlilik için tasarlanmıştır.",
            "Zip perde ise <strong>dış cephede ve cam balkonda</strong> görev yapar. Kumaş kenarları profil kanalına fermuar biçiminde oturduğundan rüzgara karşı direnç kazanır. Teras, kış bahçesi ve dış cephe gölgelemesi için uygundur; iç mekan pencere perdesi olarak üretilmemiştir.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Zip Perde"],
            rows: [
              ["Montaj konumu", "Oda içi (pencere kasası)", "Dış cephe / cam balkon"],
              ["Rüzgarla karşılaşma", "Yok (iç mekanda)", "Var (dış hava)"],
              ["Asıl işlev", "Işık ve gizlilik", "Gölgeleme ve rüzgar koruması"],
              ["Hava koşulları", "Kapalı alan", "Açık hava (yağmur, rüzgar)"],
              ["Karartma imkanı", "Blackout kumaşla", "Screen/blackout kumaşla"],
            ],
          },
        },
        {
          h2: "Esnek Kumaş mı Sıkı Zip Kanalı mı: Rüzgar Performansı",
          paragraphs: [
            "Zip perdenin belirleyici avantajı <strong>rüzgara karşı duruşudur</strong>. Kumaş kenarları alüminyum profilin içindeki kanala sabitlendiği için rüzgar ne kadar şiddetliyse şiddetli olsun kumaş kanaldan sıçramaz. Bu özellik, <u>açık havaya maruz</u> cam balkon ve teraslarda sistemi rakipsiz kılar.",
            "Plise perde ise iç mekanda çalıştığı için rüzgarla karşılaşmaz. Yine de cam balkonda kullanılmak istenirse, hava akımı pileli kumaşı savurabilir ve kat yapısını bozabilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Zip — kumaş kenarı profile fermuarlı sabitlenmiştir",
              "Zip — kuvvetli rüzgarda kumaş yerinden çıkmaz",
              "Plise — iç mekanda rüzgar sorunu yaşanmaz",
              "Zip — yağmura dayanıklı kumaş seçeneği bulunur",
              "Plise — dış cephe için tasarlanmamıştır",
              "Zip — cam balkon, teras ve kış bahçesi için ideal",
            ],
          },
        },
        {
          h2: "Metrekare Bazında Bütçe Karşılaştırması",
          paragraphs: [
            "Plise perde, <strong>iç mekan perdesi</strong> olarak daha ekonomiktir. Zip perde, dış cepheye uygun alüminyum profil ve özel kumaş kullanımı nedeniyle maliyeti yukarı taşır. <em>Metrekare bazında</em> plise 450-3500 TL, zip perde 800-6000 TL aralığında fiyatlanır.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Zip Perde"],
            rows: [
              ["Screen standart", "450-1100 TL", "800-2000 TL"],
              ["Blackout karartma", "700-1400 TL", "1200-3000 TL"],
              ["Motorlu sistem", "1800-3500 TL", "2500-6000 TL"],
              ["Dış cephe özel", "—", "2000-5000 TL"],
              ["Montaj ücreti", "100-300 TL", "200-500 TL"],
            ],
          },
        },
        {
          h2: "Güneş Süzme ve Karartma Kapasitesi",
          paragraphs: [
            "Plise perde, kumaşı <strong>her seviyede sabitleyerek</strong> kademeli gölge sunar; üst ya da alt kenardan bağımsız açılım mümkündür.",
            "Zip perde ise çoğunlukla <strong>tam açık ya da tam kapalı</strong> çalışır. Kumaş yukarıdan aşağı iner ve toplandığında profil kutusuna girer. Screen kumaşla güneşi filtreler, blackout kumaşla dış cephede tam karartma sağlar.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — her seviyede sabitleme, üst/alt bağımsız",
              "Zip — tam açık veya tam kapalı konum",
              "Plise — daha ince gölge ayarı",
              "Zip — screen kumaşla güneş filtreleme",
              "Plise — blackout kumaşla iç karartma",
              "Zip — blackout kumaşla dış cephe karartma",
            ],
          },
        },
        {
          h2: "Takma İşlemi ve Dış Cephe Bakımı",
          paragraphs: [
            "Plise perde takılması <strong>daha yalındır</strong>; pencere içine vidalı, yapışkanlı veya kancalı olarak takılabilir. Zip perde ise dış cepheye monte edildiği için profesyonel montaj ister.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — iç mekan montajı, kendiniz takabilirsiniz",
              "Zip — dış cephe montajı, uzman gerektirir",
              "Plise — nemli bezle silinir",
              "Zip — dış cephe kumaşı suyla yıkanabilir",
              "Plise — kumaş kolayca çıkarılır",
              "Zip — kumaş sökümü uzmanlık ister",
            ],
          },
        },
        {
          h2: "İhtiyacınıza Göre Yönlendirme",
          paragraphs: [
            "Plise perde, <strong>iç mekan pencere perdesi</strong> olarak doğru tercihtir. Zip perde ise <em>cam balkon, teras ve dış cephe gölgelemesi</em> için uygun çözümdür. İkisi ayrı ihtiyaçlara yanıt verir; birbirinin alternatifi değil, tamamlayıcısıdır.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — iç mekan pencere perdesi",
              "Plise — ekonomik bütçe",
              "Plise — kademeli gölge ayarı",
              "Plise — kolay takma ve bakım",
              "Zip — cam balkon gölgelemesi",
              "Zip — teras ve kış bahçesi",
              "Zip — rüzgarlı ortamlar",
              "Zip — dış cephe tam karartma",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi zip perde mi seçilmeli?",
          answer: "İç mekanda pencere perdesi olarak plise perde seçilmelidir. Cam balkon, teras veya dış cephe gölgelemesi için zip perde uygundur. İkisi ayrı ihtiyaçlara yanıt verir, birbirinin alternatifi değil tamamlayıcısıdır.",
        },
        {
          question: "Cam balkon için zip perde uygun bir tercih mi?",
          answer: "Uygundur; hatta idealdir. Kumaş kenarları profil kanalına fermuar biçiminde oturduğundan rüzgarda çıkmaz. Cam balkon, teras ve kış bahçesi gibi açık havaya maruz alanlar için en uygun sistemdir.",
        },
        {
          question: "Bütçe açısından hangisi daha avantajlı?",
          answer: "Plise perde daha avantajlıdır; metrekarede 450-3500 TL bandında fiyatlanır. Zip perde dış cephe profil ve özel kumaş nedeniyle 800-6000 TL seviyesindedir.",
        },
        {
          question: "Zip perde şiddetli rüzgara dayanabilir mi?",
          answer: "Dayanabilir. Kumaş kenarları alüminyum profilin zip kanalına sabitlendiği için rüzgar ne kadar kuvvetli olursa olsun kumaş kanaldan çıkmaz. Bu özellik zip perdeyi dış cephe ve cam balkon için rakipsiz kılar.",
        },
        {
          question: "Plise perde dış cepheye takılabilir mi?",
          answer: "Takılması önerilmez. Plise perde iç mekan pencere perdesi olarak tasarlanmıştır; dış cephede rüzgar pileli kumaşı savurup kat yapısını bozabilir. Dış cephe için zip perde veya stor perde daha uygundur.",
        },
      ]}
    />
  );
}
