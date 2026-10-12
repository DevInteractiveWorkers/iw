"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type TransitionType = "fade" | "slide" | "scale" | "slide-fade";

interface PageTransitionContextValue {
  navigateTo: (href: string) => void;
  isTransitioning: boolean;
  committedPath: string;
  pendingPath: string | null;
  phase: "center" | "exit";
  isFirstRender: boolean;
  type: TransitionType;
  duration: number;
  notifyExitComplete: () => void;
}

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

export function usePageTransition(): PageTransitionContextValue {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error(
      "usePageTransition() must be used within a <PageTransitionProvider>.",
    );
  }
  return ctx;
}

export function isInternalHref(href: string): boolean {
  if (!href) return false;

  if (/^[/?#]/.test(href)) return true;

  if (/^(mailto:|tel:|sms:|javascript:|data:|blob:)/i.test(href)) {
    return false;
  }

  try {
    const url = new URL(
      href,
      typeof window !== "undefined" ? window.location.href : undefined,
    );
    if (typeof window !== "undefined") {
      return url.origin === window.location.origin;
    }
    return false;
  } catch {
    return true;
  }
}

function splitHref(href: string): { path: string; hash: string } {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return { path: href, hash: "" };
  return { path: href.slice(0, hashIndex), hash: href.slice(hashIndex) };
}

function scrollToHash(hash: string, attemptsLeft = 20): void {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (attemptsLeft > 0) {
    requestAnimationFrame(() => scrollToHash(hash, attemptsLeft - 1));
  }
}

interface PageTransitionProviderProps {
  children: ReactNode;
  type?: TransitionType;
  duration?: number;
}

export function PageTransitionProvider({
  children,
  type = "fade",
  duration = 0.35,
}: PageTransitionProviderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [committedPath, setCommittedPath] = useState(pathname);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const [phase, setPhase] = useState<"center" | "exit">("center");

  const pendingHrefRef = useRef<string | null>(null);

  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  useEffect(() => {
    if (pendingHrefRef.current === null) return;

    const { path: targetPath, hash } = splitHref(pendingHrefRef.current);
    if (pathname !== targetPath) return;

    pendingHrefRef.current = null;
    setPendingPath(null);
    setCommittedPath(pathname);
    setPhase("center");

    if (hash) {
      scrollToHash(hash);
    }
  }, [pathname]);

  const navigateTo = useCallback(
    (href: string) => {
      if (pendingHrefRef.current !== null) return;

      if (!isInternalHref(href)) {
        window.location.assign(href);
        return;
      }

      const { path: targetPath, hash } = splitHref(href);
      const resolvedPath = targetPath || pathname;

      if (resolvedPath === pathname) {
        if (hash) {
          router.push(href, { scroll: false });
          scrollToHash(hash);
        }
        return;
      }

      pendingHrefRef.current = href;
      setPendingPath(resolvedPath);
      setPhase("exit");
    },
    [pathname, router],
  );

  const notifyExitComplete = useCallback(() => {
    if (pendingHrefRef.current) {
      router.push(pendingHrefRef.current);
    }
  }, [router]);

  const value: PageTransitionContextValue = {
    navigateTo,
    isTransitioning: phase === "exit",
    committedPath,
    pendingPath,
    phase,
    isFirstRender: isFirstRender.current,
    type,
    duration,
    notifyExitComplete,
  };

  return (
    <PageTransitionContext.Provider value={value}>
      {children}
    </PageTransitionContext.Provider>
  );
}
