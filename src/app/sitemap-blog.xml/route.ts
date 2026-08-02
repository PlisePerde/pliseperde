import { getAllBlogPosts } from "@/data/blog";
import { SITE_URL, xmlResponse } from "@/lib/sitemap-data";

export function GET() {
  const posts = getAllBlogPosts();
  const date = new Date().toISOString().split("T")[0];
  const blogIndex = `  <url>
    <loc>${SITE_URL}/blog/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  const urls = posts
    .map(
      (post) => `  <url>
    <loc>${SITE_URL}/${post.slug}/</loc>
    <lastmod>${post.datePublished}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogIndex}
${urls}
</urlset>`;
  return xmlResponse(xml);
}
