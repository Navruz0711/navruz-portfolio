"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/language-context";

export default function ResumePage() {
  const { language } = useLanguage();

  useEffect(() => {
    const langCode = (language || "uz").toUpperCase();
    const pdfPath = `/resume/Ergashev_Navruz_Resume_${langCode}.pdf`;
    window.location.replace(pdfPath);
  }, [language]);

  return null;
}
