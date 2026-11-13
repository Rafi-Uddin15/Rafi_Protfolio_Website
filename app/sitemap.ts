import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { work } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...work.map((w) => ({ url: `${SITE_URL}/work/${w.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
