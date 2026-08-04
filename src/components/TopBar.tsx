"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Truck,
  Shield,
  CreditCard,
  Clock,
  Calculator,
  MessageCircle,
  Search,
  Sparkles,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const rotatingAnnouncements = [
  { icon: Clock, text: "3-7 iş gününde üretim ve teslimat." },
  { icon: Truck, text: "Türkiye'nin 81 iline ücretsiz kargo." },
  { icon: Shield, text: "2 yıl üretici garantisi." },
  { icon: CreditCard, text: "Peşin fiyatına 3 taksit." },
];

export default function TopBar() {
  const [announceIndex, setAnnounceIndex] = useState(0);
  const [showQuickBar, setShowQuickBar] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnounceIndex((prev) => (prev + 1) % rotatingAnnouncements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowQuickBar(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const AnnounceIcon = rotatingAnnouncements[announceIndex].icon;

  return (
    <>
      {/* Katman 1: Smart + Announcement Bar */}
      <div className="bg-brand-text text-white">
        <div className="px-4 md:px-6 h-8 flex items-center justify-between text-xs relative">
          <span className="flex items-center gap-1.5 font-medium truncate transition-all duration-500 min-w-0">
            <AnnounceIcon size={13} className="flex-shrink-0" />
            <span className="truncate">{rotatingAnnouncements[announceIndex].text}</span>
          </span>
          <span className="hidden md:block absolute left-1/2 -translate-x-1/2 text-white/90 font-medium whitespace-nowrap">
            Türkiye ve Avrupa'nın Plise Perde Üreticisi!
          </span>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link href="/hizmet-bolgeleri" className="hidden sm:flex items-center gap-1 text-white/90 hover:text-white transition-colors font-medium touch-reset">
              <MapPin size={13} className="flex-shrink-0" />
              Hizmet Bölgeleri
            </Link>
            <div className="hidden sm:block h-3 w-px bg-white/30" />
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/80 hover:text-white transition-colors touch-reset">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors touch-reset">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/80 hover:text-white transition-colors touch-reset">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href={siteConfig.social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-white/80 hover:text-white transition-colors touch-reset">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.698-2.434-2.888-2.434-4.648 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/></svg>
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-white transition-colors touch-reset">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Quick Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-brand-border transition-all duration-300 ${
          showQuickBar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="px-4 h-10 flex items-center justify-center gap-2 md:gap-3">
          <Link
            href="/plise-perde-fiyat-hesaplama"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium bg-brand text-white rounded-md hover:bg-brand-dark transition-colors"
          >
            <Calculator size={14} />
            Fiyat Hesapla
          </Link>
          <a
            href={siteConfig.whatsapp}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium border border-green-500 text-green-600 rounded-md hover:bg-green-50 transition-colors"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
          <Link
            href="/ucretsiz-kesif"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium border border-brand-border text-brand-text rounded-md hover:bg-brand-bg transition-colors"
          >
            <Search size={14} />
            Ücretsiz Keşif
          </Link>
          <Link
            href="/ucretsiz-kesif"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium border border-brand-border text-brand-text rounded-md hover:bg-brand-bg transition-colors"
          >
            <Sparkles size={14} />
            Kumaş Numunesi
          </Link>
        </div>
      </div>
    </>
  );
}
