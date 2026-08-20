import React from "react";
import Link from "next/link";
import VACard from "../vas/cards";
import Packages from "./packages";

const DiscoverVAs = () => {
  return (
    <section className="w-full px-2 z-10">
      <article className="w-full md:w-10/12 mx-auto flex flex-col items-center">
        <Packages />
        <h3 className="font-light lg:text-5xl text-base z-40 text-center leading-none pt-14 pb-4">
          Specialized Productized Packages
        </h3>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 justify-between my-4 md:my-32">
          <VACard imageSrc="/home/discover-vas/vas/0.png">
            24/7 Inbound Call & Emergency Dispatch Unit
          </VACard>
          <VACard imageSrc="/home/discover-vas/vas/2.png">
            Tier-1 Helpdesk & Ticket Triage Team
          </VACard>
          <VACard imageSrc="/home/discover-vas/vas/3.png">
            Executive Operational Assistant
          </VACard>
          <VACard imageSrc="/home/discover-vas/vas/1.png">
            Outbound Cold Call & Lead Qualification Desk{" "}
          </VACard>
        </div>
        <Link
          href={"/vas"}
          className="bg-white text-center text-black rounded py-2 px-10 items-center justify-center text-xl"
        >
          Affiliate Program
        </Link>
      </article>
    </section>
  );
};

export default DiscoverVAs;
