import Link from "next/link";
import {
  Calculator,
  Phone,
  Shield,
  Truck,
  Factory,
  Wrench,
  Ruler,
  ChevronRight,
  Clock,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomNav from "@/components/BottomNav";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { siteConfig } from "@/lib/site-config";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";

const productCards = [
  { label: "Tül Plise Perde", desc: "Işık geçirgen, dekoratif" },
  { label: "Güneşlik Plise Perde", desc: "Güneş ışınını filtreler" },
  { label: "Yarı Karartma Plise Perde", desc: "Yumuşak ışık, gizlilik" },
  { label: "Tam Karartma Plise Perde", desc: "Tam karanlık, maksimum gizlilik" },
  { label: "Honeycomb Perde", desc: "Isı yalıtımı, enerji tasarrufu" },
  { label: "Gece Gündüz Plise Perde", desc: "İki katman, esnek kullanım" },
  { label: "Motorlu Plise Perde", desc: "Uzaktan kumanda, akıllı ev" },
  { label: "Vidasız Plise Perde", desc: "Delmesiz montaj" },
  { label: "Kancalı Plise Perde", desc: "Pratik takılır çıkarılır" },
  { label: "Plise Perde Sineklik", desc: "Sinek ve toz koruması" },
];

const serviceCards = [
  { label: "Montaj", href: "/montaj", icon: Wrench, desc: "Profesyonel montaj hizmeti" },
  { label: "Ölçü Alma Desteği", href: "/olcu-alma-destegi", icon: Calculator, desc: "Ücretsiz ölçü danışmanlığı" },
  { label: "Ücretsiz Keşif", href: "/ucretsiz-kesif", icon: Phone, desc: "Yerinde keşif ve teklif" },
  { label: "Fiyat Hesaplama", href: "/plise-perde-fiyat-hesaplama", icon: Calculator, desc: "Online fiyat hesaplama" },
];

const features = [
  { icon: Factory, title: "Üretici", desc: "2022'den beri kendi üretimimiz" },
  { icon: Shield, title: "2 Yıl Garanti", desc: "Profil ve kumaş garantisi" },
  { icon: Truck, title: "Türkiye Geneli", desc: "Kargo ve montaj hizmeti" },
  { icon: Wrench, title: "Profesyonel Montaj", desc: "Deneyimli montaj ekibi" },
  { icon: Ruler, title: "Ücretsiz Keşif", desc: "Ölçü ve teklif ücretsiz" },
  { icon: Clock, title: "Hızlı Teslimat", desc: "2-4 iş gününde üretim" },
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
      <Header />
      <main className="flex-1 pb-14 md:pb-0">
        {/* Hero */}
        <section className="relative min-h-[420px] md:min-h-[540px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/hero.webp)", backgroundPosition: "center center", backgroundSize: "cover" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-[1536px] px-4 md:px-6 py-16 md:py-24 w-full">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Plise Perde — Özel Ölçü Üretim & Hızlı Teslimat
              </h1>
              <p className="text-sm md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
                2022&apos;den beri üretici garantisi ile. Tül, güneşlik, karartma,
                honeycomb, motorlu modeller. Ücretsiz keşif, profesyonel montaj,
                Türkiye geneli hizmet.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
                <Link
                  href="/plise-perde-fiyat-hesaplama"
                  className="flex items-center gap-2 px-6 py-3 text-sm md:text-base font-semibold bg-brand text-white rounded-lg hover:bg-brand-dark transition-colors"
                >
                  <Calculator size={18} />
                  Fiyat Hesapla
                </Link>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 text-sm md:text-base font-semibold border-2 border-white/80 text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Phone size={18} />
                  WhatsApp&apos;tan İletişime Geç
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
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-brand-bg py-8 md:py-10">
          <div className="mx-auto max-w-[1536px] px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((f) => (
                <article
                  key={f.title}
                  className="flex flex-col items-center text-center p-4 bg-white border border-brand-border rounded-lg"
                >
                  <f.icon size={24} className="text-brand mb-2" />
                  <h3 className="text-sm font-semibold text-brand-text mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-brand-text-light">{f.desc}</p>
                </article>
              ))}
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
                  href="/ucretsiz-kesif"
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
