import Icon from "./icon";

type HowItWorksStepProps = {
  icon: string;
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
      className={`h-full py-10 flex flex-col items-start justify-start gap-6 z-10 ${
        showBorder ? "md:border-r-2 max-md:border-b-2 border-iw-red-2" : ""
      }`}
    >
      <div className="grid h-1/2">
        <span className="text-iw-red-2">
          <Icon icon={icon} color={"currentColor"} strokeWidth={0.5} />
        </span>

        <div className="flex flex-col gap-3">
          <h3 className="md:text-3xl text-2xl font-semibold">{title}</h3>
          <p className="text-iw-red-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
