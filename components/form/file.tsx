import { CustomFlowbiteTheme, FileInput } from "flowbite-react";
import Image from "next/image";
import React from "react";

const File = ({ fileFunction }: { fileFunction: Function }) => {
  return (
    <div className="w-full">
      <h4 className="my-4 text-center">Attach your resumee here:</h4>
      <label
        htmlFor="file"
        className="flex justify-between items-center w-full bg-[#333333] text-[#999999] py-2 px-4 rounded-xl"
      >
        Upload cv*{" "}
        <Image
          className="inline"
          src={"/contact/upload-cv-icon.svg"}
          alt="Upload your CV icon"
          width={26}
          height={26}
        ></Image>
      </label>
      <FileInput className="hidden" id="file" />
    </div>
  );
};

export default File;
