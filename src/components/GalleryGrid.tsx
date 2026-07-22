"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { galleryCategories } from "@/data/gallery";
import Lightbox, { type LightboxImage } from "./Lightbox";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = galleryCategories;

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") {
      return categories.flatMap((cat) =>
        cat.images.map((img) => ({ ...img, categoryId: cat.id, categoryLabel: cat.label }))
      );
    }
    const cat = categories.find((c) => c.id === activeCategory);
    if (!cat) return [];
    return cat.images.map((img) => ({ ...img, categoryId: cat.id, categoryLabel: cat.label }));
  }, [activeCategory, categories]);

  const lightboxImages: LightboxImage[] = filteredImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    caption: img.caption,
    description: img.description,
    width: img.width,
    height: img.height,
  }));

  const hasAnyImages = categories.some((c) => c.images.length > 0);

  if (!hasAnyImages) {
    return (
      <div className="text-center py-16 px-4">
        <p className="text-brand-text-light text-sm">
          Galeri fotoğrafları yakında yüklenecektir.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Galeri kategorileri">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 text-sm rounded-md font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-brand text-white"
              : "bg-brand-bg text-brand-text hover:bg-brand-light/20"
          }`}
          role="tab"
          aria-selected={activeCategory === "all"}
        >
          Tümü
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-sm rounded-md font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-brand text-white"
                : "bg-brand-bg text-brand-text hover:bg-brand-light/20"
            }`}
            role="tab"
            aria-selected={activeCategory === cat.id}
          >
            {cat.label}
            {cat.images.length > 0 && (
              <span className="ml-1.5 text-xs opacity-70">({cat.images.length})</span>
            )}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
        role="list"
        aria-label="Galeri görselleri"
      >
        {filteredImages.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-brand-bg border border-brand-border hover:border-brand transition-colors"
            aria-label={img.alt}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 33vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              loading={i < 6 ? "eager" : "lazy"}
              priority={i < 3}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs line-clamp-2">{img.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && lightboxImages.length > 0 && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
