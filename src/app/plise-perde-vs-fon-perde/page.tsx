import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Fon Perde — Karşılaştırma",
  description:
    "Plise perde ve fon perde farkları: hareket mekanizması, aydınlatma, mahremiyet, dekoratif etki, maliyet, kurulum ve bakım. Detaylı analiz.",
  slug: "plise-perde-vs-fon-perde",
});

export default function PliseVsFonPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Fon Perde"
      description="Plise perde ve fon perde arasındaki temel farklar: mekanizma, aydınlatma, mahremiyet, dekoratif etki, maliyet, kurulum ve bakım."
      slug="plise-perde-vs-fon-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar/" }, { name: "Plise vs Fon", url: "/plise-perde-vs-fon-perde/" }]}
      h1="Plise Perde vs Fon Perde — Hangisi Daha İyi?"
      intro="Plise perde ile fon perde, evlerde en sık karşılaşılan iki pencere giydirme seçeneğidir; ancak birbirinden tamamen ayrı iki felsefeyle üretilirler. Fon perde, ince tül dokusuyla pencere önünde süzülen yumuşak bir ışık perdesi oluşturur ve klasik dekorasyon anlayışının temel taşıdır. Plise perde ise alüminyum profil içinde pile katlanan kumaş yapısıyla hem pencere içine monte edilir hem de tül, güneşlik ve blackout seçenekleriyle tek üründe birden fazla ihtiyacı karşılar. Bu yazıda iki sistemi hareket tarzı, doğal aydınlatma, mahremiyet, dekoratif etki, bütçe, kurulum ve bakım başlıkları altında ele alacağız."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Fon Perde Karşılaştırması",
        description: "Plise perde ve fon perde karşılaştırması — mekanizma, aydınlatma, mahremiyet, dekoratif etki, maliyet, kurulum ve bakım.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-fon-perde.webp"
          alt="Plise Perde vs Fon Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Mekanik Yapı ve Hareket Tarzı",
          paragraphs: [
            "Plise perde, <strong>akordiyon mantığıyla katlanan</strong> kumaşı bir ip mekanizması yardımıyla dikey eksende hareket ettirir. Kumaş yukarı toplanır, aşağı indirilir ve istenilen noktada sabitlenir; üst ve alt kenarlar birbirinden bağımsız konumlanabilir. Sistem doğrudan pencere kasası içine yerleştirilir.",
            "Fon perde ise <strong>korniş ya da ray üzerine asılı duran</strong> düz bir tül panodur. Kumaş pile yapmaz, açılıp kapanması yatay kaydırma ya da elle toplama yoluyla gerçekleşir. Hareket kabiliyeti sınırlıdır; pencere ile perde arasında her zaman bir boşluk kalır.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Fon Perde"],
            rows: [
              ["Montaj alanı", "Pencere kasası içi", "Korniş veya ray (pencere üstü)"],
              ["Hareket ekseni", "Dikey (yukarı-aşağı)", "Yatay (yana kaydırma)"],
              ["Kumaş seçeneği", "Tül, güneşlik, yarı karartma, blackout", "Yalnızca ince tül"],
              ["Karartma kapasitesi", "Blackout ile tam karanlık", "Karartma yapamaz"],
              ["Kumanda biçimi", "İp mekanizması", "Ray veya korniş üzerinde elle"],
              ["Pencere ile temas", "Tam oturur, boşluk yok", "Arada boşluk bulunur"],
            ],
          },
        },
        {
          h2: "Doğal Aydınlatma ile Mahremiyet Dengesi",
          paragraphs: [
            "Fon perde, <strong>gündüz saatlerinde en yüksek ışık geçişini</strong> sağlar; ince tül dokusu güneş ışığının yaklaşık %80 ila %95'ini içeri alır ve mekanı aydınlık gösterir. Ancak akşam saatlerinde içeride ışık yandığında dışarıdan içerinin görünmesi riski doğar.",
            "Plise perde, tül kumaş seçildiğinde fon perdeye yakın bir aydınlatma sunar; fakat <em>güneşlik, yarı karartma ve blackout</em> alternatifleriyle tek üründe farklı seviyeler elde etmenize imkan tanır. Pencere içine tam oturduğu için <u>kenarlardan ışık sızıntısı olmaz</u>, gece blackout konumunda dışarıdan hiçbir görünüş mümkün değildir.",
          ],
          list: {
            type: "ul",
            items: [
              "Fon — gündüz maksimum ferahlık, yüksek ışık geçişi",
              "Plise — tül, güneşlik ve blackout ile çoklu seviye",
              "Fon — akşam iç görünüş riski taşır",
              "Plise — blackout ile gece tam mahremiyet",
              "Fon — korniş ile pencere arasında ışık boşluğu",
              "Plise — kasaya oturduğu için kenar sızıntısı yok",
            ],
          },
        },
        {
          h2: "Mekan Uyumu ve Tarz Yansıması",
          paragraphs: [
            "Fon perde, <strong>geleneksel ve klasik</strong> iç mekan düzenlemelerine kolayca entegre olur. Tülün pencereler önünde dalgalanması, sıcak ve tanıdık bir atmosfer kurar; korniş veya ray görünür olduğu için dekorasyonun bir parçası olarak tasarlanır.",
            "Plise perde ise <strong>çağdaş ve sade</strong> bir tasarım diline sahiptir. Pencere kasası içine gizlendiği için kornişe ihtiyaç duymaz ve çerçeve içinde neredeyse fark edilmez. Pile katlı düz yüzeyi, modern mimari formlarla uyumlu bir geometri oluşturur.",
          ],
          list: {
            type: "ul",
            items: [
              "Fon — klasik, nostaljik, zarif doku",
              "Plise — çağdaş, minimal, göze çarpmayan",
              "Fon — korniş ve ray dekorun parçasıdır",
              "Plise — korniş gerekmez, çerçeve içinde gizli",
              "Fon — dalgalı, yumuşak tül görünümü",
              "Plise — düzgün, geometrik pile yüzeyi",
            ],
          },
        },
        {
          h2: "Bütçe Planlaması ve Maliyet Analizi",
          paragraphs: [
            "Fon perde <strong>bütçe dostu bir çözümdür</strong>. İnce tül kumaşın metresi düşük fiyatlıdır ve ray/korniş montajı fazla işçilik gerektirmez. Plise perde ise alüminyum profil, ip mekanizması ve özel pile kumaş nedeniyle daha yüksek bir yatırım ister. <em>Metrekare bazında fon perde 150-800 TL</em>, plise perde ise 450-3500 TL bandında fiyatlanır.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Fon Perde"],
            rows: [
              ["Standart tül", "450-1100 TL", "150-400 TL"],
              ["Karartma", "700-1400 TL", "—"],
              ["Premium", "1200-3500 TL", "400-800 TL"],
              ["Motorlu", "1800-3500 TL", "—"],
              ["Montaj ücreti", "100-300 TL", "50-150 TL"],
            ],
          },
        },
        {
          h2: "Kurulum Süreci ve Bakım Rutini",
          paragraphs: [
            "Fon perde kurulumu <strong>kısa sürede tamamlanır</strong> — korniş veya ray taktırıp tülü asmanız yeterlidir. Bakım tarafında da avantajlıdır; tül kumaş çıkarılıp çamaşır makinesinde yıkanabilir. Plise perde ise pencere kasasına profil montajı gerektirir ve mekanizma daha hassastır.",
          ],
          list: {
            type: "ol",
            items: [
              "Fon — ray veya korniş üzerine asma, pratik kurulum",
              "Plise — pencere içi profil montajı, teknik dikkat ister",
              "Fon — tül kumaş makinede yıkanabilir",
              "Plise — kumaş nemli bezle silinir, makineye girmez",
              "Fon — tül toz emdiği için düzenli yıkama gerekir",
              "Plise — toz tutma oranı düşüktür, az bakım ister",
            ],
          },
        },
        {
          h2: "Karar Rehberi: İhtiyacınıza Göre Tercih",
          paragraphs: [
            "Fon perde <strong>ekonomik bütçe ve klasik atmosfer</strong> arayan evler için mantıklıdır. Plise perde <em>çağdaş görünüm, çoklu ışık seviyesi ve tam karartma</em> beklentisi olanlar için daha doğru bir yatırımdır.",
          ],
          list: {
            type: "ul",
            items: [
              "Fon — düşük bütçe öncelikliyse",
              "Fon — klasik ve sıcak dekor tercih ediliyorsa",
              "Fon — gündüz bol ışık isteniyorsa",
              "Fon — yıkanabilir kumaş aranıyorsa",
              "Plise — modern ve sade görünüm isteniyorsa",
              "Plise — blackout ile tam karanlık gerekiyorsa",
              "Plise — tek perdede tül ve karartma isteniyorsa",
              "Plise — kornişsiz, pencere içi montaj tercih ediliyorsa",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi fon perde mi avantajlı?",
          answer: "Bütçeniz kısıtlı ve klasik bir dekor istiyorsanız fon perde daha avantajlıdır. Çağdaş tasarım, tek üründe hem tül hem karartma ve pencere içi montaj istiyorsanız plise perde öne çıkar. Fon perde yalnızca tül sunarken plise perde blackout seçeneği de barındırır.",
        },
        {
          question: "Fon perde odayı tam karartır mı?",
          answer: "Hayır. Fon perde ince tül dokusundan üretildiği için ışığın büyük bölümünü geçirir ve karartma yapamaz. Tam karanlık için plise perde blackout kumaş veya ek bir karartma perde kullanmanız gerekir.",
        },
        {
          question: "Maliyet açısından hangisi daha avantajlı?",
          answer: "Fon perde daha ekonomiktir. Metrekare bazında fon perde 150-800 TL, plise perde 450-3500 TL aralığında fiyatlanır. Fon perde basit kumaş ve ray montajı sayesinde düşük maliyetlidir.",
        },
        {
          question: "Fon perde kumaşı makinede yıkanır mı?",
          answer: "Evet. Fon perde tülü çıkarılıp çamaşır makinesinde yıkanabilir; bu özelliği temizlik açısından büyük kolaylık sağlar. Plise perde kumaşı ise nemli bezle silinmeli, makinede yıkanmamalıdır.",
        },
        {
          question: "Plise perde korniş gerektirir mi?",
          answer: "Hayır. Plise perde doğrudan pencere kasasına vidalı, yapışkanlı veya kancalı sistemle monte edilir ve kornişe ihtiyaç duymaz. Fon perde ise korniş veya ray üzerine pencere önüne asılır.",
        },
      ]}
    />
  );
}
