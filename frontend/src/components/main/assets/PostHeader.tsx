"use client";
import { useHobby } from "@/components/utils/HobbyProvider";
import Image from "next/image";
import React from "react";

export const PostHeader = () => {
  const { hobby, setReciver } = useHobby();
  return (
    <div className="border flex justify-between px-12 py-5  bg-[#D8EBF5] rounded-2xl">
      <div onClick={() => setReciver(undefined)} className="flex gap-6 items-center w-full">
        <div className="relative w-20 h-20 rounded-full ">
          <Image
            src={hobby.cover_image || "/2.jpg"}
            fill
            style={{ objectFit: 'cover' }}
            alt="collection image"
            className="rounded-full"
          />
        </div>
        <button className="text-black text-2xl font-bold">
          {hobby.name}
        </button>
      </div>
      <div className="flex gap-11 items-center">
        <button className="text-black text-lg font-semibold hover:underline underline-offset-4">
          Notifications
        </button>
      </div>
    </div>
  );
};
