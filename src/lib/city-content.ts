import type { CityData, CityContentSection, CityFaqItem } from "@/data/cities";
import { cityMetadata, type CityMetadata } from "@/data/city-metadata";

interface RegionConfig {
  kumasLink: string;
  modelLink: string;
  montajLink: string;
  kumasFn: (cityName: string, meta: CityMetadata | null) => string;
  modelFn: (cityName: string, meta: CityMetadata | null) => string;
  montajFn: (cityName: string, meta: CityMetadata | null) => string;
  extraTipFn: (cityName: string, meta: CityMetadata | null) => string;
}

const regionConfigs: Record<string, RegionConfig> = {
  Marmara: {
    kumasLink: "/plise-perde-cesitleri/",
    modelLink: "/plise-perde-modelleri/",
    montajLink: "/plise-perde-sistemleri/",
    kumasFn: (cityName, meta) => {
      const coast = meta?.popularDistricts?.find(d => d.note.includes("sahil") || d.note.includes("deniz"));
      const inland = meta?.popularDistricts?.find(d => d.note.includes("iç") || d.note.includes("sanayi"));
      return `${cityName}${coast ? " sahil kesiminde " + coast.name + " gibi bölgelerde" : " sahil bölgelerinde"} <strong>anti-nem kaplamalı polyester kumaş</strong> öneriyoruz — deniz nemi normal kumaşları 2-3 yılda deformasyona uğratırken, anti-nem kumaşlar 5+ yıl dayanır. ${cityName}${inland ? " iç kesiminde " + inland.name + " bölgesinde" : " iç kesimlerinde"} ise standart polyester kumaş yeterlidir. Kış soğuklarının hissedildiği bölgelerde <a href="/honeycomb-perde/">honeycomb (petek) hücreli kumaş</a> ile ısı yalıtımı sağlanabilir.`;
    },
    modelFn: (cityName, meta) => {
      const districts = meta?.popularDistricts?.slice(0, 2).map(d => d.name).join(" ve ") || "merkez";
      return `${cityName} konutlarında en çok tercih edilen modeller: <a href="/duz-plise-perde/">düz plise perde</a> (klasik sade görünüm), <a href="/gece-gunduz-plise-perde/">gece-gündüz plise perde</a> (gündüz ışık + gece karartma) ve <a href="/blackout-plise-perde/">blackout plise perde</a> (tam karartma). ${cityName} ${districts} bölgelerinde sahil konutlarında güneşlik kumaş, iç bölge konutlarında karartma kumaş tercih edilmektedir.`;
    },
    montajFn: (cityName, meta) => {
      const arch = meta?.architecture || "";
      return `${cityName}'da hem <a href="/vidali-plise-perde/">vidalı sistem</a> hem de <a href="/yapiskanli-plise-perde/">yapışkanlı sistem</a> yaygın kullanılır. ${arch ? arch + " Bu nedenle " : ""}kira sözleşmeli evlerde delmesiz yapışkanlı sistem tercih edilirken, kendi evinde yaşayanlar vidalı sistemin daha sağlam olduğunu seçer. <a href="/portray-plise-perde/">Portrayli sistem</a> ise ${cityName}'da taşınabilirlik isteyenler için idealdir.`;
    },
    extraTipFn: (cityName, meta) => {
      return `${cityName}, Marmara deprem bölgesinde yer aldığı için, plise perdenin hafif yapısı (200-400 gram) ve pencere içi montajı deprem güvenliği açısından avantaj sağlar. ${cityName} konutlarında sarsıntıda düşme riski yoktur.`;
    },
  },
  Ege: {
    kumasLink: "/plise-perde-cesitleri/",
    modelLink: "/plise-perde-modelleri/",
    montajLink: "/plise-perde-sistemleri/",
    kumasFn: (cityName, meta) => {
      const coast = meta?.popularDistricts?.find(d => d.note.includes("sahil") || d.note.includes("turizm") || d.note.includes("deniz"));
      return `${cityName}${coast ? " " + coast.name + " gibi sahil bölgelerinde" : " sahil kesiminde"} <strong>UV dayanımlı güneşlik kumaş</strong> öneriyoruz — yoğun güneş ışığı normal kumaşların rengini 2-3 yılda solatırken, UV dayanımlı kumaşlar 7+ yıl renk korur. ${cityName} iç kesimlerinde karasal iklim nedeniyle <a href="/honeycomb-perde/">honeycomb kumaş</a> ile kış ısı yalıtımı sağlanabilir. ${cityName} yazlık konutlarında ise nefes alabilen tül kumaş tercih edilir.`;
    },
    modelFn: (cityName, meta) => {
      const districts = meta?.popularDistricts?.slice(0, 2).map(d => d.name).join(" ve ") || "merkez";
      return `${cityName} ${districts} bölgelerinde en çok tercih edilen modeller: <a href="/gece-gunduz-plise-perde/">gece-gündüz plise perde</a> (yazın güneş kontrolü + gece gizlilik), <a href="/desenli-plise-perde/">desenli plise perde</a> (${cityName} evlerinin dekoratif tarzına uygun) ve <a href="/duz-plise-perde/">düz plise perde</a> (minimalist ${cityName} daireleri için). ${cityName} villa ve yazlıklarında <a href="/motorlu-plise-perde/">motorlu plise perde</a> de yaygın seçilir.`;
    },
    montajFn: (cityName, meta) => {
      return `${cityName}'da <a href="/yapiskanli-plise-perde/">yapışkanlı sistem</a> çok yaygındır — özellikle ${cityName} yazlık evlerinde pencereye delik açmak istemeyenler için. ${cityName} kalıcı konutlarında <a href="/vidali-plise-perde/">vidalı sistem</a> tercih edilir. ${cityName} sahil bölgelerinde tuzlu havanın vidaları etkilememesi için paslanmaz vida kullanıyoruz.`;
    },
    extraTipFn: (cityName, meta) => {
      return `${cityName}'nın yoğun güneşi nedeniyle, güneye bakan pencerelerde karartma kumaş veya gece-gündüz modeli seçmenizi öneririz. ${cityName}'da doğuya bakan pencerelerde güneşlik kumaş yeterlidir.`;
    },
  },
  Akdeniz: {
    kumasLink: "/plise-perde-cesitleri/",
    modelLink: "/plise-perde-modelleri/",
    montajLink: "/plise-perde-sistemleri/",
    kumasFn: (cityName, meta) => {
      const coast = meta?.popularDistricts?.find(d => d.note.includes("sahil") || d.note.includes("turizm") || d.note.includes("deniz"));
      return `${cityName}${coast ? " " + coast.name + " gibi sahil bölgelerinde" : " sahil kesiminde"} <strong>UV dayanımlı karartma kumaş</strong> öneriyoruz — yoğun güneş hem ışık hem de ısı sorunudur. Karartma kumaş, güneşi %99 oranında keserek ${cityName} konutlarında oda sıcaklığını 3-5°C düşürür. ${cityName} iç kesimlerinde ise <a href="/honeycomb-perde/">honeycomb kumaş</a> ile hem yaz serin hem kış sıcak tutulabilir.`;
    },
    modelFn: (cityName, meta) => {
      const districts = meta?.popularDistricts?.slice(0, 2).map(d => d.name).join(" ve ") || "merkez";
      return `${cityName} ${districts} bölgelerinde en çok tercih edilen modeller: <a href="/blackout-plise-perde/">blackout plise perde</a> (tam karartma + güneş kesme), <a href="/gece-gunduz-plise-perde/">gece-gündüz plise perde</a> (esnek ışık kontrolü) ve <a href="/motorlu-plise-perde/">motorlu plise perde</a> (${cityName} villa ve otellerinde uzaktan kumanda). ${cityName} turizm bölgesinde toplu projeler için B1 yangın dayanımlı kumaş kullanıyoruz.`;
    },
    montajFn: (cityName, meta) => {
      return `${cityName}'da <a href="/yapiskanli-plise-perde/">yapışkanlı sistem</a> yaygındır — sıcak iklimde yapışkan bantın performansı yüksektir. Ancak ${cityName} gibi sıcak bölgelerde yapışkanın zamanla yumuşamaması için yüksek sıcaklık dayanımlı 3M VHB bant kullanıyoruz. <a href="/vidali-plise-perde/">Vidalı sistem</a> ise ${cityName} kalıcı konutlarında tercih edilir.`;
    },
    extraTipFn: (cityName, meta) => {
      return `${cityName}'nın turistik bölgelerinde otel ve pansiyonlar için toplu plise perde üretimi yapıyoruz. ${cityName} için yangın dayanımlı B1 sınıfı kumaş ile güvenlik standartlarına uyum sağlanır.`;
    },
  },
  "İç Anadolu": {
    kumasLink: "/plise-perde-cesitleri/",
    modelLink: "/plise-perde-modelleri/",
    montajLink: "/plise-perde-sistemleri/",
    kumasFn: (cityName, meta) => {
      const altitude = meta?.altitude || "yüksek rakım";
      return `${cityName}'da ${altitude} rakım nedeniyle <strong>honeycomb (petek) hücreli kumaş</strong> en çok önerdiğimiz seçenektir — petek yapısı, ${cityName} pencerelerinden gelen soğuk havayı filtreler ve oda sıcaklığını korur. ${cityName} kışın ısıtma giderlerini %15-20 azaltabilir. ${cityName} yaz aylarında ise petek hücreler sıcak havayı dışarıda tutarak iç mekan serin kalmasına yardımcı olur. ${cityName} güneye bakan pencereler için karartma kumaş da önerilir.`;
    },
    modelFn: (cityName, meta) => {
      const districts = meta?.popularDistricts?.slice(0, 2).map(d => d.name).join(" ve ") || "merkez";
      return `${cityName} ${districts} bölgelerinde en çok tercih edilen modeller: <a href="/honeycomb-perde/">honeycomb plise perde</a> (${cityName} için ısı yalıtımı — en ideal), <a href="/blackout-plise-perde/">blackout plise perde</a> (karartma + güneş kesme) ve <a href="/duz-plise-perde/">düz plise perde</a> (ekonomik seçenek). ${cityName} yeni sitelerde büyük pencereler için <a href="/motorlu-plise-perde/">motorlu plise perde</a> de tercih edilir.`;
    },
    montajFn: (cityName, meta) => {
      return `${cityName}'da <a href="/vidali-plise-perde/">vidalı sistem</a> en yaygın seçimdir — ${cityName} karasal ikliminde pencere çerçeveleri sağlam olduğunda vida tutuşu yüksektir. <a href="/yapiskanli-plise-perde/">Yapışkanlı sistem</a> de ${cityName}'da çalışır ancak çok düşük sıcaklıklarda (-15°C altı) yapışkanın performansı düşebilir.`;
    },
    extraTipFn: (cityName, meta) => {
      return `${cityName}'ın soğuk kışlarında honeycomb plise perde kullanmanın ısı tasarrufu sağladığı ${cityName} müşterilerimiz tarafından teyit edilmiştir. ${cityName}'da kombiden 1-2 kademe düşürmek mümkün olur.`;
    },
  },
  Karadeniz: {
    kumasLink: "/plise-perde-cesitleri/",
    modelLink: "/plise-perde-modelleri/",
    montajLink: "/plise-perde-sistemleri/",
    kumasFn: (cityName, meta) => {
      return `${cityName}'da <strong>anti-nem + anti-küf kaplamalı kumaş</strong> kullanmak zorunludur — ${cityName} yüksek nemi, normal kumaşlarda 1-2 yıl içinde küf oluşumuna neden olur. Anti-küf kaplamalı kumaşlar ${cityName} konutlarında 7+ yıl dayanır. ${cityName} sahil kesiminde ayrıca tuzlu nem olduğundan, kordon sisteminde paslanmaz çelik seçeneği sunuyoruz.`;
    },
    modelFn: (cityName, meta) => {
      const districts = meta?.popularDistricts?.slice(0, 2).map(d => d.name).join(" ve ") || "merkez";
      return `${cityName} ${districts} bölgelerinde en çok tercih edilen modeller: <a href="/duz-plise-perde/">düz plise perde</a> (standart seçim), <a href="/honeycomb-perde/">honeycomb plise perde</a> (${cityName} için nem + ısı yalıtımı kombinasyonu) ve <a href="/gece-gunduz-plise-perde/">gece-gündüz plise perde</a> (ışık kontrolü). ${cityName} az güneşli ikliminde tül kumaş tercih edilir — doğal ışığı maksimum kullanmak için.`;
    },
    montajFn: (cityName, meta) => {
      const arch = meta?.architecture || "";
      return `${cityName}'da <a href="/vidali-plise-perde/">vidalı sistem</a> öneriyoruz — ${cityName} nemli ikliminde yapışkan bantın performansı zamanla düşebilir. Vidalı sistem, ${cityName} nemli havasında daha güvenilir tutuş sağlar. ${arch ? arch + " Bu nedenle " : ""}${cityName} ahşap pencere çerçevelerinde vida direkt tutar. PVC çerçevelerde de vidalı sistem sorunsuz çalışır.`;
    },
    extraTipFn: (cityName, meta) => {
      return `${cityName}'nın yüksek nemi nedeniyle, perdeyi sökmeden düzenli havalandırma yapmak küf oluşumunu önler. ${cityName} nemli havasında kumaşın kuruması daha uzun sürer — yıkadıktan sonra düz yüzeye sererek kurutun.`;
    },
  },
  "Doğu Anadolu": {
    kumasLink: "/plise-perde-cesitleri/",
    modelLink: "/plise-perde-modelleri/",
    montajLink: "/plise-perde-sistemleri/",
    kumasFn: (cityName, meta) => {
      const altitude = meta?.altitude || "yüksek rakım";
      return `${cityName}'da ${altitude} rakım ve sert kış şartları nedeniyle <strong>honeycomb (petek) hücreli karartma kumaş</strong> en ideal seçimdir — petek yapısı ${cityName} pencerelerinden gelen soğuk havayı filtreler, karartma kaplaması ise güneşi keser. Bu kombinasyon, ${cityName} kışın oda sıcaklığını 4-6°C artırabilir. ${cityName} için çok düşük sıcaklıklarda kumaşın esnekliğini koruması için özel polyester karışımı kullanıyoruz.`;
    },
    modelFn: (cityName, meta) => {
      const districts = meta?.popularDistricts?.slice(0, 2).map(d => d.name).join(" ve ") || "merkez";
      return `${cityName} ${districts} bölgelerinde en çok tercih edilen modeller: <a href="/honeycomb-perde/">honeycomb plise perde</a> (${cityName} için en doğru seçim — ısı yalıtımı), <a href="/blackout-plise-perde/">blackout plise perde</a> (karartma + güneş kesme) ve <a href="/duz-plise-perde/">düz plise perde</a> (ekonomik seçenek). ${cityName} çok büyük pencerelerde motorlu sistem tercih edilir ancak soğukta motor performansı için özel koruma gerekir.`;
    },
    montajFn: (cityName, meta) => {
      return `${cityName}'da <a href="/vidali-plise-perde/">vidalı sistem</a> zorunludur — ${cityName} kışında yapışkan bant -15°C altında yapışkanlığını kaybeder. Vidalı sistem, ${cityName} donlu havasında bile güvenli tutuş sağlar. ${cityName} ahşap ve PVC çerçevelerde vidalı montaj yapıyoruz. Kargo ile teslimat sonrası, video rehberlik ile kendiniz de monte edebilirsiniz.`;
    },
    extraTipFn: (cityName, meta) => {
      return `${cityName}'nın sert kışında honeycomb plise perde kullanmak, ısıtma giderlerinde belirgin tasarruf sağlar. ${cityName} müşterilerimiz, kombi ayarını 2-3 kademe düşürebildiklerini bildirmiştir.`;
    },
  },
  "Güneydoğu Anadolu": {
    kumasLink: "/plise-perde-cesitleri/",
    modelLink: "/plise-perde-modelleri/",
    montajLink: "/plise-perde-sistemleri/",
    kumasFn: (cityName, meta) => {
      return `${cityName}'da <strong>UV dayanımlı karartma kumaş</strong> öneriyoruz — ${cityName} yoğun güneşi, normal kumaşları 1-2 yılda solatır ve kırılgan hale getirir. UV dayanımlı karartma kumaş, ${cityName} pencerelerinde güneşi %99 keser ve 7+ yıl dayanır. ${cityName} düşük nem nedeniyle küf sorunu yoktur, ancak toz fırtınaları için kumaşın toz tutmama kaplaması önemlidir.`;
    },
    modelFn: (cityName, meta) => {
      const districts = meta?.popularDistricts?.slice(0, 2).map(d => d.name).join(" ve ") || "merkez";
      return `${cityName} ${districts} bölgelerinde en çok tercih edilen modeller: <a href="/blackout-plise-perde/">blackout plise perde</a> (${cityName} için güneş kesme — en çok tercih), <a href="/gece-gunduz-plise-perde/">gece-gündüz plise perde</a> (esnek kontrol) ve <a href="/honeycomb-perde/">honeycomb plise perde</a> (${cityName} geceleri ısı yalıtımı). ${cityName} çok sıcak bölgelerde motorlu sistem tercih edilir — uzaktan kumanda ile perdeyi açıp kapamak konfor sağlar.`;
    },
    montajFn: (cityName, meta) => {
      return `${cityName}'da hem <a href="/vidali-plise-perde/">vidalı sistem</a> hem <a href="/yapiskanli-plise-perde/">yapışkanlı sistem</a> kullanılabilir — ${cityName} sıcak ikliminde yapışkan bantın tutuş gücü yüksektir. Ancak ${cityName} 45°C+ sıcaklıklarda yapışkanın yumuşamaması için yüksek sıcaklık dayanımlı bant kullanıyoruz. Vidalı sistem ise ${cityName}'da her koşulda güvenlidir.`;
    },
    extraTipFn: (cityName, meta) => {
      return `${cityName}'nın sıcak ikliminde, güneye ve batıya bakan pencerelerde karartma kumaş kullanmak oda sıcaklığını 5-8°C düşürür. ${cityName} klimasının yükünü belirgin azaltır, elektrik tasarrufu sağlar.`;
    },
  },
};

function getRegionConfig(region: string): RegionConfig {
  return regionConfigs[region] || regionConfigs["İç Anadolu"];
}

function getCityMetadata(city: CityData): CityMetadata | null {
  const slug = `${city.slug}-plise-perde`;
  return cityMetadata[slug] || null;
}

function generateDistrictGroups(city: CityData, meta: CityMetadata | null): { tier: string; districts: string[]; description: string }[] {
  const districtCount = city.districts.length;
  const metaDistricts = meta?.popularDistricts || [];
  const metaDistrictNames = metaDistricts.map(d => d.name);

  function getDistrictNote(district: string): string {
    const found = metaDistricts.find(d => d.name === district);
    if (found) return ` (${found.note})`;
    return "";
  }

  if (city.priority) {
    const firstGroup = Math.min(Math.ceil(districtCount * 0.3), 5);
    const secondGroup = Math.min(Math.ceil(districtCount * 0.6), 10);
    const closeDistricts = city.districts.slice(0, firstGroup);
    const midDistricts = city.districts.slice(firstGroup, secondGroup);
    const farDistricts = city.districts.slice(secondGroup);

    return [
      {
        tier: "Aynı Gün Keşif & Montaj",
        districts: closeDistricts,
        description: meta
          ? `${meta.architecture} Bu ilçelerdeki ${closeDistricts.map(d => `${d}${getDistrictNote(d)}`).join(", ")} bölgelerinde sabah keşif, öğleden sonra montaj mümkündür. ${meta.economy} çalışanları için mesai saatleri dışında da randevu oluşturuyoruz.`
          : `Bu ilçeler ${city.name} merkezimize en yakın bölgeler olup, aynı gün içinde ücretsiz yerinde keşif ve montaj yapıyoruz.`,
      },
      {
        tier: "Ertesi Gün Keşif & Montaj",
        districts: midDistricts,
        description: meta
          ? `${midDistricts.map(d => `${d}${getDistrictNote(d)}`).join(", ")} ilçelerine ${city.name}'ın ${meta.population} nüfuslu yapısı gereği yoğun talebi karşılamak amacıyla ertesi gün montaj planlıyoruz. ${meta.landmarks ? meta.landmarks.slice(0, 2).join(" ve ") + " çevresindeki konutlar dahil" : ""} tüm bölgeyi kapsar.`
          : `Bu ilçelere ücretsiz yerinde keşif ile ertesi gün montaj gerçekleştiriyoruz.`,
      },
      {
        tier: "Haftalık Planlı Keşif",
        districts: farDistricts,
        description: meta
          ? `${farDistricts.map(d => `${d}${getDistrictNote(d)}`).join(", ")} ilçeleri ${city.name} merkezine uzak olduğundan haftalık planlı keşif günleri ile hizmet veriyoruz. ${meta.altitude} rakımdaki bu bölgelerde iklim koşulları ${meta.climateDetail.slice(0, 80)} nedeniyle kargo ile video keşif de pratik bir alternatiftir.`
          : `Bu ilçelere haftalık planlı keşif günleri ile ücretsiz hizmet veriyoruz.`,
      },
    ].filter((g) => g.districts.length > 0);
  }

  const firstGroup = Math.min(Math.ceil(districtCount * 0.4), 4);
  const closeDistricts = city.districts.slice(0, firstGroup);
  const farDistricts = city.districts.slice(firstGroup);

  return [
    {
      tier: "Haftalık Planlı Keşif",
      districts: closeDistricts,
      description: meta
        ? `${closeDistricts.map(d => `${d}${getDistrictNote(d)}`).join(", ")} ilçeleri ${city.name} merkez ve yakın çevresidir. ${meta.economy} Haftalık planlı keşif günlerimizde ${meta.landmarks ? meta.landmarks[0] + " çevresi dahil" : "tüm merkez bölge"} ücretsiz keşif yapıyoruz.`
        : `Bu ilçelere haftalık planlı keşif günleri ile ücretsiz yerinde keşif yapıyoruz.`,
    },
    {
      tier: "Aylık Planlı Keşif",
      districts: farDistricts,
      description: meta
        ? `${farDistricts.map(d => `${d}${getDistrictNote(d)}`).join(", ")} ilçeleri ${city.name}'ın dış halkasıdır. ${meta.climateDetail.slice(0, 100)} Bu uzak bölgelerde video keşif ile ölçü alıp kargo ile teslimat en hızlı seçenektir.`
        : `Bu ilçelere aylık planlı keşif turları ile hizmet veriyoruz.`,
    },
  ].filter((g) => g.districts.length > 0);
}

export function generateCitySections(city: CityData): CityContentSection[] {
  const rc = getRegionConfig(city.region);
  const meta = getCityMetadata(city);
  const districtGroups = generateDistrictGroups(city, meta);
  const districtCount = city.districts.length;

  const sections: CityContentSection[] = [];

  // 1. İklim ve kumaş — city-specific climate detail from metadata
  const climateIntro = meta
    ? `${city.name}, <strong>${city.region} Bölgesi</strong>'nde, ${meta.altitude} rakımda yer alır ve yaklaşık ${meta.population} nüfusa sahiptir. ${meta.climateDetail} ${meta.economy} Bu ekonomik ve iklimsel yapı, ${city.name} konutlarında pencere çözümlerini bölgeye özel planlamayı gerektirir.`
    : `${city.name}, <strong>${city.region} Bölgesi</strong>'nde yer alır. İklim koşulları bölgeye özgü kumaş seçimini zorunlu kılar.`;

  const kumasText = rc.kumasFn(city.name, meta);
  const kumasContext = meta
    ? `${city.name}'ın ${meta.landmarks ? meta.landmarks.slice(0, 2).join(" ve ") + " çevresindeki" : ""} tarihi ve modern binalarında pencere tipleri çeşitlilik gösterir. ${meta.architecture} Bu yapı stoğu göz önüne alındığında, ${kumasText}`
    : `${kumasText}`;

  sections.push({
    h2: `${city.name} İklim Koşulları ve Plise Perde Kumaş Seçimi`,
    paragraphs: [
      climateIntro,
      `${city.name} için kumaş önerimiz: ${kumasContext}`,
      `Tüm kumaş çeşitlerimizi ve teknik özelliklerini <a href="${rc.kumasLink}">plise perde çeşitleri</a> sayfamızdan inceleyebilirsiniz. ${meta ? `${city.name}'ın ${meta.altitude} rakımı ve ${meta.climateDetail.slice(0, 60)} koşullarında kumaş dayanıklılığı kritik öneme sahiptir.` : `${city.name} için uygun kumaşı seçerken bölgenin iklim koşullarını mutlaka göz önüne alın.`}`,
    ],
  });

  // 2. Model önerileri — city-specific economy and architecture context
  const modelText = rc.modelFn(city.name, meta);
  const modelContext = meta
    ? `${city.name}'da ${meta.economy} ${meta.architecture} Bu özellikler, ${city.name} konutlarında plise perde model seçimini şekillendirir. ${modelText}`
    : `${city.name} konutlarında en çok tercih edilen plise perde modelleri bölgenin iklim ve yaşam tarzına göre şekillenir. ${modelText}`;

  const modelClosing = meta
    ? `${city.name}'ın ${meta.popularDistricts ? meta.popularDistricts.slice(0, 2).map(d => d.name).join(" ve ") : "merkez"} bölgelerinde ${meta.popularDistricts ? meta.popularDistricts.slice(0, 2).map(d => d.note).join("; ") : ""} özellikleri nedeniyle farklı modeller tercih edilmektedir. <a href="${rc.modelLink}">Modeller sayfamızdan</a> tüm seçenekleri inceleyebilir, <a href="/plise-perde-fiyat-hesaplama/">fiyat hesaplama aracımız</a> ile tahmini bütçenizi görebilirsiniz. ${city.name} için her pencereye özel ölçü üretim yapıyoruz.`
    : `${city.name}'da uygulanacak plise perde modellerini <a href="${rc.modelLink}">modeller sayfamızdan</a> inceleyebilir, <a href="/plise-perde-fiyat-hesaplama/">fiyat hesaplama aracımız</a> ile tahmini bütçenizi görebilirsiniz.`;

  sections.push({
    h2: `${city.name} için Plise Perde Modelleri`,
    paragraphs: [
      modelContext,
      modelClosing,
    ],
  });

  // 3. Montaj sistemleri — city-specific altitude and architecture
  const montajText = rc.montajFn(city.name, meta);
  const montajContext = meta
    ? `${city.name}'da ${meta.altitude} rakım ve ${meta.climateDetail.slice(0, 80)} montaj sistemi seçimini doğrudan etkiler. ${meta.architecture} ${montajText}`
    : `${city.name}'da plise perde montajı için uygun sistem seçimi, pencere tipinize ve iklim koşullarına bağlıdır. ${montajText}`;

  const extraTipText = rc.extraTipFn(city.name, meta);
  const montajClosing = meta
    ? `Montaj sistemleri hakkında detaylı bilgiyi <a href="${rc.montajLink}">sistemler sayfamızdan</a> alabilirsiniz. ${city.name} bölgesinde ${meta.popularDistricts ? meta.popularDistricts[0].name + " başta olmak üzere" : ""} <a href="/montaj/">profesyonel montaj hizmeti</a> sunuyor, video keşif ile ölçü alıp kargo ile teslimat da yapabiliyoruz. ${extraTipText}`
    : `Montaj sistemleri hakkında detaylı bilgiyi <a href="${rc.montajLink}">sistemler sayfamızdan</a> alabilirsiniz. ${city.name} bölgesinde <a href="/montaj/">profesyonel montaj hizmeti</a> sunuyor, video keşif ile ölçü alıp kargo ile teslimat da yapabiliyoruz. ${extraTipText}`;

  sections.push({
    h2: `${city.name} Plise Perde Montaj Sistemleri`,
    paragraphs: [
      montajContext,
      montajClosing,
    ],
  });

  // 4. İlçe grupları — her grup için city-specific description
  const districtParagraphs: string[] = [];
  for (const group of districtGroups) {
    const districtList = group.districts.join(", ");
    districtParagraphs.push(
      `<strong>${group.tier}:</strong> ${districtList}. ${group.description}`
    );
  }
  districtParagraphs.push(
    `${city.name}'nin ${districtCount} ilçesinin tamamında plise perde hizmeti sunuyoruz. İlçeniz listede yoksa <a href="/iletisim/">iletişim sayfamızdan</a> bize ulaşın — ${city.name} çevresindeki tüm yerleşim yerlerine hizmet veriyoruz.`
  );

  sections.push({
    h2: `${city.name}'nin ${districtCount} İlçesinde Plise Perde Hizmeti`,
    paragraphs: districtParagraphs,
  });

  // 5. İlçe detay tablosu
  const serviceOptions = [
    "WhatsApp ile video keşif",
    "Telefon ile sipariş",
    "E-posta ile teklif al",
    "Kargo ile Türkiye geneli teslimat",
    "WhatsApp + video keşif",
    "Telefon + kargo teslimat",
    "E-posta + ölçü alımı",
    "Video keşif + kargo gönderimi",
  ];
  const districtRows = city.districts.map((d, i) => [
    d,
    serviceOptions[i % serviceOptions.length],
  ]);

  sections.push({
    h2: `${city.name} İlçeleri — Hizmet Detayları`,
    paragraphs: [],
    table: {
      headers: ["İlçe", "Hizmet Seçeneği"],
      rows: districtRows,
      caption: `${city.name} ilçeleri ve plise perde hizmet seçenekleri`,
    },
  });

  // 6. Keşif ve ölçü alma — city-specific economy context
  const kesifContext = meta
    ? `${city.name} bölgesinde plise perde siparişi vermek için şu adımları izleyebilirsiniz: <strong>1) Keşif talebi</strong> — <a href="/kesif/">ücretsiz keşif formunu</a> doldurun veya WhatsApp'tan ulaşın. <strong>2) Ölçü alma</strong> — ${meta.architecture} ${city.name}'da yerinde keşif yaparak pencere ölçülerinizi alıyoruz. Video keşif ile de ölçü alabilirsiniz. <strong>3) Teklif</strong> — Ölçülere göre <a href="/plise-perde-fiyat-hesaplama/">fiyat hesaplama</a> yapıp teklif sunuyoruz. <strong>4) Üretim</strong> — Onay sonrası özel ölçü üretim başlar, 2-3 iş günü sürer. <strong>5) Montaj</strong> — ${city.name} bölgesinde profesyonel montaj yapıyoruz, veya kargo ile teslimat sağlıyoruz.`
    : `${city.name} bölgesinde plise perde siparişi vermek için şu adımları izleyebilirsiniz: <strong>1) Keşif talebi</strong> — <a href="/kesif/">ücretsiz keşif formunu</a> doldurun veya WhatsApp'tan ulaşın. <strong>2) Ölçü alma</strong> — Yerinde keşif yaparak pencere ölçülerinizi alıyoruz. Video keşif ile de ölçü alabilirsiniz. <strong>3) Teklif</strong> — Ölçülere göre <a href="/plise-perde-fiyat-hesaplama/">fiyat hesaplama</a> yapıp teklif sunuyoruz. <strong>4) Üretim</strong> — Onay sonrası özel ölçü üretim başlar, 2-3 iş günü sürer. <strong>5) Montaj</strong> — ${city.name} bölgesinde profesyonel montaj yapıyoruz, veya kargo ile teslimat sağlıyoruz.`;

  const kesifClosing = meta
    ? `Ölçü alırken dikkat edilmesi gereken noktaları <a href="/plise-perde-olcusu-nasil-alinir/">ölçü alma rehberimizden</a> öğrenebilirsiniz. ${city.name} için yerinde keşif yapıyorsak, ölçü alma işlemi bizim tarafımızdan yapılır. ${meta.economy} ${meta.population} nüfuslu ${city.name}'da yoğun talep nedeniyle keşif randevularını önceden almanızı öneririz.`
    : `Ölçü alırken dikkat edilmesi gereken noktaları <a href="/plise-perde-olcusu-nasil-alinir/">ölçü alma rehberimizden</a> öğrenebilirsiniz. ${city.name} için yerinde keşif yapıyorsak, ölçü alma işlemi bizim tarafımızdan yapılır — sizin ekstra bir şey yapmanız gerekmez.`;

  sections.push({
    h2: `${city.name} Plise Perde Keşif ve Ölçü Alma Süreci`,
    paragraphs: [
      kesifContext,
      kesifClosing,
    ],
  });

  // 7. Kullanım alanları — city-specific landmarks and economy
  const landmarkArea = meta?.landmarks
    ? meta.landmarks.slice(0, 2).join(" ve ") + " çevresindeki"
    : city.name + "'daki";
  const kullanımContext = meta
    ? `${city.name}'da plise perde; <a href="/salon-plise-perde/">salon</a>, <a href="/yatak-odasi-plise-perde/">yatak odası</a>, <a href="/cocuk-odasi-plise-perde/">çocuk odası</a>, <a href="/mutfak-plise-perde/">mutfak</a>, <a href="/banyo-wc-plise-perde/">banyo ve WC</a> gibi ev içi mekanlarda kullanılır. ${meta.economy} ${landmarkArea} <a href="/ofis-plise-perde/">ofis</a>, <a href="/kafe-restoran-plise-perde/">kafe ve restoran</a>, <a href="/otel-plise-perde/">otel</a>, <a href="/hastane-plise-perde/">hastane</a> ve <a href="/magaza-plise-perde/">mağaza</a> gibi ticari mekanlarda da plise perde uyguluyoruz.`
    : `${city.name}'da plise perde; <a href="/salon-plise-perde/">salon</a>, <a href="/yatak-odasi-plise-perde/">yatak odası</a>, <a href="/cocuk-odasi-plise-perde/">çocuk odası</a>, <a href="/mutfak-plise-perde/">mutfak</a>, <a href="/banyo-wc-plise-perde/">banyo ve WC</a> gibi ev içi mekanlarda kullanılır. ${city.name}'daki <a href="/ofis-plise-perde/">ofis</a>, <a href="/kafe-restoran-plise-perde/">kafe ve restoran</a>, <a href="/otel-plise-perde/">otel</a>, <a href="/hastane-plise-perde/">hastane</a> ve <a href="/magaza-plise-perde/">mağaza</a> gibi ticari mekanlarda da plise perde uyguluyoruz.`;

  const kullanımClosing = meta
    ? `${city.name} bölgesindeki ${meta.architecture} ${meta.popularDistricts ? meta.popularDistricts.slice(0, 2).map(d => d.name + " bölgesindeki " + d.note).join("; ") : ""} konutlarda geniş pencere ve çatı pencereleri için özel ölçü plise perde üretiyoruz. <a href="/cam-balkon-plise-perde/">Cam balkon</a> sistemlerinde de plise perde uygulaması yapıyoruz. ${city.name}'da <a href="/plise-perde-kullanim-alanlari/">kullanım alanları</a> sayfamızdan tüm uygulama bölgelerini görebilirsiniz.`
    : `${city.name} bölgesindeki <a href="/villa-plise-perde/">villa</a> ve <a href="/prefabrik-ev-plise-perde/">prefabrik ev</a> konutlarında geniş pencere ve çatı pencereleri için özel ölçü plise perde üretiyoruz. <a href="/cam-balkon-plise-perde/">Cam balkon</a> sistemlerinde de plise perde uygulaması yapıyoruz. ${city.name}'da <a href="/plise-perde-kullanim-alanlari/">kullanım alanları</a> sayfamızdan tüm uygulama bölgelerini görebilirsiniz.`;

  sections.push({
    h2: `${city.name}'da Plise Perde Kullanım Alanları`,
    paragraphs: [
      kullanımContext,
      kullanımClosing,
    ],
  });

  // 8. Fiyat bilgisi — city-specific population and economy context
  const fiyatContext = meta
    ? `${city.name} bölgesinde plise perde fiyatları, pencere ölçüsü, kumaş tipi ve montaj sistemine göre değişir. ${meta.population} nüfuslu ${city.name}'da ${meta.economy} ${meta.architecture} Bu yapısal çeşitlilik, fiyat aralığını geniş tutar. <a href="/plise-perde-fiyatlari/">Güncel fiyat listemizde</a> m² birim fiyatları KDV dahil olarak belirtilmiştir. ${city.name} için ücretsiz keşif sonrası net fiyat teklifi sunuyoruz — sürpriz maliyet çıkmaz.`
    : `${city.name} bölgesinde plise perde fiyatları, pencere ölçüsü, kumaş tipi ve montaj sistemine göre değişir. <a href="/plise-perde-fiyatlari/">Güncel fiyat listemizde</a> m² birim fiyatları KDV dahil olarak belirtilmiştir. ${city.name} için ücretsiz keşif sonrası net fiyat teklifi sunuyoruz — sürpriz maliyet çıkmaz.`;

  const fiyatClosing = meta
    ? `Fiyat hesaplama aracımızı <a href="/plise-perde-fiyat-hesaplama/">buradan</a> kullanarak tahmini bütçenizi görebilirsiniz. ${city.name} bölgesinde yerinde keşif ve montaj ücretsizdir — sadece perde ücreti ödersiniz. ${meta.popularDistricts ? meta.popularDistricts[0].name + " ve " + (meta.popularDistricts[1]?.name || "çevre") + " bölgelerinde" : "Tüm bölgede"} kargo ile teslimatta kargo ücreti eklenir. <a href="/odeme-ve-taksit-secenekleri/">Ödeme ve taksit seçenekleri</a> sayfamızdan finansal detayları görebilirsiniz.`
    : `Fiyat hesaplama aracımızı <a href="/plise-perde-fiyat-hesaplama/">buradan</a> kullanarak tahmini bütçenizi görebilirsiniz. ${city.name} bölgesinde yerinde keşif ve montaj ücretsizdir — sadece perde ücreti ödersiniz. Kargo ile teslimatta ise kargo ücreti eklenir. <a href="/odeme-ve-taksit-secenekleri/">Ödeme ve taksit seçenekleri</a> sayfamızdan finansal detayları görebilirsiniz.`;

  sections.push({
    h2: `${city.name} Plise Perde Fiyatları`,
    paragraphs: [
      fiyatContext,
      fiyatClosing,
    ],
  });

  // 9. Hizmet bölgesi — city-specific neighboring cities
  const neighborLinks = meta?.neighboringCities
    ? meta.neighboringCities.map(n => {
        const slug = n.toLowerCase()
          .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
          .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
          .replace(/\s/g, "-");
        return `<a href="/${slug}-plise-perde/">${n}</a>`;
      }).join(", ")
    : null;

  const bolgeContext = meta
    ? `${city.name} plise perde sayfası, <a href="/hizmet-bolgeleri/">hizmet bölgeleri</a> ana sayfasının bir alt sayfasıdır. ${meta.population} nüfuslu ${city.name}, ${meta.altitude} rakımda ${city.region} Bölgesi'nde yer alır. ${meta.economy} ${city.name} ve ilçelerinde video keşif ile ölçü alıp, kargo ile teslimat yapıyoruz.`
    : `${city.name} plise perde sayfası, <a href="/hizmet-bolgeleri/">hizmet bölgeleri</a> ana sayfasının bir alt sayfasıdır. Türkiye'nin 81 ilinde plise perde hizmeti sunuyoruz. ${city.name} ve ilçelerinde video keşif ile ölçü alıp, kargo ile teslimat yapıyoruz.`;

  const bolgeClosing = neighborLinks
    ? `${city.name} çevresindeki ${neighborLinks} illerinde de plise perde hizmeti veriyoruz. ${meta ? `${city.name}'ın ${meta.neighboringCities.length} komşu ili ile birlikte bölgesel plise perde ihtiyacını karşılıyoruz.` : ""} ${city.name} bölgesine özel sorularınızı <a href="/iletisim/">iletişim sayfamızdan</a> sorabilir, <a href="/sikca-sorulan-sorular/">sıkça sorulan sorular</a> sayfamızı inceleyebilirsiniz.`
    : `Komşu illerde de hizmet veriyoruz — ${city.name} çevresindeki şehirlerde plise perde montajı için <a href="/hizmet-bolgeleri/">hizmet bölgeleri</a> sayfamızı ziyaret edebilirsiniz. ${city.name} bölgesine özel sorularınızı <a href="/iletisim/">iletişim sayfamızdan</a> sorabilir, <a href="/sikca-sorulan-sorular/">sıkça sorulan sorular</a> sayfamızı inceleyebilirsiniz.`;

  sections.push({
    h2: `${city.name} Plise Perde Hizmet Bölgesi`,
    paragraphs: [
      bolgeContext,
      bolgeClosing,
    ],
  });

  return sections;
}

export function generateCityFaqs(city: CityData): CityFaqItem[] {
  const rc = getRegionConfig(city.region);
  const meta = getCityMetadata(city);
  const districtCount = city.districts.length;

  const faqs: CityFaqItem[] = [
    {
      question: `${city.name} plise perde fiyatları ne kadar?`,
      answer: meta
        ? `${city.name} bölgesinde plise perde fiyatları, pencere ölçüsü ve kumaş tipine göre değişir. ${meta.population} nüfuslu ${city.name}'da ${meta.architecture} ${meta.economy} Bu çeşitlilik fiyat aralığını geniş tutar. m² birim fiyatı KDV dahil olarak <a href="/plise-perde-fiyatlari/">fiyat listemizde</a> belirtilmiştir. ${city.name} bölgesinde yerinde keşif ve montaj ücretsizdir.`
        : `${city.name} bölgesinde plise perde fiyatları, pencere ölçüsü ve kumaş tipine göre değişir. m² birim fiyatı KDV dahil olarak <a href="/plise-perde-fiyatlari/">fiyat listemizde</a> belirtilmiştir. Ücretsiz keşif sonrası net fiyat teklifi sunuyoruz. ${city.name} bölgesinde yerinde keşif ve montaj ücretsizdir.`,
    },
    {
      question: `${city.name} ilçelerine ücretsiz keşif geliyor musunuz?`,
      answer: meta
        ? `Evet, ${city.name}'nin ${districtCount} ilçesinin tamamında ücretsiz yerinde keşif yapıyoruz. ${city.priority ? "Merkez ilçelere aynı gün veya ertesi gün, uzak ilçelere haftalık planlı keşif günleri ile geliyoruz." : "Haftalık ve aylık planlı keşif turları ile tüm ilçelere hizmet veriyoruz."} ${meta.popularDistricts ? meta.popularDistricts.slice(0, 2).map(d => d.name + " (" + d.note + ")").join(" ve ") + " başta olmak üzere" : ""} ${meta.altitude} rakımdaki tüm yerleşim yerlerinde video keşif ile de ölçü alabiliyoruz.`
        : `Evet, ${city.name}'nin ${districtCount} ilçesinin tamamında ücretsiz yerinde keşif yapıyoruz. ${city.priority ? "Merkez ilçelere aynı gün veya ertesi gün, uzak ilçelere haftalık planlı keşif günleri ile geliyoruz." : "Haftalık ve aylık planlı keşif turları ile tüm ilçelere hizmet veriyoruz."} Video keşif ile de ölçü alabiliyoruz.`,
    },
    {
      question: `${city.name} için hangi plise perde modelini önerirsiniz?`,
      answer: meta
        ? `${city.name} ${city.region} Bölgesi'nde, ${meta.altitude} rakımda yer alır. ${meta.climateDetail.slice(0, 120)} ${meta.architecture} Bu koşullarda ${rc.modelFn(city.name, meta).replace(/<[^>]+>/g, "").slice(0, 180)}... Detaylı bilgi için <a href="/plise-perde-modelleri/">modeller sayfamızı</a> inceleyebilirsiniz.`
        : `${city.name} ${city.region} Bölgesi'nde yer aldığı için ${rc.modelFn(city.name, meta).replace(/<[^>]+>/g, "").slice(0, 200)}... Detaylı bilgi için <a href="/plise-perde-modelleri/">modeller sayfamızı</a> inceleyebilirsiniz.`,
    },
    {
      question: `${city.name} bölgesinde kargo ile teslimat yapıyor musunuz?`,
      answer: meta
        ? `Evet, ${city.name} ve tüm ilçelerine kargo ile plise perde teslimatı yapıyoruz. ${meta.economy} ${meta.population} nüfuslu ${city.name}'da yoğun talebi karşılamak için video keşif ile ölçü alıp, özel üretim yapıp kargo ile gönderiyoruz. ${city.priority ? "ücretsiz yerinde montaj hizmeti mevcuttur" : "montaj hizmeti mevcuttur"}. ${meta.neighboringCities ? meta.neighboringCities.slice(0, 3).join(", ") + " gibi komşu illere de" : ""} kargo teslimatında video rehberlik ile kendiniz de monte edebilirsiniz.`
        : `Evet, ${city.name} ve tüm ilçelerine kargo ile plise perde teslimatı yapıyoruz. Video keşif ile ölçü alıp, özel üretim yapıp kargo ile gönderiyoruz. ${city.name} bölgesinde yerinde montaj da yapıyoruz — ${city.priority ? "ücretsiz yerinde montaj hizmeti mevcuttur" : "montaj hizmeti mevcuttur"}. Kargo teslimatında video rehberlik ile kendiniz de monte edebilirsiniz.`,
    },
    {
      question: `${city.name} plise perde montajı ne kadar sürer?`,
      answer: meta
        ? `${city.name} bölgesinde standart bir pencere için montaj 15-30 dakika sürer. ${meta.architecture} Keşif sonrası üretim 2-3 iş günü, ardından montaj için geliriz. ${city.priority ? "Merkez ilçelerde aynı gün, uzak ilçelerde ertesi gün veya haftalık planlı montaj yapıyoruz." : "Haftalık planlı montaj günleri ile hizmet veriyoruz."} ${meta.climateDetail.slice(0, 80)} Toplu projelerde süre uzar.`
        : `${city.name} bölgesinde standart bir pencere için montaj 15-30 dakika sürer. Keşif sonrası üretim 2-3 iş günü, ardından montaj için geliriz. ${city.priority ? "Merkez ilçelerde aynı gün, uzak ilçelerde ertesi gün veya haftalık planlı montaj yapıyoruz." : "Haftalık planlı montaj günleri ile hizmet veriyoruz."} Toplu projelerde (çok pencereli) süre uzar.`,
    },
  ];

  return faqs;
}
