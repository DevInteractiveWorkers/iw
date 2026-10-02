import type { ReactNode } from "react";

type HowItWorksStepProps = {
  icon: ReactNode;
  title: string;
  description: string;
  showBorder?: boolean;
};

export default function HowItWorksStep({
  icon,
  title,
  description,
  showBorder = true,
}: HowItWorksStepProps) {
  return (
    <div
      className={`h-full aspect-[3/4] flex flex-col items-start justify-end gap-6 z-10 ${
        showBorder ? "border-r-2 border-iw-red-2" : ""
      }`}
    >
      <div className="grid h-1/2">
        {icon}

        <div className="flex flex-col gap-3">
          <h3 className="md:text-3xl text-2xl font-semibold">{title}</h3>
          <p className="text-iw-red-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
