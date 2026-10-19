import { ButtonHTMLAttributes } from "react";

export interface StepProp {
  id?: string;
  index: number;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  note?: string;
  assets?: React.ReactNode;
  cta?: ButtonHTMLAttributes<HTMLButtonElement>;
  reverse?: boolean;
}
export default function Step(props: StepProp) {
  const {
    id,
    index,
    title,
    description,
    note,
    assets,
    cta,
    reverse = false,
  } = props;

  return (
    <div
      id={id !== "" ? id + "-" + index : ""}
      className="flex shrink-0 min-w-full relative items-center justify-center h-full max-h-[70%] max-md:h-auto max-md:max-h-none max-md:w-full max-md:gap-4"
      style={{ flexDirection: reverse ? "column-reverse" : "column" }}
    >
      <div className="flex shrink-0 items-center gap-6 lg:w-[60%] md:w-[40%] w-screen max-md:w-full max-md:flex-col max-md:items-start max-md:gap-2">
        <div className="flex items-start leading-none">
          <span
            className={
              "font-bold text-[clamp(8rem,8vw,15rem)] max-md:text-[5rem] leading-[1]"
            }
          >
            {index}
          </span>
          <span className="text-[clamp(0.2rem,8vw,1rem)] font-light leading-none translate-y-full">
            STEP
          </span>
        </div>
        <div>
          <label
            className={`text-[clamp(1rem,8vw,2rem)] leading-[1] font-medium`}
          >
            {title}
          </label>
          <p className="font-light text-[clamp(0.6rem,8vw,1.2rem)] leading-[1]">
            {description}
          </p>
          {note && (
            <p className="font-light text-[clamp(0.4rem,8vw,1rem)] leading-[1] italic pt-4">
              * {note}
            </p>
          )}
        </div>
      </div>

      <div className="w-9/12">{assets}</div>
    </div>
  );
}
