import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Motorlu Plise Perde — Uzaktan Kumanda ve Akıllı Ev",
  description:
    "Motorlu plise perde: uzaktan kumanda, akıllı ev entegrasyonu, otomasyon. Sessiz motor, zamanlayıcı, güneş sensörü. 2 yıl garanti.",
  slug: "motorlu-plise-perde",
});

export default function MotorluPlisePerdePage() {
  return (
    <PageTemplate
      title="Motorlu Plise Perde"
      description="Motorlu plise perde: uzaktan kumanda, akıllı ev entegrasyonu, otomasyon. Sessiz motor, zamanlayıcı, güneş sensörü."
      slug="motorlu-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sistemlerimiz", url: "/plise-perde-sistemleri" }, { name: "Motorlu Plise Perde", url: "/motorlu-plise-perde" }]}
      h1="Motorlu Plise Perde"
      intro="Motorlu plise perde, perdenin açılıp kapanmasını elektrikli motor ile sağlayan otomasyon sistemidir. Uzaktan kumanda, akıllı telefon veya sesli komut ile kontrol edilir. Zamanlayıcı ve güneş sensörü ile otomatik çalışır. Sessiz motor teknolojisi ile rahatsız etmez. Geniş pencereler, yüksek tavanlar ve erişimi zor pencereler için ideal. 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Motorlu Plise Perde",
        description: "Elektrikli motor ile açılıp kapanan plise perde. Uzaktan kumanda, akıllı ev entegrasyonu.",
      }}
      sections={[
        {
          h2: "Motorlu Sistem Nedir?",
          paragraphs: [
            "Motorlu plise perde, profil içindeki <strong>tüp motor</strong> ile perdenin açılıp kapanmasını sağlar. Motor, perdenin üst profilinde gizlenir ve dışarıdan görünmez. İp mekanizması yerine motor hareketi kullanılır.",
            "Kontrol yöntemleri: <em>uzaktan kumanda, akıllı telefon uygulaması, sesli komut (Alexa/Google Home), zamanlayıcı ve güneş sensörü</em>. İstenilen kombinasyon seçilebilir.",
          ],
        },
        {
          h2: "Motorlu Sistem Avantajları",
          paragraphs: [
            "Motorlu plise perde tercih etmenizin başlıca nedenleri:",
          ],
          list: {
            type: "ul",
            items: [
              "Uzaktan kumanda — yerinizden kalkmadan perdeyi açıp kapatın",
              "Akıllı ev — telefon ve sesli komut ile kontrol",
              "Otomasyon — zamanlayıcı ile sabah aç, akşam kapat",
              "Güneş sensörü — güneş açısına göre otomatik pozisyon",
              "Sessiz motor — 35-40 dB, rahatsız etmez",
              "Çocuk güvenliği — ip yok, boğulma riski sıfır",
            ],
          },
        },
        {
          h2: "Kontrol Seçenekleri",
          paragraphs: [
            "Motorlu sistemde <strong>farklı kontrol yöntemleri</strong> mevcuttur:",
          ],
          table: {
            headers: ["Kontrol", "Yöntem", "Özellik"],
            rows: [
              ["Uzaktan kumanda", "RF kumanda", "30 m menzil, tek kumanda çoklu perde"],
              ["Akıllı telefon", "WiFi + App", "Dışarıdan kontrol, grup yönetimi"],
              ["Sesli komut", "Alexa / Google", "Ses ile aç-kapat"],
              ["Zamanlayıcı", "App içinde", "Günlük/haftalık program"],
              ["Güneş sensörü", "Sensör + motor", "Güneşe göre otomatik"],
              ["Duvar butonu", "Kablolu buton", "Fiziksel kontrol, kumandasız"],
            ],
          },
        },
        {
          h2: "Hangi Durumlarda Motorlu Sistem Seçilmeli?",
          paragraphs: [
            "Motorlu sistem aşağıdaki durumlarda en doğru seçimdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Yüksek pencere — el ile ulaşımı zor pencereler",
              "Geniş pencere — 150 cm+ genişlikte ip ile zor",
              "Çok pencere — 5+ perdeyi tek kumanda ile yönetin",
              "Akıllı ev — otomasyon sistemine entegre",
              "Ofis/ticari — toplantı odası, vitrin, showroom",
              "Hareket kısıtlı — engelli ve yaşlı kullanım kolaylığı",
            ],
          },
        },
        {
          h2: "Motor ve Güç Seçenekleri",
          paragraphs: [
            "Motorlu plise perdede <strong>iki güç tipi</strong> mevcuttur:",
          ],
          list: {
            type: "ul",
            items: [
              "Şarjlı motor — USB-C ile şarj, 6 ay şarjsız kullanım, kablo yok",
              "Kablolu motor — 220V priz bağlantısı, sürekli güç, bakımsız",
              "Tüp motor — profil içinde gizli, 24V DC güvenli voltaj",
              "Sessiz çalışma — 35-40 dB, yatak odasında rahatsız etmez",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Motorlu plise perde nasıl kontrol edilir?",
          answer: "Uzaktan kumanda, akıllı telefon, sesli komut (Alexa/Google Home), zamanlayıcı veya duvar butonu ile kontrol edilir. İhtiyacınıza göre kombinasyon seçebilirsiniz.",
        },
        {
          question: "Motorlu perde sesli mi çalışır?",
          answer: "Hayır, motorlu plise perde 35-40 dB ses seviyesinde çalışır. Bu, fısıltı seviyesine yakın sessiz bir çalışmadır. Yatak odasında bile rahatsız etmez.",
        },
        {
          question: "Şarjlı mı kablolu mu tercih etmeliyim?",
          answer: "Priz yakınında kablo yoksa şarjlı motor önerilir — 6 ay şarjsız kullanım. Priz erişimi varsa kablolu motor önerilir — bakımsız, sürekli güç. Her ikisi de 2 yıl garanti.",
        },
        {
          question: "Motorlu perde akıllı ev sistemine uyumlu mu?",
          answer: "Evet, WiFi motor ile Alexa, Google Home ve akıllı ev uygulamalarına entegre edilir. Sesli komut ve otomasyon senaryoları oluşturulabilir.",
        },
        {
          question: "Motorlu perde fiyatı ne kadar?",
          answer: "Motorlu sistem, motor ve kontrol ünitesi maliyeti nedeniyle manuel sisteme göre daha yüksektir. Şarjlı motor kabloluya göre biraz daha ekonomiktir. Fiyat detayı için WhatsApp'tan iletişime geçebilirsiniz.",
        },
      ]}
    />
  );
}
