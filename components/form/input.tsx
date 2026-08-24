import { InputHTMLAttributes } from "react";

export default function Input({
  placeholder = "Type Something...",
  required,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="py-2 my-2 border-b border-white text-white relative flex">
      <input
        required={required}
        className="peer bg-transparent outline-none w-full"
        placeholder=""
      />
      <span className="absolute pointer-events-none peer-focus:opacity-50 peer-placeholder-shown:translate-y-0 -translate-y-full transition-all duration-150 peer-placeholder-shown:text-sm text-xs">
        {placeholder}
        {required && "*"}
      </span>
    </div>
  );
}
