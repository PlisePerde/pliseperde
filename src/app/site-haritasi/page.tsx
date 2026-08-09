import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import { sitePages } from "@/data/site-pages";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Haritası",
  description: "Plise Perde site haritası — ürünler, modeller, sistemler, hizmetler, karşılaştırmalar, şehirler ve tüm sayfaların kategorilere göre listesi.",
  alternates: { canonical: "/site-haritasi/" },
  keywords: ["site haritası"],
};

export default function SiteHaritasiPage() {
  const categories = [
    { key: "Ana Sayfa", title: "Ana Sayfa" },
    { key: "Ürünlerimiz", title: "Ürünler" },
    { key: "Modellerimiz", title: "Modeller" },
    { key: "Sistemlerimiz", title: "Sistemler" },
    { key: "Çeşitlerimiz", title: "Çeşitler" },
    { key: "Özellikler", title: "Özellikler" },
    { key: "Fiyatlarımız", title: "Fiyatlar" },
    { key: "Kullanım Alanları", title: "Kullanım Alanları" },
    { key: "Hizmetlerimiz", title: "Hizmetler" },
    { key: "Fiyat Hesaplama", title: "Fiyat Hesaplama" },
    { key: "Hizmet Bölgeleri", title: "Hizmet Bölgeleri" },
    { key: "Referanslarımız", title: "Referanslarımız" },
    { key: "Karşılaştırmalar", title: "Karşılaştırmalar" },
    { key: "Kurumsal", title: "Kurumsal" },
    { key: "İletişim", title: "İletişim" },
    { key: "Sözleşmelerimiz", title: "Sözleşmeler" },
    { key: "Politikalarımız", title: "Politikalar" },
    { key: "Blog", title: "Blog" },
    { key: "Site Haritası", title: "Site Haritası" },
  ];

  const pagesByCategory = categories.map((cat) => ({
    ...cat,
    pages: sitePages.filter((p) => p.category === cat.key),
  }));

  const breadcrumb = ["Ana Sayfa", "Site Haritası"];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createWebPageSchema({
            name: "Site Haritası",
            description: "Plise Perde site haritası.",
            url: "/site-haritasi",
          }),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Site Haritası", url: "/site-haritasi/" }]}
        title="Site Haritası"
        description="Plise Perde web sitesinin tüm sayfalarını kategorilere göre aşağıda bulabilirsiniz. Ürünler, modeller, hizmetler, bölgeler, politikalar ve daha fazlası."
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagesByCategory.map((cat) =>
              cat.pages.length > 0 ? (
                <section key={cat.key} aria-labelledby={`cat-${cat.key}`} className="p-4 border border-brand-border rounded-lg">
                  <h2 id={`cat-${cat.key}`} className="text-sm font-semibold text-brand-text mb-3">
                    {cat.title}
                  </h2>
                  <ul className="space-y-2">
                    {cat.pages.map((page, idx) => (
                      <li key={`${cat.key}-${idx}-${page.slug}`}>
                        <Link
                          href={page.slug === "" ? "/" : `/${page.slug}/`}
                          className="text-sm text-brand-text-light hover:text-brand transition-colors"
                        >
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
