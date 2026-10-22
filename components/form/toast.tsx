"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "../icon";

type ToastType = "success" | "error";

interface ToastState {
  id: number;
  type: ToastType;
  message: string;
}

export function useToast(duration = 10000) {
  const [toast, setToast] = useState<ToastState | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const dismiss = useCallback(() => {
    clearTimeout(timer.current);
    setToast(null);
  }, []);

  const show = useCallback(
    (type: ToastType, message: string) => {
      clearTimeout(timer.current);
      setToast({ id: Date.now(), type, message });
      timer.current = setTimeout(() => setToast(null), duration);
    },
    [duration],
  );

  useEffect(() => () => clearTimeout(timer.current), []);

  return { toast, show, dismiss };
}

export function Toast({
  toast,
  onDismiss,
}: {
  toast: ToastState | null;
  onDismiss: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const toastId = toast?.id;

  // Fade (and slide slightly) in each time a new toast appears.
  useEffect(() => {
    if (toastId === undefined) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ref.current?.animate(
      [
        { opacity: 0, transform: "translateY(-0.5rem)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 300, easing: "ease-out" },
    );
  }, [toastId]);

  // `toast` only becomes non-null after a client-side event, so `document`
  // is always available by the time we portal.
  if (!toast) return null;

  const isError = toast.type === "error";

  return createPortal(
    <div className="fixed top-4 left-4 right-4 sm:left-auto z-[1100] sm:max-w-sm pointer-events-none">
      <div
        ref={ref}
        key={toast.id}
        role={isError ? "alert" : "status"}
        className={`pointer-events-auto flex items-start gap-3 rounded-md bg-white p-4 text-black shadow-xl border-l-4 ${
          isError ? "border-iw-red-1" : "border-green-500"
        }`}
      >
        <Icon
          icon={isError ? "alert-triangle" : "check-broken"}
          color={isError ? "var(--iw-primary-red, #dd272d)" : "#0e9f6e"}
        />
        <span className="flex-1 text-sm">{toast.message}</span>
        <button
          type="button"
          aria-label="Dismiss notification"
          className="leading-none opacity-60 hover:opacity-100"
          onClick={onDismiss}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>,
    document.body,
  );
}
