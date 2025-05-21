import Image from "next/image";
import NavbarComponent from "@/src/components/navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen relative flex justify-center items-center">
      <div className="w-full absolute top-0">
        <NavbarComponent dark={true} />
      </div>
      <div className="absolute flex flex-col items-center">
        <Link href={"/"}>
          <Image
            src={"/iw-icon.png"}
            width={200}
            height={200}
            alt="iw-icon"
            className="hover:-scale-x-100 active:scale-75 transition-all duration-1000 select-none"
          />
        </Link>
        <h1 className="text-4xl">
          <strong>404 Not Found</strong>
        </h1>
        <p>
          This page could not be found. Go back{" "}
          <Link href={"/"} className="hover:underline transition-all">
            home
          </Link>
        </p>
      </div>
    </section>
  );
}
