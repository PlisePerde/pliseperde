import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import { getPagesByCategory } from "@/data/site-pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Hizmetlerimiz — Plise Perde" },
  description:
    "Plise perde montaj, ücretsiz keşif, ölçü alma, fiyat hesaplama ve özel üretim hizmetleri. İstanbul Pendik merkezli, Türkiye geneli teslimat.",
  keywords: ["hizmetlerimiz"],
  alternates: { canonical: "/hizmetlerimiz/" },
};

export default function HizmetlerPage() {
  const allServices = getPagesByCategory("Hizmetlerimiz").filter((p) => p.slug !== "hizmetlerimiz");
  const serviceOrder = ["numune", "kesif", "olcu-alma-destegi", "montaj", "plise-perde-projesi"];
  const services = serviceOrder
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);
  const breadcrumb = ["Ana Sayfa", "Hizmetlerimiz"];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createWebPageSchema({
            name: "Hizmetlerimiz",
            description: "Plise perde hizmetleri — montaj, keşif, bakım, fiyat hesaplama.",
            url: "/hizmetlerimiz/",
          }),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmetlerimiz", url: "/hizmetlerimiz/" }]}
        title="Hizmetlerimiz — Plise Perde Hizmetleri"
        description="Plise perde üretiminden montajına, ölçü alımından bakımına kadar tüm hizmetleri tek çatı altında sunuyoruz. Ücretsiz keşif, profesyonel montaj ve 2 yıl garanti ile Türkiye geneli hizmet."
        highlight="Ücretsiz keşif · Profesyonel montaj · 2 yıl garanti"
        bgImage="/hizmetlerimiz.webp"
        bgImageAlt="Hizmetlerimiz"
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <article key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="block p-5 bg-white border border-brand-border rounded-lg hover:border-brand transition-colors"
                >
                  <h2 className="text-base font-medium text-brand-text mb-1">
                    {service.title}
                  </h2>
                  <p className="text-sm text-brand-text-light mb-3">
                    Hizmet detayları ve başvuru bilgisi.
                  </p>
                  <span className="flex items-center gap-1 text-sm text-brand">
                    Detaylar <ChevronRight size={14} />
                  </span>
                </Link>
              </article>
            ))}
          </section>
        </div>
      </div>
      <div className="mx-auto max-w-[1536px] px-4 md:px-6 py-6 md:py-8">
        <p className="text-sm text-brand-text-light text-center">
          Hizmetlerimiz hakkında daha fazla bilgi için <Link href="/referanslarimiz/" className="text-brand hover:underline">referanslarımızı inceleyebilirsiniz</Link>.
        </p>
      </div>
      <CTASection />
    </PageLayout>
  );
}
