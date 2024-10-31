"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mockposts } from "./MockData";
import { BsSendArrowUpFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaEye } from "react-icons/fa";
import { GiBrokenHeartZone } from "react-icons/gi";
import { TfiCommentAlt } from "react-icons/tfi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdDeleteForever } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { PiArrowFatLinesRightBold } from "react-icons/pi";

interface Post {
  comment: string[];
  like: string;
  id: number;
  user: string;
  profilePic: string;
  content: string;
  images: string[];
  time: string;
  height: string;
  viewcount: number;
}
interface Comments {
  id: number;
  user: string;
  profilePic: string;
  content: string;
  time: string;
  height: string;
  reply: string;
  like: string;
}

export const PostCard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(Mockposts);
  const [newPostContent, setNewPostContent] = useState<string>("");
  const [newCommentContent, setNewCommentContent] = useState<string>("");
  const [newPostImages, setNewPostImages] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState<{ [key: number]: string }>(
    {}
  );
  const [activeCommentPost, setActiveCommentPost] = useState<number | null>(
    null
  );

  const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: Post = {
      id: posts.length + 1,
      user: "User",
      profilePic: "/path/to/profilePic.jpg",
      content: newPostContent,
      images: newPostImages,
      time: "Just now",
      height: "auto",
      viewcount: 0,
      comment: [],
      like: "",
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
    setNewPostImages([]);
  };

  const handleCommentToggle = (postId: number) => {
    setActiveCommentPost(activeCommentPost === postId ? null : postId);
  };

  const handleCommentSubmit = (
    postId: number,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comment: [...post.comment, commentInput[postId]],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    setCommentInput((prev) => ({ ...prev, [postId]: "" }));
    setActiveCommentPost(null);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="h-fit flex justify-center">
        <div>
          {posts.map((post) => (
            <div
              key={post.id}
              className="h-fit py-4 px-5 flex flex-col gap-10 container rounded-2xl border mt-5 bg-[#D8EBF5] w-screen"
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
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="border-none rounded-none">
                      <BsThreeDotsVertical className="w-6 h-6 " />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mb-4 mr-48 bg-[#406b81] text-teal-50  flex flex-col gap-5 p-4">
                      <DropdownMenuGroup className="flex items-center gap-5 border-b-2 ">
                        <FaEdit size={24} />
                        edit
                      </DropdownMenuGroup>
                      <DropdownMenuGroup className="flex items-center gap-5 border-b-2">
                        <MdDeleteForever size={24} />
                        delete
                      </DropdownMenuGroup>
                      <DropdownMenuGroup className="flex items-center gap-5 border-b-2">
                        <SiGnuprivacyguard size={24} />
                        privacy
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex flex-col rounded">
                <div className="h-fit px-3 text-[#1b2468]">
                  <p>{post.content}</p>
                </div>
                {post.images.length > 0 && (
                  <div className=" w-[full] p-10 ">
                    {post.images.map((image, index) => (
                      <div
                        key={index}
                        className={`relative h-[250px] w-full p- rounded-lg`}
                      >
                        {image && (
                          <Image
                            src={image}
                            fill
                            alt="post image"
                            className="rounded-lg object-cover "
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
                    <p className="font-semibold">{post.like}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#1b2468]">
                    <TfiCommentAlt
                      onClick={() => handleCommentToggle(post.id)}
                    />
                    <p className="font-semibold">{post.comment}</p>
                  </div>
                </div>

                {activeCommentPost === post.id && (
                  <form
                    onSubmit={(e) => handleCommentSubmit(post.id, e)}
                    className="flex mt-2"
                  >
                    <input
                      value={commentInput[post.id] || ""}
                      onChange={(e) =>
                        setCommentInput({
                          ...commentInput,
                          [post.id]: e.target.value,
                        })
                      }
                      placeholder="Add a comment..."
                      className="flex-1 p-2 border border-gray-300 rounded mb-2"
                    />
                    <button
                      type="submit"
                      className="ml-2 bg-blue-500 text-white rounded px-5"
                    >
                      <BsSendArrowUpFill />
                    </button>
                  </form>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div div className="w-screen border container px-12 py-9 bg-[#D8EBF5] rounded-2xl flex flex-col">
  <form onSubmit={handleCreatePost} className="mb-2 flex flex-col w-full">
    <div className="flex items-start">
      <div className="relative w-14 h-14 mr-4">
        <Image
          src={"/1.jpg"}
          fill
          alt="client image"
          className="rounded-full"
        />
      </div>
      <textarea
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
        placeholder="Write here?"
        className="flex-1 px-4 py-2 rounded-xl placeholder:text-lg text-lg text-black min-h-[100px] max-h-[100px] resize-none"
      />
    </div>
    <div className="flex mt-2">
      {newPostImages.map((image, index) => (
        <div key={index} className="relative h-20 w-20 mr-2">
          <Image
            src={image}
            fill
            alt={`Preview ${index + 1}`}
            className="rounded-lg object-cover"
          />
        </div>
      ))}
      <input
        type="file"
        multiple
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          const imageUrls = files.map((file) =>
            URL.createObjectURL(file)
          );
          setNewPostImages((prevImages) => [...prevImages, ...imageUrls]);
        }}
        className="ml-2"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white rounded px-4">
        <PiArrowFatLinesRightBold className="w-8 h-8" />
      </button>
    </div>
  </form>
  </div>
  </div>


  );
};
