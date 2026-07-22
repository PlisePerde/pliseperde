"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function ReferenceFormModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted || !open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      subject: "Referans ve İş Ortağı Listesi Talebi",
      message: "Tüm referans ve iş ortaklarımızın listesini görmek istiyorum.",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.ok) {
        setSuccess(true);
      } else {
        setError(result.error || "Bir hata oluştu.");
      }
    } catch {
      setError("Bağlantı hatası. Lütfen tekrar deneyin.");
    } finally {
      setSubmitting(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Referans ve İş Ortağı Talep Formu"
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 md:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-text-light hover:text-brand-text transition-colors"
          aria-label="Kapat"
        >
          <X size={20} />
        </button>

        {success ? (
          <div className="text-center py-8">
            <div className="text-brand text-4xl mb-3">✓</div>
            <h3 className="text-lg font-semibold text-brand-text mb-2">
              Talebiniz Alındı!
            </h3>
            <p className="text-sm text-brand-text-light">
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-colors"
            >
              Kapat
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-lg md:text-xl font-semibold text-brand-text mb-2">
              Referans ve İş Ortağı Listesi
            </h3>
            <p className="text-sm text-brand-text-light mb-5">
              Tüm referans ve iş ortaklarımızın detaylı listesini görmek için
              formu doldurun.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-brand-text mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-brand-border text-sm focus:outline-none focus:border-brand"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-brand-text mb-1">
                    Firma
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-3 py-2 rounded-lg border border-brand-border text-sm focus:outline-none focus:border-brand"
                    placeholder="Firma adınız"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-brand-text mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-brand-border text-sm focus:outline-none focus:border-brand"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-brand-text mb-1">
                    E-Posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-brand-border text-sm focus:outline-none focus:border-brand"
                    placeholder="ornek@mail.com"
                  />
                </div>
              </div>
              {error && (
                <p className="text-xs text-red-500">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 rounded-lg bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors disabled:opacity-50"
              >
                {submitting ? "Gönderiliyor..." : "Talep Et"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
