import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Stor Perde — Karşılaştırma",
  description:
    "Plise perde vs stor perde karşılaştırması. Fiyat, ışık kontrolü, montaj, temizlik, dayanıklılık. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-stor-perde",
});

export default function PliseVsStorPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Stor Perde"
      description="Plise perde ve stor perde arasındaki farklar: mekanizma, fiyat, ışık yönetimi, yer kaplama ve kullanım alanları."
      slug="plise-perde-vs-stor-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Stor", url: "/plise-perde-vs-stor-perde" }]}
      h1="Plise Perde vs Stor Perde — Aradaki Farklar"
      intro="Plise perde ile stor perde, evlerde ve iş yerlerinde en çok tercih edilen iki pencere çözümüdür. Birincisi kumaşı akordion gibi katlayarak çalışır, ikincisi ise kumaşı bir silindirin etrafına sararak toplar. <strong>Mekanizma yapısı</strong>, <em>yer kaplama miktarı</em> ve <u>ışık yönetimi</u> açısından belirgin ayrılıklar gösterirler. Aşağıda bu iki sistemi beş farklı başlık altında ele alıyor, avantaj ve dezavantajlarını net biçimde ortaya koyuyoruz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Stor Perde Karşılaştırması",
        description: "Plise perde ve stor perde karşılaştırması — fiyat, ışık, montaj, temizlik.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-stor-perde.webp"
          alt="Plise Perde vs Stor Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Pile Mekanizması mı Silindir Tüp mü?",
          paragraphs: [
            "Plise perdede kumaş, <strong>akordion mantığıyla</strong> üst ve alt profiller arasında katlanarak ilerler. Bu sayede perdeyi yukarı çektiğinizde kumaş tükenmez; katlanarak daralır ve pencerenin üst kısmında küçük bir yığın oluşturur.",
            "Stor perdede ise kumaş, <em>alüminyum bir silindirin</em> etrafına sarılır. Yukarı çektiğinizde kumaş tamamen tüpün içine girer ve pencere önünde yalnızca bir rulo görünür. Aşağı indirdiğinizde düz bir panel olarak yayılır.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Stor Perde"],
            rows: [
              ["Hareket tarzı", "Katlanarak ilerler", "Sarılıp çözülür"],
              ["Toplanma biçimi", "Pile yığın oluşturur", "Tüp içine çekilir"],
              ["Çift yönlü açılım", "Var (üst + alt)", "Yok (yalnızca yukarı)"],
              ["Kumaş tipi", "Hafif pile kumaş", "Düz, sertleştirilmiş kumaş"],
              ["Tam karartma seçeneği", "Blackout kumaşla mümkün", "Blackout kumaşla mümkün"],
            ],
          },
        },
        {
          h2: "Metre Kare Fiyat Aralıkları",
          paragraphs: [
            "Her iki sistemin de fiyatı kumaş kalitesine, mekanizma türüne ve motor seçeneğine göre değişir. Stor perdede silindir mekanizması ekstra maliyet getirirken, plise perdede pile kumaşın üretimi bir miktar daha yoğun işçilik gerektirir. <strong>Neticede fiyat aralıkları birbirine yakın</strong> çıkar.",
          ],
          table: {
            headers: ["Kategori", "Plise Perde", "Stor Perde"],
            rows: [
              ["Tül / standart", "450-900 TL/m²", "500-1000 TL/m²"],
              ["Karartma (blackout)", "700-1400 TL/m²", "800-1500 TL/m²"],
              ["Motorlu model", "1800-3500 TL/m²", "2000-3800 TL/m²"],
              ["Montaj ücreti", "100-300 TL", "150-300 TL"],
            ],
          },
        },
        {
          h2: "Gündüz Işığı ve Mahremiyet Dengesi",
          paragraphs: [
            "Plise perdenin en belirgin avantajı, <strong>üstten ve alttan ayrı ayrı</strong> açılabilmesidir. Pencerenin üst kısmını açık bırakıp alt kısmını kapalı tutarak dışarıdan bakışları engellerken doğal ışığı içeri alabilirsiniz.",
            "Stor perde ise yalnızca <em>aşağıdan yukarıya</em> doğru toplanır. Bu nedenle ışık-mahremiyet dengesini kurmak daha kısıtlıdır: ya perde tamamen açıktır ya da istediğiniz yüksekliğe kadar indirilmiştir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — üstten ışık, alttan gizlilik aynı anda",
              "Stor — tek yönlü toplama, ara konum daha sınırlı",
              "Plise — kademeli yükseklik ayarıyla hassas ışık yönetimi",
              "Stor — tam açık veya tam kapalı kullanım daha pratik",
              "Plise — ara konumlarda pile dokusu dekoratif görünüm verir",
            ],
          },
        },
        {
          h2: "Pencere Önünde Kapladığı Alan",
          paragraphs: [
            "Toplandığında plise perde yalnızca <strong>2-3 cm</strong> kalınlığa ulaşır; pile yığını pencere üstünde ince bir şerit gibi durur. Stor perde ise silindir tüp nedeniyle <em>5-8 cm</em> arası bir derinlik kaplar.",
            "Dar pencere sövelerinde veya camın hemen önüne eşya konulan odalarda bu fark önem taşır. Plise perde, kompakt yapısıyla <u>küçük alanlarda</u> daha verimli kullanım sunar.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — toplandığında 2-3 cm derinlik",
              "Stor — silindir tüp ile 5-8 cm derinlik",
              "Plise — dar sövelerde ve küçük pencerelerde avantajlı",
              "Stor — geniş pencerelerde derinlik farkı daha az hissedilir",
              "Plise — pile dokusu toplanmış halde de dekoratif",
              "Stor — düz kumaş ile modern, sade bir hat",
            ],
          },
        },
        {
          h2: "Karar Rehberi",
          paragraphs: [
            "Eğer <strong>çift yönlü açılım</strong>, <em>az yer kaplama</em> ve pile dokusunun yarattığı sıcak görünüm sizin için önemliyse plise perde doğru seçimdir. Tamamen <u>düz kumaş</u> ve tek hareketle açılıp kapanan pratik bir sistem istiyorsanız stor perde daha uygun olur.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — üstten ışık alıp alttan gizli kalmak isteyenler için",
              "Plise — pencere önünde yer tasarrufu arayanlar için",
              "Plise — pile katlı, yumuşak doku sevenler için",
              "Stor — tek hareketle tam açılma/kapanma tercih edenler için",
              "Stor — düz, sert kumaş yüzeyi ve modern çizgi isteyenler için",
              "Stor — geniş cam yüzeylerde kullanışlı",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi stor perde mi daha avantajlı?",
          answer: "Çift yönlü açılım, yer tasarrufu ve pile dokusunun estetiği sizin için öncelikliyse plise perde avantajlıdır. Düz kumaş ve tek hareketle açılıp kapanan pratik bir sistem arıyorsanız stor perde daha uygun olur.",
        },
        {
          question: "Stor perde neden daha çok yer kaplar?",
          answer: "Stor perde, kumaşı sarmak için bir alüminyum silindir tüp kullanır. Bu tüp pencere önünde 5-8 cm derinlik oluşturur. Plise perde ise kumaşı katlayarak toplandığında yalnızca 2-3 cm yer kaplar.",
        },
        {
          question: "Plise perdeyi alttan yukarı doğru açmak mümkün mü?",
          answer: "Evet. Plise perde üst ve alt profilleri bağımsız hareket ettiği için alttan yukarıya, üstten aşağıya veya her iki yönden aynı anda açılabilir. Bu özellik ışık ve mahremiyet dengesini esnek biçimde kurmanızı sağlar.",
        },
        {
          question: "İki sistem arasında belirgin bir fiyat farkı var mı?",
          answer: "Fiyat aralıkları birbirine yakındır. Plise perde 450-3500 TL/m², stor perde 500-3800 TL/m² arasında değişir. Stor perdede silindir mekanizması bir miktar ek maliyet getirir ancak kumaş kalitesine göre fark daralır.",
        },
        {
          question: "Hangi sistem dar pencereler için daha uygun?",
          answer: "Dar pencerelerde plise perde daha uygundur. Toplandığında yalnızca 2-3 cm yer kaplar ve pile yığını söve içinde neredeyse görünmez. Stor perdenin silindir tüpü dar sövelerde daha belirgin bir derinlik oluşturur.",
        },
      ]}
    />
  );
}
