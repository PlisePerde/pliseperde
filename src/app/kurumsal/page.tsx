import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import Link from "next/link";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import {
  Building2,
  Users,
  Leaf,
  Baby,
  Store,
  HelpCircle,
  Star,
  ShieldCheck,
  Phone,
  FileText,
  ScrollText,
  UserCircle,
  Factory,
  Award,
  Truck,
  Clock,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Kurumsal — Plise Perde Üretici",
  description:
    "Plise Perde kurumsal sayfası. Şirket bilgileri, üretim süreci, referanslar, sürdürülebilirlik, politikalar, sözleşmeler, garanti ve iletişim. 2022'den beri üretici.",
  slug: "kurumsal",
  keywords: [
    "plise perde kurumsal",
    "plise perde şirket",
    "plise perde üretici",
    "plise perde hakkında",
    "plise perde referanslar",
    "plise perde politikalar",
    "plise perde sözleşmeler",
    "plise perde garanti",
  ],
});

type CardItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
};

type CardCategory = {
  title: string;
  subtitle: string;
  items: CardItem[];
};

const categories: CardCategory[] = [
  {
    title: "Şirket Bilgileri",
    subtitle: "Biz kimiz, ne yapıyoruz?",
    items: [
      {
        icon: Building2,
        title: "Hakkımızda",
        desc: "2022'den beri İstanbul Pendik'te üretici. Şirket profili, misyon, üretim süreci.",
        href: "/hakkimizda",
      },
      {
        icon: Users,
        title: "Referanslarımız",
        desc: "2000+ tamamlanan proje, 500+ kurumsal müşteri. Otel, ofis, okul, hastane projeleri.",
        href: "/referanslarimiz",
      },
      {
        icon: Leaf,
        title: "Sürdürülebilirlik",
        desc: "Geri dönüştürülebilir malzeme, enerji tasarrufu, azaltılmış atık. Çevre dostu üretim.",
        href: "/surdurulebilirlik",
      },
      {
        icon: Baby,
        title: "Çocuk Güvenliği",
        desc: "Çocuk odaları için özel güvenlik önlemleri, ipzsiz modeller, anti-bakteriyel kumaş.",
        href: "/cocuk-guvenligi",
      },
      {
        icon: Store,
        title: "Plise Perde Bayilik",
        desc: "Üretici fiyatı, bölge garantisi, teknik destek. Türkiye geneli bayilik fırsatları.",
        href: "/plise-perde-bayilik",
      },
    ],
  },
  {
    title: "Müşteri Hizmetleri",
    subtitle: "Müşteri memnuniyeti önceliğimiz",
    items: [
      {
        icon: HelpCircle,
        title: "Sıkça Sorulan Sorular",
        desc: "Plise perde fiyatları, ölçü, montaj, garanti, teslimat hakkında merak edilenler.",
        href: "/sikca-sorulan-sorular",
      },
      {
        icon: Star,
        title: "Kullanıcı Yorumları",
        desc: "Gerçek müşteri yorumları ve memnuniyet oranları. 2000+ tamamlanan proje.",
        href: "/plise-perde-kullanici-yorumlari",
      },
      {
        icon: ShieldCheck,
        title: "Garanti ve Satış Sonrası",
        desc: "2 yıl ürün, 5 yıl motor garantisi. Satış sonrası servis ve teknik destek.",
        href: "/garanti-ve-satis-sonrasi-destek",
      },
      {
        icon: Phone,
        title: "İletişim",
        desc: "Telefon, WhatsApp, e-posta. Pendik İstanbul. Ücretsiz keşif için ulaşın.",
        href: "/iletisim",
      },
    ],
  },
  {
    title: "Yasal Belgeler",
    subtitle: "Şeffaflık ve yasal uyum",
    items: [
      {
        icon: FileText,
        title: "Politikalarımız",
        desc: "İade, ödeme, teslimat, garanti, gizlilik, KVKK politikaları. 15 politika.",
        href: "/politikalarimiz",
      },
      {
        icon: ScrollText,
        title: "Sözleşmelerimiz",
        desc: "Sipariş, üyelik, montaj, mesafeli satış sözleşmeleri. 6502 sayılı kanun uyumlu.",
        href: "/sozlesmelerimiz",
      },
      {
        icon: UserCircle,
        title: "Satıcı Bilgileri",
        desc: "Şirket bilgileri, adres, iletişim, sicil kaydı. Tüketici mevzuatı uyumlu.",
        href: "/satici-bilgileri",
      },
    ],
  },
];

const stats = [
  { icon: Factory, value: "2022", label: "Kuruluş Yılı" },
  { icon: Award, value: "2.000+", label: "Tamamlanan Proje" },
  { icon: Users, value: "500+", label: "Kurumsal Müşteri" },
  { icon: Truck, value: "81", label: "Hizmet Verilen İl" },
  { icon: Clock, value: "3-7", label: "İş Günü Teslimat" },
  { icon: ShieldCheck, value: "2 Yıl", label: "Ürün Garantisi" },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Plise Perde Kurumsal Sayfalar",
  itemListElement: categories.flatMap((cat, ci) =>
    cat.items.map((item, ii) => ({
      "@type": "ListItem",
      position: ci * 10 + ii + 1,
      name: item.title,
      description: item.desc,
      url: `${siteConfig.url}${item.href}/`,
    }))
  ),
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Kurumsal — Plise Perde",
  description:
    "Plise Perde kurumsal sayfası. Şirket bilgileri, referanslar, sürdürülebilirlik, politikalar, sözleşmeler, garanti ve iletişim.",
  url: `${siteConfig.url}/kurumsal/`,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

export default function KurumsalPage() {
  return (
    <PageLayout>
      <JsonLd
        schemas={[
          collectionPageSchema,
          itemListSchema,
          createBreadcrumbJsonLd([
            { name: "Ana Sayfa", url: "/" },
            { name: "Kurumsal", url: "/kurumsal/" },
          ]),
          createWebPageSchema({
            name: "Kurumsal — Plise Perde",
            description: "Plise Perde kurumsal sayfası.",
            url: "/kurumsal",
          }),
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-bg via-brand-bg to-brand-light/10 border-b border-brand-border overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1536px] px-4 md:px-6 py-10 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-brand-text-light">
              <li>
                <Link href="/" className="hover:text-brand transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-text font-medium">Kurumsal</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 leading-tight">
              Kurumsal
            </h1>
            <p className="text-base md:text-lg text-brand-text-light leading-relaxed mb-2">
              Plise Perde olarak 2022 yılından bu yana İstanbul Pendik'teki kendi üretim tesisimizde plise perde üretiyoruz. Aracısız doğrudan üretici fiyatı avantajıyla Türkiye geneli hizmet veriyoruz.
            </p>
            <p className="text-sm md:text-base text-brand-text-light leading-relaxed">
              Kurumsal sayfalarımızda şirket bilgilerimiz, üretim sürecimiz, referanslarımız, sürdürülebilirlik politikamız, müşteri hizmetleri, yasal belgeler ve iletişim bilgilerimizi bulabilirsiniz.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-8 md:mt-12">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-brand-border rounded-lg p-3 md:p-4 text-center"
              >
                <s.icon size={20} className="text-brand mx-auto mb-2" />
                <div className="text-lg md:text-xl font-bold text-brand-text">{s.value}</div>
                <div className="text-xs text-brand-text-light mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((cat, idx) => (
        <section
          key={cat.title}
          className={idx % 2 === 1 ? "bg-brand-bg/50" : "bg-white"}
          aria-labelledby={`section-${idx}`}
        >
          <div className="mx-auto max-w-[1536px] px-4 md:px-6 py-8 md:py-12">
            <div className="mb-6 md:mb-8">
              <h2
                id={`section-${idx}`}
                className="text-xl md:text-2xl font-bold text-brand-text mb-1"
              >
                {cat.title}
              </h2>
              <p className="text-sm text-brand-text-light">{cat.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cat.items.map((item) => (
                <article key={item.href}>
                  <Link
                    href={`${item.href}/`}
                    className="group block h-full p-5 bg-white border border-brand-border rounded-xl hover:border-brand hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                        <item.icon size={22} className="text-brand" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-brand-text mb-1.5 group-hover:text-brand transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-brand-text-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Company Info Bar */}
      <section className="bg-brand-text text-white py-8 md:py-10">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="shrink-0 mt-0.5 text-brand" />
              <div>
                <h3 className="text-sm font-semibold mb-1">Adres</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {siteConfig.address.street}, {siteConfig.address.district}/{siteConfig.address.city}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="shrink-0 mt-0.5 text-brand" />
              <div>
                <h3 className="text-sm font-semibold mb-1">Telefon</h3>
                <p className="text-xs text-white/70">
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-brand transition-colors">
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="shrink-0 mt-0.5 text-brand" />
              <div>
                <h3 className="text-sm font-semibold mb-1">Çalışma Saatleri</h3>
                <p className="text-xs text-white/70">
                  Pazartesi – Cumartesi, {siteConfig.openingHours.opens} – {siteConfig.openingHours.closes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
