import React from "react";
import type { Metadata } from "next";
import NewsletterClient from "../news/newsletter-client";
import { config } from "@/data/config";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Tech News & Newsletter | Developer Dispatch",
  description:
    "Curated frontend insights, 3D web experiments, React & Next.js architecture, and web engineering updates by Ergashev Navruz.",
  alternates: {
    canonical: `${config.site}/newsletter`,
  },
  openGraph: {
    title: "Tech News & Newsletter | Ergashev Navruz",
    description:
      "Curated frontend insights, 3D web experiments, React & Next.js architecture, and web engineering updates.",
    url: `${config.site}/newsletter`,
    siteName: config.siteName,
    images: [
      {
        url: config.ogImg,
        width: 1200,
        height: 630,
        alt: "Tech News & Newsletter - Ergashev Navruz",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech News & Newsletter | Ergashev Navruz",
    description:
      "Curated frontend insights, 3D web experiments, React & Next.js architecture, and web engineering updates.",
    images: [config.ogImg],
  },
};

export default function NewsletterPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Newsletter", url: "/newsletter" },
        ]}
      />
      <NewsletterClient />
    </>
  );
}

