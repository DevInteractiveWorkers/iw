"use client";
import Image from "next/image";
import React, { useState } from "react";
import SmallForm from "../form/smallForm";

const PopUp = () => {
  const [hidden, setHidden] = useState<boolean>(false);
  return (
    <div
      id="alert-additional-content-1"
      className={`fixed ${hidden ? "opacity-0 hidden" : "opacity-100"} max-h-[80vh] overflow-y-auto overflow-x-hidden md:overflow-visible transition-opacity z-[50] left-1/2 -translate-x-1/2 w-11/12 md:w-auto pb-8 mb-4 md:max-w-2xl  border border-blue-300 rounded-lg bg-blue-50 text-iw-red-2 text-justify`}
      role="alert"
    >
      <div className="flex items-start">
        <Image
          className="w-1/3 -ml-4"
          src={"/home/discount.png"}
          alt="Discount Tag"
          width={1277}
          height={1317}
        ></Image>
        <div className="mt-2 mb-4 text-base mx-auto basis-3/5">
          <h3 className="text-4xl font-bold uppercase text-iw-red-2">
            Special Offer
          </h3>
          <p className="mt-4 text-left md:text-justify">
            Get a <b>special discount</b>, 20% off on your first service with
            our virtual assistants
          </p>
        </div>
      </div>
      <SmallForm setHidden={setHidden}></SmallForm>
    </div>
  );
};

export default PopUp;
