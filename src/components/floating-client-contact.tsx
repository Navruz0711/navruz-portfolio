"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { SiTelegram } from "react-icons/si";
import { Mail, MessageCircle, X, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { config } from "@/data/config";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";

export default function FloatingClientContact() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const telegramUrl =
    language === "ru"
      ? "https://t.me/Ergashev_Nz?text=Здравствуйте%20Навруз!%20Хочу%20обсудить%20проект."
      : language === "en"
      ? "https://t.me/Ergashev_Nz?text=Hello%20Navruz!%20I%20would%20like%20to%20discuss%20a%20project."
      : "https://t.me/Ergashev_Nz?text=Assalomu%20alaykum%20Navruz!%20Loyiha%20bo'yicha%20maslahat%20olmoqchi%20edim.";

  const labels = {
    uz: {
      badge: "Loyiha bormi? Yozing",
      online: "Online • 15 daqiqada javob",
      chatTelegram: "Telegramda bog'lanish",
      chatTelegramSub: "Tezkor va to'g'ridan-to'g'ri aloqa",
      emailMe: "Email yozish",
      guarantee: "30 kunlik bepul kafolat & Kwork Top-Rated",
      discuss: "Loyihani muhokama qilish",
    },
    ru: {
      badge: "Заказать сайт / Написать",
      online: "Online • Ответ за 15 минут",
      chatTelegram: "Написать в Telegram",
      chatTelegramSub: "Быстрый ответ без посредников",
      emailMe: "Написать на Email",
      guarantee: "Гарантия 30 дней & Топ-1 на Kwork",
      discuss: "Обсудить проект",
    },
    en: {
      badge: "Hire Me / Chat",
      online: "Online • Fast 15-min reply",
      chatTelegram: "Chat on Telegram",
      chatTelegramSub: "Instant direct response",
      emailMe: "Send an Email",
      guarantee: "30-day free warranty & Top-Rated seller",
      discuss: "Start a Project",
    },
  }[language] || {
    badge: "Loyiha bormi? Yozing",
    online: "Online • 15 daqiqada javob",
    chatTelegram: "Telegramda bog'lanish",
    chatTelegramSub: "Tezkor va to'g'ridan-to'g'ri aloqa",
    emailMe: "Email yozish",
    guarantee: "30 kunlik bepul kafolat & Kwork Top-Rated",
    discuss: "Loyihani muhokama qilish",
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="mb-3 w-[min(92vw,20rem)] p-4 rounded-2xl bg-white/95 dark:bg-zinc-900/95 border border-emerald-500/30 shadow-2xl backdrop-blur-xl text-foreground"
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/50">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  {labels.online}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="pt-3 space-y-2">
              <Link
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-sky-500/10 to-blue-600/10 hover:from-sky-500/20 hover:to-blue-600/20 border border-sky-500/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#229ED9] text-white shadow-md shadow-sky-500/20">
                    <SiTelegram size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold group-hover:text-[#229ED9] transition-colors">
                      {labels.chatTelegram}
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      {labels.chatTelegramSub}
                    </div>
                  </div>
                </div>
                <ChevronRight size={16} className="text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href={`mailto:${config.email}?subject=Loyiha%20buyurtmasi`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-secondary/70 border border-border/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-700 dark:bg-zinc-800 text-white">
                    <Mail size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold">
                      {labels.emailMe}
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      {config.email}
                    </div>
                  </div>
                </div>
                <ChevronRight size={16} className="text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center gap-2 text-[11px] text-muted-foreground">
              <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
              <span>{labels.guarantee}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Client Quick Contact"
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-950/90 dark:bg-zinc-900/90 text-white border border-emerald-500/40 shadow-xl shadow-emerald-500/10 backdrop-blur-md cursor-pointer hover:border-emerald-400 transition-all"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="text-xs sm:text-sm font-medium tracking-wide">
          {labels.badge}
        </span>
        <div className="p-1 rounded-full bg-[#229ED9] text-white">
          <SiTelegram size={13} />
        </div>
      </motion.button>
    </div>
  );
}
