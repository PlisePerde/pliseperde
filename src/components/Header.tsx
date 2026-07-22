"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Calculator, Phone, ChevronRight } from "lucide-react";
import { navItems } from "@/data/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string | null) => {
    if (!href) return false;
    const cleanPath = pathname.replace(/\/$/, "");
    const cleanHref = href.replace(/\/$/, "");
    return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-border">
      <div className="px-4 md:px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.webp"
                alt="Plise Perde"
                width={156}
                height={42}
                priority
                className="h-9 w-auto"
              />
            </Link>
            <div className="hidden md:block h-8 w-px bg-brand-border" />
            <a href="tel:05403363873" className="hidden md:flex items-center gap-2">
              <Phone size={18} className="text-brand" />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-brand-text-light">Müşteri Hizmetleri</span>
                <span className="text-sm font-medium text-brand-text">0 540 336 3873</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(item.href)
                        ? "bg-brand/10 text-brand font-medium"
                        : "text-brand-text hover:text-brand hover:bg-brand-bg"
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronRight size={14} className={`opacity-60 transition-transform duration-200 ${openDropdown === item.label ? "rotate-90" : ""}`} />}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(item.href)
                        ? "bg-brand/10 text-brand font-medium"
                        : "text-brand-text hover:text-brand hover:bg-brand-bg"
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronRight size={14} className={`opacity-60 transition-transform duration-200 ${openDropdown === item.label ? "rotate-90" : ""}`} />}
                  </button>
                )}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 min-w-[200px] max-h-[calc(100vh-3.5rem)] overflow-y-auto bg-white border border-brand-border rounded-md py-1 shadow-lg">
                    {item.children.map((child) => {
                      const childActive = isActive(child.href);
                      return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 text-sm rounded-md transition-colors ${
                          childActive
                            ? "bg-brand/10 text-brand font-medium"
                            : "text-brand-text hover:text-brand hover:bg-brand-bg"
                        }`}
                      >
                        {child.label}
                      </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/plise-perde-fiyatlari"
              className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-md transition-colors bg-brand/10 text-brand font-medium"
            >
              Fiyatlarımız
            </Link>
            <Link
              href="/plise-perde-fiyat-hesaplama"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-brand text-white rounded-md hover:bg-brand-dark transition-colors"
            >
              <Calculator size={16} />
              Fiyat Hesapla
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-brand-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-border bg-white max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          <nav className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2 text-sm rounded-md ${
                      isActive(item.href)
                        ? "bg-brand/10 text-brand font-medium"
                        : "text-brand-text hover:bg-brand-bg"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.children && <ChevronRight size={14} className="opacity-60 rotate-90" />}
                  </Link>
                ) : (
                  <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-brand-text">
                    <span>{item.label}</span>
                    {item.children && <ChevronRight size={14} className="opacity-60 rotate-90" />}
                  </div>
                )}
                {item.children && (
                  <div className="ml-3 border-l border-brand-border pl-3 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-3 py-1.5 text-sm rounded-md ${
                          isActive(child.href)
                            ? "bg-brand/10 text-brand font-medium"
                            : "text-brand-text-light hover:text-brand hover:bg-brand-bg"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 space-y-2">
              <Link
                href="/plise-perde-fiyatlari"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-md transition-colors bg-brand/10 text-brand font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Fiyatlarımız
              </Link>
              <Link
                href="/plise-perde-fiyat-hesaplama"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium bg-brand text-white rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                <Calculator size={16} />
                Fiyat Hesapla
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
