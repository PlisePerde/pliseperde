import { modelPages, generateStandardSitemap, xmlResponse } from "@/lib/sitemap-data";

export function GET() {
  return xmlResponse(generateStandardSitemap(modelPages));
}
