import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Download,
  ChevronRight,
  Sun,
  Moon,
  Layers,
  Wrench,
  Shield,
  Ruler,
  Factory,
  Truck,
  Clock,
  Palette,
  Cpu,
  Wind,
  Eye,
  EyeOff,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import FAQ, { type FAQItem } from "@/components/FAQ";
import JsonLd, {
  createBreadcrumbJsonLd,
  createWebPageSchema,
  createCollectionPageSchema,
} from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Katalog — Tüm Modeller, Kumaş ve Montaj",
  description:
    "Plise perde katalog: tüm modeller (tül, güneşlik, karartma, honeycomb, düet, motorlu), kumaş tipleri, montaj seçenekleri ve renkler. PDF indirme, özel ölçü üretim.",
  slug: "plise-perde-katalog",
  keywords: ["plise perde katalog", "plise perde modelleri", "plise perde çeşitleri"],
});

const stats = [
  { icon: Layers, value: "10+", label: "Model" },
  { icon: Palette, value: "20+", label: "Renk" },
  { icon: Wrench, value: "5", label: "Montaj Tipi" },
  { icon: Shield, value: "2 Yıl", label: "Garanti" },
];

const models = [
  {
    name: "Plise Perde",
    slug: "plise-perde",
    image: "/mega-menu/plise-perdeler.webp",
    desc: "Harmonika katlamalı, polyester kumaş — temel model",
    light: "%70-85",
    tags: ["Tül", "Güneşlik", "Karartma"],
    icon: Sun,
  },
  {
    name: "Honeycomb Perde",
    slug: "honeycomb-perde",
    image: "/mega-menu/honeycomb-perdeler.webp",
    desc: "Petek hücreli, ısı yalıtımı — enerji tasarrufu",
    light: "%5-50",
    tags: ["Isı Yalıtımı", "Ses Yalıtımı"],
    icon: Wind,
  },
  {
    name: "Düet Perde",
    slug: "duet-perde",
    image: "/mega-menu/duet-perdeler.webp",
    desc: "Çift hücreli, gece-gündüz — ışık + gizlilik dengesi",
    light: "%0-50",
    tags: ["Gece-Gündüz", "Çift Katman"],
    icon: Layers,
  },
  {
    name: "Blackout Plise Perde",
    slug: "blackout-plise-perde",
    image: "/mega-menu/plise-perdeler.webp",
    desc: "Tam karartma, %100 ışık kesme — maksimum gizlilik",
    light: "%0",
    tags: ["Tam Karartma", "UV Koruma"],
    icon: Moon,
  },
  {
    name: "Gece Gündüz Plise Perde",
    slug: "gece-gunduz-plise-perde",
    image: "/mega-menu/plise-perdeler.webp",
    desc: "İki katmanlı, esnek ışık kontrolü — tek perde",
    light: "%0-70",
    tags: ["Çift Katman", "Esnek"],
    icon: Eye,
  },
  {
    name: "Motorlu Plise Perde",
    slug: "motorlu-plise-perde",
    image: "/mega-menu/plise-perdeler.webp",
    desc: "Tubular motor, uzaktan kumanda — akıllı ev uyumlu",
    light: "%0-85",
    tags: ["Motorlu", "Akıllı Ev", "Kumanda"],
    icon: Cpu,
  },
  {
    name: "Kancalı Plise Perde",
    slug: "kancali-plise-perde",
    image: "/mega-menu/plise-perdeler.webp",
    desc: "Pratik takılır çıkarılır — temizlik için kolay",
    light: "%0-85",
    tags: ["Kancalı", "Pratik"],
    icon: Wrench,
  },
  {
    name: "Desenli Plise Perde",
    slug: "desenli-plise-perde",
    image: "/mega-menu/plise-perdeler.webp",
    desc: "Dokuma desenli, dekoratif — mekan karakteri",
    light: "%10-50",
    tags: ["Desenli", "Dekoratif"],
    icon: Palette,
  },
  {
    name: "Düz Plise Perde",
    slug: "duz-plise-perde",
    image: "/mega-menu/plise-perdeler.webp",
    desc: "Sade, minimalist — modern mekanlar için",
    light: "%0-85",
    tags: ["Düz", "Minimalist"],
    icon: Sun,
  },
];

const fabricTypes = [
  {
    name: "Tül Kumaş",
    light: "%70-85",
    privacy: "Az",
    usage: "Oturma odası, mutfak",
    icon: Sun,
  },
  {
    name: "Güneşlik Kumaş",
    light: "%30-50",
    privacy: "İyi",
    usage: "Salon, çalışma odası",
    icon: Eye,
  },
  {
    name: "Yarı Karartma Kumaş",
    light: "%10-20",
    privacy: "Yüksek",
    usage: "Yatak odası, çocuk odası",
    icon: EyeOff,
  },
  {
    name: "Tam Karartma (Blackout)",
    light: "%0",
    privacy: "Tam",
    usage: "Yatak odası, sinema odası",
    icon: Moon,
  },
  {
    name: "Honeycomb Kumaş",
    light: "%5-50",
    privacy: "İyi",
    usage: "Salon, yatak odası, kış bahçesi",
    icon: Wind,
  },
];

const montajTypes = [
  { name: "Vidalı Montaj", slug: "vidali-plise-perde", desc: "En sağlam, kalıcı çözüm — vidalarla profile sabitlenir", icon: Wrench },
  { name: "Yapışkanlı Montaj", slug: "yapiskanli-plise-perde", desc: "Delmesiz, çift taraflı bant — kiracılar için ideal", icon: Wrench },
  { name: "Portrayli Montaj", slug: "portrayli-plise-perde", desc: "Pencere kapağı arasına sıkışır — delmesiz, pratik", icon: Wrench },
  { name: "Braketli Montaj", slug: "braketli-plise-perde", desc: "Sağlam ve esnek — sökülüp temizlenebilir", icon: Wrench },
  { name: "Kancalı Montaj", slug: "kancali-plise-perde", desc: "Takılır çıkarır — temizlik ve değişim için kolay", icon: Wrench },
];

const faqs: FAQItem[] = [
  {
    question: "Plise perde katalog PDF olarak mevcut mu?",
    answer: "Evet, sayfanın altındaki 'Katalog PDF İndir' butonundan tüm modelleri, kumaş tiplerini ve montaj seçeneklerini içeren PDF kataloğunu indirebilirsiniz.",
  },
  {
    question: "Katalogda kaç model var?",
    answer: "Katalogda 10+ model mevcuttur: plise perde, honeycomb, düet, blackout, gece gündüz, motorlu, braketli, kancalı, desenli ve düz modeller.",
  },
  {
    question: "Hangi modeli seçeceğimi bilemiyorum, yardımcı olur musunuz?",
    answer: "Evet. WhatsApp üzerinden iletişime geçebilir veya ücretsiz keşif talep edebilirsiniz. Uzman ekibimiz mekanınızın özelliklerine göre en uygun modeli önerir.",
  },
  {
    question: "Katalogdaki tüm modeller özel ölçü üretiliyor mu?",
    answer: "Evet, tüm modeller özel ölçü üretilir. Genişlik 30-300 cm, yükseklik 40-280 cm aralığında üretim yapılır. Üçgen, kemerli, yamuk gibi özel formlar da mevcuttur.",
  },
  {
    question: "Motorlu model katalogda var mı?",
    answer: "Evet, motorlu plise perde katalogda yer alır. Tubular motor, uzaktan kumanda ve akıllı ev sistemleriyle uyumlu çalışır.",
  },
  {
    question: "Katalog ücretsiz mi?",
    answer: "Evet, dijital katalog (PDF) tamamen ücretsizdir. Fiziksel numune talebi de Türkiye geneli ücretsiz gönderilir.",
  },
];

export default function PlisePerdeKatalogPage() {
  return (
    <PageLayout>
      <JsonLd schemas={[
        createBreadcrumbJsonLd(["Ana Sayfa", "Plise Perde Katalog"]),
        createWebPageSchema({
          name: "Plise Perde Katalog",
          description: "Tüm modeller, kumaş tipleri, montaj seçenekleri ve renkler.",
          url: "/plise-perde-katalog/",
        }),
        createCollectionPageSchema({
          name: "Plise Perde Katalog",
          description: "10+ model, 20+ renk, 5 montaj tipi — özel ölçü üretim.",
          url: "/plise-perde-katalog",
          items: models.map((m) => ({ name: m.name, url: `/${m.slug}` })),
        }),
      ]} />

      <PageHeading
        title="Plise Perde Katalog"
        description="Tüm modeller, kumaş tipleri, montaj seçenekleri ve renkler tek sayfada. Özel ölçü üretim, 2 yıl garanti, 3-7 iş gününde teslimat."
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Katalog", url: "/plise-perde-katalog" }]}
      />

      {/* Stats Bar */}
      <section className="bg-brand-bg py-6 border-y border-brand-border">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 p-4 bg-white border border-brand-border rounded-lg">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 shrink-0">
                  <s.icon size={20} className="text-brand" />
                </span>
                <div>
                  <p className="text-lg font-bold text-brand-text">{s.value}</p>
                  <p className="text-xs text-brand-text-light">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white py-6">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            <a href="#modeller" className="px-4 py-2 text-sm font-medium bg-brand-bg border border-brand-border rounded-md hover:border-brand transition-colors text-brand-text">Modeller</a>
            <a href="#kumas" className="px-4 py-2 text-sm font-medium bg-brand-bg border border-brand-border rounded-md hover:border-brand transition-colors text-brand-text">Kumaş Tipleri</a>
            <a href="#montaj" className="px-4 py-2 text-sm font-medium bg-brand-bg border border-brand-border rounded-md hover:border-brand transition-colors text-brand-text">Montaj Tipleri</a>
            <a href="#renkler" className="px-4 py-2 text-sm font-medium bg-brand-bg border border-brand-border rounded-md hover:border-brand transition-colors text-brand-text">Renkler</a>
            <a href="#pdf" className="px-4 py-2 text-sm font-medium bg-brand text-white rounded-md hover:bg-brand-dark transition-colors">PDF İndir</a>
          </div>
        </div>
      </section>

      {/* Modeller */}
      <section id="modeller" className="bg-white py-10 md:py-12 scroll-mt-20">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-brand-text">Plise Perde Modelleri</h2>
            <Link href="/plise-perde-modelleri" className="text-sm text-brand hover:underline flex items-center gap-1">
              Tümü <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((m) => (
              <article key={m.slug} className="bg-white border border-brand-border rounded-lg overflow-hidden hover:border-brand transition-colors group">
                <Link href={`/${m.slug}`} className="block">
                  <div className="aspect-[4/3] bg-brand-bg overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.name}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand/10 shrink-0">
                        <m.icon size={14} className="text-brand" />
                      </span>
                      <h3 className="text-sm font-semibold text-brand-text">{m.name}</h3>
                    </div>
                    <p className="text-xs text-brand-text-light mb-3 leading-relaxed">{m.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {m.tags.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 bg-brand-bg border border-brand-border rounded text-brand-text-light">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-brand-border">
                      <span className="text-xs text-brand-text-light">Işık: <span className="font-medium text-brand-text">{m.light}</span></span>
                      <span className="text-xs font-medium text-brand flex items-center gap-0.5">İncele <ChevronRight size={14} /></span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Kumaş Tipleri */}
      <section id="kumas" className="bg-brand-bg py-10 md:py-12 scroll-mt-20">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-6">Kumaş Tipleri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {fabricTypes.map((f) => (
              <article key={f.name} className="p-4 bg-white border border-brand-border rounded-lg hover:border-brand transition-colors">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 mb-3">
                  <f.icon size={18} className="text-brand" />
                </span>
                <h3 className="text-sm font-semibold text-brand-text mb-2">{f.name}</h3>
                <dl className="space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <dt className="text-brand-text-light">Işık</dt>
                    <dd className="font-medium text-brand-text">{f.light}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-brand-text-light">Gizlilik</dt>
                    <dd className="font-medium text-brand-text">{f.privacy}</dd>
                  </div>
                  <div>
                    <dt className="text-brand-text-light">Kullanım</dt>
                    <dd className="text-brand-text mt-0.5">{f.usage}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Montaj Tipleri */}
      <section id="montaj" className="bg-white py-10 md:py-12 scroll-mt-20">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-6">Montaj Tipleri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {montajTypes.map((m) => (
              <Link key={m.name} href={`/${m.slug}`} className="block p-4 bg-white border border-brand-border rounded-lg hover:border-brand transition-colors group">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 mb-3">
                  <m.icon size={18} className="text-brand" />
                </span>
                <h3 className="text-sm font-semibold text-brand-text mb-2">{m.name}</h3>
                <p className="text-xs text-brand-text-light mb-3 leading-relaxed">{m.desc}</p>
                <span className="text-xs font-medium text-brand flex items-center gap-0.5">İncele <ChevronRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Renkler */}
      <section id="renkler" className="bg-brand-bg py-10 md:py-12 scroll-mt-20">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">Renk Seçenekleri</h2>
              <p className="text-sm md:text-base text-brand-text-light leading-relaxed mb-6">
                Plise perde renkleri iki bileşenden oluşur: <strong>profil rengi</strong> (alüminyum profil — 7 renk) ve <strong>kumaş rengi</strong> (kumaş tipine göre 5-8 renk). Toplam 20+ renk kombinasyonu mümkündür. Numune talep ederek gerçek aydınlatmada karar verebilirsiniz.
              </p>
              <Link
                href="/plise-perde-renkleri"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-brand text-white rounded-md hover:bg-brand-dark transition-colors"
              >
                Renkleri İncele
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {[
                { name: "Beyaz", color: "#ffffff" },
                { name: "Bej", color: "#e8dcc4" },
                { name: "Ekru", color: "#f0e6d2" },
                { name: "Gri", color: "#9ca3af" },
                { name: "Antrasit", color: "#374151" },
                { name: "Kahve", color: "#6b4423" },
                { name: "Siyah", color: "#1f2937" },
              ].map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-1">
                  <div
                    className="w-full aspect-square rounded-lg border border-brand-border"
                    style={{ backgroundColor: r.color }}
                    aria-hidden="true"
                  />
                  <span className="text-[10px] text-brand-text-light">{r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teknik Özet Tablo */}
      <section className="bg-white py-10 md:py-12 border-t border-brand-border">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-6">Teknik Özet</h2>
          <div className="overflow-x-auto border border-brand rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand text-white">
                  <th scope="col" className="px-3 py-2 text-left font-medium border-r border-brand-border/30">Özellik</th>
                  <th scope="col" className="px-3 py-2 text-left font-medium">Değer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-brand-bg transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Malzeme</th>
                  <td className="px-3 py-2 text-brand-text-light">Polyester %100, antistatik opsiyonel</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-brand-bg transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Işık geçirgenlik</th>
                  <td className="px-3 py-2 text-brand-text-light">%0 (Blackout) – %85 (Tül)</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-brand-bg transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Genişlik</th>
                  <td className="px-3 py-2 text-brand-text-light">30 cm – 300 cm (özel ölçü)</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-brand-bg transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Yükseklik</th>
                  <td className="px-3 py-2 text-brand-text-light">40 cm – 280 cm (özel ölçü)</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-brand-bg transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Montaj</th>
                  <td className="px-3 py-2 text-brand-text-light">Vidalı, yapışkanlı, kancalı, portrayli, braketli, motorlu</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-brand-bg transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Garanti</th>
                  <td className="px-3 py-2 text-brand-text-light">2 yıl (profil + kumaş), motor 5 yıl</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-brand-bg transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Teslimat</th>
                  <td className="px-3 py-2 text-brand-text-light">3-7 iş günü</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Üretim</th>
                  <td className="px-3 py-2 text-brand-text-light">İstanbul Pendik — özel ölçü</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PDF İndir CTA */}
      <section id="pdf" className="bg-brand py-10 md:py-12 scroll-mt-20">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 mb-4">
              <BookOpen size={28} className="text-white" />
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Plise Perde Katalog PDF</h2>
            <p className="text-sm md:text-base text-white/90 mb-6 leading-relaxed">
              Tüm modeller, kumaş tipleri, montaj seçenekleri ve teknik özellikleri içeren PDF kataloğunu ücretsiz indirin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/plise-perde-katalog.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base font-semibold bg-white text-brand rounded-md hover:bg-white/90 transition-colors"
              >
                <Download size={18} />
                Katalog PDF İndir
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base font-semibold border-2 border-white/80 text-white rounded-md hover:bg-white/10 transition-colors"
              >
                WhatsApp ile Sor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="bg-white py-10 md:py-12 border-t border-brand-border" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <div className="py-6 md:py-8">
            <h2 id="faq-heading" className="text-lg md:text-xl font-semibold text-brand-text mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
