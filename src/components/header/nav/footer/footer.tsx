"use client";

import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>{t.navFooter.inspiredBy}:</span> Studio Lumio
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>{t.navFooter.typography}:</span> Inter
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>{t.navFooter.images}:</span> Unsplash
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link href="/blogs" className="hover:text-primary transition-colors cursor-pointer">
            {t.footer.blog}
          </Link>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link href="/news" className="hover:text-primary transition-colors cursor-pointer">
            {t.footer.newsletter}
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}
