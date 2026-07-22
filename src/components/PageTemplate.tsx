import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import FAQ, { type FAQItem } from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd, {
  createBreadcrumbJsonLd,
  createFAQSchema,
  createWebPageSchema,
  createProductSchema,
  createServiceSchema,
  createArticleSchema,
  createCollectionPageSchema,
} from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/seo";

export { generatePageMetadata };

export interface ContentSection {
  h2?: string;
  h3?: string;
  paragraphs?: string[];
  list?: { type: "ul" | "ol"; items: string[] };
  table?: { headers: string[]; rows: string[][]; caption?: string };
  html?: string;
}

export interface PageTemplateProps {
  title: string;
  description: string;
  slug: string;
  breadcrumb: string[] | { name: string; url: string }[];
  h1: string;
  intro: string;
  sections: ContentSection[];
  faqItems?: FAQItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  schemaType?: "product" | "service" | "article" | "webpage" | "collectionpage";
  schemaData?: Record<string, unknown>;
  contentNote?: boolean;
  highlight?: string;
}

export default function PageTemplate({
  title,
  description,
  slug,
  breadcrumb,
  h1,
  intro,
  sections,
  faqItems,
  ctaTitle,
  ctaDescription,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  schemaType = "webpage",
  schemaData,
  contentNote = true,
  highlight,
}: PageTemplateProps) {
  const breadcrumbItems: { name: string; url: string }[] =
    breadcrumb.length > 0 && typeof breadcrumb[0] === "object"
      ? (breadcrumb as { name: string; url: string }[])
      : (breadcrumb as string[]).map((name, index) => {
          if (index === 0) return { name, url: "/" };
          const slug = name.toLowerCase()
            .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
            .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
            .replace(/ /g, "-");
          return { name, url: `/${slug}` };
        });

  const schemas: object[] = [
    createBreadcrumbJsonLd(breadcrumb as string[]),
    createWebPageSchema({ name: title, description, url: slug === "" ? "/" : `/${slug}/` }),
  ];

  if (schemaType === "product" && schemaData) {
    schemas.push(createProductSchema(schemaData as Parameters<typeof createProductSchema>[0]));
  } else if (schemaType === "service" && schemaData) {
    schemas.push(createServiceSchema(schemaData as Parameters<typeof createServiceSchema>[0]));
  } else if (schemaType === "article" && schemaData) {
    schemas.push(createArticleSchema(schemaData as Parameters<typeof createArticleSchema>[0]));
  } else if (schemaType === "collectionpage" && schemaData) {
    schemas.push(createCollectionPageSchema(schemaData as Parameters<typeof createCollectionPageSchema>[0]));
  }

  if (faqItems && faqItems.length > 0) {
    schemas.push(createFAQSchema(faqItems));
  }

  return (
    <PageLayout>
      <JsonLd schemas={schemas} />
      <PageHeading
        breadcrumb={breadcrumbItems}
        title={h1}
        description={intro}
        highlight={highlight}
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">

          {sections.map((section, index) => (
            <ScrollReveal key={index} className="mb-8" delay={index * 50}>
              <section>
                {section.h2 && (
                  <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-3">
                    {section.h2}
                  </h2>
                )}
                {section.h3 && (
                  <h3 className="text-base font-medium text-brand-text mb-2">
                    {section.h3}
                  </h3>
                )}
                {section.paragraphs?.map((p, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-sm text-brand-text-light leading-relaxed mb-3"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
                {section.list && (
                  section.list.type === "ul" ? (
                    <ul className="list-disc list-inside space-y-1.5 mb-3 text-sm text-brand-text-light marker:text-brand">
                      {section.list.items.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  ) : (
                    <ol className="list-decimal list-inside space-y-1.5 mb-3 text-sm text-brand-text-light marker:text-brand marker:font-medium">
                      {section.list.items.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ol>
                  )
                )}
                {section.table && (
                  <div className="overflow-x-auto mb-3 border border-brand rounded-lg">
                    <table className="w-full text-sm">
                      {section.table.caption && (
                        <caption className="sr-only">{section.table.caption}</caption>
                      )}
                      <thead>
                        <tr className="bg-brand text-white">
                          {section.table.headers.map((header, i) => (
                            <th key={i} scope="col" className="px-3 py-2 text-left font-medium border-r border-brand-border/30 last:border-r-0">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-brand-border last:border-b-0 hover:bg-brand-bg transition-colors"
                          >
                            {row.map((cell, j) => (
                              <td
                                key={j}
                                className="px-3 py-2 text-brand-text border-r border-brand-border last:border-r-0"
                                dangerouslySetInnerHTML={{ __html: cell }}
                              />
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.html && (
                  <div
                    className="text-sm text-brand-text-light leading-relaxed mb-3"
                    dangerouslySetInnerHTML={{ __html: section.html }}
                  />
                )}
              </section>
            </ScrollReveal>
          ))}

          {faqItems && faqItems.length > 0 && (
            <section className="mb-8" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-lg md:text-xl font-semibold text-brand-text mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <FAQ items={faqItems} />
            </section>
          )}
        </div>
      </div>
      <CTASection
        title={ctaTitle}
        description={ctaDescription}
        primaryLabel={ctaPrimaryLabel}
        primaryHref={ctaPrimaryHref}
      />
    </PageLayout>
  );
}
