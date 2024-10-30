"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const PostHeader = () => {
  const pathname = usePathname();
  return (
    <div className="border flex justify-between px-12 py-5  bg-[#D8EBF5] rounded-2xl">
      <div className="flex gap-6 items-center w-full">
        <div className="relative w-20 h-20 rounded-full ">
          <Image
            src={"/2.jpg"}
            fill
            alt="collection image"
            className="rounded-full"
          />
        </div>
        <button className="text-black text-2xl font-bold">
          Car Collection Feeds
        </button>
      </div>
      <div className="flex gap-11 items-center">
        <button className="text-black text-lg font-semibold hover:underline underline-offset-4">
          Your Post
        </button>
        <button className="text-black text-lg font-semibold hover:underline underline-offset-4">
          Notifications
        </button>
      </div>
    </div>
  );
};
