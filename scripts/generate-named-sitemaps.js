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
    { slug: "plise-perde-bayilik", priority: 0.8, changefreq: "monthly" },
    { slug: "plise-perde-fiyat-hesaplama", priority: 0.9, changefreq: "weekly" },
    { slug: "site-haritasi", priority: 0.6, changefreq: "weekly" },
    { slug: "hakkimizda", priority: 0.7, changefreq: "yearly" },
    { slug: "surdurulebilirlik", priority: 0.5, changefreq: "yearly" },
    { slug: "cocuk-guvenligi", priority: 0.6, changefreq: "yearly" },
    { slug: "galeri", priority: 0.5, changefreq: "monthly" },
    { slug: "sikca-sorulan-sorular", priority: 0.6, changefreq: "monthly" },
    { slug: "plise-perde-kullanici-yorumlari", priority: 0.6, changefreq: "monthly" },
    { slug: "blog", priority: 0.8, changefreq: "weekly" },
    { slug: "plise-perde-nedir", priority: 0.7, changefreq: "monthly" },
    { slug: "plise-perde-nasil-yapilir", priority: 0.7, changefreq: "monthly" },
    { slug: "plise-perde-olcusu-nasil-alinir", priority: 0.7, changefreq: "monthly" },
    { slug: "plise-perde-montaji-nasil-yapilir", priority: 0.7, changefreq: "monthly" },
    { slug: "plise-perde-nasil-cikarilir", priority: 0.7, changefreq: "monthly" },
    { slug: "plise-perde-temizligi-nasil-yapilir", priority: 0.7, changefreq: "monthly" },
  ],
  models: [
    { slug: "vidali-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "yapiskanli-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "portray-plise-perde", priority: 0.7, changefreq: "monthly" },
  ],
  services: [
    { slug: "montaj", priority: 0.8, changefreq: "monthly" },
    { slug: "olcu-alma-destegi", priority: 0.8, changefreq: "monthly" },
    { slug: "ucretsiz-kesif", priority: 0.8, changefreq: "monthly" },
  ],
  regions: [
    { slug: "istanbul-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "kocaeli-plise-perde", priority: 0.8, changefreq: "monthly" },
    { slug: "sakarya-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "yalova-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "duzce-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "bilecik-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "bursa-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "balikesir-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "canakkale-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "edirne-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "kirklareli-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "tekirdag-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "izmir-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "aydin-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "mugla-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "manisa-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "afyonkarahisar-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "kutahya-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "denizli-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "usak-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "antalya-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "adana-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "mersin-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "isparta-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "burdur-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "osmaniye-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "hatay-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "ankara-plise-perde", priority: 0.7, changefreq: "monthly" },
    { slug: "konya-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "kayseri-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "eskisehir-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "sivas-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "kirsehir-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "aksaray-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "nigde-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "nevsehir-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "kirikkale-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "cankiri-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "karabuk-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "amasya-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "tokat-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "corum-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "yozgat-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "karaman-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "zonguldak-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "bartin-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "bolu-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "kastamonu-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "sinop-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "samsun-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "ordu-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "giresun-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "gumushane-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "trabzon-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "rize-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "artvin-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "bayburt-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "erzurum-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "erzincan-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "agri-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "kars-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "igdir-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "ardahan-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "mus-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "bitlis-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "bingol-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "tunceli-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "elazig-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "malatya-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "van-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "hakkari-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "gaziantep-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "sanliurfa-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "adiyaman-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "diyarbakir-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "mardin-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "batman-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "siirt-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "sirnak-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "kilis-plise-perde", priority: 0.6, changefreq: "monthly" },
    { slug: "kahramanmaras-plise-perde", priority: 0.6, changefreq: "monthly" },
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
    { slug: "galeri", images: [
      // Plise Perde (21)
      { loc: "/gallery/plise-perde/Plise-Perde-1.webp", title: "Plise Perde — Salon Beyaz Düz", caption: "Geniş salon penceresinde beyaz plise perde uygulaması" },
      { loc: "/gallery/plise-perde/Plise-Perde-2.webp", title: "Plise Perde — Yatak Odası Blackout", caption: "Yatak odasında tam karartma plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-3.webp", title: "Plise Perde — Cam Balkon", caption: "Cam balkonda plise perde uygulaması" },
      { loc: "/gallery/plise-perde/Plise-Perde-4.webp", title: "Plise Perde — Mutfak Tül", caption: "Mutfak penceresinde tül plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-5.webp", title: "Plise Perde — Ofis Güneşlik", caption: "Ofis ortamında güneşlik plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-6.webp", title: "Plise Perde — Salon Gece Gündüz", caption: "Salonda gece gündüz plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-7.webp", title: "Plise Perde — Yatak Odası Krem", caption: "Yatak odasında krem renk plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-8.webp", title: "Plise Perde — Çocuk Odası", caption: "Çocuk odasında kordsuz plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-9.webp", title: "Plise Perde — Villa Motorlu", caption: "Villada yüksek pencere motorlu plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-10.webp", title: "Plise Perde — Kış Bahçesi", caption: "Kış bahçesinde plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-11.webp", title: "Plise Perde — Çalışma Odası", caption: "Çalışma odasında güneşlik plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-12.webp", title: "Plise Perde — Salon Antrasit", caption: "Salonda antrasit renk plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-13.webp", title: "Plise Perde — Detay Görünüm", caption: "Plise perde kumaş ve profil detayı" },
      { loc: "/gallery/plise-perde/Plise-Perde-14.webp", title: "Plise Perde — Banyo", caption: "Banyoda nem dayanımlı plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-15.webp", title: "Plise Perde — Fransız Balkon", caption: "Fransız balkonda plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-16.webp", title: "Plise Perde — Salon Çift Pencere", caption: "Salonda çift pencerede plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-17.webp", title: "Plise Perde — Yatak Odası Gece Gündüz", caption: "Yatak odasında gece gündüz plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-18.webp", title: "Plise Perde — Ofis Toplantı Odası", caption: "Toplantı odasında plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-19.webp", title: "Plise Perde — Mutfak Desenli", caption: "Mutfakta desenli plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-20.webp", title: "Plise Perde — Salon Baskılı", caption: "Salonda baskılı plise perde" },
      { loc: "/gallery/plise-perde/Plise-Perde-21.webp", title: "Plise Perde — Villa Geniş Pencere", caption: "Villada geniş pencerede motorlu plise perde" },
      // Honeycomb Perde (12)
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-1.webp", title: "Honeycomb Perde — Salon Beyaz", caption: "Geniş pencerede beyaz honeycomb petek perde" },
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-2.webp", title: "Honeycomb Perde — Yatak Odası Antrasit", caption: "Yatak odasında antrasit honeycomb perde" },
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-3.webp", title: "Honeycomb Perde — Cam Balkon", caption: "Cam balkonda honeycomb perde" },
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-4.webp", title: "Honeycomb Perde — Petek Detay", caption: "Honeycomb perde petek yapısı detayı" },
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-5.webp", title: "Honeycomb Perde — Mutfak Beyaz", caption: "Mutfak penceresinde beyaz honeycomb perde" },
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-6.webp", title: "Honeycomb Perde — Ofis", caption: "Ofis ortamında honeycomb perde" },
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-7.webp", title: "Honeycomb Perde — Salon Geniş Pencere", caption: "Geniş salon penceresinde honeycomb perde" },
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-8.webp", title: "Honeycomb Perde — Yatak Odası Krem", caption: "Yatak odasında krem honeycomb perde" },
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-9.webp", title: "Honeycomb Perde — Villa Yüksek Pencere", caption: "Villada yüksek pencere honeycomb perde" },
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-11.webp", title: "Honeycomb Perde — Çocuk Odası", caption: "Çocuk odasında honeycomb perde" },
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-12.webp", title: "Honeycomb Perde — Çalışma Odası", caption: "Çalışma odasında honeycomb perde" },
      { loc: "/gallery/honeycomb-perde/Honeycomb-Perde-13.webp", title: "Honeycomb Perde — Salon Çift Petek", caption: "Salonda çift petek honeycomb perde" },
      // Düet Perde (18)
      { loc: "/gallery/duet-perde/Düet-Perde-1.webp", title: "Düet Perde — Salon", caption: "Salonda düet perde, üst tül alt blackout" },
      { loc: "/gallery/duet-perde/Düet-Perde-2.webp", title: "Düet Perde — Yatak Odası", caption: "Yatak odasında düet perde, gece gündüz kullanım" },
      { loc: "/gallery/duet-perde/Düet-Perde-3.webp", title: "Düet Perde — Cam Balkon", caption: "Cam balkonda düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-4.webp", title: "Düet Perde — Mutfak", caption: "Mutfakta düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-5.webp", title: "Düet Perde — Ofis", caption: "Ofis ortamında düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-6.webp", title: "Düet Perde — Salon Geniş Pencere", caption: "Geniş salon penceresinde düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-7.webp", title: "Düet Perde — Yatak Odası Krem", caption: "Yatak odasında krem düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-8.webp", title: "Düet Perde — Detay Görünüm", caption: "Düet perde tül ve blackout kumaş detayı" },
      { loc: "/gallery/duet-perde/Düet-Perde-9.webp", title: "Düet Perde — Villa", caption: "Villada yüksek pencere düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-10.webp", title: "Düet Perde — Kış Bahçesi", caption: "Kış bahçesinde düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-11.webp", title: "Düet Perde — Çalışma Odası", caption: "Çalışma odasında düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-12.webp", title: "Düet Perde — Salon Antrasit", caption: "Salonda antrasit düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-13.webp", title: "Düet Perde — Çocuk Odası", caption: "Çocuk odasında düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-14.webp", title: "Düet Perde — Banyo", caption: "Banyoda nem dayanımlı düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-15.webp", title: "Düet Perde — Fransız Balkon", caption: "Fransız balkonda düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-16.webp", title: "Düet Perde — Salon Çift Pencere", caption: "Salonda çift pencerede düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-17.webp", title: "Düet Perde — Yatak Odası Gece Gündüz", caption: "Yatak odasında gece gündüz düet perde" },
      { loc: "/gallery/duet-perde/Düet-Perde-18.webp", title: "Düet Perde — Ofis Toplantı Odası", caption: "Toplantı odasında düet perde" },
    ]},
    { slug: "referanslarimiz", images: [
      { loc: "/logos/turk-telekom.webp", title: "Türk Telekom — Plise Perde Kurumsal Müşterisi", caption: "Türk Telekom — Plise Perde kurumsal referansı" },
      { loc: "/logos/a101.webp", title: "A101 — Plise Perde Kurumsal Müşterisi", caption: "A101 — Plise Perde kurumsal referansı" },
      { loc: "/logos/acibadem-saglik-grubu.webp", title: "Acıbadem Sağlık Grubu — Plise Perde Kurumsal Müşterisi", caption: "Acıbadem Sağlık Grubu — Plise Perde kurumsal referansı" },
      { loc: "/logos/amazon.webp", title: "Amazon — Plise Perde Kurumsal Müşterisi", caption: "Amazon — Plise Perde kurumsal referansı" },
      { loc: "/logos/aselsan.webp", title: "Aselsan — Plise Perde Kurumsal Müşterisi", caption: "Aselsan — Plise Perde kurumsal referansı" },
      { loc: "/logos/benthin.webp", title: "Benthin — Plise Perde Kurumsal Müşterisi", caption: "Benthin — Plise Perde kurumsal referansı" },
      { loc: "/logos/bim.webp", title: "BİM — Plise Perde Kurumsal Müşterisi", caption: "BİM — Plise Perde kurumsal referansı" },
      { loc: "/logos/bol.webp", title: "Bol — Plise Perde Kurumsal Müşterisi", caption: "Bol — Plise Perde kurumsal referansı" },
      { loc: "/logos/cosiflor.webp", title: "Cosiflor — Plise Perde Kurumsal Müşterisi", caption: "Cosiflor — Plise Perde kurumsal referansı" },
      { loc: "/logos/enka.webp", title: "Enka — Plise Perde Kurumsal Müşterisi", caption: "Enka — Plise Perde kurumsal referansı" },
      { loc: "/logos/erfal.webp", title: "Erfal — Plise Perde Kurumsal Müşterisi", caption: "Erfal — Plise Perde kurumsal referansı" },
      { loc: "/logos/espressolab.webp", title: "Espressolab — Plise Perde Kurumsal Müşterisi", caption: "Espressolab — Plise Perde kurumsal referansı" },
      { loc: "/logos/garanti-bankasi.webp", title: "Garanti Bankası — Plise Perde Kurumsal Müşterisi", caption: "Garanti Bankası — Plise Perde kurumsal referansı" },
      { loc: "/logos/gebze-belediyesi.webp", title: "Gebze Belediyesi — Plise Perde Kurumsal Müşterisi", caption: "Gebze Belediyesi — Plise Perde kurumsal referansı" },
      { loc: "/logos/hepsiburada.webp", title: "Hepsiburada — Plise Perde Kurumsal Müşterisi", caption: "Hepsiburada — Plise Perde kurumsal referansı" },
      { loc: "/logos/honeywell.webp", title: "Honeywell — Plise Perde Kurumsal Müşterisi", caption: "Honeywell — Plise Perde kurumsal referansı" },
      { loc: "/logos/hunter-douglas.webp", title: "Hunter Douglas — Plise Perde Kurumsal Müşterisi", caption: "Hunter Douglas — Plise Perde kurumsal referansı" },
      { loc: "/logos/ikea.webp", title: "IKEA — Plise Perde Kurumsal Müşterisi", caption: "IKEA — Plise Perde kurumsal referansı" },
      { loc: "/logos/istanbul-buyuksehir-belediyesi.webp", title: "İstanbul Büyükşehir Belediyesi — Plise Perde Kurumsal Müşterisi", caption: "İBB — Plise Perde kurumsal referansı" },
      { loc: "/logos/jysk.webp", title: "JYSK — Plise Perde Kurumsal Müşterisi", caption: "JYSK — Plise Perde kurumsal referansı" },
      { loc: "/logos/kadeco.webp", title: "Kadeco — Plise Perde Kurumsal Müşterisi", caption: "Kadeco — Plise Perde kurumsal referansı" },
      { loc: "/logos/kocaeli-buyuksehir-belediyesi.webp", title: "Kocaeli Büyükşehir Belediyesi — Plise Perde Kurumsal Müşterisi", caption: "KBB — Plise Perde kurumsal referansı" },
      { loc: "/logos/luxaflex.webp", title: "Luxaflex — Plise Perde Kurumsal Müşterisi", caption: "Luxaflex — Plise Perde kurumsal referansı" },
      { loc: "/logos/maersk.webp", title: "Maersk — Plise Perde Kurumsal Müşterisi", caption: "Maersk — Plise Perde kurumsal referansı" },
      { loc: "/logos/medicana.webp", title: "Medicana — Plise Perde Kurumsal Müşterisi", caption: "Medicana — Plise Perde kurumsal referansı" },
      { loc: "/logos/medipol.webp", title: "Medipol — Plise Perde Kurumsal Müşterisi", caption: "Medipol — Plise Perde kurumsal referansı" },
      { loc: "/logos/memorial.webp", title: "Memorial — Plise Perde Kurumsal Müşterisi", caption: "Memorial — Plise Perde kurumsal referansı" },
      { loc: "/logos/mhz-hachtel.webp", title: "MHZ Hachtel — Plise Perde Kurumsal Müşterisi", caption: "MHZ Hachtel — Plise Perde kurumsal referansı" },
      { loc: "/logos/migros.webp", title: "Migros — Plise Perde Kurumsal Müşterisi", caption: "Migros — Plise Perde kurumsal referansı" },
      { loc: "/logos/neher.webp", title: "Neher — Plise Perde Kurumsal Müşterisi", caption: "Neher — Plise Perde kurumsal referansı" },
      { loc: "/logos/nevada-coffee.webp", title: "Nevada Coffee — Plise Perde Kurumsal Müşterisi", caption: "Nevada Coffee — Plise Perde kurumsal referansı" },
      { loc: "/logos/opet.webp", title: "Opet — Plise Perde Kurumsal Müşterisi", caption: "Opet — Plise Perde kurumsal referansı" },
      { loc: "/logos/pegasus.webp", title: "Pegasus — Plise Perde Kurumsal Müşterisi", caption: "Pegasus — Plise Perde kurumsal referansı" },
      { loc: "/logos/pendik-belediyesi.webp", title: "Pendik Belediyesi — Plise Perde Kurumsal Müşterisi", caption: "Pendik Belediyesi — Plise Perde kurumsal referansı" },
      { loc: "/logos/petkim.webp", title: "Petkim — Plise Perde Kurumsal Müşterisi", caption: "Petkim — Plise Perde kurumsal referansı" },
      { loc: "/logos/san-deco.webp", title: "San Deco — Plise Perde Kurumsal Müşterisi", caption: "San Deco — Plise Perde kurumsal referansı" },
      { loc: "/logos/socar.webp", title: "Socar — Plise Perde Kurumsal Müşterisi", caption: "Socar — Plise Perde kurumsal referansı" },
      { loc: "/logos/trendyol.webp", title: "Trendyol — Plise Perde Kurumsal Müşterisi", caption: "Trendyol — Plise Perde kurumsal referansı" },
      { loc: "/logos/tupras.webp", title: "Tüpraş — Plise Perde Kurumsal Müşterisi", caption: "Tüpraş — Plise Perde kurumsal referansı" },
      { loc: "/logos/turkcell.webp", title: "Turkcell — Plise Perde Kurumsal Müşterisi", caption: "Turkcell — Plise Perde kurumsal referansı" },
      { loc: "/logos/turkish-airlines.webp", title: "Turkish Airlines — Plise Perde Kurumsal Müşterisi", caption: "Turkish Airlines — Plise Perde kurumsal referansı" },
      { loc: "/logos/turkiye-is-bankasi.webp", title: "Türkiye İş Bankası — Plise Perde Kurumsal Müşterisi", caption: "Türkiye İş Bankası — Plise Perde kurumsal referansı" },
      { loc: "/logos/tuzla-belediyesi.webp", title: "Tuzla Belediyesi — Plise Perde Kurumsal Müşterisi", caption: "Tuzla Belediyesi — Plise Perde kurumsal referansı" },
      { loc: "/logos/vestel.webp", title: "Vestel — Plise Perde Kurumsal Müşterisi", caption: "Vestel — Plise Perde kurumsal referansı" },
      { loc: "/logos/warema.webp", title: "Warema — Plise Perde Kurumsal Müşterisi", caption: "Warema — Plise Perde kurumsal referansı" },
      { loc: "/logos/yildiz-teknik-universitesi.webp", title: "Yıldız Teknik Üniversitesi — Plise Perde Kurumsal Müşterisi", caption: "YTÜ — Plise Perde kurumsal referansı" },
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

const hasOutDir = fs.existsSync(OUT_DIR);

function writeSitemap(filename, content) {
  fs.writeFileSync(path.join(PUBLIC_DIR, filename), content);
  if (hasOutDir) {
    fs.writeFileSync(path.join(OUT_DIR, filename), content);
  }
}

const standardSitemaps = ["pages", "models", "services", "regions", "comparisons", "legal"];

standardSitemaps.forEach((name) => {
  const content = generateStandardSitemap(name, sitemaps[name]);
  writeSitemap(`sitemap-${name}.xml`, content);
  console.log(`Generated: sitemap-${name}.xml (${sitemaps[name].length} URLs)`);
});

// Blog sitemap — blog page + individual blog posts
const blogPosts = sitemaps.pages.filter((p) =>
  p.slug.startsWith("plise-perde-nedir") ||
  p.slug.startsWith("plise-perde-nasil") ||
  p.slug.startsWith("plise-perde-olcusu") ||
  p.slug.startsWith("plise-perde-montaji") ||
  p.slug.startsWith("plise-perde-temizligi")
);
const blogSitemapPages = [
  { slug: "blog", priority: 0.8, changefreq: "weekly" },
  ...blogPosts,
];
const blogContent = generateStandardSitemap("blog", blogSitemapPages);
writeSitemap("sitemap-blog.xml", blogContent);
console.log(`Generated: sitemap-blog.xml (${blogSitemapPages.length} URLs)`);

const imageContent = generateImageSitemap(sitemaps.images);
writeSitemap("sitemap-images.xml", imageContent);
console.log("Generated: sitemap-images.xml");

const videoContent = generateVideoSitemap(sitemaps.videos);
writeSitemap("sitemap-videos.xml", videoContent);
console.log("Generated: sitemap-videos.xml");

console.log("All named sitemaps generated successfully.");

const indexEntries = [
  "sitemap-pages.xml",
  "sitemap-blog.xml",
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

writeSitemap("sitemap.xml", sitemapIndex);
console.log("Updated: sitemap.xml (index with all named sitemaps)");
