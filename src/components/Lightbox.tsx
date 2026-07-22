"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
  description?: string;
  width: number;
  height: number;
};

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const touchStart = useRef<{ x: number; y: number; t: number } | null>(null);
  const touchMoved = useRef(false);
  const lastTap = useRef(0);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const panStart = useRef<{ x: number; y: number } | null>(null);

  const image = images[index];

  const goPrev = useCallback(() => {
    if (index > 0) onNavigate(index - 1);
  }, [index, onNavigate]);

  const goNext = useCallback(() => {
    if (index < images.length - 1) onNavigate(index + 1);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { if (zoomed) { setZoomed(false); setPan({ x: 0, y: 0 }); } else onClose(); }
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "+" || e.key === "=") setZoomed(true);
      if (e.key === "-") { setZoomed(false); setPan({ x: 0, y: 0 }); }
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext, zoomed]);

  useEffect(() => {
    setZoomed(false);
    setPan({ x: 0, y: 0 });
  }, [index]);

  // Touch: double-tap=zoom, swipe=navigate (zoomsuz), drag=pan (zoomlu)
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    const now = Date.now();
    touchStart.current = { x: t.clientX, y: t.clientY, t: now };
    touchMoved.current = false;
    if (zoomed) {
      dragStart.current = { x: t.clientX, y: t.clientY };
      panStart.current = { ...pan };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) touchMoved.current = true;

    if (zoomed && dragStart.current && panStart.current) {
      e.preventDefault();
      setPan({
        x: panStart.current.x + (t.clientX - dragStart.current.x),
        y: panStart.current.y + (t.clientY - dragStart.current.y),
      });
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (!touchStart.current) return;
    const now = Date.now();
    const dt = now - touchStart.current.t;

    if (!touchMoved.current && dt < 300) {
      if (now - lastTap.current < 350) {
        setZoomed((z) => { if (z) setPan({ x: 0, y: 0 }); return !z; });
        lastTap.current = 0;
      } else {
        lastTap.current = now;
      }
    } else if (!zoomed && touchMoved.current) {
      const t = e.changedTouches[0];
      const dx = t.clientX - touchStart.current.x;
      if (Math.abs(dx) > 60) {
        if (dx > 0) goPrev();
        else goNext();
      }
    }
    touchStart.current = null;
    dragStart.current = null;
    panStart.current = null;
  };

  // Mouse: double-click=zoom, drag=pan (zoomlu)
  const onDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomed((z) => { if (z) setPan({ x: 0, y: 0 }); return !z; });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!zoomed) return;
    dragStart.current = { x: e.clientX, y: e.clientY };
    panStart.current = { ...pan };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!zoomed || !dragStart.current || !panStart.current) return;
    setPan({
      x: panStart.current.x + (e.clientX - dragStart.current.x),
      y: panStart.current.y + (e.clientY - dragStart.current.y),
    });
  };

  const onMouseUp = () => {
    dragStart.current = null;
    panStart.current = null;
  };

  // Wheel to zoom on desktop
  const onWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) setZoomed(true);
    else { setZoomed(false); setPan({ x: 0, y: 0 }); }
  };

  if (!image) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center overflow-hidden"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      {/* Close — top right */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-3 right-3 z-30 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Kapat"
      >
        <X size={26} />
      </button>

      {/* Counter — top left */}
      <div className="absolute top-3 left-3 z-30 text-white/70 text-sm font-medium">
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      {index > 0 && !zoomed && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Önceki"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {/* Next */}
      {index < images.length - 1 && !zoomed && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Sonraki"
        >
          <ChevronRight size={40} />
        </button>
      )}

      {/* Zoom toggle — bottom right */}
      <button
        onClick={(e) => { e.stopPropagation(); setZoomed((z) => { if (z) setPan({ x: 0, y: 0 }); return !z; }); }}
        className="absolute bottom-3 right-3 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label={zoomed ? "Uzaklaş" : "Yakınlaş"}
      >
        {zoomed ? <ZoomOut size={26} /> : <ZoomIn size={26} />}
      </button>

      {/* Image — her zaman merkezde, transform ile zoom+pan */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        style={{ touchAction: zoomed ? "none" : "pan-y" }}
        onClick={(e) => { if (e.target === e.currentTarget && !zoomed) onClose(); }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onWheel={onWheel}
        onDoubleClick={onDoubleClick}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="select-none"
          style={{
            maxWidth: "95%",
            maxHeight: "90%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            transform: `scale(${zoomed ? 2.5 : 1}) translate(${pan.x / (zoomed ? 2.5 : 1)}px, ${pan.y / (zoomed ? 2.5 : 1)}px)`,
            transition: zoomed ? "none" : "transform 0.2s ease-out",
            cursor: zoomed ? "grab" : "default",
          }}
          draggable={false}
        />
      </div>

      {/* Caption — bottom center, zoom olunca gizlenir */}
      {!zoomed && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center px-4 z-20 pointer-events-none">
          <div className="text-center">
            {image.caption && (
              <p className="text-white/90 text-sm font-medium">{image.caption}</p>
            )}
            {image.description && (
              <p className="text-white/50 text-xs mt-0.5">{image.description}</p>
            )}
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}
