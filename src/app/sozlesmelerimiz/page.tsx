import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sözleşmelerimiz",
  description: "Plise Perde sözleşmeleri. Sipariş, üyelik, montaj, mesafeli satış sözleşmeleri.",
  alternates: { canonical: "/sozlesmelerimiz/" },
};

const contracts = [
  { slug: "siparis-ve-ozel-uretim-sartlari", title: "Sipariş ve Özel Üretim Şartları", desc: "Özel ölçü üretim, sipariş süreci, teslimat koşulları." },
  { slug: "uyelik-sozlesmesi", title: "Üyelik Sözleşmesi", desc: "Web sitesi üyelik şartları ve kullanıcı yükümlülükleri." },
  { slug: "montaj-ve-uygulama-sartlari", title: "Montaj ve Uygulama Şartları", desc: "Montaj süreci, yerinde uygulama, garanti koşulları." },
  { slug: "olcu-alma-bilgilendirmesi", title: "Ölçü Alma Bilgilendirmesi", desc: "Ölçü alma yöntemi, toleranslar, sorumluluk." },
  { slug: "mesafeli-satis-sozlesmesi", title: "Mesafeli Satış Sözleşmesi", desc: "6502 sayılı kanun kapsamında mesafeli satış koşulları." },
  { slug: "on-bilgilendirme-formu", title: "Ön Bilgilendirme Formu", desc: "Tüketici ön bilgilendirme yükümlülükleri." },
];

export default function SozlesmelerimizPage() {
  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(["Ana Sayfa", "Sözleşmelerimiz"]),
          createWebPageSchema({ name: "Sözleşmelerimiz", description: "Plise Perde sözleşmeleri.", url: "/sozlesmelerimiz" }),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sözleşmelerimiz", url: "/sozlesmelerimiz/" }]}
        title="Sözleşmelerimiz"
        description="Plise Perde olarak tüm sözleşme ve şartlarımızı şeffaf şekilde sunuyoruz. Sipariş, üyelik, montaj, mesafeli satış sözleşmelerini aşağıda inceleyebilirsiniz."
        highlight="6502 sayılı kanun · Mesafeli satış · Tüketici hakları"
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contracts.map((c) => (
              <article key={c.slug}>
                <Link href={`/${c.slug}/`} className="block p-5 border border-brand-border rounded-lg hover:border-brand transition-colors">
                  <h2 className="text-sm font-semibold text-brand-text mb-2">{c.title}</h2>
                  <p className="text-sm text-brand-text-light leading-relaxed">{c.desc}</p>
                </Link>
              </article>
            ))}
          </section>
        </div>
      </div>
      <CTASection />
    </PageLayout>
  );
}
