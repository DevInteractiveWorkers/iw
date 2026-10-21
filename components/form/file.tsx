import { forwardRef, InputHTMLAttributes, useEffect, useState } from "react";

type FileInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange"
> & {
  /** Text shown while no file is selected. */
  placeholder?: string;
  /**
   * Optional controlled value. Pass the File (or null to clear it) when the
   * parent owns the state, e.g. to reset it after a successful submit.
   */
  file?: File | null;
  /** Called with the picked file, or null if the selection was cleared. */
  onFileChange?: (file: File | null) => void;
};

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  function FileInput(
    {
      placeholder = "Attach a file here:",
      required,
      id,
      name,
      className,
      file,
      onFileChange,
      accept,
      ...props
    },
    ref,
  ) {
    // Internal copy so the component also works fully uncontrolled.
    const [internalFile, setInternalFile] = useState<File | null>(null);
    const current = file !== undefined ? file : internalFile;

    // Keep the label in sync when the parent (or form.reset()) clears the input.
    useEffect(() => {
      if (file === undefined) return;
      setInternalFile(file);
    }, [file]);

    return (
      <div className={`group w-full min-w-0 max-w-full ${className ?? ""}`}>
        <label
          htmlFor={id}
          className="py-2 my-2 border-b border-current relative flex items-center justify-end cursor-pointer gap-2 px-2 group-focus-within:opacity-50 overflow-hidden"
        >
          <span
            className="min-w-0 flex-1 absolute left-2 max-w-[calc(100%-4.5rem)] truncate"
            title={current ? current.name : undefined}
          >
            {current ? current.name : placeholder}
            {!current && required && "*"}
          </span>

          <svg
            width="25"
            height="23"
            viewBox="0 0 25 23"
            fill="none"
            className="stroke-current shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12.1997 1L12.1997 15M12.1997 1C11.2194 1 9.38785 3.79202 8.69971 4.5M12.1997 1C13.18 1 15.0116 3.79202 15.6997 4.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.4 17.8C23.4 21.2748 22.6748 22 19.2 22H5.2C1.7252 22 1 21.2748 1 17.8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>

        <input
          {...props}
          ref={ref}
          id={id}
          name={name ?? id}
          type="file"
          accept={accept}
          required={required}
          className="sr-only"
          onChange={(event) => {
            const selected = event.target.files?.[0] ?? null;
            setInternalFile(selected);
            onFileChange?.(selected);
          }}
        />
      </div>
    );
  },
);

export default FileInput;
