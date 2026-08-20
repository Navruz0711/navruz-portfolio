"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ArrowLeft, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumeDoodle from "./resume-doodle";
import { useLanguage } from "@/context/language-context";
import { Language } from "@/locales/translations";
import { cn } from "@/lib/utils";

const DOCX_PATH = "/Ergashev_Navruz_Resume.docx";

export default function ResumeView() {
  const { t, language, setLanguage } = useLanguage();

  const activePdfPath =
    language === "ru"
      ? "/resume-ru.pdf"
      : language === "en"
      ? "/resume-en.pdf"
      : "/resume-uz.pdf";

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "uz", label: "UZ", flag: "🇺🇿" },
    { code: "ru", label: "RU", flag: "🇷🇺" },
    { code: "en", label: "EN", flag: "🇬🇧" },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Hide the global nav on mobile, only while this page is mounted */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@media (max-width: 767px){ header { display: none !important; } }",
        }}
      />

      {/* Top bar: back (left) + language toggle + download (right) */}
      <div className="mx-auto w-full max-w-4xl shrink-0 px-4 pt-6 sm:pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {t.resume.back}
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end flex-wrap">
            {/* Language Selector */}
            <div className="inline-flex items-center rounded-lg border border-border/70 bg-card/60 p-1 backdrop-blur-sm shadow-sm">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all cursor-pointer",
                    language === lang.code
                      ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                  title={lang.code.toUpperCase()}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* DOCX Download */}
              <a
                href={DOCX_PATH}
                download="Ergashev_Navruz_Resume.docx"
                className="hidden sm:inline-flex"
              >
                <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                  <FileText className="h-3.5 w-3.5" />
                  <span>DOCX</span>
                </Button>
              </a>

              {/* PDF Download */}
              <a
                href={activePdfPath}
                download={`Ergashev_Navruz_Resume_${language.toUpperCase()}.pdf`}
              >
                <Button size="sm" className="gap-2 text-xs font-medium group">
                  <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                  <span>{t.resume.download}</span>
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* PDF viewer — centered on mobile (short A4 card), top-aligned on desktop (tall) */}
      <div className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-2 pb-6 md:items-start md:px-4 md:pb-24">
        {/* opacity-only animation: a transformed ancestor would trap the fixed doodle FAB */}
        <motion.div
          key={activePdfPath}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="aspect-[210/297] w-full overflow-hidden rounded-2xl bg-white shadow-xl border border-border/40"
        >
          <ResumeDoodle
            src={`${activePdfPath}#toolbar=0&navpanes=0&view=FitH`}
            title={t.resume.previewTitle}
          />
        </motion.div>
      </div>
    </div>
  );
}
