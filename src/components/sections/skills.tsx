"use client";

import type { CSSProperties } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS } from "@/data/constants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

import { useLanguage } from "@/context/language-context";

/**
 * Tech-stack section with rich visual cards and glow effects.
 */
const SkillsSection = () => {
  const { t } = useLanguage();
  const skillList = Object.values(SKILLS);

  return (
    <SectionWrapper
      id="skills"
      className="flex w-full md:min-h-screen flex-col justify-center py-16 sm:py-24"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto pointer-events-auto">
        <SectionHeader
          id="skills"
          title={t.skills.title}
          desc={t.skills.subtitle}
          className="mb-14 mt-0"
        />

        <ul className="mx-auto grid w-full grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {skillList.map((skill, index) => (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              viewport={{ once: true, margin: "-40px" }}
              style={{ "--skill": skill.color } as CSSProperties}
              className={cn(
                "group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl p-5",
                "border border-border/70 bg-card/60 backdrop-blur-md",
                "transition-all duration-300",
                "hover:-translate-y-1.5 hover:border-[var(--skill)] hover:bg-card/90",
                "hover:shadow-[0_12px_36px_-12px_var(--skill)]"
              )}
            >
              {/* per-skill colored glow */}
              <span
                aria-hidden
                style={{ background: "var(--skill)" }}
                className="pointer-events-none absolute -top-6 h-16 w-16 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-75"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.icon}
                alt={skill.label}
                width={48}
                height={48}
                loading="lazy"
                className="relative size-10 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 md:size-12"
              />
              <span className="relative text-center text-xs font-semibold text-foreground/90 transition-colors group-hover:text-foreground md:text-sm">
                {skill.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
