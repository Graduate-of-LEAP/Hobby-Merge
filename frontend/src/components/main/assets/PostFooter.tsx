"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { PiArrowFatLinesRightBold } from "react-icons/pi";

export const PostFooter = () => {
  return (
    <div className="w-screen border container px-12 py-9 bg-[#D8EBF5] rounded-2xl flex items-center">
      <div className="border flex items-center ">
        <div className="absolute z-10 w-14 h-14 ">
          <Image
            src={"/1.jpg"}
            fill
            alt="client image"
            className="rounded-full ml-7"
          />
        </div>
      </div>
      <Input
        placeholder="Share something . . ."
        className="px-7 py-12 bg-white relative w-full pl-28 rounded-xl placeholder:text-lg text-lg text-black"
      />
      <div className="flex justify-around items-center">
        <div className="flex gap-6 absolute">
          <FaRegFaceSmileWink className="w-8 h-8 -ml-44" />
          <BsImage className="w-8 h-8" />
          <PiArrowFatLinesRightBold className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
