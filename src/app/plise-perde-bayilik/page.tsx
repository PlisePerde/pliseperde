import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import BayilikForm from "@/components/BayilikForm";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd, {
  createBreadcrumbJsonLd,
  createWebPageSchema,
  createFAQSchema,
} from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import {
  Store,
  TrendingUp,
  Shield,
  Truck,
  Headphones,
  Award,
  Users,
  DollarSign,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Bayilik",
  description:
    "Plise Perde bayilik başvurusu. Üretici fiyatı, bölge garantisi, teknik destek ve eğitim. Türkiye geneli bayilik fırsatları. Başvuru formunu doldurun.",
  slug: "plise-perde-bayilik",
  keywords: [
    "plise perde bayilik",
    "plise perde bayi",
    "perde bayilik",
    "plise perde toptan",
    "perde bayilik fırsatları",
  ],
});

const bayilikSartlari = [
  {
    icon: Store,
    title: "Showroom veya Mağaza",
    description: "Plise perde ürünlerini sergileyebileceğiniz en az 30m² kapalı alan. Online satış yapanlar için showroom zorunlu değildir.",
  },
  {
    icon: DollarSign,
    title: "Başlangıç Sermayesi",
    description: "İlk sipariş minimum 15.000 TL. Stok yatırımı zorunlu değildir — sipariş üzerine üretim yapılır.",
  },
  {
    icon: Users,
    title: "En Az 1 Personel",
    description: "Satış ve ölçü alma süreçlerini yürütebilecek en az 1 personel. Montaj ekibi bayiye aittir, eğitim ücretsizdir.",
  },
  {
    icon: Award,
    title: "Sektör Tecrübesi",
    description: "Perde, mobilya, yapı market veya iç mimari sektöründe deneyim tercih edilir. Sıfırdan başlayanlar için eğitim programı mevcuttur.",
  },
];

const bayilikAvantajlari = [
  {
    icon: TrendingUp,
    title: "Üretici Fiyatı",
    description: "Ara katman maliyeti olmadan doğrudan üretici fiyatından tedarik. Bayi kar marjı %30-%60 arası.",
  },
  {
    icon: Shield,
    title: "Bölge Garantisi",
    description: "Her şehirde tek bayi. Bölgenizde başka bayi açılmaz, müşteriler bölgenize yönlendirilir.",
  },
  {
    icon: Truck,
    title: "Türkiye Geneli Kargo",
    description: "Üretim sonrası kargo bayimize aittir. Toplu siparişlerde kargo ücretsiz. 3-5 iş günü teslim.",
  },
  {
    icon: Headphones,
    title: "Teknik Destek & Eğitim",
    description: "Ücretsiz montaj eğitimi, ölçü alma eğitimi ve teknik destek hattı. Bayi portalı üzerinden 7/24 erişim.",
  },
  {
    icon: Award,
    title: "2 Yıl Garanti",
    description: "Tüm ürünler 2 yıl garanti. Bayi montaj garantisi ayrıca sunulur. Motorlu modellerde 5 yıl motor garantisi.",
  },
  {
    icon: CheckCircle2,
    title: "Sipariş Üzerine Üretim",
    description: "Stok tutma zorunluluğu yok. Müşteri ölçüsü alınır, üretime gönderilir, teslim edilir. Risk sıfır.",
  },
];

const bayilikSureci = [
  { step: "1", title: "Başvuru", description: "Formu doldurun veya WhatsApp'tan ulaşın. Başvurunuz 24 saat içinde değerlendirilir." },
  { step: "2", title: "Görüşme", description: "Telefon veya video görüşme ile iş planınızı ve bölge potansiyelini konuşuyoruz." },
  { step: "3", title: "Sözleşme", description: "Bayilik sözleşmesi imzalanır, bölge garantisi tanımlanır, bayi portalı açılır." },
  { step: "4", title: "Eğitim", description: "Üretim tesisimizde 2 günlük ücretsiz montaj ve ölçü alma eğitimi verilir." },
  { step: "5", title: "İlk Sipariş", description: "İlk siparişinizi verirsiniz, üretim başlar, kargo gönderilir. Satışlarınız başlar." },
];

const faqItems = [
  {
    question: "Bayilik için ne kadar sermaye gerekiyor?",
    answer: "İlk sipariş minimum 15.000 TL'dir. Stok yatırımı zorunlu değildir — sipariş üzerine üretim yapılır. Showroom varsa dekoratif ürün sergisi için ekstra ürün alımı önerilir.",
  },
  {
    question: "Bölge garantisi nasıl çalışır?",
    answer: "Her şehirde tek bayi çalıştırıyoruz. Sözleşme imzalandıktan sonra o şehirde başka bayi açılmaz ve online platformlardan gelen müşteriler bölgenizdeki bayiye yönlendirilir.",
  },
  {
    question: "Montaj eğitimi ücretli mi?",
    answer: "Hayır, eğitim tamamen ücretsizdir. Pendik'teki üretim tesisimizde 2 günlük pratik montaj eğitimi verilir. Konaklama ve ulaşım bayiye aittir, eğitim malzemeleri bizden.",
  },
  {
    question: "Online satış yapabilir miyim?",
    answer: "Evet. Showroom olmadan online satış bayiliği alabilirsiniz. Sipariş üzerine üretim modeli sayesinde stok riski olmadan online platformlarda satış yapabilirsiniz.",
  },
  {
    question: "Bayi kar marjı ne kadar?",
    answer: "Üretici fiyatından tedarik ettiğiniz için kar marjı %30-%60 arasındadır. Satış fiyatını bayi belirler. Montaj hizmeti ek gelir kaynağıdır.",
  },
  {
    question: "Yedek parça tedariki nasıl olur?",
    answer: "Tüm yedek parçalar (kumaş, profil, kordon, mekanizma) üreticiden temin edilir. Bayi portalı üzerinden sipariş edilir, 3-5 iş gününde teslim edilir.",
  },
];

export default function BayilikPage() {
  const breadcrumb = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Kurumsal", url: "/hakkimizda/" },
    { name: "Plise Perde Bayilik", url: "/plise-perde-bayilik/" },
  ];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createWebPageSchema({
            name: "Plise Perde Bayilik",
            description: "Plise Perde bayilik başvurusu. Üretici fiyatı, bölge garantisi, teknik destek.",
            url: "/plise-perde-bayilik/",
          }),
          createFAQSchema(faqItems),
        ]}
      />
      <PageHeading
        breadcrumb={breadcrumb}
        title="Plise Perde Bayilik"
        description="Türkiye'nin plise perde üreticisinden bayilik fırsatı. Üretici fiyatı, bölge garantisi, ücretsiz eğitim ve teknik destek ile kendi işinizin patronu olun."
        highlight="Üretici fiyatı · Bölge garantisi · Sipariş üzerine üretim · Risk sıfır"
      />

      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          {/* Grid 2: Sol bilgi + Sağ form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sol: Bayilik şartları ve bilgileri */}
            <div className="space-y-8">
              {/* Bayilik Şartları */}
              <section>
                <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">
                  Bayilik Şartları
                </h2>
                <div className="space-y-3">
                  {bayilikSartlari.map((sart, index) => {
                    const Icon = sart.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-white border border-brand-border rounded-lg"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 text-brand flex-shrink-0">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-brand-text mb-1">
                            {sart.title}
                          </h3>
                          <p className="text-xs text-brand-text-light leading-relaxed">
                            {sart.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Bayilik Avantajları */}
              <section>
                <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">
                  Bayilik Avantajları
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bayilikAvantajlari.map((avantaj, index) => {
                    const Icon = avantaj.icon;
                    return (
                      <div
                        key={index}
                        className="p-4 bg-white border border-brand-border rounded-lg"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 text-brand mb-2">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-sm font-semibold text-brand-text mb-1">
                          {avantaj.title}
                        </h3>
                        <p className="text-xs text-brand-text-light leading-relaxed">
                          {avantaj.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Bayilik Süreci */}
              <section>
                <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">
                  Bayilik Süreci
                </h2>
                <div className="space-y-3">
                  {bayilikSureci.map((adim, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand text-white text-sm font-semibold flex-shrink-0">
                        {adim.step}
                      </div>
                      <div className="pt-1">
                        <h3 className="text-sm font-semibold text-brand-text mb-0.5">
                          {adim.title}
                        </h3>
                        <p className="text-xs text-brand-text-light leading-relaxed">
                          {adim.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-4">
                  Sıkça Sorulan Sorular
                </h2>
                <div className="space-y-3">
                  {faqItems.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-brand-bg border border-brand-border rounded-lg"
                    >
                      <h3 className="text-sm font-semibold text-brand-text mb-2">
                        {item.question}
                      </h3>
                      <p className="text-xs text-brand-text-light leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sağ: Form */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <BayilikForm />
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Bayilik İçin Hemen Başvurun"
        description="Formu doldurun, 24 saat içinde size geri dönüş yapalım. WhatsApp'tan da ulaşabilirsiniz."
        primaryLabel="WhatsApp'tan Başvur"
        primaryHref="https://wa.me/905403363873?text=Plise%20Perde%20Bayilik%20Hakk%C4%B1nda%20Bilgi%20Almak%20%C4%B0stiyorum"
      />
    </PageLayout>
  );
}
