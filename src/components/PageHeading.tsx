import Breadcrumb from "./Breadcrumb";

interface PageHeadingProps {
  breadcrumb: { name: string; url: string }[];
  title: string;
  description: string;
  highlight?: string;
  bgImage?: string;
  bgImageAlt?: string;
}

export default function PageHeading({
  breadcrumb,
  title,
  description,
  highlight,
  bgImage,
  bgImageAlt,
}: PageHeadingProps) {
  return (
    <div
      className="bg-gradient-to-br from-brand-bg via-brand-bg to-brand-light/10 border-b border-brand-border relative"
      style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      {bgImage && (
        <>
          <div className="absolute inset-0 bg-white/80" />
          <img src={bgImage} alt={bgImageAlt || title} className="sr-only" />
        </>
      )}
      <div className="mx-auto max-w-[1536px] px-4 md:px-6 relative">
        <div className="py-8 md:py-12">
          <h1 className="text-2xl md:text-4xl font-bold text-brand-text mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-sm md:text-base text-brand-text-light leading-relaxed max-w-3xl mb-5" dangerouslySetInnerHTML={{ __html: description }} />
          <Breadcrumb items={breadcrumb} />
          {highlight && (
            <p className="mt-4 inline-flex items-center gap-2 text-xs md:text-sm text-brand bg-brand-light/20 px-3 py-1.5 rounded-md font-medium">
              {highlight}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
