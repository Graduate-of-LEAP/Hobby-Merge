"use client";

import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import {
  BsCamera,
  BsHouse,
  BsSendArrowUpFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { GiBrokenHeartZone } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import { infos, items, posts } from "./MockData";
import { useState } from "react";

const HomePage = () => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [infoSelect, setInfoSelect] = useState<number>(1);

  const handleSelect = (id: number) => {
    setSelectedId(id);
  };
  const handleSelectInfo = (id: number) => {
    setInfoSelect(id);
  };
  return (
    <div className="container m-auto h-screen border-2">
      <div className="flex h-screen">
        <div className="w-[300px] p-6 h-screen bg-white flex flex-col gap-10">
          <div className="grid gap-5 justify-center">
            <p className="text-3xl font-semibold text-[#1b2468]">Hobby Merge</p>
            <div className="flex flex-col justify-center gap-2">
              <div className="w-32 h-32 rounded-full border-2 m-auto border-[#1b2468] relative overflow-hidden">
                <Image
                  src="/profile.jpg"
                  fill
                  alt="zurag"
                  className="object-cover "
                />
              </div>
              <p className="text-[18px] m-auto text-[#1b2468]">Dulguun</p>
            </div>
          </div>
          <div className="h-fit grid gap-3 content-start">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`flex gap-4 items-center ${
                  selectedId === item.id
                    ? "bg-[#1b2468] text-white"
                    : " border text-[#1b2468] border-[#1b2468]"
                } rounded-xl px-4 py-2 justify-center cursor-pointer`}
              >
                <BsHouse className="font-semibold w-5 h-5" />
                <p className="font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="h-screen bg-[#e1eaf8] py-4 rounded-tl-3xl rounded-br-3xl">
            <div className="flex gap-2 border items-center justify-center font-semibold text-[#1b2468]">
              <FaRegPenToSquare className="font-semibold" />
              <p>Note</p>
            </div>
            <div className="py-8 px-4 grid gap-6">
              <div className="border-b border-dashed border-[#1b2468]"></div>
              <div className="border-b border-dashed border-[#1b2468]"></div>
              <div className="border-b border-dashed border-[#1b2468]"></div>
              <div className="border-b border-dashed border-[#1b2468]"></div>
              <div className="border-b border-dashed border-[#1b2468]"></div>
              <div className="border-b border-dashed border-[#1b2468]"></div>
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col h-screen justify-between w-[1000px]">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <div className="border-2 w-14 h-14 rounded-full bg-white border-[#1b2468] relative">
                <Image
                  src="/profile.jpg"
                  fill
                  alt="zurag"
                  className="rounded-full object-cover"
                />
              </div>
              <p className="font-semibold text-[#1b2468] text-xl">
                Car collection feeds
              </p>
            </div>
            <div className="flex items-center gap-6">
              {/* <p className=" border-2 rounded-lg px-2 bg-[#1b2468] text-white border-[#1b2468]">
                Your post
              </p>
              <p className=" text-[#1b2468] border-2 rounded-lg px-2 border-[#1b2468]">
                Notifications
              </p> */}
              {infos.map((info) => (
                <div
                  key={info.id}
                  onClick={() => handleSelectInfo(info.id)}
                  className={`flex gap-4 items-center ${
                    infoSelect === info.id
                      ? "bg-[#1b2468] text-white"
                      : " border text-[#1b2468] border-[#1b2468]"
                  } rounded-xl px-4 py-2 justify-center cursor-pointer`}
                >
                  {info.text}
                </div>
              ))}
            </div>
          </div>
          <div className="h-fit grid gap-4">
            <div>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className={`h-[${post.height}] bg-[${post.bgColor}] py-4 px-8 flex flex-col gap-4 container rounded-tr-3xl rounded-bl-3xl border`}
                >
                  <div className="flex items-center justify-between border-b border-[#1b2468] pb-2">
                    <div className="flex gap-2">
                      <div className="w-14 h-14 rounded-full bg-white border-[#1b2468] relative">
                        <Image
                          src={post.profilePic}
                          fill
                          alt="profile"
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex flex-col text-sm gap-x-2 text-white">
                        <p className="font-semibold text-[#1b2468] text-xl">
                          {post.user}
                        </p>
                        <p className="text-gray-400">{post.time}</p>
                      </div>
                    </div>
                    <div>
                      <BsThreeDotsVertical className="w-6 h-6 text-[#1b2468]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="h-fit px-3 text-[#1b2468]">
                      <p>{post.content}</p>
                    </div>

                    {post.images.length > 0 && (
                      <div className="grid grid-cols-3 grid-rows-1 pl-12">
                        {post.images.map((image, index) => (
                          <div
                            key={index}
                            className={`${
                              image
                                ? "relative"
                                : "border-2 border-dashed border-[#1b2468]"
                            } h-28 w-48 rounded-lg`}
                          >
                            {image && (
                              <Image
                                src={image}
                                fill
                                alt="post image"
                                className="rounded-lg"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-4 justify-end">
                      <div className="flex items-center gap-2 text-[#1b2468]">
                        <GiBrokenHeartZone />
                        <p className="font-semibold">Like</p>
                      </div>
                      <div className="flex items-center gap-2 text-[#1b2468]">
                        <TfiCommentAlt />
                        <p className="font-semibold">Comment</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1b2468] flex mt-16 border py-4 justify-center">
            <div className="bg-white  flex justify-between p-2 m-2 rounded-xl flex-1 items-center ">
              <div className="flex gap-3 items-center">
                <MdMenu />
                <input className=" " placeholder="write" />
              </div>
              <BiSearch />
            </div>
            <div className="px-2 m-2 rounded-full bg-white flex items-center">
              <BsSendArrowUpFill />
            </div>
          </div>
        </div>

        <div className="flex flex-col h-screen justify-between bg-white w-[400px]">
          <div className="grid gap-9">
            <div className="flex justify-center py-4">
              <div className="border-2 border-[#1b2468] flex justify-between gap-8 py-2 px-2 m-2 rounded-xl items-center bg-[#1b2468] text-white">
                <div className="flex gap-8 items-center">
                  <MdMenu className="w-6 h-6" />
                  <input className="bg-[#1b2468]" placeholder="write" />
                </div>
                <BiSearch className="w-6 h-6" />
              </div>
              {/* <div className="p-2 m-2 rounded-full bg-white ">
                <BiChevronRight />
              </div> */}
            </div>
            <div className="grid gap-5 pb-64 pt-7 mx-6 px-5 bg-[#e1eaf8] rounded-tr-3xl rounded-bl-3xl ">
              <p className="font-semibold text-[20px] px-4 text-[#1b2468] border-b border-[#1b2468] pb-2 border-dashed">
                Suggestions
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-14 h-14 rounded-full relative bg-white">
                    <Image
                      src="/uul.jpeg"
                      fill
                      alt="zurag"
                      className="rounded-full"
                    />
                  </div>
                  <p className="font-semibold text-[#1b2468]">Travel</p>
                </div>
                <div className="border w-fit h-fit px-3 rounded-lg bg-[#1b2468] text-white">
                  follow
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-14 h-14 rounded-full bg-white relative">
                    <Image
                      src="/car.webp"
                      fill
                      alt="zurag"
                      className="rounded-full"
                    />
                  </div>
                  <p className="font-semibold text-[#1b2468]"> Car</p>
                </div>
                <div className="border-2 w-fit h-fit px-3 rounded-lg border-[#1b2468]">
                  follow
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#1b2468] border-dashed bg-white"></div>
                  <p className="font-semibold text-[#1b2468]"> Engirees</p>
                </div>
                <div className="border w-fit h-fit px-3 rounded-lg bg-[#1b2468] text-white">
                  follow
                </div>
              </div>
            </div>
          </div>
          <div className="mx-6">
            <div className="flex justify-between py-2 px-3  bg-[#1b2468] rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className=" w-11 h-11 rounded-full bg-white relative">
                  <Image
                    src="/1.jpg"
                    fill
                    alt="zurag"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col text-sm text-white">
                  <h1>Dulguun</h1>
                  <p className="text-gray-400">5 minute age</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <BsCamera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <BsThreeDotsVertical className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="grid gap-3 py-16 px-3 border-2 border-[#1b2468]">
              <div className="flex gap-2 ">
                <div className="border border-[#1b2468] w-[40px] h-[40px] rounded-full relative">
                  <Image
                    src="/2.jpg"
                    fill
                    alt="zurag"
                    className="rounded-full"
                  />
                </div>
                <div className="border w-20 h-10 rounded-lg bg-[#d0d0e6]">
                  hi
                </div>
              </div>
              <div className="flex gap-2 ml-auto">
                <div className="border w-20 h-10 rounded-lg bg-[#d0d0e6]">
                  hello
                </div>
                <div className="border border-[#1b2468] w-[40px] h-[40px] rounded-full relative">
                  <Image
                    src="/zurag.jpg"
                    fill
                    alt="zurag"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="border border-[#1b2468] w-[40px] h-[40px] rounded-full relative">
                  <Image
                    src="/2.jpg"
                    fill
                    alt="zurag"
                    className="rounded-full"
                  />
                </div>
                <div className="border w-20 h-10 rounded-lg bg-[#d0d0e6]"></div>
              </div>
            </div>
            <div className=" bg-[#1b2468] flex justify-center">
              <div className="bg-white flex justify-between py-2 px-5 m-2 rounded-xl items-center">
                <div className="flex gap-3 items-center">
                  <MdMenu />
                  <input className=" " placeholder="write" />
                </div>
                <BsSendArrowUpFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
