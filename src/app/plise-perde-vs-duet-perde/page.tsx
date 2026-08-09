import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde vs Düet Perde — Karşılaştırma",
  description:
    "Plise perde ve düet perde farkları: katman yapısı, aydınlatma, fiyat, montaj, temizlik ve dekoratif etki. Doğru seçim için detaylı analiz.",
  slug: "plise-perde-vs-duet-perde",
});

export default function PliseVsDuetPage() {
  return (
    <PageTemplate
      title="Plise Perde vs Düet Perde"
      description="Plise perde ve düet perde karşılaştırması: katman yapısı, aydınlatma çeşitliliği, fiyat performansı, montaj, temizlik ve dekoratif etki."
      slug="plise-perde-vs-duet-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }, { name: "Plise vs Düet", url: "/plise-perde-vs-duet-perde" }]}
      h1="Plise Perde vs Düet Perde — Hangisi Daha İyi?"
      intro="Plise perde ile düet perde, esnek aydınlatma arayanların önündeki iki güçlü alternatiftir; ancak çalışma mantıkları kökten ayrılır. Düet perde (Duette perde olarak da bilinir), tek bir sistem içinde iki farklı kumaşı yan yana getirir — genellikle bir tarafta tül veya güneşlik, diğer tarafta blackout. Böylece gündüz ve gece ihtiyacını tek perdede çözer. Plise perde ise yalnızca tek kumaş katmanını pile yaparak çalışır ve daha sade bir mekanizmaya sahiptir. Bu yazıda katman yapısı, aydınlatma çeşitliliği, fiyat performansı, montaj detayları, temizlik gereksinimleri ve dekoratif etki başlıklarını ele alacağız."
      schemaType="article"
      schemaData={{
        headline: "Plise Perde vs Düet Perde Karşılaştırması",
        description: "Plise perde ve düet perde karşılaştırması — katman yapısı, aydınlatma çeşitliliği, fiyat performansı, montaj ve temizlik.",
      }}
      beforeContent={
        <img
          src="/karsilastirmalar/plise-perde-vs-duet-perde.webp"
          alt="Plise Perde vs Düet Perde Karşılaştırması"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={630}
        />
      }
      sections={[
        {
          h2: "Katman Sayısı ve İşleyiş Biçimi",
          paragraphs: [
            "Plise perde, <strong>tek bir kumaş katmanını</strong> ip mekanizmasıyla dikey eksende hareket ettirir. Pile katlı yapısı sayesinde kumaş akordiyon gibi katlanır ve yalnızca bir kumaş türü kullanılır — tül, güneşlik, yarı karartma veya blackout.",
            "Düet perde ise <strong>iki farklı kumaşı tek profil içinde bir araya getirir</strong>. Üst bölgede tül veya güneşlik, alt bölgede blackout kumaş yer alır. Perdeyi hangi konuma çektiğinize bağlı olarak <u>aydınlık, yarı aydınlık ve tam karanlık</u> olmak üzere üç farklı mod elde edersiniz.",
          ],
          table: {
            headers: ["Özellik", "Plise Perde", "Düet Perde"],
            rows: [
              ["Kumaş katmanı", "Tek katman", "Çift katman (tül + blackout)"],
              ["Aydınlatma modu", "Tek seviye", "Gece ve gündüz (iki mod)"],
              ["Açılım ekseni", "Üstten + alttan", "Üstten + alttan"],
              ["Karartma", "Blackout kumaş ile", "Blackout katmanı ile"],
              ["Gündüz ışık", "Tül kumaş ile", "Tül katmanı ile"],
              ["Profil kalınlığı", "İnce", "Daha kalın (çift kumaş)"],
            ],
          },
        },
        {
          h2: "Aydınlatma Çeşitliliği ve Kullanım Rahatlığı",
          paragraphs: [
            "Düet perde, <strong>gece ve gündüz modlarını tek üründe</strong> birleştirerek en geniş aydınlatma esnekliğini sunar. Gündüz tül katmanını öne çekerek maksimum ışık alır, gece blackout katmanını indirerek tam karanlık yaratırsınız; ayrı tül ve karartma perdesi almaya gerek kalmaz.",
            "Plise perde ise tek kumaş türüyle çalışır. Blackout seçerseniz gündüz ışıktan feragat edersiniz, tül seçerseniz gece tam karanlık elde edemezsiniz. <em>Düet perde bu ikisini tek sistemde çözer</em>; ancak mekanizması daha fazla bileşen içerdiği için arıza riski bir miktar daha yüksektir.",
          ],
          list: {
            type: "ul",
            items: [
              "Düet — gece (blackout) ve gündüz (tül) tek perdede",
              "Plise — tek kumaş, tek aydınlatma seviyesi",
              "Düet — ara konumda yarı aydınlık mod mümkün",
              "Plise — blackout seçilirse gündüz ışık azalır",
              "Düet — ayrı tül ve karartma perdesi gerektirmez",
              "Plise — daha az bileşen, daha düşük arıza riski",
            ],
          },
        },
        {
          h2: "Fiyat Performans Analizi",
          paragraphs: [
            "Plise perde <strong>bütçe açısından daha erişililirdir</strong>. Düet perde, iki farklı kumaşı tek profil içinde birleştirdiği için üretim maliyeti yüksektir. <em>Metrekare bazında plise perde 450-3500 TL</em>, düet perde ise 900-5000 TL aralığında fiyatlanır.",
          ],
          table: {
            headers: ["Model", "Plise Perde", "Düet Perde"],
            rows: [
              ["Standart (tül)", "450-1100 TL", "—"],
              ["Gece/gündüz", "—", "900-2000 TL"],
              ["Karartma", "700-1400 TL", "—"],
              ["Premium gece/gündüz", "—", "1500-3500 TL"],
              ["Motorlu", "1800-3500 TL", "2500-5000 TL"],
              ["Montaj ücreti", "100-300 TL", "150-350 TL"],
            ],
          },
        },
        {
          h2: "Montaj Detayları ve Temizlik Gereksinimleri",
          paragraphs: [
            "Montaj yöntemi açısından <strong>iki sistem de benzer</strong> — vidalı, yapışkanlı ve kancalı montaj tipleri her ikisinde de mevcuttur. Düet perde, çift kumaş katmanı nedeniyle profili daha geniştir ve pencere kasasında daha fazla derinlik ister.",
          ],
          list: {
            type: "ol",
            items: [
              "Plise — tek kumaş, nemli bezle silinir",
              "Düet — çift kumaş, katman araları temizliği zordur",
              "Plise — ince profil, pencerede az yer kaplar",
              "Düet — kalın profil, yeterli kasa derinliği gerekir",
              "Plise — kumaş çıkarılması kolaydır",
              "Düet — kumaş çıkarılması daha fazla adım ister",
            ],
          },
        },
        {
          h2: "Görüntü Profili ve Dekoratif Etki",
          paragraphs: [
            "Plise perde <strong>ince ve hafif</strong> bir görüntü verir. Tek kumaş katmanı pencere kasası içinde neredeyse kaybolur ve minimal bir etki yaratır. Düet perde ise iki katmanlı yapısıyla daha dolu durur; ancak <em>tül ve blackout kumaşların kontrastı</em> pencereye dekoratif bir derinlik katabilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — ince, hafif, minimal etki",
              "Düet — dolu, katmanlı görünüm",
              "Plise — tek renk ve tek doku",
              "Düet — iki farklı kumaş rengi ve dokusu kombinasyonu",
              "Plise — küçük pencerelerde uyumlu",
              "Düet — geniş pencerelerde görsel etki güçlü",
            ],
          },
        },
        {
          h2: "Karar Aşamasında Dikkat Edilecekler",
          paragraphs: [
            "Plise perde <strong>ekonomik fiyat ve ince profil</strong> isteyenler için mantıklıdır. Düet perde (Duette perde) <em>hem gece hem gündüz ihtiyacını tek perdede</em> çözmek isteyenler için en doğru yatırımdır.",
          ],
          list: {
            type: "ul",
            items: [
              "Plise — bütçe öncelikliyse",
              "Plise — ince ve hafif görünüm isteniyorsa",
              "Plise — tek aydınlatma seviyesi yeterliyse",
              "Plise — küçük pencere ölçülerinde",
              "Düet — gece ve gündüz tek perdede isteniyorsa",
              "Düet — ayrı tül ve karartma almaktan kaçınılıyorsa",
              "Düet — esnek aydınlatma öncelikliyse",
              "Düet — geniş pencere yüzeylerinde",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde mi düet perde mi daha avantajlı?",
          answer: "Hem gece hem gündüz ihtiyacını tek perdede çözmek istiyorsanız düet perde (Duette perde) daha avantajlıdır. Ekonomik fiyat ve ince görünüm öncelikliyse plise perde daha uygundur. Düet perde, ayrı tül ve karartma perdesi almayı ortadan kaldırır.",
        },
        {
          question: "Düet perde nedir ve nasıl çalışır?",
          answer: "Düet perde (Duette perde), tek profil içinde iki farklı kumaşı birleştiren sistemdir. Üst bölgede tül veya güneşlik, alt bölgede blackout kumaş bulunur. Perdeyi çektiğiniz konuma göre gündüz modu (tül), gece modu (blackout) veya yarı aydınlık mod elde edersiniz.",
        },
        {
          question: "İki sistem arasında maliyet farkı ne kadar?",
          answer: "Plise perde genelde daha ekonomiktir. Metrekare bazında plise perde 450-3500 TL, düet perde 900-5000 TL aralığında fiyatlanır. Düet perde, iki kumaşı tek sistemde birleştirdiği için maliyeti daha yüksektir.",
        },
        {
          question: "Düet perde tam karartma yapabilir mi?",
          answer: "Evet. Düet perdenin blackout katmanı tam karartma sağlar; gece moduna geçtiğinizde blackout kumaş pencereyi örter ve ışığın yaklaşık %99'unu keser. Gündüz modunda ise tül katmanıyla maksimum ışık alırsınız.",
        },
        {
          question: "Temizlik açısından hangisi daha pratik?",
          answer: "Plise perde daha pratiktir. Tek kumaş katmanı nemli bezle silinerek temizlenir. Düet perdede ise iki kumaş katmanı ve aralarındaki boşluk temizliği daha fazla efor gerektirir.",
        },
      ]}
    />
  );
}
