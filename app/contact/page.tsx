import React from "react";
import NavbarComponent from "@/components/navbar";
import MainForm from "@/components/form/form";
import GetHired from "@/components/form/get-hired";
import FlipElement from "@/components/flip-element";
import Image from "next/image";
import SplitText from "@/components/text-animation/SplitText";

const ContactUs = () => {
  return (
    <main className="flex flex-col min-h-screen text-white">
      <NavbarComponent></NavbarComponent>
      <section className="">
        <article className="flex flex-col py-10">
          <FlipElement className="w-1/4 max-w-[150px] pb-10">
            <Image
              width={1080}
              height={1080}
              alt="logo"
              src="/logo/03_Logo_Mark/03_Logo_Mark-01.png"
            />
          </FlipElement>
          <SplitText
            tag="h1"
            className="
            text-[clamp(4rem,4vw,7rem)]
            font-medium
            leading-[1.05]
            pb-6
          "
            textAlign="start"
            text={<>Get in touch</>}
          />
          <div className="flex justify-end">
            <SplitText
              className="text-xl md:w-2/3 lg:w-1/3"
              textAlign="start"
              text={
                <>
                  Feel free to contact us anytime! Have a project in mind? Reach
                  out to us, and we'll discuss the best way to move forward.
                </>
              }
            />
          </div>
        </article>
        <article>
          <MainForm heading={false} subheading={false} />
        </article>
        <article>
          <SplitText
            className="md:text-5xl text-xl py-4"
            textAlign="start"
            text={"Do you want to joint our team?"}
          />
          <GetHired heading={false} subheading={false} />
        </article>
      </section>
    </main>
  );
};

export default ContactUs;
