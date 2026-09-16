import Image from "next/image";
import NavbarComponent from "@/components/navbar";
import Link from "next/link";
import FlipElement from "@/components/flip-element";

export default function NotFound() {
  const text = "404 Not Found";

  return (
    <section className="h-screen relative flex justify-center items-center">
      <div className="absolute flex flex-col items-center">
        <Link href={"/"} className="z-10">
          <FlipElement>
            <Image
              width={200}
              height={200}
              alt="logo"
              src="/logo/03_Logo_Mark/03_Logo_Mark-01.png"
            />
          </FlipElement>
        </Link>
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
          <Link
            href={"/"}
            className="relative hover:text-iw-red-1 after:absolute after:left-1/2 after:top-full after:w-0 after:h-px after:bg-[currentColor] transition-colors duration-150
                hover:after:left-0 hover:after:w-full after:transition-all after:duration-150 active:text-iw-red-3"
          >
            home
          </Link>
        </p>
      </div>
    </section>
  );
}
