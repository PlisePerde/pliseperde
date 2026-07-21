import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Referanslarımız — Plise Perde Projeleri ve Müşterilerimiz",
  description:
    "Plise Perde referansları. Tamamladığımız projeler, kurumsal müşterilerimiz, iş ortaklarımız ve başarı hikayelerimiz. 2022'den beri güvenilir hizmet.",
  slug: "referanslarimiz",
});

export default function ReferanslarimizPage() {
  return (
    <PageTemplate
      title="Referanslarımız"
      description="Plise Perde referansları. Tamamladığımız projeler, kurumsal müşterilerimiz ve başarı hikayelerimiz."
      slug="referanslarimiz"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Referanslarımız", url: "/referanslarimiz" }]}
      h1="Referanslarımız — Plise Perde Projeleri ve Müşterilerimiz"
      intro="2022'den beri binlerce proje tamamladık. Kurumsal müşterilerimiz, iş ortaklarımız ve bireysel müşterilerimizin güvenini kazandık. Bu sayfada tamamladığımız önemli projeleri, kurumsal referanslarımızı ve başarı hikayelerimizi bulabilirsiniz. Her proje, profesyonel ekibimiz tarafından özenle tasarlanmış ve uygulanmıştır. Referanslarımız, hizmet kalitemizin en önemli göstergesidir."
      schemaType="article"
      schemaData={{
        headline: "Referanslarımız — Plise Perde Projeleri",
        description: "Tamamladığımız projeler, kurumsal müşterilerimiz ve başarı hikayelerimiz.",
      }}
      sections={[
        {
          h2: "Kurumsal Müşterilerimiz",
          paragraphs: [
            "Kurumsal müşterilerimiz arasında <strong>oteller, ofisler, okullar ve hastaneler</strong> bulunmaktadır. <em>Toplu proje üretimi ve montajı</em> konusunda uzmanız. Kurumsal müşterilerimize özel fiyat avantajları ve öncelikli servis hizmeti sunuyoruz.",
          ],
          table: {
            headers: ["Sektör", "Proje Sayısı", "Özellik"],
            rows: [
              ["Otel & Konaklama", "120+", "Toplu üretim, motorlu model"],
              ["Ofis & Plaza", "85+", "Güneşlik, profesyonel montaj"],
              ["Eğitim Kurumları", "45+", "Çocuk güvenliği, dayanıklı"],
              ["Sağlık Kurumları", "30+", "Hijyenik kumaş, tam karartma"],
              ["Konut Siteleri", "200+", "Toplu indirim, standart model"],
            ],
          },
        },
        {
          h2: "Öne Çıkan Projelerimiz",
          paragraphs: [
            "Tamamladığımız <strong>büyük ölçekli projeler</strong> arasında otel konaklama alanları, plaza ofis katları ve site ortak alanları bulunmaktadır. Her projede <em>özel ölçü üretim, profesyonel montaj ve 2 yıl garanti</em> sunuyoruz.",
          ],
          list: {
            type: "ul",
            items: [
              "5 yıldızlı otel — 180 oda, motorlu plise perde uygulaması",
              "Plaza ofis katı — 45 pencere, güneşlik model",
              "Özel okul — 60 sınıf, çocuk güvenlikli model",
              "Konut sitesi — 120 daire, toplu indirimli üretim",
              " Özel hastane — 35 oda, hijyenik tam karartma",
            ],
          },
        },
        {
          h2: "Müşteri Memnuniyet İstatistikleri",
          paragraphs: [
            "Müşteri memnuniyet oranımız <strong>%97'dir</strong>. 2022'den beri binlerce proje tamamladık ve <em>ortalama puanımız 4.8/5</em> seviyesindedir. Kurumsal müşterilerimizin %92'si tekrar bizimle çalışmayı tercih etmektedir.",
          ],
          table: {
            headers: ["Ölçüt", "Oran", "Puan"],
            rows: [
              ["Genel memnuniyet", "%97", "4.8/5"],
              ["Kurumsal müşteri memnuniyeti", "%95", "4.7/5"],
              ["Bireysel müşteri memnuniyeti", "%98", "4.9/5"],
              ["Tekrar çalışma oranı", "%92", "-"],
              ["Zamanında teslimat", "%96", "4.8/5"],
            ],
          },
        },
        {
          h2: "İş Ortaklarımız",
          paragraphs: [
            "İş ortaklarımız arasında <strong>iç mimarlar, mimarlık ofisleri ve dekorasyon firmaları</strong> bulunmaktadır. <em>İş ortaklarımıza özel fiyat</em> ve öncelikli üretim avantajları sunuyoruz. İş ortaklığı için bizimle iletişime geçebilirsiniz.",
          ],
          list: {
            type: "ol",
            items: [
              "İç mimarlar — %15 özel indirim",
              "Mimarlık ofisleri — öncelikli üretim",
              "Dekorasyon firmaları — toplu proje fiyatı",
              "İnşaat firmaları — site projeleri için özel anlaşma",
              "Tasarım stüdyoları — renk ve kumaş danışmanlığı",
            ],
          },
        },
        {
          h2: "Neden Bizi Tercih Ederler?",
          paragraphs: [
            "Müşterilerimiz bizi <strong>kalite, güven ve profesyonellik</strong> için tercih eder. <em>2 yıl garanti, ücretsiz keşif ve Türkiye geneli hizmet</em> en çok öne çıkan avantajlarımızdır. Aşağıda müşterilerimizin bizimle çalışma nedenlerini bulabilirsiniz.",
          ],
          list: {
            type: "ul",
            items: [
              "2 yıl garanti — tüm ürün ve montaj kapsamında",
              "Ücretsiz keşif — Türkiye geneli",
              "Özel ölçü üretim — her pencere boyutu",
              "Profesyonel montaj ekibi — deneyimli ustalar",
              "Hızlı teslimat — ortalama 5 iş günü",
              "Çocuk güvenliği — TSE uygun ürünler",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Kurumsal müşteri olarak özel fiyat alabilir miyim?",
          answer: "Evet, kurumsal müşterilere özel fiyat avantajları sunuyoruz. Proje kapsamına göre toplu indirim ve öncelikli üretim avantajı sağlıyoruz. İletişim sayfamızdan teklif alabilirsiniz.",
        },
        {
          question: "Referans olarak hangi projelerinizi inceleyebilirim?",
          answer: "Otel, ofis, okul, hastane ve konut sitesi projelerimizi inceleyebilirsiniz. Galeri sayfamızda gerçek proje fotoğraflarımız bulunmaktadır. Detaylı bilgi için bizimle iletişime geçebilirsiniz.",
        },
        {
          question: "İş ortaklığı nasıl kurulur?",
          answer: "İç mimarlar, mimarlık ofisleri ve dekorasyon firmaları ile iş ortaklığı kuruyoruz. İş ortaklarımıza özel indirim ve öncelikli üretim avantajları sunuyoruz. WhatsApp veya e-posta üzerinden başvurabilirsiniz.",
        },
        {
          question: "Müşteri memnuniyet oranınız nedir?",
          answer: "Müşteri memnuniyet oranımız %97'dir. 2022'den beri binlerce proje tamamladık ve ortalama puanımız 4.8/5 seviyesindedir. Kurumsal müşterilerimizin %92'si tekrar bizimle çalışmayı tercih etmektedir.",
        },
        {
          question: "Toplu proje için teslimat süreniz nedir?",
          answer: "Toplu projelerde teslimat süresi proje kapsamına göre değişir. Ortalama 5 iş günü içinde üretim tamamlanır. Büyük projelerde özel teslimat planı yapıyoruz. Keşif sırasında net teslimat tarihi belirlenir.",
        },
      ]}
    />
  );
}
