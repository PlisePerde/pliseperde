import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Vidasız Plise Perde — Delmesiz Montaj Sistemi",
  description:
    "Vidasız plise perde: delme olmadan monte edilen sistem. Yapışkanlı veya kancalı montaj ile kiracı dostu. 2 yıl garanti, profesyonel montaj.",
  slug: "vidasiz-plise-perde",
});

export default function VidasizPlisePerdePage() {
  return (
    <PageTemplate
      title="Vidasız Plise Perde"
      description="Vidasız plise perde: delme olmadan monte edilen sistem. Yapışkanlı veya kancalı montaj ile kiracı dostu."
      slug="vidasiz-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sistemlerimiz", url: "/plise-perde-sistemleri" }, { name: "Vidasız Plise Perde", url: "/vidasiz-plise-perde" }]}
      h1="Vidasız Plise Perde"
      intro="Vidasız plise perde, pencere çerçevesine delme yapılmadan monte edilen sistemdir. Yapışkanlı veya kancalı montaj ile uygulanır. Kiracılar için ideal — pencerede iz bırakmaz, söküldüğünde çerçeve temiz kalır. Hafif ve orta ağırlıktaki kumaşlar için uygundur. 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Vidasız Plise Perde",
        description: "Delmesiz montaj sistemi ile takılan plise perde. Kiracı dostu, iz bırakmaz.",
      }}
      sections={[
        {
          h2: "Vidasız Montaj Nedir?",
          paragraphs: [
            "Vidasız montaj, plise perde profilinin pencere çerçevesine <strong>delme yapılmadan</strong> sabitlendiği yöntemdir. İki alt tipi vardır: yapışkanlı montaj ve kancalı montaj.",
            "Yapışkanlı montajda çift taraflı bant veya özel yapıştırıcı kullanılır. Kancalı montajda ise pencere çerçevesine takılan kanca/profil sistemi ile perde sabitlenir. Her iki yöntemde de çerçevede delik açılmaz.",
          ],
        },
        {
          h2: "Vidasız Montaj Tipleri",
          paragraphs: [
            "Vidasız montajın iki ana tipi farklı ihtiyaçlara cevap verir:",
          ],
          table: {
            headers: ["Tip", "Yöntem", "Sökme", "Kullanım"],
            rows: [
              ["Yapışkanlı", "Çift taraflı bant/yapıştırıcı", "Kolay, iz bırakmaz", "Hafif kumaş"],
              ["Kancalı", "Kanca-profil sistemi", "Çok kolay, saniyeler", "Hafif-orta kumaş"],
            ],
          },
        },
        {
          h2: "Vidasız Montaj Avantajları",
          paragraphs: [
            "Vidasız montajın başlıca avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Delmesiz — pencere çerçevesinde delik açılmaz",
              "Kiracı dostu — söküldüğünde iz bırakmaz",
              "Hızlı montaj — vidalı montaja göre daha kısa sürer",
              "Esnek — istendiğinde kolayca sökülüp takılır",
              "Temizlik dostu — perde sökülüp yıkanabilir",
              "Çocuk güvenliği — sağlam yapışkan ile sabit durur",
            ],
          },
        },
        {
          h2: "Hangi Durumlarda Vidasız Montaj Seçilmeli?",
          paragraphs: [
            "Vidasız montaj aşağıdaki durumlarda en doğru seçimdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Kira evi — ev sahibi izni gerekmez",
              "Hafif kumaş — tül, güneşlik, yarı karartma",
              "Geçici montaj — taşınma ihtimali varsa",
              "Temizlik ihtiyacı — perdeyi sık sök-tak yapacaksanız",
              "PVC çerçeve — yapışkanlı montaj PVC'ye mükemmel yapışır",
              "Çocuk odası — delmesiz montaj ile güvenli",
            ],
          },
        },
        {
          h2: "Vidasız Montazda Dikkat Edilmesi Gerekenler",
          paragraphs: [
            "Vidasız montajda yüzey hazırlığı kritiktir. <strong>Çerçeve temiz ve kuru olmalıdır</strong> — yağ, toz veya nem yapışkan performansını düşürür. Montaj öncesi çerçeve alkol ile temizlenir.",
            "Yapışkanlı montajda kullanılan bant/yapıştırıcı kalitesi belirleyicidir. Bizim kullandığımız yapıştırıcılar <em>endüstriyel kalitede</em> ve 2 yıl garanti ile gelir. Ucuz yapıştırıcılar zamanla bırakır.",
          ],
        },
      ]}
      faqItems={[
        {
          question: "Vidasız montaj ne kadar dayanır?",
          answer: "Kaliteli yapıştırıcı ile vidasız montaj 2 yıl garanti ile gelir. Doğru yüzey hazırlığı ile yıllar boyu sağlam durur. Endüstriyel kalitede yapıştırıcı kullanırız.",
        },
        {
          question: "Vidasız montaj sökülünce iz bırakır mı?",
          answer: "Hayır, doğru sökme yöntemi ile çerçevede iz kalmaz. Yapıştırıcı ısı ile yumuşatılıp temizlenir. Kancalı montajda ise hiç iz olmaz.",
        },
        {
          question: "Vidasız montaz ağır kumaş için uygun mu?",
          answer: "Ağır kumaşlar (honeycomb, tam karartma, motorlu) için vidalı montaj önerilir. Vidasız montaj hafif ve orta ağırlıktaki kumaşlar için idealdir.",
        },
        {
          question: "Kiracılar için vidasız montaj uygun mu?",
          answer: "Evet, vidasız montaj kiracılar için en uygun seçenektir. Delme yapılmadığı için ev sahibi izni gerekmez ve taşınırken iz bırakmadan sökülür.",
        },
        {
          question: "Vidasız montaj fiyatı vidalıdan farklı mı?",
          answer: "Vidasız montaj vidalı montaja göre biraz daha ekonomiktir. Malzeme ve işçilik açısından daha az adım içerir.",
        },
      ]}
    />
  );
}
