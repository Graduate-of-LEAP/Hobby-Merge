"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const paths = [
  {
    id: "1 ",
    path: "/post",
    pathname: "Your Post",
  },
  {
    id: "2 ",
    path: "/notif",
    pathname: "Notifications",
  },
];
export const PostHeader = () => {
  const pathname = usePathname();
  return (
    <div className="border container flex justify-between px-12 py-5 w-screen bg-[#D8EBF5] rounded-2xl">
      <div className="flex gap-6 items-center">
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
        {paths.map((path) => (
          <Link href={path.path}>
            <button
              className={`text-black text-lg font-semibold ${
                pathname === path.path ? "underline underline-offset-4" : "none"
              }`}
            >
              {path.pathname}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
