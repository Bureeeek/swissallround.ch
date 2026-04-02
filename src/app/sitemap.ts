import type { MetadataRoute } from "next";

import { services, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/dienstleistungen", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/galerie", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/offerte", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/kontakt", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/impressum", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/datenschutz", changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${siteConfig.url}${page.path || "/"}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.url}${service.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
