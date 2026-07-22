import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import FAQ, { type FAQItem } from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import RefFormTrigger from "@/components/RefFormTrigger";
import JsonLd, {
  createBreadcrumbJsonLd,
  createWebPageSchema,
  createArticleSchema,
  createFAQSchema,
  createItemListSchema,
} from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { partners, customers, allReferences, referenceStats } from "@/data/references";
import { CheckCircle, Building, Calendar, ThumbsUp, Globe } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Referanslarımız — Plise Perde Projeleri ve Kurumsal Müşterilerimiz",
  description:
    "Plise Perde referansları: otel, ofis, okul, hastane ve konut projeleri. 2000+ tamamlanan proje, 500+ kurumsal müşteri. Kurumsal plise perde montajı ve toplu proje çözümleri.",
  slug: "referanslarimiz",
  ogImage: "/referanslarimiz.webp",
  ogImageAlt: "Plise Perde Referansları — Kurumsal Müşteriler ve Projeler",
  keywords: [
    "plise perde referans",
    "plise perde kurumsal müşteri",
    "plise perde otel projesi",
    "plise perde ofis montaj",
    "plise perde okul uygulaması",
    "plise perde toplu proje",
    "plise perde site projesi",
    "kurumsal perde montaj",
  ],
});

const statIcons: Record<string, React.ReactNode> = {
  "check-circle": <CheckCircle size={28} />,
  building: <Building size={28} />,
  calendar: <Calendar size={28} />,
  "thumbs-up": <ThumbsUp size={28} />,
};

const faqItems: FAQItem[] = [
  {
    question: "Kurumsal müşteri olarak özel fiyat alabilir miyim?",
    answer:
      "Evet, kurumsal müşterilere özel fiyat avantajları sunuyoruz. Proje kapsamına göre toplu indirim ve öncelikli üretim avantajı sağlıyoruz. İletişim sayfamızdan teklif alabilirsiniz.",
  },
  {
    question: "Hangi sektörlerde proje tamamladınız?",
    answer:
      "Otel ve konaklama, ofis ve plaza, eğitim kurumları, sağlık kurumları ve konut siteleri başta olmak üzere 2000'den fazla proje tamamladık. Her sektörde özel ihtiyaçlara yönelik çözümler sunuyoruz.",
  },
  {
    question: "İş ortaklığı nasıl kurulur?",
    answer:
      "İç mimarlar, mimarlık ofisleri ve dekorasyon firmaları ile iş ortaklığı kuruyoruz. İş ortaklarımıza özel indirim ve öncelikli üretim avantajları sunuyoruz. WhatsApp veya e-posta üzerinden başvurabilirsiniz.",
  },
  {
    question: "Toplu proje için teslimat süreniz nedir?",
    answer:
      "Toplu projelerde teslimat süresi proje kapsamına göre değişir. Ortalama 5 iş günü içinde üretim tamamlanır. Büyük projelerde özel teslimat planı yapıyoruz. Keşif sırasında net teslimat tarihi belirlenir.",
  },
  {
    question: "Referans olarak hangi projeleri inceleyebilirim?",
    answer:
      "Otel, ofis, okul, hastane ve konut sitesi projelerimizi inceleyebilirsiniz. Galeri sayfamızda gerçek proje fotoğraflarımız bulunmaktadır. Detaylı bilgi için bizimle iletişime geçebilirsiniz.",
  },
];

export default function ReferanslarimizPage() {
  const schemas: object[] = [
    createBreadcrumbJsonLd([
      { name: "Ana Sayfa", url: "/" },
      { name: "Referanslarımız", url: "/referanslarimiz" },
    ]),
    createWebPageSchema({
      name: "Referanslarımız — Plise Perde Projeleri",
      description:
        "Plise Perde referansları: otel, ofis, okul, hastane ve konut projeleri. 2000+ tamamlanan proje.",
      url: "/referanslarimiz/",
    }),
    createArticleSchema({
      headline: "Referanslarımız — Plise Perde Projeleri ve Kurumsal Müşterilerimiz",
      description:
        "2000+ tamamlanan proje, 500+ kurumsal müşteri. Otel, ofis, okul, hastane ve konut projeleri.",
      datePublished: "2022-01-01",
    }),
    createItemListSchema({
      name: "Plise Perde Yurtdışı Bayileri ve İş Ortakları",
      description:
        "Hunter Douglas, Benthin, MHZ Hachtel, Luxaflex, Neher, Warema, Cosiflor, Erfal, JYSK ve Kadeco gibi yurtdışı firmalar Plise Perde bayileri ve düzenli iş ortaklarıdır. Bu firmalara haftalık olarak bitmiş plise perde, honeycomb perde ve düet perde ürünleri tedarik edilmektedir.",
      url: "/referanslarimiz/",
      items: partners.map((p) => ({
        name: p.name,
        description: `${p.name} (${p.country}) — Plise Perde'nin ${p.role}i ve yurtdışı iş ortağı. Düzenli olarak plise perde, honeycomb perde ve düet perde ürünleri tedarik edilen bayi firmadır.`,
        logo: p.logo,
        sector: p.role,
        location: p.country,
      })),
    }),
    createItemListSchema({
      name: "Plise Perde Kurumsal Müşterileri",
      description:
        "Otel, ofis, okul, hastane, konut, perakende, telekom, havayolu, bankacılık ve eğitim sektörlerinde Plise Perde montajı yapılan kurumsal müşterilerimiz.",
      url: "/referanslarimiz/",
      items: customers.map((ref) => ({
        name: ref.name,
        description: `${ref.name} — Plise Perde kurumsal müşterisi ve referansı. Plise perde, honeycomb perde ve düet perde uygulamaları.`,
        logo: ref.logo,
      })),
    }),
    createFAQSchema(faqItems),
  ];

  return (
    <PageLayout>
      <JsonLd schemas={schemas} />
      <PageHeading
        breadcrumb={[
          { name: "Ana Sayfa", url: "/" },
          { name: "Referanslarımız", url: "/referanslarimiz" },
        ]}
        title="Referanslarımız — Plise Perde Projeleri ve Müşterilerimiz"
        description="2022'den beri binlerce proje tamamladık. Kurumsal müşterilerimiz, iş ortaklarımız ve bireysel müşterilerimizin güvenini kazandık. Bu sayfada tamamladığımız önemli projeleri, kurumsal referanslarımızı ve başarı hikayelerimizi bulabilirsiniz."
        highlight="2000+ tamamlanan proje"
        bgImage="/referanslarimiz.webp"
        bgImageAlt="Plise Perde Referansları — Kurumsal Müşteriler ve Projeler"
      />

      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          {/* AI/LLM-friendly summary */}
          <section className="mb-8" aria-label="Referans özeti">
            <p className="text-sm text-brand-text-light leading-relaxed mb-4">
              Bu sayfa, <strong>Plise Perde</strong> markası tarafından tamamlanan kurumsal projeleri ve
              müşteri referanslarını sunar. Beş ana sektörde düzenlenmiştir:{" "}
              <strong>Otel & Konaklama</strong> (motorlu plise perde, blackout),{" "}
              <strong>Ofis & Plaza</strong> (güneşlik, profesyonel montaj),{" "}
              <strong>Eğitim Kurumları</strong> (çocuk güvenliği, kordsuz),{" "}
              <strong>Sağlık Kurumları</strong> (hijyenik kumaş, tam karartma) ve{" "}
              <strong>Konut Siteleri</strong> (toplu indirim, standart model). Toplam 2000'den fazla
              tamamlanan proje ve 500+ kurumsal müşteri ile hizmet kalitemizi kanıtlamaktayız.
            </p>
          </section>

          {/* Stats Banner */}
          <ScrollReveal className="mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {referenceStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-white border border-brand-border shadow-sm"
                >
                  <div className="text-brand mb-2">{statIcons[stat.icon]}</div>
                  <div className="text-2xl md:text-3xl font-bold text-brand-text">{stat.value}</div>
                  <div className="text-xs md:text-sm text-brand-text-light mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Partners — Yurtdışı Bayiler */}
          <ScrollReveal className="mb-10">
            <section aria-label="Yurtdışı bayiler ve iş ortakları">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={24} className="text-brand" />
                <h2 className="text-lg md:text-xl font-semibold text-brand-text">
                  Yurtdışı Bayilerimiz ve İş Ortaklarımız
                </h2>
              </div>
              <p className="text-sm text-brand-text-light leading-relaxed mb-5">
                Yurtdışında faaliyet gösteren <strong>Hunter Douglas, Benthin, MHZ Hachtel, Luxaflex,
                Neher, Warema, Cosiflor, Erfal, JYSK ve Kadeco</strong> gibi firmalar Plise Perde'nin
                düzenli bayileri ve iş ortaklarıdır. Bu firmalara her hafta bitmiş plise perde, honeycomb
                perde ve düet perde ürünleri tedarik edilmektedir. <em>Üretici olarak doğrudan bayi
                ilişkisi</em> ile çalışıyoruz.
              </p>
              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
                role="list"
                aria-label="Yurtdışı bayi logoları"
              >
                {partners.map((p) => (
                  <figure
                    key={p.name}
                    role="listitem"
                    itemScope
                    itemType="https://schema.org/Organization"
                    className="group relative flex flex-col items-center justify-center p-1 rounded-xl bg-white border border-brand-border hover:border-brand hover:shadow-md transition-all"
                  >
                    <meta itemProp="name" content={p.name} />
                    <meta itemProp="description" content={`${p.name} (${p.country}) — Plise Perde ${p.role}i ve yurtdışı iş ortağı`} />
                    <meta itemProp="knowsAbout" content="Plise Perde, Honeycomb Perde, Düet Perde" />
                    <link itemProp="url" href={`https://pliseperde.com/referanslarimiz`} />
                    <div className="relative w-full h-24 md:h-28 flex items-center justify-center">
                      <Image
                        src={p.logo}
                        alt={`${p.name} (${p.country}) — Plise Perde Bayii ve İş Ortağı`}
                        title={`${p.name} (${p.country})`}
                        width={320}
                        height={160}
                        className="object-contain w-full h-full opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        loading="lazy"
                        itemProp="logo"
                      />
                    </div>
                    <figcaption className="sr-only">
                      {p.name} — {p.country} — Plise Perde {p.role}i ve yurtdışı iş ortağı
                    </figcaption>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-20 whitespace-nowrap rounded-md bg-brand-text px-2 py-1 text-xs text-white shadow-lg">
                      {p.name} — {p.country}
                    </div>
                  </figure>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Customers — Kurumsal Müşteriler */}
          <ScrollReveal className="mb-10">
            <section aria-label="Kurumsal müşteri logoları">
              <div className="flex items-center gap-3 mb-4">
                <Building size={24} className="text-brand" />
                <h2 className="text-lg md:text-xl font-semibold text-brand-text">
                  Kurumsal Müşterilerimiz
                </h2>
              </div>
              <p className="text-sm text-brand-text-light leading-relaxed mb-5">
                <strong>Telekom, perakende, sağlık, e-ticaret, havayolu, bankacılık, belediye ve
                eğitim</strong> sektörlerinden 36+ kurumsal müşteri ile çalışıyoruz. Her sektörde özel
                ihtiyaçlara yönelik plise perde çözümleri sunuyoruz.
              </p>
              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
                role="list"
                aria-label="Kurumsal müşteri logoları"
              >
                {customers.map((ref) => (
                  <figure
                    key={ref.name}
                    role="listitem"
                    itemScope
                    itemType="https://schema.org/Organization"
                    className="group relative flex flex-col items-center justify-center p-1 rounded-xl bg-white border border-brand-border hover:border-brand hover:shadow-md transition-all"
                  >
                    <meta itemProp="name" content={ref.name} />
                    <meta itemProp="description" content={`${ref.name} — Plise Perde kurumsal müşterisi ve referansı`} />
                    <link itemProp="url" href={`https://pliseperde.com/referanslarimiz`} />
                    <div className="relative w-full h-24 md:h-28 flex items-center justify-center">
                      <Image
                        src={ref.logo}
                        alt={`${ref.name} — Plise Perde Kurumsal Müşterisi`}
                        title={ref.name}
                        width={320}
                        height={160}
                        className="object-contain w-full h-full opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        loading="lazy"
                        itemProp="logo"
                      />
                    </div>
                    <figcaption className="sr-only">
                      {ref.name} — Plise Perde kurumsal müşterisi
                    </figcaption>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-20 whitespace-nowrap rounded-md bg-brand-text px-2 py-1 text-xs text-white shadow-lg">
                      {ref.name}
                    </div>
                  </figure>
                ))}
                {/* CTA Card */}
                <a
                  href="/iletisim"
                  className="group flex flex-col items-center justify-center p-1 rounded-xl bg-brand-bg border-2 border-dashed border-brand hover:border-brand hover:shadow-md transition-all"
                >
                  <div className="relative w-full h-24 md:h-28 flex flex-col items-center justify-center text-center">
                    <p className="text-sm md:text-base font-semibold text-brand group-hover:text-brand-dark transition-colors">
                      Burayı Sizin İçin Ayırdık!
                    </p>
                    <p className="text-xs text-brand-text-light mt-1">
                      Referanslarımız arasına katılın
                    </p>
                  </div>
                </a>
                {/* CTA Card 2 — Popup Form */}
                <RefFormTrigger />
              </div>
            </section>
          </ScrollReveal>

          {/* Why choose us */}
          <ScrollReveal className="mb-10">
            <section aria-label="Neden bizi tercih ederler">
              <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">
                Neden Bizi Tercih Ederler?
              </h2>
              <p className="text-sm text-brand-text-light leading-relaxed mb-5">
                Müşterilerimiz bizi <strong>kalite, güven ve profesyonellik</strong> için tercih eder.
                <em> 2 yıl garanti, ücretsiz keşif ve Türkiye geneli hizmet</em> en çok öne çıkan
                avantajlarımızdır.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "2 Yıl Garanti", desc: "Tüm ürün ve montaj kapsamında" },
                  { title: "Ücretsiz Keşif", desc: "Türkiye geneli, öncelikli randevu" },
                  { title: "Özel Ölçü Üretim", desc: "Her pencere boyutu için" },
                  { title: "Profesyonel Montaj", desc: "Deneyimli uzman ekip" },
                  { title: "Hızlı Teslimat", desc: "Ortalama 5 iş günü" },
                  { title: "Çocuk Güvenliği", desc: "TSE uygun, kordsuz modeller" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-lg bg-brand-bg border border-brand-border"
                  >
                    <CheckCircle size={20} className="text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-text">{item.title}</p>
                      <p className="text-xs text-brand-text-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Partnership */}
          <ScrollReveal className="mb-10">
            <section aria-label="İş ortakları">
              <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">
                İş Ortaklarımız
              </h2>
              <p className="text-sm text-brand-text-light leading-relaxed mb-5">
                İş ortaklarımız arasında <strong>iç mimarlar, mimarlık ofisleri ve dekorasyon
                firmaları</strong> bulunmaktadır. İş ortaklarımıza özel fiyat ve öncelikli üretim
                avantajları sunuyoruz.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "İç Mimarlar", desc: "%15 özel indirim, renk ve kumaş danışmanlığı" },
                  { title: "Mimarlık Ofisleri", desc: "Öncelikli üretim, proje bazlı anlaşma" },
                  { title: "Dekorasyon Firmaları", desc: "Toplu proje fiyatı, hızlı teslimat" },
                  { title: "İnşaat Firmaları", desc: "Site projeleri için özel anlaşma" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white border border-brand-border"
                  >
                    <Building size={20} className="text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-text">{item.title}</p>
                      <p className="text-xs text-brand-text-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* FAQ */}
          <section className="mb-8" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-lg md:text-xl font-semibold text-brand-text mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <FAQ items={faqItems} />
          </section>
        </div>
      </div>

      <CTASection
        title="Kurumsal Teklif Alın"
        description="Projeniz için ücretsiz keşif ve özel kurumsal fiyat teklifi alın. İstanbul ve Türkiye geneli hizmet."
        primaryLabel="Ücretsiz Keşif Talep Et"
        primaryHref="/ucretsiz-kesif"
      />
    </PageLayout>
  );
}
