import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ChevronRight, BookOpen } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, {
  createBreadcrumbJsonLd,
  createBlogSchema,
} from "@/components/JsonLd";
import {
  getAllBlogPosts,
  getFeaturedBlogPosts,
} from "@/data/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog — Plise Perde Rehberi, Dekorasyon & Montaj İpuçları",
  description:
    "Plise perde hakkında her şey. Uzman rehberleri, montaj ve bakım bilgileri, dekorasyon ipuçları. Plise perde dünyasını keşfedin.",
  keywords: [
    "plise perde blog",
    "plise perde rehberi",
    "plise perde ipuçları",
    "plise perde montaj",
    "plise perde dekorasyon",
  ],
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog — Plise Perde Rehberi, Dekorasyon & Montaj İpuçları",
    description:
      "Plise perde hakkında her şey. Uzman rehberleri, montaj ve bakım bilgileri, dekorasyon ipuçları.",
    url: `${siteConfig.url}/blog/`,
    type: "website",
    locale: "tr_TR",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Plise Perde Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Plise Perde Rehberi, Dekorasyon & Montaj İpuçları",
    description:
      "Plise perde hakkında her şey. Uzman rehberleri, montaj ve bakım bilgileri, dekorasyon ipuçları.",
    images: ["/og-image.webp"],
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featuredPosts = getFeaturedBlogPosts();
  const regularPosts = posts.filter((p) => !p.featured);

  const breadcrumb = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog/" },
  ];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createBlogSchema({
            name: "Plise Perde Blog",
            description:
              "Plise perde hakkında rehberler, dekorasyon ipuçları, montaj ve bakım bilgileri, sektör haberleri.",
            url: "/blog",
            posts: posts.map((p) => ({
              title: p.title,
              url: `/${p.slug}`,
              datePublished: p.datePublished,
            })),
          }),
        ]}
      />
      <PageHeading
        breadcrumb={breadcrumb}
        title="Blog — Plise Perde Rehberi & İpuçları"
        description="Plise perde hakkında bilmeniz gereken her şey. Uzman rehberleri, dekorasyon önerileri, montaj ve bakım ipuçları ve daha fazlası."
      />

      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-10">
              <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-brand" />
                Öne Çıkan Yazılar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white border border-brand-border rounded-lg overflow-hidden hover:border-brand transition-colors"
                  >
                    <Link href={`/${post.slug}`} className="block">
                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          width={1200}
                          height={675}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="p-6">
                      <h3 className="text-lg font-semibold text-brand-text mb-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm text-brand-text-light mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-brand-text-light">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.datePublished).toLocaleDateString("tr-TR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readingTime} dk okuma
                        </span>
                      </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">
              Tüm Yazılar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-brand-border rounded-lg overflow-hidden hover:border-brand transition-colors"
                >
                  <Link href={`/${post.slug}`} className="block">
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        width={1200}
                        height={675}
                        className="w-full h-40 object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="p-5">
                    <h3 className="text-base font-semibold text-brand-text mb-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-brand-text-light mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-brand-text-light">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(post.datePublished).toLocaleDateString("tr-TR", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readingTime} dk
                        </span>
                      </div>
                      <ChevronRight size={16} className="text-brand" />
                    </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>

        </div>
      </div>
      <CTASection />
    </PageLayout>
  );
}
