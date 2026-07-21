export interface CityContentSection {
  h2: string;
  paragraphs: string[];
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
    intro: "İstanbul'un 39 ilçesinin tamamında <strong>ücretsiz yerinde keşif ve aynı gün montaj</strong> yapıyoruz. Pendik merkezli üretim tesisimizden Anadolu ve Avrupa yakasına kesintisiz hizmet veriyor, Boğaz'ın iki yakasında binlerce ev ve işyerine plise perde monte ediyoruz.",
    seoTitle: "İstanbul Plise Perde — 39 İlçe Ücretsiz Keşif & Aynı Gün Montaj",
    seoDescription: "İstanbul'un 39 ilçesinde plise perde: ücretsiz yerinde keşif, aynı gün montaj, Pendik merkezli üretim. Anadolu ve Avrupa yakası tam servis.",
    sections: [
      {
        h2: "İstanbul'da Plise Perde Hizmeti",
        paragraphs: [
          "İstanbul, <strong>15 milyon nüfusu</strong> ve 39 ilçesi ile Türkiye'nin en büyük plise perde pazarıdır. Pendik Esenyalı'daki üretim atölyemizden her iki yakaya günlük keşif ve montaj ekipleri gönderiyoruz. Anadolu yakasında Pendik, Kartal, Maltepe, Tuzla, Ataşehir, Kadıköy, Ümraniye ve Üsküdar'a aynı gün içinde keşif-montaj yapıyoruz. Avrupa yakasında ise Beşiktaş, Şişli, Bakırköy, Esenyurt, Beylikdüzü ve Avcılar'a ertesi gün servis veriyoruz.",
          "Boğaz manzaralı apartman dairelerinden Silivri'deki yazlıkçılara, Beyoğlu'nun tarihi binalarından Başakşehir'in modern sitelerine kadar İstanbul'un her tipkonutunda plise perde uygulaması yaptık. Deniz havasının neminden dolayı kumaş seçiminde <strong>anti-nem kaplamalı modelleri</strong> özellikle sahil ilçelerinde öneriyoruz.",
        ],
      },
      {
        h2: "İstanbul'un 39 İlçesinde Keşif ve Montaj Programı",
        paragraphs: [
          "Anadolu yakasında <strong>Pendik, Kartal, Maltepe, Tuzla</strong> ilçelerine ücretsiz keşif ile aynı gün montaj yapıyoruz. <strong>Ataşehir, Kadıköy, Ümraniye, Üsküdar, Sancaktepe</strong> bölgelerine ücretsiz keşif ile ertesi gün montaj sağlıyoruz. <strong>Sarıyer, Beykoz, Şile</strong> gibi kuzey ilçelerinde haftalık planlı keşif günlerimiz mevcuttur.",
          "Avrupa yakasında <strong>Bakırköy, Bahçelievler, Esenler, Güngören, Zeytinburnu</strong> merkez ilçelerine ücretsiz keşif ve ertesi gün montaj yapıyoruz. <strong>Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece, Küçükçekmece</strong> ilçelerine de ücretsiz keşif hizmeti veriyoruz. <strong>Çatalca, Silivri, Arnavutköy</strong> gibi uzak ilçelere planlı keşif günleri ile hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "İstanbul'da ücretsiz keşif yapıyor musunuz?", answer: "Evet, İstanbul'un 39 ilçesinin tamamında ücretsiz yerinde keşif yapıyoruz. Pendik merkezli ekibimiz Anadolu yakasına aynı gün, Avrupa yakasına ertesi gün keşif için gelir." },
      { question: "İstanbul'da aynı gün montaj mümkün mü?", answer: "Pendik, Kartal, Maltepe, Tuzla, Ataşehir ve Kadıköy'de aynı gün montaj yapıyoruz. Diğer Anadolu yakası ilçelerinde ertesi gün, Avrupa yakasında ise 1-2 gün içinde montaj gerçekleştiriyoruz." },
      { question: "İstanbul sahil ilçeleri için hangi kumaş önerirsiniz?", answer: "Kadıköy, Maltepe, Pendik, Tuzla, Bakırköy, Zeytinburnu gibi sahil ilçelerinde deniz neminden dolayı anti-nem kaplamalı kumaş öneriyoruz. Bu kumaşlar nemli havada deformasya uğramaz ve daha uzun ömürlü olur." },
    ],
  },
  {
    name: "Kocaeli",
    slug: "kocaeli-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez"],
    intro: "Kocaeli'nin 12 ilçesinde plise perde hizmeti veriyoruz. Pendik İstanbul'a komşu olmamızın avantajıyla <strong>Gebze, Darıca, Çayırova, Dilovası</strong> ilçelerine aynı gün keşif ve montaj yapıyoruz. İzmit, Gölcük, Körfez bölgelerine de ücretsiz yerinde keşif ile hizmet veriyoruz.",
    seoTitle: "Kocaeli Plise Perde — 12 İlçe Ücretsiz Keşif & Montaj",
    seoDescription: "Kocaeli'nin 12 ilçesinde plise perde: Gebze, Darıca, İzmit, Gölcük ücretsiz keşif ve montaj. Pendik İstanbul sınırından günlük servis.",
    sections: [
      {
        h2: "Kocaeli Sanayi Bölgesinde Plise Perde",
        paragraphs: [
          "Kocaeli, Türkiye'nin en büyük sanayi üssü olması nedeniyle <strong>fabrika yurtları, ofis binaları ve işçi lojmanları</strong> için yoğun plise perde talebi almaktadır. Gebze OSB, Dilovası OSB ve İzmit sanayi bölgelerindeki kurumsal projelere toplu perde çözümleri sunuyoruz. Fabrika yurtlarında yangın dayanımlı (B1 sınıfı) kumaş kullanıyoruz.",
          "Kocaeli Körfezi'nin nemli havası, sahil ilçelerinde (Gölcük, Karamürsel, Körfez) kumaş seçimini etkiler. Bu bölgelerde <strong>nem dayanımlı ve küflenmeyen kumaş tiplerini</strong> öneriyoruz. Kartepe'nin yüksek kesimlerinde ise kış soğukları için honeycomb hücreli ısı yalıtımlı modeller daha uygun olur.",
        ],
      },
      {
        h2: "Kocaeli'nin 12 İlçesinde Servis Takvimi",
        paragraphs: [
          "<strong>Gebze, Darıca, Çayırova, Dilovası</strong>: Pendik sınırına komşu olduğundan aynı gün keşif ve montaj yapıyoruz. <strong>İzmit, Derince, Körfez</strong>: Ücretsiz keşif ile ertesi gün montaj. <strong>Gölcük, Karamürsel, Başiskele, Kartepe</strong>: Haftalık planlı keşif günleri ile ücretsiz servis. <strong>Kandıra</strong>: Aylık planlı keşif turu ile hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kocaeli Gebze bölgesine aynı gün montaj yapıyor musunuz?", answer: "Evet, Gebze ve Darıca Pendik'e çok yakın olduğundan aynı gün keşif ve montaj yapıyoruz. Çayırova ve Dilovası'na da aynı gün servis veriyoruz." },
      { question: "Kocaeli fabrika yurtları için plise perde üretiyor musunuz?", answer: "Evet, Gebze ve Dilovası OSB bölgesindeki fabrika yurtları için yangın dayanımlı B1 sınıfı kumaş ile toplu plise perde üretimi ve montajı yapıyoruz. Kurumsal faturalı teslimat sağlıyoruz." },
    ],
  },
  {
    name: "Sakarya",
    slug: "sakarya-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Adapazarı", "Akyazı", "Arifiye", "Erenler", "Ferizli", "Geyve", "Hendek", "Karapürçek", "Karasu", "Kaynarca", "Kocaali", "Pamukova", "Sapanca", "Serdivan", "Söğütlü", "Taraklı"],
    intro: "Sakarya'nın 16 ilçesinde plise perde hizmeti sunuyoruz. <strong>Adapazarı, Serdivan, Erenler</strong> merkez ilçelerine ücretsiz yerinde keşif ile ertesi gün montaj yapıyoruz. Deprem bölgesi olması sebebiyle esnek montaj sistemleri ve hafif kumaş seçenekleri öneriyoruz.",
    seoTitle: "Sakarya Plise Perde — 16 İlçe Ücretsiz Keşif & Deprem Güvenli Montaj",
    seoDescription: "Sakarya'nın 16 ilçesinde plise perde: Adapazarı, Serdivan, Sapanca ücretsiz keşif. Deprem güvenli esnek montaj sistemi ile profesyonel uygulama.",
    sections: [
      {
        h2: "Sakarya'da Deprem Güvenli Plise Perde Montajı",
        paragraphs: [
          "Sakarya, 1999 depreminin merkez üssü olması nedeniyle binalarda <strong>esnek ve hafif montaj sistemleri</strong> tercih edilmektedir. Plise perdenin pencere içindeki vidalı veya yapışkanlı montajı, deprem anında düşme riski oluşturmaz. Ağırlığı 200-400 gram arasında olduğundan telif montajına gerek yoktur.",
          "Sapanca Gölü çevresindeki yazlık ve villa konutlarda, göl manzaralı geniş pencereler için <strong>katlanır plise perde sistemleri</strong> uyguluyoruz. Karasu ve Kocaali sahil kesiminde ise nemli iklim sebebiyle anti-nem kaplamalı kumaş kullanıyoruz.",
        ],
      },
      {
        h2: "Sakarya'nın 16 İlçesinde Erişim Ağı",
        paragraphs: [
          "<strong>Adapazarı, Serdivan, Erenler, Arifiye</strong>: Ücretsiz keşif ile ertesi gün montaj. <strong>Akyazı, Hendek, Geyve, Pamukova</strong>: Haftalık planlı keşif. <strong>Karasu, Kocaali, Kaynarca</strong>: Karadeniz sahil şeridinde aylık planlı keşif. <strong>Sapanca</strong>: Villa projeleri için özel keşif günleri düzenliyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Sakarya deprem bölgesi için plise perde güvenli mi?", answer: "Evet, plise perde pencere içinde monte edilir ve ağırlığı 200-400 gram arasındadır. Deprem anında düşme riski yoktur. Vidalı veya yapışkanlı montaj ile sarsıntıya dayanıklı kurulur." },
      { question: "Sapanca villa projeleri için plise perde yapıyor musunuz?", answer: "Evet, Sapanca Gölü manzaralı villalar için geniş pencere katlanır plise perde sistemleri üretip monte ediyoruz. Motorlu seçenekler de mevcuttur." },
    ],
  },
  {
    name: "Yalova",
    slug: "yalova-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Altınova", "Armutlu", "Çınarcık", "Çiftlikköy", "Termal", "Yalova merkez"],
    intro: "Yalova'nın 6 ilçesinde plise perde hizmeti veriyoruz. İstanbul'a vapur mesafesinde olan Yalova'ya <strong>haftalık planlı keşif günleri</strong> ile ücretsiz yerinde keşif yapıyoruz. Termal su kaynakları çevresindeki otel ve pansiyonlara da perde çözümleri sunuyoruz.",
    seoTitle: "Yalova Plise Perde — 6 İlçe Ücretsiz Keşif & Termal Bölge Hizmeti",
    seoDescription: "Yalova'nın 6 ilçesinde plise perde: Termal, Çınarcık, Armutlu ücretsiz keşif. Spa otelleri ve yazlık konutlar için özel çözümler.",
    sections: [
      {
        h2: "Yalova Termal Bölgesinde Perde Çözümleri",
        paragraphs: [
          "Yalova, <strong>termal turizm</strong> ile ünlü bir şehirdir. Termal ve Armutlu ilçelerindeki spa otelleri, pansiyonlar ve termal konutlar için nem dayanımlı kumaş seçenekleri sunuyoruz. Termal su buharı, normal kumaşları zamanla deformasya uğratır; bu yüzden <strong>özel anti-buhar kaplamalı kumaş tiplerini</strong> bu bölgede öneriyoruz.",
          "Çınarcık sahil şeridindeki yazlık apartmanlarda, deniz manzaralı pencereler için güneşlik ve karartma kombinasyonu (gece-gündüz) perde sistemleri uyguluyoruz. Yalova merkez ve Altınova'daki yıl boyu kullanılan daireler için ise standart plise perde modellerimiz mevcuttur.",
        ],
      },
      {
        h2: "Yalova'nın 6 İlçesinde Vapur ile Servis",
        paragraphs: [
          "<strong>Yalova merkez, Altınova, Çiftlikköy</strong>: Haftalık ücretsiz keşif. <strong>Termal, Çınarcık, Armutlu</strong>: Aylık planlı keşif turları ile hizmet veriyoruz. Yalova'ya İstanbul Pendik'ten vapur ile 45 dakikada ulaşıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Yalova'ya ücretsiz keşif geliyor musunuz?", answer: "Evet, Yalova'nın tüm ilçelerine haftalık planlı keşif günleri ile ücretsiz yerinde keşif yapıyoruz. İstanbul Pendik'ten vapur ile ulaşım sağlıyoruz." },
      { question: "Termal otel için hangi perde kumaşını önerirsiniz?", answer: "Termal su buharı normal kumaşları bozar. Termal ve Armutlu'daki spa tesisleri için anti-buhar kaplamalı, nem dayanımlı özel kumaş tipleri öneriyoruz." },
    ],
  },
  {
    name: "Düzce",
    slug: "duzce-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Akçakoca", "Cumayeri", "Çilimli", "Düzce merkez", "Gölyaka", "Gümüşova", "Kaynaşlı", "Yığılca"],
    intro: "Düzce'nin 8 ilçesinde plise perde hizmeti sunuyoruz. Ormanları ve Karadeniz sahili ile bilinen Düzce'de <strong>hem deprem güvenli montaj hem de nem dayanımlı kumaş</strong> seçenekleri sunuyoruz. Akçakoca sahil bölgesi için özel anti-nem çözümleri mevcuttur.",
    seoTitle: "Düzce Plise Perde — 8 İlçe Ücretsiz Keşif & Karadeniz Sahil Çözümleri",
    seoDescription: "Düzce'nin 8 ilçesinde plise perde: Akçakoca sahil, Düzce merkez ücretsiz keşif. Deprem güvenli montaj ve nem dayanımlı kumaş seçenekleri.",
    sections: [
      {
        h2: "Düzce'nin Orman ve Sahil İkliminde Plise Perde",
        paragraphs: [
          "Düzce, Türkiye'nin en yeşil illerinden biridir ve Karadeniz ikliminin etkisiyle <strong>yüksek nem oranına</strong> sahiptir. Akçakoca sahil kesiminde deniz nemine karşı anti-nem kaplamalı kumaş kullanıyoruz. Düzce merkez ve iç kesimlerde ise orman havasının nemi için nefes alabilen kumaş tiplerini öneriyoruz.",
          "1999 depreminden sonra yeniden inşa edilen Düzce'de, yeni binalarda modern pencere sistemleri yaygındır. Bu pencerelerde <strong>vidasız klik sistemi</strong> ile delmeden plise perde monte edebiliyoruz. Eski binalarda ise vidalı veya yapışkanlı sistem kullanıyoruz.",
        ],
      },
      {
        h2: "Düzce'nin 8 İlçesinde Planlı Keşif Günleri",
        paragraphs: [
          "<strong>Düzce merkez, Çilimli, Cumayeri, Kaynaşlı</strong>: Haftalık ücretsiz keşif. <strong>Akçakoca</strong>: Karadeniz sahilinde aylık planlı keşif. <strong>Gölyaka, Gümüşova, Yığılca</strong>: Aylık planlı keşif turları ile hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Düzce Akçakoca sahlinde plise perde nem dayanır mı?", answer: "Akçakoca'nın Karadeniz ikliminde yüksek nem vardır. Bu bölge için anti-nem kaplamalı kumaş kullanıyoruz. Normal kumaşlar 2-3 yılda deformasya uğrarken, anti-nem kumaşlar 5+ yıl dayanır." },
      { question: "Düzce deprem bölgesi için hangi montaj sistemini önerirsiniz?", answer: "Düzce deprem bölgesi olduğundan, pencere içinde hafif montaj öneriyoruz. Vidalı veya yapışkanlı sistem ile plise perde sarsıntıdan etkilenmez. Ağırlığı 200-400 gram arasındadır." },
    ],
  },
  {
    name: "Bilecik",
    slug: "bilecik-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Bilecik merkez", "Bozüyük", "Gölpazarı", "İnhisar", "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar"],
    intro: "Bilecik'in 8 ilçesinde plise perde hizmeti veriyoruz. Osmanlı İmparatorluğu'nun doğduğu topraklarda, tarihi binalar ve modern konutlar için uygun perde çözümleri sunuyoruz. <strong>Bozüyük</strong> sanayi bölgesindeki kurumsal projelere de hizmet veriyoruz.",
    seoTitle: "Bilecik Plise Perde — 8 İlçe Ücretsiz Keşif & Tarihi Bina Uyumlu",
    seoDescription: "Bilecik'in 8 ilçesinde plise perde: Söğüt, Bozüyük, Osmaneli ücretsiz keşif. Tarihi binalar ve sanayi tesisleri için özel çözümler.",
    sections: [
      {
        h2: "Bilecik'te İç Anadolu İklimine Uygun Perde",
        paragraphs: [
          "Bilecik, Marmara ve İç Anadolu iklim geçişinde yer alır. Kışları soğuk, yazları sıcak ve kuraktır. Bu nedenle Bilecik konutlarında <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> modelini öneriyoruz. Honeycomb petek yapısı, pencereden gelen soğuk ve sıcak havayı filtreler, ısı tasarrufu sağlar.",
          "Söğüt ve Bilecik merkezdeki tarihi evlerde, orijinal pencere boyutlarına özel ölçü plise perde üretiyoruz. Bozüyük'deki sanayi tesisleri ve fabrika binaları için ise yangın dayanımlı B1 sınıfı kumaş ile toplu perde çözümleri sunuyoruz.",
        ],
      },
      {
        h2: "Bilecik'in 8 İlçesinde Bölgesel Servis",
        paragraphs: [
          "<strong>Bilecik merkez, Bozüyük, Osmaneli, Pazaryeri</strong>: Aylık planlı ücretsiz keşif. <strong>Söğüt, Gölpazarı, İnhisar, Yenipazar</strong>: Aylık planlı keşif turları kapsamında hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Bilecik kışın soğuk, honeycomb perde işe yarar mı?", answer: "Evet, Bilecik'in karasal ikliminde honeycomb hücreli plise perde ısı yalıtımı sağlar. Petek yapısı soğuk havayı filtreler, ısıtma giderlerini düşürür. Kış aylarında belirgin fark yaratır." },
      { question: "Bilecik Söğüt'teki tarihi evler için plise perde yapılır mı?", answer: "Evet, Söğüt ve Bilecik merkezdeki tarihi evlerin orijinal pencere boyutlarına özel ölçü plise perde üretiyoruz. Pencere içinde montaj ile tarihi dokuya zarar vermeden kurulur." },
    ],
  },
  {
    name: "Bursa",
    slug: "bursa-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Büyükorhan", "Gemlik", "Gürsu", "Harmancık", "İnegöl", "İznik", "Karacabey", "Keles", "Kestel", "Mudanya", "Mustafakemalpaşa", "Nilüfer", "Osmangazi", "Orhangazi", "Yıldırım", "Yenişehir"],
    intro: "Bursa'nın 16 ilçesinde plise perde hizmeti sunuyoruz. <strong>Osmangazi, Nilüfer, Yıldırım</strong> merkez ilçelerine ücretsiz yerinde keşif ile ertesi gün montaj yapıyoruz. Uludağ'ın eteklerinden Gemlik Körfezi sahiline kadar geniş bir coğrafyaya hizmet veriyoruz.",
    seoTitle: "Bursa Plise Perde — 16 İlçe Ücretsiz Keşif & Uludağ Eteleri Hizmeti",
    seoDescription: "Bursa'nın 16 ilçesinde plise perde: Nilüfer, Osmangazi, Yıldırım ücretsiz keşif. Uludağ villaları, İnegöl mobilya bölgesi ve Gemlik sahili için çözümler.",
    sections: [
      {
        h2: "Bursa'da Tarihi ve Modern Konutlarda Perde",
        paragraphs: [
          "Bursa, Osmanlı başkenti olmasının mirasıyla <strong>tarihi konutlar</strong> ve modern sitelerin iç içe geçtiği bir şehirdir. Osmangazi ve Yıldırım'daki tarihi evlerin pencerelerine özel ölçü plise perde üretiyoruz. Nilüfer'in modern site dairelerinde ise standart pencere ölçülerine hızlı üretim yapıyoruz.",
          "Uludağ eteklerindeki villa ve konutlarda, yüksek rakımdan dolayı <strong>ısı yalıtımlı honeycomb modelleri</strong> öneriyoruz. Mudanya ve Gemlik sahil kesiminde ise Marmara Denizi'nin nemine karşı anti-nem kumaş kullanıyoruz. İnegöl mobilya üretim bölgesindeki showroom ve ofisler için profesyonel perde çözümleri sunuyoruz.",
        ],
      },
      {
        h2: "Bursa'nın 17 İlçesinde Hizmet Tablosu",
        paragraphs: [
          "<strong>Osmangazi, Nilüfer, Yıldırım, Gürsu, Kestel</strong>: Ücretsiz keşif ile ertesi gün montaj. <strong>İnegöl, Mudanya, Orhangazi, Gemlik</strong>: Haftalık planlı keşif. <strong>Karacabey, Mustafakemalpaşa, Keles, Büyükorhan, Harmancık, İznik, Yenişehir</strong>: Aylık planlı keşif turları.",
        ],
      },
    ],
    faqItems: [
      { question: "Bursa Nilüfer'de ücretsiz keşif yapıyor musunuz?", answer: "Evet, Nilüfer, Osmangazi, Yıldırım ve Gürsu ilçelerine ücretsiz yerinde keşif yapıyoruz. Keşif sonrası ertesi gün montaj gerçekleştiriyoruz." },
      { question: "Uludağ'daki villa için hangi perde önerirsiniz?", answer: "Uludağ eteklerindeki villalar için honeycomb hücreli ısı yalıtımlı plise perde öneriyoruz. Yüksek rakımda soğuk hava pencereden girer, honeycomb petek yapısı bunu filtreler." },
    ],
  },
  {
    name: "Balıkesir",
    slug: "balikesir-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Altıeylül", "Ayvalık", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç", "Gönen", "Havran", "İvrindi", "Karesi", "Kepsut", "Manyas", "Marmara", "Savaştepe", "Sındırgı", "Susurluk"],
    intro: "Balıkesir'in 20 ilçesinde plise perde hizmeti veriyoruz. <strong>Altıeylül, Karesi</strong> merkez ilçelerine ücretsiz keşif ile hizmet sunuyoruz. Edremit Körfezi'nin turistik beldelerinde (Ayvalık, Burhaniye, Edremit) yazlık ve otel projeleri için özel çözümler mevcuttur.",
    seoTitle: "Balıkesir Plise Perde — 20 İlçe Ücretsiz Keşif & Edremit Körfezi Çözümleri",
    seoDescription: "Balıkesir'in 20 ilçesinde plise perde: Bandırma, Edremit, Ayvalık ücretsiz keşif. Sahil yazlıkları ve otel projeleri için nem dayanımlı çözümler.",
    sections: [
      {
        h2: "Balıkesir'in İki İklim Kuşağında Perde Seçimi",
        paragraphs: [
          "Balıkesir, Türkiye'nin <strong>hem Ege hem Marmara kıyısına</strong> sahip tek ilidir. Edremit Körfezi'nde (Ayvalık, Burhaniye, Edremit, Gömeç) Ege iklimi hüküm sürer — sıcak yazlar ve ılıman kışlar. Bu bölgedeki zeytinlik evleri ve yazlık apartmanlarda güneşlik kumaş öneriyoruz. Bandırma ve Erdek'te Marmara iklimi daha belirgindir.",
          "İç kesimde (Dursunbey, Sındırgı, Bigadiç, Kepsut) karasal iklim etkili olduğundan, kış soğuklarına karşı <strong>karartma + honeycomb kombinasyonu</strong> daha uygundur. Manyas Gölü çevresindeki kuş cenneti bölgesinde nem dengeli olduğundan standart kumaş yeterlidir.",
        ],
      },
      {
        h2: "Balıkesir'in 20 İlçesinde Kıyı ve İç Bölge Servisi",
        paragraphs: [
          "<strong>Altıeylül, Karesi</strong>: Aylık planlı ücretsiz keşif. <strong>Bandırma, Erdek, Gönen, Susurluk</strong>: Aylık planlı keşif. <strong>Ayvalık, Burhaniye, Edremit, Gömeç, Havran</strong>: Yaz sezonunda haftalık, kışın aylık keşif. <strong>Bigadiç, Dursunbey, Sındırgı, Kepsut, Manyas, Marmara, Savaştepe, Balya, İvrindi</strong>: Aylık planlı keşif turları.",
        ],
      },
    ],
    faqItems: [
      { question: "Ayvalık yazlığım için plise perde yaptırabilir miyim?", answer: "Evet, Ayvalık ve Burhaniye'deki yazlık konutlar için güneşlik kumaş plise perde öneriyoruz. Yaz sezonunda haftalık keşif günlerimiz mevcuttur. Kışın aylık planlı keşif yapıyoruz." },
      { question: "Bandırma'da ücretsiz keşif var mı?", answer: "Evet, Bandırma'ya aylık planlı keşif günleri ile ücretsiz yerinde keşif yapıyoruz. Erdek ve Gönen'ilçelerine de aynı tur kapsamında hizmet veriyoruz." },
    ],
  },
  {
    name: "Çanakkale",
    slug: "canakkale-plise-perde",
    region: "Marmara",
    priority: true,
    districts: ["Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Çanakkale merkez", "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Yenice"],
    intro: "Çanakkale'nin 12 ilçesinde plise perde hizmeti sunuyoruz. <strong>Çanakkale merkez, Eceabat, Gelibolu</strong> bölgelerine ücretsiz keşif ile hizmet veriyoruz. Bozcaada ve Gökçeada adalarına da sezonluk planlı keşif düzenliyoruz.",
    seoTitle: "Çanakkale Plise Perde — 12 İlçe Ücretsiz Keşif & Bozcaada/Gökçeada Hizmeti",
    seoDescription: "Çanakkale'nin 12 ilçesinde plise perde: Gelibolu, Eceabat, Biga ücretsiz keşif. Bozcaada ve Gökçeada adalarına sezonluk servis.",
    sections: [
      {
        h2: "Çanakkale Boğazı ve Adalarda Perde Çözümleri",
        paragraphs: [
          "Çanakkale, iki kıtayı bağlayan boğazı ve tarihi adaları ile özel bir coğrafyaya sahiptir. <strong>Bozcaada</strong> ve <strong>Gökçeada</strong>'daki yazlık evler için sezonluk (Mayıs-Eylül) keşif günleri düzenliyoruz. Adaların tuzlu deniz havası, kumaş seçiminde anti-tuz kaplamalı modelleri gerektirir.",
          "Gelibolu ve Eceabat'taki tarihi binaların pencere ölçüleri standart dışıdır. Bu binalar için <strong>özel ölçü üretim</strong> yapıyoruz. Biga ve Çan'daki sanayi tesisleri için yangın dayanımlı B1 kumaş ile kurumsal perde çözümleri sunuyoruz. Ayvacık ve Bayramiç'teki köy evlerinde ise geleneksel pencere tiplerine uygun vidasız klik sistemini uyguluyoruz.",
        ],
      },
      {
        h2: "Çanakkale'nin 12 İlçesinde Boğaz ve Ada Servisi",
        paragraphs: [
          "<strong>Çanakkale merkez, Eceabat, Gelibolu, Lapseki, Ezine</strong>: Aylık planlı ücretsiz keşif. <strong>Biga, Çan, Yenice</strong>: Aylık planlı keşif. <strong>Ayvacık, Bayramiç</strong>: Aylık planlı keşif turları. <strong>Bozcaada, Gökçeada</strong>: Sezonluk (Mayıs-Eylül) planlı keşif günleri.",
        ],
      },
    ],
    faqItems: [
      { question: "Bozcaada'daki yazlığa plise perde monte edebilir misiniz?", answer: "Evet, Bozcaada'ya Mayıs-Eylül arasında sezonluk planlı keşif günleri düzenliyoruz. Adanın tuzlu deniz havası için anti-tuz kaplamalı kumaş öneriyoruz. Sezon öncesi rezervasyon yapmanızı öneririz." },
      { question: "Çanakkale Gelibolu tarihi binada perde yapılır mı?", answer: "Evet, Gelibolu'daki tarihi binaların standart dışı pencere ölçüleri için özel ölçü plise perde üretiyoruz. Pencere içinde montaj ile tarihi dokuya zarar vermeden kurulur." },
    ],
  },
  {
    name: "Edirne",
    slug: "edirne-plise-perde",
    region: "Marmara",
    priority: false,
    districts: ["Edirne merkez", "Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Süloğlu", "Uzunköprü"],
    intro: "Edirne'nin 9 ilçesinde plise perde hizmeti veriyoruz. Osmanlı başkentinin tarihi cami ve binalarının çevresindeki konutlarda, <strong>geleneksel pencere ölçülerine uygun özel üretim</strong> yapıyoruz. Keşan ve İpsala sınır bölgelerindeki çiftlik evlerine de hizmet veriyoruz.",
    seoTitle: "Edirne Plise Perde — 9 İlçe Ücretsiz Keşif & Sınır Bölgesi Hizmeti",
    seoDescription: "Edirne'nin 9 ilçesinde plise perde: Keşan, Uzunköprü, İpsala ücretsiz keşif. Tarihi bina pencereleri için özel ölçü üretim.",
    sections: [
      {
        h2: "Edirne'nin Karasal İkliminde Perde Tercihleri",
        paragraphs: [
          "Edirne, Trakya'nın iç kesiminde karasal iklimin etkisi altındadır. Yazları çok sıcak, kışları ise dondurucu soğuklar görülür. Bu uç sıcaklık farkları için <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz — gündüz güneşlik katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller.",
          "Edirne merkezdeki Selimiye Camii çevresindeki tarihi evlerin pencereleri yüksektir ve dardır. Bu pencereler için <strong>uzun boy özel ölçü plise perde</strong> üretiyoruz. Keşan ve İpsala'daki tarım arazilerindeki çiftlik evlerinde ise geniş pencereler için katlanır sistem kullanıyoruz.",
        ],
      },
      {
        h2: "Edirne'nin 9 İlçesinde Sınır Bölgesi Servisi",
        paragraphs: [
          "<strong>Edirne merkez, Havsa, Süloğlu</strong>: Aylık planlı ücretsiz keşif. <strong>Keşan, Uzunköprü, İpsala, Meriç, Enez</strong>: Aylık planlı keşif turları ile hizmet veriyoruz. Lalapaşa'ya da aynı tur kapsamında ulaşıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Edirne kışın çok soğuk, hangi perde önerirsiniz?", answer: "Edirne'nin karasal ikliminde gece-gündüz plise perde öneriyoruz. Gündüz katmanı sıcaklığı filtreler, gece karartma katmanı pencereden soğuk girişini azaltır. Honeycomb modeli de ısı yalıtımı için uygundur." },
      { question: "Edirne tarihi evlerin pencerelerine perde yapılır mı?", answer: "Evet, Edirne merkezdeki tarihi evlerin yüksek dar pencereleri için özel ölçü plise perde üretiyoruz. Pencere içinde montaj ile duvara zarar vermeden kurulur." },
    ],
  },
  {
    name: "Kırklareli",
    slug: "kirklareli-plise-perde",
    region: "Marmara",
    priority: false,
    districts: ["Babaeski", "Demirköy", "Kırklareli merkez", "Kofçaz", "Lüleburgaz", "Pehlivanköy", "Pınarhisar", "Vize"],
    intro: "Kırklareli'nin 8 ilçesinde plise perde hizmeti sunuyoruz. Bulgaristan sınırına yakın olan Kırklareli'nin <strong>soğuk kış iklimine uygun ısı yalıtımlı perde modellerini</strong> öneriyoruz. Lüleburgaz sanayi bölgesindeki fabrika ve ofis binalarına da kurumsal çözümler sunuyoruz.",
    seoTitle: "Kırklareli Plise Perde — 8 İlçe Ücretsiz Keşif & Sınır İklimi Çözümleri",
    seoDescription: "Kırklareli'nin 8 ilçesinde plise perde: Lüleburgaz, Babaeski, Vize ücretsiz keşif. Soğuk iklim için ısı yalıtımlı honeycomb modelleri.",
    sections: [
      {
        h2: "Kırklareli'nin Sınır İkliminde Perde Seçimi",
        paragraphs: [
          "Kırklareli, Türkiye'nin kuzeybatı köşesinde, Bulgaristan sınırında yer alır. Kışları Trakya'nın en soğuk illerinden biridir. Bu nedenle Kırklareli konutlarında <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Petek yapısı, pencereden gelen dondurucu havayı filtreler ve ısıtma giderlerini belirgin şekilde düşürür.",
          "Lüleburgaz sanayi bölgesindeki fabrika binaları ve işçi lojmanları için yangın dayanımlı B1 sınıfı kumaş ile toplu perde çözümleri üretiyoruz. Demirköy ve Vize'deki tarihi taş binaların pencerelerine ise özel ölçü üretim yapıyoruz. Istranca Dağları'nın eteklerindeki kırsal evlerde yapışkanlı montaj sistemi ile delmeden perde takıyoruz.",
        ],
      },
      {
        h2: "Kırklareli'nin 8 İlçesinde Orman Bölgesi Servisi",
        paragraphs: [
          "<strong>Kırklareli merkez, Lüleburgaz, Babaeski, Pınarhisar</strong>: Aylık planlı ücretsiz keşif. <strong>Vize, Demirköy, Kofçaz, Pehlivanköy</strong>: Aylık planlı keşif turları kapsamında hizmet veriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kırklareli kışın çok soğuk, hangi perde ısı yalıtımı sağlar?", answer: "Kırklareli'nin dondurucu kışları için honeycomb hücreli plise perde öneriyoruz. Petek yapısı pencereden gelen soğuk havayı filtreler, ısıtma giderlerini düşürür. Karartma katmanı eklenerek gece-gündüz modeli de tercih edilebilir." },
      { question: "Lüleburgaz fabrikamız için toplu perde yaptırabilir miyiz?", answer: "Evet, Lüleburgaz sanayi bölgesindeki fabrika ve lojmanlar için yangın dayanımlı B1 sınıfı kumaş ile toplu plise perde üretimi ve montajı yapıyoruz. Kurumsal faturalı teslimat sağlıyoruz." },
    ],
  },
  {
    name: "Tekirdağ",
    slug: "tekirdag-plise-perde",
    region: "Marmara",
    priority: false,
    districts: ["Çerkezköy", "Çorlu", "Ergene", "Hayrabolu", "Kapaklı", "Malkara", "Marmaraereğlisi", "Muratlı", "Saray", "Şarköy", "Tekirdağ merkez"],
    intro: "Tekirdağ'ın 11 ilçesinde plise perde hizmeti veriyoruz. <strong>Çorlu, Çerkezköy, Kapaklı</strong> sanayi bölgesine haftalık keşif ile hizmet sunuyoruz. Tekirdağ merkez ve Şarköy sahil bölgesindeki bağ evleri ve yazlıklar için de perde çözümleri mevcuttur.",
    seoTitle: "Tekirdağ Plise Perde — 11 İlçe Ücretsiz Keşif & Çorlu Sanayi Bölgesi",
    seoDescription: "Tekirdağ'ın 11 ilçesinde plise perde: Çorlu, Çerkezköy, Kapaklı ücretsiz keşif. Sanayi tesisleri ve sahil yazlıkları için çözümler.",
    sections: [
      {
        h2: "Tekirdağ Sanayi ve Sahil Bölgesinde Perde",
        paragraphs: [
          "Tekirdağ, Türkiye'nin en büyük sanayi bölgelerinden birine ev sahipliği yapar. <strong>Çorlu, Çerkezköy, Ergene ve Kapaklı</strong>'daki fabrika binaları, ofisler ve işçi lojmanları için yangın dayanımlı B1 sınıfı kumaş ile toplu perde çözümleri sunuyoruz. Sanayi bölgesine haftalık keşif günleri düzenliyoruz.",
          "Tekirdağ merkez ve Marmaraereğlisi sahil kesiminde, Marmara Denizi'nin nemine karşı anti-nem kaplamalı kumaş kullanıyoruz. Şarköy'ün üzüm bağları arasındaki bağ evleri ve yazlık konutlarında güneşlik kumaş öneriyoruz. Malkara ve Hayrabolu iç kesimlerinde ise karasal iklim etkisiyle honeycomb modeli daha uygun olur.",
        ],
      },
      {
        h2: "Tekirdağ'ın 11 İlçesinde Sanayi ve Sahil Servisi",
        paragraphs: [
          "<strong>Çorlu, Çerkezköy, Kapaklı, Ergene</strong>: Haftalık ücretsiz keşif. <strong>Tekirdağ merkez, Marmaraereğlisi, Muratlı</strong>: Aylık planlı keşif. <strong>Malkara, Hayrabolu, Saray, Şarköy</strong>: Aylık planlı keşif turları.",
        ],
      },
    ],
    faqItems: [
      { question: "Çorlu sanayi bölgesine haftalık keşif yapıyor musunuz?", answer: "Evet, Çorlu, Çerkezköy, Kapaklı ve Ergene sanayi bölgesine haftalık planlı keşif günleri ile ücretsiz yerinde keşif yapıyoruz. Fabrika ve lojmanlar için yangın dayanımlı B1 kumaş mevcuttur." },
      { question: "Şarköy bağ evim için plise perde yaptırabilir miyim?", answer: "Evet, Şarköy'ün bağ evleri ve yazlık konutları için güneşlik kumaş plise perde öneriyoruz. Aylık planlı keşif turlarımız mevcuttur." },
    ],
  },
  // --- EGE BÖLGESİ ---
  {
    name: "İzmir",
    slug: "izmir-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Aliağa", "Balçova", "Bayraklı", "Bornova", "Buca", "Çeşme", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karşıyaka", "Konak", "Menderes", "Menemen", "Narlıdere", "Seferihisar", "Selçuk", "Torbalı", "Urla", "Beydağ", "Kınık", "Kiraz", "Ödemiş", "Tire", "Bayındır"],
    intro: "İzmir'in 26 ilçesinde plise perde hizmeti sunuyoruz. Ege'nin inci şehrinde <strong>video keşif ve kargo ile teslimat</strong> yapıyoruz. Kordon boyundan Çeşme yarımadasına, Bornova'dan Selçuk'a kadar İzmir'in her köşesine plise perde gönderiyoruz.",
    seoTitle: "İzmir Plise Perde — 26 İlçe Video Keşif & Kargo ile Teslimat",
    seoDescription: "İzmir'in 26 ilçesinde plise perde: Çeşme, Bornova, Karşıyaka video keşif ve kargo ile teslimat. Ege iklimine uygun nem dayanımlı kumaş.",
    sections: [
      {
        h2: "İzmir'in Ege İkliminde Plise Perde",
        paragraphs: [
          "İzmir, Ege'nin ılık iklimi ile yaz aylarında yüksek sıcaklık ve neme sahiptir. <strong>Çeşme, Urla, Foça, Dikili</strong> gibi sahil ilçelerinde deniz nemine ve rüzgara dayanıklı kumaş tiplerini öneriyoruz. Bu beldelerdeki yazlık evler ve butik oteller için güneşlik + karartma kombinasyonu (gece-gündüz) idealdir.",
          "Bornova, Buca, Karşıyaka, Konak gibi merkez ilçelerdeki apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. İzmir'in geniş pencereli Ege evlerinde, geniş açıklıklar için <strong>katlanır plise perde sistemleri</strong> uyguluyoruz. Aliağa ve Torbalı sanayi bölgelerindeki ofis binaları için profesyonel perde çözümleri mevcuttur.",
        ],
      },
      {
        h2: "İzmir'in 26 İlçesinde Online Sipariş Süreci",
        paragraphs: [
          "İzmir'e <strong>video keşif</strong> ile hizmet veriyoruz. WhatsApp üzerinden görsel ve video ile pencere ölçülerinizi alıyor, uygun modeli birlikte belirliyoruz. Üretim sonrası kargo ile İzmir'in tüm ilçelerine teslimat yapıyoruz. Montaj için video rehberlik sağlıyor, yerel montaj ekibi gerektiğinde yönlendiriyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "İzmir'de yerinde keşif yapıyor musunuz?", answer: "İzmir'e video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere fotoğraf ve videolarınızı alarak ölçü ve model belirliyoruz. Üretim sonrası kargo ile teslimat yapıyoruz." },
      { question: "Çeşme yazlığım için hangi perde önerirsiniz?", answer: "Çeşme'nin rüzgarlı ve nemli ikliminde güneşlik + karartma kombinasyonu (gece-gündüz) öneriyoruz. Gündüz güneş ışığını filtreler, gece tam gizlilik sağlar. Deniz nemine dayanıklı kumaş kullanıyoruz." },
    ],
  },
  {
    name: "Aydın",
    slug: "aydin-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Aydın merkez", "Bozdoğan", "Buharkent", "Çine", "Didim", "Germencik", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı", "Köşk", "Kuşadası", "Kuyucak", "Nazilli", "Söke", "Sultanhisar", "Yenipazar"],
    intro: "Aydın'ın 17 ilçesinde plise perde hizmeti sunuyoruz. <strong>Kuşadası, Didim, Söke</strong> sahil beldelerindeki turistik tesisler ve yazlık konutlar için özel çözümler mevcuttur. Nazilli ve Aydın merkezdeki apartman daireleri için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Aydın Plise Perde — 17 İlçe Video Keşif & Kuşadası/Didim Sahil Çözümleri",
    seoDescription: "Aydın'ın 17 ilçesinde plise perde: Kuşadası, Didim, Nazilli video keşif ve kargo ile teslimat. Turistik tesisler ve yazlık konutlar için çözümler.",
    sections: [
      {
        h2: "Aydın'ın Turistik Sahil Beldelerinde Perde",
        paragraphs: [
          "Aydın, Türkiye'nin en yoğun turizm bölgelerinden biridir. <strong>Kuşadası ve Didim</strong>'deki otel, apart ve pansiyonlar için sezon öncesi toplu perde üretimi yapıyoruz. Bu tesislerde misafir konforu için blackout (tam karartma) modeli öneriyoruz. Sahil nemine dayanıklı kumaş ile uzun ömürlü kullanım sağlıyoruz.",
          "Aydın merkez ve Nazilli'deki konutlarda, Ege'nın sıcak yazlarına karşı <strong>güneşlik kumaş</strong> yeterli olur. Çine ve Bozdoğan iç kesimlerinde ise daha serin iklim nedeniyle standart tül kumaş tercih edilebilir. Söke'nin tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Aydın'ın 17 İlçesinde Turizm Bölgesi Teslimatı",
        paragraphs: [
          "Aydın'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. WhatsApp üzerinden ölçü alıp, üretim sonrası kargo ile teslimat yapıyoruz. Kuuşadası ve Didim'deki otel projeleri için sezon öncesi (Mart-Nisan) sipariş vermenizi öneririz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kuşadası otelim için toplu perde yaptırabilir miyim?", answer: "Evet, Kuşadası'ndaki otel, apart ve pansiyonlar için sezon öncesi toplu plise perde üretimi yapıyoruz. Misafir konforu için blackout modeli öneriyoruz. Sezon öncesi (Mart-Nisan) sipariş vermenizi öneririz." },
      { question: "Didim yazlığım için video keşif yapılır mı?", answer: "Evet, Didim dahil Aydın'ın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Muğla",
    slug: "mugla-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Bodrum", "Dalaman", "Datça", "Fethiye", "Kavaklıdere", "Köyceğiz", "Marmaris", "Menteşe", "Milas", "Muğla merkez", "Ortaca", "Seydikemer", "Ula", "Yatağan"],
    intro: "Muğla'nın 13 ilçesinde plise perde hizmeti sunuyoruz. <strong>Bodrum, Marmaris, Fethiye</strong> gibi Türkiye'nin en önemli turizm merkezlerindeki otel, villa ve yazlık konutlar için özel perde çözümleri üretiyoruz. Ege ve Akdeniz ikliminin kesiştiği Muğla'da nem dayanımlı kumaş kullanıyoruz.",
    seoTitle: "Muğla Plise Perde — 13 İlçe Video Keşif & Bodrum/Marmaris Villa Çözümleri",
    seoDescription: "Muğla'nın 13 ilçesinde plise perde: Bodrum, Marmaris, Fethiye video keşif ve kargo. Turizm tesisleri ve villa projeleri için özel çözümler.",
    sections: [
      {
        h2: "Muğla Turizm Bölgesinde Perde Çözümleri",
        paragraphs: [
          "Muğla, Türkiye turizminin başkentidir. <strong>Bodrum yarımadasındaki</strong> beyaz villalardan Marmaris'in marina çevresindeki lüks dairelerine, Fethiye Ölüdeniz'in butik otellerinden Datça'nın sakin evlerine kadar geniş bir yelpazede perde uygulaması yaptık. Bu beldelerdeki deniz nemine ve yoğun güneşe dayanıklı özel kumaş tipleri kullanıyoruz.",
          "Bodrum ve Marmaris'teki <strong>villa projeleri</strong> için motorlu plise perde sistemleri sunuyoruz. Uzaktan kumanda ile perde açıp kapama özelliği, turistik kiralık villalarda misafir konforu için idealdir. Milas ve Yatağan iç kesimlerinde ise standart plise perde modelleri yeterlidir.",
        ],
      },
      {
        h2: "Muğla'nın 14 İlçesinde Sezonluk Perde Planlaması",
        paragraphs: [
          "Muğla'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Turizm bölgesi olduğundan, sezoon öncesi (Şubat-Nisan) sipariş vermenizi öneririz. Yaz aylarında üretim yoğunluğu nedeniyle teslim süreleri uzayabilir. Kargo ile Bodrum, Marmaris, Fethiye, Datça ve tüm ilçelere teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Bodrum villam için motorlu plise perde yaptırabilir miyim?", answer: "Evet, Bodrum villaları için motorlu plise perde sistemleri üretiyoruz. Uzaktan kumanda ile açılıp kapanır, turistik kiralık villalarda misafir konforu için idealdir. Deniz nemine dayanıklı kumaş kullanıyoruz." },
      { question: "Marmaris otelim için ne zaman sipariş vermeliyim?", answer: "Marmaris turizm bölgesi olduğundan sezon öncesi (Şubat-Nisan) sipariş vermenizi öneririz. Yaz aylarında üretim yoğunluğu nedeniyle teslim süreleri uzayabilir." },
    ],
  },
  {
    name: "Manisa",
    slug: "manisa-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Ahmetli", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara", "Gördes", "Kırkağaç", "Köprübaşı", "Kula", "Manisa merkez", "Salihli", "Sarıgöl", "Saruhanlı", "Selendi", "Soma", "Turgutlu", "Yunusemre", "Şehzadeler"],
    intro: "Manisa'nın 17 ilçesinde plise perde hizmeti veriyoruz. <strong>Soma, Akhisar, Turgutlu</strong> sanayi bölgelerindeki fabrika ve lojmanlar için kurumsal perde çözümleri sunuyoruz. Manisa merkez ve Alaşehir'deki konutlar için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Manisa Plise Perde — 17 İlçe Video Keşif & Sanayi Bölgesi Çözümleri",
    seoDescription: "Manisa'nın 17 ilçesinde plise perde: Soma, Akhisar, Turgutlu video keşif ve kargo. Sanayi tesisleri ve konutlar için çözümler.",
    sections: [
      {
        h2: "Manisa'nın Sanayi ve Tarım Bölgesinde Perde",
        paragraphs: [
          "Manisa, Türkiye'nin en büyük sanayi ve tarım illerinden biridir. <strong>Soma</strong>'daki maden ve enerji tesisleri, <strong>Akhisar</strong>'daki organize sanayi bölgesi, <strong>Turgutlu</strong>'daki fabrikalar için yangın dayanımlı B1 sınıfı kumaş ile toplu perde çözümleri üretiyoruz. İşçi lojmanlarında standart ölçülere hızlı üretim yapıyoruz.",
          "Manisa'nın tarım arazilerindeki çiftlik evlerinde, geniş pencereler için <strong>katlanır plise perde sistemi</strong> uyguluyoruz. Alaşehir ve Salihli'nin bağ ve bahçe evlerinde güneşlik kumaş öneriyoruz. Spil Dağı eteklerindeki Manisa merkez konutlarında ise Ege iklimine uygun standart modeller yeterlidir.",
        ],
      },
      {
        h2: "Manisa'nın 18 İlçesinde Sanayi ve Tarım Teslimatı",
        paragraphs: [
          "Manisa'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, üretim sonrası kargo ile teslimat yapıyoruz. Sanayi tesisleri için kurumsal faturalı teslimat sağlıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Manisa Soma'daki fabrika için toplu perde yaptırabilir miyim?", answer: "Evet, Soma'daki maden ve enerji tesisleri için yangın dayanımlı B1 sınıfı kumaş ile toplu plise perde üretimi yapıyoruz. İşçi lojmanları için standart ölçülere hızlı üretim mevcuttur." },
      { question: "Manisa'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Manisa'nın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere fotoğraf ve videolarınızı alarak ölçü ve model belirliyoruz. Kargo ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Afyonkarahisar",
    slug: "afyonkarahisar-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Afyonkarahisar merkez", "Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Sandıklı", "Sincanlı", "Sultandağı", "Şuhut"],
    intro: "Afyonkarahisar'ın 18 ilçesinde plise perde hizmeti sunuyoruz. İç Ege'nin karasal ikliminde, kış soğuklarına karşı <strong>ısı yalıtımlı honeycomb modelleri</strong> öneriyoruz. Afyon merkez ve Sandıklı'daki konutlar için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Afyonkarahisar Plise Perde — 18 İlçe Video Keşif & İç Ege İklim Çözümleri",
    seoDescription: "Afyonkarahisar'ın 18 ilçesinde plise perde: Sandıklı, Bolvadin, Dinar video keşif ve kargo. Karasal iklim için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Afyonkarahisar'ın Karasal İkliminde Perde",
        paragraphs: [
          "Afyonkarahisar, İç Ege'nin karasal iklim kuşağında yer alır. Kışları -15°C'ye varan soğuklar, yazları +40°C'ye varan sıcaklar görülür. Bu uç sıcaklık farkları için <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Petek yapısı, pencereden gelen soğuk ve sıcak havayı filtreler, ısıtma ve soğutma giderlerini düşürür.",
          "Afyon merkezdeki termal oteller için anti-buhar kaplamalı kumaş kullanıyoruz. Sandıklı ve Dinar'daki konutlarda karartma + honeycomb kombinasyonu ile hem ısı yalıtımı hem de karanlık uyku ortamı sağlıyoruz. Bolvadin ve Çay'daki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Afyonkarahisar'ın 18 İlçesinde Termal Bölge Gönderimi",
        paragraphs: [
          "Afyonkarahisar'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz. Termal otel projeleri için özel kumaş seçenekleri mevcuttur.",
        ],
      },
    ],
    faqItems: [
      { question: "Afyonkarahisar kışın çok soğuk, hangi perde önerirsiniz?", answer: "Afyonkarahisar'ın karasal ikliminde honeycomb hücreli ısı yalıtımlı plise perde öneriyoruz. Petek yapısı pencereden gelen dondurucu havayı filtreler, ısıtma giderlerini düşürür." },
      { question: "Afyon termal otel için perde yaptırabilir miyim?", answer: "Evet, Afyon merkezdeki termal oteller için anti-buhar kaplamalı, nem dayanımlı kumaş ile plise perde üretiyoruz. Termal su buharı normal kumaşları bozar, bu yüzden özel kumaş kullanıyoruz." },
    ],
  },
  {
    name: "Kütahya",
    slug: "kutahya-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Altıntaş", "Aslanapa", "Çavdarhisar", "Domaniç", "Dumlupınar", "Emet", "Gediz", "Hisarcık", "Kütahya merkez", "Pazarlar", "Simav", "Şaphane", "Tavşanlı"],
    intro: "Kütahya'nın 13 ilçesinde plise perde hizmeti veriyoruz. İç Ege'nin yüksek rakımlı karasal ikliminde, <strong>kış soğuklarına karşı ısı yalıtımlı honeycomb modellerini</strong> öneriyoruz. Kütahya merkez ve Tavşanlı'daki konutlar için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Kütahya Plise Perde — 13 İlçe Video Keşif & Yüksek Rakım İklim Çözümleri",
    seoDescription: "Kütahya'nın 13 ilçesinde plise perde: Tavşanlı, Simav, Gediz video keşif ve kargo. Yüksek rakım karasal iklim için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Kütahya'nın Yüksek Rakım İkliminde Perde",
        paragraphs: [
          "Kütahya, 969 metre rakımıyla İç Ege'nin en yüksek illerinden biridir. Kışları şiddetli soğuklar ve kar yağışı görülür. Bu nedenle Kütahya konutlarında <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Çift petekli honeycomb modeli, -20°C'ye varan soğuklarda bile pencereden ısı kaybını minimuma indirir.",
          "Kütahya'nın çini ve seramik atölyelerinin bulunduğu sanayi bölgesinde, iş atölyelerinin pencereleri için güneşlik kumaş öneriyoruz. Emet ve Gediz'deki termal kaynaklar çevresindeki konutlarda anti-nem kumaş kullanıyoruz. Simav ve Tavşanlı'daki maden işçi lojmanlarında yangın dayanımlı B1 kumaş ile toplu perde çözümleri sunuyoruz.",
        ],
      },
      {
        h2: "Kütahya'nın 13 İlçesinde Seramik Bölgesi Teslimatı",
        paragraphs: [
          "Kütahya'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Yüksek rakım bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kütahya kışın çok soğuk, honeycomb perde işe yarar mı?", answer: "Evet, Kütahya'nın 969 metre rakımında honeycomb hücreli plise perde ısı yalıtımı sağlar. Çift petekli model, -20°C soğuklarda bile pencereden ısı kaybını minimuma indirir." },
      { question: "Kütahya'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Kütahya'nın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Denizli",
    slug: "denizli-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Acıpayam", "Babadağ", "Baklan", "Bekilli", "Beyağaç", "Bozkurt", "Buldan", "Çal", "Çameli", "Çardak", "Çivril", "Denizli merkez", "Güney", "Honaz", "Kale", "Merkezefendi", "Pamukkale", "Sarayköy", "Serinhisar", "Tavas"],
    intro: "Denizli'nin 19 ilçesinde plise perde hizmeti sunuyoruz. Pamukkale turizm bölgesindeki oteller ve Buldan dokuma bölgesindeki konutlar için özel çözümler mevcuttur. Denizli merkez ve Sarayköy'deki konutlar için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Denizli Plise Perde — 19 İlçe Video Keşif & Pamukkale Turizm Çözümleri",
    seoDescription: "Denizli'nin 19 ilçesinde plise perde: Pamukkale, Buldan, Çivril video keşif ve kargo. Turizm tesisleri ve tekstil bölgesi için çözümler.",
    sections: [
      {
        h2: "Denizli'nin Tekstil ve Turizm Şehrinde Perde",
        paragraphs: [
          "Denizli, Türkiye'nin tekstil başkentidir. <strong>Buldan</strong> dokuma geleneğinin yaşatıldığı ilçede, evlerde perde kültürü güçlüdür. Buldanlı aileler için özgün desenli plise perde modelleri üretiyoruz. Pamukkale ve Karahayıt termal turizm bölgesindeki oteller için anti-buhar kaplamalı, nem dayanımlı kumaş kullanıyoruz.",
          "Denizli merkez (Merkezefendi, Pamukkale ilçeleri) konutlarında Ege iklimine uygun güneşlik kumaş öneriyoruz. Çivril ve Acıpayam'ın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Honaz'daki organize sanayi bölgesi ofisleri için profesyonel perde çözümleri sunuyoruz.",
        ],
      },
      {
        h2: "Denizli'nin 19 İlçesinde Tekstil Şehri Gönderimi",
        paragraphs: [
          "Denizli'nin tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Pamukkale otel projeleri için sezon öncesi sipariş vermenizi öneririz. Kargo ile tüm ilçelere teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Pamukkale otelim için perde yaptırabilir miyim?", answer: "Evet, Pamukkale ve Karahayıt termal turizm bölgesindeki oteller için anti-buhar kaplamalı, nem dayanımlı kumaş ile plise perde üretiyoruz. Sezon öncesi sipariş vermenizi öneririz." },
      { question: "Buldan'da özel desenli plise perde bulunur mu?", answer: "Evet, Buldan'ın dokuma geleneğine uygun özgün desenli plise perde modelleri üretiyoruz. Buldanlı aileler için kültürel dokuya uygun perde çözümleri sunuyoruz." },
    ],
  },
  {
    name: "Uşak",
    slug: "usak-plise-perde",
    region: "Ege",
    priority: false,
    districts: ["Banaz", "Eşme", "Karahallı", "Sivaslı", "Ulubey", "Uşak merkez"],
    intro: "Uşak'ın 6 ilçesinde plise perde hizmeti veriyoruz. Ege ile İç Anadolu geçişinde bulunan Uşak'ın karasal iklimine uygun <strong>ısı yalıtımlı ve karartma modellerini</strong> öneriyoruz. Uşak merkez ve Banaz'daki konutlar için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Uşak Plise Perde — 6 İlçe Video Keşif & Geçiş İklimi Çözümleri",
    seoDescription: "Uşak'ın 6 ilçesinde plise perde: Banaz, Eşme, Ulubey video keşif ve kargo. Ege-İç Anadolu geçiş iklimi için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Uşak'ın Geçiş İkliminde Perde Tercihleri",
        paragraphs: [
          "Uşak, Ege ile İç Anadolu arasında iklim geçiş kuşağında yer alır. Kışları soğuk ve karlı, yazları sıcak ve kuraktır. Bu nedenle Uşak konutlarında <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz — gündüz güneşlik katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller ve tam karanlık uyku sağlar.",
          "Uşak'ın halı dokuma geleneği olan evlerinde, perde seçiminde dokuma kültürüne uygun <strong>desenli kumaş modellerini</strong> öneriyoruz. Eşme ve Banaz'daki tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Ulubey ve Karahallı'nın küçük ilçelerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Uşak'ın 6 İlçesinde Kargo ile Perde Süreci",
        paragraphs: [
          "Uşak'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Geçiş iklimi bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Uşak kışın soğuk, hangi perde önerirsiniz?", answer: "Uşak'ın karasal ikliminde gece-gündüz plise perde öneriyoruz. Gündüz katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller. Honeycomb modeli de ısı yalıtımı için uygundur." },
      { question: "Uşak'ta video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Uşak'ın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  // --- AKDENİZ BÖLGESİ ---
  {
    name: "Antalya",
    slug: "antalya-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Akseki", "Aksu", "Alanya", "Demre", "Döşemealtı", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "İbradı", "Kaş", "Kemer", "Kepez", "Konyaaltı", "Kumluca", "Manavgat", "Muratpaşa", "Serik"],
    intro: "Antalya'nın 19 ilçesinde plise perde hizmeti sunuyoruz. Türkiye'nın turizm başkentinde <strong>oteller, villa projeleri ve yazlık konutlar</strong> için özel perde çözümleri üretiyoruz. Akdeniz güneşine ve nemine dayanıklı kumaş tipleri kullanıyoruz.",
    seoTitle: "Antalya Plise Perde — 19 İlçe Video Keşif & Turizm Bölgesi Villa Çözümleri",
    seoDescription: "Antalya'nın 19 ilçesinde plise perde: Alanya, Kemer, Manavgat video keşif ve kargo. Otel ve villa projeleri için özel çözümler.",
    sections: [
      {
        h2: "Antalya Turizm Bölgesinde Perde Sistemleri",
        paragraphs: [
          "Antalya, Türkiye turizminin kalbidir. <strong>Kemer, Belek (Serik), Side (Manavgat), Alanya</strong> bölgelerindeki 5 yıldızlı oteller için blackout (tam karartma) plise perde üretiyoruz. Misafirlerin güneşli Akdeniz sabahında kesintisiz uyku uyuyabilmesi için tam karartma şarttır. Otellerde yangın dayanımlı B1 sınıfı kumaş kullanıyoruz.",
          "Antalya merkez (Muratpaşa, Kepez, Konyaaltı, Aksu) konutlarında, yoğun Akdeniz güneşine karşı <strong>güneşlik kumaş</strong> öneriyoruz. Lara ve Konyaaltı plajları çevresindeki apart dairelerinde deniz nemine dayanıklı kumaş kullanıyoruz. Kaş ve Kalkan (Demre) bölgelerindeki butik otel ve villalarda motorlu perde sistemleri uyguluyoruz.",
        ],
      },
      {
        h2: "Antalya'nın 18 İlçesinde Sezonluk Sipariş Takvimi",
        paragraphs: [
          "Antalya'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Turizm bölgesi olduğundan, sezon öncesi (Kasım-Şubat) sipariş vermenizi öneririz. Yaz aylarında üretim yoğunluğu nedeniyle teslim süreleri uzayabilir. Otel projeleri için kurumsal sözleşmeli teslimat sağlıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Antalya otelim için blackout perde yaptırabilir miyim?", answer: "Evet, Antalya otelleri için blackout (tam karartma) plise perde üretiyoruz. Misafirlerin güneşli Akdeniz sabahında kesintisiz uyku uyuması için tam karartma şarttır. Yangın dayanımlı B1 kumaş mevcuttur." },
      { question: "Antalya'da sezon öncesi ne zaman sipariş vermeliyim?", answer: "Antalya turizm bölgesi olduğundan sezon öncesi (Kasım-Şubat) sipariş vermenizi öneririz. Yaz aylarında üretim yoğunluğu nedeniyle teslim süreleri uzayabilir." },
    ],
  },
  {
    name: "Adana",
    slug: "adana-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"],
    intro: "Adana'nın 15 ilçesinde plise perde hizmeti veriyoruz. Çukurova'nın sıcak ikliminde, <strong>yaz aylarında +40°C'yi aşan sıcaklığa karşı güneşlik ve karartma modellerini</strong> öneriyoruz. Adana merkez (Seyhan, Çukurova, Yüreğir) konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Adana Plise Perde — 15 İlçe Video Keşif & Çukurova Sıcak İklim Çözümleri",
    seoDescription: "Adana'nın 15 ilçesinde plise perde: Seyhan, Ceyhan, Kozan video keşif ve kargo. Çukurova sıcak iklimi için güneşlik ve karartma modelleri.",
    sections: [
      {
        h2: "Adana'nın Sıcak İkliminde Perde Seçimi",
        paragraphs: [
          "Adana, Türkiye'nin en sıcak illerinden biridir. Yaz aylarında termometre +45°C'ye kadar tırmanır. Bu aşırı sıcaklıkta, pencereden gelen güneş ışını iç mekanı ısıtır ve klima giderlerini artırır. Adana konutlarında <strong>güneşlik kumaş plise perde</strong> kullanarak güneş ışınınn yüzde 70'ini filtreliyoruz. Karartma modeli ise tam ışık kesisi sağlayarak iç mekan sıcaklığını belirgin düşürür.",
          "Seyhan ve Çukurova merkez ilçelerindeki apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. Ceyhan'ın sanayi bölgesindeki işçi lojmanları için toplu perde çözümleri sunuyoruz. Karataş sahlinde deniz nemine dayanıklı kumaş kullanıyoruz. Kozan ve Feke'nin dağlık kesimlerinde ise daha ılıman iklim nedeniyle standart modeller yeterlidir.",
        ],
      },
      {
        h2: "Adana'nın 15 İlçesinde Çukurova Teslimat Ağı",
        paragraphs: [
          "Adana'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Çukurova sıcak ikliminde güneşlik veya karartma modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Adana yazın çok sıcak, hangi perde iç mekan serin tutar?", answer: "Adana'nın +45°C sıcaklarında güneşlik veya karartma kumaş plise perde öneriyoruz. Güneşlik güneş ışınınn yüzde 70'ini filtreler, karartma tam ışık kesisi sağlar. İç mekan sıcaklığı belirgin düşürür, klima giderlerini azaltır." },
      { question: "Adana'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Adana'nın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Mersin",
    slug: "mersin-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Mezitli", "Mut", "Silifke", "Tarsus", "Toroslar", "Yenişehir"],
    intro: "Mersin'in 13 ilçesinde plise perde hizmeti sunuyoruz. Akdeniz sahlindeki Mersin merkez (Mezitli, Yenişehir, Toroslar, Akdeniz) konutları için <strong>deniz nemine ve sıcaklığa dayanıklı kumaş modellerini</strong> öneriyoruz. Anamur ve Silifke turizm bölgesindeki oteller için de çözümler mevcuttur.",
    seoTitle: "Mersin Plise Perde — 13 İlçe Video Keşif & Akdeniz Sahil Çözümleri",
    seoDescription: "Mersin'in 13 ilçesinde plise perde: Tarsus, Erdemli, Silifke video keşif ve kargo. Sahil nemine dayanıklı kumaş ve turizm çözümleri.",
    sections: [
      {
        h2: "Mersin Sahil Şeridinde Perde Çözümleri",
        paragraphs: [
          "Mersin, Türkiye'nin en uzun sahil şeritlerinden birine sahiptir. Mezitli, Yenişehir ve Akdeniz ilçelerindeki deniz manzaralı apartmanlarda, <strong>güneşlik + karartma kombinasyonu (gece-gündüz)</strong> öneriyoruz. Gündüz Akdeniz güneşini filtreler, gece tam gizlilik sağlar. Sahil nemine dayanıklı anti-nem kaplamalı kumaş kullanıyoruz.",
          "Tarsus sanayi bölgesindeki fabrika ve lojmanlar için yangın dayanımlı B1 kumaş ile toplu perde çözümleri sunuyoruz. Anamur ve Bozyazı'nın muz serası bölgesindeki çiftlik evlerinde, yüksek nem nedeniyle nefes alabilen kumaş tiplerini öneriyoruz. Silifke ve Erdemli turizm bölgesindeki butik oteller için blackout modeli mevcuttur.",
        ],
      },
      {
        h2: "Mersin'in 13 İlçesinde Liman Şehri Gönderimi",
        paragraphs: [
          "Mersin'in tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Sahil bölgesi olduğundan anti-nem kumaş öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Mersin sahilinde deniz nemi perdeye zarar verir mi?", answer: "Normal kumaşlar Mersin sahilinde 2-3 yılda deformasya uğrayabilir. Anti-nem kaplamalı kumaş kullanarak 5+ yıl dayanım sağlıyoruz. Mezitli, Yenişehir ve Akdeniz sahil ilçelerinde bu kumaşı öneriyoruz." },
      { question: "Mersin'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Mersin'in tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Isparta",
    slug: "isparta-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen", "Keçiborlu", "Isparta merkez", "Senirkent", "Sütçüler", "Şarkikaraağaç", "Uluborlu", "Yalvaç", "Yenişarbademli"],
    intro: "Isparta'nın 13 ilçesinde plise perde hizmeti veriyoruz. Göller bölgesinin yüksek rakımlı ikliminde, <strong>kış soğuklarına karşı ısı yalıtımlı honeycomb modellerini</strong> öneriyoruz. Eğirdir Gölü çevresindeki yazlık ve turizm tesisleri için de perde çözümleri mevcuttur.",
    seoTitle: "Isparta Plise Perde — 13 İlçe Video Keşif & Göller Bölgesi İklim Çözümleri",
    seoDescription: "Isparta'nın 13 ilçesinde plise perde: Eğirdir, Yalvaç, Senirkent video keşif ve kargo. Yüksek rakım göl iklimi için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Isparta'nın Göller Bölgesi İkliminde Perde",
        paragraphs: [
          "Isparta, Göller Bölgesi'nin merkezinde, 1050 metre rakımda yer alır. Eğirdir ve Beyşehir göllerinin etkisiyle kışları soğuk ve nemli, yazları serin geçer. Bu iklim koşullarında <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Göl nemi ve yüksek rakım soğuğu, petek yapısı ile filtrelenir.",
          "Eğirdir Gölü çevresindeki balık restoranları ve pansiyonlarda, göl manzaralı geniş pencereler için <strong>katlanır plise perde sistemi</strong> uyguluyoruz. Isparta merkez gül tarımı bölgesindeki çiftlik evlerinde geniş pencere için güneşlik modeli öneriyoruz. Yalvaç ve Şarkikaraağaç'ın tarihi binalarında özel ölçü üretim yapıyoruz.",
        ],
      },
      {
        h2: "Isparta'nın 13 İlçesinde Göller Bölgesi Kargo Çözümü",
        paragraphs: [
          "Isparta'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Yüksek rakım bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Isparta Eğirdir Gölü çevresinde perde ısmarlayabilir miyim?", answer: "Evet, Eğirdir Gölü çevresindeki yazlık, restoran ve pansiyonlar için göl manzaralı geniş pencerelere katlanır plise perde sistemi uyguluyoruz. Video keşif ile ölçü alıp kargo ile teslimat yapıyoruz." },
      { question: "Isparta kışın soğuk, hangi perde önerirsiniz?", answer: "Isparta'nın 1050 metre rakımında honeycomb hücreli ısı yalıtımlı plise perde öneriyoruz. Göl nemi ve yüksek rakım soğuğu, petek yapısı ile filtrelenir." },
    ],
  },
  {
    name: "Burdur",
    slug: "burdur-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Ağlasun", "Altınyayla", "Bucak", "Burdur merkez", "Çavdır", "Çeltikçi", "Gölhisar", "Karamanlı", "Kemer", "Tefenni", "Yeşilova"],
    intro: "Burdur'un 11 ilçesinde plise perde hizmeti sunuyoruz. Göller bölgesinin karasal ikliminde, <strong>kış soğuklarına uygun ısı yalıtımlı modelleri</strong> öneriyoruz. Burdur Gölü çevresindeki konutlar ve Bucak sanayi bölgesi için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Burdur Plise Perde — 11 İlçe Video Keşif & Göl İklimi Çözümleri",
    seoDescription: "Burdur'un 11 ilçesinde plise perde: Bucak, Gölhisar, Tefenni video keşif ve kargo. Karasal göl iklimi için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Burdur'un Karasal Göl İkliminde Perde",
        paragraphs: [
          "Burdur, Akdeniz Bölgesi'nin iç kesiminde karasal iklimin etkisi altındadır. Burdur Gölü'nün çevresindeki konutlarda kışları dondurucu soğuklar görülür. Bu nedenle <strong>karartma + honeycomb kombinasyonu</strong> öneriyoruz — hem ısı yalıtımı hem de tam karanlık uyku ortamı sağlar.",
          "Bucak sanayi bölgesindeki mobilya atölyeleri ve işçi lojmanları için toplu perde çözümleri sunuyoruz. Ağlasun'daki Sagalassos antik kenti çevresindeki pansiyonlarda, turistik konaklama için blackout modeli öneriyoruz. Gölhisar ve Tefenni'nin tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Burdur'un 11 İlçesinde Göl İklimi Teslimat Planı",
        paragraphs: [
          "Burdur'un tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal iklim bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Burdur'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Burdur'un tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Burdur Bucak'taki mobilya atölyem için perde yaptırabilir miyim?", answer: "Evet, Bucak sanayi bölgesindeki mobilya atölyeleri ve işçi lojmanları için toplu plise perde çözümleri sunuyoruz. Kurumsal faturalı teslimat sağlıyoruz." },
    ],
  },
  {
    name: "Osmaniye",
    slug: "osmaniye-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Bahçe", "Düziçi", "Hasanbeyli", "Kadirli", "Osmaniye merkez", "Sumbas", "Toprakkale"],
    intro: "Osmaniye'nin 7 ilçesinde plise perde hizmeti veriyoruz. Çukurova'nın sıcak iklim kuşağında, <strong>yaz sıcaklığına karşı güneşlik ve karartma modellerini</strong> öneriyoruz. Osmaniye merkez ve Kadirli konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Osmaniye Plise Perde — 7 İlçe Video Keşif & Çukurova Sıcak İklim Çözümleri",
    seoDescription: "Osmaniye'nin 7 ilçesinde plise perde: Kadirli, Düziçi, Bahçe video keşif ve kargo. Sıcak iklim için güneşlik ve karartma modelleri.",
    sections: [
      {
        h2: "Osmaniye'nin Sıcak İkliminde Perde Tercihleri",
        paragraphs: [
          "Osmaniye, Çukurova'nın doğusunda, Akdeniz ile Güneydoğu Anadolu geçişinde yer alır. Yazları aşırı sıcak, kışları ılımandır. Bu sıcak iklimde <strong>güneşlik kumaş plise perde</strong> ile pencereden gelen güneş ışınını filtreleyerek iç mekan sıcaklığını düşürüyoruz. Karartma modeli ise tam ışık kesisi ile klima giderlerini azaltır.",
          "Osmaniye merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Kadirli'nin tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Düziçi ve Bahçe'nin dağlık kesimlerinde, Demir Çelik fabrika bölgesindeki işçi lojmanları için yangın dayanımlı B1 kumaş ile toplu perde çözümleri sunuyoruz.",
        ],
      },
      {
        h2: "Osmaniye'nin 7 İlçesinde Çukurova Düzluğunda Servis",
        paragraphs: [
          "Osmaniye'nin tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Sıcak iklim bölgesi olduğundan güneşlik veya karartma modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Osmaniye'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Osmaniye'nin tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Osmaniye yazın çok sıcak, hangi perde önerirsiniz?", answer: "Osmaniye'nin sıcak ikliminde güneşlik veya karartma kumaş plise perde öneriyoruz. Güneş ışınınn yüzde 70'ini filtreler, iç mekan sıcaklığını düşürür, klima giderlerini azaltır." },
    ],
  },
  {
    name: "Hatay",
    slug: "hatay-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Altınözü", "Antakya", "Arsuz", "Belen", "Defne", "Dörtyol", "Erzin", "Hassa", "İskenderun", "Kırıkhan", "Kumlu", "Payas", "Reyhanlı", "Samandağ", "Yayladağı"],
    intro: "Hatay'ın 15 ilçesinde plise perde hizmeti sunuyoruz. Akdeniz ile Güneydoğu Anadolu geçişinde bulunan Hatay'ın <strong>sıcak ve nemli iklimine uygun perde modellerini</strong> öneriyoruz. Antakya ve İskenderun merkez konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Hatay Plise Perde — 15 İlçe Video Keşif & Akdeniz-Geçiş İklim Çözümleri",
    seoDescription: "Hatay'ın 15 ilçesinde plise perde: Antakya, İskenderun, Dörtyol video keşif ve kargo. Sıcak nemli iklim için güneşlik ve karartma modelleri.",
    sections: [
      {
        h2: "Hatay'ın Multi-Kültürel Şehrinde Perde",
        paragraphs: [
          "Hatay, çok kültürlü yapısıyla Türkiye'nin benzersiz illerinden biridir. Antakya'nın tarihi evlerinde, dar pencereler için <strong>özel ölçü plise perde</strong> üretiyoruz. Defne ve Harbiye'nin çınar ağaçları arasındaki pansiyon ve restoranlarda, gölgelik pencere için güneşlik kumaş öneriyoruz.",
          "İskenderun ve Arsuz sahil kesiminde, Akdeniz nemine dayanıklı anti-nem kaplamalı kumaş kullanıyoruz. Dörtyol ve Erzin sanayi bölgesindeki işçi lojmanları için toplu perde çözümleri sunuyoruz. Reyhanlı ve Kırıkhan'ın sınır bölgesi konutlarında, sıcak iklim nedeniyle karartma modeli öneriyoruz.",
        ],
      },
      {
        h2: "Hatay'ın 12 İlçesinde Multi-Kültürel Şehir Teslimatı",
        paragraphs: [
          "Hatay'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Antakya tarihi evleri için özel ölçü üretim yapıyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Antakya tarihi evim için özel ölçü perde yapılır mı?", answer: "Evet, Antakya'nın tarihi evlerinin dar pencereleri için özel ölçü plise perde üretiyoruz. Pencere içinde montaj ile tarihi dokuya zarar vermeden kurulur." },
      { question: "İskenderun sahilinde deniz nemi perdeye zarar verir mi?", answer: "İskenderun ve Arsuz sahilinde anti-nem kaplamalı kumaş kullanıyoruz. Normal kumaşlar 2-3 yılda deformasya uğrarken, anti-nem kumaşlar 5+ yıl dayanır." },
    ],
  },
  {
    name: "Kahramanmaraş",
    slug: "kahramanmaras-plise-perde",
    region: "Akdeniz",
    priority: false,
    districts: ["Afşin", "Andırın", "Çağlayancerit", "Dulkadiroğlu", "Ekinözü", "Elbistan", "Göksun", "Nurhak", "Onikişubat", "Pazarcık", "Türkoğlu"],
    intro: "Kahramanmaraş'ın 11 ilçesinde plise perde hizmeti veriyoruz. Akdeniz ile İç Anadolu geçiş ikliminde, <strong>kış soğukları ve yaz sıcaklarına karşı gece-gündüz modellerini</strong> öneriyoruz. Kahramanmaraş merkez ve Elbistan konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Kahramanmaraş Plise Perde — 11 İlçe Video Keşif & Geçiş İklim Çözümleri",
    seoDescription: "Kahramanmaraş'ın 11 ilçesinde plise perde: Elbistan, Afşin, Göksun video keşif ve kargo. Karasal-sıcak geçiş iklimi için gece-gündüz modelleri.",
    sections: [
      {
        h2: "Kahramanmaraş'ın Geçiş İkliminde Perde",
        paragraphs: [
          "Kahramanmaraş, Akdeniz'in sıcak iklimi ile İç Anadolu'nun karasal iklimi arasında geçiş kuşağında yer alır. Kışları karlı ve soğuk, yazları aşırı sıcak geçer. Bu uç sıcaklık farkları için <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz — gündüz güneşlik katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller.",
          "Kahramanmaraş merkez (Onikişubat, Dulkadiroğlu) konutlarında standart ölçülere hızlı üretim yapıyoruz. Elbistan ve Afşin'in kömür sanayi bölgesindeki işçi lojmanları için yangın dayanımlı B1 kumaş ile toplu perde çözümleri sunuyoruz. Göksun ve Andırın'ın dağlık kesimlerindeki çiftlik evlerinde honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Kahramanmaraş'ın 11 İlçesinde Geçiş İklimi Gönderimi",
        paragraphs: [
          "Kahramanmaraş'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Geçiş iklimi bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kahramanmaraş'ta video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Kahramanmaraş'ın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Kahramanmaraş kışın soğuk yazın sıcak, hangi perde önerirsiniz?", answer: "Kahramanmaraş'ın geçiş ikliminde gece-gündüz plise perde öneriyoruz. Gündüz katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller. Honeycomb modeli de ısı yalıtımı için uygundur." },
    ],
  },
  // --- İÇ ANADOLU BÖLGESİ ---
  {
    name: "Ankara",
    slug: "ankara-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Akyurt", "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Etimesgut", "Evren", "Gölbaşı", "Güdül", "Haymana", "Kahramankazan", "Kalecik", "Keçiören", "Kızılcahamam", "Mamak", "Nallıhan", "Polatlı", "Pursaklar", "Sincan", "Şereflikoçhisar", "Yenimahalle", "Gölbaşı"],
    intro: "Ankara'nın 25 ilçesinde plise perde hizmeti sunuyoruz. Başkentin karasal ikliminde, kış soğukları ve yaz sıcakları için <strong>gece-gündüz ve honeycomb modellerini</strong> öneriyoruz. Çankaya, Yenimahalle, Keçiören, Etimesgut ve Sincan ilçelerine video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Ankara Plise Perde — 25 İlçe Video Keşif & Başkent Karasal İklim Çözümleri",
    seoDescription: "Ankara'nın 25 ilçesinde plise perde: Çankaya, Keçiören, Yenimahalle video keşif ve kargo. Karasal iklim için gece-gündüz ve honeycomb modelleri.",
    sections: [
      {
        h2: "Ankara'nın Karasal İkliminde Perde Seçimi",
        paragraphs: [
          "Ankara, İç Anadolu'nun karasal ikliminde kışları -20°C'ye varan soğuklar, yazları +35°C'ye varan sıcaklar görür. Bu uç sıcaklık farkları, pencere perdesinin sadece ışık kontrolü değil, aynı zamanda <strong>ısı yalıtımı</strong> sağlamasını gerektirir. Ankara konutlarında honeycomb hücreli model öneriyoruz — petek yapısı soğuk ve sıcak havayı filtreler, ısıtma ve soğutma giderlerini düşürür.",
          "Çankaya, Yenimahalle ve Etimesgut'taki modern site dairelerinde standart ölçülere hızlı üretim yapıyoruz. Keçiören ve Mamak'ın eski apartmanlarında özel ölçü üretim gerekebilir. Sincan ve Pursaklar sanayi bölgesindeki işçi lojmanları için toplu perde çözümleri sunuyoruz. Kızılcahamam ve Çamlıdere'nin yüksek rakımlı kesimlerinde çift petekli honeycomb öneriyoruz.",
        ],
      },
      {
        h2: "Ankara'nın 25 İlçesinde Başkent Teslimat Ağı",
        paragraphs: [
          "Ankara'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal iklim bölgesi olduğundan honeycomb veya gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz. Ankara'ya kargo ile 1-2 gün içinde teslimat sağlıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Ankara'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Ankara'nın 25 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile 1-2 gün içinde teslimat yapıyoruz." },
      { question: "Ankara kışın çok soğuk, hangi perde ısı yalıtımı sağlar?", answer: "Ankara'nın karasal ikliminde honeycomb hücreli plise perde öneriyoruz. Petek yapısı pencereden gelen soğuk havayı filtreler, ısıtma giderlerini düşürür. Çift petekli model -20°C'de bile etkili olur." },
    ],
  },
  {
    name: "Konya",
    slug: "konya-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Ahırlı", "Akören", "Akşehir", "Altınekin", "Beyşehir", "Bozkır", "Cihanbeyli", "Çeltik", "Çumra", "Derbent", "Derebucak", "Doğanhisar", "Emirgazi", "Ereğli", "Güneysınır", "Hadim", "Halkapınar", "Hüyük", "Ilgın", "Kadınhanı", "Karapınar", "Karatay", "Kulu", "Meram", "Selçuklu", "Seydişehir", "Taşkent", "Tuzlukçu", "Yalıhüyük", "Yunak"],
    intro: "Konya'nın 31 ilçesinde plise perde hizmeti veriyoruz. İç Anadolu'nun en büyük ili olan Konya'nın <strong>kış soğukları ve yaz sıcaklarına karşı honeycomb ve gece-gündüz modellerini</strong> öneriyoruz. Meram, Selçuklu, Karatay merkez ilçelerine video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Konya Plise Perde — 31 İlçe Video Keşif & Karasal İklim Çözümleri",
    seoDescription: "Konya'nın 31 ilçesinde plise perde: Meram, Selçuklu, Ereğli video keşif ve kargo. Karasal iklim için honeycomb ve gece-gündüz modelleri.",
    sections: [
      {
        h2: "Konya'nın Geniş Coğrafyasında Perde Çözümleri",
        paragraphs: [
          "Konya, Türkiye'nin en büyük yüzölçümüne sahip ilidir. Meram, Selçuklu ve Karatay merkez ilçelerindeki apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. Konya'nın karasal ikliminde kışları -15°C'ye varan soğuklar görülür; bu nedenle <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz.",
          "Beyşehir Gölü çevresindeki yazlık ve turizm tesislerinde, göl manzaralı geniş pencereler için katlanır sistem uyguluyoruz. Ereğli ve Çumra'nın tarım arazilerindeki çiftlik evlerinde geniş pencere için güneşlik modeli öneriyoruz. Kulu ve Cihanbeyli'nin tuz gölü çevresindeki konutlarında, tuzlu havaya dayanıklı kumaş kullanıyoruz. Mevlana Müzesi çevresindeki tarihi binaların pencerelerine özel ölçü üretim yapıyoruz.",
        ],
      },
      {
        h2: "Konya'nın 31 İlçesinde Kapadokya Düzluğunda Kargo",
        paragraphs: [
          "Konya'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal iklim bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz. Konya'ya kargo ile 1-2 gün içinde teslimat sağlıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Konya'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Konya'nın 31 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile 1-2 gün içinde teslimat yapıyoruz." },
      { question: "Konya kışın soğuk, honeycomb perde işe yarar mı?", answer: "Evet, Konya'nın karasal ikliminde honeycomb hücreli plise perde ısı yalıtımı sağlar. Petek yapısı pencereden gelen -15°C soğuk havayı filtreler, ısıtma giderlerini düşürür." },
    ],
  },
  {
    name: "Karaman",
    slug: "karaman-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Ayrancı", "Başyayla", "Ermenek", "Karaman merkez", "Kazımkarabekir", "Sarıveliler"],
    intro: "Karaman'ın 6 ilçesinde plise perde hizmeti sunuyoruz. İç Anadolu'nun güneyinde, Konya ovasının devamı olan Karaman'ın <strong>kış soğuklarına uygun ısı yalıtımlı modellerini</strong> öneriyoruz. Karaman merkez ve Ermenek konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Karaman Plise Perde — 6 İlçe Video Keşif & Karasal İklim Çözümleri",
    seoDescription: "Karaman'ın 6 ilçesinde plise perde: Ermenek, Başyayla, Ayrancı video keşif ve kargo. Karasal iklim için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Karaman'ın Ova ve Dağ İkliminde Perde",
        paragraphs: [
          "Karaman, İç Anadolu ovasının güneyinde yer alır. Merkez ve Ayrancı'da karasal iklim etkiliyken, Ermenek ve Sarıveliler'in Toroslar'daki yüksek rakımlı kesimlerinde daha soğuk bir iklim hüküm sürer. Merkez konutlarda <strong>güneşlik + karartma kombinasyonu (gece-gündüz)</strong> öneriyoruz.",
          "Ermenek'in dağlık bölgesindeki köy evlerinde, şiddetli kış soğuklarına karşı <strong>çift petekli honeycomb modeli</strong> öneriyoruz. Karaman'ın bisküvi sanayi bölgesindeki fabrika ve lojmanlar için yangın dayanımlı B1 kumaş ile toplu perde çözümleri sunuyoruz. Kazımkarabekir ve Başyayla'nın küçük ilçelerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Karaman'ın 6 İlçesinde Ova ve Dağ Bölgesi Gönderimi",
        paragraphs: [
          "Karaman'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal iklim bölgesi olduğundan honeycomb veya gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Karaman'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Karaman'ın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Karaman Ermenek dağlarında kışın çok soğuk, hangi perde önerirsiniz?", answer: "Ermenek'in Toroslar'daki yüksek rakımlı kesiminde çift petekli honeycomb modeli öneriyoruz. Şiddetli kış soğuklarında pencereden ısı kaybını minimuma indirir." },
    ],
  },
  {
    name: "Aksaray",
    slug: "aksaray-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Ağaçören", "Aksaray merkez", "Eskil", "Gülağaç", "Güzelyurt", "Ortaköy", "Sarıyahşi"],
    intro: "Aksaray'ın 7 ilçesinde plise perde hizmeti veriyoruz. İç Anadolu'nun karasal iklim kuşağında, <strong>kış soğukları ve yaz sıcaklarına karşı honeycomb modellerini</strong> öneriyoruz. Aksaray merkez ve Ortaköy konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Aksaray Plise Perde — 7 İlçe Video Keşif & Karasal İklim Çözümleri",
    seoDescription: "Aksaray'ın 7 ilçesinde plise perde: Ortaköy, Eskil, Güzelyurt video keşif ve kargo. Karasal iklim için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Aksaray'ın Tuz Gölü Çevresinde Perde",
        paragraphs: [
          "Aksaray, Tuz Gölü'nün güney kıyısında yer alır. Gölün tuzlu havası, Eskil ve Ortaköy sahil kesimlerinde kumaş seçimini etkiler. Bu bölgede <strong>anti-tuz kaplamalı kumaş</strong> kullanıyoruz. Aksaray merkez konutlarında ise karasal iklimin etkisiyle honeycomb modeli öneriyoruz.",
          "Güzelyurt'un tarihi Rum evlerinde, orijinal pencere boyutlarına özel ölçü plise perde üretiyoruz. Ihlara Vadisi çevresindeki pansiyon ve turistik işletmelerde, vadiden gelen ışık için güneşlik kumaş öneriyoruz. Ağaçören ve Sarıyahşi'nin küçük ilçelerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Aksaray'ın 8 İlçesinde Tuz Gölü Çevresi Teslimatı",
        paragraphs: [
          "Aksaray'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal iklim bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Aksaray'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Aksaray'ın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Aksaray Güzelyurt tarihi evler için perde yapılır mı?", answer: "Evet, Güzelyurt'un tarihi Rum evlerinin orijinal pencere boyutlarına özel ölçü plise perde üretiyoruz. Pencere içinde montaj ile tarihi dokuya zarar vermeden kurulur." },
    ],
  },
  {
    name: "Niğde",
    slug: "nigde-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Altunhisar", "Bor", "Çamardı", "Çiftlik", "Niğde merkez", "Ulukışla"],
    intro: "Niğde'nin 6 ilçesinde plise perde hizmeti sunuyoruz. İç Anadolu'nun yüksek rakımlı karasal ikliminde, <strong>kış soğuklarına karşı ısı yalıtımlı honeycomb modellerini</strong> öneriyoruz. Niğde merkez ve Bor konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Niğde Plise Perde — 6 İlçe Video Keşif & Yüksek Rakım İklim Çözümleri",
    seoDescription: "Niğde'nin 6 ilçesinde plise perde: Bor, Çamardı, Ulukışla video keşif ve kargo. Yüksek rakım karasal iklim için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Niğde'nin Yüksek Rakım İkliminde Perde",
        paragraphs: [
          "Niğde, 1229 metre rakımıyla İç Anadolu'nun en yüksek illerinden biridir. Kışları şiddetli soğuklar ve kar yağışı görülür. Bu nedenle Niğde konutlarında <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Petek yapısı, pencereden gelen dondurucu havayı filtreler ve ısıtma giderlerini belirgin düşürür.",
          "Bor ovasındaki tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Çamardı ve Ulukışla'nın Toroslar'daki yüksek kesimlerinde, dağ evleri için karartma + honeycomb kombinasyonu öneriyoruz. Altunhisar ve Çiftlik'in küçük ilçelerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Niğde'nin 6 İlçesinde Rakım İklimi Kargo Planı",
        paragraphs: [
          "Niğde'nin tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Yüksek rakım bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Niğde'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Niğde'nin tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Niğde kışın çok soğuk, hangi perde önerirsiniz?", answer: "Niğde'nin 1229 metre rakımında çift petekli honeycomb hücreli plise perde öneriyoruz. Pencereden gelen dondurucu havayı filtreler, ısıtma giderlerini düşürür." },
    ],
  },
  {
    name: "Nevşehir",
    slug: "nevsehir-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Acıgöl", "Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Nevşehir merkez", "Ürgüp"],
    intro: "Nevşehir'in 8 ilçesinde plise perde hizmeti veriyoruz. Kapadokya'nın peri bacaları arasında, <strong>mağara otelleri ve tarihi taş evler için özel perde çözümleri</strong> sunuyoruz. Nevşehir merkez ve Ürgüp konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Nevşehir Plise Perde — 8 İlçe Video Keşif & Kapadokya Mağara Otel Çözümleri",
    seoDescription: "Nevşehir'in 8 ilçesinde plise perde: Ürgüp, Avanos, Göreme video keşif ve kargo. Kapadokya mağara otelleri ve taş evler için özel çözümler.",
    sections: [
      {
        h2: "Kapadokya'nın Mağara Evlerinde Perde Sistemleri",
        paragraphs: [
          "Nevşehir, Kapadokya'nın kalbidir. <strong>Ürgüp, Avanos ve Göreme</strong>'deki mağara otelleri ve taş evlerin pencereleri standart dışıdır. Bu binaların pencere açıklıklarına özel ölçü plise perde üretiyoruz. Mağara yapısının doğal ısı yalıtımı olduğu için, bu binalarda güneşlik kumaş yeterli olur.",
          "Hacıbektaş ve Gülşehir'in tarihi binalarında, orijinal pencere boyutlarına özel üretim yapıyoruz. Derinkuyu'nun yer altı şehri çevresindeki pansiyonlarda karartma modeli öneriyoruz. Kozaklı termal bölgesindeki oteller için anti-buhar kaplamalı kumaş kullanıyoruz. Nevşehir merkez konutlarında ise karasal iklim nedeniyle honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Nevşehir'in 8 İlçesinde Kapadokya Mağara Evleri Gönderimi",
        paragraphs: [
          "Nevşehir'in tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Kapadokya mağara otelleri için özel ölçü üretim yapıyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kapadokya mağara otelim için perde yaptırabilir miyim?", answer: "Evet, Ürgüp, Avanos ve Göreme'deki mağara otellerinin standart dışı pencere açıklıklarına özel ölçü plise perde üretiyoruz. Mağara yapısının doğal ısı yalıtımı olduğu için güneşlik kumaş yeterli olur." },
      { question: "Nevşehir'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Nevşehir'in tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Kırşehir",
    slug: "kirsehir-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Akçakent", "Akpınar", "Boztepe", "Çiçekdağı", "Kaman", "Kırşehir merkez", "Mucur"],
    intro: "Kırşehir'in 7 ilçesinde plise perde hizmeti sunuyoruz. İç Anadolu'nun karasal ikliminde, <strong>kış soğuklarına uygun ısı yalıtımlı modelleri</strong> öneriyoruz. Kırşehir merkez ve Kaman konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Kırşehir Plise Perde — 7 İlçe Video Keşif & Karasal İklim Çözümleri",
    seoDescription: "Kırşehir'in 7 ilçesinde plise perde: Kaman, Mucur, Akpınar video keşif ve kargo. Karasal iklim için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Kırşehir'in Karasal İkliminde Perde",
        paragraphs: [
          "Kırşehir, İç Anadolu'nun ortasında, 985 metre rakımda yer alır. Kışları soğuk ve karlı, yazları sıcak ve kuraktır. Bu iklim koşullarında <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz — gündüz güneşlik katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller.",
          "Kırşehir merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Kaman'ın çömlek atölyelerinin bulunduğu sanayi bölgesinde, atölye pencereleri için güneşlik kumaş öneriyoruz. Mucur ve Boztepe'nin tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Akçakent ve Çiçekdağı'nın küçük ilçelerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Kırşehir'in 7 İlçesinde Karasal Düzluğun Teslimat Çözümü",
        paragraphs: [
          "Kırşehir'in tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal iklim bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kırşehir'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Kırşehir'in tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Kırşehir kışın soğuk, hangi perde önerirsiniz?", answer: "Kırşehir'in karasal ikliminde gece-gündüz plise perde öneriyoruz. Gündüz katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller. Honeycomb modeli de ısı yalıtımı için uygundur." },
    ],
  },
  {
    name: "Kırıkkale",
    slug: "kirikkale-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Bahşılı", "Balışeyh", "Çelebi", "Delice", "Karakeçili", "Keskin", "Kırıkkale merkez", "Sulakyurt", "Yahşihan"],
    intro: "Kırıkkale'nin 9 ilçesinde plise perde hizmeti veriyoruz. Ankara'ya komşu olan Kırıkkale'nin karasal ikliminde, <strong>kış soğuklarına uygun ısı yalıtımlı modelleri</strong> öneriyoruz. Kırıkkale merkez ve Keskin konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Kırıkkale Plise Perde — 9 İlçe Video Keşif & Karasal İklim Çözümleri",
    seoDescription: "Kırıkkale'nin 9 ilçesinde plise perde: Keskin, Delice, Sulakyurt video keşif ve kargo. Karasal iklim için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Kırıkkale'nin Sanayi ve Konut Bölgesinde Perde",
        paragraphs: [
          "Kırıkkale, Ankara'ya yakın konumuyla sanayi ve konut şehridir. Silah sanayi ve petrol rafinerisi bölgesindeki işçi lojmanları için <strong>yangın dayanımlı B1 sınıfı kumaş</strong> ile toplu perde çözümleri sunuyoruz. Kırıkkale merkez konutlarında karasal iklim nedeniyle honeycomb modeli öneriyoruz.",
          "Keskin ve Delice'nin tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Bahşılı ve Balışeyh'in küçük ilçelerinde standart ölçülere hızlı üretim yapıyoruz. Karakeçili ve Sulakyurt'ta ise video keşif ile hizmet veriyoruz.",
        ],
      },
      {
        h2: "Kırıkkale'nin 9 İlçesinde Sanayi ve Konut Bölgesi Kargo",
        paragraphs: [
          "Kırıkkale'nin tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal iklim bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kırıkkale'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Kırıkkale'nin tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Kırıkkale sanayi bölgesi için toplu perde yaptırabilir miyim?", answer: "Evet, Kırıkkale sanayi bölgesindeki işçi lojmanları için yangın dayanımlı B1 sınıfı kumaş ile toplu plise perde üretimi yapıyoruz." },
    ],
  },
  {
    name: "Çankırı",
    slug: "cankiri-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Atkaracalar", "Bayramören", "Çankırı merkez", "Çerkeş", "Eldivan", "Eskipazar", "Ilgaz", "Kızılırmak", "Korgun", "Kurşunlu", "Orta", "Şabanözü", "Yapraklı"],
    intro: "Çankırı'nın 13 ilçesinde plise perde hizmeti sunuyoruz. İç Anadolu'nun kuzeyinde, Karadeniz'e yakın karasal iklim kuşağında, <strong>kış soğuklarına uygun ısı yalıtımlı honeycomb modellerini</strong> öneriyoruz. Çankırı merkez ve Çerkeş konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Çankırı Plise Perde — 13 İlçe Video Keşif & Karasal-Karadeniz Geçiş İklim Çözümleri",
    seoDescription: "Çankırı'nın 13 ilçesinde plise perde: Çerkeş, Ilgaz, Orta video keşif ve kargo. Karasal-Karadeniz geçiş iklimi için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Çankırı'nın Dağlık İkliminde Perde",
        paragraphs: [
          "Çankırı, İç Anadolu ile Karadeniz arasında geçiş iklimine sahiptir. Ilgaz Dağı'nın etkisiyle kışları şiddetli soğuklar ve kar yağışı görülür. Bu nedenle Çankırı konutlarında <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Ilgaz kayak merkezi çevresindeki otel ve pansiyonlarda karartma + honeycomb kombinasyonu uyguluyoruz.",
          "Çankırı merkez tuz madeni bölgesindeki işçi lojmanları için toplu perde çözümleri sunuyoruz. Çerkeş ve Kurşunlu'nun tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Orta ve Şabanözü'nün küçük ilçelerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Çankırı'nın 12 İlçesinde Dağlık Bölge Teslimat Rotası",
        paragraphs: [
          "Çankırı'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal iklim bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Çankırı'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Çankırı'nın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Çankırı Ilgaz kayak merkezi için perde yaptırabilir miyim?", answer: "Evet, Ilgaz kayak merkezi çevresindeki otel ve pansiyonlar için karartma + honeycomb kombinasyonu plise perde öneriyoruz. Şiddetli kış soğuklarında ısı yalıtımı sağlar." },
    ],
  },
  {
    name: "Yozgat",
    slug: "yozgat-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Akdağmadeni", "Aydıncık", "Boğazlıyan", "Çandır", "Çayıralan", "Çekerek", "Kadışehri", "Saraykent", "Sarıkaya", "Sorgun", "Şefaatli", "Yenifakılı", "Yerköy", "Yozgat merkez"],
    intro: "Yozgat'ın 14 ilçesinde plise perde hizmeti veriyoruz. İç Anadolu'nun ortasında, yüksek rakımlı karasal iklim kuşağında, <strong>kış soğuklarına uygun ısı yalıtımlı honeycomb modellerini</strong> öneriyoruz. Yozgat merkez ve Sorgun konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Yozgat Plise Perde — 14 İlçe Video Keşif & Yüksek Rakım Karasal İklim Çözümleri",
    seoDescription: "Yozgat'ın 14 ilçesinde plise perde: Sorgun, Boğazlıyan, Yerköy video keşif ve kargo. Yüksek rakım karasal iklim için ısı yalıtımlı modeller.",
    sections: [
      {
        h2: "Yozgat'ın Yüksek Rakım Ovasında Perde",
        paragraphs: [
          "Yozgat, 1298 metre rakımıyla İç Anadolu'nun en yüksek illerinden biridir. Kışları şiddetli soğuklar ve kar yağışı görülür. Bu nedenle Yozgat konutlarında <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Yozgat'ın yüksek rakımında petek yapısı, pencereden gelen dondurucu havayı filtreler.",
          "Yozgat merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Sorgun ve Boğazlıyan'ın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Akdağmadeni ve Sarıkaya'nın termal kaynakları çevresindeki oteller için anti-buhar kaplamalı kumaş kullanıyoruz. Yerköy sanayi bölgesindeki işçi lojmanları için toplu perde çözümleri sunuyoruz.",
        ],
      },
      {
        h2: "Yozgat'ın 14 İlçesinde Yüksek Rakım Ova Gönderimi",
        paragraphs: [
          "Yozgat'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Yüksek rakım bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Yozgat'ta video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Yozgat'ın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Yozgat kışın çok soğuk, hangi perde önerirsiniz?", answer: "Yozgat'ın 1298 metre rakımında çift petekli honeycomb hücreli plise perde öneriyoruz. Pencereden gelen dondurucu havayı filtreler, ısıtma giderlerini düşürür." },
    ],
  },
  {
    name: "Kayseri",
    slug: "kayseri-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar", "İncesu", "Kocasinan", "Melikgazi", "Özvatan", "Pınarbaşı", "Sarıoğlan", "Sarız", "Talas", "Tomarza", "Yahyalı", "Yeşilhisar"],
    intro: "Kayseri'nin 16 ilçesinde plise perde hizmeti sunuyoruz. İç Anadolu'nun sanayi ve ticaret merkezinde, <strong>kış soğukları ve yaz sıcaklarına karşı gece-gündüz ve honeycomb modellerini</strong> öneriyoruz. Melikgazi, Kocasinan, Talas ilçelerine video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Kayseri Plise Perde — 16 İlçe Video Keşif & Sanayi Bölgesi Çözümleri",
    seoDescription: "Kayseri'nin 16 ilçesinde plise perde: Melikgazi, Kocasinan, Talas video keşif ve kargo. Karasal iklim ve sanayi bölgesi için çözümler.",
    sections: [
      {
        h2: "Kayseri'nin Sanayi ve Ticaret Şehrinde Perde",
        paragraphs: [
          "Kayseri, Türkiye'nin en önemli sanayi ve ticaret şehirlerinden biridir. Melikgazi ve Kocasinan merkez ilçelerindeki modern site dairelerinde standart ölçülere hızlı üretim yapıyoruz. Organize sanayi bölgesindeki fabrika ve işçi lojmanları için <strong>yangın dayanımlı B1 sınıfı kumaş</strong> ile toplu perde çözümleri sunuyoruz.",
          "Kayseri'nin 1054 metre rakımındaki karasal ikliminde kışları -20°C'ye varan soğuklar görülür. Bu nedenle konutlarda <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Talas ilçesindeki eski Rum evlerinin pencerelerine özel ölçü üretim yapıyoruz. Develi ve Yahyalı'nın Toroslar eteğindeki beldelerinde, daha ılıman iklim nedeniyle standart modeller yeterlidir.",
        ],
      },
      {
        h2: "Kayseri'nin 16 İlçesinde Sanayi Şehri Teslimat Ağı",
        paragraphs: [
          "Kayseri'nin tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal iklim bölgesi olduğundan honeycomb veya gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Kayseri'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Kayseri'nin 16 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Kayseri sanayi bölgesi için toplu perde yaptırabilir miyim?", answer: "Evet, Kayseri organize sanayi bölgesindeki fabrika ve işçi lojmanları için yangın dayanımlı B1 sınıfı kumaş ile toplu plise perde üretimi yapıyoruz." },
    ],
  },
  {
    name: "Sivas",
    slug: "sivas-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Akıncılar", "Altınyayla", "Divriği", "Doğanşar", "Gemerek", "Gölova", "Gürün", "Hafik", "İmranlı", "Kangal", "Koyulhisar", "Sivas merkez", "Suşehri", "Şarkışla", "Ulaş", "Yıldızeli", "Zara"],
    intro: "Sivas'ın 17 ilçesinde plise perde hizmeti veriyoruz. İç Anadolu'nun en yüksek rakımlı illerinden birinde, <strong>şiddetli kış soğuklarına karşı çift petekli honeycomb modellerini</strong> öneriyoruz. Sivas merkez ve Gemerek konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Sivas Plise Perde — 17 İlçe Video Keşif & Yüksek Rakım Şiddetli Kış Çözümleri",
    seoDescription: "Sivas'ın 17 ilçesinde plise perde: Gemerek, Divriği, Kangal video keşif ve kargo. Yüksek rakım şiddetli kış iklimi için çift petekli honeycomb.",
    sections: [
      {
        h2: "Sivas'ın Yüksek Rakım İkliminde Perde",
        paragraphs: [
          "Sivas, 1285 metre rakımıyla İç Anadolu'nun en soğuk illerinden biridir. Kışları -30°C'ye varan soğuklar ve aylarca süren kar yağışı görülür. Bu şiddetli kış koşullarında <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Çift petek yapısı, pencereden gelen dondurucu havayı iki katmanlı filtreler.",
          "Sivas merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Divriği'nin UNESCO Dünya Mirası listesindeki Ulu Camii çevresindeki tarihi binaların pencerelerine özel ölçü üretim yapıyoruz. Kangal balıklı termal kaynak çevresindeki oteller için anti-buhar kaplamalı kumaş kullanıyoruz. Gemerek ve Şarkışla'nın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Sivas'ın 17 İlçesinde Yüksek Rakım İklim Kargo Planı",
        paragraphs: [
          "Sivas'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Yüksek rakım bölgesi olduğundan çift petekli honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Sivas'ta video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Sivas'ın 17 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Sivas kışın -30°C, hangi perde önerirsiniz?", answer: "Sivas'ın şiddetli kışlarında çift petekli honeycomb hücreli plise perde öneriyoruz. Çift petek yapısı, pencereden gelen dondurucu havayı iki katmanlı filtreler, ısıtma giderlerini belirgin düşürür." },
    ],
  },
  {
    name: "Tokat",
    slug: "tokat-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Almus", "Artova", "Başçiftlik", "Erbaa", "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Tokat merkez", "Turhal", "Yeşilyurt", "Zile"],
    intro: "Tokat'ın 12 ilçesinde plise perde hizmeti sunuyoruz. İç Anadolu ile Karadeniz geçiş iklim kuşağında, <strong>kış soğuklarına ve yaz sıcaklarına uygun gece-gündüz modellerini</strong> öneriyoruz. Tokat merkez ve Turhal konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Tokat Plise Perde — 12 İlçe Video Keşif & Geçiş İklim Çözümleri",
    seoDescription: "Tokat'ın 12 ilçesinde plise perde: Turhal, Erbaa, Niksar video keşif ve kargo. İç Anadolu-Karadeniz geçiş iklimi için gece-gündüz modelleri.",
    sections: [
      {
        h2: "Tokat'ın Geçiş İkliminde Perde Tercihleri",
        paragraphs: [
          "Tokat, İç Anadolu'nun karasal iklimi ile Karadeniz'in ılıman iklimi arasında geçiş kuşağında yer alır. Kışları soğuk ve karlı, yazları sıcaktır. Bu iklim koşullarında <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz — gündüz güneşlik katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller.",
          "Tokat merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Turhal'ın şeker fabrikası bölgesindeki işçi lojmanları için toplu perde çözümleri sunuyoruz. Niksar ve Erbaa'nın Yeşilırmak vadisindeki konutlarında, nehir nemine dayanıklı kumaş kullanıyoruz. Zile ve Reşadiye'nin tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Tokat'ın 12 İlçesinde Geçiş İklimi Kargo Rotası",
        paragraphs: [
          "Tokat'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Geçiş iklimi bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Tokat'ta video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Tokat'ın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Tokat kışın soğuk, hangi perde önerirsiniz?", answer: "Tokat'ın geçiş ikliminde gece-gündüz plise perde öneriyoruz. Gündüz katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller." },
    ],
  },
  {
    name: "Amasya",
    slug: "amasya-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Amasya merkez", "Göynücek", "Gümüşhacıköy", "Hamamözü", "Merzifon", "Suluova", "Taşova", "Tercan"],
    intro: "Amasya'nın 7 ilçesinde plise perde hizmeti veriyoruz. Yeşilırmak vadisinin iki yamacına kurulmuş tarihi şehirde, <strong>Osmanlı evlerinin pencerelerine özel ölçü plise perde</strong> üretiyoruz. Amasya merkez ve Merzifon konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Amasya Plise Perde — 7 İlçe Video Keşif & Tarihi Ev Pencere Çözümleri",
    seoDescription: "Amasya'nın 7 ilçesinde plise perde: Merzifon, Suluova, Taşova video keşif ve kargo. Tarihi Osmanlı evleri için özel ölçü üretim.",
    sections: [
      {
        h2: "Amasya'nın Tarihi Vadisinde Perde",
        paragraphs: [
          "Amasya, Yeşilırmak'ın iki yakasındaki tarihi Osmanlı evleriyle ünlüdür. Bu evlerin ahşap pencereleri standart dışı boyutlardadır. Amasya merkezdeki <strong>tarihi evlerin pencerelerine özel ölçü plise perde</strong> üretiyoruz. Pencere içinde montaj ile ahşap çerçeveye zarar vermeden kurulur.",
          "Merzifon ve Suluova'nın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Yeşilırmak vadisindeki konutlarda, nehir nemine dayanıklı kumaş kullanıyoruz. Amasya'nın karasal-Karadeniz geçiş ikliminde, kış soğuklarına karşı honeycomb modeli öneriyoruz. Gümüşhacıköy ve Hamamözü'nün küçük ilçelerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Amasya'nın 7 İlçesinde Yeşilırmak Vadisi Teslimatı",
        paragraphs: [
          "Amasya'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Tarihi evler için özel ölçü üretim yapıyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Amasya'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Amasya'nın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Amasya tarihi Osmanlı evimin penceresine perde yapılır mı?", answer: "Evet, Amasya merkezdeki tarihi Osmanlı evlerinin ahşap pencerelerine özel ölçü plise perde üretiyoruz. Pencere içinde montaj ile ahşap çerçeveye zarar vermeden kurulur." },
    ],
  },
  {
    name: "Eskişehir",
    slug: "eskisehir-plise-perde",
    region: "İç Anadolu",
    priority: false,
    districts: ["Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Odunpazarı", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Tepebaşı"],
    intro: "Eskişehir'in 14 ilçesinde plise perde hizmeti sunuyoruz. Öğrenci şehri Eskişehir'in karasal ikliminde, <strong>kış soğuklarına ve yaz sıcaklarına karşı gece-gündüz modellerini</strong> öneriyoruz. Odunpazarı ve Tepebaşı merkez ilçelerine video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Eskişehir Plise Perde — 14 İlçe Video Keşif & Öğrenci Şehri Çözümleri",
    seoDescription: "Eskişehir'in 14 ilçesinde plise perde: Odunpazarı, Tepebaşı, Sivrihisar video keşif ve kargo. Karasal iklim ve öğrenci evleri için çözümler.",
    sections: [
      {
        h2: "Eskişehir'in Öğrenci ve Sanayi Şehrinde Perde",
        paragraphs: [
          "Eskişehir, iki büyük üniversitesi ile Türkiye'nin en önemli öğrenci şehirlerinden biridir. Öğrenci evleri ve yurtlarında <strong>ekonomik fiyatlı güneşlik kumaş plise perde</strong> öneriyoruz. Odunpazarı'nın tarihi mahallelerindeki restore edilmiş evlerin pencerelerine özel ölçü üretim yapıyoruz.",
          "Tepebaşı ve Odunpazarı merkez ilçelerindeki modern site dairelerinde standart ölçülere hızlı üretim yapıyoruz. Eskişehir organize sanayi bölgesindeki fabrika ve işçi lojmanları için yangın dayanımlı B1 kumaş ile toplu perde çözümleri sunuyoruz. Karasal iklim bölgesi olduğundan, kış soğuklarına karşı honeycomb modeli de öneriyoruz.",
        ],
      },
      {
        h2: "Eskişehir'in 14 İlçesinde Öğrenci Şehri Gönderim Ağı",
        paragraphs: [
          "Eskişehir'in tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Öğrenci evleri için ekonomik modeller mevcuttur. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz.",
        ],
      },
    ],
    faqItems: [
      { question: "Eskişehir'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Eskişehir'in tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Eskişehir öğrenci evim için ekonomik perde var mı?", answer: "Evet, öğrenci evleri ve yurtları için ekonomik fiyatlı güneşlik kumaş plise perde modellerimiz mevcuttur. Video keşif ile ölçü alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  // --- KARADENİZ BÖLGESİ ---
  {
    name: "Zonguldak",
    slug: "zonguldak-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Alaplı", "Çaycuma", "Devrek", "Ereğli", "Gökçebey", "Kilimli", "Kozlu", "Zonguldak merkez"],
    intro: "Zonguldak'ın 8 ilçesinde plise perde hizmeti sunuyoruz. Kömür madenciliği şehrinin <strong>yağışlı Karadeniz iklimine uygun nem dayanımlı kumaş modellerini</strong> öneriyoruz. Maden işçi lojmanları için yangın dayanımlı B1 kumaş ile toplu çözümler mevcuttur.",
    seoTitle: "Zonguldak Plise Perde — 8 İlçe Video Keşif & Maden Bölgesi Yangın Dayanımlı Çözümler",
    seoDescription: "Zonguldak'ın 8 ilçesinde plise perde: Ereğli, Çaycuma, Devrek video keşif ve kargo. Maden lojmanları için B1 yangın dayanımlı kumaş.",
    sections: [
      {
        h2: "Zonguldak'ın Maden Şehrinde Perde Çözümleri",
        paragraphs: [
          "Zonguldak, Türkiye'nin kömür madenciliği başkentidir. Maden ocakları çevresindeki işçi lojmanları ve sosyal tesisler için <strong>yangın dayanımlı B1 sınıfı kumaş</strong> ile toplu plise perde çözümleri üretiyoruz. Ereğli Demir Çelik fabrika bölgesindeki idari binalar ve lojmanlar için de benzer çözümler sunuyoruz.",
          "Zonguldak'ın yağışlı Karadeniz ikliminde, yıllık 1200 mm üzerinde yağış alınır. Bu nemli iklimde <strong>anti-nem kaplamalı kumaş tiplerini</strong> öneriyoruz. Devrek ve Çaycuma'nın ormanlık kesimlerindeki evlerde, doğa ile uyumlu renk seçenekleri sunuyoruz. Alaplı sahil kesiminde ise deniz nemine dayanıklı modeller kullanıyoruz.",
        ],
      },
      {
        h2: "Zonguldak'ın 6 İlçesinde Maden Şehri Kargo Çözümü",
        paragraphs: ["Zonguldak'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Maden lojmanları için B1 kumaş öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Zonguldak maden lojmanları için yangın dayanımlı perde var mı?", answer: "Evet, Zonguldak maden işçi lojmanları ve sosyal tesisler için yangın dayanımlı B1 sınıfı kumaş ile toplu plise perde üretimi yapıyoruz." },
      { question: "Zonguldak'ta video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Zonguldak'ın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Karabük",
    slug: "karabuk-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Eflani", "Eskipazar", "Karabük merkez", "Ovacık", "Safranbolu", "Yenice"],
    intro: "Karabük'ün 6 ilçesinde plise perde hizmeti veriyoruz. Demir çelik sanayi şehrinde, <strong>fabrika lojmanları için yangın dayanımlı B1 kumaş</strong> ile toplu çözümler sunuyoruz. Safranbolu'nun UNESCO Dünya Mirası tarihi evleri için özel ölçü üretim yapıyoruz.",
    seoTitle: "Karabük Plise Perde — 6 İlçe Video Keşif & Safranbolu Tarihi Ev Çözümleri",
    seoDescription: "Karabük'ün 6 ilçesinde plise perde: Safranbolu, Eflani, Eskipazar video keşif ve kargo. Demir çelik fabrika lojmanları ve tarihi evler için çözümler.",
    sections: [
      {
        h2: "Karabük'ün Sanayi ve Tarihi Mirasında Perde",
        paragraphs: [
          "Karabük, Türkiye'nin demir çelik sanayinin kalbidir. Kardemir fabrika bölgesindeki işçi lojmanları ve idari binalar için <strong>yangın dayanımlı B1 sınıfı kumaş</strong> ile toplu plise perde çözümleri üretiyoruz. Sanayi bölgesine kargo ile hızlı teslimat yapıyoruz.",
          "Safranbolu, UNESCO Dünya Mirası listesindeki tarihi Türk evleriyle dünya çapında ünlüdür. Bu evlerin ahşap pencereleri standart dışı boyutlardadır. Safranbolu'daki <strong>tarihi evlerin pencerelerine özel ölçü plise perde</strong> üretiyoruz. Pencere içinde montaj ile ahşap çerçeveye ve tarihi dokuya zarar vermeden kurulur. Orijinal evlerle uyumlu renk seçenekleri sunuyoruz.",
        ],
      },
      {
        h2: "Karabük'ün 6 İlçesinde Demir Çelik Bölgesi Teslimatı",
        paragraphs: ["Karabük'ün tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Safranbolu tarihi evleri için özel ölçü üretim yapıyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Safranbolu tarihi evimin penceresine perde yapılır mı?", answer: "Evet, Safranbolu'nun UNESCO Dünya Mirası tarihi Türk evlerinin ahşap pencerelerine özel ölçü plise perde üretiyoruz. Pencere içinde montaj ile ahşap çerçeveye zarar vermeden kurulur." },
      { question: "Karabük demir çelik fabrika lojmanları için toplu perde var mı?", answer: "Evet, Kardemir fabrika bölgesindeki işçi lojmanları için yangın dayanımlı B1 sınıfı kumaş ile toplu plise perde üretimi yapıyoruz." },
    ],
  },
  {
    name: "Bartın",
    slug: "bartin-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Amasra", "Bartın merkez", "Kurucaşile", "Ulus"],
    intro: "Bartın'ın 4 ilçesinde plise perde hizmeti sunuyoruz. Karadeniz'in yeşil sahlinde, <strong>yağışlı iklim için anti-nem kaplamalı kumaş modellerini</strong> öneriyoruz. Amasra'nın tarihi balıkçı evlerinin pencereleri için özel ölçü üretim yapıyoruz.",
    seoTitle: "Bartın Plise Perde — 4 İlçe Video Keşif & Amasra Tarihi Ev Çözümleri",
    seoDescription: "Bartın'ın 4 ilçesinde plise perde: Amasra, Ulus, Kurucaşile video keşif ve kargo. Karadeniz sahil iklimi için nem dayanımlı kumaş.",
    sections: [
      {
        h2: "Bartın'ın Karadeniz Sahlinde Perde",
        paragraphs: [
          "Bartın, Karadeniz'in en küçük illerinden biridir ama en yoğun yağış alan illerden biridir. Yıllık 1300 mm üzerinde yağış alınır. Bu nemli iklimde <strong>anti-nem kaplamalı kumaş</strong> kullanıyoruz. Bartın nehri vadisindeki evlerde, nehir nemine dayanıklı modeller öneriyoruz.",
          "Amasra, Karadeniz'in en güzel sahil beldelerinden biridir. Tarihi Ceneviz kalesi çevresindeki balıkçı evlerinin pencereleri standart dışıdır. Amasra'daki <strong>tarihi evlerin pencerelerine özel ölçü plise perde</strong> üretiyoruz. Sahil restoran ve kafelerinin geniş camları için katlanır sistem uyguluyoruz. Kurucaşile ve Ulus'un dağlık kesimlerindeki yayla evlerinde ise honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Bartın'ın 4 İlçesinde Karadeniz Sahil Gönderimi",
        paragraphs: ["Bartın'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karadeniz iklimi bölgesi olduğundan anti-nem kumaş öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Amasra tarihi evimin penceresine perde yapılır mı?", answer: "Evet, Amasra'nın tarihi balıkçı evlerinin standart dışı pencerelerine özel ölçü plise perde üretiyoruz. Pencere içinde montaj ile tarihi dokuya zarar vermeden kurulur." },
      { question: "Bartın'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Bartın'ın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Bolu",
    slug: "bolu-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Bolu merkez", "Dörtdivan", "Gerede", "Göynük", "Kıbrıscık", "Mengen", "Mudurnu", "Seben", "Yeniçağa"],
    intro: "Bolu'nun 9 ilçesinde plise perde hizmeti veriyoruz. Karadeniz ormanlarının arasında, <strong>yağışlı iklim ve yüksek rakıma uygun honeycomb ve anti-nem modellerini</strong> öneriyoruz. Abant ve Gölköy çevresindeki turizm tesisleri için de perde çözümleri mevcuttur.",
    seoTitle: "Bolu Plise Perde — 9 İlçe Video Keşif & Yayla İklimi Çözümleri",
    seoDescription: "Bolu'nun 9 ilçesinde plise perde: Gerede, Mudurnu, Göynük video keşif ve kargo. Karadeniz yayla iklimi için honeycomb ve anti-nem modelleri.",
    sections: [
      {
        h2: "Bolu'nun Orman ve Yayla İkliminde Perde",
        paragraphs: [
          "Bolu, Türkiye'nin en yeşil illerinden biridir. Karadeniz ormanlarının arasında, yıllık 1000 mm üzerinde yağış alınır. Kışları soğuk ve karlı, yazları serin geçer. Bu iklim koşullarında <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz — hem soğuk havayı filtreler hem de orman nemine dayanır.",
          "Abant Gölü ve Gölköy çevresindeki turizm tesisleri, otel ve pansiyonlarda, göl manzaralı geniş pencereler için <strong>katlanır plise perde sistemi</strong> uyguluyoruz. Mudurnu ve Göynük'ün tarihi ahşap evlerinin pencerelerine özel ölçü üretim yapıyoruz. Mengen aşçılar kasabasındaki gastronomi okulu ve oteller için profesyonel perde çözümleri sunuyoruz. Gerede'nin deri sanayi bölgesindeki işçi lojmanları için toplu perde çözümleri mevcuttur.",
        ],
      },
      {
        h2: "Bolu'nun 9 İlçesinde Orman ve Yayla Bölgesi Kargo",
        paragraphs: ["Bolu'nun tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Yayla iklimi bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Bolu Abant otelim için perde yaptırabilir miyim?", answer: "Evet, Abant Gölü çevresindeki turizm tesisleri için göl manzaralı geniş pencerelere katlanır plise perde sistemi uyguluyoruz. Video keşif ile ölçü alıp kargo ile teslimat yapıyoruz." },
      { question: "Bolu'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Bolu'nun tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Kastamonu",
    slug: "kastamonu-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Abana", "Ağlı", "Araç", "Azdavay", "Bozkurt", "Cide", "Çatalzeytin", "Daday", "Devrekani", "Doğanyurt", "Hanönü", "İhsangazi", "İnebolu", "Kastamonu merkez", "Küre", "Pınarbaşı", "Seydiler", "Şenpazar", "Taşköprü", "Tosya"],
    intro: "Kastamonu'nun 20 ilçesinde plise perde hizmeti sunuyoruz. Karadeniz'in geniş sahlinde ve iç kesimlerde, <strong>yağışlı iklim ve kış soğuklarına uygun honeycomb ve anti-nem modellerini</strong> öneriyoruz. İnebolu ve Cide sahil beldelerindeki yazlık konutlar için de perde çözümleri mevcuttur.",
    seoTitle: "Kastamonu Plise Perde — 20 İlçe Video Keşif & Karadeniz Sahil-İç Bölge Çözümleri",
    seoDescription: "Kastamonu'nun 20 ilçesinde plise perde: İnebolu, Cide, Tosya video keşif ve kargo. Karadeniz iklimi için honeycomb ve anti-nem modelleri.",
    sections: [
      {
        h2: "Kastamonu'nun Geniş Coğrafyasında Perde",
        paragraphs: [
          "Kastamonu, Karadeniz sahlindeki geniş topraklarıyla Türkiye'nin en büyük illerinden biridir. Sahil kesiminde (İnebolu, Cide, Abana, Bozkurt) Karadeniz'in nemine dayanıklı <strong>anti-nem kaplamalı kumaş</strong> kullanıyoruz. İç kesimde (Tosya, Araç, Daday) ise karasal etkiyle kış soğuklarına karşı honeycomb modeli öneriyoruz.",
          "Kastamonu merkezdeki tarihi mahallelerin pencerelerine özel ölçü üretim yapıyoruz. İnebolu sahil beldesindeki yazlık evlerde, deniz manzaralı pencereler için güneşlik kumaş öneriyoruz. Taşköprü'nün sarımsak tarım bölgesindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Küre Dağları Milli Parkı çevresindeki doğa evlerinde, orman nemine dayanıklı modeller kullanıyoruz.",
        ],
      },
      {
        h2: "Kastamonu'nun 20 İlçesinde Geniş Coğrafya Teslimat Planı",
        paragraphs: ["Kastamonu'nun tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karadeniz iklimi bölgesi olduğundan anti-nem ve honeycomb modelleri öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Kastamonu'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Kastamonu'nun 20 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "İnebolu sahil yazlığım için hangi perde önerirsiniz?", answer: "İnebolu'nun Karadeniz sahilinde anti-nem kaplamalı kumaş öneriyoruz. Deniz manzaralı pencereler için güneşlik modeli uygun olur." },
    ],
  },
  {
    name: "Sinop",
    slug: "sinop-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Ayancık", "Boyabat", "Dikmen", "Durağan", "Erfelek", "Gerze", "Sinop merkez", "Türkeli"],
    intro: "Sinop'un 8 ilçesinde plise perde hizmeti veriyoruz. Türkiye'nin en kuzey noktasındaki şehirde, <strong>Karadeniz rüzgarına ve nemine dayanıklı kumaş modellerini</strong> öneriyoruz. Sinop merkez tarihi yarımada evleri için özel ölçü üretim yapıyoruz.",
    seoTitle: "Sinop Plise Perde — 8 İlçe Video Keşif & En Kuzey Nokta Çözümleri",
    seoDescription: "Sinop'un 8 ilçesinde plise perde: Boyabat, Gerze, Ayancık video keşif ve kargo. Karadeniz rüzgarına dayanıklı nem önleyici kumaş.",
    sections: [
      {
        h2: "Sinop'un En Kuzey Noktasında Perde",
        paragraphs: [
          "Sinop, Türkiye'nin en kuzey noktasıdır. Karadeniz'in en sert rüzgarlarına ve nemine maruz kalır. İnceburun yarımadasındaki evlerde, rüzgar ve nem dayanımı yüksek <strong>özel kaplamalı kumaş</strong> kullanıyoruz. Sinop merkez tarihi yarımada evlerinin pencerelerine özel ölçü plise perde üretiyoruz.",
          "Boyabat ve Durağan'ın iç kesimlerinde, daha karasal etkiyle kış soğuklarına karşı honeycomb modeli öneriyoruz. Gerze ve Ayancık sahil beldelerinde, deniz nemine dayanıklı anti-nem kumaş kullanıyoruz. Sinop cezaevi çevresindeki sosyal tesisler için de perde çözümleri sunuyoruz.",
        ],
      },
      {
        h2: "Sinop'un 9 İlçesinde En Kuzey Nokta Kargo Rotası",
        paragraphs: ["Sinop'un tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karadeniz bölgesi olduğundan anti-nem kumaş öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Sinop'ta video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Sinop'un tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Sinop yarımadadaki evim için hangi perde önerirsiniz?", answer: "Sinop'un en kuzey noktasındaki rüzgarlı ve nemli iklimde özel kaplamalı, rüzgar ve nem dayanımı yüksek kumaş öneriyoruz." },
    ],
  },
  {
    name: "Samsun",
    slug: "samsun-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["19 Mayıs", "Alaçam", "Asarcık", "Atakum", "Ayvacık", "Bafra", "Canik", "Çarşamba", "Havza", "İlkadım", "Kavak", "Ladik", "Salıpazarı", "Tekkeköy", "Terme", "Vezirköprü", "Yakakent"],
    intro: "Samsun'un 17 ilçesinde plise perde hizmeti sunuyoruz. Karadeniz'in en büyük liman şehrinde, <strong>yağışlı iklim için anti-nem kaplamalı kumaş modellerini</strong> öneriyoruz. Atakum ve İlkadım merkez ilçelerindeki apartman daireleri için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Samsun Plise Perde — 17 İlçe Video Keşif & Karadeniz Liman Şehri Çözümleri",
    seoDescription: "Samsun'un 17 ilçesinde plise perde: Atakum, Çarşamba, Bafra video keşif ve kargo. Karadeniz iklimi için anti-nem ve honeycomb modelleri.",
    sections: [
      {
        h2: "Samsun'un Karadeniz Liman Şehrinde Perde",
        paragraphs: [
          "Samsun, Karadeniz Bölgesi'nin en büyük ticaret ve liman şehridir. İlkadım, Atakum ve Canik merkez ilçelerindeki modern apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. Samsun'un yağışlı Karadeniz ikliminde, yıllık 800 mm üzerinde yağış alınır; bu nedenle <strong>anti-nem kaplamalı kumaş</strong> öneriyoruz.",
          "Çarşamba ve Terme'nin Yeşilırmak vadisindeki tarım arazilerindeki çiftlik evlerinde, nehir nemine dayanıklı kumaş kullanıyoruz. Bafra'nın sahlindeki yazlık evlerde deniz nemine karşı anti-nem modeli öneriyoruz. Havza ve Ladik'in iç kesimlerinde, daha soğuk iklim nedeniyle honeycomb modeli öneriyoruz. Samsun organize sanayi bölgesindeki fabrika ve lojmanlar için yangın dayanımlı B1 kumaş ile toplu perde çözümleri sunuyoruz.",
        ],
      },
      {
        h2: "Samsun'un 17 İlçesinde Karadeniz Liman Teslimat Ağı",
        paragraphs: ["Samsun'un tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karadeniz iklimi bölgesi olduğundan anti-nem kumaş öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Samsun'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Samsun'un 17 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Samsun Atakum'da apartmanım için hangi perde önerirsiniz?", answer: "Atakum sahil ilçesinde anti-nem kaplamalı kumaş öneriyoruz. Karadeniz ikliminde yağışlı havada normal kumaşlar 2-3 yılda deformasya uğrarken, anti-nem kumaşlar 5+ yıl dayanır." },
    ],
  },
  {
    name: "Çorum",
    slug: "corum-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Alaca", "Bayat", "Boğazkale", "Çorum merkez", "Dodurga", "İskilip", "Kargı", "Mecitözü", "Oğuzlar", "Ortaköy", "Osmancık", "Sungurlu", "Uğurludağ"],
    intro: "Çorum'un 13 ilçesinde plise perde hizmeti veriyoruz. İç Anadolu ile Karadeniz geçiş iklim kuşağında, <strong>kış soğuklarına ve yaz sıcaklarına uygun gece-gündüz modellerini</strong> öneriyoruz. Boğazkale'nin Hattuşaş antik kenti çevresindeki pansiyonlar için de perde çözümleri mevcuttur.",
    seoTitle: "Çorum Plise Perde — 13 İlçe Video Keşif & Geçiş İklim & Hattuşaş Çözümleri",
    seoDescription: "Çorum'un 13 ilçesinde plise perde: İskilip, Sungurlu, Osmancık video keşif ve kargo. İç Anadolu-Karadeniz geçiş iklimi için gece-gündüz modelleri.",
    sections: [
      {
        h2: "Çorum'un Hitit Şehrinde Perde",
        paragraphs: [
          "Çorum, Hitit İmparatorluğu'nun başkenti Hattuşaş'ın ev sahipliğini yapar. Boğazkale ilçesindeki UNESCO Dünya Mirası alanı çevresindeki pansiyon ve turistik işletmelerde, <strong>karartma plise perde</strong> öneriyoruz. Turistlerin dinlenmesi için tam karanlık ortam sağlar.",
          "Çorum merkez konutlarında, İç Anadolu-Karadeniz geçiş ikliminde kış soğukları ve yaz sıcakları görülür. Bu nedenle <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz. İskilip ve Osmancık'ın iç kesimlerinde honeycomb modeli öneriyoruz. Sungurlu ve Alaca'nın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Çorum'un 12 İlçesinde Hitit Şehri Kargo Çözümü",
        paragraphs: ["Çorum'un tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Geçiş iklimi bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Çorum'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Çorum'un 13 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Boğazkale Hattuşaş çevresindeki pansiyonum için perde var mı?", answer: "Evet, Boğazkale'deki UNESCO Dünya Mirası alanı çevresindeki pansiyonlar için karartma plise perde öneriyoruz. Turistlerin dinlenmesi için tam karanlık ortam sağlar." },
    ],
  },
  {
    name: "Ordu",
    slug: "ordu-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Altınordu", "Aybastı", "Çamaş", "Çatalpınar", "Çaybaşı", "Fatsa", "Gölköy", "Gülyalı", "Gürgentepe", "İkizce", "Kabadüz", "Kabataş", "Korgan", "Kumru", "Mesudiye", "Perşembe", "Piraziz", "Sulusaray", "Ünye"],
    intro: "Ordu'nun 19 ilçesinde plise perde hizmeti sunuyoruz. Karadeniz'in fındık bahçeleri arasında, <strong>yağışlı iklim için anti-nem kaplamalı kumaş modellerini</strong> öneriyoruz. Altınordu ve Ünye sahil ilçelerindeki konutlar için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Ordu Plise Perde — 19 İlçe Video Keşif & Fındık Bahçeleri İklim Çözümleri",
    seoDescription: "Ordu'nun 19 ilçesinde plise perde: Altınordu, Fatsa, Ünye video keşif ve kargo. Karadeniz yağışlı iklimi için anti-nem modelleri.",
    sections: [
      {
        h2: "Ordu'nun Fındık Bahçeleri İkliminde Perde",
        paragraphs: [
          "Ordu, Türkiye'nin fındık üretim merkezidir. Yeşil fındık bahçeleri arasında yer alan evler, Karadeniz'in yağışlı iklimine maruz kalır. Yıllık 1000 mm üzerinde yağış alınır. Bu nemli iklimde <strong>anti-nem kaplamalı kumaş</strong> kullanıyoruz. Fındık kurutma tarlalarındaki çiftlik evlerinde, nem dayanımı yüksek modeller öneriyoruz.",
          "Altınordu merkez ilçesindeki apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. Fatsa ve Ünye sahil beldelerinde, deniz nemine dayanıklı kumaş kullanıyoruz. Perşembe ve Gülyalı'nın sahil kesiminde anti-nem modeli öneriyoruz. Mesudiye ve Gölköy'ün yüksek rakımlı yayla kesimlerinde, kış soğuklarına karşı honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Ordu'nun 19 İlçesinde Fındık Bahçeleri Teslimat Planı",
        paragraphs: ["Ordu'nun tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karadeniz iklimi bölgesi olduğundan anti-nem kumaş öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Ordu'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Ordu'nun 19 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Ordu'nun yağışlı ikliminde hangi perde kumaşı dayanır?", answer: "Ordu'nun yıllık 1000 mm+ yağışlı ikliminde anti-nem kaplamalı kumaş öneriyoruz. Normal kumaşlar 2-3 yılda deformasya uğrarken, anti-nem kumaşlar 5+ yıl dayanır." },
    ],
  },
  {
    name: "Giresun",
    slug: "giresun-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Alucra", "Bulancak", "Çamoluk", "Çanakçı", "Dereli", "Doğankent", "Espive", "Eynesil", "Giresun merkez", "Görele", "Güce", "Keşap", "Piraziz", "Şebinkarahisar", "Tirebolu", "Yağlıdere"],
    intro: "Giresun'un 16 ilçesinde plise perde hizmeti veriyoruz. Karadeniz'in dağlık sahlinde, <strong>yağışlı ve nemli iklim için anti-nem kaplamalı kumaş modellerini</strong> öneriyoruz. Giresun merkez ve Tirebolu sahil ilçelerindeki konutlar için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Giresun Plise Perde — 16 İlçe Video Keşif & Dağlık Sahil İklim Çözümleri",
    seoDescription: "Giresun'un 16 ilçesinde plise perde: Bulancak, Tirebolu, Görele video keşif ve kargo. Karadeniz dağlık sahil iklimi için anti-nem modelleri.",
    sections: [
      {
        h2: "Giresun'un Dağlık Sahlinde Perde",
        paragraphs: [
          "Giresun, Karadeniz Dağları'nın denize dik inmesiyle oluşan dik topografyaya sahiptir. Sahil şeridi ile yüksek yaylalar arasında büyük iklim farkları vardır. Sahil kesimde (Bulancak, Espive, Tirebolu, Görele) <strong>anti-nem kaplamalı kumaş</strong> öneriyoruz. İç kesim yaylalarda (Alucra, Çamoluk, Şebinkarahisar) ise kış soğuklarına karşı honeycomb modeli öneriyoruz.",
          "Giresun merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Giresun adası manzaralı pencereler için güneşlik kumaş öneriyoruz. Fındık ve çay tarım bölgesindeki çiftlik evlerinde, nem dayanımı yüksek modeller kullanıyoruz. Dereli'nin Kümbet yaylasındaki turizm tesisleri için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Giresun'un 16 İlçesinde Dağlık Sahil Kargo Rotası",
        paragraphs: ["Giresun'un tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karadeniz iklimi bölgesi olduğundan anti-nem kumaş öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Giresun'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Giresun'un 16 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Giresun yayla evim için hangi perde önerirsiniz?", answer: "Giresun'un iç kesim yaylalarında (Alucra, Şebinkarahisar) kış soğuklarına karşı honeycomb modeli öneriyoruz. Sahil kesimde ise anti-nem kumaş kullanıyoruz." },
    ],
  },
  {
    name: "Gümüşhane",
    slug: "gumushane-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Gümüşhane merkez", "Kelkit", "Köse", "Kürtün", "Şiran", "Torul"],
    intro: "Gümüşhane'nin 6 ilçesinde plise perde hizmeti sunuyoruz. Karadeniz'in iç kesiminde, yüksek rakımlı dağlık iklimde, <strong>kış soğuklarına karşı çift petekli honeycomb modellerini</strong> öneriyoruz. Gümüşhane merkez ve Kelkit konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Gümüşhane Plise Perde — 6 İlçe Video Keşif & Yüksek Rakım Dağ İklim Çözümleri",
    seoDescription: "Gümüşhane'nin 6 ilçesinde plise perde: Kelkit, Şiran, Torul video keşif ve kargo. Yüksek rakım dağ iklimi için çift petekli honeycomb.",
    sections: [
      {
        h2: "Gümüşhane'nin Gümüş Şehrinde Perde",
        paragraphs: [
          "Gümüşhane, adını gümüş madenlerinden alır. Tarihi maden şehri, 1150 metre rakımda, Karadeniz Dağları'nın iç kesiminde yer alır. Kışları şiddetli soğuklar ve kar yağışı görülür. Bu nedenle <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz.",
          "Gümüşhane merkezdeki tarihi Rum evlerinin pencerelerine özel ölçü üretim yapıyoruz. Torul ve Köse'nin dağlık kesimlerindeki yayla evlerinde honeycomb modeli öneriyoruz. Kelkit'in tarım ovasındaki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Şiran ve Kürtün'ün küçük ilçelerinde standart ölçülere hızlı üretim yapıyoruz. Zigana Dağı geçidi çevresindeki dinlenme tesisleri için de perde çözümleri mevcuttur.",
        ],
      },
      {
        h2: "Gümüşhane'nin 6 İlçesinde Gümüş Şehri Gönderimi",
        paragraphs: ["Gümüşhane'nin tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Yüksek rakım bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Gümüşhane'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Gümüşhane'nin tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Gümüşhane kışın çok soğuk, hangi perde önerirsiniz?", answer: "Gümüşhane'nin 1150 metre rakımında çift petekli honeycomb hücreli plise perde öneriyoruz. Pencereden gelen dondurucu havayı filtreler, ısıtma giderlerini düşürür." },
    ],
  },
  {
    name: "Trabzon",
    slug: "trabzon-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı", "Maçka", "Of", "Ortahisar", "Sürmene", "Şalpazarı", "Tonya", "Vakfıkebir", "Yomra"],
    intro: "Trabzon'un 18 ilçesinde plise perde hizmeti veriyoruz. Karadeniz'in inci şehrinde, <strong>yağışlı iklim için anti-nem kaplamalı kumaş modellerini</strong> öneriyoruz. Ortahisar ve Akçaabat merkez ilçelerindeki konutlar için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Trabzon Plise Perde — 18 İlçe Video Keşif & Karadeniz İnci Şehri Çözümleri",
    seoDescription: "Trabzon'un 18 ilçesinde plise perde: Ortahisar, Akçaabat, Maçka video keşif ve kargo. Karadeniz yağışlı iklimi için anti-nem modelleri.",
    sections: [
      {
        h2: "Trabzon'un Tarihi Liman Şehrinde Perde",
        paragraphs: [
          "Trabzon, Karadeniz'in en büyük ticaret ve kültür merkezidir. Ortahisar ilçesindeki tarihi sur içi evlerin pencereleri standart dışıdır. Bu evlerin pencerelerine <strong>özel ölçü plise perde</strong> üretiyoruz. Ayasofya ve Atatürk Köşkü çevresindeki tarihi binalarda pencere içinde montaj ile kurulum yapıyoruz.",
          "Trabzon'un yıllık 800 mm üzerindeki yağışlı ikliminde <strong>anti-nem kaplamalı kumaş</strong> öneriyoruz. Akçaabat ve Vakfıkebir sahil beldelerinde deniz nemine dayanıklı modeller kullanıyoruz. Çaykara ve Maçka'nın yüksek rakımlı yayla kesimlerinde (Uzungöl, Sumela) turizm tesisleri için honeycomb modeli öneriyoruz. Sürmene ve Of'un çay tarım bölgesindeki çiftlik evlerinde nem dayanımı yüksek kumaş kullanıyoruz.",
        ],
      },
      {
        h2: "Trabzon'un 18 İlçesinde Tarihi Liman Teslimat Ağı",
        paragraphs: ["Trabzon'un tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karadeniz iklimi bölgesi olduğundan anti-nem kumaş öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Trabzon'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Trabzon'un 18 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Uzungöl pansiyonum için perde yaptırabilir miyim?", answer: "Evet, Çaykara Uzungöl çevresindeki turizm tesisleri için honeycomb modeli öneriyoruz. Yüksek rakımda kış soğuklarına karşı ısı yalıtımı sağlar." },
    ],
  },
  {
    name: "Rize",
    slug: "rize-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Ardeşen", "Çamlıhemşin", "Çayeli", "Derepazarı", "Fındıklı", "Güneysu", "Hemşin", "İkizdere", "İyidere", "Kalkandere", "Pazar", "Rize merkez"],
    intro: "Rize'nin 12 ilçesinde plise perde hizmeti sunuyoruz. Türkiye'nin çay başkentinde, <strong>yıllık 2400 mm yağışla en nemli iklim için özel kaplamalı kumaş modellerini</strong> öneriyoruz. Rize merkez ve Çayeli konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Rize Plise Perde — 12 İlçe Video Keşif & Çay Bahçeleri Yağış İklim Çözümleri",
    seoDescription: "Rize'nin 12 ilçesinde plise perde: Çayeli, Ardeşen, Pazar video keşif ve kargo. Türkiye'nin en yağışlı iklimi için özel kaplamalı kumaş.",
    sections: [
      {
        h2: "Rize'nin Çay Bahçeleri İkliminde Perde",
        paragraphs: [
          "Rize, Türkiye'nin en yağışlı ilidir. Yıllık 2400 mm üzerinde yağış alınır — bu, Türkiye ortalamasının üç katıdır. Bu aşırı nemli iklimde normal kumaşlar 1-2 yılda deformasya uğrar. Rize konutlarında <strong>özel anti-nem kaplamalı kumaş</strong> kullanıyoruz. Bu kumaşlar 5+ yıl dayanım sağlar.",
          "Rize merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Çayeli ve Pazar'ın çay tarım bölgesindeki çiftlik evlerinde, nem dayanımı en yüksek kumaş tiplerini kullanıyoruz. Çamlıhemşin ve Hemşin'in yüksek rakımlı yayla kesimlerinde, kış soğuklarına karşı honeycomb modeli öneriyoruz. Ardeşen ve Fındıklı sahil şeridinde deniz nemine dayanıklı modeller kullanıyoruz. Ayder yaylası çevresindeki turizm tesisleri için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Rize'nin 12 İlçesinde Çay Bahçeleri Kargo Çözümü",
        paragraphs: ["Rize'nin tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Türkiye'nin en yağışlı iklim bölgesi olduğundan özel anti-nem kumaş öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Rize'nin yağışlı ikliminde perde kumaşı dayanır mı?", answer: "Rize'de yıllık 2400 mm yağış alınır. Normal kumaşlar 1-2 yılda deformasya uğrar. Özel anti-nem kaplamalı kumaş kullanarak 5+ yıl dayanım sağlıyoruz." },
      { question: "Rize'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Rize'nin 12 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Artvin",
    slug: "artvin-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Ardanuç", "Arhavi", "Artvin merkez", "Borçka", "Hopa", "Kemalpaşa", "Murgul", "Şavşat", "Yusufeli"],
    intro: "Artvin'in 9 ilçesinde plise perde hizmeti veriyoruz. Karadeniz'in en dağık ilinde, <strong>yüksek rakımlı orman iklimine uygun honeycomb ve anti-nem modellerini</strong> öneriyoruz. Artvin merkez ve Hopa konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Artvin Plise Perde — 9 İlçe Video Keşif & Dağlık Orman İklim Çözümleri",
    seoDescription: "Artvin'in 9 ilçesinde plise perde: Hopa, Borçka, Şavşat video keşif ve kargo. Yüksek rakım orman iklimi için honeycomb ve anti-nem modelleri.",
    sections: [
      {
        h2: "Artvin'in Dağ ve Orman İkliminde Perde",
        paragraphs: [
          "Artvin, Türkiye'nin en dağık ilidir. Yüzölçümünün yüzde 55'i ormanlarla kaplıdır. Sahil kesimde (Hopa, Arhavi) Karadeniz nemine dayanıklı <strong>anti-nem kaplamalı kumaş</strong> öneriyoruz. İç kesimde (Ardanuç, Şavşat, Yusufeli) yüksek rakımdan dolayı <strong>honeycomb hücreli ısı yalıtımlı modeli</strong> öneriyoruz.",
          "Artvin merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Borçka ve Murgul'nün maden bölgesindeki işçi lojmanları için yangın dayanımlı B1 kumaş ile toplu perde çözümleri sunuyoruz. Şavşat'ın Karagöl çevresindeki turizm tesislerinde katlanır sistem uyguluyoruz. Yusufeli'nin baraj gölü çevresindeki yeni yerleşim bölgelerinde standart modeller kullanıyoruz.",
        ],
      },
      {
        h2: "Artvin'in 9 İlçesinde Dağ ve Orman Bölgesi Gönderimi",
        paragraphs: ["Artvin'in tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Dağlık orman iklimi bölgesi olduğundan honeycomb ve anti-nem modelleri öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Artvin'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Artvin'in 9 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Artvin Hopa sahilinde hangi perde önerirsiniz?", answer: "Hopa ve Arhavi sahil kesiminde Karadeniz nemine dayanıklı anti-nem kaplamalı kumaş öneriyoruz. İç kesimlerde ise honeycomb modeli daha uygun olur." },
    ],
  },
  {
    name: "Bayburt",
    slug: "bayburt-plise-perde",
    region: "Karadeniz",
    priority: false,
    districts: ["Aydıntepe", "Bayburt merkez", "Demirözü"],
    intro: "Bayburt'un 3 ilçesinde plise perde hizmeti sunuyoruz. Karadeniz ile Doğu Anadolu geçişinde, 1554 metre rakımda, <strong>şiddetli kış soğuklarına karşı çift petekli honeycomb modellerini</strong> öneriyoruz. Bayburt merkez konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Bayburt Plise Perde — 3 İlçe Video Keşif & Yüksek Rakım Şiddetli Kış Çözümleri",
    seoDescription: "Bayburt'un 3 ilçesinde plise perde: Aydıntepe, Demirözü video keşif ve kargo. 1554 metre rakımda şiddetli kış için çift petekli honeycomb.",
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
        paragraphs: ["Bayburt'un tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Yüksek rakım bölgesi olduğundan çift petekli honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Bayburt'ta video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Bayburt'un 3 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
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
    intro: "Erzurum'un 20 ilçesinde plise perde hizmeti veriyoruz. Doğu Anadolu'nun 1953 metre rakımdaki şehrinde, <strong>Türkiye'nin en soğuk kışlarına karşı çift petekli honeycomb modellerini</strong> öneriyoruz. Palandöken ve Yakutiye merkez ilçelerine video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Erzurum Plise Perde — 20 İlçe Video Keşif & Türkiye'nin En Soğuk Şehir Çözümleri",
    seoDescription: "Erzurum'un 20 ilçesinde plise perde: Palandöken, Oltu, Horasan video keşif ve kargo. 1953 metre rakımda -40°C kış için çift petekli honeycomb.",
    sections: [
      {
        h2: "Erzurum'un Sert Kış İkliminde Perde",
        paragraphs: [
          "Erzurum, 1953 metre rakımıyla Türkiye'nin en yüksek rakımlı büyük şehridir. Kışları -40°C'ye varan soğuklar ve 6 ay süren kar yağışı görülür. Bu aşırı soğukta pencere, ısı kaybının en büyük kaynaklarından biridir. Erzurum konutlarında <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Çift petek yapısı, pencereden gelen dondurucu havayı iki katmanlı filtreler ve ısıtma giderlerini yüzde 30'a kadar düşürür.",
          "Palandöken kayak merkezi çevresindeki otel ve pansiyonlarda, karartma + honeycomb kombinasyonu uyguluyoruz. Yakutiye ve Aziziye merkez ilçelerindeki apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. Oltu'nun Oltu taşı atölyelerinin bulunduğu sanayi bölgesinde, atölye pencereleri için güneşlik kumaş öneriyoruz. Tortum Şelalesi çevresindeki turizm tesislerinde katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Erzurum'un 20 İlçesinde Sert Kış İklimi Kargo Planı",
        paragraphs: ["Erzurum'un tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Türkiye'nin en soğuk şehri olduğundan çift petekli honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Erzurum'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Erzurum'un 20 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Erzurum kışın -40°C, hangi perde ısı yalıtımı sağlar?", answer: "Erzurum'un 1953 metre rakımında çift petekli honeycomb hücreli plise perde öneriyoruz. Çift petek yapısı pencereden gelen dondurucu havayı iki katmanlı filtreler, ısıtma giderlerini yüzde 30'a kadar düşürür." },
    ],
  },
  {
    name: "Erzincan",
    slug: "erzincan-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Çayırlı", "Erzincan merkez", "İliç", "Kemah", "Kemaliye", "Otlubeli", "Refahiye", "Tercan", "Üzümlü"],
    intro: "Erzincan'ın 9 ilçesinde plise perde hizmeti sunuyoruz. Doğu Anadolu'nun 1185 metre rakımdaki deprem bölgesinde, <strong>kış soğuklarına karşı honeycomb ve deprem güvenli montaj sistemlerini</strong> öneriyoruz. Erzincan merkez ve Tercan konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Erzincan Plise Perde — 9 İlçe Video Keşif & Deprem Güvenli & Yüksek Rakım Çözümleri",
    seoDescription: "Erzincan'ın 9 ilçesinde plise perde: Tercan, Refahiye, Kemah video keşif ve kargo. Deprem güvenli montaj ve 1185 metre rakım için honeycomb.",
    sections: [
      {
        h2: "Erzincan'ın Deprem Bölgesinde Güvenli Perde",
        paragraphs: [
          "Erzincan, 1939 ve 1992 depremlerinin merkez üssü olması nedeniyle deprem güvenliği konutta önceliklidir. Plise perde, pencere içinde 200-400 gram ağırlığıyla deprem anında düşme riski oluşturmaz. <strong>Vidalı veya yapışkanlı montaj</strong> ile sarsıntıya dayanıklı kurulur.",
          "Erzincan'ın 1185 metre rakımındaki karasal ikliminde kışları -30°C'ye varan soğuklar görülür. Bu nedenle <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Erzincan merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Kemah ve Kemaliye'nin Fırat nehri vadisindeki konutlarında, vadi rüzgarına dayanıklı kumaş kullanıyoruz. Tercan ve Refahiye'nin yüksek rakımlı kesimlerinde çift petekli honeycomb öneriyoruz.",
        ],
      },
      {
        h2: "Erzincan'ın 9 İlçesinde Deprem Bölgesi Teslimat Çözümü",
        paragraphs: ["Erzincan'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Deprem bölgesi olduğundan hafif montaj sistemi öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Erzincan deprem bölgesi için plise perde güvenli mi?", answer: "Evet, plise perde pencere içinde monte edilir ve 200-400 gram ağırlığındadır. Deprem anında düşme riski yoktur. Vidalı veya yapışkanlı montaj ile sarsıntıya dayanıklı kurulur." },
      { question: "Erzincan'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Erzincan'ın tüm ilçelerine video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
    ],
  },
  {
    name: "Ağrı",
    slug: "agri-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Ağrı merkez", "Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur", "Patnos", "Taşlıçay", "Tutak"],
    intro: "Ağrı'nın 8 ilçesinde plise perde hizmeti veriyoruz. Doğu Anadolu'nun 1632 metre rakımdaki şehrinde, <strong>şiddetli kış soğuklarına karşı çift petekli honeycomb modellerini</strong> öneriyoruz. Ağrı merkez ve Doğubayazıt konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Ağrı Plise Perde — 8 İlçe Video Keşif & Ağrı Dağı Eteklerinde Yüksek Rakım Çözümleri",
    seoDescription: "Ağrı'nın 8 ilçesinde plise perde: Doğubayazıt, Patnos, Diyadin video keşif ve kargo. 1632 metre rakımda şiddetli kış için çift petekli honeycomb.",
    sections: [
      {
        h2: "Ağrı Dağı Eteklerinde Perde Çözümleri",
        paragraphs: [
          "Ağrı, Türkiye'nin en yüksek dağı olan Ağrı Dağı'nın ev sahibidir. 1632 metre rakımda yer alan şehirde kışları -35°C'ye varan soğuklar görülür. Bu şiddetli kış koşullarında <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Çift petek yapısı, pencereden gelen dondurucu havayı iki katmanlı filtreler.",
          "Doğubayazıt'taki İshak Paşa Sarayı çevresindeki tarihi binaların pencerelerine özel ölçü üretim yapıyoruz. Ağrı merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Patnos ve Diyadin'in tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Hamur ve Tutak'ın küçük ilçelerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Ağrı'nın 7 İlçesinde Dağ Etekleri Kargo Rotası",
        paragraphs: ["Ağrı'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Yüksek rakım bölgesi olduğundan çift petekli honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Ağrı'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Ağrı'nın 8 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Ağrı kışın -35°C, hangi perde önerirsiniz?", answer: "Ağrı'nın 1632 metre rakımında çift petekli honeycomb hücreli plise perde öneriyoruz. Çift petek yapısı, pencereden gelen dondurucu havayı iki katmanlı filtreler." },
    ],
  },
  {
    name: "Kars",
    slug: "kars-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Akyaka", "Arpaçay", "Digor", "Kağızman", "Kars merkez", "Sarıkamış", "Selim", "Susuz"],
    intro: "Kars'ın 8 ilçesinde plise perde hizmeti sunuyoruz. Doğu Anadolu'nun 1768 metre rakımdaki tarihi şehrinde, <strong>şiddetli kış soğuklarına karşı çift petekli honeycomb modellerini</strong> öneriyoruz. Kars merkez ve Sarıkamış konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Kars Plise Perde — 8 İlçe Video Keşif & Baltık Mimari & Yüksek Rakım Çözümleri",
    seoDescription: "Kars'ın 8 ilçesinde plise perde: Sarıkamış, Kağızman, Arpaçay video keşif ve kargo. 1768 metre rakımda Baltık mimari binalar için özel çözümler.",
    sections: [
      {
        h2: "Kars'ın Baltık Mimarisinde Perde",
        paragraphs: [
          "Kars, Rus işgalinden kalan Baltık mimarisi tarzı tarihi binalarıyla Türkiye'nin benzersiz şehirlerinden biridir. Bu binaların yüksek pencereleri standart dışı boyutlardadır. Kars merkezdeki <strong>Baltık mimari binaların pencerelerine özel ölçü plise perde</strong> üretiyoruz. Tarihi taş binaların pencere içinde montaj ile duvara zarar vermeden kurulur.",
          "Kars'ın 1768 metre rakımındaki ikliminde kışları -35°C'ye varan soğuklar görülür. Bu nedenle <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Sarıkamış kayak merkezi çevresindeki otel ve pansiyonlarda karartma + honeycomb kombinasyonu uyguluyoruz. Kağızman ve Digor'un tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Kars'ın 8 İlçesinde Baltık Mimari Bölgesi Teslimatı",
        paragraphs: ["Kars'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Baltık mimari binalar için özel ölçü üretim yapıyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Kars'ta video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Kars'ın 8 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Kars Baltık mimari binaların pencerelerine perde yapılır mı?", answer: "Evet, Kars merkezdeki Baltık mimari binaların yüksek pencerelerine özel ölçü plise perde üretiyoruz. Pencere içinde montaj ile tarihi taş binalara zarar vermeden kurulur." },
    ],
  },
  {
    name: "Iğdır",
    slug: "igdir-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Aralık", "Iğdır merkez", "Karakoyunlu", "Tuzluca"],
    intro: "Iğdır'ın 4 ilçesinde plise perde hizmeti veriyoruz. Doğu Anadolu'nun en alçak rakımlı ilinde, <strong>sıcak yazlara ve soğuk kışlara uygun gece-gündüz modellerini</strong> öneriyoruz. Iğdır merkez konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Iğdır Plise Perde — 4 İlçe Video Keşif & Sıcak Ova İklim Çözümleri",
    seoDescription: "Iğdır'ın 4 ilçesinde plise perde: Aralık, Tuzluca, Karakoyunlu video keşif ve kargo. Sıcak ova iklimi için gece-gündüz modelleri.",
    sections: [
      {
        h2: "Iğdır'ın Sıcak Ovasında Perde",
        paragraphs: [
          "Iğdır, Doğu Anadolu'nun en alçak rakımlı (875 metre) ilidir. Ermenistan ve Nahçıvan sınırında yer alır. Yazları +40°C'ye varan sıcaklar, kışları -20°C'ye varan soğuklar görülür. Bu uç sıcaklık farkları için <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz — gündüz güneşlik katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller.",
          "Iğdır merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Aralık ve Tuzluca'nın sınır bölgesi konutlarında, sert iklim nedeniyle karartma modeli öneriyoruz. Iğdır'ın kayısı ve şeftali bahçelerindeki çiftlik evlerinde, geniş pencere için katlanır sistem uyguluyoruz. Karakoyunlu'nun küçük ilçesinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Iğdır'ın 4 İlçesinde Sıcak Ova Gönderim Çözümü",
        paragraphs: ["Iğdır'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Sıcak ova iklimi bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Iğdır'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Iğdır'ın 4 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Iğdır yazın çok sıcak, hangi perde önerirsiniz?", answer: "Iğdır'ın +40°C sıcaklarında güneşlik kumaş plise perde öneriyoruz. Güneş ışınınn yüzde 70'ini filtreler, iç mekan sıcaklığını düşürür. Karartma modeli de tam ışık kesisi sağlar." },
    ],
  },
  {
    name: "Ardahan",
    slug: "ardahan-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Ardahan merkez", "Çıldır", "Damal", "Göle", "Hanak", "Posof"],
    intro: "Ardahan'ın 6 ilçesinde plise perde hizmeti sunuyoruz. Türkiye'nin en soğuk illerinden birinde, 1900 metre rakımda, <strong>-40°C kış soğuklarına karşı çift petekli honeycomb modellerini</strong> öneriyoruz. Ardahan merkez ve Göle konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Ardahan Plise Perde — 6 İlçe Video Keşif & Türkiye'nin En Soğuk İli Çözümleri",
    seoDescription: "Ardahan'ın 6 ilçesinde plise perde: Çıldır, Göle, Posof video keşif ve kargo. 1900 metre rakımda -40°C kış için çift petekli honeycomb.",
    sections: [
      {
        h2: "Ardahan'ın Sert Kış İkliminde Perde",
        paragraphs: [
          "Ardahan, Türkiye'nin en soğuk ilidir. 1900 metre rakımda, kışları -45°C'ye varan soğuklar ve 7 ay süren kar yağışı görülür. Bu aşırı soğukta pencere, ısı kaybının en büyük kaynaklarından biridir. Ardahan konutlarında <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Çift petek yapısı, pencereden gelen dondurucu havayı iki katmanlı filtreler.",
          "Ardahan merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Çıldır Gölü çevresindeki balık restoranları ve pansiyonlarda, göl manzaralı pencereler için katlanır sistem uyguluyoruz. Posof'un Gürcistan sınır bölgesi konutlarında, sert iklim nedeniyle karartma + honeycomb kombinasyonu öneriyoruz. Göle ve Hanak'ın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Ardahan'ın 6 İlçesinde Sert Kış Bölgesi Kargo Planı",
        paragraphs: ["Ardahan'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Türkiye'nin en soğuk ili olduğundan çift petekli honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Ardahan'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Ardahan'ın 6 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Ardahan kışın -45°C, hangi perde önerirsiniz?", answer: "Ardahan'ın 1900 metre rakımında çift petekli honeycomb hücreli plise perde öneriyoruz. Çift petek yapısı, pencereden gelen dondurucu havayı iki katmanlı filtreler, ısıtma giderlerini yüzde 30'a kadar düşürür." },
    ],
  },
  {
    name: "Muş",
    slug: "mus-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Bulanık", "Hasköy", "Korkut", "Malazgirt", "Muş merkez", "Varto"],
    intro: "Muş'un 6 ilçesinde plise perde hizmeti veriyoruz. Doğu Anadolu'nun 1400 metre rakımdaki ova şehrinde, <strong>kış soğuklarına ve yaz sıcaklarına karşı gece-gündüz modellerini</strong> öneriyoruz. Muş merkez ve Malazgirt konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Muş Plise Perde — 6 İlçe Video Keşif & Ova İklim & Malazgirt Tarihi Çözümleri",
    seoDescription: "Muş'un 6 ilçesinde plise perde: Malazgirt, Bulanık, Varto video keşif ve kargo. 1400 metre ova iklimi için gece-gündüz modelleri.",
    sections: [
      {
        h2: "Muş'un Geniş Ovasında Perde",
        paragraphs: [
          "Muş, Doğu Anadolu'nun en geniş ovalarından birine sahiptir. 1400 metre rakımda, kışları -25°C soğuklar, yazları +35°C sıcaklar görülür. Bu uç sıcaklık farkları için <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz — gündüz güneşlik katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller.",
          "Muş merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Malazgirt'teki 1071 Malazgirt Savaşı anıtı çevresindeki turizm tesislerinde katlanır sistem uyguluyoruz. Bulanık ve Hasköy'ün tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem öneriyoruz. Varto'nun dağlık kesiminde honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Muş'un 6 İlçesinde Geniş Ova Teslimat Ağı",
        paragraphs: ["Muş'un tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Ova iklimi bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Muş'ta video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Muş'un 6 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Muş kışın soğuk yazın sıcak, hangi perde önerirsiniz?", answer: "Muş'un ova ikliminde gece-gündüz plise perde öneriyoruz. Gündüz katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller." },
    ],
  },
  {
    name: "Bitlis",
    slug: "bitlis-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Adilcevaz", "Ahlat", "Bitlis merkez", "Güroymak", "Hizan", "Mutki", "Tatvan"],
    intro: "Bitlis'in 7 ilçesinde plise perde hizmeti sunuyoruz. Doğu Anadolu'nun 1700 metre rakımdaki tarihi şehrinde, <strong>kış soğuklarına karşı honeycomb modellerini</strong> öneriyoruz. Tatvan ve Ahlat konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Bitlis Plise Perde — 7 İlçe Video Keşif & Van Gölü Çevresi Yüksek Rakım Çözümleri",
    seoDescription: "Bitlis'in 7 ilçesinde plise perde: Tatvan, Ahlat, Adilcevaz video keşif ve kargo. 1700 metre rakımda Van Gölü çevresi için honeycomb modelleri.",
    sections: [
      {
        h2: "Bitlis'in Van Gölü Çevresinde Perde",
        paragraphs: [
          "Bitlis, Van Gölü'nün batı kıyısında, 1700 metre rakımda yer alır. Kışları -25°C'ye varan soğuklar görülür. Bu nedenle Bitlis konutlarında <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Tatvan'daki Van Gölü iskelesi çevresindeki konutlarda, göl manzaralı pencereler için katlanır sistem uyguluyoruz.",
          "Bitlis merkezdeki tarihi kervan yolu evlerinin pencerelerine özel ölçü üretim yapıyoruz. Ahlat'taki Selçuklu mezar taşları bölgesindeki pansiyonlarda karartma modeli öneriyoruz. Adilcevaz'ın Kef Kalesi çevresindeki tarihi binalarda özel ölçü üretim yapıyoruz. Hizan ve Mutki'nin dağlık kesimlerindeki köy evlerinde honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Bitlis'in 7 İlçesinde Van Gölü Çevresi Gönderimi",
        paragraphs: ["Bitlis'in tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Yüksek rakım bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Bitlis'te video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Bitlis'in 7 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Bitlis kışın çok soğuk, hangi perde önerirsiniz?", answer: "Bitlis'in 1700 metre rakımında honeycomb hücreli ısı yalıtımlı plise perde öneriyoruz. Petek yapısı pencereden gelen soğuk havayı filtreler, ısıtma giderlerini düşürür." },
    ],
  },
  {
    name: "Bingöl",
    slug: "bingol-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Adaklı", "Bingöl merkez", "Genç", "Karlıova", "Kiğı", "Solhan", "Yayladere", "Yedisu"],
    intro: "Bingöl'ün 8 ilçesinde plise perde hizmeti veriyoruz. Doğu Anadolu'nun 1150 metre rakımdaki dağlık şehrinde, <strong>kış soğuklarına uygun honeycomb modellerini</strong> öneriyoruz. Bingöl merkez ve Solhan konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Bingöl Plise Perde — 8 İlçe Video Keşif & Dağlık Yüksek Rakım Çözümleri",
    seoDescription: "Bingöl'ün 8 ilçesinde plise perde: Solhan, Genç, Karlıova video keşif ve kargo. 1150 metre dağlık iklim için honeycomb modelleri.",
    sections: [
      {
        h2: "Bingöl'ün Dağlık İkliminde Perde",
        paragraphs: [
          "Bingöl, adını bölgedeki binlerce gölden (bin göl) alır. 1150 metre rakımda, dağlık bir topografyaya sahiptir. Kışları soğuk ve karlı geçer. Bingöl merkez konutlarında <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Dağlık kesimlerdeki yayla evlerinde ise çift petekli honeycomb modeli öneriyoruz.",
          "Bingöl merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Solhan ve Genç'in tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Karlıova ve Kiğı'nın yüksek rakımlı kesimlerinde honeycomb modeli öneriyoruz. Yayladere ve Yedisu'nun küçük ilçelerinde standart ölçülere hızlı üretim yapıyoruz.",
        ],
      },
      {
        h2: "Bingöl'ün 8 İlçesinde Dağlık İklim Kargo Çözümü",
        paragraphs: ["Bingöl'ün tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Dağlık iklim bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Bingöl'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Bingöl'ün 8 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Bingöl kışın soğuk, hangi perde önerirsiniz?", answer: "Bingöl'ün 1150 metre rakımında honeycomb hücreli plise perde öneriyoruz. Petek yapısı pencereden gelen soğuk havayı filtreler, ısıtma giderlerini düşürür." },
    ],
  },
  {
    name: "Tunceli",
    slug: "tunceli-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Çemişgezek", "Hozat", "Mazgirt", "Nazmiye", "Ovacık", "Pertek", "Pülümür", "Tunceli merkez"],
    intro: "Tunceli'nin 8 ilçesinde plise perde hizmeti sunuyoruz. Doğu Anadolu'nun dağlık ve ormanlık şehrinde, <strong>kış soğuklarına uygun honeycomb modellerini</strong> öneriyoruz. Tunceli merkez ve Pertek konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Tunceli Plise Perde — 8 İlçe Video Keşif & Munzur Dağları İklim Çözümleri",
    seoDescription: "Tunceli'nin 8 ilçesinde plise perde: Pertek, Ovacık, Hozat video keşif ve kargo. Munzur Dağları iklimi için honeycomb modelleri.",
    sections: [
      {
        h2: "Tunceli'nin Munzur Vadisinde Perde",
        paragraphs: [
          "Tunceli, Munzur Dağları ve Munzur Vadisi Milli Parkı ile ünlüdür. Bölgenin dağlık ve ormanlık yapısı, mikro iklimler oluşturur. Tunceli merkez konutlarında <strong>honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz. Munzur Vadisi çevresindeki doğa evlerinde, orman nemine dayanıklı kumaş kullanıyoruz.",
          "Pertek'in Keban Baraj Gölü kıyısındaki konutlarında, göl manzaralı pencereler için katlanır sistem uyguluyoruz. Ovacık'ın yüksek rakımlı ovasında çift petekli honeycomb öneriyoruz. Çemişgezek'in tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Hozat ve Mazgirt'in dağlık kesimlerinde honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Tunceli'nin 8 İlçesinde Munzur Vadisi Teslimat Rotası",
        paragraphs: ["Tunceli'nin tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Dağlık iklim bölgesi olduğundan honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Tunceli'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Tunceli'nin 8 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Tunceli Munzur Vadisi çevresinde perde yapılır mı?", answer: "Evet, Munzur Vadisi çevresindeki doğa evleri için orman nemine dayanıklı kumaş kullanıyoruz. Yüksek rakımda honeycomb modeli de öneriyoruz." },
    ],
  },
  {
    name: "Elazığ",
    slug: "elazig-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Ağın", "Alacakaya", "Arıcak", "Baskil", "Elazığ merkez", "Karakoçan", "Keban", "Kovancılar", "Maden", "Palu", "Sivrice"],
    intro: "Elazığ'ın 11 ilçesinde plise perde hizmeti veriyoruz. Doğu Anadolu'nun 1067 metre rakımdaki sanayi şehrinde, <strong>kış soğuklarına ve yaz sıcaklarına karşı gece-gündüz modellerini</strong> öneriyoruz. Elazığ merkez ve Kovancılar konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Elazığ Plise Perde — 11 İlçe Video Keşif & Sanayi & Keban Baraj Çözümleri",
    seoDescription: "Elazığ'ın 11 ilçesinde plise perde: Kovancılar, Baskil, Sivrice video keşif ve kargo. Sanayi bölgesi ve Keban Baraj Gölü için çözümler.",
    sections: [
      {
        h2: "Elazığ'ın Sanayi ve Baraj Gölü Çevresinde Perde",
        paragraphs: [
          "Elazığ, Doğu Anadolu'nun en gelişmiş sanayi şehirlerinden biridir. Organize sanayi bölgesindeki fabrika ve işçi lojmanları için <strong>yangın dayanımlı B1 sınıfı kumaş</strong> ile toplu perde çözümleri sunuyoruz. Elazığ merkez konutlarında karasal iklim nedeniyle gece-gündüz modeli öneriyoruz.",
          "Keban Baraj Gölü kıyısındaki Sivrice ve Keban ilçelerinde, göl manzaralı pencereler için katlanır sistem uyguluyoruz. Baskil ve Arıcak'ın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem öneriyoruz. Karakoçan ve Maden'in dağlık kesimlerinde honeycomb modeli öneriyoruz. Harput tarihi mahallesinin evlerinin pencerelerine özel ölçü üretim yapıyoruz.",
        ],
      },
      {
        h2: "Elazığ'ın 11 İlçesinde Baraj Gölü Çevresi Gönderimi",
        paragraphs: ["Elazığ'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal iklim bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Elazığ'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Elazığ'ın 11 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Elazığ sanayi bölgesi için toplu perde yaptırabilir miyim?", answer: "Evet, Elazığ organize sanayi bölgesindeki fabrika ve işçi lojmanları için yangın dayanımlı B1 sınıfı kumaş ile toplu plise perde üretimi yapıyoruz." },
    ],
  },
  {
    name: "Malatya",
    slug: "malatya-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Akçadağ", "Arapgir", "Arguvan", "Battalgazi", "Darende", "Doğanşehir", "Doğanyol", "Hekimhan", "Kale", "Kuluncak", "Pütürge", "Yazıhan", "Yeşilyurt"],
    intro: "Malatya'nın 13 ilçesinde plise perde hizmeti sunuyoruz. Türkiye'nin kayısı başkentinde, <strong>sıcak yazlara ve soğuk kışlara uygun gece-gündüz modellerini</strong> öneriyoruz. Battalgazi ve Yeşilyurt merkez ilçelerine video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Malatya Plise Perde — 13 İlçe Video Keşif & Kayısı Başkenti & Aslantepe Çözümleri",
    seoDescription: "Malatya'nın 13 ilçesinde plise perde: Battalgazi, Yeşilyurt, Hekimhan video keşif ve kargo. Sıcak-karışık iklim ve kayısı çiftlikleri için çözümler.",
    sections: [
      {
        h2: "Malatya'nın Kayısı Şehrinde Perde",
        paragraphs: [
          "Malatya, dünyanın kayısı üretim merkezidir. Yazları +40°C'ye varan sıcaklar, kışları -15°C'ye varan soğuklar görülür. Bu uç sıcaklık farkları için <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz — gündüz güneşlik katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller.",
          "Battalgazi ve Yeşilyurt merkez ilçelerindeki apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. Aslantepe höyüğü çevresindeki tarihi bölge evlerinin pencerelerine özel ölçü üretim yapıyoruz. Hekimhan'ın demir madeni bölgesindeki işçi lojmanları için yangın dayanımlı B1 kumaş ile toplu perde çözümleri sunuyoruz. Pütürge ve Doğanşehir'in kayısı bahçelerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Malatya'nın 14 İlçesinde Kayısı Şehri Teslimat Ağı",
        paragraphs: ["Malatya'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal-sıcak geçiş iklimi bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Malatya'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Malatya'nın 13 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Malatya yazın çok sıcak, hangi perde önerirsiniz?", answer: "Malatya'nın +40°C sıcaklarında güneşlik kumaş plise perde öneriyoruz. Güneş ışınınn yüzde 70'ini filtreler, iç mekan sıcaklığını düşürür. Karartma modeli de tam ışık kesisi sağlar." },
    ],
  },
  {
    name: "Van",
    slug: "van-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Bahçesaray", "Başkale", "Çaldıran", "Çatak", "Edremit", "Erciş", "Gevaş", "Gürpınar", "İpekyolu", "Muradiye", "Özalp", "Saray", "Tuşba"],
    intro: "Van'ın 13 ilçesinde plise perde hizmeti veriyoruz. Doğu Anadolu'nun 1727 metre rakımdaki Van Gölü şehrinde, <strong>kış soğuklarına ve yaz sıcaklarına karşı gece-gündüz modellerini</strong> öneriyoruz. İpekyolu ve Tuşba merkez ilçelerine video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Van Plise Perde — 13 İlçe Video Keşif & Van Gölü Yüksek Rakım Çözümleri",
    seoDescription: "Van'ın 13 ilçesinde plise perde: İpekyolu, Tuşba, Erciş video keşif ve kargo. 1727 metre rakımda Van Gölü çevresi için gece-gündüz modelleri.",
    sections: [
      {
        h2: "Van'ın Gölü ve Dağları Arasında Perde",
        paragraphs: [
          "Van, Türkiye'nin en büyük gölü olan Van Gölü'nün kıyısında, 1727 metre rakımda yer alır. Kışları -25°C'ye varan soğuklar, yazları +35°C'ye varan sıcaklar görülür. Bu uç sıcaklık farkları için <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz. Van Gölü'nün alkali su buharı, sahil kesimde kumaş seçimini etkiler; bu bölgede anti-alkali kaplamalı kumaş kullanıyoruz.",
          "İpekyolu ve Tuşba merkez ilçelerindeki apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. Erciş'in tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Edremit sahil beldesinde, göl manzaralı pencereler için güneşlik kumaş öneriyoruz. Başkale ve Çaldıran'ın yüksek rakımlı sınır bölgelerinde honeycomb modeli öneriyoruz. Van Kalesi çevresindeki tarihi binaların pencerelerine özel ölçü üretim yapıyoruz.",
        ],
      },
      {
        h2: "Van'ın 13 İlçesinde Göl ve Dağ Bölgesi Kargo Planı",
        paragraphs: ["Van'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Van Gölü çevresi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Van'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Van'ın 13 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Van Gölü sahilinde kumaş seçimi nasıl olmalı?", answer: "Van Gölü'nün alkali su buharı sahil kesimde kumaşı etkiler. Bu bölgede anti-alkali kaplamalı kumaş kullanıyoruz. Normal kumaşlar alkali buhardan dolayı daha hızlı deformasya uğrar." },
    ],
  },
  {
    name: "Hakkari",
    slug: "hakkari-plise-perde",
    region: "Doğu Anadolu",
    priority: false,
    districts: ["Çukurca", "Derecik", "Hakkari merkez", "Şemdinli", "Yüksekova"],
    intro: "Hakkari'nin 5 ilçesinde plise perde hizmeti sunuyoruz. Türkiye'nin en yüksek rakımlı illerinden birinde, 1700 metrede, <strong>şiddetli kış soğuklarına karşı çift petekli honeycomb modellerini</strong> öneriyoruz. Hakkari merkez ve Yüksekova konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Hakkari Plise Perde — 5 İlçe Video Keşif & Dağlık Sınır Bölgesi Çözümleri",
    seoDescription: "Hakkari'nin 5 ilçesinde plise perde: Yüksekova, Şemdinli, Çukurca video keşif ve kargo. 1700 metre dağlık sınır bölgesi için çift petekli honeycomb.",
    sections: [
      {
        h2: "Hakkari'nin Sıradağlarında Perde",
        paragraphs: [
          "Hakkari, Türkiye'nin en dağık ve en yüksek rakımlı illerinden biridir. Cilo ve Sat dağlarının eteklerinde, 1700 metre rakımda yer alır. Kışları -30°C'ye varan soğuklar ve aylarca süren kar yağışı görülür. Bu şiddetli kış koşullarında <strong>çift petekli honeycomb hücreli ısı yalıtımlı plise perde</strong> öneriyoruz.",
          "Hakkari merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Yüksekova'nın geniş ovasındaki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Şemdinli'nin Irak sınır bölgesi konutlarında, sert iklim nedeniyle karartma + honeycomb kombinasyonu öneriyoruz. Çukurca ve Derecik'in dağlık kesimlerinde honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Hakkari'nin 4 İlçesinde Sıradağlar Gönderim Çözümü",
        paragraphs: ["Hakkari'nin tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Yüksek rakım bölgesi olduğundan çift petekli honeycomb modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Hakkari'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Hakkari'nin 5 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Hakkari kışın -30°C, hangi perde önerirsiniz?", answer: "Hakkari'nin 1700 metre rakımında çift petekli honeycomb hücreli plise perde öneriyoruz. Çift petek yapısı, pencereden gelen dondurucu havayı iki katmanlı filtreler." },
    ],
  },
  // --- GÜNEYDOĞU ANADOLU BÖLGESİ ---
  {
    name: "Gaziantep",
    slug: "gaziantep-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Araban", "İslahiye", "Karkamış", "Nizip", "Nurdağı", "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"],
    intro: "Gaziantep'in 9 ilçesinde plise perde hizmeti sunuyoruz. Türkiye'nin gastronomi şehrinde, <strong>sıcak yaz iklimine uygun güneşlik ve karartma modellerini</strong> öneriyoruz. Şahinbey ve Şehitkamil merkez ilçelerindeki apartman daireleri için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Gaziantep Plise Perde — 9 İlçe Video Keşif & Gastronomi Şehri Sıcak İklim Çözümleri",
    seoDescription: "Gaziantep'in 9 ilçesinde plise perde: Şahinbey, Şehitkamil, Nizip video keşif ve kargo. Sıcak iklim için güneşlik ve karartma modelleri.",
    sections: [
      {
        h2: "Gaziantep'in Sıcak İkliminde Perde",
        paragraphs: [
          "Gaziantep, Türkiye'nin gastronomi başkentidir. Yazları +40°C'ye varan sıcaklar görülür. Bu sıcak iklimde <strong>güneşlik kumaş plise perde</strong> öneriyoruz — güneş ışının yüzde 70'ini filtreler, iç mekan sıcaklığını düşürür. Karartma modeli de tam ışık kesisi sağlar.",
          "Şahinbey ve Şehitkamil merkez ilçelerindeki apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. Gaziantep'in tarihi bakırcılar çarşısı çevresindeki tarihi evlerin pencerelerine özel ölçü üretim yapıyoruz. Nizip ve Oğuzeli'nin zeytin ve fıstık bahçelerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. İslahiye ve Nurdağı'nın sınır bölgesi konutlarında karartma modeli öneriyoruz. Organize sanayi bölgesindeki fabrika ve lojmanlar için yangın dayanımlı B1 kumaş ile toplu perde çözümleri sunuyoruz.",
        ],
      },
      {
        h2: "Gaziantep'in 9 İlçesinde Sıcak İklim Teslimat Ağı",
        paragraphs: ["Gaziantep'in tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Sıcak iklim bölgesi olduğundan güneşlik modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Gaziantep'te video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Gaziantep'in 9 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Gaziantep yazın çok sıcak, hangi perde önerirsiniz?", answer: "Gaziantep'in +40°C sıcaklarında güneşlik kumaş plise perde öneriyoruz. Güneş ışının yüzde 70'ini filtreler, iç mekan sıcaklığını düşürür." },
    ],
  },
  {
    name: "Şanlıurfa",
    slug: "sanliurfa-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Akçakale", "Birecik", "Bozova", "Ceylanpınar", "Eyyübiye", "Halfeti", "Haliliye", "Harran", "Hilvan", "Karaköprü", "Siverek", "Suruç", "Viranşehir"],
    intro: "Şanlıurfa'nın 13 ilçesinde plise perde hizmeti veriyoruz. Türkiye'nin en sıcak şehrinde, <strong>+45°C yaz sıcaklarına karşı güneşlik ve karartma modellerini</strong> öneriyoruz. Eyyübiye ve Haliliye merkez ilçelerine video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Şanlıurfa Plise Perde — 13 İlçe Video Keşif & Türkiye'nin En Sıcak Şehri Çözümleri",
    seoDescription: "Şanlıurfa'nın 13 ilçesinde plise perde: Eyyübiye, Haliliye, Siverek video keşif ve kargo. +45°C sıcak iklim için güneşlik ve karartma.",
    sections: [
      {
        h2: "Şanlıurfa'nın Sıcak İkliminde Perde",
        paragraphs: [
          "Şanlıurfa, Türkiye'nin en sıcak ilidir. Yazları +45°C'ye varan sıcaklar görülür. Bu aşırı sıcakta pencere, iç mekan ısısını en çok etkileyen faktördür. Şanlıurfa konutlarında <strong>güneşlik kumaş plise perde</strong> öneriyoruz — güneş ışının yüzde 70'ini filtreler, iç mekan sıcaklığını 5-8°C düşürür. Karartma modeli de tam ışık kesisi ve maksimum ısı kontrolü sağlar.",
          "Eyyübiye ve Haliliye merkez ilçelerindeki apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. Şanlıurfa'nın tarihi Halilurrahman Camii çevresindeki tarihi evlerin pencerelerine özel ölçü üretim yapıyoruz. Harran'nın UNESCO Dünya Mirası konik evleri çevresindeki konutlarda özel ölçü üretim yapıyoruz. Siverek ve Viranşehir'in tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Halfeti'nin Fırat nehri kıyısındaki evlerinde, nehir manzaralı pencereler için güneşlik kumaş öneriyoruz.",
        ],
      },
      {
        h2: "Şanlıurfa'nın 13 İlçesinde Sıcak İklim Kargo Rotası",
        paragraphs: ["Şanlıurfa'nın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Türkiye'nin en sıcak şehri olduğundan güneşlik ve karartma modelleri öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Şanlıurfa'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Şanlıurfa'nın 13 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Şanlıurfa yazın +45°C, hangi perde önerirsiniz?", answer: "Şanlıurfa'nın aşırı sıcaklarında güneşlik kumaş plise perde öneriyoruz. Güneş ışının yüzde 70'ini filtreler, iç mekan sıcaklığını 5-8°C düşürür. Karartma modeli de maksimum ısı kontrolü sağlar." },
    ],
  },
  {
    name: "Adıyaman",
    slug: "adiyaman-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Adıyaman merkez", "Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Samsat", "Sincik", "Tut"],
    intro: "Adıyaman'ın 9 ilçesinde plise perde hizmeti sunuyoruz. Nemrut Dağı'nın ev sahibi şehirde, <strong>sıcak yazlara ve soğuk kışlara uygun gece-gündüz modellerini</strong> öneriyoruz. Adıyaman merkez ve Kahta konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Adıyaman Plise Perde — 9 İlçe Video Keşif & Nemrut Dağı & Atatürk Barajı Çözümleri",
    seoDescription: "Adıyaman'ın 9 ilçesinde plise perde: Kahta, Besni, Gölbaşı video keşif ve kargo. Nemrut Dağı ve Atatürk Barajı çevresi için gece-gündüz modelleri.",
    sections: [
      {
        h2: "Adıyaman'ın Nemrut ve Baraj Çevresinde Perde",
        paragraphs: [
          "Adıyaman, UNESCO Dünya Mirası Nemrut Dağı'nın ev sahibidir. Kahta ilçesindeki Nemrut Dağı çevresindeki pansiyon ve turizm tesislerinde, <strong>karartma plise perde</strong> öneriyoruz. Turistlerin dinlenmesi için tam karanlık ortam sağlar.",
          "Adıyaman'ın karasal-sıcak geçiş ikliminde yazları +40°C sıcaklar, kışları -10°C soğuklar görülür. Bu uç sıcaklık farkları için <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz. Adıyaman merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Atatürk Baraj Gölü kıyısındaki Gölbaşı ve Samsat ilçelerinde, göl manzaralı pencereler için katlanır sistem uyguluyoruz. Besni ve Çelikhan'ın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem öneriyoruz.",
        ],
      },
      {
        h2: "Adıyaman'ın 9 İlçesinde Nemrut ve Baraj Bölgesi Gönderimi",
        paragraphs: ["Adıyaman'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal-sıcak geçiş iklimi bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Adıyaman'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Adıyaman'ın 9 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Nemrut Dağı çevresindeki pansiyonum için perde var mı?", answer: "Evet, Kahta'daki Nemrut Dağı çevresindeki pansiyonlar için karartma plise perde öneriyoruz. Turistlerin dinlenmesi için tam karanlık ortam sağlar." },
    ],
  },
  {
    name: "Diyarbakır",
    slug: "diyarbakir-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Bağlar", "Bismil", "Çınar", "Çüngüş", "Dicle", "Ergani", "Hani", "Hazro", "Kayapınar", "Kocaköy", "Kulp", "Lice", "Silvan", "Sur", "Yenişehir"],
    intro: "Diyarbakır'ın 15 ilçesinde plise perde hizmeti veriyoruz. Surların çevrelediği tarihi şehirde, <strong>sıcak yazlara ve soğuk kışlara uygun gece-gündüz modellerini</strong> öneriyoruz. Bağlar, Kayapınar ve Yenişehir merkez ilçelerine video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Diyarbakır Plise Perde — 15 İlçe Video Keşif & Surlar Şehri Sıcak İklim Çözümleri",
    seoDescription: "Diyarbakır'ın 15 ilçesinde plise perde: Bağlar, Kayapınar, Sur video keşif ve kargo. Sıcak-karışık iklim için gece-gündüz modelleri.",
    sections: [
      {
        h2: "Diyarbakır'ın Surlar Şehrinde Perde",
        paragraphs: [
          "Diyarbakır, UNESCO Dünya Mirası listesindeki 5 km uzunluğundaki tarihi surlarıyla ünlüdür. Sur ilçesindeki tarihi surlar içi evlerin pencereleri standart dışıdır. Bu evlerin pencerelerine <strong>özel ölçü plise perde</strong> üretiyoruz. Pencere içinde montaj ile tarihi taş binalara zarar vermeden kurulur.",
          "Diyarbakır'ın karasal-sıcak geçiş ikliminde yazları +40°C sıcaklar, kışları -10°C soğuklar görülür. Bu uç sıcaklık farkları için <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz. Bağlar, Kayapınar ve Yenişehir merkez ilçelerindeki apartman dairelerinde standart ölçülere hızlı üretim yapıyoruz. Bismil ve Çınar'ın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz. Lice ve Hani'nin dağlık kesimlerinde honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Diyarbakır'ın 17 İlçesinde Surlar Şehri Teslimat Çözümü",
        paragraphs: ["Diyarbakır'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal-sıcak geçiş iklimi bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Diyarbakır'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Diyarbakır'ın 15 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Diyarbakır Sur içindeki tarihi evime perde yapılır mı?", answer: "Evet, Sur ilçesindeki tarihi surlar içi evlerin standart dışı pencerelerine özel ölçü plise perde üretiyoruz. Pencere içinde montaj ile tarihi taş binalara zarar vermeden kurulur." },
    ],
  },
  {
    name: "Mardin",
    slug: "mardin-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Artuklu", "Dargeçit", "Derik", "Kızıltepe", "Mazıdağı", "Midyat", "Nusaybin", "Ömerli", "Savur", "Yeşilli"],
    intro: "Mardin'in 10 ilçesinde plise perde hizmeti sunuyoruz. Taş mimarisiyle ünlü şehirde, <strong>sıcak yazlara uygun güneşlik ve karartma modellerini</strong> öneriyoruz. Artuklu ve Kızıltepe konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Mardin Plise Perde — 10 İlçe Video Keşif & Taş Mimari Şehri Sıcak İklim Çözümleri",
    seoDescription: "Mardin'in 10 ilçesinde plise perde: Artuklu, Midyat, Nusaybin video keşif ve kargo. Taş mimari şehri için güneşlik ve karartma modelleri.",
    sections: [
      {
        h2: "Mardin'in Taş Şehrinde Perde",
        paragraphs: [
          "Mardin, Mezopotamya ovasına bakan tarihi taş evleriyle dünya çapında ünlüdür. Artuklu ilçesindeki tarihi taş evlerin pencereleri standart dışı boyutlardadır. Bu evlerin pencerelerine <strong>özel ölçü plise perde</strong> üretiyoruz. Pencere içinde montaj ile tarihi taş binalara zarar vermeden kurulur. Ova manzaralı pencereler için güneşlik kumaş öneriyoruz.",
          "Mardin'in sıcak ikliminde yazları +40°C'ye varan sıcaklar görülür. Bu sıcakta <strong>güneşlik kumaş plise perde</strong> öneriyoruz. Midyat'ın Süryani tarihi mahallesinin evlerinin pencerelerine özel ölçü üretim yapıyoruz. Nusaybin ve Kızıltepe'nin sınır bölgesi konutlarında karartma modeli öneriyoruz. Dargeçit ve Savur'un dağlık kesimlerinde honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Mardin'in 10 İlçesinde Taş Şehir Gönderim Ağı",
        paragraphs: ["Mardin'in tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Sıcak iklim bölgesi olduğundan güneşlik modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Mardin'de video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Mardin'in 10 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Mardin taş evimin penceresine perde yapılır mı?", answer: "Evet, Mardin'in tarihi taş evlerinin standart dışı pencerelerine özel ölçü plise perde üretiyoruz. Pencere içinde montaj ile tarihi taş binalara zarar vermeden kurulur." },
    ],
  },
  {
    name: "Batman",
    slug: "batman-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Batman merkez", "Beşiri", "Gercüş", "Hasankeyf", "Kozluk", "Sason"],
    intro: "Batman'ın 6 ilçesinde plise perde hizmeti veriyoruz. Petrol şehrinde, <strong>sıcak yazlara ve soğuk kışlara uygun gece-gündüz modellerini</strong> öneriyoruz. Batman merkez ve Kozluk konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Batman Plise Perde — 6 İlçe Video Keşif & Petrol Şehri & Hasankeyf Çözümleri",
    seoDescription: "Batman'ın 6 ilçesinde plise perde: Kozluk, Beşiri, Gercüş video keşif ve kargo. Petrol şehri ve Hasankeyf için gece-gündüz modelleri.",
    sections: [
      {
        h2: "Batman'ın Petrol Şehrinde Perde",
        paragraphs: [
          "Batman, Türkiye'nin ilk petrol üretim merkezidir. Petrol rafinerisi ve BOTAŞ tesisleri çevresindeki işçi lojmanları için <strong>yangın dayanımlı B1 sınıfı kumaş</strong> ile toplu plise perde çözümleri sunuyoruz. Batman merkez konutlarında karasal-sıcak geçiş iklimi nedeniyle gece-gündüz modeli öneriyoruz.",
          "Hasankeyf, Tigris nehri kıyısındaki binlerce yıllık tarihi mağara evleriyle ünlüdür. Hasankeyf'teki tarihi mağara evlerinin pencerelerine <strong>özel ölçü plise perde</strong> üretiyoruz. Gercüş'ün tarihi Süryani evlerinin pencerelerine de özel ölçü üretim yapıyoruz. Sason'un dağlık kesimlerinde honeycomb modeli öneriyoruz.",
        ],
      },
      {
        h2: "Batman'ın 6 İlçesinde Petrol Şehri Kargo Planı",
        paragraphs: ["Batman'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Petrol tesisleri için B1 kumaş öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Batman'da video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Batman'ın 6 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Batman petrol lojmanları için yangın dayanımlı perde var mı?", answer: "Evet, Batman petrol rafinerisi ve BOTAŞ tesisleri çevresindeki işçi lojmanları için yangın dayanımlı B1 sınıfı kumaş ile toplu plise perde üretimi yapıyoruz." },
    ],
  },
  {
    name: "Siirt",
    slug: "siirt-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Baykan", "Eruh", "Kurtalan", "Pervari", "Siirt merkez", "Şirvan"],
    intro: "Siirt'in 6 ilçesinde plise perde hizmeti sunuyoruz. Botan nehri vadisindeki şehirde, <strong>sıcak yazlara ve soğuk kışlara uygun gece-gündüz modellerini</strong> öneriyoruz. Siirt merkez ve Kurtalan konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Siirt Plise Perde — 6 İlçe Video Keşif & Botan Vadisi İklim Çözümleri",
    seoDescription: "Siirt'in 6 ilçesinde plise perde: Kurtalan, Baykan, Pervari video keşif ve kargo. Botan nehri vadisi iklimi için gece-gündüz modelleri.",
    sections: [
      {
        h2: "Siirt'in Botan Vadisinde Perde",
        paragraphs: [
          "Siirt, Botan nehri vadisinde yer alır. Yazları +40°C sıcaklar, kışları -10°C soğuklar görülür. Bu uç sıcaklık farkları için <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz. Siirt merkez konutlarında standart ölçülere hızlı üretim yapıyoruz.",
          "Siirt'in tarihi medrese ve cami çevresindeki evlerin pencerelerine özel ölçü üretim yapıyoruz. Baykan'ın maden bölgesindeki işçi lojmanları için yangın dayanımlı B1 kumaş öneriyoruz. Pervari ve Şirvan'ın dağlık kesimlerinde honeycomb modeli öneriyoruz. Kurtalan'ın tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Siirt'in 7 İlçesinde Botan Vadisi Teslimat Rotası",
        paragraphs: ["Siirt'in tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Karasal-sıcak geçiş iklimi bölgesi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Siirt'te video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Siirt'in 6 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Siirt yazın sıcak kışın soğuk, hangi perde önerirsiniz?", answer: "Siirt'in Botan vadisi ikliminde gece-gündüz plise perde öneriyoruz. Gündüz katmanı sıcaklığı filtreler, gece karartma katmanı soğuğu engeller." },
    ],
  },
  {
    name: "Şırnak",
    slug: "sirnak-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Beytüşşebap", "Cizre", "Güçlükonak", "İdil", "Silopi", "Şırnak merkez", "Uludere"],
    intro: "Şırnak'ın 7 ilçesinde plise perde hizmeti veriyoruz. Cudi Dağı'nın eteklerindeki şehirde, <strong>sıcak yazlara ve soğuk kışlara uygun gece-gündüz modellerini</strong> öneriyoruz. Şırnak merkez ve Cizre konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Şırnak Plise Perde — 7 İlçe Video Keşif & Cudi Dağı Sınır Bölgesi Çözümleri",
    seoDescription: "Şırnak'ın 7 ilçesinde plise perde: Cizre, Silopi, İdil video keşif ve kargo. Cudi Dağı sınır bölgesi için gece-gündüz modelleri.",
    sections: [
      {
        h2: "Şırnak'ın Cudi Dağı Eteklerinde Perde",
        paragraphs: [
          "Şırnak, Cudi Dağı'nın eteklerinde, Suriye ve Irak sınırında yer alır. Yazları +42°C sıcaklar, kışları -15°C soğuklar görülür. Bu uç sıcaklık farkları için <strong>gece-gündüz plise perde sistemini</strong> öneriyoruz. Şırnak merkez konutlarında standart ölçülere hızlı üretim yapıyoruz.",
          "Cizre ve Silopi'nin sınır bölgesi konutlarında, sert iklim nedeniyle karartma modeli öneriyoruz. İdil ve Beytüşşebap'ın dağlık kesimlerinde honeycomb modeli öneriyoruz. Uludere'nin vadi kesimindeki köy evlerinde katlanır sistem uyguluyoruz. Gabar Dağı çevresindeki kırsal konutlarda anti-nem kumaş kullanıyoruz.",
        ],
      },
      {
        h2: "Şırnak'ın 7 İlçesinde Cudi Dağı Etekleri Gönderimi",
        paragraphs: ["Şırnak'ın tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Sınır bölgesi iklimi olduğundan gece-gündüz modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Şırnak'ta video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Şırnak'ın 7 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Şırnak Cizre sınır bölgesi için hangi perde önerirsiniz?", answer: "Cizre ve Silopi'nin sınır bölgesi konutlarında karartma modeli öneriyoruz. Sert iklimde tam ışık kesisi ve maksimum ısı kontrolü sağlar." },
    ],
  },
  {
    name: "Kilis",
    slug: "kilis-plise-perde",
    region: "Güneydoğu Anadolu",
    priority: false,
    districts: ["Elbeyli", "Kilis merkez", "Musabeyli", "Polateli"],
    intro: "Kilis'in 4 ilçesinde plise perde hizmeti sunuyoruz. Türkiye'nin en küçük ilinde, <strong>sıcak yazlara uygun güneşlik ve karartma modellerini</strong> öneriyoruz. Kilis merkez konutları için video keşif ve kargo ile teslimat yapıyoruz.",
    seoTitle: "Kilis Plise Perde — 4 İlçe Video Keşif & Sınır Şehri Sıcak İklim Çözümleri",
    seoDescription: "Kilis'in 4 ilçesinde plise perde: Elbeyli, Musabeyli, Polateli video keşif ve kargo. Sıcak sınır şehri için güneşlik ve karartma modelleri.",
    sections: [
      {
        h2: "Kilis'in Sınır Şehrinde Perde",
        paragraphs: [
          "Kilis, Türkiye'nin en küçük ilidir. Suriye sınırında yer alır. Yazları +42°C'ye varan sıcaklar görülür. Bu sıcak iklimde <strong>güneşlik kumaş plise perde</strong> öneriyoruz — güneş ışının yüzde 70'ini filtreler, iç mekan sıcaklığını düşürür. Karartma modeli de tam ışık kesisi sağlar.",
          "Kilis merkez konutlarında standart ölçülere hızlı üretim yapıyoruz. Kilis'in tarihi çarşı çevresindeki evlerin pencerelerine özel ölçü üretim yapıyoruz. Elbeyli ve Polateli'nin sınır bölgesi konutlarında karartma modeli öneriyoruz. Musabeyli'nin tarım arazilerindeki çiftlik evlerinde geniş pencere için katlanır sistem uyguluyoruz.",
        ],
      },
      {
        h2: "Kilis'in 4 İlçesinde Sınır Şehri Teslimat Çözümü",
        paragraphs: ["Kilis'in tüm ilçelerine <strong>video keşif</strong> ile hizmet veriyoruz. Sıcak iklim bölgesi olduğundan güneşlik modeli öneriyoruz. WhatsApp üzerinden ölçü alıp, kargo ile teslimat yapıyoruz."],
      },
    ],
    faqItems: [
      { question: "Kilis'te video keşif ile perde ısmarlayabilir miyim?", answer: "Evet, Kilis'in 4 ilçesinin tamamına video keşif ile hizmet veriyoruz. WhatsApp üzerinden pencere ölçülerinizi alıp, kargo ile teslimat yapıyoruz." },
      { question: "Kilis yazın çok sıcak, hangi perde önerirsiniz?", answer: "Kilis'in +42°C sıcaklarında güneşlik kumaş plise perde öneriyoruz. Güneş ışının yüzde 70'ini filtreler, iç mekan sıcaklığını düşürür. Karartma modeli de tam ışık kesisi sağlar." },
    ],
  },
];
