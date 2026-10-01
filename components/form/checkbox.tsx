import "./input-styles.css";
import { InputHTMLAttributes } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export default function Checkbox({
  id,
  name,
  required,
  ...props
}: CheckboxProps) {
  return (
    <label className="ios-checkbox [--checkbox-bg:#fff] [--checkbox-border:#dd272d] dark:[--checkbox-bg:#000] dark:[--checkbox-border:#fff]">
      <input
        {...props}
        id={id}
        name={name}
        type="checkbox"
        required={required}
        className="text-iw-red-1 outline-none border-none rounded-sm"
      />
      <div className="checkbox-wrapper">
        <div className="checkbox-bg"></div>
        <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3"
            stroke="currentColor"
            d="M4 12L10 18L20 6"
            className="check-path"
          ></path>
        </svg>
      </div>
    </label>
  );
}
