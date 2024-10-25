"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PiArrowFatLinesRightBold } from "react-icons/pi";
import { useEffect, useState } from "react";
export const PostFooter = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleUpload = async () => {
      if (!image) return;
      setLoading(true);

      const formData = new FormData();
      formData.append("image", image);
    };
  });
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
          <FaRegFaceSmileWink className="w-8 h-8 -ml-28" />
          <PiArrowFatLinesRightBold className="w-8 h-8 hidden" />
          {/* <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}
          <BsImage className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
