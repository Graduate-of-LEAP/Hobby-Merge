"use client";
import React from "react";
import Image from "next/image";
import { RiHome4Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const paths = [
  {
    name: "News Feed",
    path: "/",
    icon: <RiHome4Line />,
  },
  {
    name: "Settings",
    path: "/",
    icon: <IoSettingsOutline />,
  },
  {
    name: "Wait List",
    path: "/",
    icon: <FaList />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <FaRegHeart />,
  },
];

const user = [
  { image: "/2.jpg", avatarImg: "/active.svg", name: "Hongoroo" },
  { image: "/1.jpg", avatarImg: "/active.svg", name: "Turuu" },
  { image: "/car.jpg", avatarImg: "/active.svg", name: "Baynaa" },
  { image: "/2.jpg", avatarImg: "/active.svg", name: "Dulguun" },
  { image: "/1.jpg", avatarImg: "/active.svg", name: "Gerlee" },
  { image: "/car.jpg", avatarImg: "/active.svg", name: "Tom Turuu" },
];

export const SideBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const pathname = usePathname();

  const handleClearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="w-[260px] flex flex-col justify-between">
      <div className="w-[260px] text-xl flex flex-col items-center py-4 bg-[#d8ebf5] rounded-xl">
        <Image src={"./logo.svg"} alt="d" width={115} height={91} />
        <div className="w-[128px] h-[128px] border border-black rounded-full relative">
          <Link href="/profile">
            <Image
              className="rounded-full"
              src="/profile.jpg"
              alt="pro"
              objectFit="cover"
              layout="fill"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold">Dulguun</h1>
          <p className=" text-sm text-[#6c767b]">@Dulguun...</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 p-5">
        {paths.map((item, index) => {
          return (
            <button
              key={index}
              className={`w-[204px] ${
                pathname === item.path ? "bg-white" : "bg-[#d8ebf5]"
              } h-[38px] border rounded-2xl hover:bg-[#d8ebf5] flex items-center justify-center gap-3 font-bold`}
            >
              {item.icon} {item.name}
            </button>
          );
        })}
      </div>
      <div className="w-full h-[320px] border bg-[#d8ecf7] flex flex-col gap-3 p-4 rounded-xl font-bold">
        Active status
        <div className="w-full space-y-1 overflow-y-scroll flex flex-col gap-2">
          {user.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[162px] h-[68px] rounded-xl flex gap-3 relative"
              >
                <div className="w-[56px] h-[56px] relative">
                  <Image
                    className="rounded-full"
                    src={item.image}
                    alt="h"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <Image
                  className="rounded-full absolute bottom-0 ml-8"
                  src={item.avatarImg}
                  alt="h"
                  width={20}
                  height={20}
                />
                <div className="flex justify-center items-center">
                  <h1>{item.name}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-sm flex items-center">
          <input
            className="w-[204px] h-[40px] border bg-white rounded-xl p-3 font-sans"
            placeholder="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue && (
            <IoMdCloseCircle
              className="text-xl cursor-pointer"
              onClick={handleClearSearch}
            />
          )}
        </div>
      </div>
    </div>
  );
};
