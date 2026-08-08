import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Honeycomb Perde — Karşılaştırma",
  description:
    "Plise perde ve honeycomb petek perde arasındaki yapısal, ısıl ve fiyat farkları. Petek hücreli yalıtım mı pile katlı hafiflik mi? Kararınızı verin.",
  slug: "plise-perde-vs-honeycomb-perde",
});

export default function PliseVsHoneycombPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Honeycomb Perde"
      description="Plise perde ve honeycomb petek perde arasındaki yapısal, ısıl ve fiyat farkları."
      slug="plise-perde-vs-honeycomb-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Honeycomb", url: "/plise-perde-vs-honeycomb-perde" }]}
      h1="Plise Perde mi Honeycomb Petek Perde mi? İşte Ayrıntılar"
      intro="Pencere kenarında plise perde ile honeycomb (petek) perde sıkça birbirine karıştırılır; oysa birinin pile katlanan tek katmanı, diğerinin hava dolu petek hücreleri vardır. Honeycomb, hücre içine hapsedilen havayla bir yalıtım bariyeri kurarken plise perde ağırlığı ve kalınlığı düşük tutarak pratik kullanım hedefler. Aşağıda bu iki sistemin yapı, yalıtım, bütçe, aydınlatma, kurulum ve karar kriterlerini tek tek ele aldık."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Honeycomb Perde Karşılaştırması",
        description: "Plise perde ve honeycomb petek perde karşılaştırması — yapı, yalıtım, fiyat, aydınlatma, kurulum.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-honeycomb-perde.webp"
          alt="Plise Perde vs Honeycomb Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Mekanik Yapı ve Kumaş Mimarisi",
          paragraphs: [
            "Plise perdede kumaş <strong>akordeon gibi katlanır</strong>: tek bir dokuma tabakası ip gerdirme sistemiyle yukarı ve aşağı sürgülür, pencere kasası içinde ince bir yığın halinde toplanır. Bu sade yapı, ürünü hafif ve görsel olarak dikkat çekmeyen bir çözüm yapar.",
            "Honeycomb perdede ise <strong>iki paralel kumaş yüzeyi</strong> birbirine periyodik noktalardan birleştirilir ve arada altıgen hücreler oluşur. Bu hücrelerin içi havayla dolarak sabit bir <u>yalıtım boşluğu</u> yaratır. Sonuç olarak honeycomb, mekanik olarak daha karmaşık ama ısıl açıdan daha verimli bir mimari sunar.",
          ],
          table: {
            headers: ["Kriter", "Plise Perde", "Honeycomb Perde"],
            rows: [
              ["Kumaş tabakası", "Tek yüzey", "Çift yüzey + hücre"],
              ["Katlanma biçimi", "Pile (akordeon)", "Petek (altıgen hücre)"],
              ["Hava boşluğu", "Yok", "Hücre içi hava tabakası"],
              ["Toplu kalınlık", "İnce profil", "Daha kabarık profil"],
              ["Ağırlık", "Düşük", "Orta-yüksek"],
            ],
          },
        },
        {
          h2: "Petek Hücrelerinin Isı Perdeleme Etkisi",
          paragraphs: [
            "Honeycomb perdenin öne çıkan özelliği <strong>hücre içi havanın yalıtım sağlamasıdır</strong>. Kış aylarında cam yüzeyinden sızan soğuk, petek boşluklarında duran havayla kırılır; yazın ise sıcak hava akışı aynı şekilde yavaşlatılır. Bu sayede ısıtma-soğutma yükü azalır.",
            "Plise perde de kumaşın yoğunluğuna bağlı olarak belli oranda bariyer oluşturur, ancak hava tabakası içermediği için honeycomb seviyesinde bir ısıl direnç gösteremez. <em>Geniş cam yüzeyli veya rüzgâr alan cephelerde</em> petek yapının getirisi yıllar içinde fatura farkına yansır.",
          ],
          list: {
            type: "ul",
            items: [
              "Petek hücreleri sabit hava yalıtımı oluşturur",
              "Honeycomb kışın ısı kaçağını belirgin ölçüde düşürür",
              "Honeycomb yazın sıcak hava girişini yavaşlatır",
              "Plise perde ince bir kumaş bariyeri sunar",
              "Honeycomb dış sesleri hafifçe söndürür (akustik katkı)",
              "Plise perde enerji tasarrufu ana hedef değilse yeterli",
            ],
          },
        },
        {
          h2: "Bütçe ve Metrekare Fiyat Aralıkları",
          paragraphs: [
            "Maliyet tarafında plise perde <strong>daha ulaşılabilir bir aralıkta</strong> konumlanır. Honeycomb perde, çift katman dokuma ve hücre birleştirme işçiliği gerektirdiği için metrekare başına daha yüksek fiyatlanır. <em>Plise perde m² 450-3500 TL</em>, honeycomb m² 800-4500 TL bandında değerlendirilir.",
          ],
          table: {
            headers: ["Kategori", "Plise Perde", "Honeycomb Perde"],
            rows: [
              ["Tül / standart", "450-1100 TL", "800-1500 TL"],
              ["Karartma kumaş", "700-1400 TL", "1200-2200 TL"],
              ["Yarı karartma", "600-1200 TL", "1000-1800 TL"],
              ["Motorlu model", "1800-3500 TL", "2500-4500 TL"],
              ["Montaj ücreti", "100-300 TL", "150-350 TL"],
            ],
          },
        },
        {
          h2: "Doğal Aydınlatmayı Yönetme Biçimi",
          paragraphs: [
            "İki sistem de kumaşı <strong>istediğiniz yükseklikte sabitleyerek</strong> kademeli aydınlatma sunar. Plise perdede üst ve alt kenar bağımsız konumlandırılabildiği için pencerenin sadece bir bölümünü açmak mümkündür.",
            "Honeycomb perdede de üstten-alttan açılan varyantlar vardır; yine de hücre yapısı kumaşı <u>daha hacimli</u> tuttuğundan, tam toplanmış durumda pencere içinde daha fazla derinlik kaplar.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — üst ve alt kenarı ayrı ayrı konumlandırma",
              "Honeycomb — üstten/alttan açılan modeller mevcut",
              "Plise — toplanmış halde çok az derinlik kaplar",
              "Honeycomb — toplanmış halde daha kabarık durur",
              "Plise — blackout dokuma ile sıfır ışık modu",
              "Honeycomb — blackout hücre ile karanlık + yalıtım birlikte",
            ],
          },
        },
        {
          h2: "Takma Yöntemleri ve Günlük Bakım Alışkanlığı",
          paragraphs: [
            "Takma yöntemi açısından her iki üründe de <strong>vidalı, yapışkanlı ve kanca tipi</strong> seçenekler bulunur. Bakım tarafında ise plise perde, tek katmanlı dokuması sayesinde daha az efor ister.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — tek katman, nemli bezle hızlıca silinir",
              "Honeycomb — hücre aralarında toz birikebilir",
              "Plise — kumaş kasadan kolayca ayrılabilir",
              "Honeycomb — kumaş sökme işlemi daha uğraştırır",
              "Plise — düzenli toz alma çoğu zaman yeterli",
              "Honeycomb — ara sıra vakumla temizlik önerilir",
            ],
          },
        },
        {
          h2: "Karar Rehberi: Hangi Senaryo Hangi Perde",
          paragraphs: [
            "Bütçe ve hafiflik öne çıkıyorsa <strong>plise perde</strong> mantıklıdır. Yalıtım ve uzun vadeli enerji getirisi öncelikliyse <em>honeycomb petek perde</em> doğru yatırımdır.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — dar bütçe ve hafif profil arayanlar",
              "Plise — küçük boyutlu pencereler",
              "Plise — az bakım isteyen kullanım",
              "Plise — geçici mekan veya kiralık ev",
              "Honeycomb — ısıl konfor birinci öncelik",
              "Honeycomb — geniş cam yüzeyli salonlar",
              "Honeycomb — dış gürültünün azaltılması isteniyorsa",
              "Honeycomb — enerji giderini düşürmeyi planlayanlar",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Petek yapılı honeycomb perde pileli plise perdeden ne kadar farklı yalıtır?",
          answer: "Honeycomb perde hücre içine hapsedilen hava sayesinde kışın ısı kaybını belirgin ölçüde azaltır; plise perde ise tek katman dokuma ile sınırlı bir bariyer sunar. Geniş camlarda bu fark faturalara yansır, küçük pencerelerde ise hissedilir olmayabilir.",
        },
        {
          question: "Honeycomb perde ısıtma ve soğutma giderlerini gerçekten düşürür mü?",
          answer: "Evet. Petek hücrelerindeki sabit hava tabakası, camdan gelen soğuk ve sıcak hava transferini yavaşlatır. Bu nedenle kışın kalorifer, yazın klima yükü azalır. Büyük ve güneş gören cephelerde yatırım maliyeti zamanla geri döner.",
        },
        {
          question: "Metrekare bazında hangi ürün bütçe dostu olur?",
          answer: "Plise perde daha uygun fiyatlıdır. Plise m² 450-3500 TL, honeycomb m² 800-4500 TL aralığında fiyatlanır. Honeycomb, çift katman ve hücre birleştirme işçiliği nedeniyle maliyetlidir.",
        },
        {
          question: "Honeycomb perde karanlık ortam sağlayabiliyor mu?",
          answer: "Blackout petek kumaş tercih edildiğinde honeycomb perde ışığı neredeyse tamamen keser ve bu sırada yalıtımı da sürdürür. Plise perde blackout dokuma ile karanlık verir ancak hava yalıtımı içermez.",
        },
        {
          question: "Petek aralarındaki toz temizliği zorluk çıkarır mı?",
          answer: "Honeycomb perdede hücre boşlukları zamanla toz tutabilir; ara sıra düşük güçlü vakumla temizlemek pratiktir. Plise perde ise tek katman olduğu için nemli bezle silmek çoğu zaman yeterlidir.",
        },
      ]}
    />
  );
}
