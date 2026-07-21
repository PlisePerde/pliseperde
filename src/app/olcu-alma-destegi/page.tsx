import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Ölçü Alma Desteği — Doğru Ölçü Rehberi",
  description:
    "Plise perde ölçü alma desteği. Doğru ölçü alma adımları, yaygın hatalar, özel form pencereler için ölçü. Ücretsiz keşif hizmeti.",
  slug: "olcu-alma-destegi",
});

export default function OlcuAlmaDestegiPage() {
  return (
    <PageTemplate
      title="Plise Perde Ölçü Alma Desteği"
      description="Plise perde ölçü alma desteği. Doğru ölçü alma adımları, yaygın hatalar, özel form pencereler için ölçü."
      slug="olcu-alma-destegi"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmetlerimiz", url: "/hizmetlerimiz" }, { name: "Ölçü Alma Desteği", url: "/olcu-alma-destegi" }]}
      h1="Plise Perde Ölçü Alma Desteği"
      intro="Plise perde ölçü alma, doğru montaj için ilk ve en önemli adımdır. Milimetrik hassasiyet gerektirir. Ölçü alma desteği hizmetimiz ile profesyonel ekiplerimiz pencerenizi ölçer veya size rehberlik eder. Yanlış ölçü, perdenin pencereye oturmamasına ve maliyet kaybına yol açar. Doğru ölçü için bu rehberi takip edin veya ücretsiz keşif talep edin."
      schemaType="service"
      schemaData={{
        name: "Plise Perde Ölçü Alma Desteği",
        description: "Plise perde için doğru ölçü alma adımları ve profesyonel ölçü alma hizmeti.",
        serviceType: "Ölçü Alma",
      }}
      sections={[
        {
          h2: "Plise Perde Ölçüsü Nasıl Alınır?",
          paragraphs: [
            "Ölçü alma <strong>3 noktadan</strong> yapılır: üst genişlik, orta genişlik ve alt genişlik. Aynı şekilde yükseklik de sol, orta ve sağ olarak 3 noktadan ölçülür. <em>En küçük değer</em> baz alınır.",
            "Pencere çerçevesi tam düz olmayabilir. <u>3 noktadan ölçü</u> almak, pencerenin eğri olmasını hesaba katar. En küçük değer, perdenin pencereye sorunsuz oturmasını sağlar.",
          ],
          table: {
            headers: ["Ölçü Noktası", "Nereden", "Nereye"],
            rows: [
              ["Üst genişlik", "Sol üst iç kenar", "Sağ üst iç kenar"],
              ["Orta genişlik", "Sol orta iç kenar", "Sağ orta iç kenar"],
              ["Alt genişlik", "Sol alt iç kenar", "Sağ alt iç kenar"],
              ["Sol yükseklik", "Sol üst iç kenar", "Sol alt iç kenar"],
              ["Sağ yükseklik", "Sağ üst iç kenar", "Sağ alt iç kenar"],
            ],
          },
        },
        {
          h2: "Ölçü Alma Araçları",
          paragraphs: [
            "Doğru ölçü için <strong>çelik metre</strong> ve kalem gerekir. Kumaş metre esnediği için hatalı ölçü verir. Çelik metre ile milimetrik hassasiyet sağlanır.",
          ],
          list: {
            type: "ul",
            items: [
              "Çelik metre — 3-5 metre uzunlukta",
              "Kalem ve kağıt — ölçüleri not etmek için",
              "İki kişi — büyük pencerelerde yardım gerekir",
              "Mercek — küçük detayları görmek için",
              "Su terazisi — çerçeve düzlüğü kontrolü",
            ],
          },
        },
        {
          h2: "Yaygın Ölçü Hataları",
          paragraphs: [
            "En yaygın hata <strong>tek noktadan ölçü</strong> almaktır. Pencere eğriyse perde oturmaz. İkinci hata, çerçeve dışından ölçmektir. <em>İç kenarlardan</em> ölçü alın.",
          ],
          table: {
            headers: ["Hata", "Sonuç", "Çözüm"],
            rows: [
              ["Tek nokta ölçü", "Perde oturmaz", "3 noktadan ölç"],
              ["Dış kenar ölçü", "Perde büyük gelir", "İç kenardan ölç"],
              ["Kumaş metre", "Esneme hatalı", "Çelik metre kullan"],
              ["Kuşkulu not", "Ölçü karışır", "Net yaz, foto çek"],
            ],
          },
        },
        {
          h2: "Özel Form Pencereler İçin Ölçü",
          paragraphs: [
            "Üçgen, kemer ve çatı pencereleri için <strong>ekstra ölçü</strong> gerekir. Standart ölçü yeterli değildir. Bu pencerelerde profesyonel keşif önerilir.",
          ],
          list: {
            type: "ol",
            items: [
              "Taban genişliği ölçülür — en alt nokta",
              "Tepe noktası belirlenir — en yüksek nokta",
              "Yükseklik ölçülür — taban ile tepe arası",
              "Açı ölçülür — üçgen pencerelerde",
              "Fotoğraf çekilir — referans için",
            ],
          },
        },
        {
          h2: "Ücretsiz Keşif Hizmeti",
          paragraphs: [
            "Ölçü almaktan emin değilseniz <strong>ücretsiz keşif</strong> talep edin. Profesyonel ekibimiz gelir, ölçü alır ve fiyat teklifi sunar. İstanbul içinde ücretsizdir.",
          ],
          list: {
            type: "ul",
            items: [
              "İstanbul içi — ücretsiz keşif",
              "Çevre şehirler — ücretsiz keşif",
              "Diğer şehirler — video ile uzaktan ölçü desteği",
              "Keşif sonrası — net fiyat teklifi",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Plise perde ölçüsü nasıl alınır?",
          answer: "Üst, orta ve alttan genişlik; sol, orta ve sağdan yükseklik ölçülür. En küçük değer baz alınır. Çelik metre ile iç kenarlardan milimetrik ölçü alınır.",
        },
        {
          question: "Ölçü alırken nelere dikkat edilmeli?",
          answer: "3 noktadan ölçü alın, iç kenarlardan ölçün, çelik metre kullanın ve net not alın. Pencere eğri olabilir, tek nokta ölçü hatalı sonuç verir.",
        },
        {
          question: "Özel form pencere için nasıl ölçü alınır?",
          answer: "Üçgen, kemer ve çatı pencereleri için ekstra ölçü gerekir. Taban genişliği, tepe noktası, yükseklik ve açı ölçülür. Profesyonel keşif önerilir.",
        },
        {
          question: "Ücretsiz keşif hizmeti var mı?",
          answer: "Evet, İstanbul ve çevre şehirlerde ücretsiz keşif yapılır. Profesyonel ekip gelir, ölçü alır ve net fiyat teklifi sunar. Diğer şehirlerde video ile uzaktan ölçü desteği sağlanır.",
        },
        {
          question: "Yanlış ölçü verirsem ne olur?",
          answer: "Perde pencereye oturmaz ve yeniden üretim gerekir. Bu nedenle emin değilseniz ücretsiz keşif talep edin. Profesyonel ekip milimetrik hassasiyetle ölçü alır.",
        },
      ]}
    />
  );
}
