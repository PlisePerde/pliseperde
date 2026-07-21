import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Ölçü Alma Bilgilendirmesi",
  description: "Plise perde ölçü alma bilgilendirmesi. Ölçü yöntemi, tolerans, sorumluluk.",
  slug: "olcu-alma-bilgilendirmesi",
});

export default function OlcuAlmaBilgilendirmesiPage() {
  return (
    <PageTemplate
      title="Ölçü Alma Bilgilendirmesi"
      description="Plise perde ölçü alma bilgilendirmesi. Ölçü yöntemi, tolerans, sorumluluk."
      slug="olcu-alma-bilgilendirmesi"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sözleşmelerimiz", url: "/sozlesmelerimiz" }, { name: "Ölçü Alma Bilgilendirmesi", url: "/olcu-alma-bilgilendirmesi" }]}
      h1="Ölçü Alma Bilgilendirmesi"
      intro="Bu sayfa, plise perde ölçü alma sürecine dair bilgilendirmeyi içerir. Ölçü alma yöntemi, toleranslar, sorumluluk alanları ve dikkat edilmesi gereken noktalar burada detaylandırılır. Doğru ölçü, ürünün doğru oturması için kritiktir."
      schemaType="article"
      schemaData={{ headline: "Ölçü Alma Bilgilendirmesi", description: "Ölçü yöntemi ve tolerans." }}
      sections={[
        {
          h2: "Ölçü Alma Yöntemi",
          paragraphs: ["Ölçü <strong>çerçeve iç yüzeyinden</strong> alınır. <em>Milimetrik hassasiyet</em> gereklidir."],
          list: { type: "ol", items: ["Genişlik — sol çerçeve içinden sağ çerçeve içine", "Yükseklik — üst çerçeve içinden alt çerçeve içine", "Üç noktadan ölç — en küçük değer kullanılır", "Milimetre cinsinden not edilir"] },
        },
        {
          h2: "Toleranslar",
          paragraphs: ["Ölçüde <strong>tolerans</strong> bırakılır."],
          table: { headers: ["Montaj", "Tolerans", "Neden"], rows: [["Çerçeve içi", "-2 mm", "Profil oturumu"], ["Çerçeve dışı", "+50 mm", "Örtme payı"], ["Duvar içi", "-3 mm", "Sıkı oturum"]] },
        },
        {
          h2: "Sorumluluk",
          paragraphs: ["Ölçü sorumluluğu <strong>kim tarafından alındığına</strong> göre değişir."],
          list: { type: "ul", items: ["Profesyonel keşif — ölçü tarafımızdan, sorumluluk bize ait", "Kendi ölçünüz — ölçü tarafınızdan, sorumluluk size ait", "Video keşif — ölçü tarafımızdan, rehberli"] },
        },
        {
          h2: "Ölçü Hatası Durumunda",
          paragraphs: ["Ölçü hatası <strong>sorumluluğa göre</strong> çözülür."],
          list: { type: "ol", items: ["Bizim hatamız — ücretsiz yeniden üretim", "Sizin hatanız — yeniden üretim ücretli", "Kısmi uyum — ayar ile düzeltme", "Tam uyumsuzluk — yeniden üretim"] },
        },
        {
          h2: "Öneri",
          paragraphs: ["Doğru ölçü için <strong>profesyonel keşif</strong> önerilir."],
          list: { type: "ul", items: ["Ücretsiz keşif — İstanbul ve çevre", "Video keşif — diğer şehirler", "Milimetrik ölçü — profesyonel ekip", "Montaj tipi önerisi — uzman görüşü"] },
        },
      ]}
      faqItems={[
        { question: "Ölçüyü kendim alabilir miyim?", answer: "Evet, çelik metre ile alabilirsiniz. Üç noktadan ölçün ve en küçük değeri kullanın. Ancak profesyonel keşif önerilir." },
        { question: "Ölçü hatası olursa ne olur?", answer: "Bizim hatamız ise ücretsiz yeniden üretim yapılır. Sizin hatanız ise yeniden üretim ücretlidir. Bu yüzden profesyonel keşif önerilir." },
        { question: "Tolerans ne kadar bırakılır?", answer: "Çerçeve içi montajda -2 mm, çerçeve dışı montajda +50 mm, duvar içi montajda -3 mm tolerans bırakılır." },
        { question: "Profesyonel keşif ücretli mi?", answer: "Hayır, İstanbul ve çevre şehirlerde ücretsiz keşif yapılır. Diğer şehirlerde video keşif desteği mevcuttur." },
        { question: "Ölçü hangi birimde alınır?", answer: "Milimetre cinsinden alınır. 0.5 mm hassasiyet ile ölçüm yapılmalıdır." },
      ]}
    />
  );
}
