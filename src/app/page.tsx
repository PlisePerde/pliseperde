import Link from "next/link";
import {
  Calculator,
  Phone,
  Shield,
  Truck,
  Factory,
  Wrench,
  ChevronRight,
  Clock,
  Tag,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomNav from "@/components/BottomNav";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import HeroCallbackForm from "@/components/HeroCallbackForm";
import TrustBar from "@/components/TrustBar";
import { siteConfig } from "@/lib/site-config";
import { organizationSchema, localBusinessSchema, websiteSchema, speakableSchema, faqPageSchema, breadcrumbSchema, articleSchema } from "@/lib/schema";

const productCards = [
  { label: "Plise Perde", desc: "Özel ölçü üretim" },
  { label: "Honeycomb Perde", desc: "Isı yalıtımı, enerji tasarrufu" },
  { label: "Düet Perde", desc: "Çift hücreli, ışık-gizlilik dengesi" },
  { label: "Blackout Plise Perde", desc: "Tam karanlık, maksimum gizlilik" },
  { label: "Gece Gündüz Plise Perde", desc: "İki katman, esnek kullanım" },
  { label: "Motorlu Plise Perde", desc: "Uzaktan kumanda, akıllı ev" },
  { label: "Vidasız Plise Perde", desc: "Delmesiz montaj" },
  { label: "Kancalı Plise Perde", desc: "Pratik takılır çıkarılır" },
  { label: "Desenli Plise Perde", desc: "Dekoratif görünüm" },
  { label: "Düz Plise Perde", desc: "Sade, minimalist tasarım" },
];

const serviceCards = [
  { label: "Montaj", href: "/montaj", icon: Wrench, desc: "Profesyonel montaj hizmeti" },
  { label: "Ölçü Alma Desteği", href: "/olcu-alma-destegi", icon: Calculator, desc: "Ücretsiz ölçü danışmanlığı" },
  { label: "Ücretsiz Keşif ve Danışmanlık", href: "/kesif", icon: Phone, desc: "Yerinde keşif ve teklif" },
  { label: "Fiyat Hesaplama", href: "/plise-perde-fiyat-hesaplama", icon: Calculator, desc: "Online fiyat hesaplama" },
];

const faqs = [
  {
    question: "Plise perde nedir?",
    answer: "Plise perde, harmonika şeklinde katlanan polyester kumaştan üretilen pencere perdesidir. Işık kontrolü, gizlilik ve ısı yalıtımı sağlar. Tül, güneşlik, karartma, honeycomb, motorlu ve vidasız modelleriyle cam balkon, yatak odası, mutfak ve ofis gibi alanlarda kullanılır.",
  },
  {
    question: "Plise perde teslimat süresi ne kadar?",
    answer: "Özel ölçü üretim olduğu için teslimat süresi 3-7 iş günüdür. Türkiye geneli kargo ve montaj hizmeti mevcuttur.",
  },
  {
    question: "Plise perde montajı nasıl yapılır?",
    answer: "Plise perde montajı vidalı, vidasız (yapışkanlı) ve portrayli montaj tipleriyle yapılır. Vidasız montaj delmesiz, pratik bir çözümdür. Profesyonel montaj ekibimizle ücretsiz keşif ve montaj hizmeti sunuyoruz.",
  },
  {
    question: "Plise perde garanti süresi ne kadar?",
    answer: "Profil ve kumaşta 2 yıl, motorlu modellerde motor garantisi 5 yıldır. Üretici garantisi tüm ürünlerimizi kapsar.",
  },
  {
    question: "Hangi bölgelerde hizmet veriyorsunuz?",
    answer: "İstanbul, Kocaeli ve Sakarya'da yerinde keşif ve montaj ile Türkiye geneli 81 ilde kargo gönderimi yapıyoruz. Ücretsiz keşif için bizimle iletişime geçebilirsiniz.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Ana Sayfa", url: "/" }])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema(
              "Plise Perde Nedir? Özet ve Özellikleri",
              "Plise perde, polyester kumaşın harmonika şeklinde katlanmasıyla oluşan pencere perdesidir. Tül, güneşlik, karartma ve honeycomb modelleriyle farklı ışık kontrol seviyeleri sunar.",
              "/"
            )
          ),
        }}
      />
      <Header />
      <main className="flex-1 pb-14 md:pb-0">
        {/* Hero */}
        <section aria-label="Hero" className="relative min-h-[420px] md:min-h-[540px] flex items-center justify-center overflow-hidden">
          <img
            src="/hero.webp"
            alt="Plise perde özel ölçü üretim ve montaj"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-[1536px] px-4 md:px-6 py-12 md:py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Sol: İçerik */}
              <div>
              <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 leading-tight">
                Plise Perde
              </h1>
              <h2 className="text-xl md:text-3xl font-semibold text-white/90 mb-2 leading-tight">
                Özel Ölçü Üretim &amp; Hızlı Teslimat
              </h2>
              <p role="doc-subtitle" className="text-xs md:text-sm text-white/70 font-medium mb-4">
                pliseperde.com — Türkiye'nin Plise Perde Üreticisi
              </p>
              <p className="hero-description text-sm md:text-lg text-white/90 leading-relaxed mb-8">
                Plise perde, harmonika şeklinde katlanan polyester kumaştan üretilen pencere perdesidir. Işık kontrolü, gizlilik ve ısı yalıtımı sağlar. Tül, güneşlik, karartma, honeycomb, motorlu ve vidasız modelleriyle cam balkon, yatak odası, mutfak ve ofis gibi alanlarda kullanılır. Özel ölçü üretim, 3-7 iş gününde teslimat.
              </p>
              <div className="grid grid-cols-3 sm:flex sm:flex-row items-center gap-2 sm:gap-3 mb-8">
                <Link
                  href="/plise-perde-fiyatlari"
                  className="flex items-center gap-2 px-5 py-3 text-sm md:text-base font-semibold border-2 border-white/80 text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Tag size={18} />
                  <span className="sm:hidden">Fiyatlar</span>
                  <span className="hidden sm:inline">Fiyatlarımız</span>
                </Link>
                <Link
                  href="/plise-perde-fiyat-hesaplama"
                  className="flex items-center gap-2 px-6 py-3 text-sm md:text-base font-semibold bg-brand text-white rounded-lg hover:bg-brand-dark transition-colors"
                >
                  <Calculator size={18} />
                  <span className="sm:hidden">Hesapla</span>
                  <span className="hidden sm:inline">Fiyat Hesapla</span>
                </Link>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 text-sm md:text-base font-semibold border-2 border-white/80 text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="flex items-center gap-1.5 text-xs md:text-sm text-white/80">
                  <Factory size={14} /> Üretici
                </span>
                <span className="flex items-center gap-1.5 text-xs md:text-sm text-white/80">
                  <Shield size={14} /> 2 Yıl Garanti
                </span>
                <span className="flex items-center gap-1.5 text-xs md:text-sm text-white/80">
                  <Truck size={14} /> Türkiye Geneli
                </span>
                <span className="flex items-center gap-1.5 text-xs md:text-sm text-white/80">
                  <Wrench size={14} /> Ücretsiz Keşif
                </span>
                <span className="flex items-center justify-center gap-1.5 text-xs md:text-sm text-white/80 w-full sm:w-auto sm:justify-start">
                  <Clock size={14} /> 3-7 iş gününde üretim & teslimat
                </span>
              </div>
              </div>

              {/* Sağ: Siz Biz Arayalım Formu */}
              <div className="w-full max-w-lg mx-auto lg:ml-auto">
                <HeroCallbackForm />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar — kayar güven rozetleri */}
        <TrustBar />

        {/* Plise Perde Nedir? — Featured Snippet Hedefi */}
        <section aria-label="Plise Perde Nedir" className="bg-white py-10 md:py-12">
          <div className="mx-auto max-w-[1536px] px-4 md:px-6">
            <div className="max-w-4xl">
              <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">
                Plise Perde Nedir? Özet ve Özellikleri
              </h2>
              <p className="text-sm md:text-base text-brand-text-light leading-relaxed mb-6">
                Plise perde, polyester kumaşın harmonika şeklinde katlanmasıyla oluşan pencere perdesidir. Üst ve alt profil arasındaki ip sistemiyle açılıp kapanır. Tül, güneşlik, yarı karartma, tam karartma ve honeycomb modelleriyle farklı ışık kontrol seviyeleri sunar. Vidalı, yapışkanlı, portrayli, vidasız ve kancalı montaj seçenekleriyle her pencere tipine uyum sağlar.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border border-brand-border rounded-lg overflow-hidden">
                  <caption className="sr-only">Plise Perde Teknik Özellikleri</caption>
                  <thead>
                    <tr className="bg-brand-bg">
                      <th scope="col" className="text-left px-4 py-3 font-semibold text-brand-text border-b border-brand-border">Özellik</th>
                      <th scope="col" className="text-left px-4 py-3 font-semibold text-brand-text border-b border-brand-border">Değer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <th scope="row" className="text-left px-4 py-3 font-medium text-brand-text">Malzeme</th>
                      <td className="px-4 py-3 text-brand-text-light">Polyester %100, antistatik opsiyonel</td>
                    </tr>
                    <tr className="border-b border-brand-border bg-brand-bg/30">
                      <th scope="row" className="text-left px-4 py-3 font-medium text-brand-text">Işık geçirgenlik</th>
                      <td className="px-4 py-3 text-brand-text-light">%0 (Blackout) – %85 (Tül)</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <th scope="row" className="text-left px-4 py-3 font-medium text-brand-text">U-değeri</th>
                      <td className="px-4 py-3 text-brand-text-light">&lt;2.0 W/m²K (Honeycomb)</td>
                    </tr>
                    <tr className="border-b border-brand-border bg-brand-bg/30">
                      <th scope="row" className="text-left px-4 py-3 font-medium text-brand-text">Ses yalıtımı</th>
                      <td className="px-4 py-3 text-brand-text-light">Honeycomb&apos;da %30-45 ses azaltması</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <th scope="row" className="text-left px-4 py-3 font-medium text-brand-text">Özel form</th>
                      <td className="px-4 py-3 text-brand-text-light">Üçgen, kemerli, yamuk — özel ölçü</td>
                    </tr>
                    <tr className="border-b border-brand-border bg-brand-bg/30">
                      <th scope="row" className="text-left px-4 py-3 font-medium text-brand-text">Garanti</th>
                      <td className="px-4 py-3 text-brand-text-light">2 yıl (profil + kumaş)</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <th scope="row" className="text-left px-4 py-3 font-medium text-brand-text">Teslimat</th>
                      <td className="px-4 py-3 text-brand-text-light">3-7 iş günü</td>
                    </tr>
                    <tr className="border-b border-brand-border bg-brand-bg/30">
                      <th scope="row" className="text-left px-4 py-3 font-medium text-brand-text">Montaj</th>
                      <td className="px-4 py-3 text-brand-text-light">Vidalı, yapışkanlı, portrayli, vidasız, kancalı</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-left px-4 py-3 font-medium text-brand-text">Kumaş</th>
                      <td className="px-4 py-3 text-brand-text-light">Yıkanabilir, antistatik (toz tutmaz)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Link
                href="/plise-perde-nedir"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
              >
                Detaylı bilgi için: Plise Perde Nedir?
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="bg-white py-10 md:py-12">
          <div className="mx-auto max-w-[1536px] px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg md:text-xl font-semibold text-brand-text">
                Plise Perde Modelleri
              </h2>
              <Link
                href="/urunlerimiz"
                className="flex items-center gap-1 text-sm text-brand hover:text-brand-dark transition-colors"
              >
                Tümü <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {productCards.map((p) => (
                <article key={p.label} className="p-4 bg-white border border-brand-border rounded-lg">
                  <h3 className="text-sm font-medium text-brand-text mb-1">
                    {p.label}
                  </h3>
                  <p className="text-xs text-brand-text-light">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-brand-bg py-10 md:py-12">
          <div className="mx-auto max-w-[1536px] px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg md:text-xl font-semibold text-brand-text">
                Hizmetlerimiz
              </h2>
              <Link
                href="/hizmetlerimiz"
                className="flex items-center gap-1 text-sm text-brand hover:text-brand-dark transition-colors"
              >
                Tümü <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {serviceCards.map((s) => (
                <article key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-start gap-3 p-4 bg-white border border-brand-border rounded-lg hover:border-brand transition-colors"
                  >
                    <s.icon size={20} className="text-brand mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-brand-text mb-0.5">
                        {s.label}
                      </h3>
                      <p className="text-xs text-brand-text-light">{s.desc}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SSS */}
        <section aria-label="Sıkça Sorulan Sorular" className="bg-brand-bg py-10 md:py-12">
          <div className="mx-auto max-w-[1536px] px-4 md:px-6">
            <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="p-5 bg-white border border-brand-border rounded-lg">
                  <h3 className="text-sm font-semibold text-brand-text mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-brand-text-light leading-relaxed">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Hizmet Bölgeleri */}
        <section aria-label="Hizmet Bölgeleri" className="bg-white py-10 md:py-12 border-t border-brand-border">
          <div className="mx-auto max-w-[1536px] px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg md:text-xl font-semibold text-brand-text">
                Hizmet Bölgeleri
              </h2>
              <Link href="/hizmet-bolgeleri" className="text-sm text-brand hover:underline flex items-center gap-1">
                Tümünü Gör <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                { name: "İstanbul", slug: "istanbul-plise-perde" },
                { name: "Ankara", slug: "ankara-plise-perde" },
                { name: "İzmir", slug: "izmir-plise-perde" },
                { name: "Bursa", slug: "bursa-plise-perde" },
                { name: "Antalya", slug: "antalya-plise-perde" },
                { name: "Kocaeli", slug: "kocaeli-plise-perde" },
                { name: "Adana", slug: "adana-plise-perde" },
                { name: "Konya", slug: "konya-plise-perde" },
                { name: "Gaziantep", slug: "gaziantep-plise-perde" },
                { name: "Eskişehir", slug: "eskisehir-plise-perde" },
              ].map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="flex items-center justify-between px-4 py-3 bg-brand-bg border border-brand-border rounded-lg hover:border-brand transition-colors text-sm font-medium text-brand-text"
                >
                  {city.name}
                  <ChevronRight size={16} className="text-brand" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Karşılaştırmalar */}
        <section aria-label="Karşılaştırmalar" className="bg-brand-bg py-10 md:py-12">
          <div className="mx-auto max-w-[1536px] px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg md:text-xl font-semibold text-brand-text">
                Plise Perde Karşılaştırmaları
              </h2>
              <Link href="/karsilastirmalar" className="text-sm text-brand hover:underline flex items-center gap-1">
                Tümünü Gör <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { name: "Plise vs Zebra", slug: "plise-perde-vs-zebra-perde" },
                { name: "Plise vs Jaluzi", slug: "plise-perde-vs-jaluzi-perde" },
                { name: "Plise vs Stor", slug: "plise-perde-vs-stor-perde" },
                { name: "Plise vs Tül", slug: "plise-perde-vs-tul-perde" },
                { name: "Plise vs Honeycomb", slug: "plise-perde-vs-honeycomb-perde" },
                { name: "Plise vs Düet", slug: "plise-perde-vs-duet-perde" },
                { name: "Plise vs Fon", slug: "plise-perde-vs-fon-perde" },
                { name: "Plise vs Zip", slug: "plise-perde-vs-zip-perde" },
              ].map((cmp) => (
                <Link
                  key={cmp.slug}
                  href={`/${cmp.slug}`}
                  className="flex items-center justify-between px-4 py-3 bg-white border border-brand-border rounded-lg hover:border-brand transition-colors text-sm font-medium text-brand-text"
                >
                  {cmp.name}
                  <ChevronRight size={16} className="text-brand" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-10 md:py-12">
          <div className="mx-auto max-w-[1536px] px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto p-6 bg-brand-bg border border-brand-border rounded-lg">
              <h2 className="text-lg font-semibold text-brand-text mb-2">
                Ücretsiz Keşif ve Fiyat Teklifi
              </h2>
              <p className="text-sm text-brand-text-light mb-4">
                Plise perde ihtiyacınız için hemen iletişime geçin. İstanbul ve
                Türkiye geneli ücretsiz keşif hizmeti.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/kesif"
                  className="px-4 py-2.5 text-sm font-medium bg-brand text-white rounded-md hover:bg-brand-dark transition-colors"
                >
                  Ücretsiz Keşif Talep Et
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="px-4 py-2.5 text-sm font-medium border border-brand text-brand rounded-md hover:bg-brand-light transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomNav />
      <ServiceWorkerRegister />
    </>
  );
}
