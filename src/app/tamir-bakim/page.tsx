import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Tamir ve Bakım — Onarım Hizmeti",
  description:
    "Plise perde tamir ve bakım hizmeti. İp değişimi, mekanizma tamiri, kumaş onarımı. Garanti kapsamında ücretsiz. İstanbul ve Türkiye geneli.",
  slug: "tamir-bakim",
});

export default function TamirBakimPage() {
  return (
    <PageTemplate
      title="Tamir ve Bakım"
      description="Plise perde tamir ve bakım hizmeti. İp değişimi, mekanizma tamiri, kumaş onarımı. Garanti kapsamında ücretsiz."
      slug="tamir-bakim"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmetlerimiz", url: "/hizmetlerimiz" }, { name: "Tamir ve Bakım", url: "/tamir-bakim" }]}
      h1="Plise Perde Tamir ve Bakım"
      intro="Plise perde tamir ve bakım hizmeti ile ürününüzü ilk günkü gibi kullanın. İp kopması, mekanizma arızası, kumaş sarkması ve profil gevşemesi gibi sorunlar profesyonel ekibimiz tarafından onarılır. Garanti kapsamındaki onarımlar tamamen ücretsizdir. İstanbul içinde servis ekibi adresinize gelir, diğer şehirlerde kargo ile servis yapılır."
      schemaType="service"
      schemaData={{
        name: "Plise Perde Tamir ve Bakım",
        description: "Plise perde tamir, onarım ve bakım hizmeti.",
        serviceType: "Tamir ve Bakım",
      }}
      sections={[
        {
          h2: "Tamir Hizmetleri",
          paragraphs: [
            "Tamir hizmetleri <strong>5 ana kategori</strong> altında toplanır. Her tamir profesyonel ekip tarafından yapılır ve <em>6 ay servis garantisi</em> verilir.",
          ],
          table: {
            headers: ["Tamir Tipi", "Süre", "Garanti İçi"],
            rows: [
              ["İp değişimi", "15-20 dk", "Evet (2 yıl)"],
              ["Mekanizma tamiri", "20-30 dk", "Evet (2 yıl)"],
              ["Kumaş onarımı", "30-45 dk", "Hayır"],
              ["Profil sıkıştırma", "10-15 dk", "Evet (2 yıl)"],
              ["Motor tamiri", "45-60 dk", "Evet (5 yıl)"],
            ],
          },
        },
        {
          h2: "İp Mekanizması Tamiri",
          paragraphs: [
            "İp kopması <strong>en sık karşılaşılan sorun</strong>. İp yıprandığında veya aşırı çekildiğinde kopar. <em>15-20 dakikada</em> değiştirilir. Garanti kapsamındaysa ücretsizdir.",
          ],
          list: {
            type: "ol",
            items: [
              "Eski ip çıkarılır — mekanizma kanalından",
              "Kanal temizlenir — toz ve kalıntı çıkarılır",
              "Yeni ip takılır — orijinal kalitede",
              "İp gerilir — mekanizma ayarlanır",
              "Açılır kapanır test edilir",
            ],
          },
        },
        {
          h2: "Kumaş Onarımı",
          paragraphs: [
            "Kumaş sarkması, yırtılması ve <strong>pile yapısı bozulması</strong> onarılır. Hafif hasarlar yerinde tamir edilir, ağır hasarlarda kumaş değiştirilir.",
          ],
          list: {
            type: "ul",
            items: [
              "Kumaş sarkması — germe ve ayarlama",
              "Yırtık — küçük yırtık yerinde tamir",
              "Büyük yırtık — kumaş değişimi",
              "Pile bozulması — yeniden pileleme",
              "Renk solması — kumaş yenileme",
            ],
          },
        },
        {
          h2: "Profil ve Montaj Tamiri",
          paragraphs: [
            "Profil gevşemesi, <strong>vida çözülmesi</strong> ve kanal kayması tamir edilir. Vidalı montajda profil zamanla gevşeyebilir. <em>10-15 dakikada</em> sıkıştırılır.",
          ],
          table: {
            headers: ["Sorun", "Tamir", "Süre"],
            rows: [
              ["Profil gevşesi", "Vida sıkıştırma", "10 dk"],
              ["Vida çözülmesi", "Yeni vida + dübel", "15 dk"],
              ["Kanal kayması", "Kanal yeniden montaj", "20 dk"],
              ["Yapışkan çözülmesi", "Yeni bant + montaj", "15 dk"],
              ["Kanca kırılması", "Kanca değişimi", "10 dk"],
            ],
          },
        },
        {
          h2: "Servis Talebi",
          paragraphs: [
            "Servis için <strong>WhatsApp'tan</strong> fotoğraf ve sorun açıklaması gönderin. İstanbul içinde ekip adresinize gelir, diğer şehirlerde kargo ile servis yapılır.",
          ],
          list: {
            type: "ol",
            items: [
              "WhatsApp'tan sorun fotoğrafı gönderin",
              "Sorun açıklaması ve adres belirtilir",
              "Garanti kontrolü yapılır — ücretsiz mi?",
              "İstanbul: ekip gelir — 1-2 gün",
              "Diğer şehirler: kargo ile — 3-5 gün",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde tamiri ne kadar sürer?",
          answer: "İp değişimi 15-20 dakika, mekanizma tamiri 20-30 dakika, kumaş onarımı 30-45 dakika, profil sıkıştırma 10-15 dakika sürer. Motor tamiri 45-60 dakikadır.",
        },
        {
          question: "Garanti kapsamında tamir ücretsiz mi?",
          answer: "Evet, 2 yıl garanti kapsamında ip kopması, mekanizma arızası, profil gevşemesi ve kumaş yırtılması ücretsiz tamir edilir. Motor 5 yıl garanti kapsamındadır.",
        },
        {
          question: "Tamir için servis nasıl talep edilir?",
          answer: "WhatsApp'tan sorun fotoğrafı ve açıklaması gönderin. İstanbul içinde ekip 1-2 gün içinde adresinize gelir. Diğer şehirlerde kargo ile 3-5 günde servis yapılır.",
        },
        {
          question: "İp kopması nasıl tamir edilir?",
          answer: "Eski ip çıkarılır, kanal temizlenir, yeni orijinal ip takılır ve gerilir. 15-20 dakikada tamir edilir. Garanti kapsamındaysa tamamen ücretsizdir.",
        },
        {
          question: "Kumaş sarkması nasıl düzeltilir?",
          answer: "Kumaş germe ve ayarlama ile düzeltilir. İp mekanizması yeniden ayarlanır. Hafif sarkma yerinde tamir edilir, ağır sarkmada kumaş değiştirilebilir.",
        },
      ]}
    />
  );
}
