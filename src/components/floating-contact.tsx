"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/context/language-context";
import { config } from "@/data/config";

export default function FloatingContact() {
  const { language } = useLanguage();

  const textByLang = {
    ru: "Заказать сайт / Написать",
    uz: "Sayt buyurtma qilish / Yozish",
    en: "Order a website / Contact",
  };

  const currentText = textByLang[language] || textByLang.ru;

  const telegramUrl =
    language === "ru"
      ? `${config.social.telegram}?text=${encodeURIComponent(
          "Здравствуйте, хочу заказать сайт!"
        )}`
      : language === "uz"
      ? `${config.social.telegram}?text=${encodeURIComponent(
          "Assalomu alaykum, sayt buyurtma qilmoqchi edim!"
        )}`
      : `${config.social.telegram}?text=${encodeURIComponent(
          "Hello, I would like to order a website!"
        )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 print:hidden"
    >
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={currentText}
        className="group relative flex items-center gap-3 pl-4 pr-1.5 py-1.5 rounded-full bg-[#0b0f14]/95 border border-[#10b981]/50 shadow-[0_4px_20px_rgba(16,185,129,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-[#10b981] hover:shadow-[0_6px_25px_rgba(16,185,129,0.4)] active:scale-[0.97]"
      >
        {/* Pulsing online green dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]" />
        </span>

        {/* Text */}
        <span className="text-white text-sm sm:text-[15px] font-semibold tracking-normal select-none whitespace-nowrap">
          {currentText}
        </span>

        {/* Telegram circular icon */}
        <div className="w-8 h-8 rounded-full bg-[#24A1DE] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-white -translate-x-[1px] translate-y-[0.5px]"
          >
            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.673c.46 0 .663-.211.921-.46l2.211-2.15 4.6 3.398c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.412Z" />
          </svg>
        </div>
      </a>
    </motion.div>
  );
}
