import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Yedek Parça — Orijinal ve Uyumlu",
  description:
    "Plise perde yedek parça: kumaş, profil, ip mekanizması, kanal, klips. Orijinal ve uyumlu parça tedariki. Türkiye geneli kargo.",
  slug: "plise-perde-yedek-parca",
});

export default function PlisePerdeYedekParcaPage() {
  return (
    <PageTemplate
      title="Plise Perde Yedek Parça"
      description="Plise perde yedek parça: kumaş, profil, ip mekanizması, kanal, klips. Orijinal ve uyumlu parça tedarimi."
      slug="plise-perde-yedek-parca"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Ürünlerimiz", url: "/urunlerimiz" }, { name: "Plise Perde Yedek Parça", url: "/plise-perde-yedek-parca" }]}
      h1="Plise Perde Yedek Parça"
      intro="Plise perde yedek parça tedariki yapıyoruz. Kumaş, profil, ip mekanizması, kanal, klips ve tüm bileşenler için orijinal ve uyumlu seçenekler mevcuttur. Perdenizi yenilemenize gerek yok — sadece değişen parçayı tedarik ederek perdenizi yeniden çalışır hale getiririz. Türkiye geneli kargo ile gönderim yapılır. 2 yıl garanti."
      schemaType="product"
      schemaData={{
        name: "Plise Perde Yedek Parça",
        description: "Plise perde yedek parça tedarimi: kumaş, profil, ip, kanal, klips.",
      }}
      sections={[
        {
          h2: "Yedek Parça Çeşitleri",
          paragraphs: [
            "Plise perde sistemindeki <strong>tüm bileşenler</strong> için yedek parça tedarik edilir.",
          ],
          table: {
            headers: ["Parça", "Değişim Nedeni", "Garanti"],
            rows: [
              ["Kumaş", "Yırtılma, lekelenme, renk solması", "2 yıl"],
              ["Profil (üst/alt)", "Kırılma, eğilme", "2 yıl"],
              ["İp mekanizması", "Kopma, sıkışma", "2 yıl"],
              ["Kanal", "Deformasyon, renk değişimi", "2 yıl"],
              ["Klips/tutucu", "Kırılma, gevşeme", "2 yıl"],
              ["Portray", "Kırılma, renk solması", "2 yıl"],
            ],
          },
        },
        {
          h2: "Kumaş Yenileme",
          paragraphs: [
            "Kumaş yenileme, perdenizin <strong>görünümünü tamamen değiştirir</strong>. Eski kumaşı söküp yeni kumaş takarak perdenizi yenileriz. Profil ve mekanizma sağlamsa sadece kumaş değişimi yapılır.",
            "Kumaş seçenekleri: tül, güneşlik, yarı karartma, tam karartma. Renk seçenekleri: beyaz, krem, gri, bej ve daha fazlası.",
          ],
        },
        {
          h2: "Parça Siparişi",
          paragraphs: [
            "Yedek parça siparişi için <strong>perde markanızı, ölçünüzü ve sorununuzu</strong> bilmemiz gerekir. Fotoğraf göndererek de doğru parçayı tespit edebiliriz.",
          ],
          list: {
            type: "ol",
            items: [
              "Perde fotoğrafını WhatsApp'tan gönderin",
              "Marka, ölçü ve sorun bilgisini verin",
              "Uygun parça tespit edilir",
              "Fiyat teklifi sunulur",
              "Onay sonrası kargo ile gönderim",
              "Video kurulum desteği sağlanır",
            ],
          },
        },
        {
          h2: "Servis ve Onarım",
          paragraphs: [
            "İstanbul'da <strong>yerinde servis</strong> hizmeti veriyoruz. Parça değişimi, kumaş yenileme ve mekanizma onarımı yapılır. Diğer şehirlerde kargo + video destek ile çözüm sunarız.",
          ],
          list: {
            type: "ul",
            items: [
              "İstanbul — yerinde servis (ücretsiz keşif)",
              "Kocaeli, Yalova, Sakarya — yerinde servis",
              "Diğer şehirler — kargo + video destek",
              "2 yıl garanti tüm parçalarda geçerli",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde yedek parça nereden alabilirim?",
          answer: "Bizden direkt tedarik edebilirsiniz. WhatsApp'tan perde fotoğrafını ve sorun bilgisini gönderin, doğru parçayı tespit edip kargo ile gönderelim.",
        },
        {
          question: "Sadece kumaş değişimi yapılır mı?",
          answer: "Evet, profil ve mekanizma sağlamsa sadece kumaş değişimi yapılır. Kumaş seçenekleri: tül, güneşlik, yarı karartma, tam karartma.",
        },
        {
          question: "Yedek parça garantisi var mı?",
          answer: "Evet, tüm yedek parçalar 2 yıl garanti ile verilir. Garanti kapsamında üretim hataları karşılanır.",
        },
        {
          question: "İstanbul dışında servis var mı?",
          answer: "İstanbul'da yerinde servis yapılır. Diğer şehirlerde kargo ile parça gönderilir ve video kurulum desteği sağlanır.",
        },
        {
          question: "Parça uyumlu mu olur?",
          answer: "Perde markanızı ve ölçünüzü bildiğimizde uyumlu parçayı tespit ederiz. Fotoğraf göndererek uyum teyidi yapılır.",
        },
      ]}
    />
  );
}
