import Link from "next/link";
import { Phone, Calculator } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTASection({
  title = "Ücretsiz Keşif ve Fiyat Teklifi",
  description = "Plise perde ihtiyacınız için hemen iletişime geçin. İstanbul ve Türkiye geneli ücretsiz keşif hizmeti.",
  primaryLabel = "Ücretsiz Keşif Talep Et",
  primaryHref = "/ucretsiz-kesif",
}: CTASectionProps) {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="text-center max-w-xl mx-auto p-6 bg-brand-bg border border-brand-border rounded-lg">
          <h2 className="text-lg font-semibold text-brand-text mb-2">
            {title}
          </h2>
          <p className="text-sm text-brand-text-light mb-4">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={primaryHref}
              className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium bg-brand text-white rounded-md hover:bg-brand-dark transition-colors"
            >
              <Calculator size={16} />
              {primaryLabel}
            </Link>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border border-brand text-brand rounded-md hover:bg-brand-light transition-colors"
            >
              <Phone size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
