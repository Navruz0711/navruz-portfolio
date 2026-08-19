"use client";

import React from "react";
import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Repeat, Star, Trophy, PackageCheck, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const KWORK_PROFILE_URL = "https://kwork.ru/user/expertweb";

const ExperienceSection = () => {
  const { t } = useLanguage();

  const kworkStats = [
    {
      ...t.experience.stats.status,
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
    },
    {
      ...t.experience.stats.orders,
      icon: <PackageCheck className="w-5 h-5 text-emerald-400" />,
    },
    {
      ...t.experience.stats.reviews,
      icon: <Star className="w-5 h-5 text-yellow-400 fill-yellow-400/20" />,
    },
    {
      ...t.experience.stats.success,
      icon: <CheckCircle2 className="w-5 h-5 text-cyan-400" />,
    },
    {
      ...t.experience.stats.onTime,
      icon: <Clock className="w-5 h-5 text-blue-400" />,
    },
    {
      ...t.experience.stats.repeat,
      icon: <Repeat className="w-5 h-5 text-violet-400" />,
    },
  ];

  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col items-center justify-center md:min-h-screen py-16 sm:py-24"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto pointer-events-auto">
        <SectionHeader
          id="experience"
          title={t.experience.title}
          desc={t.experience.subtitle}
          className="mb-12 md:mb-16 mt-0"
        />

        {/* Kwork Freelance Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4 px-1">
            <a
              href={KWORK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors group"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.experience.kworkTitle}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href={KWORK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Badge
                variant="outline"
                className="text-amber-500 border-amber-500/30 bg-amber-500/10 font-mono text-xs hover:bg-amber-500/20 hover:border-amber-500/50 transition-colors cursor-pointer"
              >
                {t.experience.kworkBadge}
              </Badge>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {kworkStats.map((stat, i) => (
              <motion.a
                key={stat.label}
                href={KWORK_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                viewport={{ once: true }}
                className={cn(
                  "p-3 sm:p-4 rounded-xl border border-border/70 bg-card/60 backdrop-blur-md",
                  "flex flex-col justify-between transition-all duration-300 group cursor-pointer",
                  "hover:border-primary/50 hover:bg-card/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-[11px] font-mono text-muted-foreground uppercase group-hover:text-foreground transition-colors">{stat.label}</span>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold font-display text-foreground tracking-tight flex items-center justify-between">
                    <span>{stat.value}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-muted-foreground group-hover:text-primary transition-all duration-200" />
                  </div>
                  <div className="text-[11px] text-muted-foreground leading-tight mt-0.5">{stat.sub}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="flex flex-col gap-8 md:gap-10 relative">
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

          {t.experience.items.map((exp, index) => {
            const rawExp = EXPERIENCE.find((e) => e.id === exp.id) || EXPERIENCE[0];
            return (
              <div key={exp.id} className="relative">
                <ExperienceCard
                  experience={exp}
                  skills={rawExp.skills}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  skills,
  index,
}: {
  experience: {
    id: number;
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    description: string[];
  };
  skills: SkillNames[];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card/90 backdrop-blur-sm text-card-foreground border-border",
          "hover:border-primary/30 transition-all duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {experience.title}
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground">
                {experience.id === 1 ? (
                  <a
                    href={KWORK_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary transition-colors group"
                  >
                    <span>{experience.company}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary" />
                  </a>
                ) : (
                  experience.company
                )}
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
              {experience.startDate} - {experience.endDate}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              if (!skill) return null;
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-3.5 h-3.5 object-contain opacity-80"
                  />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
