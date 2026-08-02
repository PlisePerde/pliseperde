"use client";

import { useState, useEffect, useCallback } from "react";
import { WifiOff, RefreshCw, Phone, MessageCircle, Mail, Home, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function OfflinePage() {
  const [isChecking, setIsChecking] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const checkConnection = useCallback(async () => {
    setIsChecking(true);
    try {
      const response = await fetch("/favicon.ico", {
        method: "HEAD",
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      });
      if (response.ok) {
        setIsOnline(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch {
      setIsOnline(false);
    } finally {
      setIsChecking(false);
      setRetryCount((c) => c + 1);
    }
  }, []);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (navigator.onLine) {
      checkConnection();
    }

    const interval = setInterval(() => {
      if (!isOnline) {
        checkConnection();
      }
    }, 5000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearInterval(interval);
    };
  }, [checkConnection, isOnline]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-bg via-white to-brand-bg px-4 py-8">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="/logo.webp"
            alt="Plise Perde"
            className="h-12 md:h-16 w-auto mx-auto mb-4"
          />
        </div>

        {/* Main Card */}
        <div className="bg-white border-2 border-brand/30 rounded-2xl shadow-lg overflow-hidden">
          {/* Status Banner */}
          <div className={`px-6 py-4 flex items-center gap-3 transition-colors ${isOnline ? "bg-green-50" : "bg-orange-50"}`}>
            {isOnline ? (
              <>
                <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                <div>
                  <p className="text-sm font-semibold text-green-800">Bağlantı geri geldi!</p>
                  <p className="text-xs text-green-700">Ana sayfaya yönlendiriliyorsunuz...</p>
                </div>
              </>
            ) : isChecking ? (
              <>
                <Loader2 className="text-brand animate-spin shrink-0" size={24} />
                <div>
                  <p className="text-sm font-semibold text-brand-text">Bağlantı kontrol ediliyor...</p>
                  <p className="text-xs text-brand-text-light">Lütfen bekleyin</p>
                </div>
              </>
            ) : (
              <>
                <WifiOff className="text-orange-500 shrink-0" size={24} />
                <div>
                  <p className="text-sm font-semibold text-brand-text">Çevrimdışısınız</p>
                  <p className="text-xs text-brand-text-light">İnternet bağlantınız şu anda yok</p>
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {!isOnline && (
              <>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-50 rounded-full mb-4">
                    <WifiOff className="text-orange-500" size={36} />
                  </div>
                  <h1 className="text-xl md:text-2xl font-bold text-brand-text mb-2">
                    İnternet Bağlantısı Yok
                  </h1>
                  <p className="text-sm text-brand-text-light leading-relaxed">
                    Bağlantınızı kontrol edip tekrar deneyin. Acil durumlarda aşağıdaki yöntemlerle bize ulaşabilirsiniz.
                  </p>
                </div>

                {/* Retry Button */}
                <button
                  onClick={checkConnection}
                  disabled={isChecking}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand text-white rounded-lg font-medium hover:bg-brand-dark transition-colors mb-6 disabled:opacity-60"
                >
                  {isChecking ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Kontrol Ediliyor...
                    </>
                  ) : (
                    <>
                      <RefreshCw size={18} />
                      Tekrar Dene
                    </>
                  )}
                </button>

                {/* Contact Cards */}
                <div className="space-y-3 mb-6">
                  <p className="text-xs font-semibold text-brand-text uppercase tracking-wide mb-2">
                    Acil İletişim
                  </p>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-3 p-4 bg-brand-bg border border-brand-border rounded-lg hover:border-brand transition-colors"
                  >
                    <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="text-brand" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-brand-text">Telefon</p>
                      <p className="text-xs text-brand-text-light">{siteConfig.phoneDisplay}</p>
                    </div>
                    <span className="text-xs text-brand font-medium">Ara</span>
                  </a>

                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-[#25D366]/5 border border-[#25D366]/20 rounded-lg hover:border-[#25D366] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                      <MessageCircle className="text-[#25D366]" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-brand-text">WhatsApp</p>
                      <p className="text-xs text-brand-text-light">{siteConfig.phoneDisplay}</p>
                    </div>
                    <span className="text-xs text-[#25D366] font-medium">Yaz</span>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 p-4 bg-brand-bg border border-brand-border rounded-lg hover:border-brand transition-colors"
                  >
                    <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-brand" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-brand-text">E-Posta</p>
                      <p className="text-xs text-brand-text-light">{siteConfig.email}</p>
                    </div>
                    <span className="text-xs text-brand font-medium">Gönder</span>
                  </a>
                </div>

                {/* Service Summary */}
                <div className="bg-brand-light/10 border border-brand/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} className="text-brand" />
                    <p className="text-sm font-semibold text-brand">Plise Perde Hizmetleri</p>
                  </div>
                  <p className="text-xs text-brand-text-light leading-relaxed">
                    Ücretsiz keşif · Profesyonel montaj · 2 yıl garanti · Türkiye geneli hizmet · Özel ölçü üretim
                  </p>
                </div>

                {/* Auto-check Info */}
                <div className="text-center">
                  <p className="text-xs text-brand-text-light">
                    Bağlantı her 5 saniyede bir otomatik kontrol ediliyor
                    {retryCount > 0 && ` · Deneme: ${retryCount}`}
                  </p>
                </div>
              </>
            )}

            {isOnline && (
              <div className="text-center py-8">
                <CheckCircle2 className="text-green-600 mx-auto mb-4" size={48} />
                <p className="text-base font-semibold text-brand-text mb-2">
                  Bağlantı Geri Geldi!
                </p>
                <p className="text-sm text-brand-text-light mb-4">
                  Ana sayfaya otomatik olarak yönlendiriliyorsunuz...
                </p>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white rounded-lg font-medium hover:bg-brand-dark transition-colors"
                >
                  <Home size={18} />
                  Ana Sayfaya Git
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-brand-text-light">
            {siteConfig.name} · {siteConfig.address.district}, {siteConfig.address.city}
          </p>
          <p className="text-xs text-brand-text-light mt-1">
            {siteConfig.openingHours.opens} - {siteConfig.openingHours.closes} · Pazartesi - Cumartesi
          </p>
        </div>
      </div>
    </div>
  );
}
