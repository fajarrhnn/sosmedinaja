import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sosmedinaja.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 100,
    },
    {
      url: "https://sosmedinaja.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://sosmedinaja.vercel.app/post",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
  ];
}
