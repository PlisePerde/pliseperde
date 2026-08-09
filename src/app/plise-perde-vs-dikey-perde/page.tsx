import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Dikey Perde — Karşılaştırma",
  description:
    "Plise perde ve dikey perde farkları: sistem mimarisi, pencere uyumu, güneş yönetimi, maliyet, montaj, temizlik ve görsel dil. Detaylı analiz.",
  slug: "plise-perde-vs-dikey-perde",
});

export default function PliseVsDikeyPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Dikey Perde"
      description="Plise perde ve dikey perde karşılaştırması: sistem mimarisi, pencere uyumu, ışık yönetimi, maliyet, montaj, temizlik ve görsel dil."
      slug="plise-perde-vs-dikey-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Dikey", url: "/plise-perde-vs-dikey-perde" }]}
      h1="Plise Perde vs Dikey Perde — Hangisi Daha İyi?"
      intro="Plise perde ile dikey perde, birbirinden tamamen farklı iki mühendislik yaklaşımının ürünüdür. Dikey perde, yanlara kayarak açılan ve 180 derece dönebilen lamelleriyle geniş cam yüzeyleri, cam balkonlar ve yüksek tavanlı mekanlar için tasarlanmıştır. Plise perde ise pile katlanan kumaşı dikey eksende hareket ettirerek standart ev pencerelerinde esnek bir aydınlatma kontrolü sunar. Bu karşılaştırmada sistem mimarisi, pencere uyumu, güneş açısı yönetimi, maliyet etkileri, montaj prosedürü, temizlik adımları ve görsel dil başlıklarını inceleyeceğiz."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Dikey Perde Karşılaştırması",
        description: "Plise perde ve dikey perde karşılaştırması — sistem mimarisi, pencere uyumu, ışık yönetimi, maliyet, montaj ve görsel dil.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-dikey-perde.webp"
          alt="Plise Perde vs Dikey Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Sistem Mimarisi ve Açılım Mantığı",
          paragraphs: [
            "Plise perde, <strong>akordiyon biçiminde katlanan</strong> tek parça kumaşı bir ip mekanizmasıyla dikey yönde hareket ettirir. Kumaş pencere kasası içine monte edilen alüminyum profil içinde çalışır ve istenilen yükseklikte sabitlenir.",
            "Dikey perde, <strong>bir ray hattı üzerinde süzülen bağımsız lamellerden</strong> oluşur. Lameller yana kayarak pencereyi serbest bırakır ve 180 derece döndürülerek ışığın geliş yönü hassas biçimde ayarlanır. Sistem tavan veya korniş üzerine monte edilir ve geniş cam yüzeyleri için optimize edilmiştir.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Dikey Perde"],
            rows: [
              ["Kumanda biçimi", "İp ile dikey hareket", "Ray ile yana kayma + döndürme"],
              ["Açılım yönü", "Üstten ve alttan", "Yana toplanma"],
              ["Işık ayar yöntemi", "Kademeli yükseklik", "Lamel dönme açısı"],
              ["Uygun pencere", "Her boyut", "Geniş ve yüksek yüzeyler"],
              ["Montaj konumu", "Pencere kasası içi", "Tavan veya korniş üstü"],
              ["Karartma", "Blackout kumaş ile", "Blackout lamel ile"],
            ],
          },
        },
        {
          h2: "Pencere Boyutlarına Göre Uyumluluk",
          paragraphs: [
            "Dikey perde, <strong>geniş cam yüzeyler ve sürme kapı sistemleri</strong> için en verimli çözümdür. Lamel rayı yana kayarak 3 metreyi aşan vitrinleri, cam balkon kapılarını ve yüksek tavanlı ofis pencerelerini tamamen açığa çıkarır. Plise perde ise <em>küçük mutfak penceresinden geniş salon camına</em> kadar her ölçeye uyum sağlar.",
            "Yine de çok geniş pencerelerde (3 metreden fazla) plise kumaşın ağırlığı mekanizmayı zorlayabilir. Dikey perde, lamel ray sistemi sayesinde geniş yüzeylerde daha akıcı ve sorunsuz çalışır.",
          ],
          list: {
            type: "ul",
            items: [
              "Dikey — 3 metreyi aşan geniş camlar için ideal",
              "Plise — her pencere ölçüsüne esnek uyum",
              "Dikey — sürme kapı ve cam balkonlara uygun",
              "Plise — orta ve küçük pencerelerde pratik",
              "Dikey — yüksek tavanlı mekanlarda avantajlı",
              "Plise — standart konut pencerelerinde optimal",
            ],
          },
        },
        {
          h2: "Güneş Açısı ve Aydınlık Yönetimi",
          paragraphs: [
            "Dikey perde, <strong>lamel dönme açısıyla ışığın yönünü</strong> hassas şekilde yönetir. Lamelleri istediğiniz açıda tutarak güneş ışığını bir yöne yönlendirebilir, tamamen kapalı konumda ışığı kesmeden dış görünüşü engelleyebilirsiniz.",
            "Plise perde ise <strong>kademeli yükseklik ayarıyla ışık miktarını</strong> belirler. Kumaşı istediğiniz seviyede bırakarak üstten ışık alıp altı kapatabilirsiniz; ancak ışığın <u>yönünü</u> değiştirme imkanınız yoktur. Tam karartma gerektiğinde blackout kumaş sıfır ışık sağlar.",
          ],
          list: {
            type: "ul",
            items: [
              "Dikey — lamel açısıyla ışık yönü hassas ayarlanır",
              "Plise — yükseklik kademeleriyle ışık miktarı belirlenir",
              "Dikey — lameller kapalıyken ışık + mahremiyet birlikte",
              "Plise — blackout ile sıfır ışık mümkün",
              "Dikey — yana tam açılımda cam yüzeyi serbest bırakır",
              "Plise — üst ve alt kenar bağımsız konumlanır",
            ],
          },
        },
        {
          h2: "Maliyet Etkileri ve Fiyat Aralıkları",
          paragraphs: [
            "İki sistem fiyat açısından <strong>birbirine yakın</strong> seyreder. Dikey perde, lamel ve ray bileşenleri nedeniyle metrekare bazında plise perdeyle benzer bir maliyet çıkarır. <em>Plise perde 450-3500 TL</em>, dikey perde ise 400-3000 TL bandında fiyatlanır.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Dikey Perde"],
            rows: [
              ["Standart (tül/güneşlik)", "450-1100 TL", "400-900 TL"],
              ["Karartma", "700-1400 TL", "600-1200 TL"],
              ["Premium", "1200-3500 TL", "1000-3000 TL"],
              ["Motorlu", "1800-3500 TL", "1500-3500 TL"],
              ["Montaj ücreti", "100-300 TL", "150-400 TL"],
            ],
          },
        },
        {
          h2: "Montaj Prosedürü ve Temizlik Adımları",
          paragraphs: [
            "Plise perde montajı <strong>görece basittir</strong> — pencere kasasına vidalı veya yapışkanlı profil takılır, kumaş mekanizmaya yerleştirilir; evde kendi başınıza kurabilirsiniz. Dikey perde ise tavan veya korniş montajı gerektirir, ray sisteminin hizalanması teknik dikkat ister.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — pencere içi profil montajı, evde kurulabilir",
              "Dikey — tavan/korniş montajı, profesyonel önerilir",
              "Plise — pile kumaş nemli bezle silinir",
              "Dikey — her lamel tek tek silmeyi gerektirir",
              "Plise — kumaş profilden çıkarılabilir",
              "Dikey — lameller çıkarılıp tek tek temizlenir",
            ],
          },
        },
        {
          h2: "Görsel Dil ve Mekan Karakteri",
          paragraphs: [
            "Plise perde <strong>yumuşak pile dokusuyla</strong> sıcak ve evcil bir hava katar. Pencere kasası içinde gizli çalıştığı için modern ve sade bir görünüm verir. Dikey perde ise <em>dikey lamelleriyle</em> daha geometrik ve endüstriyel bir karakter taşır; ofis ve ticari mekanlarda yaygın tercih edilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — pile katlı, yumuşak, sıcak doku",
              "Dikey — geometrik lameller, modern-endüstriyel hava",
              "Plise — konut ve ev ortamına uygun",
              "Dikey — ofis, ticari mekan, cam balkona uygun",
              "Plise — pencere içinde gizli, göze çarpmaz",
              "Dikey — pencere önünde belirgin ve etkili",
            ],
          },
        },
        {
          h2: "Doğru Tercih İçin Kriterler",
          paragraphs: [
            "Plise perde <strong>konutlarda esnek aydınlatma ve sade estetik</strong> isteyenler için idealdir. Dikey perde <em>geniş cam yüzeyi, ofis ortamı ve cam balkon</em> ihtiyaçlarında daha doğru bir çözümdür.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — ev, konut, standart pencereler için",
              "Plise — pile estetiği ve yumuşak görünüm için",
              "Plise — üstten/alttan bağımsız açılım için",
              "Plise — kolay montaj, evde kurulum için",
              "Dikey — geniş cam yüzeyi (3m+) için",
              "Dikey — ofis ve ticari mekan için",
              "Dikey — cam balkon ve sürme kapı için",
              "Dikey — lamel açısıyla ışık yönü kontrolü için",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi dikey perde mi daha avantajlı?",
          answer: "Standart konut pencerelerinde esnek aydınlatma ve sade görünüm istiyorsanız plise perde daha avantajlıdır. Geniş cam yüzeyleri, ofis ortamı veya cam balkon için dikey perde daha doğru seçimdir. Plise perde üstten/alttan bağımsız açılım sunarken dikey perde lamel açısıyla ışık yönünü kontrol eder.",
        },
        {
          question: "Dikey perde geniş pencereler için uygun mudur?",
          answer: "Evet. Dikey perde 3 metreyi aşan geniş camlar için en uygun sistemdir. Lamel rayı yana kayarak geniş yüzeyi tamamen açığa çıkarır; sürme cam balkon kapıları ve yüksek tavanlı mekanlar için ideal bir çözümdür.",
        },
        {
          question: "İki sistem arasında fiyat farkı var mı?",
          answer: "Fiyatlar birbirine yakındır. Metrekare bazında plise perde 450-3500 TL, dikey perde 400-3000 TL aralığında fiyatlanır. Standart modellerde dikey perde hafif daha ekonomik olabilir.",
        },
        {
          question: "Işık kontrolü açısından hangisi daha başarılı?",
          answer: "Ihtiyaca göre değişir. Işığın yönünü yönetmek istiyorsanız dikey perdenin lamel dönme açısı daha hassastır. Işık miktarını kademeli ayarlamak ve üstten/alttan bağımsız açmak istiyorsanız plise perde daha esnek bir kullanım sunar.",
        },
        {
          question: "Dikey perde evlerde kullanılabilir mi?",
          answer: "Kullanılabilir ancak daha çok ofis ve ticari mekanlarda tercih edilir. Evde geniş pencere veya cam balkon varsa dikey perde uygun olabilir. Standart ev pencereleri için plise perde hem daha pratik hem de estetik açıdan daha uyumludur.",
        },
      ]}
    />
  );
}
