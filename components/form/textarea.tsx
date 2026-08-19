import { TextareaHTMLAttributes } from "react";

export default function Textarea({
  placeholder = "Type Something...",
  required,
  rows = 4,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="py-2 my-2 border-b border-white text-white relative flex">
      <textarea
        required={required}
        rows={rows}
        className="peer bg-transparent outline-none focus:border-none w-full border-none p-0"
        placeholder=""
      />
      <span className="absolute pointer-events-none peer-focus:opacity-50 peer-placeholder-shown:translate-y-0 -translate-y-full transition-all duration-150 peer-placeholder-shown:text-sm text-xs">
        {placeholder}
        {required && "*"}
      </span>
    </div>
  );
}
