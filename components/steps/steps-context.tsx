"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

// What a mounted <Steps> exposes to its provider.
export interface StepsController {
  goTo: (index: number) => void;
}

interface StepsContextValue {
  /** Zero-based index of the step currently in view. */
  active: number;
  count: number;
  /** Scrolls the page so the given (zero-based) step is in view. */
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  /** Used by <Steps> to hook itself up; not meant for consumers. */
  register: (controller: StepsController | null) => void;
  report: (active: number, count: number) => void;
}

export const StepsContext = createContext<StepsContextValue | null>(null);

export function StepsProvider({ children }: { children: React.ReactNode }) {
  const controller = useRef<StepsController | null>(null);
  const [state, setState] = useState({ active: 0, count: 0 });

  const register = useCallback((c: StepsController | null) => {
    controller.current = c;
  }, []);

  const report = useCallback((active: number, count: number) => {
    setState((prev) =>
      prev.active === active && prev.count === count ? prev : { active, count },
    );
  }, []);

  const goTo = useCallback((index: number) => {
    controller.current?.goTo(index);
  }, []);

  const { active, count } = state;
  const value = useMemo<StepsContextValue>(
    () => ({
      active,
      count,
      goTo,
      next: () => goTo(Math.min(active + 1, count - 1)),
      prev: () => goTo(Math.max(active - 1, 0)),
      register,
      report,
    }),
    [active, count, goTo, register, report],
  );

  return (
    <StepsContext.Provider value={value}>{children}</StepsContext.Provider>
  );
}

export function useSteps() {
  const ctx = useContext(StepsContext);
  if (!ctx) throw new Error("useSteps must be used within a <StepsProvider>");
  return ctx;
}
