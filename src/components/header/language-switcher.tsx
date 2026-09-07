"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import { Language } from "@/locales/translations";
import { Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "uz", label: "O'zbekcha", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or touch
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const handleSelectLanguage = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn("relative z-[1001]", className)}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Change language"
        className={cn(
          "flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium font-mono cursor-pointer",
          "border border-border/80 bg-background/80 hover:bg-secondary/80 backdrop-blur-md",
          "text-foreground transition-all duration-200 shadow-sm select-none",
          "focus:outline-none focus:ring-1 focus:ring-primary/40",
          isOpen && "border-primary/50 bg-secondary shadow-md"
        )}
      >
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span className="uppercase font-semibold tracking-wider">{currentLang.code}</span>
        <Globe className="w-3 h-3 opacity-60 ml-0.5" />
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute right-0 mt-2 w-36 rounded-xl border border-border bg-popover p-1.5 shadow-2xl backdrop-blur-xl z-[1002]",
            "animate-in fade-in-0 zoom-in-95 duration-150"
          )}
        >
          {LANGUAGES.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelectLanguage(lang.code);
                }}
                onClick={() => handleSelectLanguage(lang.code)}
                className={cn(
                  "w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer",
                  isSelected
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-foreground hover:bg-secondary/80"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{lang.flag}</span>
                  <span>{lang.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
