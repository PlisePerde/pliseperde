import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}
import {
  Calendar,
  Clock,
  ArrowLeft,
  User,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import JsonLd, {
  createBreadcrumbJsonLd,
  createBlogPostingSchema,
  createFAQSchema,
} from "@/components/JsonLd";
import PageTemplate from "@/components/PageTemplate";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/data/blog";
import { cities } from "@/data/cities";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogSlugs = getAllBlogPosts().map((post) => ({ slug: post.slug }));
  const citySlugs = cities.map((city) => ({ slug: city.slug }));
  return [...blogSlugs, ...citySlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = getBlogPostBySlug(slug);
  if (post) {
    const url = `/${post.slug}/`;
    const fullTitle = `${post.title} — Plise Perde Blog`;
    return {
      title: { absolute: fullTitle },
      description: post.description,
      keywords: post.keywords,
      alternates: { canonical: url },
      openGraph: {
        title: fullTitle,
        description: post.description,
        url: `${siteConfig.url}${url}`,
        type: "article",
        locale: "tr_TR",
        siteName: siteConfig.name,
        publishedTime: post.datePublished,
        modifiedTime: post.dateModified || post.datePublished,
        authors: [post.author],
        ...(post.image
          ? {
              images: [
                {
                  url: `${siteConfig.url}${post.image}`,
                  width: 1200,
                  height: 675,
                  alt: post.imageAlt || post.title,
                },
              ],
            }
          : {
              images: [
                {
                  url: `${siteConfig.url}/og-image.webp`,
                  width: 1200,
                  height: 630,
                  alt: post.title,
                },
              ],
            }),
      },
      twitter: {
        card: "summary_large_image",
        title: fullTitle,
        description: post.description,
        ...(post.image
          ? { images: [`${siteConfig.url}${post.image}`] }
          : { images: [`${siteConfig.url}/og-image.webp`] }),
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  const city = cities.find((c) => c.slug === slug);
  if (city) {
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
  }

  return { title: "Sayfa Bulunamadı — Plise Perde" };
}

export default async function UnifiedSlugPage({ params }: Props) {
  const { slug } = await params;

  const post = getBlogPostBySlug(slug);
  if (post) {
    return <BlogPostView slug={slug} />;
  }

  const city = cities.find((c) => c.slug === slug);
  if (city) {
    return <CityView slug={slug} />;
  }

  notFound();
}

async function BlogPostView({ slug }: { slug: string }) {
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedBlogPosts(post.slug, 3);
  const otherPosts = getAllBlogPosts().filter((p) => p.slug !== post.slug).slice(0, 5);

  const breadcrumb = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog/" },
    { name: post.title, url: `/${post.slug}/` },
  ];

  const schemas: object[] = [
    createBreadcrumbJsonLd(breadcrumb),
    createBlogPostingSchema({
      headline: post.title,
      description: post.description,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: post.author,
      keywords: post.keywords,
      url: `/${post.slug}`,
      ...(post.image && {
        image: `${siteConfig.url}${post.image}`,
        imageAlt: post.imageAlt || post.title,
      }),
    }),
  ];

  if (post.faq && post.faq.length > 0) {
    schemas.push(createFAQSchema(post.faq));
  }

  if (post.sections.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "İçindekiler",
      itemListElement: post.sections.map((section, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: section.heading,
        url: `${siteConfig.url}/${post.slug}/#${slugifyHeading(section.heading)}`,
      })),
    });
  }

  return (
    <PageLayout>
      <JsonLd schemas={schemas} />

      <div className="bg-gradient-to-br from-brand-bg via-brand-bg to-brand-light/10 border-b border-brand-border">
        <div className="mx-auto max-w-[1536px] px-4 md:px-6">
          <div className="py-8 md:py-12">
            <h1 className="text-2xl md:text-4xl font-bold text-brand-text mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-sm md:text-base text-brand-text-light leading-relaxed max-w-3xl mb-5">
              {post.description}
            </p>

            <Breadcrumb items={breadcrumb} />

            <div className="flex flex-wrap items-center gap-4 text-xs text-brand-text-light mt-4">
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-brand" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-brand" />
                {new Date(post.datePublished).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-brand" />
                {post.readingTime} dakika okuma
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="flex gap-8 py-8 md:py-12">
          <article className="flex-1 min-w-0">
          {post.image && (
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                width={1200}
                height={675}
                className="w-full h-auto rounded-lg border border-brand-border shadow-sm object-cover"
                loading="eager"
              />
            </div>
          )}
          {post.sections.length > 0 && (
            <nav className="mb-8 p-5 bg-brand-bg border border-brand-border rounded-lg lg:hidden" aria-label="İçindekiler">
              <h2 className="text-sm font-semibold text-brand-text mb-3">
                İçindekiler
              </h2>
              <ol className="space-y-1.5">
                {post.sections.map((section, index) => {
                  const sectionId = slugifyHeading(section.heading);
                  return (
                    <li key={index}>
                      <a
                        href={`#${sectionId}`}
                        className="text-sm text-brand hover:text-brand-dark transition-colors flex items-start gap-2"
                      >
                        <span className="text-brand-text-light font-medium">
                          {index + 1}.
                        </span>
                        <span>{section.heading}</span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          <div className="space-y-8">
            {post.sections.map((section, index) => {
              const sectionId = slugifyHeading(section.heading);
              return (
                <section key={index} id={sectionId}>
                  <h2 className="text-xl md:text-2xl font-semibold text-brand-text mb-3 leading-tight">
                    {section.heading}
                  </h2>
                  <p
                    className="text-sm md:text-base text-brand-text-light leading-relaxed [&_a]:text-brand [&_a]:underline [&_a]:hover:text-brand-dark"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </section>
              );
            })}
          </div>

          {post.faq && post.faq.length > 0 && (
            <section className="mt-10 pt-8 border-t border-brand-border">
              <h2 className="text-xl md:text-2xl font-semibold text-brand-text mb-5">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {post.faq.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-brand-bg border border-brand-border rounded-lg"
                  >
                    <h3 className="text-sm font-semibold text-brand-text mb-2">
                      {item.question}
                    </h3>
                    <p className="text-sm text-brand-text-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10 pt-6 border-t border-brand-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-brand hover:text-brand-dark transition-colors"
            >
              <ArrowLeft size={16} />
              Tüm Blog Yazıları
            </Link>
          </div>
        </article>

        <BlogSidebar currentPost={post} otherPosts={otherPosts} />
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <section className="bg-brand-bg py-10 md:py-12">
          <div className="mx-auto max-w-[1536px] px-4 md:px-6">
            <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-6">
              İlgili Yazılar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <article
                  key={rp.slug}
                  className="bg-white border border-brand-border rounded-lg overflow-hidden hover:border-brand transition-colors"
                >
                  <Link href={`/${rp.slug}`} className="block p-5">
                    <h3 className="text-base font-semibold text-brand-text mb-2 leading-tight">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-brand-text-light mb-4 line-clamp-2">
                      {rp.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-brand-text-light">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(rp.datePublished).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {rp.readingTime} dk
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </PageLayout>
  );
}

async function CityView({ slug }: { slug: string }) {
  const city = cities.find((c) => c.slug === slug);
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
        { name: "Hizmet Bölgeleri", url: "/hizmet-bolgeleri/" },
        { name: `${city.name} Plise Perde`, url: `/${city.slug}/` },
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
