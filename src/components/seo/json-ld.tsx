import React from "react";
import { config } from "@/data/config";

export function PersonAndWebsiteJsonLd() {
  const sameAsLinks = [
    config.social.kwork,
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
          "Navruz",
          "Navro'z",
          "Navruz Ergashev",
          "Ergashev Navruzbek",
          "Navruzbek Ergashev",
          "Navruz0711",
          "Навруз",
          "Навруз Эргашев",
          "Navruz dasturchi",
          "Navruz developer",
          "Navruz Frontend",
          "expertweb",
        ],
        givenName: "Navruz",
        familyName: "Ergashev",
        additionalName: "Navruzbek",
        jobTitle: "Senior Frontend Developer & UI/UX Engineer",
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
        award:
          "Kwork Top-Rated Freelancer (Продавец с высшим рейтингом) - 47+ completed projects, 100% 5-star rating",
        knowsLanguage: ["uz", "ru", "en"],
        address: {
          "@type": "PostalAddress",
          addressLocality: config.location.city,
          addressRegion: "Tashkent",
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
          "Sayt yaratish Toshkent",
          "UI/UX Engineering",
          "Performance Optimization",
          "Search Engine Optimization (SEO)",
          "Progressive Web Apps (PWA)",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${config.site}/#service`,
        name: "Ergashev Navruz — Professional Web Development & UI/UX Studio",
        alternateName: [
          "Navruz Sayt Yaratish Xizmati",
          "Создание сайтов Ташкент - Навруз",
        ],
        description:
          "Toshkent va butun dunyo bo'ylab buyurtma asosida zamonaviy 3D veb-saytlar, yuqori konversiyali landing page va murakkab veb-ilovalarni professional yaratish xizmati.",
        url: config.site,
        image: config.avatarImg,
        telephone: "+998",
        priceRange: "$$",
        currenciesAccepted: "USD, UZS, RUB",
        paymentAccepted: "Bank Transfer, Payme, Click, Visa, Mastercard, Crypto",
        areaServed: [
          { "@type": "Country", "name": "Uzbekistan" },
          { "@type": "City", "name": "Tashkent" },
          { "@type": "AdministrativeArea", "name": "Worldwide / Remote" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: config.location.city,
          addressRegion: "Tashkent",
          addressCountry: config.location.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "41.2995",
          longitude: "69.2401",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          bestRating: "5",
          ratingCount: "35",
          reviewCount: "35",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Landing Page Yaratish (Yuqori konversiyali)",
                description:
                  "Biznes va mahsulotlar uchun mijoz olib keluvchi, tezkor va zamonaviy landing page saytlar yaratish.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "3D & Interaktiv Veb-saytlar (Three.js & Spline)",
                description:
                  "Foydalanuvchini hayratda qoldiruvchi 3D interaktiv saytlar va WebGL animatsiyalari.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Korporativ Veb-saytlar va CRM / Web App (Next.js)",
                description:
                  "Kompaniyalar uchun qulay admin panel, to'liq funksional va xavfsiz korporativ saytlar.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO va Sayt Tezligini Optimallashtirish",
                description:
                  "Google va Yandex qidiruv tizimlarida 1-o'ringa chiqish, 95+ PageSpeed tezlik ko'rsatkichi.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${config.site}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Navruz Ergashev kim va qanday xizmatlar ko'rsatadi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ergashev Navruz — Kwork frilans platformasida 'Продавец с высшим рейтингом' (Top-Rated) darajasiga ega tajribali Senior Frontend dasturchi. U buyurtma asosida zamonaviy 3D veb-saytlar, yuqori konversiyali landing page, korporativ saytlar va murakkab veb-ilovalarni yaratadi.",
            },
          },
          {
            "@type": "Question",
            name: "Navruz bilan veb-sayt buyurtma qilish uchun qanday bog'lanish mumkin?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Navruz bilan to'g'ridan-to'g'ri Telegram (@Ergashev_Nz) yoki uznav715@gmail.com orqali bog'lanishingiz mumkin. Xabarlarga odatda 15 daqiqa ichida javob beriladi va dastlabki konsultatsiya mutlaqo bepul.",
            },
          },
          {
            "@type": "Question",
            name: "Sayt yaratish narxi va muddatlari qanday?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Landing page saytlar odatda 3-5 kunda, to'liq korporativ yoki 3D veb-saytlar 1-2 haftada tayyor bo'ladi. Narxlar loyiha murakkabligiga qarab qulay va shaffof belgilanadi.",
            },
          },
          {
            "@type": "Question",
            name: "Sayt tayyor bo'lgach kafolat bormi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Albatta! Har bir loyihaga 30 kunlik bepul texnik ko'mak, xatoliklarni bartaraf etish, toza kod va Google/Yandex qidiruv tizimlariga to'liq ro'yxatdan o'tkazish kafolati taqdim etiladi.",
            },
          },
          {
            "@type": "Question",
            name: "Как заказать разработку сайта у Навруза?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Напишите напрямую в Telegram @Ergashev_Nz или на почту uznav715@gmail.com. Обсудим задачи, подберем дизайн и запустим ваш проект под ключ с гарантией 30 дней.",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${config.site}/#website`,
        url: config.site,
        name: config.siteName,
        alternateName: [
          "Ergashev Navruz Portfolio",
          "Navruz Dev",
          "Navruz Frontend",
        ],
        description: config.description.long,
        publisher: {
          "@id": `${config.site}/#person`,
        },
        inLanguage: ["uz", "ru", "en"],
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
