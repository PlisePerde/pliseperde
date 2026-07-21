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
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="inline-flex items-center flex-wrap gap-1 text-xs bg-white border border-brand-border rounded-lg px-3 py-2 shadow-sm">
        <li>
          <Link
            href="/"
            className="hover:text-brand transition-colors font-medium text-brand-text-light"
          >
            Plise Perde
          </Link>
        </li>
        {filteredItems.map((item, index) => {
          const isLast = index === filteredItems.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1">
              <ChevronRight size={12} className="text-brand/40" />
              {isLast ? (
                <span className="bg-brand/10 text-brand font-medium px-2 py-0.5 rounded" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-brand transition-colors text-brand-text-light"
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
