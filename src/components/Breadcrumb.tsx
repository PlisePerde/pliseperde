import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const filteredItems = items.filter(
    (item, index) => !(index === 0 && (item.name === "Ana Sayfa" || item.url === "/"))
  );

  return (
    <nav aria-label="Breadcrumb" className="mb-4 overflow-x-auto">
      <ol className="flex items-center gap-1 w-max text-xs bg-white border border-brand-border rounded-lg px-3 py-2 shadow-sm whitespace-nowrap leading-none">
        <li className="flex items-center flex-shrink-0">
          <Link
            href="/"
            className="inline-flex items-center hover:text-brand transition-colors font-medium text-brand-text-light whitespace-nowrap px-2 py-0.5"
          >
            Plise Perde
          </Link>
        </li>
        {filteredItems.map((item, index) => {
          const isLast = index === filteredItems.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1 flex-shrink-0">
              <ChevronRight size={12} className="text-brand/40 flex-shrink-0" />
              {isLast ? (
                <span className="inline-flex items-center bg-brand/10 text-brand font-medium px-2 py-0.5 rounded whitespace-nowrap leading-tight" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="inline-flex items-center hover:text-brand transition-colors text-brand-text-light whitespace-nowrap px-2 py-0.5"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
