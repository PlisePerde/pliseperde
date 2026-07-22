type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string | null;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  {
    label: "Kurumsal",
    href: null,
    children: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Sürdürülebilirlik", href: "/surdurulebilirlik" },
      { label: "Çocuk Güvenliği", href: "/cocuk-guvenligi" },
      { label: "Sıkça Sorulan Sorular", href: "/sikca-sorulan-sorular" },
      { label: "Kullanıcı Yorumları", href: "/plise-perde-kullanici-yorumlari" },
      { label: "Referanslarımız", href: "/referanslarimiz" },
      { label: "Plise Perde Bayilik", href: "/plise-perde-bayilik" },
    ],
  },
  {
    label: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
    children: [
      { label: "Montaj", href: "/montaj" },
      { label: "Ölçü Alma Desteği", href: "/olcu-alma-destegi" },
      { label: "Ücretsiz Keşif", href: "/ucretsiz-kesif" },
    ],
  },
  {
    label: "Ürünlerimiz",
    href: "/urunlerimiz",
    children: [
      { label: "Plise Perde", href: "/plise-perde" },
      { label: "Honeycomb Plise Perde", href: "/honeycomb-perde" },
      { label: "Düet Plise Perde", href: "/duet-perde" },
      { label: "Plise Perde Aparatları", href: "/plise-perde-aparatlari" },
      { label: "Plise Perde Yedek Parça", href: "/plise-perde-yedek-parca" },
    ],
  },
  {
    label: "Modellerimiz",
    href: "/plise-perde-modelleri",
    children: [
      { label: "Düz Plise Perde", href: "/duz-plise-perde" },
      { label: "Blackout Plise Perde", href: "/blackout-plise-perde" },
      { label: "Gece Gündüz Plise Perde", href: "/gece-gunduz-plise-perde" },
      { label: "Desenli Plise Perde", href: "/desenli-plise-perde" },
      { label: "Baskılı Plise Perde", href: "/basili-plise-perde" },
    ],
  },
  {
    label: "Sistemlerimiz",
    href: "/plise-perde-sistemleri",
    children: [
      { label: "Vidalı Plise Perde", href: "/vidali-plise-perde" },
      { label: "Vidasız Plise Perde", href: "/vidasiz-plise-perde" },
      { label: "Yapışkanlı Plise Perde", href: "/yapiskanli-plise-perde" },
      { label: "Kancalı Plise Perde", href: "/kancali-plise-perde" },
      { label: "Portray Plise Perde", href: "/portray-plise-perde" },
      { label: "Braketli Plise Perde", href: "/braketli-plise-perde" },
      { label: "Motorlu Plise Perde", href: "/motorlu-plise-perde" },
    ],
  },
  {
    label: "Çeşitlerimiz",
    href: "/plise-perde-cesitleri",
  },
  {
    label: "Özellikler",
    href: "/plise-perde-ozellikleri",
  },
  {
    label: "Kullanım Alanları",
    href: "/plise-perde-kullanim-alanlari",
    children: [
      { label: "Mutfak", href: "/mutfak-plise-perde" },
      { label: "Salon", href: "/salon-plise-perde" },
      { label: "Yatak Odası", href: "/yatak-odasi-plise-perde" },
      { label: "Çocuk Odası", href: "/cocuk-odasi-plise-perde" },
      { label: "Genç Odası", href: "/genc-odasi-plise-perde" },
      { label: "Çalışma Odası", href: "/calisma-odasi-plise-perde" },
      { label: "Banyo ve WC", href: "/banyo-wc-plise-perde" },
      { label: "Cam Balkon", href: "/cam-balkon-plise-perde" },
      { label: "Villa", href: "/villa-plise-perde" },
      { label: "Karavan", href: "/karavan-plise-perde" },
      { label: "Tekne ve Yat", href: "/tekne-plise-perde" },
      { label: "Prefabrik Ev", href: "/prefabrik-ev-plise-perde" },
      { label: "Ofis", href: "/ofis-plise-perde" },
      { label: "Mağaza", href: "/magaza-plise-perde" },
      { label: "Kafe ve Restoran", href: "/kafe-restoran-plise-perde" },
      { label: "Otel", href: "/otel-plise-perde" },
      { label: "Spor Salonu", href: "/spor-salonu-plise-perde" },
      { label: "Hastane", href: "/hastane-plise-perde" },
      { label: "Klinik", href: "/klinik-plise-perde" },
      { label: "Anaokulu", href: "/anaokulu-plise-perde" },
      { label: "Laboratuvar", href: "/laboratuvar-plise-perde" },
    ],
  },
  {
    label: "Galeri",
    href: "/galeri",
  },
  {
    label: "Hizmet Bölgeleri",
    href: "/hizmet-bolgeleri",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "İletişim",
    href: "/iletisim",
  },
];

type FooterColumn = {
  title: string;
  links: NavChild[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Sürdürülebilirlik", href: "/surdurulebilirlik" },
      { label: "Çocuk Güvenliği", href: "/cocuk-guvenligi" },
      { label: "Sıkça Sorulan Sorular", href: "/sikca-sorulan-sorular" },
      { label: "Kullanıcı Yorumları", href: "/plise-perde-kullanici-yorumlari" },
      { label: "Plise Perde Bayilik", href: "/plise-perde-bayilik" },
    ],
  },
  {
    title: "Hizmetlerimiz",
    links: [
      { label: "Montaj", href: "/montaj" },
      { label: "Ölçü Alma Desteği", href: "/olcu-alma-destegi" },
      { label: "Ücretsiz Keşif", href: "/ucretsiz-kesif" },
    ],
  },
  {
    title: "Hizmet Bölgeleri",
    links: [
      { label: "Tüm Şehirler", href: "/hizmet-bolgeleri" },
      { label: "İstanbul Plise Perde", href: "/istanbul-plise-perde" },
      { label: "Ankara Plise Perde", href: "/ankara-plise-perde" },
      { label: "İzmir Plise Perde", href: "/izmir-plise-perde" },
      { label: "Bursa Plise Perde", href: "/bursa-plise-perde" },
      { label: "Antalya Plise Perde", href: "/antalya-plise-perde" },
    ],
  },
  {
    title: "Blog",
    links: [
      { label: "Tüm Yazılar", href: "/blog" },
    ],
  },
  {
    title: "Karşılaştırmalar",
    links: [
      { label: "Plise vs Zebra", href: "/plise-perde-vs-zebra-perde" },
      { label: "Plise vs Jaluzi", href: "/plise-perde-vs-jaluzi-perde" },
      { label: "Plise vs Stor", href: "/plise-perde-vs-stor-perde" },
      { label: "Plise vs Tül", href: "/plise-perde-vs-tul-perde" },
    ],
  },
];
