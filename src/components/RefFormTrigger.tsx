"use client";

import { useState } from "react";
import ReferenceFormModal from "./ReferenceFormModal";

export default function RefFormTrigger() {
  const [showRefForm, setShowRefForm] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowRefForm(true)}
        className="group flex flex-col items-center justify-center p-1 rounded-xl bg-brand-bg border-2 border-dashed border-brand hover:border-brand hover:shadow-md transition-all"
      >
        <div className="relative w-full h-24 md:h-28 flex flex-col items-center justify-center text-center">
          <p className="text-sm md:text-base font-semibold text-brand group-hover:text-brand-dark transition-colors">
            Tüm Referans ve İş Ortaklarımızı Görmek İçin
          </p>
          <p className="text-xs text-brand-text-light mt-1">
            İletişime Geçin
          </p>
        </div>
      </button>
      <ReferenceFormModal open={showRefForm} onClose={() => setShowRefForm(false)} />
    </>
  );
}
