import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Plise Perde Sistemleri — Tüm Sistemler" },
  description:
    "Plise perde sistemleri: tavan, dikey, üçgen, eğimli, geniş ve pencere sistemleri. Her uygulama yüzeyine uygun plise perde sistemi.",
  keywords: ["plise perde sistemleri"],
  alternates: { canonical: "/plise-perde-sistemleri/" },
};

export default function SistemlerimizPage() {
  const breadcrumb = ["Ana Sayfa", "Sistemlerimiz"];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createWebPageSchema({
            name: "Sistemlerimiz",
            description: "Plise perde sistemleri — uygulama yüzeyleri ve formları.",
            url: "/plise-perde-sistemleri",
          }),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sistemlerimiz", url: "/plise-perde-sistemleri/" }]}
        title="Sistemlerimiz — Plise Perde Sistemleri"
        description="Bu sayfa yakında güncellenecektir."
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          <p className="text-sm text-brand-text-light">İçerik hazırlanıyor.</p>
        </div>
      </div>
      <CTASection />
    </PageLayout>
  );
}
