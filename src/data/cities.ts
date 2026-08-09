export interface CityContentSection {
  h2: string;
  paragraphs: string[];
  table?: { headers: string[]; rows: string[][]; caption?: string };
}

export interface CityFaqItem {
  question: string;
  answer: string;
}

export interface CityData {
  name: string;
  slug: string;
  region: string;
  priority: boolean;
  districts: string[];
  intro: string;
  seoTitle: string;
  seoDescription: string;
  sections: CityContentSection[];
  faqItems: CityFaqItem[];
}

export const cities: CityData[] = [
  {
    name: "İstanbul",
    slug: "istanbul-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"],
    intro: "Esenyalı'daki üretim tesisimizden <strong>İstanbul'un 39 ilçesinin tamamına</strong> kapıdan kapıya plise perde servisi götürüyoruz. Megaşehirin her köşesinde — Boğaz sırtlarından Silivri son durağına, Adalar'dan Şile'nin kumsallarına kadar — yerinde inceleme ve profesyonel montaj gerçekleştiriyoruz.",
    seoTitle: "İstanbul Plise Perde | 39 İlçe Keşif & Montaj",
    seoDescription: "Esenyalı merkezli üretimden İstanbul'un 39 ilçesine plise perde: yerinde inceleme, aynı gün Anadolu yakası montaj, ertesi gün Avrupa yakası servis.",
    sections: [
      {
        h2: "Megaşehirin İki Yakasında Plise Perde Üretimi",
        paragraphs: [
          "Esenyalı'daki imalathanemizden her sabah iki ayrı montaj ekibi yola çıkar: biri Anadolu yakasına, diğeri Avrupa yakasına. <strong>Pendik, Kartal, Maltepe, Tuzla, Sancaktepe, Ataşehir</strong> ilçelerinde inceleme ve montajı aynı gün içinde tamamlıyoruz. <strong>Kadıköy, Üsküdar, Ümraniye, Çekmeköy</strong> bölgelerinde ertesi gün kurulum yapıyoruz.",
          "Avrupa yakasında <strong>Bakırköy, Bahçelievler, Esenler, Güngören, Bağcılar, Zeytinburnu</strong> merkez hattında yerinde tetkik sonrası ertesi gün montaj sağlıyoruz. <strong>Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece, Küçükçekmece, Başakşehir</strong> güzergahında haftalık belirlenen günlerde servis veriyoruz. <strong>Çatalca, Silivri, Arnavutköy</strong> uzak ilçelerine ise aylık tur programı ile ulaşıyoruz.",
        ],
      },
      {
        h2: "Boğaz ve Sahil İkliminde Kumaş Seçimi",
        paragraphs: [
          "İstanbul, Karadeniz ile Marmara'nın kucaklaştığı bir iklim kuşağında yer alır. <strong>Sarıyer, Beykoz, Şile</strong> hattında Karadeniz'in serin ve nemli havası, <strong>Kadıköy, Maltepe, Pendik, Tuzla</strong> sahilinde Marmara'nın ılıman ama tuzlu esintisi hüküm sürer. Bu ilçelerde kumaş seçiminde <strong>nem ve tuz dirençli kaplamalı modelleri</strong> ilk sıraya koyuyoruz.",
          "İç kesimdeki <strong>Ümraniye, Sultangazi, Esenler, Bağcılar</strong> gibi ilçelerde kara iklimi daha belirgin olduğundan standart kumaşlar yeterli olur. <strong>Adalar</strong> bölgesinde (Büyükada, Heybeliada, Burgazada, Kınalıada) vapur ile ulaşarak sezonluk (Nisan-Ekim) inceleme yapıyor, adanın tuzlu havasına özel kumaş öneriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Esenyalı'daki tesisinizden İstanbul'un hangi ilçelerine aynı gün montaj yapıyorsunuz?", answer: "Pendik, Kartal, Maltepe, Tuzla, Sancaktepe ve Ataşehir ilçelerinde inceleme ve montajı aynı gün içinde tamamlıyoruz. Bu bölgelere sabah inceleme, öğleden sonra montaj şeklinde çalışıyoruz." },
      { question: "İstanbul Avrupa yakasına ne sürede montaja geliyorsunuz?", answer: "Bakırköy, Bahçelievler, Esenler, Güngören ve Zeytinburnu'na yerinde tetkik sonrası ertesi gün montaj yapıyoruz. Esenyurt, Avcılar, Beylikdüzü ve Büyükçekmece'ye haftalık belirlenen günlerde ulaşıyoruz." },
      { question: "Adalar'a plise perde monte ediyor musunuz?", answer: "Evet, Büyükada, Heybeliada, Burgazada ve Kınalıada'ya Nisan-Ekim arası sezonluk inceleme günleri düzenliyoruz. Vapur ile ulaşım sağlıyor, adanın tuzlu deniz havasına özel tuz dirençli kaplamalı kumaş öneriyoruz." },
    ],
  },
  {
    name: "Kocaeli",
    slug: "kocaeli-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez"],
    intro: "İstanbul'daki fabrikamıza komşu <strong>Kocaeli'nin 12 ilçesine</strong> günlük plise perde sevkiyatı yapıyoruz. Gebze'den Kandıra'ya kadar Körfez'in her köşesinde yerinde inceleme ve profesyonel montaj hizmeti sunuyor, sanayi bölgesinin kurumsal taleplerine özel çözümler üretiyoruz.",
    seoTitle: "Kocaeli Plise Perde | Gebze, İzmit, Gölcük Yerinde Keşif",
    seoDescription: "Kocaeli'nin 12 ilçesinde plise perde: Gebze ve Darıca'ya aynı gün montaj, İzmit ve Gölcük'e ertesi gün servis. İstanbul sınırından günlük keşif ekibi.",
    sections: [
      {
        h2: "Sanayi Başkentinde Fabrika ve Lojman Perde Sistemleri",
        paragraphs: [
          "Kocaeli, Türkiye'nin <strong>en yoğun sanayi üssü</strong> olarak fabrika yurtları, idari binalar ve personel lojmanlarında toplu perde ihtiyacı yaratır. Gebze OSB, Dilovası OSB ve İzmit organize bölgelerindeki kurumsal projelere <strong>alev geciktirmeli B1 sınıfı dokuma</strong> ile toplu üretim ve montaj yapıyoruz. Kurumsal faturalı teslimat sağlıyoruz.",
          "Kartepe'nin 1.600 metrelik zirvesinden esen soğuk hava, eteklerindeki konutlarda ısı kaybını artırır. Bu bölgede <strong>petek hücre yapılı ısı tutucu plise perde</strong> tercih ediliyor. Körfez sahilindeki Gölcük, Karamürsel ve Körfez ilçelerinde ise deniz nemine karşı küflenmeyen kumaş tipini öneriyoruz.",
        ],
      },
      {
        h2: "Körfez Hattında Mesafeye Göre Servis Kademeleri",
        paragraphs: [
          "Üretim merkezimize en yakın kuşakta <strong>Gebze, Darıca, Çayırova ve Dilovası</strong> yer alır; ilçe sınırına sadece 10-20 km mesafededir ve aynı gün içinde hem inceleme hem montaj tamamlanır. İkinci kademede <strong>İzmit, Derince ve Körfez</strong> bulunur; TEM ve D100 karayolu üzerinden ertesi gün servis veriyoruz. Üçüncü kuşak <strong>Gölcük, Karamürsel, Başiskele ve Kartepe</strong> için haftalık sefer günleri ayırıyoruz. <strong>Kandıra</strong> ise Karadeniz sahiline uzandığından aylık tur takvimimize dahildir.",
        ],
      },
    ],
    faqItems: [
      { question: "Gebze OSB bölgesindeki fabrika yurtlarına toplu plise perde montajı yapıyor musunuz?", answer: "Evet, Gebze ve Dilovası OSB'deki fabrika yurtları ve personel lojmanları için alev geciktirmeli B1 sınıfı dokuma ile toplu üretim ve montaj yapıyoruz. Kurumsal faturalı teslimat sağlıyoruz." },
      { question: "Kartepe'deki dağ eteği konutumuz için hangi perde modelini önerirsiniz?", answer: "Kartepe zirvesinden gelen soğuk hava pencereden içeri sızar. Bu bölgede petek hücre yapılı ısı tutucu plise perde öneriyoruz; hücreli yapı soğuk havayı filtreleyerek ısıtma giderini düşürür." },
    ],
  },
  {
    name: "Sakarya",
    slug: "sakarya-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Adapazarı", "Akyazı", "Arifiye", "Erenler", "Ferizli", "Geyve", "Hendek", "Karapürçek", "Karasu", "Kaynarca", "Kocaali", "Pamukova", "Sapanca", "Serdivan", "Söğütlü", "Taraklı"],
    intro: "Sakarya'nın 16 ilçesinde plise perde uygulamaları yapıyoruz. <strong>Adapazarı, Serdivan, Erenler</strong> merkez üçgenine ertesi gün montaj, Sapanca göl havzasındaki villalara özel inceleme günleri düzenliyoruz. 1999 depreminin yara izlerini taşıyan bu topraklarda hafif ve esnek montaj sistemleriyle güvenli perde çözümleri sunuyoruz.",
    seoTitle: "Sakarya Plise Perde | Adapazarı, Serdivan Keşif",
    seoDescription: "Sakarya plise perde: 16 ilçe, deprem güvenli hafif montaj, Sapanca villa projeleri, Karasu sahili için nem dayanımlı kumaş, ertesi gün servis.",
    sections: [
      {
        h2: "Deprem Bölgesinde Hafif ve Esnek Montaj Sistemleri",
        paragraphs: [
          "Sakarya, 17 Ağustos 1999 depreminin merkez üssüdür ve bu nedenle binalarda <strong>ağır ve sarkık perde sistemlerinden kaçınılması</strong> önerilir. Plise perde, pencere kasası içine yerleştirilen 200-400 gram arası hafif bir sistemdir. Vidalı veya çift taraflı bantlı montajı, sarsıntı anında perdenin düşme riskini ortadan kaldırır.",
          "Sapanca Gölü'nün kıyısındaki villa ve müstakil evlerde, geniş cam yüzeyleri için <strong>katlanır plise perde</strong> uyguluyoruz. Göl manzarasını engellemeyen ince tül kumaş ve tam karartma seçeneğini aynı sistemde sunuyoruz. Karasu ve Kocaali'nin Karadeniz sahiline bakan konutlarında ise nemli rüzgara dayanıklı nem bariyerli dokuma kullanıyoruz.",
        ],
      },
      {
        h2: "Ova, Göl ve Sahil Hattında Bölgesel Servis Çizgisi",
        paragraphs: [
          "D100 karayolu üzerindeki <strong>Adapazarı, Serdivan, Erenler ve Arifiye</strong> merkez dörtlüsüne ertesi gün inceleme ve montaj ulaştırıyoruz. Ovanın kuzeyine doğru uzanan <strong>Akyazı, Hendek, Geyve ve Pamukova</strong> ilçelerinde haftalık sefer günleri düzenliyoruz. Karadeniz sahil şeridindeki <strong>Karasu, Kocaali ve Kaynarca</strong> için aylık tur takvimi uyguluyoruz. <strong>Sapanca</strong> ise villa projelerine özel randevu günleriyle hizmet alır.",
        ],
      },
    ],
    faqItems: [
      { question: "Deprem bölgesinde yaşıyoruz, plise perde sarsıntıda düşer mi?", answer: "Hayır, plise perde pencere kasası içine monte edilen 200-400 gram arası hafif bir sistemdir. Vidalı veya çift taraflı bantlı montaj ile sarsıntıya dayanıklı kurulur; deprem anında düşme riski taşımaz." },
      { question: "Sapanca'daki göl manzaralı villamız için hangi perde sistemini önerirsiniz?", answer: "Sapanca Gölü manzaralı geniş cam yüzeyleri için katlanır plise perde öneriyoruz. İnce tül kumaş manzarayı engellemez, aynı sistemde tam karartma seçeneği de mevcuttur. Motorlu seçenekler de sunuyoruz." },
    ],
  },
  {
    name: "Yalova",
    slug: "yalova-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Altınova", "Armutlu", "Çınarcık", "Çiftlikköy", "Termal", "Yalova merkez"],
    intro: "Yalova'nın 6 ilçesinde plise perde çözümleri sunuyoruz. İstanbul atölyesinden <strong>vapur ile 45 dakikada</strong> ulaştığımız bu küçük ama turistik ilde, termal kaynakların çevresindeki spa otellerinden Çınarcık sahilinin yazlık dairelerine kadar geniş bir yelpazeye hizmet veriyoruz.",
    seoTitle: "Yalova Plise Perde | Termal, Çınarcık, Armutlu Yerinde Keşif",
    seoDescription: "Yalova plise perde: 6 ilçe, termal oteller için anti-buhar kumaş, Çınarcık yazlıkları için gece-gündüz sistemleri, vapur ile keşif.",
    sections: [
      {
        h2: "Termal Su Buharına Dayanıklı Perde Kumaşları",
        paragraphs: [
          "Yalova, <strong>termal turizm</strong> konusunda Türkiye'nin öncü illerinden biridir. Termal ve Armutlu ilçelerindeki spa otelleri, kaplıca pansiyonları ve termal konutlarda sürekli yükselen mineral buharı, standart kumaşları 2-3 yıl içinde sarartır ve küflendirir. Bu bölge için <strong>anti-buhar kaplamalı özel kumaş tipini</strong> üretip monte ediyoruz.",
          "Çınarcık sahil şeridindeki yazlık apartmanlarda Marmara'nın nemli esintisi ve güneş açısı farklı bir ihtiyaç yaratır. Bu konutlarda <strong>gece-gündüz (güneşlik + karartma) kombinasyonlu</strong> plise perde uyguluyoruz: gündüz ince tül ile manzarayı korur, gece tam karartma ile uyku sağlar. Yalova merkez ve Altınova'da yıl boyu oturulan daireler için standart modellerimiz yeterlidir.",
        ],
      },
      {
        h2: "Vapur Seferlerine Bağlı İnceleme Günü Takvimi",
        paragraphs: [
          "İstanbul sahilinden kalkan vapur ile 45 dakikada Yalova'ya ulaşırız. <strong>Yalova merkez, Altınova ve Çiftlikköy</strong> ilçelerine haftalık sefer günü ayırıyoruz; sabah vapuruyla inip öğleden sonra incelemeleri tamamlıyoruz. <strong>Termal, Çınarcık ve Armutlu</strong> ilçeleri ise aylık tur programımıza dahildir; bu bölgelere sezonluk yoğunluğa göre ek seferler ekliyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Yalova'ya vapur ile mi geliyorsunuz, keşif ücreti alıyor musunuz?", answer: "Evet, İstanbul atölyesinden vapur ile 45 dakikada Yalova'ya ulaşıyoruz. İnceleme tamamen masrafsızdır; vapur masrafını biz karşılıyoruz. Yalova merkez ve Altınova'ya haftalık, Termal ve Çınarcık'a aylık belirlenen günlerde geliyoruz." },
      { question: "Termal otelimizdeki spa bölümü için hangi kumaşı önerirsiniz?", answer: "Termal su buharı mineral içerir ve standart kumaşları sarartıp küflendirir. Termal ve Armutlu'daki spa tesisleri için anti-buhar kaplamalı, yüksek nem dayanımlı özel kumaş tipini öneriyoruz." },
    ],
  },
  {
    name: "Düzce",
    slug: "duzce-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Akçakoca", "Cumayeri", "Çilimli", "Düzce merkez", "Gölyaka", "Gümüşova", "Kaynaşlı", "Yığılca"],
    intro: "Düzce'nin 8 ilçesinde plise perde montajı yapıyoruz. <strong>Karadeniz'in serin orman havası</strong> ve Akçakoca'nın tuzlu sahili, bu ilde iki farklı kumaş ihtiyacı yaratır. 1999 depreminden yeniden inşa edilen Düzce'de, modern pencerelere uygun vidasız klik sistemli hafif montaj uyguluyoruz.",
    seoTitle: "Düzce Plise Perde | Akçakoca, Düzce Merkez Yerinde Keşif",
    seoDescription: "Düzce'nin 8 ilçesinde plise perde: Akçakoca sahili için nem dirençli kumaş, orman bölgesi için nefes alabilen kumaş. Deprem güvenli vidasız klik montaj.",
    sections: [
      {
        h2: "Yeşil Düzce'nin Yüksek Nemli Orman İkliminde Kumaş Tercihi",
        paragraphs: [
          "Düzce, Türkiye'nin <strong>en yoğun orman örtüsüne sahip</strong> illerinden biridir ve Karadeniz iklim kuşağında yıllık nem oranı %70'in üzerindedir. Akçakoca sahilinde deniz tuzu ile birleşen nem, standart kumaşları 2-3 yılda sarartır. Bu bölge için <strong>nem dirençli kaplamalı dokuma</strong> uyguluyoruz; 5+ yıl dayanır.",
          "Düzce merkez, Çilimli, Cumayeri gibi iç kesimlerde ormanların terleyen havası farklı bir nem tipi yaratır. Burada <strong>nefes alabilen mikro gözenekli kumaş</strong> öneriyoruz; nemin kumaş içinde hapsolmasını engeller. Gölyaka ve Yığılca'nın yüksek rakımlı köylerinde kış soğukları için çift katmanlı ısı tutucu modeli de alternatif olarak sunuyoruz.",
        ],
      },
      {
        h2: "Sahilden Orman İçine Doğru Bölgesel İnceleme Günleri",
        paragraphs: [
          "Düzce'nin coğrafi yapısı üç kuşak halinde ele alınır. İç bölgede yer alan <strong>Düzce merkez, Çilimli, Cumayeri ve Kaynaşlı</strong> ilçelerinde her hafta belirlediğimiz günlerde masrafsız yerinde inceleme yapıyoruz. Karadeniz kıyısındaki <strong>Akçakoca</strong> ise sahil şeridi gereği ayrı bir rotadır; buraya her ayın belirlenen gününde ulaşıyoruz. Dağlık kesimdeki <strong>Gölyaka, Gümüşova ve Yığılca</strong> ise aylık tur programımız kapsamında ziyaret edilir.",
        ],
      },
    ],
    faqItems: [
      { question: "Akçakoca'daki yazlığımızın nemli havasında plise perde ne kadar dayanır?", answer: "Akçakoca'nın Karadeniz ikliminde yıllık nem %70'in üzerindedir. Standart kumaşlar 2-3 yılda sararırken, bizim önerdiğimiz nem dirençli kaplamalı dokuma 5+ yıl dayanır. Sahil bölgesinde bu kumaşı ilk sıraya koyuyoruz." },
      { question: "Düzce deprem bölgesi, pencereye perde monte etmek güvenli mi?", answer: "Evet, plise perde 200-400 gram arası hafif bir sistemdir ve pencere kasası içine monte edilir. Düzce'nin yeni binalarında vidasız klik sistemiyle delmeden, eski binalarda vidalı veya bantlı montajla sarsıntıya dayanıklı kurulum yapıyoruz." },
    ],
  },
  {
    name: "Bilecik",
    slug: "bilecik-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Bilecik merkez", "Bozüyük", "Gölpazarı", "İnhisar", "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar"],
    intro: "Bilecik'in 8 ilçesinde plise perde hizmeti veriyoruz. <strong>Marmara ile İç Anadolu'nun iklim geçiş noktası</strong> olan bu ilde, karasal soğuklara karşı petek yapılı ısı bariyerli modeller öneriyoruz. Osmanlı'nın ilk nefes aldığı Söğüt'teki tarihi evlerden Bozüyük'ün sanayi tesislerine kadar geniş bir konut yelpazesine çözüm üretiyoruz.",
    seoTitle: "Bilecik Plise Perde | Söğüt, Bozüyük, Osmaneli Yerinde Keşif",
    seoDescription: "Bilecik'in 8 ilçesinde plise perde: karasal iklim için petek yapılı ısı bariyeri, Söğüt tarihi evleri için özel ölçü, Bozüyük sanayisi için B1 kumaş.",
    sections: [
      {
        h2: "İklim Geçiş Kuşağında Isı Yalıtımlı Perde Stratejisi",
        paragraphs: [
          "Bilecik, Marmara'nın ılıman havasından İç Anadolu'nun <strong>sert karasal iklimine</strong> geçiş noktasında yer alır. Kışın -10 dereceye düşen sıcaklıklar, pencereden içeri sızan soğuk hava ile ısıtma giderini yükseltir. Bu nedenle Bilecik konutlarında <strong>petek yapılı ısı bariyerli plise perde</strong> modelini öneriyoruz; hücreli yapı soğuk havayı filtreler, oda sıcaklığını 2-3 derece korur.",
          "Söğüt ve Bilecik merkezdeki <strong>tarihi Osmanlı evleri</strong>, standart dışı pencere ölçülerine sahiptir. Bu binaların her penceresi için ayrı ölçü alıp özel üretim yapıyoruz. Kasaya içten takılan montaj yöntemiyle tarihi dokuya zarar vermeden kurulum tamamlıyoruz. Bozüyük sanayi bölgesindeki fabrika ve idari binalar için alev dayanımlı B1 sınıfı kumaş ile kurumsal çözümler sunuyoruz.",
        ],
      },
      {
        h2: "Osmanlı Topraklarında Bölge Bazlı İnceleme Takvimi",
        paragraphs: [
          "Bilecik'in küçük yüzölçümü nedeniyle ilçelerin tamamını tek bir aylık tur kapsamında ziyaret ediyoruz. Turun ilk durağında <strong>Bilecik merkez, Bozüyük, Osmaneli ve Pazaryeri</strong> ilçelerinde masrafsız yerinde inceleme yapıyoruz. Turun ikinci yarısında ise <strong>Söğüt, Gölpazarı, İnhisar ve Yenipazar</strong> ilçelerine uğrayarak aynı hizmet standardını sürdürüyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Bilecik'in karasal ikliminde petek yapılı perde ısı tasarrufu sağlar mı?", answer: "Evet, Bilecik kışın -10 dereceye düşer. Petek yapılı ısı bariyerli plise perde, pencereden sızan soğuk havayı hücreli yapısıyla filtreler ve oda sıcaklığını 2-3 derece yukarı tutar. Isıtma giderinde belirgin düşüş sağlar." },
      { question: "Söğüt'teki tarihi Osmanlı evimizin pencereleri için özel ölçü perde üretiyor musunuz?", answer: "Evet, Söğüt ve Bilecik merkezdeki tarihi evlerin standart dışı pencere ölçüleri için her pencereye ayrı ölçü alıp özel üretim yapıyoruz. Kasaya içten takılan montaj yöntemiyle tarihi dokuya zarar vermeden kurulum tamamlıyoruz." },
    ],
  },
  {
    name: "Bursa",
    slug: "bursa-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Büyükorhan", "Gemlik", "Gürsu", "Harmancık", "İnegöl", "İznik", "Karacabey", "Keles", "Kestel", "Mudanya", "Mustafakemalpaşa", "Nilüfer", "Osmangazi", "Orhangazi", "Yıldırım", "Yenişehir"],
    intro: "Bursa'nın 16 ilçesinde plise perde çözümleri sunuyoruz. <strong>Uludağ'ın zirvesinden Gemlik Körfezi'nin sahiline</strong> uzanan bu geniş coğrafyada, 1.500 metre rakımdan deniz seviyesine kadar farklı iklim kuşaklarına uygun perde modelleri uyguluyoruz. Osmangazi, Nilüfer ve Yıldırım merkez üçgenine ertesi gün montaj yapıyoruz.",
    seoTitle: "Bursa Plise Perde | Nilüfer, Osmangazi, Yıldırım Keşif",
    seoDescription: "Bursa plise perde: 16 ilçe, Uludağ villaları için honeycomb ısı yalıtımı, Gemlik sahili için anti-nem kumaş, İnegöl için kurumsal çözümler.",
    sections: [
      {
        h2: "Uludağ Eteklerinden Körfez Sahiline Rakıma Göre Perde",
        paragraphs: [
          "Bursa, <strong>tek bir ilde 2.543 metrelik bir dağ ile deniz seviyesindeki bir körfezi</strong> barındırır. Uludağ eteklerindeki Soğukpınar, Çobankaya ve Kestel yükseltilerindeki konutlarda kışın sert soğuklar yaşanır; bu bölgede <strong>honeycomb petek hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Mudanya, Gemlik ve Karacabey sahil kuşağında ise Marmara'nın nemli esintisine karşı anti-nem kaplamalı kumaş kullanıyoruz.",
          "Osmangazi ve Yıldırım'daki <strong>Osmanlı dönemi tarihi evler</strong>, dar ve yüksek pencere açıklıklarına sahiptir. Bu binalar için özel ölçü üretim yapıyoruz. Nilüfer'in modern site dairelerinde standart pencere ölçülerine hızlı üretim sağlıyoruz. İnegöl mobilya üretim bölgesindeki showroom ve ofisler için ise profesyonel perde çözümleri sunuyoruz.",
        ],
      },
      {
        h2: "Bursa'nın 16 İlçesinde Hızlı ve Planlı Servis Haritası",
        paragraphs: [
          "<strong>Osmangazi, Nilüfer, Yıldırım, Gürsu, Kestel</strong>: Ücretsiz keşif ile ertesi gün montaj. <strong>İnegöl, Mudanya, Orhangazi, Gemlik</strong>: Haftalık planlı keşif. <strong>Karacabey, Mustafakemalpaşa, Keles, Büyükorhan, Harmancık, İznik, Yenişehir</strong>: Aylık planlı keşif turları.",
        ],
      },
    ],
    faqItems: [
      { question: "Nilüfer ve Osmangazi'ye keşiften sonra ne sürede montaja geliyorsunuz?", answer: "Nilüfer, Osmangazi, Yıldırım, Gürsu ve Kestel ilçelerine ücretsiz yerinde keşif yapıp ertesi gün montaja geliyoruz. Pendik'ten O-5 üzerinden yaklaşık 2,5 saatte ulaşıyoruz." },
      { question: "Uludağ eteğindeki soğuk iklimli evimiz için hangi perde modelini önerirsiniz?", answer: "Uludağ eteklerinde kışın sert soğuklar yaşanır. Honeycomb petek hücreli ısı yalıtımlı plise perde öneriyoruz; petek yapısı pencereden sızan soğuk havayı filtreler ve oda sıcaklığını 2-3 derece yukarı tutar." },
    ],
  },
  {
    name: "Balıkesir",
    slug: "balikesir-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Altıeylül", "Ayvalık", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç", "Gönen", "Havran", "İvrindi", "Karesi", "Kepsut", "Manyas", "Marmara", "Savaştepe", "Sındırgı", "Susurluk"],
    intro: "Balıkesir'in 20 ilçesinde plise perde hizmeti veriyoruz. <strong>Türkiye'nin hem Ege hem Marmara kıyısına sahip tek ili</strong> olan Balıkesir'de, Edremit Körfezi'nin zeytinlik evlerinden Bandırma'nın sanayi konutlarına kadar iki farklı iklim kuşağına uygun perde çözümleri sunuyoruz.",
    seoTitle: "Balıkesir Plise Perde | Ayvalık, Edremit Keşif",
    seoDescription: "Balıkesir plise perde: 20 ilçe, Edremit Körfezi yazlıkları için güneşlik, iç kesim karasal iklim için honeycomb, Bandırma için anti-nem.",
    sections: [
      {
        h2: "Ege ve Marmara Kıyıları Arasında Bölgesel Kumaş Haritası",
        paragraphs: [
          "Balıkesir, <strong>iki ayrı denize kıyısı olan</strong> tek ilimizdir. Edremit Körfezi'nde (Ayvalık, Burhaniye, Edremit, Gömeç) Ege iklimi hüküm sürer: sıcak ve kuru yazlar, ılıman kışlar. Zeytinlikler arasındaki taş evler ve yazlık apartmanlarda <strong>güneşlik ince tül kumaş</strong> öneriyoruz; güneş ışığını filtreler, manzarayı engellemez.",
          "Bandırma, Erdek ve Gönen'de Marmara iklimi daha nemli ve rüzgarlıdır. Bu ilçelerde <strong>anti-nem kaplamalı kumaş</strong> kullanıyoruz. İç kesimde (Dursunbey, Sındırgı, Bigadiç, Kepsut) karasal iklim etkili olduğundan kış soğuklarına karşı <strong>karartma + honeycomb kombinasyonu</strong> öneriyoruz. Manyas Gölü çevresinde nem dengeli olduğundan standart kumaş yeterlidir.",
        ],
      },
      {
        h2: "Balıkesir Sahil ve İç Bölge Keşif Takvimi",
        paragraphs: [
          "<strong>Altıeylül, Karesi</strong>: Aylık planlı ücretsiz keşif. <strong>Bandırma, Erdek, Gönen, Susurluk</strong>: Aylık planlı keşif. <strong>Ayvalık, Burhaniye, Edremit, Gömeç, Havran</strong>: Yaz sezonunda haftalık, kışın aylık keşif. <strong>Bigadiç, Dursunbey, Sındırgı, Kepsut, Manyas, Marmara, Savaştepe, Balya, İvrindi</strong>: Aylık planlı keşif turları.",
        ],
      },
    ],
    faqItems: [
      { question: "Ayvalık'taki zeytinlik evimiz için yazın hangi perde kumaşı uygun?", answer: "Ayvalık ve Edremit Körfezi'nde Ege iklimi sıcak ve kurudur. Zeytinlik evleri için güneşlik ince tül kumaş öneriyoruz; güneş ışığını filtreler, manzarayı engellemez. Yaz sezonunda haftalık keşif günlerimiz mevcuttur." },
      { question: "Bandırma'da sanayi bölgesindeki ofisimiz için perde montajı yapıyor musunuz?", answer: "Evet, Bandırma'ya aylık planlı keşif günleri ile ücretsiz yerinde keşif yapıyoruz. Marmara ikliminin nemli havasına karşı anti-nem kaplamalı kumaş öneriyoruz. Erdek ve Gönen'e de aynı tur kapsamında hizmet veriyoruz." },
    ],
  },
  {
    name: "Çanakkale",
    slug: "canakkale-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Çanakkale merkez", "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Yenice"],
    intro: "Çanakkale'nin 12 ilçesinde plise perde montajı yapıyoruz. <strong>İki kıtayı bağlayan boğazın</strong> iki yakasında, Gelibolu Yarımadası'ndan Biga Ovası'na kadar geniş bir alana hizmet veriyoruz. Bozcaada ve Gökçeada adalarına Mayıs-Eylül arası sezonluk keşif günleri düzenliyoruz.",
    seoTitle: "Çanakkale Plise Perde | Gelibolu, Eceabat Keşif",
    seoDescription: "Çanakkale'nin 12 ilçesinde plise perde: Bozcaada ve Gökçeada'ya sezonluk keşif, Gelibolu tarihi binalar için özel ölçü, Biga sanayisi için B1 kumaş.",
    sections: [
      {
        h2: "Boğaz ve Adaların Tuzlu Havasında Özel Kumaş Çözümleri",
        paragraphs: [
          "Çanakkale Boğazı'nın iki yakasındaki konutlar, <strong>yıl boyu esen tuzlu deniz rüzgarına</strong> maruz kalır. Bozcaada ve Gökçeada'da bu etki daha da yoğundur. Adalardaki yazlık evler için <strong>anti-tuz kaplamalı kumaş</strong> üretiyoruz; tuz kristalleri kumaş gözeneklerini tıkamaz ve 5+ yıl dayanır. Sezonluk (Mayıs-Eylül) planlı keşif günleri ile adalara feribot ile ulaşıyoruz.",
          "Gelibolu ve Eceabat'taki <strong>tarihi binalar</strong>, standart dışı pencere ölçülerine sahiptir. Her pencere için ayrı ölçü alıp özel üretim yapıyoruz; pencere kasası içine montaj ile tarihi cepheye zarar vermeden kurulum tamamlıyoruz. Biga ve Çan'daki sanayi tesisleri için yangın dayanımlı B1 sınıfı kumaş ile kurumsal çözümler sunuyoruz. Ayvacık ve Bayramiç'teki köy evlerinde ise geleneksel pencere tiplerine uygun <strong>vidasız klik sistemi</strong> uyguluyoruz.",
        ],
      },
      {
        h2: "Çanakkale Boğazı ve Adalar Keşif Programı",
        paragraphs: [
          "<strong>Çanakkale merkez, Eceabat, Gelibolu, Lapseki, Ezine</strong>: Aylık planlı ücretsiz keşif. <strong>Biga, Çan, Yenice</strong>: Aylık planlı keşif. <strong>Ayvacık, Bayramiç</strong>: Aylık planlı keşif turları. <strong>Bozcaada, Gökçeada</strong>: Sezonluk (Mayıs-Eylül) planlı keşif günleri.",
        ],
      },
    ],
    faqItems: [
      { question: "Bozcaada'daki yazlığımıza hangi aylarda keşfe geliyorsunuz?", answer: "Bozcaada'ya Mayıs-Eylül arası sezonluk planlı keşif günleri düzenliyoruz. Feribot ile ulaşıyoruz. Adanın tuzlu deniz havası için anti-tuz kaplamalı kumaş öneriyoruz. Sezon öncesi rezervasyon yapmanızı öneririz." },
      { question: "Gelibolu'daki tarihi evimizin pencere ölçüleri standart değil, özel üretim yapıyor musunuz?", answer: "Evet, Gelibolu ve Eceabat'taki tarihi binaların standart dışı pencere ölçüleri için her pencereye ayrı ölçü alıp özel üretim yapıyoruz. Pencere kasası içine montaj ile tarihi cepheye zarar vermeden kurulum tamamlıyoruz." },
    ],
  },
  {
    name: "Edirne",
    slug: "edirne-plise-perde",
    region: "Marmara",
    priority: false,
    districts: ["Edirne merkez", "Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Süloğlu", "Uzunköprü"],
    intro: "Edirne'nin 9 ilçesinde plise perde üretip monte ediyoruz. Meriç Nehri kıyısından Saros Körfezi'ne uzanan bu topraklarda, <strong>Osmanlı başkenti mirasına saygılı pencere çözümleri</strong> geliştiriyoruz. Pendik'teki atölyemizden Keşan, Uzunköprü ve İpsala sınır kapılarına kadar her noktaya kurye ile ve görüntülü keşif yöntemiyle ulaşıyoruz.",
    seoTitle: "Edirne Plise Perde - Görüntülü Keşif & Kurye Teslimat",
    seoDescription: "Edirne'nin 9 ilçesine plise perde: Selimiye çevresi tarihi pencerelere özel ölçü, Keşan ve İpsala çiftlik evlerine kurye. Pendik'teki atölyemizden üretim.",
    sections: [
      {
        h2: "Meriç Havzasında Plise Perde Uygulamaları",
        paragraphs: [
          "Edirne, Trakya'nın güneybatısında Meriç ve Tunca nehirlerinin birleştiği düzlükte kurulmuştur. Bölge yazın +38 dereceyi aşan sıcaklarla, kışın ise -10 dereceye inen donlarla sınanır. Bu geniş sıcaklık aralığı için <strong>çift katmanlı gece-gündüz plise perde</strong> öneriyoruz: gündüz katmanı güneş ışınını yumuşatır, gece katmanı camdan soğuk hava sızmasını keser.",
          "Selimiye Camii'nin gölgesinde kalan Saraçlar Caddesi civarındaki konakların pencereleri dar ve yüksek tasarlanmıştır. Bu ölçüler için <strong>milimetrik hassasiyette özel boy üretim</strong> yapıyoruz. Keşan ovasının pirinç tarlaları arasındaki çiftlik evlerinde ise geniş cepheli pencerelere katlanır akordiyon sistem uyguluyoruz. Enez sahilinde Marmara Denizi'nin nemine karşı kaplamalı kumaş tercih ediyoruz.",
        ],
      },
      {
        h2: "Edirne İlçelerinde Keşif ve Montaj Takvimi",
        paragraphs: [
          "<strong>Edirne merkez, Havsa, Süloğlu, Lalapaşa</strong> beldelerine her ay düzenli keşif turu düzenliyoruz. <strong>Keşan, Uzunköprü, İpsala, Meriç, Enez</strong> sınır ilçelerine ise aylık planlı seferler ile ulaşıyor, ücretsiz yerinde ölçü alıyoruz. Üretim Pendik'teki atölyemizde tamamlandıktan sonra kurye ile veya ekibimizle teslim ediyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Selimiye civarındaki tarihi konağımın pencerelerine perde takılır mı?", answer: "Takılır. Edirne merkezdeki dar ve yüksek Osmanlı pencere tipleri için pencere içine oturan milimetrik ölçü plise perde üretiyoruz. Duvara delik açmadan, yapışkanlı profil veya ince vidalı montaj ile tarihi dokuya zarar vermeden kuruyoruz." },
      { question: "Keşan'daki çiftlik evime kurye ile perde gönderiyor musunuz?", answer: "Evet. Keşan dahil Edirne'nin ilçelerin tamamına görüntülü keşif sonrası kurye teslimat veriyoruz. Telefonla pencere fotoğraflarınızı alıp ölçü ve modeli birlikte belirliyoruz, üretim sonrası kurye ile gönderiyoruz." },
    ],
  },
  {
    name: "Kırklareli",
    slug: "kirklareli-plise-perde",
    region: "Marmara",
    priority: false,
    districts: ["Babaeski", "Demirköy", "Kırklareli merkez", "Kofçaz", "Lüleburgaz", "Pehlivanköy", "Pınarhisar", "Vize"],
    intro: "Kırklareli'nin 8 ilçesinde plise perde üretip teslim ediyoruz. Istranca Dağları'nın ormanlık yamaçlarından Lüleburgaz ovasına kadar uzanan bu ilde, <strong>kış donlarına karşı ısı tutucu petekli modeller</strong> öneriyoruz. Esenyalı'daki üretim tesisimizden Kırklareli'nin her ilçesine sevkiyat ile ve uzaktan keşif yöntemiyle ulaşıyoruz.",
    seoTitle: "Kırklareli Plise Perde - Uzaktan Keşif & Sevkiyat Teslimat",
    seoDescription: "Kırklareli'nin 8 ilçesine plise perde: Lüleburgaz sanayiye B1 kumaş, Vize taş binalara özel ölçü. Esenyalı'daki üretim tesisimizden sevkiyat.",
    sections: [
      {
        h2: "Istranca Ormanları Eteklerinde Pencere Çözümleri",
        paragraphs: [
          "Kırklareli, Türkiye'nin kuzeybatı ucunda Bulgaristan sınırına yaslanmış, Istranca (Yıldız) Dağları'nın sıradağlarıyla çevrili bir ildir. Kış aylarında Trakya'nın en düşük sıcaklık değerleri burada kaydedilir. Bu sert iklim için <strong>honeycomb petekli plise perde</strong> öneriyoruz; hücre boşlukları cam ile oda arasındaki hava akışını yavaşlatarak ısıtma faturasını belirgin ölçüde düşürür.",
          "Vize ve Demirköy'deki Bizans döneminden kalma taş yapıların pencereleri düzensiz ölçülere sahiptir; bu nedenle her pencere için ayrı kalıp çıkarıyoruz. Lüleburgaz organize sanayi bölgesindeki fabrika yönetim binaları ve işçi lojmanlarında yangına dayanıklı <strong>B1 sınıfı kumaş</strong> ile toplu çözüm sunuyoruz. Kofçaz ve Pehlivanköy gibi dağ köylerinde yapışkanlı montaj sistemiyle duvar delmeden perde takıyoruz.",
        ],
      },
      {
        h2: "Kırklareli Beldelerinde Keşif Günü Planlaması",
        paragraphs: [
          "<strong>Kırklareli merkez, Lüleburgaz, Babaeski, Pınarhisar</strong> ilçelerine aylık planlı ücretsiz keşif turu düzenliyoruz. <strong>Vize, Demirköy, Kofçaz, Pehlivanköy</strong> beldelerine aynı tur güzergahı kapsamında ulaşıyoruz. İmalat Esenyalı'daki üretim tesisimizde tamamlanır, ardından sevkiyat ile veya keşif ekibiyle birlikte adrese teslim edilir. Mesajlaşarak pencere ölçülerinizi önceden paylaşmanız halinde tur günü montaj da gerçekleştirilebilir.",
        ],
      },
    ],
    faqItems: [
      { question: "Istranca eteklerindeki köy evim için delmesiz montaj var mı?", answer: "Var. Kırklareli'nin dağ köylerindeki ahşap ve taş evlerde duvara zarar vermemek için yapışkanlı profil montajı uyguluyoruz. Vida açmadan, pencere içine oturan sistemle perdeyi kuruyoruz." },
      { question: "Lüleburgaz OSB'deki fabrikanın lojmanlarına toplu perde yapılır mı?", answer: "Yapılır. Lüleburgaz organize sanayi bölgesindeki fabrika yönetim binaları ve işçi lojmanları için yangın dayanımlı B1 sınıfı kumaşla toplu plise perde üretiyoruz. Mesajlaşarak pencere ölçülerini alıp kurumsal faturalı teslimat sağlıyoruz." },
    ],
  },
  {
    name: "Tekirdağ",
    slug: "tekirdag-plise-perde",
    region: "Marmara",
    priority: false,
    districts: ["Çerkezköy", "Çorlu", "Ergene", "Hayrabolu", "Kapaklı", "Malkara", "Marmaraereğlisi", "Muratlı", "Saray", "Şarköy", "Tekirdağ merkez"],
    intro: "Tekirdağ'ın 11 ilçesinde plise perde üretip teslim ediyoruz. Çorlu-Çerkezköy sanayi koridorundan Şarköy'ün bağ yamaçlarına kadar geniş bir coğrafyaya <strong>haftalık keşif ve teslimat hizmeti</strong> götürüyoruz. İstanbul'daki fabrikamızdan Tekirdağ'ın ilçe sınırlarının tümüne teslimat ile ulaşıyoruz.",
    seoTitle: "Tekirdağ Plise Perde - Online Keşif & Teslimat Hizmeti",
    seoDescription: "Tekirdağ'ın 11 ilçesine plise perde: Çorlu sanayiye B1 kumaş, Şarköy bağ evlerine güneşlik. İstanbul'daki fabrikamızdan üretim, haftalık keşif.",
    sections: [
      {
        h2: "Çorlu Ovasından Şarköy Sahiline Perde Stratejileri",
        paragraphs: [
          "Tekirdağ, Trakya'nın güneyinde Marmara Denizi'ne bakan bir ildir; kuzeyde sanayi ağırlıklı Çorlu-Çerkezköy-Ergene-Kapaklı hattı, güneyde ise Marmaraereğlisi ve Şarköy sahil şeridi uzanır. Sanayi bölgesindeki fabrika idari binaları ve lojmanlar için <strong>alevsiz B1 sınıfı kumaş</strong> tercih ediyor, haftalık keşif günleriyle toplu projeleri yürütüyoruz.",
          "Tekirdağ merkez ile Marmaraereğlisi'nde deniz nemine kaplamalı kumaş öneriyoruz. Şarköy'ün üzüm bağları arasında sıralanan bağ evlerinde güneş ışığını süzen güneşlik kumaş modelini uyguluyoruz. Malkara, Hayrabolu ve Saray gibi iç kesimlerde karasal etki belirgin olduğu için honeycomb petekli perde daha uygundur.",
        ],
      },
      {
        h2: "Tekirdağ İlçelerinde Haftalık Servis Programı",
        paragraphs: [
          "Tekirdağ'ın ilçe sınırlarının tümüne <strong>online keşif</strong> uygulamasıyla hizmet veriyoruz. Görüntülü arama ile pencere görüntülerinizi alıp ölçü ve modeli birlikte saptıyoruz. <strong>Çorlu, Çerkezköy, Kapaklı, Ergene</strong> sanayi ilçelerine haftalık ücretsiz keşif günleri ayırıyoruz. <strong>Tekirdağ merkez, Marmaraereğlisi, Muratlı</strong> beldelerine aylık planlı keşif veriyoruz. <strong>Malkara, Hayrabolu, Saray, Şarköy</strong> iç ve sahil ilçelerine de aylık tur kapsamında ulaşıyoruz. Üretim İstanbul'daki fabrikamızda tamamlanır, teslimat ile adrese gönderilir.",
        ],
      },
    ],
    faqItems: [
      { question: "Çerkezköy OSB'deki idari binamız için yangına dayanıklı perde var mı?", answer: "Var. Çerkezköy, Çorlu, Kapaklı ve Ergene sanayi bölgesindeki fabrika idari binaları ve lojmanlar için alev tutuşmaz B1 sınıfı kumaşla plise perde üretiyoruz. Görüntülü arama ile ölçü alıp haftalık keşif günlerimizle yerinde montaj yapıyoruz." },
      { question: "Şarköy'deki bağ evimin geniş pencerelerine hangi model uygun?", answer: "Şarköy'ün bağ evlerinde güneş ışığını süzen güneşlik kumaş plise perde öneriyoruz. Geniş cepheli pencereler için katlanır akordiyon sistem uyguluyoruz. Online keşif sonrası İstanbul'daki fabrikamızdan teslimat ile gönderiyoruz." },
    ],
  },
  // --- EGE BÖLGESİ ---
  {
    name: "İzmir",
    slug: "izmir-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Aliağa", "Balçova", "Bayraklı", "Bornova", "Buca", "Çeşme", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karşıyaka", "Konak", "Menderes", "Menemen", "Narlıdere", "Seferihisar", "Selçuk", "Torbalı", "Urla", "Beydağ", "Kınık", "Kiraz", "Ödemiş", "Tire", "Bayındır"],
    intro: "İzmir'in 26 ilçesinde plise perde üretip gönderiyoruz. Kordon'dan Çeşme yarımadasına, Bornova vadisinden Selçuk'un antik kalıntılarına kadar Ege'nin inci şehrinin her köşesine <strong>dijital keşif ve gönderim hizmeti</strong> götürüyoruz. Pendik üretim merkezimizden İzmir'in beldelerin hepsine gönderim ile ulaşıyoruz.",
    seoTitle: "İzmir Plise Perde - Dijital Keşif & Gönderim Hizmeti",
    seoDescription: "İzmir'in 26 ilçesine plise perde: Çeşme, Urla, Bornova dijital keşif ve gönderim. Ege tuzlu nemine dayanıklı kumaş. Pendik üretim merkezi.",
    sections: [
      {
        h2: "Ege Kıyısında Tuzlu Neme Karşı Perde Kumaşı",
        paragraphs: [
          "İzmir, Ege Denizi'nin sıcak ve nemli havasının etkisinde kalan bir şehirdir; yaz aylarında nem oranı yüzde yetmişlere tırmanır. <strong>Çeşme, Urla, Foça, Dikili, Seferihisar</strong> gibi sahil ilçelerinde deniz tuzu ve rüzgarın kumaşa yapacağı tahribatı önlemek için kaplamalı nem dayanımlı kumaş kullanıyoruz. Bu beldelerdeki yazlık evler ve butik oteller için güneşlik ile karartmayı birleştiren gece-gündüz modelini öneriyoruz.",
          "Bornova, Buca, Karşıyaka, Konak, Bayraklı ve Karabağlar gibi merkez ilçelerdeki apartman dairelerinde standart pencere ölçülerine hızlı üretim yapıyoruz. İzmir'in geniş cepheli Ege tipi evlerinde <strong>katlanır akordiyon plise perde</strong> uyguluyoruz. Aliağa ve Torbalı sanayi bölgelerindeki idari binalar için kurumsal çözümler sunuyoruz.",
        ],
      },
      {
        h2: "İzmir İlçelerinde Ekran Üzerinden Ölçü ve Gönderim Akışı",
        paragraphs: [
          "İzmir'e <strong>dijital keşif</strong> yöntemiyle hizmet veriyoruz. Fotoğraf paylaşarak pencere görüntülerinizi alıp ölçü ve modeli birlikte belirliyoruz. Üretim Pendik üretim merkezimizde tamamlandıktan sonra gönderim ile İzmir'in beldelerin hepsine teslimat yapıyoruz. Montaj için görüntülü rehberlik sağlıyor, gerektiğinde yerel montaj ekibi yönlendiriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Çeşme'deki yazlığımın pencerelerine deniz nemine dayanıklı perde var mı?", answer: "Var. Çeşme, Urla, Foça gibi sahil beldelerinde deniz tuzu ve rüzgara kaplamalı nem dayanımlı kumaş kullanıyoruz. Güneşlik ve karartmayı birleştiren gece-gündüz modelini öneriyoruz." },
      { question: "İzmir'de yerinde keşif yerine dijital keşif nasıl işliyor?", answer: "Fotoğraf paylaşarak pencere görüntülerinizi alıp ölçü ve modeli birlikte belirliyoruz. Üretim Pendik üretim merkezimizde yapılır, gönderim ile İzmir'in beldelerin hepsine teslim edilir. Montaj için görüntülü rehberlik veriyoruz." },
    ],
  },
  {
    name: "Aydın",
    slug: "aydin-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Aydın merkez", "Bozdoğan", "Buharkent", "Çine", "Didim", "Germencik", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı", "Köşk", "Kuşadası", "Kuyucak", "Nazilli", "Söke", "Sultanhisar", "Yenipazar"],
    intro: "Aydın'ın 17 ilçesinde plise perde üretip teslim ediyoruz. Büyük Menderes Nehri'nin suladığı bu verimli ovada, <strong>Kuşadası ve Didim sahil tesislerinden Nazilli iç kesim konutlarına</strong> kadar geniş bir yelpazeye hizmet veriyoruz. İstanbul atölyesinden Aydın'ın ilçe bazında tamamına mesafeli keşif ve nakliye ile ulaşıyoruz.",
    seoTitle: "Aydın Plise Perde - Mesafeli Keşif & Nakliye Teslimat",
    seoDescription: "Aydın'ın 17 ilçesine plise perde: Kuşadası otellere blackout, Nazilli konutlarına güneşlik. İstanbul atölyesinden üretim, nakliye teslimat.",
    sections: [
      {
        h2: "Büyük Menderes Vadisinde Sıcak Yazlara Karşı Perde",
        paragraphs: [
          "Aydın, Türkiye'nin en sıcak illerinden biridir; yazın vadide hava +42 dereceyi geçer. <strong>Kuşadası ve Didim</strong>'deki otel, apart ve pansiyonlarda misafir konforu için tam karartmalı blackout plise perde öneriyor, sahil nemine dayanıklı kumaşla sezon öncesi toplu üretim yapıyoruz. Söke ovasının pamuk tarlaları arasındaki çiftlik evlerinde geniş pencerelere katlanır sistem uyguluyoruz.",
          "Aydın merkez ve Nazilli'deki apartman dairelerinde Ege'nin kavurucu güneşine karşı <strong>güneşlik kumaş</strong> yeterli gelir. Çine ve Bozdoğan gibi dağlık iç kesimlerde hava daha serin olduğundan standart tül kumaş tercih edilebilir. Karacasu'nun tarihi evlerinde pencere içine oturan özel ölçü üretim yapıyoruz.",
        ],
      },
      {
        h2: "Aydın Beldelerinde Turizm Sezonu Öncesi Sipariş",
        paragraphs: [
          "Aydın'ın ilçe bazında tamamına <strong>mesafeli keşif</strong> yöntemiyle hizmet veriyoruz. Mobil iletişimle pencere ölçülerinizi alıp, üretim sonrası nakliye ile teslimat yapıyoruz. Kuşadası ve Didim otel projeleri için sezon açılmadan Mart-Nisan döneminde sipariş vermenizi öneriyoruz; yaz aylarında üretim yoğunluğu teslim süresini uzatabilir.",
        ],
      },
    ],
    faqItems: [
      { question: "Kuşadası'ndaki otelime sezon öncesi toplu blackout perde yaptırabilir miyim?", answer: "Yaptırabilirsiniz. Kuşadası otel, apart ve pansiyonları için tam karartmalı blackout plise perdeyi sahil nemine dayanıklı kumaşla toplu üretiyoruz. Sezon açılmadan Mart-Nisan'da sipariş vermenizi öneriyoruz." },
      { question: "Nazilli'deki apartmanım için mesafeli keşif yeterli olur mu?", answer: "Olur. Aydın'ın ilçe bazında tamamında olduğu gibi Nazilli'de de mobil iletişimle pencere fotoğraflarınızı alıp ölçü ve modeli belirliyoruz. Üretim İstanbul atölyesinde yapılır, nakliye ile Nazilli'ye teslim edilir." },
    ],
  },
  {
    name: "Muğla",
    slug: "mugla-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Bodrum", "Dalaman", "Datça", "Fethiye", "Kavaklıdere", "Köyceğiz", "Marmaris", "Menteşe", "Milas", "Muğla merkez", "Ortaca", "Seydikemer", "Ula", "Yatağan"],
    intro: "Muğla'nın 13 ilçesinde plise perde üretip gönderiyoruz. Ege ve Akdeniz iklimlerinin buluştuğu bu ilde, <strong>Bodrum, Marmaris, Fethiye</strong> başta olmak üzere turizm kıyılarındaki villa ve otellere özel çözümler sunuyoruz. Marmara üretim hattımızdan Muğla'nın dağ ve sahil beldelerinin tamamına dağıtım ile ulaşıyoruz.",
    seoTitle: "Muğla Plise Perde - Sanal Keşif & Dağıtım Teslimat",
    seoDescription: "Muğla'nın 13 ilçesine plise perde: Bodrum villalara motorlu sistem, Marmaris otellere blackout. Marmara üretim hattı, dağıtım teslimat.",
    sections: [
      {
        h2: "Bodrum Yarımadasından Fethiye Körfezine Villa Perdesi",
        paragraphs: [
          "Muğla, Türkiye turizminin kalbidir; <strong>Bodrum yarımadasındaki</strong> beyaz badanalı villalardan Marmaris marina çevresindeki lüks rezidanslara, Fethiye Ölüdeniz'in butik otellerinden Datça'nın sakin sokaklarına kadar sayısız konutta perde uyguladık. Bu kıyılarda deniz tuzu ve yoğun güneşe dayanıklı özel kumaş tipleri kullanıyoruz.",
          "Bodrum ve Marmaris'teki <strong>kiralık villa projeleri</strong> için uzaktan kumandalı motorlu plise perde sistemleri kuruyoruz; misafirler perdeyi yataktan kalkmadan açıp kapayabilir. Milas, Yatağan ve Kavaklıdere gibi iç kesimlerde standart manuel modeller yeterli olur. Köyceğiz ve Dalaman göl çevresindeki evlerde nem dayanımlı kumaş tercih ediyoruz.",
        ],
      },
      {
        h2: "Muğla Sahil Beldelerinde Sezonluk Üretim Takvimi",
        paragraphs: [
          "Muğla'nın ilçelerinin tamamına <strong>sanal keşif</strong> yöntemiyle hizmet veriyoruz. Turizm bölgesi olduğundan sezon açılmadan Şubat-Nisan döneminde sipariş vermenizi öneriyoruz; yaz aylarında üretim yoğunluğu teslim süresini uzatabilir. Dağıtım ile Bodrum, Marmaris, Fethiye, Datça, Dalaman, Ortaca ve diğer ilçelerinin tamamına teslimat yapıyoruz. WhatsApp'tan pencere fotoğraflarınızı gönderip ölçü ve modeli birlikte saptayabilirsiniz.",
        ],
      },
    ],
    faqItems: [
      { question: "Bodrum'daki kiralık villama uzaktan kumandalı motorlu perde takılır mı?", answer: "Takılır. Bodrum villaları için uzaktan kumandalı motorlu plise perde sistemleri üretiyoruz. Misafirler perdeyi kumandayla açıp kapayabilir, deniz nemine dayanıklı kumaş kullanıyoruz." },
      { question: "Fethiye'deki butik otelime ne zaman sipariş vermeliyim?", answer: "Fethiye turizm bölgesi olduğundan sezon açılmadan Şubat-Nisan arasında sipariş vermenizi öneriyoruz. Yaz aylarında üretim yoğunluğu teslim süresini uzatabilir. Sanal keşif sonrası Marmara üretim hattımızdan dağıtım ile teslim ediyoruz." },
    ],
  },
  {
    name: "Manisa",
    slug: "manisa-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Ahmetli", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara", "Gördes", "Kırkağaç", "Köprübaşı", "Kula", "Manisa merkez", "Salihli", "Sarıgöl", "Saruhanlı", "Selendi", "Soma", "Turgutlu", "Yunusemre", "Şehzadeler"],
    intro: "Manisa'nın 17 ilçesinde plise perde üretip teslim ediyoruz. Gediz Nehri'nin suladığı bu ovada <strong>Soma, Akhisar, Turgutlu</strong> sanayi bölgelerindeki fabrika ve lojmanlara kurumsal çözümler sunuyor, Manisa merkez ve Alaşehir konutlarına ekran üzerinden keşif ve ulaştırma ile ulaşıyoruz. Pendik'teki imalathanemizden her bir ilçeye ulaştırma ile sevkiyat yapıyoruz.",
    seoTitle: "Manisa Plise Perde | Ekran Üzerinden Keşif & Teslimat",
    seoDescription: "Manisa'nın 17 ilçesine plise perde: Soma maden lojmanlarına B1 kumaş, Alaşehir bağ evlerine güneşlik. Pendik'teki imalathaneden üretim, ulaştırma teslimat.",
    sections: [
      {
        h2: "Gediz Ovasında Sanayi ve Çiftlik Evleri İçin Perde",
        paragraphs: [
          "Manisa, Türkiye'nin en yoğun sanayi ve tarım illerinden biridir. <strong>Soma</strong>'daki maden ve enerji tesisleri, <strong>Akhisar</strong> organize sanayi bölgesi ve <strong>Turgutlu</strong> fabrikaları için alev tutuşmaz B1 sınıfı kumaşla toplu plise perde üretiyor, işçi lojmanlarında standart ölçülere hızlı üretim yapıyoruz.",
          "Gediz ovasının üzüm ve tütün tarlaları arasındaki çiftlik evlerinde geniş cepheli pencerelere <strong>katlanır akordiyon sistem</strong> uyguluyoruz. Alaşehir ve Salihli'nin bağ evlerinde güneş ışığını süzen güneşlik kumaş öneriyoruz. Spil Dağı'nın yamacındaki Manisa merkez konutlarında Ege iklimine uygun standart modeller yeterli gelir.",
        ],
      },
      {
        h2: "Manisa İlçelerinde Kurumsal ve Bireysel Teslimat",
        paragraphs: [
          "Manisa'nın her bir ilçesine <strong>ekran üzerinden keşif</strong> yöntemiyle hizmet veriyoruz. Mesaj yoluyla pencere ölçülerinizi alıp, üretim sonrası ulaştırma ile teslimat yapıyoruz. Sanayi tesisleri için kurumsal faturalı teslimat sağlıyor, lojman projelerinde toplu montaj planlıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Soma'daki maden lojmanlarına yangına dayanıklı toplu perde yapılır mı?", answer: "Yapılır. Soma maden ve enerji tesisleri ile işçi lojmanları için alev tutuşmaz B1 sınıfı kumaşla toplu plise perde üretiyoruz. Standart lojman ölçülerine hızlı üretim sağlıyoruz." },
      { question: "Alaşehir'deki bağ evimin pencerelerine hangi model uygun düşer?", answer: "Alaşehir ve Salihli bağ evlerinde güneş ışığını süzen güneşlik kumaş plise perde öneriyoruz. Geniş cepheli pencereler için katlanır akordiyon sistem uyguluyoruz. Ekran üzerinden keşif ve ulaştırma ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Afyonkarahisar",
    slug: "afyonkarahisar-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Afyonkarahisar merkez", "Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Sandıklı", "Sincanlı", "Sultandağı", "Şuhut"],
    intro: "Afyonkarahisar'ın 18 ilçesinde plise perde üretip gönderiyoruz. İç Ege'nin karasal iklim kuşağında kışın -15 dereceye inen donlara karşı <strong>ısı tutucu honeycomb modellerini</strong> öneriyoruz. Afyon merkez ve Sandıklı konutlarına görüntülü keşif ve kurye ile, termal otellere özel kumaşla ulaşıyoruz. Esenyalı'daki üretim tesisimizden her beldeye sevkiyat yapıyoruz.",
    seoTitle: "Afyonkarahisar Plise Perde | Görüntülü Keşif & Kurye",
    seoDescription: "Afyonkarahisar'ın 18 ilçesine plise perde: termal otellere anti-buhar kumaş, Sandıklı konutlarına honeycomb. Esenyalı merkezli üretim, kurye teslimat.",
    sections: [
      {
        h2: "Afyon Ovasında Termal Buhara Dayanıklı Perde Kumaşı",
        paragraphs: [
          "Afyonkarahisar, İç Ege'nin karasal kuşağında yer alır; kışın -15 dereceye varan donlar, yazın +40 dereceyi aşan sıcaklar görülür. Bu uç sıcaklık farkları için <strong>honeycomb petekli ısı yalıtımlı plise perde</strong> öneriyoruz; hücre yapısı camdan gelen soğuk ve sıcak havayı süzerek ısıtma ve soğutma giderlerini düşürür.",
          "Afyon merkezdeki termal otellerde sıcak su buharı normal kumaşı kısa sürede bozar; bu nedenle <strong>anti-buhar kaplamalı nem dayanımlı kumaş</strong> kullanıyoruz. Sandıklı ve Dinar'da karartma ile honeycomb birleşimini uygulayarak hem ısı yalıtımı hem de karanlık uyku ortamı sağlıyoruz. Bolvadin ve Çay'daki çiftlik evlerinde geniş pencerelere katlanır sistem kuruyoruz.",
        ],
      },
      {
        h2: "Afyonkarahisar İlçelerinde Kışlık Perde Gönderimi",
        paragraphs: [
          "Afyonkarahisar'ın ilçe sınırlarının tümüne <strong>görüntülü keşif</strong> yöntemiyle hizmet veriyoruz. Telefonla ölçü alıp, üretim sonrası kuryeyle teslimat yapıyoruz. Termal otel projeleri için anti-buhar kaplamalı özel kumaş seçenekleri mevcuttur.",
        ],
      },
    ],
    faqItems: [
      { question: "Afyon'daki termal otelime buhar dayanımlı perde bulunur mu?", answer: "Bulunur. Afyon merkezdeki termal otellerde sıcak su buharı normal kumaşı bozar; bu yüzden anti-buhar kaplamalı nem dayanımlı kumaşla plise perde üretiyoruz. Termal tesisler için özel kumaş seçenekleri mevcuttur." },
      { question: "Sandıklı'daki evim kışın donuyor, hangi perde ısı tutar?", answer: "Sandıklı'nın karasal ikliminde honeycomb petekli ısı yalıtımlı plise perde öneriyoruz. Karartma ile birleştirerek hem ısı yalıtımı hem de karanlık uyku ortamı sağlıyoruz. Kargoyla Sandıklı'ya teslimat yapıyoruz." },
    ],
  },
  {
    name: "Kütahya",
    slug: "kutahya-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Altıntaş", "Aslanapa", "Çavdarhisar", "Domaniç", "Dumlupınar", "Emet", "Gediz", "Hisarcık", "Kütahya merkez", "Pazarlar", "Simav", "Şaphane", "Tavşanlı"],
    intro: "Kütahya'nın 13 ilçesinde plise perde üretip teslim ediyoruz. 969 metre rakımıyla İç Ege'nin en yüksek illerinden birinde, <strong>kış kar yağışlarına karşı çift petekli honeycomb modellerini</strong> öneriyoruz. Kütahya merkez ve Tavşanlı konutlarına uzaktan keşif ve sevkiyat ile ulaşıyoruz. İstanbul'daki fabrikamızdan her beldeye gönderim yapıyoruz.",
    seoTitle: "Kütahya Plise Perde - Video Keşif & Kargo Teslimat",
    seoDescription: "Kütahya'nın 13 ilçesine plise perde: 969m rakıma çift petekli honeycomb, Simav maden lojmanlarına B1 kumaş. Pendik merkezli üretim, kargo teslimat.",
    sections: [
      {
        h2: "Kütahya Yaylasında Çift Petekli Perde ile Isı Tutucu",
        paragraphs: [
          "Kütahya, 969 metrelik rakımıyla İç Ege'nin en yüksek illerinden biridir; kışın şiddetli soğuklar ve kar yağışı görülür. Bu nedenle Kütahya konutlarında <strong>çift petekli honeycomb plise perde</strong> öneriyoruz; iki katmanlı hücre yapısı -20 dereceye varan soğuklarda bile camdan ısı kaybını en aza indirir.",
          "Kütahya'nın çini ve seramik atölyelerinin yoğunlaştığı sanayi bölgesinde iş atölyelerinin pencerelerine güneşlik kumaş uyguluyoruz. Emet ve Gediz'deki termal kaynaklar çevresindeki evlerde nem dayanımlı kumaş tercih ediyoruz. Simav ve Tavşanlı'daki maden işçi lojmanlarında alev tutuşmaz B1 sınıfı kumaşla toplu perde çözümleri sunuyoruz.",
        ],
      },
      {
        h2: "Kütahya İlçelerinde Seramik Atölyelerine Özel Gönderim",
        paragraphs: [
          "Kütahya'nın her ilçesine <strong>uzaktan keşif</strong> yöntemiyle hizmet veriyoruz. Yüksek rakım bölgesi olduğundan çift petekli honeycomb modelini öneriyoruz. Mesajlaşarak pencere ölçülerinizi alıp, üretim sonrası sevkiyatla teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kütahya'nın 969 metre rakımında çift petekli honeycomb ısı kaybını önler mi?", answer: "Önler. Kütahya'nın yüksek rakımında çift petekli honeycomb plise perde, iki katmanlı hücre yapısıyla -20 dereceye varan soğuklarda bile camdan ısı kaybını en aza indirir. Kargoyla Kütahya'ya teslimat yapıyoruz." },
      { question: "Simav'daki maden lojmanlarına yangına dayanıklı perde yaptırabilir miyim?", answer: "Yaptırabilirsiniz. Simav ve Tavşanlı'daki maden işçi lojmanları için alev tutuşmaz B1 sınıfı kumaşla toplu plise perde üretiyoruz. Kurumsal faturalı teslimat sağlıyoruz." },
    ],
  },
  {
    name: "Denizli",
    slug: "denizli-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Acıpayam", "Babadağ", "Baklan", "Bekilli", "Beyağaç", "Bozkurt", "Buldan", "Çal", "Çameli", "Çardak", "Çivril", "Denizli merkez", "Güney", "Honaz", "Kale", "Merkezefendi", "Pamukkale", "Sarayköy", "Serinhisar", "Tavas"],
    intro: "Denizli'nin 19 ilçesinde plise perde üretip sevkiyat ile ulaştırıyoruz. Pendik'teki atölyemizden <strong>Buldan'ın dokuma kültürlü evlerine, Pamukkale'nin termal otellerine ve Çivril'in çiftlik konutlarına</strong> kadar geniş bir yelpazede çözüm sunuyoruz. Görüntülü keşif yaparak ölçü alıyor, ilçelerin tamamına kurye teslimat sağlıyoruz.",
    seoTitle: "Denizli Plise Perde - Buldan ve Pamukkale Özel Üretim",
    seoDescription: "Denizli plise perde: 19 ilçe, Buldan dokuma mirasına uygun modeller. Pamukkale termal otelleri için anti-buhar kumaş, görüntülü keşif ile sevkiyat.",
    sections: [
      {
        h2: "Buldan Dokuma Mirası ve Pamukkale Termal Bölgesinde Plise Perde",
        paragraphs: [
          "Denizli, yüz yıllardır Anadolu'nun dokuma beşiği olarak bilinir. <strong>Buldan</strong> ilçesinde el tezgahı kültürüyle büyümüş ailelerin evlerinde perdeye verilen değer yüksektir; bu nedenle dokuma dokulu kumaş yüzeyli plise modellerimizi Buldan konutları için özel olarak üretiyoruz. Pamukkale ve Karahayıt'taki termal kaynak çevresindeki otellerde ise sürekli buharlı ortam, standart kumaşları kısa sürede yıpratır; bu tesisler için <em>anti-buhar kaplamalı</em> nem dayanımlı kumaş tercih ediyoruz.",
          "Merkezefendi ve Pamukkale ilçelerinin modern apartmanlarında Ege'nin sert yaz güneşine karşı güneşlik kumaş öneriyoruz. Çivril ve Acıpayam ovalarındaki tarım işletmelerinin geniş pencereli çiftlik evlerinde katlanır sistem uygulayarak panoramik manzarayı koruyoruz. Honaz Organize Sanayi Bölgesi'ndeki tekstil atölyelerinin idari ofislerine ise profesyonel görünüm sağlayan düz renkli modeller monte ediyoruz.",
        ],
      },
      {
        h2: "Ege İkliminin Sert Güneşine Karşı Perde Stratejileri",
        paragraphs: [
          "Denizli'de yaz günleri <strong>35°C'nin üzerine</strong> çıkar ve güneş ışınımı yoğundur. Pencereden gelen ısıyı kırpmak için güneşlik kumaşlı plise perde, iç mekanda 3-4 derecelik serinletme etkisi yaratır. Karartma modeli ise tam ışık kesisi yaparak öğle saatlerinde oda sıcaklığını belirgin biçimde düşürür ve klima yükünü hafifletir.",
          "Denizli'nin her köşesine <strong>görüntülü keşif</strong> yöntemiyle ulaşıyoruz: fotoğraf paylaşarak pencere detaylarını inceliyor, ölçüleri birlikte netleştiriyor ve Pendik'teki imalathanemizde özel olarak kesiyoruz. Sevkiyat ile Merkezefendi, Sarayköy, Tavas, Çal, Güney başta olmak üzere ilçelerin tamamına ortalama 3 iş gününde teslimat gerçekleştiriyoruz. Termal otel projeleri için sezon başlangıcından en az iki ay önce sipariş alınmasını öneriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Buldan'daki evim için dokuma dokulu plise perde bulabilir miyim?", answer: "Buldan'ın el tezgahı geleneğinden ilham alarak dokuma yüzeyli kumaşlarla plise perde üretiyoruz. Pendik'teki atölyemizde özel kesim yapıp sevkiyat ile Buldan'a gönderiyoruz. Görüntülü keşif sırasında dokulu kumaş numunelerini de ekrandan tanıtıyoruz." },
      { question: "Pamukkale termal otelimde buharlı ortama hangi kumaş dayanır?", answer: "Termal kaynak çevresindeki sürekli buhar ve yüksek nem, standart kumaşları 1-2 yılda deforme eder. Anti-buhar kaplamalı nem dayanımlı kumaşımız 5 yıldan fazla ömür sunar. Otel projeleri için B1 yangın sınıfı seçeneği de mevcuttur; sezon öncesi sipariş edilmesini öneririz." },
    ],
  },
  {
    name: "Uşak",
    slug: "usak-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Banaz", "Eşme", "Karahallı", "Sivaslı", "Ulubey", "Uşak merkez"],
    intro: "Uşak'ın 6 ilçesine Esenyalı'daki üretim tesisimizden plise perde gönderiyoruz. Ege'den İç Anadolu'ya iklim geçiş kuşağında yer alan ilde kışları donlu, yazları kavurucu günler yaşanır; bu nedenle <strong>gece-gündüz ve honeycomb modellerini</strong> öne çıkarıyoruz. Uzaktan keşif yaparak ölçü alıp kurye ile teslim ediyoruz.",
    seoTitle: "Uşak Plise Perde - Gece-Gündüz ve Honeycomb Modelleri",
    seoDescription: "Uşak plise perde: 6 ilçe, Ege-İç Anadolu geçiş iklimi için gece-gündüz ve honeycomb ısı yalıtımlı modeller. Uzaktan keşif ile kurye teslimat.",
    sections: [
      {
        h2: "İç Anadolu-Ege İklim Sınırında Pencere Çözümleri",
        paragraphs: [
          "Uşak, iki büyük iklim kuşağının kavşak noktasındadır. Ocak ayında eksi değerlere inen gece sıcaklıkları, Temmuz'da 38 dereceye tırmanan gündüz hararetiyle yer değiştirir. Bu sert amplitüt için <strong>gece-gündüz plise perde</strong> sistemini öneriyoruz: gündüz katmanı güneş ışınımını yumuşatırken, gece katmanı tam karartma ve cam ile oda arasına soğuk hava bariyeri oluşturur.",
          "İlin halı dokuma geçmişine sahip ailelerinin evlerinde, perde seçiminde dokuma kültürüne gönderme yapan <em>dokulu yüzeyli kumaşları</em> tercih ediyoruz. Banaz ve Eşme ovalarındaki tarım işletmelerinin geniş pencereli konutlarında katlanır sistemle manzarayı koruyoruz. Ulubey ve Karahallı gibi küçük ilçelerde standart pencere ölçülerine hızlı üretim yaparak sevkiyat süresini kısaltıyoruz.",
        ],
      },
      {
        h2: "Halı Şehrinin Dokuma Kültürüne Uygun Perde Seçimi",
        paragraphs: [
          "Uşak halısı dünya çapında tanınan bir el sanatıdır ve bu kültürel miras, ev içi tekstil tercihlerine de yansır. Esenyalı'daki üretim tesisimizde halı dokuma dokusuna benzer yüzey işlemeli plise kumaşlar temin ederek, yerel estetikle uyum sağlıyoruz. Sivaslı ve Ulubey'deki konutlarda bu dokulu modellerin yanı sıra honeycomb hücreli ısı yalıtımlı seçeneği de sunuyoruz.",
          "Her ilçeye <strong>uzaktan keşif</strong> yöntemiyle ulaşıyoruz. Mesajlaşarak pencere fotoğraflarınızı bize iletmeniz yeterli; ölçüleri birlikte saptayıp Esenyalı'da üretiyor ve kurye ile Uşak adresinize ulaştırıyoruz. Montajı kendiniz yapabileceğiniz gibi, yerel montaj ekibi yönlendirmesi de sağlıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Karasal iklimde kış soğuğunu hangi perde tipi engeller?", answer: "Uşak'ın donlu kış gecelerinde honeycomb hücreli plise perde, cam ile oda arasında hava boşluğu yaratarak soğuk transferini keser. Gece-gündüz modelinin karartma katmanı da ek bariyer sağlar. İki model birlikte kullanıldığında ısı kaybı belirgin biçimde azalır." },
      { question: "Uşak'tan kuryeyle perde siparişi verdiğimde montajı nasıl yaparım?", answer: "Esenyalı'da ürettiğimiz perde kurye ile Uşak adresinize ulaşır. Kutu içeriğinde montaj kılavuzu, tırnak ve profil bulunur; vidalama gerektirmeyen klik sistem sayesinde dakikalar içinde takabilirsiniz. İsterseniz Uşak'ta anlaşmalı olduğumuz yerel montaj ustasını yönlendiriyoruz." },
    ],
  },
  // --- AKDENİZ BÖLGESİ ---
  {
    name: "Antalya",
    slug: "antalya-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Akseki", "Aksu", "Alanya", "Demre", "Döşemealtı", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "İbradı", "Kaş", "Kemer", "Kepez", "Konyaaltı", "Kumluca", "Manavgat", "Muratpaşa", "Serik"],
    intro: "Antalya'nın 18 ilçesinde plise perde üretip gönderim ile teslim ediyoruz. İstanbul'daki fabrikamızdan <strong>Kemer'in resort otellerine, Alanya'nın apart dairelerine ve Kaş'ın butik villalarına</strong> kadar geniş bir skalada çözüm sunuyoruz. Akdeniz'in yoğun UV radyasyonuna ve nem yüküne dayanıklı kumaş tipleri kullanıyoruz.",
    seoTitle: "Antalya Plise Perde - Otel ve Villa Projeleri Özel Üretim",
    seoDescription: "Antalya plise perde: 18 ilçe, resort oteller için B1 yangın sınıfı blackout, sahil villaları için anti-nem kumaş. Online keşif ile gönderim.",
    sections: [
      {
        h2: "Akdeniz Turizm Koridorunda Beş Yıldızlı Perde Uygulamaları",
        paragraphs: [
          "Antalya, Türkiye turizm gelirinin büyük bölümünü üreten şehirdir. <strong>Belek (Serik), Side (Manavgat), Kemer ve Alanya</strong> koridorlarındaki beş yıldızlı tesislerde misafir konforu, sabah güneşinin odaya girmesini engellemeye bağlıdır. Bu otellerde <em>blackout tam karartma</em> plise perde üretiyor ve yangın yönetmeliklerine uygun B1 sınıfı kumaş tercih ediyoruz.",
          "Muratpaşa, Kepez, Konyaaltı ve Aksu merkez ilçelerinin apartman dairelerinde, yaz boyu süren yoğun güneşe karşı güneşlik kumaş öneriyoruz. Lara ve Konyaaltı plajları çevresindeki deniz manzaralı konutlarda tuzlu nem yüküne dayanıklı anti-nem kaplamalı kumaş kullanıyoruz. Kaş, Demre ve Finike'nin butik otel ve villalarında motorlu perde sistemleriyle geniş cam yüzeylerini yönetiyoruz.",
        ],
      },
      {
        h2: "Sahil Villalarında ve Resort Otellerde Karartma Sistemleri",
        paragraphs: [
          "Antalya kıyı şeridinde güneş 05:30'da doğar ve 20:30'a kadar etkisini sürdürür. Misafirlerin kesintisiz uyku uyuyabilmesi için <strong>blackout plise perde</strong> neredeyse zorunludur. Otel projelerinde yangın dayanımlı B1 kumaş ile toplu üretim yapıyor, kurumsal sözleşme ile sezon öncesi teslimat sağlıyoruz.",
          "Şehrin ilçe sınırlarının tümüne <strong>online keşif</strong> uygulamasıyla ulaşıyoruz. Turizm bölgesi olduğu için <u>Kasım-Şubat arası</u> sipariş verilmesini öneriyoruz; yaz aylarında üretim yoğunluğu nedeniyle teslim süreleri uzayabilir. Gönderim ile Alanya, Manavgat, Serik, Kemer, Kumluca, Gazipaşa dahil olmak üzere beldelerin hepsine sevkiyat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Belek'teki tatil köyüm için yangına dayanıklı perde temin eder misiniz?", answer: "Belek ve Serik koridorundaki resort oteller için B1 yangın sınıfı blackout plise perde üretiyoruz. Misafirlerin sabah güneşinde kesintisiz uyku uyuması için tam karartma sağlıyor. Kurumsal sözleşme ile sezon öncesi toplu teslimat yapıyoruz." },
      { question: "Alanya'daki daireme yazın sipariş versem ne zaman ulaşır?", answer: "Yaz aylarında Antalya turizm bölgesinde üretim yoğunluğu artar, bu nedenle teslim süresi 5-7 iş gününe uzayabilir. Sezon öncesi Kasım-Şubat döneminde sipariş verirseniz 3 iş gününde gönderim ile Alanya'ya ulaşır." },
    ],
  },
  {
    name: "Adana",
    slug: "adana-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"],
    intro: "Adana'nın 15 ilçesine Pendik üretim merkezimizden plise perde hazırlayıp teslimat ile ulaştırıyoruz. Çukurova'nın <strong>+45°C'yi bulan yaz sıcaklarında</strong> iç mekanda klima yükünü azaltmak için güneşlik ve karartma modellerini öne çıkarıyoruz. Seyhan, Çukurova, Yüreğir ve Sarıçam merkez ilçelerindeki konutlar için dijital keşif yaparak ölçü alıyoruz.",
    seoTitle: "Adana Plise Perde | Çukurova Sıcağına Karartma",
    seoDescription: "Adana plise perde: 15 ilçe, +45°C yaz sıcaklığı için güneşlik ve karartma modelleri. Klima giderlerini azaltan ısı filtreli kumaş, dijital keşif.",
    sections: [
      {
        h2: "Çukurova'nın Kavurucu Sıcağında İç Mekan Serinletme",
        paragraphs: [
          "Adana, Türkiye'nin en yüksek yaz sıcaklık ortalamasına sahip illerinden biridir. Temmuz ve Ağustos'ta termometre 45 dereceye yaklaşır ve pencere camından geçen güneş ışınımı, iç mekanda adeta sera etkisi yaratır. <strong>Güneşlik kumaşlı plise perde</strong>, gelen ışınımın yaklaşık yüzde 70'ini filtreleyerek oda sıcaklığını 3-5 derece düşürür. Karartma modeli ise tam ışık kesisi sağlayarak klima kompresörünün çalışma süresini belirgin biçimde kısaltır.",
          "Seyhan ve Çukurova'nın yoğun apartman bölgelerinde standart pencere ölçülerine hızlı üretim yapıyoruz. Ceyhan'ın sanayi kuşağındaki işçi lojmanlarına toplu perde çözümleri sunuyoruz. Karataş sahlinde deniz tuzu ve nem yüküne dayanıklı anti-nem kaplamalı kumaş tercih ediyoruz. Kozan, Feke ve Aladağ'ın Toros yamaçlarında rakımla birlikte sıcaklık düştüğü için standart modeller yeterli gelmektedir.",
        ],
      },
      {
        h2: "Seyhan Nehri Boyunca Apartman ve Lojman Perde Projeleri",
        paragraphs: [
          "Seyhan Nehri'nin iki yakasında uzanan Adana konut stoğu, geniş pencereli modern apartmanlardan tarihi sokaklardaki avlu evlerine kadar çeşitlilik gösterir. Pendik üretim merkezimizde her pencere tipi için özel ölçü üretim yapıyor, <em>klik sistem montaj profili</em> sayesinde vidalama gerektirmeden takılabilir çözümler sunuyoruz.",
          "Adana'nın her köşesine <strong>dijital keşif</strong> yöntemiyle ulaşıyoruz. Telefonla pencere görüntülerini alıp ölçüleri birlikte netleştiriyor, Pendik üretim merkezimizde hazırlayıp teslimat ile Adana'ya ulaştırıyoruz. Pozantı ve Tufanbeyli gibi kuzey ilçelerine haftanın belirlenen günlerinde sevkiyat gerçekleştiriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Çukurova sıcağında klima faturamı düşürecek perde hangisidir?", answer: "Adana'nın +45°C sıcaklarında karartma kumaşlı plise perde, pencereden gelen ışınımı tamamen keserek iç mekanda sera etkisini engeller. Güneşlik modeli ise ışığın yüzde 70'ini filtrelerken manzarayı korur. İki model de klima kompresörünün çalışma süresini kısaltarak fatura yükünü hafifletir." },
      { question: "Kozan'ın dağ semtinde standart perde yeterli olur mu?", answer: "Kozan, Feke ve Aladağ gibi Toros yamaçlarındaki ilçelerde rakım arttıkça yaz sıcaklığı düşer ve nem azalır. Bu bölgelerde standart güneşlik plise perde yeterli gelir; karartma veya anti-nem kumaşa gerek duyulmaz. Dijital keşif sırasında ilçenizin iklim koşullarına göre öneri yapıyoruz." },
    ],
  },
  {
    name: "Mersin",
    slug: "mersin-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Mezitli", "Mut", "Silifke", "Tarsus", "Toroslar", "Yenişehir"],
    intro: "Mersin'in 13 ilçesine Marmara üretim hattımızdan plise perde hazırlayıp nakliye ile teslim ediyoruz. Türkiye'nin en uzun kıyı şeritlerinden birine sahip ilde <strong>deniz tuzu ve nem yüküne dayanıklı anti-nem kaplamalı kumaşları</strong> öne çıkarıyoruz. Mezitli, Yenişehir, Toroslar ve Akdeniz merkez ilçelerindeki konutlar için mesafeli keşif yaparak ölçü alıyoruz.",
    seoTitle: "Mersin Plise Perde - Sahil Nemine Dayanıklı Anti-Nem Kumaş",
    seoDescription: "Mersin plise perde: 13 ilçe, sahil tuzu ve nemine dayanıklı anti-nem kumaş. Anamur muz serası için nefes alabilen modeller, mesafeli keşif ile nakliye.",
    sections: [
      {
        h2: "Uzun Sahil Şeridinin Nem Yüküne Dayanıklı Perde Modelleri",
        paragraphs: [
          "Mersin, 320 kilometreyi aşan kıyı uzunluğuyla Akdeniz'in en uzun sahil şeridine sahip illerinden biridir. Mezitli, Yenişehir ve Akdeniz ilçelerinin deniz manzaralı apartmanlarında sürekli maruz kalınan tuzlu nem, standart kumaşları 2-3 yılda deforme eder. Bu bölgelerde <strong>anti-nem kaplamalı kumaş</strong> tercih ederek 5 yıldan fazla dayanım sağlıyoruz. Gündüz güneş filtrelemesi ve gece mahremiyet için gece-gündüz kombinasyonunu öneriyoruz.",
          "Anamur ve Bozyazı'nın muz serası kuşağında yıl boyu yüzde 80'e varan nem, kumaşın nefes almasını zorunlu kılar; bu bölgede hava sirkülasyonlu petekli kumaş tiplerini kullanıyoruz. Silifke ve Erdemli turizm koridorundaki butik otellerde blackout modeli, Tarsus organize sanayi bölgesindeki fabrika ofislerinde ise yangın dayanımlı B1 kumaş uyguluyoruz.",
        ],
      },
      {
        h2: "Liman Kentinde Sanayi ve Turizm İçin Toplu Perde Çözümleri",
        paragraphs: [
          "Mersin Limanı çevresindeki lojistik depo ve idari binalarda, geniş cam yüzeyleri için <strong>motorlu plise perde sistemleri</strong> uyguluyoruz. Tarsus sanayi kuşağındaki fabrika lojmanlarına yangın yönetmeliklerine uygun B1 sınıfı kumaşla toplu üretim yapıyor, kurumsal faturalı teslimat sağlıyoruz.",
          "Mersin'in ilçe bazında tamamına <strong>mesafeli keşif</strong> uygulamasıyla ulaşıyoruz. Görüntülü arama ile pencere detaylarını inceliyor, ölçüleri birlikte saptıyor ve Marmara üretim hattımızda kesip nakliye ile Mersin adresinize ulaştırıyoruz. Çamlıyayla ve Mut gibi iç kesim ilçelerine haftanın belirlenen sevkiyat günlerinde teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Mezitli sahilinde tuzlu nem kumaşı çabuk mu yıpratır?", answer: "Mersin sahil şeridinde deniz tuzu ve yüksek nem, standart kumaşları 2-3 yıl içinde deforme eder. Anti-nem kaplamalı kumaşımız bu süreyi 5 yıldan fazlaya çıkarır. Mezitli, Yenişehir ve Akdeniz sahil ilçelerinde bu kumaşı özellikle öneriyoruz." },
      { question: "Tarsus organize sanayide fabrika ofislerime toplu perde alabilir miyim?", answer: "Tarsus sanayi kuşağındaki fabrika ve lojmanlar için yangın dayanımlı B1 sınıfı kumaşla toplu plise perde üretiyoruz. Kurumsal fatura ve sözleşmeli teslimat sağlıyoruz. Mesafeli keşif ile tüm ofis pencerelerinin ölçüsünü alıp Marmara üretim hattımızda toplu üretim yapıyoruz." },
    ],
  },
  {
    name: "Isparta",
    slug: "isparta-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen", "Keçiborlu", "Isparta merkez", "Senirkent", "Sütçüler", "Şarkikaraağaç", "Uluborlu", "Yalvaç", "Yenişarbademli"],
    intro: "Isparta'nın 13 ilçesine İstanbul atölyemizden plise perde hazırlıyoruz. Göller Bölgesi'nin <strong>1050 metre rakımında</strong> kış soğuğu ve göl nemi bir arada yaşandığı için honeycomb hücreli ısı yalıtımlı modelleri öne çıkarıyoruz. Eğirdir Gölü çevresindeki yazlık ve turizm tesisleri için de özel çözümler üretiyoruz.",
    seoTitle: "Isparta Plise Perde - Yüksek Rakım Göl İklimi için Honeycomb",
    seoDescription: "Isparta plise perde: 13 ilçe, 1050m rakımda göl nemi ve soğuğa karşı honeycomb ısı yalıtımlı modeller. Eğirdir için katlanır sistem, sanal keşif ile kargo.",
    sections: [
      {
        h2: "Bin Metre Rakımda Göl Havasının Etkisiyle Perde Tercihleri",
        paragraphs: [
          "Isparta şehir merkezi deniz seviyesinden 1050 metre yüksekte kuruludur. Eğirdir ve Kovada göllerinin yarattığı mikro iklim, kış gece sıcaklıklarını eksi 10 derecelere çekerken gündüzleri göl üzerinden gelen nemli hava, cam yüzeylerinde terleme yapar. Bu koşullarda <strong>honeycomb hücreli plise perde</strong>, cam ile oda arasında hava boşluğu oluşturarak hem soğuk transferini keser hem de terlemeyi azaltır.",
          "Eğirdir Gölü kıyısındaki balık restoranları ve pansiyonlarda, geniş manzara pencerelerini kapatmadan süzgeç görevi gören <em>katlanır plise perde sistemi</em> uyguluyoruz. Isparta merkezinin gül tarımı havzasındaki çiftlik evlerinde geniş pencere için güneşlik modelini, Yalvaç ve Şarkikaraağaç'ın tarihi dokusundaki konutlarda ise özel ölçü üretim yapıyoruz.",
        ],
      },
      {
        h2: "Gül Bahçeleri ve Eğirdir Kıyısında Pencere Uygulamaları",
        paragraphs: [
          "Isparta, dünya gül yağı üretiminin önemli bir bölümünü karşılar ve bu tarım kültürü, ev içi estetik tercihlerine de yansır. Pendik atölyemizde gül bahçesi manzaralı pencerelere uygun pastel tonlu kumaşlarla plise perde üretiyoruz. Senirkent ve Uluborlu'nun elma bahçeleri arasındaki konutlarında doğal tonları öneriyoruz.",
          "İlçe bazında tamamına <strong>sanal keşif</strong> yöntemiyle ulaşıyoruz. İletişim uygulamasından pencere fotoğraflarınızı bize iletmeniz yeterli; ölçüleri birlikte saptayıp İstanbul atölyesinde üretiyor ve kargoyla Isparta adresinize ulaştırıyoruz. Sütçüler ve Yenişarbademli gibi dağlık ilçelere haftanın belirlenen sevkiyat günlerinde teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Eğirdir göl kenarındaki restoranıma manzarayı kapatmayan perde var mı?", answer: "Eğirdir Gölü kıyısındaki restoran ve pansiyonlar için katlanır plise perde sistemi uyguluyoruz. Perdeyi tamamen toplayarak panoramik göl manzarasını koruyabilir, gerektiğinde güneş filtrelemesi için açabilirsiniz. Sanal keşif ile geniş pencere ölçülerini alıp İstanbul atölyesinde üretiyoruz." },
      { question: "Isparta'nın yüksek rakımında honeycomb perde ne işe yarar?", answer: "1050 metre rakımda kış gece sıcaklıkları eksi 10 derecelere iner ve göl nemi camda terleme yapar. Honeycomb hücreli plise perde, cam ile oda arasında hava boşluğu oluşturarak soğuk transferini keser ve terlemeyi azaltır. Isı yalıtımı için en uygun modeldir." },
    ],
  },
  {
    name: "Burdur",
    slug: "burdur-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Ağlasun", "Altınyayla", "Bucak", "Burdur merkez", "Çavdır", "Çeltikçi", "Gölhisar", "Karamanlı", "Kemer", "Tefenni", "Yeşilova"],
    intro: "Burdur'un 11 ilçesine Pendik'teki imalathaneden plise perde hazırlayıp dağıtım ile ulaştırıyoruz. İç Akdeniz'in karasal kuşağında bulunan ilde <strong>kış donlarına karşı honeycomb ve karartma kombinasyonunu</strong> öne çıkarıyoruz. Burdur Gölü çevresindeki konutlar ve Bucak mobilya sanayi bölgesi için ekran üzerinden keşif yaparak çözümler sunuyoruz.",
    seoTitle: "Burdur Plise Perde | Karasal Göl İklimi, Isı Yalıtımı",
    seoDescription: "Burdur plise perde: 11 ilçe, karasal kış donlarına karşı honeycomb ve karartma. Bucak mobilya sanayi için toplu çözümler, ekran üzerinden keşif, dağıtım.",
    sections: [
      {
        h2: "İç Akdeniz'in Sert Kışlarına Karşı Isı Yalıtımlı Perde",
        paragraphs: [
          "Burdur, Akdeniz Bölgesi'nin iç kesiminde, Torosların gerisinde kuruludur ve sahil ilçelerinden tamamen kopuk bir karasal rejim yaşar. Burdur Gölü havzasında ocak ve şubat aylarında gece sıcaklıkları eksi 15 dereceye kadar düşer. Bu dondurucu ortamda <strong>honeycomb hücreli plise perde</strong>, cam ile oda arasına hava boşluğu yerleştirerek soğuk transferini keser; karartma katmanı eklenirse hem ısı yalıtımı hem de tam karanlık uyku ortamı sağlanır.",
          "Ağlasun'daki Sagalassos antik kenti çevresindeki pansiyon ve butik otellerde, turist konaklaması için blackout modeli öneriyoruz. Gölhisar ve Tefenni ovalarının tarım arazilerindeki geniş pencereli çiftlik evlerinde katlanır sistemle manzarayı koruyoruz. Çavdır ve Çeltikçi'nin küçük yerleşimlerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Bucak Mobilya Üretim Bölgesinde Atölye ve Lojman Perdeleme",
        paragraphs: [
          "Bucak, Türkiye'nin önemli mobilya üretim merkezlerinden biridir ve bölgedeki atölyelerin idari ofisleri ile işçi lojmanları toplu perde çözümüne ihtiyaç duyar. Pendik atölyemizde bu tesisler için <strong>yangın dayanımlı B1 sınıfı kumaş</strong> ile toplu üretim yapıyor, kurumsal faturalı teslimat sağlıyoruz. Kemer ve Yeşilova'nın tarım ağırlıklı ilçelerinde ise çiftlik evleri için güneşlik modeli yeterli gelmektedir.",
          "Burdur'un beldelerin hepsine <strong>online keşif</strong> yöntemiyle hizmet veriyoruz. Görüntülü arama ile pencere görüntülerini alıp ölçüleri birlikte belirliyor, İstanbul atölyesinde üretip teslimat şirketiyle Burdur'a gönderiyoruz. Altınyayla ve Tefenni gibi yüksek rakımlı ilçelerde honeycomb modelini özellikle öneriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Burdur Gölü kıyısında dondurucu kış için en uygun perde nedir?", answer: "Burdur Gölü havzasında ocak-şubat aylarında gece sıcaklıkları eksi 15 dereceye düşer. Honeycomb hücreli plise perde, cam ile oda arasında hava boşluğu oluşturarak soğuk transferini keser. Karartma katmanı eklenirse hem ısı yalıtımı hem de tam karanlık uyku sağlanır." },
      { question: "Bucak'taki mobilya fabrikamın idari ofislerine perde takılır mı?", answer: "Bucak mobilya üretim bölgesindeki atölye ve lojmanlar için yangın dayanımlı B1 sınıfı kumaşla toplu plise perde üretiyoruz. Kurumsal fatura ve sözleşmeli teslimat sağlıyoruz. Video keşif ile tüm ofis pencerelerinin ölçüsünü alıp Pendik'te toplu üretim yapıyoruz." },
    ],
  },
  {
    name: "Osmaniye",
    slug: "osmaniye-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Bahçe", "Düziçi", "Hasanbeyli", "Kadirli", "Osmaniye merkez", "Sumbas", "Toprakkale"],
    intro: "Osmaniye'nin 7 ilçesine Marmara üretim hattımızdan plise perde üretip dağıtım ile teslim ediyoruz. Çukurova'nın doğu kapısı konumundaki ilde <strong>yaz kavuruculuğuna karşı güneşlik ve karartma modellerini</strong> öne çıkarıyoruz. Osmaniye merkez ve Kadirli konutları için dijital keşif ile ölçü alıp, ilçelerin tamamına gönderim yapıyoruz.",
    seoTitle: "Osmaniye Plise Perde | Çukurova Sıcaklık Filtreli",
    seoDescription: "Osmaniye plise perde: 7 ilçe, Çukurova doğu kapısında yaz sıcaklığına karşı güneşlik ve karartma. Düziçi Demir Çelik için B1 kumaş, video keşif, kargo.",
    sections: [
      {
        h2: "Çukurova'nın Doğu Kapısında Sıcaklık Filtreli Perde",
        paragraphs: [
          "Osmaniye, Çukurova'nın doğusunda, Akdeniz ile Güneydoğu Anadolu'ya açılan geçitte kuruludur. Bu konum, yaz aylarında 40 dereceyi aşan sıcaklık ve düşük nem ile kendini gösterir. Pencereden gelen güneş ışınımını kırpmak için <strong>güneşlik kumaşlı plise perde</strong>, ışığın tamamını kesmek ve klima yükünü hafifletmek için ise karartma modeli öneriyoruz.",
          "Osmaniye merkezinin düz arazisindeki apartman dairelerinde standart pencere ölçülerine hızlı üretim yapıyoruz. Kadirli'nin pamuk tarlaları arasındaki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Bahçe ve Hasanbeyli'nin daha yüksek rakımlı kesimlerinde sıcaklık bir miktar düştüğü için standart güneşlik model yeterli gelmektedir.",
        ],
      },
      {
        h2: "Demir Çelik Bölgesinde Endüstriyel Perde Uygulamaları",
        paragraphs: [
          "Düziçi ve Toprakkale çevresindeki Demir Çelik fabrika bölgesi, endüstriyel ölçekte perde çözümüne ihtiyaç duyar. Bu tesislerin idari ofisleri ve işçi lojmanları için <strong>yangın dayanımlı B1 sınıfı kumaş</strong> ile toplu üretim yapıyor, kurumsal faturalı teslimat sağlıyoruz. Fabrika ortamının toz ve yağ yüküne dayanıklı, silinebilir kumaş yüzeyleri tercih ediyoruz.",
          "Osmaniye'nin ilçe bazında tamamına <strong>dijital keşif</strong> yöntemiyle hizmet veriyoruz. Fotoğraf paylaşarak pencere görüntülerini alıp ölçüleri birlikte belirliyor, Marmara üretim hattında üretip gönderim ile Osmaniye'ye ulaştırıyoruz. Sumbas gibi küçük ilçelere haftalık sefer günleriyle teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kadirli'nin tarım arazilerindeki geniş pencereme hangi sistem uygun?", answer: "Kadirli'nin pamuk tarlaları arasındaki çiftlik evlerinde geniş pencere için katlanır plise perde sistemini öneriyoruz. Perdeyi tamamen toplayarak panoramik tarla manzarasını koruyabilir, gerektiğinde güneş filtrelemesi için açabilirsiniz. Video keşif ile ölçü alıp Pendik'te üretiyoruz." },
      { question: "Düziçi'deki çelik fabrikası lojmanlarına yangın sınıfı perde bulunur mu?", answer: "Düziçi ve Toprakkale Demir Çelik bölgesindeki fabrika lojmanları için yangın dayanımlı B1 sınıfı kumaşla toplu plise perde üretiyoruz. Fabrika ortamının toz ve yağ yüküne dayanıklı silinebilir kumaş yüzeyleri tercih ediyoruz. Kurumsal fatura ile teslimat sağlıyoruz." },
    ],
  },
  {
    name: "Hatay",
    slug: "hatay-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Altınözü", "Antakya", "Arsuz", "Belen", "Defne", "Dörtyol", "Erzin", "Hassa", "İskenderun", "Kırıkhan", "Kumlu", "Payas", "Reyhanlı", "Samandağ", "Yayladağı"],
    intro: "Hatay'ın 15 ilçesine İstanbul'daki fabrikamızdan plise perde üretip nakliye ile teslim ediyoruz. Akdeniz, Güneydoğu Anadolu ve Orta Doğu'nun kavşak noktasındaki ilde <strong>sıcak nemli sahilden serin dağlık iç kesime kadar farklı iklim kuşaklarına uygun modeller</strong> sunuyoruz. Antakya ve İskenderun merkez konutları için mesafeli keşif ile ölçü alıyoruz.",
    seoTitle: "Hatay Plise Perde | Sahil Nemine Özel, Tarihi Çözüm",
    seoDescription: "Hatay plise perde: 15 ilçe, Antakya tarihi evlerinin dar pencerelerine özel ölçü, İskenderun Körfezi nemine anti-nem kumaş. Video keşif, kargo teslimat.",
    sections: [
      {
        h2: "Üç İklimin Buluştuğu Şehirde Tarihi Pencerelere Perde",
        paragraphs: [
          "Hatay, Akdeniz, Güneydoğu Anadolu ve Orta Doğu iklim kuşaklarının kesiştiği ender bir ildir. Antakya'nın dar sokaklarındaki tarihi evlerin pencereleri, modern apartmanlardan farklı ölçü ve orana sahiptir; bu konutlar için <strong>özel ölçü plise perde</strong> üretiyor ve pencere içine klik sistemle zarar vermeden monte ediyoruz. Defne ve Harbiye'nin çınar gölgeli pansiyon ve restoranlarında, gölgelik pencereler için güneşlik kumaş öneriyoruz.",
          "Belan ve Hassa'nın dağ geçidi kesiminde rakımla birlikte sıcaklık düşer ve nem azalır; bu ilçelerde standart güneşlik model yeterli gelir. Reyhanlı ve Kırıkhan'ın sınır bölgesi düzlüklerinde ise yaz sıcaklığı yoğunlaştığı için karartma modelini öne çıkarıyoruz. Altınözü ve Yayladağı'nın kırsal konutlarında çiftlik evi tipinde geniş pencereler için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "İskenderun Körfezi Nemine Karşı Sahil Perde Sistemleri",
        paragraphs: [
          "İskenderun ve Arsuz sahil şeridinde yıl boyu yüksek nem ve deniz tuzu, standart kumaşları kısa sürede yıpratır. Bu bölgelerde <strong>anti-nem kaplamalı kumaş</strong> tercih ederek 5 yıldan fazla dayanım sağlıyoruz. Dörtyol ve Erzin sanayi kuşağındaki işçi lojmanlarına toplu perde çözümleri sunuyor, Payas'taki demir çelik tesislerinin idari ofisleri için yangın dayanımlı B1 kumaş uyguluyoruz.",
          "Hatay'ın ilçe sınırlarının tümüne <strong>mesafeli keşif</strong> yöntemiyle hizmet veriyoruz. Mobil iletişimle pencere görüntülerini alıp ölçüleri birlikte belirliyor, İstanbul atölyesinde üretip ulaştırma ile Hatay'ın her ilçesine gönderiyoruz. Samandağ ve Kumlu gibi kıyı ilçelerine anti-nem kumaş, dağlık ilçelere standart model öneriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Antakya'nın dar pencereli tarihi konutlarına perde nasıl monte edilir?", answer: "Antakya'nın tarihi evlerinin dar ve farklı ölçülü pencereleri için Pendik atölyemizde özel ölçü plise perde üretiyoruz. Pencere içine klik sistemle takıldığı için duvara vidalama gerektirmez ve tarihi dokuya zarar vermeden kurulur. Video keşif sırasında pencere detaylarını görüntülü olarak alıyoruz." },
      { question: "İskenderun Körfezi'ndeki nemli havaya dayanıklı kumaş özellikleri nelerdir?", answer: "İskenderun ve Arsuz sahilinde yıl boyu yüksek nem ve deniz tuzu, standart kumaşları 2-3 yılda deforme eder. Anti-nem kaplamalı kumaşımız bu süreyi 5 yıldan fazlaya çıkarır. Kaplama, kumaş yüzeyinde tuz ve nem birikimini engelleyerek renk solmasını ve lif zayıflamasını önler." },
    ],
  },
  {
    name: "Kahramanmaraş",
    slug: "kahramanmaras-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Afşin", "Andırın", "Çağlayancerit", "Dulkadiroğlu", "Ekinözü", "Elbistan", "Göksun", "Nurhak", "Onikişubat", "Pazarcık", "Türkoğlu"],
    intro: "Kahramanmaraş'ın 11 ilçesi için Pendik'teki atölyemizde plise perde hazırlıyoruz. Sıçandağı eteklerinde Akdeniz ile karasal kuşağın buluştuğu bu şehirde <strong>yazın kavurucu, kışın dondurucu</strong> iklim şartlarına dayanıklı gece-gündüz ve honeycomb seçeneklerini öneriyoruz. Onikişubat, Dulkadiroğlu, Elbistan ve Afşin'den başlayarak 11 ilçenin tamamında görüntülü keşif uyguluyor, kurye gönderimini planlıyoruz.",
    seoTitle: "Kahramanmaraş Plise Perde | Pendik Atölye, Kurye",
    seoDescription: "Kahramanmaraş plise perde: 11 ilçe, geçiş iklimi için gece-gündüz ve honeycomb, görüntülü keşif, kurye gönderimi.",
    sections: [
      {
        h2: "Sıçandağı Eteklerinde İki Mevsimin Pencere Gerçekleri",
        paragraphs: [
          "Kahramanmaraş, Akdeniz sıcak havası ile İç Anadolu karasal soğuğunun çarpıştığı geçiş kuşağında, yaklaşık 500 metre rakımda kurulmuştur. Temmuz'da +40°C'yi aşan sıcaklık, Ocak'ta -10°C'ye iner; bu 50 derecelik amplitüt pencere perdesinden <u>hem gölgeleme hem ısı bariyeri</u> bekler. Dulkadiroğlu ve Onikişubat merkez apartmanlarında <strong>gece-gündüz plise perde</strong> uyguluyoruz: gündüz katmanı güneş ışınını kırparak iç mekanı serin tutar, gece katmanı camdan ısı kaybını keser.",
          "Elbistan ve Afşin ovasındaki termik santral bölgesinde, işçi lojmanlarına yangına dayanıklı B1 sınıfı kumaşla toplu üretim yapıyoruz. Göksun ve Andırın'ın ormanlık dağ eteklerindeki köy evlerinde petek yapısı hava tabakası hapseden <strong>honeycomb modelini</strong> tercih ediyoruz. Nurhak ve Ekinözü'nün yüksek kesimlerinde ise çift katmanlı karartma sistemi öneriyoruz.",
        ],
      },
      {
        h2: "Dulkadiroğlu'ndan Türkoğlu'na 11 İlçeye Pendik Üretim Kurye Hattı",
        paragraphs: [
          "Pendik'teki atölyemizde şekillendirdiğimiz perdeler, Kahramanmaraş'ın 11 ilçesine kurye kanalıyla yola çıkıyor. <strong>Görüntülü keşif</strong> eşliğinde telefonla pencere detaylarınızı kaydedip, montaj kılavuzu dahil paketliyoruz. Pazarcık, Çağlayancerit ve Türkoğlu'na 2-3 iş günü; Elbistan ve Afşin'e 2 iş günü içinde ulaşım tamamlanır.",
        ],
      },
    ],
    faqItems: [
      { question: "Kahramanmaraş'a perde gönderimi ne kadar sürüyor?", answer: "Pendik'teki atölyemizden yola çıkan perdeler, Kahramanmaraş merkez ilçelere 2 iş gününde varır. Elbistan, Afşin ve Göksun gibi uzak ilçelerde ise 2-3 iş günü içinde teslimat tamamlanır." },
      { question: "Elbistan'daki işçi lojmanlarına toplu perde siparişi verebilir miyiz?", answer: "Evet, Elbistan ve Afşin termik santral bölgesindeki lojman blokları için yangın dayanımlı B1 sınıfı kumaşla toplu üretim yapıyoruz. Ölçüleri görüntülü keşif ile alıp kurye kanalıyla toplu sevkiyatı tamamlıyoruz." },
    ],
  },
  // --- İÇ ANADOLU BÖLGESİ ---
  {
    name: "Ankara",
    slug: "ankara-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Akyurt", "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Etimesgut", "Evren", "Gölbaşı", "Güdül", "Haymana", "Kahramankazan", "Kalecik", "Keçiören", "Kızılcahamam", "Mamak", "Nallıhan", "Polatlı", "Pursaklar", "Sincan", "Şereflikoçhisar", "Yenimahalle", "Gölbaşı"],
    intro: "Ankara'nın 25 ilçesi için İstanbul'daki fabrikamızdan plise perde gönderiyoruz. Bozkır ikliminin hüküm sürdüğü başkentte kışın -20°C, yazın +35°C arasında salınan sıcaklık, pencereden <strong>ısı kaçaklarını kesmeyi</strong> zorunlu kılar. Çankaya, Yenimahalle, Keçiören, Etimesgut, Sincan ve Mamak başta olmak üzere her ilçeye uzaktan keşif ve sevkiyat ile teslimat yapıyoruz.",
    seoTitle: "Ankara Plise Perde - İstanbul Üretim & Sevkiyat Teslimatı",
    seoDescription: "Ankara plise perde: 25 ilçe, bozkır iklimi için honeycomb, uzaktan keşif, sevkiyat teslimat.",
    sections: [
      {
        h2: "Bozkır İkliminde Step ve Termal Bölge Pencere Stratejisi",
        paragraphs: [
          "Ankara, ortalama 950 metre rakımda, İç Anadolu step ikliminin tipik özelliklerini taşır: kısa ve sıcak yaz, uzun ve sert kış. Çankaya, Yenimahalle ve Etimesgut'taki modern site dairelerinde <strong>honeycomb hücreli plise perde</strong> uyguluyoruz; petek yapısının içinde hapsolan hava tabakası, cam yüzeyden gelen soğuk ve sıcak dalgayı kırarak ısıtma-soğutma faturasını düşürür.",
          "Kızılcahamam ve Çamlıdere'nin 1000 metreyi aşan rakımlarında kar kalınlığı fazla olduğundan çift petekli honeycomb öneriyoruz. Haymana ve Beypazarı'nın termal kaynak çevresindeki konaklarda buhar dayanıklı kumaş kullanıyoruz. Polatlı ovasındaki geniş pencereli çiftlik evlerinde katlanır güneşlik, Sincan ve Pursaklar sanayi bölgesi lojmanlarında yangın dayanımlı B1 kumaş tercih ediyoruz.",
        ],
      },
      {
        h2: "Çankaya'dan Kızılcahamam'a Başkentin 25 İlçesine Uzaktan Keşif",
        paragraphs: [
          "İstanbul'daki fabrikamızdan ürettiğimiz perdeler, başkentin 25 ilçesine sevkiyat ile ulaşıyor. <strong>Uzaktan keşif</strong> yöntemiyle mesajlaşarak pencere ölçülerinizi alıp 1-2 iş günü içinde yola çıkarıyoruz. Keçiören ve Mamak'ın eski apartmanları için özel ölçü üretimini de aynı sürede tamamlıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Ankara'da hangi ilçelerde ölçü almadan perde siparişi verebilirim?", answer: "Ankara'nın 25 ilçesinin tamamında uzaktan keşif yöntemiyle ölçü alıyoruz. Çankaya, Yenimahalle, Etimesgut, Keçiören, Sincan ve Mamak başta olmak üzere her ilçede mesajlaşarak pencere ölçülerinizi alıp sevkiyat ile teslimat yapıyoruz." },
      { question: "Kızılcahamam'ın yüksek rakımında honeycomb modeli işe yarar mı?", answer: "Kızılcahamam ve Çamlıdere'nin 1000 metreyi aşan rakımında çift petekli honeycomb öneriyoruz. İki katlı petek yapısı, sert kış soğuklarında camdan ısı kaybını en aza indirir ve ısıtma giderlerini belirgin düşürür." },
    ],
  },
  {
    name: "Konya",
    slug: "konya-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Ahırlı", "Akören", "Akşehir", "Altınekin", "Beyşehir", "Bozkır", "Cihanbeyli", "Çeltik", "Çumra", "Derbent", "Derebucak", "Doğanhisar", "Emirgazi", "Ereğli", "Güneysınır", "Hadim", "Halkapınar", "Hüyük", "Ilgın", "Kadınhanı", "Karapınar", "Karatay", "Kulu", "Meram", "Selçuklu", "Seydişehir", "Taşkent", "Tuzlukçu", "Yalıhüyük", "Yunak"],
    intro: "Konya'nın 31 ilçesi için Pendik üretim merkezi tesislerimizden plise perde hazırlıyoruz. Türkiye'nin en geniş yüzölçümüne sahip bu ovada 1016 metre rakımda kışın -15°C'ye düşen hava, pencere perdesinden <strong>yalıtım ve gölgeleme</strong> birlikte bekler. Meram, Selçuklu ve Karatay merkez ilçeleri başta olmak üzere Ereğli, Çumra ve Beyşehir'e kadar ilçelerin tamamına online keşif ve teslimat ile gönderim yapıyoruz.",
    seoTitle: "Konya Plise Perde - Pendik Üretim & Teslimat Gönderimi",
    seoDescription: "Konya 31 ilçe plise perde: Meram, Selçuklu, Karatay, Ereğli, Çumra, Beyşehir. Pendik üretim, online keşif, teslimat gönderimi. Ova iklimi için honeycomb.",
    sections: [
      {
        h2: "Türkiye'nin En Geniş Ovasında Step ve Göl Kıyısı Perde Çeşitleri",
        paragraphs: [
          "Konya, 40 binden fazla kilometrekarelik yüzölçümüyle Türkiye'nin en büyük ilidir. Meram, Selçuklu ve Karatay merkez ilçelerindeki apartman dairelerinde <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> uyguluyoruz; step ikliminin kuru ve soğuk kış havasını petek yapısı filtreler. Mevlana Müzesi çevresindeki tarihi yapıların pencerelerine ise özel ölçü üretim yapıyoruz.",
          "Beyşehir Gölü kıyısındaki yazlık ve turizm tesislerinde, göl manzaralı geniş pencereler için katlanır güneşlik sistem tercih ediyoruz. Ereğli ve Çumra'nın şeker pancarı tarlaları arasındaki çiftlik evlerinde geniş açıklıklara uygun katlanır model öneriyoruz. Kulu ve Cihanbeyli'nin Tuz Gölü çevresindeki konutlarında, tuzlu havaya dayanıklı <em>anti-tuz kaplamalı kumaş</em> kullanıyoruz. Karapınar'ın çölleşme tehlikesi yaşayan ovasında ise güneşlik kumaşla sıcaklık kırma uyguluyoruz.",
        ],
      },
      {
        h2: "Meram'dan Ereğli'ye 31 İlçeye Düz Ovalık Teslimat Hattı",
        paragraphs: [
          "Pendik üretim merkezimizden Konya'nın 31 ilçesinin tamamına <strong>online keşif</strong> yaparak hizmet veriyoruz. Fotoğraf paylaşarak pencere ölçülerinizi alıp, teslimat ile 1-2 iş günü içinde gönderim gerçekleştiriyoruz. Merkez ilçelere 1 iş gününde, Ereğli ve Seydişehir gibi uzak ilçelere 2 iş gününde ulaşıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Konya'nın uzak ilçelerine teslimat süresi ne kadar?", answer: "Pendik üretim merkezimizden Konya merkez ilçelere (Meram, Selçuklu, Karatay) 1 iş gününde, Ereğli, Seydişehir ve Hadim gibi uzak ilçelere 2 iş gününde teslimat ile gönderim yapıyoruz." },
      { question: "Tuz Gölü çevresindeki evler için hangi kumaş dayanıklıdır?", answer: "Kulu ve Cihanbeyli'nin Tuz Gölü kıyısındaki konutları için anti-tuz kaplamalı kumaş tercih ediyoruz. Tuzlu havanın kumaş üzerindeki aşındırıcı etkisini bu kaplama önler ve perde ömrünü uzatır." },
    ],
  },
  {
    name: "Karaman",
    slug: "karaman-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Ayrancı", "Başyayla", "Ermenek", "Karaman merkez", "Kazımkarabekir", "Sarıveliler"],
    intro: "Karaman'ın 6 ilçesi için Esenyalı'daki üretim tesisimizde plise perde üretiyoruz. Konya ovasının güney uzantısında 1033 metre rakımda kurulu merkez ilçede step iklimi, Ermenek ve Sarıveliler'in Toros kuşağında ise <strong>dağ iklimi</strong> hüküm sürer. Karaman merkez, Ermenek, Başyayla ve Ayrancı başta olmak üzere beldelerin hepsine dijital keşif ve gönderim ile teslimat yapıyoruz.",
    seoTitle: "Karaman Plise Perde - Esenyalı Üretim & Gönderim Teslimatı",
    seoDescription: "Karaman 6 ilçe plise perde: Ermenek, Başyayla, Sarıveliler, Ayrancı. Esenyalı üretim, dijital keşif, gönderim teslimat. Ova ve dağ iklimi için honeycomb.",
    sections: [
      {
        h2: "Toros Kuşağında Ermenek Kanyonu ve Ova İkliminin Perde Gerçekleri",
        paragraphs: [
          "Karaman, İç Anadolu step iklimi ile Akdeniz dağ ikliminin karşılaştığı geçiş noktasında yer alır. Merkez ve Ayrancı'da kışın -10°C'ye düşen sıcaklık, yazın +35°C'ye tırmanır; bu salınım için <strong>gece-gündüz plise perde</strong> uyguluyoruz. Gündüz katmanı güneş ışınını kırpar, gece katmanı camdan ısı kaybını keser.",
          "Ermenek ve Sarıveliler'in Toroslar üzerindeki 1400 metreyi aşan yerleşimlerinde kış şartları ağırdır; bu köy evlerinde <strong>çift petekli honeycomb</strong> öneriyoruz. Karaman'ın bisküvi sanayi bölgesindeki fabrika ve lojmanlara yangın dayanımlı B1 sınıfı kumaşla toplu üretim yapıyoruz. Kazımkarabekir ve Başyayla'nın küçük yerleşimlerinde standart ölçülere hızlı üretim uyguluyoruz.",
        ],
      },
      {
        h2: "Merkezden Sarıveliler'e 6 İlçeye Dağ ve Ova Sevkiyat Planı",
        paragraphs: [
          "Esenyalı'daki üretim tesisimizden Karaman'ın 6 ilçesinin tamamına <strong>dijital keşif</strong> yaparak hizmet veriyoruz. Görüntülü arama ile pencere ölçülerinizi alıp, gönderim ile 2 iş günü içinde teslimat gerçekleştiriyoruz. Ermenek ve Sarıveliler'in dağ yolu uzak ilçelerinde 2-3 iş günü içinde sevkiyat tamamlanır.",
        ],
      },
    ],
    faqItems: [
      { question: "Karaman'ın dağ ilçelerine perde gönderimi yapıyor musunuz?", answer: "Evet, Ermenek ve Sarıveliler'in Toroslar üzerindeki yüksek rakımlı ilçelerine dahi gönderim ile teslimat yapıyoruz. Dijital keşif ile ölçü alıp, 2-3 iş günü içinde dağ yolu güzergahıyla sevkiyatı tamamlıyoruz." },
      { question: "Bisküvi fabrikası lojmanlarına yangın dayanımlı perde temin eder misiniz?", answer: "Evet, Karaman'ın bisküvi sanayi bölgesindeki fabrika ve lojman blokları için yangın dayanımlı B1 sınıfı kumaşla toplu plise perde üretimi yapıyoruz. Dijital keşif ile ölçü alıp gönderim ile toplu teslimat sağlıyoruz." },
    ],
  },
  {
    name: "Aksaray",
    slug: "aksaray-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Ağaçören", "Aksaray merkez", "Eskil", "Gülağaç", "Güzelyurt", "Ortaköy", "Sarıyahşi"],
    intro: "Aksaray'ın 7 ilçesi için İstanbul atölyesinden plise perde hazırlıyoruz. Tuz Gölü'nün güney kıyısında 980 metre rakımda kurulu bu şehirde, gölün tuzlu havası ve step ikliminin sert kış şartları <strong>kumaş seçimini belirler</strong>. Aksaray merkez, Ortaköy, Eskil ve Güzelyurt başta olmak üzere ilçe bazında tamamına mesafeli keşif ve nakliye ile teslimat yapıyoruz.",
    seoTitle: "Aksaray Plise Perde - İstanbul Üretim & Nakliye Teslimatı",
    seoDescription: "Aksaray 7 ilçe plise perde: Ortaköy, Eskil, Güzelyurt, Gülağaç. İstanbul üretim, mesafeli keşif, nakliye teslimat. Tuz Gölü için anti-tuz kumaş.",
    sections: [
      {
        h2: "Tuz Gölü Tuzlu Havası ve Ihlara Vadisi Gölgesinde Kumaş Seçimi",
        paragraphs: [
          "Aksaray, Tuz Gölü'nün güney kıyısına yayılmıştır. Eskil ve Ortaköy'ün göl sahil kesiminde tuz buharlaşması kumaş üzerinde aşındırıcı etki yaratır; bu ilçelerde <strong>anti-tuz kaplamalı kumaş</strong> tercih ediyoruz. Aksaray merkez konutlarında ise step ikliminin kış soğuğuna karşı honeycomb hücreli ısı yalıtımlı model uyguluyoruz.",
          "Güzelyurt'un 1924 mübadele döneminden kalma tarihi Rum evlerinde, orijinal pencere açıklıklarına özel ölçü plise perde üretiyoruz; pencere içi montajla <em>tarihi dokuya zarar vermeden</em> kurulur. Ihlara Vadisi çevresindeki pansiyon ve turistik işletmelerde, vadi yamacından gelen eğimli ışık için güneşlik kumaş öneriyoruz. Ağaçören ve Sarıyahşi'nin küçük yerleşimlerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Merkezden Sarıyahşi'ye 7 İlçeye Kapadokya Eşiği Nakliye Ağı",
        paragraphs: [
          "İstanbul atölyesinden Aksaray'ın 7 ilçesinin tamamına <strong>mesafeli keşif</strong> yaparak hizmet veriyoruz. Mobil iletişimle pencere ölçülerinizi alıp, nakliye ile 1-2 iş günü içinde teslimat gerçekleştiriyoruz. Güzelyurt ve Gülağaç'ın Kapadokya eşiğindeki ilçelerine de aynı süre içinde ulaşıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Aksaray'da Güzelyurt tarihi evlerine perde takılır mı?", answer: "Evet, Güzelyurt'un mübadele döneminden kalma Rum evlerinin orijinal pencere açıklıklarına özel ölçü plise perde üretiyoruz. Pencere içi montaj yöntemiyle tarihi dokuya zarar vermeden kurulur." },
      { question: "Tuz Gölü kıyısındaki Eskil evleri için hangi kumaş önerilir?", answer: "Eskil ve Ortaköy'ün Tuz Gölü sahil kesiminde anti-tuz kaplamalı kumaş kullanıyoruz. Tuz buharlaşmasının kumaş üzerindeki aşındırıcı etkisini bu kaplama önler ve perde ömrünü belirgin uzatır." },
    ],
  },
  {
    name: "Niğde",
    slug: "nigde-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Altunhisar", "Bor", "Çamardı", "Çiftlik", "Niğde merkez", "Ulukışla"],
    intro: "Niğde'nin 6 ilçesi için Marmara üretim hattımızdan plise perde hazırlıyoruz. 1229 metre rakımıyla İç Anadolu'nun en yüksek illerinden biri olan Niğde'de kışın -25°C'ye inen sıcaklık, pencereden <strong>dondurucu hava girişini kesmeyi</strong> zorunlu kılar. Niğde merkez, Bor, Çamardı ve Ulukışla başta olmak üzere ilçelerin tümüne sanal keşif ve dağıtım ile teslimat yapıyoruz.",
    seoTitle: "Niğde Plise Perde - Marmara Üretim & Dağıtım Teslimatı",
    seoDescription: "Niğde 6 ilçe plise perde: Bor, Çamardı, Ulukışla, Altunhisar. Marmara üretim, sanal keşif, dağıtım teslimat. Yüksek rakım için çift petekli honeycomb.",
    sections: [
      {
        h2: "Bin İki Yüz Metre Rakımda Aladağlar Eteğinde Isı Bariyeri",
        paragraphs: [
          "Niğde, Aladağlar'ın kuzey eteğinde 1229 metre rakımda kuruludur. Kış aylarında dondurucu soğuklar ve yoğun kar yağışı, pencere camından ısı kaybını maksimuma çıkarır. Bu nedenle Niğde merkez ve Bor konutlarında <strong>çift petekli honeycomb hücreli plise perde</strong> uyguluyoruz; iki katlı petek yapısının içinde hapsolan hava tabakası, cam yüzeyden gelen dondurucu havayı kırarak ısıtma giderlerini belirgin düşürür.",
          "Çamardı ve Ulukışla'nın Bolkarlar üzerindeki 1500 metreyi aşan dağ köylerinde, karartma ile honeycomb kombinasyonu öneriyoruz; gece karartma katmanı soğuğu keserken honeycomb katmanı ısı yalıtımı sağlar. Bor ovasının elma bahçeleri arasındaki çiftlik evlerinde geniş pencereler için katlanır güneşlik sistem uyguluyoruz. Altunhisar ve Çiftlik'in küçük yerleşimlerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Bor Ovasından Ulukışla'ya 6 İlçeye Yüksek Rakım Dağıtım Hattı",
        paragraphs: [
          "Marmara üretim hattımızdan Niğde'nin 6 ilçesinin tamamına <strong>sanal keşif</strong> yaparak hizmet veriyoruz. WhatsApp'tan pencere ölçülerinizi alıp, dağıtım ile 1-2 iş günü içinde teslimat gerçekleştiriyoruz. Çamardı ve Ulukışla'nın dağ yolu güzergahındaki ilçelerine 2-3 iş gününde ulaşıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Niğde'nin yüksek rakımında hangi perde ısı kaybını azaltır?", answer: "Niğde'nin 1229 metre rakımında çift petekli honeycomb hücreli plise perde öneriyoruz. İki katlı petek yapısı cam yüzeyden gelen dondurucu havayı kırar ve ısıtma giderlerini belirgin düşürür. Çamardı ve Ulukışla'da karartma + honeycomb kombinasyonu da uygundur." },
      { question: "Çamardı elma bahçelerindeki çiftlik evlerine perde yapar mısınız?", answer: "Evet, Çamardı ve Bor ovasının elma bahçeleri arasındaki çiftlik evlerinin geniş pencereleri için katlanır güneşlik sistem uyguluyoruz. Sanal keşif ile ölçü alıp dağıtım ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Nevşehir",
    slug: "nevsehir-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Acıgöl", "Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Nevşehir merkez", "Ürgüp"],
    intro: "Nevşehir'in 8 ilçesi için Pendik'teki imalathanede plise perde üretiyoruz. Kapadokya'nın volkanik tüf kayalarının içine oyulmuş mağara otelleri ve taş evlerin pencereleri standart dışıdır; bu yapılar için <strong>özel ölçü perde çözümleri</strong> hazırlıyoruz. Nevşehir merkez, Ürgüp, Avanos ve Derinkuyu başta olmak üzere her bir ilçeye ekran üzerinden keşif ve ulaştırma ile teslimat yapıyoruz.",
    seoTitle: "Nevşehir Plise Perde - Pendik Üretim & Ulaştırma Teslimatı",
    seoDescription: "Nevşehir plise perde: 8 ilçe, Kapadokya mağara otelleri için özel ölçü, ekran üzerinden keşif, ulaştırma teslimat.",
    sections: [
      {
        h2: "Peri Bacaları Arasında Volkanik Tüf Yapıya Özel Pencere Çözümleri",
        paragraphs: [
          "Nevşehir, 1150 metre rakımda, Kapadokya'nın volkanik tüf kayalarının içine oyulmuş mağara evleriyle ünlüdür. <strong>Ürgüp, Avanos ve Göreme</strong>'deki mağara otellerinin pencereleri standart ölçülerden sapar; bu açıklıklara özel ölçü plise perde üretiyoruz. Mağara yapısının doğal ısı yalıtımı sağlaması nedeniyle, bu binalarda güneşlik kumaş yeterli olur.",
          "Hacıbektaş ve Gülşehir'in tarihi taş binalarında, orijinal pencere boyutlarına özel üretim yapıyoruz. Derinkuyu'nun çok katlı yer altı şehri çevresindeki pansiyonlarda, zayıf iç ışık için karartma modeli öneriyoruz. Kozaklı termal bölgesindeki otellerde <em>anti-buhar kaplamalı kumaş</em> kullanıyoruz; termal su buharının kumaş üzerindeki etkisini bu kaplama önler. Nevşehir merkez konutlarında ise step iklimi nedeniyle honeycomb modeli uyguluyoruz.",
        ],
      },
      {
        h2: "Ürgüp'ten Hacıbektaş'a 8 İlçeye Kapadokya Ulaştırma Hattı",
        paragraphs: [
          "Pendik'teki imalathaneden Nevşehir'in 8 ilçesinin tamamına <strong>ekran üzerinden keşif</strong> yaparak hizmet veriyoruz. Kapadokya mağara otelleri için özel ölçü üretim yapıp, ulaştırma ile 1-2 iş günü içinde teslimat sağlıyoruz. Mesaj yoluyla pencere ölçülerinizi alıp, montaj talimatı ile birlikte paketliyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Mağara otelimin standart dışı pencerelerine perde üretir misiniz?", answer: "Evet, Ürgüp, Avanos ve Göreme'deki mağara otellerinin volkanik tüf içine oyulmuş standart dışı pencere açıklıklarına özel ölçü plise perde üretiyoruz. Mağara yapısının doğal ısı yalıtımı olduğu için güneşlik kumaş yeterli olur." },
      { question: "Kozaklı termal bölgesindeki oteller için buhara dayanıklı kumaş var mı?", answer: "Evet, Kozaklı termal bölgesindeki oteller için anti-buhar kaplamalı kumaş kullanıyoruz. Termal su buharının kumaş üzerindeki aşındırıcı ve nemlendirici etkisini bu kaplama önler ve perde ömrünü uzatır." },
    ],
  },
  {
    name: "Kırşehir",
    slug: "kirsehir-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Akçakent", "Akpınar", "Boztepe", "Çiçekdağı", "Kaman", "Kırşehir merkez", "Mucur"],
    intro: "Kırşehir'in 7 ilçesi için İstanbul'daki fabrikamızdan plise perde gönderiyoruz. Orta Anadolu'nun ortasında 985 metre rakımda kurulu bu şehirde step iklimi kışın -15°C'ye, yazın +35°C'ye sıçrar; bu salınım pencere perdesinden <strong>gündüz gölgeleme gece yalıtım</strong> bekler. Kırşehir merkez, Kaman, Mucur ve Akpınar başta olmak üzere ilçe sınırlarının tümüne fotoğraf üzerinden keşif ve kargoyla teslimat yapıyoruz.",
    seoTitle: "Kırşehir Plise Perde - İstanbul Üretim & Kargoyla Teslimat",
    seoDescription: "Kırşehir plise perde: 7 ilçe, step iklimi için gece-gündüz ve honeycomb, fotoğraf üzerinden keşif, kargoyla teslimat.",
    sections: [
      {
        h2: "Kaman Manyezit Yatakları ve Seyfe Gölü Çevresinde Perde Tercihi",
        paragraphs: [
          "Kırşehir, 985 metre rakımda, Orta Anadolu step ikliminin tipik özelliklerini taşır. Kışın karlı ve dondurucu, yazın sıcak ve kurak geçen iklim koşullarında <strong>gece-gündüz plise perde</strong> uyguluyoruz; gündüz güneşlik katmanı step sıcaklığını kırar, gece karartma katmanı camdan ısı kaybını keser.",
          "Kaman'ın manyezit madeni ve çömlek atölyelerinin bulunduğu sanayi bölgesinde, atölye pencereleri için toz tutmaz güneşlik kumaş öneriyoruz. Mucur ve Boztepe'nin tarım arazilerindeki çiftlik evlerinde geniş pencere açıklıklarına katlanır sistem uyguluyoruz. Seyfe Gölü çevresindeki köy evlerinde, gölün alkali havasına dayanıklı kumaş tercih ediyoruz. Akçakent ve Çiçekdağı'nın küçük yerleşimlerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Merkezden Çiçekdağı'na 7 İlçeye Orta Anadolu Kargo Düzeni",
        paragraphs: [
          "İstanbul'daki fabrikamızdan Kırşehir'in 7 ilçesinin tamamına <strong>fotoğraf üzerinden keşif</strong> yaparak hizmet veriyoruz. İletişim uygulamasından pencere ölçülerinizi alıp, kargoyla 1-2 iş günü içinde teslimat gerçekleştiriyoruz. Kaman ve Mucur'a 1 iş gününde, Akçakent ve Çiçekdağı'na 2 iş gününde ulaşıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kırşehir'de Kaman çömlek atölyeleri için perde temin ediyor musunuz?", answer: "Evet, Kaman'ın çömlek atölyelerinin pencereleri için toz tutmaz güneşlik kumaş tercih ediyoruz. Atölye içindeki kil tozunun kumaş yüzeyinde birikmesini bu kumaş tipi azaltır. Fotoğraf üzerinden keşif ile ölçü alıp kargoyla teslimat yapıyoruz." },
      { question: "Kırşehir'in karasal kışında gece-gündüz modeli yeterli olur mu?", answer: "Kırşehir'in 985 metre rakımında gece-gündüz plise perde yeterli olur; gündüz katmanı step sıcaklığını kırar, gece karartma katmanı camdan ısı kaybını keser. Daha fazla yalıtım isteyenler için honeycomb modeli de uygundur." },
    ],
  },
  {
    name: "Kırıkkale",
    slug: "kirikkale-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Bahşılı", "Balışeyh", "Çelebi", "Delice", "Karakeçili", "Keskin", "Kırıkkale merkez", "Sulakyurt", "Yahşihan"],
    intro: "Kırıkkale'nin 9 ilçesi için Pendik'teki imalathanemizde plise perde hazırlıyoruz. Ankara'nın doğusundaki bu sanayi şehrinde 700 metre rakımda step iklimi hüküm sürer; Kızılırmak'ın geçtiği vadide kışın -12°C'ye düşen sıcaklık, sanayi bölgesinde ise <strong>yangın güvenliği</strong> öncelik kazanır. Kırıkkale merkez, Keskin, Delice ve Sulakyurt başta olmak üzere ilçelerin tamamına sanal keşif ve sevkiyatla teslimat yapıyoruz.",
    seoTitle: "Kırıkkale Plise Perde | Pendik İmalathane, Sevkiyat",
    seoDescription: "Kırıkkale plise perde: 9 ilçe, sanayi bölgesi için B1 yangın dayanımlı kumaş, sanal keşif, sevkiyat teslimat.",
    sections: [
      {
        h2: "Kızılırmak Kıyısında Sanayi Şehrinin Yangın Dayanımlı Perde İhtiyacı",
        paragraphs: [
          "Kırıkkale, Ankara'ya 80 kilometre mesafede, Kızılırmak'ın kıyısına kurulmuş bir sanayi ve konut şehridir. Silah ve mühimmat sanayi ile petrol rafinerisi bölgesindeki işçi lojmanlarına <strong>yangın dayanımlı B1 sınıfı kumaş</strong> ile toplu plise perde üretimi yapıyoruz. Kırıkkale merkez konutlarında ise step ikliminin kış soğuğuna karşı honeycomb hücreli ısı yalıtımlı model uyguluyoruz.",
          "Keskin ve Delice'nin Kızılırmak havzasındaki tarım arazilerindeki çiftlik evlerinde, geniş pencere açıklıklarına katlanır güneşlik sistem uyguluyoruz. Bahşılı ve Balışeyh'in küçük yerleşimlerinde standart ölçülere hızlı üretim yapıyoruz. Karakeçili ve Sulakyurt'ta sanal keşif ile ölçü alıp sevkiyatla teslimat sağlıyoruz.",
        ],
      },
      {
        h2: "Merkezden Delice'ye 9 İlçeye Ankara Komşusu Kargo Ağı",
        paragraphs: [
          "Pendik'teki imalathanemizden Kırıkkale'nin 9 ilçesinin tamamına <strong>sanal keşif</strong> yöntemiyle hizmet veriyoruz. Mesaj yoluyla pencere ölçülerinizi alıp, sevkiyatla 1-2 iş günü içinde teslimat yapıyoruz. Kırıkkale'in Ankara'ya yakınlığı sayesinde merkez ilçelere 1 iş gününde ulaşıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kırıkkale sanayi bölgesi işçi lojmanlarına toplu perde siparişi verilebilir mi?", answer: "Evet, Kırıkkale silah sanayi ve petrol rafinerisi bölgesindeki işçi lojman blokları için yangın dayanımlı B1 sınıfı kumaşla toplu plise perde üretimi yapıyoruz. Sanal keşif ile ölçü alıp sevkiyatla toplu teslimat sağlıyoruz." },
      { question: "Kırıkkale'nin karasal ikliminde hangi perde modeli ısı tasarrufu sağlar?", answer: "Kırıkkale merkez konutlarında honeycomb hücreli plise perde öneriyoruz. Petek yapısının içinde hapsolan hava tabakası, cam yüzeyden gelen kış soğuğunu kırarak ısıtma giderlerini düşürür. Keskin ve Delice'da geniş pencere için katlanır güneşlik de uygundur." },
    ],
  },
  {
    name: "Çankırı",
    slug: "cankiri-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Atkaracalar", "Bayramören", "Çankırı merkez", "Çerkeş", "Eldivan", "Eskipazar", "Ilgaz", "Kızılırmak", "Korgun", "Kurşunlu", "Orta", "Şabanözü", "Yapraklı"],
    intro: "Çankırı'nın 13 ilçesi için Pendik'teki atölyemizde plise perde üretiyoruz. Ilgaz Dağı'nın sert kış koşullarının hissedildiği bu geçiş kuşağında, <strong>petek yapılı honeycomb sistemlerin pencere yalıtımına katkısı</strong> belirgindir. Çerkeş, Orta ve Kurşunlu başta olmak üzere ilçelerin tamamına görüntülü keşif ve sevkiyat ile gönderim yapıyoruz.",
    seoTitle: "Çankırı Plise Perde - Ilgaz İklimine Özel Üretim & Sevkiyat",
    seoDescription: "Çankırı plise perde: 13 ilçe, Ilgaz geçiş iklimine uygun honeycomb ve karartma modelleri, görüntülü keşif ile sevkiyat.",
    sections: [
      {
        h2: "Ilgaz Eteklerinden Tuz Madenine Çankırı Pencereleri",
        paragraphs: [
          "Çankırı, İç Anadolu'nun kuzey kenarında Karadeniz'e bakan yamaçlarla iç kesim step arasında sıkışmış bir geçiş kuşağıdır. Ilgaz Dağı kütlesinin oluşturduğu soğuk hava birikimi, kış aylarında merkezde bile eksi değerlerin altına inilmesine yol açar. Böyle bir iklimde <strong>honeycomb petekli plise perde</strong>, cam ile iç mekân arasına hava yastığı yerleştirerek ısı köprüsünü zayıflatır. Ilgaz kayak merkezi civarındaki konaklama tesislerinde karartma katmanıyla birleştirilmiş honeycomb uygulaması yapıyoruz.",
          "Çankırı merkezdeki tuz madeni tesislerine bağlı lojman blokları için <em>yangına dayanıklı B1 sınıfı kumaş</em> tercih ederek toplu üretim yapıyoruz. Çerkeş ile Kurşunlu'nun geniş tarım alanlarındaki çiftlik binalarında yüksek pencerelere katlanır güneşlik sistemini monte ediyoruz. Şabanözü, Orta ve Yapraklı gibi nüfusu az olan ilçelerde standart ölçü stoklarımızdan hızlı kesim yapıp sevkiyata veriyoruz.",
        ],
      },
      {
        h2: "Çankırı İlçelerine Pendik'teki Atölyemizden Sevkiyat",
        paragraphs: [
          "Üretim aşamalarının tamamı Pendik'teki atölyemizde tamamlanır; ardından Çankırı'nın 13 ilçesine sevkiyat ile ulaştırılır. Pencere ölçülerini telefonla bize ileten müşterilerimiz için <strong>görüntülü keşif yöntemiyle</strong> boyut tespiti yapıp, onay sonrası ürünü yola çıkarıyoruz. Eldivan, Korgun ve Bayramören gibi küçük yerleşimlere bile eşit hızda teslimat gerçekleştiriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Çankırı tuz madeni bölgesindeki lojmanlara toplu sipariş verilebilir mi?", answer: "Evet, Çankırı merkezdeki tuz madeni tesislerine bağlı lojman blokları için yangına dayanıklı B1 sınıfı kumaşla toplu plise perde üretimi yapıyoruz. Pendik'teki atölyemizde kesim tamamlandıktan sonra sevkiyat ile toplu teslimat sağlıyoruz." },
      { question: "Ilgaz Dağı civarındaki konutlar için hangi perde tipi daha uygun?", answer: "Ilgaz'ın sert kış koşullarında honeycomb petekli plise perde öneriyoruz. Petek içinde hapsolan hava tabakası cam yüzeyden gelen soğuğu kırar; kayak merkezi çevresindeki otellerde karartma ile birleştirilmiş honeycomb uygulaması da yapıyoruz." },
    ],
  },
  {
    name: "Yozgat",
    slug: "yozgat-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Akdağmadeni", "Aydıncık", "Boğazlıyan", "Çandır", "Çayıralan", "Çekerek", "Kadışehri", "Saraykent", "Sarıkaya", "Sorgun", "Şefaatli", "Yenifakılı", "Yerköy", "Yozgat merkez"],
    intro: "Yozgat'ın 14 ilçesi için Esenyalı'daki üretim tesisimizde plise perde hazırlıyoruz. Yaklaşık 1298 metrelik merkez rakımıyla İç Anadolu'nun en yüksek ovalarından birinde yer alan şehirde, <strong>çift petekli honeycomb sistemlerinin ısı tutucu etkisi</strong> kış aylarında fark yaratır. Sorgun, Boğazlıyan ve Yerköy başta olmak üzere her ilçeye uzaktan keşif ve kurye ile gönderim yapıyoruz.",
    seoTitle: "Yozgat Plise Perde - Bozok Yaylası İçin Özel Üretim & Kurye",
    seoDescription: "Yozgat plise perde: 14 ilçe, 1298m rakımda çift petekli honeycomb ve termal bölge kumaşları, uzaktan keşif ile kurye.",
    sections: [
      {
        h2: "Bozok Yaylasının Sert İkliminde Plise Perde Seçimi",
        paragraphs: [
          "Yozgat, Bozok Platosu'nun üzerinde 1298 metre yükseklikte uzanır ve bu rakım kış aylarında termometrenin uzun süre sıfırın altında kalmasına neden olur. Kar örtüsünün haftalarca erimediği bu dönemde <strong>çift petekli honeycomb plise perde</strong>, pencere camından sızan dondurucu havayı iki katmanlı hava yastığıyla süzerek odanın ısısını korur. Merkez ilçedeki apartman dairelerinde bu modeli sıkça uyguluyoruz.",
          "Sorgun ve Boğazlıyan ovalarındaki geniş çiftlik binalarında katlanır güneşlik sistemini tercih ediyoruz. Akdağmadeni ile Sarıkaya'nın termal su kaynakları çevresindeki otellerde <em>anti-buhar kaplamalı kumaş</em> kullanarak sürekli nemin kumaş yapısını bozmasını engelliyoruz. Yerköy sanayi bölgesindeki işçi blokları için toplu üretim yapıyor, Şefaatli ve Yenifakılı gibi küçük yerleşimlerde standart ölçü stoklarımızdan hızlı gönderim sağlıyoruz.",
        ],
      },
      {
        h2: "Yozgat İlçelerine Yüksek Rakım İçin Özel Üretim Gönderimi",
        paragraphs: [
          "Esenyalı'daki üretim tesisimizde Yozgat'ın 14 ilçesi için plise perde kesimi yapıyoruz. Müşterilerimiz mesajlaşarak bize ulaşır ve <strong>uzaktan keşif</strong> sayesinde pencere boyutlarını iletir; üretim bittiğinde ürün kurye ile teslim edilir. Çandır, Çayıralan ve Çekerek gibi küçük ilçelere bile aynı gönderim hızıyla hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Yozgat'ın yüksek rakımında honeycomb perde ısı tasarrufu sağlar mı?", answer: "Evet, Yozgat'ın 1298 metre rakımında çift petekli honeycomb plise perde öneriyoruz. İki katmanlı petek yapısı camdan gelen dondurucu havayı süzerek odanın ısısını korur ve ısıtma giderlerini düşürür." },
      { question: "Boğazlıyan ve Sorgun çiftlik evlerine geniş pencere perdesi üretiyor musunuz?", answer: "Boğazlıyan ve Sorgun ovalarındaki geniş pencereli çiftlik binaları için katlanır güneşlik plise perde sistemini üretiyoruz. Esenyalı'daki üretim tesisimizde özel ölçü kesim yapıp kurye ile gönderiyoruz." },
    ],
  },
  {
    name: "Kayseri",
    slug: "kayseri-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar", "İncesu", "Kocasinan", "Melikgazi", "Özvatan", "Pınarbaşı", "Sarıoğlan", "Sarız", "Talas", "Tomarza", "Yahyalı", "Yeşilhisar"],
    intro: "Kayseri'nin 16 ilçesi için İstanbul'daki fabrikamızda plise perde hazırlıyoruz. Erciyes Dağı'nın gölgesinde 1054 metre rakımda yer alan şehirde kışlar -20°C'ye kadar iner; <strong>honeycomb ve gece-gündüz modellerini</strong> bu sıcaklık farkına göre öneriyoruz. Melikgazi, Kocasinan ve Talas ilçelerine online keşif ve teslimat ile gönderim yapıyoruz.",
    seoTitle: "Kayseri Plise Perde - Erciyes Eteği İçin Üretim & Teslimat",
    seoDescription: "Kayseri plise perde: 16 ilçe, Erciyes iklimine uygun honeycomb, gece-gündüz ve B1 yangın dayanımlı modeller, online keşif ile teslimat.",
    sections: [
      {
        h2: "Erciyes'in Gölgesinde Kayseri Konutları İçin Perde",
        paragraphs: [
          "Kayseri, Erciyes'in 3917 metrelik zirvesinin etkisiyle yazın öğle sıcakları ile kışın gece donları arasında geniş bir sıcaklık aralığına sahiptir. Melikgazi ve Kocasinan'daki modern site dairelerinde <strong>gece-gündüz plise perde</strong> uygulayarak gündüz güneşlik katmanıyla ısınmayı, gece karartma katmanıyla soğuk hava sızmasını kontrol altına alıyoruz. Organize sanayi bölgesindeki fabrika idari binaları ve lojman blokları için <em>B1 yangın dayanımlı kumaş</em> tercih ederek toplu üretim yapıyoruz.",
          "Talas'ın tarihi Rum evlerinin dar ve yüksek pencerelerine özel ölçü kesim uyguluyoruz. Develi ve Yahyalı'nın Toroslar eteğinde yer alan beldelerinde iklim daha ılıman olduğundan standart güneşlik modelleri yeterli gelir. Bünyan'ın halı dokuma atölyelerinin idari bölümlerine, Pınarbaşı ve Sarız'ın kırsal yerleşimlerindeki geniş pencerelere ise katlanır sistem üretiyoruz.",
        ],
      },
      {
        h2: "Kayseri'nin 16 İlçesine Sanayi ve Ticaret Hattı Teslimat",
        paragraphs: [
          "İstanbul'daki fabrikamızda Kayseri'nin 16 ilçesi için plise perde üretimi gerçekleştiriyoruz. Görüntülü arama ile bize ulaşan müşterilerimiz <strong>online keşif</strong> sayesinde pencere ölçülerini aktarır; üretim sonrası ürün teslimat ile eline ulaşır. Akkışla, Felahiye, Özvatan ve Tomarza gibi küçük ilçelere dahi ilçe sınırlarının tümüne eşit gönderim hızıyla hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kayseri organize sanayi işçi blokları için B1 sınıfı perde üretimi yapıyor musunuz?", answer: "Evet, Kayseri organize sanayi bölgesindeki fabrika idari binaları ve lojman blokları için yangına dayanıklı B1 sınıfı kumaşla toplu plise perde üretimi yapıyoruz. İstanbul'daki fabrikamızda kesim yapıp teslimat ile toplu gönderim sağlıyoruz." },
      { question: "Erciyes eteklerindeki Talas konutlarında hangi perde modeli önerilir?", answer: "Talas'ın Erciyes etkisindeki ikliminde gece-gündüz plise perde öneriyoruz. Gündüz güneşlik katmanı sıcaklığı filtreler, gece karartma katmanı soğuk hava sızmasını engeller. Tarihi Rum evlerinin dar pencerelerine özel ölçü kesim de yapıyoruz." },
    ],
  },
  {
    name: "Sivas",
    slug: "sivas-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Akıncılar", "Altınyayla", "Divriği", "Doğanşar", "Gemerek", "Gölova", "Gürün", "Hafik", "İmranlı", "Kangal", "Koyulhisar", "Sivas merkez", "Suşehri", "Şarkışla", "Ulaş", "Yıldızeli", "Zara"],
    intro: "Sivas'ın 17 ilçesi için Pendik üretim merkezimizde plise perde hazırlıyoruz. 1285 metre merkez rakımıyla İç Anadolu'nun en sert kışlarına sahip illerinden birinde, <strong>çift petekli honeycomb sistemlerin pencere yalıtımına katkısı</strong> belirgindir. Sivas merkez, Gemerek ve Şarkışla başta olmak üzere beldelerin hepsine dijital keşif ve gönderim ile ulaştırma yapıyoruz.",
    seoTitle: "Sivas Plise Perde - Sert Kış İklimine Özel Üretim & Gönderim",
    seoDescription: "Sivas plise perde: 17 ilçe, 1285m rakımda çift petekli honeycomb ve Divriği tarihi binalarına özel ölçü, dijital keşif ile gönderim.",
    sections: [
      {
        h2: "Sivas'ın Dondurucu Kışında Pencere Yalıtımı",
        paragraphs: [
          "Sivas, 1285 metrelik merkez rakımı ve açık step topografyası nedeniyle kış aylarında -30°C'ye kadar düşen sıcaklıklar ve haftalarca süren kar örtüsüyle İç Anadolu'nun en sert iklimine sahip illerden biridir. Bu koşullarda <strong>çift petekli honeycomb plise perde</strong>, iki katmanlı hava yastığıyla camdan içeri sızan dondurucu akımı kırar ve odanın ısısını uzun süre muhafaza eder. Merkez ilçedeki apartman dairelerinde bu modeli öne çıkarıyoruz.",
          "Divriği'de UNESCO Dünya Mirası listesindeki Ulu Camii ve Darüşşifa çevresindeki tarihi yapılara zarar vermemek için pencere içine monte edilen özel ölçü plise perde üretiyoruz. Kangal'ın balıklı termal kaynak bölgesindeki otellerde <em>anti-buhar kaplamalı kumaş</em> kullanarak sürekli nemin kumaşı bozmasını engelliyoruz. Gemerek ve Şarkışla'nın geniş tarım alanlarındaki çiftlik binalarında katlanır güneşlik sistemini uyguluyoruz.",
        ],
      },
      {
        h2: "Sivas İlçelerine Tarihi İpek Yolu Güzergahı Gönderim Ağı",
        paragraphs: [
          "Pendik üretim merkezimizde Sivas'ın 17 ilçesi için plise perde kesiyoruz. Fotoğraf paylaşarak bize ulaşan müşterilerimiz <strong>dijital keşif</strong> aracılığıyla pencere ölçülerini aktarır; üretim tamamlanınca ürün gönderim ile teslim alınır. Akıncılar, Doğanşar, Gölova ve İmranlı gibi küçük ilçelere bile aynı hızda hizmet götürüyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Sivas'ın -30°C'yi gören kışında pencere yalıtımı için ne önerirsiniz?", answer: "Sivas'ın 1285 metre rakımındaki sert kışında çift petekli honeycomb plise perde öneriyoruz. İki katmanlı petek yapısı camdan gelen dondurucu havayı kırarak odanın ısısını korur ve ısıtma giderlerini düşürür." },
      { question: "Divriği tarihi binalarına zarar vermeden perde monte ediliyor mu?", answer: "Evet, Divriği'nin UNESCO mirası Ulu Camii çevresindeki tarihi yapılara zarar vermemek için pencere içine monte edilen özel ölçü plise perde üretiyoruz. Ahşap veya taş çerçeveye hasar vermeden kurulur." },
    ],
  },
  {
    name: "Tokat",
    slug: "tokat-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Almus", "Artova", "Başçiftlik", "Erbaa", "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Tokat merkez", "Turhal", "Yeşilyurt", "Zile"],
    intro: "Tokat'ın 12 ilçesi için İstanbul atölyesinde plise perde hazırlıyoruz. İç Anadolu'nun karasal havası ile Karadeniz'in ılıman iklimi arasındaki geçiş kuşağında yer alan şehirde, <strong>gece-gündüz modellerinin çift katmanlı yapısı</strong> sıcaklık farklarını dengelemeye yardımcı olur. Tokat merkez ve Turhal başta olmak üzere ilçe bazında tamamına mesafeli keşif ve nakliye ile gönderim yapıyoruz.",
    seoTitle: "Tokat Plise Perde - Yeşilırmak Havzası İçin Üretim & Nakliye",
    seoDescription: "Tokat plise perde: 12 ilçe, geçiş iklimine uygun gece-gündüz ve Yeşilırmak nemine dayanıklı modeller, mesafeli keşif ile nakliye.",
    sections: [
      {
        h2: "Yeşilırmak Havzasında Tokat Evleri İçin Plise Çözüm",
        paragraphs: [
          "Tokat, Yeşilırmak'ın oluşturduğu bereketli vadinin iki yanında uzanır ve step iklimi ile Karadeniz ılımanlığının karşılaştığı bir kuşakta bulunur. Gündüzleri sıcaklığın yükseldiği yaz aylarında güneşlik katman, geceleri soğuyan kış aylarında karartma katman devreye girer; bu nedenle <strong>gece-gündüz plise perde</strong> sistemini Tokat konutlarında öne çıkarıyoruz. Merkez ilçedeki apartman dairelerinde bu modeli sıkça uyguluyoruz.",
          "Turhal'daki şeker fabrikası bölgesinin işçi lojman blokları için toplu üretim yapıyoruz. Niksar ve Erbaa'nın Yeşilırmak vadisindeki evlerinde <em>nehir nemine dayanıklı kumaş</em> tercih ederek sürekli nemin kumaş yapısını bozmasını engelliyoruz. Zile ve Reşadiye'nin geniş tarım alanlarındaki çiftlik binalarında katlanır güneşlik sistemini uyguluyor, Almus ve Başçiftlik gibi küçük ilçelerde standart ölçü stoklarımızdan hızlı gönderim sağlıyoruz.",
        ],
      },
      {
        h2: "Tokat'ın 12 İlçesine Geçiş Kuşağı İklimine Göre Üretim",
        paragraphs: [
          "İstanbul atölyesinde Tokat'ın 12 ilçesi için plise perde kesiyoruz. Mobil iletişimle bize ulaşan müşterilerimiz <strong>mesafeli keşif</strong> sayesinde pencere ölçülerini aktarır; üretim sonrası ürün nakliye ile teslim alınır. Artova, Sulusaray ve Yeşilyurt gibi küçük yerleşimlere dahi aynı gönderim hızıyla hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Tokat'ın geçiş ikliminde gece-gündüz perde nasıl fayda sağlar?", answer: "Tokat'ın step ile Karadeniz iklimi arasındaki geçiş kuşağında gece-gündüz plise perde öneriyoruz. Gündüz güneşlik katmanı sıcaklığı filtreler, gece karartma katmanı soğuk hava sızmasını engeller ve sıcaklık farklarını dengeler." },
      { question: "Turhal şeker fabrikası lojmanlarına toplu perde siparişi alınır mı?", answer: "Evet, Turhal'daki şeker fabrikası bölgesinin işçi lojman blokları için İstanbul atölyesinde toplu plise perde üretimi yapıyoruz. Mesafeli keşif ile ölçü alıp nakliye ile toplu teslimat sağlıyoruz." },
    ],
  },
  {
    name: "Amasya",
    slug: "amasya-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Amasya merkez", "Göynücek", "Gümüşhacıköy", "Hamamözü", "Merzifon", "Suluova", "Taşova", "Tercan"],
    intro: "Amasya'nın 7 ilçesi için Marmara üretim hattımızda plise perde hazırlıyoruz. Yeşilırmak'ın iki yamacına serpilmiş tarihi şehirde, <strong>Osmanlı dönemi ahşap pencereli evlere özel ölçü üretim</strong> yapıyoruz. Amasya merkez ve Merzifon başta olmak üzere ilçelerin tamamına sanal keşif ve dağıtım ile gönderim sağlıyoruz.",
    seoTitle: "Amasya Plise Perde | Yeşilırmak Vadisi, Özel Üretim",
    seoDescription: "Amasya plise perde: 7 ilçe, tarihi Osmanlı evlerine özel ölçü ve Yeşilırmak nemine dayanıklı modeller, sanal keşif ile dağıtım.",
    sections: [
      {
        h2: "Yeşilırmak İki Yakasında Amasya'nın Tarihi Pencereleri",
        paragraphs: [
          "Amasya, Yeşilırmak'ın iki yakasındaki yamaçlara serpilmiş tarihi Osmanlı evleriyle tanınır. Bu evlerin ahşap pencereleri günümüzün standart ölçülerine uymaz; bu nedenle merkez ilçedeki <strong>tarihi yapılara özel ölçü plise perde</strong> üretiyoruz. Pencere içine monte edilen sistem, ahşap çerçeveye ve tarihi dokuya zarar vermeden kurulur. Vadi tabanındaki nemli havaya karşı <em>anti-nem kaplamalı kumaş</em> tercih ediyoruz.",
          "Merzifon ve Suluova'nın geniş tarım alanlarındaki çiftlik binalarında katlanır güneşlik sistemini uyguluyoruz. Amasya'nın karasal-Karadeniz geçiş ikliminde kış soğuklarına karşı honeycomb modelini de öneriyoruz. Gümüşhacıköy ve Hamamözü gibi küçük ilçelerde standart ölçü stoklarımızdan hızlı kesim yapıp kargoya veriyoruz. Taşova'nın Yeşilırmak kıyısındaki evlerinde nehir nemine dayanıklı kumaş kullanıyoruz.",
        ],
      },
      {
        h2: "Amasya İlçelerine Vadi İklimine Uygun Perde Dağıtımı",
        paragraphs: [
          "Marmara üretim hattımızda Amasya'nın 7 ilçesi için plise perde kesiyoruz. WhatsApp'tan bize yazan müşterilerimiz <strong>sanal keşif</strong> yöntemiyle pencere ölçülerini iletir; üretim tamamlanınca ürün dağıtım ile teslim alınır. Göynücek ve Tercan gibi küçük yerleşimlere dahi aynı gönderim hızıyla hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Amasya'nın ahşap pencereli tarihi evlerine perde takılır mı?", answer: "Evet, Amasya merkezdeki tarihi Osmanlı evlerinin ahşap pencerelerine özel ölçü plise perde üretiyoruz. Pencere içine monte edilen sistem ahşap çerçeveye ve tarihi dokuya zarar vermeden kurulur." },
      { question: "Yeşilırmak nemine dayanıklı perde kumaşı var mı?", answer: "Evet, Yeşilırmak vadisindeki nemli havaya karşı anti-nem kaplamalı kumaş tercih ediyoruz. Sürekli nemin kumaş yapısını bozmasını engeller; Taşova ve Erbaa kıyısındaki evlerde bu kumaşı öneriyoruz." },
    ],
  },
  {
    name: "Eskişehir",
    slug: "eskisehir-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Odunpazarı", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Tepebaşı"],
    intro: "Eskişehir'in 14 ilçesi için Pendik'teki imalathanemizde plise perde hazırlıyoruz. İki büyük üniversitenin genç nüfusuyla hareketli olan şehirde, <strong>öğrenci evleri için ekonomik güneşlik modelleri ve karasal iklim için honeycomb seçeneklerini</strong> birlikte sunuyoruz. Odunpazarı ve Tepebaşı merkez ilçelerine ekran üzerinden keşif ve ulaştırma ile teslimat yapıyoruz.",
    seoTitle: "Eskişehir Plise Perde | Öğrenci Şehri Üretim",
    seoDescription: "Eskişehir plise perde: 14 ilçe, öğrenci evlerine ekonomik güneşlik, Odunpazarı tarihi evlerine özel ölçü ve B1 sanayi modelleri, ekran keşif ile ulaştırma.",
    sections: [
      {
        h2: "Porsuk Çayı Kenarında Eskişehir Evleri İçin Plise Perde",
        paragraphs: [
          "Eskişehir, Porsuk Çayı'nın iki yakasında uzanan ve iki büyük üniversitenin genç nüfusuyla canlı kalan bir şehirdir. Öğrenci evleri ve yurtlarında <strong>ekonomik fiyatlı güneşlik kumaş plise perde</strong> öneriyoruz; bütçe dostu olmasına karşın ışık kontrolü sağlar. Odunpazarı'nın restore edilmiş tarihi mahallelerindeki ahşap pencerelere özel ölçü kesim yapıyoruz.",
          "Tepebaşı ve Odunpazarı merkez ilçelerindeki modern site dairelerinde standart ölçülere hızlı üretim yapıyoruz. Eskişehir organize sanayi bölgesindeki fabrika idari binaları ve lojman blokları için <em>yangına dayanıklı B1 sınıfı kumaş</em> tercih ederek toplu üretim yapıyoruz. Karasal iklimin hissedildiği kış aylarında honeycomb modelini de öneriyoruz.",
        ],
      },
      {
        h2: "Eskişehir'in 14 İlçesine Öğrenci ve Sanayi Hattı Gönderim",
        paragraphs: [
          "Pendik'teki imalathanemizde Eskişehir'in 14 ilçesi için plise perde kesiyoruz. Mesaj yoluyla bize ulaşan müşterilerimiz <strong>ekran üzerinden keşif</strong> sayesinde pencere ölçülerini aktarır; üretim sonrası ürün ulaştırma ile teslim alınır. Alpu, Beylikova, Han ve İnönü gibi küçük ilçelere dahi her ilçeye eşit gönderim hızıyla hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Eskişehir öğrenci evleri için bütçe dostu plise perde bulunur mu?", answer: "Evet, öğrenci evleri ve yurtları için ekonomik fiyatlı güneşlik kumaş plise perde modellerimiz mevcuttur. Pendik'teki imalathanemizde üretim yapıp ekran üzerinden keşif ile ölçü alarak ulaştırma ile teslimat sağlıyoruz." },
      { question: "Odunpazarı restore edilmiş evlerine özel ölçü perde yapılır mı?", answer: "Evet, Odunpazarı'nın restore edilmiş tarihi mahallelerindeki ahşap pencerelere özel ölçü plise perde üretiyoruz. Pencere içine monte edilen sistem ahşap çerçeveye zarar vermeden kurulur." },
    ],
  },
  // --- KARADENİZ BÖLGESİ ---
  {
    name: "Zonguldak",
    slug: "zonguldak-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Alaplı", "Çaycuma", "Devrek", "Ereğli", "Gökçebey", "Kilimli", "Kozlu", "Zonguldak merkez"],
    intro: "Zonguldak'ın 8 ilçesi için Pendik'teki atölyemizde plise perde hazırlıyoruz. Türkiye'nin kömür madenciliği başkentinde, <strong>yağışlı Karadeniz iklimine uygun anti-nem kaplamalı kumaş modellerini</strong> öneriyoruz. Maden işçi lojmanları için yangına dayanıklı B1 sınıfı kumaşla toplu çözümler mevcuttur.",
    seoTitle: "Zonguldak Plise Perde - Maden Bölgesi İçin Üretim & Kargoyla",
    seoDescription: "Zonguldak plise perde: 8 ilçe, yağışlı Karadeniz iklimine anti-nem kumaş, maden lojmanlarına B1 yangın dayanımlı modeller, fotoğraf üzerinden keşif, kargo.",
    sections: [
      {
        h2: "Karadeniz'in Nemli Havasında Zonguldak Pencerelerine Perde",
        paragraphs: [
          "Zonguldak, Türkiye'nin kömür madenciliği başkentidir ve Karadeniz kıyısında yıllık 1200 mm üzerinde yağış alan nemli bir iklime sahiptir. Maden ocakları çevresindeki işçi lojmanları ve sosyal tesisler için <strong>yangına dayanıklı B1 sınıfı kumaş</strong> tercih ederek toplu plise perde üretimi yapıyoruz. Ereğli Demir Çelik fabrika bölgesindeki idari binalar ve lojman blokları için de benzer çözümler sunuyoruz.",
          "Nemli iklimde kumaşın küflenmesi ve yapısının bozulması riski bulunduğundan <em>anti-nem kaplamalı kumaş tiplerini</em> öneriyoruz. Devrek ve Çaycuma'nın ormanlık kesimlerindeki evlerde doğayla uyumlu renk seçenekleri sunuyoruz. Alaplı sahil kesiminde deniz nemine dayanıklı modeller kullanıyor, Kilimli ve Kozlu gibi maden yerleşimlerinde B1 kumaşlı toplu üretim yapıyoruz.",
        ],
      },
      {
        h2: "Zonguldak İlçelerine Maden Bölgesi Kargoyla Çözüm Hattı",
        paragraphs: [
          "Pendik'teki atölyemizde Zonguldak'ın 8 ilçesi için plise perde kesiyoruz. İletişim uygulamasından bize yazan müşterilerimiz <strong>fotoğraf üzerinden keşif</strong> yöntemiyle pencere ölçülerini iletir; üretim sonrası ürün kargoyla teslim alınır. Gökçebey gibi iç kesim ilçelerine dahi ilçe sınırlarının tümüne eşit gönderim hızıyla hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Zonguldak maden ocakları çevresindeki lojmanlara yangına dayanıklı perde var mı?", answer: "Evet, Zonguldak maden işçi lojmanları ve sosyal tesisler için yangına dayanıklı B1 sınıfı kumaşla toplu plise perde üretimi yapıyoruz. Pendik'teki atölyemizde kesim yapıp kargoyla toplu teslimat sağlıyoruz." },
      { question: "Karadeniz'in nemli ikliminde perde kumaşı küflenir mi, hangi tip önerirsiniz?", answer: "Zonguldak'ın yıllık 1200 mm üzeri yağışlı ikliminde anti-nem kaplamalı kumaş tiplerini öneriyoruz. Sürekli nemin kumaş yapısını bozmasını ve küflenmesini engeller; Alaplı sahil kesiminde deniz nemine dayanıklı modeller de mevcuttur." },
    ],
  },
  {
    name: "Karabük",
    slug: "karabuk-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Eflani", "Eskipazar", "Karabük merkez", "Ovacık", "Safranbolu", "Yenice"],
    intro: "Karabük'ün 6 ilçesi için Esenyalı'daki üretim tesisimizde plise perde hazırlıyoruz. Demir çelik sanayinin kalbi olan şehirde, <strong>Kardemir fabrika lojmanlarına yangına dayanıklı B1 kumaş</strong> ile toplu çözümler sunuyoruz. Safranbolu'nun UNESCO Dünya Mirası tarihi Türk evleri için özel ölçü üretim yapıyoruz.",
    seoTitle: "Karabük Plise Perde | Demir Çelik, Safranbolu Üretim",
    seoDescription: "Karabük plise perde: 6 ilçe, Kardemir lojmanlarına B1 yangın dayanımlı, Safranbolu UNESCO evlerine özel ölçü modeller, iletişim tabanlı keşif ile sevkiyat.",
    sections: [
      {
        h2: "Demir Çelik Kokusunda Karabük Evlerine Plise Perde",
        paragraphs: [
          "Karabük, Türkiye'nin demir çelik sanayinin kalbidir ve Kardemir fabrika bölgesi şehrin ekonomik omurgasını oluşturur. Bu bölgedeki işçi lojmanları ve idari binalar için <strong>yangına dayanıklı B1 sınıfı kumaş</strong> tercih ederek toplu plise perde üretimi yapıyoruz. Sanayi bölgesine sevkiyatla hızlı teslimat sağlıyoruz.",
          "Safranbolu, UNESCO Dünya Mirası listesindeki tarihi Türk evleriyle dünya çapında tanınır. Bu evlerin ahşap pencereleri günümüzün standart ölçülerine uymaz; bu nedenle <em>özel ölçü plise perde</em> üretiyoruz. Pencere içine monte edilen sistem ahşap çerçeveye ve tarihi dokuya zarar vermeden kurulur. Orijinal evlerle uyumlu renk seçenekleri sunuyor, Eflani ve Ovacık'ın kırsal yerleşimlerindeki geniş pencerelere katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Karabük'ün 6 İlçesine Sanayi ve Miras Teslimat Planı",
        paragraphs: [
          "Esenyalı'daki üretim tesisimizde Karabük'ün 6 ilçesi için plise perde kesiyoruz. Telefonla bize ulaşan müşterilerimiz <strong>iletişim tabanlı keşif</strong> sayesinde pencere ölçülerini aktarır; üretim sonrası ürün sevkiyatla teslim alınır. Yenice ve Eskipazar ilçelerine dahi beldelerin hepsine eşit gönderim hızıyla hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Safranbolu UNESCO evlerinin ahşap pencerelerine perde takılıyor mu?", answer: "Evet, Safranbolu'nun UNESCO Dünya Mirası tarihi Türk evlerinin ahşap pencerelerine özel ölçü plise perde üretiyoruz. Pencere içine monte edilen sistem ahşap çerçeveye ve tarihi dokuya zarar vermeden kurulur; orijinal evlerle uyumlu renk seçenekleri sunuyoruz." },
      { question: "Kardemir fabrika lojmanlarına toplu B1 perde siparişi verilebilir mi?", answer: "Evet, Kardemir fabrika bölgesindeki işçi lojmanları ve idari binalar için yangına dayanıklı B1 sınıfı kumaşla toplu plise perde üretimi yapıyoruz. Esenyalı'daki üretim tesisimizde kesim yapıp sevkiyatla toplu teslimat sağlıyoruz." },
    ],
  },
  {
    name: "Bartın",
    slug: "bartin-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Amasra", "Bartın merkez", "Kurucaşile", "Ulus"],
    intro: "Bartın'ın 4 ilçesinde plise perde üretimi yapıyoruz. <strong>Türkiye'nin tek nehir üzerinden denize açılan ili</strong> olan Bartın'da, yıllık 1300 mm'nin üzerinde yağış ölçülür; bu nedenle kumaş seçiminde nem direnci belirleyici faktördür. Pendik'teki atölyemizden Amasra, Ulus ve Kurucaşile'ye kurye ile ulaştırıyoruz.",
    seoTitle: "Bartın Plise Perde - Nem Dayanımlı Kumaş & Kurye Teslimatı",
    seoDescription: "Bartın plise perde: 4 ilçe, nehir vadisi nemine dayanıklı kumaş, görüntülü keşif ve kurye gönderimi.",
    sections: [
      {
        h2: "Bartın Nehri Vadisinde Nem Bariyerli Perde Sistemleri",
        paragraphs: [
          "Bartın, yüzölçümü bakımından küçük olmasına rağmen yağış rejimi açısından Türkiye'nin en yoğun illerinden biridir. Bartın Çayı'nın geçtiği vadi boyunca yerleşim kurulmuştur ve nehir buharlaşması iç kesimlerde <strong>sürekli yüksek nem</strong> yaratır. Bu koşullarda standart polyester kumaşlar 24-36 ay içinde küflenme ve renk solması yaşar; biz ise üretimde <em>anti-nem kaplamalı</em> kumaş tercih ediyoruz.",
          "Amasra'da Ceneviz kalesi surlarına bitişik balıkçı evlerinin pencereleri çoğunlukla standart dışı ebadır. Bu yapılar için <strong>pencere içine montajlı özel ölçü plise perde</strong> üretiyor ve duvara matkap vurmadan kurulum sağlıyoruz. Kurucaşile'nin Karadeniz'e bakan balıkçı limanı çevresindeki kafe ve restoranlarda geniş cam yüzeyleri için katlanır sistem uyguluyor, Ulus'un ormangülü yaylalarındaki ahşap yayla evlerinde ise ısı yalıtımlı honeycomb modelini öneriyoruz.",
        ],
      },
      {
        h2: "Pendik Atölyemizden Bartın'ın Dört İlçesine Kurye Akışı",
        paragraphs: ["Bartın merkez dâhil ilçelerin tamamına, Pendik'teki atölyemizde hazırladığımız plise perdeleri kurye ile yolluyoruz. <strong>Görüntülü keşif</strong> uygulamasıyla telefonla pencere ölçülerinizi alıyor; üretim bitiminden sonra 2-4 iş günü içinde elinize ulaşmasını sağlıyoruz. Bartın'ın yağışlı havası göze alınarak kumaş tavsiyesi veriyoruz."],
      },
    ],
    faqItems: [
      { question: "Amasra'daki eski balıkçı evimin dar penceresine perde sığar mı?", answer: "Sığar. Amasra'nın Ceneviz kalesi çevresindeki evlerinde 40-60 cm arası dar pencereler yaygındır; bu ölçüler için pencere içine oturan özel ebat plise perde üretiyoruz. Duvara delik açmadan, çerçeve içine kademeli montaj yapıyoruz." },
      { question: "Bartın'da kurye ile perde almak ne kadar sürer?", answer: "Pendik'teki atölyemizden Bartın'ın ilçelerinin tamamına kurye teslimat süresi ortalama 2-4 iş günüdür. Görüntülü keşif ardından ölçü alımı ve üretim dâhil toplam süre 5-7 iş günü civarındadır." },
    ],
  },
  {
    name: "Bolu",
    slug: "bolu-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Bolu merkez", "Dörtdivan", "Gerede", "Göynük", "Kıbrıscık", "Mengen", "Mudurnu", "Seben", "Yeniçağa"],
    intro: "Bolu'nun 9 ilçesinde plise perde üretimi yapıyoruz. <strong>Orman örtüsü en yoğun il</strong> olan Bolu'da kış sıcaklıkları -15 dereceye kadar düşer; bu yüzden honeycomb hücreli ısı yalıtımlı modeller başta tercih edilir. Abant, Gölköy ve Yedigöller çevresindeki turizm işletmeleri için Esenyalı'daki üretim tesisimizden özel çözümler yolluyoruz.",
    seoTitle: "Bolu Plise Perde | Honeycomb Isı Yalıtımı & Sevkiyat",
    seoDescription: "Bolu plise perde: 9 ilçe, karlı yayla iklimi için honeycomb ısı yalıtımlı modeller, sevkiyat teslimat.",
    sections: [
      {
        h2: "Bolu'nun Karlı Yayla İkliminde Isı Yalıtımlı Perde Tercihi",
        paragraphs: [
          "Bolu, Türkiye'nin orman varlığı en zengin illerinden biridir ve ortalama rakımı 850 metreyi aşar. Kış aylarında termometre -15 dereceye iner, kar örtüsü Kasım'dan Nisan'a kadar kalabilir. Bu sert kış koşullarında <strong>çift petekli honeycomb plise perde</strong> öneriyoruz; hücre yapısı pencereden sızan soğuk havayı hapsederek ısıtma giderlerinde belirgin düşüş sağlar.",
          "Abant Gölü ve Yedigöller Milli Parkı çevresindeki butik otellerde, göl manzaralı geniş pencereler için <em>katlanır plise sistem</em> uyguluyoruz; manzarayı istediğiniz an açıp kapatmanız mümkün. Mudurnu ve Göynük'te Osmanlı dönemi ahşap konaklarının dar pencerelerine özel ölçü üretim yapıyoruz. Mengen'deki gastronomi okulu ve bağlı oteller için yangın dayanımlı B1 sınıfı kumaş ile toplu perde çözümü sunuyor, Gerede deri sanayi bölgesindeki lojmanlar için dayanıklı modeller üretiyoruz.",
        ],
      },
      {
        h2: "Esenyalı Üretim Tesisimizden Bolu'nun Dokuz İlçesine Sevkiyat Süreci",
        paragraphs: ["Bolu'nun her ilçesine <strong>uzaktan keşif</strong> yöntemiyle hizmet veriyoruz. Mesajlaşarak pencere ölçülerinizi aldığımızda Esenyalı'daki üretim tesisimizde perdenizi hazırlıyor ve sevkiyat ile yolluyoruz. Bolu'nun karlı iklimi için honeycomb modelini varsayılan olarak öneriyoruz."],
      },
    ],
    faqItems: [
      { question: "Bolu Abant çevresindeki otelimin göl manzaralı camlarına uygun perde var mı?", answer: "Var. Abant Gölü kenarındaki otellerin geniş manzara pencereleri için katlanır plise sistem uyguluyoruz. Görüntüyü tam açabilir, gerektiğinde yarıya indirebilir veya tamamen kapatabilirsiniz. Sevkiyat ile teslimat yapıyoruz." },
      { question: "Bolu kışın çok soğuk geçiyor, hangi perde tipi ısı kaybını azaltır?", answer: "Bolu'nun -15 dereceye varan kış sıcaklıklarında çift petekli honeycomb modelini öneriyoruz. Hücrelerin içinde hapsolmuş hava tabakası, pencereden gelen soğuğu filtreleyerek oda sıcaklığını 2-3 derece yukarıda tutar." },
    ],
  },
  {
    name: "Kastamonu",
    slug: "kastamonu-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Abana", "Ağlı", "Araç", "Azdavay", "Bozkurt", "Cide", "Çatalzeytin", "Daday", "Devrekani", "Doğanyurt", "Hanönü", "İhsangazi", "İnebolu", "Kastamonu merkez", "Küre", "Pınarbaşı", "Seydiler", "Şenpazar", "Taşköprü", "Tosya"],
    intro: "Kastamonu'nun 20 ilçesinde plise perde üretimi yapıyoruz. <strong>Sahil şeridiyle iç kesim arasında 1000 metre rakım farkı</strong> bulunan Kastamonu'da, ilçenin konumuna göre kumaş tipini ayrı ayrı belirliyoruz. İnebolu ve Cide gibi sahil beldelerinde anti-nem, Tosya ve Araç gibi iç kesimlerde honeycomb modelini öneriyoruz.",
    seoTitle: "Kastamonu Plise Perde | Sahil ve İç Kesim Teslimat",
    seoDescription: "Kastamonu plise perde: 20 ilçe, İnebolu sahil için anti-nem, Tosya iç kesim için honeycomb modeli, online keşif ve teslimat.",
    sections: [
      {
        h2: "Kastamonu'nun Sahil ve Yayla Ayrımında Bölgesel Perde Seçimi",
        paragraphs: [
          "Kastamonu, 20 ilçesiyle Karadeniz Bölgesi'nin en geniş idari sınırlarına sahip illerinden biridir. Sahil kuşağında İnebolu, Cide, Abana ve Bozkurt gibi beldeler deniz seviyesine yakın rakımda ve <strong>yıl boyu yüksek nem</strong> etkisindedir; burada anti-nem kaplamalı kumaş kullanıyoruz. Tosya, Araç, Daday ve İhsangazi gibi iç kesim ilçelerinde rakım 900-1200 metreye çıkar, karasal etki belirginleşir ve kış sıcaklıkları -20 dereceye iner; bu nedenle honeycomb ısı yalıtımlı modeli tercih ediyoruz.",
          "Kastamonu merkezdeki Cumhuriyet dönemi mahallelerinde apartman daireleri için standart ölçü hızlı üretim yapıyoruz. İnebolu'daki yazlık konutlarda deniz manzaralı pencereler için <em>güneşlik kumaş</em> öneriyor, öğlen güneşini filtreleyip manzarayı koruyoruz. Taşköprü'de sarımsak tarım bölgesindeki çiftlik evlerinin geniş pencerelerine katlanır sistem uyguluyor, Küre Dağları Milli Parkı sınırları içindeki doğa evlerinde orman nemi direnci yüksek modeller kullanıyoruz.",
        ],
      },
      {
        h2: "İstanbul'daki Fabrikamızdan Kastamonu'nun Yirmi İlçesine Dağıtım",
        paragraphs: ["Kastamonu'nun ilçe sınırlarının tümüne <strong>online keşif</strong> ile hizmet veriyoruz. Sahil ilçelerinde anti-nem, iç kesim ilçelerinde honeycomb modelini varsayılan olarak üretiyor, İstanbul'daki fabrikamızdan teslimat ile yolluyoruz. Görüntülü arama ile ölçü alımı ve sipariş sürecini yürütüyoruz."],
      },
    ],
    faqItems: [
      { question: "Kastamonu İnebolu'daki yazlık evim için hangi kumaş tipini seçmeliyim?", answer: "İnebolu sahil kuşağında deniz nemine maruz kalan yazlık konutlar için anti-nem kaplamalı kumaş öneriyoruz. Standart kumaşlar bu nem seviyesinde 2-3 yılda bozulurken, anti-nem kaplamalı modeller 5 yıl ve üzeri dayanım gösterir." },
      { question: "Kastamonu'nun iç kesim ilçelerinde kışın hangi perde tipi çalışır?", answer: "Tosya, Araç ve Daday gibi iç kesim ilçelerinde rakım 900 metreyi aştığı için honeycomb hücreli ısı yalıtımlı modeli öneriyoruz. Çift petek yapı, pencereden gelen dondurucu havayı filtreler ve iç mekân sıcaklığını korur." },
    ],
  },
  {
    name: "Sinop",
    slug: "sinop-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Ayancık", "Boyabat", "Dikmen", "Durağan", "Erfelek", "Gerze", "Sinop merkez", "Türkeli"],
    intro: "Sinop'un 8 ilçesinde plise perde üretimi yapıyoruz. <strong>Türkiye'nin en kuzey ucundaki il</strong> olan Sinop'ta İnceburun yarımadası yıl boyu sert rüzgar ve nem alır; bu yüzden kumaş seçiminde rüzgar direnci ve nem bariyeri birlikte değerlendirilir. Pendik üretim merkezimizden Sinop merkez, Boyabat ve Gerze'ye gönderim ile ulaştırıyoruz.",
    seoTitle: "Sinop Plise Perde - Rüzgar ve Nem Dayanımlı Kumaş & Gönderim",
    seoDescription: "Sinop plise perde: 8 ilçe, İnceburun rüzgarına dayanıklı özel kaplamalı kumaş, dijital keşif ve gönderim teslimat.",
    sections: [
      {
        h2: "İnceburun Yarımadasında Rüzgar ve Nem Bariyerli Perde Çözümleri",
        paragraphs: [
          "Sinop, Türkiye'nin en kuzey noktasıdır ve İnceburun yarımadası yıl boyunca Karadeniz'in en güçlü rüzgar kuşağına maruz kalır. Sahil kesimde rüzgar hızı 60-80 km/s değerlerine ulaşır; bu durumda perde kumaşının <strong>titreşim direnci</strong> ve nem bariyeri birlikte aranır. Bu koşullar için özel kaplamalı, hem rüzgar hem nem dayanımı yüksek kumaş kullanıyoruz.",
          "Sinop merkezdeki tarihi yarımada evlerinin pencereleri çoğunlukla dar ve yüksek ebadır; bu yapılar için <em>pencere içine montajlı özel ölçü plise perde</em> üretiyoruz. Boyabat ve Durağan'ın iç kesimlerinde karasal etki belirgindir ve kış sıcaklıkları -10 dereceye iner; burada honeycomb ısı yalıtımlı modeli öneriyoruz. Gerze ve Ayancık sahil beldelerinde deniz tuzu içeren nem yüküğü için anti-nem kaplamalı kumaş tercih ediyoruz.",
        ],
      },
      {
        h2: "Pendik Üretim Merkezinden Sinop'un Sekiz İlçesine Gönderim Rotası",
        paragraphs: ["Sinop'un beldelerin hepsine <strong>dijital keşif</strong> yöntemiyle hizmet veriyoruz. Fotoğraf paylaşarak pencere ölçülerinizi ilettiğinizde, Pendik üretim merkezimizde perdenizi hazırlıyor ve gönderim ile yolluyoruz. Sinop'un rüzgarlı iklimi için özel kaplamalı kumaşı varsayılan olarak öneriyoruz."],
      },
    ],
    faqItems: [
      { question: "Sinop yarımadadaki evimde rüzgardan dolayı perde sallanıyor, çözüm var mı?", answer: "Sinop'un İnceburun yarımadasında rüzgar hızı 60-80 km/s'ye ulaşır. Bu durum için özel kaplamalı, titreşim ve nem dayanımı yüksek kumaş kullanıyoruz. Pencere içine montajlı sistem, rüzgar basıncını dengeleyerek sallanmayı azaltır." },
      { question: "Sinop Boyabat'ta kışın hangi perde tipini öneriyorsunuz?", answer: "Boyabat'ın iç kesiminde karasal etki nedeniyle kış sıcaklıkları -10 dereceye iner. Honeycomb hücreli ısı yalıtımlı plise perde öneriyoruz; çift petek yapı pencereden gelen soğuğu filtreler ve ısıtma giderlerini düşürür." },
    ],
  },
  {
    name: "Samsun",
    slug: "samsun-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["19 Mayıs", "Alaçam", "Asarcık", "Atakum", "Ayvacık", "Bafra", "Canik", "Çarşamba", "Havza", "İlkadım", "Kavak", "Ladik", "Salıpazarı", "Tekkeköy", "Terme", "Vezirköprü", "Yakakent"],
    intro: "Samsun'un 17 ilçesinde plise perde üretimi yapıyoruz. <strong>Karadeniz'in en büyük ticaret limanına</strong> ev sahipliği yapan Samsun'da, İlkadım ve Atakum gibi merkez ilçelerde apartman daireleri için standart ölçü hızlı üretim, Çarşamba ve Terme gibi vadi ilçelerinde ise nehir nemine dayanıklı kumaş tercih ediyoruz. İstanbul atölyemizden nakliye ile ulaştırıyoruz.",
    seoTitle: "Samsun Plise Perde | Liman Şehri, Nakliye Gönderimi",
    seoDescription: "Samsun plise perde: 17 ilçe, Yeşilırmak vadisi nemine dayanıklı kumaş, mesafeli keşif ve nakliye teslimat.",
    sections: [
      {
        h2: "Samsun'un Delta Düzlüğünde Nehir Nemi ve Sahil Rüzgarına Karşı Perde",
        paragraphs: [
          "Samsun, Karadeniz Bölgesi'nin en yoğun ticaret ve liman faaliyetinin merkezidir. Şehir, Kızılırmak ve Yeşilırmak deltalarının oluşturduğu geniş düzlükte kurulmuştur; bu düzlükte <strong>nehir buharlaşması ve deniz neminin birleşimi</strong> yıl boyu yüksek nem üretir. İlkadım, Atakum ve Canik merkez ilçelerindeki modern apartman dairelerinde standart ölçülere hızlı üretim yapıyor, bu nemli iklim için anti-nem kaplamalı kumaşı varsayılan olarak seçiyoruz.",
          "Çarşamba ve Terme'nin Yeşilırmak vadisindeki tarım arazilerindeki çiftlik evlerinde, nehir kenarı nemi için çift kaplamalı kumaş kullanıyoruz. Bafra'nın Kızılırmak deltasındaki yazlık konutlarda deniz nemine karşı anti-nem modeli öneriyoruz. Havza ve Ladik'in iç kesimlerinde rakım artar ve kış sıcaklıkları düşer; burada honeycomb ısı yalıtımlı modeli tercih ediyoruz. Samsun organize sanayi bölgesindeki fabrika ve lojmanlar için yangın dayanımlı B1 sınıfı kumaş ile toplu perde çözümü sunuyoruz.",
        ],
      },
      {
        h2: "İstanbul Atölyesinden Samsun'un On Yedi İlçesine Nakliye Ağı",
        paragraphs: ["Samsun'un ilçe bazında tamamına <strong>mesafeli keşif</strong> yöntemiyle hizmet veriyoruz. Mobil iletişimle pencere ölçülerinizi aldığımızda İstanbul atölyesinde üretim yapıp nakliye ile yolluyoruz. Samsun'un delta iklimi için anti-nem kaplamalı kumaşı varsayılan olarak öneriyoruz."],
      },
    ],
    faqItems: [
      { question: "Samsun Atakum'da sahil apartmanım için perde dayanıklılığı ne olur?", answer: "Atakum sahil kuşağında deniz nemine maruz apartmanlar için anti-nem kaplamalı kumaş öneriyoruz. Standart kumaşlar bu nem seviyesinde 2-3 yılda deformasyon yaşarken, anti-nem kaplamalı modeller 5 yıl ve üzeri dayanım gösterir." },
      { question: "Samsun organize sanayi bölgesindeki fabrika lojmanlarımız için toplu perde alabilir miyiz?", answer: "Evet. Samsun OSB bölgesindeki lojmanlar için yangın dayanımlı B1 sınıfı kumaş ile toplu plise perde üretimi yapıyoruz. Mesafeli keşif ardından ölçü alımı ve nakliye teslimat sürecini yönetiyoruz." },
    ],
  },
  {
    name: "Çorum",
    slug: "corum-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Alaca", "Bayat", "Boğazkale", "Çorum merkez", "Dodurga", "İskilip", "Kargı", "Mecitözü", "Oğuzlar", "Ortaköy", "Osmancık", "Sungurlu", "Uğurludağ"],
    intro: "Çorum'un 13 ilçesinde plise perde üretimi yapıyoruz. <strong>İç Anadolu bozkırı ile Karadeniz ormanları arasındaki geçiş kuşağında</strong> yer alan Çorum'da, gece-gündüz sıcaklık farkı 20 dereceyi bulur; bu nedenle gece-gündüz plise perde sistemini öneriyoruz. Boğazkale'deki Hattuşaş antik kenti çevresindeki pansiyonlar için karartma modelleri mevcuttur.",
    seoTitle: "Çorum Plise Perde - Gece-Gündüz Sistemi & Dağıtım Gönderimi",
    seoDescription: "Çorum plise perde: 13 ilçe, bozkır-orman geçiş iklimi için gece-gündüz modelleri, sanal keşif ve dağıtım teslimat.",
    sections: [
      {
        h2: "Çorum'un Bozkır-Orman Geçiş Kuşağında Gece-Gündüz Perde Sistemi",
        paragraphs: [
          "Çorum, Hitit İmparatorluğu'nun başkenti Hattuşaş'ı barındıran tarihi bir ildir. Coğrafi olarak İç Anadolu bozkırı ile Karadeniz orman kuşağının kesişiminde yer alır; bu konum <strong>gündüz sıcak ve gece soğuk</strong> belirgin bir termik amplitüd yaratır. Yazın gündüz 35 dereceye çıkarken gece 15 dereceye inebilir. Bu fark için gece-gündüz plise perde sistemini öneriyoruz; üst bandı açık bırakıp alt bandı kapatarak hem ışık hem sıcaklık kontrolü sağlanır.",
          "Boğazkale ilçesindeki UNESCO Dünya Mirası Hattuşaş çevresindeki pansiyon ve turistik işletmelerde, turistlerin gece uykusu için <em>karartma plise perde</em> uyguluyoruz; tam karanlık ortam sağlar. Çorum merkez konutlarında gece-gündüz modelini varsayılan olarak üretiyoruz. İskilip ve Osmancık'ın iç kesimlerinde karasal etki nedeniyle honeycomb ısı yalıtımlı modeli, Sungurlu ve Alaca'nın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Marmara Üretim Hattından Çorum'un On Üç İlçesine Dağıtım Çözümü",
        paragraphs: ["Çorum'un ilçelerin tamamına <strong>sanal keşif</strong> yöntemiyle hizmet veriyoruz. WhatsApp'tan pencere ölçülerinizi aldığımızda Marmara üretim hattında üretim yapıp dağıtım ile yolluyoruz. Çorum'un geçiş iklimi için gece-gündüz modelini varsayılan olarak öneriyoruz."],
      },
    ],
    faqItems: [
      { question: "Çorum Boğazkale'deki Hattuşaş pansiyonum için turistlere uygun perde var mı?", answer: "Boğazkale'deki UNESCO Dünya Mirası alanı çevresindeki pansiyonlar için karartma plise perde öneriyoruz. Turistlerin gece dinlenmesi için tam karanlık ortam sağlar; gündüz ise bandı açarak antik kent manzarasını görebilirsiniz." },
      { question: "Çorum'da gece-gündüz sıcaklık farkı büyük, hangi perde tipi işe yarar?", answer: "Çorum'da bozkır-orman geçiş kuşağında gece-gündüz sıcaklık farkı 20 dereceyi bulur. Gece-gündüz plise perde sistemini öneriyoruz; üst bandı açık bırakıp alt bandı kapatarak hem ışık hem sıcaklık kontrolü sağlarsınız." },
    ],
  },
  {
    name: "Ordu",
    slug: "ordu-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Altınordu", "Aybastı", "Çamaş", "Çatalpınar", "Çaybaşı", "Fatsa", "Gölköy", "Gülyalı", "Gürgentepe", "İkizce", "Kabadüz", "Kabataş", "Korgan", "Kumru", "Mesudiye", "Perşembe", "Piraziz", "Sulusaray", "Ünye"],
    intro: "Ordu'nun 19 ilçesinde plise perde hizmeti sunuyoruz. Karadeniz'in fındık bahçeleri arasında, <strong>yağışlı iklim için anti-nem kaplamalı kumaş modellerini</strong> öneriyoruz. Altınordu ve Ünye sahil ilçelerindeki konutlar için ekran üzerinden keşif ve ulaştırma ile teslimat yapıyoruz.",
    seoTitle: "Ordu Plise Perde - Ekran Üzerinden Keşif & Ulaştırma",
    seoDescription: "Ordu'nun 19 ilçesinde plise perde: Altınordu, Fatsa, Ünye ekran üzerinden keşif ve ulaştırma. Karadeniz yağışlı iklimi için anti-nem modelleri.",
    sections: [
      {
        h2: "Ordu'nun Fındık Bahçeleri İkliminde Perde",
        paragraphs: [
          "Ordu, Türkiye'nin fındık üretim merkezidir. Yeşil fındık bahçeleri arasında yer alan evler, Karadeniz'in yağışlı iklimine maruz kalır. Yıllık 1000 mm üzerinde yağış alınır. Bu nemli iklimde <strong>anti-nem kaplamalı kumaş</strong> kullanıyoruz. Fındık kurutma tarlalarındaki çiftlik evlerinde, nem dayanımı yüksek modeller öneriyoruz.",
          "Altınordu merkez ilçesindeki apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. Fatsa ve Ünye sahil beldelerinde, deniz nemine dayanıklı kumaş kullanıyoruz. Perşembe ve Gülyalı'nın sahil kesiminde anti-nem modeli öneriyoruz. Mesudiye ve Gölköy'ün yüksek rakımlı yayla kesimlerinde, kış soğuklarına karşı honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Ordu'nun 19 İlçesinde Fındık Bahçeleri Ulaştırma Planı",
        paragraphs: ["Ordu'nun her ilçesine <strong>ekran üzerinden keşif</strong> ile hizmet veriyoruz. Karadeniz iklimi bölgesi olduğundan anti-nem kumaş öneriyoruz. Mesaj yoluyla ölçü alıp, ulaştırma ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Ordu'da ekran üzerinden keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Ordu'nun 19 ilçesinin tamamına ekran üzerinden keşif ile hizmet veriyoruz. Mesaj yoluyla pencere ölçülerinizi alıp, ulaştırma ile teslimat yapıyoruz." },
      { question: "Ordu'nun yağışlı ikliminde hangi perde kumaşı dayanır?", answer: "Ordu'nun yıllık 1000 mm+ yağışlı ikliminde anti-nem kaplamalı kumaş öneriyoruz. Normal kumaşlar 2-3 yılda deformasya uğrarken, anti-nem kumaşlar 5+ yıl dayanır." },
    ],
  },
  {
    name: "Giresun",
    slug: "giresun-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Alucra", "Bulancak", "Çamoluk", "Çanakçı", "Dereli", "Doğankent", "Espive", "Eynesil", "Giresun merkez", "Görele", "Güce", "Keşap", "Piraziz", "Şebinkarahisar", "Tirebolu", "Yağlıdere"],
    intro: "Giresun'un 16 ilçesinde plise perde üretimi yapıyoruz. <strong>Karadeniz Dağları'nın denize dik inmesiyle</strong> oluşan dik topografyada, sahil ile iç kesim yaylaları arasında belirgin iklim farkı vardır; sahil ilçelerinde anti-nem, iç kesim yaylalarında honeycomb modelini öneriyoruz. Pendik'teki atölyemizden kargoyla ulaştırıyoruz.",
    seoTitle: "Giresun Plise Perde | Dağlık Sahil & Yayla Gönderim",
    seoDescription: "Giresun plise perde: 16 ilçe, sahil için anti-nem, yayla için honeycomb modeli. Fotoğraf üzerinden keşif ve kargoyla teslimat.",
    sections: [
      {
        h2: "Giresun'un Dik Topografyasında Sahil ve Yayla Arası Perde Farkı",
        paragraphs: [
          "Giresun'un jeolojik yapısı, Karadeniz Dağları'nın denize dik inmesiyle şekillenmiştir. Sahil şeridi deniz seviyesinde ve <strong>yıl boyu yüksek nem</strong> etkisindedir; iç kesim yaylalar ise 1500-2000 metre rakıma çıkar ve kış sıcaklıkları -15 dereceye iner. Bu dik topografya nedeniyle ilçe konumuna göre kumaş tipini ayrı belirliyoruz: Bulancak, Espive, Tirebolu ve Görele gibi sahil ilçelerinde anti-nem kaplamalı kumaş, Alucra, Çamoluk ve Şebinkarahisar gibi iç kesim yayla ilçelerinde honeycomb ısı yalıtımlı model kullanıyoruz.",
          "Giresun merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Giresun Adası manzaralı pencereler için <em>güneşlik kumaş</em> öneriyor, öğlen güneşini filtreleyip manzarayı koruyoruz. Fındık ve çay tarım bölgesindeki çiftlik evlerinde nem direnci yüksek modeller kullanıyoruz. Dereli'nin Kümbet yaylasındaki yayla turizmi tesisleri için katlanır sistem uyguluyor, yayla manzarasını açıp kapatmaya imkân tanıyoruz.",
        ],
      },
      {
        h2: "Pendik'teki Atölyemizden Giresun'un On Altı İlçesine Kargoyla Rota",
        paragraphs: ["Giresun'un ilçe sınırlarının tümüne <strong>fotoğraf üzerinden keşif</strong> yöntemiyle hizmet veriyoruz. İletişim uygulamasından pencere ölçülerinizi aldığımızda Pendik'teki atölyemizde üretim yapıp kargoyla yolluyoruz. Sahil ilçelerinde anti-nem, iç kesim yayla ilçelerinde honeycomb modelini varsayılan olarak öneriyoruz."],
      },
    ],
    faqItems: [
      { question: "Giresun Adası manzaralı evimin penceresi için hangi perde uygun?", answer: "Giresun Adası manzaralı pencereler için güneşlik kumaş öneriyoruz. Öğlen güneşini filtreleyip manzarayı korur; istediğiniz an bandı açarak ada görünümünü izleyebilirsiniz. Kargoyla teslimat yapıyoruz." },
      { question: "Giresun Şebinkarahisar'daki yayla evim için kışa dayanıklı perde var mı?", answer: "Şebinkarahisar'ın 1500 metre üzeri rakımda kış sıcaklıkları -15 dereceye iner. Honeycomb hücreli ısı yalıtımlı plise perde öneriyoruz; çift petek yapı pencereden gelen dondurucu havayı filtreler ve ısıtma giderlerini düşürür." },
    ],
  },
  {
    name: "Gümüşhane",
    slug: "gumushane-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Gümüşhane merkez", "Kelkit", "Köse", "Kürtün", "Şiran", "Torul"],
    intro: "Gümüşhane'nin 6 ilçesinde plise perde üretimi yapıyoruz. <strong>Adını gümüş madenlerinden alan</strong> Gümüşhane, 1150 metre ortalama rakımla Karadeniz'in en yüksek iç kesim illerinden biridir; kış sıcaklıkları -20 dereceye iner ve kar örtüsü Kasım'dan Mayıs'a kadar kalabilir. Bu sert iklim için çift petekli honeycomb modelini varsayılan olarak öneriyoruz.",
    seoTitle: "Gümüşhane Plise Perde | Rakım Honeycomb & Sevkiyat",
    seoDescription: "Gümüşhane plise perde: 6 ilçe, 1150m rakım ve -20°C kış için çift petekli honeycomb modeli, sevkiyat teslimat.",
    sections: [
      {
        h2: "Gümüşhane'nin 1150 Metre Rakımında Çift Petekli Honeycomb Perde",
        paragraphs: [
          "Gümüşhane, tarihi gümüş madenleriyle kurulmuş bir şehirdir ve ortalama rakımı 1150 metredir. Karadeniz Dağları'nın iç kesiminde yer aldığı için kışlar şiddetli geçer; termometre -20 dereceye iner ve kar örtüsü altı ay kalabilir. Bu ekstrem koşullarda <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz; hücrelerin içinde hapsolmuş hava tabakası, pencereden gelen dondurucu havayı filtreleyerek oda sıcaklığını 2-3 derece yukarıda tutar.",
          "Gümüşhane merkezdeki tarihi Rum evlerinin dar pencerelerine <em>pencere içine montajlı özel ölçü plise perde</em> üretiyoruz. Torul ve Köse'nin dağlık kesimlerindeki yayla evlerinde honeycomb modelini uyguluyor, Kelkit'in tarım ovasındaki geniş pencereli çiftlik evlerinde katlanır sistem kullanıyoruz. Şiran ve Kürtün'ün küçük ilçelerinde standart ölçülere hızlı üretim yapıyor, Zigana Dağı geçidi çevresindeki dinlenme tesisleri için dayanıklı kumaş ile toplu çözüm sunuyoruz.",
        ],
      },
      {
        h2: "Esenyalı'daki Üretim Tesisimizden Gümüşhane'nin Altı İlçesine Sevkiyatla Gönderim",
        paragraphs: ["Gümüşhane'nin beldelerin hepsine <strong>iletişim tabanlı keşif</strong> yöntemiyle hizmet veriyoruz. Telefonla pencere ölçülerinizi aldığımızda Esenyalı'daki üretim tesisimizde üretim yapıp sevkiyatla yolluyoruz. Gümüşhane'nin yüksek rakım ve sert kış iklimi için çift petekli honeycomb modelini varsayılan olarak öneriyoruz."],
      },
    ],
    faqItems: [
      { question: "Gümüşhane kışın -20 dereceye düşüyor, pencereden soğuk geliyor, ne önerirsiniz?", answer: "Gümüşhane'nin 1150 metre rakımında çift petekli honeycomb hücreli plise perde öneriyoruz. Hücrelerin içinde hapsolmuş hava tabakası, pencereden gelen dondurucu havayı filtreler ve oda sıcaklığını 2-3 derece yukarıda tutarak ısıtma giderlerini düşürür." },
      { question: "Gümüşhane Torul'daki yayla evimin penceresine özel ölçü perde yapılır mı?", answer: "Yapılır. Torul'un dağlık kesimindeki yayla evlerinin standart dışı pencereleri için pencere içine montajlı özel ölçü plise perde üretiyoruz. Yüksek rakım için honeycomb modeli ile birlikte sevkiyatla teslimat yapıyoruz." },
    ],
  },
  {
    name: "Trabzon",
    slug: "trabzon-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı", "Maçka", "Of", "Ortahisar", "Sürmene", "Şalpazarı", "Tonya", "Vakfıkebir", "Yomra"],
    intro: "Trabzon'un 18 ilçesinde plise perde üretimi gerçekleştiriyoruz. Doğu Karadeniz'in ticaret başkentinde, <strong>neme ve tuzlu havaya dayanıklı özel kumaş seçenekleriyle</strong> konut ve işyerlerini donatıyoruz. Pendik'teki atölyemizde hazırlayıp, Ortahisar başta olmak üzere ilçelerin tamamına kurye ile ulaştırıyoruz.",
    seoTitle: "Trabzon Plise Perde - Pendik Üretim Kurye Gönderimi",
    seoDescription: "Trabzon 18 ilçe plise perde: Ortahisar, Akçaabat, Çaykara için Pendik merkezli üretim. Nemli Karadeniz iklimine dayanıklı kumaş ve kurye teslimat.",
    sections: [
      {
        h2: "Doğu Karadeniz Kıyısında Nem Perdesi Seçimi",
        paragraphs: [
          "Trabzon, yıl boyunca ortalama 800 mm yağış alan bir şehirdir. Sahil şeridindeki Akçaabat, Vakfıkebir ve Arsin ilçelerinde denizden gelen tuzlu nem, standart kumaşları kısa sürede yıpratır. Bu bölgedeki evler için <strong>tuzlu neme dirençli kaplamalı kumaş</strong> tercih ediyoruz. Pendik'teki atölyemizde, Karadeniz iklim koşullarına özel olarak hazırlanan bu kumaşlar 5 yıldan fazla dayanım gösterir.",
          "Ortahisar'ın sur içi mahallelerinde yer alan tarihi yapıların pencereleri genellikle standart dışı boyutlara sahiptir. Bu evler için <em>pencere içine monte edilen</em> özel ölçü plise perde üretiyoruz; duvara delik açmaya gerek kalmaz. Çaykara'daki Uzungöl ve Maçka'daki Sumela Manastırı çevresindeki yayla tesislerinde ise rakımdan kaynaklanan soğuk için honeycomb hücreli modeli öneriyoruz. Sürmene ve Of ilçelerinin çay bahçeleri arasındaki kırsal konutlarda, sürekli nem altında kalan kumaşın formunu koruması için yoğun dokuma tiplerini kullanıyoruz.",
        ],
      },
      {
        h2: "Pendik'ten Trabzon'a Kurye Hattı ve Ölçü Alma Yöntemi",
        paragraphs: ["Trabzon'un 18 ilçesinin her birine <strong>telefonla görüntülü keşif</strong> uyguluyoruz. Pencere ölçülerinizi cep telefonu kamerasıyla birlikte belirleyip, Pendik'teki atölyemizde üretimini tamamlıyoruz. Ardından kurye ile kapınıza teslim ediyoruz — Trabzon'a yerel ekip göndermemize gerek yoktur."],
      },
    ],
    faqItems: [
      { question: "Trabzon'da perdeyi kendi elimle mi takacağım, montaj ekibi geliyor mu?", answer: "Plise perde, pencere kasası içine takılan bir sistemdir ve montajı son derece basittir. Kurye ile gelen paketin içindeki talimatları izleyerek takabilirsiniz; ekibin gelmesine gerek yoktur." },
      { question: "Çaykara Uzungöl'deki pansiyonum için hangi model uygun?", answer: "Uzungöl bölgesi rakımdan dolayı kışın sert soğuklar yaşar. Bu nedenle honeycomb hücreli ısı yalıtımlı modeli öneriyoruz; pencereden gelen soğuğu hücre yapısıyla engeller." },
    ],
  },
  {
    name: "Rize",
    slug: "rize-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Ardeşen", "Çamlıhemşin", "Çayeli", "Derepazarı", "Fındıklı", "Güneysu", "Hemşin", "İkizdere", "İyidere", "Kalkandere", "Pazar", "Rize merkez"],
    intro: "Rize'nin 12 ilçesinde plise perde üretimi sunuyoruz. Türkiye'nin en çok yağış alan ili olan bu şehirde, <strong>aşırı neme karşı geliştirilmiş çift katmanlı kumaş teknolojisiyle</strong> konutları donatıyoruz. Esenyalı'daki üretim tesisimizde hazırlayıp, Rize merkez dahil her ilçeye sevkiyat ile ulaştırıyoruz.",
    seoTitle: "Rize Plise Perde - Nem Dayanımlı Kumaş Esenyalı Üretim",
    seoDescription: "Rize 12 ilçe plise perde: Çayeli, Ardeşen, Çamlıhemşin için Esenyalı merkezli üretim. Yıllık 2400 mm yağışa dayanıklı özel kumaş ve sevkiyat teslimat.",
    sections: [
      {
        h2: "Türkiye'nin En Yağışlı İlinde Kumaş Dayanımı",
        paragraphs: [
          "Rize, yılda ortalama 2400 mm yağış alır — bu rakam, Türkiye genel ortalamasının yaklaşık üç katıdır. Böylesi bir iklimde sıradan perde kumaşları 12-24 ay arasında küflenir, renk atması yapar ve yapısını yitirir. Rize evleri için <strong>çift katmanlı su itici kaplamalı kumaş</strong> uyguluyoruz. Bu kaplama, yağmur buharının kumaş liflerine nüfuz etmesini engeller ve 5 yıldan uzun süre formunu korur.",
          "Çayeli ve Pazar ilçelerinin çay plantasyonları arasındaki evlerinde, sürekli yüksek nem altında çalışan kumaşların dayanımı kritiktir. Ardeşen ve Fındıklı'nın sahil kuşağında deniz suyu buharı ekstra bir yıpratıcı etken oluşturur; bu bölge için tuz dayanımlı kumaş varyantını öneriyoruz. Çamlıhemşin ve Hemşin'in yayla kuşağında rakım arttıkça sıcaklık düşer; Ayder kaplıcaları çevresindeki bungalov tesislerinde honeycomb hücreli modeli uygulayarak soğuk hava sızmasını kesiyoruz. İkizdere'nin dağ yamacındaki konutlarında ise rüzgar baskısına dayanıklı kalın dokuma tipini tercih ediyoruz.",
        ],
      },
      {
        h2: "Esenyalı Üretiminden Rize'ye Uzaktan Keşif Sistemi",
        paragraphs: ["Rize'nin 12 ilçesinin tamamında <strong>akıllı telefon ile uzaktan keşif</strong> yöntemini uyguluyoruz. Mesajlaşarak pencere fotoğraflarını ekibimize iletirsiniz, ölçüler belirlenip Esenyalı'daki tesisimizde üretim başlatılır. Tamamlanan perde sevkiyat ile Rize'ye ulaşır; yerel bayi veya montaj ekibi süreci yoktur."],
      },
    ],
    faqItems: [
      { question: "Rize'de yıllık 2400 mm yağış var, perde kumaşı ne kadar dayanır?", answer: "Standart kumaşlar Rize ikliminde 1-2 yılda bozulur. Bizim kullandığımız çift katmanlı su itici kaplamalı kumaş, yağmur buharının liflere sızmasını engeller ve 5 yıldan fazla dayanım sağlar." },
      { question: "Çamlıhemşin Ayder'deki bungalovum için perde nasıl ısmarlarım?", answer: "Mesajlaşarak pencere fotoğrafını ekibimize iletmeniz yeterli. Ayder gibi yüksek rakımlı yayla bölgeleri için honeycomb hücreli ısı yalıtımlı modeli öneriyoruz; soğuk hava sızmasını keser." },
    ],
  },
  {
    name: "Artvin",
    slug: "artvin-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Ardanuç", "Arhavi", "Artvin merkez", "Borçka", "Hopa", "Kemalpaşa", "Murgul", "Şavşat", "Yusufeli"],
    intro: "Artvin'in 9 ilçesinde plise perde üretimi yapıyoruz. Türkiye'nin en ormanlık ili olan bu dağlık şehirde, <strong>sahil nemine ve yayla soğuğuna ayrı çözümler sunan</strong> çift iklim yaklaşımıyla çalışıyoruz. İstanbul'daki fabrikamızda üretip, Hopa'dan Şavşat'a ilçe sınırlarının tümüne teslimat ile gönderiyoruz.",
    seoTitle: "Artvin Plise Perde - Sahil ve Yayla İklim Çözümleri",
    seoDescription: "Artvin 9 ilçe plise perde: Hopa, Borçka, Şavşat için İstanbul merkezli üretim. Sahil nemine ve yayla soğuğuna özel kumaş, teslimat ile gönderim.",
    sections: [
      {
        h2: "Sahilden Yaylaya İki Farklı İklim Kuşağı",
        paragraphs: [
          "Artvin, Türkiye'nin yüzölçümü bakımından en ormanlık ilidir; topraklarının yüzde 55'i orman örtüsüyle kaplıdır. Şehir, birbirinden tamamen farklı iki iklim kuşağına sahiptir. Hopa ve Arhavi'nin bulunduğu sahilde Karadeniz'in nemli havası hüküm sürer; burada <strong>tuz buharına dirençli kaplamalı kumaş</strong> kullanıyoruz. Ardanuç, Şavşat ve Yusufeli'nin yer aldığı iç kesimde ise rakım 1500 metrenin üzerine çıkar ve kışın sıcaklık -20°C'ye iner; bu bölge için honeycomb hücreli ısı yalıtımlı modeli öneriyoruz.",
          "Borçka ve Murgul ilçelerindeki bakır madeni işletmelerinin lojmanlarında, yangın güvenliği öncelikli olduğundan B1 sınıfı alev geciktirici kumaş ile toplu perde uygulaması yapıyoruz. Şavşat'ın Karagöl Milli Parkı çevresindeki konaklama tesislerinde, geniş cam yüzeyler için katlanır plise sistemini tercih ediyoruz. Yusufeli'nde baraj gölü nedeniyle yeni taşınan yerleşim birimlerinde, modern apartmanların standart pencerelerine hızlı üretim yapıyoruz. Artvin merkezinin yamacındaki evlerde ise eğimden kaynaklanan rüzgar baskısı için kalın dokuma kumaş kullanıyoruz.",
        ],
      },
      {
        h2: "İstanbul Fabrikasından Artvin Dağlarına Teslimat Ağı",
        paragraphs: ["Artvin'in 9 ilçesinin tamamına <strong>görüntülü arama ile online keşif</strong> uyguluyoruz. Pencere ölçülerinizi görüntülü arama ile aktarıyorsunuz, İstanbul'daki fabrikamızda perdenizi hazırlıyoruz. Teslimat firmasıyla anlaşmalı olarak Artvin'in dağlık ilçelerine bile sorunsuz gönderim yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Artvin'in iç kesimlerinde kış çok sert geçiyor, hangi perde modeli öneriyorsunuz?", answer: "Ardanuç, Şavşat ve Yusufeli gibi iç kesimlerde rakım yüksektir ve kışın sıcaklık -20°C'ye düşer. Bu bölge için honeycomb hücreli ısı yalıtımlı model öneriyoruz; hücre yapısı soğuk hava sızmasını engeller." },
      { question: "Borçka maden lojmanlarına yangına dayanıklı perde yapılır mı?", answer: "Evet, Borçka ve Murgul maden bölgesindeki lojmanlar için B1 sınıfı alev geciktirici kumaş kullanıyoruz. Toplu perde çözümü olarak da bu kumaşı tercih ediyoruz." },
    ],
  },
  {
    name: "Bayburt",
    slug: "bayburt-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Aydıntepe", "Bayburt merkez", "Demirözü"],
    intro: "Bayburt'un 3 ilçesinde plise perde hizmeti sunuyoruz. Karadeniz ile Doğu Anadolu geçişinde, 1554 metre rakımda, <strong>şiddetli kış soğuklarına karşı çift petekli honeycomb modellerini</strong> öneriyoruz. Pendik üretim merkezimizde hazırlayıp, Bayburt merkez konutları için dijital keşif ve gönderim ile teslimat yapıyoruz.",
    seoTitle: "Bayburt Plise Perde - Dijital Keşif & Gönderim",
    seoDescription: "Bayburt'un 3 ilçesinde plise perde: Aydıntepe, Demirözü dijital keşif ve gönderim. 1554 metre rakımda şiddetli kış için çift petekli honeycomb.",
    sections: [
      {
        h2: "Bayburt'un Yüksek Rakım Düzünde Perde",
        paragraphs: [
          "Bayburt, 1554 metre rakımıyla Türkiye'nin en yüksek rakımlı illerinden biridir. Kışları -25°C'ye varan soğuklar ve aylarca süren kar yağışı görülür. Bu şiddetli kış koşullarında <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Çift petek yapısı, pencereden gelen dondurucu havayı iki katmanlı filtreler.",
          "Bayburt merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Aydıntepe ve Demirözü'nün küçük ilçelerinde de standart ölçülere üretim yapıyoruz. Bayburt Kalesi çevresindeki tarihi binaların pencerelerine özel ölçü üretim yapıyoruz. Çoruh nehri vadisindeki konutlarda, nehir vadisinin rüzgarına dayanıklı kumaş kullanıyoruz.",
        ],
      },
      {
        h2: "Bayburt'un 3 İlçesinde Yüksek Rakım Düzlük Teslimatı",
        paragraphs: ["Bayburt'un beldelerin hepsine <strong>dijital keşif</strong> yöntemiyle hizmet veriyoruz. Yüksek rakım bölgesi olduğundan çift petekli honeycomb modeli öneriyoruz. Fotoğraf paylaşarak ölçü alıp, gönderim ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Bayburt'ta dijital keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Bayburt'un 3 ilçesinin tamamına dijital keşif yöntemiyle hizmet veriyoruz. Fotoğraf paylaşarak pencere ölçülerinizi iletip, gönderim ile teslimat yapıyoruz." },
      { question: "Bayburt kışın -25°C, hangi perde önerirsiniz?", answer: "Bayburt'un 1554 metre rakımında çift petekli honeycomb hücreli plise perde öneriyoruz. Çift petek yapısı, pencereden gelen dondurucu havayı iki katmanlı filtreler." },
    ],
  },
  // --- DOĞU ANADOLU BÖLGESİ ---
  {
    name: "Erzurum",
    slug: "erzurum-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Aşkale", "Aziziye", "Çat", "Hınıs", "Horasan", "İspir", "Karaçoban", "Karayazı", "Köprüköy", "Narman", "Oltu", "Olur", "Pasinler", "Pazaryolu", "Şenkaya", "Tekman", "Tortum", "Uzundere", "Yakutiye", "Palandöken"],
    intro: "Erzurum'un 20 ilçesinde plise perde üretimi sunuyoruz. 1953 metre rakımıyla Türkiye'nin en yüksek büyükşehirlerinden birinde, <strong>-40°C'ye varan ekstrem kış koşullarına yönelik çift petekli honeycomb sistemlerini</strong> uyguluyoruz. İstanbul atölyesinde üretip, Palandöken ve Yakutiye dahil ilçe bazında tamamına nakliye ile ulaştırıyoruz.",
    seoTitle: "Erzurum Plise Perde | -40°C Kış, Honeycomb Üretim",
    seoDescription: "Erzurum plise perde: 20 ilçe, 1953m rakımda -40°C kışa karşı çift petekli honeycomb, nakliye teslimat.",
    sections: [
      {
        h2: "1953 Metre Rakımda Türkiye'nin En Sert Kışına Perde Üretimi",
        paragraphs: [
          "Erzurum, 1953 metrelik ortalama rakımıyla Türkiye'nin en yüksek büyükşehiridir. Kış mevsimi kasım ayında başlar ve mayısa kadar devam eder; bu süreçte sıcaklık -40°C'ye kadar düşebilir. Altı ay süren kar örtüsü altında, pencereler ısı kaybının yüzde 35'ini oluşturur. Erzurum konutları için <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> üretiyoruz. İki katmanlı petek yapısı, camdan gelen dondurucu havayı iki aşamada süzerek ısıtma giderlerinde yüzde 30'a varan tasarruf sağlar.",
          "Palandöken kayak merkezinin eteklerindeki otel ve pansiyonlarda, karartma ve honeycomb katmanlarını birleştiren kompozit sistem uyguluyoruz; gündüz güneş ışığını keserken gece soğuğu engeller. Yakutiye ve Aziziye'nin apartmanlarında standart pencere ölçülerine hızlı üretim yapıyoruz. Oltu ilçesindeki Oltu taşı işleme atölyelerinin pencereleri için, güneş ışınını filtreleyen güneşlik kumaş tipini tercih ediyoruz. Tortum Şelalesi çevresindeki turizm işletmelerinde geniş cam yüzeyler için katlanır plise sistemini uyguluyoruz.",
        ],
      },
      {
        h2: "İstanbul Atölyesinden Erzurum'a 20 İlçe Nakliye Ağı",
        paragraphs: ["Erzurum'un 20 ilçesinin tamamında <strong>mobil iletişimle mesafeli keşif</strong> yöntemini uyguluyoruz. Mobil iletişimle pencere fotoğraflarını iletip ölçüleri hesaplıyoruz, ardından İstanbul atölyesinde üretim başlatılır. Nakliye ile Erzurum'un en uzak ilçelerine bile teslimat sağlıyoruz."],
      },
    ],
    faqItems: [
      { question: "Erzurum'da kış -40°C'ye düşüyor, plise perde ısı yalıtımı ne kadar etkili?", answer: "Erzurum'un 1953 metre rakımında çift petekli honeycomb hücreli modeli öneriyoruz. İki katmanlı petek yapısı camdan gelen dondurucu havayı iki aşamada süzerek ısıtma giderlerinde yüzde 30'a varan tasarruf sağlar." },
      { question: "Palandöken'deki otelim için perde ısmarlamak istiyorum, nasıl ilerleyebilirim?", answer: "Palandöken kayak merkezi çevresindeki otel ve pansiyonlar için karartma + honeycomb kompozit sistemini uyguluyoruz. Mobil iletişimle pencere fotoğraflarını iletmeniz yeterli; ölçü alıp İstanbul atölyesinde üretim yapıyoruz." },
    ],
  },
  {
    name: "Erzincan",
    slug: "erzincan-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Çayırlı", "Erzincan merkez", "İliç", "Kemah", "Kemaliye", "Otlubeli", "Refahiye", "Tercan", "Üzümlü"],
    intro: "Erzincan'ın 9 ilçesinde plise perde üretimi yapıyoruz. 1185 metre rakımdaki bu deprem bölgesinde, <strong>hem kış soğuğuna karşı honeycomb hücreli modeli hem de sarsıntıya dayanıklı hafif montaj sistemini</strong> birlikte uyguluyoruz. Marmara üretim hattında hazırlayıp, Erzincan merkez ve her ilçesine dağıtım ile teslim ediyoruz.",
    seoTitle: "Erzincan Plise Perde | Deprem Güvenli, Hafif Montaj",
    seoDescription: "Erzincan plise perde: 9 ilçe, deprem güvenli hafif montaj ve 1185m rakım için honeycomb, dağıtım teslimat.",
    sections: [
      {
        h2: "Deprem Kuşağında Hafif Perde Güvenliği ve Isı Yalıtımı",
        paragraphs: [
          "Erzincan, 1939 ve 1992 depremlerinin merkez üssü olması nedeniyle Türkiye'nin en aktif sismik kuşaklarından birinde yer alır. Bu nedenle konutlarda duvara asılan ağır perde sistemleri risk oluşturur. Plise perde, pencere kasası içine monte edilen ve toplam ağırlığı 200-400 gram arasında değişen bir üründür. <strong>Vidalı veya yapışkanlı pencere içi montaj</strong> ile sarsıntı anında düşme tehlikesi ortadan kalkar.",
          "Erzincan'ın 1185 metre rakımındaki karasal ikliminde kışın sıcaklık -30°C'ye kadar iner. Bu soğukta honeycomb hücreli ısı yalıtımlı modeli öneriyoruz; hücre yapısı camdan sızan soğuk havayı hapseder. Kemah ve Kemaliye'nin Fırat Nehri vadisindeki evlerinde, vadi boyunca esen rüzgarın kumaşa uyguladığı sürekli baskı için yoğun dokuma tipini tercih ediyoruz. Tercan ve Refahiye'nin yüksek rakımlı kesimlerinde çift petekli honeycomb varyantını uyguluyoruz. Erzincan merkezinin yeni yapılmış deprem güvenli binalarında standart pencere ölçülerine hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Marmara Üretim Hattından Erzincan'a Sanal Keşif ve Dağıtım",
        paragraphs: ["Erzincan'ın 9 ilçesine <strong>görüntülü telefon ile sanal keşif</strong> uyguluyoruz. WhatsApp'tan pencere fotoğraflarını iletiyorsunuz, ekibimiz ölçüleri belirleyip Marmara üretim hattında tamamlıyor. Dağıtım ile Erzincan'a teslimat yapıyoruz; deprem güvenli hafif montaj sistemi sayesinde takımı kendiniz kolayca yapabilirsiniz."],
      },
    ],
    faqItems: [
      { question: "Erzincan deprem bölgesi, plise perde sarsıntıda düşer mi?", answer: "Plise perde pencere kasası içine monte edilir ve ağırlığı 200-400 gram arasındadır. Vidalı veya yapışkanlı montaj ile sarsıntıya dayanıklı kurulur; deprem anında düşme riski yoktur." },
      { question: "Kemah vadisindeki evim çok rüzgar alıyor, hangi kumaş dayanır?", answer: "Kemah ve Kemaliye'nin Fırat nehri vadisindeki evler için yoğun dokuma tipli kumaşı tercih ediyoruz. Vadi boyunca esen sürekli rüzgar baskısına karşı bu kumaş tipi daha uzun ömürlüdür." },
    ],
  },
  {
    name: "Ağrı",
    slug: "agri-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Ağrı merkez", "Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur", "Patnos", "Taşlıçay", "Tutak"],
    intro: "Ağrı'nın 8 ilçesinde plise perde üretimi gerçekleştiriyoruz. Türkiye'nin en yüksek zirvesinin eteklerindeki 1632 metre rakımlı şehirde, <strong>-35°C'ye varan kış soğuğuna karşı çift petekli honeycomb sistemini</strong> uyguluyoruz. Pendik'teki imalathanede üretip, Doğubayazıt ve Patnos dahil ilçelerinin her birine ulaştırma ile gönderiyoruz.",
    seoTitle: "Ağrı Plise Perde | Ağrı Dağı Honeycomb, Pendik İmalat",
    seoDescription: "Ağrı plise perde: 8 ilçe, 1632m rakımda -35°C kışa karşı çift petekli honeycomb, ulaştırma teslimat.",
    sections: [
      {
        h2: "Türkiye'nin En Yüksek Zirvesinin Gölgesinde Perde Sistemleri",
        paragraphs: [
          "Ağrı, 5137 metrelik Ağrı Dağı'nın ev sahibidir. Şehir merkezi 1632 metre rakımda yer alır ve kışın sıcaklık -35°C'ye kadar düşer. Dağın etkisiyle oluşan soğuk hava kütlesi, kış boyunca ovaya iner ve pencerelerden içeri sızar. Ağrı konutları için <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> üretiyoruz. İki katmanlı hücre yapısı, dağdan gelen dondurucu havayı arka arkaya süzerek iç mekan sıcaklığını korur.",
          "Doğubayazıt'taki İshak Paşa Sarayı'nın bulunduğu tarihi bölgedeki taş binaların pencereleri standart dışı boyutlardadır. Bu yapılar için <em>pencere kasasına göre özel ölçü</em> üretim yapıyoruz; pencere içi montaj sayesinde tarihi duvarlara zarar verilmez. Patnos ve Diyadin'in geniş tarım arazilerindeki çiftlik evlerinde, büyük pencere yüzeyleri için katlanır plise sistemini tercih ediyoruz. Hamur ve Tutak'ın küçük yerleşimlerinde standart ölçülere hızlı üretim uyguluyoruz. Eleşkirt'in yüksek rakımlı konutlarında çift petekli honeycomb varyantını öneriyoruz.",
        ],
      },
      {
        h2: "Pendik İmalathanesinden Ağrı'ya 8 İlçe Ulaştırma Hattı",
        paragraphs: ["Ağrı'nın 8 ilçesine <strong>akıllı telefonla ekran üzerinden keşif</strong> uyguluyoruz. Mesaj yoluyla pencere fotoğraflarını iletiyorsunuz, ekibimiz ölçüleri hesaplayıp Pendik'teki imalathanede üretimi başlatıyor. Ulaştırma firmasıyla Ağrı'nın dağlık ilçelerine teslimat sağlıyoruz."],
      },
    ],
    faqItems: [
      { question: "Ağrı Dağı'nın eteklerindeki evim için hangi perde modelini tavsiye ediyorsunuz?", answer: "Ağrı'nın 1632 metre rakımında kışın -35°C'ye düşüldüğü için çift petekli honeycomb hücreli ısı yalıtımlı modeli öneriyoruz. Dağdan inen soğuk hava kütlesini iki katmanlı hücre yapısı süzerek iç mekan sıcaklığını korur." },
      { question: "Doğubayazıt İshak Paşa Sarayı çevresindeki tarihi evimin pencereleri standart değil, çözüm var mı?", answer: "İshak Paşa Sarayı çevresindeki taş binaların pencereleri için pencere kasasına göre özel ölçü üretim yapıyoruz. Pencere içine monte edildiği için tarihi duvarlara zarar verilmez." },
    ],
  },
  {
    name: "Kars",
    slug: "kars-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Akyaka", "Arpaçay", "Digor", "Kağızman", "Kars merkez", "Sarıkamış", "Selim", "Susuz"],
    intro: "Kars'ın 8 ilçesinde plise perde üretimi sunuyoruz. 1768 metre rakımdaki bu tarihi şehirde, <strong>Rus dönemi Baltık mimarisinin yüksek pencerelerine özel ölçü üretim ve -35°C kışa karşı honeycomb sistemini</strong> birlikte uyguluyoruz. Pendik imalat üssünde hazırlayıp, Sarıkamış ve Kağızman dahil ilçelerinin tümüne kargoyla ulaştırıyoruz.",
    seoTitle: "Kars Plise Perde - Baltık Mimari Özel Ölçü Pendik İmalat",
    seoDescription: "Kars plise perde: 8 ilçe, Baltık mimari yüksek pencerelere özel ölçü ve -35°C kış için honeycomb, kargoyla teslimat.",
    sections: [
      {
        h2: "Rus Dönemi Baltık Mimarisinin Yüksek Pencerelerine Özel Üretim",
        paragraphs: [
          "Kars, 40 yıl süren Rus işgalinin izlerini taşıyan Baltık mimari tarzı tarihi binalarıyla Türkiye'nin eşsiz şehirlerinden biridir. Bu binaların pencereleri, standart Türk konutlarından farklı olarak 180-220 cm arasında değişen yüksekliklere sahiptir. Kars merkezdeki <strong>Baltık mimari binaların pencerelerine özel ölçü plise perde</strong> üretiyoruz. Pencere kasası içine monte edilen sistem, tarihi taş duvarlara delik açmadan kurulur.",
          "Kars'ın 1768 metre rakımındaki ikliminde kışın sıcaklık -35°C'ye kadar düşer. Bu nedenle Baltık binaların yüksek pencerelerinde ısı kaybı daha da büyüktür; çift petekli honeycomb hücreli modeli uygulayarak cam yüzeyinden sızan soğuğu iki katmanlı süzüyoruz. Sarıkamış kayak merkezi çevresindeki otel ve pansiyonlarda karartma + honeycomb kompozit sistemini tercih ediyoruz; gündüz güneşi keserken gece soğuğu engeller. Kağızman ve Digor'un tarım arazilerindeki geniş pencereli çiftlik evlerinde katlanır plise sistemini uyguluyoruz. Arpaçay ve Akyaka'nın sınır bölgesi konutlarında ise çift petekli honeycomb varyantını öneriyoruz.",
        ],
      },
      {
        h2: "Pendik İmalat Üssünden Kars'a Tarihi Şehir Kargoyla Hattı",
        paragraphs: ["Kars'ın 8 ilçesine <strong>görüntülü telefonla fotoğraf üzerinden keşif</strong> uyguluyoruz. Baltık mimari binaların yüksek pencerelerinin fotoğraflarını iletişim uygulamasından iletiyorsunuz, ekibimiz özel ölçüleri hesaplayıp Pendik imalat üssünde üretimi başlatıyor. Kargoyla Kars'ın ilçelerinin tümüne teslimat sağlıyoruz."],
      },
    ],
    faqItems: [
      { question: "Kars'taki Rus dönemi Baltık binaların yüksek pencerelerine perde yapılıyor mu?", answer: "Evet, Kars merkezdeki Baltık mimari binaların 180-220 cm yüksekliğindeki pencerelerine özel ölçü plise perde üretiyoruz. Pencere kasası içine monte edildiği için tarihi taş duvarlara delik açmadan kurulur." },
      { question: "Sarıkamış'taki otelim için perde ısmarlamak istiyorum, hangi model uygun?", answer: "Sarıkamış kayak merkezi çevresindeki otel ve pansiyonlar için karartma + honeycomb kompozit sistemini öneriyoruz. Gündüz güneş ışığını keserken gece soğuk havayı engeller; 1768 metre rakımda ısı yalıtımı sağlar." },
    ],
  },
  {
    name: "Iğdır",
    slug: "igdir-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Aralık", "Iğdır merkez", "Karakoyunlu", "Tuzluca"],
    intro: "Iğdır'ın 4 ilçesinde plise perde üretimi yapıyoruz. Doğu Anadolu'nun en alçak rakımlı (875 metre) ilinde, <strong>yazın +40°C sıcak ve kışın -20°C soğuğa karşı gece-gündüz çift katmanlı sistemini</strong> uyguluyoruz. Esenyalı'daki imalathanede hazırlayıp, Aralık ve Tuzluca dahil yerleşim birimlerinin tamamına sevkiyatla teslim ediyoruz.",
    seoTitle: "Iğdır Plise Perde | Gece Gündüz Çift Katman, Esenyalı",
    seoDescription: "Iğdır plise perde: 4 ilçe, sıcak ova iklimi için gece-gündüz çift katmanlı model, sevkiyatla teslimat.",
    sections: [
      {
        h2: "Ermenistan Sınırında Uç Sıcaklık Farklarına Çift Katman Çözüm",
        paragraphs: [
          "Iğdır, 875 metre rakımıyla Doğu Anadolu'nun en alçak noktasında yer alır. Ermenistan ve Nahçıvan sınırındaki bu ovada yazın sıcaklık +40°C'ye tırmanır, kışın ise -20°C'ye düşer. 60 derecelik bu sıcaklık farkı, pencere kumaşına hem ısı hem ışık açısından aşırı yük bindirir. Iğdır konutları için <strong>gece-gündüz çift katmanlı plise perde sistemini</strong> üretiyoruz: gündüz katmanı güneş ışının yüzde 70'ini süzerek iç mekan sıcaklığını düşürür, gece katmanı ise tam karartma sağlayarak soğuk hava sızmasını engeller.",
          "Iğdır merkezinin ova konutlarında standart pencere ölçülerine hızlı üretim yapıyoruz. Aralık ve Tuzluca'nın sınır bölgesi evlerinde, sert iklim koşulları nedeniyle karartma ağırlıklı gece-gündüz modelini tercih ediyoruz. Iğdır'ın kayısı ve şeftali bahçeleri arasındaki çiftlik evlerinde, geniş pencere yüzeyleri için katlanır plise sistemini uyguluyoruz. Karakoyunlu'nun küçük yerleşiminde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Esenyalı İmalathanesinden Iğdır Ovasına Sevkiyatla Teslimat",
        paragraphs: ["Iğdır'ın 4 ilçesine <strong>telefonla iletişim tabanlı keşif</strong> uyguluyoruz. Mesaj atarak pencere fotoğraflarını iletiyorsunuz, ekibimiz ölçüleri belirleyip Esenyalı'daki imalathanede üretimi tamamlıyor. Sevkiyatla Iğdır'ın sınır ilçelerine bile sorunsuz teslimat sağlıyoruz."],
      },
    ],
    faqItems: [
      { question: "Iğdır yazın +40°C kışın -20°C, tek perdeyle her iki mevsimi çözebilir miyim?", answer: "Evet, Iğdır için gece-gündüz çift katmanlı plise perde sistemini öneriyoruz. Gündüz katmanı güneş ışının yüzde 70'ini süzerek sıcaklığı düşürür, gece katmanı tam karartma sağlayarak soğuk hava sızmasını engeller." },
      { question: "Iğdır'ın kayısı bahçesindeki çiftlik evimin geniş pencereleri için perde yapılır mı?", answer: "Kayısı ve şeftali bahçeleri arasındaki çiftlik evlerinin geniş pencere yüzeyleri için katlanır plise sistemini uyguluyoruz. Mesaj atarak pencere fotoğrafını iletmeniz yeterli." },
    ],
  },
  {
    name: "Ardahan",
    slug: "ardahan-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Ardahan merkez", "Çıldır", "Damal", "Göle", "Hanak", "Posof"],
    intro: "Ardahan'ın altı ilçesinde plise perde üretimi ve sevkiyatı gerçekleştiriyoruz. Pendik'teki atölyemizde, 1900 metre ortalama rakıma sahip bu sınır ilinin pencereleri için <strong>çift petekli honeycomb hücreli modeller</strong> hazırlıyoruz. Kışın eksi kırk dereceyi aşan dondurucu hava, camlardan içeri sızar; bu nedenle ısı yalıtımlı kumaş yapısı seçiyoruz. Çıldır, Göle ve Posof dahil ilçelerin tamamına kurye ile gönderim yapıyoruz.",
    seoTitle: "Ardahan Plise Perde | Çift Petek Honeycomb & Kurye",
    seoDescription: "Ardahan plise perde: 6 ilçe, 1900m rakımda -40°C kışa karşı çift petekli honeycomb ısı yalıtımlı modeller, kurye sevkiyatı.",
    sections: [
      {
        h2: "Ardahan'ın Dondurucu Kışlarında Pencere Yalıtımı",
        paragraphs: [
          "Ardahan, Türkiye'nin en düşük sıcaklık ortalamasına sahip ilidir. Yüzölçümünün büyük bölümü bin dokuz yüz metrenin üzerinde yer alır ve kar örtüsü yedi ay boyunca erimeden kalır. Termometre eksi kırk beş dereceye kadar düşer; bu değerlerde cam yüzeyleri adeta bir soğuk radyatör gibi çalışır ve iç mekân sıcaklığını hızla sömürür. Pendik'teki atölyemizde, bu ekstrem koşullar için <strong>çift petekli honeycomb hücreli plise perde</strong> dokuyoruz. İç içe geçen iki hücre katmanı, cam ile oda arasına bir hava yastığı örer ve dondurucu rüzgârın içeri sızmmasını engeller.",
          "Çıldır Gölü kıyısındaki balıkçı lokantaları ve pansiyonlarda, buz tutan manzaraya bakan geniş pencereler için katlanır sistem tercih ediyoruz; böylece yaz aylarında göl manzarasını tamamen açmak mümkün olur. Posof'un Gürcistan sınırındaki konutlarında karartma ve honeycomb katmanını birleştiren <em>melez model</em> öneriyoruz: gündüz ışığı süzer, gece ise soğuğu tamamen keser. Göle ve Hanak ovalarındaki süt çiftliklerinde, ahşap doğramalı geniş pencereler için ölçüye özel üretim yapıyoruz. Damal'ın yüksek yamaçlarındaki evlerde ise rüzgâr geçirmez kumaş kaplaması seçiyoruz.",
        ],
      },
      {
        h2: "Ardahan İlçelerine Görüntülü Keşif ve Kurye Sevkiyatı",
        paragraphs: ["Ardahan'ın altı ilçesinin tamamına <strong>görüntülü keşif</strong> uyguluyoruz. Pendik'teki atölyemizden yola çıkan kurye aracı, Çıldır, Damal, Göle, Hanak, Posof ve merkez ilçeye iki ilç üç iş günü içinde ulaşır. Telefonla çektiğiniz pencere fotoğraflarını inceleyip milimetre hassasiyetinde ölçü alıyor, üretimi tamamladıktan sonra kapınıza kadar ulaştırıyoruz. Eksi derecelerde kumaşın esnemesini önlemek için sevkiyat öncesi ısı yalıtımlı paketleme uyguluyoruz."],
      },
    ],
    faqItems: [
      { question: "Ardahan'a kurye ile gönderilen perde kaç günde elime ulaşır?", answer: "Pendik'teki atölyemizden çıkan kurye, Ardahan merkez ve ilçelerine genellikle iki ilç üç iş günü içinde teslim edilir. Kış döneminde kar nedeniyle yollar kapansa bile nakliye firması depoda bekletir, yol açılınca sevkiyatı tamamlar." },
      { question: "Çift petekli honeycomb perde nedir, Ardahan'da neden gereklidir?", answer: "Çift petekli honeycomb, iç içe geçmiş iki altıgen hücre katmanından oluşan bir kumaş yapısıdır. İki katman arasındaki hava boşluğu, camdan gelen dondurucu soğuğu oda içine ulaşmadan kırar. Ardahan'ın eksi kırk derecelik kışında tek petek yeterli olmaz; çift petek ısı kaybını yüzde otuza kadar azaltır." },
    ],
  },
  {
    name: "Muş",
    slug: "mus-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Bulanık", "Hasköy", "Korkut", "Malazgirt", "Muş merkez", "Varto"],
    intro: "Muş'un altı ilçesi için Esenyalı'daki üretim tesisimizde plise perde hazırlıyoruz. Bin dört yüz metre rakımdaki bu geniş ova şehrinde kışın eksi yirmi beş, yazın artı otuz beş dereceye varan sıcaklık oynamaları yaşanır; bu nedenle <strong>gece-gündüz çift katmanlı modelleri</strong> tavsiye ediyoruz. Bulanık, Malazgirt ve Varto dahil her ilçeye uzaktan keşif ve sevkiyat ile gönderim düzenliyoruz.",
    seoTitle: "Muş Plise Perde - Gece Gündüz Katmanlı ve Sevkiyat Gönderimi",
    seoDescription: "Muş plise perde: 6 ilçe, 1400m ova ikliminde -25 +35 derece sıcaklık farkına karşı gece-gündüz çift katmanlı modeller, sevkiyat ile teslimat.",
    sections: [
      {
        h2: "Muş Ovasının Aşırı Sıcaklık Farklarına Karşı Perde Çözümleri",
        paragraphs: [
          "Muş, Doğu Anadolu'nun en geniş düzlüklerinden birine yayılır. Bin dört yüz metrelik ortalama yükseklik, kışın sert bir karasal soğuk, yazın ise kavurucu bir güneş getirir. Gündüz ile gece arasaki fark otuz dereceyi bulur ve pencere camları bu salınımdan doğrudan etkilenir. Esenyalı'daki üretim tesisimizde, bu iklim çelişkisi için <strong>gece-gündüz plise perde sistemini</strong> üretiyoruz: güneşli saatlerde ışık süzücü katman ısınmayı frenler, karanlıkta karartma katmanı soğuk hava akımını keser.",
          "Malazgirt'teki 1071 zafer anıtı çevresindeki turizm işletmelerinde, geniş vitrin pencereleri için katlanır mekanizmalı modeller tercih ediyoruz. Bulanık ve Hasköy tarım alanlarındaki süt ve hayvancılık çiftliklerinde, ahşap doğramalı geniş pencerelere ölçüye özel üretim yapıyoruz. Varto'nun Munzur eteklerindeki dağ yamaçlarında konutlar daha sert rüzgâra maruz kalır; burada honeycomb hücreli kumaş öneriyoruz. Korkut'un küçük yerleşimlerinde ise standart ölçülere hızlı üretim uyguluyoruz.",
        ],
      },
      {
        h2: "Muş'un Altı İlçesine Uzaktan Ölçü ve Sevkiyat Dağıtımı",
        paragraphs: ["Muş'un her ilçesine <strong>uzaktan keşif</strong> yaparak ölçü belirliyor, Esenyalı'daki üretim tesisimizde perdeyi hazırlayıp sevkiyat ile gönderiyoruz. Bulanık, Hasköy, Korkut, Malazgirt, Muş merkez ve Varto adreslerine iki iş günü içinde teslimat sağlıyoruz. Mesajlaşarak gönderdiğiniz fotoğraflardan milimetre hassasiyetinde ölçü çıkarıyor, kışın yolu kapansa bile nakliye firmasının depo bekletme hizmetiyle gönderimi güvence altına alıyoruz."],
      },
    ],
    faqItems: [
      { question: "Muş ovasında gece-gündüz perde nasıl çalışır, iki katman ne işe yarar?", answer: "Gece-gündüz modelinde iki ayrı kumaş katmanı üst üste çalışır. Gündüz katmanı güneş ışığını süzerek ovanın kavurucu sıcaklığını kırar; gece katmanı ise karartma özelliğiyle ova soğuğunun camdan içeri sızmasını engeller. Tek kumaşta bu iki işlevi birleştiren sistem, Muş'un otuz derecelik gece-gündüz farkına ideal uyum sağlar." },
      { question: "Malazgirt'te turizm tesisleri için toplu perde üretimi yapıyor musunuz?", answer: "Evet, Malazgirt'teki 1071 anıtı çevresindeki pansiyon ve oteller için Esenyalı'daki üretim tesisimizde toplu üretim yapıyoruz. Geniş vitrin pencerelerine katlanır mekanizmalı plise perde uyguluyor, yangın dayanımlı B1 sınıfı kumaş seçeneği sunuyoruz." },
    ],
  },
  {
    name: "Bitlis",
    slug: "bitlis-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Adilcevaz", "Ahlat", "Bitlis merkez", "Güroymak", "Hizan", "Mutki", "Tatvan"],
    intro: "Bitlis'in yedi ilçesi için İstanbul'daki fabrikamızda plise perde dokuyoruz. Van Gölü'nün batı yakasında, bin yedi yüz metre rakımda kurulu bu tarihi kervan şehrinde kışın eksi yirmi beş dereceye inen soğuklar hüküm sürer; bu yüzden <strong>honeycomb hücreli ısı yalıtımlı kumaş yapılarını</strong> tercih ediyoruz. Tatvan, Ahlat ve Adilcevaz başta olmak üzere ilçe sınırlarının tümüne online keşif ve teslimat ile gönderim sağlıyoruz.",
    seoTitle: "Bitlis Plise Perde | Honeycomb, Van Gölü Teslimat",
    seoDescription: "Bitlis plise perde: 7 ilçe, 1700m rakımda Van Gölü batı kıyısında honeycomb ısı yalıtımlı modeller, teslimat ile sevkiyat.",
    sections: [
      {
        h2: "Bitlis'in Tarihi Kervan Yolunda Göl Kıyısı Perde Uygulamaları",
        paragraphs: [
          "Bitlis, İpek Yolu'nun önemli duraklarından biridir. Şehir merkezi, dar vadiler arasına sıkışmış tarihi kervan evleri ve taş mimarisiyle ünlüdür. Bin yedi yüz metrelik rakım, kış aylarında eksi yirmi beş dereceye varan soğuk getirir. İstanbul'daki fabrikamızda, bu soğuk iklim için <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> hazırlıyoruz. Altıgen petek yapısı, cam ile oda arasına bir hava tamponu oluşturur ve soğuk hava sirkülasyonunu keser.",
          "Tatvan'daki Van Gölü iskelesine yakın konutlarda, sabah güneşini göl yüzeyinden yansıtan pencereler için güneşlik kumaşlı katlanır sistem uyguluyoruz. Ahlat'taki Selçuklu mezar taşları müze bölgesindeki pansiyonlarda, turist konaklaması için karartma modeli öneriyoruz. Adilcevaz'ın Kef Kalesi yamacındaki tarihi taş evlerde, eski doğrama ölçülerine özel üretim yapıyoruz. Hizan ve Mutki'nin dağ yamaçlarındaki köylerinde, rüzgâr baskısına dayanıklı honeycomb kumaşı tercih ediyoruz. Güroymak ovasındaki tarım işletmelerinde ise geniş vitrinler için katlanır mekanizma kuruyoruz.",
        ],
      },
      {
        h2: "Bitlis Yedi İlçesine Göl Çevresi Teslimat Hattı",
        paragraphs: ["Bitlis'in ilçe sınırlarının tümüne <strong>online keşif</strong> ile ölçü alıyor, İstanbul'daki fabrikamızda üretimini tamamladığımız perdeleri teslimat ile ulaştırıyoruz. Adilcevaz, Ahlat, Bitlis merkez, Güroymak, Hizan, Mutki ve Tatvan adreslerine iki ilç üç iş günü içinde ulaşıyoruz. Fotoğraf paylaşarak gönderdiğiniz pencere görüntülerinden milimetre hassasiyetinde ölçü çıkarıyor, tarihi taş doğramalar için özel montaj kılavuzu hazırlıyoruz."],
      },
    ],
    faqItems: [
      { question: "Tatvan'da Van Gölü manzaralı pencere için hangi perde tipi önerilir?", answer: "Tatvan'da göl yüzeyinden yansıyan sabah güneşi gözü yorar; bu nedenle güneşlik kumaşlı katlanır plise perde öneriyoruz. Işığı yüzde yetmiş süzer, manzarayı kapatmadan parıltıyı kırar. Akşam üzeri katlanarak tamamen açılır ve göl manzarasını serbest bırakır." },
      { question: "Bitlis'in tarihi taş evlerinde özel ölçü perde üretiliyor mu?", answer: "Evet, Bitlis merkez ve Adilcevaz'daki tarihi kervan yolu evlerinin eski doğramalarına özel ölçü üretim yapıyoruz. Fotoğraf paylaşarak gönderdiğiniz görüntülerden doğrama ölçülerini çıkarıyor, İstanbul'daki fabrikamızda milimetre hassasiyetinde kesim uyguluyoruz." },
    ],
  },
  {
    name: "Bingöl",
    slug: "bingol-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Adaklı", "Bingöl merkez", "Genç", "Karlıova", "Kiğı", "Solhan", "Yayladere", "Yedisu"],
    intro: "Bingöl'ün sekiz ilçesi için Pendik üretim merkezinde plise perde hazırlıyoruz. Adını bölgedeki sayısız krater gölünden alan bu dağlık şehir, bin yüz elli metre ortalama rakıma sahiptir; kışın kar yağışı bol, yazın ise yayla serinliği egemendir. Bu nedenle <strong>honeycomb hücreli ısı yalıtımlı kumaş yapılarını</strong> tavsiye ediyoruz. Solhan, Genç ve Karlıova dahil beldelerin hepsine dijital keşif ve gönderim ile sevkiyat düzenliyoruz.",
    seoTitle: "Bingöl Plise Perde | Honeycomb, Dağlık Bölge Gönderim",
    seoDescription: "Bingöl plise perde: 8 ilçe, 1150m dağlık yayla ikliminde honeycomb ısı yalıtımlı modeller, gönderim ile teslimat.",
    sections: [
      {
        h2: "Bingöl'ün Bin Göl Bölgesinde Yayla İklimine Uygun Perde",
        paragraphs: [
          "Bingöl ismini, bölgede dağ yamaçlarına dağılmış binlerce küçük gölden alır. Yüzölçümünün büyük bölümü bin yüz elli metrenin üzerinde yer alır ve dağ sıraları şehri kuşatır. Kışın kar kalınlığı uzun süre korunur, yazın ise yayla iklimi gece sıcaklığını düşürür. Bu zıtlık, pencere camlarında yoğuşma ve ısıl gerilim yaratır. Pendik üretim merkezinde, bu koşullar için <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> üretiyoruz. Altıgen petek gözenekleri, cam ile oda arasında bir hava tabakası hapsederek sıcaklık salınımını dengeler.",
          "Bingöl merkez apartmanlarında standart pencere ölçülerine hızlı üretim yapıyoruz. Solhan ve Genç ovalarındaki tarım çiftliklerinde, geniş ahşap doğramalar için katlanır mekanizmalı sistem kuruyoruz. Karlıova ve Kiğı'nın yüksek rakımlı yayla köylerinde, şiddetli kış soğuğuna karşı çift petekli honeycomb öneriyoruz. Yayladere ve Yedisu'nun dar vadi yerleşimlerinde, küçük pencere ölçülerine özel üretim uyguluyoruz. Adaklı'nın dağ yamacındaki evlerinde ise rüzgâr geçirmez kumaş kaplaması seçiyoruz.",
        ],
      },
      {
        h2: "Bingöl Sekiz İlçesine Dağ Bölgesi Gönderim Ağı",
        paragraphs: ["Bingöl'ün beldelerin hepsine <strong>dijital keşif</strong> yaparak ölçü alıyor, Pendik üretim merkezinde hazırladığımız perdeleri gönderim ile yolluyoruz. Adaklı, Bingöl merkez, Genç, Karlıova, Kiğı, Solhan, Yayladere ve Yedisu adreslerine iki ilç üç iş günü içinde teslim ediyoruz. Dağ yollarının kışın kapanma ihtimaline karşı nakliye firmasının depo bekletme hizmetini kullanıyor, yol açıldığında sevkiyatı tamamlıyoruz."],
      },
    ],
    faqItems: [
      { question: "Bingöl yayla evlerinde hangi perde tipi kullanılmalı, honeycomb neden önerilir?", answer: "Bingöl'ün yayla ikliminde gece sıcaklığı aniden düşer ve camlarda yoğuşma oluşur. Honeycomb hücreli plise perde, altıgen petek gözenekleri arasında hava tabakası hapsederek bu sıcaklık salınımını dengeler. Yayla evlerinde tek petek yeterli olabilir; yüksek rakımlı Karlıova ve Kiğı köylerinde çift petekli model öneriyoruz." },
      { question: "Kiğı ve Karlıova'ya kışın perde gönderimi ulaşır mı?", answer: "Evet, Kiğı ve Karlıova'ya gönderim ile sevkiyat yapıyoruz. Kışın dağ yolları kapanırsa nakliye firması paketi depoda bekletir, yol açıldığında teslimatı tamamlar. Mobil iletişimle sevkiyat durumunu takip edebilirsiniz." },
    ],
  },
  {
    name: "Tunceli",
    slug: "tunceli-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Çemişgezek", "Hozat", "Mazgirt", "Nazmiye", "Ovacık", "Pertek", "Pülümür", "Tunceli merkez"],
    intro: "Tunceli'nin sekiz ilçesi için İstanbul atölyesinde plise perde hazırlıyoruz. Munzur Dağları'nın eteklerine serilen bu ormanlık ve vadili şehirde, mikro iklim kuşakları birbirinden farklı sıcaklık ve nem değerleri yaratır. Bu çeşitliliğe karşı <strong>orman nemine dayanıklı honeycomb hücreli kumaş yapılarını</strong> öneriyoruz. Pertek, Ovacık ve Hozat dahil ilçe bazında tamamına mesafeli keşif ve nakliye ile sevkiyat düzenliyoruz.",
    seoTitle: "Tunceli Plise Perde | Orman Nemi, Munzur Nakliye",
    seoDescription: "Tunceli plise perde: 8 ilçe, Munzur Dağları vadisinde orman nemine dayanıklı honeycomb modeller, nakliye ile teslimat.",
    sections: [
      {
        h2: "Tunceli'nin Munzur Vadisinde Orman Nemine Dayanıklı Perde Sistemleri",
        paragraphs: [
          "Tunceli, Munzur Dağları ve Munzur Vadisi Milli Parkı ile çevrili bir şehirdir. Yoğun orman örtüsü, vadiler boyunca yüksek nem oranları üretir; bu değer kışın yüzde seksene ulaşır. Yüksek nem, standart kumaşlarda küflenme ve deformasyona yol açar. İstanbul atölyesinde, bu koşullar için <strong>anti-bakteriyel kaplamalı honeycomb hücreli plise perde</strong> üretiyoruz. Kumaş gözenekleri arasında hapsolmuş hava tabakası, hem ısıl yalıtım sağlar hem de nem sirkülasyonunu dengeler.",
          "Pertek'in Keban Baraj Gölü kıyısındaki konutlarında, su yüzeyinden yansıyan ışık için güneşlik kumaşlı katlanır sistem uyguluyoruz. Ovacık'ın yüksek rakımlı düzlüğünde çift petekli honeycomb öneriyoruz; burada kış sıcaklığı vadi tabanından daha düşüktür. Çemişgezek'in meyve bahçeleri arasındaki çiftlik evlerinde, geniş pencereler için katlanır mekanizma kuruyoruz. Hozat ve Mazgirt'in dağ yamaçlarındaki köylerinde honeycomb modelini tercih ediyoruz. Pülümür vadisinin dar sokaklarındaki evlerinde ise küçük pencere ölçülerine özel üretim yapıyoruz. Nazmiye'nin orman içi yerleşimlerinde anti-bakteriyel kumaş kaplaması seçiyoruz.",
        ],
      },
      {
        h2: "Tunceli Sekiz İlçesine Vadi Bölgesi Nakliye Hattı",
        paragraphs: ["Tunceli'nin ilçe bazında tamamına <strong>mesafeli keşif</strong> uygulayarak ölçü alıyor, İstanbul atölyesinde üretimini tamamladığımız perdeleri nakliye ile yolluyoruz. Çemişgezek, Hozat, Mazgirt, Nazmiye, Ovacık, Pertek, Pülümür ve Tunceli merkez adreslerine iki ilç üç iş günü içinde teslim ediyoruz. Vadi yollarının dar ve virajlı olması nedeniyle nakliye firması küçük araçlarla sevkiyat yapıyor; görüntülü arama ile sevkiyat durumunu anlık takip edebilirsiniz."],
      },
    ],
    faqItems: [
      { question: "Munzur Vadisi milli parkındaki doğa evlerine perde yapılıyor mu, orman nemi kumaşı bozar mı?", answer: "Evet, Munzur Vadisi çevresindeki doğa evlerine perde üretiyoruz. Orman nemi standart kumaşlarda küflenmeye yol açar; bu nedenle anti-bakteriyel kaplamalı honeycomb kumaş tercih ediyoruz. Kumaş gözenekleri arasındaki hava tabakası nem sirkülasyonunu dengeler ve küf oluşumunu engeller." },
      { question: "Tunceli'de Pertek ve Ovacık arasındaki sıcaklık farkı perde seçimini nasıl etkiler?", answer: "Pertek, Keban Baraj Gölü kıyısında daha ılımandır; burada güneşlik kumaşlı katlanır sistem yeterlidir. Ovacık ise yüksek rakımlı düzlüktedir ve kış sıcaklığı daha düşüktür; bu yüzden çift petekli honeycomb öneriyoruz. İki ilçe arasındaki sıcaklık farkı, perde kumaş yapısını doğrudan belirler." },
    ],
  },
  {
    name: "Elazığ",
    slug: "elazig-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Ağın", "Alacakaya", "Arıcak", "Baskil", "Elazığ merkez", "Karakoçan", "Keban", "Kovancılar", "Maden", "Palu", "Sivrice"],
    intro: "Elazığ'ın on bir ilçesi için Marmara üretim hattında plise perde hazırlıyoruz. Bin altmış yedi metre rakımdaki bu sanayi ve üniversite şehrinde, karasal iklim kışın soğuk yazın sıcak getirir; bu yüzden <strong>gece-gündüz çift katmanlı modelleri</strong> tavsiye ediyoruz. Organize sanayi bölgesindeki fabrikalar için yangın dayanımlı B1 sınıfı kumaştan toplu üretim yapıyoruz. Kovancılar, Baskil ve Sivrice dahil ilçelerin tamamına sanal keşif ve dağıtım ile sevkiyat düzenliyoruz.",
    seoTitle: "Elazığ Plise Perde | Yangın Dayanımlı B1, Dağıtım",
    seoDescription: "Elazığ plise perde: 11 ilçe, 1067m karasal iklimde gece-gündüz modelleri, organize sanayi için yangın dayanımlı B1 kumaş, dağıtım ile teslimat.",
    sections: [
      {
        h2: "Elazığ'ın Sanayi Bölgesinde Yangın Dayanımlı Toplu Perde Projeleri",
        paragraphs: [
          "Elazığ, Doğu Anadolu'nun en güçlü sanayi altyapısına sahip illerinden biridir. Organize sanayi bölgesindeki fabrika binaları, işçi lojmanları ve idari ofisler, toplu perde ihtiyacının yoğunlaştığı alanlardır. Marmara üretim hattında, bu yapılarda <strong>yangın dayanımlı B1 sınıfı kumaştan plise perde</strong> üretiyoruz. B1 kumaş, alev yayılımını geciktiren kimyasal kaplamaya sahiptir ve endüstriyel tesislerde güvenlik yönetmeliklerine uygunluk sağlar. Şehir merkezindeki apartman dairelerinde ise karasal iklimin sıcaklık oynamalarına karşı gece-gündüz modelini tercih ediyoruz.",
          "Sivrice ve Keban'ın Keban Baraj Gölü kıyısındaki konutlarında, su yüzeyinden yansıyan ışık için güneşlik kumaşlı katlanır sistem uyguluyoruz. Baskil ve Arıcak'ın meyve bahçeleri arasındaki çiftlik evlerinde, geniş ahşap doğramalar için ölçüye özel üretim yapıyoruz. Karakoçan ve Maden'in dağlık kesimlerinde honeycomb hücreli model öneriyoruz. Harput tarihi mahallesinin taş evlerinde, eski doğrama ölçülerine özel üretim uyguluyoruz. Palu'nun vadideki konutlarında ise karartma katmanı ekliyoruz.",
        ],
      },
      {
        h2: "Elazığ On Bir İlçesine Baraj Gölü Çevresi Dağıtım Düzeni",
        paragraphs: ["Elazığ'ın ilçelerin tamamına <strong>sanal keşif</strong> yaparak ölçü alıyor, Marmara üretim hattında hazırladığımız perdeleri dağıtım ile gönderiyoruz. Ağın, Alacakaya, Arıcak, Baskil, Elazığ merkez, Karakoçan, Keban, Kovancılar, Maden, Palu ve Sivrice adreslerine iki iş günü içinde ulaşıyoruz. Organize sanayi bölgesindeki fabrikalara toplu sevkiyat için özel dağıtım planlaması yapıyor, lojman blokları için montaj ekibi yönlendiriyoruz."],
      },
    ],
    faqItems: [
      { question: "Elazığ organize sanayide fabrikalar için yangın dayanımlı perde üretiyor musunuz?", answer: "Evet, Elazığ organize sanayi bölgesindeki fabrika, depo ve işçi lojmanları için yangın dayanımlı B1 sınıfı kumaştan plise perde üretiyoruz. B1 kumaş, alev yayılımını geciktiren kimyasal kaplamaya sahiptir ve endüstriyel tesis güvenlik yönetmeliklerine uygundur. Toplu siparişlerde özel fiyatlandırma uyguluyoruz." },
      { question: "Harput'un tarihi taş evlerine özel ölçü perde mümkün mü, eski doğramaya uyum sağlar mı?", answer: "Evet, Harput tarihi mahallesinin taş evlerindeki eski doğramalar için özel ölçü üretim yapıyoruz. WhatsApp'tan çektiğiniz fotoğraflardan doğrama ölçülerini çıkarıyor, Marmara üretim hattında milimetre hassasiyetinde kesim uyguluyoruz. Eski ahşap doğramaya zarar vermeyecek montaj profili seçiyoruz." },
    ],
  },
  {
    name: "Malatya",
    slug: "malatya-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Akçadağ", "Arapgir", "Arguvan", "Battalgazi", "Darende", "Doğanşehir", "Doğanyol", "Hekimhan", "Kale", "Kuluncak", "Pütürge", "Yazıhan", "Yeşilyurt"],
    intro: "Malatya'nın on üç ilçesi için Pendik'teki imalathanede plise perde dokuyoruz. Dünyanın kayısı başkenti olarak bilinen bu şehirde yazın artı kırk dereceye varan sıcaklar, kışın ise eksi on beş dereceye inen soğuklar yaşanır; bu uç farklar için <strong>gece-gündüz çift katmanlı modelleri</strong> öneriyoruz. Hekimhan demir madeni bölgesindeki işçi lojmanları için yangın dayanımlı B1 kumaştan toplu üretim yapıyoruz. Battalgazi, Yeşilyurt ve Pütürge dahil her ilçeye ekran üzerinden keşif ve ulaştırma ile sevkiyat düzenliyoruz.",
    seoTitle: "Malatya Plise Perde | Kayısı Şehri, Gece Gündüz",
    seoDescription: "Malatya plise perde: 13 ilçe, +40 -15 derece iklim farkına karşı gece-gündüz modelleri. Hekimhan maden lojmanları için B1 kumaş, ulaştırma ile teslimat.",
    sections: [
      {
        h2: "Malatya'nın Kayısı Bahçeleri Arasında Sıcak İklim Perde Tercihleri",
        paragraphs: [
          "Malatya, kayısı üretiminin dünya merkezidir. Yaz aylarında termometre artı kırk dereceye tırmanır ve güneş ışını yoğunluğu zirveye çıkar. Kışın ise eksi on beş dereceye inen soğuk, karasal iklimin sertliğini hatırlatır. Bu zıtlık, pencere camlarını hem ısınma hem soğuma kaynağına dönüştürür. Pendik'teki imalathanede, bu iklim çelişkisi için <strong>gece-gündüz plise perde sistemini</strong> hazırlıyoruz. Gündüz katmanı, kayısı bahçelerinden yansıyan güneşi süzerek iç mekân sıcaklığını kırar; gece karartma katmanı, kış soğuğunun camdan içeri sızmasını engeller.",
          "Battalgazi ve Yeşilyurt merkez ilçelerindeki apartman dairelerinde standart pencere ölçülerine hızlı üretim yapıyoruz. Aslantepe höyüğü çevresindeki arkeolojik sit alanına yakın evlerin pencerelerine özel ölçü üretim uyguluyoruz. Hekimhan'ın demir madeni bölgesindeki işçi lojmanları için yangın dayanımlı B1 sınıfı kumaştan toplu perde üretiyoruz. Pütürge ve Doğanşehir'in kayısı bahçeleri arasındaki çiftlik evlerinde, geniş veranda pencereleri için katlanır mekanizmalı sistem kuruyoruz. Darende ve Akçadağ'ın vadi yerleşimlerinde honeycomb modelini tercih ediyoruz. Arapgir ve Yazıhan'ın küçük ilçelerinde ise standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Malatya'nın İlçelerine Kayısı Şehri Ulaştırma Sevkiyatı",
        paragraphs: ["Malatya'nın her ilçesine <strong>ekran üzerinden keşif</strong> yaparak ölçü alıyor, Pendik'teki imalathanede üretimini tamamladığımız perdeleri ulaştırma ile gönderiyoruz. Akçadağ, Arapgir, Arguvan, Battalgazi, Darende, Doğanşehir, Doğanyol, Hekimhan, Kale, Kuluncak, Pütürge, Yazıhan ve Yeşilyurt adreslerine iki iş günü içinde teslim ediyoruz. Hekimhan maden bölgesine toplu sevkiyat için özel ulaştırma planlaması yapıyor, lojman blokları için montaj kılavuzu hazırlıyoruz."],
      },
    ],
    faqItems: [
      { question: "Malatya'da kayısı kurutma tesislerine ve bahçe evlerine perde takılıyor mu, güneşlik kumaş işe yarar mı?", answer: "Evet, Pütürge ve Doğanşehir'deki kayısı bahçeleri arasındaki çiftlik evlerine perde üretiyoruz. Güneşlik kumaşlı katlanır sistem, kayısı kurutma alanlarındaki yoğun güneşi süzer ve iç mekân sıcaklığını düşürür. Bahçe verandasındaki geniş pencereler için katlanır mekanizma tercih ediyoruz." },
      { question: "Hekimhan demir madeni lojmanları için yangın dayanımlı perde üretiyor musunuz?", answer: "Evet, Hekimhan'ın demir madeni bölgesindeki işçi lojmanları için yangın dayanımlı B1 sınıfı kumaştan toplu plise perde üretiyoruz. B1 kumaş, alev yayılımını geciktiren kimyasal kaplamaya sahiptir ve maden lojmanı güvenlik yönetmeliklerine uygundur. Toplu siparişlerde özel fiyatlandırma uyguluyoruz." },
    ],
  },
  {
    name: "Van",
    slug: "van-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Bahçesaray", "Başkale", "Çaldıran", "Çatak", "Edremit", "Erciş", "Gevaş", "Gürpınar", "İpekyolu", "Muradiye", "Özalp", "Saray", "Tuşba"],
    intro: "Van'ın on üç ilçesi için Pendik'teki atölyemizde plise perde hazırlıyoruz. Türkiye'nin en büyük gölü olan Van Gölü kıyısında, bin yedi yüz yirmi yedi metre rakımda kurulu bu şehirde kışın eksi yirmi beş, yazın artı otuz beş dereceye varan sıcaklık oynamaları yaşanır; bu uç farklar için <strong>gece-gündüz çift katmanlı modelleri</strong> tavsiye ediyoruz. Gölün alkali su buharı sahil kesimde kumaş seçimini belirler; bu bölgede anti-alkali kaplamalı kumaş kullanıyoruz. İpekyolu, Tuşba ve Erciş dahil ilçe sınırlarının tümüne fotoğraf üzerinden keşif ve kargoyla sevkiyat düzenliyoruz.",
    seoTitle: "Van Plise Perde | Anti-Alkali Kumaş, Van Gölü Teslimat",
    seoDescription: "Van plise perde: 13 ilçe, 1727m rakımda Van Gölü alkali buharına karşı anti-alkali kaplamalı kumaş, gece-gündüz modelleri, kargoyla sevkiyat.",
    sections: [
      {
        h2: "Van Gölünün Alkali Buharına Dayanıklı Sahil Perde Kumaşları",
        paragraphs: [
          "Van Gölü, dünyanın en büyük alkali göllerinden biridir. Suyun pH değeri dokuz buçuk civarındadır ve sahil kesimde buharlaşan su, havaya alkali partiküller yayalar. Bu partiküller, standart kumaş liflerine yapışarak zamanla deformasyon, renk solması ve doku bozukluğu yaratır. Pendik'teki atölyemizde, sahil ilçeler için <strong>anti-alkali kaplamalı plise perde kumaşı</strong> kullanıyoruz. Kaplama, alkali partiküllerin liflere tutunmasını engeller ve kumaş ömrünü önemli ölçüde uzatır. İç kesimlerde ise gece-gündüz çift katmanlı modeli tercih ediyoruz: gündüz katmanı güneşi süzer, gece karartma katmanı soğuğu keser.",
          "İpekyolu ve Tuşba merkez ilçelerindeki apartman dairelerinde standart pencere ölçülerine hızlı üretim yapıyoruz. Erciş ovasındaki tarım çiftliklerinde, geniş ahşap doğramalar için katlanır mekanizmalı sistem kuruyoruz. Edremit sahil beldesinde, göl manzaralı pencereler için anti-alkali kaplamalı güneşlik kumaş öneriyoruz. Başkale ve Çaldıran'ın yüksek rakımlı sınır bölgelerinde honeycomb hücreli model tercih ediyoruz. Van Kalesi yamacındaki tarihi binaların pencerelerine özel ölçü üretim uyguluyoruz. Gevaş ve Gürpınar'ın vadideki yerleşimlerinde ise karartma katmanı ekliyoruz. Muradiye şelalesi çevresindeki pansiyonlarda katlanır sistem kuruyor, Bahçesaray ve Saray'ın dağ köylerinde honeycomb modelini seçiyoruz.",
        ],
      },
      {
        h2: "Van'ın İlçelerine Göl Çevresi Kargoyla Dağıtım Ağı",
        paragraphs: ["Van'ın ilçe sınırlarının tümüne <strong>fotoğraf üzerinden keşif</strong> yaparak ölçü alıyor, Pendik'teki atölyemizde üretimini tamamladığımız perdeleri kargoyla gönderiyoruz. Bahçesaray, Başkale, Çaldıran, Çatak, Edremit, Erciş, Gevaş, Gürpınar, İpekyolu, Muradiye, Özalp, Saray ve Tuşba adreslerine iki ilç üç iş günü içinde ulaşıyoruz. Sınır bölgesi olan Başkale ve Çaldıran'a kışın yol kapanma ihtimaline karşı nakliye firmasının depo bekletme hizmetini kullanıyoruz."],
      },
    ],
    faqItems: [
      { question: "Van Gölü sahilinde kumaş neden anti-alkali olmalı, standart kumaş ne olur?", answer: "Van Gölü'nün suyu alkali yapısındadır ve sahil kesimde buharlaşan su havaya alkali partiküller yayar. Bu partiküller standart kumaş liflerine yapışarak renk solması, doku bozukluğu ve ömür kısalması yaratır. Anti-alkali kaplamalı kumaş, partiküllerin liflere tutunmasını engeller ve kumaş ömrünü önemli ölçüde uzatır. Edremit ve Gevaş gibi sahil ilçelerinde bu kaplama zorunludur." },
      { question: "Erciş ovasında geniş pencere için hangi sistem önerilir, katlanır mekanizma uygun mu?", answer: "Erciş ovasındaki tarım çiftliklerinde geniş ahşap doğramalar için katlanır mekanizmalı plise perde öneriyoruz. Mekanizma, perdeyi yana doğru katlayarak geniş pencere açıklığını tamamen serbest bırakır. Ovanın yaz sıcaklığına karşı güneşlik kumaş, kış soğuğuna karşı ise honeycomb alt katman ekleyebiliyoruz." },
    ],
  },
  {
    name: "Hakkari",
    slug: "hakkari-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Çukurca", "Derecik", "Hakkari merkez", "Şemdinli", "Yüksekova"],
    intro: "Hakkari'nin beş ilçesi için Esenyalı'daki üretim tesisimizde plise perde hazırlıyoruz. Türkiye'nin en dağlık ve en yüksek rakımlı illerinden birinde, bin yedi yüz metre ortalama yükseklikte, Cilo ve Sat sıradağlarının eteklerinde kışın eksi otuz dereceye varan soğuklar ve aylarca süren kar örtüsü hüküm sürer. Bu şiddetli kış koşullarına karşı <strong>çift petekli honeycomb hücreli ısı yalıtımlı modelleri</strong> öneriyoruz. Yüksekova, Şemdinli ve Çukurca dahil beldelerin hepsine iletişim tabanlı keşif ve sevkiyatla gönderim düzenliyoruz.",
    seoTitle: "Hakkari Plise Perde | Çift Petekli Honeycomb & Sevkiyat",
    seoDescription: "Hakkari plise perde: 5 ilçe, 1700m Cilo-Sat sıradağlarında -30°C kışa karşı çift petekli honeycomb ısı yalıtımlı modeller, sevkiyatla teslimat.",
    sections: [
      {
        h2: "Hakkari'nin Cilo-Sat Sıradağlarında Buz Devri Perde Yalıtımı",
        paragraphs: [
          "Hakkari, Türkiye'nin en sarp ve en yüksek dağ silsilelerine ev sahipliği yapar. Cilo ve Sat sıradağları, yılın büyük bölümünde karla kaplı kalır ve yerleşim yerleri bu dağların dar vadilerine sıkışır. Bin yedi yüz metrelik ortalama rakım, kışın eksi otuz dereceye varan soğuklar getirir; kar örtüsü bazen altı ayı aşar. Bu koşullarda pencere camları, ısı kaybının en kritik noktalarıdır. Esenyalı'daki üretim tesisimizde, bu buz devri iklimi için <strong>çift petekli honeycomb hücreli plise perde</strong> üretiyoruz. İç içe geçen iki altıgen hücre katmanı, cam ile oda arasında çift hava yastığı örer ve dondurucu rüzgârın içeri sızmasını iki katmanlı olarak kırar.",
          "Hakkari merkez konutlarında standart pencere ölçülerine hızlı üretim yapıyoruz. Yüksekova'nın geniş ovasındaki hayvancılık çiftliklerinde, geniş ahşap doğramalar için katlanır mekanizmalı sistem kuruyoruz. Şemdinli'nin Irak sınırındaki konutlarında, sert iklim ve güvenlik gereği karartma ile honeycomb katmanını birleştiren <em>melez model</em> öneriyoruz: gündüz ışığı süzer, gece hem soğuğu hem görüşü keser. Çukurca ve Derecik'in dağ yamaçlarındaki köylerinde, rüzgâr baskısına dayanıklı çift petekli honeycomb tercih ediyoruz. Derecik'in sarp vadi yerleşimlerinde ise küçük pencere ölçülerine özel üretim uyguluyoruz.",
        ],
      },
      {
        h2: "Hakkari Beş İlçesine Sınır Bölgesi Sevkiyat Hattı",
        paragraphs: ["Hakkari'nin beldelerin hepsine <strong>iletişim tabanlı keşif</strong> yaparak ölçü alıyor, Esenyalı'daki üretim tesisimizde hazırladığımız perdeleri sevkiyatla gönderiyoruz. Çukurca, Derecik, Hakkari merkez, Şemdinli ve Yüksekova adreslerine iki ilç dört iş günü içinde teslim ediyoruz. Sınır bölgesi olması ve dağ yollarının kışın kapanma ihtimali nedeniyle nakliye firmasının depo bekletme hizmetini kullanıyor, yol açıldığında sevkiyatı tamamlıyoruz. Telefonla sevkiyat durumunu anlık takip edebilirsiniz."],
      },
    ],
    faqItems: [
      { question: "Hakkari'de kışın karartma perde ısıyı korur mu, honeycomb ile farkı nedir?", answer: "Karartma perde ışığı tamamen keser ancak ısı yalıtımı sınırlıdır. Honeycomb hücreli kumaş ise altıgen petek gözenekleri arasında hava tabakası hapsederek ısıl yalıtım sağlar. Hakkari'nin eksi otuz derecelik kışında karartma tek başına yetmez; çift petekli honeycomb, ısı kaybını yüzde otuza kadar azaltır. Şemdinli gibi sınır bölgelerinde ikisini birleştiren melez model öneriyoruz." },
      { question: "Yüksekova ovasında rüzgâra karşı hangi perde önerilir, kumaş yırtılır mı?", answer: "Yüksekova ovasında kış rüzgârı şiddetli eser ve kumaş yüzeyine baskı uygular. Esenyalı'daki üretim tesisimizde, rüzgâr baskısına dayanıklı çift petekli honeycomb kumaş tercih ediyoruz. Kumaşın altıgen hücre yapısı, rüzgâr basıncını yüzey boyunca dağıtarak yırtılma riskini azaltır. Geniş ahşap doğramalar için katlanır mekanizma ekliyoruz." },
    ],
  },
  // --- GÜNEYDOĞU ANADOLU BÖLGESİ ---
  {
    name: "Gaziantep",
    slug: "gaziantep-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Araban", "İslahiye", "Karkamış", "Nizip", "Nurdağı", "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"],
    intro: "Gaziantep'in 9 ilçesine Pendik'teki atölyemizden plise perde ulaştırıyoruz. <em>Gastronomi başkenti</em> olarak bilinen şehirde yazın +40°C'yi aşan kavurucu sıcaklar hüküm sürer; bu nedenle <strong>güneş filtreli ve tam karartma kumaş seçeneklerini</strong> öne çıkarıyoruz. Şahinbey ile Şehitkamil'deki apartman konutlarından Nizip'in fıstık bahçelerine dek görüntülü keşif ve kurye teslimatı uyguluyoruz.",
    seoTitle: "Gaziantep Plise Perde - Pendik Atölye & Kurye Teslimat",
    seoDescription: "Gaziantep 9 ilçe plise perde: Şahinbey, Şehitkamil, Nizip, İslahiye. +40°C yaz sıcağı için güneşlik ve karartma. Pendik atölye, görüntülü keşif, kurye.",
    sections: [
      {
        h2: "Antep Fıstığı Bahçelerinden Basalt Evlere Plise Perde Çözümleri",
        paragraphs: [
          "Gaziantep, yaklaşık 1050 metre rakımıyla yüksek düzlük üzerinde kurulu bir ılıman-sıcak şehirdir. Temmuz ve Ağustos aylarında termometre +40°C bandına tırmanır; bu değer, pencere camından içeri sızan güneş enerjisini ciddi bir ısınma kaynağına dönüştürür. Şahinbey ve Şehitkamil'deki betonarme apartmanlarda <strong>güneş filtreli plise kumaş</strong> tercih ederek içeri gelen ışınımın yaklaşık yüzde 70'ini dışarı atmak mümkündür; böylece klima yükü belirgin ölçüde azalır.",
          "Tarihi bakırcılar çarşısı ve Zeugma Mozaik Müzesi çevresindeki basalt taş yapıların pencereleri genellikle standart dışı boyutlardadır. Bu yapılar için <em>özel ölçü üretim</em> yapıyor, pencere içine monte edilen profil sistemiyle taş duvara tek bir vida bile değmeden kurulum sağlıyoruz. Nizip ve Oğuzeli'nin fıstık ve zeytin bahçeleri arasındaki çiftlik evlerinde geniş açılır pencereler için katlanır honeycomb sistemini, İslahiye ve Nurdağı'nın sınır hattındaki konutlarda ise tam karartma modelini öneriyoruz. Organize sanayi bölgesindeki fabrika lojmanları ve idari binalar için yangın dayanımlı B1 sınıfı kumaşla toplu çözümler üretiyoruz.",
        ],
      },
      {
        h2: "Gastronomi Şehrinin İlçelerinin Tamamına Kurye Hattı",
        paragraphs: ["Üretim sürecimiz Pendik'teki atölyemizde tamamlanır; Gaziantep'in ilçelerinin tamamına <strong>görüntülü keşif</strong> akabinde kurye ile sevk ediyoruz. Şahinbey, Şehitkamil, Nizip, Oğuzeli, İslahiye, Nurdağı, Karkamış, Araban ve Yavuzeli adreslerine teslimat gerçekleştiriyoruz. Mesajlaşarak pencere ölçülerinizi iletmenizin ardından üretim onayı verilir, sevkiyat kodu tarafınıza bildirilir."],
      },
    ],
    faqItems: [
      { question: "Antep'in basalt taş evlerinde perde montajı nasıl yapılıyor?", answer: "Tarihi basalt yapıların pencerelerine pencere içi profil sistemiyle monte ediyoruz; duvara delik açmadan, taş yüzeye zarar vermeden kurulum tamamlanır. Özel ölçü üretim sayesinde standart dışı pencere boyutları sorunsuz kapanır." },
      { question: "Nizip'teki fıstık bahçesindeki çiftlik evim için hangi kumaş uygun?", answer: "Geniş açılır pencereli çiftlik evlerinde katlanır honeycomb sistemini öneriyoruz. Honeycomb hücre yapısı, bahçe yönünden gelen güneşi filtrelerken panoramik manzarayı korur; +40°C yaz sıcağında iç mekan serin kalır." },
    ],
  },
  {
    name: "Şanlıurfa",
    slug: "sanliurfa-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Akçakale", "Birecik", "Bozova", "Ceylanpınar", "Eyyübiye", "Halfeti", "Haliliye", "Harran", "Hilvan", "Karaköprü", "Siverek", "Suruç", "Viranşehir"],
    intro: "Şanlıurfa'nın 13 ilçesi için Esenyalı'daki üretim tesisimizde hazırladığımız plise perdeleri sevkiyat ile ulaştırıyoruz. <em>Peygamberler şehri</em> olarak anılan kentte yazın +45°C'yi gören kavurucu sıcaklık, pencere seçimini doğrudan etkiler; bu yüzden <strong>güneş filtreli ve tam karartma kumaş kombinasyonunu</strong> öneriyoruz. Eyyübiye ve Haliliye merkez ilçelerinden Siverek ve Viranşehir'e dek uzaktan keşif yöntemiyle ölçü alıyoruz.",
    seoTitle: "Şanlıurfa Plise Perde - Esenyalı Üretim & Sevkiyat",
    seoDescription: "Şanlıurfa 13 ilçe plise perde: Eyyübiye, Haliliye, Siverek, Harran. +45°C aşırı sıcak için güneşlik ve karartma. Esenyalı üretim, uzaktan keşif, sevkiyat.",
    sections: [
      {
        h2: "Balıklıgöl Çevresinden Harran Ovasına Plise Perde Üretimi",
        paragraphs: [
          "Şanlıurfa, Türkiye'nin termal rekorlarına imza atan en sıcak ilidir. Haziran ve Eylül arası +45°C seviyesi sıkça ölçülür ve bu durum, cam yüzeylerden içeri giren güneş enerjisini konutların birincil ısınma kaynağı yapar. Eyyübiye ve Haliliye'deki modern apartmanlarda <strong>güneş filtreli plise kumaş</strong> kullanarak içeri gelen radyasyonun yaklaşık yüzde 70'ini engellemek; iç mekan sıcaklığını 5-8°C düşürmek mümkündür. Tam karartma modeli ise gündüz uykusu ve karanlık ortam gereksinimleri için yüzde 100 ışık kesisi sağlar.",
          "Halilurrahman Camii ve Balıklıgöl çevresindeki tarihi konutların pencereleri çoğunlukla standart dışıdır; bu evlere <em>özel ölçü üretim</em> yapıyoruz. Harran'ın UNESCO konik kubbeli evleri bölgesindeki yapılar için pencere içi profilli sistemle zarar vermeden montaj uyguluyoruz. Siverek ve Viranşehir'in geniş tarım arazilerindeki çiftlik evlerinde katlanır honeycomb sistemini, Halfeti'nin Fırat kıyısındaki yarı batık evlerinde ise nehir manzarasını koruyan güneşlik kumaşı tercih ediyoruz. Ceylanpınar ve Akçakale sınır hattındaki konutlarda karartma modeli öneriyoruz.",
        ],
      },
      {
        h2: "Peygamberler Şehrinin Her İlçesine Sevkiyat Ağı",
        paragraphs: ["Esenyalı'daki üretim tesisimizde şekillenen perdeler, Şanlıurfa'nın her ilçesine <strong>uzaktan keşif</strong> neticesinde sevkiyat ile yollanır. Eyyübiye, Haliliye, Karaköprü, Siverek, Viranşehir, Birecik, Suruç, Akçakale, Ceylanpınar, Bozova, Hilvan, Halfeti ve Harran adreslerine dağıtım sağlanır. Telefonla ileteceğiniz pencere ölçülerinin ardından üretim başlar, gönderi kodu tarafınıza iletilir."],
      },
    ],
    faqItems: [
      { question: "Urfa'da sevkiyat ile perde teslimatı kaç günde ulaşır?", answer: "Uzaktan keşif sonrası Esenyalı'da üretim başlar; sevkiyat ile Şanlıurfa merkez ilçelere tipik olarak 2-3 iş günü, Siverek ve Viranşehir gibi uzak ilçelere 3-4 iş günü içinde teslimat gerçekleşir. Gönderi takip numarası telefonla iletilir." },
      { question: "Harran ovasındaki serin evimde karartma perde gerekiyor mu?", answer: "Harran ovasında gece sıcaklık düşse de gündüz +45°C baskısı nedeniyle karartma modeli öneriyoruz. Karartma kumaş, gündüz uykusu için tam karanlık sağlar ve pencereden gelen ısı yükünü maksimum düzeyde keser." },
    ],
  },
  {
    name: "Adıyaman",
    slug: "adiyaman-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Adıyaman merkez", "Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Samsat", "Sincik", "Tut"],
    intro: "Adıyaman'ın 9 ilçesi için İstanbul'daki fabrikamızın üretim hattından plise perde teslimat ile gönderiyoruz. <em>Kommagene Krallığı</em> mirasına ev sahipliği yapan şehirde yazın +40°C, kışın -10°C arasında değişen geniş termik aralık söz konusudur; bu nedenle <strong>gece-gündüz çift katmanlı sistemini</strong> öneriyoruz. Adıyaman merkez ve Kahta başta olmak üzere ilçe sınırlarının tümüne online keşif ve teslimat hizmeti veriyoruz.",
    seoTitle: "Adıyaman Plise Perde - İstanbul Fabrika & Teslimat",
    seoDescription: "Adıyaman plise perde: 9 ilçe, Nemrut Dağı ve Atatürk Barajı çevresi için gece-gündüz, online keşif, teslimat.",
    sections: [
      {
        h2: "Nemrut'un Zirvesinden Atatürk Barajı Kıyısına Perde Sistemleri",
        paragraphs: [
          "Adıyaman, Kommagene uygarlığının merkezi ve UNESCO Dünya Mirası Nemrut Dağı'nın kapısıdır. Kahta ilçesindeki Nemrut yolu üzerindeki pansiyon ve turizm tesislerinde konaklayan ziyaretçiler, güneşin doğuşunu izlemek için sabah erken saatlerde uyanır; bu nedenle <strong>karartma plise perde</strong> ile gündüz dinlenme saatlerinde tam karanlık ortam sağlanması kritik önem taşır.",
          "Adıyaman'ın karasal-sıcak geçiş ikliminde yazın +40°C, kışın ise -10°C ölçülür. Bu geniş sıcaklık salınımı için <em>gece-gündüz çift katmanlı plise perde sistemini</em> öneriyoruz: gündüz katmanı sıcaklığı filtreler, gece katmanı soğuğu engeller. Adıyaman merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Atatürk Baraj Gölü kıyısındaki Gölbaşı ve Samsat'ta göl manzaralı geniş pencereler için katlanır sistem, Besni ve Çelikhan'ın tarım arazilerindeki çiftlik evlerinde honeycomb modeli uyguluyoruz. Sincik ve Gerger'in dağlık kesimlerinde çift petekli honeycomb ile soğuk yalıtımı sağlıyoruz.",
        ],
      },
      {
        h2: "Kommagene Ülkesinin İlçe Sınırlarının Tümüne Dağıtım",
        paragraphs: ["Adıyaman'ın ilçe sınırlarının tümüne <strong>online keşif</strong> sonucunda teslimat ile ulaştırılan perdeler, İstanbul'daki fabrikamızda şekillenir. Adıyaman merkez, Kahta, Besni, Çelikhan, Gerger, Gölbaşı, Samsat, Sincik ve Tut adreslerine ulaşım sağlıyoruz. Fotoğraf paylaşarak pencere ölçülerinizi bize iletmenizin ardından üretim onayı verilir, gönderi takip bilgisi tarafınıza sunulur."],
      },
    ],
    faqItems: [
      { question: "Nemrut'a çıkan turistler için pansiyonumda ne önerirsiniz?", answer: "Kahta'daki Nemrut güzergahındaki pansiyonlar için karartma plise perde öneriyoruz. Turistler sabah gün doğumu için erken kalktığından, gündüz dinlenme saatlerinde tam karanlık ortam sağlanması konfor açısından önemlidir." },
      { question: "Atatürk Barajı kıyısında nemli iklim perdeyi etkiler mi?", answer: "Gölbaşı ve Samsat'taki baraj gölü kıyısında nem oranı yüksektir; bu nedenle anti-nem kumaşlı model öneriyoruz. Kumaş, yüksek nemde deformasyona uğramaz ve uzun ömürlü kullanım sağlar." },
    ],
  },
  {
    name: "Diyarbakır",
    slug: "diyarbakir-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Bağlar", "Bismil", "Çınar", "Çüngüş", "Dicle", "Ergani", "Hani", "Hazro", "Kayapınar", "Kocaköy", "Kulp", "Lice", "Silvan", "Sur", "Yenişehir"],
    intro: "Diyarbakır'ın 15 ilçesi için Pendik üretim merkeziimizden plise perde gönderim ile ulaştırıyoruz. <em>Surlar şehri</em> olarak bilinen kentte yazın +40°C, kışın -10°C arasında salınan karasal-sıcak geçiş iklimi hüküm sürer; bu yüzden <strong>gece-gündüz çift katmanlı sistemini</strong> öne çıkarıyoruz. Bağlar, Kayapınar ve Yenişehir merkez ilçelerinden Sur'un tarihi yapılarına dek dijital keşif ve gönderim hizmeti uyguluyoruz.",
    seoTitle: "Diyarbakır Plise Perde - Pendik Üretim & Gönderim",
    seoDescription: "Diyarbakır 15 ilçe plise perde: Bağlar, Kayapınar, Sur, Bismil. Surlar içi basalt evler için özel ölçü. Pendik üretim, dijital keşif, gönderim.",
    sections: [
      {
        h2: "Surlar İçi Basalt Evlerden Dicle Kıyısına Plise Perde",
        paragraphs: [
          "Diyarbakır, UNESCO Dünya Mirası listesinde yer alan yaklaşık 5,5 kilometrelik tarihi surlarıyla dünyanın en uzun sur sistemlerinden birine sahiptir. Sur ilçesindeki surlar içi mahallelerdeki basalt taş evlerin pencereleri çoğunlukla standart dışı boyutlardadır; bu yapılar için <strong>özel ölçü plise perde</strong> üretiyoruz. Pencere içine monte edilen profil sistemiyle, tarihi taş duvara tek vida açmadan kurulum tamamlanır.",
          "Diyarbakır'ın karasal-sıcak geçiş ikliminde Temmuz'da +40°C, Ocak'ta -10°C ölçülür. Bu geniş termik salınım için <em>gece-gündüz çift katmanlı sistemini</em> öneriyoruz: gündüz katmanı sıcaklığı filtreler, gece katmanı soğuğu engeller. Bağlar, Kayapınar ve Yenişehir'deki modern apartmanlarda standart ölçülere hızlı üretim yapıyoruz. Bismil ve Çınar'ın Dicle havzasındaki tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem, Lice ve Hani'nin yüksek rakımlı dağlık kesimlerinde çift petekli honeycomb modeli uyguluyoruz. Ergani ve Çüngüş'ün kuzey ilçelerinde soğuk yalıtımı için honeycomb tercih ediyoruz.",
        ],
      },
      {
        h2: "Kara Amet Zindanlarından Bağlar'a Beldelerin Hepsine Sevkiyat",
        paragraphs: ["Bağlar, Kayapınar, Yenişehir, Sur, Bismil, Çınar, Çüngüş, Dicle, Ergani, Hani, Hazro, Kocaköy, Kulp, Lice ve Silvan — Diyarbakır'ın beldelerin hepsine <strong>dijital keşif</strong> akabinde gönderim ile dağıtım yapıyoruz. Pendik üretim merkeziimizde hazırlanan perdeler bu adreslere yola çıkar. Mobil iletişimle pencere ölçülerinizi aldığımızda üretim süreci başlar, sevkiyat kodu tarafınıza iletilir."],
      },
    ],
    faqItems: [
      { question: "Sur içindeki dar pencereye özel ölçü perde yapılır mı?", answer: "Evet, Sur ilçesindeki surlar içi basalt taş evlerin standart dışı pencerelerine özel ölçü plise perde üretiyoruz. Pencere içi profil sistemiyle tarihi taş duvara zarar vermeden, tek vida açmadan montaj yapılır." },
      { question: "Diyarbakır'ın yaz sıcağı ve kış soğuğu için tek perde yeter mi?", answer: "Tek katmanlı perde bu geniş sıcaklık aralığını karşılamaz; bu yüzden gece-gündüz çift katmanlı sistem öneriyoruz. Gündüz katmanı +40°C sıcaklığı filtreler, gece karartma katmanı -10°C soğuğu engeller." },
    ],
  },
  {
    name: "Mardin",
    slug: "mardin-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Artuklu", "Dargeçit", "Derik", "Kızıltepe", "Mazıdağı", "Midyat", "Nusaybin", "Ömerli", "Savur", "Yeşilli"],
    intro: "Mardin'in 10 ilçesi için İstanbul atölyesinin üretim hattından plise perde nakliye ile sevk ediyoruz. <em>Taş mimari müzesi</em> olarak anılan kentte yazın +40°C'ye varan sıcaklık, Mezopotamya ovasından yansıyan güneşle birleşince pencere seçimini belirler; bu nedenle <strong>güneş filtreli ve tam karartma kumaş seçeneklerini</strong> öneriyoruz. Artuklu ve Kızıltepe başta olmak üzere ilçe bazında tamamına mesafeli keşif ve nakliye hizmeti veriyoruz.",
    seoTitle: "Mardin Plise Perde - İstanbul Atölye & Nakliye",
    seoDescription: "Mardin 10 ilçe plise perde: Artuklu, Midyat, Nusaybin, Kızıltepe. Taş evler için özel ölçü. İstanbul atölye, mesafeli keşif, nakliye.",
    sections: [
      {
        h2: "Mezopotamya Ovasına Bakan Taş Evlere Plise Perde",
        paragraphs: [
          "Mardin, Mezopotamya ovasına bakan yamaçtaki teraslamalı taş evleriyle dünya çapında tanınır. Artuklu ilçesindeki tarihi taş konutların pencereleri çoğunlukla standart dışı boyutlardadır ve ovaya bakan cephelerde geniş açıklıklar bulunur. Bu yapılar için <strong>özel ölçü plise perde</strong> üretiyoruz; pencere içi profil sistemiyle taş duvara zarar vermeden kurulum yapıyoruz. Ova manzaralı geniş pencerelerde güneş filtreli kumaş tercih ediyoruz.",
          "Mardin'in sıcak ikliminde yazın +40°C ölçülür; ovadan yansıyan güneş enerjisi cam yüzeyleri bir ısınma kaynağına dönüştürür. <em>Güneş filtreli plise kumaş</em>, içeri gelen ışınımın yaklaşık yüzde 70'ini engeller. Midyat'ın Süryani tarihi mahallesinin taş evlerinin pencerelerine özel ölçü üretim yapıyoruz. Nusaybin ve Kızıltepe'nin sınır hattındaki konutlarında tam karartma modeli, Dargeçit ve Savur'un dağlık kesimlerinde çift petekli honeycomb modeli öneriyoruz. Mazıdağı ve Ömerli'nin kırsal konutlarında katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Müze Şehrin İlçe Bazında Tamamına Nakliye Hattı",
        paragraphs: ["WhatsApp'tan ileteceğiniz pencere ölçülerinin ardından İstanbul atölyesinde üretim onayı verilir, Mardin'in ilçe bazında tamamına <strong>mesafeli keşif</strong> neticesinde nakliye ile sevkiyat başlar. Artuklu, Dargeçit, Derik, Kızıltepe, Mazıdağı, Midyat, Nusaybin, Ömerli, Savur ve Yeşilli adreslerine dağıtım sağlıyoruz. Sevkiyat takip numarası tarafınıza sunulur."],
      },
    ],
    faqItems: [
      { question: "Mardin taş evimin kemerli penceresine perde sığar mı?", answer: "Evet, Artuklu'daki tarihi taş evlerin kemerli ve standart dışı pencerelerine özel ölçü plise perde üretiyoruz. Pencere içi profil sistemiyle kemerli açıklığa zarar vermeden, taş duvara delik açmadan montaj yapılır." },
      { question: "Mezopotamya manzaralı geniş pencere için güneşlik yeterli mi?", answer: "Ovaya bakan geniş pencerelerde güneş filtreli kumaş öneriyoruz. Işınımın yaklaşık yüzde 70'ini engellerken manzarayı korur; +40°C yaz sıcağında iç mekan sıcaklığını belirgin ölçüde düşürür." },
    ],
  },
  {
    name: "Batman",
    slug: "batman-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Batman merkez", "Beşiri", "Gercüş", "Hasankeyf", "Kozluk", "Sason"],
    intro: "Batman'ın 6 ilçesi için Marmara üretim hattımızdan plise perde dağıtım ile ulaştırıyoruz. <em>Petrol şehri</em> olarak bilinen kentte karasal-sıcak geçiş iklimi hüküm sürer; yazın +40°C, kışın -10°C arasında değişen sıcaklık için <strong>gece-gündüz çift katmanlı sistemini</strong> öneriyoruz. Batman merkez ve Kozluk başta olmak üzere ilçelerinin her birine sanal keşif ve dağıtım hizmeti veriyoruz.",
    seoTitle: "Batman Plise Perde - Marmara Üretim & Dağıtım",
    seoDescription: "Batman 6 ilçe plise perde: Kozluk, Beşiri, Gercüş, Hasankeyf. Petrol lojmanları için B1 yangın dayanımlı. Marmara üretim, sanal keşif, dağıtım.",
    sections: [
      {
        h2: "Petrol Kuyularından Hasankeyf Mağaralarına Perde Üretimi",
        paragraphs: [
          "Batman, Türkiye'nin ilk petrol üretim merkezidir ve rafineri ile BOTAŞ tesisleri çevresinde yoğun bir endüstriyel yerleşim bulunur. Bu tesislerin işçi lojmanları ve idari binaları için <strong>yangın dayanımlı B1 sınıfı kumaş</strong> ile toplu plise perde çözümleri üretiyoruz. B1 kumaş, alev yayılımını engeller ve endüstriyel güvenlik standartlarına uygundur. Batman merkez konutlarında karasal-sıcak geçiş iklimi nedeniyle gece-gündüz çift katmanlı sistem öneriyoruz.",
          "Hasankeyf, Dicle nehri kıyısındaki binlerce yıllık tarihi mağara evleriyle ünlüdür ve büyük bölümü baraj gölü altında kalmıştır. Kalan tarihi yapıların pencerelerine <em>özel ölçü plise perde</em> üretiyoruz; pencere içi profil sistemiyle mağara ve taş yapıya zarar vermeden kurulum yapılır. Gercüş'ün Süryani tarihi evlerinin pencerelerine de özel ölçü üretim uyguluyoruz. Sason'un yüksek rakımlı dağlık kesiminde çift petekli honeycomb modeli, Beşiri'nin Dicle kıyısındaki konutlarında katlanır sistem öneriyoruz.",
        ],
      },
      {
        h2: "Karadoğan Şehrinin İlçelerinin Her Birine Dağıtım Ağı",
        paragraphs: ["Batman'ın ilçelerinin her birine <strong>sanal keşif</strong> akabinde dağıtım ile yola çıkan perdeler, Marmara üretim hattımızda şekillenir. Batman merkez, Beşiri, Gercüş, Hasankeyf, Kozluk ve Sason adreslerine ulaşım sağlıyoruz. Görüntülü arama ile pencere ölçülerinizi aldığımızda üretim süreci başlar, gönderi takip bilgisi tarafınıza iletilir."],
      },
    ],
    faqItems: [
      { question: "Petrol rafinerisi lojmanı için yangına dayanıklı perde var mı?", answer: "Evet, Batman petrol rafinerisi ve BOTAŞ tesisleri çevresindeki işçi lojmanları için yangın dayanımlı B1 sınıfı kumaş ile toplu plise perde üretimi yapıyoruz. B1 kumaş, alev yayılımını engeller ve endüstriyel güvenlik standartlarına uygundur." },
      { question: "Hasankeyf mağara evimin küçük penceresine perde takılır mı?", answer: "Evet, Hasankeyf'teki tarihi mağara ve taş yapıların standart dışı pencerelerine özel ölçü plise perde üretiyoruz. Pencere içi profil sistemiyle yapıya zarar vermeden, delik açmadan montaj yapılır." },
    ],
  },
  {
    name: "Siirt",
    slug: "siirt-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Baykan", "Eruh", "Kurtalan", "Pervari", "Siirt merkez", "Şirvan"],
    intro: "Siirt'in 6 ilçesi için Pendik'teki imalathanemizin üretim hattından plise perde ulaştırma ile gönderiyoruz. <em>Botan nehri vadisi</em> boyunca uzanan kentte karasal-sıcak geçiş iklimi hüküm sürer; yazın +40°C, kışın -10°C arasında salınan sıcaklık için <strong>gece-gündüz çift katmanlı sistemini</strong> öneriyoruz. Siirt merkez ve Kurtalan başta olmak üzere tüm ilçe noktalarına ekran üzerinden keşif ve ulaştırma hizmeti veriyoruz.",
    seoTitle: "Siirt Plise Perde - Pendik İmalathane & Ulaştırma",
    seoDescription: "Siirt 6 ilçe plise perde: Kurtalan, Baykan, Pervari, Şirvan. Botan vadisi iklimi için gece-gündüz. Pendik imalathane, ekran üzerinden keşif, ulaştırma.",
    sections: [
      {
        h2: "Botan Vadisinden Garzan Dağlarına Plise Perde Seçenekleri",
        paragraphs: [
          "Siirt, Botan nehri vadisinde yer alır ve vadi tabanından çevre dağlarına doğru belirgin rakım farkları gösterir. Yazın +40°C, kışın -10°C ölçülen geniş termik salınım, pencere seçimini doğrudan etkiler. Bu uç sıcaklık farkları için <strong>gece-gündüz çift katmanlı plise perde sistemini</strong> öneriyoruz: gündüz katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller. Siirt merkez konutlarında standart ölçülere hızlı üretim yapıyoruz.",
          "Siirt'in tarihi medrese ve cami çevresindeki konutların pencerelerine <em>özel ölçü üretim</em> yapıyoruz. Baykan'ın maden bölgesindeki işçi lojmanları için yangın dayanımlı B1 sınıfı kumaş öneriyoruz; maden tesisleri çevresinde alev yayılımını engellemek güvenlik açısından kritiktir. Pervari ve Şirvan'ın yüksek rakımlı dağlık kesimlerinde çift petekli honeycomb modeli ile soğuk yalıtımı sağlıyoruz. Kurtalan'ın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem, Eruh'un vadi yamacındaki konutlarında güneş filtreli kumaş uyguluyoruz.",
        ],
      },
      {
        h2: "Fıstık Şehrinin Tüm İlçe Noktalarına Ulaştırma Hattı",
        paragraphs: ["Pendik'teki imalathanemizde hazırlanan perdeler, Siirt'in tüm ilçe noktalarına <strong>ekran üzerinden keşif</strong> neticesinde ulaştırma ile yola çıkar. Mesaj yoluyla pencere ölçülerinizi ilettiğinizde üretim onayı verilir, sevkiyat takip numarası tarafınıza sunulur. Siirt merkez, Baykan, Eruh, Kurtalan, Pervari ve Şirvan adreslerine dağıtım sağlıyoruz."],
      },
    ],
    faqItems: [
      { question: "Siirt fıstığı işletmemin vitrin penceresi için ne önerirsiniz?", answer: "Vitrin penceresi için güneş filtreli plise kumaş öneriyoruz. Işınımın yaklaşık yüzde 70'ini engellerken vitrin içeriğinin görünür kalmasını sağlar; +40°C yaz sıcağında ürünlerin güneşten zarar görmesini önler." },
      { question: "Pervari'nin yüksek rakımında honeycomb perde donar mı?", answer: "Hayır, çift petekli honeycomb modeli yüksek rakımda donmayı engeller. Hücre yapısı, pencereden gelen soğuk havayı iki katmanlı filtreler ve -10°C kış şartlarında iç mekan sıcaklığını korur." },
    ],
  },
  {
    name: "Şırnak",
    slug: "sirnak-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Beytüşşebap", "Cizre", "Güçlükonak", "İdil", "Silopi", "Şırnak merkez", "Uludere"],
    intro: "Şırnak'ın 7 ilçesi için Pendik'teki üretimhanemizden plise perde kargoyla ulaştırıyoruz. <em>Cudi Dağı'nın eteklerinde</em> Suriye ve Irak sınırına yaslanan kentte yazın +42°C, kışın -15°C arasında değişen sert iklim hüküm sürer; bu yüzden <strong>gece-gündüz çift katmanlı sistemini</strong> öneriyoruz. Şırnak merkez ve Cizre başta olmak üzere sınır ilçelerinin tümüne fotoğraf üzerinden keşif ve kargo hizmeti veriyoruz.",
    seoTitle: "Şırnak Plise Perde - Pendik Üretimhane & Kargo",
    seoDescription: "Şırnak 7 ilçe plise perde: Cizre, Silopi, İdil, Uludere. Cudi Dağı sınır bölgesi için gece-gündüz. Pendik üretimhane, fotoğraf üzerinden keşif, kargo.",
    sections: [
      {
        h2: "Cudi'nin Eteklerinden Gabar'ın Zirvesine Perde Sistemleri",
        paragraphs: [
          "Şırnak, Cudi Dağı'nın eteklerinde, Suriye ve Irak sınırının kesiştiği noktada yer alır. Bölgenin sert ikliminde yazın +42°C, kışın -15°C ölçülür; bu geniş termik salınım pencere seçimini belirler. <strong>Gece-gündüz çift katmanlı plise perde sistemini</strong> öneriyoruz: gündüz katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller. Şırnak merkez konutlarında standart ölçülere hızlı üretim yapıyoruz.",
          "Cizre ve Silopi'nin sınır hattındaki konutlarında sert iklim nedeniyle tam karartma modeli öneriyoruz; tam ışık kesisi ve maksimum ısı kontrolü sağlar. İdil ve Beytüşşebap'ın dağlık kesimlerinde çift petekli honeycomb modeli ile soğuk yalıtımı uyguluyoruz. Uludere'nin vadi kesimindeki köy evlerinde geniş pencere için katlanır sistem, Güçlükonak'ın kırsal konutlarında anti-nem kumaş tercih ediyoruz. Gabar Dağı çevresindeki yüksek rakımlı kırsal yerleşimlerde honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Sınır Şehrinin Sınır İlçelerinin Tümüne Kargo Hattı",
        paragraphs: ["Şırnak merkez, Beytüşşebap, Cizre, Güçlükonak, İdil, Silopi ve Uludere — sınır ilçelerinin tümüne <strong>fotoğraf üzerinden keşif</strong> akabinde kargoyla dağıtım yapıyoruz. İletişim uygulamasından pencere ölçülerinizi ilettiğinizde üretim süreci başlar. Pendik'teki üretimhanemizde şekillenen perdeler bu adreslere gönderi takip numarasıyla yola çıkar."],
      },
    ],
    faqItems: [
      { question: "Cizre'nin aşırı sıcağında perde kumaşı bozulur mu?", answer: "Hayır, kullandığımız kumaşlar yüksek sıcaklıkta deformasyona uğramaz. +42°C yaz sıcağında güneş filtreli ve tam karartma kumaşlar performansını korur; UV dayanımlı yapı sayesinde renk solması olmaz." },
      { question: "Gabar Dağı çevresindeki köy evime kargo gelir mi?", answer: "Evet, Gabar Dağı çevresindeki kırsal yerleşimler dahil Şırnak'ın 7 ilçesinin tamamına kargoyla teslimat yapıyoruz. Fotoğraf üzerinden keşif neticesinde ölçü alınıp, üretim ardından gönderi takip numarası iletişim uygulamasından iletilir." },
    ],
  },
  {
    name: "Kilis",
    slug: "kilis-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Elbeyli", "Kilis merkez", "Musabeyli", "Polateli"],
    intro: "Kilis'in 4 ilçesi için Marmara'daki fabrikamızın üretim hattından plise perde sevkiyatla gönderiyoruz. <em>Anadolu'nun en küçük ili</em> olarak bilinen kent, Suriye sınırında yer alır ve yazın +42°C'ye tırmanan sıcaklıkla karakterize edilir; bu yüzden <strong>güneş filtreli ve tam karartma kumaş seçeneklerini</strong> öne çıkarıyoruz. Kilis merkez başta olmak üzere yerleşim birimlerinin tümüne iletişim tabanlı keşif ve sevkiyat hizmeti veriyoruz.",
    seoTitle: "Kilis Plise Perde - Marmara Fabrika & Sevkiyat",
    seoDescription: "Kilis 4 ilçe plise perde: Elbeyli, Musabeyli, Polateli. Sıcak sınır şehri için güneşlik ve karartma. Marmara fabrika, iletişim tabanlı keşif, sevkiyat.",
    sections: [
      {
        h2: "Zeytinliklerden Sınır Kapısına Plise Perde Üretimi",
        paragraphs: [
          "Kilis, Türkiye'nin yüzölçümü en küçük ilidir ve Suriye sınırına sıfır noktasında yer alır. Yazın +42°C'ye varan sıcaklık, sınır düzlüğünden gelen güneşle birleşince pencere camlarını bir ısınma kaynağına dönüştürür. Kilis merkez konutlarında <strong>güneş filtreli plise kumaş</strong> tercih ederek içeri gelen ışınımın yaklaşık yüzde 70'ini engellemek; iç mekan sıcaklığını belirgin ölçüde düşürmek mümkündür. Tam karartma modeli ise gündüz uykusu ve karanlık ortam gereksinimleri için yüzde 100 ışık kesisi sağlar.",
          "Kilis'in tarihi çarşı ve bedesten çevresindeki konutların pencerelerine <em>özel ölçü üretim</em> yapıyoruz. Elbeyli ve Polateli'nin sınır hattındaki konutlarında sert iklim nedeniyle tam karartma modeli öneriyoruz. Musabeyli'nin zeytinlikler arasındaki çiftlik evlerinde geniş pencere için katlanır honeycomb sistemini uyguluyoruz. Kilis'in zeytin işleme tesislerinin idari binaları için güneş filtreli kumaşla toplu çözümler üretiyoruz.",
        ],
      },
      {
        h2: "Anadolu'nun En Küçük İlinin Yerleşim Birimlerinin Tümüne Sevkiyat",
        paragraphs: ["Arayarak pencere ölçülerinizi ilettiğinizde Marmara'daki fabrikamızda üretim onayı verilir, Kilis'in yerleşim birimlerinin tümüne <strong>iletişim tabanlı keşif</strong> neticesinde sevkiyatla gönderi başlar. Kilis merkez, Elbeyli, Musabeyli ve Polateli adreslerine dağıtım sağlıyoruz. Gönderi takip numarası tarafınıza sunulur."],
      },
    ],
    faqItems: [
      { question: "Kilis'ten Suriye sınırındaki köyüme perde gönderilir mi?", answer: "Evet, Elbeyli ve Polateli'nin sınır hattındaki köyleri dahil Kilis'in 4 ilçesinin tamamına sevkiyatla teslimat yapıyoruz. İletişim tabanlı keşif neticesinde ölçü alınıp, üretim ardından gönderi takip numarası sesli aramayla iletilir." },
      { question: "Zeytin işleme tesisimin penceresi için hangi model uygun?", answer: "Zeytin işleme tesislerinin idari binaları için güneş filtreli plise kumaş öneriyoruz. +42°C yaz sıcağında iç mekan sıcaklığını düşürürken, tesis içi görünümü engellemez; UV dayanımlı yapı uzun ömürlü kullanım sağlar." },
    ],
  },
];
