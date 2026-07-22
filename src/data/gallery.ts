export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  description?: string;
  location?: string;
  model?: string;
  width: number;
  height: number;
};

export type GalleryCategory = {
  id: string;
  label: string;
  description: string;
  images: GalleryImage[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    id: "plise-perde",
    label: "Plise Perde",
    description:
      "Plise perde uygulama fotoğrafları. Salon, yatak odası, cam balkon, mutfak ve ofis gibi farklı kullanım alanlarında gerçekleştirilen montaj örnekleri. Düz, blackout, gece gündüz, desenli ve baskılı modellerin gerçek proje görüntüleri.",
    images: [
      { src: "/gallery/plise-perde/Plise-Perde-1.webp", alt: "Plise perde salon uygulaması — beyaz düz model, doğal aydınlatma", caption: "Salon — Beyaz Düz Plise Perde", description: "Geniş salon penceresinde beyaz plise perde uygulaması, doğal aydınlatma ve modern görünüm", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-2.webp", alt: "Plise perde yatak odası uygulaması — tam karartma blackout model", caption: "Yatak Odası — Blackout Plise Perde", description: "Yatak odasında tam karartma plise perde, %99 ışık kesme ile uyku kalitesi", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-3.webp", alt: "Plise perde cam balkon uygulaması — katlanır perde montajı", caption: "Cam Balkon — Plise Perde", description: "Cam balkonda plise perde uygulaması, az yer kaplayan katlanır yapı", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-4.webp", alt: "Plise perde mutfak uygulaması — tül model doğal ışık", caption: "Mutfak — Tül Plise Perde", description: "Mutfak penceresinde tül plise perde, doğal aydınlatma ve nem dayanımlı kumaş", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-5.webp", alt: "Plise perde ofis uygulaması — güneşlik model, ekran parlaması azaltma", caption: "Ofis — Güneşlik Plise Perde", description: "Ofis ortamında güneşlik plise perde, ekran parlamasını azaltan profesyonel çözüm", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-6.webp", alt: "Plise perde gece gündüz modeli — salon uygulaması", caption: "Salon — Gece Gündüz Plise Perde", description: "Salonda gece gündüz plise perde, üst tül alt blackout ile esnek kullanım", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-7.webp", alt: "Plise perde yatak odası — krem renk düz model", caption: "Yatak Odası — Krem Plise Perde", description: "Yatak odasında krem renk plise perde, sıcak görünüm ve yumuşak aydınlatma", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-8.webp", alt: "Plise perde çocuk odası uygulaması — kordsuz güvenli model", caption: "Çocuk Odası — Plise Perde", description: "Çocuk odasında kordsuz plise perde, çocuk güvenliği ve kolay kullanım", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-9.webp", alt: "Plise perde villa uygulaması — yüksek pencerede motorlu model", caption: "Villa — Motorlu Plise Perde", description: "Villada yüksek pencere motorlu plise perde, uzaktan kumanda ile konforlu kullanım", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-10.webp", alt: "Plise perde kış bahçesi uygulaması — ısı yalıtımlı model", caption: "Kış Bahçesi — Plise Perde", description: "Kış bahçesinde plise perde, mevsim boyu konforlu kullanım için güneş filtreleme", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-11.webp", alt: "Plise perde çalışma odası — güneşlik model odaklanma için", caption: "Çalışma Odası — Plise Perde", description: "Çalışma odasında güneşlik plise perde, göz yorgunluğunu azaltan aydınlatma kontrolü", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-12.webp", alt: "Plise perde salon — antrasit renk modern uygulama", caption: "Salon — Antrasit Plise Perde", description: "Salonda antrasit renk plise perde, modern ve şık görünüm", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-13.webp", alt: "Plise perde detay görünümü — kumaş ve profil close-up", caption: "Plise Perde — Detay Görünüm", description: "Plise perde kumaş ve profil detayı, kaliteli malzeme ve işçilik", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-14.webp", alt: "Plise perde banyo uygulaması — nem dayanımlı model", caption: "Banyo — Plise Perde", description: "Banyoda nem dayanımlı plise perde, pratik kullanım ve estetik görünüm", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-15.webp", alt: "Plise perde fransız balkon uygulaması — az yer kaplayan model", caption: "Fransız Balkon — Plise Perde", description: "Fransız balkonda plise perde, dar alanlar için ideal az yer kaplayan çözüm", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-16.webp", alt: "Plise perde salon — çift pencere uygulaması", caption: "Salon — Çift Pencere Plise Perde", description: "Salonda çift pencerede plise perde, simetrik montaj ile bütüncül görünüm", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-17.webp", alt: "Plise perde yatak odası — gece gündüz model uygulaması", caption: "Yatak Odası — Gece Gündüz Plise Perde", description: "Yatak odasında gece gündüz plise perde, gündüz ışık gece karartma esnekliği", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-18.webp", alt: "Plise perde ofis — toplantı odası uygulaması", caption: "Ofis — Toplantı Odası Plise Perde", description: "Toplantı odasında plise perde, projeksiyon için ışık kontrolü ve profesyonel görünüm", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-19.webp", alt: "Plise perde mutfak — desenli model uygulaması", caption: "Mutfak — Desenli Plise Perde", description: "Mutfakta desenli plise perde, estetik görünüm ve doğal aydınlatma", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-20.webp", alt: "Plise perde salon — baskılı model özgün tasarım", caption: "Salon — Baskılı Plise Perde", description: "Salonda baskılı plise perde, özgün desen tasarımı ile kişiselleştirilmiş görünüm", width: 1400, height: 1400 },
      { src: "/gallery/plise-perde/Plise-Perde-21.webp", alt: "Plise perde villa — geniş pencere uygulaması motorlu model", caption: "Villa — Geniş Pencere Plise Perde", description: "Villada geniş pencerede motorlu plise perde, otomasyon ile konforlu kullanım", width: 1400, height: 1400 },
    ],
  },
  {
    id: "honeycomb-perde",
    label: "Honeycomb Perde",
    description:
      "Honeycomb (petek) perde uygulama fotoğrafları. Çift petek yapısı ile ısı ve ses yalıtımı sağlayan honeycomb perdelerin salon, yatak odası ve cam balkon uygulamaları. Enerji tasarruflu perde modellerinin gerçek montaj görüntüleri.",
    images: [
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-1.webp", alt: "Honeycomb perde salon uygulaması — beyaz petek modeli, doğal aydınlatma", caption: "Salon — Beyaz Honeycomb Perde", description: "Geniş pencerede beyaz honeycomb petek perde uygulaması, doğal aydınlatma ve ısı yalıtımı", width: 1400, height: 1400 },
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-2.webp", alt: "Honeycomb perde yatak odası uygulaması — antrasit petek modeli, ısı yalıtımı", caption: "Yatak Odası — Antrasit Honeycomb Perde", description: "Yatak odasında antrasit honeycomb perde, ısı ve ses yalıtımı sağlayan çift petek yapısı", width: 1400, height: 1400 },
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-3.webp", alt: "Honeycomb perde cam balkon uygulaması — petek perde montaj örneği", caption: "Cam Balkon — Honeycomb Perde", description: "Cam balkonda honeycomb perde uygulaması, az yer kaplayan petek yapısı ile ısı yalıtımı", width: 1400, height: 1400 },
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-4.webp", alt: "Honeycomb perde detay görünümü — petek yapı close-up", caption: "Honeycomb Perde — Petek Detay", description: "Honeycomb perde petek yapısının detay görünümü, çift petek ile enerji tasarrufu", width: 1400, height: 1400 },
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-5.webp", alt: "Honeycomb perde mutfak uygulaması — beyaz petek perde", caption: "Mutfak — Beyaz Honeycomb Perde", description: "Mutfak penceresinde beyaz honeycomb perde, nem dayanımlı kumaş ve ısı yalıtımı", width: 1400, height: 1400 },
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-6.webp", alt: "Honeycomb perde ofis uygulaması — profesyonel petek perde montajı", caption: "Ofis — Honeycomb Perde", description: "Ofis ortamında honeycomb perde uygulaması, ses yalıtımı ve profesyonel görünüm", width: 1400, height: 1400 },
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-7.webp", alt: "Honeycomb perde salon uygulaması — geniş pencerede petek perde", caption: "Salon — Geniş Pencere Honeycomb", description: "Geniş salon penceresinde honeycomb perde, katlanır petek yapısı ile az yer kaplama", width: 1400, height: 1400 },
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-8.webp", alt: "Honeycomb perde yatak odası — krem petek perde uygulaması", caption: "Yatak Odası — Krem Honeycomb Perde", description: "Yatak odasında krem renk honeycomb perde, sıcak görünüm ve ısı yalıtımı", width: 1400, height: 1400 },
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-9.webp", alt: "Honeycomb perde villa uygulaması — yüksek pencerede petek perde", caption: "Villa — Yüksek Pencere Honeycomb", description: "Villada yüksek pencere honeycomb perde uygulaması, motorlu seçenek ile konforlu kullanım", width: 1400, height: 1400 },
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-11.webp", alt: "Honeycomb perde çocuk odası uygulaması — güvenli petek perde", caption: "Çocuk Odası — Honeycomb Perde", description: "Çocuk odasında honeycomb perde, kordsuz yapı ile çocuk güvenliği ve ısı yalıtımı", width: 1400, height: 1400 },
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-12.webp", alt: "Honeycomb perde çalışma odası uygulaması — petek perde örneği", caption: "Çalışma Odası — Honeycomb Perde", description: "Çalışma odasında honeycomb perde, ses yalıtımı ile odaklanma için ideal ortam", width: 1400, height: 1400 },
      { src: "/gallery/honeycomb-perde/Honeycomb-Perde-13.webp", alt: "Honeycomb perde salon uygulaması — çift petek honeycomb perde montajı", caption: "Salon — Çift Petek Honeycomb", description: "Salonda çift petek honeycomb perde, üst düzey ısı yalıtımı ve enerji tasarrufu", width: 1400, height: 1400 },
    ],
  },
  {
    id: "duet-perde",
    label: "Düet Perde",
    description:
      "Düet plise perde uygulama fotoğrafları. Üst kısımda tül alt kısımda blackout kumaş kombinasyonu ile gece gündüz kullanımına uygun düet perdelerin farklı mekanlarda uygulanmış halleri. Esnek kullanım sağlayan perde modelinin proje örnekleri.",
    images: [
      { src: "/gallery/duet-perde/Düet-Perde-1.webp", alt: "Düet perde salon uygulaması — üst tül alt blackout kombinasyonu", caption: "Salon — Düet Perde", description: "Salonda düet perde uygulaması, üst tül alt blackout ile gece gündüz esnek kullanım", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-2.webp", alt: "Düet perde yatak odası uygulaması — gece gündüz blackout model", caption: "Yatak Odası — Düet Perde", description: "Yatak odasında düet perde, alt blackout ile tam karartma üst tül ile doğal aydınlatma", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-3.webp", alt: "Düet perde cam balkon uygulaması — tül blackout kombinasyonu", caption: "Cam Balkon — Düet Perde", description: "Cam balkonda düet perde, az yer kaplayan yapı ile esnek ışık kontrolü", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-4.webp", alt: "Düet perde mutfak uygulaması — tül model doğal aydınlatma", caption: "Mutfak — Düet Perde", description: "Mutfakta düet perde, üst tül ile doğal aydınlatma alt blackout ile istenirse karartma", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-5.webp", alt: "Düet perde ofis uygulaması — profesyonel tül blackout model", caption: "Ofis — Düet Perde", description: "Ofis ortamında düet perde, toplantı ve çalışma için esnek aydınlatma kontrolü", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-6.webp", alt: "Düet perde salon — geniş pencere uygulaması", caption: "Salon — Geniş Pencere Düet Perde", description: "Geniş salon penceresinde düet perde, simetrik montaj ile bütüncül görünüm", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-7.webp", alt: "Düet perde yatak odası — krem renk düet model", caption: "Yatak Odası — Krem Düet Perde", description: "Yatak odasında krem renk düet perde, sıcak görünüm ve esnek ışık kontrolü", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-8.webp", alt: "Düet perde detay görünümü — tül blackout kumaş close-up", caption: "Düet Perde — Detay Görünüm", description: "Düet perde tül ve blackout kumaş detayı, çift kumaş kombinasyonunun görünümü", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-9.webp", alt: "Düet perde villa uygulaması — yüksek pencere düet model", caption: "Villa — Düet Perde", description: "Villada yüksek pencere düet perde, motorlu seçenek ile konforlu kullanım", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-10.webp", alt: "Düet perde kış bahçesi uygulaması — esnek ışık kontrolü", caption: "Kış Bahçesi — Düet Perde", description: "Kış bahçesinde düet perde, mevsim boyu esnek aydınlatma için ideal çözüm", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-11.webp", alt: "Düet perde çalışma odası — tül blackout odaklanma için", caption: "Çalışma Odası — Düet Perde", description: "Çalışma odasında düet perde, blackout ile projeksiyon tül ile doğal ışık", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-12.webp", alt: "Düet perde salon — antrasit renk düet uygulaması", caption: "Salon — Antrasit Düet Perde", description: "Salonda antrasit renk düet perde, modern görünüm ve esnek kullanım", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-13.webp", alt: "Düet perde çocuk odası — kordsuz güvenli düet model", caption: "Çocuk Odası — Düet Perde", description: "Çocuk odasında düet perde, kordsuz yapı ile güvenli ve esnek kullanım", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-14.webp", alt: "Düet perde banyo uygulaması — nem dayanımlı düet model", caption: "Banyo — Düet Perde", description: "Banyoda nem dayanımlı düet perde, pratik kullanım ve estetik görünüm", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-15.webp", alt: "Düet perde fransız balkon — az yer kaplayan düet model", caption: "Fransız Balkon — Düet Perde", description: "Fransız balkonda düet perde, dar alanlar için ideal az yer kaplayan çözüm", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-16.webp", alt: "Düet perde salon — çift pencere düet perde uygulaması", caption: "Salon — Çift Pencere Düet Perde", description: "Salonda çift pencerede düet perde, simetrik montaj ile bütüncül görünüm", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-17.webp", alt: "Düet perde yatak odası — gece gündüz esnek kullanım", caption: "Yatak Odası — Gece Gündüz Düet Perde", description: "Yatak odasında düet perde, gündüz tül gece blackout ile esnek kullanım", width: 1400, height: 1400 },
      { src: "/gallery/duet-perde/Düet-Perde-18.webp", alt: "Düet perde ofis — toplantı odası düet perde uygulaması", caption: "Ofis — Toplantı Odası Düet Perde", description: "Toplantı odasında düet perde, projeksiyon için blackout ve doğal ışık için tül", width: 1400, height: 1400 },
    ],
  },
];

export const allGalleryImages: (GalleryImage & { category: string; categoryLabel: string })[] =
  galleryCategories.flatMap((cat) =>
    cat.images.map((img) => ({
      ...img,
      category: cat.id,
      categoryLabel: cat.label,
    }))
  );

export const totalImageCount = allGalleryImages.length;
