import { SITE_URL, xmlResponse } from "@/lib/sitemap-data";

const subSitemaps = [
  "sitemap-pages.xml",
  "sitemap-products.xml",
  "sitemap-models.xml",
  "sitemap-systems.xml",
  "sitemap-montage.xml",
  "sitemap-usage-areas.xml",
  "sitemap-services.xml",
  "sitemap-regions.xml",
  "sitemap-comparisons.xml",
  "sitemap-blog.xml",
  "sitemap-legal.xml",
  "sitemap-images.xml",
  "sitemap-videos.xml",
];

export function GET() {
  const now = new Date().toISOString();
  const sitemaps = subSitemaps
    .map(
      (name) =>
        `  <sitemap><loc>${SITE_URL}/${name}</loc><lastmod>${now}</lastmod></sitemap>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`;
  return xmlResponse(xml);
}
