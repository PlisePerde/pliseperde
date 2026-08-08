import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Zebra Perde — Karşılaştırma",
  description:
    "Plise perde ile zebra perde arasındaki farklar: kumaş katmanı, maliyet unsurları, gündüz ışığı yönetimi, kurulum ve temizlik. Doğru tercihi öğrenin.",
  slug: "plise-perde-vs-zebra-perde",
});

export default function PliseVsZebraPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Zebra Perde"
      description="Plise perde ile zebra perde arasındaki farklar: kumaş katmanı, maliyet unsurları, gündüz ışığı yönetimi, kurulum ve temizlik."
      slug="plise-perde-vs-zebra-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Zebra", url: "/plise-perde-vs-zebra-perde" }]}
      h1="Plise Perde vs Zebra Perde — Hangisi Daha İyi?"
      intro="Plise perde ve zebra perde, çağdaş pencere çözümlerinin öne çıkan iki ismidir. Her ikisi de pileli bir kumaşa dayansa da işleyiş biçimleri ayrışır: plise perde tek katmanlı kumaşı dikey yönde katlayarak toplanırken, zebra perde çift katmanlı şeritli kumaşı birbirinin üstünde kaydırarak açık-kapalı geçiş sağlar. Bu yazıda kumaş katmanı, maliyet unsurları, gündüz ışığı yönetimi, kurulum ve temizlik ile karar kriterlerini masaya yatıracağız."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Zebra Perde Karşılaştırması",
        description: "Plise perde ve zebra perde karşılaştırması — kumaş katmanı, maliyet, ışık, kurulum, temizlik.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-zebra-perde.webp"
          alt="Plise Perde vs Zebra Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Tek Katlı Pile ile Çift Katlı Şerit Arasındaki Fark",
          paragraphs: [
            "Plise perde, <strong>tek bir kumaş katmanını</strong> ip mekanizmasıyla dikey yönde hareket ettirir. Kumaş, aralıklı pilelerle katlanarak toplanır ve <em>üst ya da alt kenardan</em> bağımsız biçimde açılabilir.",
            "Zebra perde ise <strong>iki kumaş katmanını</strong> üst üste kaydırır. Şeritli düzende açık ve kapalı bantlar sıralanır; katmanlar kaydırıldığında bu bantlar hizalanarak gölge veya ışık geçişi sağlanır. <u>Yalnızca yukarı-aşağı</u> çalışır, üstten ayrı açılamaz.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Zebra Perde"],
            rows: [
              ["Kumaş adedi", "Tek katman", "Çift katman"],
              ["Açılım yönü", "Üst ve alt bağımsız", "Yalnızca dikey"],
              ["Gölge biçimi", "Kademeli katlanma", "Şerit hizalama"],
              ["Katman hareketi", "Katlanır", "Kayar"],
              ["Karartma netliği", "Sızıntısız", "Şerit arası boşluk"],
            ],
          },
        },
        {
          h2: "Maliyet Unsurları ve Metrekare Fiyat Eğilimleri",
          paragraphs: [
            "Plise perde, <strong>tek katmanlı kumaş</strong> ve daha yalın mekanizma nedeniyle genellikle daha ekonomiktir. Zebra perde, çift katmanlı kumaş ve daha karmaşık tambur sistemi nedeniyle maliyeti yukarı çeker.",
            "<em>Metrekare bazında</em> plise 450-3500 TL, zebra ise 600-4000 TL arasında fiyatlanır.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Zebra Perde"],
            rows: [
              ["Tül/güneşlik standart", "450-1100 TL", "600-1300 TL"],
              ["Blackout karartma", "700-1400 TL", "900-1800 TL"],
              ["Motorlu sistem", "1800-3500 TL", "2200-4000 TL"],
              ["Montaj ücreti", "100-300 TL", "150-350 TL"],
            ],
          },
        },
        {
          h2: "Gündüz Işığını Yönetme Biçimi",
          paragraphs: [
            "Plise perde, kumaşı <strong>her seviyede sabitleyerek</strong> gölgeyi kademeli ayarlamanıza izin verir. <em>Üst bandı açık bırakıp altı kapamak</em> veya tam tersini yapmak mümkündür.",
            "Zebra perde, <strong>açık ve kapalı şeritlerin</strong> kaydırılmasıyla gölge oluşturur. <u>Tam karartma konumunda</u> bile şerit aralarından ince bir ışık sızıntısı kalabilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — her yükseklikte sabitleme imkanı",
              "Zebra — şerit hizalama ile açık-kapalı geçiş",
              "Plise — blackout kumaşta sıfır sızıntı",
              "Zebra — şerit arası ışık kaçışı olabilir",
              "Plise — daha ince ayar hassasiyeti",
            ],
          },
        },
        {
          h2: "Kurulum Aşaması ve Kumaş Temizliği",
          paragraphs: [
            "Kurulum tarafında <strong>her iki sistem de benzer</strong> montaj seçenekleri sunar: vidalı, yapışkanlı ve kancalı takım. Temizlik tarafında ise plise perde öne çıkar.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — tek katman kumaş nemli bezle silinir",
              "Zebra — çift katman ve şerit araları temizliği zorlaştırır",
              "Plise — kumaş kolayca çıkarılıp yıkanabilir",
              "Zebra — kumaş sökümü daha uğraştırır",
              "Plise — toz tutma eğilimi daha düşüktür",
            ],
          },
        },
        {
          h2: "Karar Verirken Göz Önünde Bulundurulacak Kriterler",
          paragraphs: [
            "Esnek gölge ayarı, sıfır sızıntılı karartma ve ekonomik fiyat öncelikliyse <strong>plise perde</strong> doğru seçimdir. Şeritli modern görünüm ve dekoratif öncelik ağ basıyorsa <em>zebra perde</em> tercih edilmelidir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — esnek gölge ve ekonomik bütçe",
              "Plise — sızıntısız tam karartma",
              "Plise — üst ve alttan bağımsız açılım",
              "Zebra — şeritli çağdaş görünüm",
              "Zebra — dekoratif öncelik",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi zebra perde mi daha avantajlı?",
          answer: "Esnek gölge ayarı, sızıntısız karartma ve ekonomik fiyat önemliyse plise perde avantajlıdır. Şeritli çağdaş görünüm ve dekoratif öncelik ağ basıyorsa zebra perde uygun olur.",
        },
        {
          question: "Fiyat olarak plise mi zebra mı daha uygun?",
          answer: "Plise perde genellikle daha uygundur; metrekarede 450-3500 TL bandında fiyatlanır. Zebra perde çift katmanlı kumaş ve tambur sistemi nedeniyle 600-4000 TL seviyesindedir.",
        },
        {
          question: "Gölge ayarı hangisinde daha hassastır?",
          answer: "Plise perde daha hassastır; kumaşı her seviyede sabitleyip üst veya alttan bağımsız açabilirsiniz. Zebra perde şeritli yapıda olduğu için kademeli ayar daha sınırlıdır.",
        },
        {
          question: "Temizliği daha kolay olan hangisidir?",
          answer: "Plise perde daha kolay temizlenir; tek katman kumaş nemli bezle silinir. Zebra perdede çift katman ve şerit araları temizliği zorlaştırır.",
        },
        {
          question: "Tam karartma gerekiyorsa hangi seçenek seçilmeli?",
          answer: "Plise perde seçilmelidir; blackout kumaşı ışığın %99'unu keser ve sızıntı bırakmaz. Zebra perdede şerit aralarından ışık kaçışı olabilir.",
        },
      ]}
    />
  );
}
