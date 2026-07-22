import Link from "next/link";
import { Calendar, Clock, ChevronRight, Wrench, Ruler, Phone, Package } from "lucide-react";
import type { BlogPost } from "@/data/blog";

function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

interface BlogSidebarProps {
  currentPost: BlogPost;
  otherPosts: BlogPost[];
}

export default function BlogSidebar({ currentPost, otherPosts }: BlogSidebarProps) {
  const quickLinks = [
    { href: "/urunlerimiz/", label: "Ürünlerimiz", icon: Package },
    { href: "/plise-perde-montaji-nasil-yapilir/", label: "Montaj Rehberi", icon: Wrench },
    { href: "/olcu-alma-destegi/", label: "Ölçü Alma Desteği", icon: Ruler },
    { href: "/iletisim/", label: "İletişim", icon: Phone },
  ];

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* İçindekiler */}
        {currentPost.sections.length > 0 && (
          <nav className="p-5 bg-white border border-brand-border rounded-lg" aria-label="İçindekiler">
            <h2 className="text-sm font-semibold text-brand-text mb-3">
              İçindekiler
            </h2>
            <ol className="space-y-2">
              {currentPost.sections.map((section, index) => {
                const sectionId = slugifyHeading(section.heading);
                return (
                  <li key={index}>
                    <a
                      href={`#${sectionId}`}
                      className="text-xs text-brand-text-light hover:text-brand transition-colors flex items-start gap-1.5 leading-relaxed"
                    >
                      <span className="text-brand/60 font-medium flex-shrink-0">
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

        {/* Diğer Yazılar */}
        {otherPosts.length > 0 && (
          <div className="p-5 bg-white border border-brand-border rounded-lg">
            <h2 className="text-sm font-semibold text-brand-text mb-3">
              Diğer Yazılar
            </h2>
            <ul className="space-y-3">
              {otherPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/${post.slug}`}
                    className="group block"
                  >
                    <h3 className="text-xs font-medium text-brand-text leading-snug group-hover:text-brand transition-colors mb-1">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-brand-text-light">
                      <span className="flex items-center gap-0.5">
                        <Calendar size={10} />
                        {new Date(post.datePublished).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <Clock size={10} />
                        {post.readingTime} dk
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mt-4 inline-flex items-center gap-1 text-xs text-brand hover:text-brand-dark transition-colors font-medium"
            >
              Tüm Yazılar
              <ChevronRight size={14} />
            </Link>
          </div>
        )}

        {/* Hızlı Linkler */}
        <div className="p-5 bg-brand-bg border border-brand-border rounded-lg">
          <h2 className="text-sm font-semibold text-brand-text mb-3">
            Hızlı Erişim
          </h2>
          <ul className="space-y-2">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-xs text-brand-text-light hover:text-brand transition-colors"
                  >
                    <Icon size={14} className="text-brand flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
