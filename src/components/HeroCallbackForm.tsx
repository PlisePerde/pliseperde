"use client";

import { useState } from "react";
import { Phone, User, MessageSquare, MapPin, Loader2, CheckCircle2, AlertCircle, Check } from "lucide-react";

const cities = [
  { value: "istanbul-anadolu", label: "İstanbul (Anadolu Yakası)", districts: ["Pendik", "Kadıköy", "Üsküdar", "Maltepe", "Kartal", "Tuzla", "Sultanbeyli", "Sancaktepe", "Çekmeköy", "Ataşehir", "Şile", "Beykoz"] },
  { value: "istanbul-avrupa", label: "İstanbul (Avrupa Yakası)", districts: ["Şişli", "Beyoğlu", "Fatih", "Bakırköy", "Bahçelievler", "Bağcılar", "Küçükçekmece", "Avcılar", "Esenyurt", "Beylikdüzü", "Başakşehir", "Eyüpsultan", "Sultangazi", "Gaziosmanpaşa", "Esenler", "Bayrampaşa", "Zeytinburnu", "Sarıyer", "Beşiktaş", "Kağıthane", "Arnavutköy", "Çatalca", "Silivri"] },
  { value: "kocaeli", label: "Kocaeli", districts: ["İzmit", "Gebze", "Darıca", "Çayırova", "Körfez", "Derince", "Kandıra", "Karamürsel", "Gölcük", "Başiskele", "Kartepe", "Dilovası"] },
  { value: "sakarya", label: "Sakarya", districts: ["Adapazarı", "Serdivan", "Erenler", "Arifiye", "Sapanca", "Akyazı", "Hendek", "Karasu", "Kocaali", "Pamukova", "Geyve", "Ferizli", "Kaynarca", "Söğütlü", "Taraklı"] },
];

const products = ["Plise Perde", "Honeycomb", "Düet Perde"];

export default function HeroCallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitTime, setSubmitTime] = useState(0);
  const [honeypot, setHoneypot] = useState("");

  const selectedCity = cities.find((c) => c.value === city);

  const toggleProduct = (p: string) => {
    setSelectedProducts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedProducts.length === 0) {
      setStatus("error");
      setErrorMsg("En az bir ürün seçiniz.");
      return;
    }

    if (honeypot) {
      setStatus("error");
      setErrorMsg("Bir hata oluştu.");
      return;
    }

    const now = Date.now();
    if (now - submitTime < 5000) {
      setStatus("error");
      setErrorMsg("Çok hızlı gönderim. Lütfen birkaç saniye bekleyin.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, city: selectedCity?.label || city, district, product: selectedProducts.join(", "), note }),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        setSubmitTime(Date.now());
        setName("");
        setPhone("");
        setCity("");
        setDistrict("");
        setSelectedProducts([]);
        setNote("");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Bir hata oluştu.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  };

  if (status === "success") {
    return (
      <div className="w-full rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-400" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Talebiniz Alındı!</h3>
        <p className="text-sm text-white/70 mb-6 leading-relaxed">
          En kısa sürede sizi arayacağız.<br />Telefonunuzu açık tutun.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-white/60 hover:text-white font-medium underline transition-colors"
        >
          Yeni talep oluştur
        </button>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden">
      {/* Form Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
          <div className="w-12 h-12 rounded-xl bg-brand/20 backdrop-blur-sm border border-brand/30 flex items-center justify-center flex-shrink-0">
            <Phone size={22} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">Siz Biz Arayalım</h3>
            <p className="text-xs text-white/60 mt-0.5">
              Ücretsiz keşif ve ölçü talebi — hemen arayalım
            </p>
          </div>
        </div>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} noValidate className="px-6 pb-6 space-y-4">
        {/* Honeypot — bot'lar doldurur, gerçek kullanıcılar görmez */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] w-px h-px overflow-hidden opacity-0"
        />
        {/* Ad Soyad + Telefon — yan yana */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                required
                aria-label="Ad Soyad"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınız Soyadınız"
                className="w-full pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-white/35 bg-white/5 border border-white/15 rounded-lg focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 focus:bg-white/10 transition-all"
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <Phone size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${name.trim().length < 2 ? "text-white/20" : "text-white/40"}`} />
              <input
                type="tel"
                required
                aria-label="Telefon"
                disabled={name.trim().length < 2}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0 5XX XXX XX XX"
                className="w-full pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-white/35 bg-white/5 border border-white/15 rounded-lg focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 focus:bg-white/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* İl + İlçe — yan yana */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="relative">
              <MapPin size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${phone.replace(/[\s\-()]/g, "").length < 10 ? "text-white/20" : "text-white/40"}`} />
              <select
                required
                aria-label="İl"
                disabled={phone.replace(/[\s\-()]/g, "").length < 10}
                value={city}
                onChange={(e) => { setCity(e.target.value); setDistrict(""); }}
                className="w-full pl-9 pr-3 py-2.5 text-sm text-white bg-white/5 border border-white/15 rounded-lg focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 focus:bg-white/10 transition-all appearance-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <option value="" className="text-brand-text">İl seçin</option>
                {cities.map((c) => (
                  <option key={c.value} value={c.value} className="text-brand-text">{c.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="relative">
              <MapPin size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${!city ? "text-white/20" : "text-white/40"}`} />
              <select
                required
                aria-label="İlçe"
                disabled={!city}
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-sm text-white bg-white/5 border border-white/15 rounded-lg focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 focus:bg-white/10 transition-all appearance-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <option value="" className="text-brand-text">İlçe seçin</option>
                {selectedCity?.districts.map((d) => (
                  <option key={d} value={d} className="text-brand-text">{d}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* İlgilendiğiniz Ürünler — çoklu seçim, ilçe seçilmeden disabled */}
        <div>
          <div className={`bg-white/5 border border-white/15 rounded-lg p-3 transition-all ${!district ? "opacity-40 pointer-events-none" : ""}`}>
            <p className="text-[11px] text-white/50 mb-2.5 uppercase tracking-wide">İlgilendiğiniz Ürünler <span className="text-red-400">*</span></p>
            <div className="grid grid-cols-3 gap-2">
              {products.map((p) => {
                const checked = selectedProducts.includes(p);
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => toggleProduct(p)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-xs ${checked ? "bg-brand/20 border-brand/50 text-white" : "bg-white/5 border-white/10 text-white/60 hover:border-white/25 hover:text-white/80"}`}
                  >
                    <span className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border ${checked ? "bg-brand border-brand" : "border-white/25"}`}>
                      {checked && <Check size={12} className="text-white" />}
                    </span>
                    <span className="leading-tight">{p}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Not — ürün seçilmeden disabled */}
        <div>
          <div className="relative">
            <MessageSquare size={16} className={`absolute left-3 top-3 ${selectedProducts.length === 0 ? "text-white/20" : "text-white/40"}`} />
            <textarea
              value={note}
              aria-label="Not"
              onChange={(e) => setNote(e.target.value)}
              disabled={selectedProducts.length === 0}
              placeholder="Not: Oda sayısı, pencere ölçüsü, model tercihi..."
              rows={2}
              className="w-full pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-white/35 bg-white/5 border border-white/15 rounded-lg focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/40 focus:bg-white/10 transition-all resize-none disabled:opacity-40 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-xs text-red-300 bg-red-500/15 border border-red-400/20 rounded-xl px-3.5 py-2.5">
            <AlertCircle size={14} className="flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold bg-brand text-white rounded-xl hover:bg-brand-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand/20 hover:shadow-brand/30"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Gönderiliyor...
            </>
          ) : (
            <>
              <Phone size={16} />
              Beni Arayın
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-1.5 pt-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <p className="text-[10px] text-white/40 leading-relaxed">
            Bilgileriniz yalnızca sizi aramak için kullanılır, paylaşılmaz.
          </p>
        </div>
      </form>
    </div>
  );
}
