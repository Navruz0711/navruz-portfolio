"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import ServicesAndFaqSection from "@/components/sections/services-faq";
import { config } from "@/data/config";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      {/* Semantic Crawling Meta-Content for Search Engines (Screen-reader & Search Bot accessible) */}
      <section className="sr-only" aria-label="Ergashev Navruz — SEO Profile & Web Development Services">
        <h1>{config.author} — Navruz: Senior Frontend Developer & Toshkentda Veb-Sayt Yaratish Xizmati</h1>
        <h2>Navruz Ergashev, Navruzbek, Navruz dasturchi, Frontend Dasturchi O&apos;zbekiston</h2>
        <p>{config.description.long}</p>
        <p>
          Ergashev Navruz (Navruz0711) — Kwork frilans platformasida 47 dan ortiq muvaffaqiyatli loyihalarni bajargan va 100% 5 yulduzli baho olgan Oliy Reytingli (Top-Rated) mutaxassis.
        </p>
        <h3>Xizmatlar (Services):</h3>
        <ul>
          <li>Landing page yaratish — Yuqori konversiyali, tezkor va sotuvchi saytlar (3-5 kunda).</li>
          <li>3D interaktiv veb-saytlar — Three.js va Spline 3D WebGL animatsiyalari.</li>
          <li>Korporativ veb-saytlar va CRM tizimlari — Next.js 15, React, TypeScript.</li>
          <li>Figma maketlarini pikselma-piksel toza kodga aylantirish (HTML, Tailwind CSS).</li>
          <li>Google va Yandexda 1-o&apos;ringa chiqish uchun to&apos;liq SEO optimallashtirish.</li>
        </ul>
        <h3>Mijozlar uchun kafolatlar:</h3>
        <p>
          Har bir loyihaga 30 kunlik bepul texnik kafolat, 98% o&apos;z vaqtida topshirish va Telegram orqali 15 daqiqa ichida tezkor javob kafolatlanadi.
        </p>
        <h3>Aloqa (Contact):</h3>
        <p>
          Telegram: @Ergashev_Nz | Email: uznav715@gmail.com | Joylashuv: Toshkent, O&apos;zbekiston.
        </p>
      </section>

      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesAndFaqSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;

