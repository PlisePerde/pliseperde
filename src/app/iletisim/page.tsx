import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import JsonLd, { createBreadcrumbJsonLd, createContactPageSchema, createLocalBusinessSchema } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/seo";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "İletişim",
  description:
    "Plise Perde iletişim. Telefon, WhatsApp, e-posta, adres. Pendik İstanbul. Ücretsiz keşif için hemen ulaşın.",
  slug: "iletisim",
  ogImage: "/iletisim.webp",
  ogImageAlt: "İletişim",
});

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function SocialIcon({ type, size }: { type: string; size: number }) {
  const paths: Record<string, string> = {
    facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    pinterest: "M12.017 0C5.396 0 0 5.396 0 12.017c0 5.084 3.163 9.424 7.628 11.173-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.091.378-.293 1.194-.333 1.361-.052.22-.174.266-.402.16-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.608 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 12.017-5.396 12.017-12.017C24.034 5.396 18.641 0 12.017 0z",
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={paths[type]} />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, type: "facebook" },
  { label: "Instagram", href: siteConfig.social.instagram, type: "instagram" },
  { label: "YouTube", href: siteConfig.social.youtube, type: "youtube" },
  { label: "Pinterest", href: siteConfig.social.pinterest, type: "pinterest" },
  { label: "LinkedIn", href: siteConfig.social.linkedin, type: "linkedin" },
];

export default function IletisimPage() {
  const breadcrumb = ["Ana Sayfa", "İletişim"];

  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(breadcrumb),
          createContactPageSchema({
            name: "İletişim",
            description: "Plise Perde iletişim bilgileri.",
            url: "/iletisim/",
          }),
          createLocalBusinessSchema(),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "İletişim", url: "/iletisim/" }]}
        title="İletişim"
        description="Plise perde ihtiyacınız için bize ulaşın. Ücretsiz keşif, fiyat teklifi ve tüm sorularınız için aşağıdaki iletişim kanallarını kullanabilirsiniz."
        highlight="Ücretsiz keşif · WhatsApp 7/24 · Pendik İstanbul"
        bgImage="/iletisim.webp"
        bgImageAlt="İletişim"
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 border border-brand-border rounded-lg">
              <h2 className="text-lg font-semibold text-brand-text mb-1">İletişim Bilgileri</h2>
              <p className="text-xs text-brand-text-light mb-4">Bize en uygun kanaldan ulaşın — telefon, WhatsApp, e-posta veya canlı destek.</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="p-3.5 border border-brand-border rounded-lg flex items-center gap-3 hover:bg-brand/5 hover:border-brand transition-colors group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-brand-border text-brand shrink-0 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium text-brand-text m-0 leading-snug whitespace-nowrap">Telefon</p>
                    <a href={`tel:${siteConfig.phone}`} className="touch-reset block text-sm text-brand-text-light hover:text-brand transition-colors m-0 leading-snug whitespace-nowrap">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="p-3.5 border border-brand-border rounded-lg flex items-center gap-3 hover:bg-brand/5 hover:border-brand transition-colors group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-brand-border text-brand shrink-0 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium text-brand-text m-0 leading-snug whitespace-nowrap">WhatsApp</p>
                    <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="touch-reset block text-sm text-brand-text-light hover:text-brand transition-colors m-0 leading-snug whitespace-nowrap">
                      Konuşma Başlat!
                    </a>
                  </div>
                </div>
                <div className="p-3.5 border border-brand-border rounded-lg flex items-center gap-3 hover:bg-brand/5 hover:border-brand transition-colors group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-brand-border text-brand shrink-0 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium text-brand-text m-0 leading-snug whitespace-nowrap">E-Posta</p>
                    <a href={`mailto:${siteConfig.email}`} className="touch-reset block text-sm text-brand-text-light hover:text-brand transition-colors m-0 leading-snug whitespace-nowrap">
                      Gönder!
                    </a>
                  </div>
                </div>
                <div className="p-3.5 border border-brand-border rounded-lg flex items-center gap-3 hover:bg-brand/5 hover:border-brand transition-colors group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-brand-border text-brand shrink-0 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors">
                    <MessageCircle size={18} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium text-brand-text m-0 leading-snug whitespace-nowrap">Canlı Destek</p>
                    <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="touch-reset block text-sm text-brand-text-light hover:text-brand transition-colors m-0 leading-snug whitespace-nowrap">
                      Sohbet Başlat!
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 border border-brand-border rounded-lg flex items-center gap-3 hover:bg-brand/5 hover:border-brand transition-colors group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-brand-border text-brand shrink-0 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors">
                    <Clock size={18} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium text-brand-text m-0 leading-snug">Üretim / İmalat Saatleri</p>
                    <p className="text-sm text-brand-text-light m-0 leading-snug">
                      <span className="hidden md:inline">Pzt-Cmt:</span><span className="md:hidden">Pazartesi - Cumartesi:</span> {siteConfig.openingHours.opens}-{siteConfig.openingHours.closes}
                    </p>
                  </div>
                </div>
                <div className="p-3.5 border border-brand-border rounded-lg flex items-center gap-3 hover:bg-brand/5 hover:border-brand transition-colors group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-brand-border text-brand shrink-0 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors">
                    <Clock size={18} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium text-brand-text m-0 leading-snug">Saha / Ölçü / Montaj</p>
                    <p className="text-sm text-brand-text-light m-0 leading-snug">
                      <span className="hidden md:inline">Pzt-Cmt:</span><span className="md:hidden">Pazartesi - Cumartesi:</span> {siteConfig.measurementHours.opens}-{siteConfig.measurementHours.closes}
                    </p>
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/U5tbutASyNabzoGT9" target="_blank" rel="noopener noreferrer" className="md:col-span-2 p-3.5 border border-brand-border rounded-lg flex items-center gap-3 hover:bg-brand/5 hover:border-brand transition-colors group cursor-pointer">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-brand-border text-brand shrink-0 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium text-brand-text m-0 leading-snug">Adres</p>
                    <p className="text-sm text-brand-text-light m-0 leading-snug">
                      {siteConfig.address.street}, {siteConfig.address.postalCode} <span className="md:hidden"><br /></span>{siteConfig.address.district} / {siteConfig.address.city}
                    </p>
                  </div>
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-border">
                <p className="text-sm font-medium text-brand-text mb-3">Sosyal Medya</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center w-9 h-9 rounded-lg border border-brand-border text-brand-text-light hover:text-brand hover:border-brand transition-colors"
                    >
                      <SocialIcon type={social.type} size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>

          <div className="p-6 border border-brand-border rounded-lg mb-8">
            <h2 className="text-base font-semibold text-brand-text mb-3">Üretim Tesisi Ziyareti</h2>
            <p className="text-sm text-brand-text-light leading-relaxed mb-4">
              Pendik&apos;teki üretim tesisimizi randevu ile ziyaret edebilirsiniz.
              Ürünleri yerinde inceleyebilir, kumaş ve renk seçeneklerini görebilir,
              üretim sürecini yakından takip edebilirsiniz. Ziyaret için önceden
              randevu almanız gerekmektedir.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6649.978757440639!2d29.303092600437274!3d40.86108498673828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadd3fb3818505%3A0x4a4ef5f50a0c8a4a!2sPlise%20Perde%20-%20pliseperde.com!5e0!3m2!1str!2str!4v1784483330482!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Plise Perde Konum"
            />
          </div>
        </div>
      </div>
      <CTASection />
    </PageLayout>
  );
}
