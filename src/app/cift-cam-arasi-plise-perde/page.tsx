import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Çift Cam Arası Plise Perde — Çift Cam Sistemine Özel",
  description:
    "Çift cam arası plise perde: çift camlı pencereler için özel üretim. İki cam arasında montaj, tozsuz ve sessiz çalışma. Özel ölçü üretim, 2 yıl garanti.",
  slug: "cift-cam-arasi-plise-perde",
  keywords: ["çift cam arası plise perde", "çift cam plise perde", "iki cam arası plise perde"],
});

export default function CiftCamArasiPlisePerdePage() {
  return (
    <PageTemplate
      title="Çift Cam Arası Plise Perde"
      description="Çift cam arası plise perde: çift camlı pencereler için özel üretim. İki cam arasında montaj."
      slug="cift-cam-arasi-plise-perde"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Plise Perde Sistemleri", url: "/plise-perde-sistemleri" }, { name: "Çift Cam Arası Plise Perde", url: "/cift-cam-arasi-plise-perde" }]}
      h1="Çift Cam Arası Plise Perde"
      intro="Çift cam arası plise perde, <strong>iki cam panzuru arasında</strong> monte edilen özel bir sistemdir. Çift camlı pencerelerde camlar arasındaki boşluğa plise perde yerleştirilir — perde cam arasında kalır, dışarıdan görünmez ve tozlanmaz. Isıcam sistemleri için ideal çözümdür. Özel ölçü üretim ve 2 yıl garanti ile gelir."
      schemaType="product"
      schemaData={{
        name: "Çift Cam Arası Plise Perde",
        description: "Çift camlı pencereler için iki cam arası montajlı plise perde sistemi.",
      }}
      sections={[
        {
          h2: "Çift Cam Arası Sistemi Nedir?",
          paragraphs: [
            "Çift cam arası plise perde sistemini tanımlayan en önemli özellik, perdenin <strong>iki cam arasında</strong> monte edilmesidir. Standart montajda perde pencere içine veya çerçeveye takılırken, bu sistemde perde doğrudan camlar arasındaki boşluğa yerleştirilir.",
            "Çift cam (ısıcam) pencerelerde iki cam panzuru arasında 8-20 mm boşluk bulunur. Çift cam arası plise perde, bu boşluğa özel olarak üretilir ve monte edilir. Perde cam arasında korumalı çalışır.",
          ],
        },
        {
          h2: "Çift Cam Arası Sistem Avantajları",
          paragraphs: [
            "Çift cam arası plise perde sisteminin avantajları:",
          ],
          list: {
            type: "ul",
            items: [
              "Tozsuz çalışma — perde cam arasında, toz ulaşamaz",
              "Sessiz çalışma — kapalı hacimde sessiz açılım",
              "Korunmalı — perde dış etkenlerden tam yalıtımlı",
              "Estetik — perde cam arasında, dışarıdan minimal görünür",
              "Uzun ömür — toz ve hasar koruması ile ömür uzar",
              "Temizlik gerektirmez — perde cam arasında, silinmesine gerek yok",
              "Cam ile uyumlu — ısıcam performansını etkilemez",
            ],
          },
        },
        {
          h2: "Çift Cam Arası vs Standart Montaj",
          paragraphs: [
            "Çift cam arası ve standart plise perde montajı arasındaki temel farklar:",
          ],
          table: {
            headers: ["Özellik", "Çift Cam Arası", "Standart Montaj"],
            rows: [
              ["Montaj yeri", "İki cam arasında", "Pencere çerçevesine"],
              ["Toz koruması", "Tam — cam arasında", "Kısmi"],
              ["Temizlik", "Gerekmez", "Düzenli gerekir"],
              ["Uygun pencere", "Çift cam (ısıcam)", "Tüm pencereler"],
              ["Montaj zamanı", "Cam üretiminde", "Sonradan"],
              ["Fiyat", "Daha yüksek", "Standart"],
            ],
          },
        },
        {
          h2: "Hangi Mekanlar İçin Uygun?",
          paragraphs: [
            "Çift cam arası plise perde <strong>aşağıdaki mekanlar</strong> için en uygun sistemdir:",
          ],
          list: {
            type: "ul",
            items: [
              "Hastane ve klinik — hijyenik, tozsuz ortam",
              "Laboratuvar — temiz çalışma alanı",
              "Ofis — düşük bakım, uzun ömür",
              "Modern ev — estetik ve minimalist",
              "Otel — düşük bakım maliyeti",
              "Okul ve kreş — dayanıklı ve korunmalı",
            ],
          },
        },
        {
          h2: "Çift Cam Arası Sistem Montajı",
          paragraphs: [
            "Çift cam arası plise perde montajı <strong>özel süreç</strong> gerektirir:",
          ],
          list: {
            type: "ol",
            items: [
              "Çift cam boşluğu ölçülür — 8-20 mm aralığında olmalı",
              "Perde, cam boşluğuna göre özel üretilir",
              "Cam üretim aşamasında perde camlar arasına yerleştirilir",
              "Profil, cam çerçevesine özel aparat ile sabitlenir",
              "Test — açılım ve cam arası uyum test edilir",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Çift cam arası plise perde nedir?",
          answer: "Çift cam arası plise perde, iki cam panzuru arasında monte edilen özel bir sistemdir. Perde camlar arasındaki boşlukta çalışır — tozsuz, sessiz ve korunmalı. Çift cam (ısıcam) pencereler için ideal.",
        },
        {
          question: "Çift cam arası plise perde nasıl monte edilir?",
          answer: "Çift cam arası montaj, cam üretim aşamasında yapılır. Perde, camlar arasındaki boşluğa özel olarak yerleştirilir. Sonradan takılan camlarda montaj yapılamaz — cam üretiminde perde birlikte monte edilmelidir.",
        },
        {
          question: "Çift cam arası sistem standarttan daha pahalı mı?",
          answer: "Evet, çift cam arası sistem özel üretim ve cam ile birlikte monte gerektirdiği için standart montajdan daha yüksektir. Ancak toz koruması, uzun ömür ve temizlik gerektirmemesi avantajlarıyla değer katar.",
        },
        {
          question: "Çift cam arası plise perde temizlik gerektirir mi?",
          answer: "Hayır, çift cam arası plise perde temizlik gerektirmez. Perde iki cam arasında kapalı hacimde çalışır — toz ve kirlenme ulaşamaz. Cam temizliği normal şekilde yapılır, perdeye dokunulmaz.",
        },
        {
          question: "Çift cam arası plise perde hangi cam boşluğunda çalışır?",
          answer: "Çift cam arası plise perde 8-20 mm aralığında cam boşluğunda çalışır. Daha dar boşlukta perde sığmaz, daha geniş boşlukta özel üretim gerekir. Cam boşluğu ölçülerek uygun perde üretilir.",
        },
        {
          question: "Çift cam arası plise perde hastanede kullanılır mı?",
          answer: "Evet, hastane ve klinikler için ideal sistemdir. Tozsuz ve hijyenik çalışma ortamı sağlar. Temizlik gerektirmemesi bakım maliyetini düşürür. Laboratuvar ve temiz odalar için de uygundur.",
        },
      ]}
    />
  );
}
