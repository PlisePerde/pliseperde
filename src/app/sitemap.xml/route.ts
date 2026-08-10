import { SITE_URL, subSitemaps, xmlResponse } from "@/lib/sitemap-data";

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
