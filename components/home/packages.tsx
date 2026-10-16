"use client";

import { useEffect, useRef, useState } from "react";
import PackagesCard from "./packages-card";
import SplitText from "../text-animation/SplitText";
import { useIsMobile } from "@/lib/useMobile";

export default function Packages() {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);
  const leftTiltClass = isVisible
    ? "translate-x-0 rotate-0 scale-100"
    : "-translate-x-full rotate-[30deg] scale-90";

  const rightTiltClass = isVisible
    ? "translate-x-0 rotate-0 scale-100"
    : "translate-x-full -rotate-[30deg] scale-90";

  const isMobile = useIsMobile();

  return (
    <>
      <SplitText
        tag="h2"
        text={"View Productized Packages"}
        delay={isMobile ? 0 : 100}
        className="font-light text-[clamp(2rem,4vw,3rem)] text-base z-40 text-center leading-none pb-4"
      />
      <div
        ref={ref}
        className="grid grid-cols-3 gap-[clamp(1rem,2vw,2rem)] w-[clamp(90%,_calc(140vw_10px),_20%)]"
      >
        <PackagesCard
          className={`
            ${rightTiltClass}
            transition-all duration-1000 ease-out
          `}
          title={
            <>
              Zero Hardware &<br />
              IT Hassle
            </>
          }
        >
          <svg
            width="73"
            height="60"
            viewBox="0 0 73 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 59.3125V52.7222H72.4931V59.3125H0ZM9.88542 49.4271C8.07309 49.4271 6.52163 48.7818 5.23103 47.4912C3.94044 46.2006 3.29514 44.6491 3.29514 42.8368V6.59028C3.29514 4.77795 3.94044 3.22649 5.23103 1.93589C6.52163 0.645298 8.07309 0 9.88542 0H62.6076C64.42 0 65.9714 0.645298 67.262 1.93589C68.5526 3.22649 69.1979 4.77795 69.1979 6.59028V42.8368C69.1979 44.6491 68.5526 46.2006 67.262 47.4912C65.9714 48.7818 64.42 49.4271 62.6076 49.4271H9.88542ZM9.88542 42.8368H62.6076V6.59028H9.88542V42.8368ZM32.9514 37.8941H39.5417V24.1369L44.8139 29.3267L49.4271 24.7135L36.2465 11.533L23.066 24.7135L27.6792 29.4091L32.9514 24.1369V37.8941Z"
              fill="white"
            />
          </svg>
        </PackagesCard>
        <PackagesCard
          className="z-10"
          title={
            <>
              100% Continuity
              <br />
              Guarantee
            </>
          }
        >
          <svg
            width="56"
            height="70"
            viewBox="0 0 56 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.2799 47.337L44.0182 27.5987L39.0399 22.6204L24.2799 37.3805L16.9435 30.0441L11.9653 35.0224L24.2799 47.337ZM27.948 69.8701C19.8548 67.8322 13.1734 63.1888 7.90406 55.9398C2.63469 48.6907 0 40.6411 0 31.7909V10.4805L27.948 0L55.8961 10.4805V31.7909C55.8961 40.6411 53.2614 48.6907 47.992 55.9398C42.7227 63.1888 36.0413 67.8322 27.948 69.8701ZM27.948 62.5338C34.0035 60.6123 39.0108 56.7695 42.9701 51.0052C46.9294 45.2409 48.9091 38.8361 48.9091 31.7909V15.2841L27.948 7.4237L6.98701 15.2841V31.7909C6.98701 38.8361 8.96666 45.2409 12.926 51.0052C16.8853 56.7695 21.8926 60.6123 27.948 62.5338Z"
              fill="white"
            />
          </svg>
        </PackagesCard>
        <PackagesCard
          className={`
            ${leftTiltClass}
            transition-all duration-1000 ease-out
          `}
          title={
            <>
              Zero HR &<br />
              Legal Liability
            </>
          }
        >
          <svg
            width="57"
            height="60"
            viewBox="0 0 57 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.6563 59.3125V50.1932L46.0413 33.8823C46.4862 33.4374 46.9805 33.1162 47.5242 32.9184C48.0679 32.7207 48.6115 32.6219 49.1552 32.6219C49.7484 32.6219 50.3168 32.7331 50.8605 32.9555C51.4042 33.1779 51.8985 33.5116 52.3433 33.9564L55.0865 36.6996C55.4819 37.1445 55.7908 37.6387 56.0133 38.1824C56.2357 38.7261 56.3469 39.2698 56.3469 39.8135C56.3469 40.3572 56.248 40.9133 56.0503 41.4817C55.8526 42.0501 55.5313 42.5567 55.0865 43.0016L38.7756 59.3125H29.6563ZM34.1047 54.8641H36.922L45.8931 45.8189L44.5585 44.4103L43.1499 43.0757L34.1047 52.0467V54.8641ZM5.93125 59.3125C4.30016 59.3125 2.90384 58.7318 1.74231 57.5702C0.580768 56.4087 0 55.0124 0 53.3813V5.93125C0 4.30016 0.580768 2.90384 1.74231 1.74231C2.90384 0.580768 4.30016 0 5.93125 0H29.6563L47.45 17.7938V26.6906H41.5188V20.7594H26.6906V5.93125H5.93125V53.3813H23.725V59.3125H5.93125ZM44.5585 44.4103L43.1499 43.0757L45.8931 45.8189L44.5585 44.4103Z"
              fill="white"
            />
          </svg>
        </PackagesCard>
      </div>
    </>
  );
}
