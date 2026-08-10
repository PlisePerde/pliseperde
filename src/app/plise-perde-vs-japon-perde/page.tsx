import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Japon Perde — Karşılaştırma",
  description:
    "Plise perde vs japon perde karşılaştırması. Panjur, stor, ışık kontrolü, estetik, fiyat, montaj, temizlik. Hangisi sizin için uygun?",
  slug: "plise-perde-vs-japon-perde",
});

export default function PliseVsJaponPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Japon Perde"
      description="Plise perde ile japon perde (panjur) arasındaki farklar: mekanizma yapısı, ışık geçirgenliği, görsel etki, bütçe ve montaj süreci."
      slug="plise-perde-vs-japon-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar/" }, { name: "Plise vs Japon", url: "/plise-perde-vs-japon-perde/" }]}
      h1="Plise Perde vs Japon Perde — Sistem Karşılaştırması"
      intro="Plise perde, kumaşı <strong>akordion kıvrımlarla</strong> katlayarak yukarı ve aşağı hareket ettirir. Japon perde (panjur) ise düz bir kumaş panelini bir profil kutusu içinde toplayarak çalışır; pile yapısı yoktur. <em>İç mekanda</em> esnek ışık yönetimi için plise, <u>dış cephe gölgeleme</u> ve tam karartmada ise japon perde sıkça tercih edilir. Bu sayfada iki sistemi altı başlık altında ele alıyoruz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Japon Perde Karşılaştırması",
        description: "Plise perde ve japon perde karşılaştırması — ışık kontrolü, estetik, fiyat, montaj.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-japon-perde.webp"
          alt="Plise Perde vs Japon Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Akordion Kıvrım mı Düz Panel mi?",
          paragraphs: [
            "Plise perdede kumaş, <strong>aralıklı kıvrımlarla</strong> katlanır ve ip mekanizması sayesinde istenen yükseklikte sabit kalır. Hem üst profilden hem alt profilden bağımsız biçimde hareket eder.",
            "Japon perde ise kumaşı <em>düz bir panel</em> olarak aşağı salar ve yukarı çektiğinizde profil kutusunun içine gizler. Kıvrım yapmaz; bu yüzden ara konumlarda bile düz bir yüzey görünür. Hareket yönü yalnızca yukarı-aşağıdır; üstten aşağı açılamaz.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Japon Perde"],
            rows: [
              ["Kumaş formu", "Akordion kıvrımlı", "Düz, kıvrımsız panel"],
              ["Hareket yönü", "Üst + alt bağımsız", "Yalnızca yukarı-aşağı"],
              ["Toplanmış hal", "Pile yığını görünür", "Profil kutusunda gizli"],
              ["Işık ayar yöntemi", "Kademeli konumlandırma", "Tam açık / tam kapalı"],
              ["Karartma", "Blackout kumaşla", "Blackout kumaşla"],
              ["Montaj konumu", "İç mekan odaklı", "İç veya dış cephe"],
            ],
          },
        },
        {
          h2: "Işık Geçirgenliği ve Konum Esnekliği",
          paragraphs: [
            "Plise perde, <strong>üst ve alt profilleri ayrı ayrı</strong> hareket ettirdiği için pencerenin üst kısmını açık bırakıp alt kısmını kapalı tutabilir. Bu, gündüz ışığı alırken mahremiyeti korumanın en pratik yollarından biridir.",
            "Japon perde ise <em>kademeli ayar konusunda</em> daha kısıtlıdır. Kumaşı yarıya kadar indirmek mümkündür ancak pile yapısı olmadığı için ışık geçirgenliği ya tamdır ya kesiktir. Üstten açık-alttan kapalı gibi bağımsız konumlandırma yapamazsınız.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — üstten ışık, alttan gizlilik eş zamanlı",
              "Japon — tek yönlü hareket, ara konum sınırlı",
              "Plise — kademeli yükseklikle hassas ışık ayarı",
              "Japon — düz panel, pile kıvrımı yok",
              "Plise — ara konumlarda dekoratif kıvrım görünümü",
              "Japon — ara konumda bile düz, kesintisiz yüzey",
            ],
          },
        },
        {
          h2: "Görsel Etki ve Mekan Uyumu",
          paragraphs: [
            "Plise perde, <strong>katlı dokusuyla</strong> pencereye yumuşak bir derinlik katar. Toplanmış halde bile kıvrımlar görünür; bu, sıcak ve dokulu bir iç mekan arayanlar için tercih sebebidir.",
            "Japon perde ise <em>temiz ve kesintisiz</em> bir yüzey sunar. Kumaş tamamen düz iner, toplandığında profil kutusunda kaybolur ve pencere boş görünür. Minimalist ve modern çizgili mekanlarla uyumu güçlüdür.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — kıvrımlı doku, sıcak ve katmanlı görünüm",
              "Japon — düz panel, sade ve minimalist hat",
              "Plise — toplanmış halde pile yığını dekoratif",
              "Japon — toplandığında kutuda gizlenir, pencere boş kalır",
              "Plise — klasik ve rustik mekanlarla uyumlu",
              "Japon — çağdaş, az detaylı iç mekanlarda öne çıkar",
            ],
          },
        },
        {
          h2: "Bütçe ve Metre Kare Maliyet",
          paragraphs: [
            "İki sistemin fiyat aralığı <strong>birbirine yakın</strong> çıkar. Japon perde düz kumaş kullandığı için kumaş maliyeti düşüktür; ancak profil kutusu ve mekanizma daha kompleks olduğu için montaj gideri bir miktar yüksektir. Plise perdede ise pile kumaş üretimi işçilik gerektirir ama mekanizma daha sadedir.",
            "Metre kare bazında plise perde <em>450-3500 TL</em>, japon perde 400-3000 TL aralığında fiyatlanır. Motorlu modeller her iki kategoride de üst bandı yukarı çeker.",
          ],
          table: {
            headers: ["Segment", "Plise Perde", "Japon Perde"],
            rows: [
              ["Standart (tül)", "450-1100 TL", "400-900 TL"],
              ["Karartma", "700-1400 TL", "600-1200 TL"],
              ["Premium", "1200-3500 TL", "1000-3000 TL"],
              ["Motorlu", "1800-3500 TL", "1500-3500 TL"],
              ["Montaj ücreti", "100-300 TL", "150-350 TL"],
            ],
          },
        },
        {
          h2: "Takılma ve Temizlik Süreci",
          paragraphs: [
            "Plise perde <strong>pencere sövesine</strong> vidalı, yapışkanlı veya kancalı biçimde takılır; bu nedenle bireysel montaj (DIY) çoğu durumda mümkündür. Japon perde ise profil kutusu ve dış cephe seçenekleri nedeniyle genellikle profesyonel montaj gerektirir.",
            "Temizlik tarafında japon perde avantajlıdır: <em>düz kumaş yüzeyi</em> nemli bezle tek geçişte silinir. Plise perdede ise kıvrım aralarında toz birikebilir; kumaş çıkarılsa bile pile yapısı dikkatli temizlik ister.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — pencere içi montaj, bireysel takım mümkün",
              "Japon — pencere üstü veya dış montaj, profesyonel önerilir",
              "Plise — kıvrım araları toz tutar, düzenli bakım gerekir",
              "Japon — düz yüzey, nemli bezle hızlı temizlik",
              "Plise — kumaş yerinden çıkarılabilir",
              "Japon — kumaş çıkarma daha fazla işçilik ister",
            ],
          },
        },
        {
          h2: "Son Kararınızı Verirken",
          paragraphs: [
            "Esnek ışık yönetimi, <strong>üstten-alttan bağımsız açılım</strong> ve pile dokusunun yarattığı sıcak görünüm sizin için önemliyse plise perde doğru seçim. <em>Düz, kesintisiz yüzey</em>, minimalist çizgi ve toplandığında pencerenin tamamen boş kalması tercih ediliyorsa japon perde daha uygun.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — üstten ışık alıp alttan gizli kalmak isteyenler için",
              "Plise — kıvrımlı, sıcak ve dokulu görünüm arayanlar için",
              "Plise — bireysel montajla takmak isteyenler için",
              "Plise — her oda tipine uyum esnekliği",
              "Japon — düz, sade ve minimalist estetik isteyenler için",
              "Japon — toplandığında kumaşın tamamen gizlenmesi",
              "Japon — dış cephe gölgeleme ihtiyacı olanlar için",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Japon perde ile plise perde arasındaki temel mekanizma farkı nedir?",
          answer: "Plise perde kumaşı akordion kıvrımlarla katlayarak üst ve alt profiller arasında hareket ettirir; çift yönlü açılır. Japon perde ise düz kumaş panelini bir profil kutusu içinde toplayarak çalışır; yalnızca yukarı-aşağı hareket eder ve kıvrım yapmaz.",
        },
        {
          question: "Japon perde (panjur) nedir ve nasıl çalışır?",
          answer: "Japon perde, düz bir kumaş panelini profil kutusu içinde toplayan bir gölgeleme sistemidir. Kumaş pile yapmaz; aşağı indirildiğinde düz bir yüzey olarak yayılır, yukarı çekildiğinde kutuda gizlenir. Modern ve minimalist mekanlarda sıkça tercih edilir.",
        },
        {
          question: "Bütçe açısından hangi sistem daha avantajlı?",
          answer: "Fiyat aralıkları birbirine yakındır. Plise perde 450-3500 TL/m², japon perde 400-3000 TL/m² bandındadır. Japon perde düz kumaşla daha ekonomik başlasa da montaj daha kompleks olduğu için takılma gideri bir miktar yüksektir.",
        },
        {
          question: "Işık kontrolü hangi sistemde daha esnek?",
          answer: "Plise perde daha esnektir. Üst ve alt profilleri ayrı ayrı hareket ettirerek üstten ışık alıp alttan gizlilik sağlayabilirsiniz. Japon perde ise tek yönlü çalışır ve kademeli ışık ayarı daha sınırlıdır; genellikle tam açık veya tam kapalı kullanılır.",
        },
        {
          question: "Temizlik ve bakım hangisinde daha pratik?",
          answer: "Japon perde daha pratiktir. Düz kumaş yüzeyi nemli bezle tek geçişte silinir. Plise perdede kıvrım aralarında toz birikebilir ve daha dikkatli, düzenli temizlik gerekir; kumaş çıkarılsa bile pile yapısı özen ister.",
        },
      ]}
    />
  );
}
