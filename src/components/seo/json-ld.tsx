import React from "react";
import { config } from "@/data/config";

export function PersonAndWebsiteJsonLd() {
  const sameAsLinks = [
    config.social.github,
    config.social.telegram,
    config.social.linkedin,
    config.social.twitter,
    config.social.instagram,
    config.social.facebook,
  ].filter(Boolean);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${config.site}/#person`,
        name: "Ergashev Navruz",
        alternateName: [
          "Navruz Ergashev",
          "Ergashev Navruzbek",
          "Navruzbek Ergashev",
          "Navruz0711",
          "Эргашев Навруз",
        ],
        givenName: "Navruz",
        familyName: "Ergashev",
        jobTitle: "Senior Frontend Developer",
        description: config.description.long,
        url: config.site,
        image: {
          "@type": "ImageObject",
          inLanguage: "en-US",
          "@id": `${config.site}/#personimage`,
          url: config.avatarImg,
          contentUrl: config.avatarImg,
          caption: "Ergashev Navruz",
        },
        email: config.email,
        sameAs: sameAsLinks,
        address: {
          "@type": "PostalAddress",
          addressLocality: config.location.city,
          addressCountry: config.location.countryCode,
        },
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Three.js",
          "Spline 3D",
          "WebGL",
          "Frontend Architecture",
          "Web Development",
          "UI/UX Engineering",
          "Performance Optimization",
          "Search Engine Optimization (SEO)",
          "Progressive Web Apps (PWA)",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${config.site}/#website`,
        url: config.site,
        name: config.siteName,
        alternateName: "Ergashev Navruz Portfolio",
        description: config.description.long,
        publisher: {
          "@id": `${config.site}/#person`,
        },
        inLanguage: ["en", "uz", "ru"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${config.site}/#webpage`,
        url: config.site,
        name: config.title,
        isPartOf: {
          "@id": `${config.site}/#website`,
        },
        about: {
          "@id": `${config.site}/#person`,
        },
        mainEntity: {
          "@id": `${config.site}/#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: config.ogImg,
        },
        breadcrumb: {
          "@id": `${config.site}/#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${config.site}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: config.site,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function BlogPostJsonLd({
  title,
  summary,
  publishedAt,
  slug,
  image,
  tags,
}: {
  title: string;
  summary: string;
  publishedAt: string;
  slug: string;
  image?: string;
  tags?: string[];
}) {
  const url = `${config.site}/blogs/${slug}`;
  const postImage = image || config.ogImg;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: summary,
    url: url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: config.author,
      url: config.site,
    },
    publisher: {
      "@type": "Person",
      name: config.author,
      url: config.site,
      logo: {
        "@type": "ImageObject",
        url: config.avatarImg,
      },
    },
    image: postImage,
    keywords: tags ? tags.join(", ") : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${config.site}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
