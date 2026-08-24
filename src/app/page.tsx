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
import { config } from "@/data/config";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      {/* Semantic Crawling Meta-Content for Search Engines (Screen-reader accessible) */}
      <section className="sr-only" aria-label="About Ergashev Navruz - SEO Profile">
        <h2>{config.author} — Senior Frontend Developer & Creative UI Engineer</h2>
        <p>{config.description.long}</p>
        <p>
          Specializing in React.js, Next.js, TypeScript, Tailwind CSS, 3D Web animations with Three.js and Spline, UI/UX Design, and web application architecture in Tashkent, Uzbekistan.
        </p>
      </section>

      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;

