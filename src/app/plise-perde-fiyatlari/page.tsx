import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Fiyatları 2026 — Güncel Fiyat Listesi (m² Montaj Dahil)",
  description:
    "Plise perde fiyatları 2026: tül, güneşlik, karartma, honeycomb, düet, motorlu modeller. Metrekare fiyat tablosu, montaj dahil. Online fiyat hesaplama, ücretsiz keşif. KDV dahil, 2 yıl garanti.",
  slug: "plise-perde-fiyatlari",
});

export default function PlisePerdeFiyatlariPage() {
  return (
    <PageTemplate
      title="Plise Perde Fiyatları 2026"
      description="Plise perde fiyatları 2026: tül, güneşlik, karartma, honeycomb, düet, motorlu. Metrekare fiyat, montaj dahil, KDV dahil, 2 yıl garanti."
      slug="plise-perde-fiyatlari"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Fiyatlarımız", url: "/plise-perde-fiyatlari" }]}
      h1="Plise Perde Fiyatları 2026"
      intro="Plise perde fiyatları; kumaş tipine, pencere ölçüsüne, montaj tipine ve ek özelliklere göre değişir. Bu sayfada <strong>2026 yılı güncel fiyat aralıklarını</strong> metrekare bazında bulabilirsiniz. Tüm fiyatlar <strong>montaj dahil, KDV dahil ve 2 yıl garanti</strong> ile gelir. Net fiyat için online fiyat hesaplama aracımızı kullanabilir veya ücretsiz keşif talep edebilirsiniz. Üretici olarak doğrudan tüketiciye hizmet veriyoruz — ara katman maliyeti yok."
      highlight="Üretici fiyatı · Montaj dahil · KDV dahil · 2 yıl garanti · Türkiye geneli ücretsiz keşif"
      schemaType="product"
      schemaData={{
        name: "Plise Perde",
        description: "Tül, güneşlik, karartma, honeycomb, düet, motorlu plise perde çeşitleri. Montaj dahil, KDV dahil, 2 yıl garanti.",
        lowPrice: "800",
        highPrice: "6000",
        ratingValue: "4.8",
        reviewCount: "127",
      }}
      sections={[
        {
          h2: "Plise Perde Fiyat Kartları — Kumaş Tipine Göre",
          paragraphs: [
            "Her kumaş tipi farklı <strong>işçilik, malzeme kalitesi ve fonksiyon</strong> gerektirir. Aşağıda her model için fiyat aralığı, özellikler ve tipik kullanım alanı yer alır. Tüm fiyatlar <strong>metrekare (m²) bazında, montaj dahil, KDV dahil</strong> olarak belirtilmiştir.",
          ],
          html: `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Tül Plise Perde</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">En Ekonomik</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">800-1.200</span>
                <span class="text-sm text-brand-text-light"> TL/m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Yüksek ışık geçirgenliği (%70-90). Oturma odası, mutfak, salon için ideal. Az gizlilik.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Işık: %70-90</li>
                <li>Gizlilik: Az</li>
                <li>Montaj: Dahil</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Güneşlik Plise Perde</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Popüler</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">1.000-1.500</span>
                <span class="text-sm text-brand-text-light"> TL/m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Orta ışık geçirgenliği (%30-50). Salon, çalışma odası için ideal. İyi gizlilik + ışık dengesi.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Işık: %30-50</li>
                <li>Gizlilik: İyi</li>
                <li>UV koruma: Var</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Yarı Karartma</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">İyi Fiyat/Performans</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">1.200-1.800</span>
                <span class="text-sm text-brand-text-light"> TL/m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Düşük ışık (%10-20). Yatak odası, çocuk odası için ideal. Yüksek gizlilik, soft ışık.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Işık: %10-20</li>
                <li>Gizlilik: Yüksek</li>
                <li>Montaj: Dahil</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/plise-perde-fiyat-hesaplama/" class="text-xs font-medium text-brand hover:underline">Fiyat Hesapla →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Tam Karartma / Blackout</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">%100 Karartma</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">1.400-2.000</span>
                <span class="text-sm text-brand-text-light"> TL/m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Sıfır ışık (%0). Yatak odası, sinema odası, gece çalışanlar için ideal. Tam gizlilik.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Işık: %0 (tam karartma)</li>
                <li>Gizlilik: Tam</li>
                <li>3 katmanlı kumaş</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/blackout-plise-perde/" class="text-xs font-medium text-brand hover:underline">Detaylı Bilgi →</a>
            </div>
            <div class="border-2 border-brand rounded-xl p-5 hover:shadow-md transition-all relative">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-medium px-3 py-1 rounded-full">En Çok Tercih Edilen</div>
              <div class="flex items-center justify-between mb-3 mt-2">
                <h3 class="text-base font-semibold text-brand-text m-0">Honeycomb (Petek)</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Isı Yalıtımı</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">1.800-2.800</span>
                <span class="text-sm text-brand-text-light"> TL/m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Petek hücreli yapı ile ısı yalıtımı. Enerji tasarrufu %15-20. Tüm odalar için ideal.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Isı yalıtımı: %30-40</li>
                <li>Ses azaltma: %20-30</li>
                <li>Enerji tasarrufu: %15-20</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/honeycomb-perde/" class="text-xs font-medium text-brand hover:underline">Detaylı Bilgi →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Düet (Gece-Gündüz)</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">İki Katmanlı</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">2.000-3.200</span>
                <span class="text-sm text-brand-text-light"> TL/m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">İki katman: tül + karartma tek perdede. Gündüz ışık, gece karartma. Pratik çözüm.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>İki katman: Tül + Karartma</li>
                <li>Gündüz ışık, gece karanlık</li>
                <li>Tek profil, iki kumaş</li>
                <li>Garanti: 2 yıl</li>
              </ul>
              <a href="/duet-perde/" class="text-xs font-medium text-brand hover:underline">Detaylı Bilgi →</a>
            </div>
            <div class="border border-brand-border rounded-xl p-5 hover:border-brand hover:shadow-md transition-all md:col-span-2 lg:col-span-1">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base font-semibold text-brand-text m-0">Motorlu Plise Perde</h3>
                <span class="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded-full font-medium">Akıllı Ev</span>
              </div>
              <div class="mb-3">
                <span class="text-2xl font-bold text-brand-text">3.500-6.000</span>
                <span class="text-sm text-brand-text-light"> TL/m²</span>
              </div>
              <p class="text-xs text-brand-text-light mb-3">Uzaktan kumanda, akıllı telefon, sesli komut. Geniş ve yüksek pencere için ideal.</p>
              <ul class="text-xs text-brand-text-light space-y-1 mb-3">
                <li>Kumanda: Uzaktan + Telefon</li>
                <li>Alexa / Google uyumlu</li>
                <li>Zamanlayıcı + Güneş sensörü</li>
                <li>Garanti: 2 yıl (motor 3 yıl)</li>
              </ul>
              <a href="/motorlu-plise-perde/" class="text-xs font-medium text-brand hover:underline">Detaylı Bilgi →</a>
            </div>
          </div>`,
        },
        {
          h2: "2026 Güncel Fiyat Listesi — Metrekare Bazında Detaylı Tablo",
          paragraphs: [
            "Aşağıdaki tablo <strong>2026 yılı güncel plise perde fiyatlarını</strong> metrekare bazında gösterir. Fiyatlar montaj dahil, KDV dahil olarak belirtilmiştir. Tüm kumaş tipleri için 2 yıl garanti geçerlidir.",
          ],
          table: {
            headers: ["Kumaş Tipi", "Min Fiyat (m²)", "Max Fiyat (m²)", "Ortalama", "Işık Geçirgenliği", "Montaj", "Garanti"],
            rows: [
              ["Tül Plise Perde", "800 TL", "1.200 TL", "1.000 TL", "%70-90", "Dahil", "2 Yıl"],
              ["Güneşlik Plise Perde", "1.000 TL", "1.500 TL", "1.250 TL", "%30-50", "Dahil", "2 Yıl"],
              ["Yarı Karartma", "1.200 TL", "1.800 TL", "1.500 TL", "%10-20", "Dahil", "2 Yıl"],
              ["Tam Karartma / Blackout", "1.400 TL", "2.000 TL", "1.700 TL", "%0", "Dahil", "2 Yıl"],
              ["Desenli Plise Perde", "1.500 TL", "2.200 TL", "1.850 TL", "%20-40", "Dahil", "2 Yıl"],
              ["Baskılı Plise Perde", "1.800 TL", "2.500 TL", "2.150 TL", "%10-30", "Dahil", "2 Yıl"],
              ["Honeycomb (Petek)", "1.800 TL", "2.800 TL", "2.300 TL", "%0-50", "Dahil", "2 Yıl"],
              ["Düet (Gece-Gündüz)", "2.000 TL", "3.200 TL", "2.600 TL", "%0-70", "Dahil", "2 Yıl"],
              ["Motorlu Plise Perde", "3.500 TL", "6.000 TL", "4.750 TL", "%0-90", "Dahil", "2 Yıl + Motor 3 Yıl"],
            ],
          },
        },
        {
          h2: "Montaj Tipine Göre Ek Maliyet Tablosu",
          paragraphs: [
            "Montaj tipi, pencere tipine ve mekan durumuna göre seçilir. Bazı montaj tipleri ek maliyet gerektirir. Aşağıda <strong>tek pencere ve oda bazında</strong> montaj ek maliyetleri yer alır.",
          ],
          table: {
            headers: ["Montaj Tipi", "Tek Pencere", "Oda (3-4 Pencere)", "Tüm Ev (8-12 Pencere)", "Uygun Pencere Tipi"],
            rows: [
              ["Vidalı", "150-250 TL", "450-900 TL", "1.200-2.500 TL", "Ahşap/PVC kasa"],
              ["Vidasız", "120-220 TL", "360-800 TL", "960-2.200 TL", "Alüminyum kasa"],
              ["Yapışkanlı", "100-200 TL", "300-700 TL", "800-1.800 TL", "Düz cam yüzeyi"],
              ["Kancalı", "100-180 TL", "300-600 TL", "800-1.600 TL", "Sök-tak gerekli"],
              ["Portrayli", "180-300 TL", "540-1.100 TL", "1.440-2.800 TL", "Mantolama duvar"],
              ["Braketli", "150-250 TL", "450-900 TL", "1.200-2.500 TL", "Tavan montaj"],
              ["Motorlu", "500-1.500 TL", "1.500-4.500 TL", "4.000-12.000 TL", "Geniş/yüksek pencere"],
            ],
          },
        },
        {
          h2: "Standart Pencere Ölçülerine Göre Fiyat Tablosu",
          paragraphs: [
            "Türkiye'deki <strong>en yaygın pencere ölçüleri</strong> için ortalama fiyatlar. Fiyatlar güneşlik kumaş tipi bazında hesaplanmıştır. Farklı kumaş için m² fiyatı ile çarpım yapılabilir.",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Tül (800-1.200)", "Güneşlik (1.000-1.500)", "Karartma (1.400-2.000)", "Honeycomb (1.800-2.800)"],
            rows: [
              ["60x80 cm", "0.48 m²", "384-576 TL", "480-720 TL", "672-960 TL", "864-1.344 TL"],
              ["80x120 cm", "0.96 m²", "768-1.152 TL", "960-1.440 TL", "1.344-1.920 TL", "1.728-2.688 TL"],
              ["100x120 cm", "1.20 m²", "960-1.440 TL", "1.200-1.800 TL", "1.680-2.400 TL", "2.160-3.360 TL"],
              ["120x150 cm", "1.80 m²", "1.440-2.160 TL", "1.800-2.700 TL", "2.520-3.600 TL", "3.240-5.040 TL"],
              ["150x180 cm", "2.70 m²", "2.160-3.240 TL", "2.700-4.050 TL", "3.780-5.400 TL", "4.860-7.560 TL"],
              ["180x200 cm", "3.60 m²", "2.880-4.320 TL", "3.600-5.400 TL", "5.040-7.200 TL", "6.480-10.080 TL"],
              ["200x250 cm (geniş)", "5.00 m²", "4.000-6.000 TL", "5.000-7.500 TL", "7.000-10.000 TL", "9.000-14.000 TL"],
            ],
          },
        },
        {
          h2: "Oda Bazlı Fiyat Hesaplama Örnekleri",
          paragraphs: [
            "Farklı odalar için <strong>gerçekçi fiyat hesaplama örnekleri</strong>. Her örnek standart pencere ölçüleri ve en uygun kumaş tipi ile hesaplanmıştır. Montaj dahil, KDV dahil fiyatlar.",
          ],
          html: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="border border-brand-border rounded-xl p-5">
              <h3 class="text-base font-semibold text-brand-text mb-2">Oturma Odası (3 Pencere)</h3>
              <div class="text-xs text-brand-text-light space-y-1 mb-3">
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 1: 120x150 cm (1.8 m²)</span><span class="font-medium text-brand-text">2.250 TL</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 2: 100x120 cm (1.2 m²)</span><span class="font-medium text-brand-text">1.500 TL</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 3: 80x120 cm (0.96 m²)</span><span class="font-medium text-brand-text">1.200 TL</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Kumaş: Güneşlik (1.250 TL/m²)</span><span class="text-brand-text-light">—</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Montaj: Vidalı (3 pencere)</span><span class="font-medium text-brand-text">600 TL</span></div>
              </div>
              <div class="flex justify-between items-center bg-brand-light/10 rounded-lg px-3 py-2">
                <span class="text-sm font-medium text-brand-text">Toplam (KDV dahil)</span>
                <span class="text-lg font-bold text-brand">5.550 TL</span>
              </div>
            </div>
            <div class="border border-brand-border rounded-xl p-5">
              <h3 class="text-base font-semibold text-brand-text mb-2">Yatak Odası (2 Pencere)</h3>
              <div class="text-xs text-brand-text-light space-y-1 mb-3">
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 1: 120x150 cm (1.8 m²)</span><span class="font-medium text-brand-text">3.060 TL</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 2: 100x120 cm (1.2 m²)</span><span class="font-medium text-brand-text">2.040 TL</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Kumaş: Tam Karartma (1.700 TL/m²)</span><span class="text-brand-text-light">—</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Montaj: Vidalı (2 pencere)</span><span class="font-medium text-brand-text">400 TL</span></div>
              </div>
              <div class="flex justify-between items-center bg-brand-light/10 rounded-lg px-3 py-2">
                <span class="text-sm font-medium text-brand-text">Toplam (KDV dahil)</span>
                <span class="text-lg font-bold text-brand">5.500 TL</span>
              </div>
            </div>
            <div class="border border-brand-border rounded-xl p-5">
              <h3 class="text-base font-semibold text-brand-text mb-2">Mutfak (2 Pencere)</h3>
              <div class="text-xs text-brand-text-light space-y-1 mb-3">
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 1: 60x80 cm (0.48 m²)</span><span class="font-medium text-brand-text">480 TL</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Pencere 2: 80x120 cm (0.96 m²)</span><span class="font-medium text-brand-text">960 TL</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Kumaş: Tül (1.000 TL/m²)</span><span class="text-brand-text-light">—</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Montaj: Yapışkanlı (2 pencere)</span><span class="font-medium text-brand-text">300 TL</span></div>
              </div>
              <div class="flex justify-between items-center bg-brand-light/10 rounded-lg px-3 py-2">
                <span class="text-sm font-medium text-brand-text">Toplam (KDV dahil)</span>
                <span class="text-lg font-bold text-brand">1.740 TL</span>
              </div>
            </div>
            <div class="border-2 border-brand rounded-xl p-5 relative">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-medium px-3 py-1 rounded-full">En Avantajlı</div>
              <h3 class="text-base font-semibold text-brand-text mb-2 mt-2">Tüm Ev Paketi (8 Pencere)</h3>
              <div class="text-xs text-brand-text-light space-y-1 mb-3">
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Oturma Odası: 3 pencere (Güneşlik)</span><span class="font-medium text-brand-text">5.550 TL</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Yatak Odası: 2 pencere (Karartma)</span><span class="font-medium text-brand-text">5.500 TL</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Mutfak: 2 pencere (Tül)</span><span class="font-medium text-brand-text">1.740 TL</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Banyo: 1 pencere (Karartma)</span><span class="font-medium text-brand-text">1.200 TL</span></div>
                <div class="flex justify-between border-b border-brand-border pb-1"><span>Toplu Alım İndirimi (%10)</span><span class="font-medium text-red-500">-1.399 TL</span></div>
              </div>
              <div class="flex justify-between items-center bg-brand-light/10 rounded-lg px-3 py-2">
                <span class="text-sm font-medium text-brand-text">Toplam (KDV dahil, indirimli)</span>
                <span class="text-lg font-bold text-brand">12.591 TL</span>
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
              <a href="/ucretsiz-kesif/" class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-brand text-white rounded-md hover:bg-brand-dark transition-colors">Keşif Talep Et →</a>
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
          answer: "2026 yılı plise perde fiyatları metrekare bazında 800 TL ile 6.000 TL aralığındadır. Tül en ekonomik (800-1.200 TL/m²), motorlu en yüksek (3.500-6.000 TL/m²) fiyatlidir. Tüm fiyatlar montaj dahil ve KDV dahildir.",
        },
        {
          question: "Plise perde metrekare fiyatı nasıl hesaplanır?",
          answer: "Pencere genişliği (m) × pencere yüksekliği (m) = metrekare (m²). Bu alanı seçtiğiniz kumaş tipinin m² fiyatı ile çarpın. Örnek: 120x150 cm pencere = 1.8 m². Güneşlik kumaş 1.250 TL/m² × 1.8 = 2.250 TL. Montaj dahildir.",
        },
        {
          question: "Plise perde montaj ücreti ne kadar?",
          answer: "Montaj tipine göre tek pencere için 100 TL ile 1.500 TL arası. Vidalı 150-250 TL, yapışkanlı 100-200 TL, kancalı 100-180 TL, motorlu 500-1.500 TL. Belirtilen fiyatlar zaten montaj dahildir — ek montaj ücreti yoktur.",
        },
        {
          question: "Plise perde fiyat hesaplama aracı var mı?",
          answer: "Evet, online fiyat hesaplama aracımızı kullanabilirsiniz. Pencere ölçüsü ve kumaş tipini seçerek anında tahmini fiyat alabilirsiniz. Ücretsizdir ve 30 saniye sürer. /plise-perde-fiyat-hesaplama/ sayfasını ziyaret edin.",
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
          answer: "Honeycomb plise perde 1.800-2.800 TL/m² aralığındadır. Petek hücreli yapısı ile ısı yalıtımı sağlar, enerji tasarrufu %15-20. Yıllık enerji tasarrufu ile 2-3 yılda kendini amorti eder.",
        },
        {
          question: "Motorlu plise perde fiyatı ne kadar?",
          answer: "Motorlu plise perde 3.500-6.000 TL/m² aralığındadır. Motor 1.500-3.000 TL ek maliyet getirir. Akıllı ev entegrasyonu 500-1.000 TL, güneş sensörü 300-500 TL ek maliyet. Motor 3 yıl garantilidir.",
        },
        {
          question: "Plise perde garanti süresi ne kadar?",
          answer: "Tüm plise perde ürünleri 2 yıl garanti ile gelir. Motorlu modellerde motor 3 yıl garanti kapsamındadır. Garanti kapsamındaki onarımlar tamamen ücretsizdir. Garanti sonrası yedek parça ve servis desteği mevcuttur.",
        },
        {
          question: "Ücretsiz keşif nasıl talep edilir?",
          answer: "Ücretsiz keşif için /ucretsiz-kesif/ sayfasından talep oluşturabilir veya 0 540 336 38 73 numarasını arayabilirsiniz. Ekibimiz adresinize gelir, pencere ölçüsü alır, montaj tipi belirler ve net fiyat teklifi verir. Türkiye geneli geçerlidir.",
        },
        {
          question: "Plise perde fiyat garantisi var mı?",
          answer: "Evet, verilen fiyat teklifi 30 gün geçerlidir. Keşif sonrası verilen net fiyat, sözleşme imzalanana kadar değişmez. Fiyat artışlarından etkilenmezsiniz.",
        },
        {
          question: "Standart pencere için plise perde fiyatı ne kadar?",
          answer: "120x150 cm standart pencere için: Tül 1.440-2.160 TL, Güneşlik 1.800-2.700 TL, Karartma 2.520-3.600 TL, Honeycomb 3.240-5.040 TL. Montaj dahil, KDV dahil fiyatlar.",
        },
      ]}
      ctaTitle="Net Fiyat İçin Hesaplayın veya Keşif Talep Edin"
      ctaDescription="Online fiyat hesaplama aracımız ile 30 saniyede tahmini fiyat alın, veya ücretsiz keşif talep ederek net fiyat öğrenin. Türkiye geneli hizmet."
      ctaPrimaryLabel="Fiyat Hesapla"
      ctaPrimaryHref="/plise-perde-fiyat-hesaplama"
    />
  );
}
