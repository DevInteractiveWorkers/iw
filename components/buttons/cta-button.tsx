"use client";

import { ButtonHTMLAttributes } from "react";

export default function CTAButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { className = "", children, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`group relative flex items-center gap-1 px-9 py-4 text-base font-semibold rounded-[5px] cursor-pointer overflow-hidden border-4 border-transparent text-[var(--primary-color)] shadow-[0_0_0_2px_var(--primary-color)] transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-[var(--tertiary-color)] active:scale-95 active:shadow-[0_0_0_4px_var(--secondary-color)] 
        ${className ?? "[--primary-color:#fff] [--secondary-color:#dd272d] [--tertiary-color:#dd272d]"}`}
    >
      {/* Arrow 2 */}
      <svg
        viewBox="0 0 24 24"
        className="absolute w-6 fill-[var(--primary-color)] group-hover:fill-[var(--tertiary-color)] z-[9] -left-[25%] group-hover:left-4 transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>

      {/* Button Text */}
      <span className="relative z-10 flex items-center leading-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]">
        {children || "Book a Call"}
      </span>

      {/* Expanding Circle Background */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 aspect-square bg-[var(--secondary-color)] rounded-full opacity-0 group-hover:opacity-100 group-hover:w-[150%] group-hover:h-[200%] transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]"></span>

      {/* Arrow 1 */}
      <svg
        viewBox="0 0 24 24"
        className="absolute w-6 fill-[var(--primary-color)] group-hover:fill-[var(--tertiary-color)] z-[9] right-4 group-hover:-right-[25%] transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
  );
}
