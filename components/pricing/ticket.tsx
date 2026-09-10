"use client";

import "./ticket.css";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const TRANSITION_MS = 800;
const TICKET_SCALE = 1.15;

const IDENTITY_TRANSFORM =
  "perspective(1200px) translate3d(0, 0, 0) rotateY(0deg) scale(1)";

type PinnedRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export default function Ticket() {
  const [isOpen, setIsOpen] = useState(false);
  const [pinnedRect, setPinnedRect] = useState<PinnedRect | null>(null);
  const [transformValue, setTransformValue] = useState(IDENTITY_TRANSFORM);

  const ticketRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const computeCenteredTransform = useCallback((rect: PinnedRect) => {
    const elCenterX = rect.left + rect.width / 2;
    const elCenterY = rect.top + rect.height / 2;

    const deltaX = window.innerWidth / 2 - elCenterX;
    const deltaY = window.innerHeight / 2 - elCenterY;

    return `perspective(1200px) translate3d(${deltaX}px, ${deltaY}px, 0) rotateY(180deg) scale(${TICKET_SCALE})`;
  }, []);

  /**
   * Position the close button underneath the centered ticket.
   *
   * The ticket is centered at 50vh and scaled to 1.15, so we calculate
   * the visual bottom of the transformed ticket and place the button
   * underneath it.
   */
  const getCloseButtonStyle = useCallback(() => {
    if (!pinnedRect || !isOpen) {
      return undefined;
    }

    const ticketCenterY = window.innerHeight / 2;
    const scaledHeight = pinnedRect.height * TICKET_SCALE;
    const ticketBottom = ticketCenterY + scaledHeight / 2;

    return {
      position: "fixed" as const,
      top: `${ticketBottom + 24}px`,
      left: "50%",
      transform: "translateX(-50%)",
    };
  }, [pinnedRect, isOpen]);

  const handleOpen = () => {
    const el = ticketRef.current;
    if (!el) return;

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    const rect = el.getBoundingClientRect();

    const nextRect: PinnedRect = {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };

    setPinnedRect(nextRect);
    setTransformValue(IDENTITY_TRANSFORM);
    setIsOpen(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransformValue(computeCenteredTransform(nextRect));
      });
    });
  };

  const handleClose = () => {
    if (!pinnedRect) {
      setIsOpen(false);
      return;
    }

    setIsOpen(false);
    setTransformValue(IDENTITY_TRANSFORM);

    closeTimeoutRef.current = setTimeout(() => {
      setPinnedRect(null);
    }, TRANSITION_MS);
  };

  useEffect(() => {
    if (!isOpen || !pinnedRect) return;

    const handleResize = () => {
      setTransformValue(computeCenteredTransform(pinnedRect));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, pinnedRect, computeCenteredTransform]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`ticket-backdrop ${
          isOpen ? "ticket-backdrop-open" : ""
        } transition-all duration-300`}
        onClick={handleClose}
      />

      <div className="container-cards-ticket">
        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className={`z-[100] text-white hover:scale-95 transition-all duration-200 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={getCloseButtonStyle()}
        >
          <code>[CLOSE]</code>
        </button>

        {/* TICKET */}
        <button
          onClick={handleOpen}
          id="ticket"
          ref={ticketRef}
          className={`grid grid-cols-[auto_auto] w-max group/ticket card-ticket ${
            pinnedRect ? "card-ticket-open" : ""
          }`}
          style={
            pinnedRect
              ? {
                  position: "fixed",
                  top: pinnedRect.top,
                  left: pinnedRect.left,
                  width: pinnedRect.width,
                  height: pinnedRect.height,
                  margin: 0,
                  transform: transformValue,
                }
              : undefined
          }
        >
          {/* =========================
              FRONT OF TICKET
              ========================= */}

          <div className="ticket-front bg-iw-red-1 corner-scoop rounded-r-xl py-4 w-max min-w-[clamp(500px,20vw,200px)] transition-all duration-300 origin-bottom-right">
            <div className="flex items-start justify-end p-4 gap-4">
              <Image
                width={1080}
                height={1080}
                className="w-min max-w-[50px] object-contain"
                alt="logo"
                src="/logo/03_Logo_Mark/03_Logo_Mark-01.png"
              />

              <span className="uppercase text-wrap font-medium text-[clamp(3.75rem,5vw,6rem)] leading-[0.8] pointer-events-none select-none">
                One
                <br />
                Week
                <br />
                Free
              </span>
            </div>
          </div>

          {/* BARCODE SIDE */}
          <div
            aria-label="Open ticket"
            className="ticket-back bg-[#ddd] h-full w-max overflow-hidden corner-scoop rounded-l-xl px-4 py-10 transition-all duration-300 origin-bottom-left"
          >
            <Image
              src="/bar-code.png"
              width={1080}
              height={1080}
              alt="bar-code"
              className="object-contain w-min h-min max-h-[250px] pointer-events-none"
            />
          </div>

          {/* =========================
              BACK OF TICKET
              ========================= */}

          <div className="ticket-reveal corner-scoop">
            <Link
              href="https://calendly.com/interactiveworkersgm/30min"
              target="_blank"
              className="grid grid-cols-[auto_auto] gap-8 w-max group/ticket"
            >
              {/* BARCODE SIDE */}
              <div
                aria-label="Open ticket"
                className="ticket-back bg-[#ddd] h-full w-max overflow-hidden corner-scoop rounded-r-xl px-4 py-10 transition-all duration-300 origin-bottom-right flex items-center justify-center"
              >
                <Image
                  src="/bar-code.png"
                  width={1080}
                  height={1080}
                  alt="bar-code"
                  className="object-contain w-min h-min max-h-[250px] pointer-events-none opacity-0"
                />

                <Image
                  src="/ticket-back.png"
                  width={1080}
                  height={1080}
                  alt="ticket-back"
                  className="absolute pointer-events-none h-9/12 w-auto object-contain"
                />
              </div>

              {/* CLICK HERE SIDE */}
              <div className="ticket-front bg-[#B7B7B7] text-white corner-scoop rounded-l-xl w-max min-w-[clamp(500px,20vw,200px)] transition-all duration-300 origin-bottom-right">
                <div className="flex flex-col items-start justify-center p-4 gap-4 h-full rounded-r-xl">
                  <Image
                    width={1080}
                    height={1080}
                    className="w-min max-w-[50px] object-contain"
                    alt="logo"
                    src="/logo/03_Logo_Mark/03_Logo_Mark-01.png"
                  />

                  <span className="uppercase font-medium text-[clamp(4rem,5vw,6rem)] leading-[0.8] pointer-events-none select-none">
                    Click
                    <br />
                    here!
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </button>
      </div>
    </>
  );
}
