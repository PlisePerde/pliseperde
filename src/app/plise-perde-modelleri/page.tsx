import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Plise Perde Modelleri — Tüm Modeller" },
  description:
    "Plise perde modelleri: düz, blackout, gece gündüz, desenli, baskılı. Her mekan ve ihtiyaç için uygun plise perde modeli. 2 yıl garanti.",
  alternates: { canonical: "/plise-perde-modelleri/" },
};

const models = [
  {
    slug: "duz-plise-perde",
    title: "Düz Plise Perde",
    desc: "Sade ve klasik, desensiz düz kumaş. Her mekana uyumlu, zamansız tasarım. Beyaz, krem, gri renk seçenekleri.",
  },
  {
    slug: "blackout-plise-perde",
    title: "Blackout Plise Perde",
    desc: "%100 ışık geçirmeyen tam karartma kumaş. Yatak odası, sinema odası ve gece çalışanlar için ideal.",
  },
  {
    slug: "gece-gunduz-plise-perde",
    title: "Gece Gündüz Plise Perde",
    desc: "İki katmanlı sistem: gündüz ışık geçirgen, gece tam karartma. Tek perdede iki fonksiyon, yer tasarrufu.",
  },
  {
    slug: "desenli-plise-perde",
    title: "Desenli Plise Perde",
    desc: "Dokuma desenli kumaş: çizgili, noktalı, geometrik, doğal motifler. Dekoratif ve karakter katar.",
  },
  {
    slug: "basili-plise-perde",
    title: "Baskılı Plise Perde",
    desc: "Özel dijital baskı ile kişiselleştirilmiş kumaş. Logo, fotoğraf, sanat eseri. Kurumsal ve kişisel kullanım.",
  },
];

export default function ModellerPage() {
  const breadcrumb = ["Ana Sayfa", "Modellerimiz"];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createWebPageSchema({
            name: "Modellerimiz",
            description: "Plise perde modelleri — düz, blackout, gece gündüz, desenli, baskılı.",
            url: "/plise-perde-modelleri",
          }),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Modellerimiz", url: "/plise-perde-modelleri/" }]}
        title="Modellerimiz — Plise Perde Modelleri"
        description="Plise perde modelleri mekan tasarımınıza ve ihtiyacınıza göre değişir. Düz, blackout, gece gündüz, desenli ve baskılı modeller arasından size uygun olanı seçin. Her model özel ölçü üretim, profesyonel montaj ve 2 yıl garanti ile gelir."
        highlight="Düz · Blackout · Gece Gündüz · Desenli · Baskılı"
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((model) => (
              <article key={model.slug}>
                <Link
                  href={`/${model.slug}/`}
                  className="block p-5 bg-white border border-brand-border rounded-lg hover:border-brand transition-colors"
                >
                  <h2 className="text-base font-medium text-brand-text mb-1">
                    {model.title}
                  </h2>
                  <p className="text-sm text-brand-text-light mb-3">
                    {model.desc}
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
