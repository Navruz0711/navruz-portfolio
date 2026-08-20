"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  Zap,
  Code2,
  Palette,
  Briefcase,
  Layers,
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
} from "lucide-react";

interface Issue {
  id: string;
  number: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  highlights: string[];
}

const ISSUES: Issue[] = [
  {
    id: "issue-04",
    number: "Issue #04",
    title: "Demystifying 3D on the Web: Real-World React Three Fiber Patterns",
    date: "Nov 2024",
    readTime: "5 min read",
    category: "3D & WebGL",
    summary:
      "A complete breakdown of optimizing 3D canvases, limiting DPR on Retina screens, and lazy-loading heavy WebGL assets.",
    highlights: [
      "Draco compression pipelines for GLTF models",
      "Dynamic DPR adjustments based on device FPS",
      "Blending Canvas shaders with Tailwind CSS overlays",
    ],
  },
  {
    id: "issue-03",
    number: "Issue #03",
    title: "Next.js 15 & React 19: Architecture Patterns That Scale",
    date: "Oct 2024",
    readTime: "4 min read",
    category: "Architecture",
    summary:
      "Lessons learned migrating complex production applications to Server Components, Actions, and Turbopack.",
    highlights: [
      "Optimizing Core Web Vitals to 99+ on mobile",
      "Streaming with Suspense vs SSR bottlenecks",
      "Type-safe Server Actions without boilerplate",
    ],
  },
  {
    id: "issue-02",
    number: "Issue #02",
    title: "Crafting Micro-Interactions That Wow Users (Without Hurting FPS)",
    date: "Sep 2024",
    readTime: "6 min read",
    category: "UI / UX Craft",
    summary:
      "How to implement magnetic buttons, elastic spring physics, and cursor-aware elements smoothly.",
    highlights: [
      "Hardware-accelerated CSS transforms vs JS layout thrashing",
      "Framer Motion layoutId magic for animated tabs",
      "Accessible motion with prefers-reduced-motion",
    ],
  },
  {
    id: "issue-01",
    number: "Issue #01",
    title: "The Top-Rated Freelance Playbook: 44+ Projects & 98% Success",
    date: "Aug 2024",
    readTime: "7 min read",
    category: "Career & Freelance",
    summary:
      "Actionable strategies for delivering high-impact frontend client projects, scoping requirements, and maintaining repeat clients.",
    highlights: [
      "Pixel-perfect Figma-to-code conversion workflows",
      "Proactive client communication patterns",
      "Managing deadlines to achieve 89% on-time delivery",
    ],
  },
];

const PERKS = [
  {
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    title: "Cutting-Edge Frontend",
    description:
      "Deep dives into modern React, Next.js App Router, TypeScript best practices, and performance engineering.",
  },
  {
    icon: <Palette className="w-5 h-5 text-[hsl(20,100%,70%)]" />,
    title: "3D & Creative Web",
    description:
      "Practical Three.js shader guides, interactive canvas tutorials, and motion design recipes.",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
    title: "Freelance & Production",
    description:
      "Real-world case studies, client delivery insights, and workflows from over 44+ commercial projects.",
  },
];

export default function NewsletterClient() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  return (
    <div className="min-h-screen font-sans relative">
      {/* Decorative ambient background glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[hsl(20,100%,70%)]/5 blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-24 max-w-5xl">
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
            Back to Portfolio
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors border border-border/70 rounded-full px-3 py-1 bg-card/40"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Read Blog</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[hsl(20,100%,70%)]/30 bg-[hsl(20,100%,70%)]/5 text-[hsl(20,100%,70%)] text-xs font-mono uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(20,100%,70%)] animate-pulse" />
            <span>Developer Dispatch & Digest</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            Insights, Experiments &<br />
            <span className="text-[hsl(20,100%,70%)]">Frontend Engineering</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A curated monthly dispatch covering modern web architecture, interactive 3D graphics,
            smooth UI micro-animations, and actionable freelance strategies.
          </p>
        </motion.div>

        {/* Subscription Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="relative rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl p-6 sm:p-10 shadow-2xl shadow-[hsl(20,100%,70%)]/5 overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[hsl(20,100%,70%)] to-transparent" />

            <div className="text-center mb-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                Join the Dispatch
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Zero spam. High-signal technical breakdowns only. Unsubscribe anytime.
              </p>
            </div>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <h4 className="font-display text-lg font-bold text-emerald-300">
                  You're in! Welcome aboard 🎉
                </h4>
                <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
                  Thank you for subscribing with <span className="text-foreground font-mono font-medium">{email}</span>.
                  You'll receive the next edition straight in your inbox!
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setEmail("");
                  }}
                  className="mt-4 text-xs font-mono text-emerald-400 hover:underline"
                >
                  Subscribe another email
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Enter your email address..."
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-background/80 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(20,100%,70%)]/50 transition-all font-sans"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[hsl(20,100%,70%)] text-background font-medium hover:bg-[hsl(20,100%,75%)] active:scale-[0.98] transition-all disabled:opacity-70 shadow-md shadow-[hsl(20,100%,70%)]/20 font-sans text-sm shrink-0 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        <span>Joining...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe Free</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-xs text-rose-400 text-center font-mono">
                    Please enter a valid email address.
                  </p>
                )}

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    No spam ever
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    1-2 editions/month
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Free source code snippets
                  </span>
                </div>
              </form>
            )}
          </div>
        </motion.div>

        {/* Perks Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-[hsl(20,100%,70%)] text-xs font-mono uppercase tracking-widest font-semibold">
              What to Expect
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mt-1 text-foreground">
              What We Explore Each Issue
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PERKS.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm flex flex-col justify-between hover:border-[hsl(20,100%,70%)]/30 hover:bg-card/50 transition-all duration-300 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-muted/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {perk.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Issues / Archives */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="text-[hsl(20,100%,70%)] text-xs font-mono uppercase tracking-widest font-semibold">
                Archive & Topics
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mt-1 text-foreground">
                Recent Newsletter Editions
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              {ISSUES.length} Curated Editions
            </span>
          </div>

          <div className="space-y-4">
            {ISSUES.map((issue, idx) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedIssue(selectedIssue?.id === issue.id ? null : issue)}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  selectedIssue?.id === issue.id
                    ? "border-[hsl(20,100%,70%)]/50 bg-card/70 shadow-lg"
                    : "border-border/60 bg-card/30 hover:border-border hover:bg-card/50"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <Badge
                      variant="outline"
                      className="border-[hsl(20,100%,70%)]/30 text-[hsl(20,100%,70%)] bg-[hsl(20,100%,70%)]/5 text-xs font-mono"
                    >
                      {issue.number}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {issue.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {issue.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {issue.readTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-[hsl(20,100%,70%)] transition-colors">
                    {issue.title}
                  </h3>
                  <ChevronRight
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      selectedIssue?.id === issue.id ? "rotate-90 text-[hsl(20,100%,70%)]" : ""
                    }`}
                  />
                </div>

                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {issue.summary}
                </p>

                {/* Expanded content */}
                <AnimatePresence>
                  {selectedIssue?.id === issue.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-border/50"
                    >
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[hsl(20,100%,70%)] mb-2 font-semibold">
                        Key Topics Covered:
                      </h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
                        {issue.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
