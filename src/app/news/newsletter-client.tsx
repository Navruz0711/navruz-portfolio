"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Send,
  Zap,
  Code2,
  Palette,
  Briefcase,
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

const PERK_ICONS = [
  <Code2 key="code" className="w-5 h-5 text-cyan-400" />,
  <Palette key="palette" className="w-5 h-5 text-[hsl(20,100%,70%)]" />,
  <Briefcase key="briefcase" className="w-5 h-5 text-emerald-400" />,
];

export default function NewsletterClient() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [selectedIssueId, setSelectedIssueId] = useState<string | null>(null);

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

  const n = t.newsletter;

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
            {n.backToPortfolio}
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors border border-border/70 rounded-full px-3 py-1 bg-card/40"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{n.readBlog}</span>
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
            <span>{n.badge}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            {n.title}<br />
            <span className="text-[hsl(20,100%,70%)]">{n.highlight}</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {n.subtitle}
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
                {n.cardTitle}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {n.cardSubtitle}
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
                  {n.successTitle}
                </h4>
                <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
                  {n.successDesc} (<span className="text-foreground font-mono font-medium">{email}</span>)
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setEmail("");
                  }}
                  className="mt-4 text-xs font-mono text-emerald-400 hover:underline cursor-pointer"
                >
                  {n.subscribeAnother}
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
                      placeholder={n.emailPlaceholder}
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
                        <span>{n.submittingButton}</span>
                      </>
                    ) : (
                      <>
                        <span>{n.subscribeButton}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-xs text-rose-400 text-center font-mono">
                    {n.errorInvalid}
                  </p>
                )}

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {n.trustBadges.noSpam}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    {n.trustBadges.frequency}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    {n.trustBadges.freeSnippets}
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
              {n.perks.badge}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mt-1 text-foreground">
              {n.perks.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {n.perks.items.map((perk, i) => (
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
                    {PERK_ICONS[i % PERK_ICONS.length]}
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
                {n.archive.badge}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mt-1 text-foreground">
                {n.archive.title}
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              {n.archive.items.length} {n.archive.countLabel}
            </span>
          </div>

          <div className="space-y-4">
            {n.archive.items.map((issue, idx) => {
              const isSelected = selectedIssueId === issue.id;
              return (
                <motion.div
                  key={issue.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => setSelectedIssueId(isSelected ? null : issue.id)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
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
                        isSelected ? "rotate-90 text-[hsl(20,100%,70%)]" : ""
                      }`}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {issue.summary}
                  </p>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-border/50"
                      >
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[hsl(20,100%,70%)] mb-2 font-semibold">
                          {n.archive.keyTopics}
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
