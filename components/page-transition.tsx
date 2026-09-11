"use client";

import { usePathname } from "next/navigation";
import { motion, type Variants, type AnimationDefinition } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

type TransitionType = "fade" | "slide" | "scale" | "slide-fade";

interface PageTransitionProps {
  children: ReactNode;
  type?: TransitionType;
  duration?: number;
  className?: string;
}

const variantMap: Record<TransitionType, Variants> = {
  fade: {
    initial: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { opacity: 0, x: 24 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.98 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  },
  "slide-fade": {
    initial: { opacity: 0, y: 16 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
  },
};

export default function PageTransition({
  children,
  type = "fade",
  duration = 0.35,
  className,
}: PageTransitionProps) {
  const pathname = usePathname();
  const variants = variantMap[type];

  const [committed, setCommitted] = useState<{ path: string; node: ReactNode }>(
    {
      path: pathname,
      node: children,
    },
  );

  const [phase, setPhase] = useState<"center" | "exit">("center");

  useEffect(() => {
    if (pathname !== committed.path) {
      setPhase("exit");
    }
  }, [pathname, committed.path]);

  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <motion.div
      key={committed.path}
      variants={variants}
      initial={isFirstRender.current ? false : "initial"}
      animate={phase}
      transition={{ duration, ease: "easeInOut" }}
      onAnimationComplete={(definition: AnimationDefinition) => {
        if (definition === "exit") {
          setCommitted({ path: pathname, node: children });
          setPhase("center");
        }
      }}
      className={className}
    >
      {committed.node}
    </motion.div>
  );
}
