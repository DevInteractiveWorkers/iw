import { ButtonHTMLAttributes } from "react";
import "./cta-button.css";

export default function FormButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { children, className, disabled, ...restProps } = props;
  return (
    <button
      {...restProps}
      disabled={disabled}
      className={`animated-button disabled:[--primary-color:#999] disabled:pointer-events-none disabled:cursor-not-allowed ${className}`}
    >
      <span className="circle aspect-square"></span>
      <span className="flex items-center z-10">{children}</span>
    </button>
  );
}
