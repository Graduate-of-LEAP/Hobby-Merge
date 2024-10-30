"use client";

import { Input } from "@/components/ui/input";
import { api } from "@/lib/axios";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { BsImage } from "react-icons/bs";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { PiArrowFatLinesRightBold } from "react-icons/pi";

export const PostFooter = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) setImage(files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();

    formData.append("image", image);

    const res = await api.post("/upload", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    const uploadImages = [...imageUrl, res.data.secure_url];
    setImageUrl(uploadImages);

    setLoading(false);
    console.log(image);
  };

  return (
    <div className=" border container px-12 py-9 bg-[#D8EBF5] rounded-2xl flex items-center">
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
      <div className="flex justify-around items-center border">
        <div className="flex gap-6 absolute  bg-slate-800">
          <FaRegFaceSmileWink className="w-8 h-8 -ml-44" />
          <BsImage className="w-8 h-8" />

          <PiArrowFatLinesRightBold className="w-8 h-8" />
        </div>
      </div>
      <div>
        <input type="file" onChange={handleChangeFile} />
        <button onClick={handleUpload}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};
