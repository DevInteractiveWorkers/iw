import React from "react";
import Link from "next/link";
import VACard from "../vas/cards";

const DiscoverVAs = () => {
  return (
    <section className="discover-vas-bg  w-full py-16 md:py-48 xl:py-64 px-2 z-10">
      <article className="w-full md:w-10/12 mx-auto">
        <div className="relative text-center my-16 md:my-0">
          <h2 className="relative z-40 p-2 px-12 text-iw-red-1 font-extrabold text-xl md:text-3xl border-2 border-iw-red-1 bg-white rounded-full max-w-fit mx-auto">
            Discover Our VA's
          </h2>
          <div className="-mt-8 w-1/2 mx-auto h-14 bg-[#EFEFEF] rounded-full"></div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 justify-between my-4 md:my-32">
          <VACard imageSrc="/home/discover-vas/vas/0.png">
            Architect Virtual Assistant
          </VACard>
          <VACard imageSrc="/home/discover-vas/vas/1.png">
            Video Editor Virtual Assistant
          </VACard>
          <VACard imageSrc="/home/discover-vas/vas/2.png">
            Call Center Agent Virtual Assistant
          </VACard>
          <VACard imageSrc="/home/discover-vas/vas/3.png">
            Appointment Setter
          </VACard>
        </div>
        <Link
          href={"/vas"}
          className="block max-w-fit mx-auto uppercase bg-iw-red-1 p-4 text-white hover:text-black hover:bg-transparent transition-all rounded-xl text-lg md:text-xl"
        >
          See More
        </Link>
      </article>
    </section>
  );
};

export default DiscoverVAs;
