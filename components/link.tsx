"use client";

import { forwardRef, type AnchorHTMLAttributes, type MouseEvent } from "react";
import { isInternalHref, usePageTransition } from "./PagetransitionContext";

interface TransitionLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}

export const TransitionLink = forwardRef<
  HTMLAnchorElement,
  TransitionLinkProps
>(({ href, onClick, children, ...rest }, ref) => {
  const { navigateTo } = usePageTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    const isMiddleClick = event.button !== 0;

    if (isModifiedClick || isMiddleClick || !isInternalHref(href)) {
      return;
    }

    event.preventDefault();
    navigateTo(href);
  };

  return (
    <a ref={ref} href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
});

TransitionLink.displayName = "TransitionLink";
