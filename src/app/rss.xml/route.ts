import { getAllBlogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const posts = getAllBlogPosts();
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Plise Perde Blog</title>
    <link>${siteConfig.url}/blog/</link>
    <description>Plise perde hakkında rehberler, montaj ipuçları, dekorasyon önerileri ve uzman tavsiyeleri</description>
    <language>tr-TR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
    <generator>Plise Perde</generator>
    <image>
      <url>${siteConfig.url}/og-image.webp</url>
      <title>Plise Perde Blog</title>
      <link>${siteConfig.url}/blog/</link>
      <width>1200</width>
      <height>630</height>
    </image>
${posts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteConfig.url}/${post.slug}/</link>
      <guid isPermaLink="true">${siteConfig.url}/${post.slug}/</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>
      <category>Plise Perde</category>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
