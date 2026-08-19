"use client";

import React, { useEffect, useRef, useState } from "react";

interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

export default function Select({
  placeholder = "Select an option...",
  required,
  value: controlledValue,
  onChange,
  children,
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(controlledValue || "");
  const [selectedLabel, setSelectedLabel] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Keep internal state synced with controlled value
  useEffect(() => {
    if (controlledValue !== undefined) {
      setSelectedValue(controlledValue);

      const selectedOption = React.Children.toArray(children).find(
        (child) =>
          React.isValidElement(child) &&
          child.type === "option" &&
          child.props.value === controlledValue,
      );

      if (React.isValidElement(selectedOption)) {
        setSelectedLabel(String(selectedOption.props.children));
      }
    }
  }, [controlledValue, children]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string, label: string) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    setIsOpen(false);
    onChange?.(value);
  };

  const options = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === "option",
  );

  return (
    <div
      ref={dropdownRef}
      className="py-2 my-2 border-b border-white text-white relative flex items-center justify-between w-full cursor-pointer select-none"
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {/* Hidden native input for required validation/form submission */}
      {required && (
        <input
          type="text"
          name={props.id}
          required={required}
          value={selectedValue}
          onChange={() => {}}
          tabIndex={-1}
          aria-hidden="true"
          className="opacity-0 pointer-events-none"
        />
      )}

      {/* Display selection or empty state */}
      <div className="bg-transparent outline-none w-full absolute">
        {selectedLabel || ""}
      </div>

      {/* Floating Placeholder */}
      <span
        className={`absolute pointer-events-none transition-all duration-150 left-0 ${
          isOpen || selectedLabel
            ? "-translate-y-full opacity-50 text-xs"
            : "translate-y-0 opacity-100 text-sm"
        }`}
      >
        {placeholder}
      </span>

      {/* Dropdown Arrow Indicator */}
      <svg
        width="11"
        height="7"
        viewBox="0 0 11 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <path
          d="M4.58605 5.99828L0.294875 1.70711C-0.33509 1.07714 0.111077 0 1.00198 0H9.58432C10.4752 0 10.9214 1.07714 10.2914 1.70711L6.00026 5.99828C5.60973 6.3888 4.97657 6.3888 4.58605 5.99828Z"
          fill="white"
        />
      </svg>

      {/* Options Menu Dropdown */}
      {isOpen && (
        <div className="bg-black border border-white absolute top-full left-0 w-full mt-1 py-1 flex flex-col z-50 shadow-xl rounded-md max-h-60 overflow-y-auto">
          {options.map((child) => {
            if (!React.isValidElement(child)) return null;

            const value = String(child.props.value ?? "");
            const label =
              typeof child.props.children === "string"
                ? child.props.children
                : String(child.props.children ?? value);

            return (
              <button
                key={value}
                type="button"
                className="text-left px-4 py-2 hover:bg-white/20 w-full text-white"
                onClick={(event) => {
                  event.stopPropagation();
                  handleSelect(value, label);
                }}
              >
                {child.props.children}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
