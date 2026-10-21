import Icon from "./icon";

type HowItWorksStepProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
};

export default function HowItWorksStep({
  icon,
  title,
  description,
  className,
}: HowItWorksStepProps) {
  return (
    <div
      className={`h-full py-10 md:px-4 flex flex-col items-start justify-start gap-6 z-10 ${className}`}
    >
      <div className="grid h-1/2">
        <span className="text-iw-red-2">
          <Icon icon={icon} color={"currentColor"} strokeWidth={0.5} />
        </span>

        <div className="flex flex-col gap-3">
          <h3 className="text-[clamp(1.375rem,2vw,1.75rem)] font-semibold">
            {title}
          </h3>
          <p className="text-iw-red-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
