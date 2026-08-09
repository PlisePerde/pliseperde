import fs from "fs";
import path from "path";
import { cities } from "@/data/cities";
import { getAllBlogPosts } from "@/data/blog";

export interface PageEntry {
  slug: string;
  title: string;
  category: string;
  breadcrumb: string[];
}

const SKIP_DIRS = ["api", "offline", "[slug]"];

const categoryRules: { pattern: RegExp; category: string; title: (slug: string) => string }[] = [
  { pattern: /^$/, category: "Ana Sayfa", title: () => "Ana Sayfa" },
  { pattern: /^urunlerimiz$/, category: "Ürünlerimiz", title: () => "Ürünlerimiz" },
  { pattern: /^plise-perde$|^honeycomb-perde$|^duet-perde$|^plise-perde-aparatlari$|^plise-perde-yedek-parca$/, category: "Ürünlerimiz", title: (s) => titleFromSlug(s) },
  { pattern: /^plise-perde-modelleri$/, category: "Modellerimiz", title: () => "Modellerimiz" },
  { pattern: /^duz-plise-perde$|^blackout-plise-perde$|^gece-gunduz-plise-perde$|^desenli-plise-perde$|^baskili-plise-perde$/, category: "Modellerimiz", title: (s) => titleFromSlug(s) },
  { pattern: /^plise-perde-sistemleri$/, category: "Sistemlerimiz", title: () => "Sistemlerimiz" },
  { pattern: /^vidali-plise-perde$|^vidasiz-plise-perde$|^yapiskanli-plise-perde$|^kancali-plise-perde$|^portray-plise-perde$|^braketli-plise-perde$|^motorlu-plise-perde$/, category: "Sistemlerimiz", title: (s) => titleFromSlug(s) },
  { pattern: /^plise-perde-cesitleri$/, category: "Çeşitlerimiz", title: () => "Çeşitlerimiz" },
  { pattern: /^plise-perde-ozellikleri$/, category: "Özellikler", title: () => "Özellikler" },
  { pattern: /^plise-perde-fiyatlari$/, category: "Fiyatlarımız", title: () => "Fiyatlarımız" },
  { pattern: /^plise-perde-kullanim-alanlari$/, category: "Kullanım Alanları", title: () => "Kullanım Alanları" },
  { pattern: /-plise-perde$/, category: "Kullanım Alanları", title: (s) => titleFromSlug(s) },
  { pattern: /^hizmetlerimiz$/, category: "Hizmetlerimiz", title: () => "Hizmetlerimiz" },
  { pattern: /^montaj$|^olcu-alma-destegi$|^ucretsiz-kesif$|^kesif$|^numune$|^plise-perde-projesi$/, category: "Hizmetlerimiz", title: (s) => titleFromSlug(s) },
  { pattern: /^plise-perde-fiyat-hesaplama$/, category: "Fiyat Hesaplama", title: () => "Fiyat Hesaplama" },
  { pattern: /^hizmet-bolgeleri$/, category: "Hizmet Bölgeleri", title: () => "Hizmet Bölgeleri" },
  { pattern: /^referanslarimiz$/, category: "Referanslarımız", title: () => "Referanslarımız" },
  { pattern: /^karsilastirmalar$/, category: "Karşılaştırmalar", title: () => "Karşılaştırmalar" },
  { pattern: /^plise-perde-vs-/, category: "Karşılaştırmalar", title: (s) => titleFromSlug(s) },
  { pattern: /^hakkimizda$|^surdurulebilirlik$|^cocuk-guvenligi$|^galeri$|^sikca-sorulan-sorular$|^plise-perde-kullanici-yorumlari$|^plise-perde-bayilik$/, category: "Kurumsal", title: (s) => titleFromSlug(s) },
  { pattern: /^iletisim$/, category: "İletişim", title: () => "İletişim" },
  { pattern: /^sozlesmelerimiz$|^siparis-ve-ozel-uretim-sartlari$|^uyelik-sozlesmesi$|^montaj-ve-uygulama-sartlari$|^olcu-alma-bilgilendirmesi$|^mesafeli-satis-sozlesmesi$|^on-bilgilendirme-formu$|^kullanim-kosullari$/, category: "Sözleşmelerimiz", title: (s) => titleFromSlug(s) },
  { pattern: /^politikalarimiz$|^iade-degisim-ve-cayma-hakki$|^yurt-disi-teslimat-ve-gumruk$|^odeme-ve-taksit-secenekleri$|^banka-ve-havale-bilgileri$|^garanti-ve-satis-sonrasi-destek$|^satici-bilgileri$|^cerez-politikasi$|^acik-riza-metni$|^ticari-elektronik-ileri-onayi$|^teslimat-ve-kargo$|^iade-ve-degisim$|^gizlilik-politikasi$|^kvkk-aydinlatma-metni$/, category: "Politikalarımız", title: (s) => titleFromSlug(s) },
  { pattern: /^blog$/, category: "Blog", title: () => "Blog" },
  { pattern: /^site-haritasi$/, category: "Site Haritası", title: () => "Site Haritası" },
];

const slugTitleMap: Record<string, string> = {
  "": "Ana Sayfa",
  "acik-riza-metni": "Açık Rıza Metni",
  "anaokulu-plise-perde": "Anaokulu Plise Perde",
  "banka-ve-havale-bilgileri": "Banka ve Havale Bilgileri",
  "banyo-wc-plise-perde": "Banyo/WC Plise Perde",
  "baskili-plise-perde": "Baskılı Plise Perde",
  "blackout-plise-perde": "Blackout Plise Perde",
  "braketli-plise-perde": "Braketli Plise Perde",
  "calisma-odasi-plise-perde": "Çalışma Odası Plise Perde",
  "cam-balkon-plise-perde": "Cam Balkon Plise Perde",
  "cerez-politikasi": "Çerez Politikası",
  "cocuk-guvenligi": "Çocuk Güvenliği",
  "cocuk-odasi-plise-perde": "Çocuk Odası Plise Perde",
  "desenli-plise-perde": "Desenli Plise Perde",
  "duet-perde": "Düet Perde Ürünleri",
  "duz-plise-perde": "Düz Plise Perde",
  "galeri": "Galeri",
  "garanti-ve-satis-sonrasi-destek": "Garanti ve Satış Sonrası Destek",
  "gece-gunduz-plise-perde": "Gece Gündüz Plise Perde",
  "genc-odasi-plise-perde": "Genç Odası Plise Perde",
  "gizlilik-politikasi": "Gizlilik Politikası",
  "hakkimizda": "Hakkımızda",
  "hastane-plise-perde": "Hastane Plise Perde",
  "hizmet-bolgeleri": "Hizmet Bölgeleri",
  "honeycomb-perde": "Honeycomb Perde Ürünleri",
  "karsilastirmalar": "Karşılaştırmalar",
  "iade-degisim-ve-cayma-hakki": "İade Değişim ve Cayma Hakkı",
  "iade-ve-degisim": "İade ve Değişim",
  "iletisim": "İletişim",
  "kafe-restoran-plise-perde": "Kafe Restoran Plise Perde",
  "kancali-plise-perde": "Kancalı Plise Perde",
  "karavan-plise-perde": "Karavan Plise Perde",
  "klinik-plise-perde": "Klinik Plise Perde",
  "kullanim-kosullari": "Kullanım Koşulları",
  "kvkk-aydinlatma-metni": "KVKK Aydınlatma Metni",
  "laboratuvar-plise-perde": "Laboratuvar Plise Perde",
  "magaza-plise-perde": "Mağaza Plise Perde",
  "mesafeli-satis-sozlesmesi": "Mesafeli Satış Sözleşmesi",
  "kesif": "Ücretsiz Keşif ve Danışmanlık",
  "montaj": "Ücretsiz Montaj",
  "montaj-ve-uygulama-sartlari": "Montaj ve Uygulama Şartları",
  "motorlu-plise-perde": "Motorlu Plise Perde",
  "mutfak-plise-perde": "Mutfak Plise Perde",
  "odeme-ve-taksit-secenekleri": "Ödeme ve Taksit Seçenekleri",
  "ofis-plise-perde": "Ofis Plise Perde",
  "olcu-alma-bilgilendirmesi": "Ölçü Alma Bilgilendirmesi",
  "numune": "Ücretsiz Numune / Kumaş",
  "olcu-alma-destegi": "Ücretsiz Ölçü Alma Desteği",
  "on-bilgilendirme-formu": "Ön Bilgilendirme Formu",
  "otel-plise-perde": "Otel Plise Perde",
  "plise-perde": "Plise Perde Ürünleri",
  "plise-perde-aparatlari": "Plise Perde Aparatları",
  "plise-perde-bayilik": "Plise Perde Bayilik",
  "plise-perde-projesi": "Proje ve Toplu Üretim",
  "plise-perde-cesitleri": "Plise Perde Çeşitleri",
  "plise-perde-fiyat-hesaplama": "Plise Perde Fiyat Hesaplama",
  "plise-perde-fiyatlari": "Plise Perde Fiyatları",
  "plise-perde-kullanici-yorumlari": "Plise Perde Kullanıcı Yorumları",
  "plise-perde-kullanim-alanlari": "Plise Perde Kullanım Alanları",
  "plise-perde-modelleri": "Plise Perde Modelleri",
  "plise-perde-ozellikleri": "Plise Perde Özellikleri",
  "plise-perde-sistemleri": "Plise Perde Sistemleri",
  "plise-perde-vs-jaluzi-perde": "Plise Perde vs Jaluzi Perde",
  "plise-perde-vs-stor-perde": "Plise Perde vs Stor Perde",
  "plise-perde-vs-tul-perde": "Plise Perde vs Tül Perde",
  "plise-perde-vs-zebra-perde": "Plise Perde vs Zebra Perde",
  "plise-perde-yedek-parca": "Plise Perde Yedek Parça",
  "portray-plise-perde": "Portray Plise Perde",
  "prefabrik-ev-plise-perde": "Prefabrik Ev Plise Perde",
  "referanslarimiz": "Referanslarımız",
  "salon-plise-perde": "Salon Plise Perde",
  "satici-bilgileri": "Satıcı Bilgileri",
  "sikca-sorulan-sorular": "Sıkça Sorulan Sorular",
  "siparis-ve-ozel-uretim-sartlari": "Sipariş ve Özel Üretim Şartları",
  "site-haritasi": "Site Haritası",
  "sozlesmelerimiz": "Sözleşmelerimiz",
  "politikalarimiz": "Politikalarımız",
  "spor-salonu-plise-perde": "Spor Salonu Plise Perde",
  "surdurulebilirlik": "Sürdürülebilirlik",
  "tekne-plise-perde": "Tekne Plise Perde",
  "teslimat-ve-kargo": "Teslimat ve Kargo",
  "ticari-elektronik-ileri-onayi": "Ticari Elektronik İleti Onayı",
  "ucretsiz-kesif": "Ücretsiz Keşif",
  "vidali-plise-perde": "Vidalı Plise Perde",
  "vidasiz-plise-perde": "Vidasız Plise Perde",
  "villa-plise-perde": "Villa Plise Perde",
  "yapiskanli-plise-perde": "Yapışkanlı Plise Perde",
  "yatak-odasi-plise-perde": "Yatak Odası Plise Perde",
  "yurt-disi-teslimat-ve-gumruk": "Yurt Dışı Teslimat ve Gümrük",
};

function titleFromSlug(slug: string): string {
  return slugTitleMap[slug] ?? slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function categorizePage(slug: string): { category: string; title: string } {
  for (const rule of categoryRules) {
    if (rule.pattern.test(slug)) {
      return { category: rule.category, title: rule.title(slug) };
    }
  }
  return { category: "Diğer", title: titleFromSlug(slug) };
}

function discoverAppRoutes(): PageEntry[] {
  const appDir = path.join(process.cwd(), "src", "app");
  if (!fs.existsSync(appDir)) return [];

  const entries: PageEntry[] = [];

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
          const { category, title } = categorizePage(slug);
          entries.push({
            slug,
            title,
            category,
            breadcrumb: ["Ana Sayfa", category, title],
          });
        }
        scanDir(fullPath, prefix ? `${prefix}/${item.name}` : item.name);
      }
    }
  }

  if (fs.existsSync(path.join(appDir, "page.tsx")) || fs.existsSync(path.join(appDir, "page.ts"))) {
    entries.push({
      slug: "",
      title: "Ana Sayfa",
      category: "Ana Sayfa",
      breadcrumb: ["Ana Sayfa"],
    });
  }

  scanDir(appDir, "");
  return entries;
}

const cityPages: PageEntry[] = cities.map((city) => ({
  slug: city.slug,
  title: `${city.name} Plise Perde`,
  category: "Hizmet Bölgeleri",
  breadcrumb: ["Ana Sayfa", "Hizmet Bölgeleri", `${city.name} Plise Perde`],
}));

const blogPages: PageEntry[] = getAllBlogPosts().map((post) => ({
  slug: post.slug,
  title: post.title,
  category: "Blog",
  breadcrumb: ["Ana Sayfa", "Blog", post.title],
}));

const discoveredPages = discoverAppRoutes();
const dynamicSlugs = new Set([...cityPages.map((c) => c.slug), ...blogPages.map((b) => b.slug)]);

const staticPages = discoveredPages.filter((p) => !dynamicSlugs.has(p.slug));

export const sitePages: PageEntry[] = [
  ...staticPages,
  ...cityPages,
  ...blogPages,
];

export const pageCategories = [
  "Ana Sayfa",
  "Ürünlerimiz",
  "Modellerimiz",
  "Sistemlerimiz",
  "Çeşitlerimiz",
  "Özellikler",
  "Fiyatlarımız",
  "Kullanım Alanları",
  "Hizmetlerimiz",
  "Fiyat Hesaplama",
  "Hizmet Bölgeleri",
  "Referanslarımız",
  "Karşılaştırmalar",
  "Kurumsal",
  "İletişim",
  "Sözleşmelerimiz",
  "Politikalarımız",
  "Blog",
  "Site Haritası",
] as const;

export function getPageBySlug(slug: string): PageEntry | undefined {
  return sitePages.find((p) => p.slug === slug);
}

export function getPagesByCategory(category: string): PageEntry[] {
  return sitePages.filter((p) => p.category === category);
}
