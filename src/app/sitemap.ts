import type { MetadataRoute } from "next";
import { config } from "@/data/config";
import { getBlogPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const posts = getBlogPosts().map((post) => ({
    url: `${config.site}/blogs/${post.slug}`,
    lastModified: post.metadata.publishedAt
      ? new Date(post.metadata.publishedAt)
      : currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: config.site,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${config.site}/?lang=en`,
          uz: `${config.site}/?lang=uz`,
          ru: `${config.site}/?lang=ru`,
        },
      },
    },
    {
      url: `${config.site}/blogs`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${config.site}/news`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${config.site}/newsletter`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${config.site}/resume`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...posts,
  ];
}

