import fs from "fs";
import path from "path";
import { cities } from "@/data/cities";
import { getAllBlogPosts } from "@/data/blog";

export const SITE_URL = "https://pliseperde.com";

export type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export interface SitemapEntry {
  slug: string;
  priority: number;
  changefreq: ChangeFreq;
}

const SKIP_DIRS = ["api", "offline", "[slug]"];

const priorityRules: { pattern: RegExp; priority: number; changefreq: ChangeFreq }[] = [
  { pattern: /^$/, priority: 1.0, changefreq: "weekly" },
  { pattern: /^urunlerimiz$|^plise-perde-modelleri$|^plise-perde-sistemleri$|^plise-perde-cesitleri$|^plise-perde-fiyatlari$|^hizmetlerimiz$|^hizmet-bolgeleri$|^plise-perde-fiyat-hesaplama$|^blog$/, priority: 0.9, changefreq: "weekly" },
  { pattern: /^plise-perde$|^honeycomb-perde$|^duet-perde$|^duz-plise-perde$|^blackout-plise-perde$|^gece-gunduz-plise-perde$|^desenli-plise-perde$|^baskili-plise-perde$|^vidali-plise-perde$|^vidasiz-plise-perde$|^yapiskanli-plise-perde$|^kancali-plise-perde$|^portray-plise-perde$|^braketli-plise-perde$|^motorlu-plise-perde$|^plise-perde-ozellikleri$|^plise-perde-kullanim-alanlari$|^referanslarimiz$|^plise-perde-bayilik$|^montaj$|^olcu-alma-destegi$|^ucretsiz-kesif$/, priority: 0.8, changefreq: "monthly" },
  { pattern: /-plise-perde$|^plise-perde-aparatlari$|^plise-perde-yedek-parca$|^iletisim$|^hakkimizda$|^sikca-sorulan-sorular$|^plise-perde-kullanici-yorumlari$|^cocuk-guvenligi$/, priority: 0.7, changefreq: "monthly" },
  { pattern: /^galeri$|^surdurulebilirlik$|^site-haritasi$/, priority: 0.6, changefreq: "weekly" },
  { pattern: /^plise-perde-vs-/, priority: 0.7, changefreq: "monthly" },
  { pattern: /^sozlesmelerimiz$|^siparis-ve-ozel-uretim-sartlari$|^uyelik-sozlesmesi$|^montaj-ve-uygulama-sartlari$|^olcu-alma-bilgilendirmesi$|^mesafeli-satis-sozlesmesi$|^on-bilgilendirme-formu$|^kullanim-kosullari$|^politikalarimiz$|^iade-degisim-ve-cayma-hakki$|^yurt-disi-teslimat-ve-gumruk$|^odeme-ve-taksit-secenekleri$|^banka-ve-havale-bilgileri$|^garanti-ve-satis-sonrasi-destek$|^satici-bilgileri$|^cerez-politikasi$|^acik-riza-metni$|^ticari-elektronik-ileri-onayi$|^teslimat-ve-kargo$|^iade-ve-degisim$|^gizlilik-politikasi$|^kvkk-aydinlatma-metni$/, priority: 0.5, changefreq: "yearly" },
];

function getPriorityForSlug(slug: string): { priority: number; changefreq: ChangeFreq } {
  for (const rule of priorityRules) {
    if (rule.pattern.test(slug)) {
      return { priority: rule.priority, changefreq: rule.changefreq };
    }
  }
  return { priority: 0.6, changefreq: "monthly" };
}

function discoverAppRoutes(): SitemapEntry[] {
  const appDir = path.join(process.cwd(), "src", "app");
  if (!fs.existsSync(appDir)) return [];

  const entries: SitemapEntry[] = [];

  function scanDir(dir: string, prefix: string) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory()) {
        if (SKIP_DIRS.includes(item.name)) continue;
        if (item.name.endsWith(".xml")) continue;
        const fullPath = path.join(dir, item.name);
        const hasPage = fs.existsSync(path.join(fullPath, "page.tsx")) || fs.existsSync(path.join(fullPath, "page.ts"));
        if (hasPage) {
          const slug = prefix ? `${prefix}/${item.name}` : item.name;
          const { priority, changefreq } = getPriorityForSlug(slug);
          entries.push({ slug, priority, changefreq });
        }
        scanDir(fullPath, prefix ? `${prefix}/${item.name}` : item.name);
      }
    }
  }

  if (fs.existsSync(path.join(appDir, "page.tsx")) || fs.existsSync(path.join(appDir, "page.ts"))) {
    entries.push({ slug: "", priority: 1.0, changefreq: "weekly" });
  }

  scanDir(appDir, "");
  return entries;
}

const citySlugs = new Set(cities.map((c) => c.slug));
const blogSlugs = new Set(getAllBlogPosts().map((b) => b.slug));

export const staticPages: SitemapEntry[] = discoverAppRoutes().filter(
  (e) => !citySlugs.has(e.slug) && !blogSlugs.has(e.slug)
);

export const modelPages: SitemapEntry[] = staticPages.filter((e) =>
  /^vidali-plise-perde$|^yapiskanli-plise-perde$|^portray-plise-perde$/.test(e.slug)
);

export const servicePages: SitemapEntry[] = staticPages.filter((e) =>
  /^montaj$|^olcu-alma-destegi$|^ucretsiz-kesif$/.test(e.slug)
);

export const comparisonPages: SitemapEntry[] = staticPages.filter((e) =>
  /^plise-perde-vs-/.test(e.slug)
);

export const legalPages: SitemapEntry[] = staticPages.filter((e) =>
  /^sozlesmelerimiz$|^siparis-ve-ozel-uretim-sartlari$|^uyelik-sozlesmesi$|^montaj-ve-uygulama-sartlari$|^olcu-alma-bilgilendirmesi$|^mesafeli-satis-sozlesmesi$|^on-bilgilendirme-formu$|^kullanim-kosullari$|^politikalarimiz$|^iade-degisim-ve-cayma-hakki$|^yurt-disi-teslimat-ve-gumruk$|^odeme-ve-taksit-secenekleri$|^banka-ve-havale-bilgileri$|^garanti-ve-satis-sonrasi-destek$|^satici-bilgileri$|^cerez-politikasi$|^acik-riza-metni$|^ticari-elektronik-ileri-onayi$|^teslimat-ve-kargo$|^iade-ve-degisim$|^gizlilik-politikasi$|^kvkk-aydinlatma-metni$/.test(e.slug)
);

export function buildUrl(slug: string): string {
  return slug === "" ? `${SITE_URL}/` : `${SITE_URL}/${slug}/`;
}

export function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateStandardSitemap(entries: SitemapEntry[], lastmod?: string): string {
  const date = lastmod || new Date().toISOString().split("T")[0];
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${buildUrl(e.slug)}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function xmlResponse(xml: string): Response {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
