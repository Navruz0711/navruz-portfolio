import React from "react";
import NewsletterClient from "../news/newsletter-client";

export const metadata = {
  title: "Newsletter | Developer Dispatch & Tech Digest",
  description:
    "Curated frontend insights, 3D web experiments, React & Next.js architecture, and freelance workflows.",
};

export default function NewsletterPage() {
  return <NewsletterClient />;
}
