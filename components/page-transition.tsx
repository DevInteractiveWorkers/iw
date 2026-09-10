"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type PageTransitionType = "fade" | "slide" | "scale";

interface PageTransitionProps {
  children: ReactNode;
  type?: PageTransitionType;
  duration?: number;
}

const transitionVariants: Record<PageTransitionType, Variants> = {
  fade: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },

  slide: {
    initial: {
      opacity: 0,
      x: 40,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -40,
    },
  },

  scale: {
    initial: {
      opacity: 0,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.02,
    },
  },
};

export default function PageTransition({
  children,
  type = "fade",
  duration = 0.4,
}: PageTransitionProps) {
  const pathname = usePathname();

  const variants = transitionVariants[type];

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
