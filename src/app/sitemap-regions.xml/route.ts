import { cities } from "@/data/cities";
import { SITE_URL, xmlResponse } from "@/lib/sitemap-data";

export function GET() {
  const date = new Date().toISOString().split("T")[0];
  const urls = cities
    .map(
      (city) => `  <url>
    <loc>${SITE_URL}/${city.slug}/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${city.priority ? 0.8 : 0.6}</priority>
  </url>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  return xmlResponse(xml);
}
