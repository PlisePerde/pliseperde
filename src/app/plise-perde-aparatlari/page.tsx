import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Aparatları — Montaj ve Kontrol",
  description:
    "Plise perde aparatları: profil, kanal, ip mekanizması, tutucu, klips. Yedek aparat tedariki. Üretici garantisi, Türkiye geneli kargo.",
  slug: "plise-perde-aparatlari",
});

export default function PlisePerdeAparatlariPage() {
  return (
    <PageTemplate
      title="Plise Perde Aparatları"
      description="Plise perde aparatları: profil, kanal, ip mekanizması, tutucu, klips. Yedek aparat tedariki."
      slug="plise-perde-aparatlari"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Ürünlerimiz", url: "/urunlerimiz" }, { name: "Plise Perde Aparatları", url: "/plise-perde-aparatlari" }]}
      h1="Plise Perde Aparatları"
      intro="Plise perde aparatları, perdenin düzgün çalışması için gereken tüm parçaları kapsar. Profil, kanal, ip mekanizması, tutucu, klips ve daha fazlası. Yedek aparat tedariki yapıyoruz — perdenizi söküp atmanıza gerek yok. Uyumlu aparat ile perdenizi yeniden çalışır hale getiririz. Türkiye geneli kargo ile gönderim yapılır."
      schemaType="product"
      schemaData={{
        name: "Plise Perde Aparatları",
        description: "Plise perde yedek aparatları: profil, kanal, ip mekanizması, tutucu, klips.",
      }}
      sections={[
        {
          h2: "Aparat Çeşitleri",
          paragraphs: [
            "Plise perde sisteminde kullanılan <strong>tüm aparatlar</strong> tedarik edilir. Orijinal ve uyumlu seçenekler mevcuttur.",
          ],
          table: {
            headers: ["Aparat", "Fonksiyon", "Uyum"],
            rows: [
              ["Üst profil", "Kumaşı üstte tutar", "Tüm markalar"],
              ["Alt profil", "Kumaşı altta tutar", "Tüm markalar"],
              ["Kanal", "Profilin rayı", "Alüminyum / PVC"],
              ["İp mekanizması", "Açma-kapama ipi", "2.5mm / 3mm"],
              ["Tutucu klips", "Perdeyi sabitler", "Vidalı / yapışkanlı"],
              ["Portray", "İnce profil kapağı", "Beyaz / renkli"],
            ],
          },
        },
        {
          h2: "Hangi Aparata İhtiyacınız Var?",
          paragraphs: [
            "Perdenizdeki soruna göre ihtiyaç duyduğunuz aparat değişir. <strong>Yaygın sorunlar ve çözümleri:</strong>",
          ],
          list: {
            type: "ul",
            items: [
              "Perde açılmıyor → ip mekanizması değişimi",
              "Perde sarkıyor → alt profil veya kanal değişimi",
              "Perde düşüyor → tutucu klips değişimi",
              "Profil kırıld → üst/alt profil değişimi",
              "Kumaş kenarı yırtıldı → profil + kumaş onarımı",
            ],
          },
        },
        {
          h2: "Aparat Siparişi",
          paragraphs: [
            "Aparat siparişi için <strong>perde markanızı ve ölçünüzü</strong> bilmemiz gerekir. Fotoğraf göndererek de doğru aparatı tespit edebiliriz.",
          ],
          list: {
            type: "ol",
            items: [
              "Perde fotoğrafını WhatsApp'tan gönderin",
              "Marka ve ölçü bilgisi verin",
              "Uygun aparat tespit edilir",
              "Kargo ile gönderim yapılır",
              "Video kurulum desteği sağlanır",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde aparatı nereden alabilirim?",
          answer: "Bizden direkt tedarik edebilirsiniz. WhatsApp'tan perde fotoğrafını gönderin, doğru aparatı tespit edip kargo ile gönderelim.",
        },
        {
          question: "Aparat uyumlu mu olur?",
          answer: "Evet, perde markanızı ve ölçünüzü bildiğimizde uyumlu aparatı tespit ederiz. Fotoğraf göndererek de uyum teyidi yapılır.",
        },
        {
          question: "İp mekanizması değişimi ne kadar?",
          answer: "İp mekanizması fiyatı kalınlığına (2.5mm/3mm) göre değişir. WhatsApp'tan iletişime geçerek güncel fiyat öğrenebilirsiniz.",
        },
        {
          question: "Aparat kurulumu zor mu?",
          answer: "Çoğu aparat değişimi basittir. Video kurulum desteği sağlıyoruz. İhtiyaç halinde İstanbul'da yerinde servis yapılır.",
        },
        {
          question: "Türkiye geneli kargo var mı?",
          answer: "Evet, tüm Türkiye'ye kargo ile aparat gönderimi yapıyoruz. Kargo ücreti aparat tutarına göre değişir.",
        },
      ]}
    />
  );
}
