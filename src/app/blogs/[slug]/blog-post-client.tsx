"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ScrollProgress from "@/components/ui/scroll-progress";
import RevealAnimation from "@/components/reveal-animations";
import { useLanguage } from "@/context/language-context";

interface BlogPostClientProps {
  post: {
    metadata: {
      title: string;
      publishedAt: string;
      summary: string;
      image?: string;
      author?: string;
      tags?: string[];
    };
  };
  readTime: number;
  children: React.ReactNode;
}

export default function BlogPostClient({ post, readTime, children }: BlogPostClientProps) {
  const { t, language } = useLanguage();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const locale = language === "ru" ? "ru-RU" : language === "uz" ? "uz-UZ" : "en-US";
    return date.toLocaleDateString(locale, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen relative font-sans">
      <ScrollProgress className="bg-gradient-to-r from-[hsl(20,100%,70%)] to-[hsl(30,100%,65%)]" />

      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[hsl(20,100%,70%)]/[0.03] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-24 max-w-[720px]">
        {/* Back link */}
        <RevealAnimation>
          <Link
            href="/blogs"
            className="inline-flex items-center text-muted-foreground hover:text-[hsl(20,100%,70%)] transition-colors mb-12 group text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {t.blog.allPosts}
          </Link>
        </RevealAnimation>

        {/* Article header */}
        <RevealAnimation delay={0.1}>
          <header className="mb-12">
            {/* Tags */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {post.metadata.tags?.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-[hsl(20,100%,70%)]/20 text-[hsl(20,100%,70%)] bg-[hsl(20,100%,70%)]/5 rounded-full px-3 text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-display text-2xl md:text-4xl leading-[1.1] tracking-tight mb-8">
              {post.metadata.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground pb-8 border-b border-border/50">
              {post.metadata.author && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[hsl(20,100%,70%)]/10 flex items-center justify-center">
                    <User className="w-3 h-3 text-[hsl(20,100%,70%)]" />
                  </div>
                  {post.metadata.author}
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5" />
                {formatDate(post.metadata.publishedAt)}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {readTime} {t.blog.minRead}
              </div>
            </div>
          </header>
        </RevealAnimation>

        {/* Article body */}
        <RevealAnimation delay={0.2}>
          <article className="prose prose-invert max-w-none">
            {children}
          </article>
        </RevealAnimation>

        {/* Footer divider */}
        <RevealAnimation delay={0.1}>
          <div className="mt-20 pt-8 border-t border-border/50">
            <Link
              href="/blogs"
              className="inline-flex items-center text-muted-foreground hover:text-[hsl(20,100%,70%)] transition-colors group text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t.blog.backToAll}
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
}
