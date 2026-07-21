import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Galeri — Plise Perde Uygulama Fotoğrafları",
  description:
    "Plise perde galeri. Uygulama fotoğrafları, montaj örnekleri, renk seçenekleri. Gerçek proje görüntüleri.",
  slug: "galeri",
});

export default function GaleriPage() {
  return (
    <PageTemplate
      title="Galeri"
      description="Plise perde galeri. Uygulama fotoğrafları, montaj örnekleri, renk seçenekleri."
      slug="galeri"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kurumsal", url: "/hakkimizda" }, { name: "Galeri", url: "/galeri" }]}
      h1="Galeri — Plise Perde Uygulamaları"
      intro="Galerimizde plise perde uygulamalarımızın fotoğraflarını bulabilirsiniz. Gerçek projelerden çekilmiş görüntüler ile farklı model, renk ve montaj tiplerini inceleyebilirsiniz. Salon, yatak odası, cam balkon ve ofis gibi farklı kullanım alanlarındaki uygulama örneklerimizi görebilirsiniz. Fotoğraflar, ürünlerin gerçek görünümünü yansıtır."
      schemaType="article"
      schemaData={{
        headline: "Galeri — Plise Perde Uygulama Fotoğrafları",
        description: "Plise perde uygulama fotoğrafları, montaj örnekleri, renk seçenekleri.",
      }}
      sections={[
        {
          h2: "Salon Uygulamaları",
          paragraphs: [
            "Salon uygulamalarımızda <strong>tül ve honeycomb modelleri</strong> ağırlıklı olarak kullanıyoruz. <em>Doğal aydınlatma ve estetik görünüm</em> salon perdesinde önceliklidir.",
          ],
          list: {
            type: "ul",
            items: [
              "Tül plise perde — doğal ışık için",
              "Honeycomb petek — ısı yalıtımı için",
              "Gece gündüz — esnek kullanım için",
              "Motorlu — geniş pencere için",
              "Portrayli — estetik görünüm için",
            ],
          },
        },
        {
          h2: "Yatak Odası Uygulamaları",
          paragraphs: [
            "Yatak odası uygulamalarında <strong>tam karartma modeli</strong> en çok tercih edilen seçenektir. <em>Uyku kalitesi</em> için tam karanlık ortam sağlar.",
          ],
          table: {
            headers: ["Model", "Kullanım", "Özellik"],
            rows: [
              ["Tam karartma", "Uyku odası", "%99 ışık kesme"],
              ["Gece gündüz", "Esnek kullanım", "Gündüz ışık gece karartma"],
              ["Honeycomb", "Isı + ses", "Çift petek yalıtım"],
              ["Motorlu", "Konfor", "Uzaktan kumanda"],
            ],
          },
        },
        {
          h2: "Cam Balkon Uygulamaları",
          paragraphs: [
            "Cam balkon uygulamalarında <strong>az yer kaplayan modeller</strong> tercih edilir. <em>Honeycomb ve sineklik</em> cam balkon için ideal kombinasyondur.",
          ],
          list: {
            type: "ul",
            items: [
              "Honeycomb petek — ısı yalıtımı",
              "Sineklik — böcek engeli",
              "Tül — doğal aydınlatma",
              "Güneşlik — güneş filtreleme",
              "Vidasız montaj — kiracı dostu",
            ],
          },
        },
        {
          h2: "Ofis Uygulamaları",
          paragraphs: [
            "Ofis uygulamalarında <strong>güneşlik ve motorlu modeller</strong> tercih edilir. <em>Ekran parlamasını azaltır</em> ve profesyonel görünüm sunar.",
          ],
          list: {
            type: "ol",
            items: [
              "Güneşlik — ekran parlaması azaltır",
              "Motorlu — toplantı odası kontrolü",
              "Honeycomb — ses yalıtımı",
              "Tam karartma — projeksiyon odası",
              "Portrayli — profesyonel görünüm",
            ],
          },
        },
        {
          h2: "Renk Seçenekleri",
          paragraphs: [
            "Galerimizde <strong>3 ana renk seçeneği</strong> mevcuttur. <em>Beyaz, antrasit ve ahşap desen</em> ile her iç mekan tasarımına uyum sağlanır.",
          ],
          table: {
            headers: ["Renk", "Uygun Tarz", "Kullanım"],
            rows: [
              ["Beyaz", "Modern, minimalist", "Her oda"],
              ["Antrasit", "İndüstriyel, modern", "Salon, ofis"],
              ["Ahşap desen", "Doğal, sıcak", "Yatak odası, salon"],
              ["Krem", "Klasik, sıcak", "Yatak odası"],
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Galeride gerçek proje fotoğrafları mı var?",
          answer: "Evet, galerimizde gerçek projelerden çekilmiş fotoğraflar bulunmaktadır. Salon, yatak odası, cam balkon ve ofis uygulamalarının gerçek görüntülerini inceleyebilirsiniz.",
        },
        {
          question: "Hangi renk seçenekleri mevcut?",
          answer: "Beyaz, antrasit, ahşap desen ve krem olmak üzere 4 ana renk seçeneği mevcuttur. Her iç mekan tasarımına uygun renk bulunur.",
        },
        {
          question: "Galeriyi ziyaret edebilir miyim?",
          answer: "Evet, Pendik'teki üretim tesisimizi randevu ile ziyaret edebilirsiniz. Ürünleri yerinde inceleyebilir, kumaş ve renk seçeneklerini görebilirsiniz.",
        },
        {
          question: "Salon için hangi model önerilir?",
          answer: "Salon için tül (doğal aydınlatma), honeycomb (ısı yalıtımı) ve gece gündüz (esnek kullanım) modelleri önerilir. Geniş pencerede motorlu model tercih edilebilir.",
        },
        {
          question: "Cam balkon için hangi model uygun?",
          answer: "Cam balkon için honeycomb (ısı yalıtımı) ve sineklik (böcek engeli) kombinasyonu idealdir. Az yer kaplayan modeller cam balkonda avantaj sağlar.",
        },
      ]}
    />
  );
}
