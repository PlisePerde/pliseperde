import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Anaokulu Plise Perde — Çocuk Güvenliği, Renkli, Eğlenceli",
  description:
    "Anaokulu için plise perde: çocuk güvenliği, ip mekanizması yok, renkli ve eğlenceli kumaş, nem dayanımlı, kolay temizlik. Montaj dahil, 2 yıl garanti.",
  slug: "anaokulu-plise-perde",
});

export default function AnaokuluPlisePerdePage() {
  return (
    <PageTemplate
      title="Anaokulu Plise Perde"
      description="Anaokulu için çocuk güvenli, renkli, eğlenceli plise perde."
      slug="anaokulu-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Anaokulu", url: "/anaokulu-plise-perde" }]}
      h1="Anaokulu Plise Perde"
      intro="Anaokullarında <strong>çocuk güvenliği</strong> en üst önceliktir. Klasik perde sistemlerindeki ip ve kordon mekanizmaları, küçük çocuklar için strangülasyon riski taşır. Ayrıca anaokulu pencereleri sık sık kirlenir — çocuklar pencereye dokunur, el izi bırakır ve boya/cam boyası ile perdeyi kirletir. Plise perde, <strong>ip mekanizması kullanmaz</strong>, renkli ve eğlenceli kumaş seçenekleri ile sınıf atmosferini iyileştirir, nem dayanımlı ve kolay silinebilir kumaş ile hijyenik kalır."
      schemaType="service"
      schemaData={{
        name: "Anaokulu Plise Perde",
        description: "Anaokulu için çocuk güvenli, renkli plise perde.",
      }}
      sections={[
        {
          h2: "Anaokulunda Çocuk Güvenliği",
          paragraphs: [
            "Anaokulunda perde seçiminde <strong>güvenlik kuralları</strong>:",
          ],
          list: {
            type: "ol",
            items: [
              "<strong>İp/kordon yok</strong> — plise perde ip kullanmaz, strangülasyon riski sıfır",
              "<strong>Sabit montaj</strong> — perde profili sağlam takılır, çocuk çekince düşmez",
              "<strong>Pencere içi</strong> — perde pencere içinde, çocuk erişimi zor",
              "<strong>Teleskopik kol</strong> — kısa boşluğa güvenli kontrol mekanizması",
              "<strong>Çocuk kilidi</strong> — mekanizmayı kilitleyerek çocuğun açmasını engelleme",
            ],
          },
        },
        {
          h2: "Anaokulu Sınıflarına Göre Çözümler",
          paragraphs: [
            "Anaokulunun farklı alanları <strong>farklı ihtiyaç</strong> gerektirir:",
          ],
          table: {
            headers: ["Alan", "Önerilen Kumaş", "Öncelik", "Özel Not"],
            rows: [
              ["Sınıf (etkinlik)", "Yarı karartma + renkli", "Soft ışık + eğlence", "Çocuk güvenliği"],
              ["Uyku odası", "Tam karartma + renkli", "Gündüz uykusu karanlık", "Sessiz mekanizma"],
              ["Oyun alanı", "Tül / güneşlik", "Bol ışık", "Dayanıklı mekanizma"],
              ["Yemekhane", "Güneşlik + nem dayanım", "Işık + temizlik", "Kolay silme"],
              ["Tuvalet/banyo", "Tam karartma + nem dayanım", "Gizlilik + nem", "Anti-bakteriyel"],
              ["Bahça kapısı", "Güneşlik", "Dış mekan bağlantısı", "Dayanıklı"],
            ],
          },
        },
        {
          h2: "Renkli ve Eğlenceli Kumaş Seçenekleri",
          paragraphs: [
            "Anaokulunda perde <strong>sınıf atmosferinin</strong> parçasıdır:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Pastel renkler</strong> — pembe, mavi, sarı, yeşil; yumuşak ve huzurlu",
              "<strong>Desenli kumaş</strong> — yıldız, bulut, hayvan, balon figürleri",
              "<strong>Eğitici desen</strong> — harf, rakam, geometrik şekil deseni",
              "<strong>Mevsimlik tema</strong> — ilkbahar, yaz, sonbahar, kış temalı desenler",
              "<strong>Anti-bakteriyel</strong> — hijyenik kumaş, çocuk sağlığı",
              "<strong>Kolay temizlik</strong> — boya ve el izi silinebilir kumaş",
            ],
          },
        },
        {
          h2: "Anaokulu Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Anaokulu pencereleri genellikle <strong>standart boyutta</strong> olur:",
          ],
          table: {
            headers: ["Alan", "Pencere Adedi", "Kumaş", "Fiyat Aralığı"],
            rows: [
              ["Tek sınıf (3 pencere)", "3x 120x150 cm", "Yarı karartma + renkli", "6.480-9.720 TL"],
              ["Uyku odası (2 pencere)", "2x 120x150 cm", "Tam karartma + renkli", "5.040-7.200 TL"],
              ["Tüm anaokulu (20+ pencere)", "20+ pencere", "Karışık", "40.000-80.000 TL"],
            ],
          },
        },
        {
          h2: "Anaokulu İçin Hijyen ve Dayanıklılık",
          paragraphs: [
            "Anaokulunda <strong>hijyen ve dayanıklılık</strong> kritiktir:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Anti-bakteriyel kumaş</strong> — çocuk sağlığı için hijyenik",
              "<strong>Kolay silme</strong> — boya, el izi, yemek lekesi silinir",
              "<strong>Nem dayanımı</strong> — banyo ve yemekhane için",
              "<strong>Dayanıklı mekanizma</strong> — çocuklar dokunur, güçlendirilmiş mekanizma",
              "<strong>Sabit montaj</strong> — perde profili sağlam, düşme riski yok",
              "<strong>Bakım anlaşması</strong> — yıllık bakım ve temizlik servisi",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Anaokulu için plise perde güvenli mi?",
          answer: "Evet, plise perde ip mekanizması kullanmaz. Strangülasyon riski sıfırdır. Pencere içine takılır, çocuk erişimi zor. Teleskopik kol ile güvenli kontrol. Anaokulu için en güvenli perde sistemidir.",
        },
        {
          question: "Anaokulu sınıfı için hangi kumaş?",
          answer: "Yarı karartma + renkli/desenli kumaş önerilir. Soft ışık ile rahat etkinlik ortamı, eğlenceli desenler ile sınıf atmosferi. Uyku odası için tam karartma + renkli kumaş.",
        },
        {
          question: "Anaokulu plise perde fiyatı ne kadar?",
          answer: "3 pencereli sınıf için 6.480-9.720 TL. 20+ pencereli tüm anaokulu için 40.000-80.000 TL aralığındadır. Toplu alımda %10-15 indirim uygulanır.",
        },
        {
          question: "Anaokulu perdesi boya ve el izini nasıl temizlenir?",
          answer: "Kumaş yüzeyi nemli bezle silinir. Boya, el izi ve yemek lekesi kolayca çıkar. Anti-bakteriyel kumaş seçeneği ile hijyenik kalır. Düzenli silme ile temizlik yeterlidir.",
        },
      ]}
    />
  );
}
