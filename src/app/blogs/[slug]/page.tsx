import React from "react";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogPostClient from "./blog-post-client";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return {
      title: "Post Not Found | Navruz Portfolio",
      description: "Blog post not found",
    };
  }
  return {
    title: `${post.metadata.title} | Navruz Portfolio`,
    description: post.metadata.summary,
  };
}

function estimateReadTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

const components = {
  h1: (props: any) => (
    <h1
      className="font-display text-2xl md:text-3xl leading-[1.15] mt-14 mb-6 text-foreground"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="font-display text-xl md:text-2xl leading-[1.2] mt-12 mb-4 text-foreground relative"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="font-display text-lg md:text-xl leading-[1.25] mt-8 mb-3 text-foreground"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg font-sans"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className="list-disc list-outside ml-6 mb-6 space-y-2 text-muted-foreground font-sans"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-outside ml-6 mb-6 space-y-2 text-muted-foreground font-sans"
      {...props}
    />
  ),
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-2 border-[hsl(20,100%,70%)] pl-6 my-8 italic text-foreground/80 font-sans"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-[hsl(20,100%,70%)]"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-card border border-border/50 rounded-xl p-4 md:p-6 overflow-x-auto my-8 font-mono text-sm leading-relaxed"
      {...props}
    />
  ),
  a: (props: any) => (
    <a
      className="text-[hsl(20,100%,70%)] hover:text-[hsl(20,100%,80%)] underline decoration-[hsl(20,100%,70%)]/30 underline-offset-4 hover:decoration-[hsl(20,100%,70%)] transition-colors"
      {...props}
    />
  ),
  hr: () => <hr className="border-border/50 my-12" />,
  strong: (props: any) => (
    <strong className="text-foreground font-semibold" {...props} />
  ),
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }
  const readTime = estimateReadTime(post.content);

  return (
    <BlogPostClient post={post} readTime={readTime}>
      <MDXRemote source={post.content} components={components} />
    </BlogPostClient>
  );
}
