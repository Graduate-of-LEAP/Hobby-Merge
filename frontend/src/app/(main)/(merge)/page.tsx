"use client"
import { PostCard } from "@/components/main/assets/post";
import { PostFooter } from "@/components/main/assets/PostFooter";
import { PostHeader } from "@/components/main/assets/PostHeader";

export default function Home() {
  return (
    <div>
      {/* <HomePage /> */}
      <PostHeader />
      <PostCard/>
      <PostFooter />
    </div>
  );
}
