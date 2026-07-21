const fs = require("fs");
const path = require("path");

const SITE_URL = "https://pliseperde.com";
const TODAY = new Date().toISOString().split("T")[0];
const OUT_DIR = path.join(process.cwd(), "out");
const PUBLIC_DIR = path.join(process.cwd(), "public");

const sitemaps = {
  pages: [
    { slug: "", priority: 1.0, changefreq: "weekly" },
    { slug: "urunlerimiz", priority: 0.9, changefreq: "monthly" },
    { slug: "plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "honeycomb-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "duet-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "plise-perde-aparatlari", priority: 0.7, changefreq: "monthly" },
    { slug: "plise-perde-yedek-parca", priority: 0.7, changefreq: "monthly" },
    { slug: "plise-perde-modelleri", priority: 0.9, changefreq: "monthly" },
    { slug: "duz-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "blackout-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "gece-gunduz-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "desenli-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "basili-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "plise-perde-sistemleri", priority: 0.9, changefreq: "monthly" },
    { slug: "vidali-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "vidasiz-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "yapiskanli-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "kancali-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "portray-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "braketli-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "motorlu-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "plise-perde-cesitleri", priority: 0.9, changefreq: "monthly" },
    { slug: "plise-perde-ozellikleri", priority: 0.8, changefreq: "monthly" },
    { slug: "plise-perde-fiyatlari", priority: 0.9, changefreq: "weekly" },
    { slug: "plise-perde-kullanim-alanlari", priority: 0.8, changefreq: "monthly" },
    { slug: "mutfak-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "salon-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "yatak-odasi-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "cocuk-odasi-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "calisma-odasi-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "banyo-wc-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "genc-odasi-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "cam-balkon-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "villa-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "karavan-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "tekne-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "cati-kati-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "magaza-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "ofis-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "kafe-restoran-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "otel-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "hastane-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "klinik-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "spor-salonu-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "anaokulu-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "laboratuvar-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "prefabrik-ev-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "hizmetlerimiz", priority: 0.9, changefreq: "monthly" },
    { slug: "hizmet-bolgeleri", priority: 0.9, changefreq: "monthly" },
    { slug: "referanslarimiz", priority: 0.8, changefreq: "monthly" },
    { slug: "iletisim", priority: 0.7, changefreq: "yearly" },
    { slug: "plise-perde-fiyat-hesaplama", priority: 0.9, changefreq: "weekly" },
    { slug: "site-haritasi", priority: 0.6, changefreq: "weekly" },
    { slug: "hakkimizda", priority: 0.7, changefreq: "yearly" },
    { slug: "surdurulebilirlik", priority: 0.5, changefreq: "yearly" },
    { slug: "cocuk-guvenligi", priority: 0.6, changefreq: "yearly" },
    { slug: "galeri", priority: 0.5, changefreq: "monthly" },
    { slug: "sss", priority: 0.6, changefreq: "monthly" },
    { slug: "plise-perde-kullanici-yorumlari", priority: 0.6, changefreq: "monthly" },
  ],
  models: [
    { slug: "vidali-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "yapistirmali-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "portrayli-plise-perde", priority: 0.7, changefreq: "monthly" },
  ],
  services: [
    { slug: "montaj", priority: 0.8, changefreq: "monthly" },
    { slug: "olcu-alma-destegi", priority: 0.8, changefreq: "monthly" },
    { slug: "ucretsiz-kesif", priority: 0.8, changefreq: "monthly" },
  ],
  regions: [
    { slug: "istanbul-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "pendik-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "kartal-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "maltepe-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "tuzla-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "atasehir-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "kadikoy-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "kocaeli-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "yalova-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "sakarya-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "ankara-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "bursa-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "izmir-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "antalya-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "konya-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "gaziantep-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "eskisehir-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "adana-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "samsun-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "kayseri-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "mersin-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "trabzon-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "diyarbakir-plise-perde", priority: 0.6, changefreq: "monthly" },
  ],
  comparisons: [
    { slug: "plise-perde-vs-zebra-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "plise-perde-vs-jaluzi-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "plise-perde-vs-stor-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "plise-perde-vs-tul-perde", priority: 0.6, changefreq: "monthly" },
  ],
  legal: [
    { slug: "sozlesmelerimiz", priority: 0.5, changefreq: "yearly" },
    { slug: "siparis-ve-ozel-uretim-sartlari", priority: 0.5, changefreq: "yearly" },
    { slug: "uyelik-sozlesmesi", priority: 0.5, changefreq: "yearly" },
    { slug: "montaj-ve-uygulama-sartlari", priority: 0.5, changefreq: "yearly" },
    { slug: "olcu-alma-bilgilendirmesi", priority: 0.5, changefreq: "yearly" },
    { slug: "mesafeli-satis-sozlesmesi", priority: 0.5, changefreq: "yearly" },
    { slug: "on-bilgilendirme-formu", priority: 0.5, changefreq: "yearly" },
    { slug: "kullanim-kosullari", priority: 0.5, changefreq: "yearly" },
    { slug: "politikalarimiz", priority: 0.5, changefreq: "yearly" },
    { slug: "iade-degisim-ve-cayma-hakki", priority: 0.5, changefreq: "yearly" },
    { slug: "yurt-disi-teslimat-ve-gumruk", priority: 0.5, changefreq: "yearly" },
    { slug: "odeme-ve-taksit-secenekleri", priority: 0.5, changefreq: "yearly" },
    { slug: "banka-ve-havale-bilgileri", priority: 0.5, changefreq: "yearly" },
    { slug: "garanti-ve-satis-sonrasi-destek", priority: 0.5, changefreq: "yearly" },
    { slug: "satici-bilgileri", priority: 0.5, changefreq: "yearly" },
    { slug: "cerez-politikasi", priority: 0.5, changefreq: "yearly" },
    { slug: "acik-riza-metni", priority: 0.5, changefreq: "yearly" },
    { slug: "ticari-elektronik-ileri-onayi", priority: 0.5, changefreq: "yearly" },
    { slug: "teslimat-ve-kargo", priority: 0.5, changefreq: "yearly" },
    { slug: "iade-ve-degisim", priority: 0.5, changefreq: "yearly" },
    { slug: "gizlilik-politikasi", priority: 0.5, changefreq: "yearly" },
    { slug: "kvkk-aydinlatma-metni", priority: 0.5, changefreq: "yearly" },
  ],
  images: [
    { slug: "honeycomb-perde", images: [
      { loc: "/images/honeycomb-perde-salon.webp", title: "Honeycomb Perde — Salon", caption: "Honeycomb petek yapısı ile enerji tasarrufu sağlayan perde" },
      { loc: "/images/honeycomb-perde-detay.webp", title: "Honeycomb Perde — Detay", caption: "Petek yapı detay görünümü" },
    ]},
  ],
  videos: [
    { slug: "montaj", videos: [
      { thumbnail: "/video/montaj-thumb.jpg", title: "Plise Perde Montajı", description: "Plise perde montaj adımları ve ipuçları.", content: "/video/montaj.mp4", duration: "225", date: "2026-01-01T00:00:00+03:00" },
    ]},
  ],
};

function generateStandardSitemap(name, pages) {
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

if (!fs.existsSync(OUT_DIR)) {
  console.error("out/ directory not found. Run 'next build' first.");
  process.exit(1);
}

const standardSitemaps = ["pages", "models", "services", "regions", "comparisons", "legal"];

standardSitemaps.forEach((name) => {
  const content = generateStandardSitemap(name, sitemaps[name]);
  const filePath = path.join(OUT_DIR, `sitemap-${name}.xml`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated: sitemap-${name}.xml (${sitemaps[name].length} URLs)`);
});

const imageContent = generateImageSitemap(sitemaps.images);
fs.writeFileSync(path.join(OUT_DIR, "sitemap-images.xml"), imageContent);
console.log("Generated: sitemap-images.xml");

const videoContent = generateVideoSitemap(sitemaps.videos);
fs.writeFileSync(path.join(OUT_DIR, "sitemap-videos.xml"), videoContent);
console.log("Generated: sitemap-videos.xml");

console.log("All named sitemaps generated successfully.");

const indexEntries = [
  "sitemap-0.xml",
  "sitemap-pages.xml",
  "sitemap-models.xml",
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

fs.writeFileSync(path.join(OUT_DIR, "sitemap.xml"), sitemapIndex);
fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemapIndex);
console.log("Updated: sitemap.xml (index with all named sitemaps)");
