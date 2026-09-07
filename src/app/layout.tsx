import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";

import Script from "next/script";
import SiteFrame from "@/components/site-frame";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { UMAMI_SRC } from "@/lib/umami";
import { PersonAndWebsiteJsonLd } from "@/components/seo/json-ld";

/* Body/base font — Space Grotesk, bound to --font-sans (applied as `font-sans`
 * on <html>). Everything that isn't a heading inherits this. */
const spaceGroteskSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/* Heading font — Unbounded, bound to --font-display and applied to h1–h6. */
const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(config.site),
  title: {
    default: config.title,
    template: "%s | Ergashev Navruz",
  },
  description: config.description.long,
  applicationName: config.siteName,
  authors: [{ name: config.author, url: config.site }],
  generator: "Next.js",
  keywords: config.keywords,
  creator: config.author,
  publisher: config.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
    languages: {
      "en-US": "/?lang=en",
      "uz-UZ": "/?lang=uz",
      "ru-RU": "/?lang=ru",
      "x-default": "/",
    },
  },
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    siteName: config.siteName,
    images: [
      {
        url: config.ogImg,
        width: 1200,
        height: 630,
        alt: `${config.author} - Frontend Developer & UI/UX Engineer Portfolio`,
        type: "image/png",
      },
    ],
    locale: "en_US",
    alternateLocale: ["uz_UZ", "ru_RU"],
    type: "profile",
    firstName: "Navruz",
    lastName: "Ergashev",
    username: "Navruz0711",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
    site: config.social.twitterHandle || undefined,
    creator: config.social.twitterHandle || undefined,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: config.verification.google || undefined,
    yandex: config.verification.yandex || undefined,
    other: config.verification.bing
      ? { "msvalidate.01": config.verification.bing }
      : undefined,
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "geo.region": "UZ",
    "geo.placename": "Tashkent",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        spaceGroteskSans.variable,
        unbounded.variable,
        "font-sans",
      ].join(" ")}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to critical 3rd party CDNs */}
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        
        {/* Schema.org Structured Data */}
        <PersonAndWebsiteJsonLd />

        {process.env.UMAMI_SITE_ID && (
          <Script
            defer
            src={UMAMI_SRC}
            data-website-id={process.env.UMAMI_SITE_ID}
          />
        )}
      </head>
      <body>
        <Providers>
          <SiteFrame>{children}</SiteFrame>
        </Providers>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}

