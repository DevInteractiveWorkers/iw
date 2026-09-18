"use client";

import { usePathname } from "next/navigation";
import { motion, type Variants, type AnimationDefinition } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

export type TransitionType = "fade" | "slide" | "scale" | "slide-fade";

interface PageTransitionProps {
  children: ReactNode;
  /** Which built-in transition to use. Defaults to "fade". */
  type?: TransitionType;
  /** Animation duration (seconds) for both exit and enter. Defaults to 0.35. */
  duration?: number;
  /**
   * Optional extra className applied to the animated wrapper.
   * Layout-safe: no positioning/sizing classes are added by default,
   * so this won't affect surrounding markup or stacking contexts.
   */
  className?: string;
}

/**
 * Each transition defines three states:
 * - initial: where the INCOMING page starts before animating in
 * - center:  the fully visible, settled state
 * - exit:    where the OUTGOING page animates to before being removed
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

type CommittedState = {
  path: string;
  node: ReactNode;
};

export default function PageTransition({
  children,
  type = "fade",
  duration = 0.35,
  className,
}: PageTransitionProps) {
  const pathname = usePathname();
  const variants = variantMap[type];

  // `committed` is what's actually rendered. It deliberately lags behind
  // the live `pathname`/`children`: it only "catches up" once the
  // outgoing page has fully finished its exit animation. This is what
  // forces a strict exit -> swap -> enter sequence, rather than the new
  // route's content appearing mid-exit (which is what happens if you
  // rely solely on AnimatePresence keyed on pathname in the App Router,
  // since `children` and `pathname` update in the same commit).
  const [committed, setCommitted] = useState<CommittedState>({
    path: pathname,
    node: children,
  });

  // "center" = settled/visible, "exit" = currently animating out.
  const [phase, setPhase] = useState<"center" | "exit">("center");

  // Skip the enter animation on the very first paint (there's no
  // previous page to transition from), but allow it on every
  // subsequent route change.
  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  // Route changed (pathname no longer matches what's committed/rendered)
  // -> kick off the exit animation of the CURRENTLY DISPLAYED page.
  // We deliberately don't touch `committed` yet, so the old content
  // stays on screen, untouched, while it animates out.
  useEffect(() => {
    if (pathname !== committed.path) {
      setPhase("exit");
    }
  }, [pathname, committed.path]);

  const handleAnimationComplete = (definition: AnimationDefinition) => {
    if (definition !== "exit") return;

    // Old page has fully finished animating out — only now do we swap
    // in the new page's content. This updates `committed.path`, which
    // changes the `key` below, so React mounts a brand-new element that
    // plays the "initial" -> "center" enter animation.
    setCommitted({ path: pathname, node: children });
    setPhase("center");
  };

  return (
    <motion.div
      key={committed.path}
      variants={variants}
      initial={isFirstRender.current ? false : "initial"}
      animate={phase}
      transition={{ duration, ease: "easeInOut" }}
      onAnimationComplete={handleAnimationComplete}
      className={className}
    >
      {committed.node}
    </motion.div>
  );
}
