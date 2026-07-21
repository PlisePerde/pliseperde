import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Hizmet Bölgeleri — Türkiye Geneli Plise Perde" },
  description:
    "İstanbul, Ankara, İzmir, Bursa, Antalya ve 23 şehirde plise perde üretici hizmeti. Ücretsiz keşif, profesyonel montaj.",
  alternates: { canonical: "/hizmet-bolgeleri/" },
};

export default function HizmetBolgeleriPage() {
  const breadcrumb = ["Ana Sayfa", "Hizmet Bölgeleri"];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createWebPageSchema({
            name: "Hizmet Bölgeleri",
            description: "Türkiye geneli plise perde hizmet bölgeleri.",
            url: "/hizmet-bolgeleri",
          }),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmet Bölgeleri", url: "/hizmet-bolgeleri/" }]}
        title="Hizmet Bölgeleri — Türkiye Geneli Plise Perde"
        description="İstanbul merkezli üretim tesisimizden Türkiye'nin 23 şehrine plise perde hizmeti veriyoruz. Her şehirde ücretsiz keşif ve profesyonel montaj imkanı sunuyoruz."
        highlight="23 şehir · Ücretsiz keşif · Profesyonel montaj"
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <section className="py-6 md:py-8 space-y-6">
          <section className="prose prose-sm max-w-none">
            <p className="text-sm md:text-base text-brand-text-light leading-relaxed">
              Pendik İstanbul merkezli üretim tesisimizden tüm Türkiye&apos;ye plise perde hizmeti veriyoruz.
              İstanbul&apos;da ücretsiz yerinde keşif ve montaj, diğer şehirlerde video keşif ve kargo ile teslimat seçenekleri mevcuttur.
            </p>
            <p className="text-sm md:text-base text-brand-text-light leading-relaxed">
              İstanbul&apos;un tüm ilçelerinde (Pendik, Kartal, Maltepe, Tuzla, Ataşehir, Kadıköy ve daha fazlası) ücretsiz keşif ve aynı gün montaj yapıyoruz.
              İstanbul dışındaki şehirlerde video keşif ile ölçü alıp, kargo ile gönderim yapıyoruz.
            </p>
          </section>
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Konya", "Gaziantep", "Eskişehir", "Adana", "Samsun", "Kayseri", "Mersin", "Trabzon", "Diyarbakır", "Kocaeli", "Yalova", "Sakarya"].map((city) => (
              <article
                key={city}
                className="flex items-center justify-between p-4 bg-white border border-brand-border rounded-lg"
              >
                <span className="text-sm font-medium text-brand-text">
                  {city}
                </span>
              </article>
            ))}
          </section>
        </section>
      </div>
      <CTASection />
    </PageLayout>
  );
}
