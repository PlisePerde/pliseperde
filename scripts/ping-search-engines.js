/**
 * IndexNow ping — build sonrası otomatik çalışır (postbuild)
 * Bing, Yandex, Naver ve Seznam'e sitemap güncellendi sinyali gönderir
 * Google: Search Console'dan sitemap'i kendisi çeker — ping gerekmez
 */
const https = require("https");

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

function pingIndexNow() {
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
  console.log("=== IndexNow ===");
  await pingIndexNow();
  console.log("Ping tamamlandı.");
})();
