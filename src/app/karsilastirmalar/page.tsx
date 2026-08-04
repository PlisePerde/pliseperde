import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plise Perde Karşılaştırmaları — Tüm Perde Türleri ile Karşılaştır",
  description:
    "Plise perde vs zebra, stor, jaluzi, tül, honeycomb, duet, fon, japon, screen, zip, karartma ve dikey perde karşılaştırmaları. Fiyat, ışık kontrolü, montaj ve daha fazlası.",
  slug: "karsilastirmalar",
  keywords: [
    "plise perde karşılaştırma",
    "plise perde vs zebra perde",
    "plise perde vs stor perde",
    "plise perde vs jaluzi perde",
    "plise perde vs tül perde",
    "plise perde vs honeycomb perde",
    "plise perde vs duet perde",
    "plise perde vs fon perde",
    "plise perde vs japon perde",
    "plise perde vs screen perde",
    "plise perde vs zip perde",
    "plise perde vs karartma perde",
    "plise perde vs dikey perde",
  ],
});

const comparisons = [
  {
    title: "Plise Perde vs Zebra Perde",
    href: "/plise-perde-vs-zebra-perde",
    description: "Fiyat, ışık kontrolü, montaj ve temizlik açısından detaylı karşılaştırma.",
    highlight: "En popüler karşılaştırma",
    image: "/karsilastirmalar/plise-perde-vs-zebra-perde.webp",
  },
  {
    title: "Plise Perde vs Stor Perde",
    href: "/plise-perde-vs-stor-perde",
    description: "Mekanizma, dayanıklılık ve kullanım kolaylığı açısından karşılaştırma.",
    image: "/karsilastirmalar/plise-perde-vs-stor-perde.webp",
  },
  {
    title: "Plise Perde vs Jaluzi Perde",
    href: "/plise-perde-vs-jaluzi-perde",
    description: "Işık ayarı, estetik ve bakım açısından detaylı inceleme.",
    image: "/karsilastirmalar/plise-perde-vs-jaluzi-perde.webp",
  },
  {
    title: "Plise Perde vs Tül Perde",
    href: "/plise-perde-vs-tul-perde",
    description: "Modern vs klasik yaklaşım, ışık geçirgenliği ve dekorasyon.",
    image: "/karsilastirmalar/plise-perde-vs-tul-perde.webp",
  },
  {
    title: "Plise Perde vs Honeycomb Perde",
    href: "/plise-perde-vs-honeycomb-perde",
    description: "Enerji tasarrufu, ısı yalıtımı ve fiyat açısından karşılaştırma.",
    image: "/karsilastirmalar/plise-perde-vs-honeycomb-perde.webp",
  },
  {
    title: "Plise Perde vs Duet Perde",
    href: "/plise-perde-vs-duet-perde",
    description: "Çift katmanlı yapı, gece gündüz kullanımı ve fiyat farkı.",
    image: "/karsilastirmalar/plise-perde-vs-duet-perde.webp",
  },
  {
    title: "Plise Perde vs Fon Perde",
    href: "/plise-perde-vs-fon-perde",
    description: "Mekanizma, estetik ve kullanım alanları açısından karşılaştırma.",
    image: "/karsilastirmalar/plise-perde-vs-fon-perde.webp",
  },
  {
    title: "Plise Perde vs Japon Perde",
    href: "/plise-perde-vs-japon-perde",
    description: "Stil, mekanizma ve dekorasyon uyumu açısından inceleme.",
    image: "/karsilastirmalar/plise-perde-vs-japon-perde.webp",
  },
  {
    title: "Plise Perde vs Screen Perde",
    href: "/plise-perde-vs-screen-perde",
    description: "Güneş kontrolü, UV koruma ve dış mekan kullanımı.",
    image: "/karsilastirmalar/plise-perde-vs-screen-perde.webp",
  },
  {
    title: "Plise Perde vs Zip Perde",
    href: "/plise-perde-vs-zip-perde",
    description: "Sistem farkı, kullanım alanı ve fiyat karşılaştırması.",
    image: "/karsilastirmalar/plise-perde-vs-zip-perde.webp",
  },
  {
    title: "Plise Perde vs Karartma Perde",
    href: "/plise-perde-vs-karartma-perde",
    description: "Tam karartma özelliği, uyku kalitesi ve ışık kontrolü.",
    image: "/karsilastirmalar/plise-perde-vs-karartma-perde.webp",
  },
  {
    title: "Plise Perde vs Dikey Perde",
    href: "/plise-perde-vs-dikey-perde",
    description: "Geniş camlar için uygunluk, mekanizma ve estetik karşılaştırması.",
    image: "/karsilastirmalar/plise-perde-vs-dikey-perde.webp",
  },
];

export default function KarsilastirmalarPage() {
  return (
    <PageTemplate
      title="Plise Perde Karşılaştırmaları"
      description="Plise perde vs tüm perde türleri. Fiyat, ışık kontrolü, montaj, temizlik ve dayanıklılık açısından detaylı karşılaştırmalar."
      slug="karsilastirmalar"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Karşılaştırmalar", url: "/karsilastirmalar" }]}
      h1="Plise Perde Karşılaştırmaları"
      intro="Plise perde mi yoksa başka bir perde türü mü? Doğru perde seçimi, mekanınızın estetiği, ışık kontrolü ve bütçeniz için kritik öneme sahiptir. Aşağıda plise perdeyi tüm popüler perde türleriyle detaylıca karşılaştırdık. Her karşılaştırmada fiyat, ışık kontrolü, montaj, temizlik ve dayanıklılık açısından objektif bir inceleme bulacaksınız."
      schemaType="collectionpage"
      schemaData={{
        name: "Plise Perde Karşılaştırmaları",
        description: "Plise perde vs tüm perde türleri karşılaştırmaları.",
        url: "/karsilastirmalar/",
        items: comparisons.map((c) => ({ name: c.title, url: `${c.href}/` })),
      }}
      sections={[
        {
          h2: "Tüm Karşılaştırmalar",
          paragraphs: [
            "Aşağıda plise perdenin <strong>12 farklı perde türüyle</strong> karşılaştırmasını bulabilirsiniz. Her karşılaştırma sayfasında çalışma prensibi farkı, fiyat karşılaştırması, ışık kontrolü, montaj kolaylığı, temizlik ve bakım, dayanıklılık ve kullanım alanları başlıkları altında detaylı bilgi yer almaktadır.",
          ],
        },
      ]}
      beforeContent={
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {comparisons.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="group block bg-white border border-brand-border rounded-xl hover:border-brand hover:shadow-md transition-all overflow-hidden"
            >
              <div className="aspect-[1200/630] bg-brand-bg overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={1200}
                  height={630}
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-brand-text group-hover:text-brand transition-colors">
                    {c.title}
                  </h3>
                  <svg
                    className="w-5 h-5 text-brand-text-light group-hover:text-brand transition-colors flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="text-sm text-brand-text-light mt-2">{c.description}</p>
                {c.highlight && (
                  <span className="inline-block mt-3 text-xs font-medium px-2 py-1 bg-brand/10 text-brand rounded-md">
                    {c.highlight}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      }
      faqItems={[
        {
          question: "Plise perde mi zebra perde mi daha iyi?",
          answer:
            "Bu tamamen ihtiyacınıza bağlıdır. Plise perde daha ekonomik, üstten ve alttan açılabilen ve daha hafif bir seçenektir. Zebra perde ise şeritli yapısıyla daha modern bir ışık kontrolü sunar. Detaylı karşılaştırma için Plise Perde vs Zebra Perde sayfamızı inceleyebilirsiniz.",
        },
        {
          question: "Plise perde en çok hangi perde ile karşılaştırılır?",
          answer:
            "Plise perde en çok zebra perde, stor perde ve jaluzi perde ile karşılaştırılır. Bu üçü de modern pencere çözümleridir ve benzer kullanım alanlarına hitap eder.",
        },
        {
          question: "Plise perde mi honeycomb perde mi daha iyi?",
          answer:
            "Honeycomb perde aslında plise perdenin bir alt türüdür. Petek hücreli yapısı sayesinde %30'a varan ısı tasarrufu sağlar. Standart plise perde daha ekonomiktir, honeycomb ise enerji verimliliği konusunda daha üstündür.",
        },
        {
          question: "Hangi perde türü daha ucuz?",
          answer:
            "Genel sıralama: tül perde en ekonomik, ardından plise perde, stor perde, zebra perde ve en pahalı olarak honeycomb perde gelir. Ancak fiyatlar modele, kumaşa ve boyuta göre değişir.",
        },
      ]}
      ctaTitle="Hangi Perde Sizin İçin Uygun?"
      ctaDescription="Karşılaştırmaları incelediniz ama hâlâ kararsız mısınız? Uzman ekibimiz size en uygun perde türünü belirlemenize yardımcı olsun."
      ctaPrimaryLabel="Ücretsiz Keşif Talep Et"
      ctaPrimaryHref="/ucretsiz-kesif"
    />
  );
}
