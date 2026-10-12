import HowItWorksStep from "./how-it-works-card";
import SplitText from "./text-animation/SplitText";

const iconClass = "shrink-0";

const steps = [
  {
    title: "Consultation",
    description:
      "Rigorous multi-stage screening processes ensure you get top 1% communication, reliability, and technical skills.",
    icon: "file-edit-02",
  },
  {
    title: "Matching",
    description:
      "We handpick and vet candidates tailored specifically to your operational needs.",
    icon: "target-02",
  },
  {
    title: "Interview & Selection",
    description:
      "Meet your shortlisted candidates and select the perfect fit for your team.",
    icon: "thumb-up",
  },
  {
    title: "Onboarding & Scaling",
    description:
      "Seamlessly integrate your new remote professional with our structured onboarding support.",
    icon: "arrow-up-right-square-contained",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-[clamp(1rem,8vw,50rem)]">
      <article className="flex flex-col rounded-t-md bg-white p-4 py-10 min-h-[50vh] justify-between">
        <div className="flex w-full justify-center text-iw-red-2">
          <SplitText
            delay={100}
            textAlign="center"
            className="pb-4 text-3xl font-medium leading-none lg:text-5xl"
            text={<>How It Works?</>}
          />
        </div>

        <div className="grid md:grid-cols-4 gap-6 px-[clamp(1rem,3vw,50rem)]">
          {steps.map((step, index) => (
            <HowItWorksStep
              key={step.title}
              {...step}
              showBorder={index !== steps.length - 1}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
