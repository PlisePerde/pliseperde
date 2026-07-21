import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import { getPagesByCategory } from "@/data/site-pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Ürünlerimiz — Plise Perde Modelleri" },
  description:
    "Tül, güneşlik, karartma, honeycomb, motorlu, vidasız plise perde modelleri. Üretici garantisi, profesyonel montaj, Türkiye geneli hizmet.",
  keywords: ["ürünlerimiz"],
  alternates: { canonical: "/urunlerimiz/" },
};

export default function UrunlerPage() {
  const products = getPagesByCategory("Ürünlerimiz").filter((p) => p.slug !== "urunlerimiz");
  const breadcrumb = ["Ana Sayfa", "Ürünlerimiz"];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createWebPageSchema({
            name: "Ürünlerimiz",
            description: "Plise perde modelleri — üretici garantisi ile.",
            url: "/urunlerimiz",
          }),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Ürünlerimiz", url: "/urunlerimiz/" }]}
        title="Ürünlerimiz — Plise Perde Modelleri"
        description="2022'den beri üretici olarak plise perde modelleri sunuyoruz. Tül, güneşlik, karartma, honeycomb, motorlu ve daha fazla seçenek. Her model profesyonel montaj ve 2 yıl garanti ile gelir."
        highlight="Üretici garantisi · 2 yıl · Ücretsiz montaj"
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <article key={product.slug}>
                <Link
                  href={`/${product.slug}`}
                  className="block p-5 bg-white border border-brand-border rounded-lg hover:border-brand transition-colors"
                >
                  <h2 className="text-base font-medium text-brand-text mb-1">
                    {product.title}
                  </h2>
                  <p className="text-sm text-brand-text-light mb-3">
                    Plise perde üreticisi garantisi ile.
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
      <CTASection />
    </PageLayout>
  );
}
