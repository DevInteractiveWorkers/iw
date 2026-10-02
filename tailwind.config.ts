import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "iw-red-1": "var(--iw-primary-red)",
        "iw-red-2": "var(--iw-secondary-red)",
        "iw-red-3": "var(--iw-tertiary-red)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "rotate-y": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)", scale: "0.9" },
        },
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        "rotate-360": {
          "0%": { transform: "rotate(-180deg)" },
          "100%": { transform: "rotate(-0deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "zoom-in-out": {
          "0%": { scale: "1" },
          "33%": { scale: "0.9" },
          "66%": { scale: "1.1" },
          "100%": { scale: "1" },
        },
        expand: {
          "0%": { transform: "scaleX(0) translateX(0%)" },
          "50%": { transform: "scaleX(1) translateX(10%)" },
          "100%": { transform: "scaleX(0) translateX(20%)" },
        },
        "rise-in-out": {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "25%": { transform: "translateY(-25%)", opacity: "0" },
          "50%": { transform: "translateY(25%)", opacity: "0" },
          "75%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { opacity: "1" },
        },
        "move-around": {
          "0%": { transform: "translate(0%, 0%)", zIndex: "3" },
          "30%": { transform: "translate(30%,-3%)", zIndex: "1" },
          "70%": {
            transform: "translate(-30%, -3%)",
            zIndex: "2",
          },
          "100%": { transform: "translate(0%, 0%)", zIndex: "3" },
        },
        "move-around-2": {
          "0%": { transform: "translate(0%, 0%)", zIndex: "2" },
          "30%": { transform: "translate(30%, 3%)", zIndex: "3" },
          "70%": { transform: "translate(60%, 0%)", zIndex: "1" },
          "100%": { transform: "translate(0%, 0%)", zIndex: "2" },
        },
        "move-around-3": {
          "0%": { transform: "translate(0%, 0%)", zIndex: "1" },
          "30%": {
            transform: "translate(-60%, 0%)",
            zIndex: "2",
          },
          "70%": {
            transform: "translate(-30%, 3%)",
            zIndex: "3",
          },
          "100%": { transform: "translate(0%, 0%)", zIndex: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-alert": {
          "0%, 100%": {
            opacity: "0",
          },
          "40%, 60%": {
            opacity: "1",
          },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-hover": "marquee 30s linear infinite paused",
        "rotate-y": "rotate-y 2s linear",
        "rotate-360": "rotate-360 500ms ease-in-out",
        "spin-slow": "spin-slow 5s linear infinite",
        "zoom-in-out": "zoom-in-out 2s linear infinite",
        expand: "expand 0.5s linear infinite",
        "rise-in-out": "rise-in-out 4s ease-in infinite",
        "move-around": "move-around 3s linear infinite",
        "move-around-2": "move-around-2 3s linear infinite",
        "move-around-3": "move-around-3 3s linear infinite",
        flip: "flip 2s linear infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "scroll-alert-1": "scroll-alert 1.8s ease-in-out infinite",
        "scroll-alert-2": "scroll-alert 1.8s ease-in-out 0.3s infinite",
        "scroll-alert-3": "scroll-alert 1.8s ease-in-out 0.6s infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animation-delay")],
};
export default config;
