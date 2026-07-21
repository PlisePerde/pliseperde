import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Kancalı Plise Perde — Sökülür Takılır Montaj Sistemi",
  description:
    "Kancalı plise perde: kanca-profil sistemi ile sökülüp takılabilen montaj. Temizlik için pratik, delmesiz, kiracı dostu. 2 yıl garanti.",
  slug: "kancali-plise-perde",
});

export default function KancaliPlisePerdePage() {
  return (
    <PageTemplate
      title="Kancalı Plise Perde"
      description="Kancalı plise perde: kanca-profil sistemi ile sökülüp takılabilen montaj. Temizlik için pratik, delmesiz."
      slug="kancali-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sistemlerimiz", url: "/plise-perde-sistemleri" }, { name: "Kancalı Plise Perde", url: "/kancali-plise-perde" }]}
      h1="Kancalı Plise Perde"
      intro="Kancalı plise perde, pencere çerçevesine takılan kanca profili ve perdenin üzerindeki kanca sistemi ile çalışan bir montaj tipidir. Perde saniyeler içinde sökülüp takılır — temizlik için en pratik çözümdür. Delme yapılmaz, vida kullanılmaz. Kiracılar için idealdir. Hafif ve orta ağırlıktaki kumaşlar için uygundur. 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Kancalı Plise Perde",
        description: "Kanca-profil sistemi ile sökülüp takılabilen plise perde montajı.",
      }}
      sections={[
        {
          h2: "Kancalı Montaj Nedir?",
          paragraphs: [
            "Kancalı montajda iki parça çalışır: <strong>pencere çerçevesine sabitlenen kanca profili</strong> ve <strong>perdenin arkasındaki kanca sistemi</strong>. Perde, kancaları kanca profiline oturtularak takılır. Sökmek için ise yukarı kaldırıp çıkarmak yeterlidir.",
            "Bu sistem, perdeyi <em>sık sık sök-tak yapacaklar</em> için tasarlanmıştır. Temizlik, boyama veya taşınma durumunda perde saniyeler içinde çıkarılır ve aynı kolaylıkla geri takılır.",
          ],
        },
        {
          h2: "Kancalı Montaj Avantajları",
          paragraphs: [
            "Kancalı montajın başlıca avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Sök-tak pratik — saniyeler içinde çıkar ve takılır",
              "Temizlik dostu — perde sökülüp yıkanabilir",
              "Delmesiz — çerçevede delik açılmaz",
              "Kiracı dostu — ev sahibi izni gerekmez",
              "Güvenli sabitleme — kanca profili sağlam tutar",
              "Reposition — perdeyi farklı pencereye taşıyabilirsiniz",
            ],
          },
        },
        {
          h2: "Kancalı vs Yapışkanlı Montaj",
          paragraphs: [
            "Her ikisi de delmesiz montaj tipleridir, ancak çalışma prensipleri farklıdır:",
          ],
          table: {
            headers: ["Özellik", "Kancalı", "Yapışkanlı"],
            rows: [
              ["Sökme", "Saniyeler, kaldır-çıkar", "Isı ile, biraz zaman"],
              ["Takma", "Oturt-bas", "Yeni bant gerekir"],
              ["Temizlik", "Çok kolay, sık sök-tak", "Orta, bant değişimi"],
              ["İz bırakma", "Hiç iz olmaz", "Minimal, temizlenir"],
              ["Yük kapasitesi", "Orta", "Orta"],
            ],
          },
        },
        {
          h2: "Kancalı Montaj Süreci",
          paragraphs: [
            "Kancalı montaj <strong>4 adımda</strong> tamamlanır:",
          ],
          list: {
            type: "ol",
            items: [
              "Çerçeve temizliği — kanca profilinin yapışacağı yüzey hazırlanır",
              "Kanca profili montajı — kanca profili çerçeveye yapıştırılır veya vidalanır",
              "Perde kanca montajı — perdenin arkasına kancalar takılır",
              "Perde takma — perde kancaları kanca profiline oturtulur ve test edilir",
            ],
          },
        },
        {
          h2: "Hangi Durumlarda Kancalı Montaj Seçilmeli?",
          paragraphs: [
            "Kancalı montaj aşağıdaki durumlarda en doğru seçimdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Sık temizlik — perdeyi düzenli söküp yıkayacaksanız",
              "Mevsimlik kullanım — yazın tak, kışın kaldır",
              "Kiracı — delmesiz ve iz bırakmaz",
              "Çocuk odası — perdeyi çocuğun erişiminden korumak için",
              "Geçici montaj — taşınma ihtimali varsa",
              "Çerçeve boyama — perde sökülüp çerçeve boyanabilir",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Kancalı montaj ne kadar sağlam?",
          answer: "Kancalı montaj, kanca profili çerçeveye yapıştırıldığında çok sağlamdır. Perde kancaları profiline oturtulduğunda yerinden oynamaz. Hafif ve orta ağırlıktaki kumaşlar için idealdir.",
        },
        {
          question: "Kancalı montajda perde düşer mi?",
          answer: "Hayır, doğru takıldığında perde düşmez. Kancalar profiline tam oturduğunda güvenli şekilde sabitlenir. Test montajı ile sağlamlık kontrol edilir.",
        },
        {
          question: "Kancalı montaz temizlik için pratik mi?",
          answer: "Evet, kancalı montaj temizlik için en pratik seçenektir. Perde saniyeler içinde sökülür, yıkanır ve aynı kolaylıkla geri takılır. Düzenli temizlik yapacaksanız kancalı montaj önerilir.",
        },
        {
          question: "Kancalı montaz kanca profili iz bırakır mı?",
          answer: "Kanca profili yapıştırıcı ile takıldıysa, sökülürken ısı ile yumuşatılıp temizlenir, minimal iz kalır. Vidalı kanca profili kullanılırsa vida delikleri kalır. Yapışkanlı versiyon önerilir.",
        },
        {
          question: "Kancalı montaz hangi kumaşlar için uygun?",
          answer: "Hafif ve orta ağırlıktaki kumaşlar (tül, güneşlik, yarı karartma) için uygundur. Ağır kumaşlar (honeycomb, tam karartma, motorlu) için vidalı montaj önerilir.",
        },
      ]}
    />
  );
}
