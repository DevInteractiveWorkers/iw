import { InputHTMLAttributes } from "react";

export default function Input({
  placeholder = "Type Something...",
  required,
  id,
  name,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div
      className={`py-2 my-2 border-b dark:border-white border-black  relative flex items-center ${props.className ?? ""}`}
    >
      <input
        {...props}
        id={id}
        name={name ?? id}
        required={required}
        className="peer bg-transparent w-full border-none outline-none focus:outline-none focus:ring-0 focus:shadow-none autofill:bg-transparent [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s] [&:-webkit-autofill]:[-webkit-text-fill-color:white] px-2"
        placeholder=""
      />
      <span className="absolute pointer-events-none peer-focus:opacity-50 peer-placeholder-shown:translate-y-0 translate-y-[-150%] transition-all duration-150 peer-placeholder-shown:text-sm text-xs px-2">
        {placeholder}
        {required && "*"}
      </span>
    </div>
  );
}
