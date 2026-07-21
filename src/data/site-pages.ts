export interface PageEntry {
  slug: string;
  title: string;
  category: string;
  breadcrumb: string[];
}

export const sitePages: PageEntry[] = [
  // Ana Sayfa
  { slug: "", title: "Ana Sayfa", category: "Ana Sayfa", breadcrumb: ["Ana Sayfa"] },

  // Ürünlerimiz
  { slug: "urunlerimiz", title: "Ürünlerimiz", category: "Ürünlerimiz", breadcrumb: ["Ana Sayfa", "Ürünlerimiz"] },
  { slug: "plise-perde", title: "Plise Perde", category: "Ürünlerimiz", breadcrumb: ["Ana Sayfa", "Ürünlerimiz", "Plise Perde"] },
  { slug: "honeycomb-perde", title: "Honeycomb Plise Perde", category: "Ürünlerimiz", breadcrumb: ["Ana Sayfa", "Ürünlerimiz", "Honeycomb Plise Perde"] },
  { slug: "duet-perde", title: "Düet Plise Perde", category: "Ürünlerimiz", breadcrumb: ["Ana Sayfa", "Ürünlerimiz", "Düet Plise Perde"] },
  { slug: "plise-perde-aparatlari", title: "Plise Perde Aparatları", category: "Ürünlerimiz", breadcrumb: ["Ana Sayfa", "Ürünlerimiz", "Plise Perde Aparatları"] },
  { slug: "plise-perde-yedek-parca", title: "Plise Perde Yedek Parça", category: "Ürünlerimiz", breadcrumb: ["Ana Sayfa", "Ürünlerimiz", "Plise Perde Yedek Parça"] },

  // Modellerimiz
  { slug: "plise-perde-modelleri", title: "Modellerimiz", category: "Modellerimiz", breadcrumb: ["Ana Sayfa", "Modellerimiz"] },
  { slug: "duz-plise-perde", title: "Düz Plise Perde", category: "Modellerimiz", breadcrumb: ["Ana Sayfa", "Modellerimiz", "Düz Plise Perde"] },
  { slug: "blackout-plise-perde", title: "Blackout Plise Perde", category: "Modellerimiz", breadcrumb: ["Ana Sayfa", "Modellerimiz", "Blackout Plise Perde"] },
  { slug: "gece-gunduz-plise-perde", title: "Gece Gündüz Plise Perde", category: "Modellerimiz", breadcrumb: ["Ana Sayfa", "Modellerimiz", "Gece Gündüz Plise Perde"] },
  { slug: "desenli-plise-perde", title: "Desenli Plise Perde", category: "Modellerimiz", breadcrumb: ["Ana Sayfa", "Modellerimiz", "Desenli Plise Perde"] },
  { slug: "basili-plise-perde", title: "Baskılı Plise Perde", category: "Modellerimiz", breadcrumb: ["Ana Sayfa", "Modellerimiz", "Baskılı Plise Perde"] },

  // Sistemlerimiz
  { slug: "plise-perde-sistemleri", title: "Sistemlerimiz", category: "Sistemlerimiz", breadcrumb: ["Ana Sayfa", "Sistemlerimiz"] },
  { slug: "vidali-plise-perde", title: "Vidalı Plise Perde", category: "Sistemlerimiz", breadcrumb: ["Ana Sayfa", "Sistemlerimiz", "Vidalı Plise Perde"] },
  { slug: "vidasiz-plise-perde", title: "Vidasız Plise Perde", category: "Sistemlerimiz", breadcrumb: ["Ana Sayfa", "Sistemlerimiz", "Vidasız Plise Perde"] },
  { slug: "yapiskanli-plise-perde", title: "Yapışkanlı Plise Perde", category: "Sistemlerimiz", breadcrumb: ["Ana Sayfa", "Sistemlerimiz", "Yapışkanlı Plise Perde"] },
  { slug: "kancali-plise-perde", title: "Kancalı Plise Perde", category: "Sistemlerimiz", breadcrumb: ["Ana Sayfa", "Sistemlerimiz", "Kancalı Plise Perde"] },
  { slug: "portray-plise-perde", title: "Portray Plise Perde", category: "Sistemlerimiz", breadcrumb: ["Ana Sayfa", "Sistemlerimiz", "Portray Plise Perde"] },
  { slug: "braketli-plise-perde", title: "Braketli Plise Perde", category: "Sistemlerimiz", breadcrumb: ["Ana Sayfa", "Sistemlerimiz", "Braketli Plise Perde"] },
  { slug: "motorlu-plise-perde", title: "Motorlu Plise Perde", category: "Sistemlerimiz", breadcrumb: ["Ana Sayfa", "Sistemlerimiz", "Motorlu Plise Perde"] },

  // Çeşitlerimiz
  { slug: "plise-perde-cesitleri", title: "Çeşitlerimiz", category: "Çeşitlerimiz", breadcrumb: ["Ana Sayfa", "Çeşitlerimiz"] },

  // Özellikler
  { slug: "plise-perde-ozellikleri", title: "Özellikler", category: "Özellikler", breadcrumb: ["Ana Sayfa", "Özellikler"] },

  // Fiyatlarımız
  { slug: "plise-perde-fiyatlari", title: "Fiyatlarımız", category: "Fiyatlarımız", breadcrumb: ["Ana Sayfa", "Fiyatlarımız"] },

  // Kullanım Alanları
  { slug: "plise-perde-kullanim-alanlari", title: "Kullanım Alanları", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları"] },
  { slug: "mutfak-plise-perde", title: "Mutfak Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Mutfak"] },
  { slug: "salon-plise-perde", title: "Salon Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Salon"] },
  { slug: "yatak-odasi-plise-perde", title: "Yatak Odası Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Yatak Odası"] },
  { slug: "cocuk-odasi-plise-perde", title: "Çocuk Odası Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Çocuk Odası"] },
  { slug: "calisma-odasi-plise-perde", title: "Çalışma Odası Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Çalışma Odası"] },
  { slug: "banyo-wc-plise-perde", title: "Banyo ve WC Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Banyo ve WC"] },
  { slug: "genc-odasi-plise-perde", title: "Genç Odası Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Genç Odası"] },
  { slug: "cam-balkon-plise-perde", title: "Cam Balkon Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Cam Balkon"] },
  { slug: "villa-plise-perde", title: "Villa Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Villa"] },
  { slug: "karavan-plise-perde", title: "Karavan Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Karavan"] },
  { slug: "tekne-plise-perde", title: "Tekne ve Yat Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Tekne ve Yat"] },
  { slug: "cati-kati-plise-perde", title: "Çatı Katı Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Çatı Katı"] },
  { slug: "magaza-plise-perde", title: "Mağaza Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Mağaza"] },
  { slug: "ofis-plise-perde", title: "Ofis Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Ofis"] },
  { slug: "kafe-restoran-plise-perde", title: "Kafe ve Restoran Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Kafe ve Restoran"] },
  { slug: "otel-plise-perde", title: "Otel Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Otel"] },
  { slug: "hastane-plise-perde", title: "Hastane Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Hastane"] },
  { slug: "klinik-plise-perde", title: "Klinik Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Klinik"] },
  { slug: "spor-salonu-plise-perde", title: "Spor Salonu Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Spor Salonu"] },
  { slug: "anaokulu-plise-perde", title: "Anaokulu Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Anaokulu"] },
  { slug: "laboratuvar-plise-perde", title: "Laboratuvar Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Laboratuvar"] },
  { slug: "prefabrik-ev-plise-perde", title: "Prefabrik Ev Plise Perde", category: "Kullanım Alanları", breadcrumb: ["Ana Sayfa", "Kullanım Alanları", "Prefabrik Ev"] },

  // Hizmetlerimiz
  { slug: "hizmetlerimiz", title: "Hizmetlerimiz", category: "Hizmetlerimiz", breadcrumb: ["Ana Sayfa", "Hizmetlerimiz"] },
  { slug: "montaj", title: "Montaj", category: "Hizmetlerimiz", breadcrumb: ["Ana Sayfa", "Hizmetlerimiz", "Montaj"] },
  { slug: "olcu-alma-destegi", title: "Ölçü Alma Desteği", category: "Hizmetlerimiz", breadcrumb: ["Ana Sayfa", "Hizmetlerimiz", "Ölçü Alma Desteği"] },
  { slug: "ucretsiz-kesif", title: "Ücretsiz Keşif", category: "Hizmetlerimiz", breadcrumb: ["Ana Sayfa", "Hizmetlerimiz", "Ücretsiz Keşif"] },
  { slug: "temizlik-bakim", title: "Temizlik ve Bakım", category: "Hizmetlerimiz", breadcrumb: ["Ana Sayfa", "Hizmetlerimiz", "Temizlik ve Bakım"] },
  { slug: "plise-perde-fiyat-hesaplama", title: "Fiyat Hesaplama", category: "Hizmetlerimiz", breadcrumb: ["Ana Sayfa", "Hizmetlerimiz", "Fiyat Hesaplama"] },
  { slug: "enerji-tasarrufu-hesaplayici", title: "Enerji Tasarrufu Hesaplayıcı", category: "Hizmetlerimiz", breadcrumb: ["Ana Sayfa", "Hizmetlerimiz", "Enerji Tasarrufu"] },
  { slug: "yedek-parca", title: "Yedek Parça", category: "Hizmetlerimiz", breadcrumb: ["Ana Sayfa", "Hizmetlerimiz", "Yedek Parça"] },
  { slug: "tamir-bakim", title: "Tamir ve Bakım", category: "Hizmetlerimiz", breadcrumb: ["Ana Sayfa", "Hizmetlerimiz", "Tamir ve Bakım"] },

  // Hizmet Bölgeleri
  { slug: "hizmet-bolgeleri", title: "Hizmet Bölgeleri", category: "Hizmet Bölgeleri", breadcrumb: ["Ana Sayfa", "Hizmet Bölgeleri"] },

  // Referanslarımız
  { slug: "referanslarimiz", title: "Referanslarımız", category: "Referanslarımız", breadcrumb: ["Ana Sayfa", "Referanslarımız"] },

  // Karşılaştırmalar
  { slug: "plise-perde-vs-zebra-perde", title: "Plise Perde vs Zebra Perde", category: "Karşılaştırmalar", breadcrumb: ["Ana Sayfa", "Karşılaştırmalar", "Plise vs Zebra"] },
  { slug: "plise-perde-vs-jaluzi-perde", title: "Plise Perde vs Jaluzi Perde", category: "Karşılaştırmalar", breadcrumb: ["Ana Sayfa", "Karşılaştırmalar", "Plise vs Jaluzi"] },
  { slug: "plise-perde-vs-stor-perde", title: "Plise Perde vs Stor Perde", category: "Karşılaştırmalar", breadcrumb: ["Ana Sayfa", "Karşılaştırmalar", "Plise vs Stor"] },
  { slug: "plise-perde-vs-tul-perde", title: "Plise Perde vs Tül Perde", category: "Karşılaştırmalar", breadcrumb: ["Ana Sayfa", "Karşılaştırmalar", "Plise vs Tül"] },

  // Kurumsal
  { slug: "hakkimizda", title: "Hakkımızda", category: "Kurumsal", breadcrumb: ["Ana Sayfa", "Kurumsal", "Hakkımızda"] },
  { slug: "surdurulebilirlik", title: "Sürdürülebilirlik", category: "Kurumsal", breadcrumb: ["Ana Sayfa", "Kurumsal", "Sürdürülebilirlik"] },
  { slug: "cocuk-guvenligi", title: "Çocuk Güvenliği", category: "Kurumsal", breadcrumb: ["Ana Sayfa", "Kurumsal", "Çocuk Güvenliği"] },
  { slug: "galeri", title: "Galeri", category: "Kurumsal", breadcrumb: ["Ana Sayfa", "Kurumsal", "Galeri"] },
  { slug: "sikca-sorulan-sorular", title: "SSS", category: "Kurumsal", breadcrumb: ["Ana Sayfa", "Kurumsal", "SSS"] },
  { slug: "musteri-yorumlari", title: "Müşteri Yorumları", category: "Kurumsal", breadcrumb: ["Ana Sayfa", "Kurumsal", "Müşteri Yorumları"] },

  // İletişim
  { slug: "iletisim", title: "İletişim", category: "İletişim", breadcrumb: ["Ana Sayfa", "İletişim"] },

  // Sözleşmelerimiz
  { slug: "sozlesmelerimiz", title: "Sözleşmelerimiz", category: "Sözleşmelerimiz", breadcrumb: ["Ana Sayfa", "Sözleşmelerimiz"] },
  { slug: "siparis-ve-ozel-uretim-sartlari", title: "Sipariş ve Özel Üretim Şartları", category: "Sözleşmelerimiz", breadcrumb: ["Ana Sayfa", "Sözleşmelerimiz", "Sipariş ve Özel Üretim Şartları"] },
  { slug: "uyelik-sozlesmesi", title: "Üyelik Sözleşmesi", category: "Sözleşmelerimiz", breadcrumb: ["Ana Sayfa", "Sözleşmelerimiz", "Üyelik Sözleşmesi"] },
  { slug: "montaj-ve-uygulama-sartlari", title: "Montaj ve Uygulama Şartları", category: "Sözleşmelerimiz", breadcrumb: ["Ana Sayfa", "Sözleşmelerimiz", "Montaj ve Uygulama Şartları"] },
  { slug: "olcu-alma-bilgilendirmesi", title: "Ölçü Alma Bilgilendirmesi", category: "Sözleşmelerimiz", breadcrumb: ["Ana Sayfa", "Sözleşmelerimiz", "Ölçü Alma Bilgilendirmesi"] },
  { slug: "mesafeli-satis-sozlesmesi", title: "Mesafeli Satış Sözleşmesi", category: "Sözleşmelerimiz", breadcrumb: ["Ana Sayfa", "Sözleşmelerimiz", "Mesafeli Satış Sözleşmesi"] },
  { slug: "on-bilgilendirme-formu", title: "Ön Bilgilendirme Formu", category: "Sözleşmelerimiz", breadcrumb: ["Ana Sayfa", "Sözleşmelerimiz", "Ön Bilgilendirme Formu"] },
  { slug: "kullanim-kosullari", title: "Kullanım Koşulları", category: "Sözleşmelerimiz", breadcrumb: ["Ana Sayfa", "Sözleşmelerimiz", "Kullanım Koşulları"] },

  // Politikalarımız
  { slug: "politikalarimiz", title: "Politikalarımız", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız"] },
  { slug: "iade-degisim-ve-cayma-hakki", title: "İade, Değişim ve Cayma Hakkı", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "İade, Değişim ve Cayma Hakkı"] },
  { slug: "yurt-disi-teslimat-ve-gumruk", title: "Yurt Dışı Teslimat ve Gümrük", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "Yurt Dışı Teslimat ve Gümrük"] },
  { slug: "odeme-ve-taksit-secenekleri", title: "Ödeme ve Taksit Seçenekleri", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "Ödeme ve Taksit Seçenekleri"] },
  { slug: "banka-ve-havale-bilgileri", title: "Banka ve Havale Bilgileri", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "Banka ve Havale Bilgileri"] },
  { slug: "garanti-ve-satis-sonrasi-destek", title: "Garanti ve Satış Sonrası Destek", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "Garanti ve Satış Sonrası Destek"] },
  { slug: "satici-bilgileri", title: "Satıcı Bilgileri", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "Satıcı Bilgileri"] },
  { slug: "cerez-politikasi", title: "Çerez Politikası", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "Çerez Politikası"] },
  { slug: "acik-riza-metni", title: "Açık Rıza Metni", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "Açık Rıza Metni"] },
  { slug: "ticari-elektronik-ileri-onayi", title: "Ticari Elektronik İleti Onayı", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarimiz", "Ticari Elektronik İleti Onayı"] },
  { slug: "teslimat-ve-kargo", title: "Teslimat ve Kargo", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "Teslimat ve Kargo"] },
  { slug: "iade-ve-degisim", title: "İade ve Değişim", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "İade ve Değişim"] },
  { slug: "gizlilik-politikasi", title: "Gizlilik Politikası", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "Gizlilik Politikası"] },
  { slug: "kvkk-aydinlatma-metni", title: "KVKK Aydınlatma Metni", category: "Politikalarımız", breadcrumb: ["Ana Sayfa", "Politikalarımız", "KVKK Aydınlatma Metni"] },

  // Site Haritası
  { slug: "site-haritasi", title: "Site Haritası", category: "Site Haritası", breadcrumb: ["Ana Sayfa", "Site Haritası"] },

];

export const pageCategories = [
  "Ana Sayfa",
  "Ürünlerimiz",
  "Modellerimiz",
  "Sistemlerimiz",
  "Hizmetlerimiz",
  "Hizmet Bölgeleri",
  "Referanslarımız",
  "Karşılaştırmalar",
  "Kurumsal",
  "İletişim",
  "Sözleşmelerimiz",
  "Politikalarımız",
  "Site Haritası",
] as const;

export function getPageBySlug(slug: string): PageEntry | undefined {
  return sitePages.find((p) => p.slug === slug);
}

export function getPagesByCategory(category: string): PageEntry[] {
  return sitePages.filter((p) => p.category === category);
}
