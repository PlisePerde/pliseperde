import { SITE_URL, xmlResponse, escapeXml } from "@/lib/sitemap-data";
import fs from "fs";
import path from "path";

interface ImageEntry {
  loc: string;
  images: { loc: string; title: string; caption: string }[];
}

function getGalleryImages(): ImageEntry[] {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const result: ImageEntry[] = [];

  if (!fs.existsSync(galleryDir)) return result;

  const categories = fs.readdirSync(galleryDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const category of categories) {
    const catDir = path.join(galleryDir, category);
    const files = fs.readdirSync(catDir)
      .filter((f) => /\.(webp|jpg|jpeg|png|gif)$/i.test(f));

    if (files.length === 0) continue;

    const pageSlug = category === "plise-perde" ? "galeri" : category === "honeycomb-perde" ? "honeycomb-perde" : category === "duet-perde" ? "duet-perde" : "galeri";
    const images = files.map((file) => {
      const fileName = path.parse(file).name;
      const formattedName = fileName.replace(/-/g, " ").replace(/Plise Perde/, "Plise Perde");
      return {
        loc: `${SITE_URL}/gallery/${category}/${file}`,
        title: escapeXml(formattedName),
        caption: escapeXml(`${formattedName} — galeri görseli`),
      };
    });
    result.push({ loc: `${SITE_URL}/${pageSlug}/`, images });
  }

  return result;
}

function getLogoImages(): ImageEntry[] {
  const logosDir = path.join(process.cwd(), "public", "logos");
  if (!fs.existsSync(logosDir)) return [];

  const files = fs.readdirSync(logosDir)
    .filter((f) => /\.(webp|jpg|jpeg|png|svg)$/i.test(f));

  if (files.length === 0) return [];

  const images = files.map((file) => {
    const fileName = path.parse(file).name;
    const brandName = fileName.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      loc: `${SITE_URL}/logos/${file}`,
      title: escapeXml(`${brandName} — Plise Perde Kurumsal Müşterisi`),
      caption: escapeXml(`${brandName} — Plise Perde kurumsal referansı`),
    };
  });

  return [{ loc: `${SITE_URL}/referanslarimiz/`, images }];
}

function getHoneycombImages(): ImageEntry[] {
  const imagesDir = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(imagesDir)) return [];

  const files = fs.readdirSync(imagesDir)
    .filter((f) => /honeycomb/i.test(f) && /\.(webp|jpg|jpeg|png)$/i.test(f));

  if (files.length === 0) return [];

  const images = files.map((file) => {
    const fileName = path.parse(file).name;
    const formattedName = fileName.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      loc: `${SITE_URL}/images/${file}`,
      title: escapeXml(`Honeycomb Perde — ${formattedName}`),
      caption: escapeXml(`Honeycomb petek yapısı ile enerji tasarrufu sağlayan perde`),
    };
  });

  return [{ loc: `${SITE_URL}/honeycomb-perde/`, images }];
}

export function GET() {
  const entries = [...getHoneycombImages(), ...getGalleryImages(), ...getLogoImages()];

  const urls = entries
    .map(
      (entry) => {
        const imageTags = entry.images
          .map(
            (img) => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
          )
          .join("\n");
        return `  <url>
    <loc>${entry.loc}</loc>
${imageTags}
  </url>`;
      }
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;
  return xmlResponse(xml);
}
