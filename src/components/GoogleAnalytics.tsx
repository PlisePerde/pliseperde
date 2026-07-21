"use client";

import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = "https://www.googletagmanager.com/gtag/js?id=G-JVJJ30BW4H";
      document.head.appendChild(script1);

      script1.onload = () => {
        const script2 = document.createElement("script");
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JVJJ30BW4H');
        `;
        document.head.appendChild(script2);
      };
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
