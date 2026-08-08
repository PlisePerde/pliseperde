import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Screen Perde — Karşılaştırma",
  description:
    "Plise perde ve screen (güneşlik) perde karşılaştırması. UV süzme, ışık filtreleme, cephe uyumu, fiyat ve bakım farkları. İhtiyacınıza uygun perdeyi seçin.",
  slug: "plise-perde-vs-screen-perde",
});

export default function PliseVsScreenPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Screen Perde"
      description="Plise perde ve screen (güneşlik) perde karşılaştırması. UV süzme, ışık filtreleme, cephe uyumu, fiyat, bakım."
      slug="plise-perde-vs-screen-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Screen", url: "/plise-perde-vs-screen-perde" }]}
      h1="Plise Perde mi Screen Güneşlik Perde mi? Detaylı İnceleme"
      intro="Screen perde, polyester ve PVC karışımı özel dokumasıyla güneş ışığını süzerek UV ışınlarını durdurur ve dışarıdan içeriyi zor gördürür; plise perde ise tül, güneşlik ve blackout dahil farklı kumaşlarla geniş bir kullanım yelpazesi sunar. Biri güneş cephesine odaklı, diğeri mekana göre şekillenen bir çözümdür. Aşağıda dokuma teknolojisi, UV performansı, cephe uyumu, maliyet, kurulum ve tasarım katkısını karşılaştırıyoruz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Screen Perde Karşılaştırması",
        description: "Plise perde ve screen perde karşılaştırması — UV süzme, ışık filtreleme, cephe uyumu, fiyat, bakım.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-screen-perde.webp"
          alt="Plise Perde vs Screen Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Dokuma Teknolojisi ve Mekanizma Farkı",
          paragraphs: [
            "Plise perdede kumaş <strong>akordeon biçiminde katlanarak</strong> yukarı-aşağı sürgülür ve pencere kasası içinde toplanır. Tül, güneşlik, yarı karartma ve blackout dokuma seçenekleri mevcuttur; üst ve alt kenar bağımsız konumlandırılabilir.",
            "Screen perde ise <strong>polyester+PVC karışımı</strong>, mikroskobik delikli dokumasıyla çalışır. Bu delikler görünür ışığın bir bölümünü geçirirken UV ışınlarını süzer ve dışarıdan içeriyi zor görür hale getirir. Genellikle stor veya zip sistem olarak yalnızca dikey eksende açılır.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Screen Perde"],
            rows: [
              ["Dokuma tipi", "Tül/güneşlik/blackout", "Yalnızca screen"],
              ["Işık geçişi", "%0-90 (kumaşa göre)", "%3-10 (delikli dokuma)"],
              ["UV süzme", "Güneşlik kumaşla sağlanır", "Daima aktif"],
              ["Dışarıdan görünüş", "Kumaşa göre değişir", "Kısmen engellenir"],
              ["Açılım yönü", "Üst + alt bağımsız", "Sadece dikey"],
              ["Kumaş biçimi", "Pile katlı", "Düz (stor/zip)"],
            ],
          },
        },
        {
          h2: "UV Süzme Performansı ve Görünür Işık Dengesi",
          paragraphs: [
            "Screen perde <strong>UV ışınlarını %95-99 oranında durdurur</strong>. Mikroskobik delikler, zararlı UV bileşeni süzülürken görünür ışığın bir kısmının geçmesine izin verir; böylece mobilya, zemin ve tekstil güneş hasarından korunur.",
            "Plise perde güneşlik dokuma seçildiğinde benzer UV koruması verir, ancak <em>aynı zamanda</em> tül ile maksimum ışık ve blackout ile tam karanlık modları da sunar. Screen perde ise yalnızca güneşlik seviyesinde çalışır; daha fazla ışık veya tam karanlık istenemez.",
          ],
          list: {
            type: "ul",
            items: [
              "Screen — UV ışınları %95-99 süzülür",
              "Plise güneşlik — yakın seviyede UV koruması",
              "Screen — dışarıdan içeriyi zor gördürür",
              "Plise — tülle bol ışık, blackoutla tam karanlık",
              "Screen — yalnızca güneşlik seviyesi sabit",
              "Plise — kumaşa göre geniş ışık yelpazesi",
            ],
          },
        },
        {
          h2: "Cephe Yönelimi ve Uygun Mekanlar",
          paragraphs: [
            "Screen perde <strong>güneş alan cepheler için</strong> tasarlanmıştır. Güney ve batı yönlerinde, ışınımın yoğun olduğu ofis, çalışma odası ve cam balkonlarda ekran yansımasını azaltır ve ortamı serin tutar.",
            "Plise perde de güneşlik dokumayla güneş cephesinde kullanılabilir; ancak <em>mevsimsel esneklik</em> sağlar: kışın tülle daha fazla ışık, yazın güneşlikle süzme. Tek perdede bu geçişi isteyenler düet plise perdeyi tercih edebilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Screen — güney/batı cepheleri için öne çıkar",
              "Screen — ofis, çalışma odası, cam balkon",
              "Screen — ekran yansımasını azaltır",
              "Plise — güneşlik + tül + blackout seçenekleri",
              "Plise — mevsime göre kumaş tercihi",
              "Plise — düet modelle tek perdede çözüm",
            ],
          },
        },
        {
          h2: "Metrekare Bazında Maliyet Karşılaştırması",
          paragraphs: [
            "Screen perde <strong>daha ekonomik bir aralıktadır</strong> çünkü tek dokuma tipi ve sade stor/zip mekanizması kullanılır. Plise perde, alüminyum profil ve ip gerdirme sistemi nedeniyle maliyetlidir. <em>Screen perde m² 300-2000 TL</em>, plise m² 450-3500 TL bandında fiyatlanır.",
          ],
          table: {
            headers: ["Model", "Plise Perde (Güneşlik)", "Screen Perde"],
            rows: [
              ["Standart screen", "600-1200 TL", "300-800 TL"],
              ["Premium screen", "1000-2000 TL", "600-1500 TL"],
              ["Motorlu", "1800-3500 TL", "1200-3000 TL"],
              ["Düet (tül+screen)", "900-2000 TL", "—"],
              ["Montaj", "100-300 TL", "100-250 TL"],
            ],
          },
        },
        {
          h2: "Montaj Zorluğu ve Temizlik Alışkanlığı",
          paragraphs: [
            "Screen perde takımı <strong>daha az efor ister</strong>: stor sistem olarak pencere üzerine hızlıca monte edilir ve düz kumaş nemli bezle tek geçişte temizlenir. Plise perde ise pile katlı yapısı nedeniyle daha düzenli bakım ister.",
          ],
          list: {
            type: "ol",
            items: [
              "Screen — stor montaj, pratik ve hızlı",
              "Plise — pencere içi profil montajı, daha teknik",
              "Screen — düz yüzey, nemli bezle kolay silme",
              "Plise — pile kıvrımları toz tutabilir",
              "Screen — az toz biriktirir",
              "Plise — kumaş sökülebilir, daha fazla bakım",
            ],
          },
        },
        {
          h2: "Tasarım Dil ve Estetik Katkı",
          paragraphs: [
            "Screen perde <strong>düz ve endüstriyel bir çizgiye</strong> sahiptir; kumaş pencereyi düz olarak örter, pile ritmi içermez. Ofis ve modern mekanlarla uyumu yüksektir.",
            "Plise perde ise <em>katlı dokusuyla</em> daha sıcak ve konut tipi mekanlara yakışır. Pile ritmi, pencere çevresine yumuşak bir görsel hareket katar.",
          ],
          list: {
            type: "ul",
            items: [
              "Screen — düz, çağdaş, endüstriyel görünüm",
              "Plise — pile katlı, yumuşak, sıcak doku",
              "Screen — ofis ve modern mekanlar için",
              "Plise — ev ve konut için daha uygun",
              "Screen — dışarıdan düz yüzey",
              "Plise — dışarıdan pile ritmi görünür",
            ],
          },
        },
        {
          h2: "Karar Matrisi",
          paragraphs: [
            "Güneş cepheli ofis ve cam balkon için <strong>screen perde</strong> ekonomik ve etkili bir çözümdür. Evde kumaş esnekliği ve pile estetiği aranıyorsa <em>plise perde</em> daha kapsamlıdır.",
          ],
          list: {
            type: "ul",
            items: [
              "Screen — güneş cepheli ofis, çalışma odası",
              "Screen — bütçe dostu UV koruma",
              "Screen — ekran yansımasını azaltma",
              "Screen — cam balkon, modern mekan",
              "Plise — ev, konut, sıcak görünüm",
              "Plise — tül + güneşlik + blackout esnekliği",
              "Plise — üst/alt bağımsız açılım",
              "Plise — düet modelle tek perdede çözüm",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Screen perde mi plise perde mi güneş cephesi için daha verimli?",
          answer: "Güneş alan ofis ve cam balkonlarda ekonomik UV koruma isteniyorsa screen perde daha doğrudan çözümdür. Evde tül, güneşlik ve blackout arası geçiş ve pile estetiği aranıyorsa plise perde daha kapsamlıdır.",
        },
        {
          question: "Screen perdenin UV süzme oranı gerçekte ne kadar?",
          answer: "Screen perde mikroskobik delikli dokumasıyla UV ışınlarını %95-99 oranında süzer. Mobilya, zemin ve tekstil güneş hasarından korunur. Plise perde güneşlik dokumayla benzer koruma sağlar.",
        },
        {
          question: "Fiyat açısından hangi perde daha avantajlı?",
          answer: "Screen perde genelde daha ekonomiktir. Screen perde m² 300-2000 TL, plise güneşlik m² 600-3500 TL aralığında. Screen perde tek dokuma ve sade mekanizmayla düşük maliyetlidir.",
        },
        {
          question: "Screen perde tam karanlık sağlayabilir mi?",
          answer: "Hayır. Screen perde yalnızca güneşlik seviyesinde çalışır ve ışığın %3-10'unu geçirir. Tam karanlık için plise perde blackout dokuma veya ayrı bir karartma perde kullanmak gerekir.",
        },
        {
          question: "Plise perde güneşlik kumaşı screen perde ile birebir aynı mıdır?",
          answer: "Benzer ama aynı değil. Plise perde güneşlik dokuması da UV süzer ve ışığı filtreler; ancak pile katlı yapıda olduğu için görünüm ve çalışma prensibi farklıdır. Screen perde düz kumaşla çalışır, plise perde pile yaparak çalışır.",
        },
      ]}
    />
  );
}
