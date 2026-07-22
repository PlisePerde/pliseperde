export interface InternationalCity {
  name: string;
  slug: string;
  nameLocal: string;
  population?: string;
}

export interface InternationalCountry {
  name: string;
  slug: string;
  nameLocal: string;
  code: string;
  flag: string;
  cities: InternationalCity[];
  description: string;
}

export const internationalCountries: InternationalCountry[] = [
  {
    name: "Almanya",
    slug: "almanya",
    nameLocal: "Deutschland",
    code: "DE",
    flag: "🇩🇪",
    description:
      "Almanya'nın tüm büyük şehirlerinde plise perde, honeycomb perde ve düet perde tedarik ve montaj hizmeti. Haftalık olarak Almanya'ya ürün sevkiyatı yapıyoruz.",
    cities: [
      { name: "Berlin", slug: "berlin", nameLocal: "Berlin", population: "3.8M" },
      { name: "Hamburg", slug: "hamburg", nameLocal: "Hamburg", population: "1.9M" },
      { name: "Münih", slug: "munih", nameLocal: "München", population: "1.5M" },
      { name: "Köln", slug: "koln", nameLocal: "Köln", population: "1.1M" },
      { name: "Frankfurt", slug: "frankfurt", nameLocal: "Frankfurt am Main", population: "750K" },
      { name: "Stuttgart", slug: "stuttgart", nameLocal: "Stuttgart", population: "630K" },
      { name: "Düsseldorf", slug: "dusseldorf", nameLocal: "Düsseldorf", population: "620K" },
      { name: "Dortmund", slug: "dortmund", nameLocal: "Dortmund", population: "590K" },
      { name: "Essen", slug: "essen", nameLocal: "Essen", population: "580K" },
      { name: "Leipzig", slug: "leipzig", nameLocal: "Leipzig", population: "600K" },
      { name: "Bremen", slug: "bremen", nameLocal: "Bremen", population: "570K" },
      { name: "Dresden", slug: "dresden", nameLocal: "Dresden", population: "560K" },
      { name: "Hannover", slug: "hannover", nameLocal: "Hannover", population: "540K" },
      { name: "Nürnberg", slug: "nurnberg", nameLocal: "Nürnberg", population: "520K" },
    ],
  },
  {
    name: "Hollanda",
    slug: "hollanda",
    nameLocal: "Nederland",
    code: "NL",
    flag: "🇳🇱",
    description:
      "Hollanda'nın tüm büyük şehirlerinde plise perde tedarik ve montaj hizmeti. Hunter Douglas ve Luxaflex gibi Hollandalı firmalarla düzenli iş ortaklığı.",
    cities: [
      { name: "Amsterdam", slug: "amsterdam", nameLocal: "Amsterdam", population: "910K" },
      { name: "Rotterdam", slug: "rotterdam", nameLocal: "Rotterdam", population: "660K" },
      { name: "Lahey", slug: "lahey", nameLocal: "Den Haag", population: "550K" },
      { name: "Utrecht", slug: "utrecht", nameLocal: "Utrecht", population: "360K" },
      { name: "Eindhoven", slug: "eindhoven", nameLocal: "Eindhoven", population: "240K" },
      { name: "Tilburg", slug: "tilburg", nameLocal: "Tilburg", population: "220K" },
      { name: "Groningen", slug: "groningen", nameLocal: "Groningen", population: "230K" },
      { name: "Almere", slug: "almere", nameLocal: "Almere", population: "210K" },
      { name: "Breda", slug: "breda", nameLocal: "Breda", population: "180K" },
      { name: "Nijmegen", slug: "nijmegen", nameLocal: "Nijmegen", population: "180K" },
    ],
  },
  {
    name: "Fransa",
    slug: "fransa",
    nameLocal: "France",
    code: "FR",
    flag: "🇫🇷",
    description:
      "Fransa'nın tüm büyük şehirlerinde plise perde ve honeycomb perde tedarik hizmeti. Haftalık sevkiyat ile Fransa'ya ürün gönderimi.",
    cities: [
      { name: "Paris", slug: "paris", nameLocal: "Paris", population: "2.2M" },
      { name: "Lyon", slug: "lyon", nameLocal: "Lyon", population: "520K" },
      { name: "Marsilya", slug: "marsilya", nameLocal: "Marseille", population: "870K" },
      { name: "Toulouse", slug: "toulouse", nameLocal: "Toulouse", population: "490K" },
      { name: "Nice", slug: "nice", nameLocal: "Nice", population: "340K" },
      { name: "Nantes", slug: "nantes", nameLocal: "Nantes", population: "320K" },
      { name: "Strazburg", slug: "strazburg", nameLocal: "Strasbourg", population: "290K" },
      { name: "Montpellier", slug: "montpellier", nameLocal: "Montpellier", population: "300K" },
      { name: "Bordeaux", slug: "bordeaux", nameLocal: "Bordeaux", population: "260K" },
      { name: "Lille", slug: "lille", nameLocal: "Lille", population: "230K" },
    ],
  },
  {
    name: "Belçika",
    slug: "belcika",
    nameLocal: "België",
    code: "BE",
    flag: "🇧🇪",
    description:
      "Belçika'nın tüm büyük şehirlerinde plise perde tedarik ve montaj hizmeti. Haftalık sevkiyat ile Belçika'ya ürün gönderimi.",
    cities: [
      { name: "Brüksel", slug: "bruksel", nameLocal: "Bruxelles", population: "1.2M" },
      { name: "Anvers", slug: "anvers", nameLocal: "Antwerpen", population: "530K" },
      { name: "Gent", slug: "gent", nameLocal: "Gent", population: "260K" },
      { name: "Charleroi", slug: "charleroi", nameLocal: "Charleroi", population: "200K" },
      { name: "Liège", slug: "liege", nameLocal: "Liège", population: "200K" },
      { name: "Bruges", slug: "bruges", nameLocal: "Brugge", population: "120K" },
      { name: "Namur", slug: "namur", nameLocal: "Namur", population: "110K" },
      { name: "Löven", slug: "leuven", nameLocal: "Leuven", population: "100K" },
    ],
  },
  {
    name: "İsviçre",
    slug: "isvicre",
    nameLocal: "Schweiz",
    code: "CH",
    flag: "🇨🇭",
    description:
      "İsviçre'nin tüm büyük şehirlerinde plise perde ve honeycomb perde tedarik hizmeti. Haftalık sevkiyat ile İsviçre'ye ürün gönderimi.",
    cities: [
      { name: "Zürih", slug: "zurich", nameLocal: "Zürich", population: "440K" },
      { name: "Cenevre", slug: "cenevre", nameLocal: "Genève", population: "200K" },
      { name: "Basel", slug: "basel", nameLocal: "Basel", population: "180K" },
      { name: "Bern", slug: "bern", nameLocal: "Bern", population: "140K" },
      { name: "Lozan", slug: "lozan", nameLocal: "Lausanne", population: "140K" },
      { name: "Winterthur", slug: "winterthur", nameLocal: "Winterthur", population: "115K" },
      { name: "Luzern", slug: "luzern", nameLocal: "Luzern", population: "82K" },
      { name: "St. Gallen", slug: "st-gallen", nameLocal: "St. Gallen", population: "76K" },
    ],
  },
  {
    name: "Avusturya",
    slug: "avusturya",
    nameLocal: "Österreich",
    code: "AT",
    flag: "🇦🇹",
    description:
      "Avusturya'nın tüm büyük şehirlerinde plise perde ve honeycomb perde tedarik hizmeti. Haftalık sevkiyat ile Avusturya'ya ürün gönderimi.",
    cities: [
      { name: "Viyana", slug: "viyana", nameLocal: "Wien", population: "1.9M" },
      { name: "Graz", slug: "graz", nameLocal: "Graz", population: "290K" },
      { name: "Linz", slug: "linz", nameLocal: "Linz", population: "210K" },
      { name: "Salzburg", slug: "salzburg", nameLocal: "Salzburg", population: "160K" },
      { name: "Innsbruck", slug: "innsbruck", nameLocal: "Innsbruck", population: "130K" },
      { name: "Klagenfurt", slug: "klagenfurt", nameLocal: "Klagenfurt", population: "100K" },
      { name: "Villach", slug: "villach", nameLocal: "Villach", population: "62K" },
      { name: "Wels", slug: "wels", nameLocal: "Wels", population: "60K" },
    ],
  },
];

export const internationalStats = {
  countryCount: internationalCountries.length,
  cityCount: internationalCountries.reduce((acc, c) => acc + c.cities.length, 0),
  weeklyShipments: "Haftalık",
};
