import { usageAreaPages, generateStandardSitemap, xmlResponse } from "@/lib/sitemap-data";

export function GET() {
  return xmlResponse(generateStandardSitemap(usageAreaPages));
}
