import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Özellikleri — Isı Yalıtımı, UV Koruma, Antibakteriyel",
  description:
    "Plise perde özellikleri: ısı yalıtımlı, enerji tasarruflu, UV korumalı, güneş kırıcı, ışık kontrollü, nem dayanımlı, kolay temizlenebilir, alev geciktirici, antibakteriyel.",
  slug: "plise-perde-ozellikleri",
});

export default function PlisePerdeOzellikleriPage() {
  return (
    <PageTemplate
      title="Plise Perde Özellikleri"
      description="Plise perde özellikleri: ısı yalıtımı, enerji tasarrufu, UV koruma, güneş kırma, ışık kontrolü, nem dayanımı, temizlik, alev geciktirici, antibakteriyel."
      slug="plise-perde-ozellikleri"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Özellikler", url: "/plise-perde-ozellikleri" }]}
      h1="Plise Perde Özellikleri"
      intro="Plise perde, sadece bir perde değil; pencere ile mekan arasında <strong>çok katmanlı bir bariyer</strong> oluşturan teknik bir sistemdir. Isı yalıtımından UV korumaya, nem dayanımından antibakteriyel kumaşa kadar 9 temel özellik, plise perdeyi diğer perde sistemlerinden ayırır. Bu sayfada her özelliği detaylı inceleyebilir, ihtiyacınıza uygun kumaş ve modeli seçebilirsiniz."
      schemaType="webpage"
      schemaData={{
        name: "Plise Perde Özellikleri",
        description: "Plise perde 9 temel teknik ve fonksiyonel özelliği.",
      }}
      sections={[
        {
          h2: "Isı Yalıtımlı Plise Perde",
          paragraphs: [
            "Honeycomb (petek) yapılı plise perde, <strong>ısı yalıtımı sağlayan tek perde sistemidir</strong>. Petek hücrelerin içinde sıkışan hava tabakası, pencere ile oda arasında doğal bir yalıtım bariyeri oluşturur.",
            "Kışın camdan olan ısı kaybını <strong>%30-40 azaltır</strong>, yazın dışarıdan gelen ısı girişini engeller. Honeycomb kumaşın hücre yapısı ne kadar genişse yalıtım performansı o kadar yüksektir. Çift petekli (double cell) modeller ise yalıtımı %45'e çıkarır.",
          ],
          table: {
            headers: ["Kumaş Tipi", "Isı Kaybı Azaltma", "Önerilen Mevsim", "Önerilen Oda"],
            rows: [
              ["Tek petek honeycomb", "%30-35", "Tüm yıl", "Salon, yatak odası"],
              ["Çift petek honeycomb", "%40-45", "Tüm yıl", "Çatı katı, villa"],
              ["Honeycomb karartma", "%30-35 + karanlık", "Tüm yıl", "Yatak odası"],
              ["Standart plise (petek yok)", "%5-10", "Yaz", "Mutfak, banyo"],
            ],
          },
        },
        {
          h2: "Enerji Tasarruflu Plise Perde",
          paragraphs: [
            "Isı yalıtımlı honeycomb plise perde, <strong>yıllık %15-20 enerji tasarrufu</strong> sağlar. Kışın kalorifer/klima faturasını düşürür, yazın klima yükünü azaltır.",
            "Bir evde 3-4 pencereye honeycomb plise perde takıldığında, yıllık ortalama 3.000-5.000 TL enerji tasarrufu sağlanır. Perde maliyeti <strong>2-3 yılda amorti olur</strong>, sonrası tamamen kazançtır.",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Kışın</strong> — camdan ısı kaybını azaltır, kalorifer daha az çalışır",
              "<strong>Yazın</strong> — güneş ısısını bloke eder, klima daha az çalışır",
              "<strong>Gece</strong> — soğuk hava sızmasını engeller, oda sıcak kalır",
              "<strong>Gündüz</strong> — güneşlik kumaş ışığı filtreler, yapay aydınlatma azalır",
              "<strong>Yıllık tasarruf</strong> — 3-4 pencerede 3.000-5.000 TL",
              "<strong>Amorti süresi</strong> — 2-3 yıl içinde perde maliyeti çıkar",
            ],
          },
        },
        {
          h2: "UV Korumalı Plise Perde",
          paragraphs: [
            "Güneş UV ışınları, mobilya, zemin, halı, kumaş ve sanat eserlerinin <strong>rengini solmasına</strong> neden olur. Plise perde kumaşında UV koruma kaplaması bulunur.",
            "UV korumalı kumaş, güneş UV ışınlarının <strong>%95-99'unu filtreler</strong>. Bu sayede salon mobilyası, ahşap zemin, halı ve perdeler güneşten korunur. Özellikle güney ve batı cepheli evlerde UV koruma kritiktir.",
          ],
          table: {
            headers: ["Kumaş Tipi", "UV Filtreleme", "Renk Koruma", "Önerilen"],
            rows: [
              ["Güneşlik + UV kaplama", "%95-99", "Mükemmel", "Salon, oturma odası"],
              ["Tam karartma + UV", "%99", "Mükemmel", "Yatak odası, müze"],
              ["Honeycomb + UV", "%95-98", "Mükemmel", "Çatı katı, vitrin"],
              ["Tül (UV'siz)", "%20-30", "Düşük", "Az güneş alan pencere"],
            ],
          },
        },
        {
          h2: "Güneş Kırıcı Plise Perde",
          paragraphs: [
            "Güneş kırıcı (güneşlik) kumaş, güneş ışığını <strong>kırarak filtreler</strong> — odayı tamamen karartmadan aşırı parlama ve ısıyı engeller.",
            "Güneşlik kumaşın mikro gözenekli yapısı, ışığın bir kısmını geçirirken bir kısmını yansıtır. Bu sayede oda <strong>aydınlık kalır ama güneş gözü almaz</strong>. Televizyon parlaması, ekran yansıması ve mobilya ısınması önlenir.",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Işık geçirgenliği %30-50</strong> — oda aydınlık, güneş filtreli",
              "<strong>Parlama önleme</strong> — TV ve monitör ekranında yansıma yok",
              "<strong>Isı azaltma</strong> — güneş ısısını %40-50 azaltır",
              "<strong>Manzara korunumu</strong> — dışarısı görünür, güneş engellenir",
              "<strong>Göz konforu</strong> — yumuşak ışık, göz yorgunluğu azalır",
            ],
          },
        },
        {
          h2: "Işık Kontrollü Plise Perde",
          paragraphs: [
            "Plise perde, <strong>kademeli ışık kontrolü</strong> sağlayan en esnek perde sistemidir. Üstten aşağı, aşağıdan yukarı veya tamamen açma ile ışık miktarını istediğiniz gibi ayarlarsınız.",
            "Kumaş tipine göre %0-90 ışık geçirgenliği seçilebilir. Açılım tipi ile günün saatine ve güneş açısına göre ışık yönlendirme yapılır.",
          ],
          table: {
            headers: ["Açılım Tipi", "Işık Kontrolü", "Kullanım", "Önerilen"],
            rows: [
              ["Aşağıdan yukarı", "Alt kapalı, üst açık", "Güneş gözü almasın, alt gizli", "Salon, çalışma odası"],
              ["Yukarıdan aşağı", "Üst kapalı, alt açık", "Masaüstü ışık, üst güneş engelli", "Mutfak, ofis"],
              ["Tam açma", "Tamamen açık", "Maksimum ışık", "Bulutlu hava"],
              ["Tam kapatma", "Tamamen kapalı", "Tam karanlık / gizlilik", "Yatak odası, sunum"],
              ["Ortadan açılım", "Üst ve alt açık, orta kapalı", "Esnek kontrol", "Genel kullanım"],
            ],
          },
        },
        {
          h2: "Nem Dayanımlı Plise Perde",
          paragraphs: [
            "Plise perde kumaşı <strong>poliester bazlı</strong>dır, nem emmez. Bu özellik banyo, mutfak, spor salonu ve deniz araçları için kritiktir.",
            "Standart pamuklu perde kumaşları nem emer, küflenir ve deformasyon geçirir. Plise perde kumaşı ise nem ile temas ettiğinde <strong>küflenmez, şekil bozukluğu olmaz ve koku tutmaz</strong>. Nemli bezle silme ile temizlenir.",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Poliester kumaş</strong> — nem emmez, küflenmez",
              "<strong>Banyo</strong> — duş buharından etkilenmez",
              "<strong>Mutfak</strong> — yemek buharı ve yağdan etkilenmez",
              "<strong>Spor salonu</strong> — ter buharına dayanıklı",
              "<strong>Tekne/yat</strong> — deniz nemi ve tuzlu suya dayanım",
              "<strong>Kolay silme</strong> — nemli bez ile temizlik",
            ],
          },
        },
        {
          h2: "Kolay Temizlenebilir Plise Perde",
          paragraphs: [
            "Plise perde kumaşı <strong>düz ve pürüzsüz yüzeye</strong> sahiptir. Toz, kir ve leke tutmaz. Nemli bezle silme yeterlidir — yıkmaya gerek yoktur.",
            "Klasik tül ve stor perdeler yıkanmalı veya kuru temizlemeye gönderilmelidir. Plise perde ise <strong>yerinde temizlik</strong> ile bakım yapılır. Bu özellik hem zaman kazandırır hem de temizlik maliyetini sıfıra indirir.",
          ],
          table: {
            headers: ["Kir Tipi", "Temizlik Yöntemi", "Süre", "Yıkama Gerekli mi?"],
            rows: [
              ["Toz", "Kuru bez veya fırça", "30 saniye", "Hayır"],
              ["El izi", "Nemli bez", "1 dakika", "Hayır"],
              ["Yemek lekesi", "Sabunlu su + bez", "2 dakika", "Hayır"],
              ["Boya lekesi", "Nemli bez + sabun", "2-3 dakika", "Hayır"],
              ["Küçük yırtılma", "Yedek kumaş değişimi", "10 dakika", "Hayır"],
            ],
          },
        },
        {
          h2: "Alev Geciktirici Plise Perde",
          paragraphs: [
            "Plise perde kumaşı, <strong>alev geciktirici özellikte</strong> üretilir. Kumaş alev kaynağı ile temas ettiğinde kendiliğinden söner, alev yayılmaz.",
            "Bu özellik, özellikle <strong>çocuk odası, anaokulu, hastane ve otel</strong> gibi yangın güvenliği kritik olan mekanlarda zorunludur. Plise perde kumaşı, Avrupa yangın güvenliği standardı EN 13501-1'e uygun olarak üretilir.",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Kendiliğinden sönme</strong> — alev kaynağı çekilince kumaş söner",
              "<strong>Alev yayılmaz</strong> — yangın kumaş üzerinden ilerlemez",
              "<strong>Duman az</strong> — yanma durumunda az duman üretir",
              "<strong>Zehirli gaz yok</strong> — kumaş yanarken zehirli gaz çıkarmaz",
              "<strong>Standart uyum</strong> — EN 13501-1 yangın güvenliği standardı",
              "<strong>Kritik alanlar</strong> — çocuk odası, hastane, otel, okul",
            ],
          },
        },
        {
          h2: "Antibakteriyel Plise Perde",
          paragraphs: [
            "Antibakteriyel kumaş, yüzeyinde <strong>bakteri üremesini engelleyen</strong> gümüş iyon kaplaması içerir. Bakteriler kumaş yüzeyinde yaşayamaz ve çoğalamaz.",
            "Bu özellik, <strong>hastane, klinik, laboratuvar, anaokulu ve banyo</strong> gibi hijyenin kritik olduğu mekanlar için idealdir. Standart perde kumaşları bakteri üretir, plise perde antibakteriyel kumaş ise bunu sıfıra indirir.",
          ],
          table: {
            headers: ["Özellik", "Standart Kumaş", "Antibakteriyel Kumaş", "Fark"],
            rows: [
              ["Bakteri üremesi", "Var", "Yok", "%100 azalma"],
              ["Küf oluşumu", "Nemli ortamda var", "Yok", "Tam engelleme"],
              ["Koku tutma", "Var", "Yok", "Koku yok"],
              ["Dezenfektan dayanım", "Düşük", "Yüksek", "Sık silmeye dayanıklı"],
              ["Önerilen alan", "Ev", "Hastane, klinik, okul", "Hijyenik ortam"],
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde ısı yalıtımı yapar mı?",
          answer: "Honeycomb (petek) yapılı plise perde ısı yalıtımı sağlar. Petek hücrelerdeki hava tabakası ısı transferini %30-40 azaltır. Çift petekli modeller %45'e çıkarır. Standart plise perde yalıtım sağlamaz.",
        },
        {
          question: "Plise perde enerji tasarrufu sağlar mı?",
          answer: "Evet, honeycomb model yıllık %15-20 enerji tasarrufu sağlar. 3-4 pencerede yıllık 3.000-5.000 TL tasarruf. Perde maliyeti 2-3 yılda amorti olur.",
        },
        {
          question: "Plise perde UV koruması var mı?",
          answer: "Evet, kumaşta UV koruma kaplaması bulunur. Güneş UV ışınlarının %95-99'unu filtreler. Mobilya, zemin ve halı renk solmasını önler. Güney ve batı cepheli evlerde kritiktir.",
        },
        {
          question: "Plise perde nemli ortamda küflenir mi?",
          answer: "Hayır, poliester bazlı kumaş nem emmez. Banyo, mutfak ve spor salonunda küflenmez, şekil bozukluğu olmaz. Nemli bezle silinerek temizlenir.",
        },
        {
          question: "Plise perde yangın güvenliği uygun mu?",
          answer: "Evet, kumaş alev geciktirici özelliktedir. Alev kaynağı çekilince kendiliğinden söner, alev yayılmaz. EN 13501-1 standardına uygun. Çocuk odası, hastane ve otel için uygundur.",
        },
        {
          question: "Antibakteriyel plise perde nedir?",
          answer: "Antibakteriyel kumaş, gümüş iyon kaplaması ile bakteri üremesini engeller. Hastane, klinik, laboratuvar ve anaokulu için hijyenik çözümdür. Dezenfektan ile sık silmeye dayanıklıdır.",
        },
      ]}
    />
  );
}
