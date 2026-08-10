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
  { pattern: /^kurumsal$|^urunlerimiz$|^plise-perde-modelleri$|^plise-perde-sistemleri$|^plise-perde-cesitleri$|^plise-perde-fiyatlari$|^plise-perde-montaji$|^plise-perde-katalog$|^plise-perde-renkleri$|^hizmetlerimiz$|^hizmet-bolgeleri$|^plise-perde-fiyat-hesaplama$|^blog$|^karsilastirmalar$/, priority: 0.9, changefreq: "weekly" },
  { pattern: /^plise-perde$|^honeycomb-perde$|^duet-perde$|^duz-plise-perde$|^blackout-plise-perde$|^gece-gunduz-plise-perde$|^desenli-plise-perde$|^baskili-plise-perde$|^plise-perde-sineklik$|^vidali-plise-perde$|^yapiskanli-plise-perde$|^kancali-plise-perde$|^portrayli-plise-perde$|^braketli-plise-perde$|^motorlu-plise-perde$|^yatay-plise-perde$|^dikey-plise-perde$|^tavan-plise-perde$|^kasali-plise-perde$|^ucgen-plise-perde$|^egimli-plise-perde$|^acili-plise-perde$|^yuvarlak-plise-perde$|^oval-plise-perde$|^cift-cam-arasi-plise-perde$|^plise-perde-ozellikleri$|^plise-perde-kullanim-alanlari$|^referanslarimiz$|^plise-perde-bayilik$|^montaj$|^olcu-alma-destegi$|^kesif$|^numune$|^plise-perde-projesi$/, priority: 0.8, changefreq: "monthly" },
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

const allDiscoveredRoutes = discoverAppRoutes().filter(
  (e) => !citySlugs.has(e.slug) && !blogSlugs.has(e.slug)
);

export const modelPages: SitemapEntry[] = allDiscoveredRoutes.filter((e) =>
  /^duz-plise-perde$|^blackout-plise-perde$|^gece-gunduz-plise-perde$|^desenli-plise-perde$|^baskili-plise-perde$|^plise-perde-sineklik$/.test(e.slug)
);

export const systemPages: SitemapEntry[] = allDiscoveredRoutes.filter((e) =>
  /^plise-perde-sistemleri$|^yatay-plise-perde$|^dikey-plise-perde$|^tavan-plise-perde$|^kasali-plise-perde$|^ucgen-plise-perde$|^egimli-plise-perde$|^acili-plise-perde$|^yuvarlak-plise-perde$|^oval-plise-perde$|^cift-cam-arasi-plise-perde$/.test(e.slug)
);

export const montagePages: SitemapEntry[] = allDiscoveredRoutes.filter((e) =>
  /^plise-perde-montaji$|^vidali-plise-perde$|^yapiskanli-plise-perde$|^kancali-plise-perde$|^portrayli-plise-perde$|^braketli-plise-perde$|^motorlu-plise-perde$/.test(e.slug)
);

export const productPages: SitemapEntry[] = allDiscoveredRoutes.filter((e) =>
  /^urunlerimiz$|^plise-perde$|^honeycomb-perde$|^duet-perde$|^plise-perde-aparatlari$|^plise-perde-yedek-parca$/.test(e.slug)
);

export const usageAreaPages: SitemapEntry[] = allDiscoveredRoutes.filter((e) =>
  /^plise-perde-kullanim-alanlari$|^(mutfak|salon|yatak-odasi|cocuk-odasi|calisma-odasi|banyo-wc|genc-odasi|cam-balkon|villa|karavan|tekne|magaza|ofis|kafe-restoran|otel|hastane|klinik|laboratuvar|spor-salonu|anaokulu|prefabrik-ev)-plise-perde$/.test(e.slug)
);

export const servicePages: SitemapEntry[] = allDiscoveredRoutes.filter((e) =>
  /^montaj$|^olcu-alma-destegi$|^kesif$|^numune$|^plise-perde-projesi$/.test(e.slug)
);

export const comparisonPages: SitemapEntry[] = allDiscoveredRoutes.filter((e) =>
  /^plise-perde-vs-/.test(e.slug)
);

export const legalPages: SitemapEntry[] = allDiscoveredRoutes.filter((e) =>
  /^sozlesmelerimiz$|^siparis-ve-ozel-uretim-sartlari$|^uyelik-sozlesmesi$|^montaj-ve-uygulama-sartlari$|^olcu-alma-bilgilendirmesi$|^mesafeli-satis-sozlesmesi$|^on-bilgilendirme-formu$|^kullanim-kosullari$|^politikalarimiz$|^iade-degisim-ve-cayma-hakki$|^yurt-disi-teslimat-ve-gumruk$|^odeme-ve-taksit-secenekleri$|^banka-ve-havale-bilgileri$|^garanti-ve-satis-sonrasi-destek$|^satici-bilgileri$|^cerez-politikasi$|^acik-riza-metni$|^ticari-elektronik-ileri-onayi$|^teslimat-ve-kargo$|^iade-ve-degisim$|^gizlilik-politikasi$|^kvkk-aydinlatma-metni$/.test(e.slug)
);

const modelSlugs = new Set(modelPages.map((e) => e.slug));
const systemSlugs = new Set(systemPages.map((e) => e.slug));
const montageSlugs = new Set(montagePages.map((e) => e.slug));
const productSlugs = new Set(productPages.map((e) => e.slug));
const usageAreaSlugs = new Set(usageAreaPages.map((e) => e.slug));
const serviceSlugs = new Set(servicePages.map((e) => e.slug));
const comparisonSlugs = new Set(comparisonPages.map((e) => e.slug));
const legalSlugs = new Set(legalPages.map((e) => e.slug));

export const staticPages: SitemapEntry[] = allDiscoveredRoutes.filter(
  (e) => !modelSlugs.has(e.slug) && !systemSlugs.has(e.slug) && !montageSlugs.has(e.slug) && !productSlugs.has(e.slug) && !usageAreaSlugs.has(e.slug) && !serviceSlugs.has(e.slug) && !comparisonSlugs.has(e.slug) && !legalSlugs.has(e.slug) && e.slug !== "blog"
);

export function buildUrl(slug: string): string {
  return slug === "" ? `${SITE_URL}/` : `${SITE_URL}/${slug}/`;
}

const pageLastMods: Record<string, string> = {
  "": "2026-08-06",
  kurumsal: "2026-08-06",
  urunlerimiz: "2026-08-06",
  "plise-perde-modelleri": "2026-08-06",
  "plise-perde-sistemleri": "2026-08-06",
  "plise-perde-cesitleri": "2026-08-06",
  "plise-perde-ozellikleri": "2026-08-06",
  "plise-perde-fiyatlari": "2026-08-06",
  "plise-perde-fiyat-hesaplama": "2026-08-06",
  hizmetlerimiz: "2026-08-06",
  "hizmet-bolgeleri": "2026-08-06",
  karsilastirmalar: "2026-08-06",
  blog: "2026-08-06",
  galeri: "2026-08-06",
  iletisim: "2026-08-06",
  hakkimizda: "2026-08-06",
  referanslarimiz: "2026-08-06",
  "plise-perde-bayilik": "2026-08-06",
  "sikca-sorulan-sorular": "2026-08-06",
  "plise-perde-kullanici-yorumlari": "2026-08-06",
  surdurulebilirlik: "2026-08-06",
  "cocuk-guvenligi": "2026-08-06",
  "site-haritasi": "2026-08-06",
  numune: "2026-08-06",
  kesif: "2026-08-06",
  montaj: "2026-08-06",
  "olcu-alma-destegi": "2026-08-06",
  "plise-perde-projesi": "2026-08-06",
  "plise-perde": "2026-08-06",
  "honeycomb-perde": "2026-08-06",
  "duet-perde": "2026-08-06",
  "plise-perde-aparatlari": "2026-08-06",
  "plise-perde-yedek-parca": "2026-08-06",
};

export function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateStandardSitemap(entries: SitemapEntry[], lastmod?: string): string {
  const today = new Date().toISOString().split("T")[0];
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${buildUrl(e.slug)}</loc>
    <lastmod>${lastmod || pageLastMods[e.slug] || today}</lastmod>
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
