import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Proje ve Toplu Üretim — Plise Perde",
  description:
    "Proje ve toplu üretim: otel, rezidans, ofis, hastane, okul ve ticari projeler için plise perde üretim ve montaj. Mimari çözümler, özel ölçü, toplu fiyat.",
  slug: "plise-perde-projesi",
});

export default function PlisePerdeProjesiPage() {
  return (
    <PageTemplate
      title="Proje ve Toplu Üretim"
      description="Proje ve toplu üretim hizmeti. Otel, rezidans, ofis, hastane, okul ve ticari projeler için plise perde üretim ve montaj."
      slug="plise-perde-projesi"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmetlerimiz", url: "/hizmetlerimiz/" }, { name: "Proje ve Toplu Üretim", url: "/plise-perde-projesi/" }]}
      h1="Proje ve Toplu Üretim"
      intro="Proje ve toplu üretim hizmeti ile otel, rezidans, ofis, hastane, okul ve ticari projeleriniz için plise perde üretimi ve montajı yapıyoruz. Mimari projelere özel çözümler sunar, özel ölçü üretim yapar ve toplu fiyat avantajı sağlarız. Müteahhit, mimar ve iç mimarlarla çalışırız. Projeye özel kumaş, renk ve sistem seçenekleri ile teslimden montaja kadar uçtan uca hizmet. Referans projelerimiz ve tecrübemiz ile güvenli teslimat."
      schemaType="service"
      schemaData={{
        name: "Proje ve Toplu Üretim",
        description: "Ticari ve kurumsal projeler için plise perde üretim ve montaj hizmeti. Otel, rezidans, ofis, hastane, okul projeleri.",
        serviceType: "Proje Üretimi",
        areaServed: "Türkiye",
      }}
      sections={[
        {
          h2: "Proje ve Toplu Üretim Nedir?",
          paragraphs: [
            "Proje ve toplu üretim, <strong>ticari ve kurumsal projeler</strong> için plise perde üretimi ve montajı yapmaktır. Otel, rezidans, ofis, hastane, okul, AVM ve ticari yapılarda toplu pencere sayıları için özel çözümler sunulur.",
            "Projeye özel <em>kumaş, renk, sistem ve ölçü</em> seçenekleri ile mimari projeye uyumlu üretim yapılır. Toplu üretim avantajı ile birim fiyat düşer, teslimat ve montaj tek elden yönetilir.",
          ],
          table: {
            headers: ["Proje Tipi", "Tipik Pencere Sayısı", "Özel Çözüm"],
            rows: [
              ["Otel", "100-500+", "Blackout, akıllı ev entegrasyonu"],
              ["Rezidans", "50-300", "Standart + özel ölçü"],
              ["Ofis", "30-200", "Işık kontrolü, motorlu sistem"],
              ["Hastane", "50-250", "Antibakteriyel, kolay temizlik"],
              ["Okul", "40-300", "Dayanıklı, çocuk güvenliği"],
              ["AVM / Mağaza", "20-150", "Vitrin, dekoratif"],
            ],
          },
        },
        {
          h2: "Proje Süreci",
          paragraphs: [
            "Proje süreci <strong>6 adımdan</strong> oluşur. Talep, keşif, teklif, üretim, montaj ve teslim. Tüm süreç proje yönetimi ile takip edilir.",
          ],
          list: {
            type: "ol",
            items: [
              "Proje talebi — mimari plan ve pencere listesi",
              "Yerinde keşif — ölçü ve çerçeve kontrolü",
              "Teklif — toplu fiyat ve teslimat takvimi",
              "Sözleşme — üretim ve montaj şartları",
              "Üretim — projeye özel kumaş ve sistem",
              "Montaj ve teslim — proje yönetimi ile",
            ],
          },
        },
        {
          h2: "Çalıştığımız Sektörler",
          paragraphs: [
            "Ticari ve kurumsal tüm sektörlerde plise perde projeleri yürütüyoruz. Her sektöre özel <strong>kumaş, sistem ve montaj</strong> çözümleri sunuyoruz.",
          ],
          table: {
            headers: ["Sektör", "Kumaş Önerisi", "Sistem Önerisi"],
            rows: [
              ["Otel / Tatil Köyü", "Blackout, honeycomb", "Motorlu, akıllı ev"],
              ["Rezidans / Konut", "Standart, düet", "Vidalı, portrayli"],
              ["Ofis / Plaza", "Standart, honeycomb", "Motorlu, kancalı"],
              ["Hastane / Klinik", "Antibakteriyel, blackout", "Vidalı, kolay temizlik"],
              ["Okul / Anaokulu", "Dayanıklı, çocuk güvenliği", "Vidalı, kancalı"],
              ["AVM / Mağaza", "Desenli, dekoratif", "Portrayli, vitrin"],
              ["Restoran / Kafe", "Standart, desenli", "Yapışkanlı, kancalı"],
            ],
          },
        },
        {
          h2: "Proje Avantajları",
          paragraphs: [
            "Toplu üretim ile <strong>birim fiyat avantajı</strong> sağlanır. Tek elden üretim ve montaj ile kalite kontrolü garantilenir. Proje yönetimi ile teslimat takvimi korunur.",
          ],
          list: {
            type: "ul",
            items: [
              "Toplu fiyat — birim maliyet düşer",
              "Tek elden üretim + montaj — kalite garantisi",
              "Proje yönetimi — teslimat takvimi",
              "Özel kumaş ve renk — projeye uyum",
              "2 yıl garanti — ürün + montaj",
              "Satış sonrası servis — bakım sözleşmesi",
            ],
          },
        },
        {
          h2: "Mimari Çözümler",
          paragraphs: [
            "Mimari projelere <strong>özel çözümler</strong> sunuyoruz. Özel form pencereler (üçgen, kemer, çatı), yüksek tavan, geniş vitrin ve özel renk talepleri için projeye özel üretim yapılır.",
          ],
          table: {
            headers: ["Özel Durum", "Çözüm", "Üretim Süresi"],
            rows: [
              ["Üçgen / Kemer pencere", "Açısal kesim, özel kalıp", "5-7 gün"],
              ["Çatı pencere", "Eğimli sistem, özel profil", "5-7 gün"],
              ["Yüksek tavan (3m+)", "Uzatılmış profil, ip mekanizması", "5-7 gün"],
              ["Geniş vitrin (2m+)", "Birleştirme profili, motorlu", "7-10 gün"],
              ["Özel renk", "Projeye özel kumaş boyama", "10-14 gün"],
            ],
          },
        },
        {
          h2: "Nasıl Teklif Alınır?",
          paragraphs: [
            "Proje teklifi için <strong>mimari plan ve pencere listesi</strong> ile iletişime geçin. Yerinde keşif yapılır, toplu fiyat ve teslimat takvimi sunulur. Müteahhit, mimar ve iç mimarlar için özel çalışma yürütülür.",
          ],
          list: {
            type: "ol",
            items: [
              "WhatsApp veya telefondan proje talebi — 0540 336 3873",
              "Mimari plan ve pencere listesini iletin",
              "Yerinde keşif — ölçü ve çerçeve kontrolü",
              "Teklif — toplu fiyat ve teslimat takvimi",
              "Sözleşme — üretim ve montaj şartları",
              "Üretim ve montaj — proje yönetimi ile",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Proje için minimum pencere sayısı var mı?",
          answer: "Net bir minimum yoktur ancak toplu fiyat avantajı genellikle 20+ pencerede belirginleşir. Daha az pencerede de proje kapsamında çalışabiliriz, teklif almanız yeterli.",
        },
        {
          question: "Hangi sektörlerde proje yapıyorsunuz?",
          answer: "Otel, rezidans, ofis, hastane, okul, AVM, mağaza, restoran ve kafe sektörlerinde plise perde projeleri yürütüyoruz. Her sektöre özel kumaş ve sistem çözümleri sunuyoruz.",
        },
        {
          question: "Proje teslim süresi ne kadar?",
          answer: "Pencere sayısına ve kumaş özelliğine göre değişir. Standart projelerde üretim 5-10 gün, montaj 2-5 gün. Özel renk ve formda üretim 10-14 gün. Keşif sonrası net takvim sunulur.",
        },
        {
          question: "Mimari projeye özel üretim yapılır mı?",
          answer: "Evet, üçgen, kemer, çatı pencereleri, yüksek tavan (3m+), geniş vitrin (2m+) ve özel renk talepleri için projeye özel üretim yapılır. Mimari plana göre çözüm geliştirilir.",
        },
        {
          question: "Proje garantisi var mı?",
          answer: "Evet, tüm proje üretim ve montajı 2 yıl garanti ile yapılır. Ürün ve montaj garantisi ayrıca satış sonrası servis ve bakım sözleşmesi ile uzatılabilir.",
        },
        {
          question: "Proje teklifi için ne gerekli?",
          answer: "Mimari plan ve pencere listesi ile iletişime geçmeniz yeterli. Yerinde keşif yapılır, toplu fiyat ve teslimat takvimi sunulur. WhatsApp'tan 0540 336 3873 numarasına ulaşabilirsiniz.",
        },
      ]}
    />
  );
}
