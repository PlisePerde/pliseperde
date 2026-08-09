import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Jaluzi Perde — Karşılaştırma",
  description:
    "Plise perde vs jaluzi perde: ahşap ve alüminyum jaluzi ile fiyat, ışık kontrolü, montaj, temizlik ve dayanıklılık karşılaştırması. Hangisi uygun?",
  slug: "plise-perde-vs-jaluzi-perde",
});

export default function PliseVsJaluziPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Jaluzi Perde"
      description="Plise perde ile alüminyum ve ahşap jaluzi perde arasındaki farklar: mekanizma, ışık yönlendirme, temizlik, nem dayanımı ve fiyat."
      slug="plise-perde-vs-jaluzi-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Jaluzi", url: "/plise-perde-vs-jaluzi-perde" }]}
      h1="Plise Perde vs Jaluzi Perde — Detaylı İnceleme"
      intro="Plise perde, tek parça kumaşı akordion biçiminde katlayarak çalışır; jaluzi perde ise <strong>yatay lamellerin</strong> açı değiştirmesiyle ışık ve görünüş ayarlar. Jaluzi ailesi iki ana malzemeden üretilir: <em>alüminyum lamel</em> hafif, ekonomik ve nem dayanımlıdır; <u>ahşap lamel</u> ise doğal dokusuyla sıcak bir atmosfer yaratır ancak ıslak ortamlara uygun değildir. Bu sayfada her üç seçeneği de beş başlık altında karşılaştırıyoruz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Jaluzi Perde Karşılaştırması",
        description: "Plise perde ve jaluzi perde karşılaştırması — fiyat, ışık, montaj, temizlik.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-jaluzi-perde.webp"
          alt="Plise Perde vs Jaluzi Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Kumaş Katmanı mı Döner Kanatlar mı?",
          paragraphs: [
            "Plise perdede ışık kontrolü, kumaşın <strong>kademeli olarak</strong> indirilip kaldırılmasıyla sağlanır. Kumaş ne kadar açıkta kalırsa o kadar ışık girer; tamamen kapatıldığında blackout seçeneğiyle sıfıra yakın karartma yapılır.",
            "Jaluzi perdede ise <em>lamellerin eğimi</em> belirleyicidir. Kanatlar 180 derece döner; kapalı konumda ışığı büyük ölçüde keser, açık konumda ışığın yönünü değiştirerek oda içine yansıtır. Ahşap lameller daha kalın olduğu için kapalıyken ışık sızıntısı alüminyuma göre daha azdır.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Alüminyum Jaluzi", "Ahşap Jaluzi"],
            rows: [
              ["Ana malzeme", "Polyester kumaş", "Alüminyum lamel", "Ahşap / bambu lamel"],
              ["Işık ayar yöntemi", "Kademeli indirip kaldırma", "Lamel açısı değişimi", "Lamel açısı değişimi"],
              ["Tam karartma", "Blackout kumaşla tam", "Lamel aralarından sızıntı", "Kalın lamel, daha az sızıntı"],
              ["Çift yönlü açılım", "Var", "Yok", "Yok"],
              ["Nem dayanımı", "Yüksek", "Yüksek", "Düşük"],
              ["Görsel karakter", "Yumuşak, katlı", "Endüstriyel, keskin", "Doğal, sıcak"],
            ],
          },
        },
        {
          h2: "Lamel Malzemesi ve Bütçe İlişkisi",
          paragraphs: [
            "Plise perde genellikle <strong>en ekonomik</strong> seçenektir. Jaluzi perdede fiyat, lamel malzemesine göre ciddi biçimde değişir: alüminyum uygun fiyatlıyken ahşap doğal malzeme ve işçilik nedeniyle belirgin biçimde pahalıdır.",
            "Metre kare bazında plise perde <em>450-3500 TL</em>, alüminyum jaluzi 600-3000 TL, ahşap jaluzi ise 1500-5000 TL bandında seyreder. Motorlu modeller her üç kategoride de üst limiti yukarı çeker.",
          ],
          table: {
            headers: ["Segment", "Plise Perde", "Alüminyum Jaluzi", "Ahşap Jaluzi"],
            rows: [
              ["Standart", "450-1100 TL", "600-1200 TL", "1500-3000 TL"],
              ["Karartma", "700-1400 TL", "1000-2000 TL", "2000-4000 TL"],
              ["Premium", "1200-3500 TL", "1800-3000 TL", "3000-5000 TL"],
              ["Motorlu", "1800-3500 TL", "2500-5000 TL", "3500-6000 TL"],
            ],
          },
        },
        {
          h2: "Açı Ayarı ile Işık Yönlendirme",
          paragraphs: [
            "Jaluzi perdenin en güçlü tarafı, lamelleri <strong>kapalı tutarken bile</strong> ışığın bir kısmını içeri alabilmesidir. Kanatları yatay konuma getirip dışarıdan görünüşü engellerken tavan yüzeyine yansıyan ışıkla odayı aydınlık tutabilirsiniz.",
            "Plise perde ise <em>kademeli açma</em> ile ışık miktarını belirler; ancak ışığın yönünü değiştiremez. Tamamen kapalı blackout kumaşta ışık sıfıra iner, bu da uyku odaları için jaluziye göre daha elverişli bir sonuç verir.",
          ],
          list: {
            type: "ul",
            items: [
              "Alüminyum jaluzi — lamel açısıyla ışık yönü hassas ayarlanır",
              "Ahşap jaluzi — kalın lameller sayesinde kapalıyken daha az sızıntı",
              "Plise — kademeli yükseklikle ışık miktarı belirlenir",
              "Alüminyum jaluzi — gizlilik korunurken ışık içeri alınabilir",
              "Plise — blackout kumaşla tam karartma, uyku odaları için ideal",
              "Plise — üstten ve alttan ayrı açılımla esnek ışık-mahremiyet",
            ],
          },
        },
        {
          h2: "Kanat Aralarında Toz ve Nem",
          paragraphs: [
            "Jaluzi perdede her lamel <strong>tek tek</strong> silinmelidir; kanat aralarındaki toz vakumla bile tam çıkmaz. Alüminyum lamel nemli bezle rahatça temizlenir ve banyo, mutfak gibi ıslak ortamlarda sorunsuz kullanılır.",
            "Ahşap lamel ise sudan etkilenir; <em>kuru bez</em> ile silinmeli, gerektiğinde ahşap bakım yağıyla periyodik bakım yapılmalıdır. Plise perde ise nemli bir bezle tek geçişte temizlenir, kumaş yerinden çıkarılarak da yıkanabilir.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — nemli bezle tek geçiş, kumaş çıkarılabilir",
              "Alüminyum jaluzi — nemli bezle silinir, ıslak ortama uygun",
              "Ahşap jaluzi — kuru bez, ahşap yağıyla ara sıra bakım",
              "Plise — pile kıvrımları arası toz için haftada bir ovalama",
              "Alüminyum jaluzi — lamel araları vakumla zor temizlenir",
              "Ahşap jaluzi — banyo ve mutfakta kullanılmamalı",
            ],
          },
        },
        {
          h2: "Tercih Kılavuzu",
          paragraphs: [
            "Yumuşak doku, <strong>kolay temizlik</strong> ve tam karartma önceliğinizse plise perde doğru adres. Modern, <em>endüstriyel bir hat</em> ve lamel açısıyla ışık yönü kontrolü istiyorsanız alüminyum jaluzi uygun. Doğal ahşap dokusuyla <u>sıcak bir atmosfer</u> yaratmak ve ortamın nemli olmadığından emin olmak koşuluyla ahşap jaluzi tercih edilebilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — yumuşak, katlı doku ve kolay bakım arayanlar için",
              "Plise — blackout ile uyku odası için tam karartma",
              "Plise — banyo ve mutfakta nem dayanımı",
              "Alüminyum jaluzi — modern, keskin çizgi ve ışık yönü kontrolü",
              "Alüminyum jaluzi — ıslak ortamlarda sorunsuz kullanım",
              "Ahşap jaluzi — oturma ve çalışma odasında doğal sıcaklık",
              "Ahşap jaluzi — nemli olmayan, geniş pencereli mekanlar için",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde yerine jaluzi perde ne zaman tercih edilmeli?",
          answer: "Lamellerin açısını değiştirerek ışığın yönünü kontrol etmek istiyorsanız, modern ve endüstriyel bir görünüm arıyorsanız jaluzi perde daha uygundur. Plise perde ise yumuşak doku, kolay temizlik ve tam karartma isteyenler için idealdir.",
        },
        {
          question: "Alüminyum jaluzi ile ahşap jaluzi arasındaki fiyat farkı ne kadar?",
          answer: "Alüminyum jaluzi 600-3000 TL/m², ahşap jaluzi 1500-5000 TL/m² aralığındadır. Ahşap, doğal malzeme ve işçilik nedeniyle alüminyumdan belirgin biçimde pahalıdır. Bütçe öncelikliyse alüminyum, doğal doku öncelikliyse ahşap seçilmelidir.",
        },
        {
          question: "Jaluzi perde tam karartma yapabilir mi?",
          answer: "Jaluzi perde lamelleri kapatsanız bile kanat aralarından ışık sızıntısı olur; tam karartma sağlayamaz. Ahşap lameller daha kalın olduğu için sızıntı daha azdır. Sıfıra yakın karartma için plise perdenin blackout kumaş seçeneği daha uygundur.",
        },
        {
          question: "Ahşap jaluzi hangi odalarda kullanılmamalı?",
          answer: "Banyo, mutfak ve cam balkon gibi nemin yüksek olduğu ortamlarda ahşap jaluzi kullanılmamalıdır. Ahşap nem emer, şekil değiştirir ve küf yapabilir. Bu alanlar için alüminyum jaluzi veya plise perde daha doğru bir seçimdir.",
        },
        {
          question: "Plise perde jaluziye göre temizlikte ne kadar avantajlı?",
          answer: "Plise perde nemli bir bezle tek geçişte temizlenir ve kumaş yerinden çıkarılarak yıkanabilir. Jaluzi perdede ise her lamel tek tek silinmelidir; kanat aralarındaki toz vakumla bile tam çıkmaz. Bakım kolaylığı açısından plise perde belirgin biçimde avantajlıdır.",
        },
      ]}
    />
  );
}
