import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Yapışkanlı Plise Perde — Delmesiz Yapıştırma Sistemi",
  description:
    "Yapışkanlı plise perde: çift taraflı bant ile delmesiz montaj. Kiracı dostu, iz bırakmaz. PVC ve alüminyum çerçeveye uyumlu. 2 yıl garanti.",
  slug: "yapiskanli-plise-perde",
});

export default function YapiskanliPlisePerdePage() {
  return (
    <PageTemplate
      title="Yapışkanlı Plise Perde"
      description="Yapışkanlı plise perde: çift taraflı bant ile delmesiz montaj. Kiracı dostu, iz bırakmaz."
      slug="yapiskanli-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sistemlerimiz", url: "/plise-perde-sistemleri" }, { name: "Yapışkanlı Plise Perde", url: "/yapiskanli-plise-perde" }]}
      h1="Yapışkanlı Plise Perde"
      intro="Yapışkanlı plise perde, profilin pencere çerçevesine yüksek kaliteli çift taraflı bant ile yapıştırıldığı montaj sistemidir. <em><strong>Yapıştırmalı plise perde</strong></em> olarak da bilinir — delme yapmadan, vidalamadan perdeyi sabitler. Kiracılar için en pratik çözümdür. PVC, alüminyum ve ahşap çerçevelere uygulanır. Söküldüğünde iz bırakmaz. 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Yapışkanlı Plise Perde",
        description: "Çift taraflı bant ile delmesiz yapıştırma montajı. Kiracı dostu plise perde sistemi.",
      }}
      sections={[
        {
          h2: "Yapışkanlı Montaj Nedir?",
          paragraphs: [
            "<em><strong>Yapıştırmalı plise perde</strong></em> montajında, profilin arkasına çift taraflı endüstriyel bant yapıştırılır ve pencere çerçevesine bastırılarak sabitlenir. Vida kullanılmaz, delik açılmaz.",
            "Kullanılan bant normal bant değildir — <strong>akrilik bazlı, UV dayanımlı, endüstriyel kalitede</strong> yapışkanı olan özel banttır. Sıcak, soğuk ve nemde yapışkanlığını korur. 2 yıl garanti ile gelir.",
          ],
        },
        {
          h2: "Yapışkanlı Montaj Avantajları",
          paragraphs: [
            "<em><strong>Yapıştırmalı plise perde</strong></em> sisteminin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Delmesiz — çerçevede hiçbir hasar yok",
              "Kiracı dostu — ev sahibi izni gerekmez",
              "Hızlı montaj — tek pencere 10 dakikada monte edilir",
              "İz bırakmaz — ısı ile sökülüp temizlenir",
              "PVC'ye mükemmel — PVC çerçevede en güçlü yapışma",
              "Gizli montaj — profil arkasından yapışır, görünmez",
            ],
          },
        },
        {
          h2: "Yapışkanlı Montazda Kullanılan Bant",
          paragraphs: [
            "Yapışkanlı montajda bant kalitesi belirleyicidir. Bizim kullandığımız bant özellikleri:",
          ],
          table: {
            headers: ["Özellik", "Değer"],
            rows: [
              ["Tip", "Çift taraflı akrilik bant"],
              ["Kalınlık", "1.0 mm"],
              ["Yapışma gücü", "25 kg/cm²"],
              ["UV dayanımı", "5+ yıl"],
              ["Sıcaklık aralığı", "-20°C / +80°C"],
              ["Garanti", "2 yıl"],
            ],
          },
        },
        {
          h2: "Yapışkanlı Montaj Süreci",
          paragraphs: [
            "<em><strong>Yapıştırmalı plise perde</strong></em> montajı 4 adımda yapılır:",
          ],
          list: {
            type: "ol",
            items: [
              "Çerçeve temizliği — alkol ile yağ ve toz arındırılır",
              "Bant yapıştırma — profil arkasına bant yapıştırılır",
              "Profil montajı — profil çerçeveye bastırılarak sabitlenir",
              "Kumaş germe ve test — ip mekanizması ayarlanır, kontrol edilir",
            ],
          },
        },
        {
          h2: "Hangi Çerçeve Tiplerine Uygun?",
          paragraphs: [
            "Yapışkanlı montaj <strong>her çerçeve tipine</strong> uygulanabilir, ancak yapışma performansı çerçeve malzemesine göre değişir:",
          ],
          list: {
            type: "ul",
            items: [
              "PVC çerçeve — mükemmel yapışma, en uygun yüzey",
              "Alüminyum çerçeve — çok iyi yapışma, temiz yüzey gerekir",
              "Ahşap çerçeve — iyi yapışma, boyasız yüzey tercih edilir",
              "Boyalı çerçeve — iyi yapışma, boya sağlamsa sorun yok",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Yapışkanlı montaj ne kadar dayanır?",
          answer: "Endüstriyel kalitede akrilik bant ile 2 yıl garanti ile gelir. Doğru yüzey hazırlığı ile 5+ yıl sağlam durur. Bant UV dayanımlı, sıcak ve soğukta yapışkanlığını korur.",
        },
        {
          question: "Yapışkanlı montaj sökülünce iz bırakır mı?",
          answer: "Hayır, doğru sökme yöntemi ile iz bırakmaz. Yapıştırıcı ısı (saç kurutma makinesi) ile yumuşatılıp temizlenir. Çerçeve ilk günkü gibi olur.",
        },
        {
          question: "Yapışkanlı montaz ağır kumaş için uygun mu?",
          answer: "Hafif ve orta ağırlıktaki kumaşlar (tül, güneşlik, yarı karartma) için uygundur. Ağır kumaşlar (honeycomb, tam karartma, motorlu) için vidalı montaj önerilir.",
        },
        {
          question: "Kiracılar için yapışkanlı montaj uygun mu?",
          answer: "Evet, yapışkanlı montaj kiracılar için en ideal seçenektir. Delme yapılmaz, ev sahibi izni gerekmez ve taşınırken iz bırakmadan sökülür.",
        },
        {
          question: "Yapışkanlı montaj fiyatı ne kadar?",
          answer: "Yapışkanlı montaj, vidalı montaja göre daha ekonomiktir. Daha az işçilik ve malzeme gerektirir. Fiyat detayı için WhatsApp'tan iletişime geçebilirsiniz.",
        },
      ]}
    />
  );
}
