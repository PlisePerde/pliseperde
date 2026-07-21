import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Plise Perde Sistemleri — Tüm Sistemler" },
  description:
    "Plise perde sistemleri: vidalı, vidasız, yapışkanlı, kancalı, portray, braketli montaj. Her pencere tipine uygun plise perde montaj sistemi.",
  keywords: ["plise perde sistemleri"],
  alternates: { canonical: "/plise-perde-sistemleri/" },
};

const systems = [
  {
    slug: "vidali-plise-perde",
    title: "Vidalı Plise Perde",
    desc: "En sağlam montaj. Profil vidalar ile çerçeveye sabitlenir. Ağır kumaş ve motorlu sistemler için ideal.",
  },
  {
    slug: "vidasiz-plise-perde",
    title: "Vidasız Plise Perde",
    desc: "Delmesiz montaj. Yapışkanlı veya kancalı sistem ile kiracı dostu. Hafif kumaşlar için uygun.",
  },
  {
    slug: "yapiskanli-plise-perde",
    title: "Yapışkanlı Plise Perde",
    desc: "Çift taraflı endüstriyel bant ile delmesiz montaj. PVC çerçeveye mükemmel yapışma. İz bırakmaz.",
  },
  {
    slug: "kancali-plise-perde",
    title: "Kancalı Plise Perde",
    desc: "Kanca-profil sistemi ile sökülüp takılır. Temizlik için en pratik. Saniyeler içinde sök-tak.",
  },
  {
    slug: "portray-plise-perde",
    title: "Portray Plise Perde",
    desc: "İnce profil ile estetik montaj. Minimal görünüm, profil neredeyse görünmez. Modern tasarım.",
  },
  {
    slug: "braketli-plise-perde",
    title: "Braketli Plise Perde",
    desc: "Bracket ile sağlam ve esnek montaj. Vidalı kadar sağlam, sökülüp temizlenebilir. Her çerçeveye uygun.",
  },
  {
    slug: "motorlu-plise-perde",
    title: "Motorlu Plise Perde",
    desc: "Uzaktan kumanda ve akıllı ev sistemi ile kontrol. Otomasyonlu, sessiz motor. Geniş pencere ve yüksek tavan için ideal.",
  },
];

export default function SistemlerimizPage() {
  const breadcrumb = ["Ana Sayfa", "Sistemlerimiz"];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createWebPageSchema({
            name: "Sistemlerimiz",
            description: "Plise perde montaj sistemleri — vidalı, vidasız, yapışkanlı, kancalı, portray, braketli.",
            url: "/plise-perde-sistemleri",
          }),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sistemlerimiz", url: "/plise-perde-sistemleri/" }]}
        title="Sistemlerimiz — Plise Perde Sistemleri"
        description="Plise perde sistemleri pencere tipinize ve ihtiyacınıza göre değişir. Vidalı, vidasız, yapışkanlı, kancalı, portray, braketli ve motorlu montaj sistemleri arasından size uygun olanı seçin. Her sistem üretici garantisi ve profesyonel montaj ile gelir."
        highlight="Vidalı · Vidasız · Yapışkanlı · Kancalı · Portray · Braketli · Motorlu"
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {systems.map((system) => (
              <article key={system.slug}>
                <Link
                  href={`/${system.slug}/`}
                  className="block p-5 bg-white border border-brand-border rounded-lg hover:border-brand transition-colors"
                >
                  <h2 className="text-base font-medium text-brand-text mb-1">
                    {system.title}
                  </h2>
                  <p className="text-sm text-brand-text-light mb-3">
                    {system.desc}
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
