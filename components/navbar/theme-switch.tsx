"use client";

import { useEffect, useState } from "react";
import "./theme-switch.css";

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // On mount: read saved preference, falling back to system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = stored ? stored === "dark" : prefersDark;

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // Avoid rendering a possibly-wrong state before we know the real theme
  if (!mounted) {
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
