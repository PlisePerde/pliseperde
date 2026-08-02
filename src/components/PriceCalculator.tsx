"use client";

import { useState, useMemo } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Product = {
  id: string;
  name: string;
  pricePerM2: number;
  category: "standard" | "blackout" | "tulle";
  description: string;
};

const PRODUCTS: Product[] = [
  { id: "diamond", name: "Diamond", pricePerM2: 1042.8, category: "standard", description: "Standart plise kumaş" },
  { id: "safir-rubin", name: "Safir - Rubin", pricePerM2: 1584.0, category: "standard", description: "Premium plise kumaş" },
  { id: "forest", name: "Forest", pricePerM2: 1584.0, category: "standard", description: "Doğa esintili kumaş" },
  { id: "crystal", name: "Crystal", pricePerM2: 1557.6, category: "standard", description: "Kristal dokulu kumaş" },
  { id: "fashion", name: "Fashion (Çift Taraflı)", pricePerM2: 1768.8, category: "standard", description: "Çift taraflı kumaş" },
  { id: "moonlight", name: "Moonlight (Yarı Blackout)", pricePerM2: 1980.0, category: "standard", description: "Yarı karartma kumaş" },
  { id: "blackout", name: "Blackout (Tam Blackout)", pricePerM2: 2428.8, category: "blackout", description: "Tam karartma kumaş" },
  { id: "tulle", name: "Tulle", pricePerM2: 1161.6, category: "tulle", description: "Tül plise kumaş" },
  { id: "valeria", name: "Valeria", pricePerM2: 1174.8, category: "standard", description: "Valeria kumaş" },
  { id: "elegant", name: "Elegant", pricePerM2: 1372.8, category: "standard", description: "Şık kumaş seçeneği" },
  { id: "honeycomb", name: "Honeycomb (Blackout) 2000", pricePerM2: 2640.0, category: "blackout", description: "Petek yapı blackout" },
  { id: "spark", name: "Spark", pricePerM2: 1372.8, category: "standard", description: "Spark kumaş" },
  { id: "linen-tulle", name: "Linen Tülle", pricePerM2: 1399.2, category: "tulle", description: "Keten dokulu tül" },
];

const MONTAJ_FEE = 280;
const MONTAJ_OPTIONS = [
  { id: "vidali", name: "Vidalı Sistem", description: "Vidalarla monte edilir — ücretsiz", fee: 0 },
  { id: "portrayli", name: "Portraylı Sistem", description: "Klik mekanizmasıyla monte edilir, vida deliği kalmaz", fee: MONTAJ_FEE },
  { id: "yapistirmali", name: "Yapışkanlı Sistem", description: "Çift taraflı bantla monte edilir, delmesiz", fee: MONTAJ_FEE },
  { id: "ciftli", name: "Çiftli Sistem", description: "Çift ürün için özel montaj", fee: MONTAJ_FEE },
] as const;

type SystemType = "tekli" | "ciftli" | "motorlu";

type WindowEntry = {
  id: number;
  width: string;
  height: string;
  qty: string;
};

function roundUpTo10(cm: number): number {
  if (cm <= 0) return 0;
  return Math.ceil(cm / 10) * 10;
}

function formatTL(n: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

let windowIdCounter = 0;

export default function PriceCalculator() {
  const [systemType, setSystemType] = useState<SystemType>("tekli");
  const [windows, setWindows] = useState<WindowEntry[]>([
    { id: windowIdCounter++, width: "", height: "", qty: "1" },
  ]);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [ciftliBlackout, setCiftliBlackout] = useState<string>("");
  const [ciftliTulle, setCiftliTulle] = useState<string>("");
  const [montajType, setMontajType] = useState<string>("vidali");

  const blackoutProducts = PRODUCTS.filter((p) => p.category === "blackout");
  const tulleProducts = PRODUCTS.filter((p) => p.category === "tulle");

  const addWindow = () => {
    setWindows((prev) => [...prev, { id: windowIdCounter++, width: "", height: "", qty: "1" }]);
  };

  const removeWindow = (id: number) => {
    setWindows((prev) => (prev.length > 1 ? prev.filter((w) => w.id !== id) : prev));
  };

  const updateWindow = (id: number, field: keyof WindowEntry, value: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, [field]: value } : w)));
  };

  const productSelected = systemType === "tekli" ? !!selectedProduct : !!ciftliBlackout && !!ciftliTulle;

  const calculation = useMemo(() => {
    if (!productSelected) return null;

    const validWindows = windows.filter((w) => {
      const wv = parseFloat(w.width);
      const hv = parseFloat(w.height);
      const qv = parseInt(w.qty) || 0;
      return wv > 0 && hv > 0 && qv > 0;
    });

    if (validWindows.length === 0) return null;

    let grandTotal = 0;
    let totalM2 = 0;
    let totalMontaj = 0;
    let totalQty = 0;

    type WindowResult = {
      index: number;
      origW: number;
      origH: number;
      roundedW: number;
      roundedH: number;
      m2: number;
      chargedM2: number;
      qty: number;
      products: { name: string; price: number }[];
      productTotal: number;
      montajTotal: number;
      montajCount: number;
      windowTotal: number;
    };

    const windowResults: WindowResult[] = [];

    for (let i = 0; i < validWindows.length; i++) {
      const w = validWindows[i];
      const origW = parseFloat(w.width);
      const origH = parseFloat(w.height);
      const qty = parseInt(w.qty) || 0;

      const roundedW = roundUpTo10(origW);
      const roundedH = roundUpTo10(origH);
      const m2 = (roundedW / 100) * (roundedH / 100);
      const chargedM2 = Math.max(m2, 1);

      let productPrice = 0;
      let montajCount = 0;
      let products: { name: string; price: number }[] = [];

      if (systemType === "tekli") {
        const product = PRODUCTS.find((p) => p.id === selectedProduct);
        if (!product) continue;
        productPrice = chargedM2 * product.pricePerM2;
        montajCount = 1;
        products = [{ name: product.name, price: productPrice }];
      } else if (systemType === "ciftli") {
        const p1 = PRODUCTS.find((p) => p.id === ciftliBlackout);
        const p2 = PRODUCTS.find((p) => p.id === ciftliTulle);
        if (!p1 || !p2) continue;
        const price1 = chargedM2 * p1.pricePerM2;
        const price2 = chargedM2 * p2.pricePerM2;
        productPrice = price1 + price2;
        montajCount = 2;
        products = [
          { name: p1.name, price: price1 },
          { name: p2.name, price: price2 },
        ];
      } else {
        continue;
      }

      const montajFee = MONTAJ_OPTIONS.find((m) => m.id === montajType)?.fee ?? MONTAJ_FEE;
      const montajTotal = montajFee * montajCount * qty;
      const productTotal = productPrice * qty;
      const windowTotal = productTotal + montajTotal;

      grandTotal += windowTotal;
      totalM2 += m2 * qty;
      totalMontaj += montajTotal;
      totalQty += qty;

      windowResults.push({
        index: windowResults.length + 1,
        origW,
        origH,
        roundedW,
        roundedH,
        m2,
        chargedM2,
        qty,
        products,
        productTotal,
        montajTotal,
        montajCount,
        windowTotal,
      });
    }

    if (windowResults.length === 0) return null;

    const allProductsMap = new Map<string, number>();
    windowResults.forEach((wr) => {
      wr.products.forEach((p: { name: string; price: number }) => {
        const existing = allProductsMap.get(p.name) || 0;
        allProductsMap.set(p.name, existing + p.price * wr.qty);
      });
    });

    return {
      windowResults,
      allProducts: Array.from(allProductsMap.entries()).map(([name, price]) => ({ name, price })),
      grandTotal,
      totalM2,
      totalMontaj,
      totalQty,
    };
  }, [windows, selectedProduct, ciftliBlackout, ciftliTulle, systemType, productSelected, montajType]);

  const canCalculate = productSelected && windows.some((w) => {
    const wv = parseFloat(w.width);
    const hv = parseFloat(w.height);
    const qv = parseInt(w.qty) || 0;
    return wv > 0 && hv > 0 && qv > 0;
  });

  const whatsappMessage = useMemo(() => {
    if (!calculation) return "";
    let msg = `Merhaba, plise perde fiyat hesaplama sonuçları:\n\n`;
    msg += `Sistem: ${systemType === "tekli" ? "Tekli" : "Çiftli"}\n`;
    msg += `Toplam Pencere Sayısı: ${calculation.totalQty}\n\n`;
    calculation.windowResults.forEach((wr) => {
      msg += `Pencere ${wr.index}: ${wr.origW}x${wr.origH} cm (Yuvarlanmış: ${wr.roundedW}x${wr.roundedH} cm) — ${wr.qty} adet\n`;
      msg += `  M²: ${wr.m2.toFixed(2)}`;
      if (wr.chargedM2 > wr.m2) {
        msg += ` (ücretlendirme: min 1 m²)`;
      }
      msg += `\n`;
    });
    msg += `\n`;
    calculation.allProducts.forEach((p) => {
      msg += `Ürün: ${p.name} — ${formatTL(p.price)}\n`;
    });
    msg += `Montaj: ${formatTL(calculation.totalMontaj)}\n`;
    msg += `Toplam M²: ${calculation.totalM2.toFixed(2)}\n`;
    msg += `Toplam: ${formatTL(calculation.grandTotal)}\n\n`;
    msg += `Net fiyat için keşif talep ediyorum.`;
    return encodeURIComponent(msg);
  }, [calculation, systemType]);

  return (
    <section
      aria-labelledby="calculator-heading"
      className="mb-8"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <meta itemProp="name" content="Plise Perde Fiyat Hesaplama Aracı" />
      <meta itemProp="applicationCategory" content="BusinessApplication" />
      <meta itemProp="operatingSystem" content="Web" />

      <div className="bg-white border border-brand-border rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-brand to-brand-dark px-5 py-4">
          <h2
            id="calculator-heading"
            className="text-lg md:text-xl font-bold text-white m-0"
          >
            Plise Perde Fiyat Hesaplama Aracı
          </h2>
          <p className="text-sm text-white/90 mt-1 m-0">
            Pencere ölçülerinizi girin, kumaş modelinizi seçin — anlık fiyat hesaplayın. Birden fazla pencere için + ile satır ekleyin.
          </p>
        </div>

        <div className="p-5 md:p-6">
          {/* Sistem Tipi */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-brand-text mb-3">
              Sistem Tipi
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "tekli", label: "Tekli Sistem", desc: "Tek kumaş" },
                { id: "ciftli", label: "Çiftli Sistem", desc: "İki kumaş (Gece/Gündüz)" },
                { id: "motorlu", label: "Motorlu Sistem", desc: "Motorlu — İletişime Geçin" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSystemType(opt.id as SystemType)}
                  className={`text-left p-3 rounded-lg border-2 transition-all ${
                    systemType === opt.id
                      ? "border-brand bg-brand/10"
                      : "border-brand-border hover:border-brand/50 bg-white"
                  }`}
                  aria-pressed={systemType === opt.id}
                >
                  <div className="text-sm font-semibold text-brand-text">
                    {opt.label}
                  </div>
                  <div className="text-xs text-brand-text-light mt-0.5">
                    {opt.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {systemType === "motorlu" ? (
            <div className="bg-brand-bg border border-brand rounded-lg p-6 text-center">
              <p className="text-base font-semibold text-brand-text mb-2">
                Motorlu Plise Perde Sistemleri
              </p>
              <p className="text-sm text-brand-text-light mb-4 leading-relaxed">
                Motorlu sistemler; pencere ölçüsü, motor tipi (tubular motor / akıllı ev
                entegrasyonu) ve kontrol yöntemine göre özel fiyatlandırılır. Net fiyat
                için ekibimizle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                    "Merhaba, motorlu plise perde sistemi için fiyat teklifi almak istiyorum."
                  )}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-medium rounded-lg hover:bg-brand-dark transition-colors"
                >
                  WhatsApp'tan İletişime Geç
                </a>
                <a
                  href="/iletisim/"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-brand text-brand text-sm font-medium rounded-lg hover:bg-brand-bg transition-colors"
                >
                  İletişim Sayfası
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Kumaş Seçimi */}
              {systemType === "tekli" && (
                <div className="mb-6">
                  <label
                    htmlFor="product-select"
                    className="block text-sm font-semibold text-brand-text mb-2"
                  >
                    Kumaş Modeli
                  </label>
                  <select
                    id="product-select"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-brand-text bg-white"
                  >
                    <option value="">Kumaş modeli seçin...</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {formatTL(p.pricePerM2)}/m²
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {systemType === "ciftli" && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-brand-text mb-3">
                    Çiftli Sistem — İki Kumaş Seçin
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="ciftli-blackout-select"
                        className="block text-xs font-medium text-brand-text-light mb-2"
                      >
                        1. Ürün — Blackout (Karartma)
                      </label>
                      <select
                        id="ciftli-blackout-select"
                        value={ciftliBlackout}
                        onChange={(e) => setCiftliBlackout(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-brand-text bg-white"
                      >
                        <option value="">Blackout seçin...</option>
                        {blackoutProducts.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} — {formatTL(p.pricePerM2)}/m²
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="ciftli-tulle-select"
                        className="block text-xs font-medium text-brand-text-light mb-2"
                      >
                        2. Ürün — Tülle (Işık Geirgen)
                      </label>
                      <select
                        id="ciftli-tulle-select"
                        value={ciftliTulle}
                        onChange={(e) => setCiftliTulle(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-brand-text bg-white"
                      >
                        <option value="">Tülle seçin...</option>
                        {tulleProducts.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} — {formatTL(p.pricePerM2)}/m²
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Pencere Ölçüleri — Çoklu */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-brand-text">
                    Pencere Ölçüleri
                  </label>
                  <button
                    type="button"
                    onClick={addWindow}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-brand rounded-lg hover:bg-brand-dark transition-colors"
                  >
                    <Plus size={14} />
                    Pencere Ekle
                  </button>
                </div>

                <div className="space-y-3">
                  {windows.map((w, idx) => {
                    const wv = parseFloat(w.width);
                    const hv = parseFloat(w.height);
                    const hasMeasure = wv > 0 && hv > 0;

                    return (
                      <div
                        key={w.id}
                        className="flex flex-col sm:flex-row gap-3 items-start sm:items-end p-3 bg-brand-bg/50 border border-brand-border rounded-lg"
                      >
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="inline-flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-brand rounded-full">
                            {idx + 1}
                          </span>
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-3 w-full">
                          <div>
                            <label
                              htmlFor={`width-${w.id}`}
                              className="block text-xs font-medium text-brand-text-light mb-1"
                            >
                              Genişlik (cm)
                            </label>
                            <input
                              id={`width-${w.id}`}
                              type="number"
                              inputMode="numeric"
                              min="10"
                              max="500"
                              value={w.width}
                              onChange={(e) => updateWindow(w.id, "width", e.target.value)}
                              placeholder="örn: 80"
                              className="w-full px-3 py-2 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-brand-text bg-white"
                            />
                            {wv > 0 && (
                              <p className="text-xs text-brand mt-0.5">
                                ↑ {roundUpTo10(wv)} cm
                              </p>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor={`height-${w.id}`}
                              className="block text-xs font-medium text-brand-text-light mb-1"
                            >
                              Yükseklik (cm)
                            </label>
                            <input
                              id={`height-${w.id}`}
                              type="number"
                              inputMode="numeric"
                              min="10"
                              max="500"
                              value={w.height}
                              onChange={(e) => updateWindow(w.id, "height", e.target.value)}
                              placeholder="örn: 120"
                              className="w-full px-3 py-2 text-sm border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-brand-text bg-white"
                            />
                            {hv > 0 && (
                              <p className="text-xs text-brand mt-0.5">
                                ↑ {roundUpTo10(hv)} cm
                              </p>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor={`qty-${w.id}`}
                              className="block text-xs font-medium text-brand-text-light mb-1"
                            >
                              Adet
                            </label>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => {
                                  const cur = parseInt(w.qty) || 1;
                                  updateWindow(w.id, "qty", String(Math.max(1, cur - 1)));
                                }}
                                className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-brand-text border border-brand-border rounded-lg hover:bg-brand-bg transition-colors"
                                aria-label="Adet azalt"
                              >
                                <Minus size={14} />
                              </button>
                              <input
                                id={`qty-${w.id}`}
                                type="number"
                                inputMode="numeric"
                                min="1"
                                max="100"
                                value={w.qty}
                                onChange={(e) => updateWindow(w.id, "qty", e.target.value)}
                                className="w-full px-2 py-2 text-sm text-center border border-brand-border rounded-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-brand-text bg-white"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const cur = parseInt(w.qty) || 1;
                                  updateWindow(w.id, "qty", String(Math.min(100, cur + 1)));
                                }}
                                className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-brand-text border border-brand-border rounded-lg hover:bg-brand-bg transition-colors"
                                aria-label="Adet artır"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                        {windows.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeWindow(w.id)}
                            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 border border-red-200 rounded-lg transition-colors"
                            aria-label="Pencere satırını sil"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Montaj Tipi */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-brand-text mb-3">
                  Montaj Tipi
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {MONTAJ_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setMontajType(opt.id)}
                      className={`text-left p-3 rounded-lg border-2 transition-all ${
                        montajType === opt.id
                          ? "border-brand bg-brand/10"
                          : "border-brand-border hover:border-brand/50 bg-white"
                      }`}
                      aria-pressed={montajType === opt.id}
                    >
                      <div className="text-sm font-semibold text-brand-text">
                        {opt.name}
                      </div>
                      <div className="text-xs text-brand-text-light mt-0.5">
                        {opt.description}
                      </div>
                      <div className="text-xs font-medium text-brand mt-1">
                        {opt.fee === 0 ? "Ücretsiz" : `${formatTL(opt.fee)}/adet`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sonuç */}
              {canCalculate && calculation ? (
                <div className="bg-gradient-to-br from-brand-bg to-brand-light/10 border border-brand rounded-xl p-5 md:p-6">
                  <h3 className="text-base font-bold text-brand-text mb-4">
                    Hesaplama Sonucu
                  </h3>

                  {/* Pencere Özetleri */}
                  <div className="space-y-2 mb-4">
                    {calculation.windowResults.map((wr) => (
                      <div
                        key={wr.index}
                        className="bg-white border border-brand-border rounded-lg p-3"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-brand rounded-full">
                            {wr.index}
                          </span>
                          <span className="text-sm font-semibold text-brand-text">
                            {formatTL(wr.windowTotal)}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-brand-text-light">
                          <div>
                            <span className="text-brand-text-light/60">Ölçü:</span>{" "}
                            <span className="font-medium text-brand-text">{wr.origW}×{wr.origH} cm</span>
                          </div>
                          <div>
                            <span className="text-brand-text-light/60">Yuvarlanmış:</span>{" "}
                            <span className="font-medium text-brand">{wr.roundedW}×{wr.roundedH} cm</span>
                          </div>
                          <div>
                            <span className="text-brand-text-light/60">M²:</span>{" "}
                            <span className="font-medium text-brand-text">
                              {wr.m2.toFixed(2)} × {wr.qty}
                              {wr.chargedM2 > wr.m2 && (
                                <span className="text-brand ml-1">(min 1 m²)</span>
                              )}
                            </span>
                          </div>
                          <div>
                            <span className="text-brand-text-light/60">Montaj:</span>{" "}
                            <span className="font-medium text-brand-text">{formatTL(wr.montajTotal)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ürün Özeti */}
                  <div className="bg-white border border-brand-border rounded-lg p-4 mb-4">
                    <p className="text-xs text-brand-text-light mb-2 font-semibold">Ürün Özeti</p>
                    {calculation.allProducts.map((p, i) => (
                      <div key={i} className="flex justify-between text-xs text-brand-text mb-1">
                        <span>{p.name}</span>
                        <span className="font-medium">{formatTL(p.price)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-xs text-brand-text mb-1 pt-2 border-t border-brand-border mt-2">
                      <span>Toplam Montaj</span>
                      <span className="font-medium">{formatTL(calculation.totalMontaj)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-brand-text-light pt-1">
                      <span>Toplam M² / Toplam Adet</span>
                      <span>{calculation.totalM2.toFixed(2)} m² / {calculation.totalQty} adet</span>
                    </div>
                  </div>

                  {/* Toplam */}
                  <div className="bg-brand text-white rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-white/80">Tahmini Toplam Fiyat (KDV Dahil)</p>
                      <p className="text-2xl md:text-3xl font-bold">
                        {formatTL(calculation.grandTotal)}
                      </p>
                    </div>
                    <a
                      href={`${siteConfig.whatsapp}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-brand text-sm font-bold rounded-lg hover:bg-brand-bg transition-colors whitespace-nowrap"
                    >
                      WhatsApp'tan Teklif Al
                    </a>
                  </div>

                  <p className="text-xs text-brand-text-light mt-3 text-center">
                    * Bu fiyat tahminidir. Ölçü yukarıya 10 cm aralıklarla yuvarlanmıştır.
                    Net fiyat için ücretsiz keşif öneririz.
                  </p>
                </div>
              ) : (
                <div className="bg-brand-bg border border-brand-border rounded-lg p-6 text-center">
                  <p className="text-sm text-brand-text-light">
                    {!productSelected
                      ? systemType === "tekli"
                        ? "Lütfen kumaş modeli seçin."
                        : "Lütfen her iki kumaş modelini de seçin."
                      : "Lütfen en az bir pencere için ölçü girin."}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
