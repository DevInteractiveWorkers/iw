import type { Config } from "tailwindcss";

const config: Config = {
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
        "iw-red-1": "#DD272D",
        "iw-red-2": "#C1272D",
        "iw-red-3": "#800202",
      },
      keyframes: {
        "rotate-y": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)", scale: "0.9" },
        },
        "wide-x": {
          "0%": { width: "0%", margin: "0 auto", left: "50%" },
          "100%": { width: "100%", right: "0px" },
        },
        "wide-y": {
          "0%": { height: "0%" },
          "100%": { height: "100%", bottom: "0px" },
        },
      },
      animation: {
        "rotate-y": "rotate-y 2s linear",
        "wide-x": "wide-x 0.5s ease-in forwards",
        "wide-y": "wide-y 0.5s ease-in forwards",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
