import { ButtonHTMLAttributes } from "react";

export default function FormButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { children, className, disabled, ...restProps } = props;
  return (
    <button
      {...restProps}
      disabled={disabled}
      className={
        className ??
        `uppercase rounded font-medium text-4xl px-10 py-5 max-w-fit mt-8 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:-z-20 ${!disabled ? "before:bg-iw-red-1" : "before:bg-[#808080] cursor-not-allowed text-white/50"} text-white relative overflow-hidden
        after:absolute after:rounded-full after:bg-iw-red-2 after:w-full after:h-auto after:aspect-square after:-top-full after:left-0 after:scale-0 hover:after:scale-[1.1] active:after:bg-iw-red-3 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-1
      
    5  00 after:-z-10`
      }
    >
      {children}
    </button>
  );
}
