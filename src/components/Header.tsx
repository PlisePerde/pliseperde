"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Calculator, Phone, ChevronRight, ChevronDown, Tag } from "lucide-react";
import { navItems, type NavItem, type NavChild } from "@/data/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string | null) => {
    if (!href) return false;
    const cleanPath = pathname.replace(/\/$/, "");
    const cleanHref = href.replace(/\/$/, "");
    return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + "/");
  };

  const isChildActive = (item: NavItem) => {
    const checkChildren = (children: NavChild[]): boolean =>
      children.some((child) => {
        if (isActive(child.href)) return true;
        if (child.children) return checkChildren(child.children);
        return false;
      });
    if (item.children && checkChildren(item.children)) return true;
    if (item.groups) return item.groups.some((g) => checkChildren(g.items));
    return false;
  };

  const hasSubmenu = (item: NavItem) =>
    (item.children && item.children.length > 0) || !!item.groups;

  const isMegaMenu = (item: NavItem) =>
    !!item.groups || !!item.megaWithImages || (item.children ? item.children.length > 6 : false);

  const getMegaColumns = (item: NavItem) => {
    if (item.groups) return item.groups.length;
    if (!item.children) return 1;
    return Math.min(4, Math.ceil(item.children.length / 6));
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
                className="w-auto"
                style={{ width: "auto", height: "2.25rem" }}
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
          <nav className="hidden lg:flex items-center self-stretch gap-1 relative">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`h-full flex items-center ${item.megaWithImages ? "" : "relative"}`}
                onMouseEnter={() => hasSubmenu(item) && setOpenDropdown(item.label)}
                onMouseLeave={() => { setOpenDropdown(null); setOpenSubmenu(null); }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(item.href) || isChildActive(item) || openDropdown === item.label
                        ? "bg-brand-bg text-brand font-medium"
                        : "text-brand-text hover:text-brand hover:bg-brand-bg"
                    }`}
                  >
                    {item.label}
                    {hasSubmenu(item) && (
                      <ChevronDown size={14} className={`opacity-60 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    )}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(item.href) || isChildActive(item) || openDropdown === item.label
                        ? "bg-brand-bg text-brand font-medium"
                        : "text-brand-text hover:text-brand hover:bg-brand-bg"
                    }`}
                  >
                    {item.label}
                    {hasSubmenu(item) && (
                      <ChevronDown size={14} className={`opacity-60 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    )}
                  </button>
                )}
                {hasSubmenu(item) && openDropdown === item.label && (
                  isMegaMenu(item) ? (
                    item.megaWithImages ? (
                      <div className="absolute top-full left-0 right-0 mt-px bg-white border border-brand-border rounded-lg shadow-xl p-4">
                        <div className="grid grid-cols-5 gap-3">
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`group flex flex-col rounded-lg border transition-all overflow-hidden ${
                                isActive(child.href)
                                  ? "border-brand bg-brand-bg"
                                  : "border-brand-border hover:border-brand hover:shadow-md"
                              }`}
                            >
                              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-brand-bg to-brand-light/20 flex items-center justify-center">
                                {child.image ? (
                                  <Image
                                    src={child.image}
                                    alt={child.label}
                                    fill
                                    className="object-cover"
                                    sizes="180px"
                                  />
                                ) : (
                                  <span className="text-sm font-medium text-brand-text-light">
                                    Plise Perde
                                  </span>
                                )}
                              </div>
                              <div className="p-2 text-center">
                                <span className="text-sm font-medium text-brand-text group-hover:text-brand transition-colors block">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-xs text-brand-text-light mt-0.5 block">
                                    {child.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : item.groups ? (
                      <div className="absolute top-full left-0 mt-px bg-white border border-brand-border rounded-lg shadow-xl py-3 px-4" style={{ width: `${item.groups.length * 180}px`, minWidth: "480px" }}>
                        <div className="grid gap-x-6" style={{ gridTemplateColumns: `repeat(${item.groups.length}, 1fr)` }}>
                          {item.groups.map((group) => (
                            <div key={group.title}>
                              <h3 className="text-xs font-semibold text-brand uppercase tracking-wide mb-2 px-2">
                                {group.title}
                              </h3>
                              <div className="space-y-0.5">
                                {group.items.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
                                      isActive(child.href)
                                        ? "bg-brand/10 text-brand font-medium"
                                        : "text-brand-text hover:text-brand hover:bg-brand-bg"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="absolute top-full left-0 mt-px bg-white border border-brand-border rounded-lg shadow-xl py-3 px-4" style={{ width: `${getMegaColumns(item) * 180}px`, minWidth: "480px" }}>
                        <div className="grid gap-x-6" style={{ gridTemplateColumns: `repeat(${getMegaColumns(item)}, 1fr)` }}>
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
                                isActive(child.href)
                                  ? "bg-brand/10 text-brand font-medium"
                                  : "text-brand-text hover:text-brand hover:bg-brand-bg"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="absolute top-full left-0 mt-px min-w-[220px] bg-white border border-brand-border rounded-lg shadow-xl py-2">
                      {item.children!.map((child) => {
                        const childActive = isActive(child.href);
                        const hasNested = child.children && child.children.length > 0;
                        return (
                          <div
                            key={child.href}
                            className="relative"
                            onMouseEnter={() => hasNested && setOpenSubmenu(child.href)}
                            onMouseLeave={() => hasNested && setOpenSubmenu(null)}
                          >
                            <Link
                              href={child.href}
                              className={`flex items-center justify-between px-4 py-2 text-sm rounded-md transition-colors mx-1 ${
                                childActive
                                  ? "bg-brand/10 text-brand font-medium"
                                  : "text-brand-text hover:text-brand hover:bg-brand-bg"
                              }`}
                            >
                              <span>{child.label}</span>
                              {hasNested && <ChevronRight size={14} className="opacity-60" />}
                            </Link>
                            {hasNested && openSubmenu === child.href && (
                              <div className="absolute left-full top-0 min-w-[200px] bg-white border border-brand-border rounded-lg shadow-xl py-2">
                                {child.children!.map((grandchild) => (
                                  <Link
                                    key={grandchild.href}
                                    href={grandchild.href}
                                    className={`block px-4 py-2 text-sm rounded-md transition-colors mx-1 ${
                                      isActive(grandchild.href)
                                        ? "bg-brand/10 text-brand font-medium"
                                        : "text-brand-text hover:text-brand hover:bg-brand-bg"
                                    }`}
                                  >
                                    {grandchild.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/plise-perde-fiyatlari"
              className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-md transition-colors bg-brand/10 text-brand font-medium hover:bg-brand/20"
            >
              <Tag size={16} />
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
                    {hasSubmenu(item) && <ChevronDown size={14} className="opacity-60" />}
                  </Link>
                ) : (
                  <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-brand-text">
                    <span>{item.label}</span>
                    {hasSubmenu(item) && <ChevronDown size={14} className="opacity-60" />}
                  </div>
                )}
                {item.groups ? (
                  <div className="ml-3 border-l border-brand-border pl-3 space-y-2">
                    {item.groups.map((group) => (
                      <div key={group.title}>
                        <h4 className="text-xs font-semibold text-brand uppercase tracking-wide mt-2 mb-1 px-3">
                          {group.title}
                        </h4>
                        <div className="space-y-0.5">
                          {group.items.map((child) => (
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
                      </div>
                    ))}
                  </div>
                ) : item.children ? (
                  <div className="ml-3 border-l border-brand-border pl-3 space-y-0.5">
                    {item.children.map((child) => (
                      <div key={child.href}>
                        <Link
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
                        {child.children && (
                          <div className="ml-3 border-l border-brand-border pl-3 space-y-0.5">
                            {child.children.map((grandchild) => (
                              <Link
                                key={grandchild.href}
                                href={grandchild.href}
                                className={`block px-3 py-1.5 text-sm rounded-md ${
                                  isActive(grandchild.href)
                                    ? "bg-brand/10 text-brand font-medium"
                                    : "text-brand-text-light hover:text-brand hover:bg-brand-bg"
                                }`}
                                onClick={() => setMobileOpen(false)}
                              >
                                {grandchild.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="pt-2 space-y-2">
              <Link
                href="/plise-perde-fiyatlari"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-md transition-colors bg-brand/10 text-brand font-medium hover:bg-brand/20"
                onClick={() => setMobileOpen(false)}
              >
                <Tag size={16} />
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
