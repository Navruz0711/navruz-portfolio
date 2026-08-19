import { motion } from "motion/react";
import styles from "./style.module.scss";
import { height } from "../anim";
import Body from "./body/body";
import MotionToggle from "@/components/motion-toggle";
import { links } from "@/components/header/config";
import { cn } from "@/lib/utils";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      // Clicking the empty overlay area closes the menu
      onClick={() => setIsActive(false)}
      className={cn(styles.nav, "relative")}
    >
      <div className={cn(styles.wrapper, "flex justify-start px-2 sm:px-6")}>
        <div className={styles.container}>
          <Body
            links={links}
            setIsActive={setIsActive}
          />
        </div>
      </div>
      {/* Reduced-motion control */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-2 right-4"
      >
        <MotionToggle />
      </motion.div>
    </motion.div>
  );
};

export default Index;
