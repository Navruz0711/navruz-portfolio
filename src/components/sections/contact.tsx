"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

import { SiTelegram } from "react-icons/si";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="contact" className="md:min-h-screen max-w-7xl mx-auto py-12 sm:py-16">
      <SectionHeader id="contact" className="relative mb-14" title={t.contact.heading} />
      <div className="flex justify-center z-[9999] px-4 w-full">
        <Card className="w-full max-w-2xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-6 md:mt-10 border border-border/80 shadow-lg">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-2xl sm:text-4xl">{t.contact.title}</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              {t.contact.subtitle}
            </CardDescription>
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {config.social.telegram && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={config.social.telegram}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-[1.02] cursor-can-hover shadow-sm group"
                >
                  <SiTelegram className="w-4 h-4 text-[#229ED9] group-hover:scale-110 transition-transform duration-300" />
                  <span>@Ergashev_Nz</span>
                </a>
              )}
              {config.email && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto:${config.email}`}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border/80 bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-[1.02] cursor-can-hover"
                >
                  <Mail className="w-4 h-4" />
                  <span>{config.email}</span>
                </a>
              )}
            </div>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
