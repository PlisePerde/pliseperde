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
import { generateCitySections, generateCityFaqs } from "@/lib/city-content";
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

  const relatedPosts = getRelatedBlogPosts(post.slug, 4);
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
              <p className="text-sm font-semibold text-brand-text mb-3">
                İçindekiler
              </p>
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
                  <div
                    className="text-sm md:text-base text-brand-text-light leading-relaxed [&_a]:text-brand [&_a]:underline [&_a]:hover:text-brand-dark [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-brand-text [&_h3]:mt-4 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_p]:mb-3"
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
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-brand hover:text-brand-dark transition-colors"
              >
                <ArrowLeft size={16} />
                Tüm Blog Yazıları
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-xs text-brand-text-light">Paylaş:</span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + " - " + siteConfig.url + "/" + post.slug + "/")}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-bg border border-brand-border hover:border-brand transition-colors"
                  aria-label="WhatsApp ile paylaş"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteConfig.url + "/" + post.slug + "/")}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-bg border border-brand-border hover:border-brand transition-colors"
                  aria-label="Facebook ile paylaş"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(siteConfig.url + "/" + post.slug + "/")}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-bg border border-brand-border hover:border-brand transition-colors"
                  aria-label="X ile paylaş"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.91l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(siteConfig.url + "/" + post.slug + "/")}&description=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-bg border border-brand-border hover:border-brand transition-colors"
                  aria-label="Pinterest ile paylaş"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPosts.map((rp) => (
                <article
                  key={rp.slug}
                  className="bg-white border border-brand-border rounded-lg overflow-hidden hover:border-brand transition-colors"
                >
                  <Link href={`/${rp.slug}`} className="block">
                    {rp.image && (
                      <img
                        src={rp.image}
                        alt={rp.imageAlt || rp.title}
                        width={1200}
                        height={675}
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="p-5">
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

  const dynamicSections = generateCitySections(city);
  const dynamicFaqs = generateCityFaqs(city);

  const sections = [
    ...city.sections,
    ...dynamicSections,
    {
      h2: `${city.name} Plise Perde Referansları`,
      paragraphs: [
        `${city.name} plise perde hizmetimiz hakkında daha fazla bilgi için <a href="/referanslarimiz/">referanslarımızı inceleyebilirsiniz</a>. 2000+ tamamlanan proje ve 500+ kurumsal müşteri ile Türkiye geneli hizmet veriyoruz.`,
      ],
    },
  ];

  const allFaqs = [...city.faqItems, ...dynamicFaqs];

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
      faqItems={allFaqs}
      ctaTitle={`${city.name} için Plise Perde ısmarlamak ister misiniz?`}
      ctaDescription="WhatsApp üzerinden video keşif yapıp, ölçü alarak plise perde siparişi verebilirsiniz. Kargo ile Türkiye'nin her yerine teslimat yapıyoruz."
      ctaPrimaryLabel="WhatsApp ile İletişime Geç"
      ctaPrimaryHref={`https://api.whatsapp.com/send/?phone=${siteConfig.phone.replace(/\D/g, "")}`}
      schemaType="service"
      schemaData={schemaData}
    />
  );
}
