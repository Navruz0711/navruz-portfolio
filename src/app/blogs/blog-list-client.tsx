"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowUpRight, Clock } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/context/language-context";

type Post = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    author?: string;
    tags?: string[];
  };
  wordCount: number;
};

function readTime(wordCount: number) {
  return Math.max(1, Math.ceil(wordCount / 200));
}

function formatDate(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  const localeCode = locale === "ru" ? "ru-RU" : locale === "uz" ? "uz-UZ" : "en-US";
  return date.toLocaleDateString(localeCode, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogListClient({ posts }: { posts: Post[] }) {
  const { t, language } = useLanguage();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen font-sans">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(20,100%,70%)]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(20,100%,70%)]/3 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-24 max-w-6xl">
        {/* Top bar navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between gap-4 mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="inline-block mr-1 group-hover:-translate-x-1 transition-transform">←</span>
            {t.blog.backToPortfolio}
          </Link>
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[hsl(20,100%,70%)] hover:underline border border-[hsl(20,100%,70%)]/30 rounded-full px-3 py-1 bg-[hsl(20,100%,70%)]/5"
          >
            <span>✉</span> {t.blog.newsletterBadge}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[60px] bg-[hsl(20,100%,70%)]" />
            <span className="text-[hsl(20,100%,70%)] text-sm font-medium tracking-[0.2em] uppercase font-sans">
              {t.blog.tagline}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
            {t.blog.title}<br />
            <span className="text-[hsl(20,100%,70%)]">{t.blog.highlight}</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed font-sans">
            {t.blog.subtitle}
          </p>
        </motion.div>

        {/* Featured post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <Link href={`/blogs/${featured.slug}`} className="group block">
              <div className="relative border border-border/50 rounded-2xl p-8 md:p-12 overflow-hidden transition-colors hover:border-[hsl(20,100%,70%)]/30 bg-card/30 backdrop-blur-sm">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[hsl(20,100%,70%)]/10 to-transparent rounded-bl-full" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground font-sans">
                    <span className="text-[hsl(20,100%,70%)] font-medium tracking-[0.15em] uppercase text-xs">
                      {t.blog.featured}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {formatDate(featured.metadata.publishedAt, language)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {readTime(featured.wordCount)} {t.blog.minRead}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl leading-[1.15] mb-4 group-hover:text-[hsl(20,100%,70%)] transition-colors duration-300">
                    {featured.metadata.title}
                  </h2>

                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-8 font-sans">
                    {featured.metadata.summary}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {featured.metadata.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-[hsl(20,100%,70%)]/20 text-[hsl(20,100%,70%)] bg-[hsl(20,100%,70%)]/5 rounded-full px-3"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-[hsl(20,100%,70%)] transition-colors font-sans">
                      {t.blog.readArticle}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Divider */}
        {rest.length > 0 && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16 origin-left"
          />
        )}

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={`/blogs/${post.slug}`} className="group block h-full">
                <div className="h-full border border-border/50 rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[hsl(20,100%,70%)]/30 hover:bg-card/40 bg-card/20 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground font-sans">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-3 h-3" />
                      {formatDate(post.metadata.publishedAt, language)}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {readTime(post.wordCount)} {t.blog.minRead}
                    </span>
                  </div>

                  <h3 className="font-display text-lg md:text-xl leading-tight mb-3 group-hover:text-[hsl(20,100%,70%)] transition-colors duration-300">
                    {post.metadata.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2 font-sans">
                    {post.metadata.summary}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-1.5 flex-wrap">
                      {post.metadata.tags?.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-border/50 text-muted-foreground text-[10px] rounded-full px-2 py-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[hsl(20,100%,70%)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative rounded-2xl border border-[hsl(20,100%,70%)]/20 bg-card/40 backdrop-blur-md p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[hsl(20,100%,70%)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
            <div className="max-w-xl">
              <span className="text-[hsl(20,100%,70%)] text-xs font-mono uppercase tracking-widest font-semibold">
                {t.blog.newsletterBanner.badge}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-foreground tracking-tight">
                {t.blog.newsletterBanner.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mt-2">
                {t.blog.newsletterBanner.description}
              </p>
            </div>
            <Link
              href="/news"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[hsl(20,100%,70%)] text-background font-medium hover:bg-[hsl(20,100%,75%)] transition-colors shadow-lg shadow-[hsl(20,100%,70%)]/10 font-sans"
            >
              <span>{t.blog.newsletterBanner.button}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Empty state */}
        {posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-24"
          >
            <p className="text-muted-foreground text-lg font-sans">{t.blog.noPosts}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
