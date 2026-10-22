"use client";

import React, { useEffect, useRef, useState } from "react";

const TIP_DURATION = 10000;

export type FieldRule = { id: string; label: string };
export type FieldErrors = Record<string, string>;

const errorId = (id: string) => `${id}-error`;

type TextControl = HTMLInputElement | HTMLTextAreaElement;

const isTextControl = (el: unknown): el is TextControl =>
  el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;

const isFieldValid = (el: TextControl) =>
  el instanceof HTMLInputElement && el.type === "checkbox"
    ? el.checked
    : el.value.trim() !== "" && el.checkValidity();

/** Returns a tooltip message for a required text control, or null if valid. */
function fieldError(el: TextControl, label: string): string | null {
  if (el.value.trim() === "") return `${label} is required`;
  if (!el.checkValidity()) return `Please enter a valid ${label.toLowerCase()}`;
  return null;
}

/** Checks the named text controls of a form and returns a message per invalid one. */
export function collectFieldErrors(
  form: HTMLFormElement,
  rules: FieldRule[],
): FieldErrors {
  const errors: FieldErrors = {};
  for (const { id, label } of rules) {
    const el = form.elements.namedItem(id);
    if (!isTextControl(el)) continue;
    const message = fieldError(el, label);
    if (message) errors[id] = message;
  }
  return errors;
}

/**
 * Tracks which fields are flagged after a failed submit.
 * - `flag` shows tooltips and locks the submit button.
 * - Editing a flagged field unlocks the button; the tooltip goes away once
 *   that field is valid again.
 */
export function useFieldErrors() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [locked, setLocked] = useState(false);
  // Tips that were closed or timed out; the field stays flagged until fixed.
  const [hidden, setHidden] = useState<string[]>([]);

  const flag = (next: FieldErrors) => {
    setErrors(next);
    setHidden([]);
    setLocked(Object.keys(next).length > 0);
  };

  const clear = () => {
    setErrors({});
    setLocked(false);
  };

  const remove = (id: string) =>
    setErrors((prev) => {
      if (!(id in prev)) return prev;
      const next = { ...prev };
      delete next[id];
      return next;
    });

  const hide = (id: string) => setHidden((prev) => [...prev, id]);

  const isShown = (id: string) => id in errors && !hidden.includes(id);

  const touch = (id: string, valid: boolean) => {
    if (!(id in errors)) return;
    setLocked(false);
    if (valid) remove(id);
  };

  /** For the form's onChange: handles native text inputs, textareas and checkboxes. */
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    const el = event.target;
    if (!isTextControl(el) || !el.id || el.type === "file") return;
    touch(el.id, isFieldValid(el));
  };

  /** aria attributes to spread on the field so screen readers read the tooltip. */
  const describe = (id: string): React.AriaAttributes =>
    isShown(id)
      ? { "aria-invalid": true, "aria-describedby": errorId(id) }
      : {};

  /** Props for <FieldTip>. */
  const tip = (id: string) => ({
    id,
    message: isShown(id) ? errors[id] : undefined,
    onDismiss: () => hide(id),
  });

  return { locked, flag, clear, touch, handleChange, describe, tip };
}

/**
 * Anchors an error tooltip under a field. Pass the same `className` the field
 * needs for grid placement (e.g. `col-span-2`) here instead of on the field.
 * The tooltip is referenced by the field's aria-describedby, can be closed
 * with its button, and with Escape while focus is inside the field.
 */
export function FieldTip({
  id,
  message,
  onDismiss,
  align = "start",
  className = "",
  children,
}: {
  id: string;
  message?: string;
  onDismiss: () => void;
  align?: "start" | "end";
  className?: string;
  children: React.ReactNode;
}) {
  // Auto-hide after a few seconds; the latest onDismiss is read via a ref so
  // re-renders don't restart the timer.
  const dismissRef = useRef(onDismiss);
  dismissRef.current = onDismiss;
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => dismissRef.current(), TIP_DURATION);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div
      className={`relative ${message ? "[&_.border-b]:border-iw-red-1" : ""} ${className}`}
      onKeyDown={(event) => {
        if (message && event.key === "Escape") onDismiss();
      }}
    >
      {children}
      {message && (
        <div
          id={errorId(id)}
          role="tooltip"
          className={`absolute top-full z-30 mt-1 flex w-max max-w-[min(18rem,calc(100vw-2rem))] items-start gap-2 rounded-md bg-iw-red-1 px-3 py-1.5 text-sm text-white shadow-lg ${
            align === "end" ? "right-0" : "left-0"
          }`}
        >
          <span
            aria-hidden="true"
            className={`absolute -top-1 h-2 w-2 rotate-45 bg-iw-red-1 ${
              align === "end" ? "right-4" : "left-4"
            }`}
          />
          <span>{message}</span>
          <button
            type="button"
            aria-label={`Dismiss: ${message}`}
            className="leading-none opacity-80 hover:opacity-100"
            onClick={onDismiss}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      )}
    </div>
  );
}
