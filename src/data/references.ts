export interface Reference {
  name: string;
  logo: string;
  sector: string;
  projectCount?: string;
  description: string;
  url?: string;
  location?: string;
}

export interface ReferenceSector {
  id: string;
  label: string;
  icon: string;
  description: string;
  references: Reference[];
}

export const referenceSectors: ReferenceSector[] = [
  {
    id: "otel-konaklama",
    label: "Otel & Konaklama",
    icon: "hotel",
    description:
      "5 yıldızlı oteller, butik oteller ve konaklama tesisleri için toplu plise perde üretimi ve montajı. Motorlu modeller, blackout kumaş ve özel ölçü üretim konusunda uzmanız.",
    references: [
      {
        name: "Örnek Otel",
        logo: "/logos/ornek-otel.webp",
        sector: "Otel & Konaklama",
        projectCount: "180 oda",
        description: "180 oda için motorlu plise perde üretimi ve montajı.",
        location: "İstanbul",
      },
    ],
  },
  {
    id: "ofis-plaza",
    label: "Ofis & Plaza",
    icon: "building",
    description:
      "Plaza ofis katları, çalışma alanları ve toplantı odaları için güneşlik plise perde çözümleri. Profesyonel montaj ve toplu proje indirimleri.",
    references: [
      {
        name: "Örnek Plaza",
        logo: "/logos/ornek-plaza.webp",
        sector: "Ofis & Plaza",
        projectCount: "85+ ofis",
        description: "Plaza katları için güneşlik plise perde uygulaması.",
        location: "İstanbul",
      },
    ],
  },
  {
    id: "egitim",
    label: "Eğitim Kurumları",
    icon: "school",
    description:
      "Okullar, üniversiteler ve eğitim kurumları için çocuk güvenliği sertifikalı, dayanıklı plise perde modelleri. Kordsuz sistemler ile güvenli kullanım.",
    references: [
      {
        name: "Örnek Okul",
        logo: "/logos/ornek-okul.webp",
        sector: "Eğitim",
        projectCount: "45+ sınıf",
        description: "Sınıflar için kordsuz güvenli plise perde montajı.",
        location: "Ankara",
      },
    ],
  },
  {
    id: "saglik",
    label: "Sağlık Kurumları",
    icon: "heart-pulse",
    description:
      "Hastaneler, klinikler ve sağlık kurumları için hijyenik kumaş ve tam karartma özellikli plise perde çözümleri. Anti-bakteriyel kumaş seçenekleri.",
    references: [
      {
        name: "Örnek Hastane",
        logo: "/logos/ornek-hastane.webp",
        sector: "Sağlık",
        projectCount: "30+ oda",
        description: "Hasta odaları için blackout hijyenik plise perde.",
        location: "İzmir",
      },
    ],
  },
  {
    id: "konut-site",
    label: "Konut Siteleri",
    icon: "home",
    description:
      "Toplu konut projeleri ve siteler için standart plise perde modelleri. Toplu indirim avantajları ve öncelikli montaj hizmeti.",
    references: [
      {
        name: "Örnek Site",
        logo: "/logos/ornek-site.webp",
        sector: "Konut",
        projectCount: "200+ daire",
        description: "Site ortak alanları ve daireler için toplu plise perde.",
        location: "İstanbul",
      },
    ],
  },
];

export const allReferences: Reference[] = referenceSectors.flatMap((s) => s.references);

export const referenceStats = [
  { label: "Tamamlanan Proje", value: "2000+", icon: "check-circle" },
  { label: "Kurumsal Müşteri", value: "500+", icon: "building" },
  { label: "Yıl Tecrübe", value: "3+", icon: "calendar" },
  { label: "Memnuniyet Oranı", value: "%98", icon: "thumbs-up" },
];
