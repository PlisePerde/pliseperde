"use client";

import { useState, useRef, useEffect } from "react";
import { Factory, Shield, Truck, Wrench, Phone, Clock, Package, CreditCard, type LucideIcon } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Üretici",
    desc: "2022'den bu yana üretici.",
    tooltip: "2022 yılından bu yana İstanbul Pendik'teki kendi üretim tesisimizde plise perde üretiyoruz. Aracısız doğrudan üretici fiyatı avantajıyla hizmet veriyoruz.",
  },
  {
    icon: Shield,
    title: "2 Yıl Garanti",
    desc: "Profil ve kumaş garantisi.",
    tooltip: "Tüm plise perde ürünlerimizde profil ve kumaş 2 yıl, motorlu modellerde motor 5 yıl üretici garantisi sunuyoruz. Garanti kapsamındaki arızalarda ücretsiz değişim sağlıyoruz.",
  },
  {
    icon: Truck,
    title: "Türkiye Geneli",
    desc: "Kargo ve montaj hizmeti.",
    tooltip: "81 ilin tamamına kargo gönderimi yapıyoruz. İstanbul, Kocaeli ve Sakarya'da yerinde montaj hizmeti sunuyoruz. Diğer illerde kargo ile gönderip montaj talimatı veriyoruz.",
  },
  {
    icon: Wrench,
    title: "Profesyonel Montaj",
    desc: "Deneyimli montaj ekibi.",
    tooltip: "Deneyimli ve uzman montaj ekibimizle plise perde montajınızı profesyonelce yapıyoruz. Vidalı, vidasız ve portrayli montaj seçenekleriyle her pencere tipine uygun çözüm sunuyoruz.",
  },
  {
    icon: Phone,
    title: "Ücretsiz Keşif",
    desc: "Ölçü ve teklif ücretsiz.",
    tooltip: "İstanbul, Kocaeli ve Sakarya'da uzman ekibimizle yerinde ücretsiz keşif yapıyoruz. Pencere ölçülerinizi alıp size en uygun plise perde modelini ve fiyat teklifini sunuyoruz.",
  },
  {
    icon: Clock,
    title: "Hızlı Teslimat",
    desc: "3-7 iş gününde üretim.",
    tooltip: "Özel ölçü üretim olduğu için sipariş onayından sonra 3-7 iş günü içinde üretim tamamlanıp kargoya veriliyor. Acil siparişlerde hızlandırılmış üretim seçeneği de mevcuttur.",
  },
  {
    icon: Package,
    title: "Ücretsiz Kargo",
    desc: "Türkiye geneli kargo ücretsiz.",
    tooltip: "Türkiye'nin 81 iline tüm siparişlerde kargo gönderimi tamamen ücretsizdir. Ürünleriniz özel koruyucu paketleme ile güvenle gönderilir ve kapınızda teslim edilir.",
  },
  {
    icon: CreditCard,
    title: "3 Taksit",
    desc: "Peşin fiyatına 3 taksit.",
    tooltip: "Kredi kartıyla yapacağınız alışverişlerde peşin fiyatına 3 taksit imkanı sunuyoruz. Vade farksız taksitlendirme ile bütçenizi rahatlatarak ödemenizi yapabilirsiniz.",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Plise Perde Güven Rozetleri",
  "itemListElement": features.map((f, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": f.title,
    "description": f.tooltip,
  })),
};

function IconWithTitle({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <Icon size={20} className="text-brand" aria-hidden="true">
      <title>{title}</title>
    </Icon>
  );
}

export default function TrustBar() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const items = [...features, ...features];

  const handleCardClick = (index: number) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(index);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (trackRef.current && !trackRef.current.contains(e.target as Node)) {
        setActiveTooltip(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section aria-label="Güven Çubuğu" className="relative bg-brand-bg py-8 md:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Screen-reader only heading for hierarchy */}
      <h2 className="sr-only">Plise Perde Güven Rozetleri</h2>

      {/* Sol fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
      {/* Sağ fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden pb-32 -mb-32">
      <div ref={trackRef} className="trustbar-track flex gap-4 w-max">
        {items.map((f, i) => {
          const isActive = activeTooltip === i;
          const isDuplicate = i >= features.length;
          return (
            <article
              key={`${f.title}-${i}`}
              onClick={() => handleCardClick(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              role="button"
              tabIndex={0}
              aria-label={f.title}
              aria-hidden={isDuplicate ? true : undefined}
              className={`trustbar-card group relative flex items-center gap-3 p-4 bg-white border rounded-lg w-[260px] shrink-0 transition-all cursor-pointer ${isActive ? "border-brand shadow-md" : "border-brand-border hover:border-brand hover:shadow-md"}`}
            >
              <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                <IconWithTitle icon={f.icon} title={f.title} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-text mb-0.5">
                  {f.title}
                </h3>
                <p className="text-xs text-brand-text-light">{f.desc}</p>
              </div>

              {/* Tooltip — hover (desktop) + active (mobil tap) */}
              <div
                className={`trustbar-tooltip absolute top-full mt-2 w-[280px] p-3 bg-brand-text text-white text-xs leading-relaxed rounded-lg shadow-xl z-30 pointer-events-none transition-all flex items-center justify-center text-center
                  ${i % features.length === 0 ? "left-0" : i % features.length === features.length - 1 ? "right-0" : "left-1/2 -translate-x-1/2"}
                  ${isActive ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
              >
                {f.tooltip}
                <div
                  className={`absolute -top-1.5 w-3 h-3 bg-brand-text rotate-45
                    ${i % features.length === 0 ? "left-6" : i % features.length === features.length - 1 ? "right-6" : "left-1/2 -translate-x-1/2"}`}
                />
              </div>
            </article>
          );
        })}
      </div>
      </div>

      {/* AI botlar için sr-only tooltip içerikleri */}
      <div className="sr-only">
        {features.map((f) => (
          <p key={f.title}>{f.title}: {f.tooltip}</p>
        ))}
      </div>

      <style jsx>{`
        .trustbar-track {
          animation: trustbar-scroll 30s linear infinite;
        }
        .trustbar-track:hover {
          animation-play-state: paused;
        }
        @keyframes trustbar-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 768px) {
          .trustbar-track {
            animation-duration: 20s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .trustbar-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
