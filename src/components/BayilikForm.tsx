"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const cityOptions = [
  "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Konya", "Gaziantep",
  "Kocaeli", "Sakarya", "Yalova", "Tekirdağ", "Edirne", "Balıkesir", "Manisa",
  "Aydın", "Muğla", "Denizli", "Eskişehir", "Kayseri", "Samsun", "Trabzon",
  "Mersin", "Hatay", "Şanlıurfa", "Diyarbakır", "Malatya", "Kahramanmaraş",
  "Afyonkarahisar", "Kütahya", "Uşak", "Isparta", "Burdur", "Çanakkale",
  "Zonguldak", "Bolu", "Düzce", "Karabük", "Bartın", "Amasya", "Tokat",
  "Çorum", "Ordu", "Giresun", "Sinop", "Kastamonu", "Artvin", "Rize",
  "Gümüşhane", "Bayburt", "Erzurum", "Erzincan", "Ağrı", "Kars", "Ardahan",
  "Iğdır", "Muş", "Van", "Bitlis", "Hakkari", "Siirt", "Şırnak",
  "Mardin", "Batman", "Adıyaman", "Kilis", "Osmaniye", "Nevşehir",
  "Niğde", "Aksaray", "Kırşehir", "Karaman", "Yozgat", "Sivas",
  "Bingöl", "Tunceli", "Elazığ", "Diğer",
];

const businessTypeOptions = [
  "Perdeci / Perde Mağazası",
  "Mobilyacı / İç Mimar",
  "Yapı Market / Ev Tekstili",
  "PVC Doğrama / Camcı",
  "İnşaat / Taahhüt",
  "Mimarlık / Dekorasyon",
  "Online Satış / E-Ticaret",
  "Diğer",
];

type Status = "idle" | "loading" | "success" | "error";

export default function BayilikForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    businessType: "",
    showroom: "",
    experience: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      "*Plise Perde — Bayilik Başvurusu*",
      "",
      `*Ad Soyad:* ${form.name}`,
      `*Firma:* ${form.company}`,
      `*Telefon:* ${form.phone}`,
      `*E-Posta:* ${form.email}`,
      `*Şehir:* ${form.city}`,
      `*İş Türü:* ${form.businessType}`,
      `*Showroom:* ${form.showroom || "Belirtilmedi"}`,
      `*Tecrübe:* ${form.experience || "Belirtilmedi"}`,
      "",
      `*Mesaj:*`,
      form.message,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleWhatsApp = () => {
    const msg = buildWhatsAppMessage();
    const url = `${siteConfig.whatsapp}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, subject: "Bayilik Başvurusu" }),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        setForm({
          name: "", company: "", phone: "", email: "",
          city: "", businessType: "", showroom: "", experience: "", message: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Bir hata oluştu.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Sunucuya ulaşılamadı. Lütfen WhatsApp'tan yazın.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-6 bg-white border border-brand-border rounded-xl">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-brand-text mb-2">Bayilik Başvurunuz Alındı</h3>
          <p className="text-sm text-brand-text-light mb-6">Başvurunuz en kısa sürede değerlendirilecek ve size geri dönüş yapacağız.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setStatus("idle")}
              className="px-4 py-2.5 text-sm font-medium border border-brand-border rounded-lg text-brand-text hover:bg-brand hover:text-white transition-colors"
            >
              Yeni Başvuru
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-[#25D366] text-white rounded-lg hover:bg-[#1da851] transition-colors"
            >
              <WhatsAppIcon size={16} />
              WhatsApp'tan da Gönder
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white border border-brand-border rounded-xl shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-brand-text mb-1">Bayilik Başvuru Formu</h2>
        <p className="text-xs text-brand-text-light">
          Formu doldurun, e-posta ile ulaştırın veya WhatsApp'tan anında gönderin.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-brand-text mb-1.5 block" htmlFor="name">
              Ad Soyad <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Adınız ve soyadınız"
              value={form.name}
              onChange={handleChange}
              className="w-full h-11 px-3.5 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-brand-text mb-1.5 block" htmlFor="company">
              Firma / Şirket <span className="text-red-500">*</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              placeholder="Firma adınız"
              value={form.company}
              onChange={handleChange}
              className="w-full h-11 px-3.5 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-brand-text mb-1.5 block" htmlFor="phone">
              Telefon <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="05XX XXX XX XX"
              value={form.phone}
              onChange={handleChange}
              className="w-full h-11 px-3.5 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-brand-text mb-1.5 block" htmlFor="email">
              E-Posta <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="ornek@email.com"
              value={form.email}
              onChange={handleChange}
              className="w-full h-11 px-3.5 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-brand-text mb-1.5 block" htmlFor="city">
              Şehir <span className="text-red-500">*</span>
            </label>
            <select
              id="city"
              name="city"
              required
              value={form.city}
              onChange={handleChange}
              className="w-full h-11 px-3.5 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all bg-white"
            >
              <option value="" disabled>Şehir seçiniz</option>
              {cityOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-brand-text mb-1.5 block" htmlFor="businessType">
              İş Türü <span className="text-red-500">*</span>
            </label>
            <select
              id="businessType"
              name="businessType"
              required
              value={form.businessType}
              onChange={handleChange}
              className="w-full h-11 px-3.5 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all bg-white"
            >
              <option value="" disabled>İş türünüüz seçiniz</option>
              {businessTypeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-brand-text mb-1.5 block" htmlFor="showroom">
              Showroom / Mağaza Durumu
            </label>
            <select
              id="showroom"
              name="showroom"
              value={form.showroom}
              onChange={handleChange}
              className="w-full h-11 px-3.5 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all bg-white"
            >
              <option value="" disabled>Seçiniz (opsiyonel)</option>
              <option value="Var — 50m² altı">Var — 50m² altı</option>
              <option value="Var — 50-100m²">Var — 50-100m²</option>
              <option value="Var — 100m² üzeri">Var — 100m² üzeri</option>
              <option value="Yok — Açmayı planlıyorum">Yok — Açmayı planlıyorum</option>
              <option value="Yok — Online satış">Yok — Online satış</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-brand-text mb-1.5 block" htmlFor="experience">
              Perde Sektörü Tecrübesi
            </label>
            <select
              id="experience"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full h-11 px-3.5 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all bg-white"
            >
              <option value="" disabled>Seçiniz (opsiyonel)</option>
              <option value="0 yıl — Yeni gireceğim">0 yıl — Yeni gireceğim</option>
              <option value="1-3 yıl">1-3 yıl</option>
              <option value="4-7 yıl">4-7 yıl</option>
              <option value="8-15 yıl">8-15 yıl</option>
              <option value="15+ yıl">15+ yıl</option>
            </select>
          </div>
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Mevcut işletmeniz, hedefleriniz ve bayilik beklentileriniz hakkında kısaca bilgi verin..."
            value={form.message}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
          />
        </div>

        {status === "error" && (
          <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">
            {errorMsg}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center justify-center gap-2 flex-1 h-11 px-4 py-2.5 text-sm font-semibold bg-brand text-white rounded-lg hover:bg-brand-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Gönderiliyor...
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22 11 13 2 9 22 2Z" />
                </svg>
                Başvuruyu Gönder
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 h-11 px-4 py-2.5 text-sm font-semibold bg-[#25D366] text-white rounded-lg hover:bg-[#1da851] transition-colors"
          >
            <WhatsAppIcon size={18} />
            WhatsApp ile Gönder
          </button>
        </div>
      </form>
    </div>
  );
}
