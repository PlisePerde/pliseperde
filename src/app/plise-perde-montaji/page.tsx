import Link from "next/link";
import {
  Wrench,
  Shield,
  Hammer,
  Square,
  Anchor,
  Layers,
  Cpu,
  ChevronRight,
  Clock,
  Truck,
  Factory,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import FAQ, { type FAQItem } from "@/components/FAQ";
import JsonLd, {
  createBreadcrumbJsonLd,
  createWebPageSchema,
  createCollectionPageSchema,
  createFAQSchema,
} from "@/components/JsonLd";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Montajı — Tipleri, Çeşitleri & Fiyatları",
  description:
    "Plise perde montajı: vidalı, vidasız, yapışkanlı, kancalı, portrayli, braketli ve motorlu montaj tipleri. Her pencere tipine uygun montaj. Profesyonel montaj, 2 yıl garanti.",
  slug: "plise-perde-montaji",
  keywords: ["plise perde montajı", "plise perde montaj tipleri", "plise perde montaj çeşitleri"],
});

const montajTipleri = [
  {
    name: "Vidalı Plise Perde",
    slug: "vidali-plise-perde",
    desc: "En sağlam montaj. Profil vidalar ile çerçeveye sabitlenir. Ağır kumaş ve motorlu sistemler için ideal.",
    icon: Wrench,
    features: ["Kalıcı", "En sağlam", "Ağır kumaş uyumlu"],
  },
  {
    name: "Vidasız Plise Perde",
    slug: "vidasiz-plise-perde",
    desc: "Delmesiz montaj. Yapışkanlı veya kancalı sistem ile kiracı dostu. Hafif kumaşlar için uygun.",
    icon: Shield,
    features: ["Delmesiz", "Kiracı dostu", "Sökülebilir"],
  },
  {
    name: "Yapışkanlı Plise Perde",
    slug: "yapiskanli-plise-perde",
    desc: "Çift taraflı endüstriyel bant ile delmesiz montaj. PVC çerçeveye mükemmel yapışma. İz bırakmaz.",
    icon: Layers,
    features: ["Delmesiz", "Endüstriyel bant", "İz bırakmaz"],
  },
  {
    name: "Kancalı Plise Perde",
    slug: "kancali-plise-perde",
    desc: "Kanca-profil sistemi ile sökülüp takılır. Temizlik için en pratik. Saniyeler içinde sök-tak.",
    icon: Anchor,
    features: ["Sök-tak pratik", "Temizlik kolay", "Hızlı"],
  },
  {
    name: "Portrayli Plise Perde",
    slug: "portrayli-plise-perde",
    desc: "İnce profil ile estetik montaj. Minimal görünüm, profil neredeyse görünmez. Modern tasarım.",
    icon: Square,
    features: ["İnce profil", "Estetik", "Minimal görünüm"],
  },
  {
    name: "Braketli Plise Perde",
    slug: "braketli-plise-perde",
    desc: "Bracket ile sağlam ve esnek montaj. Vidalı kadar sağlam, sökülüp temizlenebilir. Her çerçeveye uygun.",
    icon: Hammer,
    features: ["Sağlam", "Sökülebilir", "Esnek"],
  },
  {
    name: "Motorlu Plise Perde",
    slug: "motorlu-plise-perde",
    desc: "Uzaktan kumanda ve akıllı ev sistemi ile kontrol. Otomasyonlu, sessiz motor. Geniş pencere ve yüksek tavan için ideal.",
    icon: Cpu,
    features: ["Uzaktan kumanda", "Akıllı ev", "Otomasyon"],
  },
];

const stats = [
  { icon: Wrench, value: "7", label: "Montaj Tipi" },
  { icon: Factory, value: "Üretici", label: "Profesyonel Montaj" },
  { icon: Shield, value: "2 Yıl", label: "Garanti" },
  { icon: Truck, value: "81 İl", label: "Türkiye Geneli" },
];

const faqs: FAQItem[] = [
  {
    question: "Plise perde montajı kaç tipi var?",
    answer: "Plise perde montajında 7 tip mevcuttur: vidalı, vidasız, yapışkanlı, kancalı, portrayli, braketli ve motorlu. Her tip farklı ihtiyaça cevap verir — kalıcı, delmesiz, pratik veya otomatik.",
  },
  {
    question: "Hangi montaj tipi en sağlam?",
    answer: "Vidalı montaj en sağlam seçenektir. Profil vidalar ile çerçeveye sabitlenir ve kalıcı bir çözüm sunar. Ağır kumaşlar ve motorlu sistemler için vidalı montaj önerilir.",
  },
  {
    question: "Kiracı isem hangi montaj tipi uygun?",
    answer: "Kiracılar için vidasız, yapışkanlı veya kancalı montaj önerilir. Bu tipler delmesizdir — pencere çerçevesine zarar vermez. Taşınırken perde sökülüp yeni eve götürülebilir.",
  },
  {
    question: "Plise perde montajı ücretli mi?",
    answer: "İstanbul, Kocaeli ve Sakarya'da yerinde montaj hizmeti ücretsizdir. Türkiye geneli kargo gönderiminde montaj müşteriye aittir, ancak montaj talimatı ve video destek sağlanır.",
  },
  {
    question: "Montaj ne kadar sürer?",
    answer: "Tek pencere montajı ortalama 15-30 dakika sürer. Profesyonel montaj ekibimiz tüm pencereleri aynı gün içinde tamamlar. Özel ölçü üretim 3-7 iş gününde teslim edilir.",
  },
  {
    question: "Motorlu montaj her pencereye yapılabilir mi?",
    answer: "Motorlu montaj geniş pencere ve yüksek tavanlar için idealdir. Dar pencerelerde manuel montaj daha pratiktir. Motorlu sistem tubular motor, uzaktan kumanda ve akıllı ev uyumu ile gelir.",
  },
];

export default function PlisePerdeMontajiPage() {
  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(["Ana Sayfa", "Plise Perde Montajı"]),
          createWebPageSchema({
            name: "Plise Perde Montajı",
            description: "Plise perde montaj tipleri: vidalı, vidasız, yapışkanlı, kancalı, portrayli, braketli, motorlu.",
            url: "/plise-perde-montaji",
          }),
          createCollectionPageSchema({
            name: "Plise Perde Montajı",
            description: "7 montaj tipi — vidalı, vidasız, yapışkanlı, kancalı, portrayli, braketli, motorlu.",
            url: "/plise-perde-montaji",
            items: montajTipleri.map((m) => ({ name: m.name, url: `/${m.slug}` })),
          }),
          createFAQSchema(faqs),
        ]}
      />

      <PageHeading
        title="Plise Perde Montajı"
        description="Plise perde montajı, pencere tipinize ve ihtiyacınıza göre değişir. Vidalı, vidasız, yapışkanlı, kancalı, portrayli, braketli ve motorlu montaj tipleri arasından size uygun olanı seçin. Her tip üretici garantisi ve profesyonel montaj ile gelir."
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Montajı", url: "/plise-perde-montaji" }]}
        highlight="Vidalı · Vidasız · Yapışkanlı · Kancalı · Portrayli · Braketli · Motorlu"
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

      {/* Montaj Tipleri */}
      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-6">Plise Perde Montaj Tipleri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {montajTipleri.map((m) => (
              <article key={m.slug} className="bg-white border border-brand-border rounded-lg hover:border-brand transition-colors group">
                <Link href={`/${m.slug}`} className="block p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 shrink-0">
                      <m.icon size={20} className="text-brand" />
                    </span>
                    <h3 className="text-sm font-semibold text-brand-text">{m.name}</h3>
                  </div>
                  <p className="text-xs text-brand-text-light mb-3 leading-relaxed">{m.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {m.features.map((f) => (
                      <span key={f} className="text-[10px] px-2 py-0.5 bg-brand-bg border border-brand-border rounded text-brand-text-light">{f}</span>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-brand flex items-center gap-0.5 pt-3 border-t border-brand-border">
                    Detaylar <ChevronRight size={14} />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Montaj Tipleri Karşılaştırma */}
      <section className="bg-brand-bg py-10 md:py-12">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-6">Montaj Tipleri Karşılaştırma</h2>
          <div className="overflow-x-auto border border-brand rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand text-white">
                  <th scope="col" className="px-3 py-2 text-left font-medium border-r border-brand-border/30">Montaj Tipi</th>
                  <th scope="col" className="px-3 py-2 text-left font-medium border-r border-brand-border/30">Delme</th>
                  <th scope="col" className="px-3 py-2 text-left font-medium border-r border-brand-border/30">Sağlamlık</th>
                  <th scope="col" className="px-3 py-2 text-left font-medium border-r border-brand-border/30">Sökülebilir</th>
                  <th scope="col" className="px-3 py-2 text-left font-medium">Uygun Kumaş</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-white transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Vidalı</th>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Evet</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Yüksek</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Zor</td>
                  <td className="px-3 py-2 text-brand-text-light">Tüm kumaşlar</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-white transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Vidasız</th>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Hayır</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">İyi</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Kolay</td>
                  <td className="px-3 py-2 text-brand-text-light">Hafif-orta</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-white transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Yapışkanlı</th>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Hayır</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">İyi</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Kolay</td>
                  <td className="px-3 py-2 text-brand-text-light">Hafif-orta</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-white transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Kancalı</th>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Hayır</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">İyi</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Çok kolay</td>
                  <td className="px-3 py-2 text-brand-text-light">Hafif-orta</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-white transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Portrayli</th>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Seçenekli</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">İyi</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Orta</td>
                  <td className="px-3 py-2 text-brand-text-light">Hafif-orta</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-white transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Braketli</th>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Evet</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Yüksek</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Kolay</td>
                  <td className="px-3 py-2 text-brand-text-light">Tüm kumaşlar</td>
                </tr>
                <tr className="border-b border-brand-border last:border-b-0 hover:bg-white transition-colors">
                  <th scope="row" className="px-3 py-2 text-left font-medium text-brand-text border-r border-brand-border">Motorlu</th>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Evet</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Yüksek</td>
                  <td className="px-3 py-2 text-brand-text-light border-r border-brand-border">Zor</td>
                  <td className="px-3 py-2 text-brand-text-light">Tüm kumaşlar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Montaj Hizmeti */}
      <section className="bg-white py-10 md:py-12 border-t border-brand-border">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <div className="py-6 md:py-8">
            <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">Profesyonel Montaj Hizmeti</h2>
            <p className="text-sm md:text-base text-brand-text-light leading-relaxed mb-6">
              Plise perde montajı, doğru tip seçimi ve profesyonel uygulama ile uzun ömürlü olur. İstanbul, Kocaeli ve Sakarya'da yerinde montaj hizmeti sunuyoruz. Türkiye geneli kargo gönderiminde montaj talimatı ve video destek sağlanır.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-brand-bg border border-brand-border rounded-lg">
                <Clock size={20} className="text-brand mb-2" />
                <p className="text-sm font-medium text-brand-text mb-1">Hızlı Montaj</p>
                <p className="text-xs text-brand-text-light">Tek pencere 15-30 dakika</p>
              </div>
              <div className="p-4 bg-brand-bg border border-brand-border rounded-lg">
                <Shield size={20} className="text-brand mb-2" />
                <p className="text-sm font-medium text-brand-text mb-1">2 Yıl Garanti</p>
                <p className="text-xs text-brand-text-light">Profil + kumaş + montaj</p>
              </div>
              <div className="p-4 bg-brand-bg border border-brand-border rounded-lg">
                <Truck size={20} className="text-brand mb-2" />
                <p className="text-sm font-medium text-brand-text mb-1">81 İl Hizmet</p>
                <p className="text-xs text-brand-text-light">Kargo + video destek</p>
              </div>
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
