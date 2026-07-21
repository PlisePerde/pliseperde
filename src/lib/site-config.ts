export const siteConfig = {
  name: "Plise Perde",
  domain: "pliseperde.com",
  url: "https://pliseperde.com",
  phone: "+905403363873",
  phoneDisplay: "0 540 336 38 73",
  email: "info@pliseperde.com",
  address: {
    street: "Esenyalı, Edebali Cd. No:13/C",
    district: "Pendik",
    city: "İstanbul",
    postalCode: "34903",
    country: "TR",
  },
  geo: {
    latitude: "40.8769",
    longitude: "29.2914",
  },
  foundedYear: 2022,
  priceRange: "₺₺",
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  measurementHours: {
    opens: "08:00",
    closes: "21:00",
  },
  social: {
    facebook: "https://www.facebook.com/PlisePerdecom/",
    instagram: "https://www.instagram.com/pliseperdeler/",
    youtube: "https://www.youtube.com/@plise-perde",
    pinterest: "https://www.pinterest.com/pliseperdecom/",
    linkedin: "https://www.linkedin.com/company/pliseperde/",
  },
  themeColor: "#83bd81",
  whatsapp: "https://wa.me/905403363873",
  tawkTo: {
    propertyId: "pliseperde",
    widgetId: "default",
  },
} as const;

export type SiteConfig = typeof siteConfig;
