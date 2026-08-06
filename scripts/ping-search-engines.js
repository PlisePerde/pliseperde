/**
 * IndexNow + Google/Bing sitemap ping
 * Build sonrası otomatik çalışır (postbuild)
 * Tüm arama motorlarına sitemap güncellendi sinyali gönderir
 */
const https = require("https");
const http = require("http");

const SITE_URL = "https://pliseperde.com";
const INDEXNOW_KEY = "abba96238a336a6d70b7c6f2cd7408be";

const sitemaps = [
  `${SITE_URL}/sitemap.xml`,
  `${SITE_URL}/sitemap-pages.xml`,
  `${SITE_URL}/sitemap-blog.xml`,
  `${SITE_URL}/sitemap-models.xml`,
  `${SITE_URL}/sitemap-services.xml`,
  `${SITE_URL}/sitemap-regions.xml`,
  `${SITE_URL}/sitemap-comparisons.xml`,
  `${SITE_URL}/sitemap-legal.xml`,
];

function fetchUrl(url) {
  return new Promise((resolve) => {
    const mod = url.startsWith("https") ? https : http;
    mod
      .get(url, (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => resolve({ status: res.statusCode, body }));
      })
      .on("error", (err) => resolve({ status: 0, error: err.message }));
  });
}

async function pingGoogle() {
  for (const sitemap of sitemaps) {
    const result = await fetchUrl(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`
    );
    console.log(`  Google: ${sitemap} → ${result.status}`);
  }
}

async function pingBing() {
  for (const sitemap of sitemaps) {
    const result = await fetchUrl(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`
    );
    console.log(`  Bing: ${sitemap} → ${result.status}`);
  }
}

async function pingIndexNow() {
  const body = JSON.stringify({
    host: "pliseperde.com",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/indexnow-${INDEXNOW_KEY}.txt`,
    urlList: sitemaps,
  });

  return new Promise((resolve) => {
    const req = https.request(
      {
        hostname: "api.indexnow.org",
        path: "/IndexNow",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        console.log(`  IndexNow: ${res.statusCode}`);
        resolve();
      }
    );
    req.on("error", (err) => {
      console.log(`  IndexNow error: ${err.message}`);
      resolve();
    });
    req.write(body);
    req.end();
  });
}

(async () => {
  console.log("=== Sitemap Ping ===");
  await pingGoogle();
  await pingBing();

  console.log("=== IndexNow ===");
  await pingIndexNow();

  console.log("Ping tamamlandı.");
})();
