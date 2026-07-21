import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageTemplate from "@/components/PageTemplate";
import { cities, type CityData } from "@/data/cities";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  return params.then((resolvedParams) => {
    const city = cities.find((c) => c.slug === resolvedParams.city);
    if (!city) return {};
    return generatePageMetadata({
      title: city.seoTitle,
      description: city.seoDescription,
      slug: city.slug,
      keywords: [
        `${city.name} plise perde`,
        `${city.name} perde`,
        `${city.name} perde fiyatları`,
        `${city.name} plise perde modelleri`,
        city.slug,
      ],
    });
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const resolvedParams = await params;
  const city = cities.find((c) => c.slug === resolvedParams.city);
  if (!city) notFound();

  const serviceOptions = [
    "WhatsApp ile video keşif",
    "Telefon ile sipariş",
    "E-posta ile teklif al",
    "Kargo ile Türkiye geneli teslimat",
    "WhatsApp + video keşif",
    "Telefon + kargo teslimat",
    "E-posta + ölçü alımı",
    "Video keşif + kargo gönderimi",
  ];
  const districtRows = city.districts.map((d, i) => [
    d,
    serviceOptions[i % serviceOptions.length],
  ]);

  const sections = [
    ...city.sections,
    {
      h2: `${city.name} İlçeleri ve Plise Perde Hizmeti`,
      paragraphs: [] as string[],
      table: {
        headers: ["İlçe", "Hizmet"],
        rows: districtRows,
        caption: `${city.name} ilçeleri listesi`,
      },
    },
    {
      h2: `${city.name} Plise Perde Hizmet Bölgesi`,
      paragraphs: [
        `${city.name} plise perde sayfası, <a href="/hizmet-bolgeleri/">hizmet bölgeleri</a> ana sayfasının bir alt sayfasıdır. Türkiye'nin 81 ilinde plise perde hizmeti sunuyoruz. ${city.name} ve ilçelerinde video keşif ile ölçü alıp, kargo ile teslimat yapıyoruz.`,
      ],
    },
  ];

  const schemaData = {
    name: `${city.name} Plise Perde`,
    description: city.seoDescription,
    serviceType: "Plise Perde",
    areaServed: city.name,
  };

  return (
    <PageTemplate
      title={city.seoTitle}
      description={city.seoDescription}
      slug={city.slug}
      breadcrumb={[
        { name: "Ana Sayfa", url: "/" },
        { name: "Hizmet Bölgeleri", url: "/hizmet-bolgeleri" },
        { name: `${city.name} Plise Perde`, url: `/${city.slug}` },
      ]}
      h1={`${city.name} Plise Perde`}
      intro={city.intro}
      sections={sections}
      faqItems={city.faqItems}
      ctaTitle={`${city.name} için Plise Perde ısmarlamak ister misiniz?`}
      ctaDescription="WhatsApp üzerinden video keşif yapıp, ölçü alarak plise perde siparişi verebilirsiniz. Kargo ile Türkiye'nin her yerine teslimat yapıyoruz."
      ctaPrimaryLabel="WhatsApp ile İletişime Geç"
      ctaPrimaryHref={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
      schemaType="service"
      schemaData={schemaData}
    />
  );
}
