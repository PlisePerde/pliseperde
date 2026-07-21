import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Çocuk Odası Plise Perde — Güvenli, Soft Işık, Çocuk Dostu",
  description:
    "Çocuk odası için plise perde: ip mekanizması yok, çocuk güvenliği, yarı karartma soft ışık, nem dayanımlı kumaş, renkli seçenekler. 2 yıl garanti.",
  slug: "cocuk-odasi-plise-perde",
});

export default function CocukOdasiPlisePerdePage() {
  return (
    <PageTemplate
      title="Çocuk Odası Plise Perde"
      description="Çocuk odası için güvenli plise perde: ip mekanizması yok, soft ışık, renkli seçenekler."
      slug="cocuk-odasi-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Çocuk Odası", url: "/cocuk-odasi-plise-perde" }]}
      h1="Çocuk Odası Plise Perde"
      intro="Çocuk odasında <strong>güvenlik birinci önceliktir</strong>. Klasik perde sistemlerinde bulunan ip ve kordon mekanizmaları, çocuklar için strangülasyon (boğulma) riski taşır. Plise perde, <strong>ip mekanizması kullanmaz</strong> — kordon yerine el ile itme/çekme veya teleskopik kolla çalışır. Bu sayede çocuk odasında güvenlik standartları tam sağlanır. Ayrıca yarı karartma kumaş ile odaya soft ışık girer, çocuğun gözünü yormaz."
      schemaType="service"
      schemaData={{
        name: "Çocuk Odası Plise Perde",
        description: "Çocuk odası için güvenli, ip mekanizmasız plise perde.",
      }}
      sections={[
        {
          h2: "Çocuk Odasında Güvenlik",
          paragraphs: [
            "Çocuk odasında perde seçiminde <strong>3 kritik güvenlik kuralı</strong> vardır:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>İp/kordon olmamalı</strong> — plise perde ip kullanmaz, strangülasyon riski sıfır",
              "<strong>Pencere içine takılmalı</strong> — çocuk erişim alanı dışında, perde çekilemez",
              "<strong>Kolay temizlik</strong> — çocuklar pencereye dokunur, kumaş silinebilir olmalı",
            ],
          },
        },
        {
          h2: "Çocuk Odası İçin Kumaş Seçimi",
          paragraphs: [
            "Çocuk odasında <strong>ışık kontrolü</strong> uyku düzeni için kritiktir. Bebekler gündüz uyur, okul çağı çocukları ise erken uyur:",
          ],
          table: {
            headers: ["Kumaş Tipi", "Işık", "Uyku Etkisi", "Önerilen Yaş"],
            rows: [
              ["Yarı karartma", "%10-20", "Soft ışık, rahat uyku", "0-6 yaş (gündüz uykusu)"],
              ["Tam karartma", "%0", "Tam karanlık uyku", "Tüm yaşlar"],
              ["Düet", "%0 / %70", "Gece karartma + gündüz ışık", "Okul çağı"],
              ["Tül", "%70-90", "Bol ışık, az karartma", "Oyun odası"],
            ],
          },
        },
        {
          h2: "Çocuk Odası İçin Renk ve Desen",
          paragraphs: [
            "Çocuk odasında perde rengi <strong>odanın atmosferini</strong> belirler. Plise perde kumaşında çocuk odası için özel renk ve desen seçenekleri mevcuttur:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Pastel renkler</strong> — pembe, mavi, sarı, yeşil; yumuşak ve huzurlu atmosfer",
              "<strong>Beyaz / krem</strong> — nötr, her temaya uyumlu, maksimum ışık",
              "<strong>Desenli kumaş</strong> — yıldız, bulut, hayvan figürleri ile eğlenceli görünüm",
              "<strong>Karakter baskı</strong> — çocuğun sevdiği karakter ile kişiselleştirme",
              "<strong>Renk değiştiren (düet)</strong> — gündüz renkli + gece karartma",
            ],
          },
        },
        {
          h2: "Çocuk Odası Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Çocuk odası pencereleri genellikle <strong>standart boyutta</strong> olur. Fiyat aralıkları:",
          ],
          table: {
            headers: ["Pencere Ölçüsü", "Alan (m²)", "Yarı Karartma", "Tam Karartma", "Desenli"],
            rows: [
              ["80x120 cm (küçük)", "0.96 m²", "1.152-1.728 TL", "1.344-1.920 TL", "1.440-2.112 TL"],
              ["100x120 cm (standart)", "1.20 m²", "1.440-2.160 TL", "1.680-2.400 TL", "1.800-2.640 TL"],
              ["120x150 cm (büyük)", "1.80 m²", "2.160-3.240 TL", "2.520-3.600 TL", "2.700-3.960 TL"],
            ],
          },
        },
        {
          h2: "Çocuk Odası Perdesinde Dikkat Edilmesi Gerekenler",
          paragraphs: [
            "Çocuk odası perdesi seçiminde <strong>ek dikkat noktaları</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Malzeme güvenliği</strong> — kumaş çocuk cildine temas edebilir, toksik madde içermemeli",
              "<strong>Yangın dayanımı</strong> — kumaş alev almaz özellikte olmalı (çocuk odası standardı)",
              "<strong>Sabit montaj</strong> — perde profili sağlam takılmalı, çocuk çekince düşmemeli",
              "<strong>Teleskopik kol</strong> — kısa boşluğa takılan güvenli kontrol mekanizması",
              "<strong>Çocuk kilidi</strong> — perde mekanizmasını kilitleyerek çocuğun açmasını engelleme",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Çocuk odası için plise perde güvenli mi?",
          answer: "Evet, plise perde ip mekanizması kullanmaz. Kordon yerine el ile itme/çekme veya teleskopik kolla çalışır. Strangülasyon riski sıfırdır. Çocuk odası için en güvenli perde sistemidir.",
        },
        {
          question: "Çocuk odası için hangi kumaş önerilir?",
          answer: "Bebek ve küçük çocuklar için yarı karartma (%10-20 ışık) önerilir — gündüz uykusu için soft karanlık. Okul çağı çocukları için tam karartma veya düet önerilir.",
        },
        {
          question: "Çocuk odası plise perde fiyatı ne kadar?",
          answer: "100x120 cm standart pencere için yarı karartma 1.440-2.160 TL, tam karartma 1.680-2.400 TL aralığındadır. Desenli kumaş biraz daha yüksektir. Montaj dahildir.",
        },
        {
          question: "Çocuk odasına desenli plise perde yapılır mı?",
          answer: "Evet, yıldız, bulut, hayvan figürleri gibi desenli kumaş seçenekleri mevcuttur. Ayrıca özel dijital baskı ile çocuğun sevdiği karakter eklenebilir.",
        },
      ]}
    />
  );
}
