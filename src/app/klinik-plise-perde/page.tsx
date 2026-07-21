import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Klinik Plise Perde — Muayene Gizlilik, Bekleme Işık Kontrolü, Hijyenik",
  description:
    "Klinik için plise perde: muayene odası gizlilik, bekleme alanı ışık kontrolü, hijyenik kumaş, kolay temizlik. Montaj dahil, 2 yıl garanti.",
  slug: "klinik-plise-perde",
});

export default function KlinikPlisePerdePage() {
  return (
    <PageTemplate
      title="Klinik Plise Perde"
      description="Klinik için plise perde: muayene gizlilik, bekleme ışık kontrolü, hijyenik."
      slug="klinik-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Kullanım Alanları", url: "/plise-perde-kullanim-alanlari" }, { name: "Klinik", url: "/klinik-plise-perde" }]}
      h1="Klinik Plise Perde"
      intro="Klinik ve muayenehanelerde <strong>hasta gizliliği ve hijyen</strong> en kritik iki faktördür. Muayene odasında dışarıdan görünmemek, bekleme alanında rahatlatıcı ışık ve tüm mekanda kolay temizlik gereklidir. Plise perde, <strong>tam karartma kumaş ile muayene odasında tam gizlilik</strong>, bekleme alanında güneşlik ile soft ışık ve hijyenik kumaş ile kolay dezenfeksiyon sağlar. Pencere içine takıldığı için klinikte dar alan yaratmaz, tıbbi ekipmana engel olmaz."
      schemaType="service"
      schemaData={{
        name: "Klinik Plise Perde",
        description: "Klinik için muayene gizlilik, bekleme ışık kontrolü plise perde.",
      }}
      sections={[
        {
          h2: "Klinik Alanlarına Göre Perde İhtiyacı",
          paragraphs: [
            "Kliniğin farklı alanları <strong>farklı öncelikler</strong> gerektirir:",
          ],
          table: {
            headers: ["Alan", "Önerilen Kumaş", "Öncelik", "Özel Not"],
            rows: [
              ["Muayene odası", "Tam karartma", "Hasta gizliliği", "Anti-bakteriyel"],
              ["Bekleme alanı", "Güneşlik", "Rahatlatıcı ışık", "Dayanıklı"],
              ["Röntgen/görüntüleme", "Tam karartma", "Tam karanlık", "Özel kumaş"],
              ["Laboratuvar", "Güneşlik + kimyasal dayanım", "Işık + dayanım", "Özel"],
              ["Resepsiyon", "Güneşlik", "Profesyonel görünüm", "Manuel"],
              ["Tedavi odası", "Yarı karartma", "Soft ışık + gizlilik", "Anti-bakteriyel"],
            ],
          },
        },
        {
          h2: "Muayene Odasında Gizlilik",
          paragraphs: [
            "Muayene odasında <strong>tam gizlilik</strong> hasta hakları gereğidir:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Tam karartma kumaş</strong> — dışarıdan içerisi tamamen görünmez",
              "<strong>Pencere içi montaj</strong> — perde pencerede sabit, aralık kalmaz",
              "<strong>Kolay kontrol</strong> — tek elle açma/kapama, doktor pratik",
              "<strong>Anti-bakteriyel</strong> — hijyenik kumaş, kolay dezenfeksiyon",
              "<strong>Sessiz çalışma</strong> — muayene sırasında perde açma sessiz",
            ],
          },
        },
        {
          h2: "Bekleme Alanında Atmosfer",
          paragraphs: [
            "Bekleme alanında <strong>rahatlatıcı atmosfer</strong> hasta deneyimini iyileştirir:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Güneşlik kumaş</strong> — ışığı filtreler, yumuşak aydınlatma",
              "<strong>Doğal tonlar</strong> — bej, krem, açık yeşil ile sakinleştirici etki",
              "<strong>Kademeli açma</strong> — günün saatine göre ışık ayarı",
              "<strong>Dayanıklı mekanizma</strong> — sık kullanım için güçlendirilmiş",
              "<strong>Kolay temizlik</strong> — hastalar dokunabilir, silinebilir kumaş",
            ],
          },
        },
        {
          h2: "Klinik Plise Perde Fiyat Aralığı",
          paragraphs: [
            "Klinik pencereleri genellikle <strong>standart boyutta</strong> olur:",
          ],
          table: {
            headers: ["Alan", "Pencere Ölçüsü", "Kumaş", "Fiyat Aralığı"],
            rows: [
              ["Muayene odası (1 pencere)", "120x150 cm", "Tam karartma + anti-bakteriyel", "2.520-3.600 TL"],
              ["Bekleme alanı (2 pencere)", "2x 150x180 cm", "Güneşlik", "5.400-8.100 TL"],
              ["Röntgen odası (1 pencere)", "100x120 cm", "Tam karartma", "1.680-2.400 TL"],
              ["Tüm klinik (5-8 pencere)", "Karışık", "Karışık", "12.000-25.000 TL"],
            ],
          },
        },
        {
          h2: "Klinik İçin Hijyenik Özellikler",
          paragraphs: [
            "Klinik ortamında <strong>hijyenik özellikler</strong>:",
          ],
          list: {
            type: "ul",
            items: [
              "<strong>Anti-bakteriyel kumaş</strong> — bakteri üremesi engellenir",
              "<strong>Dezenfektan dayanımı</strong> — çamaşır suyu ile silinebilir",
              "<strong>Toz tutmaz</strong> — düz yüzey, partikül tutmaz",
              "<strong>İp mekanizması yok</strong> — hijyenik, temizliği kolay",
              "<strong>Pencere içi montaj</strong> — zeminde perde dökümü yok, temizlik kolay",
              "<strong>Bakım anlaşması</strong> — yıllık bakım ve dezenfeksiyon kontrolü",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Klinik muayene odası için hangi perde?",
          answer: "Tam karartma + anti-bakteriyel plise perde önerilir. Dışarıdan tamamen görünmezlik sağlar, hijyenik kumaş ile kolay dezenfeksiyon. Pencere içine takılır, dar alanda yer kaplamaz.",
        },
        {
          question: "Klinik bekleme alanı için perde önerisi?",
          answer: "Güneşlik kumaş önerilir. Işığı filtreler, rahatlatıcı atmosfer yaratır. Doğal tonlar (bej, krem) ile sakinleştirici etki. Dayanıklı mekanizma ile sık kullanıma uygun.",
        },
        {
          question: "Klinik plise perde fiyatı ne kadar?",
          answer: "Muayene odası (120x150 cm) için 2.520-3.600 TL, bekleme alanı (2 pencere) için 5.400-8.100 TL. Tüm klinik (5-8 pencere) için 12.000-25.000 TL aralığındadır.",
        },
        {
          question: "Klinik perdesi dezenfektan ile temizlenir mi?",
          answer: "Evet, anti-bakteriyel kumaş yüzeyi çamaşır suyu ve dezenfektan ile silinebilir. Kumaş dezenfektana dayanıklıdır, sık silmeye rağmen özelliğini korur.",
        },
      ]}
    />
  );
}
