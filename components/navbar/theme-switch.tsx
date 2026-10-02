"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeContext";
import "./theme-switch.css";

export default function ThemeSwitch() {
  return;
  const { theme, isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !theme) {
    return <button className="toggle-btn" aria-label="Toggle dark mode" />;
  }

  return (
    <button
      className={`toggle-btn ${isDark ? "is-dark" : ""}`}
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Toggle dark mode"
    >
      <div className="sun-rays"></div>
      <div className="main-circle"></div>
    </button>
  );
}
