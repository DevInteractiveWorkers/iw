import Image from "next/image";
import FlipElement from "@/components/flip-element";
import { TransitionLink } from "@/components/link";

export default function NotFound() {
  return (
    <section className="h-screen relative flex justify-center items-center">
      <div className="absolute flex flex-col items-center">
        <TransitionLink href={"/"} className="z-10">
          <FlipElement>
            <Image
              width={200}
              height={200}
              alt="logo"
              src="/logo/03_Logo_Mark/03_Logo_Mark-01.png"
            />
          </FlipElement>
        </TransitionLink>
        <h1 className="text-4xl font-bold z-0 cursor-default">
          {"404".split("").map((char, i) => (
            <FlipElement key={i} onView={false}>
              {char}
            </FlipElement>
          ))}{" "}
          {"Not".split("").map((char, i) => (
            <FlipElement key={i} onView={false}>
              {char}
            </FlipElement>
          ))}{" "}
          {"Found".split("").map((char, i) => (
            <FlipElement key={i} onView={false}>
              {char}
            </FlipElement>
          ))}
        </h1>
        <p className="p-4 text-center">
          This page could not be found.
          <br className="md:hidden" /> Go back{" "}
          <TransitionLink
            href={"/"}
            className="relative hover:text-iw-red-1 after:absolute after:left-1/2 after:top-full after:w-0 after:h-px after:bg-current transition-colors duration-150
                hover:after:left-0 hover:after:w-full after:transition-all after:duration-150 active:text-iw-red-3"
          >
            home
          </TransitionLink>
        </p>
      </div>
    </section>
  );
}
