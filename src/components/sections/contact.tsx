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
              {t.contact.subtitle} (
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-primary hover:underline font-medium cursor-can-hover break-all"
              >
                {config.email}
              </a>
              )
            </CardDescription>
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
