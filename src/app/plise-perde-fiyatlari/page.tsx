import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Fiyatları 2026 — m² KDV Dahil Güncel Liste",
  description:
    "Plise perde fiyatları 2026: Diamond, Tulle, Blackout, Honeycomb ve 13 kumaş modeli. m² fiyat tablosu, vidalı montaj ücretsiz, KDV dahil, 2 yıl garanti.",
  slug: "plise-perde-fiyatlari",
});

export default function PlisePerdeFiyatlariPage() {
  return (
    <PageTemplate
      title="Plise Perde Fiyatları 2026"
      description="Plise perde fiyatları 2026: Diamond, Tulle, Blackout, Honeycomb ve 13 kumaş modeli. Metrekare fiyat, vidalı montaj ücretsiz, KDV dahil, 2 yıl garanti."
      slug="plise-perde-fiyatlari"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Fiyatlarımız", url: "/plise-perde-fiyatlari/" }]}
      h1="Plise Perde Fiyatları 2026"
      intro="Plise perde fiyatları; kumaş tipine, pencere ölçüsüne, montaj tipine ve ek özelliklere göre değişir. Bu sayfada <strong>2026 yılı güncel m² fiyatlarını</strong> bulabilirsiniz. Tüm fiyatlar <strong>KDV dahil ve 2 yıl garanti</strong> ile gelir. Vidalı montaj ücretsizdir, diğer montaj tipleri ₺280/adet eklenir. Net fiyat için online fiyat hesaplama aracımızı kullanabilir veya ücretsiz keşif talep edebilirsiniz. Üretici olarak doğrudan tüketiciye hizmet veriyoruz — ara katman maliyeti yok."
      highlight="Üretici fiyatı · Vidalı montaj ücretsiz · KDV dahil · 2 yıl garanti · Türkiye geneli ücretsiz keşif"
      schemaType="product"
      schemaData={{
        name: "Plise Perde",
        description: "Tül, güneşlik, karartma, honeycomb, düet, motorlu plise perde çeşitleri. Montaj dahil, KDV dahil, 2 yıl garanti.",
        lowPrice: "1042.80",
        highPrice: "2640.00",
        ratingValue: "4.8",
        reviewCount: "127",
      }}
      sections={[
        {
          h2: "Plise Perde Fiyat Kartları — Kumaş Tipine Göre",
          paragraphs: [
            "Her kumaş tipi farklı <strong>işçilik, malzeme kalitesi ve fonksiyon</strong> gerektirir. Aşağıda her model için net m² fiyatı, özellikler ve tipik kullanım alanı yer alır. Tüm fiyatlar <strong>metrekare (m²) bazında, KDV dahil</strong> olarak belirtilmiştir. Montaj vidalı sistemde ücretsizdir, diğer montaj tipleri ₺280/adet eklenir.",
          ],
          html: `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Diamond</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">En Ekonomik</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺1.042,80</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Standart plise kumaş. Oturma odası, mutfak, salon için ideal. İyi ışık geçirgenliği.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Standart</li>
                <li>Işık: %60-80</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Tulle</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Tül</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺1.161,60</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Yüksek ışık geçirgenliği (%70-90). Oturma odası, mutfak için ideal.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Tül</li>
                <li>Işık: %70-90</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Valeria</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Standart</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺1.174,80</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Valeria kumaş. İyi ışık geçirgenliği, ekonomik fiyat.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Standart</li>
                <li>Işık: %60-80</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Elegant</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Popüler</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺1.372,80</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Şık kumaş seçeneği. Salon, çalışma odası için ideal.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Standart</li>
                <li>Işık: %40-60</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Spark</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Popüler</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺1.372,80</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Spark kumaş. İyi fiyat/performans oranı.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Standart</li>
                <li>Işık: %40-60</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Linen Tülle</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Tül</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺1.399,20</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Keten dokulu tül. Doğal görünüm, yüksek ışık geçirgenliği.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Tül</li>
                <li>Işık: %70-90</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Crystal</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Standart</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺1.557,60</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Kristal dokulu kumaş. Orta ışık geçirgenliği, iyi gizlilik.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Standart</li>
                <li>Işık: %30-50</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Safir - Rubin</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Premium</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺1.584,00</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Premium plise kumaş. Orta ışık geçirgenliği, yüksek gizlilik.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Standart</li>
                <li>Işık: %30-50</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Forest</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Premium</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺1.584,00</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Doğa esintili kumaş. Orta ışık geçirgenliği, şık görünüm.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Standart</li>
                <li>Işık: %30-50</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Fashion (Çift Taraflı)</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Çift Taraflı</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺1.768,80</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Çift taraflı kumaş. İki yüz farklı renk, esnek kullanım.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Standart</li>
                <li>Işık: %20-40</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border-2 border-brand rounded-xl p-5 hover:shadow-md transition-all relative">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-medium px-3 py-1 rounded-full">En Çok Tercih Edilen</div>
              <div class="flex items-center justify-between mb-3 mt-2">
                <h3 class="text-base font-semibold text-brand-text m-0">Moonlight (Yarı Blackout)</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Yarı Karartma</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺1.980,00</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Yarı karartma kumaş. Düşük ışık (%10-20). Yatak odası, çocuk odası için ideal.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Yarı Karartma</li>
                <li>Işık: %10-20</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Blackout (Tam Blackout)</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">%100 Karartma</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺2.428,80</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Tam karartma kumaş. Sıfır ışık (%0). Yatak odası, sinema odası için ideal.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Blackout</li>
                <li>Işık: %0 (tam karartma)</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/blackout-plise-perde/" class="text-xs font-medium text-brand hover:underline">Detaylı Bilgi →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all md:col-span-2 lg:col-span-1">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Honeycomb (Blackout) 2000</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Isı Yalıtımı</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">₺2.640,00</span>
                <span class="text-sm text-brand-text-light"> /m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Petek yapı blackout. Isı yalıtımı + tam karartma. Enerji tasarrufu %15-20.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kategori: Blackout</li>
                <li>Isı yalıtımı: %30-40</li>
                <li>Montaj: Vidalı ücretsiz</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/honeycomb-perde/" class="text-xs font-medium text-brand hover:underline">Detaylı Bilgi →</a>
            </div>
          </div>`,
        },
        {
          h2: "2026 Güncel Fiyat Listesi — Metrekare Bazında Detaylı Tablo",
          paragraphs: [
            "Aşağıdaki tablo <strong>2026 yılı güncel plise perde fiyatlarını</strong> metrekare bazında gösterir. Fiyatlar KDV dahildir. Vidalı montaj ücretsizdir, diğer montaj tipleri ₺280/adet eklenir. Tüm kumaş tipleri için 2 yıl garanti geçerlidir.",
          ],
          table: {
            headers: ["Kumaş Modeli", "M² Fiyat (KDV Dahil)", "Kategori", "Işık Geçirgenliği", "Montaj", "Garanti"],
            rows: [
              ["Diamond", "₺1.042,80", "Standart", "%60-80", "Vidalı ücretsiz", "2 Yıl"],
              ["Tulle", "₺1.161,60", "Tül", "%70-90", "Vidalı ücretsiz", "2 Yıl"],
              ["Valeria", "₺1.174,80", "Standart", "%60-80", "Vidalı ücretsiz", "2 Yıl"],
              ["Elegant", "₺1.372,80", "Standart", "%40-60", "Vidalı ücretsiz", "2 Yıl"],
              ["Spark", "₺1.372,80", "Standart", "%40-60", "Vidalı ücretsiz", "2 Yıl"],
              ["Linen Tülle", "₺1.399,20", "Tül", "%70-90", "Vidalı ücretsiz", "2 Yıl"],
              ["Crystal", "₺1.557,60", "Standart", "%30-50", "Vidalı ücretsiz", "2 Yıl"],
              ["Safir - Rubin", "₺1.584,00", "Standart", "%30-50", "Vidalı ücretsiz", "2 Yıl"],
              ["Forest", "₺1.584,00", "Standart", "%30-50", "Vidalı ücretsiz", "2 Yıl"],
              ["Fashion (Çift Taraflı)", "₺1.768,80", "Standart", "%20-40", "Vidalı ücretsiz", "2 Yıl"],
              ["Moonlight (Yarı Blackout)", "₺1.980,00", "Yarı Karartma", "%10-20", "Vidalı ücretsiz", "2 Yıl"],
              ["Blackout (Tam Blackout)", "₺2.428,80", "Blackout", "%0", "Vidalı ücretsiz", "2 Yıl"],
              ["Honeycomb (Blackout) 2000", "₺2.640,00", "Blackout", "%0", "Vidalı ücretsiz", "2 Yıl"],
            ],
          },
        },
        {
          h2: "Montaj Tipine Göre Ek Maliyet Tablosu",
          paragraphs: [
            "Montaj tipi, pencere tipine ve mekan durumuna göre seçilir. <strong>Vidalı sistem ücretsizdir</strong>. Diğer montaj tipleri ₺280/adet ek maliyet getirir (her ürün için ayrı). Çiftli sistemde 2 ürün olduğundan montaj ücreti ₺280 × 2 = ₺560/adet olur.",
          ],
          table: {
            headers: ["Montaj Tipi", "Ücret (adet/ürün)", "Açıklama", "Uygun Pencere Tipi"],
            rows: [
              ["Vidalı", "Ücretsiz", "Vidalarla monte edilir", "Ahşap/PVC kasa"],
              ["Portraylı", "₺280", "Klik mekanizması, vida deliği kalmaz", "Mantolama duvar"],
              ["Yapışkanlı", "₺280", "Çift taraflı bant, delmesiz", "Düz cam yüzeyi"],
              ["Çiftli Sistem", "₺280 × 2 ürün", "Çift ürün için özel montaj", "Gece/Gündüz sistemi"],
            ],
          },
        },
        {
          h2: "Standart Pencere Ölçülerine Göre Fiyat Tablosu",
          paragraphs: [
            "Türkiye'deki <strong>en yaygın pencere ölçüleri</strong> için fiyatlar. Her ölçü için 4 popüler kumaş tipinin m² fiyatı ile çarpım yapılmıştır. Ölçüler 10 cm aralıklarla yukarı yuvarlanır. 1 m² altındaki ölçüler minimum 1 m² olarak ücretlendirilir. Vidalı montaj ücretsizdir.",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Diamond (₺1.042,80)", "Tulle (₺1.161,60)", "Blackout (₺2.428,80)", "Honeycomb (₺2.640,00)"],
            rows: [
              ["60x80 cm", "0.48 m² (min 1)", "₺1.042,80", "₺1.161,60", "₺2.428,80", "₺2.640,00"],
              ["80x120 cm", "0.96 m² (min 1)", "₺1.042,80", "₺1.161,60", "₺2.428,80", "₺2.640,00"],
              ["100x120 cm", "1.20 m²", "₺1.251,36", "₺1.393,92", "₺2.914,56", "₺3.168,00"],
              ["120x150 cm", "1.80 m²", "₺1.877,04", "₺2.090,88", "₺4.371,84", "₺4.752,00"],
              ["150x180 cm", "2.70 m²", "₺2.815,56", "₺3.136,32", "₺6.557,76", "₺7.128,00"],
              ["180x200 cm", "3.60 m²", "₺3.754,08", "₺4.181,76", "₺8.743,68", "₺9.504,00"],
              ["200x250 cm (geniş)", "5.00 m²", "₺5.214,00", "₺5.808,00", "₺12.144,00", "₺13.200,00"],
            ],
          },
        },
        {
          h2: "Oda Bazlı Fiyat Hesaplama Örnekleri",
          paragraphs: [
            "Farklı odalar için <strong>gerçekçi fiyat hesaplama örnekleri</strong>. Her örnek standart pencere ölçüleri ve en uygun kumaş tipi ile hesaplanmıştır. Vidalı montaj ücretsiz, KDV dahil fiyatlar.",
          ],
          html: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="border border-brand-border rounded-xl p-5">
              <h3 class="text-base font-semibold text-brand-text mb-2">Oturma Odası (3 Pencere)</h3>
              <div class="text-xs text-brand-text-light space-y-1 mb-3">
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 1: 120x150 cm (1.8 m²)</span><span class="font-medium text-brand-text">₺3.136,32</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 2: 100x120 cm (1.2 m²)</span><span class="font-medium text-brand-text">₺1.393,92</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 3: 80x120 cm (min 1 m²)</span><span class="font-medium text-brand-text">₺1.161,60</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Kumaş: Tulle (₺1.161,60/m²)</span><span class="text-brand-text-light">—</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Montaj: Vidalı (3 pencere)</span><span class="font-medium text-brand-text">Ücretsiz</span></div>
              </div>
              <div class="flex justify-between items-center bg-brand-light/10 rounded-lg px-3 py-2">
                <span class="text-sm font-medium text-brand-text">Toplam (KDV dahil)</span>
                <span class="text-lg font-bold text-brand">₺5.691,84</span>
              </div>
            </div>
            <div class="border border-brand-border rounded-xl p-5">
              <h3 class="text-base font-semibold text-brand-text mb-2">Yatak Odası (2 Pencere)</h3>
              <div class="text-xs text-brand-text-light space-y-1 mb-3">
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 1: 120x150 cm (1.8 m²)</span><span class="font-medium text-brand-text">₺4.371,84</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 2: 100x120 cm (1.2 m²)</span><span class="font-medium text-brand-text">₺2.914,56</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Kumaş: Blackout (₺2.428,80/m²)</span><span class="text-brand-text-light">—</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Montaj: Vidalı (2 pencere)</span><span class="font-medium text-brand-text">Ücretsiz</span></div>
              </div>
              <div class="flex justify-between items-center bg-brand-light/10 rounded-lg px-3 py-2">
                <span class="text-sm font-medium text-brand-text">Toplam (KDV dahil)</span>
                <span class="text-lg font-bold text-brand">₺7.286,40</span>
              </div>
            </div>
            <div class="border border-brand-border rounded-xl p-5">
              <h3 class="text-base font-semibold text-brand-text mb-2">Mutfak (2 Pencere)</h3>
              <div class="text-xs text-brand-text-light space-y-1 mb-3">
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 1: 60x80 cm (min 1 m²)</span><span class="font-medium text-brand-text">₺1.042,80</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 2: 80x120 cm (min 1 m²)</span><span class="font-medium text-brand-text">₺1.042,80</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Kumaş: Diamond (₺1.042,80/m²)</span><span class="text-brand-text-light">—</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Montaj: Vidalı (2 pencere)</span><span class="font-medium text-brand-text">Ücretsiz</span></div>
              </div>
              <div class="flex justify-between items-center bg-brand-light/10 rounded-lg px-3 py-2">
                <span class="text-sm font-medium text-brand-text">Toplam (KDV dahil)</span>
                <span class="text-lg font-bold text-brand">₺2.085,60</span>
              </div>
            </div>
            <div class="border-2 border-brand rounded-xl p-5 relative">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-medium px-3 py-1 rounded-full">En Avantajlı</div>
              <h3 class="text-base font-semibold text-brand-text mb-2 mt-2">Tüm Ev Paketi (8 Pencere)</h3>
              <div class="text-xs text-brand-text-light space-y-1 mb-3">
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Oturma Odası: 3 pencere (Tulle)</span><span class="font-medium text-brand-text">₺5.691,84</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Yatak Odası: 2 pencere (Blackout)</span><span class="font-medium text-brand-text">₺7.286,40</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Mutfak: 2 pencere (Diamond)</span><span class="font-medium text-brand-text">₺2.085,60</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Banyo: 1 pencere (Blackout, min 1 m²)</span><span class="font-medium text-brand-text">₺2.428,80</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Toplu Alım İndirimi (%10)</span><span class="font-medium text-red-500">-₺1.749,26</span></div>
              </div>
              <div class="flex justify-between items-center bg-brand-light/10 rounded-lg px-3 py-2">
                <span class="text-sm font-medium text-brand-text">Toplam (KDV dahil, indirimli)</span>
                <span class="text-lg font-bold text-brand">₺15.743,38</span>
              </div>
              <p class="text-xs text-brand-text-light mt-2">Tüm ev paketinde ekstra: ücretsiz keşif, ölçü alma, montaj, 2 yıl garanti.</p>
            </div>
          </div>`,
        },
        {
          h2: "Ek Özellik ve Maliyet Tablosu",
          paragraphs: [
            "Plise perde fiyatına eklenen <strong>opsiyonel özellikler ve ek maliyetler</strong>. Her özellik fiyatı tek pencere bazında belirtilmiştir.",
          ],
          table: {
            headers: ["Ek Özellik", "Ek Maliyet (Tek Pencere)", "Açıklama", "Zorunlu mu?"],
            rows: [
              ["Motor (tubular)", "1.500-3.000 TL", "Profil içi motor, uzaktan kumanda", "Hayır"],
              ["Akıllı ev entegrasyonu", "500-1.000 TL", "Alexa/Google Home bağlantısı", "Hayır"],
              ["Güneş sensörü", "300-500 TL", "Güneşe göre otomatik açma/kapama", "Hayır"],
              ["Zamanlayıcı", "200-400 TL", "Belirli saatlerde otomatik çalışma", "Hayır"],
              ["Özel baskı", "500-1.500 TL", "Kişiselleştirilmiş dijital baskı", "Hayır"],
              ["Özel renk", "200-500 TL", "Standart dışı renk seçeneği", "Hayır"],
              ["Çift kumaş (düet)", "+30-50% fiyat", "İki katmanlı kumaş sistemi", "Hayır"],
              ["UV koruma kaplaması", "100-200 TL", "Mobilya ve zemin koruma", "Hayır"],
              ["Çocuk güvenliği kilidi", "50-100 TL", "İp mekanizması için güvenlik", "Hayır (önerilir)"],
            ],
          },
        },
        {
          h2: "Toplu Alım İndirim Tablosu",
          paragraphs: [
            "Toplu alımlarda <strong>kademeli indirim</strong> uygulanır. İndirim kumaş ve montaj fiyatının toplamına uygulanır:",
          ],
          table: {
            headers: ["Pencere Adedi", "İndirim Oranı", "Örnek Tasarruf (10.000 TL sipariş)", "Ek Avantajlar"],
            rows: [
              ["1-4 pencere", "İndirim yok", "—", "Standart fiyat"],
              ["5-9 pencere", "%5 indirim", "500 TL tasarruf", "Ücretsiz keşif"],
              ["10-19 pencere", "%10 indirim", "1.000 TL tasarruf", "Ücretsiz keşif + ölçü alma"],
              ["20+ pencere", "%15 indirim", "1.500 TL tasarruf", "Ücretsiz keşif + ölçü + montaj öncelik"],
              ["Tüm ev paketi", "Özel fiyat", "Projeye göre değişir", "Tüm hizmetler dahil, özel fiyat"],
              ["Kurumsal (50+)", "Müzakere", "Projeye göre", "Sözleşmeli fiyat, özel servis"],
            ],
          },
        },
        {
          h2: "Ödeme Seçenekleri",
          paragraphs: [
            "Plise perde siparişlerinizde <strong>esnek ödeme seçenekleri</strong> mevcuttur:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Nakit</strong> — %3 ek indirim",
              "<strong>Havale/EFT</strong> — %2 ek indirim",
              "<strong>Kredi kartı</strong> — Tüm kartlar geçerli, taksitli ödeme",
              "<strong>Taksit</strong> — 3, 6, 9, 12 ay taksit (kart bazlı)",
              "<strong>Parafly/Paracard</strong> — 12 aya varan taksit",
              "<strong>İş yeri ortak kartları</strong> — Bonus, Maximum, World, Advantage",
              "<strong>Sipariş öncesi</strong> — %40 peşinat, montajda %60 kalan tutar",
            ],
          },
        },
        {
          h2: "Fiyatı Etkileyen 5 Ana Faktör",
          paragraphs: [
            "Plise perde fiyatını belirleyen <strong>5 ana faktör</strong> ve bu faktörlerin fiyat üzerindeki etkisi:",
          ],
          table: {
            headers: ["Faktör", "Fiyat Etkisi", "Detay"],
            rows: [
              ["Kumaş tipi", "%40-60 etki", "Tül en ekonomik, motorlu en yüksek. Kumaş kalitesi ve işçilik belirler."],
              ["Pencere ölçüsü", "%20-30 etki", "Metrekare bazında fiyatlanır. Büyük pencere = daha yüksek toplam fiyat."],
              ["Montaj tipi", "%5-15 etki", "Vidalı en ekonomik, motorlu en yüksek. Pencere tipi belirler."],
              ["Ek özellikler", "%10-30 etki", "Motor, akıllı ev, özel baskı, UV koruma gibi opsiyonlar."],
              ["Adet", "%5-15 indirim", "Toplu alımda kademeli indirim: 5+ (%5), 10+ (%10), 20+ (%15)."],
            ],
          },
        },
        {
          h2: "Net Fiyat Nasıl Alınır?",
          paragraphs: [
            "Net fiyat için <strong>2 yöntem</strong> mevcuttur. Her ikisi de ücretsizdir:",
          ],
          html: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="border border-brand-border rounded-xl p-5 text-center">
                            <h3 class="text-base font-semibold text-brand-text mb-2">Online Fiyat Hesaplama</h3>
              <p class="text-xs text-brand-text-light mb-3">Pencere ölçüsü ve kumaş tipini seçerek anında tahmini fiyat alın. 30 saniye sürer.</p>
              <a href="/plise-perde-fiyat-hesaplama/" class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-brand text-white rounded-md hover:bg-brand-dark transition-colors">Hesaplamaya Başla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 text-center">
                            <h3 class="text-base font-semibold text-brand-text mb-2">Ücretsiz Keşif</h3>
              <p class="text-xs text-brand-text-light mb-3">Ekibimiz adresinize gelir, pencere ölçüsü alır, montaj tipi belirler ve net fiyat verir.</p>
              <a href="/kesif/" class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-brand text-white rounded-md hover:bg-brand-dark transition-colors">Keşif Talep Et →</a>
            </div>
          </div>`,
        },
        {
          h2: "Garanti ve Satış Sonrası Destek",
          paragraphs: [
            "Tüm plise perde ürünlerimiz <strong>2 yıl garanti</strong> ile gelir. Motorlu modellerde motor <strong>3 yıl garanti</strong> kapsamındadır. Garanti kapsamındaki onarımlar tamamen ücretsizdir.",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>2 yıl ürün garantisi</strong> — kumaş, profil, mekanizma",
              "<strong>3 yıl motor garantisi</strong> — motorlu modellerde",
              "<strong>Ücretsiz onarım</strong> — garanti kapsamındaki arızalar",
              "<strong>Yedek parça</strong> — garanti sonrası uygun fiyatlı yedek parça",
              "<strong>Servis desteği</strong> — İstanbul içi yerinde servis, dışı kargo ile",
              "<strong>Fiyat garantisi</strong> — verilen teklif 30 gün geçerli",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde fiyatı 2026 ne kadar?",
          answer: "2026 yılı plise perde fiyatları metrekare bazında ₺1.042,80 ile ₺2.640,00 aralığındadır. Diamond en ekonomik (₺1.042,80/m²), Honeycomb (Blackout) 2000 en yüksek (₺2.640,00/m²) fiyatlidir. Tüm fiyatlar KDV dahildir. Vidalı montaj ücretsizdir.",
        },
        {
          question: "Plise perde metrekare fiyatı nasıl hesaplanır?",
          answer: "Pencere genişliği (m) × pencere yüksekliği (m) = metrekare (m²). Bu alanı seçtiğiniz kumaş tipinin m² fiyatı ile çarpın. Örnek: 120x150 cm pencere = 1.8 m². Tulle kumaş ₺1.161,60/m² × 1.8 = ₺2.090,88. Ölçü 10 cm aralıklarla yukarı yuvarlanır. 1 m² altı ölçüler minimum 1 m² olarak ücretlendirilir.",
        },
        {
          question: "Plise perde montaj ücreti ne kadar?",
          answer: "Vidalı montaj ücretsizdir. Portraylı, yapışkanlı ve çiftli sistem montaj tipleri ₺280/adet (her ürün için) ek ücret getirir. Çiftli sistemde 2 ürün olduğundan montaj ₺280 × 2 = ₺560/adet olur.",
        },
        {
          question: "Plise perde fiyat hesaplama aracı var mı?",
          answer: "Evet, online fiyat hesaplama aracımızı kullanabilirsiniz. Pencere ölçüsü ve kumaş tipini seçerek anında tahmini fiyat alabilirsiniz. Birden fazla pencere ekleyebilir, adet belirtebilirsiniz. Ücretsizdir. /plise-perde-fiyat-hesaplama/ sayfasını ziyaret edin.",
        },
        {
          question: "Toplu alımda plise perde indirim var mı?",
          answer: "Evet. 5-9 pencerede %5, 10-19 pencerede %10, 20+ pencerede %15 indirim uygulanır. Tüm ev paketi için özel fiyat verilir. Kurumsal projelerde (50+ pencere) müzakere ile ek indirim mümkündür.",
        },
        {
          question: "Plise perde ödeme seçenekleri neler?",
          answer: "Nakit (%3 ek indirim), havale/EFT (%2 ek indirim), kredi kartı (tüm kartlar), taksitli ödeme (3-12 ay), iş yeri ortak kartları (Bonus, Maximum, World, Advantage). Sipariş öncesi %40 peşinat, montajda %60 kalan tutar uygulanır.",
        },
        {
          question: "Honeycomb plise perde fiyatı ne kadar?",
          answer: "Honeycomb (Blackout) 2000 plise perde ₺2.640,00/m²'dir. Petek hücreli yapısı ile ısı yalıtımı sağlar, enerji tasarrufu %15-20. Yıllık enerji tasarrufu ile 2-3 yılda kendini amorti eder.",
        },
        {
          question: "Blackout plise perde fiyatı ne kadar?",
          answer: "Blackout (Tam Blackout) plise perde ₺2.428,80/m²'dir. %0 ışık geçirgenliği ile tam karartma sağlar. Yatak odası, sinema odası için idealdir.",
        },
        {
          question: "Plise perde garanti süresi ne kadar?",
          answer: "Tüm plise perde ürünleri 2 yıl garanti ile gelir. Garanti kapsamındaki onarımlar tamamen ücretsizdir. Garanti sonrası yedek parça ve servis desteği mevcuttur.",
        },
        {
          question: "Ücretsiz keşif nasıl talep edilir?",
          answer: "Ücretsiz keşif için /kesif/ sayfasından talep oluşturabilir veya 0 540 336 38 73 numarasını arayabilirsiniz. Ekibimiz adresinize gelir, pencere ölçüsü alır, montaj tipi belirler ve net fiyat teklifi verir. Türkiye geneli geçerlidir.",
        },
        {
          question: "Plise perde fiyat garantisi var mı?",
          answer: "Evet, verilen fiyat teklifi 30 gün geçerlidir. Keşif sonrası verilen net fiyat, sözleşme imzalanana kadar değişmez. Fiyat artışlarından etkilenmezsiniz.",
        },
        {
          question: "Standart pencere için plise perde fiyatı ne kadar?",
          answer: "120x150 cm standart pencere için: Diamond ₺1.877,04, Tulle ₺2.090,88, Blackout ₺4.371,84, Honeycomb ₺4.752,00. Vidalı montaj ücretsiz, KDV dahil fiyatlar.",
        },
      ]}
      ctaTitle="Net Fiyat İçin Hesaplayın veya Keşif Talep Edin"
      ctaDescription="Online fiyat hesaplama aracımız ile 30 saniyede tahmini fiyat alın, veya ücretsiz keşif talep ederek net fiyat öğrenin. Türkiye geneli hizmet."
      ctaPrimaryLabel="Fiyat Hesapla"
      ctaPrimaryHref="/plise-perde-fiyat-hesaplama/"
    />
  );
}
