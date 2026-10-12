"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbar } from "@/app/content/navbar";
import ItemList from "./item-list";
import Image from "next/image";
import { TransitionLink } from "../link";
import { usePageTransition } from "../PagetransitionContext";
import ThemeSwitch from "./theme-switch";
import { useIsMobile } from "@/lib/useMobile";

const NavbarComponent = () => {
  const { isTransitioning } = usePageTransition();

  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [navbarDark, setNavbarDark] = useState(false);

  const isMobile = useIsMobile();

  useEffect(() => {
    let frame = 0;

    const detectBackground = () => {
      frame = 0;
      const nav = navRef.current;
      if (!nav) return;

      const navRect = nav.getBoundingClientRect();
      const y = navRect.top + navRect.height / 2;

      // Later elements in document order are nested deeper or painted on top
      const candidates = document.querySelectorAll<HTMLElement>(
        ".bg-iw-red-2, .bg-white",
      );
      let match: HTMLElement | undefined;
      candidates.forEach((el) => {
        if (nav.contains(el)) return;
        const rect = el.getBoundingClientRect();
        const collides =
          rect.width > 0 &&
          rect.top <= y &&
          rect.bottom >= y &&
          rect.left < navRect.right &&
          rect.right > navRect.left;
        if (collides) match = el;
      });
      if (!match) return;

      setNavbarDark(match.classList.contains("bg-iw-red-2"));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(detectBackground);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    detectBackground();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className={`w-full sticky top-0 left-0 z-[500] ${navbarDark ? "dark text-white" : ""}`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full backdrop-blur-md -z-10 ${navbarDark ? "dark text-white" : "bg-white/75 backdrop-brightness-[2]"}`}
        style={
          isMobile
            ? {}
            : {
                maskImage:
                  "linear-gradient(to right, transparent 3%, black 10%, black 90%, transparent 97%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 3%, black 10%, black 90%, transparent 97%)",
              }
        }
      />
      <div
        className={`border-b ${navbarDark ? "border-white" : "border-black"} flex items-center justify-between max-md:grid grid-cols-2 justify-items-stretch py-4 gap-4 z-10 mx-[clamp(1rem,8vw,50rem)]`}
      >
        <TransitionLink href="/">
          <Image
            className={`hover:scale-95 transition-transform duration-150 h-[31px] object-contain ${navbarDark ? "black" : "hidden"}`}
            src={"/logo/01_Primary_Logo/Primary_Logo-04.png"}
            alt="Interactiveworkers Logo"
            width={200}
            height={31}
          />
          <Image
            className={`hover:scale-95 transition-transform duration-150 h-[31px] object-contain ${navbarDark ? "hidden" : "block"}`}
            src={"/logo/01_Primary_Logo/Primary_Logo-06.png"}
            alt="Interactiveworkers Logo"
            width={200}
            height={31}
          />
        </TransitionLink>

        <ItemList
          items={navbar}
          hover={true}
          isTransitioning={isTransitioning}
          dark={navbarDark}
        />

        <div className="md:w-1/4 w-full flex gap-2 justify-center col-span-2">
          <ThemeSwitch />
          <TransitionLink
            href={"/affiliate"}
            className={`basis-full ${navbarDark ? "bg-white text-black" : "bg-iw-red-1 text-white"} text-center active:text-iw-red-1 rounded py-1 items-center justify-center content-center hover:scale-95 transition-[transform,_color] duration-150`}
          >
            Affiliate Program
          </TransitionLink>
          <Link
            href={"https://calendly.com/interactiveworkersgm/30min"}
            target="_blank"
            className={`basis-full ${navbarDark ? "bg-white text-black" : "bg-iw-red-1 text-white"} text-center active:text-iw-red-1 rounded py-1 items-center justify-center content-center hover:scale-95 transition-[transform,_color] duration-150`}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
