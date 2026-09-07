"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";
import { FileText, ArrowRight, Download } from "lucide-react";
import { config } from "@/data/config";

export default function ResumePage() {
  const { language } = useLanguage();
  const langCode = (language || "uz").toUpperCase();
  const pdfPath = `/resume/Ergashev_Navruz_Resume_${langCode}.pdf`;

  useEffect(() => {
    window.location.replace(pdfPath);
  }, [pdfPath]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-xl">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <FileText size={32} />
        </div>
        <h1 className="text-2xl font-bold font-display mb-2 text-foreground">
          {config.author} — Resume
        </h1>
        <p className="text-muted-foreground text-sm mb-6">
          Redirecting to the latest PDF resume ({langCode})...
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={pdfPath}
            download={`Ergashev_Navruz_Resume_${langCode}.pdf`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={18} />
            Download Resume (PDF)
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Portfolio <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

