import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowUpDown,
  PanelsTopLeft,
  Box,
  Triangle,
  TrendingUp,
  MoveUpRight,
  Circle,
  Egg,
  Layers,
  ChevronRight,
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
  title: "Plise Perde Sistemleri — Tüm Uygulama Sistemleri",
  description:
    "Plise perde sistemleri: yatay, dikey, tavan, kasalı, üçgen, eğimli, açılı, yuvarlak ve oval. Her pencere formuna uygun plise perde sistemi. Özel ölçü üretim, 2 yıl garanti.",
  slug: "plise-perde-sistemleri",
  keywords: ["plise perde sistemleri", "plise perde sistem", "plise perde çeşitleri"],
});

const sistemler = [
  {
    name: "Yatay Plise Perde",
    slug: "yatay-plise-perde",
    desc: "Yatay açılan plise perde sistemi. Mutfak, banyo ve dar alanlar için ideal. Üstten alt açılım.",
    icon: ArrowLeftRight,
  },
  {
    name: "Dikey Plise Perde",
    slug: "dikey-plise-perde",
    desc: "Dikey açılan plise perde sistemi. Uzun pencereler, katlanır cam ve cam balkon için ideal.",
    icon: ArrowUpDown,
  },
  {
    name: "Tavan Plise Perde",
    slug: "tavan-plise-perde",
    desc: "Tavan montajlı plise perde sistemi. Vitrin, kış bahçesi, cam balkon ve yüksek tavanlar için.",
    icon: PanelsTopLeft,
  },
  {
    name: "Kasalı Plise Perde",
    slug: "kasali-plise-perde",
    desc: "Alüminyum kasa içinde gizli plise perde sistemi. Estetik, korumalı, modern görünüm.",
    icon: Box,
  },
  {
    name: "Üçgen Plise Perde",
    slug: "ucgen-plise-perde",
    desc: "Üçgen formda özel üretim plise perde. Çatı pencereleri ve beşik çatı için ideal.",
    icon: Triangle,
  },
  {
    name: "Eğimli Plise Perde",
    slug: "egimli-plise-perde",
    desc: "Eğimli yüzeylere özel plise perde sistemi. Çatı, merdiven boşluğu ve eğimli pencereler.",
    icon: TrendingUp,
  },
  {
    name: "Açılı Plise Perde",
    slug: "acili-plise-perde",
    desc: "Açılı formda özel üretim plise perde. Köşe pencere ve dikdörtgen olmayan yüzeyler için.",
    icon: MoveUpRight,
  },
  {
    name: "Yuvarlak Plise Perde",
    slug: "yuvarlak-plise-perde",
    desc: "Dairesel formda özel üretim plise perde. Yuvarlak pencere ve mimari özellikler için.",
    icon: Circle,
  },
  {
    name: "Oval Plise Perde",
    slug: "oval-plise-perde",
    desc: "Oval formda özel üretim plise perde. Kemerli pencere ve estetik mimari için ideal.",
    icon: Egg,
  },
  {
    name: "Çift Cam Arası Plise Perde",
    slug: "cift-cam-arasi-plise-perde",
    desc: "İki cam arasında monte edilen özel sistem. Tozsuz, sessiz, korunmalı. Çift cam pencereler için ideal.",
    icon: Layers,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Plise perde sistemleri kaç çeşit?",
    answer: "Plise perde sistemleri 9 ana grupta toplanır: yatay, dikey, tavan, kasalı, üçgen, eğimli, açılı, yuvarlak ve oval. Her sistem farklı pencere formuna ve uygulama yerine göre tasarlanmıştır.",
  },
  {
    question: "Hangi sistem benim için uygun?",
    answer: "Pencere tipinize göre değişir. Standart pencere için yatay veya dikey, tavan için tavan sistemi, çatı penceresi için üçgen veya eğimli, kemerli pencere için oval sistem uygundur. Ücretsiz keşif ile uzman ekibimiz önerebilir.",
  },
  {
    question: "Geometrik formdaki pencerelere plise perde takılır mı?",
    answer: "Evet. Üçgen, yuvarlak, oval ve açılı formlarda özel ölçü üretim yapılır. Her form için özel profil kesimi ve kumaş şekillendirme uygulanır. 2 yıl garanti ile gelir.",
  },
  {
    question: "Kasalı sistem nedir?",
    answer: "Kasalı sistemde plise perde alüminyum kasa içinde gizlenir. Perde kullanılmadığında kasa içinde kaybolur. Estetik ve korumalı çözüm arayanlar için ideal.",
  },
  {
    question: "Tavan plise perde nerelerde kullanılır?",
    answer: "Tavan plise perde vitrinler, kış bahçeleri, cam balkonlar ve yüksek tavanlı mekanlarda kullanılır. Tavan montajı ile ışık kontrolü ve gizlilik sağlanır.",
  },
  {
    question: "Tüm sistemler özel ölçü üretiliyor mu?",
    answer: "Evet, tüm sistemler özel ölçü üretilir. Genişlik 30-300 cm, yükseklik 40-280 cm aralığında üretim yapılır. Geometrik formlarda özel profil kesimi uygulanır.",
  },
];

export default function SistemlerimizPage() {
  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(["Ana Sayfa", "Plise Perde Sistemleri"]),
          createWebPageSchema({
            name: "Plise Perde Sistemleri",
            description: "9 plise perde sistemi: yatay, dikey, tavan, kasalı, üçgen, eğimli, açılı, yuvarlak, oval.",
            url: "/plise-perde-sistemleri",
          }),
          createCollectionPageSchema({
            name: "Plise Perde Sistemleri",
            description: "9 plise perde sistemi — her pencere formuna uygun.",
            url: "/plise-perde-sistemleri",
            items: sistemler.map((s) => ({ name: s.name, url: `/${s.slug}` })),
          }),
          createFAQSchema(faqs),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Sistemleri", url: "/plise-perde-sistemleri" }]}
        title="Plise Perde Sistemleri"
        description="Plise perde sistemleri, pencere formuna ve uygulama yerine göre değişir. Yatay, dikey, tavan, kasalı, üçgen, eğimli, açılı, yuvarlak ve oval sistemler arasından size uygun olanı seçin. Her sistem özel ölçü üretim ve 2 yıl garanti ile gelir."
        highlight="Yatay · Dikey · Tavan · Kasalı · Üçgen · Eğimli · Açılı · Yuvarlak · Oval · Çift Cam Arası"
      />

      {/* Sistem Kartları */}
      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-6">Plise Perde Sistem Çeşitleri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sistemler.map((s) => (
              <article key={s.slug} className="bg-white border border-brand-border rounded-lg hover:border-brand transition-colors group">
                <Link href={`/${s.slug}`} className="block p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 shrink-0">
                      <s.icon size={20} className="text-brand" />
                    </span>
                    <h3 className="text-sm font-semibold text-brand-text">{s.name}</h3>
                  </div>
                  <p className="text-xs text-brand-text-light mb-3 leading-relaxed">{s.desc}</p>
                  <span className="text-xs font-medium text-brand flex items-center gap-0.5 pt-3 border-t border-brand-border">
                    Detaylar <ChevronRight size={14} />
                  </span>
                </Link>
              </article>
            ))}
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
