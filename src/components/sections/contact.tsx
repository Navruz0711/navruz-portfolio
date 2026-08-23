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

import { Button } from "../ui/button";
import { SiTelegram } from "react-icons/si";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

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
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={config.social.telegram}
                  className="cursor-can-hover"
                  aria-label="Telegram (@Ergashev_Nz)"
                >
                  <Button
                    variant="outline"
                    className="gap-2 hover:text-[#229ED9] transition-colors"
                  >
                    <SiTelegram size={18} />
                    <span>@Ergashev_Nz</span>
                  </Button>
                </Link>
              )}
              {config.email && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto:${config.email}`}
                  className="cursor-can-hover"
                  aria-label={`Email (${config.email})`}
                >
                  <Button
                    variant="outline"
                    className="gap-2 transition-colors"
                  >
                    <Mail size={18} />
                    <span>{config.email}</span>
                  </Button>
                </Link>
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
