"use client";

import { motion, type Variants, type AnimationDefinition } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { TransitionType, usePageTransition } from "./PagetransitionContext";

/**
 * Each transition defines three states:
 * - initial: where the INCOMING content starts before animating in
 * - center:  the fully visible, settled state
 * - exit:    where the OUTGOING content animates to before being removed
 */
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

interface PageTransitionOutletProps {
  children: ReactNode;
  className?: string;
}

export function PageTransitionOutlet({
  children,
  className,
}: PageTransitionOutletProps) {
  const {
    committedPath,
    phase,
    isFirstRender,
    type,
    duration,
    notifyExitComplete,
  } = usePageTransition();

  const variants = variantMap[type];

  const [committedNode, setCommittedNode] = useState<ReactNode>(children);

  useEffect(() => {
    setCommittedNode(children);
  }, [committedPath]);

  const handleAnimationComplete = (definition: AnimationDefinition) => {
    if (definition === "exit") {
      notifyExitComplete();
    }
  };

  return (
    <motion.div
      key={committedPath}
      variants={variants}
      initial={isFirstRender ? false : "initial"}
      animate={phase}
      transition={{ duration, ease: "easeInOut" }}
      onAnimationComplete={handleAnimationComplete}
      className={className}
    >
      {committedNode}
    </motion.div>
  );
}
