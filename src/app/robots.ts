import type { MetadataRoute } from "next";
import { config } from "@/data/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/components",
          "/components1",
          "/components2",
          "/components3",
          "/components-mono",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${config.site}/sitemap.xml`,
    host: config.site,
  };
}

