const fs = require("fs");
const path = require("path");

const SITE_URL = "https://pliseperde.com";
const TODAY = new Date().toISOString().split("T")[0];
const OUT_DIR = path.join(process.cwd(), "out");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const APP_DIR = path.join(process.cwd(), "src", "app");

const SKIP_DIRS = ["api", "offline"];
const SKIP_FILES = [
  "robots.txt", "manifest.json", "ai.txt", "llms.txt", "llms-full.txt",
  "favicon.ico", "og-image.webp", "sw.js", "workbox-*.js",
  "indexnow-*.txt", "icon-*.png", "apple-icon.png",
];
const IMAGE_EXTS = [".webp", ".jpg", ".jpeg", ".png", ".avif"];
const VIDEO_EXTS = [".mp4", ".webm", ".mov"];

/* ---------- PAGE DISCOVERY (scan src/app/ directory) ---------- */

function discoverPages() {
  const pages = [];

  function scanDir(dir, prefix) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory()) {
        if (SKIP_DIRS.includes(item.name)) continue;
        if (item.name.startsWith("[") && item.name.endsWith("]")) {
          // Dynamic route — scan for generateStaticParams output in .next/
          // For now, skip; these pages are discovered via site-pages.ts data
          continue;
        }
        const fullPath = path.join(dir, item.name);
        const hasPage = fs.existsSync(path.join(fullPath, "page.tsx")) || fs.existsSync(path.join(fullPath, "page.ts"));
        if (hasPage) {
          const slug = prefix ? `${prefix}/${item.name}` : item.name;
          pages.push(slug);
        }
        scanDir(fullPath, prefix ? `${prefix}/${item.name}` : item.name);
      }
    }
  }

  // Homepage
  if (fs.existsSync(path.join(APP_DIR, "page.tsx")) || fs.existsSync(path.join(APP_DIR, "page.ts"))) {
    pages.push("");
  }

  scanDir(APP_DIR, "");

  // Add dynamic [slug] pages from site-pages.ts data
  // These are pages generated via generateStaticParams (blog posts, city pages, etc.)
  try {
    const sitePagesPath = path.join(process.cwd(), "src", "data", "site-pages.ts");
    if (fs.existsSync(sitePagesPath)) {
      const content = fs.readFileSync(sitePagesPath, "utf-8");
      // Extract slugs from cityPages and blogPages
      const citySlugMatches = content.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g);
      // Also check for blog post slugs
      const blogPath = path.join(process.cwd(), "src", "data", "blog.ts");
      if (fs.existsSync(blogPath)) {
        const blogContent = fs.readFileSync(blogPath, "utf-8");
        const blogSlugMatches = blogContent.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g);
        for (const match of blogSlugMatches) {
          if (!pages.includes(match[1])) pages.push(match[1]);
        }
      }
      // Extract city slugs from cities.ts
      const citiesPath = path.join(process.cwd(), "src", "data", "cities.ts");
      if (fs.existsSync(citiesPath)) {
        const citiesContent = fs.readFileSync(citiesPath, "utf-8");
        const citySlugMatches = citiesContent.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g);
        for (const match of citySlugMatches) {
          if (!pages.includes(match[1])) pages.push(match[1]);
        }
      }
    }
  } catch (e) {
    console.warn("Warning: Could not read dynamic page slugs:", e.message);
  }

  return pages.sort();
}

/* ---------- PAGE CATEGORIZATION ---------- */

function categorizePage(slug) {
  // Homepage
  if (slug === "") return { sitemap: "pages", priority: 1.0, changefreq: "weekly" };

  // Main product categories
  if (slug === "urunlerimiz") return { sitemap: "pages", priority: 0.9, changefreq: "monthly" };
  if (/^plise-perde$|^honeycomb-perde$|^duet-perde$|^plise-perde-aparatlari$|^plise-perde-yedek-parca$|^plise-perde-katalog$|^plise-perde-renkleri$/.test(slug))
    return { sitemap: "pages", priority: 0.8, changefreq: "monthly" };

  // Models
  if (slug === "plise-perde-modelleri") return { sitemap: "models", priority: 0.9, changefreq: "monthly" };
  if (/^duz-plise-perde$|^blackout-plise-perde$|^gece-gunduz-plise-perde$|^desenli-plise-perde$|^baskili-plise-perde$|^plise-perde-sineklik$/.test(slug))
    return { sitemap: "models", priority: 0.8, changefreq: "monthly" };

  // Systems
  if (slug === "plise-perde-sistemleri") return { sitemap: "models", priority: 0.9, changefreq: "monthly" };
  if (/^yatay-plise-perde$|^dikey-plise-perde$|^tavan-plise-perde$|^kasali-plise-perde$|^ucgen-plise-perde$|^egimli-plise-perde$|^acili-plise-perde$|^yuvarlak-plise-perde$|^oval-plise-perde$|^cift-cam-arasi-plise-perde$/.test(slug))
    return { sitemap: "models", priority: 0.8, changefreq: "monthly" };

  // Montage (separate sitemap)
  if (slug === "plise-perde-montaji") return { sitemap: "montage", priority: 0.9, changefreq: "monthly" };
  if (/^vidali-plise-perde$|^yapiskanli-plise-perde$|^kancali-plise-perde$|^portrayli-plise-perde$|^braketli-plise-perde$|^motorlu-plise-perde$/.test(slug))
    return { sitemap: "montage", priority: 0.8, changefreq: "monthly" };

  // Varieties
  if (slug === "plise-perde-cesitleri") return { sitemap: "pages", priority: 0.9, changefreq: "monthly" };

  // Features
  if (slug === "plise-perde-ozellikleri") return { sitemap: "pages", priority: 0.8, changefreq: "monthly" };

  // Prices
  if (slug === "plise-perde-fiyatlari") return { sitemap: "pages", priority: 0.9, changefreq: "weekly" };
  if (slug === "plise-perde-fiyat-hesaplama") return { sitemap: "services", priority: 0.8, changefreq: "monthly" };

  // Usage areas hub
  if (slug === "plise-perde-kullanim-alanlari") return { sitemap: "pages", priority: 0.8, changefreq: "monthly" };

  // Individual usage area pages
  if (/^(mutfak|salon|yatak-odasi|cocuk-odasi|calisma-odasi|banyo-wc|genc-odasi|cam-balkon|villa|karavan|tekne|magaza|ofis|kafe-restoran|otel|hastane|klinik|laboratuvar|spor-salonu|anaokulu|prefabrik-ev)-plise-perde$/.test(slug))
    return { sitemap: "pages", priority: 0.7, changefreq: "monthly" };

  // Services
  if (slug === "hizmetlerimiz") return { sitemap: "services", priority: 0.8, changefreq: "monthly" };
  if (/^montaj$|^olcu-alma-destegi$|^ucretsiz-kesif$|^kesif$|^numune$|^plise-perde-projesi$/.test(slug))
    return { sitemap: "services", priority: 0.7, changefreq: "monthly" };

  // Service regions
  if (slug === "hizmet-bolgeleri") return { sitemap: "pages", priority: 0.7, changefreq: "monthly" };

  // City pages (regions)
  if (/^[a-z]+-plise-perde$/.test(slug) && ![
    "plise-perde", "honeycomb-perde", "duet-perde",
    ...["mutfak","salon","yatak-odasi","cocuk-odasi","calisma-odasi","banyo-wc","genc-odasi","cam-balkon","villa","karavan","tekne","magaza","ofis","kafe-restoran","otel","hastane","klinik","laboratuvar","spor-salonu","anaokulu","prefabrik-ev"].map(s => `${s}-plise-perde`),
    ...["duz","blackout","gece-gunduz","desenli","baskili","vidali","yapiskanli","kancali","portrayli","braketli","motorlu","yatay","dikey","tavan","kasali","ucgen","egimli","acili","yuvarlak","oval","cift-cam-arasi"].map(s => `${s}-plise-perde`),
    "plise-perde-sineklik"
  ].includes(slug))
    return { sitemap: "regions", priority: 0.6, changefreq: "monthly" };

  // Comparisons
  if (slug === "karsilastirmalar") return { sitemap: "comparisons", priority: 0.7, changefreq: "monthly" };
  if (slug.startsWith("plise-perde-vs-")) return { sitemap: "comparisons", priority: 0.6, changefreq: "monthly" };

  // Blog posts
  if (slug === "blog") return { sitemap: "blog", priority: 0.8, changefreq: "weekly" };
  if (/^plise-perde-(nedir|nasil|olcusu|montaji|temizligi|tamiri|malzemeleri|mekanizmasi|ipi-nasil-degistirilir|kumasi-nasil-secilir)/.test(slug))
    return { sitemap: "blog", priority: 0.7, changefreq: "monthly" };
  if (slug === "salon-icin-plise-perde-secimi") return { sitemap: "blog", priority: 0.7, changefreq: "monthly" };

  // Corporate
  if (["hakkimizda", "surdurulebilirlik", "cocuk-guvenligi", "galeri", "sikca-sorulan-sorular", "plise-perde-kullanici-yorumlari", "plise-perde-bayilik", "kurumsal", "referanslarimiz"].includes(slug))
    return { sitemap: "pages", priority: 0.6, changefreq: "monthly" };

  // Contact
  if (slug === "iletisim") return { sitemap: "pages", priority: 0.6, changefreq: "monthly" };

  // Legal / contracts
  if (["sozlesmelerimiz", "siparis-ve-ozel-uretim-sartlari", "uyelik-sozlesmesi", "montaj-ve-uygulama-sartlari", "olcu-alma-bilgilendirmesi", "mesafeli-satis-sozlesmesi", "on-bilgilendirme-formu", "kullanim-kosullari"].includes(slug))
    return { sitemap: "legal", priority: 0.5, changefreq: "yearly" };

  // Policies
  if (["politikalarimiz", "iade-degisim-ve-cayma-hakki", "yurt-disi-teslimat-ve-gumruk", "odeme-ve-taksit-secenekleri", "banka-ve-havale-bilgileri", "garanti-ve-satis-sonrasi-destek", "satici-bilgileri", "cerez-politikasi", "acik-riza-metni", "ticari-elektronik-ileri-onayi", "teslimat-ve-kargo", "iade-ve-degisim", "gizlilik-politikasi", "kvkk-aydinlatma-metni"].includes(slug))
    return { sitemap: "legal", priority: 0.5, changefreq: "yearly" };

  // Site map page
  if (slug === "site-haritasi") return { sitemap: "pages", priority: 0.4, changefreq: "monthly" };

  // Default
  return { sitemap: "pages", priority: 0.6, changefreq: "monthly" };
}

/* ---------- IMAGE DISCOVERY (scan public/ directory) ---------- */

function shouldSkipFile(filename) {
  return SKIP_FILES.some(pattern => {
    if (pattern.includes("*")) {
      const regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$");
      return regex.test(filename);
    }
    return filename === pattern;
  });
}

function titleFromFilename(filepath) {
  const dir = path.dirname(filepath).split("/").pop();
  const name = path.basename(filepath, path.extname(filepath));
  const prettyName = name.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const prettyDir = dir ? dir.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) : "";
  if (prettyDir && prettyDir !== ".") {
    return `${prettyDir} — ${prettyName}`;
  }
  return prettyName;
}

function captionFromFilename(filepath) {
  const name = path.basename(filepath, path.extname(filepath));
  return name.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

function discoverImages() {
  const imagePages = {};

  function addImage(pageSlug, imgPath) {
    if (!imagePages[pageSlug]) imagePages[pageSlug] = [];
    imagePages[pageSlug].push({
      loc: imgPath,
      title: titleFromFilename(imgPath),
      caption: captionFromFilename(imgPath),
    });
  }

  function scanDir(dir, prefix) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relPath = prefix ? `${prefix}/${item.name}` : item.name;

      if (item.isDirectory()) {
        scanDir(fullPath, relPath);
      } else if (item.isFile()) {
        if (shouldSkipFile(item.name)) continue;
        const ext = path.extname(item.name).toLowerCase();
        if (!IMAGE_EXTS.includes(ext)) continue;

        // Map images to pages based on directory
        if (relPath.startsWith("gallery/")) {
          addImage("galeri", `/${relPath}`);
        } else if (relPath.startsWith("logos/")) {
          addImage("referanslarimiz", `/${relPath}`);
        } else if (relPath.startsWith("images/")) {
          // Try to match image to a page by filename
          const name = path.basename(item.name, ext);
          addImage(name, `/${relPath}`);
        } else if (relPath.startsWith("mega-menu/")) {
          // Skip mega menu images from sitemap
          continue;
        } else if (relPath.startsWith("kullanim-alanlari/")) {
          addImage("plise-perde-kullanim-alanlari", `/${relPath}`);
        } else if (relPath.startsWith("karsilastirmalar/")) {
          addImage("karsilastirmalar", `/${relPath}`);
        } else if (relPath.startsWith("blog/")) {
          addImage("blog", `/${relPath}`);
        } else {
          // Root-level images (og-image, favicon, etc.) — skip
          continue;
        }
      }
    }
  }

  if (fs.existsSync(PUBLIC_DIR)) {
    scanDir(PUBLIC_DIR, "");
  }

  return Object.entries(imagePages).map(([slug, images]) => ({ slug, images }));
}

/* ---------- VIDEO DISCOVERY (scan public/video/ if exists) ---------- */

function discoverVideos() {
  const videoDir = path.join(PUBLIC_DIR, "video");
  const videoPages = {};

  if (!fs.existsSync(videoDir)) return [];

  function scanDir(dir, prefix) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relPath = prefix ? `${prefix}/${item.name}` : item.name;

      if (item.isDirectory()) {
        scanDir(fullPath, relPath);
      } else if (item.isFile()) {
        const ext = path.extname(item.name).toLowerCase();
        if (!VIDEO_EXTS.includes(ext)) continue;

        const name = path.basename(item.name, ext);
        // Map video to page by filename (e.g., montaj.mp4 → /montaj/)
        const pageSlug = name.replace(/-thumb$/, "").replace(/-video$/, "");
        if (!videoPages[pageSlug]) videoPages[pageSlug] = [];

        // Check for thumbnail (same name with -thumb.jpg)
        const thumbBase = path.join(videoDir, name);
        const thumbJpg = `${thumbBase}-thumb.jpg`;
        const thumbWebp = `${thumbBase}-thumb.webp`;
        let thumbnail = "";
        if (fs.existsSync(thumbJpg)) thumbnail = `/video/${name}-thumb.jpg`;
        else if (fs.existsSync(thumbWebp)) thumbnail = `/video/${name}-thumb.webp`;

        videoPages[pageSlug].push({
          thumbnail,
          title: titleFromFilename(relPath),
          description: captionFromFilename(relPath),
          content: `/${relPath}`,
          duration: "0",
          date: `${TODAY}T00:00:00+03:00`,
        });
      }
    }
  }

  scanDir(videoDir, "");
  return Object.entries(videoPages).map(([slug, videos]) => ({ slug, videos }));
}

/* ---------- SITEMAP GENERATORS ---------- */

function generateStandardSitemap(pages) {
  const urls = pages.map((p) => {
    const loc = p.slug === "" ? SITE_URL + "/" : `${SITE_URL}/${p.slug}/`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function generateImageSitemap(pages) {
  const urls = pages.map((p) => {
    const loc = `${SITE_URL}/${p.slug}/`;
    const images = p.images.map((img) => `    <image:image>
      <image:loc>${SITE_URL}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join("\n");
    return `  <url>
    <loc>${loc}</loc>
${images}
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;
}

function generateVideoSitemap(pages) {
  if (pages.length === 0) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
</urlset>`;
  }

  const urls = pages.map((p) => {
    const loc = `${SITE_URL}/${p.slug}/`;
    const videos = p.videos.map((v) => `    <video:video>
      <video:thumbnail_loc>${SITE_URL}${v.thumbnail}</video:thumbnail_loc>
      <video:title>${v.title}</video:title>
      <video:description>${v.description}</video:description>
      <video:content_loc>${SITE_URL}${v.content}</video:content_loc>
      <video:duration>${v.duration}</video:duration>
      <video:publication_date>${v.date}</video:publication_date>
      <video:uploader>
        <video:uploader>Plise Perde</video:uploader>
      </video:uploader>
      <video:live>no</video:live>
    </video:video>`).join("\n");
    return `  <url>
    <loc>${loc}</loc>
${videos}
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls}
</urlset>`;
}

/* ---------- MAIN ---------- */

const hasOutDir = fs.existsSync(OUT_DIR);

function writeSitemap(filename, content) {
  fs.writeFileSync(path.join(PUBLIC_DIR, filename), content);
  if (hasOutDir) {
    fs.writeFileSync(path.join(OUT_DIR, filename), content);
  }
}

// Discover all pages from out/ directory
const allSlugs = discoverPages();
const categorizedPages = allSlugs.map(slug => ({ slug, ...categorizePage(slug) }));

// Group pages by sitemap name
const sitemapGroups = {};
for (const page of categorizedPages) {
  if (!sitemapGroups[page.sitemap]) sitemapGroups[page.sitemap] = [];
  sitemapGroups[page.sitemap].push(page);
}

// Generate standard sitemaps
const standardSitemaps = ["pages", "models", "services", "regions", "comparisons", "legal"];
for (const name of standardSitemaps) {
  const pages = sitemapGroups[name] || [];
  const content = generateStandardSitemap(pages);
  writeSitemap(`sitemap-${name}.xml`, content);
  console.log(`Generated: sitemap-${name}.xml (${pages.length} URLs)`);
}

// Blog sitemap
const blogPages = sitemapGroups["blog"] || [];
const blogContent = generateStandardSitemap(blogPages);
writeSitemap("sitemap-blog.xml", blogContent);
console.log(`Generated: sitemap-blog.xml (${blogPages.length} URLs)`);

// Image sitemap — dynamically discovered from public/
const imagePages = discoverImages();
const imageContent = generateImageSitemap(imagePages);
writeSitemap("sitemap-images.xml", imageContent);
console.log(`Generated: sitemap-images.xml (${imagePages.length} pages, ${imagePages.reduce((sum, p) => sum + p.images.length, 0)} images)`);

// Video sitemap — dynamically discovered from public/video/
const videoPages = discoverVideos();
const videoContent = generateVideoSitemap(videoPages);
writeSitemap("sitemap-videos.xml", videoContent);
console.log(`Generated: sitemap-videos.xml (${videoPages.length} pages)`);

console.log("All named sitemaps generated successfully.");

// Sitemap index
const indexEntries = [
  "sitemap-pages.xml",
  "sitemap-blog.xml",
  "sitemap-models.xml",
  "sitemap-montage.xml",
  "sitemap-services.xml",
  "sitemap-regions.xml",
  "sitemap-comparisons.xml",
  "sitemap-legal.xml",
  "sitemap-images.xml",
  "sitemap-videos.xml",
];

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexEntries.map((f) => `  <sitemap><loc>https://pliseperde.com/${f}</loc><lastmod>${new Date().toISOString()}</lastmod></sitemap>`).join("\n")}
</sitemapindex>`;

writeSitemap("sitemap.xml", sitemapIndex);
console.log("Updated: sitemap.xml (index with all named sitemaps)");
