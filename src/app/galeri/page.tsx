import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import FAQ, { type FAQItem } from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import GalleryGrid from "@/components/GalleryGrid";
import JsonLd, {
  createBreadcrumbJsonLd,
  createWebPageSchema,
  createFAQSchema,
  createImageGallerySchema,
} from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { galleryCategories, allGalleryImages } from "@/data/gallery";

export const metadata: Metadata = generatePageMetadata({
  title: "Galeri — Plise Perde, Honeycomb ve Düet Perde Uygulama Fotoğrafları",
  description:
    "Plise perde, honeycomb perde ve düet perde uygulama fotoğrafları. Gerçek projelerden montaj örnekleri: salon, yatak odası, cam balkon, mutfak, ofis. FENETRE kalitesiyle uygulanan perde modellerini inceleyin.",
  slug: "galeri",
  ogImage: "/galeri.webp",
  ogImageAlt: "Plise Perde Galeri — Uygulama Fotoğrafları",
  keywords: [
    "plise perde galeri",
    "plise perde fotoğrafları",
    "honeycomb perde galeri",
    "düet perde fotoğrafları",
    "plise perde uygulama",
    "plise perde montaj",
    "perde örnekleri",
  ],
});

const faqItems: FAQItem[] = [
  {
    question: "Galeride gerçek proje fotoğrafları mı var?",
    answer:
      "Evet, galerimizde gerçek projelerden çekilmiş fotoğraflar bulunmaktadır. Salon, yatak odası, cam balkon, mutfak ve ofis uygulamalarının gerçek görüntülerini inceleyebilirsiniz. Tüm fotoğraflar FENETRE tarafından uygulanan gerçek montajları gösterir.",
  },
  {
    question: "Hangi perde türlerinin fotoğrafları mevcut?",
    answer:
      "Galerimizde üç ana kategori bulunmaktadır: Plise Perde (düz, blackout, gece gündüz, desenli, baskılı modeller), Honeycomb Perde (çift petek, ısı yalıtımlı) ve Düet Perde (tül + blackout kombinasyonu). Her kategoride farklı mekan ve montaj tiplerine ait örnekler yer alır.",
  },
  {
    question: "Galeriyi ziyaret edebilir miyim?",
    answer:
      "Evet, Pendik'teki üretim tesisimizi randevu ile ziyaret edebilirsiniz. Ürünleri yerinde inceleyebilir, kumaş ve renk seçeneklerini görebilirsiniz. Ücretsiz keşif talebi oluşturarak randevu alabilirsiniz.",
  },
  {
    question: "Salon için hangi perde modeli önerilir?",
    answer:
      "Salon için tül plise perde (doğal aydınlatma), honeycomb perde (ısı yalıtımı) ve gece gündüz plise perde (esnek kullanım) modelleri önerilir. Geniş pencerede motorlu model tercih edilebilir. Galeri fotoğraflarından salon uygulamalarını inceleyebilirsiniz.",
  },
  {
    question: "Cam balkon için hangi perde tipi uygun?",
    answer:
      "Cam balkon için honeycomb perde (ısı yalıtımı) ve sineklik kombinasyonu idealdir. Az yer kaplayan modeller cam balkonda avantaj sağlar. Vidasız montaj seçeneği ile kiracı dostu çözümler de mevcuttur.",
  },
  {
    question: "Galeri fotoğraflarını indirebilir miyim?",
    answer:
      "Galeri fotoğrafları telif hakkı korunmaktadır ve FENETRE'nin izni olmadan kullanılamaz. Referans amacıyla inceleyebilirsiniz. Proje fotoğraflarınızı paylaşmak için bizimle iletişime geçebilirsiniz.",
  },
];

export default function GaleriPage() {
  const allImages = allGalleryImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    caption: img.caption,
    description: img.description,
    width: img.width,
    height: img.height,
  }));

  const schemas: object[] = [
    createBreadcrumbJsonLd([
      { name: "Ana Sayfa", url: "/" },
      { name: "Galeri", url: "/galeri" },
    ]),
    createWebPageSchema({
      name: "Galeri — Plise Perde Uygulama Fotoğrafları",
      description:
        "Plise perde, honeycomb perde ve düet perde uygulama fotoğrafları. Gerçek projelerden montaj örnekleri.",
      url: "/galeri/",
    }),
  ];

  if (allImages.length > 0) {
    schemas.push(
      createImageGallerySchema({
        name: "Plise Perde Galeri",
        description:
          "Plise perde, honeycomb perde ve düet perde uygulama fotoğrafları. Gerçek projelerden montaj örnekleri.",
        url: "/galeri/",
        images: allImages,
      })
    );
  }

  if (faqItems.length > 0) {
    schemas.push(createFAQSchema(faqItems));
  }

  return (
    <PageLayout>
      <JsonLd schemas={schemas} />
      <PageHeading
        breadcrumb={[
          { name: "Ana Sayfa", url: "/" },
          { name: "Galeri", url: "/galeri" },
        ]}
        title="Galeri — Plise Perde Uygulamaları"
        description="Plise perde, honeycomb perde ve düet perde uygulamalarımızın fotoğraflarını inceleyin. Gerçek projelerden montaj örnekleri: salon, yatak odası, cam balkon, mutfak, ofis ve daha fazlası. Tüm fotoğraflar FENETRE tarafından uygulanan gerçek montajları gösterir."
        highlight={`${allImages.length > 0 ? `${allImages.length} uygulama fotoğrafı` : "Fotoğraflar yakında"}`}
        bgImage="/galeri.webp"
        bgImageAlt="Plise Perde Galeri — Uygulama Fotoğrafları"
      />

      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          {/* AI/LLM-friendly summary */}
          <section className="mb-8" aria-label="Galeri özeti">
            <p className="text-sm text-brand-text-light leading-relaxed mb-4">
              Bu galeri sayfası, <strong>FENETRE Plise Perde</strong> tarafından İstanbul ve Türkiye geneli
              uygulanan gerçek projelerin fotoğraflarını sunar. Üç ana kategoride düzenlenmiştir:{" "}
              <strong>Plise Perde</strong> (düz, blackout, gece gündüz, desenli, baskılı modeller),{" "}
              <strong>Honeycomb Perde</strong> (çift petek yapısı ile ısı ve ses yalıtımı) ve{" "}
              <strong>Düet Perde</strong> (üst tül alt blackout kombinasyonu). Her fotoğraf, farklı mekan
              türlerinde (salon, yatak odası, cam balkon, mutfak, ofis, banyo, villa) uygulanan montaj
              örneklerini gösterir. Fotoğraflara tıklayarak tam ekran görüntüleyebilir, yakınlaştırabilir
              ve klavye ok tuşları ile gezinebilirsiniz.
            </p>
          </section>

          {/* Gallery Grid with tabs */}
          <ScrollReveal className="mb-8">
            <GalleryGrid />
          </ScrollReveal>

          {/* Category descriptions for SEO/AI */}
          {galleryCategories.map((cat, index) => (
            <ScrollReveal key={cat.id} className="mb-8" delay={index * 50}>
              <section aria-label={`${cat.label} kategorisi`}>
                <h2 className="text-lg md:text-xl font-semibold text-brand-text mb-3">
                  {cat.label} Uygulamaları
                </h2>
                <p className="text-sm text-brand-text-light leading-relaxed">
                  {cat.description}
                </p>
                {cat.images.length > 0 && (
                  <p className="text-xs text-brand-text-light mt-2">
                    Bu kategoride {cat.images.length} adet uygulama fotoğrafı bulunmaktadır.
                  </p>
                )}
              </section>
            </ScrollReveal>
          ))}

          {/* FAQ */}
          <section className="mb-8" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-lg md:text-xl font-semibold text-brand-text mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <FAQ items={faqItems} />
          </section>
        </div>
      </div>

      <CTASection
        title="Beğendiğiniz Modeli Uygulatalım"
        description="Galeride beğendiğiniz perde modelini seçin, ücretsiz keşif talebi oluşturun. İstanbul ve Türkiye geneli ücretsiz keşif ve montaj hizmeti."
        primaryLabel="Ücretsiz Keşif Talep Et"
        primaryHref="/ucretsiz-kesif"
      />
    </PageLayout>
  );
}
