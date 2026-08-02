import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import JsonLd, { createWebPageSchema } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { Home, Phone, Search, MessageCircle, Wrench, GalleryHorizontalEnd, Sparkles, ArrowRight } from "lucide-react";

const popularPages = [
  { label: "Ürünlerimiz", href: "/urunlerimiz/", icon: "sparkles", desc: "Tül, honeycomb, karartma modeller" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz/", icon: "wrench", desc: "Montaj, keşif, bakım hizmetleri" },
  { label: "Galeri", href: "/galeri/", icon: "gallery", desc: "Tamamlanan projeler" },
  { label: "İletişim", href: "/iletisim/", icon: "phone", desc: "Telefon, WhatsApp, e-posta" },
];

function PopularIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    sparkles: <Sparkles size={22} />,
    wrench: <Wrench size={22} />,
    gallery: <GalleryHorizontalEnd size={22} />,
    phone: <Phone size={22} />,
  };
  return icons[name] || <Home size={22} />;
}

export default function NotFound() {
  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createWebPageSchema({
            name: "404 — Sayfa Bulunamadı",
            description: "Aradığınız sayfa bulunamadı. Plise Perde ürün ve hizmetlerine göz atın veya iletişime geçin.",
            url: "/404",
          }),
        ]}
      />
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url(/404.webp)" }}>
        <div className="absolute inset-0 bg-white/85" />

        <div className="relative z-10 text-center px-4 py-16 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-brand mb-2 tracking-wide uppercase">Plise Perde</p>
          <h1 className="text-7xl md:text-9xl font-bold text-brand mb-4 leading-none">
            404
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-brand-text mb-3">
            Aradığınız Sayfa Bulunamadı
          </h2>
          <p className="text-sm md:text-base text-brand-text-light max-w-lg mx-auto mb-8">
            Sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. Aşağıdaki yöntemlerle aradığınızı bulabilirsiniz.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <form
              action="/site-haritasi/"
              className="flex items-center gap-2 bg-white border border-brand-border rounded-lg p-2 shadow-sm"
            >
              <Search size={18} className="text-brand-text-light ml-2" />
              <input
                type="text"
                placeholder="Sayfa ara..."
                className="flex-1 outline-none text-sm text-brand-text placeholder:text-brand-text-light bg-transparent"
                aria-label="Site içinde ara"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-brand text-white text-sm font-medium rounded-md hover:bg-brand-dark transition-colors"
              >
                Ara
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group flex flex-col items-center gap-2 p-4 bg-white/80 border border-brand-border rounded-lg hover:border-brand hover:bg-white transition-all"
              >
                <span className="text-brand group-hover:scale-110 transition-transform">
                  <PopularIcon name={page.icon} />
                </span>
                <span className="text-sm font-medium text-brand-text">{page.label}</span>
                <span className="text-xs text-brand-text-light text-center hidden md:block">{page.desc}</span>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-lg font-medium hover:bg-brand-dark transition-colors w-full sm:w-auto justify-center"
            >
              <Home size={18} />
              Ana Sayfaya Dön
            </Link>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#1da851] transition-colors w-full sm:w-auto justify-center"
            >
              <MessageCircle size={18} />
              WhatsApp ile Yazın
            </a>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light/20 rounded-full">
            <Sparkles size={14} className="text-brand" />
            <span className="text-xs md:text-sm text-brand font-medium">
              Kaybolmayın — Ücretsiz keşif için hemen ulaşın
            </span>
          </div>

          <div className="mt-8 pt-6 border-t border-brand-border/50">
            <p className="text-xs text-brand-text-light">
              {siteConfig.name} · {siteConfig.phoneDisplay} · {siteConfig.email}
            </p>
            <Link
              href="/site-haritasi/"
              className="inline-flex items-center gap-1 mt-2 text-xs text-brand hover:underline"
            >
              Tüm sayfaları gör <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
