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
        `uppercase rounded font-bold text-4xl px-10 py-5 max-w-fit mt-8 ${!disabled ? "bg-iw-red-1" : "bg-[#808080] cursor-not-allowed text-white/50"} text-white`
      }
    >
      {children}
    </button>
  );
}
