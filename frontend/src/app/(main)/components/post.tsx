
"use client"
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { posts as mockPosts } from "./MockData";
import { BsSendArrowUpFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { GiBrokenHeartZone } from "react-icons/gi";
import { TfiCommentAlt } from "react-icons/tfi";
import { MdMenu } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

// Define Post type
interface Post {
  comment: string;
  like: string;
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

export const PostCard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [newPostContent, setNewPostContent] = useState<string>("");
  const [newPostImages, setNewPostImages] = useState<string[]>([]);

  const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newPost: Post = {
        id: posts.length + 1,
        user: "Current User", 
        profilePic: "/path/to/profilePic.jpg", 
        content: newPostContent,
        images: newPostImages,
        time: "Just now",
        height: "auto",
        bgColor: "#ffffff",
        viewcount: 0,
        comment: "",
        like: ""
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent("");
    setNewPostImages([""]); 
  };

  return (
    <div>
      <div className="h-fit grid ">
        <div>
          {posts.map((post) => (
            <div
              key={post.id}
              className={`h-fit bg-[${post.bgColor}] py-4 px-8 flex flex-col gap-4 container rounded-tr-3xl rounded-bl-3xl border`}
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
                  <BsThreeDotsVertical className="w-6 h-6 text-[#1b2468]"  />
                </div>
              </div>

              <div className="flex flex-col gap-5 rounded ">
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
                <div className="flex gap-8 justify-end">
                  <div className="flex items-center gap-2 text-[#1b2468]">
                    <FaEye />
                    <p className="font-semibold">{post.viewcount}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#1b2468]">
                    <GiBrokenHeartZone />
                    <p className="font-semibold">{post.like}like</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#1b2468]">
                    <TfiCommentAlt />
                    <p className="font-semibold">{post.comment}Comment</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#1b2468] flex mt-16 border py-4 justify-center">
        <form className="bg-white flex justify-between p-2 m-2 rounded-xl flex-1 items-center" onSubmit={handleCreatePost}>
          <div className="flex gap-3 items-center">
            <MdMenu />
            <input 
              className="flex-1 w-full"
              placeholder="Write something..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
          </div>
          <button type="submit" className="px-2 m-2 rounded-full bg-white flex items-center">
            <BsSendArrowUpFill />
          </button>
        </form>
      </div>
    </div>
  );
};
