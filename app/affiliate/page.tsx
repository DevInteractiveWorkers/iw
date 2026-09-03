"use client";

import React from "react";
import NavbarComponent from "@/components/navbar";
import AffiliateForm from "@/components/form/affiliateForm";
import Image from "next/image";
import AffiliatesFAQ from "@/components/affiliates/faq";
import ProductCard from "@/components/product-card";

const AffiliatePage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <NavbarComponent />
      <section>
        <article className="py-10">
          <h1 className="w-full text-center uppercase text-xl md:text-5xl">
            Join the{" "}
            <strong className="font-extrabold">InteractiveWorkers</strong>{" "}
            <br />
            Affiliate Program!
          </h1>
        </article>
      </section>

      <section className="relative">
        <article className="relative w-3/4 mx-auto py-8">
          <p className="mx-auto text-base md:text-2xl font-normal text-justify">
            At InteractiveWorkers, we connect startups and small businesses with
            top-tier remote talent. Now, with the launch of our Affiliate
            Program, you have the opportunity to partner with us and boost your
            earnings while helping companies grow with our trusted virtual
            staffing solutions.
          </p>

          <div className="flex flex-row justify-center items-center gap-3 mt-12 mb-4 md:mt-20 md:mb-8 relative">
            <div className="absolute md:relative md:right-auto -right-[45%] sm:-right-1/3 h-4 w-7/12 rounded-l bg-white"></div>
            <h2 className="text-2xl md:text-5xl font-black uppercase text-center w-full px-2">
              Why partner with us?
            </h2>
            <div className="absolute md:relative md:left-auto -left-[45%] sm:-left-1/3 h-4 w-7/12 rounded-r bg-white"></div>
          </div>

          <div className="relative z-30 w-5/6 mx-auto  pt-8 md:pt-20 pb-6 md:pb-16">
            <h3 className=" capitalize  font-bold leading-8 text-xl md:text-3xl">
              Increase your earnings:
            </h3>
            <p className="mt-1 leading-8 font-normal text-lg md:text-2xl md:w-5/6">
              Our generous commission structure means you'll earn 20% on the
              first sale and 10% monthly on ongoing services.
            </p>
          </div>
        </article>

        <article className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 justify-between my-4 md:my-32">
          <ProductCard className="flex items-center justify-center w-full h-full aspect-square">
            <h4 className="text-white font-black text-3xl sm:text-xl xl:text-5xl 2xl:text-6xl uppercase text-justify">
              Highlight <br /> our <br /> unique <br /> benefits:
            </h4>
          </ProductCard>
          <ProductCard className="flex items-center justify-center w-full h-full aspect-square">
            <Image
              className="object-cover w-full h-full mix-blend-color-dodge absolute top-0 left-0"
              src={"/affiliate/pork.png"}
              alt={"Cost savings"}
              width={358}
              height={294}
              quality={100}
            />
            <span className="absolute text-2xl sm:text-xl md:text-2xl xl:text-4xl 2xl:text-5xl bottom-8 2xl:bottom-8 text-white font-bold right-0 left-0 mx-auto w-fit text-center">
              Cost Savings
            </span>
          </ProductCard>
          <ProductCard
            className="flex items-center justify-center w-full h-full"
            aspect-square
          >
            <Image
              className="object-cover w-full h-full mix-blend-color-dodge absolute top-0 left-0"
              src={"/affiliate/adaptable.png"}
              alt={"Cost savings"}
              width={358}
              height={294}
              quality={100}
            />
            <span className="absolute text-2xl sm:text-xl md:text-2xl xl:text-4xl 2xl:text-5xl bottom-8 2xl:bottom-8 text-white font-bold right-0 left-0 mx-auto w-fit text-center">
              Quality Talent
            </span>
          </ProductCard>
        </article>
        <article className="w-5/6 md:w-3/4 mx-auto mt-12">
          <h3 className="text-5xl font-black mb-4 text-center md:text-left uppercase">
            What We Offer You:
          </h3>
          <div className="flex flex-col md:grid md:grid-cols-3 justify-between gap-3 text-center text-white">
            <ProductCard className="py-10 flex flex-col gap-6">
              <Image
                className="w-2/5 mx-auto"
                style={{ filter: "brightness(0) invert(1)" }}
                src={"/affiliate/icon-3.png"}
                alt="characteristics icon"
                width={99}
                height={99}
              />
              <h4 className="font-black text-xl md:text-sm xl:text-3xl uppercase">
                Comprehensive Marketing Support
              </h4>
              <p className="sm:text-sm lg:text-base xl:text-2xl hidden sm:block">
                Get instant access to marketing materials like email templates,
                social media posts, and case studies to promote the program
                effortlessly.
              </p>
            </ProductCard>

            <ProductCard className="py-10 flex flex-col gap-6">
              <Image
                className="w-2/5 mx-auto"
                style={{ filter: "brightness(0) invert(1)" }}
                src={"/affiliate/icon-2.png"}
                alt="characteristics icon"
                width={99}
                height={99}
              />
              <h4 className="font-black text-xl md:text-sm xl:text-3xl uppercase">
                Personalized Guidance
              </h4>
              <p className="sm:text-sm lg:text-base xl:text-2xl hidden sm:block">
                Benefit from onboarding sessions, one-on-one meetings, and a
                comprehensive FAQ to ensure your success.
              </p>
            </ProductCard>

            <ProductCard className="py-10 flex flex-col gap-6">
              <Image
                className="w-2/5 mx-auto"
                style={{ filter: "brightness(0) invert(1)" }}
                src={"/affiliate/icon-1.png"}
                alt="characteristics icon"
                width={99}
                height={99}
              />
              <h4 className="font-black text-xl md:text-sm xl:text-3xl uppercase">
                Open Communication
              </h4>
              <p className="sm:text-sm lg:text-base xl:text-2xl hidden sm:block">
                We're always available to discuss lead quality, performance, and
                provide feedback, ensuring a smooth partnership.
              </p>
            </ProductCard>
          </div>
        </article>
      </section>

      <section className="py-10 flex justify-end">
        <article className="w-1/2">
          <h5 className="font-black text-xl md:text-3xl lg:text-4xl uppercase">
            Ready to Get Started?
          </h5>
          <p className="font-normal text-lg md:text-2xl lg:text-3xl">
            Enhance your earning potential while offering valuable services to
            businesses looking for remote talent.
          </p>
        </article>
      </section>
      <AffiliateForm></AffiliateForm>
      <AffiliatesFAQ></AffiliatesFAQ>
    </div>
  );
};

export default AffiliatePage;
