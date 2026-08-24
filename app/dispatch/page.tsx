import Image from "next/image";
import React from "react";
import NavbarComponent from "@/components/navbar";
import DispatchAccordions from "@/components/dispatch/accordions";
import MainForm from "@/components/form/form";
import { ParticlesComponent } from "@/components/particles";
import Packages from "@/components/home/packages";
import VACard from "@/components/vas/cards";
import Carousel from "@/components/home/reviews/carousel";
import Folder from "@/components/folder";
import FlipElement from "@/components/flip-element";

const Dispatch = () => {
  const tags = [
    "Trained in Confidentiality and Security Protocols",
    "24/7 Adaptability",
    "Proactive Communication",
    "Bilingual English/Spanish",
    "Trained in Confidentiality and",
  ];

  return (
    <section>
      <NavbarComponent></NavbarComponent>
      <article className="flex flex-col">
        <FlipElement className="w-1/4 max-w-[150px] pb-10">
          <Image
            width={1080}
            height={1080}
            alt="logo"
            src="/logo/03_Logo_Mark/03_Logo_Mark-01.png"
          />
        </FlipElement>

        <h1 className="text-6xl">
          24/7 Remote Dispatch
          <br /> for Every Operation,
          <br /> Ready to Deploy
        </h1>
        <div className="flex justify-end">
          <p className="text-xl md:w-1/3">
            Boost response times, reduce overtime, and scale operations with
            trained virtual dispatchers and schedulers for private security
            companies.
          </p>
        </div>
      </article>
      <article
        className="w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <Carousel
          autoscroll
          iteration="once"
          autoscrollMode="on-going"
          controls={false}
        >
          <VACarouselCard imageSrc="/home/discover-vas/vas/0.png">
            24/7 Inbound Call & Emergency Dispatch Unit
          </VACarouselCard>
          <VACarouselCard imageSrc="/home/discover-vas/vas/2.png">
            Tier-1 Helpdesk & Ticket Triage Team
          </VACarouselCard>
          <VACarouselCard imageSrc="/home/discover-vas/vas/3.png">
            Executive Operational Assistant
          </VACarouselCard>
          <VACarouselCard imageSrc="/home/discover-vas/vas/1.png">
            Outbound Cold Call & Lead Qualification Desk{" "}
          </VACarouselCard>
        </Carousel>
      </article>
      <article className="py-10">
        <Carousel
          autoscroll
          iteration="once"
          autoscrollMode="on-going"
          controls={false}
        >
          {tags.map((tag, i) => (
            <div
              key={i}
              className="flex items-center gap-4 whitespace-nowrap px-2"
            >
              <span>{tag}</span>
              <span aria-hidden="true">•</span>
            </div>
          ))}
        </Carousel>
      </article>
      <article className="py-10 flex flex-col gap-10">
        <h2 className="text-6xl">
          Our Support = More Solutions
          <br />
          We Cover Every Shift
        </h2>
        <Folder
          items={[
            {
              title: "24/7 Call Handling",
              text: "Scale coverage instantly with bilingual, security-trained VAs who handle calls, dispatch, and scheduling around the clock.",
              src: "/dispatch/1.png",
              imagePosition: { objectPosition: "center right" },
            },
            {
              title: "Instant Guard Deployment Remote Support",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat, quia autem voluptatem mollitia ab, tenetur assumenda fugiat, hic sunt veritatis illo. Nemo animi vel voluptates! Doloribus officiis omnis nulla.",
              src: "/security.png",
              imagePosition: { objectPosition: "30% center" },
            },
            {
              title: "Accurate Shift Scheduling",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat, quia autem voluptatem mollitia ab, tenetur assumenda fugiat, hic sunt veritatis illo. Nemo animi vel voluptates! Doloribus officiis omnis nulla.",
              src: "/top-view.png",
              imagePosition: { objectPosition: "center bottom" },
            },
            {
              title: "Seamless Communication",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat, quia autem voluptatem mollitia ab, tenetur assumenda fugiat, hic sunt veritatis illo. Nemo animi vel voluptates! Doloribus officiis omnis nulla.",
              src: "/welcome-our-team-young-modern-man-wear-shaking-hands-while-working-creative-office 1.png",
            },
          ]}
        />
      </article>
      <MainForm dark={false}></MainForm>
    </section>
  );
};

const VACarouselCard = ({
  imageSrc,
  children,
}: {
  imageSrc: string;
  children: React.ReactNode;
}) => {
  return (
    <VACard
      imageSrc={imageSrc}
      style={{ maxWidth: 400, marginTop: "25%", height: 500 }}
    >
      {children}
    </VACard>
  );
};

export default Dispatch;
