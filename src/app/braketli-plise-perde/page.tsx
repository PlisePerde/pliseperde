import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Braketli Plise Perde — Bracket Montaj Sistemi",
  description:
    "Braketli plise perde: bracket ile pencere çerçevesine sabitlenen montaj sistemi. Sağlam, esnek, her çerçeve tipine uygun. 2 yıl garanti.",
  slug: "braketli-plise-perde",
});

export default function BraketliPlisePerdePage() {
  return (
    <PageTemplate
      title="Braketli Plise Perde"
      description="Braketli plise perde: bracket ile pencere çerçevesine sabitlenen montaj sistemi. Sağlam, esnek, her çerçeve tipine uygun."
      slug="braketli-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sistemlerimiz", url: "/plise-perde-sistemleri" }, { name: "Braketli Plise Perde", url: "/braketli-plise-perde" }]}
      h1="Braketli Plise Perde"
      intro="Braketli plise perde, perde profilinin pencere çerçevesine bracket (köşebent) ile sabitlendiği montaj sistemidir. Bracket'lar çerçevenin iç yüzeyine vidalanır veya yapıştırılır, ardından perde profili bracket'lara oturtulur. Sağlamlık ve esneklik dengesi sunar — vidalı montaj kadar sağlam, kancalı montaj kadar esnektir. Her çerçeve tipine uygulanabilir. 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Braketli Plise Perde",
        description: "Bracket (köşebent) ile pencere çerçevesine sabitlenen plise perde montaj sistemi.",
      }}
      sections={[
        {
          h2: "Braketli Montaj Nedir?",
          paragraphs: [
            "Braketli montajda, pencere çerçevesine önce <strong>bracket'lar (köşebentler)</strong> sabitlenir. Bracket'lar vidalı veya yapışkanlı olabilir. Ardından plise perde profili bu bracket'ların üzerine oturtulur ve sabitlenir.",
            "Bu sistem, perdenin <em>bracket'lardan çıkarılarak</em> sökülmesini sağlar. Vidalı montaj kadar sağlamdır çünkü bracket çerçeveye vidalanır. Ancak perde profilini sökmek için vidaları açmak gerekmez — bracket üzerindeki kilidi açmak yeterlidir.",
          ],
        },
        {
          h2: "Braketli Montaj Avantajları",
          paragraphs: [
            "Braketli montajın başlıca avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Sağlam — bracket çerçeveye vidalanır, yüksek yük taşır",
              "Esnek — perde bracket'tan çıkarılarak sökülür",
              "Temizlik dostu — perde sökülüp temizlenebilir",
              "Ağır kumaş desteği — bracket yükü dengeler",
              "Her çerçeveye uygun — PVC, alüminyum, ahşap",
              "Gizli bracket — bracket profil altında kalır, görünmez",
            ],
          },
        },
        {
          h2: "Braketli vs Diğer Montaj Tipleri",
          paragraphs: [
            "Braketli montaj diğer tiplerle karşılaştırıldığında:",
          ],
          table: {
            headers: ["Özellik", "Braketli", "Vidalı", "Kancalı"],
            rows: [
              ["Sağlamlık", "Yüksek", "En yüksek", "Orta"],
              ["Sökme kolaylığı", "Kolay", "Zor", "Çok kolay"],
              ["Ağır kumaş", "Uygun", "En uygun", "Az uygun"],
              ["Temizlik", "İyi", "Zor", "Çok iyi"],
              ["Çerçeve hasarı", "Az (vida)", "Var (vida)", "Yok"],
            ],
          },
        },
        {
          h2: "Braketli Montaj Süreci",
          paragraphs: [
            "Braketli montaj <strong>5 adımda</strong> yapılır:",
          ],
          list: {
            type: "ol",
            items: [
              "Ölçü ve bracket yerleri belirlenir — her 40-50 cm'de bir bracket",
              "Bracket'lar çerçeveye vidalanır veya yapıştırılır",
              "Profil kesilir ve bracket aralığına göre ayarlanır",
              "Profil bracket'lara oturtulur ve kilitlenir",
              "Kumaş germe ve test — ip mekanizması ayarlanır",
            ],
          },
        },
        {
          h2: "Hangi Durumlarda Braketli Montaj Seçilmeli?",
          paragraphs: [
            "Braketli montaj aşağıdaki durumlarda en doğru seçimdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Sağlamlık + esneklik — vidalı kadar sağlam ama sökülebilir",
              "Ağır kumaş + temizlik — honeycomb perdeyi söküp temizlemek",
              "Geniş pencere — bracket aralığı geniş pencerede destek sağlar",
              "Motorlu sistem — motor ağırlığı için bracket desteği",
              "Kararsız kullanıcı — hem sağlam hem sökülebilir olsun",
              "Profesyonel kullanım — ofis, otel, sık bakım gereken mekan",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Braketli montaj vidalıdan farkı nedir?",
          answer: "Braketli montajda bracket çerçeveye vidalanır ama perde profil bracket'a kilitlenir. Vidalı montajda profil direkt çerçeveye vidalanır. Braketli montajda perdeyi sökmek için vidaları açmak gerekmez, bracket kilidi açılır.",
        },
        {
          question: "Braketli montaz ağır kumaş için uygun mu?",
          answer: "Evet, braketli montaz ağır kumaşlar (honeycomb, tam karartma, motorlu) için uygundur. Bracket'lar yükü çerçeveye dengeli dağıtır. Vidalı montaja en yakın alternatiftir.",
        },
        {
          question: "Braketli montazda perde sökülüp temizlenir mi?",
          answer: "Evet, braketli montazda perde bracket kilidi açılarak sökülür. Temizlik sonrası aynı kolaylıkla geri takılır. Vidalı montaja göre temizlik açısından daha avantajlıdır.",
        },
        {
          question: "Bracket'lar görünür mü?",
          answer: "Hayır, bracket'lar profil altında kalır ve görünmez. Profil takıldığında bracket gizlenir. Estetik açıdan temiz bir görünüm sağlar.",
        },
        {
          question: "Braketli montaz kaç bracket kullanılır?",
          answer: "Genellikle her 40-50 cm'de bir bracket kullanılır. Pencere genişliğine göre bracket sayısı değişir. 100 cm pencerede 2-3 bracket, 150 cm pencerede 3-4 bracket kullanılır.",
        },
      ]}
    />
  );
}
