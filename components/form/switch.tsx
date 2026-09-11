"use client";

import { InputHTMLAttributes } from "react";

type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export default function Switch({
  id,
  name,
  required,
  checked,
  onChange,
  ...props
}: SwitchProps) {
  return (
    <label htmlFor={id} className="inline-flex cursor-pointer relative">
      <input
        {...props}
        id={id}
        name={name}
        required={required}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />

      <div
        className="
          relative
          w-14 h-8
          rounded-full
          border border-white/30
          bg-transparent
          transition-colors
          duration-300
          peer-checked:bg-iw-red-1
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1
          size-6
          -translate-y-1/2
          rounded-full
          bg-white
          transition-transform
          duration-300
          ease-out
          peer-checked:translate-x-full
        "
      />
    </label>
  );
}
