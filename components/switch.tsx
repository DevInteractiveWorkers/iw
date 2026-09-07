"use client";

import { useState } from "react";

export default function Switch() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="inline-flex cursor-pointer relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
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
      ></div>
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
