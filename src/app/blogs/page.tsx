import React from "react";
import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/mdx";
import BlogListClient from "./blog-list-client";
import { config } from "@/data/config";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Technical Articles & Blog",
  description:
    "Explore in-depth articles on React, Next.js architecture, TypeScript, 3D Web animations, and modern frontend engineering by Ergashev Navruz.",
  alternates: {
    canonical: `${config.site}/blogs`,
  },
  openGraph: {
    title: "Technical Articles & Blog | Ergashev Navruz",
    description:
      "Explore in-depth articles on React, Next.js architecture, TypeScript, 3D Web animations, and modern frontend engineering by Ergashev Navruz.",
    url: `${config.site}/blogs`,
    siteName: config.siteName,
    images: [
      {
        url: config.ogImg,
        width: 1200,
        height: 630,
        alt: "Ergashev Navruz - Blog & Articles",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Articles & Blog | Ergashev Navruz",
    description:
      "Explore in-depth articles on React, Next.js architecture, TypeScript, 3D Web animations, and modern frontend engineering.",
    images: [config.ogImg],
  },
};

export default function BlogPage() {
  const posts = getBlogPosts()
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map((post) => ({
      slug: post.slug,
      metadata: post.metadata,
      wordCount: post.content.trim().split(/\s+/).length,
    }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blogs" },
        ]}
      />
      <BlogListClient posts={posts} />
    </>
  );
}

