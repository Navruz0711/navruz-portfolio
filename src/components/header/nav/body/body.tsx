import { motion } from "motion/react";
import Link from "next/link";
import styles from "./style.module.scss";
import { translate } from "../../anim";
import { Link as LinkType } from "@/types";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FunnyThemeToggle from "@/components/theme/funny-theme-toggle";
import LanguageSwitcher from "@/components/header/language-switcher";
import { useLanguage } from "@/context/language-context";

interface BodyProps {
  links: LinkType[];
  setIsActive: (isActive: boolean) => void;
}

export default function Body({
  links,
  setIsActive,
}: BodyProps) {
  const { t } = useLanguage();
  const params = useParams();
  const [currentHref, setCurrentHref] = useState("/");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const { pathname, hash } = window.location;
    setCurrentHref(pathname + hash);
  }, [params]);

  const getTranslatedTitle = (title: string, href: string) => {
    if (href === "/") return t.nav.home;
    if (href === "/#about") return t.nav.about;
    if (href === "/#skills") return t.nav.skills;
    if (href === "/#experience") return t.nav.experience;
    if (href === "/#projects") return t.nav.projects;
    if (href === "/blogs") return t.nav.blogs;
    if (href === "/news" || href === "/newsletter") return t.footer.newsletter;
    if (href === "/#contact") return t.nav.contact;
    if (href === "/resume") return t.nav.resume;
    return title;
  };

  const getChars = (word: string) => {
    let chars: React.JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          className="pointer-events-none"
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={cn(styles.body, "flex flex-col items-start md:flex-row md:items-center")}>
      <div className="flex items-center gap-3 mb-6 md:hidden">
        <LanguageSwitcher />
        <FunnyThemeToggle className="w-6 h-6" />
      </div>
      {links.map((link, index) => {
        const { title, href, target } = link;
        const isCurrent = currentHref === href;

        return (
          <Link
            key={`l_${index}`}
            href={href}
            target={target}
            className="cursor-can-hover rounded-lg py-1 md:py-0"
          >
            <motion.p
              className={cn(
                "font-display rounded-lg transition-colors duration-200",
                !isCurrent
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-foreground font-bold underline underline-offset-4"
              )}
              onClick={() => setIsActive(false)}
            >
              {getChars(getTranslatedTitle(title, href))}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
