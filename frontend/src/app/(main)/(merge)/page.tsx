"use client"
import { PostFooter } from "@/components/main/assets/PostFooter";
import { PostHeader } from "@/components/main/assets/PostHeader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TfiCommentAlt } from "react-icons/tfi";
import { GiBrokenHeartZone } from "react-icons/gi";
import { FaEye } from "react-icons/fa6";
interface Post {
  comment: string[];
  id: number;
  user: string;
  profilePic: string;
  content: string;
  images: string[];
  time: string;
  height: string;
  bgColor: string;
  viewcount: number;
}
const Mockposts: Post[] = [
  {
    id: 1,
    user: "Bataa",
    time: "5 minutes ago",
    profilePic: "/1.jpg",
    content: "Hello",
    images: ["/2.jpg"],
    bgColor: "#c8daf7",
    height: "250px",
    comment: [],
    viewcount: 0,
  },
  {
    id: 2,
    user: "Bataa",
    time: "10 minutes ago",
    profilePic: "/1.jpg",
    content: "Hi again!",
    images: ["/2.jpg"],
    bgColor: "#c8daf7",
    height: "250px",
    comment: [],
    viewcount: 0,
  },
];
export default function Post() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    setPosts(Mockposts)
  }, [])
  return (
    <div className="flex flex-col justify-between w-full">
      <PostHeader />
      <div className="overflow-y-scroll py-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="h-fit py-4 px-5 flex flex-col gap-10 container rounded-2xl border mt-5 bg-[#D8EBF5]"
          >
            <div className="flex items-center justify-between">
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
            </div>

            <div className="flex flex-col rounded">
              <div className="h-fit px-3 text-[#1b2468]">
                <p>{post.content}</p>
              </div>

              {post.images.length > 0 && (
                <div className="flex w-[771px] p-[30px] ">
                  {post.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative h-[250px] w-full rounded-lg`}
                    >
                      {image && (
                        <Image
                          src={image}
                          fill
                          alt="post image"
                          className="rounded-lg object-fill"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-8 justify-end">
                <div className="flex items-center gap-2 text-[#1b2468]">
                  <FaEye />
                  <p className="font-semibold">{post.viewcount}</p>
                </div>
                <div className="flex items-center gap-2 text-[#1b2468]">
                  <GiBrokenHeartZone />
                  <p className="font-semibold"></p>
                </div>
                <div className="flex items-center gap-2 text-[#1b2468]">
                  <TfiCommentAlt
                  />
                  <p className="font-semibold">{post.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PostFooter />
    </div>
  );
};