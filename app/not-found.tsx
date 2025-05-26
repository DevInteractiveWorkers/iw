import Image from "next/image";
import NavbarComponent from "./components/navbar";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="h-screen relative flex justify-center items-center">
      <div className="w-full absolute top-0">
        <NavbarComponent dark={true} />
      </div>
      <NotFound />
    </section>
  );
}

export function NotFound() {
  return (
    <section className="h-screen relative flex justify-center items-center">
      <div className="absolute flex flex-col items-center">
        <Link href={"/"}>
          <Image
            src={"/iw-icon.png"}
            width={200}
            height={200}
            alt="iw-icon"
            className="hover:-scale-x-100 hover:scale-95 active:scale-75 transition-all duration-1000 select-none"
          />
        </Link>
        <h1 className="text-4xl font-bold">404 Not Found</h1>
        <p className="p-4 text-center">
          This page could not be found.
          <br className="md:hidden" /> Go back{" "}
          <Link
            href={"/"}
            className="hover:underline hover:text-iw-red-1 transition-all"
          >
            home
          </Link>
        </p>
      </div>
    </section>
  );
}
