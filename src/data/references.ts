export interface Reference {
  name: string;
  logo: string;
}

export interface Partner extends Reference {
  country: string;
  role: string;
}

export const partners: Partner[] = [
  { name: "Hunter Douglas", logo: "/logos/hunter-douglas.webp", country: "Hollanda", role: "Bayi" },
  { name: "Benthin", logo: "/logos/benthin.webp", country: "Almanya", role: "Bayi" },
  { name: "MHZ Hachtel", logo: "/logos/mhz-hachtel.webp", country: "Almanya", role: "Bayi" },
  { name: "Luxaflex", logo: "/logos/luxaflex.webp", country: "Hollanda", role: "Bayi" },
  { name: "Neher", logo: "/logos/neher.webp", country: "Almanya", role: "Bayi" },
  { name: "Warema", logo: "/logos/warema.webp", country: "Almanya", role: "Bayi" },
  { name: "Cosiflor", logo: "/logos/cosiflor.webp", country: "Almanya", role: "Bayi" },
  { name: "Erfal", logo: "/logos/erfal.webp", country: "Almanya", role: "Bayi" },
  { name: "JYSK", logo: "/logos/jysk.webp", country: "Danimarka", role: "Bayi" },
  { name: "Kadeco", logo: "/logos/kadeco.webp", country: "Almanya", role: "Bayi" },
];

export const customers: Reference[] = [
  { name: "Türk Telekom", logo: "/logos/turk-telekom.webp" },
  { name: "A101", logo: "/logos/a101.webp" },
  { name: "Acıbadem Sağlık Grubu", logo: "/logos/acibadem-saglik-grubu.webp" },
  { name: "Amazon", logo: "/logos/amazon.webp" },
  { name: "Aselsan", logo: "/logos/aselsan.webp" },
  { name: "BİM", logo: "/logos/bim.webp" },
  { name: "Bol", logo: "/logos/bol.webp" },
  { name: "Enka", logo: "/logos/enka.webp" },
  { name: "Espressolab", logo: "/logos/espressolab.webp" },
  { name: "Garanti Bankası", logo: "/logos/garanti-bankasi.webp" },
  { name: "Gebze Belediyesi", logo: "/logos/gebze-belediyesi.webp" },
  { name: "Hepsiburada", logo: "/logos/hepsiburada.webp" },
  { name: "Honeywell", logo: "/logos/honeywell.webp" },
  { name: "IKEA", logo: "/logos/ikea.webp" },
  { name: "İstanbul Büyükşehir Belediyesi", logo: "/logos/istanbul-buyuksehir-belediyesi.webp" },
  { name: "Kocaeli Büyükşehir Belediyesi", logo: "/logos/kocaeli-buyuksehir-belediyesi.webp" },
  { name: "Maersk", logo: "/logos/maersk.webp" },
  { name: "Medicana", logo: "/logos/medicana.webp" },
  { name: "Medipol", logo: "/logos/medipol.webp" },
  { name: "Memorial", logo: "/logos/memorial.webp" },
  { name: "Migros", logo: "/logos/migros.webp" },
  { name: "Nevada Coffee", logo: "/logos/nevada-coffee.webp" },
  { name: "Opet", logo: "/logos/opet.webp" },
  { name: "Pegasus", logo: "/logos/pegasus.webp" },
  { name: "Pendik Belediyesi", logo: "/logos/pendik-belediyesi.webp" },
  { name: "Petkim", logo: "/logos/petkim.webp" },
  { name: "San Deco", logo: "/logos/san-deco.webp" },
  { name: "Socar", logo: "/logos/socar.webp" },
  { name: "Trendyol", logo: "/logos/trendyol.webp" },
  { name: "Tüpraş", logo: "/logos/tupras.webp" },
  { name: "Turkcell", logo: "/logos/turkcell.webp" },
  { name: "Turkish Airlines", logo: "/logos/turkish-airlines.webp" },
  { name: "Türkiye İş Bankası", logo: "/logos/turkiye-is-bankasi.webp" },
  { name: "Tuzla Belediyesi", logo: "/logos/tuzla-belediyesi.webp" },
  { name: "Vestel", logo: "/logos/vestel.webp" },
  { name: "Yıldız Teknik Üniversitesi", logo: "/logos/yildiz-teknik-universitesi.webp" },
];

export const allReferences: Reference[] = [...partners, ...customers];

export const referenceStats = [
  { label: "Tamamlanan Proje", value: "2000+", icon: "check-circle" },
  { label: "Kurumsal Müşteri", value: "500+", icon: "building" },
  { label: "Yıl Tecrübe", value: "4+", icon: "calendar" },
  { label: "Memnuniyet Oranı", value: "%98", icon: "thumbs-up" },
];
