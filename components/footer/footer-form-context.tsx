"use client";

import { createContext, ReactNode, useContext } from "react";
import { usePathname } from "next/navigation";

const PATHS_WITHOUT_FORM = ["/policy", "/affiliate", "/contact", "/get-hired"];

const FooterFormContext = createContext<boolean | null>(null);

export function FooterFormProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hasForm = !PATHS_WITHOUT_FORM.includes(pathname);

  return (
    <FooterFormContext.Provider value={hasForm}>
      {children}
    </FooterFormContext.Provider>
  );
}

export function useHasFooterForm() {
  const hasForm = useContext(FooterFormContext);

  if (hasForm === null) {
    throw new Error("useHasFooterForm must be used within FooterFormProvider");
  }

  return hasForm;
}
