import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Tül Perde — Karşılaştırma",
  description:
    "Plise perde ile tül perde arasındaki farklar: görsel karakter, ışık yönetimi, asma sistemi, bakım pratikliği ve bütçe etkisi. Doğru tercihi öğrenin.",
  slug: "plise-perde-vs-tul-perde",
});

export default function PliseVsTulPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Tül Perde"
      description="Plise perde ile tül perde arasındaki farklar: görsel karakter, ışık yönetimi, asma sistemi, bakım pratikliği ve bütçe etkisi."
      slug="plise-perde-vs-tul-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Tül", url: "/plise-perde-vs-tul-perde" }]}
      h1="Plise Perde vs Tül Perde — Hangisi Daha İyi?"
      intro="Plise perde ve tül perde, pencereyi örtmenin iki ayrı yolunu temsil eder. Birincisi katlanarak toplanan pileli bir kumaşla düz bir hat çizer; ikincisi kornişe asılan dalgalı bir tülle mekanın havasını yumuşatır. Bu yazıda görsel karakter, ışık yönetimi, asma sistemi, bakım pratikliği ve bütçe etkisi başlıkları altında her iki seçeneği adım adım ele alacağız."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Tül Perde Karşılaştırması",
        description: "Plise perde ve tül perde karşılaştırması — görsel karakter, ışık, asma sistemi, bakım, bütçe.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-tul-perde.webp"
          alt="Plise Perde vs Tül Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Pileli Kumaş mı Dalgalı Tül mü: Görsel Karakter",
          paragraphs: [
            "Plise perde, <strong>aralıksız pile hattı</strong>yla pencere önünde düz bir yüzey oluşturur; katlar birbirine eşit aralıklarla dizilir ve kumaş dalgalanmaz. <em>Çağdaş ve sade</em> bir çizgi arayanlar bu duruşu tercih eder.",
            "Tül perde ise kornişe asıldığında yerçekimiyle aşağı sarkar ve <u>dalgalı bir akış</u> sergiler. Bu akış, klasik döşemeli mekanlarda romantik bir hava yaratır ancak pencereyi net bir hatla örtmez.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Tül Perde"],
            rows: [
              ["Çizgi karakteri", "Düz ve düzenli pile", "Sarkık ve dalgalı"],
              ["Uyum sağladığı tarz", "Çağdaş, sade", "Klasik, süslü"],
              ["Kumaş davranışı", "Katlanarak toplanır", "Sarkarak akar"],
              ["Renk yelpazesi", "3-5 ton", "10 ve üzeri ton"],
              ["Pencere hatlığı", "Net ve keskin", "Yumuşak ve belirsiz"],
            ],
          },
        },
        {
          h2: "Güneş ve Gölge Dengesini Sağlama Yöntemi",
          paragraphs: [
            "Plise perdede kumaşı <strong>istediğiniz seviyede</strong> bırakabilirsiniz; yarım açık, üstten boşluklu ya da alttan kapalı konumlar mümkündür. <em>Bu esneklik</em>, gün boyu değişen güneş açısına göre gölgeyi ayarlamayı kolaylaştırır.",
            "Tül perde ise ya tamamen örtülür ya da yana çekilir; <u>ara konum</u> sunmaz. Işık ya hep ya hiç mantığıyla çalışır.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — kumaşı her yükseklikte sabitleyebilirsiniz",
              "Tül — yalnızca örtülü veya çekilmiş iki durum",
              "Plise — üst bandı açık bırakıp altı kapatma imkanı",
              "Tül — yana açılmadan ara konum alamaz",
              "Plise — blackout kumaşla sıfır ışık geçişi",
            ],
          },
        },
        {
          h2: "Asma Sistemi ve Mekanik İşleyiş",
          paragraphs: [
            "Plise perde, pencere kasasına <strong>alüminyum profil</strong> üzerine monte edilir ve kumaş bu profilin içindeki kanalda yukarı-aşağı kayar. İp mekanizması, kumaşı sıkıştırarak toplar. <em>Vidalı, yapışkanlı ve kancalı</em> montaj seçenekleri mevcuttur.",
            "Tül perde ise kornişe asılan bir makara düzeneğiyle yana kayar; kumaşın ağırlığı kornişe biner ve yer kaplama daha fazladır.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Tül Perde"],
            rows: [
              ["Taşıyıcı eleman", "Alüminyum profil + ip", "Korniş + makara"],
              ["Hareket ekseni", "Dikey (yukarı-aşağı)", "Yatay (yana)"],
              ["Montaj seçenekleri", "Vidalı, yapışkanlı, kancalı", "Vidalı korniş"],
              ["Toplanmış kalınlık", "2-3 cm", "10-15 cm"],
            ],
          },
        },
        {
          h2: "Tozdan Arındırma ve Pratik Bakım",
          paragraphs: [
            "Plise perde, <strong>nemli bir bezle</strong> silinerek dakikalar içinde temizlenir; kumaş çıkarılırsa yıkanabilir ancak ütüleme gerektirmez. <em>Günlük bakımı düşük</em> bir seçenektir.",
            "Tül perde ise zamanla grileşir ve makinede yıkanmalıdır; sökme, yıkama ve ütüleme adımları daha fazla vakit ister.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — nemli bezle silmek yeterli gelir",
              "Tül — kornişten sökülüp makinede yıkanır",
              "Plise — on dakikada temizlik tamamlanır",
              "Tül — sökme, yıkama ve ütüleme zinciri gerekir",
              "Plise — ütü adımı atlanabilir",
            ],
          },
        },
        {
          h2: "Bütçe Etkisi ve Doğru Tercih Rehberi",
          paragraphs: [
            "Plise perde, <strong>korniş ve makara maliyetini</strong> içermediği için genellikle daha uygun fiyatlıdır. Tül perde ise korniş ve aksesuar giderleriyle yükselir. <em>Çağdaş çizgi ve düşük bakım</em> isteyenler pliseye, klasik atmosfer arayanlar tüle yönelmelidir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — sade ve çağdaş duruş isteyenlere",
              "Plise — esnek gölge ayarı öncelikliyse",
              "Plise — az bakım gerektiren çözüm arayanlara",
              "Tül — romantik ve klasik hava hedefleniyorsa",
              "Tül — geniş renk seçeneği önemliyse",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi yoksa tül perde mi tercih edilmeli?",
          answer: "Sade ve çağdaş bir çizgi, esnek gölge ayarı ve düşük bakım öncelikliyse plise perde uygundur. Klasik, dalgalı bir görünüm ve geniş renk yelpazesi önemliyse tül perde seçilmelidir.",
        },
        {
          question: "Bakım açısından hangisi daha az zahmetlidir?",
          answer: "Plise perde daha az zahmetlidir; nemli bezle silinerek on dakikada temizlenir ve ütü istemez. Tül perde ise sökülüp makinede yıkanmalı ve sonrasında ütülenmelidir.",
        },
        {
          question: "Maliyet olarak plise mi tül mü daha avantajlı?",
          answer: "Plise perde genellikle daha avantajlıdır çünkü korniş ve makara gideri taşımaz. Plise 450-3500 TL/m², tül perde ise 600-2000 TL/m² bandında fiyatlanır.",
        },
        {
          question: "Plise perde ışığı tamamen kesebilir mi?",
          answer: "Evet, blackout kumaşlı plise perde ışığın %99'unu keser ve sızıntı bırakmaz. Tül perde ise ışığı sadece filtreler, tam karartma yapamaz.",
        },
        {
          question: "Hangi seçenek pencerede daha az yer kaplar?",
          answer: "Plise perde daha az yer kaplar; toplandığında 2-3 cm kalınlığa iner. Tül perde korniş nedeniyle 10-15 cm yer tutar.",
        },
      ]}
    />
  );
}
