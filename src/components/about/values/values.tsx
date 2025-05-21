import { values } from "@/src/content/values";
import Image from "next/image";
import React from "react";

const Values = () => {
  return (
    <div className="w-3/4 mx-auto text-center flex flex-col md:flex-row py-36 md:py-0">
      {values.map((value) => {
        return (
          <div key={value.img} className="my-12 md:pt-44 md:pb-32 rounded-3xl">
            <div className="flex flex-col items-center justify-center border-[#c3c3c3]">
              <Image
                src={`/about/values/${value.img}`}
                alt="Transparency icon"
                height={323}
                width={323}
              ></Image>
              <h5 className="text-xl font-extrabold"> {value.title} </h5>
              <p className="font-medium text-lg px-12 mt-6 hidden lg:block">
                {" "}
                {value.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Values;
