import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { useLanguage } from "@/context/language-context";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const { t } = useLanguage();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-24 sm:pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28 px-4"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col w-full max-w-lg md:max-w-none">
              <div>
                <BlurIn delay={0.7}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {t.hero.availableForWork}
                  </div>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[2px] sm:-ml-[6px] leading-none text-transparent text-slate-800 text-left",
                          "font-bold text-[2.75rem] sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default text-edge-outline font-display"
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br className="hidden md:block" />
                        <span className="md:hidden">{" "}</span>
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      Ergashev Navruz — Frontend Developer
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start mt-3 md:mt-4 font-semibold text-base sm:text-lg md:text-2xl text-primary",
                      "cursor-default"
                    )}
                  >
                    {t.hero.role}
                  </p>
                </BlurIn>

                <BlurIn delay={1.4}>
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-muted-foreground max-w-md">
                    {t.hero.tagline}
                  </p>
                </BlurIn>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col gap-3 w-full sm:w-fit">
                <Link
                  href={"/resume"}
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <File size={20} />
                      <p>{t.hero.viewResume}</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          {t.hero.talkToMe}
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{t.hero.letsBuild}</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center h-full gap-2">
                    {config.social.github && (
                      <Link
                        href={config.social.github}
                        target="_blank"
                        className="cursor-can-hover"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                      >
                        <Button variant={"outline"}>
                          <SiGithub size={24} />
                        </Button>
                      </Link>
                    )}
                    {config.social.linkedin && (
                      <Link
                        href={config.social.linkedin}
                        target="_blank"
                        className="cursor-can-hover"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                      >
                        <Button variant={"outline"}>
                          <SiLinkedin size={24} />
                        </Button>
                      </Link>
                    )}
                    {config.social.twitter && (
                      <Link
                        href={config.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter) Profile"
                      >
                        <Button variant={"outline"}>
                          <SiX size={24} />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
