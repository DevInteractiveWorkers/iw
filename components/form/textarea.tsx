import { TextareaHTMLAttributes } from "react";

export default function Textarea({
  placeholder = "Type Something...",
  required,
  rows = 4,
  id,
  name,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="py-2 my-2 border-b border-current relative flex">
      <textarea
        {...props}
        id={id}
        name={name ?? id}
        required={required}
        rows={rows}
        className="peer bg-transparent w-full border-none outline-none focus:outline-none focus:ring-0 focus:border-none focus:shadow-none [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_white_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:inherit] p-0"
        placeholder=""
      />
      <span className="absolute pointer-events-none peer-focus:opacity-50 peer-placeholder-shown:translate-y-0 -translate-y-full transition-all duration-150 peer-placeholder-shown:text-sm text-xs">
        {placeholder}
        {required && "*"}
      </span>
    </div>
  );
}
