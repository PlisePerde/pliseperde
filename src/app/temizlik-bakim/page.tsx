import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Temizlik ve Bakım — Temizlik Rehberi",
  description:
    "Plise perde temizlik ve bakım rehberi. Doğru temizlik yöntemi, bakım ipuçları, uzun ömür için dikkat edilecekler. Üretici garantisi.",
  slug: "temizlik-bakim",
});

export default function TemizlikBakimPage() {
  return (
    <PageTemplate
      title="Temizlik ve Bakım"
      description="Plise perde temizlik ve bakım rehberi. Doğru temizlik yöntemi, bakım ipuçları, uzun ömür için dikkat edilecekler."
      slug="temizlik-bakim"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmetlerimiz", url: "/hizmetlerimiz" }, { name: "Temizlik ve Bakım", url: "/temizlik-bakim" }]}
      h1="Plise Perde Temizlik ve Bakım"
      intro="Plise perde temizlik ve bakım, ürünün ömrünü uzatan önemli bir süreçtir. Doğru temizlik yöntemi kumaşı korur, mekanizmayı düzgün çalıştırır. Yanlış temizlik kumaşı yıpratır, rengini solabilir ve mekanizmayı bozar. Bu rehberde plise perdenizi yıllarca ilk günkü gibi kullanmak için yapmanız gerekenleri anlatıyoruz."
      schemaType="service"
      schemaData={{
        name: "Plise Perde Temizlik ve Bakım",
        description: "Plise perde için doğru temizlik yöntemi ve bakım ipuçları.",
        serviceType: "Temizlik ve Bakım",
      }}
      sections={[
        {
          h2: "Plise Perde Nasıl Temizlenir?",
          paragraphs: [
            "Temizlik <strong>nemli bez ile silme</strong> yöntemiyle yapılır. Kumaşı çıkarıp yıkamak önerilmez. <em>30 derece ılık su</em> ve hafif deterjan ile nemli bez yeterlidir.",
            "Toz alma için <u>kuru mikrofiber bez</u> kullanın. Haftada bir toz almak, kumaşın parlaklığını korur. Nemli silme ayda bir yapılır.",
          ],
          table: {
            headers: ["Temizlik Tipi", "Sıklık", "Yöntem"],
            rows: [
              ["Toz alma", "Haftada bir", "Kuru mikrofiber bez"],
              ["Nemli silme", "Ayda bir", "Nemli bez + hafif deterjan"],
              ["Derin temizlik", "Yılda bir", "Profesyonel temizlik"],
              ["Mekanizma", "6 ayda bir", "Kuru bez + yağsız sprey"],
            ],
          },
        },
        {
          h2: "Temizlikte Yapılmaması Gerekenler",
          paragraphs: [
            "Yanlış temizlik <strong>kumaşa kalıcı zarar</strong> verebilir. Aşağıdaki yöntemleri kesinlikle kullanmayın.",
          ],
          list: {
            type: "ul",
            items: [
              "Makine yıkaması — kumaşı yıpratır",
              "Sıcak su — kumaşı büzer",
              "Çamaşır suyu — rengi solatır",
              "Fırça — kumaşı çizer",
              "Buharlı temizlik — mekanizmaya zarar verir",
              "Kimyasal çözücü — kumaşı eritir",
            ],
          },
        },
        {
          h2: "Mekanizma Bakımı",
          paragraphs: [
            "İp mekanizması <strong>6 ayda bir</strong> bakım ister. İp yıprandığında veya sertleştiğinde değiştirilmelidir. Mekanizma kanalına toz birikirse <em>kuru bez ile temizleyin</em>.",
          ],
          list: {
            type: "ol",
            items: [
              "İp mekanizmasını kontrol edin — yıpranma var mı",
              "Kanalı kuru bez ile temizleyin — toz çıkarın",
              "İp yağsız sprey ile hafif yağlayın — teflon sprey",
              "Açılır kapanır test yapın — düzgün çalışıyor mu",
              "Sertlik varsa servis talep edin — ücretsiz garanti",
            ],
          },
        },
        {
          h2: "Kumaş Bakımı",
          paragraphs: [
            "Kumaşın ömrünü uzatmak için <strong>güneşe aşırı maruziyetten</strong> kaçının. UV korumalı kumaş seçimi bu konuda avantaj sağlar. Kumaşı sıkı katlamak <em>pile yapısını bozar</em>.",
          ],
          table: {
            headers: ["Bakım", "Sıklık", "Önemi"],
            rows: [
              ["Toz alma", "Haftalık", "Parlaklık koruma"],
              ["Nemli silme", "Aylık", "Lekesiz görünüm"],
              ["İp kontrolü", "6 aylık", "Mekanizma ömrü"],
              ["UV koruma", "Sürekli", "Renk solması önleme"],
            ],
          },
        },
        {
          h2: "Profesyonel Temizlik Hizmeti",
          paragraphs: [
            "Yılda bir <strong>profesyonel temizlik</strong> öneririz. Ekibimiz kumaşı çıkarır, özel solüsyon ile temizler ve geri takar. 50-100 TL/pencere fiyatla yapılır.",
          ],
          list: {
            type: "ul",
            items: [
              "Yıllık profesyonel temizlik — 50-100 TL/pencere",
              "Kumaş çıkarılır — özel solüsyon ile",
              "Mekanizma bakımı — ip ve kanal temizliği",
              "Geri takım — profesyonel montaj",
              "Garanti kapsamında — mekanizma sorunları",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde nasıl temizlenir?",
          answer: "Nemli bez ile silme yöntemiyle temizlenir. 30 derece ılık su ve hafif deterjan ile nemli bez yeterlidir. Toz alma için kuru mikrofiber bez kullanın. Makine yıkaması önerilmez.",
        },
        {
          question: "Plise perde makinede yıkanır mı?",
          answer: "Hayır, makine yıkaması kumaşı yıpratır ve pile yapısını bozar. Nemli bez ile silme yeterlidir. Derin temizlik için profesyonel temizlik hizmeti alın.",
        },
        {
          question: "Plise perde ip mekanizması nasıl bakım yapılır?",
          answer: "6 ayda bir ip mekanizmasını kontrol edin. Kanalı kuru bez ile temizleyin, ip yağsız teflon sprey ile hafif yağlayın. Sertlik veya yıpranma varsa servis talep edin.",
        },
        {
          question: "Plise perde temizliği ne kadar sürer?",
          answer: "Tek pencere toz alma 5 dakika, nemli silme 10 dakika sürer. Profesyonel temizlik 30-45 dakikada tüm ev yapılır.",
        },
        {
          question: "Profesyonel temizlik hizmeti var mı?",
          answer: "Evet, yılda bir profesyonel temizlik öneririz. Ekibimiz kumaşı çıkarır, özel solüsyon ile temizler ve geri takar. 50-100 TL/pencere fiyatla yapılır.",
        },
      ]}
    />
  );
}
