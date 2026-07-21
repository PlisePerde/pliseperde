import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Kullanım Alanları — Ev, Ofis, Ticari ve Kurumsal",
  description:
    "Plise perde kullanım alanları: mutfak, salon, yatak odası, ofis, otel, kafe, hastane, okul, karavan, tekne. Her mekan için özel plise perde çözümleri. 2 yıl garanti.",
  slug: "plise-perde-kullanim-alanlari",
});

export default function PlisePerdeKullanimAlanlariPage() {
  return (
    <PageTemplate
      title="Plise Perde Kullanım Alanları"
      description="Plise perde kullanım alanları: ev, ofis, ticari, kurumsal, mobil. Her mekan için uygun plise perde çözümleri."
      slug="plise-perde-kullanim-alanlari"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }]}
      h1="Plise Perde Kullanım Alanları"
      intro="Plise perde, pencere içinde montaj yapılması ve az yer kaplaması sayesinde <strong>her mekan tipine</strong> uygundur. Evlerden ofislere, otellerden hastanelere, karavanlardan yatlara kadar geniş bir kullanım yelpazesi sunar. Aşağıda kullanım alanlarını kategorilere göre inceleyebilir, ilgilendiğiniz mekan için detaylı sayfaya ulaşabilirsiniz."
      schemaType="collectionpage"
      schemaData={{
        name: "Plise Perde Kullanım Alanları",
        description: "Plise perde kullanım alanları: ev, ofis, ticari, kurumsal ve mobil yaşam.",
        url: "/plise-perde-kullanim-alanlari",
        items: [
          "/mutfak-plise-perde/",
          "/salon-plise-perde/",
          "/yatak-odasi-plise-perde/",
          "/cocuk-odasi-plise-perde/",
          "/calisma-odasi-plise-perde/",
          "/banyo-wc-plise-perde/",
          "/genc-odasi-plise-perde/",
          "/cam-balkon-plise-perde/",
          "/magaza-plise-perde/",
          "/ofis-plise-perde/",
          "/karavan-plise-perde/",
          "/villa-plise-perde/",
          "/tekne-plise-perde/",
          "/kafe-restoran-plise-perde/",
          "/otel-plise-perde/",
          "/hastane-plise-perde/",
          "/klinik-plise-perde/",
          "/spor-salonu-plise-perde/",
          "/anaokulu-plise-perde/",
          "/laboratuvar-plise-perde/",
          "/prefabrik-ev-plise-perde/",
        ],
      }}
      sections={[
        {
          h2: "Ev Kullanımı",
          paragraphs: [
            "Plise perde, <strong>ev kullanımı</strong> için en pratik perde sistemidir. Pencere içinde montaj ile yer kaplamaz, her oda tipine uygulanır. Mutfaktan salona, yatak odasından banyoya kadar evin her köşesinde farklı ihtiyaçlara çözüm sunar.",
          ],
          html: `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            <a href="/mutfak-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Mutfak</h3>
              <p class="text-xs text-brand-text-light">Nem dayanımlı kumaş, pencere içi montaj ile tezgaha engel olmaz.</p>
            </a>
            <a href="/salon-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Salon</h3>
              <p class="text-xs text-brand-text-light">Geniş pencere için güneşlik, ışık ve gizlilik dengesi.</p>
            </a>
            <a href="/yatak-odasi-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Yatak Odası</h3>
              <p class="text-xs text-brand-text-light">Tam karartma ile kesintisiz uyku, pencere içinde yer kaplamaz.</p>
            </a>
            <a href="/cocuk-odasi-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Çocuk Odası</h3>
              <p class="text-xs text-brand-text-light">Çocuk güvenliği, ip mekanizması yok, soft ışık.</p>
            </a>
            <a href="/genc-odasi-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Genç Odası</h3>
              <p class="text-xs text-brand-text-light">Modern tasarım, renk seçenekleri, çalışma ve dinlenme dengesi.</p>
            </a>
            <a href="/calisma-odasi-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Çalışma Odası</h3>
              <p class="text-xs text-brand-text-light">Ekran parlaması önleme, güneşlik kumaş ile odaklanma.</p>
            </a>
            <a href="/banyo-wc-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Banyo ve WC</h3>
              <p class="text-xs text-brand-text-light">Nem dayanımlı, tam gizlilik, pencere içinde kompakt çözüm.</p>
            </a>
          </div>`,
        },
        {
          h2: "Özel Yaşam Alanları",
          paragraphs: [
            "<strong>Özel yaşam alanları</strong>, standart ev pencerelerinden farklı ihtiyaçlar gerektirir. Cam balkonlarda geniş cam yüzeyler, villalarda ise yüksek ve farklı boyutlu pencereler için özel çözümler sunulur.",
          ],
          html: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <a href="/cam-balkon-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Cam Balkon</h3>
              <p class="text-xs text-brand-text-light">Geniş cam yüzeyler için katlanır sistem, rüzgar ve güneş kontrolü.</p>
            </a>
            <a href="/villa-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Villa</h3>
              <p class="text-xs text-brand-text-light">Yüksek pencere, çatı penceresi, motorlu seçenekler ile prestijli çözüm.</p>
            </a>
          </div>`,
        },
        {
          h2: "Mobil ve Alternatif Yaşam",
          paragraphs: [
            "<strong>Mobil yaşam alanları</strong> dar pencere ve özel montaj gerektirir. Karavan, tekne ve prefabrik evlerde standart perde sistemleri uymaz — plise perde, pencere içinde montaj ve az yer kaplama özelliği ile bu alanlar için idealdir.",
          ],
          html: `
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <a href="/karavan-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Karavan</h3>
              <p class="text-xs text-brand-text-light">Dar pencere, hafif kumaş, yapışkanlı montaj, sarsıntı dayanımı.</p>
            </a>
            <a href="/tekne-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Tekne / Yat</h3>
              <p class="text-xs text-brand-text-light">Tuzlu su dayanımı, eğimli pencere, rüzgar direnci, özel ölçü.</p>
            </a>
            <a href="/prefabrik-ev-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Prefabrik Ev</h3>
              <p class="text-xs text-brand-text-light">Hafif yapı, yapışkanlı montaj, ısı yalıtımı ile honeycomb.</p>
            </a>
          </div>`,
        },
        {
          h2: "Ticari Kullanım",
          paragraphs: [
            "<strong>Ticari mekanlarda</strong> plise perde; profesyonel görünüm, ürün koruma ve enerji tasarrufu sağlar. Ofislerden mağazalara, kafelerden otellere kadar geniş yelpazede kullanılır.",
          ],
          html: `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            <a href="/ofis-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Ofis</h3>
              <p class="text-xs text-brand-text-light">Ekran parlaması önleme, profesyonel görünüm, toplantı odası karartma.</p>
            </a>
            <a href="/magaza-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Mağaza</h3>
              <p class="text-xs text-brand-text-light">Vitrin UV koruma, ürün renk koruması, motorlu vitrin kontrolü.</p>
            </a>
            <a href="/kafe-restoran-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Kafe ve Restoran</h3>
              <p class="text-xs text-brand-text-light">Atmosfer kontrolü, dış mekan oturma alanısı, dekoratif seçenekler.</p>
            </a>
            <a href="/otel-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Otel</h3>
              <p class="text-xs text-brand-text-light">Misafir konforu, blackout, motorlu, toplu proje çözümleri.</p>
            </a>
            <a href="/spor-salonu-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Spor Salonu</h3>
              <p class="text-xs text-brand-text-light">Nem dayanımlı, hafif, geniş pencere için motorlu seçenek.</p>
            </a>
          </div>`,
        },
        {
          h2: "Kurumsal Kullanım",
          paragraphs: [
            "<strong>Kurumsal mekanlarda</strong> dayanıklılık, hijyen ve kolay bakım önceliklidir. Hastane, klinik, anaokulu ve laboratuvar gibi mekanlarda özel kumaş seçenekleri ile uzun ömürlü çözümler sunulur.",
          ],
          html: `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            <a href="/hastane-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Hastane</h3>
              <p class="text-xs text-brand-text-light">Anti-bakteriyel kumaş, hijyenik, kolay silme, tam karartma.</p>
            </a>
            <a href="/klinik-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Klinik</h3>
              <p class="text-xs text-brand-text-light">Muayene odası gizlilik, bekleme alanı ışık kontrolü, hijyenik.</p>
            </a>
            <a href="/anaokulu-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Anaokulu</h3>
              <p class="text-xs text-brand-text-light">Çocuk güvenliği, ip mekanizması yok, renkli ve eğlenceli.</p>
            </a>
            <a href="/laboratuvar-plise-perde/" class="block border border-brand-border rounded-lg p-4 hover:border-brand hover:shadow-md transition-all">
              <h3 class="text-sm font-semibold text-brand-text mb-1">Laboratuvar</h3>
              <p class="text-xs text-brand-text-light">Kimyasal dayanımlı kumaş, toz geçirmez, hassas ışık kontrolü.</p>
            </a>
          </div>`,
        },
        {
          h2: "Mekan Tipine Göre Kumaş Önerileri",
          paragraphs: [
            "Her mekan tipi farklı ışık, gizlilik ve dayanıklılık ihtiyacı gerektirir. Aşağıdaki tablo <strong>mekan tipine göre önerilen kumaş tiplerini</strong> gösterir:",
          ],
          table: {
            headers: ["Mekan Tipi", "Önerilen Kumaş", "Öncelikli İhtiyaç", "Montaj Tipi"],
            rows: [
              ["Mutfak", "Tül / Güneşlik", "Nem dayanımı + ışık", "Yapışkanlı / vidalı"],
              ["Salon", "Güneşlik / Düet", "Işık + gizlilik dengesi", "Vidalı"],
              ["Yatak odası", "Tam karartma", "Tam karanlık uyku", "Vidalı"],
              ["Çocuk odası", "Yarı karartma", "Güvenlik + soft ışık", "Vidalı"],
              ["Banyo/WC", "Tam karartma", "Gizlilik + nem dayanımı", "Yapışkanlı"],
              ["Ofis", "Güneşlik", "Ekran parlaması önleme", "Vidalı"],
              ["Otel", "Blackout + motorlu", "Misafir konforu", "Vidalı / motorlu"],
              ["Hastane", "Anti-bakteriyel karartma", "Hijyen + gizlilik", "Vidalı"],
              ["Karavan", "Tül / güneşlik", "Hafif + yapışkanlı", "Yapışkanlı"],
              ["Tekne", "Güneşlik / karartma", "Tuzlu su dayanımı", "Vidalı özel"],
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde hangi mekanlarda kullanılır?",
          answer: "Ev (mutfak, salon, yatak odası, çocuk odası, banyo), ticari (ofis, mağaza, kafe, otel), kurumsal (hastane, klinik, okul, laboratuvar) ve mobil yaşam (karavan, tekne, prefabrik ev) alanlarında kullanılır. Pencere içinde montaj ve az yer kaplama özelliği her mekan tipine uygun kılar.",
        },
        {
          question: "Mutfak için plise perde uygun mu?",
          answer: "Evet, mutfak için nem dayanımlı tül veya güneşlik plise perde önerilir. Pencere içinde montaj ile mutfak tezgahına engel olmaz. Detay için /mutfak-plise-perde/ sayfasını inceleyin.",
        },
        {
          question: "Banyo için plise perde kullanılır mı?",
          answer: "Evet, tam karartma plise perde banyo için uygundur. Nem dayanımlı kumaş seçilmelidir. Pencere içinde montaj ile gizlilik sağlar. Detay için /banyo-wc-plise-perde/ sayfasını inceleyin.",
        },
        {
          question: "Karavan ve tekne için plise perde takılır mı?",
          answer: "Evet, karavan ve tekne pencereleri için özel ölçü plise perde üretilir. Yapışkanlı montaj ile delmeden takılır, hafif kumaş ile ağırlık eklemez. Detay için /karavan-plise-perde/ ve /tekne-plise-perde/ sayfalarını inceleyin.",
        },
        {
          question: "Ofis için hangi plise perde önerilir?",
          answer: "Ofis için güneşlik plise perde önerilir. Ekran parlamasını önler, profesyonel görünüm sağlar. Toplantı odası için karartma modeli eklenebilir. Detay için /ofis-plise-perde/ sayfasını inceleyin.",
        },
      ]}
    />
  );
}
