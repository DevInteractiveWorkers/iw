"use client";
import Image from "next/image";
import React, { useState } from "react";
import { faq } from "@/src/content/faq";

const FAQ = () => {
  const [opened, setOpened] = useState(-1);

  return (
    <article className="w-3/4 mx-auto my-28 min-h-[80vh]">
      <h3 className="w-1/2 text-xl md:text-4xl font-extrabold mx-auto text-center text-[#DD272D] p-2 border-4 border-[#DD272D] rounded-full my-6">
        Virtual Assistants FAQS
      </h3>
      <div className="text-white flex flex-wrap gap-4 justify-between flex-col md:flex-row">
        {faq.map((item, i) => {
          return (
            <div
              key={i}
              className={`p-4 pl-0 border-2 border-[#9E9E9E] rounded-xl basis-[45%] h-fit `}
              onClick={() => {
                opened === i ? setOpened(-1) : setOpened(i);
              }}
            >
              <h4
                className={`bg-[#DD272D] text-lg font-semibold p-2 px-8 -ml-0.5 flex justify-between items-center  ${opened === i ? "rounded-tr-xl" : "rounded-r-xl"}`}
              >
                {" "}
                <span>{item.question}</span>{" "}
                <Image
                  className=""
                  src={"/about/faq/arrow.svg"}
                  alt="FAQ Interactive Arrow"
                  width={12}
                  height={5}
                ></Image>{" "}
              </h4>
              <p
                className={` font-normal text-base  rounded-b-xl bg-[#DD272D] overflow-hidden transition-all ease-out ${opened === i ? "w-full h-full p-8" : "h-0 p-0 m-0"}`}
              >
                {" "}
                <span
                  className={` transition-all delay-1000 ${opened === i ? "w-full" : "w-0 h-0"}`}
                >
                  {item.answer}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default FAQ;
