"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

export default function TawkTo() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const propertyId = siteConfig.tawkTo.propertyId;
    const widgetId = siteConfig.tawkTo.widgetId;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s.charset = "UTF-8";
    s.setAttribute("crossorigin", "*");
    document.body.appendChild(s);

    return () => {
      const existing = document.querySelector(`script[src*="tawk.to"]`);
      if (existing) existing.remove();
    };
  }, []);

  return null;
}
